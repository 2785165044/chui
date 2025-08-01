
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Main/MainGame.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxNYWluXFxNYWluR2FtZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSwrQ0FBOEM7QUFDOUMsc0RBQXFEO0FBQ3JELDhEQUE2RDtBQUM3RCx3REFBdUQ7QUFDdkQsMENBQXlDO0FBQ3pDLDZEQUF3RDtBQUVsRCxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFzQyw0QkFBWTtJQUFsRDtRQUFBLHFFQXVIQztRQXRIRyxZQUFZO1FBQ0osZ0JBQVUsR0FBWSxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUM1QyxNQUFNO1FBRUUsU0FBRyxHQUFZLElBQUksQ0FBQztRQUM1QixNQUFNO1FBRUUsZ0JBQVUsR0FBWSxJQUFJLENBQUM7UUFFM0IsY0FBUSxHQUFZLElBQUksQ0FBQzs7SUE2R3JDLENBQUM7SUExR2EseUJBQU0sR0FBaEI7UUFDSSxJQUFJLHlCQUFXLENBQUMsY0FBYyxFQUFFO1lBQzVCLHlCQUFXLENBQUMsV0FBVyxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7U0FDN0Q7UUFDRCxhQUFLLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsT0FBTyxHQUFHLHlCQUFXLENBQUMsV0FBVyxDQUFDLENBQUM7UUFFdkUsNkJBQW1CLENBQUMsbUJBQW1CLENBQUMsa0ZBQWtGLENBQUMsQ0FBQztRQUM1SCw2QkFBbUIsQ0FBQyxpQkFBaUIsQ0FBQywwRUFBMEUsQ0FBQyxDQUFDO1FBRWxILElBQUksTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLFNBQVMsRUFBRTtZQUMvQixJQUFJLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxJQUFJLEVBQUU7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Q0FBQyxDQUFDO0tBQ3REO0FBQ0wsQ0FBQyxDQUFBIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCB7IEV2ZW50VHlwZSB9IGZyb20gXCIuLi9EYXRhL0V2ZW50VHlwZVwiO1xyXG5pbXBvcnQgeyBHYW1lTWFuYWdlciB9IGZyb20gXCIuLi9NYW5hZ2VyL0dhbWVNYW5hZ2VyXCI7XHJcbmltcG9ydCB7IExpc3RlbmVyTWFuYWdlciB9IGZyb20gXCIuLi9NYW5hZ2VyL0xpc3RlbmVyTWFuYWdlclwiO1xyXG5pbXBvcnQgeyBTb3VuZE1hbmFnZXIgfSBmcm9tIFwiLi4vTWFuYWdlci9Tb3VuZE1hbmFnZXJcIjtcclxuaW1wb3J0IHsgVXRpbHMgfSBmcm9tIFwiLi4vTWFuYWdlci9VdGlsc1wiO1xyXG5pbXBvcnQgc3VwZXJfaHRtbF9wbGF5YWJsZSBmcm9tIFwiLi9zdXBlcl9odG1sX3BsYXlhYmxlXCI7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWFpbkdhbWUgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gICAgLyoq6K6w5b2V5bGP5bmV5bC65a+4ICovXHJcbiAgICBwcml2YXRlIGNsaWVudFNpemU6IGNjLlNpemUgPSBjYy5zaXplKDAsIDApO1xyXG4gICAgLy/nu5PmnZ/nlYzpnaJcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgcHJpdmF0ZSBlbmQ6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgLy/kuIvovb3mjInpkq5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgcHJpdmF0ZSBkb3dsYW5kQnRuOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgcHJpdmF0ZSBsb2dvTm9kZTogY2MuTm9kZSA9IG51bGw7XHJcblxyXG5cclxuICAgIHByb3RlY3RlZCBvbkxvYWQoKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKEdhbWVNYW5hZ2VyLmlzTXVsdGlsaW5ndWFsKSB7XHJcbiAgICAgICAgICAgIEdhbWVNYW5hZ2VyLmN1ckxhbmd1YWdlID0gY2Muc3lzLmxhbmd1YWdlQ29kZS5zbGljZSgwLCAyKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgVXRpbHMuc2V0U3ByaXRlRnJhbWUodGhpcy5sb2dvTm9kZSwgXCJsb2dvLVwiICsgR2FtZU1hbmFnZXIuY3VyTGFuZ3VhZ2UpO1xyXG5cclxuICAgICAgICBzdXBlcl9odG1sX3BsYXlhYmxlLnNldF9nb29nbGVfcGxheV91cmwoXCJodHRwczovL3BsYXkuZ29vZ2xlLmNvbS9zdG9yZS9hcHBzL2RldGFpbHM/aWQ9Y29tLmdtMTEuYmluZ29jcmF6ZSZobD11c19lbiZnbD11c1wiKTtcclxuICAgICAgICBzdXBlcl9odG1sX3BsYXlhYmxlLnNldF9hcHBfc3RvcmVfdXJsKFwiaHR0cHM6Ly9hcHBzLmFwcGxlLmNvbS91cy9hcHAvYmluZ28tYWxvaGEtdmVnYXMtYmluZ28tZ2FtZXMvaWQxNTYyMjY1MTkzXCIpO1xyXG5cclxuICAgICAgICBpZiAod2luZG93W1wiaXNNdXRlXCJdICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBpZiAod2luZG93W1wiaXNNdXRlXCJdID09IHRydWUpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi5ZCv5Yqo5byA5aeL5bCx5byA5ZCv6Z2Z6Z+zXCIpO1xyXG4gICAgICAgICAgICAgICAgR2FtZU1hbmFnZXIuaXNNdXRlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIFNvdW5kTWFuYWdlci5zdG9wQWxsKCk7XHJcbiAgICAgICAgICAgICAgICBMaXN0ZW5lck1hbmFnZXIuZGlzcGF0Y2goRXZlbnRUeXBlLk1VVEVfT1BFTik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIuWQr+WKqOW8gOWni+WwseWFs+mXremdmemfs1wiKTtcclxuICAgICAgICAgICAgICAgIEdhbWVNYW5hZ2VyLmlzTXV0ZSA9IGZhbHNlOyAgICAvL+e7mea4uOaIj+WFqOWxgOmfs+mikeino+mZpOmdmemfs1xyXG4gICAgICAgICAgICAgICAgTGlzdGVuZXJNYW5hZ2VyLmRpc3BhdGNoKEV2ZW50VHlwZS5NVVRFX0NMT1NFKTtcclxuICAgICAgICAgICAgICAgIGlmIChHYW1lTWFuYWdlci5jYW5QbGF5QXVkaW8pIHtcclxuICAgICAgICAgICAgICAgICAgICBTb3VuZE1hbmFnZXIucGxheUVmZmVjdChcImJnbVwiLCB0cnVlLCBmYWxzZSwgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0KCkge1xyXG4gICAgICAgIHRoaXMuY2hhbmdlRGVzaWduUmVzb2x1dGlvbigpO1xyXG4gICAgICAgIGNjLnZpZXcuc2V0UmVzaXplQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmNoYW5nZURlc2lnblJlc29sdXRpb24oKTtcclxuICAgICAgICB9KTtcclxuXHJcblxyXG4gICAgICAgIC8v5ri45oiP57uT5p2fXHJcbiAgICAgICAgTGlzdGVuZXJNYW5hZ2VyLm9uKEV2ZW50VHlwZS5HQU1FX09WRVIsICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5lbmQuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICB9LCB0aGlzKTtcclxuXHJcbiAgICAgICAgTGlzdGVuZXJNYW5hZ2VyLm9uKEV2ZW50VHlwZS5HQU1FX0ZBSUwsICgpID0+IHtcclxuXHJcbiAgICAgICAgfSwgdGhpcyk7XHJcblxyXG4gICAgICAgIC8v5LiL6L29XHJcbiAgICAgICAgTGlzdGVuZXJNYW5hZ2VyLm9uKEV2ZW50VHlwZS5DTElDS19ET1dMQU5EX0JUTiwgKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIuS4i+i9vVwiKTtcclxuICAgICAgICAgICAgc3VwZXJfaHRtbF9wbGF5YWJsZS5kb3dubG9hZCgpO1xyXG4gICAgICAgICAgICAvLyB3aW5kb3cub3BlbigpO1xyXG5cclxuICAgICAgICB9LCB0aGlzKTtcclxuXHJcbiAgICAgICAgLy8gdGhpcy5kb3dsYW5kQnRuLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCAoKSA9PiB7XHJcbiAgICAgICAgLy8gICAgIExpc3RlbmVyTWFuYWdlci5kaXNwYXRjaChFdmVudFR5cGUuQ0xJQ0tfRE9XTEFORF9CVE4pO1xyXG4gICAgICAgIC8vIH0pO1xyXG5cclxuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsIHRoaXMucGxheUJnbSwgdGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgLy/mkq3mlL7og4zmma/pn7PkuZBcclxuICAgIHBsYXlCZ20oKSB7XHJcbiAgICAgICAgR2FtZU1hbmFnZXIuY2FuUGxheUF1ZGlvID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLm5vZGUub2ZmKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCB0aGlzLnBsYXlCZ20sIHRoaXMpO1xyXG4gICAgICAgIFNvdW5kTWFuYWdlci5wbGF5RWZmZWN0KFwiYmdtXCIsIHRydWUsIGZhbHNlLCBmYWxzZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAqIOWxj+W5lemAgumFjVxyXG4gICAgKiBAcmV0dXJucyBcclxuICAgICovXHJcbiAgICBjaGFuZ2VEZXNpZ25SZXNvbHV0aW9uKCkge1xyXG4gICAgICAgIGxldCBzaXplOiBjYy5TaXplID0gY2Mudmlldy5nZXRGcmFtZVNpemUoKTtcclxuICAgICAgICAvL+acquajgOa1i+WIsOWwuuWvuOWPmOWMluWImei3s+WHuuWHveaVsFxyXG4gICAgICAgIGlmIChzaXplLndpZHRoID09IHRoaXMuY2xpZW50U2l6ZS53aWR0aCAmJiBzaXplLmhlaWdodCA9PSB0aGlzLmNsaWVudFNpemUuaGVpZ2h0KSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy/ojrflj5blvZPliY3lsY/luZXlrr3pq5hcclxuICAgICAgICBsZXQgZnJhbWVXaWR0aCA9IGNjLnZpZXcuZ2V0RnJhbWVTaXplKCkud2lkdGg7XHJcbiAgICAgICAgbGV0IGZyYW1lSGVpZ2h0ID0gY2Mudmlldy5nZXRGcmFtZVNpemUoKS5oZWlnaHQ7XHJcbiAgICAgICAgaWYgKGZyYW1lSGVpZ2h0ID49IGZyYW1lV2lkdGgpIHtcclxuICAgICAgICAgICAgY2MuQ2FudmFzLmluc3RhbmNlLmZpdEhlaWdodCA9IGZhbHNlO1xyXG4gICAgICAgICAgICBjYy5DYW52YXMuaW5zdGFuY2UuZml0V2lkdGggPSB0cnVlO1xyXG4gICAgICAgICAgICBpZiAoZnJhbWVXaWR0aCA+PSA1NDAgfHwgZnJhbWVIZWlnaHQgPD0gNDgwKSB7XHJcbiAgICAgICAgICAgICAgICBjYy5DYW52YXMuaW5zdGFuY2UuZml0SGVpZ2h0ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGNjLkNhbnZhcy5pbnN0YW5jZS5maXRXaWR0aCA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY2MuQ2FudmFzLmluc3RhbmNlLmZpdEhlaWdodCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgY2MuQ2FudmFzLmluc3RhbmNlLmZpdFdpZHRoID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLm5vZGUuc2NhbGUgPSAxO1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJ0aXBcIikuc2V0U2NhbGUoMSk7XHJcbiAgICAgICAgICAgIEdhbWVNYW5hZ2VyLnNjcmVlbk1vZGUgPSAwO1xyXG4gICAgICAgICAgICBMaXN0ZW5lck1hbmFnZXIuZGlzcGF0Y2goRXZlbnRUeXBlLlNDUkVFTl9WKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjYy5DYW52YXMuaW5zdGFuY2UuZml0V2lkdGggPSBmYWxzZTtcclxuICAgICAgICAgICAgY2MuQ2FudmFzLmluc3RhbmNlLmZpdEhlaWdodCA9IHRydWU7XHJcbiAgICAgICAgICAgIGlmIChmcmFtZVdpZHRoID49IDEwMjQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5zY2FsZSA9IDE7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUuc2NhbGUgPSAxLjE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwidGlwXCIpLnNldFNjYWxlKDIpO1xyXG5cclxuICAgICAgICAgICAgR2FtZU1hbmFnZXIuc2NyZWVuTW9kZSA9IDE7XHJcbiAgICAgICAgICAgIExpc3RlbmVyTWFuYWdlci5kaXNwYXRjaChFdmVudFR5cGUuU0NSRUVOX0gpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxud2luZG93Lm11dGVPcGVuID0gZnVuY3Rpb24gKCkge1xyXG4gICAgY29uc29sZS5sb2coXCLpnZnpn7PlvIDlkK9cIik7XHJcbiAgICBHYW1lTWFuYWdlci5pc011dGUgPSB0cnVlO1xyXG4gICAgU291bmRNYW5hZ2VyLnN0b3BBbGwoKTsgLy/nu5nmuLjmiI/lhajlsYDpn7PpopHov5vooYzpnZnpn7PlpITnkIZcclxuICAgIC8v5rOo5oSP5YWo5bGA6Z2Z6Z+z5ZCO77yM5Yqg5Yik5pat5LiN5YWB6K645paw55qE6Z+z6aKR5pKt5pS+XHJcbiAgICBMaXN0ZW5lck1hbmFnZXIuZGlzcGF0Y2goRXZlbnRUeXBlLk1VVEVfT1BFTik7XHJcbn1cclxuXHJcbndpbmRvdy5tdXRlQ2xvc2UgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICBjb25zb2xlLmxvZyhcIumdmemfs+WFs+mXrVwiKTtcclxuICAgIEdhbWVNYW5hZ2VyLmlzTXV0ZSA9IGZhbHNlOyAgICAvL+e7mea4uOaIj+WFqOWxgOmfs+mikeino+mZpOmdmemfs1xyXG4gICAgTGlzdGVuZXJNYW5hZ2VyLmRpc3BhdGNoKEV2ZW50VHlwZS5NVVRFX0NMT1NFKTtcclxuICAgIGlmIChHYW1lTWFuYWdlci5jYW5QbGF5QXVkaW8pIHtcclxuICAgICAgICBTb3VuZE1hbmFnZXIucGxheUVmZmVjdChcImJnbVwiLCB0cnVlLCBmYWxzZSwgZmFsc2UpO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==