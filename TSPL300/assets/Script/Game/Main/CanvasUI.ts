import { _decorator, Camera, Component, Node, v3, view, Widget } from 'cc';
import MsgCenter from '../../Common/MsgCenter';
import MsgBehavior from '../../Common/MsgBehavior';
const { ccclass, property } = _decorator;

@ccclass('CanvasUI')
export class CanvasUI extends Component {

    @property(Node)
    logo: Node = null;
    @property(Node)
    controller: Node = null;
    @property(Node)
    wheel: Node = null;
    @property(Node)
    gear: Node = null;
    @property(Node)
    gear2: Node = null;
    @property(Node)
    wheelGuide: Node = null;
    @property(Node)
    gearGuide: Node = null;
    @property(Node)
    gearGuide2: Node = null;
    @property(Node)
    over: Node = null;
    @property(Node)
    tips: Node = null;
    @property(Camera)
    camera3D: Camera = null;

    protected onEnable(): void {
        MsgCenter.Ins.register(MsgBehavior.SCREEN_H, this.horiAlign, this);
        MsgCenter.Ins.register(MsgBehavior.SCREEN_V, this.vertivalAlign, this);
    }

    protected onDestroy(): void {
        MsgCenter.Ins.off(MsgBehavior.SCREEN_H, this.horiAlign, this);
        MsgCenter.Ins.off(MsgBehavior.SCREEN_V, this.vertivalAlign, this);
    }

    // 竖屏
    private vertivalAlign() {
        console.log("vertivalAlign");
        let frameHeight = view.getVisibleSizeInPixel().height;
        let frameWidth = view.getVisibleSizeInPixel().width;
        // this.camera3D.orthoHeight = 10;

        let scale = 1;
        if (frameHeight / frameWidth < 1.25) {
            scale = 0.8;
            this.controller.getComponent(Widget).bottom = 100;
            this.tips.getComponent(Widget).top = 250;
        } else if (frameHeight / frameWidth < 1.5) {
            this.controller.getComponent(Widget).bottom = 120;
            this.tips.getComponent(Widget).top = 300;
        } else if (frameHeight / frameWidth > 2) {
            this.controller.getComponent(Widget).bottom = 300;
            this.tips.getComponent(Widget).top = 358.5;
        } else {
            this.controller.getComponent(Widget).bottom = 140;
            this.tips.getComponent(Widget).top = 358.5;

        }
        this.wheel.setScale(1.5, 1.5, 1);
        this.wheelGuide.setScale(1.5, 1.5, 1);
        this.gear.getComponent(Widget).right = -250;
        this.gearGuide.getComponent(Widget).right = -250;
        this.gear.setScale(1.2, 1.2, 1);
        this.gearGuide.setScale(1.2, 1.2, 1);
        this.gear2.setScale(1.2, 1.2, 1);
        this.gearGuide2.setScale(1.2, 1.2, 1);
    }

    // 横屏
    private horiAlign() {
        console.log("horiAlign");
        let frameHeight = view.getVisibleSizeInPixel().height;
        let frameWidth = view.getVisibleSizeInPixel().width;
        // this.camera3D.orthoHeight = 6;

        if (frameWidth / frameHeight < 1.25) {
            this.tips.getComponent(Widget).top = 200;
            this.controller.getComponent(Widget).bottom = 120;
            this.gear.getComponent(Widget).right = -200;
            this.gearGuide.getComponent(Widget).right = -200;
        } else if (frameWidth / frameHeight < 1.5) {
            this.tips.getComponent(Widget).top = 200;
            this.controller.getComponent(Widget).bottom = 120;
            this.gear.getComponent(Widget).right = -50;
            this.gearGuide.getComponent(Widget).right = -50;
        } else if (frameWidth / frameHeight > 2) {
            this.tips.getComponent(Widget).top = 200;
            this.controller.getComponent(Widget).bottom = 100;
            this.gear.getComponent(Widget).right = 50;
            this.gearGuide.getComponent(Widget).right = 50;
        } else {
            this.tips.getComponent(Widget).top = 200;
            this.controller.getComponent(Widget).bottom = 100;
            this.gear.getComponent(Widget).right = 50;
            this.gearGuide.getComponent(Widget).right = 50;
        }

        this.wheel.setScale(1, 1, 1);
        this.wheelGuide.setScale(1, 1, 1);
        this.gear.setScale(1, 1, 1);
        this.gearGuide.setScale(1, 1, 1);
        this.gear2.setScale(1, 1, 1);
        this.gearGuide2.setScale(1, 1, 1);
    }


}


