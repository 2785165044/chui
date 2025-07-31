import { ViewResize } from "../../Base/ViewResize";
import GameData from "./GameData";
import GameManager from "./GameManager";
import { _decorator, Component, director, Node, view } from "cc";

const { ccclass, property } = _decorator;

@ccclass
export default class OverView extends Component {
    @property([Node])
    hideNode: Node[] = [];
    @property(Node)
    btn: Node = null;
    @property(Node)
    btn2: Node = null;
    @property(Node)
    private v: Node = null;
    @property(Node)
    private h: Node = null;
    @property(Node)
    role_win: Node = null;
    @property(Node)
    role_win2: Node = null;
    @property(Node)
    lbl_win: Node = null;
    @property(Node)
    lbl_win2: Node = null;
    @property(Node)
    role_lose: Node = null;
    @property(Node)
    role_lose2: Node = null;
    @property(Node)
    lbl_lose: Node = null;
    @property(Node)
    lbl_lose2: Node = null;

    protected onLoad(): void {
        // 窗口发生变化时适配
        ViewResize.instance.reSizeCallBackAdd(() => {
            this._adapt();
        }, this);
    }

    protected start(): void {
        for (let i = 0; i < this.hideNode.length; i++) {
            this.hideNode[i].active = false;
        };

        this.btn.on(Node.EventType.TOUCH_START, this.clickRestart, this);
        this.btn2.on(Node.EventType.TOUCH_START, this.clickRestart, this);
        this._adapt();

        this.scheduleOnce(() => {
            GameManager.inst.download();
        },1)
    }

    private _adapt(): void {
        let frameSize = view.getVisibleSizeInPixel();
        if (frameSize.width > frameSize.height) {
            //横屏
            this.horiAlign();
        } else {
            //竖屏
            if (frameSize.height / frameSize.width < 1.1) {
                this.horiAlign();
            } else {
                this.vertivalAlign();
            }
        }
        // let screenRatio = view.getVisibleSizeInPixel().width / view.getVisibleSizeInPixel().height;
        // // 判断屏幕宽高比
        // if (screenRatio <= 1) {
        //     this.vertivalAlign();
        // } else {
        //     // 此屏幕宽度大于高度
        //     this.horiAlign();
        // }
    }

    protected onEnable(): void {
        if (GameData.isWin) {
            this.role_win.active = true;
            this.role_win2.active = true;
            this.lbl_win.active = true;
            this.lbl_win2.active = true;
            this.role_lose.active = false;
            this.role_lose2.active = false;
            this.lbl_lose.active = false;
            this.lbl_lose2.active = false;
        } else {
            this.role_win.active = false;
            this.role_win2.active = false;
            this.lbl_win.active = false;
            this.lbl_win2.active = false;
            this.role_lose.active = true;
            this.role_lose2.active = true;
            this.lbl_lose.active = true;
            this.lbl_lose2.active = true;
        }

        if (GameData.isWX) {
            this.btn.active = false;
            this.btn2.active = false;
            //this.node.on(Node.EventType.TOUCH_START, this.clickRestart, this);
        } else {
            this.btn.active = true;
            this.btn2.active = true;
        }

    
    }

    // 绑定btn click事件
    public clickRestart() {
        if(GameData.canRestart )
        {
            GameData.isOver = false;
            director.loadScene("newGame");
        }
        else {
            GameManager.inst.download();
        }
        
    }

    protected onDestroy(): void {
        // this.btn.off(Node.EventType.TOUCH_START, this.clickRestart, this);
        // this.btn2.off(Node.EventType.TOUCH_START, this.clickRestart, this);
    }

    private horiAlign() {
        this.h.active = true;
        this.v.active = false;
    }

    private vertivalAlign() {
        this.h.active = false;
        this.v.active = true;
    }
}
