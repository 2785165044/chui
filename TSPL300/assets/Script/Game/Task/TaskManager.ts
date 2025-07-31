import { _decorator, Component, MeshRenderer, Node } from "cc";
import TaskItem from "./TaskItem";
import { EnumGearState, EnumTaskPathIndex, EnumTaskStep, EnumWheelState } from "../Enum/EnumControllerState";
import PoolMgr from "../../Base/PoolMgr";
import GameData from "../Main/GameData";
import GameWheel from "../wheel/GameWheel";
import { DEBUG } from "cc/env";

import AudioManager, { AudioType } from "../../Base/AudioManager";
import FlyCamera from "../Fly/FlyCamera";
import GameManager from "../Main/GameManager";
const { ccclass, property } = _decorator;

/** 任务管理器 */
@ccclass("TaskManager")
export default class TaskManager extends Component {

    @property(Node)
    taskPathNode: Node = null;
    @property(GameWheel)
    gameWheel: GameWheel = null;

    private taskPath: Node[][] = [];
    private _taskList: TaskItem[] = [];
    private _taskDict: object = {};
    private _curTask: TaskItem = null;

    public static inst: TaskManager = null;
    protected onLoad(): void {
        TaskManager.inst = this;
    }

    protected start(): void {
        this.initTaskPath();
        this.initTaskData();
        // GameData.taskStep = EnumTaskStep.init;
        // this.curTask = this.getTask(EnumTaskStep.init);
        GameData.taskStep = EnumTaskStep.runStart;
        this.curTask = this.getTask(EnumTaskStep.runStart);
        this.curTask.startTask();
        this.refreshGuide();
    }

    private initTaskPath() {
        this.taskPathNode.children.forEach((item: Node, idx: number) => {
            this.taskPath[idx] = [];
            item.children.forEach((child: Node) => {
                child.getComponent(MeshRenderer).enabled = DEBUG;
                if (child.active) {
                    this.taskPath[idx].push(child);
                }
            })
        })
    }

    private getPath(idx: number) {
        return this.taskPath && this.taskPath[idx] ? this.taskPath[idx] : null;
    }

