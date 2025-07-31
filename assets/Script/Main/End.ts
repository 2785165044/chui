import { EventType } from "../Data/EventType";
import { GameManager } from "../Manager/GameManager";
import { ListenerManager } from "../Manager/ListenerManager";
import { SoundManager } from "../Manager/SoundManager";
import { Utils } from "../Manager/Utils";
import TweenScale from "./TweenScale";

const { ccclass, property } = cc._decorator;

@ccclass
export default class End extends cc.Component {
    // onLoad () {}
    @property(cc.Node)
    private downLoadBtn: cc.Node = null;
    @property(cc.Node)
    private logo: cc.Node = null;

    start() {
        this.node.on(cc.Node.EventType.TOUCH_START, () => {
            ListenerManager.dispatch(EventType.CLICK_DOWLAND_BTN);
        });

        SoundManager.playEffect("over", false, false, false);
        let logoPos: cc.Vec2 = this.logo.getPosition();
        this.logo.setPosition(logoPos.x, logoPos.y + 300);
        this.logo.runAction(
            cc.sequence(
                cc.moveTo(0.3, logoPos).easing(cc.easeBackOut()),
                cc.callFunc(() => {

                })
            )
        );


        let downLoadPos: cc.Vec2 = this.downLoadBtn.getPosition();
        this.downLoadBtn.setPosition(downLoadPos.x, downLoadPos.y - 300);
        this.downLoadBtn.runAction(
            cc.sequence(
                cc.moveTo(0.3, downLoadPos).easing(cc.easeBackOut()),
                cc.callFunc(() => {
                    this.downLoadBtn.addComponent(TweenScale);
                })
            )

        );
    }
}
