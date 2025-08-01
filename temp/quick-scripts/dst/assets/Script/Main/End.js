
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Main/End.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '033b78zPNBPg4wYNYtnBV1Z', 'End');
// Script/Main/End.ts

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
var TweenScale_1 = require("./TweenScale");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var End = /** @class */ (function (_super) {
    __extends(End, _super);
    function End() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // onLoad () {}
        _this.downLoadBtn = null;
        _this.logo = null;
        return _this;
    }
    End.prototype.start = function () {
        var _this = this;
        this.node.on(cc.Node.EventType.TOUCH_START, function () {
            ListenerManager_1.ListenerManager.dispatch(EventType_1.EventType.CLICK_DOWLAND_BTN);
        });
        SoundManager_1.SoundManager.playEffect("over", false, false, false);
        var logoPos = this.logo.getPosition();
        this.logo.setPosition(logoPos.x, logoPos.y + 300);
        this.logo.runAction(cc.sequence(cc.moveTo(0.3, logoPos).easing(cc.easeBackOut()), cc.callFunc(function () {
        })));
        var downLoadPos = this.downLoadBtn.getPosition();
        this.downLoadBtn.setPosition(downLoadPos.x, downLoadPos.y - 300);
        this.downLoadBtn.runAction(cc.sequence(cc.moveTo(0.3, downLoadPos).easing(cc.easeBackOut()), cc.callFunc(function () {
            _this.downLoadBtn.addComponent(TweenScale_1.default);
        })));
    };
    __decorate([
        property(cc.Node)
    ], End.prototype, "downLoadBtn", void 0);
    __decorate([
        property(cc.Node)
    ], End.prototype, "logo", void 0);
    End = __decorate([
        ccclass
    ], End);
    return End;
}(cc.Component));
exports.default = End;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxNYWluXFxFbmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsK0NBQThDO0FBRTlDLDhEQUE2RDtBQUM3RCx3REFBdUQ7QUFFdkQsMkNBQXNDO0FBRWhDLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQWlDLHVCQUFZO0lBQTdDO1FBQUEscUVBcUNDO1FBcENHLGVBQWU7UUFFUCxpQkFBVyxHQUFZLElBQUksQ0FBQztRQUU1QixVQUFJLEdBQVksSUFBSSxDQUFDOztJQWdDakMsQ0FBQztJQTlCRyxtQkFBSyxHQUFMO1FBQUEsaUJBNkJDO1FBNUJHLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBRTtZQUN4QyxpQ0FBZSxDQUFDLFFBQVEsQ0FBQyxxQkFBUyxDQUFDLGlCQUFpQixDQUFDLENBQUM7UUFDMUQsQ0FBQyxDQUFDLENBQUM7UUFFSCwyQkFBWSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQztRQUNyRCxJQUFJLE9BQU8sR0FBWSxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQy9DLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUUsT0FBTyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQztRQUNsRCxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FDZixFQUFFLENBQUMsUUFBUSxDQUNQLEVBQUUsQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFLE9BQU8sQ0FBQyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsV0FBVyxFQUFFLENBQUMsRUFDaEQsRUFBRSxDQUFDLFFBQVEsQ0FBQztRQUVaLENBQUMsQ0FBQyxDQUNMLENBQ0osQ0FBQztRQUdGLElBQUksV0FBVyxHQUFZLElBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDMUQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLENBQUMsRUFBRSxXQUFXLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDO1FBQ2pFLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUN0QixFQUFFLENBQUMsUUFBUSxDQUNQLEVBQUUsQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFLFdBQVcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsV0FBVyxFQUFFLENBQUMsRUFDcEQsRUFBRSxDQUFDLFFBQVEsQ0FBQztZQUNSLEtBQUksQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDLG9CQUFVLENBQUMsQ0FBQztRQUM5QyxDQUFDLENBQUMsQ0FDTCxDQUVKLENBQUM7SUFDTixDQUFDO0lBakNEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7NENBQ2tCO0lBRXBDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7cUNBQ1c7SUFMWixHQUFHO1FBRHZCLE9BQU87T0FDYSxHQUFHLENBcUN2QjtJQUFELFVBQUM7Q0FyQ0QsQUFxQ0MsQ0FyQ2dDLEVBQUUsQ0FBQyxTQUFTLEdBcUM1QztrQkFyQ29CLEdBQUciLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFdmVudFR5cGUgfSBmcm9tIFwiLi4vRGF0YS9FdmVudFR5cGVcIjtcclxuaW1wb3J0IHsgR2FtZU1hbmFnZXIgfSBmcm9tIFwiLi4vTWFuYWdlci9HYW1lTWFuYWdlclwiO1xyXG5pbXBvcnQgeyBMaXN0ZW5lck1hbmFnZXIgfSBmcm9tIFwiLi4vTWFuYWdlci9MaXN0ZW5lck1hbmFnZXJcIjtcclxuaW1wb3J0IHsgU291bmRNYW5hZ2VyIH0gZnJvbSBcIi4uL01hbmFnZXIvU291bmRNYW5hZ2VyXCI7XHJcbmltcG9ydCB7IFV0aWxzIH0gZnJvbSBcIi4uL01hbmFnZXIvVXRpbHNcIjtcclxuaW1wb3J0IFR3ZWVuU2NhbGUgZnJvbSBcIi4vVHdlZW5TY2FsZVwiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVuZCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcbiAgICAvLyBvbkxvYWQgKCkge31cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgcHJpdmF0ZSBkb3duTG9hZEJ0bjogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHByaXZhdGUgbG9nbzogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgc3RhcnQoKSB7XHJcbiAgICAgICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCAoKSA9PiB7XHJcbiAgICAgICAgICAgIExpc3RlbmVyTWFuYWdlci5kaXNwYXRjaChFdmVudFR5cGUuQ0xJQ0tfRE9XTEFORF9CVE4pO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBTb3VuZE1hbmFnZXIucGxheUVmZmVjdChcIm92ZXJcIiwgZmFsc2UsIGZhbHNlLCBmYWxzZSk7XHJcbiAgICAgICAgbGV0IGxvZ29Qb3M6IGNjLlZlYzIgPSB0aGlzLmxvZ28uZ2V0UG9zaXRpb24oKTtcclxuICAgICAgICB0aGlzLmxvZ28uc2V0UG9zaXRpb24obG9nb1Bvcy54LCBsb2dvUG9zLnkgKyAzMDApO1xyXG4gICAgICAgIHRoaXMubG9nby5ydW5BY3Rpb24oXHJcbiAgICAgICAgICAgIGNjLnNlcXVlbmNlKFxyXG4gICAgICAgICAgICAgICAgY2MubW92ZVRvKDAuMywgbG9nb1BvcykuZWFzaW5nKGNjLmVhc2VCYWNrT3V0KCkpLFxyXG4gICAgICAgICAgICAgICAgY2MuY2FsbEZ1bmMoKCkgPT4ge1xyXG5cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICApO1xyXG5cclxuXHJcbiAgICAgICAgbGV0IGRvd25Mb2FkUG9zOiBjYy5WZWMyID0gdGhpcy5kb3duTG9hZEJ0bi5nZXRQb3NpdGlvbigpO1xyXG4gICAgICAgIHRoaXMuZG93bkxvYWRCdG4uc2V0UG9zaXRpb24oZG93bkxvYWRQb3MueCwgZG93bkxvYWRQb3MueSAtIDMwMCk7XHJcbiAgICAgICAgdGhpcy5kb3duTG9hZEJ0bi5ydW5BY3Rpb24oXHJcbiAgICAgICAgICAgIGNjLnNlcXVlbmNlKFxyXG4gICAgICAgICAgICAgICAgY2MubW92ZVRvKDAuMywgZG93bkxvYWRQb3MpLmVhc2luZyhjYy5lYXNlQmFja091dCgpKSxcclxuICAgICAgICAgICAgICAgIGNjLmNhbGxGdW5jKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRvd25Mb2FkQnRuLmFkZENvbXBvbmVudChUd2VlblNjYWxlKTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIClcclxuXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG4iXX0=