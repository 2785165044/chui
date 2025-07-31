import { _decorator, Component, game, Node, v3, VideoPlayer,tween ,UIOpacity} from 'cc';
import GameManager from './Script/Game/Main/GameManager';
import AudioManager, { AudioType } from './Script/Base/AudioManager';
const { ccclass, property } = _decorator;

@ccclass('Game')
export class Game extends Component {
    @property(Node)
    private videoBg1: Node = null;
    @property(Node)
    private videoBg2: Node = null;
    @property(Node)
    private video1: Node = null;
    @property(Node)
    private video2: Node = null;

    @property(Node)
    private maskNode: Node = null;
    @property(Node)
    private handNode: Node = null;

    @property(Node)
    private downloadBtn: Node = null;

    protected onLoad(): void {
        game.frameRate = 59;
        this.downloadBtn.active = false;
    }

    start() {
        this.video1.on(VideoPlayer.EventType.COMPLETED, this.video1PlayEnd, this);
        this.scheduleOnce(() => {
            this.videoBg1.getComponent(VideoPlayer).play();
            this.video1.getComponent(VideoPlayer).play();
        }, 0.1)
        this.videoBg1.active = true;
        this.video1.active = true;

        this.node.on(Node.EventType.TOUCH_START, this.onTouchStart, this, false);
        // this.videoBg2.active = false;
        // this.video2.active = false;
        AudioManager.instance.play(AudioType.BGM);
        AudioManager.instance.play(AudioType.A);

        this.scheduleOnce(() => {
            GameManager.inst.download();
        },20)

    }
    private onTouchStart(): void {
       GameManager.inst.download();
    }

    private video1PlayEnd() {
   
        this.video1.scale = v3(0, 0, 1);
        this.video2.parent.scale = v3(1, 1, 1);
        this.video2.getComponent(VideoPlayer).play();
        AudioManager.instance.play(AudioType.B);
        this.scheduleOnce(() => {
            this.showMask();
        },0.2)
       

    }

    showMask() {
       
        tween(this.maskNode.getComponent(UIOpacity))
        .to(0.3, { opacity: 226 })
        .call(() => {
            this.displayHandNode();
            this.downloadBtn.active = true;
        })
        .start();
    }

    displayHandNode() {
        this.handNode.active = true;
        tween(this.handNode)
            .by(0.6, { position: v3(50, 0, 0) })
            .delay(0.05)
            .by(0.4, { position: v3(-50,0, 0) })
            .call(() => {
                //this.displayHandNode();
            })
            .union()
            .repeatForever()
            .start();
    }

    update(dt: number) {
        
    }
}


