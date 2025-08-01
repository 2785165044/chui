"use strict";
cc._RF.push(module, '821faN3a+tKkbvuWkUDVsza', 'GameScene');
// Script/Main/GameScene.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var posArr = [[cc.v2(0, 0), cc.v2(0, -300), cc.v2(0, -100)],
    [cc.v2(0, 0), cc.v2(-50, -250), cc.v2(0, 0)]];
var scaleArr = [[1, 1, 0.6], [1, 1.2, 0.8, 0.8]];
var GameScene = /** @class */ (function (_super) {
    __extends(GameScene, _super);
    function GameScene() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // onLoad () {}
        _this.index = -1;
        /**竖屏--0  横屏--1 */
        _this.screenStatus = -1;
        /**当前播放动画 */
        _this.curAction = null;
        _this.moveSpeed = 1200;
        return _this;
        // update (dt) {}
    }
    GameScene.prototype.start = function () {
        var _this = this;
        this.changeDesignResolution();
        ListenerManager_1.ListenerManager.on(EventType_1.EventType.GAME_SCENE_MOVE, function (index) {
            _this.node.stopAllActions();
            _this.index = index;
            var pos = posArr[_this.screenStatus][_this.index];
            var distance = Math.sqrt(Math.pow((pos.x - _this.node.position.x), 2) + Math.pow((pos.y - _this.node.position.y), 2));
            var time = distance / _this.moveSpeed;
            if (time >= 0.7) {
                time = 0.7;
            }
            time = 0.4;
            _this.curAction = cc.spawn(cc.moveTo(time, posArr[_this.screenStatus][_this.index]), cc.scaleTo(time, scaleArr[_this.screenStatus][_this.index]));
            _this.node.runAction(_this.curAction);
        }, this);
        ListenerManager_1.ListenerManager.on(EventType_1.EventType.SCREEN_V, function () {
            _this.screenStatus = 0;
            if (_this.index != -1) {
                _this.node.stopAction(_this.curAction);
                _this.node.setPosition(posArr[_this.screenStatus][_this.index]);
                _this.node.setScale(scaleArr[_this.screenStatus][_this.index]);
            }
            else {
                _this.node.stopAction(_this.curAction);
                _this.node.setPosition(posArr[_this.screenStatus][0]);
                _this.node.setScale(scaleArr[_this.screenStatus][0]);
            }
        }, this);
        ListenerManager_1.ListenerManager.on(EventType_1.EventType.SCREEN_H, function () {
            _this.screenStatus = 1;
            if (_this.index != -1) {
                _this.node.stopAction(_this.curAction);
                _this.node.setPosition(posArr[_this.screenStatus][_this.index]);
                _this.node.setScale(scaleArr[_this.screenStatus][_this.index]);
            }
            else {
                _this.node.stopAction(_this.curAction);
                _this.node.setPosition(posArr[_this.screenStatus][0]);
                _this.node.setScale(scaleArr[_this.screenStatus][0]);
            }
        }, this);
    };
    /**
   * 屏幕适配
   * @returns
   */
    GameScene.prototype.changeDesignResolution = function () {
        //获取当前屏幕宽高
        var frameWidth = cc.view.getFrameSize().width;
        var frameHeight = cc.view.getFrameSize().height;
        if (frameHeight >= frameWidth) {
            this.screenStatus = 0;
            if (this.index == -1) {
                this.node.stopAction(this.curAction);
                this.node.setPosition(posArr[this.screenStatus][0]);
                this.node.setScale(scaleArr[this.screenStatus][0]);
            }
        }
        else {
            this.screenStatus = 1;
            if (this.index == -1) {
                this.node.stopAction(this.curAction);
                this.node.setPosition(posArr[this.screenStatus][0]);
                this.node.setScale(scaleArr[this.screenStatus][0]);
            }
        }
    };
    GameScene = __decorate([
        ccclass
    ], GameScene);
    return GameScene;
}(cc.Component));
exports.default = GameScene;

cc._RF.pop();