"use strict";
cc._RF.push(module, 'd8794TVhZ1CqIhvqbFGEzQQ', 'MainGame');
// Script/Main/MainGame.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var EventType_1 = require("../Data/EventType");
var GameManager_1 = require("../Manager/GameManager");
var ListenerManager_1 = require("../Manager/ListenerManager");
var SoundManager_1 = require("../Manager/SoundManager");
var Utils_1 = require("../Manager/Utils");
var super_html_playable_1 = require("./super_html_playable");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var MainGame = /** @class */ (function (_super) {
    __extends(MainGame, _super);
    function MainGame() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**记录屏幕尺寸 */
        _this.clientSize = cc.size(0, 0);
        //结束界面
        _this.end = null;
        //下载按钮
        _this.dowlandBtn = null;
        _this.logoNode = null;
        return _this;
    }
    MainGame.prototype.onLoad = function () {
        if (GameManager_1.GameManager.isMultilingual) {
            GameManager_1.GameManager.curLanguage = cc.sys.languageCode.slice(0, 2);
        }
        Utils_1.Utils.setSpriteFrame(this.logoNode, "logo-" + GameManager_1.GameManager.curLanguage);
        super_html_playable_1.default.set_google_play_url("https://play.google.com/store/apps/details?id=com.gm11.bingocraze&hl=us_en&gl=us");
        super_html_playable_1.default.set_app_store_url("https://apps.apple.com/us/app/bingo-aloha-vegas-bingo-games/id1562265193");
        if (window["isMute"] != undefined) {
            if (window["isMute"] == true) {
                console.log("启动开始就开启静音");
                GameManager_1.GameManager.isMute = true;
                SoundManager_1.SoundManager.stopAll();
                ListenerManager_1.ListenerManager.dispatch(EventType_1.EventType.MUTE_OPEN);
            }
            else {
                console.log("启动开始就关闭静音");
                GameManager_1.GameManager.isMute = false; //给游戏全局音频解除静音
                ListenerManager_1.ListenerManager.dispatch(EventType_1.EventType.MUTE_CLOSE);
                if (GameManager_1.GameManager.canPlayAudio) {
                    SoundManager_1.SoundManager.playEffect("bgm", true, false, false);
                }
            }
        }
    };
    MainGame.prototype.start = function () {
        var _this = this;
        this.changeDesignResolution();
        cc.view.setResizeCallback(function () {
            _this.changeDesignResolution();
        });
        //游戏结束
        ListenerManager_1.ListenerManager.on(EventType_1.EventType.GAME_OVER, function () {
            _this.end.active = true;
        }, this);
        ListenerManager_1.ListenerManager.on(EventType_1.EventType.GAME_FAIL, function () {
        }, this);
        //下载
        ListenerManager_1.ListenerManager.on(EventType_1.EventType.CLICK_DOWLAND_BTN, function () {
            console.log("下载");
            super_html_playable_1.default.download();
            // window.open();
        }, this);
        // this.dowlandBtn.on(cc.Node.EventType.TOUCH_START, () => {
        //     ListenerManager.dispatch(EventType.CLICK_DOWLAND_BTN);
        // });
        this.node.on(cc.Node.EventType.TOUCH_START, this.playBgm, this);
    };
    //播放背景音乐
    MainGame.prototype.playBgm = function () {
        GameManager_1.GameManager.canPlayAudio = true;
        this.node.off(cc.Node.EventType.TOUCH_START, this.playBgm, this);
        SoundManager_1.SoundManager.playEffect("bgm", true, false, false);
    };
    /**
    * 屏幕适配
    * @returns
    */
    MainGame.prototype.changeDesignResolution = function () {
        var size = cc.view.getFrameSize();
        //未检测到尺寸变化则跳出函数
        if (size.width == this.clientSize.width && size.height == this.clientSize.height) {
            return;
        }
        //获取当前屏幕宽高
        var frameWidth = cc.view.getFrameSize().width;
        var frameHeight = cc.view.getFrameSize().height;
        if (frameHeight >= frameWidth) {
            cc.Canvas.instance.fitHeight = false;
            cc.Canvas.instance.fitWidth = true;
            if (frameWidth >= 540 || frameHeight <= 480) {
                cc.Canvas.instance.fitHeight = true;
                cc.Canvas.instance.fitWidth = false;
            }
            else {
                cc.Canvas.instance.fitHeight = false;
                cc.Canvas.instance.fitWidth = true;
            }
            this.node.scale = 1;
            this.node.getChildByName("tip").setScale(1);
            GameManager_1.GameManager.screenMode = 0;
            ListenerManager_1.ListenerManager.dispatch(EventType_1.EventType.SCREEN_V);
        }
        else {
            cc.Canvas.instance.fitWidth = false;
            cc.Canvas.instance.fitHeight = true;
            if (frameWidth >= 1024) {
                this.node.scale = 1;
            }
            else {
                this.node.scale = 1.1;
            }
            this.node.getChildByName("tip").setScale(2);
            GameManager_1.GameManager.screenMode = 1;
            ListenerManager_1.ListenerManager.dispatch(EventType_1.EventType.SCREEN_H);
        }
    };
    __decorate([
        property(cc.Node)
    ], MainGame.prototype, "end", void 0);
    __decorate([
        property(cc.Node)
    ], MainGame.prototype, "dowlandBtn", void 0);
    __decorate([
        property(cc.Node)
    ], MainGame.prototype, "logoNode", void 0);
    MainGame = __decorate([
        ccclass
    ], MainGame);
    return MainGame;
}(cc.Component));
exports.default = MainGame;
window.muteOpen = function () {
    console.log("静音开启");
    GameManager_1.GameManager.isMute = true;
    SoundManager_1.SoundManager.stopAll(); //给游戏全局音频进行静音处理
    //注意全局静音后，加判断不允许新的音频播放
    ListenerManager_1.ListenerManager.dispatch(EventType_1.EventType.MUTE_OPEN);
};
window.muteClose = function () {
    console.log("静音关闭");
    GameManager_1.GameManager.isMute = false; //给游戏全局音频解除静音
    ListenerManager_1.ListenerManager.dispatch(EventType_1.EventType.MUTE_CLOSE);
    if (GameManager_1.GameManager.canPlayAudio) {
        SoundManager_1.SoundManager.playEffect("bgm", true, false, false);
    }
};

cc._RF.pop();