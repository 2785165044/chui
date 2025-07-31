import { Component, _decorator, Node, tween, v3, UIOpacity, } from "cc";
import PoolMgr from "../Base/PoolMgr";
const { ccclass, property } = _decorator;


@ccclass('Tips2D')
export default class Tips2D extends Component {
    @property(Node)
    box: Node = null;

    public setData() {
        this.box.setPosition(0, 0, 0);
        this.box.setScale(0, 0, 0);

        let t1 = tween(this.box)
            .to(0.5, { position: v3(0,  150) });

        let t2 = tween(this.box)
            .to(0.2, { scale: v3(1, 1, 1) }, { easing: "backOut" });

        tween(this.box).parallel(t1, t2).start();

        let op = this.box.getComponent(UIOpacity);
        op.opacity = 255;
        tween(op)
            .delay(0.3)
            .to(0.2, { opacity: 0 })
            .call(() => {
                this.over();
            })
            .start();
    }

    private over() {
        PoolMgr.inst.putNode(this.node);
    }

}
