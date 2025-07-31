import { EventType } from "../Data/EventType";
import { ListenerManager } from "../Manager/ListenerManager";

const { ccclass, property } = cc._decorator;
const posArr: cc.Vec2[][] = [[cc.v2(0, 0), cc.v2(0, -300), cc.v2(0, -100)],
[cc.v2(0, 0), cc.v2(-50, -250), cc.v2(0, 0)]];
const scaleArr: number[][] = [[1, 1, 0.6], [1, 1.2, 0.8, 0.8]];
@ccclass
export default class GameScene extends cc.Component {

    // onLoad () {}
    private index: number = -1;
    /**竖屏--0  横屏--1 */
    private screenStatus: number = -1;
    /**当前播放动画 */
    private curAction: cc.Action = null;
    private moveSpeed: number = 1200;
    start() {
        this.changeDesignResolution();
        ListenerManager.on(EventType.GAME_SCENE_MOVE, (index) => {
            this.node.stopAllActions();
            this.index = index;
            let pos = posArr[this.screenStatus][this.index]
            let distance = Math.sqrt(Math.pow((pos.x - this.node.position.x), 2) + Math.pow((pos.y - this.node.position.y), 2));
            let time = distance / this.moveSpeed;
            if (time >= 0.7) {
                time = 0.7;
            }
            time = 0.4;
            this.curAction = cc.spawn(
                cc.moveTo(time, posArr[this.screenStatus][this.index]),
                cc.scaleTo(time, scaleArr[this.screenStatus][this.index]),
            )
            this.node.runAction(this.curAction);
        }, this);
        ListenerManager.on(EventType.SCREEN_V, () => {
            this.screenStatus = 0;
            if (this.index != -1) {
                this.node.stopAction(this.curAction);
                this.node.setPosition(posArr[this.screenStatus][this.index]);
                this.node.setScale(scaleArr[this.screenStatus][this.index]);
            } else {
                this.node.stopAction(this.curAction);
                this.node.setPosition(posArr[this.screenStatus][0]);
                this.node.setScale(scaleArr[this.screenStatus][0]);
            }
        }, this);
        ListenerManager.on(EventType.SCREEN_H, () => {
            this.screenStatus = 1;
            if (this.index != -1) {
                this.node.stopAction(this.curAction);
                this.node.setPosition(posArr[this.screenStatus][this.index]);
                this.node.setScale(scaleArr[this.screenStatus][this.index]);
            } else {
                this.node.stopAction(this.curAction);
                this.node.setPosition(posArr[this.screenStatus][0]);
                this.node.setScale(scaleArr[this.screenStatus][0]);
            }
        }, this);
    }

    /**
   * 屏幕适配
   * @returns 
   */
    changeDesignResolution() {
        //获取当前屏幕宽高
        let frameWidth = cc.view.getFrameSize().width;
        let frameHeight = cc.view.getFrameSize().height;
        if (frameHeight >= frameWidth) {
            this.screenStatus = 0;
            if (this.index == -1) {
                this.node.stopAction(this.curAction);
                this.node.setPosition(posArr[this.screenStatus][0]);
                this.node.setScale(scaleArr[this.screenStatus][0]);
            }
        } else {
            this.screenStatus = 1;
            if (this.index == -1) {
                this.node.stopAction(this.curAction);
                this.node.setPosition(posArr[this.screenStatus][0]);
                this.node.setScale(scaleArr[this.screenStatus][0]);
            }
        }
    }
    // update (dt) {}
}
