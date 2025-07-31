
import GameManager from '../Game/Main/GameManager';
import Utils from '../Tools/Utils';
import { _decorator, Camera, Component, Node, UIOpacity, v3, Vec3 } from "cc";
const { ccclass, property } = _decorator;

@ccclass('SyncPosition')
export class SyncPosition extends Component {
    //目标
    @property(Node)
    target: Node = null;
    //偏移
    @property
    offset: Vec3 = new Vec3(0, 0, 0);
    //2d还是3d
    @property
    is2D: boolean = true;

    private camera: Camera = null;
    private canvas: Node = null;
    private uiopacity: UIOpacity = null;
    protected onEnable(): void {
        this.camera = GameManager.inst.camera;
        this.canvas = GameManager.inst.gameview.node;
        this.uiopacity = this.node.getComponent(UIOpacity);
        this.lateUpdate(0);
    }

    lateUpdate(deltaTime: number) {
        if (this.target == null) {
            return;
        }
        if (this.is2D) {
            if (this.uiopacity != null) {

            }
            if (this.camera && this.camera) {
                this.node.setPosition(Utils.get3DPosTo2DPos(this.camera, this.target, this.canvas).add(this.offset));
            }
        } else {
            //获取目标的世界坐标
            this.node.setPosition(this.target.position.add(this.offset));
        }
    }

    public setTarget(target: Node, _offset: Vec3 = v3()): void {
        this.offset = _offset;
        this.target = target;
        this.lateUpdate(0);
    }
}


