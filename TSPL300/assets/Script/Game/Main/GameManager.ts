
const { ccclass, property } = _decorator;
import { _decorator, Camera, Component, EventTouch, macro, Node, SkeletalAnimation, Tween, tween, v3, Vec3, } from "cc";
import GameData from "./GameData";
import GameView from "./GameView";
import LocalizationCtr from "../../Base/Localization/LocalizationCtr";
import MsgCenter from "../../Common/MsgCenter";
import MsgBehavior from "../../Common/MsgBehavior";
import super_html_playable from "../../Base/super_html_playable";
import AudioManager, { AudioType } from "../../Base/AudioManager";
import NPCFJ from "../NPC/NPCFJ";
import GameWheel from "../wheel/GameWheel";
import AirLinerController from "../Fly/AirLinerController";
import { Scale } from "../../Common/Scale";

@ccclass
export default class GameManager extends Component {
    @property(GameView)
    gameview: GameView = null;
    /**相机节点 */
    @property(Camera)
    camera: Camera = null;
    @property(Node)
    over: Node = null;

    @property(Node)
    fly: Node = null;


    @property(Node)
    npcFly1: Node = null;
    
    @property(Node)
    npcFly1Path: Node = null;

    @property(Node)
    npcFly1PathExtra: Node = null;


    @property(Node)
    npcFly2: Node = null;
    
    @property(Node)
    npcFly2Path: Node = null;

    @property(SkeletalAnimation)
    cangmenAni: SkeletalAnimation = null;

    @property(Node)
    kache: Node = null;

    @property(Node)
    kuangkuang: Node = null;

    @property(Node)
    arrowNode: Node = null;

    public static isRestarted: boolean = false;

    public static inst: GameManager = null;
    protected onLoad(): void {
        GameManager.inst = this;
        LocalizationCtr.instance.load();
        MsgCenter.Ins.register(MsgBehavior.GAME_OVER, this.gameOver, this);
        if (GameData.isTest) {
            window["GameManager"] = this;
        }

        super_html_playable.set_google_play_url("https://play.google.com/store/apps/details?id=com.vm3.global");
        super_html_playable.set_app_store_url("https://apps.apple.com/us/app/truck-star/id6476976929");
    }

    private initPhysic(): void {
        macro.ENABLE_WEBGL_ANTIALIAS = true;
    }

    //计算两个角所成夹角角度
    public calculateDegreeByTwoDegree(a: number, b: number) {
        let abs = Math.abs(a - b);
        if (abs > 180) {
            return 360 - abs;
        }
        return abs;
    }

    public startBounceAnimation(node: Node, amplitude: number = 0.005, duration: number = 0.5): void {
        // 创建上下跳动的循环动画
        tween(node)
            .to(duration, { position: node.position.clone().add(new Vec3(0, amplitude, 0)) }, { easing: 'quadOut' }) // 向上跳动
            .to(duration, { position: node.position.clone().subtract(new Vec3(0, amplitude, 0)) }, { easing: 'quadOut' }) // 向下跳动
            .union() // 合并两个动画
            .repeatForever() // 设置为循环
            .start(); // 开始动画
    }

    public stopArrowAction(): void {
       Tween.stopAllByTarget(this.arrowNode);
       tween(this.arrowNode).to(0.2, { scale: v3(0, 0, 0) }).start();
    }

    startTouch(event: EventTouch) {
        if (GameData.isOver) {
            this.download();
        }
    }

    public download(): void {
        console.log("下载");
        // window.download();
        if (GameData.isWX) {
            wx.notifyMiniProgramPlayableStatus({
                isEnd: true
            });
        } else {
            super_html_playable.download();
        }
        AudioManager.instance.play(AudioType.click);
        // if(GameData.isTest){
        //     sys.openURL("https://apps.apple.com/us/app/truck-star/id6476976929");
        // }
    }

    public gameOver() {
        GameData.isOver = true;
        // this.gameview.openOver();
        GameManager.inst.download();
    }

    public gameWin() {
        this.scheduleOnce(() => {
            GameData.isOver = true;
        }, 2.5);
    }

    protected onDestroy(): void {
        MsgCenter.Ins.off(MsgBehavior.GAME_OVER, this.gameOver, this);
    }


    public npcFly1Start() {
        this.npcFly1.getComponent(NPCFJ).onInit(this.npcFly1Path,null,true, this.npcFly1PathExtra);
    }

    public npcFly2Start() {
        this.npcFly2.getComponent(NPCFJ).onInit(this.npcFly2Path,null,false);
    }

    kacheAnim() {
        //this.kache.getComponent(SkeletalAnimation).play("kache");

        tween(this.kache).to(6, { position: new Vec3(-1, 0, 0) }).start();
    }


    public onGameGearClick() {
        if(AirLinerController.inst.flowState == 5){
            GameWheel.inst.hideGearGuide();
            //AirLinerController.inst.onInitLine();
        }
        else if(AirLinerController.inst.flowState == 1){
            GameWheel.inst.hideGearGuide();
            AirLinerController.inst.setThirdLine();
        }
    }

    public onTouchWheel() {
        if(AirLinerController.inst.flowState == 5){
            //GameWheel.inst.hideGearGuide();
            AirLinerController.inst.onInitLine();
        }
    }

}