import { _decorator, Camera, Canvas, Component, Node, Size, view } from 'cc';
import Utils from '../Tools/Utils';
const { ccclass, property } = _decorator;

@ccclass('Eliminate')
export class Eliminate extends Component {
    @property(Camera)
    camera: Camera = null;
    @property(Node)
    canvas: Node = null;

    private timer: number = 0;
    private size: Size = null;
    protected start(): void {
        this.size =  view.getVisibleSize();
        this.size = new Size(this.size.width/2, this.size.height/2);
    }
    protected lateUpdate(dt: number): void {
        this.timer++;
        if (this.timer < 5) {
            return
        }
        this.timer = 0;

        const arr = this.node.children;
        for (let i = 0; i < arr.length; i++) {
            const obj = arr[i];
            const pos = Utils.setUIPos3DTo2D(this.camera, obj, this.canvas);
            if (Math.abs(pos.x) > this.size.width || Math.abs(pos.y) > this.size.height) {
                if(obj.active && obj.scale.x == 1) {
                    obj.active = false;
                }
            }
            else if (obj.active == false && obj.scale.x == 1) {
                obj.active = true;
            }
        }
    }
}


