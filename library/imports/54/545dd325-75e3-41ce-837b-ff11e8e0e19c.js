"use strict";
cc._RF.push(module, '545ddMldeNBzoN7/xHo4OGc', 'Ball');
// Script/Main/Ball.ts

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
var GameManager_1 = require("../Manager/GameManager");
var SoundManager_1 = require("../Manager/SoundManager");
var Utils_1 = require("../Manager/Utils");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Ball = /** @class */ (function (_super) {
    __extends(Ball, _super);
    function Ball() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.initBallParent = null;
        _this.ballParent = null;
        //音频名字数组
        _this.audioNameArr = [];
        //每个小球之间的距离
        _this.ballDis = 140;
        //小球每次向前移动的所需时间
        _this.moveTime = 0.3;
        //小球每次向前移动的距离
        _this.moveDis = 140;
        //小球向前移动次数
        _this.moveIndex = -1;
        return _this;
        // update (dt) {}
    }
    Ball.prototype.createBall = function (audioArr) {
        this.audioNameArr = audioArr;
        for (var i = 0; i < this.audioNameArr.length; i++) {
            var pos = cc.v2(0 - this.ballDis * i, 0);
            var name = Utils_1.Utils.getString(this.audioNameArr[i]);
            var num = Utils_1.Utils.getNum(this.audioNameArr[i]);
            var ball = cc.instantiate(this.initBallParent.getChildByName(name));
            ball.setParent(this.ballParent);
            ball.setPosition(pos);
            ball.getChildByName("numLabel").getComponent(cc.Label).string = String(num);
            ball.active = true;
        }
    };
    //小球整体移动
    Ball.prototype.moveBallParent = function (callback) {
        var _this = this;
        if (callback === void 0) { callback = null; }
        this.moveIndex += 1;
        var targetPos = cc.v2(this.ballParent.position.x + this.moveDis, this.ballParent.position.y);
        var ball = this.ballParent.children[this.moveIndex];
        ball.active = true;
        this.ballParent.runAction(cc.sequence(cc.delayTime(0.3), cc.callFunc(function () {
            ball.runAction(cc.scaleTo(_this.moveTime, 0.9));
            var oldBall = _this.ballParent.children[_this.moveIndex - 1];
            if (oldBall) {
                oldBall.runAction(cc.scaleTo(_this.moveTime, 0.7));
            }
        }), cc.moveTo(this.moveTime, targetPos), cc.callFunc(function () {
            if (GameManager_1.GameManager.canPlayAudio) {
                SoundManager_1.SoundManager.playEffect(_this.audioNameArr[_this.moveIndex], false, false, false);
            }
            if (callback) {
                callback();
            }
        })));
        return Number(ball.getChildByName("numLabel").getComponent(cc.Label).string);
    };
    __decorate([
        property(cc.Node)
    ], Ball.prototype, "initBallParent", void 0);
    __decorate([
        property(cc.Node)
    ], Ball.prototype, "ballParent", void 0);
    Ball = __decorate([
        ccclass
    ], Ball);
    return Ball;
}(cc.Component));
exports.default = Ball;

cc._RF.pop();