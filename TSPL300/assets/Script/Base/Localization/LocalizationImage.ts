import { Component, Sprite, SpriteFrame, SpriteRenderer, _decorator } from "cc";
import LocalizationCtr from "./LocalizationCtr";
import MsgCenter from "../../Common/MsgCenter";
import MsgBehavior from "../../Common/MsgBehavior";

const { ccclass, property } = _decorator;

@ccclass('LocalizationImage')
export default class LocalizationImage extends Component {
    @property
    is3D: boolean = false;
    // 巴西语图片
    @property({ type: SpriteFrame, displayName: "巴西语图片-pt" })
    pt: SpriteFrame = null;

    // 印尼语图片
    @property({ type: SpriteFrame, displayName: "印尼语图片-id" })
    id: SpriteFrame = null;

    // 添加其他语言的图片属性...
    @property({ type: SpriteFrame, displayName: "中文语图片-zh" })
    zh: SpriteFrame = null;
    // 添加其他语言的图片属性...
    @property({ type: SpriteFrame, displayName: "繁体语图片-tw" })
    tw: SpriteFrame = null;
    @property({ type: SpriteFrame, displayName: "微信语图片_zh_CN" })
    wx: SpriteFrame = null;

    @property({ type: SpriteFrame, displayName: "英语语图片-en" })
    en: SpriteFrame = null;

    @property({ type: SpriteFrame, displayName: "西班牙语图片-es" })
    es: SpriteFrame = null;

    @property({ type: SpriteFrame, displayName: "俄语语图片-ru" })
    ru: SpriteFrame = null;

    @property({ type: SpriteFrame, displayName: "法语语图片-fr" })
    fr: SpriteFrame = null;

    @property({ type: SpriteFrame, displayName: "德语语图片-de" })
    de: SpriteFrame = null;

    @property({ type: SpriteFrame, displayName: "日语语图片-ja" })
    ja: SpriteFrame = null;

    @property({ type: SpriteFrame, displayName: "韩语语图片-ko" })
    ko: SpriteFrame = null;

    @property({ type: SpriteFrame, displayName: "阿拉伯语语图片-ar" })
    ar: SpriteFrame = null;

    protected onLoad(): void {
        this.Refresh();
        MsgCenter.Ins.register(MsgBehavior.LanguageChange, this.Refresh, this);
    }

    protected OnEnable() {
        this.Refresh();
        MsgCenter.Ins.register(MsgBehavior.LanguageChange, this.Refresh, this);
    }

    protected OnDisable() {
        MsgCenter.Ins.off(MsgBehavior.LanguageChange, this.Refresh, this);
    }

    // 刷新 UI
    public Refresh() {
        const localizationCtr = LocalizationCtr.instance;
        let sf = null;
        switch (localizationCtr.languageType) {
            case "pt":
                sf = this.pt;
                break;
            case "id":
                sf = this.id;
                break;
            case "cn":
                sf = this.zh;
                break;
            case "chl":
                sf = this.tw;
                break;
            case "wx":
                sf = this.wx;
                break;
            case "en":
                sf = this.en;
                break;
            case "es":
                sf = this.es;
                break;
            case "ru":
                sf = this.ru;
                break;
            case "fr":
                sf = this.fr;
                break;
            case "de":
                sf = this.de;
                break;
            case "ja":
                sf = this.ja;
                break;
            case "ko":
                sf = this.ko;
                break;
            case "ar":
                sf = this.ar;
                break;
            case "cn":
                sf = this.zh;
                break;
            // 默认情况，可以根据实际情况处理
            default:

                break;
        }
        if(this.is3D) {
            if (sf == null) {
                this.node.getComponent(SpriteRenderer).spriteFrame = this.en;
            }
            else {
                this.node.getComponent(SpriteRenderer).spriteFrame = sf;
            }
        }else {
            if (sf == null) {
                this.node.getComponent(Sprite).spriteFrame = this.en;
            }
            else {
                this.node.getComponent(Sprite).spriteFrame = sf;
            }
        }
    }

}