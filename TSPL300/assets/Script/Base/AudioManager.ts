import { AudioSource, Component, _decorator, director, tween } from "cc";
import MsgCenter from "../Common/MsgCenter";
import MsgBehavior from "../Common/MsgBehavior";
import { AudioFader } from "../Common/AudioFader";
export enum AudioType {
    BGM = 1,
    click,
    A,
    B,
    zhuangji,
    zhuanghui,
    // feiji,
    mutou,
    huandang,
    dafeiji,
}


const { ccclass, property } = _decorator;

@ccclass('AudioManager')
export default class AudioManager extends Component {
    @property({ type: AudioSource, tooltip: '背景音乐' })
    private bgm: AudioSource = null;
    @property({ type: AudioSource, tooltip: '点击' })
    private click: AudioSource = null;
    private chuxian: AudioSource = null;
    @property({ type: AudioSource, tooltip: 'A段音效' })
    private A: AudioSource = null;
    @property({ type: AudioSource, tooltip: 'B段音效' })
    private B: AudioSource = null;
    @property({ type: AudioSource, tooltip: '撞击' })
    private zhuangji: AudioSource = null;
    @property({ type: AudioSource, tooltip: '撞毁' })
    private zhuanghui: AudioSource = null;
    // @property({ type: AudioSource, tooltip: '飞机' })
    // private feiji: AudioSource = null;
    @property({ type: AudioSource, tooltip: '木头' })
    private mutou: AudioSource = null;
    @property({ type: AudioSource, tooltip: '换挡' })
    private huandang: AudioSource = null;

    @property({ type: AudioSource, tooltip: '大飞机' })
    private dafeiji: AudioSource = null;

    static _is_mute: boolean = false;
    public static set is_mute(value: boolean) {
        AudioManager._is_mute = value;
    }
    public static get is_mute() {
        return AudioManager._is_mute;
    }

    _audioSource: AudioSource = null!;
    //单例模式调用
    public static instance: AudioManager = null;
    protected onLoad(): void {
        AudioManager.instance = this;
        // 声明常驻根节点，该节点不会在场景切换中被销毁。目标节点必须是根节点，否则无效。
        director.addPersistRootNode(this.node);
        this._audioSource = this.node.getComponent(AudioSource);


        MsgCenter.Ins.register(MsgBehavior.STOP_AUDIO, this.stopAll, this);
        MsgCenter.Ins.register(MsgBehavior.PLAY_AUDIO, this.playAll, this);

        if (this._audioSource == null) {
            this._audioSource = this.node.addComponent(AudioSource);
        }
    }

    private stopAll() {
        console.log("stopAll")
        this.bgm.volume = 0;
        this.click.volume = 0;
        this.chuxian.volume = 0;
 
        this.zhuangji.volume = 0;
        this.zhuanghui.volume = 0;
        // this.feiji.volume = 0;
        this.mutou.volume = 0;
    }

    private playAll() {
        if (AudioManager.is_mute) return;
        this.bgm.volume = 1;
        this.click.volume = 0.5;
        this.chuxian.volume = 0.5;
 
        this.zhuangji.volume = 1;
        this.zhuanghui.volume = 1;
        // this.feiji.volume = 1;
        this.mutou.volume = 0.5;
    }

    //根据类型播放音效
    public play(type: AudioType): void {
        if (AudioManager.is_mute) {
            return;
        }
        switch (type) {
            case AudioType.BGM:
                if (!this.bgm.playing) {
                    this.bgm.play();
                }
                break;
            case AudioType.click:
                this.click.play();
                break;
           
            case AudioType.A:
                this.A.play();
                break;
            case AudioType.B:
                this.B.play();
                break;
            // case AudioType.feiji:
            //     this.feiji.play();
            //     break;
            case AudioType.mutou:
                this.mutou.getComponent(AudioFader).fadeIn();
                //this.jingbao.getComponent(AudioFader).fadeOut();
                this.mutou.play();
                // tween(this.mutou).delay(4).call(() => {
                //     this.mutou.getComponent(AudioFader).fadeOut();
                // }).start();
                break;

                case AudioType.huandang:
                    this.huandang.play();
                    break;

                    case AudioType.dafeiji:
                        this.dafeiji.play();
                        break;
        }
    }

    //根据类型播放音效
    public stop(type: AudioType): void {
        if (AudioManager.is_mute) {
            return;
        }
        switch (type) {
            case AudioType.BGM:
                if (this.bgm.playing) {
                    this.bgm.stop();
                }
                break;
            case AudioType.click:
                this.click.stop();
                break;
         
            case AudioType.zhuangji:
                this.zhuangji.stop();
                break;
            case AudioType.zhuanghui:
                this.zhuanghui.stop();
                break;
            // case AudioType.feiji:
            //     this.feiji.stop();
            //     break;
            case AudioType.mutou:
                this.mutou.stop();
                break;
        }
    }
}

