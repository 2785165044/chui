
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Main/SyncPostion.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '17dbet2q8xEvpVxb4Vpu82o', 'SyncPostion');
// Script/Main/SyncPostion.ts

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
var SoundManager_1 = require("../Manager/SoundManager");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var SyncPosition = /** @class */ (function (_super) {
    __extends(SyncPosition, _super);
    function SyncPosition() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.initNodeScale = 1;
        return _this;
    }
    SyncPosition.prototype.start = function () {
        var _this = this;
        this.initNodeScale = this.node.scale;
        this.changeDesignResolution();
        ListenerManager_1.ListenerManager.on(EventType_1.EventType.SCREEN_V, function () {
            if (_this.node) {
                _this.changeDesignResolution();
            }
        }, this);
        ListenerManager_1.ListenerManager.on(EventType_1.EventType.SCREEN_H, function () {
            if (_this.node) {
                _this.changeDesignResolution();
            }
        }, this);
    };
    // 每次将要处理碰撞体接触逻辑时被调用
    SyncPosition.prototype.onBeginContact = function (contact, selfCollider, otherCollider) {
        if (selfCollider.node.name == "huodui") {
            SoundManager_1.SoundManager.playEffect("diaoluo", false, false);
        }
    };
    // 每次处理完碰撞体接触逻辑时被调用
    SyncPosition.prototype.onPostSolve = function (contact, selfCollider, otherCollider) {
    };
    SyncPosition.prototype.update = function (dt) {
        if (this.node.getComponent(cc.RigidBody)) {
            this.node.getComponent(cc.RigidBody).syncPosition(true);
        }
    };
    SyncPosition.prototype.changeDesignResolution = function () {
        //获取当前屏幕宽高
        var frameWidth = cc.view.getFrameSize().width;
        var frameHeight = cc.view.getFrameSize().height;
        if (frameHeight >= frameWidth) {
            this.node.scale = 1 * this.initNodeScale;
        }
        else {
            this.node.scale = 1 * this.initNodeScale;
        }
    };
    SyncPosition = __decorate([
        ccclass
    ], SyncPosition);
    return SyncPosition;
}(cc.Component));
exports.default = SyncPosition;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxNYWluXFxTeW5jUG9zdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwrQ0FBOEM7QUFDOUMsOERBQTZEO0FBQzdELHdEQUF1RDtBQUVqRCxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUEwQyxnQ0FBWTtJQUF0RDtRQUFBLHFFQStDQztRQTdDVyxtQkFBYSxHQUFXLENBQUMsQ0FBQzs7SUE2Q3RDLENBQUM7SUE1Q0csNEJBQUssR0FBTDtRQUFBLGlCQWNDO1FBYkcsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUNyQyxJQUFJLENBQUMsc0JBQXNCLEVBQUUsQ0FBQztRQUM5QixpQ0FBZSxDQUFDLEVBQUUsQ0FBQyxxQkFBUyxDQUFDLFFBQVEsRUFBRTtZQUNuQyxJQUFJLEtBQUksQ0FBQyxJQUFJLEVBQUU7Z0JBQ1gsS0FBSSxDQUFDLHNCQUFzQixFQUFFLENBQUM7YUFDakM7UUFDTCxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFFVCxpQ0FBZSxDQUFDLEVBQUUsQ0FBQyxxQkFBUyxDQUFDLFFBQVEsRUFBRTtZQUNuQyxJQUFJLEtBQUksQ0FBQyxJQUFJLEVBQUU7Z0JBQ1gsS0FBSSxDQUFDLHNCQUFzQixFQUFFLENBQUM7YUFDakM7UUFDTCxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDYixDQUFDO0lBRUQsb0JBQW9CO0lBQ3BCLHFDQUFjLEdBQWQsVUFBZSxPQUFPLEVBQUUsWUFBWSxFQUFFLGFBQWE7UUFDL0MsSUFBSSxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxRQUFRLEVBQUU7WUFDcEMsMkJBQVksQ0FBQyxVQUFVLENBQUMsU0FBUyxFQUFFLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQztTQUNwRDtJQUNMLENBQUM7SUFFRCxtQkFBbUI7SUFDbkIsa0NBQVcsR0FBWCxVQUFZLE9BQU8sRUFBRSxZQUFZLEVBQUUsYUFBYTtJQUVoRCxDQUFDO0lBRUQsNkJBQU0sR0FBTixVQUFPLEVBQVU7UUFDYixJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsRUFBRTtZQUN0QyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQzNEO0lBQ0wsQ0FBQztJQUVELDZDQUFzQixHQUF0QjtRQUNJLFVBQVU7UUFDVixJQUFJLFVBQVUsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDLEtBQUssQ0FBQztRQUM5QyxJQUFJLFdBQVcsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDLE1BQU0sQ0FBQztRQUNoRCxJQUFJLFdBQVcsSUFBSSxVQUFVLEVBQUU7WUFDM0IsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUM7U0FDNUM7YUFBTTtZQUNILElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDO1NBQzVDO0lBQ0wsQ0FBQztJQTlDZ0IsWUFBWTtRQURoQyxPQUFPO09BQ2EsWUFBWSxDQStDaEM7SUFBRCxtQkFBQztDQS9DRCxBQStDQyxDQS9DeUMsRUFBRSxDQUFDLFNBQVMsR0ErQ3JEO2tCQS9Db0IsWUFBWSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEV2ZW50VHlwZSB9IGZyb20gXCIuLi9EYXRhL0V2ZW50VHlwZVwiO1xyXG5pbXBvcnQgeyBMaXN0ZW5lck1hbmFnZXIgfSBmcm9tIFwiLi4vTWFuYWdlci9MaXN0ZW5lck1hbmFnZXJcIjtcclxuaW1wb3J0IHsgU291bmRNYW5hZ2VyIH0gZnJvbSBcIi4uL01hbmFnZXIvU291bmRNYW5hZ2VyXCI7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3luY1Bvc2l0aW9uIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBwcml2YXRlIGluaXROb2RlU2NhbGU6IG51bWJlciA9IDE7XHJcbiAgICBzdGFydCgpIHtcclxuICAgICAgICB0aGlzLmluaXROb2RlU2NhbGUgPSB0aGlzLm5vZGUuc2NhbGU7XHJcbiAgICAgICAgdGhpcy5jaGFuZ2VEZXNpZ25SZXNvbHV0aW9uKCk7XHJcbiAgICAgICAgTGlzdGVuZXJNYW5hZ2VyLm9uKEV2ZW50VHlwZS5TQ1JFRU5fViwgKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5ub2RlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZURlc2lnblJlc29sdXRpb24oKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sIHRoaXMpO1xyXG5cclxuICAgICAgICBMaXN0ZW5lck1hbmFnZXIub24oRXZlbnRUeXBlLlNDUkVFTl9ILCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLm5vZGUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlRGVzaWduUmVzb2x1dGlvbigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSwgdGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8g5q+P5qyh5bCG6KaB5aSE55CG56Kw5pKe5L2T5o6l6Kem6YC76L6R5pe26KKr6LCD55SoXHJcbiAgICBvbkJlZ2luQ29udGFjdChjb250YWN0LCBzZWxmQ29sbGlkZXIsIG90aGVyQ29sbGlkZXIpIHtcclxuICAgICAgICBpZiAoc2VsZkNvbGxpZGVyLm5vZGUubmFtZSA9PSBcImh1b2R1aVwiKSB7XHJcbiAgICAgICAgICAgIFNvdW5kTWFuYWdlci5wbGF5RWZmZWN0KFwiZGlhb2x1b1wiLCBmYWxzZSwgZmFsc2UpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyDmr4/mrKHlpITnkIblroznorDmkp7kvZPmjqXop6bpgLvovpHml7booqvosIPnlKhcclxuICAgIG9uUG9zdFNvbHZlKGNvbnRhY3QsIHNlbGZDb2xsaWRlciwgb3RoZXJDb2xsaWRlcikge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUoZHQ6IG51bWJlcikge1xyXG4gICAgICAgIGlmICh0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlJpZ2lkQm9keSkpIHtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5SaWdpZEJvZHkpLnN5bmNQb3NpdGlvbih0cnVlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY2hhbmdlRGVzaWduUmVzb2x1dGlvbigpIHtcclxuICAgICAgICAvL+iOt+WPluW9k+WJjeWxj+W5leWuvemrmFxyXG4gICAgICAgIGxldCBmcmFtZVdpZHRoID0gY2Mudmlldy5nZXRGcmFtZVNpemUoKS53aWR0aDtcclxuICAgICAgICBsZXQgZnJhbWVIZWlnaHQgPSBjYy52aWV3LmdldEZyYW1lU2l6ZSgpLmhlaWdodDtcclxuICAgICAgICBpZiAoZnJhbWVIZWlnaHQgPj0gZnJhbWVXaWR0aCkge1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuc2NhbGUgPSAxICogdGhpcy5pbml0Tm9kZVNjYWxlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5zY2FsZSA9IDEgKiB0aGlzLmluaXROb2RlU2NhbGU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdfQ==