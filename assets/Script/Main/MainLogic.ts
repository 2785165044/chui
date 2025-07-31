import { EventType } from "../Data/EventType";
import { ListenerManager } from "../Manager/ListenerManager";
import { SoundManager } from "../Manager/SoundManager";
import { Utils } from "../Manager/Utils";
import Ball from "./Ball";
import CardCtrl from "./CardCtrl";
import SetLevel from "./SetLevel";

const { ccclass, property } = cc._decorator;

@ccclass
export default class MainLogic extends cc.Component {

    @property(cc.Node)
    private ballUi: cc.Node = null;

    @property(cc.Node)
    private cardParent: cc.Node = null;

    @property(cc.Node)
    private maskNode: cc.Node = null;

    //当前显示小球在父级中的索引
    private ballIndex: number = -1;
    //当前需要点击的数字
    private curNum: number = -1;
    //
    private audioNameArr: string[] = ["G8", "O62", "N35", "B3", "G59", "B5", "O66", "O72"];

    private ballParent: cc.Node = null;

    private cardPosArr: cc.Vec2[][] = [
        [cc.v2(0, 0)], // 竖屏时居中
        [cc.v2(0, 0)], // 横屏时居中
    ];

    private need_touch_card: cc.Node[] = [];


    private isTimeOut: boolean = false;

    start() {
        this.ballParent = this.ballUi.getChildByName("mask").getChildByName("ballParent");

        this.ballUi.getComponent(Ball).createBall(this.audioNameArr);

        this.changeDesignResolution();

        ListenerManager.on(EventType.SCREEN_V, () => {
            this.changeDesignResolution();
        }, this);

        ListenerManager.on(EventType.SCREEN_H, () => {
            this.changeDesignResolution();
        }, this);

        ListenerManager.on(EventType.NEED_TOUCH_CARD, (node: cc.Node) => {
            this.need_touch_card.push(node);
            if (this.maskNode.isValid) {
                if (!this.maskNode.active) {
                    this.maskNode.active = true;
                    this.maskNode.setPosition(Utils.getNodePos(this.need_touch_card[0], this.maskNode.parent));
                    this.maskNode.opacity = 0;
                    this.maskNode.runAction(cc.fadeIn(0.3));

                    let tip: cc.Node = this.node.parent.getChildByName("tip");
                    tip.active = true;
                    tip.opacity = 0;
                    tip.runAction(cc.fadeIn(0.3));
                }
            }
        }, this);

        ListenerManager.on(EventType.TOUCH_CARD, (node: cc.Node) => {
            this.need_touch_card.splice(this.need_touch_card.indexOf(node), 1);
            if (this.need_touch_card.length == 0) {
                if (this.ballIndex >= 2) {
                    ListenerManager.dispatch(EventType.GAME_OVER);
                } else {
                    this.moveBallParent();
                }
            }
            if (this.maskNode.isValid) {
                this.maskNode.runAction(
                    cc.sequence(
                        cc.fadeOut(0.3),
                        cc.callFunc(() => {
                            this.maskNode.destroy();
                        })
                    )
                );

                let tip: cc.Node = this.node.parent.getChildByName("tip");
                tip.runAction(cc.fadeOut(0.3));
            }
        }, this);

        ListenerManager.on(EventType.START_TIME, () => {
            this.unscheduleAllCallbacks();

            this.scheduleOnce(() => {
                //
                // 
                ListenerManager.dispatch(EventType.GAME_OVER);
            }, 100);
        }, this);

        this.init();
    }

    init() {
        // for (let i = 0; i < this.cardParent.childrenCount; i++) {
        //     let card: cc.Node = this.cardParent.children[i];
        //     Utils.flipY(card, 1);
        // }

        this.moveBallParent();

    }

    //显示下个数字小球
    moveBallParent() {
        this.ballIndex += 1;
        this.curNum = this.ballUi.getComponent(Ball).moveBallParent(() => {
            this.scheduleOnce(() => {
                ListenerManager.dispatch(EventType.DISPLAY_HAND, this.curNum);
            }, 0.5);
        });
    }

