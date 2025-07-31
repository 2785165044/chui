import { _decorator, Component, Node } from "cc";
import GameData from "./GameData";
import GameManager from "./GameManager";
import AudioManager, { AudioType } from "../../Base/AudioManager";
import MsgCenter from "../../Common/MsgCenter";
import MsgBehavior from "../../Common/MsgBehavior";
import FlyCamera from "../Fly/FlyCamera";
import TaskManager from "../Task/TaskManager";
const { ccclass, property } = _decorator;

@ccclass
export default class GameView extends Component {

    @property(Node)
    over: Node = null;
    @property(Node)
    btn: Node = null;
    @property(Node)
    private logo_wai: Node = null;
    @property(Node)
    private logo_nei: Node = null;
    @property(Node)
    private tips: Node = null;

    protected onLoad(): void {
        if (window["isMute"] != undefined) {
            console.log(window["isMute"]);
            if (window["isMute"] == true) {
                console.log("启动开始就开启静音");
                AudioManager.is_mute = true;
                MsgCenter.Ins.dispatch(MsgBehavior.STOP_AUDIO);
            }
            else {
                console.log("启动开始就关闭静音");
                AudioManager.is_mute = false;
                MsgCenter.Ins.dispatch(MsgBehavior.PLAY_AUDIO);
            }
        }

        this.node.on(Node.EventType.TOUCH_START, this.onTouchStart, this, true);
        this.btn.on(Node.EventType.TOUCH_START, this.onDownload, this, true);
    }

    protected onEnable(): void {
        if (GameData.isWX) {
            this.logo_wai.active = false;
            this.logo_nei.active = true;
            this.btn.active = false;
        } else {
            this.logo_wai.active = true;
            this.logo_nei.active = false;
            this.btn.active = true;
        }
        this.tips.active = true;
    }

    private isClick: boolean = false;
    private onTouchStart(): void {
        return;
        if (!this.isClick) {
            AudioManager.instance.play(AudioType.BGM);
            FlyCamera.instance.stopAnim();
            TaskManager.inst.startNextTask();
            this.isClick = true;
            GameData.isStart = true;
            MsgCenter.Ins.dispatch(MsgBehavior.GAME_START);
        }
        if (GameData.isOver) {
            GameManager.inst.download();
        }
    }

    public setTips() {
        this.tips.active = false;
    }

    public openOver() {
        GameData.isOver = true;
        this.over.active = true;
        AudioManager.instance.play(AudioType.click);
    }

    private time: number = 0;
    protected update(dt: number): void {
        // if(GameData.isStart) {
        //     this.time += dt;
        //     if (this.time > GameData.stay_time && !GameData.isOver) {
        //         this.time = 0;
        //         GameManager.inst.gameOver();
        //     }
        // }
    }

    private onDownload() {
        GameManager.inst.download();
    }

}

window.muteOpen = function () {
    console.log("静音开启");
    AudioManager.is_mute = true;
}

window.muteClose = function () {
    console.log("静音关闭");
    AudioManager.is_mute = false;
}

