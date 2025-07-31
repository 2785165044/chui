import { _decorator, clamp01, Component, Node, Vec3 } from "cc";
import { EnumGearState, EnumTaskStep, EnumWheelState } from "../Enum/EnumControllerState";
import NPC from "../NPC/NPC";
import NPCManager from "../NPC/NPCManager";

import GameWheel from "../wheel/GameWheel";
import FlyCamera from "../Fly/FlyCamera";
import AudioManager, { AudioType } from "../../Base/AudioManager";
import TaskManager from "./TaskManager";
import { DEBUG } from "cc/env";
import GameManager from "../Main/GameManager";
import GameData from "../Main/GameData";
const { ccclass, property } = _decorator;

/** 任务 */
@ccclass("TaskItem")
export default class TaskItem extends Component {

    /** 当前步骤 */
    public step: EnumTaskStep = EnumTaskStep.null;
    /** 下一步骤 */
    public nextStep: EnumTaskStep = EnumTaskStep.null;
    /** 提示语 */
    public notes: string = "";
    /** 方向盘引导状态 */
    public wheelGuideState: EnumWheelState = EnumWheelState.null;
    /** 档位引导状态 */
    public gearGuideState: EnumGearState = EnumGearState.null;
    /** 方向盘是否锁定 */
    public isWheelLock: boolean = false;
    /** 档位是否锁定 */
    public isGearLock: boolean = false;
    /** 路径 */
    public path: Node[] = [];
    /** 任务是否完成 */
    public isComplete: boolean = false;

    public curIndex: number = -1;
    public curTarget: Node = null;
    public nextTarget: Node = null;
    public pathNodes: Node[] = [];
    public _pathDistances: number[] = [];
    public _pathProgress: number[] = [];
    public progress: number = 0;
    public distance: number = 0;
    public totalDistance: number = 0;

    private _npc: NPC = null;
    public isTouchWheel: boolean = false;

    /**
     * @param step 当前步骤
     * @param nextStep 下一步骤
     * @param notes 提示语
     * @param wheelGuideState 方向盘引导状态
     * @param gearGuideState 档位引导状态
     * @param isWheelLock 方向盘是否锁定
     * @param isGearLock 档位是否锁定
     * @param path 路径
     */
    public init(
        step: EnumTaskStep,
        nextStep: EnumTaskStep,
        notes: string,
        wheelGuideState: EnumWheelState,
        gearGuideState: EnumGearState,
        isWheelLock: boolean,
        isGearLock: boolean,
        path: Node[]
    ) {
        this.step = step;
        this.nextStep = nextStep;
        this.notes = notes;
        this.wheelGuideState = wheelGuideState;
        this.gearGuideState = gearGuideState;
        this.isWheelLock = isWheelLock;
        this.isGearLock = isGearLock;
        this.path = path;
        this.isComplete = false;
        this.isTouchWheel = this.wheelGuideState != EnumWheelState.right && this.wheelGuideState != EnumWheelState.left;
        this.onInitLine();
    }

    public reset() {
        this.step = EnumTaskStep.null;
        this.nextStep = EnumTaskStep.null;
        this.notes = "";
        this.wheelGuideState = EnumWheelState.null;
        this.gearGuideState = EnumGearState.null;
        this.isWheelLock = false;
        this.isGearLock = false;
        this.isComplete = false;
        this.isComplete = false;
        this.path = null;
        this.curIndex = -1;
        this.curTarget = null;
        this.nextTarget = null;
        this.pathNodes = [];
        this._pathDistances = [];
        this._pathProgress = [];
        this.progress = 0;
        this.distance = 0;
        this.totalDistance = 0;
    }

    private onInitLine() {
        if (this.path == null) {
            return
        }
        this.pathNodes.length = 0;
        this.path.forEach((item) => {
            if (item.active) {
                this.pathNodes.push(item);
            }
        })
        this.curIndex = -1;
        this.generatePathData();
        this.refreshIndexPath(0);
    }

    public generatePathData() {
        let fullDistance = 0;
        for (let i = 0; i < this.pathNodes.length; i++) {
            const curNode = this.pathNodes[i];
            const nextNode = this.pathNodes[(i + 1)];
            if (curNode == null || nextNode == null) break;
            let distance = Vec3.distance(curNode.worldPosition, nextNode.worldPosition);
            fullDistance += distance;
            this._pathDistances.push(fullDistance);
        }
        this.totalDistance = fullDistance;

        this._pathProgress.length = 0;
        for (let i = 0; i < this._pathDistances.length; i++) {
            const distance = this._pathDistances[i];
            let progress = distance / fullDistance;
            this._pathProgress.push(progress);
        }
    }

    public refreshIndexPath(curIndex: number) {
        if (this.curIndex == curIndex) return;
        this.curIndex = curIndex;
        if (this.curIndex >= this.pathNodes.length) {
            this.curTarget = this.pathNodes[this.curIndex];
            this.nextTarget = null;
        } else {
            this.curTarget = this.pathNodes[this.curIndex];
            this.nextTarget = this.pathNodes[this.curIndex + 1];
        }
    }

    public convertProgressToIndex(progress: number) {
        let curIndex = 0; //序号
        let leftProgress = 0;
        for (let i = 0; i < this._pathProgress.length; i++) {
            let pathProgress = this._pathProgress[i];
            let offsetProgress = 0;//单个路径的进度
            if (i == 0) {
                offsetProgress = pathProgress;
            } else {
                offsetProgress = this._pathProgress[i] - this._pathProgress[i - 1];
            }

            if (progress >= pathProgress) {
                curIndex = i + 1;
            } else {
                leftProgress = clamp01(1 - (pathProgress - progress) / offsetProgress);
                break;
            }
        }
        return { index: curIndex, pathProgress: leftProgress };
    }

