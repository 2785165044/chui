import { _decorator, Animation, Component, Enum, MeshRenderer, Node, tween, Tween, v3, Vec3 } from "cc";
import { EnumTaskStep } from "../Enum/EnumControllerState";
import NPCFJ, { EnumFeiJi1State } from "./NPCFJ";
import TimeManager from "../../Base/TimeManager";
import EffectCtr from "../Effect/EffectCtr";
import FlyCamera from "../Fly/FlyCamera";
import AudioManager, { AudioType } from "../../Base/AudioManager";

import TaskManager from "../Task/TaskManager";
import { DEBUG } from "cc/env";
const { ccclass, property } = _decorator;

@ccclass("NPC")
export default class NPC extends Component {

    @property({ type: Enum(EnumTaskStep) })
    public step: EnumTaskStep = EnumTaskStep.null;
    @property([Node])
    private nodes: Node[] = [];
    @property([Node])
    private paths: Node[] = [];
    @property([Node])
    private effects: Node[] = [];

    protected start(): void {
        this.paths.forEach((path) => {
            path.children.forEach((child) => {
                child.getComponent(MeshRenderer).enabled = DEBUG;
            })
        })
    }

    public startCallBack() {
        switch (this.step) {
            case EnumTaskStep.start:
                this.startCallBack_start();
                break;
            case EnumTaskStep.wheel_right_1:
                this.startCallBack_wheel_right_1();
                break;
            case EnumTaskStep.zhuang_1:
                this.startCallBack_zhuang_1();
                break;
            case EnumTaskStep.wait_2:
                this.startCallBack_wait_2();
                break;
            case EnumTaskStep.fly:
                this.startCallBack_fly();
                break;
            case EnumTaskStep.end:
                this.startCallBack_end();
                break;
        }
    }

    public endCallBack(type: number = 0) {
        switch (this.step) {
            case EnumTaskStep.start:
                if (type != 0) {
                    this.endCallBack_start();
                } else {
                    // this.endCallBack_start2();
                }
                break;
            case EnumTaskStep.wheel_right_1:
                this.endCallBack_wheel_right_1();
                break;
            case EnumTaskStep.zhuang_1:
                this.endCallBack_zhuang_1();
                break;
        }
    }

    private startCallBack_start() {
        let fj = this.nodes[0].getComponent(NPCFJ);
        let path = this.paths[0];
        fj.onInit(path, this);
        TimeManager.instance.calculateTime(() => {
            EffectCtr.inst.playEffect(this.effects[0]);
        }, 0.5, this.nodes[0]);
        TimeManager.instance.calculateTime(() => {
            AudioManager.instance.play(AudioType.zhuangji);
            let node = this.nodes[1];
            let angle = v3(node.eulerAngles.x, node.eulerAngles.y - 10, node.eulerAngles.z);
            let pos = v3(node.worldPosition.x + 1, node.worldPosition.y, node.worldPosition.z);
            Tween.stopAllByTarget(node);
            tween(node)
                .to(0.1, { eulerAngles: v3(angle.x, angle.y + 10, angle.z + 3), worldPosition: pos })
                .to(0.1, { eulerAngles: angle })
                .start();
        }, 2, this);

        this.scheduleOnce(() => {
            AudioManager.instance.play(AudioType.zhuangji);
            FlyCamera.instance.zhuangJi();
            EffectCtr.inst.playEffect(this.effects[2]);
            let node = this.nodes[1];
            let angle = v3(0, node.eulerAngles.y - 10, 0);
            let pos = v3(node.worldPosition.x + 1, node.worldPosition.y, node.worldPosition.z);
            let pos2 = v3(node.worldPosition.x + 2, node.worldPosition.y, node.worldPosition.z + 2);
            Tween.stopAllByTarget(node);
            tween(node)
                .to(0.1, { eulerAngles: angle, worldPosition: pos })
                .to(0.2, { worldPosition: pos2 })
                .start();
        }, 2.7);
    }

    private endCallBack_start() {
        AudioManager.instance.play(AudioType.zhuangji);
        EffectCtr.inst.playEffect(this.effects[1]);
    }

    private endCallBack_start2() {
        EffectCtr.inst.playEffect(this.effects[2]);
        let node = this.nodes[1];
        let angle = v3(0, node.eulerAngles.y - 10, 0);
        let pos = v3(node.worldPosition.x + 1, node.worldPosition.y, node.worldPosition.z);
        let pos2 = v3(node.worldPosition.x + 2, node.worldPosition.y, node.worldPosition.z + 2);
        Tween.stopAllByTarget(node);
        tween(node)
            .to(0.1, { eulerAngles: angle, worldPosition: pos })
            .to(0.2, { worldPosition: pos2 })
            .start();
    }

    private startCallBack_wheel_right_1() {
        let fj = this.nodes[0].getComponent(NPCFJ);
        let path = this.paths[0];
        fj.onInit(path, this, true);
    }

    private endCallBack_wheel_right_1() {

    }

    public onUpdateWheelRight1() {
        let fj = this.nodes[0].getComponent(NPCFJ);
        if (fj.state != EnumFeiJi1State.Move) {
            this.scheduleOnce(() => {
                AudioManager.instance.play(AudioType.zhuangji);
                FlyCamera.instance.zhuangJi();
              
            }, 0.7);
            this.scheduleOnce(() => {
                EffectCtr.inst.playEffect(this.effects[0]);
                fj.onUpdateWheelRight1();
            }, 0.5);
            this.scheduleOnce(() => {
                EffectCtr.inst.stopEffectOther(this.effects[0]);
            }, 5);
        }
        fj.onUpdateWheelRight1State();
    }

    private startCallBack_zhuang_1() {
        EffectCtr.inst.playEffect(this.effects[0]);
        FlyCamera.instance.zhuangJi();
        AudioManager.instance.play(AudioType.zhuangji);
        // this.nodes[0].active = false;
        // this.nodes[1].active = true;
        let node = this.nodes[0];
        let angle = v3(node.eulerAngles.x, node.eulerAngles.y, node.eulerAngles.z);
        let pos = v3();
        node.getWorldPosition(pos);
        Tween.stopAllByTarget(node);
        tween(node)
            .to(0.1, {
                eulerAngles: v3(angle.x, angle.y + 10, angle.z),
                worldPosition: v3(pos.x + 10, pos.y, pos.z - 3)
            })
            .start();
    }

    private endCallBack_zhuang_1() {

    }

    private startCallBack_wait_2() {
        let anim = this.nodes[0].getComponent(Animation);
        anim.play();
        AudioManager.instance.play(AudioType.mutou);
        this.scheduleOnce(() => {
            TaskManager.inst.startNextTask();
        }, 0.1);
    }

    private startCallBack_fly() {
        let fj = this.nodes[0].getComponent(NPCFJ);
        let path = this.paths[0];
        fj.onInit(path, this, true);
        fj.showModel();
        fj.onUpdateFly();
    }

    private startCallBack_end() {
        EffectCtr.inst.playEffect(this.effects[0]);
    }

}