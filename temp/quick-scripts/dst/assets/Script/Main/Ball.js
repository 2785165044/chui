
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Main/Ball.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxNYWluXFxCYWxsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLHNEQUFxRDtBQUVyRCx3REFBdUQ7QUFDdkQsMENBQXlDO0FBR25DLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQWtDLHdCQUFZO0lBQTlDO1FBQUEscUVBMkVDO1FBdkVXLG9CQUFjLEdBQVksSUFBSSxDQUFDO1FBRy9CLGdCQUFVLEdBQVksSUFBSSxDQUFDO1FBRW5DLFFBQVE7UUFDQSxrQkFBWSxHQUFhLEVBQUUsQ0FBQztRQUVwQyxXQUFXO1FBQ0gsYUFBTyxHQUFXLEdBQUcsQ0FBQztRQUU5QixlQUFlO1FBQ1AsY0FBUSxHQUFXLEdBQUcsQ0FBQztRQUUvQixhQUFhO1FBQ0wsYUFBTyxHQUFXLEdBQUcsQ0FBQztRQUU5QixVQUFVO1FBQ0YsZUFBUyxHQUFXLENBQUMsQ0FBQyxDQUFDOztRQW9EL0IsaUJBQWlCO0lBQ3JCLENBQUM7SUFuREcseUJBQVUsR0FBVixVQUFXLFFBQWtCO1FBQ3pCLElBQUksQ0FBQyxZQUFZLEdBQUcsUUFBUSxDQUFDO1FBQzdCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUMvQyxJQUFJLEdBQUcsR0FBWSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUNsRCxJQUFJLElBQUksR0FBVyxhQUFLLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN6RCxJQUFJLEdBQUcsR0FBVyxhQUFLLENBQUMsTUFBTSxDQUFDLElB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b3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXZlbnRUeXBlIH0gZnJvbSBcIi4uL0RhdGEvRXZlbnRUeXBlXCI7XHJcbmltcG9ydCB7IEdhbWVNYW5hZ2VyIH0gZnJvbSBcIi4uL01hbmFnZXIvR2FtZU1hbmFnZXJcIjtcclxuaW1wb3J0IHsgTGlzdGVuZXJNYW5hZ2VyIH0gZnJvbSBcIi4uL01hbmFnZXIvTGlzdGVuZXJNYW5hZ2VyXCI7XHJcbmltcG9ydCB7IFNvdW5kTWFuYWdlciB9IGZyb20gXCIuLi9NYW5hZ2VyL1NvdW5kTWFuYWdlclwiO1xyXG5pbXBvcnQgeyBVdGlscyB9IGZyb20gXCIuLi9NYW5hZ2VyL1V0aWxzXCI7XHJcblxyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJhbGwgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHByaXZhdGUgaW5pdEJhbGxQYXJlbnQ6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgcHJpdmF0ZSBiYWxsUGFyZW50OiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICAvL+mfs+mikeWQjeWtl+aVsOe7hFxyXG4gICAgcHJpdmF0ZSBhdWRpb05hbWVBcnI6IHN0cmluZ1tdID0gW107XHJcblxyXG4gICAgLy/mr4/kuKrlsI/nkIPkuYvpl7TnmoTot53nprtcclxuICAgIHByaXZhdGUgYmFsbERpczogbnVtYmVyID0gMTQwO1xyXG5cclxuICAgIC8v5bCP55CD5q+P5qyh5ZCR5YmN56e75Yqo55qE5omA6ZyA5pe26Ze0XHJcbiAgICBwcml2YXRlIG1vdmVUaW1lOiBudW1iZXIgPSAwLjM7XHJcblxyXG4gICAgLy/lsI/nkIPmr4/mrKHlkJHliY3np7vliqjnmoTot53nprtcclxuICAgIHByaXZhdGUgbW92ZURpczogbnVtYmVyID0gMTQwO1xyXG5cclxuICAgIC8v5bCP55CD5ZCR5YmN56e75Yqo5qyh5pWwXHJcbiAgICBwcml2YXRlIG1vdmVJbmRleDogbnVtYmVyID0gLTE7XHJcblxyXG4gICAgY3JlYXRlQmFsbChhdWRpb0Fycjogc3RyaW5nW10pIHtcclxuICAgICAgICB0aGlzLmF1ZGlvTmFtZUFyciA9IGF1ZGlvQXJyO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5hdWRpb05hbWVBcnIubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IHBvczogY2MuVmVjMiA9IGNjLnYyKDAgLSB0aGlzLmJhbGxEaXMgKiBpLCAwKTtcclxuICAgICAgICAgICAgbGV0IG5hbWU6IHN0cmluZyA9IFV0aWxzLmdldFN0cmluZyh0aGlzLmF1ZGlvTmFtZUFycltpXSk7XHJcbiAgICAgICAgICAgIGxldCBudW06IG51bWJlciA9IFV0aWxzLmdldE51bSh0aGlzLmF1ZGlvTmFtZUFycltpXSk7XHJcbiAgICAgICAgICAgIGxldCBiYWxsOiBjYy5Ob2RlID0gY2MuaW5zdGFudGlhdGUodGhpcy5pbml0QmFsbFBhcmVudC5nZXRDaGlsZEJ5TmFtZShuYW1lKSk7XHJcbiAgICAgICAgICAgIGJhbGwuc2V0UGFyZW50KHRoaXMuYmFsbFBhcmVudCk7XHJcbiAgICAgICAgICAgIGJhbGwuc2V0UG9zaXRpb24ocG9zKTtcclxuICAgICAgICAgICAgYmFsbC5nZXRDaGlsZEJ5TmFtZShcIm51bUxhYmVsXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gU3RyaW5nKG51bSk7XHJcbiAgICAgICAgICAgIGJhbGwuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy/lsI/nkIPmlbTkvZPnp7vliqhcclxuICAgIG1vdmVCYWxsUGFyZW50KGNhbGxiYWNrOiBGdW5jdGlvbiA9IG51bGwpIHtcclxuICAgICAgICB0aGlzLm1vdmVJbmRleCArPSAxO1xyXG4gICAgICAgIGxldCB0YXJnZXRQb3M6IGNjLlZlYzIgPSBjYy52Mih0aGlzLmJhbGxQYXJlbnQucG9zaXRpb24ueCArIHRoaXMubW92ZURpcywgdGhpcy5iYWxsUGFyZW50LnBvc2l0aW9uLnkpO1xyXG4gICAgICAgIGxldCBiYWxsOiBjYy5Ob2RlID0gdGhpcy5iYWxsUGFyZW50LmNoaWxkcmVuW3RoaXMubW92ZUluZGV4XTtcclxuICAgICAgICBiYWxsLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5iYWxsUGFyZW50LnJ1bkFjdGlvbihcclxuICAgICAgICAgICAgY2Muc2VxdWVuY2UoXHJcbiAgICAgICAgICAgICAgICBjYy5kZWxheVRpbWUoMC4zKSxcclxuICAgICAgICAgICAgICAgIGNjLmNhbGxGdW5jKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBiYWxsLnJ1bkFjdGlvbihcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2Muc2NhbGVUbyh0aGlzLm1vdmVUaW1lLCAwLjkpXHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IG9sZEJhbGw6IGNjLk5vZGUgPSB0aGlzLmJhbGxQYXJlbnQuY2hpbGRyZW5bdGhpcy5tb3ZlSW5kZXggLSAxXTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAob2xkQmFsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbGRCYWxsLnJ1bkFjdGlvbihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNjLnNjYWxlVG8odGhpcy5tb3ZlVGltZSwgMC43KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICAgICAgY2MubW92ZVRvKHRoaXMubW92ZVRpbWUsIHRhcmdldFBvcyksXHJcbiAgICAgICAgICAgICAgICBjYy5jYWxsRnVuYygoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKEdhbWVNYW5hZ2VyLmNhblBsYXlBdWRpbykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBTb3VuZE1hbmFnZXIucGxheUVmZmVjdCh0aGlzLmF1ZGlvTmFtZUFyclt0aGlzLm1vdmVJbmRleF0sIGZhbHNlLCBmYWxzZSwgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoY2FsbGJhY2spIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2soKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIE51bWJlcihiYWxsLmdldENoaWxkQnlOYW1lKFwibnVtTGFiZWxcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XHJcbn1cclxuIl19