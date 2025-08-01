"use strict";
cc._RF.push(module, '9b670q/hiBHmqAE79OS52k1', 'MainLogic');
// Script/Main/MainLogic.ts

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
var ListenerManager_1 = require("../Manager/ListenerManager");
var Utils_1 = require("../Manager/Utils");
var Ball_1 = require("./Ball");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var MainLogic = /** @class */ (function (_super) {
    __extends(MainLogic, _super);
    function MainLogic() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.ballUi = null;
        _this.cardParent = null;
        _this.maskNode = null;
        //当前显示小球在父级中的索引
        _this.ballIndex = -1;
        //当前需要点击的数字
        _this.curNum = -1;
        //
        _this.audioNameArr = ["G8", "O62", "N35", "B3", "G59", "B5", "O66", "O72"];
        _this.ballParent = null;
        _this.cardPosArr = [
            [cc.v2(0, 0)],
            [cc.v2(0, 0)],
        ];
        _this.need_touch_card = [];
        _this.isTimeOut = false;
        return _this;
    }
    MainLogic.prototype.start = function () {
        var _this = this;
        this.ballParent = this.ballUi.getChildByName("mask").getChildByName("ballParent");
        this.ballUi.getComponent(Ball_1.default).createBall(this.audioNameArr);
        this.changeDesignResolution();
        ListenerManager_1.ListenerManager.on(EventType_1.EventType.SCREEN_V, function () {
            _this.changeDesignResolution();
        }, this);
        ListenerManager_1.ListenerManager.on(EventType_1.EventType.SCREEN_H, function () {
            _this.changeDesignResolution();
        }, this);
        ListenerManager_1.ListenerManager.on(EventType_1.EventType.NEED_TOUCH_CARD, function (node) {
            _this.need_touch_card.push(node);
            if (_this.maskNode.isValid) {
                if (!_this.maskNode.active) {
                    _this.maskNode.active = true;
                    _this.maskNode.setPosition(Utils_1.Utils.getNodePos(_this.need_touch_card[0], _this.maskNode.parent));
                    _this.maskNode.opacity = 0;
                    _this.maskNode.runAction(cc.fadeIn(0.3));
                    var tip = _this.node.parent.getChildByName("tip");
                    tip.active = true;
                    tip.opacity = 0;
                    tip.runAction(cc.fadeIn(0.3));
                }
            }
        }, this);
        ListenerManager_1.ListenerManager.on(EventType_1.EventType.TOUCH_CARD, function (node) {
            _this.need_touch_card.splice(_this.need_touch_card.indexOf(node), 1);
            if (_this.need_touch_card.length == 0) {
                if (_this.ballIndex >= 2) {
                    ListenerManager_1.ListenerManager.dispatch(EventType_1.EventType.GAME_OVER);
                }
                else {
                    _this.moveBallParent();
                }
            }
            if (_this.maskNode.isValid) {
                _this.maskNode.runAction(cc.sequence(cc.fadeOut(0.3), cc.callFunc(function () {
                    _this.maskNode.destroy();
                })));
                var tip = _this.node.parent.getChildByName("tip");
                tip.runAction(cc.fadeOut(0.3));
            }
        }, this);
        ListenerManager_1.ListenerManager.on(EventType_1.EventType.START_TIME, function () {
            _this.unscheduleAllCallbacks();
            _this.scheduleOnce(function () {
                //
                // 
                ListenerManager_1.ListenerManager.dispatch(EventType_1.EventType.GAME_OVER);
            }, 100);
        }, this);
        this.init();
    };
    MainLogic.prototype.init = function () {
        // for (let i = 0; i < this.cardParent.childrenCount; i++) {
        //     let card: cc.Node = this.cardParent.children[i];
        //     Utils.flipY(card, 1);
        // }
        this.moveBallParent();
    };
    //显示下个数字小球
    MainLogic.prototype.moveBallParent = function () {
        var _this = this;
        this.ballIndex += 1;
        this.curNum = this.ballUi.getComponent(Ball_1.default).moveBallParent(function () {
            _this.scheduleOnce(function () {
                ListenerManager_1.ListenerManager.dispatch(EventType_1.EventType.DISPLAY_HAND, _this.curNum);
            }, 0.5);
        });
    };
    //播放动画
    MainLogic.prototype.playAn = function (node, callback) {
        if (callback === void 0) { callback = null; }
        node.active = true;
        node.getComponent(cc.Animation).play();
        node.getComponent(cc.Animation).on(cc.Animation.EventType.FINISHED, function () {
            node.active = false;
            if (callback) {
                callback();
            }
        });
    };
    /**
     * 屏幕适配
     * @returns
     */
    MainLogic.prototype.changeDesignResolution = function () {
        //未检测到尺寸变化则跳出函数
        //获取当前屏幕宽高
        var frameWidth = cc.view.getFrameSize().width;
        var frameHeight = cc.view.getFrameSize().height;
        if (frameHeight >= frameWidth) {
            this.SCREEN_V();
        }
        else {
            this.SCREEN_H();
        }
    };
    MainLogic.prototype.SCREEN_V = function () {
        // this.ballUi.setPosition(cc.v2(0, 360));
        this.ballUi.getComponent(cc.Widget).isAlignVerticalCenter = false;
        this.ballUi.getComponent(cc.Widget).isAlignHorizontalCenter = true;
        this.ballUi.getComponent(cc.Widget).isAlignLeft = false;
        this.ballUi.getComponent(cc.Widget).isAlignTop = true;
        this.ballUi.getComponent(cc.Widget).top = 100;
        this.ballUi.angle = 0;
        this.ballUi.setScale(1.2);
        for (var i = 0; i < this.ballParent.childrenCount; i++) {
            this.ballParent.children[i].angle = 0;
        }
        this.cardParent.setPosition(cc.v2(0, -80));
        this.cardParent.setScale(0.45);
        if (this.cardParent.childrenCount > 0) {
            this.cardParent.children[0].setPosition(this.cardPosArr[0][0]);
        }
        for (var i = 0; i < this.cardParent.childrenCount; i++) {
            this.cardParent.children[i].setPosition(this.cardPosArr[0][i]);
        }
    };
    MainLogic.prototype.SCREEN_H = function () {
        for (var i = 0; i < this.ballParent.childrenCount; i++) {
            this.ballParent.children[i].angle = 90;
        }
        this.cardParent.setPosition(cc.v2(100, 0));
        this.cardParent.setScale(0.7);
        for (var i = 0; i < this.cardParent.childrenCount; i++) {
            this.cardParent.children[i].setPosition(this.cardPosArr[1][i]);
        }
        this.ballUi.getComponent(cc.Widget).isAlignHorizontalCenter = false;
        this.ballUi.getComponent(cc.Widget).isAlignVerticalCenter = true;
        this.ballUi.getComponent(cc.Widget).isAlignTop = false;
        this.ballUi.getComponent(cc.Widget).isAlignLeft = true;
        if (this.isTablet()) {
            this.ballUi.getComponent(cc.Widget).left = 150;
            this.cardParent.setPosition(cc.v2(150, 0));
            this.cardParent.setScale(0.6);
        }
        else {
            this.ballUi.getComponent(cc.Widget).left = 250;
            this.cardParent.setPosition(cc.v2(100, 0));
            this.cardParent.setScale(0.7);
            if (this.cardParent.childrenCount > 0) {
                this.cardParent.children[0].setPosition(this.cardPosArr[1][0]);
            }
        }
        this.ballUi.angle = -90;
        this.ballUi.setScale(2);
    };
    //检测平板
    MainLogic.prototype.isTablet = function () {
        var ua = navigator.userAgent.toLowerCase();
        // 检查用户代理字符串中是否存在常见平板设备标识
        var isAndroidTablet = /android/.test(ua) && !/mobile/.test(ua);
        var isIPad = /ipad/.test(ua) || /macintosh/i.test(ua);
        // iPadOS 13 及更高版本识别：它们可能显示为桌面级浏览器
        var isIpadOS13Up = function () { return (/macintosh/.test(ua) && navigator.maxTouchPoints && navigator.maxTouchPoints > 1); };
        // 结合条件判断
        return isAndroidTablet || isIPad || isIpadOS13Up();
    };
    __decorate([
        property(cc.Node)
    ], MainLogic.prototype, "ballUi", void 0);
    __decorate([
        property(cc.Node)
    ], MainLogic.prototype, "cardParent", void 0);
    __decorate([
        property(cc.Node)
    ], MainLogic.prototype, "maskNode", void 0);
    MainLogic = __decorate([
        ccclass
    ], MainLogic);
    return MainLogic;
}(cc.Component));
exports.default = MainLogic;

cc._RF.pop();