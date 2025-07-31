import { EventType } from "../Data/EventType";
import { GameManager } from "../Manager/GameManager";
import { ListenerManager } from "../Manager/ListenerManager";
import { SoundManager } from "../Manager/SoundManager";
import { Utils } from "../Manager/Utils";


const { ccclass, property } = cc._decorator;

@ccclass
export default class Ball extends cc.Component {


    @property(cc.Node)
    private initBallParent: cc.Node = null;

    @property(cc.Node)
    private ballParent: cc.Node = null;

    //音频名字数组
    private audioNameArr: string[] = [];

    //每个小球之间的距离
    private ballDis: number = 140;

    //小球每次向前移动的所需时间
    private moveTime: number = 0.3;

    //小球每次向前移动的距离
    private moveDis: number = 140;

    //小球向前移动次数
    private moveIndex: number = -1;

    createBall(audioArr: string[]) {
        this.audioNameArr = audioArr;
        for (let i = 0; i < this.audioNameArr.length; i++) {
            let pos: cc.Vec2 = cc.v2(0 - this.ballDis * i, 0);
            let name: string = Utils.getString(this.audioNameArr[i]);
            let num: number = Utils.getNum(this.audioNameArr[i]);
            let ball: cc.Node = cc.instantiate(this.initBallParent.getChildByName(name));
            ball.setParent(this.ballParent);
            ball.setPosition(pos);
            ball.getChildByName("numLabel").getComponent(cc.Label).string = String(num);
            ball.active = true;
        }
    }

    //小球整体移动
    moveBallParent(callback: Function = null) {
        this.moveIndex += 1;
        let targetPos: cc.Vec2 = cc.v2(this.ballParent.position.x + this.moveDis, this.ballParent.position.y);
        let ball: cc.Node = this.ballParent.children[this.moveIndex];
        ball.active = true;
        this.ballParent.runAction(
            cc.sequence(
                cc.delayTime(0.3),
                cc.callFunc(() => {
                    ball.runAction(
                        cc.scaleTo(this.moveTime, 0.9)
                    );

                    let oldBall: cc.Node = this.ballParent.children[this.moveIndex - 1];
                    if (oldBall) {
                        oldBall.runAction(
                            cc.scaleTo(this.moveTime, 0.7)
                        );
                    }
                }),
                cc.moveTo(this.moveTime, targetPos),
                cc.callFunc(() => {
                    if (GameManager.canPlayAudio) {
                        SoundManager.playEffect(this.audioNameArr[this.moveIndex], false, false, false);
                    }
                    if (callback) {
                        callback();
                    }
                })
            )
        );

        return Number(ball.getChildByName("numLabel").getComponent(cc.Label).string);
    }

    // update (dt) {}
}
