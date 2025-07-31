
import { EventType } from "../Data/EventType";
import { GameManager } from "../Manager/GameManager";
import { ListenerManager } from "../Manager/ListenerManager";
import { SoundManager } from "../Manager/SoundManager";
import { Utils } from "../Manager/Utils";
import super_html_playable from "./super_html_playable";

const { ccclass, property } = cc._decorator;

@ccclass
export default class MainGame extends cc.Component {
    /**记录屏幕尺寸 */
    private clientSize: cc.Size = cc.size(0, 0);
    //结束界面
    @property(cc.Node)
    private end: cc.Node = null;
    //下载按钮
    @property(cc.Node)
    private dowlandBtn: cc.Node = null;
    @property(cc.Node)
    private logoNode: cc.Node = null;


    protected onLoad(): void {
        if (GameManager.isMultilingual) {
            GameManager.curLanguage = cc.sys.languageCode.slice(0, 2);
        }
        Utils.setSpriteFrame(this.logoNode, "logo-" + GameManager.curLanguage);

        super_html_playable.set_google_play_url("https://play.google.com/store/apps/details?id=com.gm11.bingocraze&hl=us_en&gl=us");
        super_html_playable.set_app_store_url("https://apps.apple.com/us/app/bingo-aloha-vegas-bingo-games/id1562265193");

        if (window["isMute"] != undefined) {
            if (window["isMute"] == true) {
                console.log("启动开始就开启静音");
                GameManager.isMute = true;
                SoundManager.stopAll();
                ListenerManager.dispatch(EventType.MUTE_OPEN);
            }
            else {
                console.log("启动开始就关闭静音");
                GameManager.isMute = false;    //给游戏全局音频解除静音
                ListenerManager.dispatch(EventType.MUTE_CLOSE);
                if (GameManager.canPlayAudio) {
                    SoundManager.playEffect("bgm", true, false, false);
                }
            }
        }
    }

    start() {
        this.changeDesignResolution();
        cc.view.setResizeCallback(() => {
            this.changeDesignResolution();
        });


        //游戏结束
        ListenerManager.on(EventType.GAME_OVER, () => {
            this.end.active = true;
        }, this);

        ListenerManager.on(EventType.GAME_FAIL, () => {

        }, this);

        //下载
        ListenerManager.on(EventType.CLICK_DOWLAND_BTN, () => {
            console.log("下载");
            super_html_playable.download();
            // window.open();

        }, this);

        // this.dowlandBtn.on(cc.Node.EventType.TOUCH_START, () => {
        //     ListenerManager.dispatch(EventType.CLICK_DOWLAND_BTN);
        // });

        this.node.on(cc.Node.EventType.TOUCH_START, this.playBgm, this);
    }

    //播放背景音乐
    playBgm() {
        GameManager.canPlayAudio = true;
        this.node.off(cc.Node.EventType.TOUCH_START, this.playBgm, this);
        SoundManager.playEffect("bgm", true, false, false);
    }

    /**
    * 屏幕适配
    * @returns 
    */
    changeDesignResolution() {
        let size: cc.Size = cc.view.getFrameSize();
        //未检测到尺寸变化则跳出函数
        if (size.width == this.clientSize.width && size.height == this.clientSize.height) {
            return;
        }
        //获取当前屏幕宽高
        let frameWidth = cc.view.getFrameSize().width;
        let frameHeight = cc.view.getFrameSize().height;
        if (frameHeight >= frameWidth) {
            cc.Canvas.instance.fitHeight = false;
            cc.Canvas.instance.fitWidth = true;
            if (frameWidth >= 540 || frameHeight <= 480) {
                cc.Canvas.instance.fitHeight = true;
                cc.Canvas.instance.fitWidth = false;
            } else {
                cc.Canvas.instance.fitHeight = false;
                cc.Canvas.instance.fitWidth = true;
            }
            this.node.scale = 1;
            this.node.getChildByName("tip").setScale(1);
            GameManager.screenMode = 0;
            ListenerManager.dispatch(EventType.SCREEN_V);
        } else {
            cc.Canvas.instance.fitWidth = false;
            cc.Canvas.instance.fitHeight = true;
            if (frameWidth >= 1024) {
                this.node.scale = 1;
            } else {
                this.node.scale = 1.1;
            }
            this.node.getChildByName("tip").setScale(2);

            GameManager.screenMode = 1;
            ListenerManager.dispatch(EventType.SCREEN_H);
        }
    }
}

window.muteOpen = function () {
    console.log("静音开启");
    GameManager.isMute = true;
    SoundManager.stopAll(); //给游戏全局音频进行静音处理
    //注意全局静音后，加判断不允许新的音频播放
    ListenerManager.dispatch(EventType.MUTE_OPEN);
}

window.muteClose = function () {
    console.log("静音关闭");
    GameManager.isMute = false;    //给游戏全局音频解除静音
    ListenerManager.dispatch(EventType.MUTE_CLOSE);
    if (GameManager.canPlayAudio) {
        SoundManager.playEffect("bgm", true, false, false);
    }
}