    //播放动画
    playAn(node: cc.Node, callback: Function = null) {
        node.active = true;
        node.getComponent(cc.Animation).play();
        node.getComponent(cc.Animation).on(cc.Animation.EventType.FINISHED, () => {
            node.active = false;
            if (callback) {
                callback();
            }
        });
    }

    /**
     * 屏幕适配
     * @returns 
     */
    changeDesignResolution() {
        //未检测到尺寸变化则跳出函数
        //获取当前屏幕宽高
        let frameWidth = cc.view.getFrameSize().width;
        let frameHeight = cc.view.getFrameSize().height;
        if (frameHeight >= frameWidth) {
            this.SCREEN_V();
        } else {
            this.SCREEN_H();
        }
    }

    SCREEN_V() {
        // this.ballUi.setPosition(cc.v2(0, 360));
        this.ballUi.getComponent(cc.Widget).isAlignVerticalCenter = false;
        this.ballUi.getComponent(cc.Widget).isAlignHorizontalCenter = true;
        this.ballUi.getComponent(cc.Widget).isAlignLeft = false;
        this.ballUi.getComponent(cc.Widget).isAlignTop = true;
        this.ballUi.getComponent(cc.Widget).top = 100;
        this.ballUi.angle = 0;
        this.ballUi.setScale(1.2);

        for (let i = 0; i < this.ballParent.childrenCount; i++) {
            this.ballParent.children[i].angle = 0;
        }

        this.cardParent.setPosition(cc.v2(0, -80));
        this.cardParent.setScale(0.45);
        if (this.cardParent.childrenCount > 0) {
        this.cardParent.children[0].setPosition(this.cardPosArr[0][0]);
    }
        for (let i = 0; i < this.cardParent.childrenCount; i++) {
            this.cardParent.children[i].setPosition(this.cardPosArr[0][i]);
        }
    }

    SCREEN_H() {
        for (let i = 0; i < this.ballParent.childrenCount; i++) {
            this.ballParent.children[i].angle = 90;
        }

        this.cardParent.setPosition(cc.v2(100, 0));
        this.cardParent.setScale(0.7);
        for (let i = 0; i < this.cardParent.childrenCount; i++) {
            this.cardParent.children[i].setPosition(this.cardPosArr[1][i]);
        }

        this.ballUi.getComponent(cc.Widget).isAlignHorizontalCenter = false;
        this.ballUi.getComponent(cc.Widget).isAlignVerticalCenter = true;
        this.ballUi.getComponent(cc.Widget).isAlignTop = false;
        this.ballUi.getComponent(cc.Widget).isAlignLeft = true;
        if (this.isTablet()) {
            this.ballUi.getComponent(cc.Widget).left = 150;
            this.cardParent.setPosition(cc.v2(150, 0));
            this.cardParent.setScale(0.6);
        } else {
            this.ballUi.getComponent(cc.Widget).left = 250;
            this.cardParent.setPosition(cc.v2(100, 0));
            this.cardParent.setScale(0.7);
            if (this.cardParent.childrenCount > 0) {
        this.cardParent.children[0].setPosition(this.cardPosArr[1][0]);
    }
        }

        this.ballUi.angle = -90;
        this.ballUi.setScale(2);


    }

    //检测平板
    private isTablet() {
        const ua = navigator.userAgent.toLowerCase();

        // 检查用户代理字符串中是否存在常见平板设备标识
        const isAndroidTablet = /android/.test(ua) && !/mobile/.test(ua);
        const isIPad = /ipad/.test(ua) || /macintosh/i.test(ua);

        // iPadOS 13 及更高版本识别：它们可能显示为桌面级浏览器
        const isIpadOS13Up = () => (
            /macintosh/.test(ua) && navigator.maxTouchPoints && navigator.maxTouchPoints > 1
        );

        // 结合条件判断
        return isAndroidTablet || isIPad || isIpadOS13Up();
    }
}
