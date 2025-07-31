import { JsonAsset, log, sys } from "cc";
import ToolsMgr from "../../Tools/ToolsMgr";
import MsgCenter from "../../Common/MsgCenter";
import MsgBehavior from "../../Common/MsgBehavior";
import GameData from "../../Game/Main/GameData";

//本地化控制器
export default class LocalizationCtr {
    //单利模式
    private static _instance: LocalizationCtr;
    public static get instance(): LocalizationCtr {
        if (this._instance == null) {
            this._instance = new LocalizationCtr();
            this._instance.init();
        }
        return this._instance;
    }


    //语言类型
    private _languageType: string = "zh";
    public get languageType(): string {
        return this._languageType;
    }
    //原始的语言类型
    private _originalLanguageType: string = "zh";
    public get originalLanguageType(): string {
        return this._originalLanguageType;
    }

    //语言数据
    private _languageData: any;

    //加载数据
    public load(success?: Function): void {
        if (this._languageData != null) {
            success && success();
            console.log("语言数据已经加载过了");
            return;
        }
        //加载语言数据
        ToolsMgr.instance.load("configs/Localization", JsonAsset, (error, data: JsonAsset) => {
            if (error) {
                log("configs/Localization load error == " + error);
                return;
            }
            this._languageData = data.json;
            MsgCenter.Ins.dispatch(MsgBehavior.LanguageChange);
            success && success();
            console.log("语言数据加载完成");
        });
    }

    //初始化
    public init(): void {
        //只获取一次语音类型
        if(GameData.isWX) {
            let data = wx.getAppBaseInfo();
            if(data && data.language) {
                this._originalLanguageType = data.language;
                console.log("获取到微信语言类型 == " + this._originalLanguageType);
            }
        }else {
            let languageType = ToolsMgr.instance.getItem("languageType", "");
            if (languageType != "") {
                this._originalLanguageType = languageType;
                console.log("获取到本地语言类型 == " + this._originalLanguageType);
            }
            else {
                this._originalLanguageType = sys.language;
                ToolsMgr.instance.setItem("languageType", this._originalLanguageType);
                console.log("获取到系统语言类型 == " + this._originalLanguageType);
            }
        }

        //设置语言类型
        this._languageType = this.LanguageTypeToFull(this._originalLanguageType);
        //this._originalLanguageType转大写
        // this._originalLanguageType = this._originalLanguageType.toUpperCase();
        this.test();
    }

    //语言类型缩写转换为全写
    public LanguageTypeToFull(languageType: string): string {
        if (languageType == "zh" || languageType == "zh-cn" || languageType == "zh-CN" || languageType == "ChineseSimplified") {
            return "cn";
        }
        //繁体
        else if (languageType == "chl" || languageType == "zh-tw" || languageType == "zh-hk" || languageType == "ChineseTraditional") {
            return "chl";
        }
        // wx
        else if (languageType == "zh_CN") {
            return "wx";
        }
        else if (languageType == "en" || languageType == "en-us" || languageType == "en-US" || languageType == "English") {
            return "en";
        }
        //印尼
        else if (languageType == "id" || languageType == "id-id" || languageType == "id-ID" || languageType == "Indonesian") {
            return "id";
        }
        //巴西
        else if (languageType == "pt" || languageType == "pt-br" || languageType == "pt-BR" || languageType == "Portuguese") {
            return "pt";
        }
        //西班牙
        else if (languageType == "es" || languageType == "es-es" || languageType == "es-ES" || languageType == "Spanish") {
            return "es";
        }
        //俄语
        else if (languageType == "ru" || languageType == "ru-ru" || languageType == "ru-RU" || languageType == "Russian") {
            return "ru";
        }
        //法语
        else if (languageType == "fr" || languageType == "fr-fr" || languageType == "fr-FR" || languageType == "French") {
            return "fr";
        }
        //德语
        else if (languageType == "de" || languageType == "de-de" || languageType == "de-DE" || languageType == "German") {
            return "de";
        }
        //日语
        else if (languageType == "ja" || languageType == "ja-jp" || languageType == "ja-JP" || languageType == "Japanese") {
            return "ja";
        }
        //韩语
        else if (languageType == "ko" || languageType == "ko-kr" || languageType == "ko-KR" || languageType == "Korean") {
            return "ko";
        }
        //阿拉伯语
        else if (languageType == "ar" || languageType == "ar-eg" || languageType == "ar-EG" || languageType == "Arabic") {
            return "ar";
        }
        return "en";
    }

    public GetText(key: string): string {
        let text = this.GetLanguageDataByKey(key);
        if (text == null) {
            return key;
        }
        let textArr = text[this.languageType];
        if (textArr == null) {
            return text["en"];
        }
        return textArr;
    }

    //根据键获取语言数据
    public GetLanguageDataByKey(key: string): any {
        if (this._languageData == null) {
            return null;
        }
        for (let i = 0; i < this._languageData.length; i++) {
            let data = this._languageData[i];
            if (data.key == key) {
                return data;
            }
        }
        return null;
    }

    public test() {
        //16 gof
        // let b = ["cn", "en", "de", "fr", "chl", "es", "pt", "ru", "tr", "ar", "th", "id", "ja", "ko", "it", "pl"];
        //7 ffa
        let b = [ "en", "de", "wx", "fr", "ja", "ko", "chl"];

        let a = "";
        let arr = a.split("	");
        let data = {};
        for (let i = 0; i < arr.length; i++) {
            const element = arr[i];
            if (element == "" || element == " ") {
                arr.splice(i, 1);
                i--;
                continue;
            }
            data[b[i]] = element;
        }
        log(b);
        log(arr);
        log(data);

    }

}