    private initTaskData() {
        this.addTask(
            EnumTaskStep.runStart,
            EnumTaskStep.run,
            "等待点击屏幕开始游戏",
            EnumWheelState.null,
            EnumGearState.null,
            false,
            false,
            null
        );
        this.addTask(
            EnumTaskStep.run,
            EnumTaskStep.toFly,
            "行驶到待飞区",
            EnumWheelState.null,
            EnumGearState.null,
            false,
            false,
            null
        );
        this.addTask(
            EnumTaskStep.toFly,
            EnumTaskStep.fly,
            "等待点击起飞",
            EnumWheelState.null,
            EnumGearState.up,
            false,
            false,
            null
        );
        this.addTask(
            EnumTaskStep.init,
            EnumTaskStep.start,
            "等待点击屏幕开始游戏",
            EnumWheelState.left,
            EnumGearState.null,
            false,
            true,
            null
        );
        this.addTask(
            EnumTaskStep.start,
            EnumTaskStep.gear_down_1,
            "开始游戏后自动行驶撞击",
            EnumWheelState.left,
            EnumGearState.null,
            false,
            true,
            this.getPath(EnumTaskPathIndex.start)
        );
        this.addTask(
            EnumTaskStep.gear_down_1,
            EnumTaskStep.wheel_right_1,
            "等待点击后退档位",
            EnumWheelState.space,
            EnumGearState.down,
            false,
            false,
            null
        );
        this.addTask(
            EnumTaskStep.wheel_right_1,
            EnumTaskStep.wait_1,
            "等待向右转动方向盘",
            EnumWheelState.right,
            EnumGearState.null,
            false,
            true,
            this.getPath(EnumTaskPathIndex.wheel_right_1)
        );
        this.addTask(
            EnumTaskStep.wait_1,
            EnumTaskStep.gear_up_1,
            "相撞后等待缓步后退",
            EnumWheelState.stop,
            EnumGearState.null,
            true,
            true,
            // this.getPath(EnumTaskPathIndex.wait_1)
            null
        );
        this.addTask(
            EnumTaskStep.gear_up_1,
            EnumTaskStep.wheel_left_1,
            "等待点击前进档位",
            EnumWheelState.space,
            EnumGearState.up,
            false,
            false,
            null
        );
        this.addTask(
            EnumTaskStep.wheel_left_1,
            EnumTaskStep.gear_down_2,
            "等待向左转动方向盘",
            EnumWheelState.left,
            EnumGearState.null,
            false,
            true,
            this.getPath(EnumTaskPathIndex.wheel_left_1)
        );
        this.addTask(
            EnumTaskStep.gear_down_2,
            EnumTaskStep.wheel_right_2,
            "等待点击后退档位",
            EnumWheelState.space,
            EnumGearState.down,
            false,
            false,
            null
        );
        this.addTask(
            EnumTaskStep.wheel_right_2,
            EnumTaskStep.gear_up_2,
            "等待向右转动方向盘",
            EnumWheelState.right,
            EnumGearState.null,
            false,
            true,
            this.getPath(EnumTaskPathIndex.wheel_right_2)
        );
        this.addTask(
            EnumTaskStep.gear_up_2,
            EnumTaskStep.wheel_right_3,
            "等待点击前进档位",
            EnumWheelState.space,
            EnumGearState.up,
            false,
            false,
            null
        );
        this.addTask(
            EnumTaskStep.wheel_right_3,
            EnumTaskStep.zhuang_1,
            "等待向右转动方向盘",
            EnumWheelState.right,
            EnumGearState.null,
            false,
            true,
            this.getPath(EnumTaskPathIndex.wheel_right_3)
        );
        this.addTask(
            EnumTaskStep.zhuang_1,
            EnumTaskStep.gear_down_3,
            "撞击",
            EnumWheelState.stop,
            EnumGearState.null,
            true,
            true,
            this.getPath(EnumTaskPathIndex.zhuang_1)
        );
        this.addTask(
            EnumTaskStep.gear_down_3,
            EnumTaskStep.wheel_left_2,
            "等待点击后退档位",
            EnumWheelState.space,
            EnumGearState.down,
            false,
            false,
            null
        );
        this.addTask(
            EnumTaskStep.wheel_left_2,
            EnumTaskStep.wait_2,
            "等待向左转动方向盘",
            EnumWheelState.left,
            EnumGearState.null,
            false,
            true,
            this.getPath(EnumTaskPathIndex.wheel_left_2)
        );
        this.addTask(
            EnumTaskStep.wait_2,
            EnumTaskStep.gear_up_3,
            "撞木箱子",
            EnumWheelState.stop,
            EnumGearState.null,
            true,
            true,
            null
        );
        this.addTask(
            EnumTaskStep.gear_up_3,
            EnumTaskStep.wheel_right_4,
            "等待点击前进档位",
            EnumWheelState.space,
            EnumGearState.up,
            false,
            false,
            null
        );
        this.addTask(
            EnumTaskStep.wheel_right_4,
            EnumTaskStep.fly,
            // "等待向右转动方向盘",
            // EnumWheelState.right,
            "等待向左转动方向盘",
            EnumWheelState.left,
            EnumGearState.null,
            false,
            true,
            this.getPath(EnumTaskPathIndex.wheel_right_4)
        );
        this.addTask(
            EnumTaskStep.fly,
            EnumTaskStep.end,
            "起飞",
            EnumWheelState.null,
            EnumGearState.null,
            false,
            true,
            this.getPath(EnumTaskPathIndex.fly)
        );
        this.addTask(
            EnumTaskStep.end,
            EnumTaskStep.over,
            "相撞过程",
            EnumWheelState.null,
            EnumGearState.null,
            false,
            true,
            this.getPath(EnumTaskPathIndex.end)
        );
        this.addTask(
            EnumTaskStep.over,
            EnumTaskStep.null,
            "结束",
            EnumWheelState.null,
            EnumGearState.null,
            true,
            true,
            // this.getPath(EnumTaskPathIndex.over)
            null
        );
    }

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
    private addTask(
        step: EnumTaskStep,
        nextStep: EnumTaskStep,
        notes: string,
        wheelGuideState: EnumWheelState,
        gearGuideState: EnumGearState,
        isWheelLock: boolean,
        isGearLock: boolean,
        path: Node[]
    ) {
        let task: TaskItem = PoolMgr.inst.getClass(TaskItem);
        task.init(step, nextStep, notes, wheelGuideState, gearGuideState, isWheelLock, isGearLock, path);
        this._taskList.push(task);
        this._taskDict[task.step] = task;
    }

    public removeTask(task: TaskItem) {
        if (this._taskList.indexOf(task) != -1) {
            this._taskDict[task.step].reset();
            this._taskList.splice(this._taskList.indexOf(task), 1);
            delete this._taskDict[task.step];
        }
    }

    public getTask(step: EnumTaskStep): TaskItem {
        return this._taskDict[step];
    }

    public getTaskList() {
        return this._taskList;
    }

    public get curTask(): TaskItem {
        return this._curTask;
    }

    public set curTask(task: TaskItem) {
        this._curTask = task;
    }

    /** 开始下一任务阶段 */
    public startNextTask() {
        this.curTask.setComplete();
        if (this._curTask.nextStep == EnumTaskStep.null) {
            console.log("game over");
       
            GameData.isPlayerMove = false;
            GameData.hide_guide = true;
            AudioManager.instance.stop(AudioType.yinqing);
            FlyCamera.instance.gameOver();
            GameManager.inst.gameview.openOver();
            this.scheduleOnce(() => {
                GameManager.inst.gameOver();
            }, 1);
            return;
        }
        this.curTask = this.getTask(this._curTask.nextStep);
        if (this.curTask) {
            GameData.taskStep = this.curTask.step;
            this.curTask.startTask();
            this.refreshGuide();
        }
    }

    /** 刷新引导 */
    private refreshGuide() {
        GameData.gearGudieState = this.curTask.gearGuideState;
        GameData.wheelGuideState = this.curTask.wheelGuideState;
        this.gameWheel.refreshWheelGuideUI();
        this.gameWheel.refreshGearGuideUI();
        this.gameWheel.refreshGearGuideUI2();
    }

}