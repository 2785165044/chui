
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Main/GameScene.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxNYWluXFxHYW1lU2NlbmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsK0NBQThDO0FBQzlDLDhEQUE2RDtBQUV2RCxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUM1QyxJQUFNLE1BQU0sR0FBZ0IsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUMxRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDOUMsSUFBTSxRQUFRLEdBQWUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDO0FBRS9EO0lBQXVDLDZCQUFZO0lBQW5EO1FBQUEscUVBOEVDO1FBNUVHLGVBQWU7UUFDUCxXQUFLLEdBQVcsQ0FBQyxDQUFDLENBQUM7UUFDM0Isa0JBQWtCO1FBQ1Ysa0JBQVksR0FBVyxDQUFDLENBQUMsQ0FBQztRQUNsQyxZQUFZO1FBQ0osZUFBUyxHQUFjLElBQUksQ0FBQztRQUM1QixlQUFTLEdBQVcsSUFBSSxDQUFDOztRQXFFakMsaUJBQWlCO0lBQ3JCLENBQUM7SUFyRUcseUJBQUss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LElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztnQkFDckMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNwRCxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDdEQ7U0FDSjthQUFNO1lBQ0gsSUFBSSxDQUFDLFlBQVksR0FBRyxDQUFDLENBQUM7WUFDdEIsSUFBSSxJQUFJLENBQUMsS0FBSyxJQUFJLENBQUMsQ0FBQyxFQUFFO2dCQUNsQixJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7Z0JBQ3JDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDcEQsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQ3REO1NBQ0o7SUFDTCxDQUFDO0lBNUVnQixTQUFTO1FBRDdCLE9BQU87T0FDYSxTQUFTLENBOEU3QjtJQUFELGdCQUFDO0NBOUVELEFBOEVDLENBOUVzQyxFQUFFLENBQUMsU0FBUyxHQThFbEQ7a0JBOUVvQixTQUFTIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXZlbnRUeXBlIH0gZnJvbSBcIi4uL0RhdGEvRXZlbnRUeXBlXCI7XHJcbmltcG9ydCB7IExpc3RlbmVyTWFuYWdlciB9IGZyb20gXCIuLi9NYW5hZ2VyL0xpc3RlbmVyTWFuYWdlclwiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuY29uc3QgcG9zQXJyOiBjYy5WZWMyW11bXSA9IFtbY2MudjIoMCwgMCksIGNjLnYyKDAsIC0zMDApLCBjYy52MigwLCAtMTAwKV0sXHJcbltjYy52MigwLCAwKSwgY2MudjIoLTUwLCAtMjUwKSwgY2MudjIoMCwgMCldXTtcclxuY29uc3Qgc2NhbGVBcnI6IG51bWJlcltdW10gPSBbWzEsIDEsIDAuNl0sIFsxLCAxLjIsIDAuOCwgMC44XV07XHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVTY2VuZSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgLy8gb25Mb2FkICgpIHt9XHJcbiAgICBwcml2YXRlIGluZGV4OiBudW1iZXIgPSAtMTtcclxuICAgIC8qKuerluWxjy0tMCAg5qiq5bGPLS0xICovXHJcbiAgICBwcml2YXRlIHNjcmVlblN0YXR1czogbnVtYmVyID0gLTE7XHJcbiAgICAvKirlvZPliY3mkq3mlL7liqjnlLsgKi9cclxuICAgIHByaXZhdGUgY3VyQWN0aW9uOiBjYy5BY3Rpb24gPSBudWxsO1xyXG4gICAgcHJpdmF0ZSBtb3ZlU3BlZWQ6IG51bWJlciA9IDEyMDA7XHJcbiAgICBzdGFydCgpIHtcclxuICAgICAgICB0aGlzLmNoYW5nZURlc2lnblJlc29sdXRpb24oKTtcclxuICAgICAgICBMaXN0ZW5lck1hbmFnZXIub24oRXZlbnRUeXBlLkdBTUVfU0NFTkVfTU9WRSwgKGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5zdG9wQWxsQWN0aW9ucygpO1xyXG4gICAgICAgICAgICB0aGlzLmluZGV4ID0gaW5kZXg7XHJcbiAgICAgICAgICAgIGxldCBwb3MgPSBwb3NBcnJbdGhpcy5zY3JlZW5TdGF0dXNdW3RoaXMuaW5kZXhdXHJcbiAgICAgICAgICAgIGxldCBkaXN0YW5jZSA9IE1hdGguc3FydChNYXRoLnBvdygocG9zLnggLSB0aGlzLm5vZGUucG9zaXRpb24ueCksIDIpICsgTWF0aC5wb3coKHBvcy55IC0gdGhpcy5ub2RlLnBvc2l0aW9uLnkpLCAyKSk7XHJcbiAgICAgICAgICAgIGxldCB0aW1lID0gZGlzdGFuY2UgLyB0aGlzLm1vdmVTcGVlZDtcclxuICAgICAgICAgICAgaWYgKHRpbWUgPj0gMC43KSB7XHJcbiAgICAgICAgICAgICAgICB0aW1lID0gMC43O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRpbWUgPSAwLjQ7XHJcbiAgICAgICAgICAgIHRoaXMuY3VyQWN0aW9uID0gY2Muc3Bhd24oXHJcbiAgICAgICAgICAgICAgICBjYy5tb3ZlVG8odGltZSwgcG9zQXJyW3RoaXMuc2NyZWVuU3RhdHVzXVt0aGlzLmluZGV4XSksXHJcbiAgICAgICAgICAgICAgICBjYy5zY2FsZVRvKHRpbWUsIHNjYWxlQXJyW3RoaXMuc2NyZWVuU3RhdHVzXVt0aGlzLmluZGV4XSksXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICAgICAgdGhpcy5ub2RlLnJ1bkFjdGlvbih0aGlzLmN1ckFjdGlvbik7XHJcbiAgICAgICAgfSwgdGhpcyk7XHJcbiAgICAgICAgTGlzdGVuZXJNYW5hZ2VyLm9uKEV2ZW50VHlwZS5TQ1JFRU5fViwgKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnNjcmVlblN0YXR1cyA9IDA7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmluZGV4ICE9IC0xKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUuc3RvcEFjdGlvbih0aGlzLmN1ckFjdGlvbik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUuc2V0UG9zaXRpb24ocG9zQXJyW3RoaXMuc2NyZWVuU3RhdHVzXVt0aGlzLmluZGV4XSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUuc2V0U2NhbGUoc2NhbGVBcnJbdGhpcy5zY3JlZW5TdGF0dXNdW3RoaXMuaW5kZXhdKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5zdG9wQWN0aW9uKHRoaXMuY3VyQWN0aW9uKTtcclxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5zZXRQb3NpdGlvbihwb3NBcnJbdGhpcy5zY3JlZW5TdGF0dXNdWzBdKTtcclxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5zZXRTY2FsZShzY2FsZUFyclt0aGlzLnNjcmVlblN0YXR1c11bMF0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSwgdGhpcyk7XHJcbiAgICAgICAgTGlzdGVuZXJNYW5hZ2VyLm9uKEV2ZW50VHlwZS5TQ1JFRU5fSCwgKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnNjcmVlblN0YXR1cyA9IDE7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmluZGV4ICE9IC0xKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUuc3RvcEFjdGlvbih0aGlzLmN1ckFjdGlvbik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUuc2V0UG9zaXRpb24ocG9zQXJyW3RoaXMuc2NyZWVuU3RhdHVzXVt0aGlzLmluZGV4XSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUuc2V0U2NhbGUoc2NhbGVBcnJbdGhpcy5zY3JlZW5TdGF0dXNdW3RoaXMuaW5kZXhdKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5zdG9wQWN0aW9uKHRoaXMuY3VyQWN0aW9uKTtcclxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5zZXRQb3NpdGlvbihwb3NBcnJbdGhpcy5zY3JlZW5TdGF0dXNdWzBdKTtcclxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5zZXRTY2FsZShzY2FsZUFyclt0aGlzLnNjcmVlblN0YXR1c11bMF0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSwgdGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICog5bGP5bmV6YCC6YWNXHJcbiAgICogQHJldHVybnMgXHJcbiAgICovXHJcbiAgICBjaGFuZ2VEZXNpZ25SZXNvbHV0aW9uKCkge1xyXG4gICAgICAgIC8v6I635Y+W5b2T5YmN5bGP5bmV5a696auYXHJcbiAgICAgICAgbGV0IGZyYW1lV2lkdGggPSBjYy52aWV3LmdldEZyYW1lU2l6ZSgpLndpZHRoO1xyXG4gICAgICAgIGxldCBmcmFtZUhlaWdodCA9IGNjLnZpZXcuZ2V0RnJhbWVTaXplKCkuaGVpZ2h0O1xyXG4gICAgICAgIGlmIChmcmFtZUhlaWdodCA+PSBmcmFtZVdpZHRoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2NyZWVuU3RhdHVzID0gMDtcclxuICAgICAgICAgICAgaWYgKHRoaXMuaW5kZXggPT0gLTEpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5zdG9wQWN0aW9uKHRoaXMuY3VyQWN0aW9uKTtcclxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5zZXRQb3NpdGlvbihwb3NBcnJbdGhpcy5zY3JlZW5TdGF0dXNdWzBdKTtcclxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5zZXRTY2FsZShzY2FsZUFyclt0aGlzLnNjcmVlblN0YXR1c11bMF0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5zY3JlZW5TdGF0dXMgPSAxO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5pbmRleCA9PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLnN0b3BBY3Rpb24odGhpcy5jdXJBY3Rpb24pO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLnNldFBvc2l0aW9uKHBvc0Fyclt0aGlzLnNjcmVlblN0YXR1c11bMF0pO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLnNldFNjYWxlKHNjYWxlQXJyW3RoaXMuc2NyZWVuU3RhdHVzXVswXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvLyB1cGRhdGUgKGR0KSB7fVxyXG59XHJcbiJdfQ==