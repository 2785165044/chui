import { Component, _decorator ,Node} from "cc";
import PoolMgr from "../Base/PoolMgr";
import ToolsMgr from "../Tools/ToolsMgr";

const {ccclass, property} = _decorator;

@ccclass('Tips3D')
export default class Tips3D extends Component {
    // private target_node: Node = null;
    // private isRun :boolean = false;
    // private initPos: Vec3 = v3(0, 0, 0);
    // private targetPos: Vec3 = v3(0, 0, 0);
    // private time:number = 0;
    // //播放提示
    // playTips(target: Node) {
    //     this.node.getPosition(this.initPos);
    //     this.target_node = target;
    //     this.targetPos = ToolsMgr.instance.convertToNodeSpaceAR(this.target_node, this.node.parent);
    //     this.time = 0;
    //     this.isRun = true;
    // }

    // protected update(dt: number): void {
    //     //使用lerp插值,进行平滑移动
    //     if (this.target_node && this.isRun) {
    //         this.time += dt * 3;
    //         if (this.time >= 1) {
    //             this.time = 1;
    //         }
    //         this.targetPos = ToolsMgr.instance.convertToNodeSpaceAR(this.target_node, this.node.parent);
    //         let pos: Vec3 = v3();
    //         Vec3.lerp(pos, this.initPos, this.targetPos, this.time);
    //         let scale:Vec3 = v3();
    //         Vec3.lerp(scale,v3(2,2,2),v3(1,1,1),this.time);
    //         this.node.setPosition(pos);
    //         this.node.setScale(scale);
    //         if (this.time >= 1) {
    //             this.isRun = false;
    //             this.target_node = null;
    //             this.remove();
    //         }
    //     }
    // }

    //移除
    // remove() {
    //     // this.node.destroy();
    //     PoolMgr.inst.putNode(this.node);
    // }

}