    public get isCanComplete(): boolean {
        return this.progress >= 0.3;
    }

    public get isCanMove(): boolean {
        return this.path != null && this.isTouchWheel;
    }

    public setFlyPos() {
   
        this.path[0].setWorldPosition(pos);
        this.path[0].setWorldRotationFromEuler(angle.x, angle.y, angle.z);
        this.onInitLine();
    }

    public get npc(): NPC {
        if (this._npc == null) {
            this._npc = NPCManager.inst.getNpcByStep(this.step);
        }
        return this._npc;
    }

    public startTask() {
        if (DEBUG) {
            console.log("**********", this.step, this.notes);
        }
        this.startCallBack();
        if (this.npc) {
            this.npc.startCallBack();
        }
    }

    public setComplete() {
        if (DEBUG) {
            console.log("**********", this.step, this.notes, "complete");
        }
        this.isComplete = true;
        this.endCallBack();
        if (this.npc) {
            this.npc.endCallBack();
        }
    }

    public startCallBack() {
        switch (this.step) {
            case EnumTaskStep.run:
                this.startCallBack_run();
                break;
            case EnumTaskStep.toFly:
                this.startCallBack_toFly();
                break;
            case EnumTaskStep.start:
                this.startCallBack_start();
                break;
            case EnumTaskStep.wheel_right_1:
                this.startCallBack_wheel_right_1();
                break;
            case EnumTaskStep.wait_1:
                this.startCallBack_wait_1();
                break;
            case EnumTaskStep.zhuang_1:
                this.startCallBack_zhuang_1();
                break;
            case EnumTaskStep.wheel_right_4:
                this.startCallBack_wheel_right_4();
                break;
            case EnumTaskStep.fly:
                this.startCallBack_fly();
                break;
            case EnumTaskStep.end:
                this.startCallBack_end();
                break;
            case EnumTaskStep.over:
                this.startCallBack_over();
                break;
        }
    }

    private startCallBack_run() {
        GameManager.inst.gameview.setTips();
        FlyController.inst.onStartRun();
    }

    private startCallBack_toFly() {
        GameData.gearState = EnumGearState.down;
        GameWheel.inst.refreshGearUI2();
    }

    private startCallBack_start() {
        FlyController.inst.onStartFly();
    }

    private startCallBack_wheel_right_1() {

    }

    private startCallBack_wait_1() {
        // FlyController.inst.onUpdateWait1();
        TaskManager.inst.startNextTask();
    }

    private startCallBack_zhuang_1() {

    }

    private startCallBack_wheel_right_4() {
        // this.scheduleOnce(() => {
        //     FlyController.inst.startAddSpeed();
        // }, 3);
        // this.scheduleOnce(() => {
        //     FlyCamera.instance.zhuangJi();
        //     AudioManager.instance.play(AudioType.zhuangji);
        //     FlyController.inst.onUpdateWheelRight4();
        // }, 1.5);
    }

    private startCallBack_fly() {
        FlyController.inst.onUpdateToFly();
        FlyController.inst.onUpdateFly();
        FlyCamera.instance.onUpdateFly();
    }

    private startCallBack_end() {
        FlyController.inst.showZhuangNode();
        FlyController.inst.onUpdateEnd();
        AudioManager.instance.play(AudioType.zhuangji);
        FlyCamera.instance.zhuangJi();
        this.scheduleOnce(() => {
            FlyCamera.instance.onUpdateEnd();
        }, 0.3);
    }

    private startCallBack_over() {
        this.scheduleOnce(() => {
            TaskManager.inst.startNextTask();
        }, 3);
    }

    public endCallBack() {
        switch (this.step) {
            case EnumTaskStep.toFly:
                this.endCallBack_toFly();
                break;
            case EnumTaskStep.init:
                this.endCallBack_init();
                break;
            case EnumTaskStep.start:
                this.endCallBack_start();
                break;
            case EnumTaskStep.wheel_right_1:
                this.endCallBack_wheel_right_1();
                break;
            case EnumTaskStep.wheel_left_1:
                this.endCallBack_wheel_left_1();
                break;
            case EnumTaskStep.wheel_right_2:
                this.endCallBack_wheel_right_2();
                break;
            case EnumTaskStep.wheel_right_3:
                this.endCallBack_wheel_right_3();
                break;
            case EnumTaskStep.wheel_left_2:
                this.endCallBack_wheel_left_2();
                break;
            case EnumTaskStep.fly:
                this.endCallBack_fly();
                break;
            case EnumTaskStep.end:
                this.endCallBack_end();
                break;
        }
    }

    private endCallBack_init() {
        // GameWheel.inst.resetWheel();
    }

    private endCallBack_start() {
        // FlyCamera.instance.zhuangJi();
        GameWheel.inst.resetWheel();
    }

    private endCallBack_wheel_right_1() {
        GameWheel.inst.resetWheel();
    }

    private endCallBack_wheel_left_1() {
        GameWheel.inst.resetWheel();
    }

    private endCallBack_wheel_right_2() {
        GameWheel.inst.resetWheel();
    }

    private endCallBack_wheel_right_3() {
        GameWheel.inst.resetWheel();
    }

    private endCallBack_wheel_left_2() {
        GameWheel.inst.resetWheel();
    }

    private endCallBack_fly() {
        FlyController.inst.stopAddSpeed();
    }

    private endCallBack_end() {
        // FlyController.inst.showZhuangNode();
        FlyCamera.instance.zhuanghui();
        AudioManager.instance.play(AudioType.zhuanghui);
    }

    private endCallBack_toFly() {
        // FlyController.inst.onUpdateToFly();
    }

}