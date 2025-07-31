import { _decorator, Component, Node } from "cc";
import PoolMgr from "../../Base/PoolMgr";
import ToolsMgr from "../../Tools/ToolsMgr";

import GameData from "../Main/GameData";
const { ccclass, property } = _decorator;

@ccclass('JTManager')
export default class JTManager extends Component {

    @property(Node)
    tar: Node = null;
    @property(Node)
    root: Node = null;
    @property(Node)
    jt: Node = null;
    @property(Number)
    dist: number = 2;

    private player: FlyController = null;
    private jtArr: Node[] = [];

    private time: number = 0.5;
    private timeMax: number = 0.01;

    public static instance: JTManager = null;
    onLoad() {
        JTManager.instance = this;
    }

    start() {
        this.player = FlyController.inst;
    }

    protected update(dt: number): void {
        if (!GameData.isFly) {
            // this.time += dt;
            // if (this.time > this.timeMax) {
            //     this.time = 0;
            this.updateJT();
            // }
        } else {
            if (this.jtArr.length > 0) {
                this.jtArr.forEach((item: Node) => {
                    PoolMgr.inst.putNode(item);
                });
                this.root.removeAllChildren();
                this.jtArr.length = 0;
            }
        }
    }

    private createJT(): Node {
        let jt = PoolMgr.inst.getNode(this.jt);
        jt.parent = this.root;
        jt.active = true;
        this.jtArr.push(jt);
        return jt;
    }

    private updateJT(): void {
        let pos = this.player.node.worldPosition;
        let pos2 = this.tar.worldPosition;
        let dx = pos2.x - pos.x;
        let dz = pos2.z - pos.z;
        let dist = Math.sqrt(dx * dx + dz * dz);
        let angle = ToolsMgr.calculateRo(pos.x, pos.z, pos2.x, pos2.z);
        let count = Math.ceil(dist / this.dist);
        if (this.jtArr.length > 0) {
            if (this.jtArr.length > count) {
                this.jtArr.splice(count, this.jtArr.length - count).forEach((item: Node) => {
                    item.parent = null;
                    PoolMgr.inst.putNode(item);
                });
            } else if (this.jtArr.length < count) {
                for (let i = this.jtArr.length; i < count; i++) {
                    this.createJT();
                }
            }
            for (let i = 0; i < count; i++) {
                let jt = this.jtArr[i];
                let t = i / (count ); // 插值参数
                let x = pos.x + t * dx;
                let z = pos.z + t * dz;
                jt.setWorldPosition(x, 1.059, z);
                jt.setRotationFromEuler(90, angle, 0);
            }
        } else {
            for (let i = 0; i < count; i++) {
                let jt = this.createJT();
                let t = i / (count + 1); // 插值参数
                let x = pos.x + t * dx;
                let z = pos.z + t * dz;
                jt.setWorldPosition(x, 1.059, z);
                jt.setRotationFromEuler(90, angle, 0);
            }
        }
    }

}