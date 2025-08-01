
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Main/MainLogic.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxNYWluXFxNYWluTG9naWMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsK0NBQThDO0FBQzlDLDhEQUE2RDtBQUU3RCwwQ0FBeUM7QUFDekMsK0JBQTBCO0FBSXBCLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXVDLDZCQUFZO0lBQW5EO1FBQUEscUVBNk5DO1FBMU5XLFlBQU0sR0FBWSxJQUFJLENBQUM7UUFHdkIsZ0JBQVUsR0FBWSxJQUFJLENBQUM7UUFHM0IsY0FBUSxHQUFZLElBQUksQ0FBQztRQUVqQyxlQUFlO1FBQ1AsZUFBUyxHQUFXLENBQUMsQ0FBQyxDQUFDO1FBQy9CLFdBQVc7UUFDSCxZQUFNLEdBQVcsQ0FBQyxDQUFDLENBQUM7UUFDNUIsRUFBRTtRQUNNLGtCQUFZLEdBQWEsQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFFL0UsZ0JBQVUsR0FBWSxJQUFJLENBQUM7UUFFM0IsZ0JBQVUsR0FBZ0I7WUFDOUIsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUNiLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7U0FDaEIsQ0FBQztRQUVNLHFCQUFlLEdBQWMsRUFBRSxDQUFDO1FBR2hDLGVBQVMsR0FBWSxLQUFLLENBQUM7O0lBaU12QyxDQUFDO0lBL0xHLHlCQUFLLEdBQUw7UUFBQSxpQkFtRUM7UUFsRUcsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxjQUFjLENBQUMsWUFBWSxDQUFDLENBQUM7UUFFbEYsSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsY0FBSSxDQUFDLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUU3RCxJQUFJLENBQUMsc0JBQXNCLEVBQUUsQ0FBQztRQUU5QixpQ0FBZSxDQUFDLEVBQUUsQ0FBQyxxQkFBUyxDQUFDLFFBQVEsRUFBRTtZQUNuQyxLQUFJLENBQUMsc0JBQXNCLEVBQUUsQ0FBQztRQUNsQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFFVCxpQ0FBZSxDQUFDLEVBQUUsQ0FBQyxxQkFBUyxDQUFDLFFBQVEsRUFBRTtZQUNuQyxLQUFJLENBQUMsc0JBQXNCLEVBQUUsQ0FBQztRQUNsQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFFVCxpQ0FBZSxDQUFDLEVBQUUsQ0FBQyxxQkFBUyxDQUFDLGVBQWUsRUFBRSxVQUFDLElBQWE7WUFDeEQsS0FBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDaEMsSUFBSSxLQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRTtnQkFDdkIsSUFBSSxDQUFDLEtBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFO29CQUN2QixLQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7b0JBQzVCLEtBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLGFBQUssQ0FBQyxVQUFVLENBQUMsS0FBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsRUFBRSxLQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7b0JBQzNGLEtBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQztvQkFDMUIsS0FBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO29CQUV4QyxJQUFJLEdBQUcsR0FBWSxLQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUM7b0JBQzFELEdBQUcsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO29CQUNsQixHQUFHLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQztvQkFDaEIsR0FBRyxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7aUJBQ2pDO2FBQ0o7UUFDTCxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFFVCxpQ0FBZSxDQUFDLEVBQUUsQ0FBQyxxQkFBUyxDQUFDLFVBQVUsRUFBRSxVQUFDLElBQWE7WUFDbkQsS0FBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUMsS0FBSSxDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDbkUsSUFBSSxLQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sSUFBSSxDQUFDLEVBQUU7Z0JBQ2xDLElBQUksS0FBSSxDQUFDLFNBQVMsSUFBSSxDQUFDLEVBQUU7b0JBQ3JCLGlDQUFlLENBQUMsUUFBUSxDQUFDLHFCQUFTLENBQUMsU0FBUyxDQUFDLENBQUM7aUJBQ2pEO3FCQUFNO29CQUNILEtBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztpQkFDekI7YUFDSjtZQUNELElBQUksS0FBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLEVBQUU7Z0JBQ3ZCLEtBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUNuQixFQUFFLENBQUMsUUFBUSxDQUNQLEVBQUUsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEVBQ2YsRUFBRSxDQUFDLFFBQVEsQ0FBQztvQkFDUixLQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRSxDQUFDO2dCQUM1QixDQUFDLENBQUMsQ0FDTCxDQUNKLENBQUM7Z0JBRUYsSUFBSSxHQUFHLEdBQVksS0FBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUMxRCxHQUFHLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQzthQUNsQztRQUNMLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUVULGlDQUFlLENBQUMsRUFBRSxDQUFDLHFCQUFTLENBQUMsVUFBVSxFQUFFO1lBQ3JDLEtBQUksQ0FBQyxzQkFBc0IsRUFBRSxDQUFDO1lBRTlCLEtBQUksQ0FBQyxZQUFZLENBQUM7Z0JBQ2QsRUFBRTtnQkFDRixHQUFHO2dCQUNILGlDQUFlLENBQUMsUUFBUSxDQUFDLHFCQUFTLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDbEQsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQ1osQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBRVQsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ2hCLENBQUM7SUFFRCx3QkFBSSxHQUFKO1FBQ0ksNERBQTREO1FBQzVELHVEQUF1RDtRQUN2RCw0QkFBNEI7UUFDNUIsSUFBSTtRQUVKLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztJQUUxQixDQUFDO0lBRUQsVUFBVTtJQUNWLGtDQUFjLEdBQWQ7UUFBQSxpQkFPQztRQU5HLElBQUksQ0FBQyxTQUFTLElBQUksQ0FBQyxDQUFDO1FBQ3BCLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsY0FBSSxDQUFDLENBQUMsY0FBYyxDQUFDO1lBQ3hELEtBQUksQ0FBQyxZQUFZLENBQUM7Z0JBQ2QsaUNBQWUsQ0FBQyxRQUFRLENBQUMscUJBQVMsQ0FBQyxZQUFZLEVBQUUsS0FBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ2xFLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUNaLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELE1BQU07SUFDTiwwQkFBTSxHQUFOLFVBQU8sSUFBYSxFQUFFLFFBQXlCO1FBQXpCLHlCQUFBLEVBQUEsZUFBeUI7UUFDM0MsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFDbkIsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDdkMsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLFFBQVEsRUFBRTtZQUNoRSxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztZQUNwQixJQUFJLFFBQVEsRUFBRTtnQkFDVixRQUFRLEVBQUUsQ0FBQzthQUNkO1FBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsMENBQXNCLEdBQXRCO1FBQ0ksZUFBZTtRQUNmLFVBQVU7UUFDVixJQUFJLFVBQVUsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDLEtBQUssQ0FBQztRQUM5QyxJQUFJLFdBQVcsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDLE1BQU0sQ0FBQztRQUNoRCxJQUFJLFdBQVcsSUFBSSxVQUFVLEVBQUU7WUFDM0IsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1NBQ25CO2FBQU07WUFDSCxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7U0FDbkI7SUFDTCxDQUFDO0lBRUQsNEJBQVEsR0FBUjtRQUNJLDBDQUEwQztRQUMxQyxJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMscUJBQXFCLEdBQUcsS0FBSyxDQUFDO1FBQ2xFLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyx1QkFBdUIsR0FBRyxJQUFJLENBQUM7UUFDbkUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7UUFDeEQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7UUFDdEQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7UUFDOUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQ3RCLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBRTFCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUNwRCxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO1NBQ3pDO1FBRUQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQzNDLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQy9CLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEdBQUcsQ0FBQyxFQUFFO1lBQ3ZDLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDbEU7UUFDRyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDcEQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUNsRTtJQUNMLENBQUM7SUFFRCw0QkFBUSxHQUFSO1FBQ0ksS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ3BELElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7U0FDMUM7UUFFRCxJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzNDLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzlCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUNwRCxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ2xFO1FBRUQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLHVCQUF1QixHQUFHLEtBQUssQ0FBQztRQUNwRSxJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMscUJBQXFCLEdBQUcsSUFBSSxDQUFDO1FBQ2pFLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO1FBQ3ZELElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO1FBQ3ZELElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRSxFQUFFO1lBQ2pCLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDO1lBQy9DLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDM0MsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDakM7YUFBTTtZQUNILElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDO1lBQy9DLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDM0MsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDOUIsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsR0FBRyxDQUFDLEVBQUU7Z0JBQzNDLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDbEU7U0FDSTtRQUVELElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxHQUFHLENBQUMsRUFBRSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBRzVCLENBQUM7SUFFRCxNQUFNO0lBQ0UsNEJBQVEsR0FBaEI7UUFDSSxJQUFNLEVBQUUsR0FBRyxTQUFTLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBRTdDLHlCQUF5QjtRQUN6QixJQUFNLGVBQWUsR0FBRyxTQUFTLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNqRSxJQUFNLE1BQU0sR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLFlBQVksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7UUFFeEQsa0NBQWtDO1FBQ2xDLElBQU0sWUFBWSxHQUFHLGNBQU0sT0FBQSxDQUN2QixXQUFXLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLFNBQVMsQ0FBQyxjQUFjLElBQUksU0FBUyxDQUFDLGNBQWMsR0FBRyxDQUFDLENBQ25GLEVBRjBCLENBRTFCLENBQUM7UUFFRixTQUFTO1FBQ1QsT0FBTyxlQUFlLElBQUksTUFBTSxJQUFJLFlBQVksRUFBRSxDQUFDO0lBQ3ZELENBQUM7SUF6TkQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs2Q0FDYTtJQUcvQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO2lEQUNpQjtJQUduQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOytDQUNlO0lBVGhCLFNBQVM7UUFEN0IsT0FBTztPQUNhLFNBQVMsQ0E2TjdCO0lBQUQsZ0JBQUM7Q0E3TkQsQUE2TkMsQ0E3TnNDLEVBQUUsQ0FBQyxTQUFTLEdBNk5sRDtrQkE3Tm9CLFNBQVMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFdmVudFR5cGUgfSBmcm9tIFwiLi4vRGF0YS9FdmVudFR5cGVcIjtcclxuaW1wb3J0IHsgTGlzdGVuZXJNYW5hZ2VyIH0gZnJvbSBcIi4uL01hbmFnZXIvTGlzdGVuZXJNYW5hZ2VyXCI7XHJcbmltcG9ydCB7IFNvdW5kTWFuYWdlciB9IGZyb20gXCIuLi9NYW5hZ2VyL1NvdW5kTWFuYWdlclwiO1xyXG5pbXBvcnQgeyBVdGlscyB9IGZyb20gXCIuLi9NYW5hZ2VyL1V0aWxzXCI7XHJcbmltcG9ydCBCYWxsIGZyb20gXCIuL0JhbGxcIjtcclxuaW1wb3J0IENhcmRDdHJsIGZyb20gXCIuL0NhcmRDdHJsXCI7XHJcbmltcG9ydCBTZXRMZXZlbCBmcm9tIFwiLi9TZXRMZXZlbFwiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1haW5Mb2dpYyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBwcml2YXRlIGJhbGxVaTogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBwcml2YXRlIGNhcmRQYXJlbnQ6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgcHJpdmF0ZSBtYXNrTm9kZTogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgLy/lvZPliY3mmL7npLrlsI/nkIPlnKjniLbnuqfkuK3nmoTntKLlvJVcclxuICAgIHByaXZhdGUgYmFsbEluZGV4OiBudW1iZXIgPSAtMTtcclxuICAgIC8v5b2T5YmN6ZyA6KaB54K55Ye755qE5pWw5a2XXHJcbiAgICBwcml2YXRlIGN1ck51bTogbnVtYmVyID0gLTE7XHJcbiAgICAvL1xyXG4gICAgcHJpdmF0ZSBhdWRpb05hbWVBcnI6IHN0cmluZ1tdID0gW1wiRzhcIiwgXCJPNjJcIiwgXCJOMzVcIiwgXCJCM1wiLCBcIkc1OVwiLCBcIkI1XCIsIFwiTzY2XCIsIFwiTzcyXCJdO1xyXG5cclxuICAgIHByaXZhdGUgYmFsbFBhcmVudDogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgcHJpdmF0ZSBjYXJkUG9zQXJyOiBjYy5WZWMyW11bXSA9IFtcclxuICAgICAgICBbY2MudjIoMCwgMCldLCAvLyDnq5blsY/ml7blsYXkuK1cclxuICAgICAgICBbY2MudjIoMCwgMCldLCAvLyDmqKrlsY/ml7blsYXkuK1cclxuICAgIF07XHJcblxyXG4gICAgcHJpdmF0ZSBuZWVkX3RvdWNoX2NhcmQ6IGNjLk5vZGVbXSA9IFtdO1xyXG5cclxuXHJcbiAgICBwcml2YXRlIGlzVGltZU91dDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIHN0YXJ0KCkge1xyXG4gICAgICAgIHRoaXMuYmFsbFBhcmVudCA9IHRoaXMuYmFsbFVpLmdldENoaWxkQnlOYW1lKFwibWFza1wiKS5nZXRDaGlsZEJ5TmFtZShcImJhbGxQYXJlbnRcIik7XHJcblxyXG4gICAgICAgIHRoaXMuYmFsbFVpLmdldENvbXBvbmVudChCYWxsKS5jcmVhdGVCYWxsKHRoaXMuYXVkaW9OYW1lQXJyKTtcclxuXHJcbiAgICAgICAgdGhpcy5jaGFuZ2VEZXNpZ25SZXNvbHV0aW9uKCk7XHJcblxyXG4gICAgICAgIExpc3RlbmVyTWFuYWdlci5vbihFdmVudFR5cGUuU0NSRUVOX1YsICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5jaGFuZ2VEZXNpZ25SZXNvbHV0aW9uKCk7XHJcbiAgICAgICAgfSwgdGhpcyk7XHJcblxyXG4gICAgICAgIExpc3RlbmVyTWFuYWdlci5vbihFdmVudFR5cGUuU0NSRUVOX0gsICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5jaGFuZ2VEZXNpZ25SZXNvbHV0aW9uKCk7XHJcbiAgICAgICAgfSwgdGhpcyk7XHJcblxyXG4gICAgICAgIExpc3RlbmVyTWFuYWdlci5vbihFdmVudFR5cGUuTkVFRF9UT1VDSF9DQVJELCAobm9kZTogY2MuTm9kZSkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLm5lZWRfdG91Y2hfY2FyZC5wdXNoKG5vZGUpO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5tYXNrTm9kZS5pc1ZhbGlkKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMubWFza05vZGUuYWN0aXZlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tYXNrTm9kZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubWFza05vZGUuc2V0UG9zaXRpb24oVXRpbHMuZ2V0Tm9kZVBvcyh0aGlzLm5lZWRfdG91Y2hfY2FyZFswXSwgdGhpcy5tYXNrTm9kZS5wYXJlbnQpKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm1hc2tOb2RlLm9wYWNpdHkgPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubWFza05vZGUucnVuQWN0aW9uKGNjLmZhZGVJbigwLjMpKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHRpcDogY2MuTm9kZSA9IHRoaXMubm9kZS5wYXJlbnQuZ2V0Q2hpbGRCeU5hbWUoXCJ0aXBcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgdGlwLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgdGlwLm9wYWNpdHkgPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgIHRpcC5ydW5BY3Rpb24oY2MuZmFkZUluKDAuMykpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSwgdGhpcyk7XHJcblxyXG4gICAgICAgIExpc3RlbmVyTWFuYWdlci5vbihFdmVudFR5cGUuVE9VQ0hfQ0FSRCwgKG5vZGU6IGNjLk5vZGUpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5uZWVkX3RvdWNoX2NhcmQuc3BsaWNlKHRoaXMubmVlZF90b3VjaF9jYXJkLmluZGV4T2Yobm9kZSksIDEpO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5uZWVkX3RvdWNoX2NhcmQubGVuZ3RoID09IDApIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmJhbGxJbmRleCA+PSAyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgTGlzdGVuZXJNYW5hZ2VyLmRpc3BhdGNoKEV2ZW50VHlwZS5HQU1FX09WRVIpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm1vdmVCYWxsUGFyZW50KCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHRoaXMubWFza05vZGUuaXNWYWxpZCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tYXNrTm9kZS5ydW5BY3Rpb24oXHJcbiAgICAgICAgICAgICAgICAgICAgY2Muc2VxdWVuY2UoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNjLmZhZGVPdXQoMC4zKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2MuY2FsbEZ1bmMoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tYXNrTm9kZS5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgdGlwOiBjYy5Ob2RlID0gdGhpcy5ub2RlLnBhcmVudC5nZXRDaGlsZEJ5TmFtZShcInRpcFwiKTtcclxuICAgICAgICAgICAgICAgIHRpcC5ydW5BY3Rpb24oY2MuZmFkZU91dCgwLjMpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sIHRoaXMpO1xyXG5cclxuICAgICAgICBMaXN0ZW5lck1hbmFnZXIub24oRXZlbnRUeXBlLlNUQVJUX1RJTUUsICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy51bnNjaGVkdWxlQWxsQ2FsbGJhY2tzKCk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICAgICAgLy8gXHJcbiAgICAgICAgICAgICAgICBMaXN0ZW5lck1hbmFnZXIuZGlzcGF0Y2goRXZlbnRUeXBlLkdBTUVfT1ZFUik7XHJcbiAgICAgICAgICAgIH0sIDEwMCk7XHJcbiAgICAgICAgfSwgdGhpcyk7XHJcblxyXG4gICAgICAgIHRoaXMuaW5pdCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGluaXQoKSB7XHJcbiAgICAgICAgLy8gZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmNhcmRQYXJlbnQuY2hpbGRyZW5Db3VudDsgaSsrKSB7XHJcbiAgICAgICAgLy8gICAgIGxldCBjYXJkOiBjYy5Ob2RlID0gdGhpcy5jYXJkUGFyZW50LmNoaWxkcmVuW2ldO1xyXG4gICAgICAgIC8vICAgICBVdGlscy5mbGlwWShjYXJkLCAxKTtcclxuICAgICAgICAvLyB9XHJcblxyXG4gICAgICAgIHRoaXMubW92ZUJhbGxQYXJlbnQoKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgLy/mmL7npLrkuIvkuKrmlbDlrZflsI/nkINcclxuICAgIG1vdmVCYWxsUGFyZW50KCkge1xyXG4gICAgICAgIHRoaXMuYmFsbEluZGV4ICs9IDE7XHJcbiAgICAgICAgdGhpcy5jdXJOdW0gPSB0aGlzLmJhbGxVaS5nZXRDb21wb25lbnQoQmFsbCkubW92ZUJhbGxQYXJlbnQoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBMaXN0ZW5lck1hbmFnZXIuZGlzcGF0Y2goRXZlbnRUeXBlLkRJU1BMQVlfSEFORCwgdGhpcy5jdXJOdW0pO1xyXG4gICAgICAgICAgICB9LCAwLjUpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8v5pKt5pS+5Yqo55S7XHJcbiAgICBwbGF5QW4obm9kZTogY2MuTm9kZSwgY2FsbGJhY2s6IEZ1bmN0aW9uID0gbnVsbCkge1xyXG4gICAgICAgIG5vZGUuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICBub2RlLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoKTtcclxuICAgICAgICBub2RlLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLm9uKGNjLkFuaW1hdGlvbi5FdmVudFR5cGUuRklOSVNIRUQsICgpID0+IHtcclxuICAgICAgICAgICAgbm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgaWYgKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgICAgICBjYWxsYmFjaygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDlsY/luZXpgILphY1cclxuICAgICAqIEByZXR1cm5zIFxyXG4gICAgICovXHJcbiAgICBjaGFuZ2VEZXNpZ25SZXNvbHV0aW9uKCkge1xyXG4gICAgICAgIC8v5pyq5qOA5rWL5Yiw5bC65a+45Y+Y5YyW5YiZ6Lez5Ye65Ye95pWwXHJcbiAgICAgICAgLy/ojrflj5blvZPliY3lsY/luZXlrr3pq5hcclxuICAgICAgICBsZXQgZnJhbWVXaWR0aCA9IGNjLnZpZXcuZ2V0RnJhbWVTaXplKCkud2lkdGg7XHJcbiAgICAgICAgbGV0IGZyYW1lSGVpZ2h0ID0gY2Mudmlldy5nZXRGcmFtZVNpemUoKS5oZWlnaHQ7XHJcbiAgICAgICAgaWYgKGZyYW1lSGVpZ2h0ID49IGZyYW1lV2lkdGgpIHtcclxuICAgICAgICAgICAgdGhpcy5TQ1JFRU5fVigpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuU0NSRUVOX0goKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgU0NSRUVOX1YoKSB7XHJcbiAgICAgICAgLy8gdGhpcy5iYWxsVWkuc2V0UG9zaXRpb24oY2MudjIoMCwgMzYwKSk7XHJcbiAgICAgICAgdGhpcy5iYWxsVWkuZ2V0Q29tcG9uZW50KGNjLldpZGdldCkuaXNBbGlnblZlcnRpY2FsQ2VudGVyID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5iYWxsVWkuZ2V0Q29tcG9uZW50KGNjLldpZGdldCkuaXNBbGlnbkhvcml6b250YWxDZW50ZXIgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuYmFsbFVpLmdldENvbXBvbmVudChjYy5XaWRnZXQpLmlzQWxpZ25MZWZ0ID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5iYWxsVWkuZ2V0Q29tcG9uZW50KGNjLldpZGdldCkuaXNBbGlnblRvcCA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5iYWxsVWkuZ2V0Q29tcG9uZW50KGNjLldpZGdldCkudG9wID0gMTAwO1xyXG4gICAgICAgIHRoaXMuYmFsbFVpLmFuZ2xlID0gMDtcclxuICAgICAgICB0aGlzLmJhbGxVaS5zZXRTY2FsZSgxLjIpO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuYmFsbFBhcmVudC5jaGlsZHJlbkNvdW50OyBpKyspIHtcclxuICAgICAgICAgICAgdGhpcy5iYWxsUGFyZW50LmNoaWxkcmVuW2ldLmFuZ2xlID0gMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuY2FyZFBhcmVudC5zZXRQb3NpdGlvbihjYy52MigwLCAtODApKTtcclxuICAgICAgICB0aGlzLmNhcmRQYXJlbnQuc2V0U2NhbGUoMC40NSk7XHJcbiAgICAgICAgaWYgKHRoaXMuY2FyZFBhcmVudC5jaGlsZHJlbkNvdW50ID4gMCkge1xyXG4gICAgICAgIHRoaXMuY2FyZFBhcmVudC5jaGlsZHJlblswXS5zZXRQb3NpdGlvbih0aGlzLmNhcmRQb3NBcnJbMF1bMF0pO1xyXG4gICAgfVxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5jYXJkUGFyZW50LmNoaWxkcmVuQ291bnQ7IGkrKykge1xyXG4gICAgICAgICAgICB0aGlzLmNhcmRQYXJlbnQuY2hpbGRyZW5baV0uc2V0UG9zaXRpb24odGhpcy5jYXJkUG9zQXJyWzBdW2ldKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgU0NSRUVOX0goKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmJhbGxQYXJlbnQuY2hpbGRyZW5Db3VudDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYmFsbFBhcmVudC5jaGlsZHJlbltpXS5hbmdsZSA9IDkwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5jYXJkUGFyZW50LnNldFBvc2l0aW9uKGNjLnYyKDEwMCwgMCkpO1xyXG4gICAgICAgIHRoaXMuY2FyZFBhcmVudC5zZXRTY2FsZSgwLjcpO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5jYXJkUGFyZW50LmNoaWxkcmVuQ291bnQ7IGkrKykge1xyXG4gICAgICAgICAgICB0aGlzLmNhcmRQYXJlbnQuY2hpbGRyZW5baV0uc2V0UG9zaXRpb24odGhpcy5jYXJkUG9zQXJyWzFdW2ldKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuYmFsbFVpLmdldENvbXBvbmVudChjYy5XaWRnZXQpLmlzQWxpZ25Ib3Jpem9udGFsQ2VudGVyID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5iYWxsVWkuZ2V0Q29tcG9uZW50KGNjLldpZGdldCkuaXNBbGlnblZlcnRpY2FsQ2VudGVyID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmJhbGxVaS5nZXRDb21wb25lbnQoY2MuV2lkZ2V0KS5pc0FsaWduVG9wID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5iYWxsVWkuZ2V0Q29tcG9uZW50KGNjLldpZGdldCkuaXNBbGlnbkxlZnQgPSB0cnVlO1xyXG4gICAgICAgIGlmICh0aGlzLmlzVGFibGV0KCkpIHtcclxuICAgICAgICAgICAgdGhpcy5iYWxsVWkuZ2V0Q29tcG9uZW50KGNjLldpZGdldCkubGVmdCA9IDE1MDtcclxuICAgICAgICAgICAgdGhpcy5jYXJkUGFyZW50LnNldFBvc2l0aW9uKGNjLnYyKDE1MCwgMCkpO1xyXG4gICAgICAgICAgICB0aGlzLmNhcmRQYXJlbnQuc2V0U2NhbGUoMC42KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmJhbGxVaS5nZXRDb21wb25lbnQoY2MuV2lkZ2V0KS5sZWZ0ID0gMjUwO1xyXG4gICAgICAgICAgICB0aGlzLmNhcmRQYXJlbnQuc2V0UG9zaXRpb24oY2MudjIoMTAwLCAwKSk7XHJcbiAgICAgICAgICAgIHRoaXMuY2FyZFBhcmVudC5zZXRTY2FsZSgwLjcpO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5jYXJkUGFyZW50LmNoaWxkcmVuQ291bnQgPiAwKSB7XHJcbiAgICAgICAgdGhpcy5jYXJkUGFyZW50LmNoaWxkcmVuWzBdLnNldFBvc2l0aW9uKHRoaXMuY2FyZFBvc0FyclsxXVswXSk7XHJcbiAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmJhbGxVaS5hbmdsZSA9IC05MDtcclxuICAgICAgICB0aGlzLmJhbGxVaS5zZXRTY2FsZSgyKTtcclxuXHJcblxyXG4gICAgfVxyXG5cclxuICAgIC8v5qOA5rWL5bmz5p2/XHJcbiAgICBwcml2YXRlIGlzVGFibGV0KCkge1xyXG4gICAgICAgIGNvbnN0IHVhID0gbmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpO1xyXG5cclxuICAgICAgICAvLyDmo4Dmn6XnlKjmiLfku6PnkIblrZfnrKbkuLLkuK3mmK/lkKblrZjlnKjluLjop4HlubPmnb/orr7lpIfmoIfor4ZcclxuICAgICAgICBjb25zdCBpc0FuZHJvaWRUYWJsZXQgPSAvYW5kcm9pZC8udGVzdCh1YSkgJiYgIS9tb2JpbGUvLnRlc3QodWEpO1xyXG4gICAgICAgIGNvbnN0IGlzSVBhZCA9IC9pcGFkLy50ZXN0KHVhKSB8fCAvbWFjaW50b3NoL2kudGVzdCh1YSk7XHJcblxyXG4gICAgICAgIC8vIGlQYWRPUyAxMyDlj4rmm7Tpq5jniYjmnKzor4bliKvvvJrlroPku6zlj6/og73mmL7npLrkuLrmoYzpnaLnuqfmtY/op4jlmahcclxuICAgICAgICBjb25zdCBpc0lwYWRPUzEzVXAgPSAoKSA9PiAoXHJcbiAgICAgICAgICAgIC9tYWNpbnRvc2gvLnRlc3QodWEpICYmIG5hdmlnYXRvci5tYXhUb3VjaFBvaW50cyAmJiBuYXZpZ2F0b3IubWF4VG91Y2hQb2ludHMgPiAxXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgLy8g57uT5ZCI5p2h5Lu25Yik5patXHJcbiAgICAgICAgcmV0dXJuIGlzQW5kcm9pZFRhYmxldCB8fCBpc0lQYWQgfHwgaXNJcGFkT1MxM1VwKCk7XHJcbiAgICB9XHJcbn1cclxuIl19