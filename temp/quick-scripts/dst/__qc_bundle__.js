
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__qc_index__.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}
require('./assets/Script/Data/ConstValue');
require('./assets/Script/Data/EventType');
require('./assets/Script/Main/Ball');
require('./assets/Script/Main/CardCtrl');
require('./assets/Script/Main/CollisionDetection');
require('./assets/Script/Main/End');
require('./assets/Script/Main/GameScene');
require('./assets/Script/Main/MainGame');
require('./assets/Script/Main/MainLogic');
require('./assets/Script/Main/Money');
require('./assets/Script/Main/RoateAction');
require('./assets/Script/Main/SetLevel');
require('./assets/Script/Main/SyncPostion');
require('./assets/Script/Main/TweenScale');
require('./assets/Script/Main/super_html_playable');
require('./assets/Script/Manager/GameManager');
require('./assets/Script/Manager/ListenerManager');
require('./assets/Script/Manager/NodeActionManager');
require('./assets/Script/Manager/SoundManager');
require('./assets/Script/Manager/Utils');

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
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Manager/ListenerManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '5f524xFqgpP9LNI2s3bjxJ8', 'ListenerManager');
// Script/Manager/ListenerManager.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListenerManager = void 0;
var ListenerManagerClass = /** @class */ (function () {
    function ListenerManagerClass() {
        this.handle = {};
    }
    ListenerManagerClass.getInstance = function () {
        if (null === this._instance) {
            this._instance = new ListenerManagerClass();
        }
        return this._instance;
    };
    ListenerManagerClass.prototype.on = function (eventName, cb, target) {
        if (this.hasEvent(eventName, cb, target)) {
            return;
        }
        if (!this.handle[eventName]) {
            this.handle[eventName] = [];
        }
        var data = { func: cb, target: target };
        this.handle[eventName].push(data);
    };
    ListenerManagerClass.prototype.off = function (eventName, cb, target) {
        var list = this.handle[eventName];
        if (!list || list.length <= 0) {
            return;
        }
        for (var i = 0; i < list.length; i++) {
            var event = list[i];
            if (cb == event.func && (!target || target == event.target)) {
                list.splice(i, 1);
                break;
            }
        }
    };
    ListenerManagerClass.prototype.dispatch = function (eventName) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        var list = this.handle[eventName];
        if (!list || list.length <= 0) {
            return;
        }
        for (var i = 0; i < list.length; i++) {
            var event = list[i];
            event.func.apply(event.target, args);
        }
    };
    ListenerManagerClass.prototype.removeAll = function (target) {
        if (target) {
            for (var key in this.handle) {
                var list = this.handle[key];
                for (var i = 0, l = list.length; i < l; i++) {
                    var event = list[i];
                    if (event.target == target) {
                        list.splice(i, 1);
                        if (l > 0) {
                            l--;
                        }
                        i--;
                    }
                }
            }
        }
        else {
            for (var key in this.handle) {
                var list = this.handle[key];
                while (list.length > 0) {
                    list.pop();
                }
            }
        }
    };
    ListenerManagerClass.prototype.hasEvent = function (eventName, cb, target) {
        var list = this.handle[eventName];
        if (!list || list.length <= 0) {
            return false;
        }
        for (var i = 0; i < list.length; i++) {
            var event = list[i];
            if (cb == event.func && (!target || target == event.target)) {
                return true;
            }
        }
        return false;
    };
    ListenerManagerClass._instance = null;
    return ListenerManagerClass;
}());
exports.ListenerManager = ListenerManagerClass.getInstance();

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxNYW5hZ2VyXFxMaXN0ZW5lck1hbmFnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBU0E7SUFBQTtRQUVZLFdBQU0sR0FBVyxFQUFFLENBQUM7SUFvRmhDLENBQUM7SUFsRmlCLGdDQUFXLEdBQXpCO1FBQ0ksSUFBSSxJQUFJLEtBQUssSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUN6QixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksb0JBQW9CLEVBQUUsQ0FBQztTQUMvQztRQUNELE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUMxQixDQUFDO0lBRU0saUNBQUUsR0FBVCxVQUFVLFNBQWlCLEVBQUUsRUFBWSxFQUFFLE1BQVc7UUFDbEQsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsRUFBRSxFQUFFLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDdEMsT0FBTztTQUNWO1FBRUQsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLEVBQUU7WUFDekIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFLENBQUM7U0FDL0I7UUFDRCxJQUFNLElBQUksR0FBZSxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsTUFBTSxRQUFBLEVBQUUsQ0FBQztRQUM5QyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN0QyxDQUFDO0lBRU0sa0NBQUcsR0FBVixVQUFXLFNBQWlCLEVBQUUsRUFBWSxFQUFFLE1BQVk7UUFDcEQsSUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNwQyxJQUFJLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxNQUFNLElBQUksQ0FBQyxFQUFFO1lBQzNCLE9BQU87U0FDVjtRQUNELEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFF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LEVBQUU7Z0JBQ3pELE9BQU8sSUFBSSxDQUFDO2FBQ2Y7U0FDSjtRQUNELE9BQU8sS0FBSyxDQUFDO0lBQ2pCLENBQUM7SUFwRmMsOEJBQVMsR0FBeUIsSUFBSSxDQUFDO0lBcUYxRCwyQkFBQztDQXRGRCxBQXNGQyxJQUFBO0FBRVksUUFBQSxlQUFlLEdBQUcsb0JBQW9CLENBQUMsV0FBVyxFQUFFLENBQUMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbnRlcmZhY2UgSUV2ZW50RGF0YSB7XHJcbiAgICBmdW5jOiBGdW5jdGlvbjtcclxuICAgIHRhcmdldDogYW55O1xyXG59XHJcblxyXG5pbnRlcmZhY2UgSUV2ZW50IHtcclxuICAgIFtldmVudE5hbWU6IHN0cmluZ106IElFdmVudERhdGFbXTtcclxufVxyXG5cclxuY2xhc3MgTGlzdGVuZXJNYW5hZ2VyQ2xhc3Mge1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgX2luc3RhbmNlOiBMaXN0ZW5lck1hbmFnZXJDbGFzcyA9IG51bGw7XHJcbiAgICBwcml2YXRlIGhhbmRsZTogSUV2ZW50ID0ge307XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBnZXRJbnN0YW5jZSgpOiBMaXN0ZW5lck1hbmFnZXJDbGFzcyB7XHJcbiAgICAgICAgaWYgKG51bGwgPT09IHRoaXMuX2luc3RhbmNlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2luc3RhbmNlID0gbmV3IExpc3RlbmVyTWFuYWdlckNsYXNzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLl9pbnN0YW5jZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgb24oZXZlbnROYW1lOiBzdHJpbmcsIGNiOiBGdW5jdGlvbiwgdGFyZ2V0OiBhbnkpIHtcclxuICAgICAgICBpZiAodGhpcy5oYXNFdmVudChldmVudE5hbWUsIGNiLCB0YXJnZXQpKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghdGhpcy5oYW5kbGVbZXZlbnROYW1lXSkge1xyXG4gICAgICAgICAgICB0aGlzLmhhbmRsZVtldmVudE5hbWVdID0gW107XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGRhdGE6IElFdmVudERhdGEgPSB7IGZ1bmM6IGNiLCB0YXJnZXQgfTtcclxuICAgICAgICB0aGlzLmhhbmRsZVtldmVudE5hbWVdLnB1c2goZGF0YSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG9mZihldmVudE5hbWU6IHN0cmluZywgY2I6IEZ1bmN0aW9uLCB0YXJnZXQ/OiBhbnkpIHtcclxuICAgICAgICBjb25zdCBsaXN0ID0gdGhpcy5oYW5kbGVbZXZlbnROYW1lXTtcclxuICAgICAgICBpZiAoIWxpc3QgfHwgbGlzdC5sZW5ndGggPD0gMCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBjb25zdCBldmVudCA9IGxpc3RbaV07XHJcbiAgICAgICAgICAgIGlmIChjYiA9PSBldmVudC5mdW5jICYmICghdGFyZ2V0IHx8IHRhcmdldCA9PSBldmVudC50YXJnZXQpKSB7XHJcbiAgICAgICAgICAgICAgICBsaXN0LnNwbGljZShpLCAxKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBkaXNwYXRjaChldmVudE5hbWU6IHN0cmluZywgLi4uYXJnczogYW55KSB7XHJcbiAgICAgICAgY29uc3QgbGlzdCA9IHRoaXMuaGFuZGxlW2V2ZW50TmFtZV07XHJcbiAgICAgICAgaWYgKCFsaXN0IHx8IGxpc3QubGVuZ3RoIDw9IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgY29uc3QgZXZlbnQgPSBsaXN0W2ldO1xyXG4gICAgICAgICAgICBldmVudC5mdW5jLmFwcGx5KGV2ZW50LnRhcmdldCwgYXJncyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyByZW1vdmVBbGwodGFyZ2V0PzogYW55KSB7XHJcbiAgICAgICAgaWYgKHRhcmdldCkge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBrZXkgaW4gdGhpcy5oYW5kbGUpIHtcclxuICAgICAgICAgICAgICAgIGxldCBsaXN0ID0gdGhpcy5oYW5kbGVba2V5XTtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwLCBsID0gbGlzdC5sZW5ndGg7IGkgPCBsOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgZXZlbnQgPSBsaXN0W2ldO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChldmVudC50YXJnZXQgPT0gdGFyZ2V0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpc3Quc3BsaWNlKGksIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGwtLTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpLS07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZm9yIChsZXQga2V5IGluIHRoaXMuaGFuZGxlKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBsaXN0ID0gdGhpcy5oYW5kbGVba2V5XTtcclxuICAgICAgICAgICAgICAgIHdoaWxlIChsaXN0Lmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBsaXN0LnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBoYXNFdmVudChldmVudE5hbWU6IHN0cmluZywgY2I6IEZ1bmN0aW9uLCB0YXJnZXQ/OiBhbnkpOiBib29sZWFuIHtcclxuICAgICAgICBjb25zdCBsaXN0ID0gdGhpcy5oYW5kbGVbZXZlbnROYW1lXTtcclxuICAgICAgICBpZiAoIWxpc3QgfHwgbGlzdC5sZW5ndGggPD0gMCkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBjb25zdCBldmVudCA9IGxpc3RbaV07XHJcbiAgICAgICAgICAgIGlmIChjYiA9PSBldmVudC5mdW5jICYmICghdGFyZ2V0IHx8IHRhcmdldCA9PSBldmVudC50YXJnZXQpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBMaXN0ZW5lck1hbmFnZXIgPSBMaXN0ZW5lck1hbmFnZXJDbGFzcy5nZXRJbnN0YW5jZSgpO1xyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Data/EventType.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'de11erLsm1BopNJbNpEkvJK', 'EventType');
// Script/Data/EventType.ts

"use strict";
/**
 * 自定义事件类型
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventType = void 0;
var EventType;
(function (EventType) {
    /**横屏 */
    EventType["SCREEN_H"] = "SCREEN_H";
    /**竖屏 */
    EventType["SCREEN_V"] = "SCREEN_V";
    /**横竖屏切换 */
    EventType["GAME_SCENE_CHANGE"] = "GAME_SCENE_CHANGE";
    /**场景移动 */
    EventType["GAME_SCENE_MOVE"] = "GAME_SCENE_MOVE";
    /**打开屏幕点击 */
    EventType["OPEN_SCREEN_TOUCH"] = "OPEN_SCREEN_TOUCH";
    /**关闭屏幕点击 */
    EventType["CLOSE_SCREEN_TOUCH"] = "CLOSE_SCREEN_TOUCH";
    /**游戏开始 */
    EventType["GAME_START"] = "GAME_START";
    /**游戏暂停 */
    EventType["GAME_PAUSE"] = "GAME_PAUSE";
    /**游戏继续 */
    EventType["GAME_CONTINUE"] = "GAME_CONTINUE";
    /**游戏失败 */
    EventType["GAME_FAIL"] = "GAME_FAIL";
    /**游戏重玩 */
    EventType["GAME_TRY_AGAIN"] = "GAME_TRY_AGAIN";
    /**游戏结束 */
    EventType["GAME_OVER"] = "GAME_OVER";
    /**点击下载按钮 */
    EventType["CLICK_DOWLAND_BTN"] = "CLICK_DOWLAND_BTN";
    /**改变资金值 */
    EventType["CHANGE_MONEY_VALUE"] = "CHANGE_MONEY_VALUE";
    /**点击第一个按钮 */
    EventType["TOUCH_FIRST_BTN"] = "TOUCH_FIRST_BTN";
    /**点击第二个按钮 */
    EventType["TOUCH_SECOND_BTN"] = "TOUCH_SECOND_BTN";
    /**点击第三个按钮 */
    EventType["TOUCH_THIRD_BTN"] = "TOUCH_THIRD_BTN";
    /**隐藏引导 */
    EventType["HIDE_HAND"] = "HIDE_HAND";
    /**显示引导 */
    EventType["DISPLAY_HAND"] = "DISPLAY_HAND";
    /** */
    EventType["CHANGE_GIRL"] = "CHANGE_GIRL";
    EventType["DISPLAY_PANEL"] = "DISPLAY_PANEL";
    EventType["COLLISION_NODE"] = "COLLISION_NODE";
    EventType["NEXT_BALL"] = "NEXT_BALL";
    EventType["TOUCH_ITEM"] = "TOUCH_ITEM";
    EventType["MUTE_OPEN"] = "MUTE_OPEN";
    EventType["MUTE_CLOSE"] = "MUTE_CLOSE";
    //可以点击的卡片
    EventType["NEED_TOUCH_CARD"] = "NEED_TOUCH_CARD";
    //点击卡片
    EventType["TOUCH_CARD"] = "TOUCH_CARD";
    //开始计时
    EventType["START_TIME"] = "START_TIME";
    //结束计时
    EventType["END_TIME"] = "END_TIME";
})(EventType = exports.EventType || (exports.EventType = {}));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxEYXRhXFxFdmVudFR5cGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztHQUVHOzs7QUFFSCxJQUFZLFNBNkRYO0FBN0RELFdBQVksU0FBUztJQUNqQixRQUFRO0lBQ1Isa0NBQXFCLENBQUE7SUFDckIsUUFBUTtJQUNSLGtDQUFxQixDQUFBO0lBQ3JCLFdBQVc7SUFDWCxvREFBdUMsQ0FBQTtJQUN2QyxVQUFVO0lBQ1YsZ0RBQW1DLENBQUE7SUFDbkMsWUFBWTtJQUNaLG9EQUF1QyxDQUFBO0lBQ3ZDLFlBQVk7SUFDWixzREFBeUMsQ0FBQTtJQUN6QyxVQUFVO0lBQ1Ysc0NBQXlCLENBQUE7SUFDekIsVUFBVTtJQUNWLHNDQUF5QixDQUFBO0lBQ3pCLFVBQVU7SUFDViw0Q0FBK0IsQ0FBQTtJQUMvQixVQUFVO0lBQ1Ysb0NBQXVCLENBQUE7SUFDdkIsVUFBVTtJQUNWLDhDQUFpQyxDQUFBO0lBQ2pDLFVBQVU7SUFDVixvQ0FBdUIsQ0FBQTtJQUN2QixZQUFZO0lBQ1osb0RBQXVDLENBQUE7SUFDdkMsV0FBVztJQUNYLHNEQUF5QyxDQUFBO0lBQ3pDLGFBQWE7SUFDYixnREFBbUMsQ0FBQTtJQUNuQyxhQUFhO0lBQ2Isa0RBQXFDLENBQUE7SUFDckMsYUFBYTtJQUNiLGdEQUFtQyxDQUFBO0lBQ25DLFVBQVU7SUFDVixvQ0FBdUIsQ0FBQTtJQUN2QixVQUFVO0lBQ1YsMENBQTZCLENBQUE7SUFDN0IsTUFBTTtJQUNOLHdDQUEyQixDQUFBO0lBRTNCLDRDQUErQixDQUFBO0lBRS9CLDhDQUFpQyxDQUFBO0lBRWpDLG9DQUF1QixDQUFBO0lBRXZCLHNDQUF5QixDQUFBO0lBRXpCLG9DQUF1QixDQUFBO0lBRXZCLHNDQUF5QixDQUFBO0lBQ3pCLFNBQVM7SUFDVCxnREFBbUMsQ0FBQTtJQUNuQyxNQUFNO0lBQ04sc0NBQXlCLENBQUE7SUFDekIsTUFBTTtJQUNOLHNDQUF5QixDQUFBO0lBQ3pCLE1BQU07SUFDTixrQ0FBcUIsQ0FBQTtBQUN6QixDQUFDLEVBN0RXLFNBQVMsR0FBVCxpQkFBUyxLQUFULGlCQUFTLFFBNkRwQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiDoh6rlrprkuYnkuovku7bnsbvlnotcclxuICovXHJcblxyXG5leHBvcnQgZW51bSBFdmVudFR5cGUge1xyXG4gICAgLyoq5qiq5bGPICovXHJcbiAgICBTQ1JFRU5fSCA9IFwiU0NSRUVOX0hcIixcclxuICAgIC8qKuerluWxjyAqL1xyXG4gICAgU0NSRUVOX1YgPSBcIlNDUkVFTl9WXCIsXHJcbiAgICAvKirmqKrnq5blsY/liIfmjaIgKi9cclxuICAgIEdBTUVfU0NFTkVfQ0hBTkdFID0gXCJHQU1FX1NDRU5FX0NIQU5HRVwiLFxyXG4gICAgLyoq5Zy65pmv56e75YqoICovXHJcbiAgICBHQU1FX1NDRU5FX01PVkUgPSBcIkdBTUVfU0NFTkVfTU9WRVwiLFxyXG4gICAgLyoq5omT5byA5bGP5bmV54K55Ye7ICovXHJcbiAgICBPUEVOX1NDUkVFTl9UT1VDSCA9IFwiT1BFTl9TQ1JFRU5fVE9VQ0hcIixcclxuICAgIC8qKuWFs+mXreWxj+W5leeCueWHuyAqL1xyXG4gICAgQ0xPU0VfU0NSRUVOX1RPVUNIID0gXCJDTE9TRV9TQ1JFRU5fVE9VQ0hcIixcclxuICAgIC8qKua4uOaIj+W8gOWniyAqL1xyXG4gICAgR0FNRV9TVEFSVCA9IFwiR0FNRV9TVEFSVFwiLFxyXG4gICAgLyoq5ri45oiP5pqC5YGcICovXHJcbiAgICBHQU1FX1BBVVNFID0gXCJHQU1FX1BBVVNFXCIsXHJcbiAgICAvKirmuLjmiI/nu6fnu60gKi9cclxuICAgIEdBTUVfQ09OVElOVUUgPSBcIkdBTUVfQ09OVElOVUVcIixcclxuICAgIC8qKua4uOaIj+Wksei0pSAqL1xyXG4gICAgR0FNRV9GQUlMID0gXCJHQU1FX0ZBSUxcIixcclxuICAgIC8qKua4uOaIj+mHjeeOqSAqL1xyXG4gICAgR0FNRV9UUllfQUdBSU4gPSBcIkdBTUVfVFJZX0FHQUlOXCIsXHJcbiAgICAvKirmuLjmiI/nu5PmnZ8gKi9cclxuICAgIEdBTUVfT1ZFUiA9IFwiR0FNRV9PVkVSXCIsXHJcbiAgICAvKirngrnlh7vkuIvovb3mjInpkq4gKi9cclxuICAgIENMSUNLX0RPV0xBTkRfQlROID0gXCJDTElDS19ET1dMQU5EX0JUTlwiLFxyXG4gICAgLyoq5pS55Y+Y6LWE6YeR5YC8ICovXHJcbiAgICBDSEFOR0VfTU9ORVlfVkFMVUUgPSBcIkNIQU5HRV9NT05FWV9WQUxVRVwiLFxyXG4gICAgLyoq54K55Ye756ys5LiA5Liq5oyJ6ZKuICovXHJcbiAgICBUT1VDSF9GSVJTVF9CVE4gPSBcIlRPVUNIX0ZJUlNUX0JUTlwiLFxyXG4gICAgLyoq54K55Ye756ys5LqM5Liq5oyJ6ZKuICovXHJcbiAgICBUT1VDSF9TRUNPTkRfQlROID0gXCJUT1VDSF9TRUNPTkRfQlROXCIsXHJcbiAgICAvKirngrnlh7vnrKzkuInkuKrmjInpkq4gKi9cclxuICAgIFRPVUNIX1RISVJEX0JUTiA9IFwiVE9VQ0hfVEhJUkRfQlROXCIsXHJcbiAgICAvKirpmpDol4/lvJXlr7wgKi9cclxuICAgIEhJREVfSEFORCA9IFwiSElERV9IQU5EXCIsXHJcbiAgICAvKirmmL7npLrlvJXlr7wgKi9cclxuICAgIERJU1BMQVlfSEFORCA9IFwiRElTUExBWV9IQU5EXCIsXHJcbiAgICAvKiogKi9cclxuICAgIENIQU5HRV9HSVJMID0gXCJDSEFOR0VfR0lSTFwiLFxyXG5cclxuICAgIERJU1BMQVlfUEFORUwgPSBcIkRJU1BMQVlfUEFORUxcIixcclxuXHJcbiAgICBDT0xMSVNJT05fTk9ERSA9IFwiQ09MTElTSU9OX05PREVcIixcclxuXHJcbiAgICBORVhUX0JBTEwgPSBcIk5FWFRfQkFMTFwiLFxyXG5cclxuICAgIFRPVUNIX0lURU0gPSBcIlRPVUNIX0lURU1cIixcclxuXHJcbiAgICBNVVRFX09QRU4gPSBcIk1VVEVfT1BFTlwiLFxyXG5cclxuICAgIE1VVEVfQ0xPU0UgPSBcIk1VVEVfQ0xPU0VcIixcclxuICAgIC8v5Y+v5Lul54K55Ye755qE5Y2h54mHXHJcbiAgICBORUVEX1RPVUNIX0NBUkQgPSBcIk5FRURfVE9VQ0hfQ0FSRFwiLFxyXG4gICAgLy/ngrnlh7vljaHniYdcclxuICAgIFRPVUNIX0NBUkQgPSBcIlRPVUNIX0NBUkRcIixcclxuICAgIC8v5byA5aeL6K6h5pe2XHJcbiAgICBTVEFSVF9USU1FID0gXCJTVEFSVF9USU1FXCIsXHJcbiAgICAvL+e7k+adn+iuoeaXtlxyXG4gICAgRU5EX1RJTUUgPSBcIkVORF9USU1FXCIsXHJcbn0iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Main/CollisionDetection.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '34a637h0p9Anruglq6aDWhO', 'CollisionDetection');
// Script/Main/CollisionDetection.ts

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
var CollisionDetection = /** @class */ (function (_super) {
    __extends(CollisionDetection, _super);
    function CollisionDetection() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // 只在两个碰撞体开始接触时被调用一次
    CollisionDetection.prototype.onBeginContact = function (contact, selfCollider, otherCollider) {
        var selfNode = selfCollider.node;
        if (selfNode.name != "dropBall") {
            ListenerManager_1.ListenerManager.dispatch(EventType_1.EventType.COLLISION_NODE, selfNode);
            selfNode.active = false;
        }
        else {
            SoundManager_1.SoundManager.playEffect("diaoluo", false, false, false);
        }
    };
    // 只在两个碰撞体结束接触时被调用一次
    CollisionDetection.prototype.onEndContact = function (contact, selfCollider, otherCollider) {
    };
    // 每次将要处理碰撞体接触逻辑时被调用
    CollisionDetection.prototype.onPreSolve = function (contact, selfCollider, otherCollider) {
    };
    // 每次处理完碰撞体接触逻辑时被调用
    CollisionDetection.prototype.onPostSolve = function (contact, selfCollider, otherCollider) {
    };
    CollisionDetection = __decorate([
        ccclass
    ], CollisionDetection);
    return CollisionDetection;
}(cc.Component));
exports.default = CollisionDetection;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxNYWluXFxDb2xsaXNpb25EZXRlY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsK0NBQThDO0FBQzlDLDhEQUE2RDtBQUM3RCx3REFBdUQ7QUFFakQsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBZ0Qsc0NBQVk7SUFBNUQ7O0lBeUJBLENBQUM7SUF2Qkcsb0JBQW9CO0lBQ3BCLDJDQUFjLEdBQWQsVUFBZSxPQUFPLEVBQUUsWUFBWSxFQUFFLGFBQWE7UUFDL0MsSUFBSSxRQUFRLEdBQVksWUFBWSxDQUFDLElBQUksQ0FBQztRQUMxQyxJQUFJLFFBQVEsQ0FBQyxJQUFJLElBQUksVUFBVSxFQUFFO1lBQzdCLGlDQUFlLENBQUMsUUFBUSxDQUFDLHFCQUFTLENBQUMsY0FBYyxFQUFFLFFBQVEsQ0FBQyxDQUFDO1lBQzdELFFBQVEsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1NBQzNCO2FBQU07WUFDSCwyQkFBWSxDQUFDLFVBQVUsQ0FBQyxTQUFTLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQztTQUMzRDtJQUNMLENBQUM7SUFFRCxvQkFBb0I7SUFDcEIseUNBQVksR0FBWixVQUFhLE9BQU8sRUFBRSxZQUFZLEVBQUUsYUFBYTtJQUNqRCxDQUFDO0lBRUQsb0JBQW9CO0lBQ3BCLHVDQUFVLEdBQVYsVUFBVyxPQUFPLEVBQUUsWUFBWSxFQUFFLGFBQWE7SUFDL0MsQ0FBQztJQUVELG1CQUFtQjtJQUNuQix3Q0FBVyxHQUFYLFVBQVksT0FBTyxFQUFFLFlBQVksRUFBRSxhQUFhO0lBQ2hELENBQUM7SUF2QmdCLGtCQUFrQjtRQUR0QyxPQUFPO09BQ2Esa0JBQWtCLENBeUJ0QztJQUFELHlCQUFDO0NBekJELEFBeUJDLENBekIrQyxFQUFFLENBQUMsU0FBUyxHQXlCM0Q7a0JBekJvQixrQkFBa0IiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFdmVudFR5cGUgfSBmcm9tIFwiLi4vRGF0YS9FdmVudFR5cGVcIjtcclxuaW1wb3J0IHsgTGlzdGVuZXJNYW5hZ2VyIH0gZnJvbSBcIi4uL01hbmFnZXIvTGlzdGVuZXJNYW5hZ2VyXCI7XHJcbmltcG9ydCB7IFNvdW5kTWFuYWdlciB9IGZyb20gXCIuLi9NYW5hZ2VyL1NvdW5kTWFuYWdlclwiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbGxpc2lvbkRldGVjdGlvbiBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgLy8g5Y+q5Zyo5Lik5Liq56Kw5pKe5L2T5byA5aeL5o6l6Kem5pe26KKr6LCD55So5LiA5qyhXHJcbiAgICBvbkJlZ2luQ29udGFjdChjb250YWN0LCBzZWxmQ29sbGlkZXIsIG90aGVyQ29sbGlkZXIpIHtcclxuICAgICAgICBsZXQgc2VsZk5vZGU6IGNjLk5vZGUgPSBzZWxmQ29sbGlkZXIubm9kZTtcclxuICAgICAgICBpZiAoc2VsZk5vZGUubmFtZSAhPSBcImRyb3BCYWxsXCIpIHtcclxuICAgICAgICAgICAgTGlzdGVuZXJNYW5hZ2VyLmRpc3BhdGNoKEV2ZW50VHlwZS5DT0xMSVNJT05fTk9ERSwgc2VsZk5vZGUpO1xyXG4gICAgICAgICAgICBzZWxmTm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBTb3VuZE1hbmFnZXIucGxheUVmZmVjdChcImRpYW9sdW9cIiwgZmFsc2UsIGZhbHNlLCBmYWxzZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIOWPquWcqOS4pOS4queisOaSnuS9k+e7k+adn+aOpeinpuaXtuiiq+iwg+eUqOS4gOasoVxyXG4gICAgb25FbmRDb250YWN0KGNvbnRhY3QsIHNlbGZDb2xsaWRlciwgb3RoZXJDb2xsaWRlcikge1xyXG4gICAgfVxyXG5cclxuICAgIC8vIOavj+asoeWwhuimgeWkhOeQhueisOaSnuS9k+aOpeinpumAu+i+keaXtuiiq+iwg+eUqFxyXG4gICAgb25QcmVTb2x2ZShjb250YWN0LCBzZWxmQ29sbGlkZXIsIG90aGVyQ29sbGlkZXIpIHtcclxuICAgIH1cclxuXHJcbiAgICAvLyDmr4/mrKHlpITnkIblroznorDmkp7kvZPmjqXop6bpgLvovpHml7booqvosIPnlKhcclxuICAgIG9uUG9zdFNvbHZlKGNvbnRhY3QsIHNlbGZDb2xsaWRlciwgb3RoZXJDb2xsaWRlcikge1xyXG4gICAgfVxyXG5cclxufSJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Main/RoateAction.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '76de4/tna5HOpF+ivAn+oE6', 'RoateAction');
// Script/Main/RoateAction.ts

"use strict";
// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html
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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // onLoad () {}
    NewClass.prototype.start = function () {
        this.node.runAction(cc.repeatForever(cc.rotateTo(4, 720)));
    };
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxNYWluXFxSb2F0ZUFjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLDRFQUE0RTtBQUM1RSxtQkFBbUI7QUFDbkIsc0ZBQXNGO0FBQ3RGLDhCQUE4QjtBQUM5QixzRkFBc0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVoRixJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFzQyw0QkFBWTtJQUFsRDs7SUFhQSxDQUFDO0lBWEcsZUFBZTtJQUVmLHdCQUFLLEdBQUw7UUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FDZixFQUFFLENBQUMsYUFBYSxDQUNaLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUN0QixDQUNKLENBQUM7SUFDTixDQUFDO0lBVmdCLFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0FhNUI7SUFBRCxlQUFDO0NBYkQsQUFhQyxDQWJxQyxFQUFFLENBQUMsU0FBUyxHQWFqRDtrQkFib0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOZXdDbGFzcyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgLy8gb25Mb2FkICgpIHt9XHJcblxyXG4gICAgc3RhcnQoKSB7XHJcbiAgICAgICAgdGhpcy5ub2RlLnJ1bkFjdGlvbihcclxuICAgICAgICAgICAgY2MucmVwZWF0Rm9yZXZlcihcclxuICAgICAgICAgICAgICAgIGNjLnJvdGF0ZVRvKDQsIDcyMClcclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gdXBkYXRlIChkdCkge31cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Main/CardCtrl.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '3fcb8YQ84hL16Arv1Du3E7Q', 'CardCtrl');
// Script/Main/CardCtrl.ts

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
var SetLevel_1 = require("./SetLevel");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var CardCtrl = /** @class */ (function (_super) {
    __extends(CardCtrl, _super);
    function CardCtrl() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.bingoParent = null;
        _this.numberNodeParent = null;
        _this.hand = null;
        //当前需要点击的数字
        _this.curNum = -1;
        //bingo次数
        _this.bingoNum = 0;
        //是否可以点击
        _this.canTouch = true;
        //点击正确数量
        _this.rightNum = 0;
        //每列的数字
        _this.numberArr = [];
        //当前需要点击的节点
        _this.targetNode = null;
        _this.rowCount = 5;
        _this.colCount = 5;
        _this.selectNode = null;
        _this.spriteName = ["bingo", "double bingo", "trible bingo", "mega bingo"];
        return _this;
    }
    CardCtrl.prototype.start = function () {
        var _this = this;
        this.hand = this.node.getChildByName("hand");
        this.bingoParent = this.node.getChildByName("bingoParent");
        this.numberArr = this.node.getComponent(SetLevel_1.default).displayLevel(GameManager_1.GameManager.cardNumArr);
        this.numberNodeParent = this.node.getChildByName("parent");
        // this.initCheeseBackground();
        // for (let i = 0; i < this.numberNodeParent.childrenCount; i++) {
        // let node = this.numberNodeParent.children[i];
        // let col: number = Number(node.name.split("")[1]);
        // // 如果stone节点需要每列不同的图标，可以在这里设置
        // Utils.setSpriteFrame(node.getChildByName("stone"), "stone" + col);
        // }
        ListenerManager_1.ListenerManager.on(EventType_1.EventType.DISPLAY_HAND, function (num) {
            _this.targetNode = _this.getTargetNode(num);
            if (_this.targetNode) {
                _this.curNum = num;
                _this.displayHand();
                ListenerManager_1.ListenerManager.dispatch(EventType_1.EventType.NEED_TOUCH_CARD, _this.targetNode);
            }
        }, this);
        ListenerManager_1.ListenerManager.on(EventType_1.EventType.TOUCH_ITEM, function (touchNode) {
            _this.onTouchNum(touchNode);
        }, this);
    };
    //      private initCheeseBackground() {
    //     // 为每个数字节点设置奶酪背景和数字图片
    //     for (let i = 0; i < this.numberNodeParent.childrenCount; i++) {
    //         let node = this.numberNodeParent.children[i];
    //         let row: number = Number(node.name.split("")[0]);
    //         let col: number = Number(node.name.split("")[1]);
    //         // 设置奶酪背景图片
    //         let cheeseBg = node.getChildByName("cheese");
    //         if (cheeseBg) {
    //             Utils.setSpriteFrame(cheeseBg, "cheese" + (col + 1));
    //         }
    //         // 获取数字并设置数字图片
    //         let labelNode = node.getChildByName("label");
    //         if (labelNode) {
    //             let num: number = Number(labelNode.getComponent(cc.Label).string);
    //             // 隐藏文本标签
    //             labelNode.active = false;
    //             // 显示数字图片
    //             let numberSpriteNode = node.getChildByName("number_sprite");
    //             if (numberSpriteNode) {
    //                 numberSpriteNode.active = true;
    //                 Utils.setSpriteFrame(numberSpriteNode, num.toString());
    //             }
    //         }
    //     }
    // }
    CardCtrl.prototype.getTargetNode = function (num) {
        for (var i = 0; i < this.numberNodeParent.childrenCount; i++) {
            var labelNum = Number(this.numberNodeParent.children[i].getChildByName("label").getComponent(cc.Label).string);
            if (labelNum == num) {
                return this.numberNodeParent.children[i];
            }
        }
    };
    CardCtrl.prototype.displayHand = function () {
        this.unscheduleAllCallbacks();
        this.hand.setPosition(Utils_1.Utils.getNodePos(this.targetNode, this.hand.parent));
        this.hand.active = true;
        this.hand.runAction(cc.repeatForever(cc.sequence(cc.scaleTo(0.25, 0.9), cc.scaleTo(0.25, 1))));
        this.targetNode.getChildByName("tip").active = true;
    };
    CardCtrl.prototype.hideHand = function () {
        this.unscheduleAllCallbacks();
        this.hand.stopAllActions();
        this.hand.active = false;
    };
    CardCtrl.prototype.onTouchNum = function (touchNode) {
        var _this = this;
        if (!this.canTouch || touchNode.parent != this.numberNodeParent) {
            return;
        }
        var labelNode = touchNode.getChildByName("label");
        var touchNum = Number(labelNode.getComponent(cc.Label).string);
        SoundManager_1.SoundManager.playEffect("click", false, false, false);
        if (touchNum == this.curNum) {
            this.rightNum += 1;
            this.hideHand();
            //点击正确后全部变为0
            labelNode.getComponent(cc.Label).string = "0";
            touchNode.getChildByName("tip").active = false;
            this.node.getComponent(SetLevel_1.default).removeTouchEvent(touchNode);
            touchNode.getChildByName("stone").active = false;
            touchNode.getChildByName("right").active = true;
            var col = Number(touchNode.name.split("")[1]);
            // Utils.setSpriteFrame(touchNode.getChildByName("right"), "item" + col);
            Utils_1.Utils.flipY(touchNode.getChildByName("right"), 0.5, function () {
                _this.checkBingo(_this.numberArr);
            });
            SoundManager_1.SoundManager.playEffect("fly", false, false, false, 0.5);
            //选择正确
            labelNode.active = false;
            ListenerManager_1.ListenerManager.dispatch(EventType_1.EventType.TOUCH_CARD, touchNode);
            var Particle = touchNode.getChildByName("Particle");
            Particle.active = true;
            Particle.setScale(1);
            Particle.getComponent(cc.ParticleSystem).resetSystem();
        }
        else {
            SoundManager_1.SoundManager.playEffect("wrong", false, false, false, 0.5);
            //选择错误
            var wrongNode_1 = touchNode.getChildByName("wrong");
            wrongNode_1.scale = 0;
            wrongNode_1.active = true;
            wrongNode_1.runAction(cc.sequence(cc.scaleTo(0.3, 1).easing(cc.easeBackOut()), cc.scaleTo(0.3, 0).easing(cc.easeBackIn()), cc.callFunc(function () {
                wrongNode_1.active = false;
            })));
        }
        ListenerManager_1.ListenerManager.dispatch(EventType_1.EventType.START_TIME);
    };
    // 获取节点数字
    CardCtrl.prototype.getNodeNumber = function (node) {
        return Number(node.getChildByName("label").getComponent(cc.Label).string);
    };
    // 检查一行或一列是否形成Bingo
    CardCtrl.prototype.checkLine = function (start, end, isRow) {
        var nodes = [];
        var numbers = [];
        for (var i = 0; i <= end; i++) {
            var nodeName = isRow ? "" + start + i : "" + i + start;
            var node = this.numberNodeParent.getChildByName(nodeName);
            if (!node)
                continue;
            var num = this.getNodeNumber(node);
            if (num <= 0) {
                numbers.push(num);
                nodes.push(node);
            }
        }
        if (nodes.length >= this.rowCount && numbers.indexOf(0) !== -1) {
            return nodes;
        }
        return null;
    };
    // // 检查每一行
    // checkRow() {
    //     const nodeArr: cc.Node[][] = [];
    //     for (let row = 0; row < this.rowCount; row++) {
    //         const lineNodes = this.checkLine(row, this.colCount - 1, true);
    //         if (lineNodes) {
    //             nodeArr.push(lineNodes);
    //         }
    //     }
    //     return nodeArr;
    // }
    // 检查每一列
    CardCtrl.prototype.checkColumn = function () {
        var nodeArr = [];
        for (var col = 0; col < this.colCount; col++) {
            var lineNodes = this.checkLine(col, this.rowCount - 1, false);
            if (lineNodes) {
                nodeArr.push(lineNodes);
            }
        }
        return nodeArr;
    };
    // 检查对角线
    // checkDiagonal() {
    //     const nodeArr: cc.Node[][] = [];
    //     const size = this.rowCount;
    //     // 检查主对角线 (左上到右下)
    //     const mainDiagonal: cc.Node[] = [];
    //     const mainDiagonalNums: number[] = [];
    //     // 检查副对角线 (右上到左下)
    //     const antiDiagonal: cc.Node[] = [];
    //     const antiDiagonalNums: number[] = [];
    //     for (let i = 0; i < size; i++) {
    //         // 主对角线
    //         const mainNode = this.numberNodeParent.getChildByName(`${i}${i}`);
    //         const mainNum = this.getNodeNumber(mainNode);
    //         if (mainNum <= 0) {
    //             mainDiagonalNums.push(mainNum);
    //             mainDiagonal.push(mainNode);
    //         }
    //         // 副对角线
    //         const antiNode = this.numberNodeParent.getChildByName(`${i}${size - i - 1}`);
    //         const antiNum = this.getNodeNumber(antiNode);
    //         if (antiNum <= 0) {
    //             antiDiagonalNums.push(antiNum);
    //             antiDiagonal.push(antiNode);
    //         }
    //     }
    //     if (mainDiagonal.length >= size && mainDiagonalNums.indexOf(0) !== -1) {
    //         nodeArr.push(mainDiagonal);
    //     }
    //     if (antiDiagonal.length >= size && antiDiagonalNums.indexOf(0) !== -1) {
    //         nodeArr.push(antiDiagonal);
    //     }
    //     return nodeArr;
    // }
    CardCtrl.prototype.checkBingo = function (numArr) {
        // 检查每一行
        // let rowArr: cc.Node[][] = this.checkRow();
        var _this = this;
        // 检查每一列
        var colArr = this.checkColumn();
        // 检查对角线
        // let diagArr: cc.Node[][] = this.checkDiagonal();
        var nodeArr = colArr;
        var isBingo = false;
        if (nodeArr.length > 0) {
            SoundManager_1.SoundManager.playEffect("upgrade", false, false, false);
            for (var i = 0; i < nodeArr.length; i++) {
                var curArr = nodeArr[i];
                var _loop_1 = function (j) {
                    var node = curArr[j];
                    node.getChildByName("label").getComponent(cc.Label).string = "-1";
                    var right = node.getChildByName("right");
                    var col = Number(node.name.split("")[1]);
                    var item = node.getChildByName("item");
                    Utils_1.Utils.setSpriteFrame(item, "fruit" + col);
                    item.active = true;
                    item.scale = 0;
                    item.runAction(cc.sequence(cc.delayTime(0.12 * j), cc.callFunc(function () {
                        right.active = false;
                        var star = node.getChildByName("star");
                        star.active = true;
                        star.getComponent(cc.Animation).play();
                        star.getComponent(cc.Animation).on(cc.Animation.EventType.FINISHED, function () {
                            star.active = false;
                        });
                    }), cc.scaleTo(0.15, 0.6).easing(cc.easeBackOut()), cc.scaleTo(0.15, 0.5), cc.delayTime(0.15), cc.callFunc(function () {
                        if (!isBingo) {
                            isBingo = true;
                            _this.displayBingo(col);
                        }
                    })));
                };
                for (var j = 0; j < curArr.length; j++) {
                    _loop_1(j);
                }
            }
        }
    };
    //显示bingo动画
    CardCtrl.prototype.displayBingo = function (index) {
        var _this = this;
        this.canTouch = false;
        this.bingoNum += 1;
        if (this.bingoNum >= 4) {
            this.bingoNum = 4;
        }
        var star = this.bingoParent.getChildByName("star");
        this.playAn(star);
        var bingo = this.bingoParent.getChildByName("bingo");
        bingo.active = true;
        Utils_1.Utils.playSpine(bingo, this.spriteName[this.bingoNum - 1], false, function () {
            bingo.active = false;
            _this.canTouch = true;
        });
        var leaf = this.bingoParent.getChildByName("leaf");
        // for (let i = 0; i < leaf.childrenCount; i++) {
        //     let child: cc.Node = leaf.children[i];
        //     child.active = true;
        //     Utils.setSpriteFrame(child, "leaf" + (this.bingoNum - 1));
        // }
        Utils_1.Utils.setSpriteFrame(leaf, "fruit" + index);
        leaf.active = true;
        leaf.setScale(0);
        leaf.runAction(cc.sequence(cc.scaleTo(0.5, 2).easing(cc.easeBackOut()), cc.delayTime(0.5), cc.scaleTo(0.5, 0).easing(cc.easeBackIn()), cc.callFunc(function () {
            leaf.active = false;
        })));
        SoundManager_1.SoundManager.playEffect("bingo_x" + this.bingoNum, false, false, false);
    };
    //播放动画
    CardCtrl.prototype.playAn = function (node, callback) {
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
    CardCtrl = __decorate([
        ccclass
    ], CardCtrl);
    return CardCtrl;
}(cc.Component));
exports.default = CardCtrl;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxNYWluXFxDYXJkQ3RybC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwrQ0FBOEM7QUFDOUMsc0RBQXFEO0FBQ3JELDhEQUE2RDtBQUM3RCx3REFBdUQ7QUFDdkQsMENBQXlDO0FBRXpDLHVDQUFrQztBQUU1QixJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFzQyw0QkFBWTtJQUFsRDtRQUFBLHFFQW9YQztRQWxYVyxpQkFBVyxHQUFZLElBQUksQ0FBQztRQUU1QixzQkFBZ0IsR0FBWSxJQUFJLENBQUM7UUFFakMsVUFBSSxHQUFZLElBQUksQ0FBQztRQUM3QixXQUFXO1FBQ0gsWUFBTSxHQUFXLENBQUMsQ0FBQyxDQUFDO1FBQzVCLFNBQVM7UUFDRCxjQUFRLEdBQVcsQ0FBQyxDQUFDO1FBQzdCLFFBQVE7UUFDQSxjQUFRLEdBQVksSUFBSSxDQUFDO1FBQ2pDLFFBQVE7UUFDQSxjQUFRLEdBQVcsQ0FBQyxDQUFDO1FBRTdCLE9BQU87UUFDQyxlQUFTLEdBQWUsRUFBRSxDQUFDO1FBRW5DLFdBQVc7UUFDSCxnQkFBVSxHQUFZLElBQUksQ0FBQztRQUUzQixjQUFRLEdBQVcsQ0FBQyxDQUFDO1FBRXJCLGNBQVEsR0FBVyxDQUFDLENBQUM7UUFFckIsZ0JBQVUsR0FBWSxJQUFJLENBQUM7UUFzUzNCLGdCQUFVLEdBQWEsQ0FBQyxPQUFPLEVBQUUsY0FBYyxFQUFFLGNBQWMsRUFBRSxZQUFZLENBQUMsQ0FBQzs7SUFvRDNGLENBQUM7SUF6Vkcsd0JBQUssR0FBTDtRQUFBLGlCQTBCQztRQXpCRyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzdDLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFD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Q0wsQ0FDSixDQUFDO1FBRUYsMkJBQVksQ0FBQyxVQUFVLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxRQUFRLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQztJQUM1RSxDQUFDO0lBRUQsTUFBTTtJQUNOLHlCQUFNLEdBQU4sVUFBTyxJQUFhLEVBQUUsUUFBeUI7UUFBekIseUJBQUEsRUFBQSxlQUF5QjtRQUMzQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztRQUNuQixJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUN2QyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFO1lBQ2hFLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1lBQ3BCLElBQUksUUFBUSxFQUFFO2dCQUNWLFFBQVEsRUFBRSxDQUFDO2FBQ2Q7UUFDTCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFuWGdCLFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0FvWDVCO0lBQUQsZUFBQztDQXBYRCxBQW9YQyxDQXBYcUMsRUFBRSxDQUFDLFNBQVMsR0FvWGpEO2tCQXBYb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEV2ZW50VHlwZSB9IGZyb20gXCIuLi9EYXRhL0V2ZW50VHlwZVwiO1xyXG5pbXBvcnQgeyBHYW1lTWFuYWdlciB9IGZyb20gXCIuLi9NYW5hZ2VyL0dhbWVNYW5hZ2VyXCI7XHJcbmltcG9ydCB7IExpc3RlbmVyTWFuYWdlciB9IGZyb20gXCIuLi9NYW5hZ2VyL0xpc3RlbmVyTWFuYWdlclwiO1xyXG5pbXBvcnQgeyBTb3VuZE1hbmFnZXIgfSBmcm9tIFwiLi4vTWFuYWdlci9Tb3VuZE1hbmFnZXJcIjtcclxuaW1wb3J0IHsgVXRpbHMgfSBmcm9tIFwiLi4vTWFuYWdlci9VdGlsc1wiO1xyXG5pbXBvcnQgQmFsbCBmcm9tIFwiLi9CYWxsXCI7XHJcbmltcG9ydCBTZXRMZXZlbCBmcm9tIFwiLi9TZXRMZXZlbFwiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhcmRDdHJsIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBwcml2YXRlIGJpbmdvUGFyZW50OiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBwcml2YXRlIG51bWJlck5vZGVQYXJlbnQ6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIHByaXZhdGUgaGFuZDogY2MuTm9kZSA9IG51bGw7XHJcbiAgICAvL+W9k+WJjemcgOimgeeCueWHu+eahOaVsOWtl1xyXG4gICAgcHJpdmF0ZSBjdXJOdW06IG51bWJlciA9IC0xO1xyXG4gICAgLy9iaW5nb+asoeaVsFxyXG4gICAgcHJpdmF0ZSBiaW5nb051bTogbnVtYmVyID0gMDtcclxuICAgIC8v5piv5ZCm5Y+v5Lul54K55Ye7XHJcbiAgICBwcml2YXRlIGNhblRvdWNoOiBib29sZWFuID0gdHJ1ZTtcclxuICAgIC8v54K55Ye75q2j56Gu5pWw6YePXHJcbiAgICBwcml2YXRlIHJpZ2h0TnVtOiBudW1iZXIgPSAwO1xyXG5cclxuICAgIC8v5q+P5YiX55qE5pWw5a2XXHJcbiAgICBwcml2YXRlIG51bWJlckFycjogbnVtYmVyW11bXSA9IFtdO1xyXG5cclxuICAgIC8v5b2T5YmN6ZyA6KaB54K55Ye755qE6IqC54K5XHJcbiAgICBwcml2YXRlIHRhcmdldE5vZGU6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIHByaXZhdGUgcm93Q291bnQ6IG51bWJlciA9IDU7XHJcblxyXG4gICAgcHJpdmF0ZSBjb2xDb3VudDogbnVtYmVyID0gNTtcclxuXHJcbiAgICBwcml2YXRlIHNlbGVjdE5vZGU6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgc3RhcnQoKSB7XHJcbiAgICAgICAgdGhpcy5oYW5kID0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiaGFuZFwiKTtcclxuICAgICAgICB0aGlzLmJpbmdvUGFyZW50ID0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiYmluZ29QYXJlbnRcIik7XHJcbiAgICAgICAgdGhpcy5udW1iZXJBcnIgPSB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KFNldExldmVsKS5kaXNwbGF5TGV2ZWwoR2FtZU1hbmFnZXIuY2FyZE51bUFycik7XHJcbiAgICAgICAgdGhpcy5udW1iZXJOb2RlUGFyZW50ID0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwicGFyZW50XCIpO1xyXG5cclxuICAgICAgICAvLyB0aGlzLmluaXRDaGVlc2VCYWNrZ3JvdW5kKCk7XHJcbiAgICAgICAgLy8gZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLm51bWJlck5vZGVQYXJlbnQuY2hpbGRyZW5Db3VudDsgaSsrKSB7XHJcbiAgICAgICAgLy8gbGV0IG5vZGUgPSB0aGlzLm51bWJlck5vZGVQYXJlbnQuY2hpbGRyZW5baV07XHJcbiAgICAgICAgLy8gbGV0IGNvbDogbnVtYmVyID0gTnVtYmVyKG5vZGUubmFtZS5zcGxpdChcIlwiKVsxXSk7XHJcbiAgICAgICAgLy8gLy8g5aaC5p6cc3RvbmXoioLngrnpnIDopoHmr4/liJfkuI3lkIznmoTlm77moIfvvIzlj6/ku6XlnKjov5nph4zorr7nva5cclxuICAgICAgICAvLyBVdGlscy5zZXRTcHJpdGVGcmFtZShub2RlLmdldENoaWxkQnlOYW1lKFwic3RvbmVcIiksIFwic3RvbmVcIiArIGNvbCk7XHJcbiAgICAgICAgLy8gfVxyXG5cclxuICAgICAgICBMaXN0ZW5lck1hbmFnZXIub24oRXZlbnRUeXBlLkRJU1BMQVlfSEFORCwgKG51bTogbnVtYmVyKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMudGFyZ2V0Tm9kZSA9IHRoaXMuZ2V0VGFyZ2V0Tm9kZShudW0pO1xyXG4gICAgICAgICAgICBpZiAodGhpcy50YXJnZXROb2RlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmN1ck51bSA9IG51bTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGlzcGxheUhhbmQoKTtcclxuICAgICAgICAgICAgICAgIExpc3RlbmVyTWFuYWdlci5kaXNwYXRjaChFdmVudFR5cGUuTkVFRF9UT1VDSF9DQVJELCB0aGlzLnRhcmdldE5vZGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSwgdGhpcyk7XHJcblxyXG4gICAgICAgIExpc3RlbmVyTWFuYWdlci5vbihFdmVudFR5cGUuVE9VQ0hfSVRFTSwgKHRvdWNoTm9kZTogY2MuTm9kZSkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLm9uVG91Y2hOdW0odG91Y2hOb2RlKTtcclxuICAgICAgICB9LCB0aGlzKTtcclxuICAgIH1cclxuICAgIC8vICAgICAgcHJpdmF0ZSBpbml0Q2hlZXNlQmFja2dyb3VuZCgpIHtcclxuICAgIC8vICAgICAvLyDkuLrmr4/kuKrmlbDlrZfoioLngrnorr7nva7lpbbpharog4zmma/lkozmlbDlrZflm77niYdcclxuICAgIC8vICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubnVtYmVyTm9kZVBhcmVudC5jaGlsZHJlbkNvdW50OyBpKyspIHtcclxuICAgIC8vICAgICAgICAgbGV0IG5vZGUgPSB0aGlzLm51bWJlck5vZGVQYXJlbnQuY2hpbGRyZW5baV07XHJcbiAgICAvLyAgICAgICAgIGxldCByb3c6IG51bWJlciA9IE51bWJlcihub2RlLm5hbWUuc3BsaXQoXCJcIilbMF0pO1xyXG4gICAgLy8gICAgICAgICBsZXQgY29sOiBudW1iZXIgPSBOdW1iZXIobm9kZS5uYW1lLnNwbGl0KFwiXCIpWzFdKTtcclxuICAgICAgICAgICAgXHJcbiAgICAvLyAgICAgICAgIC8vIOiuvue9ruWltumFquiDjOaZr+WbvueJh1xyXG4gICAgLy8gICAgICAgICBsZXQgY2hlZXNlQmcgPSBub2RlLmdldENoaWxkQnlOYW1lKFwiY2hlZXNlXCIpO1xyXG4gICAgLy8gICAgICAgICBpZiAoY2hlZXNlQmcpIHtcclxuICAgIC8vICAgICAgICAgICAgIFV0aWxzLnNldFNwcml0ZUZyYW1lKGNoZWVzZUJnLCBcImNoZWVzZVwiICsgKGNvbCArIDEpKTtcclxuICAgIC8vICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgIC8vICAgICAgICAgLy8g6I635Y+W5pWw5a2X5bm26K6+572u5pWw5a2X5Zu+54mHXHJcbiAgICAvLyAgICAgICAgIGxldCBsYWJlbE5vZGUgPSBub2RlLmdldENoaWxkQnlOYW1lKFwibGFiZWxcIik7XHJcbiAgICAvLyAgICAgICAgIGlmIChsYWJlbE5vZGUpIHtcclxuICAgIC8vICAgICAgICAgICAgIGxldCBudW06IG51bWJlciA9IE51bWJlcihsYWJlbE5vZGUuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcpO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAvLyAgICAgICAgICAgICAvLyDpmpDol4/mlofmnKzmoIfnrb5cclxuICAgIC8vICAgICAgICAgICAgIGxhYmVsTm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgLy8gICAgICAgICAgICAgLy8g5pi+56S65pWw5a2X5Zu+54mHXHJcbiAgICAvLyAgICAgICAgICAgICBsZXQgbnVtYmVyU3ByaXRlTm9kZSA9IG5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJudW1iZXJfc3ByaXRlXCIpO1xyXG4gICAgLy8gICAgICAgICAgICAgaWYgKG51bWJlclNwcml0ZU5vZGUpIHtcclxuICAgIC8vICAgICAgICAgICAgICAgICBudW1iZXJTcHJpdGVOb2RlLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgVXRpbHMuc2V0U3ByaXRlRnJhbWUobnVtYmVyU3ByaXRlTm9kZSwgbnVtLnRvU3RyaW5nKCkpO1xyXG4gICAgLy8gICAgICAgICAgICAgfVxyXG4gICAgLy8gICAgICAgICB9XHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gfVxyXG4gICAgICAgIGdldFRhcmdldE5vZGUobnVtOiBudW1iZXIpIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubnVtYmVyTm9kZVBhcmVudC5jaGlsZHJlbkNvdW50OyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IGxhYmVsTnVtOiBudW1iZXIgPSBOdW1iZXIodGhpcy5udW1iZXJOb2RlUGFyZW50LmNoaWxkcmVuW2ldLmdldENoaWxkQnlOYW1lKFwibGFiZWxcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcpO1xyXG4gICAgICAgICAgICBpZiAobGFiZWxOdW0gPT0gbnVtKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5udW1iZXJOb2RlUGFyZW50LmNoaWxkcmVuW2ldO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGRpc3BsYXlIYW5kKCkge1xyXG4gICAgICAgIHRoaXMudW5zY2hlZHVsZUFsbENhbGxiYWNrcygpO1xyXG4gICAgICAgIHRoaXMuaGFuZC5zZXRQb3NpdGlvbihVdGlscy5nZXROb2RlUG9zKHRoaXMudGFyZ2V0Tm9kZSwgdGhpcy5oYW5kLnBhcmVudCkpO1xyXG4gICAgICAgIHRoaXMuaGFuZC5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuaGFuZC5ydW5BY3Rpb24oXHJcbiAgICAgICAgICAgIGNjLnJlcGVhdEZvcmV2ZXIoXHJcbiAgICAgICAgICAgICAgICBjYy5zZXF1ZW5jZShcclxuICAgICAgICAgICAgICAgICAgICBjYy5zY2FsZVRvKDAuMjUsIDAuOSksXHJcbiAgICAgICAgICAgICAgICAgICAgY2Muc2NhbGVUbygwLjI1LCAxKVxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgdGhpcy50YXJnZXROb2RlLmdldENoaWxkQnlOYW1lKFwidGlwXCIpLmFjdGl2ZSA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgaGlkZUhhbmQoKSB7XHJcbiAgICAgICAgdGhpcy51bnNjaGVkdWxlQWxsQ2FsbGJhY2tzKCk7XHJcbiAgICAgICAgdGhpcy5oYW5kLnN0b3BBbGxBY3Rpb25zKCk7XHJcbiAgICAgICAgdGhpcy5oYW5kLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIG9uVG91Y2hOdW0odG91Y2hOb2RlOiBjYy5Ob2RlKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmNhblRvdWNoIHx8IHRvdWNoTm9kZS5wYXJlbnQgIT0gdGhpcy5udW1iZXJOb2RlUGFyZW50KSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGxhYmVsTm9kZTogY2MuTm9kZSA9IHRvdWNoTm9kZS5nZXRDaGlsZEJ5TmFtZShcImxhYmVsXCIpO1xyXG4gICAgICAgIGxldCB0b3VjaE51bTogbnVtYmVyID0gTnVtYmVyKGxhYmVsTm9kZS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyk7XHJcbiAgICAgICAgU291bmRNYW5hZ2VyLnBsYXlFZmZlY3QoXCJjbGlja1wiLCBmYWxzZSwgZmFsc2UsIGZhbHNlKTtcclxuXHJcbiAgICAgICAgaWYgKHRvdWNoTnVtID09IHRoaXMuY3VyTnVtKSB7XHJcbiAgICAgICAgICAgIHRoaXMucmlnaHROdW0gKz0gMTtcclxuICAgICAgICAgICAgdGhpcy5oaWRlSGFuZCgpO1xyXG4gICAgICAgICAgICAvL+eCueWHu+ato+ehruWQjuWFqOmDqOWPmOS4ujBcclxuICAgICAgICAgICAgbGFiZWxOb2RlLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gXCIwXCI7XHJcblxyXG4gICAgICAgICAgICB0b3VjaE5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJ0aXBcIikuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDb21wb25lbnQoU2V0TGV2ZWwpLnJlbW92ZVRvdWNoRXZlbnQodG91Y2hOb2RlKTtcclxuXHJcbiAgICAgICAgICAgIHRvdWNoTm9kZS5nZXRDaGlsZEJ5TmFtZShcInN0b25lXCIpLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0b3VjaE5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJyaWdodFwiKS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICBsZXQgY29sOiBudW1iZXIgPSBOdW1iZXIodG91Y2hOb2RlLm5hbWUuc3BsaXQoXCJcIilbMV0pO1xyXG4gICAgICAgICAgICAvLyBVdGlscy5zZXRTcHJpdGVGcmFtZSh0b3VjaE5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJyaWdodFwiKSwgXCJpdGVtXCIgKyBjb2wpO1xyXG5cclxuICAgICAgICAgICAgVXRpbHMuZmxpcFkodG91Y2hOb2RlLmdldENoaWxkQnlOYW1lKFwicmlnaHRcIiksIDAuNSwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jaGVja0JpbmdvKHRoaXMubnVtYmVyQXJyKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgU291bmRNYW5hZ2VyLnBsYXlFZmZlY3QoXCJmbHlcIiwgZmFsc2UsIGZhbHNlLCBmYWxzZSwgMC41KTtcclxuXHJcbiAgICAgICAgICAgIC8v6YCJ5oup5q2j56GuXHJcbiAgICAgICAgICAgIGxhYmVsTm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgICAgIExpc3RlbmVyTWFuYWdlci5kaXNwYXRjaChFdmVudFR5cGUuVE9VQ0hfQ0FSRCwgdG91Y2hOb2RlKTtcclxuXHJcbiAgICAgICAgICAgIGxldCBQYXJ0aWNsZTogY2MuTm9kZSA9IHRvdWNoTm9kZS5nZXRDaGlsZEJ5TmFtZShcIlBhcnRpY2xlXCIpO1xyXG4gICAgICAgICAgICBQYXJ0aWNsZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICBQYXJ0aWNsZS5zZXRTY2FsZSgxKTtcclxuICAgICAgICAgICAgUGFydGljbGUuZ2V0Q29tcG9uZW50KGNjLlBhcnRpY2xlU3lzdGVtKS5yZXNldFN5c3RlbSgpO1xyXG5cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBTb3VuZE1hbmFnZXIucGxheUVmZmVjdChcIndyb25nXCIsIGZhbHNlLCBmYWxzZSwgZmFsc2UsIDAuNSk7XHJcbiAgICAgICAgICAgIC8v6YCJ5oup6ZSZ6K+vXHJcbiAgICAgICAgICAgIGxldCB3cm9uZ05vZGU6IGNjLk5vZGUgPSB0b3VjaE5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJ3cm9uZ1wiKTtcclxuICAgICAgICAgICAgd3JvbmdOb2RlLnNjYWxlID0gMDtcclxuICAgICAgICAgICAgd3JvbmdOb2RlLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIHdyb25nTm9kZS5ydW5BY3Rpb24oXHJcbiAgICAgICAgICAgICAgICBjYy5zZXF1ZW5jZShcclxuICAgICAgICAgICAgICAgICAgICBjYy5zY2FsZVRvKDAuMywgMSkuZWFzaW5nKGNjLmVhc2VCYWNrT3V0KCkpLFxyXG4gICAgICAgICAgICAgICAgICAgIGNjLnNjYWxlVG8oMC4zLCAwKS5lYXNpbmcoY2MuZWFzZUJhY2tJbigpKSxcclxuICAgICAgICAgICAgICAgICAgICBjYy5jYWxsRnVuYygoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdyb25nTm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgTGlzdGVuZXJNYW5hZ2VyLmRpc3BhdGNoKEV2ZW50VHlwZS5TVEFSVF9USU1FKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyDojrflj5boioLngrnmlbDlrZdcclxuICAgIHByaXZhdGUgZ2V0Tm9kZU51bWJlcihub2RlOiBjYy5Ob2RlKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gTnVtYmVyKG5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJsYWJlbFwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8g5qOA5p+l5LiA6KGM5oiW5LiA5YiX5piv5ZCm5b2i5oiQQmluZ29cclxuICAgIHByaXZhdGUgY2hlY2tMaW5lKHN0YXJ0OiBudW1iZXIsIGVuZDogbnVtYmVyLCBpc1JvdzogYm9vbGVhbik6IGNjLk5vZGVbXSB7XHJcbiAgICAgICAgY29uc3Qgbm9kZXM6IGNjLk5vZGVbXSA9IFtdO1xyXG4gICAgICAgIGNvbnN0IG51bWJlcnM6IG51bWJlcltdID0gW107XHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDw9IGVuZDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG5vZGVOYW1lID0gaXNSb3cgPyBgJHtzdGFydH0ke2l9YCA6IGAke2l9JHtzdGFydH1gO1xyXG4gICAgICAgICAgICBjb25zdCBub2RlID0gdGhpcy5udW1iZXJOb2RlUGFyZW50LmdldENoaWxkQnlOYW1lKG5vZGVOYW1lKTtcclxuICAgICAgICAgICAgaWYgKCFub2RlKSBjb250aW51ZTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IG51bSA9IHRoaXMuZ2V0Tm9kZU51bWJlcihub2RlKTtcclxuICAgICAgICAgICAgaWYgKG51bSA8PSAwKSB7XHJcbiAgICAgICAgICAgICAgICBudW1iZXJzLnB1c2gobnVtKTtcclxuICAgICAgICAgICAgICAgIG5vZGVzLnB1c2gobm9kZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChub2Rlcy5sZW5ndGggPj0gdGhpcy5yb3dDb3VudCAmJiBudW1iZXJzLmluZGV4T2YoMCkgIT09IC0xKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBub2RlcztcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gLy8g5qOA5p+l5q+P5LiA6KGMXHJcbiAgICAvLyBjaGVja1JvdygpIHtcclxuICAgIC8vICAgICBjb25zdCBub2RlQXJyOiBjYy5Ob2RlW11bXSA9IFtdO1xyXG4gICAgLy8gICAgIGZvciAobGV0IHJvdyA9IDA7IHJvdyA8IHRoaXMucm93Q291bnQ7IHJvdysrKSB7XHJcbiAgICAvLyAgICAgICAgIGNvbnN0IGxpbmVOb2RlcyA9IHRoaXMuY2hlY2tMaW5lKHJvdywgdGhpcy5jb2xDb3VudCAtIDEsIHRydWUpO1xyXG4gICAgLy8gICAgICAgICBpZiAobGluZU5vZGVzKSB7XHJcbiAgICAvLyAgICAgICAgICAgICBub2RlQXJyLnB1c2gobGluZU5vZGVzKTtcclxuICAgIC8vICAgICAgICAgfVxyXG4gICAgLy8gICAgIH1cclxuICAgIC8vICAgICByZXR1cm4gbm9kZUFycjtcclxuICAgIC8vIH1cclxuXHJcbiAgICAvLyDmo4Dmn6Xmr4/kuIDliJdcclxuICAgIGNoZWNrQ29sdW1uKCkge1xyXG4gICAgICAgIGNvbnN0IG5vZGVBcnI6IGNjLk5vZGVbXVtdID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgY29sID0gMDsgY29sIDwgdGhpcy5jb2xDb3VudDsgY29sKyspIHtcclxuICAgICAgICAgICAgY29uc3QgbGluZU5vZGVzID0gdGhpcy5jaGVja0xpbmUoY29sLCB0aGlzLnJvd0NvdW50IC0gMSwgZmFsc2UpO1xyXG4gICAgICAgICAgICBpZiAobGluZU5vZGVzKSB7XHJcbiAgICAgICAgICAgICAgICBub2RlQXJyLnB1c2gobGluZU5vZGVzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbm9kZUFycjtcclxuICAgIH1cclxuXHJcbiAgICAvLyDmo4Dmn6Xlr7nop5Lnur9cclxuICAgIC8vIGNoZWNrRGlhZ29uYWwoKSB7XHJcbiAgICAvLyAgICAgY29uc3Qgbm9kZUFycjogY2MuTm9kZVtdW10gPSBbXTtcclxuICAgIC8vICAgICBjb25zdCBzaXplID0gdGhpcy5yb3dDb3VudDtcclxuXHJcbiAgICAvLyAgICAgLy8g5qOA5p+l5Li75a+56KeS57q/ICjlt6bkuIrliLDlj7PkuIspXHJcbiAgICAvLyAgICAgY29uc3QgbWFpbkRpYWdvbmFsOiBjYy5Ob2RlW10gPSBbXTtcclxuICAgIC8vICAgICBjb25zdCBtYWluRGlhZ29uYWxOdW1zOiBudW1iZXJbXSA9IFtdO1xyXG5cclxuICAgIC8vICAgICAvLyDmo4Dmn6Xlia/lr7nop5Lnur8gKOWPs+S4iuWIsOW3puS4iylcclxuICAgIC8vICAgICBjb25zdCBhbnRpRGlhZ29uYWw6IGNjLk5vZGVbXSA9IFtdO1xyXG4gICAgLy8gICAgIGNvbnN0IGFudGlEaWFnb25hbE51bXM6IG51bWJlcltdID0gW107XHJcblxyXG4gICAgLy8gICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2l6ZTsgaSsrKSB7XHJcbiAgICAvLyAgICAgICAgIC8vIOS4u+Wvueinkue6v1xyXG4gICAgLy8gICAgICAgICBjb25zdCBtYWluTm9kZSA9IHRoaXMubnVtYmVyTm9kZVBhcmVudC5nZXRDaGlsZEJ5TmFtZShgJHtpfSR7aX1gKTtcclxuICAgIC8vICAgICAgICAgY29uc3QgbWFpbk51bSA9IHRoaXMuZ2V0Tm9kZU51bWJlcihtYWluTm9kZSk7XHJcbiAgICAvLyAgICAgICAgIGlmIChtYWluTnVtIDw9IDApIHtcclxuICAgIC8vICAgICAgICAgICAgIG1haW5EaWFnb25hbE51bXMucHVzaChtYWluTnVtKTtcclxuICAgIC8vICAgICAgICAgICAgIG1haW5EaWFnb25hbC5wdXNoKG1haW5Ob2RlKTtcclxuICAgIC8vICAgICAgICAgfVxyXG5cclxuICAgIC8vICAgICAgICAgLy8g5Ymv5a+56KeS57q/XHJcbiAgICAvLyAgICAgICAgIGNvbnN0IGFudGlOb2RlID0gdGhpcy5udW1iZXJOb2RlUGFyZW50LmdldENoaWxkQnlOYW1lKGAke2l9JHtzaXplIC0gaSAtIDF9YCk7XHJcbiAgICAvLyAgICAgICAgIGNvbnN0IGFudGlOdW0gPSB0aGlzLmdldE5vZGVOdW1iZXIoYW50aU5vZGUpO1xyXG4gICAgLy8gICAgICAgICBpZiAoYW50aU51bSA8PSAwKSB7XHJcbiAgICAvLyAgICAgICAgICAgICBhbnRpRGlhZ29uYWxOdW1zLnB1c2goYW50aU51bSk7XHJcbiAgICAvLyAgICAgICAgICAgICBhbnRpRGlhZ29uYWwucHVzaChhbnRpTm9kZSk7XHJcbiAgICAvLyAgICAgICAgIH1cclxuICAgIC8vICAgICB9XHJcblxyXG4gICAgLy8gICAgIGlmIChtYWluRGlhZ29uYWwubGVuZ3RoID49IHNpemUgJiYgbWFpbkRpYWdvbmFsTnVtcy5pbmRleE9mKDApICE9PSAtMSkge1xyXG4gICAgLy8gICAgICAgICBub2RlQXJyLnB1c2gobWFpbkRpYWdvbmFsKTtcclxuICAgIC8vICAgICB9XHJcblxyXG4gICAgLy8gICAgIGlmIChhbnRpRGlhZ29uYWwubGVuZ3RoID49IHNpemUgJiYgYW50aURpYWdvbmFsTnVtcy5pbmRleE9mKDApICE9PSAtMSkge1xyXG4gICAgLy8gICAgICAgICBub2RlQXJyLnB1c2goYW50aURpYWdvbmFsKTtcclxuICAgIC8vICAgICB9XHJcblxyXG4gICAgLy8gICAgIHJldHVybiBub2RlQXJyO1xyXG4gICAgLy8gfVxyXG5cclxuICAgIGNoZWNrQmluZ28obnVtQXJyOiBudW1iZXJbXVtdKSB7XHJcbiAgICAgICAgLy8g5qOA5p+l5q+P5LiA6KGMXHJcbiAgICAgICAgLy8gbGV0IHJvd0FycjogY2MuTm9kZVtdW10gPSB0aGlzLmNoZWNrUm93KCk7XHJcblxyXG4gICAgICAgIC8vIOajgOafpeavj+S4gOWIl1xyXG4gICAgICAgIGxldCBjb2xBcnI6IGNjLk5vZGVbXVtdID0gdGhpcy5jaGVja0NvbHVtbigpO1xyXG5cclxuICAgICAgICAvLyDmo4Dmn6Xlr7nop5Lnur9cclxuICAgICAgICAvLyBsZXQgZGlhZ0FycjogY2MuTm9kZVtdW10gPSB0aGlzLmNoZWNrRGlhZ29uYWwoKTtcclxuXHJcbiAgICAgICAgbGV0IG5vZGVBcnI6IGNjLk5vZGVbXVtdID0gY29sQXJyO1xyXG5cclxuICAgICAgICBsZXQgaXNCaW5nbzogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgICAgIGlmIChub2RlQXJyLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgU291bmRNYW5hZ2VyLnBsYXlFZmZlY3QoXCJ1cGdyYWRlXCIsIGZhbHNlLCBmYWxzZSwgZmFsc2UpO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG5vZGVBcnIubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGxldCBjdXJBcnI6IGNjLk5vZGVbXSA9IG5vZGVBcnJbaV07XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGN1ckFyci5sZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBub2RlOiBjYy5Ob2RlID0gY3VyQXJyW2pdO1xyXG4gICAgICAgICAgICAgICAgICAgIG5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJsYWJlbFwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IFwiLTFcIjtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgcmlnaHQ6IGNjLk5vZGUgPSBub2RlLmdldENoaWxkQnlOYW1lKFwicmlnaHRcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGNvbDogbnVtYmVyID0gTnVtYmVyKG5vZGUubmFtZS5zcGxpdChcIlwiKVsxXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGl0ZW06IGNjLk5vZGUgPSBub2RlLmdldENoaWxkQnlOYW1lKFwiaXRlbVwiKTtcclxuICAgICAgICAgICAgICAgICAgICBVdGlscy5zZXRTcHJpdGVGcmFtZShpdGVtLCBcImZydWl0XCIgKyBjb2wpO1xyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW0uYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICBpdGVtLnNjYWxlID0gMDtcclxuICAgICAgICAgICAgICAgICAgICBpdGVtLnJ1bkFjdGlvbihcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2Muc2VxdWVuY2UoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYy5kZWxheVRpbWUoMC4xMiAqIGopLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2MuY2FsbEZ1bmMoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0LmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBzdGFyOiBjYy5Ob2RlID0gbm9kZS5nZXRDaGlsZEJ5TmFtZShcInN0YXJcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3Rhci5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXIuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXIuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikub24oY2MuQW5pbWF0aW9uLkV2ZW50VHlwZS5GSU5JU0hFRCwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGFyLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYy5zY2FsZVRvKDAuMTUsIDAuNikuZWFzaW5nKGNjLmVhc2VCYWNrT3V0KCkpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2Muc2NhbGVUbygwLjE1LCAwLjUpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2MuZGVsYXlUaW1lKDAuMTUpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2MuY2FsbEZ1bmMoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghaXNCaW5nbykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0JpbmdvID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kaXNwbGF5QmluZ28oY29sKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzcHJpdGVOYW1lOiBzdHJpbmdbXSA9IFtcImJpbmdvXCIsIFwiZG91YmxlIGJpbmdvXCIsIFwidHJpYmxlIGJpbmdvXCIsIFwibWVnYSBiaW5nb1wiXTtcclxuICAgIC8v5pi+56S6YmluZ2/liqjnlLtcclxuICAgIGRpc3BsYXlCaW5nbyhpbmRleDogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5jYW5Ub3VjaCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuYmluZ29OdW0gKz0gMTtcclxuICAgICAgICBpZiAodGhpcy5iaW5nb051bSA+PSA0KSB7XHJcbiAgICAgICAgICAgIHRoaXMuYmluZ29OdW0gPSA0O1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgc3RhcjogY2MuTm9kZSA9IHRoaXMuYmluZ29QYXJlbnQuZ2V0Q2hpbGRCeU5hbWUoXCJzdGFyXCIpO1xyXG4gICAgICAgIHRoaXMucGxheUFuKHN0YXIpO1xyXG5cclxuICAgICAgICBsZXQgYmluZ286IGNjLk5vZGUgPSB0aGlzLmJpbmdvUGFyZW50LmdldENoaWxkQnlOYW1lKFwiYmluZ29cIik7XHJcbiAgICAgICAgYmluZ28uYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICBVdGlscy5wbGF5U3BpbmUoYmluZ28sIHRoaXMuc3ByaXRlTmFtZVt0aGlzLmJpbmdvTnVtIC0gMV0sIGZhbHNlLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGJpbmdvLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLmNhblRvdWNoID0gdHJ1ZTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgbGV0IGxlYWY6IGNjLk5vZGUgPSB0aGlzLmJpbmdvUGFyZW50LmdldENoaWxkQnlOYW1lKFwibGVhZlwiKTtcclxuICAgICAgICAvLyBmb3IgKGxldCBpID0gMDsgaSA8IGxlYWYuY2hpbGRyZW5Db3VudDsgaSsrKSB7XHJcbiAgICAgICAgLy8gICAgIGxldCBjaGlsZDogY2MuTm9kZSA9IGxlYWYuY2hpbGRyZW5baV07XHJcbiAgICAgICAgLy8gICAgIGNoaWxkLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgLy8gICAgIFV0aWxzLnNldFNwcml0ZUZyYW1lKGNoaWxkLCBcImxlYWZcIiArICh0aGlzLmJpbmdvTnVtIC0gMSkpO1xyXG4gICAgICAgIC8vIH1cclxuICAgICAgICBVdGlscy5zZXRTcHJpdGVGcmFtZShsZWFmLCBcImZydWl0XCIgKyBpbmRleCk7XHJcbiAgICAgICAgbGVhZi5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIGxlYWYuc2V0U2NhbGUoMCk7XHJcbiAgICAgICAgbGVhZi5ydW5BY3Rpb24oXHJcbiAgICAgICAgICAgIGNjLnNlcXVlbmNlKFxyXG4gICAgICAgICAgICAgICAgY2Muc2NhbGVUbygwLjUsIDIpLmVhc2luZyhjYy5lYXNlQmFja091dCgpKSxcclxuICAgICAgICAgICAgICAgIGNjLmRlbGF5VGltZSgwLjUpLFxyXG4gICAgICAgICAgICAgICAgY2Muc2NhbGVUbygwLjUsIDApLmVhc2luZyhjYy5lYXNlQmFja0luKCkpLFxyXG4gICAgICAgICAgICAgICAgY2MuY2FsbEZ1bmMoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGxlYWYuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgU291bmRNYW5hZ2VyLnBsYXlFZmZlY3QoXCJiaW5nb194XCIgKyB0aGlzLmJpbmdvTnVtLCBmYWxzZSwgZmFsc2UsIGZhbHNlKTtcclxuICAgIH1cclxuXHJcbiAgICAvL+aSreaUvuWKqOeUu1xyXG4gICAgcGxheUFuKG5vZGU6IGNjLk5vZGUsIGNhbGxiYWNrOiBGdW5jdGlvbiA9IG51bGwpIHtcclxuICAgICAgICBub2RlLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgbm9kZS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KCk7XHJcbiAgICAgICAgbm9kZS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5vbihjYy5BbmltYXRpb24uRXZlbnRUeXBlLkZJTklTSEVELCAoKSA9PiB7XHJcbiAgICAgICAgICAgIG5vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGlmIChjYWxsYmFjaykge1xyXG4gICAgICAgICAgICAgICAgY2FsbGJhY2soKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxNYWluXFxNYWluTG9naWMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsK0NBQThDO0FBQzlDLDhEQUE2RDtBQUU3RCwwQ0FBeUM7QUFDekMsK0JBQTBCO0FBSXBCLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXVDLDZCQUFZO0lBQW5EO1FBQUEscUVBNk5DO1FBMU5XLFlBQU0sR0FBWSxJQUFJLENBQUM7UUFHdkIsZ0JBQVUsR0FBWSxJQUFJLENBQUM7UUFHM0IsY0FBUSxHQUFZLElBQUksQ0FBQztRQUVqQyxlQUFlO1FBQ1AsZUFBUyxHQUFXLENBQUMsQ0FBQyxDQUFDO1FBQy9CLFdBQVc7UUFDSCxZQUFNLEdBQVcsQ0FBQyxDQUFDLENBQUM7UUFDNUIsRUFBRTtRQUNNLGtCQUFZLEdBQWEsQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFFL0UsZ0JBQVUsR0FBWSxJQUFJLENBQUM7UUFFM0IsZ0JBQVUsR0FBZ0I7WUFDOUIsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUNiLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7U0FDaEIsQ0FBQztRQUVNLHFCQUFlLEdBQWMsRUFBRSxDQUFDO1FBR2hDLGVBQVMsR0FBWSxLQUFLLENBQUM7O0lBaU12QyxDQUFDO0lBL0xHLHlCQUFLLEdBQUw7UUFBQSxpQkFtRUM7UUFsRUcsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxjQUFjLENBQUMsWUFB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QVUsR0FBRyxJQUFJLENBQUM7UUFDdEQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7UUFDOUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQ3RCLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBRTFCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUNwRCxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO1NBQ3pDO1FBRUQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQzNDLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQy9CLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEdBQUcsQ0FBQyxFQUFFO1lBQ3ZDLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDbEU7UUFDRyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDcEQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUNsRTtJQUNMLENBQUM7SUFFRCw0QkFBUSxHQUFSO1FBQ0ksS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ3BELElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7U0FDMUM7UUFFRCxJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzNDLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzlCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUNwRCxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ2xFO1FBRUQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLHVCQUF1QixHQUFHLEtBQUssQ0FBQztRQUNwRSxJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMscUJBQXFCLEdBQUcsSUFBSSxDQUFDO1FBQ2pFLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO1FBQ3ZELElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO1FBQ3ZELElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRSxFQUFFO1lBQ2pCLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDO1lBQy9DLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDM0MsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDakM7YUFBTTtZQUNILElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDO1lBQy9DLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDM0MsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDOUIsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsR0FBRyxDQUFDLEVBQUU7Z0JBQzNDLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDbEU7U0FDSTtRQUVELElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxHQUFHLENBQUMsRUFBRSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBRzVCLENBQUM7SUFFRCxNQUFNO0lBQ0UsNEJBQVEsR0FBaEI7UUFDSSxJQUFNLEVBQUUsR0FBRyxTQUFTLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBRTdDLHlCQUF5QjtRQUN6QixJQUFNLGVBQWUsR0FBRyxTQUFTLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNqRSxJQUFNLE1BQU0sR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLFlBQVksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7UUFFeEQsa0NBQWtDO1FBQ2xDLElBQU0sWUFBWSxHQUFHLGNBQU0sT0FBQSxDQUN2QixXQUFXLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLFNBQVMsQ0FBQyxjQUFjLElBQUksU0FBUyxDQUFDLGNBQWMsR0FBRyxDQUFDLENBQ25GLEVBRjBCLENBRTFCLENBQUM7UUFFRixTQUFTO1FBQ1QsT0FBTyxlQUFlLElBQUksTUFBTSxJQUFJLFlBQVksRUFBRSxDQUFDO0lBQ3ZELENBQUM7SUF6TkQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs2Q0FDYTtJQUcvQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO2lEQUNpQjtJQUduQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOytDQUNlO0lBVGhCLFNBQVM7UUFEN0IsT0FBTztPQUNhLFNBQVMsQ0E2TjdCO0lBQUQsZ0JBQUM7Q0E3TkQsQUE2TkMsQ0E3TnNDLEVBQUUsQ0FBQyxTQUFTLEdBNk5sRDtrQkE3Tm9CLFNBQVMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFdmVudFR5cGUgfSBmcm9tIFwiLi4vRGF0YS9FdmVudFR5cGVcIjtcclxuaW1wb3J0IHsgTGlzdGVuZXJNYW5hZ2VyIH0gZnJvbSBcIi4uL01hbmFnZXIvTGlzdGVuZXJNYW5hZ2VyXCI7XHJcbmltcG9ydCB7IFNvdW5kTWFuYWdlciB9IGZyb20gXCIuLi9NYW5hZ2VyL1NvdW5kTWFuYWdlclwiO1xyXG5pbXBvcnQgeyBVdGlscyB9IGZyb20gXCIuLi9NYW5hZ2VyL1V0aWxzXCI7XHJcbmltcG9ydCBCYWxsIGZyb20gXCIuL0JhbGxcIjtcclxuaW1wb3J0IENhcmRDdHJsIGZyb20gXCIuL0NhcmRDdHJsXCI7XHJcbmltcG9ydCBTZXRMZXZlbCBmcm9tIFwiLi9TZXRMZXZlbFwiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1haW5Mb2dpYyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBwcml2YXRlIGJhbGxVaTogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBwcml2YXRlIGNhcmRQYXJlbnQ6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgcHJpdmF0ZSBtYXNrTm9kZTogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgLy/lvZPliY3mmL7npLrlsI/nkIPlnKjniLbnuqfkuK3nmoTntKLlvJVcclxuICAgIHByaXZhdGUgYmFsbEluZGV4OiBudW1iZXIgPSAtMTtcclxuICAgIC8v5b2T5YmN6ZyA6KaB54K55Ye755qE5pWw5a2XXHJcbiAgICBwcml2YXRlIGN1ck51bTogbnVtYmVyID0gLTE7XHJcbiAgICAvL1xyXG4gICAgcHJpdmF0ZSBhdWRpb05hbWVBcnI6IHN0cmluZ1tdID0gW1wiRzhcIiwgXCJPNjJcIiwgXCJOMzVcIiwgXCJCM1wiLCBcIkc1OVwiLCBcIkI1XCIsIFwiTzY2XCIsIFwiTzcyXCJdO1xyXG5cclxuICAgIHByaXZhdGUgYmFsbFBhcmVudDogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgcHJpdmF0ZSBjYXJkUG9zQXJyOiBjYy5WZWMyW11bXSA9IFtcclxuICAgICAgICBbY2MudjIoMCwgMCldLCAvLyDnq5blsY/ml7blsYXkuK1cclxuICAgICAgICBbY2MudjIoMCwgMCldLCAvLyDmqKrlsY/ml7blsYXkuK1cclxuICAgIF07XHJcblxyXG4gICAgcHJpdmF0ZSBuZWVkX3RvdWNoX2NhcmQ6IGNjLk5vZGVbXSA9IFtdO1xyXG5cclxuXHJcbiAgICBwcml2YXRlIGlzVGltZU91dDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIHN0YXJ0KCkge1xyXG4gICAgICAgIHRoaXMuYmFsbFBhcmVudCA9IHRoaXMuYmFsbFVpLmdldENoaWxkQnlOYW1lKFwibWFza1wiKS5nZXRDaGlsZEJ5TmFtZShcImJhbGxQYXJlbnRcIik7XHJcblxyXG4gICAgICAgIHRoaXMuYmFsbFVpLmdldENvbXBvbmVudChCYWxsKS5jcmVhdGVCYWxsKHRoaXMuYXVkaW9OYW1lQXJyKTtcclxuXHJcbiAgICAgICAgdGhpcy5jaGFuZ2VEZXNpZ25SZXNvbHV0aW9uKCk7XHJcblxyXG4gICAgICAgIExpc3RlbmVyTWFuYWdlci5vbihFdmVudFR5cGUuU0NSRUVOX1YsICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5jaGFuZ2VEZXNpZ25SZXNvbHV0aW9uKCk7XHJcbiAgICAgICAgfSwgdGhpcyk7XHJcblxyXG4gICAgICAgIExpc3RlbmVyTWFuYWdlci5vbihFdmVudFR5cGUuU0NSRUVOX0gsICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5jaGFuZ2VEZXNpZ25SZXNvbHV0aW9uKCk7XHJcbiAgICAgICAgfSwgdGhpcyk7XHJcblxyXG4gICAgICAgIExpc3RlbmVyTWFuYWdlci5vbihFdmVudFR5cGUuTkVFRF9UT1VDSF9DQVJELCAobm9kZTogY2MuTm9kZSkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLm5lZWRfdG91Y2hfY2FyZC5wdXNoKG5vZGUpO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5tYXNrTm9kZS5pc1ZhbGlkKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMubWFza05vZGUuYWN0aXZlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tYXNrTm9kZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubWFza05vZGUuc2V0UG9zaXRpb24oVXRpbHMuZ2V0Tm9kZVBvcyh0aGlzLm5lZWRfdG91Y2hfY2FyZFswXSwgdGhpcy5tYXNrTm9kZS5wYXJlbnQpKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm1hc2tOb2RlLm9wYWNpdHkgPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubWFza05vZGUucnVuQWN0aW9uKGNjLmZhZGVJbigwLjMpKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHRpcDogY2MuTm9kZSA9IHRoaXMubm9kZS5wYXJlbnQuZ2V0Q2hpbGRCeU5hbWUoXCJ0aXBcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgdGlwLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgdGlwLm9wYWNpdHkgPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgIHRpcC5ydW5BY3Rpb24oY2MuZmFkZUluKDAuMykpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSwgdGhpcyk7XHJcblxyXG4gICAgICAgIExpc3RlbmVyTWFuYWdlci5vbihFdmVudFR5cGUuVE9VQ0hfQ0FSRCwgKG5vZGU6IGNjLk5vZGUpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5uZWVkX3RvdWNoX2NhcmQuc3BsaWNlKHRoaXMubmVlZF90b3VjaF9jYXJkLmluZGV4T2Yobm9kZSksIDEpO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5uZWVkX3RvdWNoX2NhcmQubGVuZ3RoID09IDApIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmJhbGxJbmRleCA+PSAyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgTGlzdGVuZXJNYW5hZ2VyLmRpc3BhdGNoKEV2ZW50VHlwZS5HQU1FX09WRVIpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm1vdmVCYWxsUGFyZW50KCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHRoaXMubWFza05vZGUuaXNWYWxpZCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tYXNrTm9kZS5ydW5BY3Rpb24oXHJcbiAgICAgICAgICAgICAgICAgICAgY2Muc2VxdWVuY2UoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNjLmZhZGVPdXQoMC4zKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2MuY2FsbEZ1bmMoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tYXNrTm9kZS5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgdGlwOiBjYy5Ob2RlID0gdGhpcy5ub2RlLnBhcmVudC5nZXRDaGlsZEJ5TmFtZShcInRpcFwiKTtcclxuICAgICAgICAgICAgICAgIHRpcC5ydW5BY3Rpb24oY2MuZmFkZU91dCgwLjMpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sIHRoaXMpO1xyXG5cclxuICAgICAgICBMaXN0ZW5lck1hbmFnZXIub24oRXZlbnRUeXBlLlNUQVJUX1RJTUUsICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy51bnNjaGVkdWxlQWxsQ2FsbGJhY2tzKCk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICAgICAgLy8gXHJcbiAgICAgICAgICAgICAgICBMaXN0ZW5lck1hbmFnZXIuZGlzcGF0Y2goRXZlbnRUeXBlLkdBTUVfT1ZFUik7XHJcbiAgICAgICAgICAgIH0sIDEwMCk7XHJcbiAgICAgICAgfSwgdGhpcyk7XHJcblxyXG4gICAgICAgIHRoaXMuaW5pdCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGluaXQoKSB7XHJcbiAgICAgICAgLy8gZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmNhcmRQYXJlbnQuY2hpbGRyZW5Db3VudDsgaSsrKSB7XHJcbiAgICAgICAgLy8gICAgIGxldCBjYXJkOiBjYy5Ob2RlID0gdGhpcy5jYXJkUGFyZW50LmNoaWxkcmVuW2ldO1xyXG4gICAgICAgIC8vICAgICBVdGlscy5mbGlwWShjYXJkLCAxKTtcclxuICAgICAgICAvLyB9XHJcblxyXG4gICAgICAgIHRoaXMubW92ZUJhbGxQYXJlbnQoKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgLy/mmL7npLrkuIvkuKrmlbDlrZflsI/nkINcclxuICAgIG1vdmVCYWxsUGFyZW50KCkge1xyXG4gICAgICAgIHRoaXMuYmFsbEluZGV4ICs9IDE7XHJcbiAgICAgICAgdGhpcy5jdXJOdW0gPSB0aGlzLmJhbGxVaS5nZXRDb21wb25lbnQoQmFsbCkubW92ZUJhbGxQYXJlbnQoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBMaXN0ZW5lck1hbmFnZXIuZGlzcGF0Y2goRXZlbnRUeXBlLkRJU1BMQVlfSEFORCwgdGhpcy5jdXJOdW0pO1xyXG4gICAgICAgICAgICB9LCAwLjUpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8v5pKt5pS+5Yqo55S7XHJcbiAgICBwbGF5QW4obm9kZTogY2MuTm9kZSwgY2FsbGJhY2s6IEZ1bmN0aW9uID0gbnVsbCkge1xyXG4gICAgICAgIG5vZGUuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICBub2RlLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoKTtcclxuICAgICAgICBub2RlLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLm9uKGNjLkFuaW1hdGlvbi5FdmVudFR5cGUuRklOSVNIRUQsICgpID0+IHtcclxuICAgICAgICAgICAgbm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgaWYgKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgICAgICBjYWxsYmFjaygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDlsY/luZXpgILphY1cclxuICAgICAqIEByZXR1cm5zIFxyXG4gICAgICovXHJcbiAgICBjaGFuZ2VEZXNpZ25SZXNvbHV0aW9uKCkge1xyXG4gICAgICAgIC8v5pyq5qOA5rWL5Yiw5bC65a+45Y+Y5YyW5YiZ6Lez5Ye65Ye95pWwXHJcbiAgICAgICAgLy/ojrflj5blvZPliY3lsY/luZXlrr3pq5hcclxuICAgICAgICBsZXQgZnJhbWVXaWR0aCA9IGNjLnZpZXcuZ2V0RnJhbWVTaXplKCkud2lkdGg7XHJcbiAgICAgICAgbGV0IGZyYW1lSGVpZ2h0ID0gY2Mudmlldy5nZXRGcmFtZVNpemUoKS5oZWlnaHQ7XHJcbiAgICAgICAgaWYgKGZyYW1lSGVpZ2h0ID49IGZyYW1lV2lkdGgpIHtcclxuICAgICAgICAgICAgdGhpcy5TQ1JFRU5fVigpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuU0NSRUVOX0goKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgU0NSRUVOX1YoKSB7XHJcbiAgICAgICAgLy8gdGhpcy5iYWxsVWkuc2V0UG9zaXRpb24oY2MudjIoMCwgMzYwKSk7XHJcbiAgICAgICAgdGhpcy5iYWxsVWkuZ2V0Q29tcG9uZW50KGNjLldpZGdldCkuaXNBbGlnblZlcnRpY2FsQ2VudGVyID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5iYWxsVWkuZ2V0Q29tcG9uZW50KGNjLldpZGdldCkuaXNBbGlnbkhvcml6b250YWxDZW50ZXIgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuYmFsbFVpLmdldENvbXBvbmVudChjYy5XaWRnZXQpLmlzQWxpZ25MZWZ0ID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5iYWxsVWkuZ2V0Q29tcG9uZW50KGNjLldpZGdldCkuaXNBbGlnblRvcCA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5iYWxsVWkuZ2V0Q29tcG9uZW50KGNjLldpZGdldCkudG9wID0gMTAwO1xyXG4gICAgICAgIHRoaXMuYmFsbFVpLmFuZ2xlID0gMDtcclxuICAgICAgICB0aGlzLmJhbGxVaS5zZXRTY2FsZSgxLjIpO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuYmFsbFBhcmVudC5jaGlsZHJlbkNvdW50OyBpKyspIHtcclxuICAgICAgICAgICAgdGhpcy5iYWxsUGFyZW50LmNoaWxkcmVuW2ldLmFuZ2xlID0gMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuY2FyZFBhcmVudC5zZXRQb3NpdGlvbihjYy52MigwLCAtODApKTtcclxuICAgICAgICB0aGlzLmNhcmRQYXJlbnQuc2V0U2NhbGUoMC40NSk7XHJcbiAgICAgICAgaWYgKHRoaXMuY2FyZFBhcmVudC5jaGlsZHJlbkNvdW50ID4gMCkge1xyXG4gICAgICAgIHRoaXMuY2FyZFBhcmVudC5jaGlsZHJlblswXS5zZXRQb3NpdGlvbih0aGlzLmNhcmRQb3NBcnJbMF1bMF0pO1xyXG4gICAgfVxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5jYXJkUGFyZW50LmNoaWxkcmVuQ291bnQ7IGkrKykge1xyXG4gICAgICAgICAgICB0aGlzLmNhcmRQYXJlbnQuY2hpbGRyZW5baV0uc2V0UG9zaXRpb24odGhpcy5jYXJkUG9zQXJyWzBdW2ldKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgU0NSRUVOX0goKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmJhbGxQYXJlbnQuY2hpbGRyZW5Db3VudDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYmFsbFBhcmVudC5jaGlsZHJlbltpXS5hbmdsZSA9IDkwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5jYXJkUGFyZW50LnNldFBvc2l0aW9uKGNjLnYyKDEwMCwgMCkpO1xyXG4gICAgICAgIHRoaXMuY2FyZFBhcmVudC5zZXRTY2FsZSgwLjcpO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5jYXJkUGFyZW50LmNoaWxkcmVuQ291bnQ7IGkrKykge1xyXG4gICAgICAgICAgICB0aGlzLmNhcmRQYXJlbnQuY2hpbGRyZW5baV0uc2V0UG9zaXRpb24odGhpcy5jYXJkUG9zQXJyWzFdW2ldKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuYmFsbFVpLmdldENvbXBvbmVudChjYy5XaWRnZXQpLmlzQWxpZ25Ib3Jpem9udGFsQ2VudGVyID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5iYWxsVWkuZ2V0Q29tcG9uZW50KGNjLldpZGdldCkuaXNBbGlnblZlcnRpY2FsQ2VudGVyID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmJhbGxVaS5nZXRDb21wb25lbnQoY2MuV2lkZ2V0KS5pc0FsaWduVG9wID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5iYWxsVWkuZ2V0Q29tcG9uZW50KGNjLldpZGdldCkuaXNBbGlnbkxlZnQgPSB0cnVlO1xyXG4gICAgICAgIGlmICh0aGlzLmlzVGFibGV0KCkpIHtcclxuICAgICAgICAgICAgdGhpcy5iYWxsVWkuZ2V0Q29tcG9uZW50KGNjLldpZGdldCkubGVmdCA9IDE1MDtcclxuICAgICAgICAgICAgdGhpcy5jYXJkUGFyZW50LnNldFBvc2l0aW9uKGNjLnYyKDE1MCwgMCkpO1xyXG4gICAgICAgICAgICB0aGlzLmNhcmRQYXJlbnQuc2V0U2NhbGUoMC42KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmJhbGxVaS5nZXRDb21wb25lbnQoY2MuV2lkZ2V0KS5sZWZ0ID0gMjUwO1xyXG4gICAgICAgICAgICB0aGlzLmNhcmRQYXJlbnQuc2V0UG9zaXRpb24oY2MudjIoMTAwLCAwKSk7XHJcbiAgICAgICAgICAgIHRoaXMuY2FyZFBhcmVudC5zZXRTY2FsZSgwLjcpO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5jYXJkUGFyZW50LmNoaWxkcmVuQ291bnQgPiAwKSB7XHJcbiAgICAgICAgdGhpcy5jYXJkUGFyZW50LmNoaWxkcmVuWzBdLnNldFBvc2l0aW9uKHRoaXMuY2FyZFBvc0FyclsxXVswXSk7XHJcbiAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmJhbGxVaS5hbmdsZSA9IC05MDtcclxuICAgICAgICB0aGlzLmJhbGxVaS5zZXRTY2FsZSgyKTtcclxuXHJcblxyXG4gICAgfVxyXG5cclxuICAgIC8v5qOA5rWL5bmz5p2/XHJcbiAgICBwcml2YXRlIGlzVGFibGV0KCkge1xyXG4gICAgICAgIGNvbnN0IHVhID0gbmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpO1xyXG5cclxuICAgICAgICAvLyDmo4Dmn6XnlKjmiLfku6PnkIblrZfnrKbkuLLkuK3mmK/lkKblrZjlnKjluLjop4HlubPmnb/orr7lpIfmoIfor4ZcclxuICAgICAgICBjb25zdCBpc0FuZHJvaWRUYWJsZXQgPSAvYW5kcm9pZC8udGVzdCh1YSkgJiYgIS9tb2JpbGUvLnRlc3QodWEpO1xyXG4gICAgICAgIGNvbnN0IGlzSVBhZCA9IC9pcGFkLy50ZXN0KHVhKSB8fCAvbWFjaW50b3NoL2kudGVzdCh1YSk7XHJcblxyXG4gICAgICAgIC8vIGlQYWRPUyAxMyDlj4rmm7Tpq5jniYjmnKzor4bliKvvvJrlroPku6zlj6/og73mmL7npLrkuLrmoYzpnaLnuqfmtY/op4jlmahcclxuICAgICAgICBjb25zdCBpc0lwYWRPUzEzVXAgPSAoKSA9PiAoXHJcbiAgICAgICAgICAgIC9tYWNpbnRvc2gvLnRlc3QodWEpICYmIG5hdmlnYXRvci5tYXhUb3VjaFBvaW50cyAmJiBuYXZpZ2F0b3IubWF4VG91Y2hQb2ludHMgPiAxXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgLy8g57uT5ZCI5p2h5Lu25Yik5patXHJcbiAgICAgICAgcmV0dXJuIGlzQW5kcm9pZFRhYmxldCB8fCBpc0lQYWQgfHwgaXNJcGFkT1MxM1VwKCk7XHJcbiAgICB9XHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxNYWluXFxNYWluR2FtZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSwrQ0FBOEM7QUFDOUMsc0RBQXFEO0FBQ3JELDhEQUE2RDtBQUM3RCx3REFBdUQ7QUFDdkQsMENBQXlDO0FBQ3pDLDZEQUF3RDtBQUVsRCxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFzQyw0QkFBWTtJQUFsRDtRQUFBLHFFQXVIQztRQXRIRyxZQUFZO1FBQ0osZ0JBQVUsR0FBWSxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUM1QyxNQUFNO1FBRUUsU0FBRyxHQUFZLElBQUksQ0FBQztRQUM1QixNQUFNO1FBRUUsZ0JBQVUsR0FBWSxJQUFJLENBQUM7UUFFM0IsY0FBUSxHQUFZLElBQUksQ0FBQzs7SUE2R3JDLENBQUM7SUExR2EseUJBQU0sR0FBaEI7UUFDSSxJQUFJLHlCQUFXLENBQUMsY0FBYyxFQUFFO1lBQzVCLHlCQUFXLENBQUMsV0FBVyxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7U0FDN0Q7UUFDRCxhQUFLLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsT0FBTyxHQUFHLHlCQUFXLENBQUMsV0FBVyxDQUFDLENBQUM7UUFFdkUsNkJBQW1CLENBQUMsbUJBQW1CLENBQUMsa0ZBQWtGLENBQUMsQ0FBQztRQUM1SCw2QkFBbUIsQ0FBQyxpQkFBaUIsQ0FBQywwRUFBMEUsQ0FBQyxDQUFDO1FBRWxILElBQUksTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLFNBQVMsRUFBRTtZQUMvQixJQUFJLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxJQUFJLEVBQUU7Z0JBQzFCLE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUM7Z0JBQ3pCLHlCQUFXLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztnQkFDMUIsMkJBQVksQ0FBQyxPQUFPLEVBQUUsQ0FBQztnQkFDdkIsaUNBQWUsQ0FBQyxRQUFRLENBQUMscUJBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQzthQUNqRDtpQkFDSTtnQkFDRCxPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDO2dCQUN6Qix5QkFBVyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUMsQ0FBSSxhQUFhO2dCQUM1QyxpQ0FBZSxDQUFDLFFBQVEsQ0FBQyxxQkFBUyxDQUFDLFVBQVUsQ0FBQyxDQUFDO2dCQUMvQyxJQUFJLHlCQUFXLENBQUMsWUFBWSxFQUFFO29CQUMxQiwyQkFBWSxDQUFDLFVBQVUsQ0FBQyxLQUFLLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQztpQkFDdEQ7YUFDSjtTQUNKO0lBQ0wsQ0FBQztJQUVELHdCQUFLLEdBQUw7UUFBQSxpQkE2QkM7UUE1QkcsSUFBSSxDQUFDLHNCQUFzQixFQUFFLENBQUM7UUFDOUIsRUFBRSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQztZQUN0QixLQUFJLENBQUMsc0JBQXNCLEVBQUUsQ0FBQztRQUNsQyxDQUFDLENBQUMsQ0FBQztRQUdILE1BQU07UUFDTixpQ0FBZSxDQUFDLEVBQUUsQ0FBQyxxQkFBUyxDQUFDLFNBQVMsRUFBRTtZQUNwQyxLQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFDM0IsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBRVQsaUNBQWUsQ0FBQyxFQUFFLENBQUMscUJBQVMsQ0FBQyxTQUFTLEVBQUU7UUFFeEMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBRVQsSUFBSTtRQUNKLGlDQUFlLENBQUMsRUFBRSxDQUFDLHFCQUFTLENBQUMsaUJBQWlCLEVBQUU7WUFDNUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNsQiw2QkFBbUIsQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUMvQixpQkFBaUI7UUFFckIsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBRVQsNERBQTREO1FBQzVELDZEQUE2RDtRQUM3RCxNQUFNO1FBRU4sSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDcEUsQ0FBQztJQUVELFFBQVE7SUFDUiwwQkFBTyxHQUFQO1FBQ0kseUJBQVcsQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO1FBQ2hDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ2pFLDJCQUFZLENBQUMsVUFBVSxDQUFDLEtBQUssRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ3ZELENBQUM7SUFFRDs7O01BR0U7SUFDRix5Q0FBc0IsR0FBdEI7UUFDSSxJQUFJLElBQUksR0FBWSxFQUFFLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQzNDLGVBQWU7UUFDZixJQUFJLElBQUksQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sRUFBRTtZQUM5RSxPQUFPO1NBQ1Y7UUFDRCxVQUFVO1FBQ1YsSUFBSSxVQUFVLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQyxLQUFLLENBQUM7UUFDOUMsSUFBSSxXQUFXLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQyxNQUFNLENBQUM7UUFDaEQsSUFBSSxXQUFXLElBQUksVUFBVSxFQUFFO1lBQzNCLEVBQUUsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7WUFDckMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztZQUNuQyxJQUFJLFVBQVUsSUFBSSxHQUFHLElBQUksV0FBVyxJQUFJLEdBQUcsRUFBRTtnQkFDekMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztnQkFDcEMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQzthQUN2QztpQkFBTTtnQkFDSCxFQUFFLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO2dCQUNyQyxFQUFFLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO2FBQ3RDO1lBQ0QsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO1lBQ3BCLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM1Qyx5QkFBVyxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUM7WUFDM0IsaUNBQWUsQ0FBQyxRQUFRLENBQUMscUJBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUNoRDthQUFNO1lBQ0gsRUFBRSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztZQUNwQyxFQUFFLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1lBQ3BDLElBQUksVUFBVSxJQUFJLElBQUksRUFBRTtnQkFDcEIsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO2FBQ3ZCO2lCQUFNO2dCQUNILElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQzthQUN6QjtZQUNELElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUU1Qyx5QkFBVyxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUM7WUFDM0IsaUNBQWUsQ0FBQyxRQUFRLENBQUMscUJBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUNoRDtJQUNMLENBQUM7SUFqSEQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzt5Q0FDVTtJQUc1QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO2dEQUNpQjtJQUVuQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzhDQUNlO0lBVmhCLFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0F1SDVCO0lBQUQsZUFBQztDQXZIRCxBQXVIQyxDQXZIcUMsRUFBRSxDQUFDLFNBQVMsR0F1SGpEO2tCQXZIb0IsUUFBUTtBQXlIN0IsTUFBTSxDQUFDLFFBQVEsR0FBRztJQUNkLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDcEIseUJBQVcsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO0lBQzFCLDJCQUFZLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxlQUFlO0lBQ3ZDLHNCQUFzQjtJQUN0QixpQ0FBZSxDQUFDLFFBQVEsQ0FBQyxxQkFBUyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0FBQ2xELENBQUMsQ0FBQTtBQUVELE1BQU0sQ0FBQyxTQUFTLEdBQUc7SUFDZixPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3BCLHlCQUFXLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQyxDQUFJLGFBQWE7SUFDNUMsaUNBQWUsQ0FBQyxRQUFRLENBQUMscUJBQVMsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUMvQyxJQUFJLHlCQUFXLENBQUMsWUFBWSxFQUFFO1FBQzFCLDJCQUFZLENBQUMsVUFBVSxDQUFDLEtBQUssRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDO0tBQ3REO0FBQ0wsQ0FBQyxDQUFBIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCB7IEV2ZW50VHlwZSB9IGZyb20gXCIuLi9EYXRhL0V2ZW50VHlwZVwiO1xyXG5pbXBvcnQgeyBHYW1lTWFuYWdlciB9IGZyb20gXCIuLi9NYW5hZ2VyL0dhbWVNYW5hZ2VyXCI7XHJcbmltcG9ydCB7IExpc3RlbmVyTWFuYWdlciB9IGZyb20gXCIuLi9NYW5hZ2VyL0xpc3RlbmVyTWFuYWdlclwiO1xyXG5pbXBvcnQgeyBTb3VuZE1hbmFnZXIgfSBmcm9tIFwiLi4vTWFuYWdlci9Tb3VuZE1hbmFnZXJcIjtcclxuaW1wb3J0IHsgVXRpbHMgfSBmcm9tIFwiLi4vTWFuYWdlci9VdGlsc1wiO1xyXG5pbXBvcnQgc3VwZXJfaHRtbF9wbGF5YWJsZSBmcm9tIFwiLi9zdXBlcl9odG1sX3BsYXlhYmxlXCI7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWFpbkdhbWUgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gICAgLyoq6K6w5b2V5bGP5bmV5bC65a+4ICovXHJcbiAgICBwcml2YXRlIGNsaWVudFNpemU6IGNjLlNpemUgPSBjYy5zaXplKDAsIDApO1xyXG4gICAgLy/nu5PmnZ/nlYzpnaJcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgcHJpdmF0ZSBlbmQ6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgLy/kuIvovb3mjInpkq5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgcHJpdmF0ZSBkb3dsYW5kQnRuOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgcHJpdmF0ZSBsb2dvTm9kZTogY2MuTm9kZSA9IG51bGw7XHJcblxyXG5cclxuICAgIHByb3RlY3RlZCBvbkxvYWQoKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKEdhbWVNYW5hZ2VyLmlzTXVsdGlsaW5ndWFsKSB7XHJcbiAgICAgICAgICAgIEdhbWVNYW5hZ2VyLmN1ckxhbmd1YWdlID0gY2Muc3lzLmxhbmd1YWdlQ29kZS5zbGljZSgwLCAyKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgVXRpbHMuc2V0U3ByaXRlRnJhbWUodGhpcy5sb2dvTm9kZSwgXCJsb2dvLVwiICsgR2FtZU1hbmFnZXIuY3VyTGFuZ3VhZ2UpO1xyXG5cclxuICAgICAgICBzdXBlcl9odG1sX3BsYXlhYmxlLnNldF9nb29nbGVfcGxheV91cmwoXCJodHRwczovL3BsYXkuZ29vZ2xlLmNvbS9zdG9yZS9hcHBzL2RldGFpbHM/aWQ9Y29tLmdtMTEuYmluZ29jcmF6ZSZobD11c19lbiZnbD11c1wiKTtcclxuICAgICAgICBzdXBlcl9odG1sX3BsYXlhYmxlLnNldF9hcHBfc3RvcmVfdXJsKFwiaHR0cHM6Ly9hcHBzLmFwcGxlLmNvbS91cy9hcHAvYmluZ28tYWxvaGEtdmVnYXMtYmluZ28tZ2FtZXMvaWQxNTYyMjY1MTkzXCIpO1xyXG5cclxuICAgICAgICBpZiAod2luZG93W1wiaXNNdXRlXCJdICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBpZiAod2luZG93W1wiaXNNdXRlXCJdID09IHRydWUpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi5ZCv5Yqo5byA5aeL5bCx5byA5ZCv6Z2Z6Z+zXCIpO1xyXG4gICAgICAgICAgICAgICAgR2FtZU1hbmFnZXIuaXNNdXRlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIFNvdW5kTWFuYWdlci5zdG9wQWxsKCk7XHJcbiAgICAgICAgICAgICAgICBMaXN0ZW5lck1hbmFnZXIuZGlzcGF0Y2goRXZlbnRUeXBlLk1VVEVfT1BFTik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIuWQr+WKqOW8gOWni+WwseWFs+mXremdmemfs1wiKTtcclxuICAgICAgICAgICAgICAgIEdhbWVNYW5hZ2VyLmlzTXV0ZSA9IGZhbHNlOyAgICAvL+e7mea4uOaIj+WFqOWxgOmfs+mikeino+mZpOmdmemfs1xyXG4gICAgICAgICAgICAgICAgTGlzdGVuZXJNYW5hZ2VyLmRpc3BhdGNoKEV2ZW50VHlwZS5NVVRFX0NMT1NFKTtcclxuICAgICAgICAgICAgICAgIGlmIChHYW1lTWFuYWdlci5jYW5QbGF5QXVkaW8pIHtcclxuICAgICAgICAgICAgICAgICAgICBTb3VuZE1hbmFnZXIucGxheUVmZmVjdChcImJnbVwiLCB0cnVlLCBmYWxzZSwgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0KCkge1xyXG4gICAgICAgIHRoaXMuY2hhbmdlRGVzaWduUmVzb2x1dGlvbigpO1xyXG4gICAgICAgIGNjLnZpZXcuc2V0UmVzaXplQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmNoYW5nZURlc2lnblJlc29sdXRpb24oKTtcclxuICAgICAgICB9KTtcclxuXHJcblxyXG4gICAgICAgIC8v5ri45oiP57uT5p2fXHJcbiAgICAgICAgTGlzdGVuZXJNYW5hZ2VyLm9uKEV2ZW50VHlwZS5HQU1FX09WRVIsICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5lbmQuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICB9LCB0aGlzKTtcclxuXHJcbiAgICAgICAgTGlzdGVuZXJNYW5hZ2VyLm9uKEV2ZW50VHlwZS5HQU1FX0ZBSUwsICgpID0+IHtcclxuXHJcbiAgICAgICAgfSwgdGhpcyk7XHJcblxyXG4gICAgICAgIC8v5LiL6L29XHJcbiAgICAgICAgTGlzdGVuZXJNYW5hZ2VyLm9uKEV2ZW50VHlwZS5DTElDS19ET1dMQU5EX0JUTiwgKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIuS4i+i9vVwiKTtcclxuICAgICAgICAgICAgc3VwZXJfaHRtbF9wbGF5YWJsZS5kb3dubG9hZCgpO1xyXG4gICAgICAgICAgICAvLyB3aW5kb3cub3BlbigpO1xyXG5cclxuICAgICAgICB9LCB0aGlzKTtcclxuXHJcbiAgICAgICAgLy8gdGhpcy5kb3dsYW5kQnRuLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCAoKSA9PiB7XHJcbiAgICAgICAgLy8gICAgIExpc3RlbmVyTWFuYWdlci5kaXNwYXRjaChFdmVudFR5cGUuQ0xJQ0tfRE9XTEFORF9CVE4pO1xyXG4gICAgICAgIC8vIH0pO1xyXG5cclxuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsIHRoaXMucGxheUJnbSwgdGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgLy/mkq3mlL7og4zmma/pn7PkuZBcclxuICAgIHBsYXlCZ20oKSB7XHJcbiAgICAgICAgR2FtZU1hbmFnZXIuY2FuUGxheUF1ZGlvID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLm5vZGUub2ZmKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCB0aGlzLnBsYXlCZ20sIHRoaXMpO1xyXG4gICAgICAgIFNvdW5kTWFuYWdlci5wbGF5RWZmZWN0KFwiYmdtXCIsIHRydWUsIGZhbHNlLCBmYWxzZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAqIOWxj+W5lemAgumFjVxyXG4gICAgKiBAcmV0dXJucyBcclxuICAgICovXHJcbiAgICBjaGFuZ2VEZXNpZ25SZXNvbHV0aW9uKCkge1xyXG4gICAgICAgIGxldCBzaXplOiBjYy5TaXplID0gY2Mudmlldy5nZXRGcmFtZVNpemUoKTtcclxuICAgICAgICAvL+acquajgOa1i+WIsOWwuuWvuOWPmOWMluWImei3s+WHuuWHveaVsFxyXG4gICAgICAgIGlmIChzaXplLndpZHRoID09IHRoaXMuY2xpZW50U2l6ZS53aWR0aCAmJiBzaXplLmhlaWdodCA9PSB0aGlzLmNsaWVudFNpemUuaGVpZ2h0KSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy/ojrflj5blvZPliY3lsY/luZXlrr3pq5hcclxuICAgICAgICBsZXQgZnJhbWVXaWR0aCA9IGNjLnZpZXcuZ2V0RnJhbWVTaXplKCkud2lkdGg7XHJcbiAgICAgICAgbGV0IGZyYW1lSGVpZ2h0ID0gY2Mudmlldy5nZXRGcmFtZVNpemUoKS5oZWlnaHQ7XHJcbiAgICAgICAgaWYgKGZyYW1lSGVpZ2h0ID49IGZyYW1lV2lkdGgpIHtcclxuICAgICAgICAgICAgY2MuQ2FudmFzLmluc3RhbmNlLmZpdEhlaWdodCA9IGZhbHNlO1xyXG4gICAgICAgICAgICBjYy5DYW52YXMuaW5zdGFuY2UuZml0V2lkdGggPSB0cnVlO1xyXG4gICAgICAgICAgICBpZiAoZnJhbWVXaWR0aCA+PSA1NDAgfHwgZnJhbWVIZWlnaHQgPD0gNDgwKSB7XHJcbiAgICAgICAgICAgICAgICBjYy5DYW52YXMuaW5zdGFuY2UuZml0SGVpZ2h0ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGNjLkNhbnZhcy5pbnN0YW5jZS5maXRXaWR0aCA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY2MuQ2FudmFzLmluc3RhbmNlLmZpdEhlaWdodCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgY2MuQ2FudmFzLmluc3RhbmNlLmZpdFdpZHRoID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLm5vZGUuc2NhbGUgPSAxO1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJ0aXBcIikuc2V0U2NhbGUoMSk7XHJcbiAgICAgICAgICAgIEdhbWVNYW5hZ2VyLnNjcmVlbk1vZGUgPSAwO1xyXG4gICAgICAgICAgICBMaXN0ZW5lck1hbmFnZXIuZGlzcGF0Y2goRXZlbnRUeXBlLlNDUkVFTl9WKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjYy5DYW52YXMuaW5zdGFuY2UuZml0V2lkdGggPSBmYWxzZTtcclxuICAgICAgICAgICAgY2MuQ2FudmFzLmluc3RhbmNlLmZpdEhlaWdodCA9IHRydWU7XHJcbiAgICAgICAgICAgIGlmIChmcmFtZVdpZHRoID49IDEwMjQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5zY2FsZSA9IDE7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUuc2NhbGUgPSAxLjE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwidGlwXCIpLnNldFNjYWxlKDIpO1xyXG5cclxuICAgICAgICAgICAgR2FtZU1hbmFnZXIuc2NyZWVuTW9kZSA9IDE7XHJcbiAgICAgICAgICAgIExpc3RlbmVyTWFuYWdlci5kaXNwYXRjaChFdmVudFR5cGUuU0NSRUVOX0gpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxud2luZG93Lm11dGVPcGVuID0gZnVuY3Rpb24gKCkge1xyXG4gICAgY29uc29sZS5sb2coXCLpnZnpn7PlvIDlkK9cIik7XHJcbiAgICBHYW1lTWFuYWdlci5pc011dGUgPSB0cnVlO1xyXG4gICAgU291bmRNYW5hZ2VyLnN0b3BBbGwoKTsgLy/nu5nmuLjmiI/lhajlsYDpn7PpopHov5vooYzpnZnpn7PlpITnkIZcclxuICAgIC8v5rOo5oSP5YWo5bGA6Z2Z6Z+z5ZCO77yM5Yqg5Yik5pat5LiN5YWB6K645paw55qE6Z+z6aKR5pKt5pS+XHJcbiAgICBMaXN0ZW5lck1hbmFnZXIuZGlzcGF0Y2goRXZlbnRUeXBlLk1VVEVfT1BFTik7XHJcbn1cclxuXHJcbndpbmRvdy5tdXRlQ2xvc2UgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICBjb25zb2xlLmxvZyhcIumdmemfs+WFs+mXrVwiKTtcclxuICAgIEdhbWVNYW5hZ2VyLmlzTXV0ZSA9IGZhbHNlOyAgICAvL+e7mea4uOaIj+WFqOWxgOmfs+mikeino+mZpOmdmemfs1xyXG4gICAgTGlzdGVuZXJNYW5hZ2VyLmRpc3BhdGNoKEV2ZW50VHlwZS5NVVRFX0NMT1NFKTtcclxuICAgIGlmIChHYW1lTWFuYWdlci5jYW5QbGF5QXVkaW8pIHtcclxuICAgICAgICBTb3VuZE1hbmFnZXIucGxheUVmZmVjdChcImJnbVwiLCB0cnVlLCBmYWxzZSwgZmFsc2UpO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Main/SetLevel.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '4c35dhl0KhPHY8/NUr5E45u', 'SetLevel');
// Script/Main/SetLevel.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var SetLevel = /** @class */ (function (_super) {
    __extends(SetLevel, _super);
    function SetLevel() {
        // onLoad () {}
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**行数 */
        _this.rowNum = 5;
        /**列数 */
        _this.colNum = 5;
        /**行差 */
        _this.rowDif = 110;
        /**列差 */
        _this.colDif = 100;
        /**中心点位置坐标 */
        _this.centerPos = cc.v2(0, 0);
        //左上角位置
        _this.initPos = null;
        _this.initNode = null;
        _this.itemParent = null;
        return _this;
        // update (dt) {}
    }
    SetLevel.prototype.onLoad = function () {
        this.initNode = this.node.getChildByName("initNode");
        this.itemParent = this.node.getChildByName("parent");
        this.initPos = cc.v2(this.centerPos.x - this.colDif * 2, this.centerPos.y);
    };
    //显示当前关卡
    SetLevel.prototype.displayLevel = function (numberArr) {
        var newNumberArr = [];
        for (var col = 0; col < this.colNum; col++) {
            var colArr = numberArr[col];
            newNumberArr.push(colArr);
            for (var row = 0; row < this.rowNum; row++) {
                this.createItem(row, col, colArr[row]);
            }
        }
        return newNumberArr;
    };
    SetLevel.prototype.createItem = function (row, col, labelNum) {
        //确定显示位置
        var item = cc.instantiate(this.initNode);
        var pos = cc.v2(this.initPos.x + col * this.colDif + (col - 2) * 10 * row, this.initPos.y - row * this.rowDif);
        item.setParent(this.itemParent);
        item.setPosition(pos);
        item.active = true;
        //确定显示数字
        item.getChildByName("label").getComponent(cc.Label).string = String(labelNum);
        //节点名称为行+列
        item.name = row + "" + col;
        if (labelNum == 0) {
            item.getChildByName("stone").active = false;
            item.getChildByName("label").active = false;
            item.getChildByName("right").active = true;
            Utils_1.Utils.setSpriteFrame(item.getChildByName("right"), "item" + col);
        }
        else {
            item.getChildByName("stone").active = true;
            item.getChildByName("label").active = true;
            item.getChildByName("right").active = false;
            //添加点击事件
            this.addTouchEvent(item);
        }
    };
    SetLevel.prototype.addTouchEvent = function (item) {
        item.on(cc.Node.EventType.TOUCH_START, this.onTouchNum, this);
    };
    SetLevel.prototype.removeTouchEvent = function (item) {
        item.off(cc.Node.EventType.TOUCH_START, this.onTouchNum, this);
    };
    SetLevel.prototype.onTouchNum = function (e) {
        var touchNode = e.target;
        ListenerManager_1.ListenerManager.dispatch(EventType_1.EventType.TOUCH_ITEM, touchNode);
    };
    SetLevel = __decorate([
        ccclass
    ], SetLevel);
    return SetLevel;
}(cc.Component));
exports.default = SetLevel;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxNYWluXFxTZXRMZXZlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSwrQ0FBOEM7QUFFOUMsOERBQTZEO0FBQzdELDBDQUF5QztBQUVuQyxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFzQyw0QkFBWTtJQUFsRDtRQUVJLGVBQWU7UUFGbkIscUVBaUZDO1FBN0VHLFFBQVE7UUFDQSxZQUFNLEdBQVcsQ0FBQyxDQUFDO1FBQzNCLFFBQVE7UUFDQSxZQUFNLEdBQVcsQ0FBQyxDQUFDO1FBQzNCLFFBQVE7UUFDQSxZQUFNLEdBQVcsR0FBRyxDQUFDO1FBQzdCLFFBQVE7UUFDQSxZQUFNLEdBQVcsR0FBRyxDQUFDO1FBQzdCLGFBQWE7UUFDTCxlQUFTLEdBQVksRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDekMsT0FBTztRQUNDLGFBQU8sR0FBWSxJQUFJLENBQUM7UUFFeEIsY0FBUSxHQUFZLElBQUksQ0FBQztRQUV6QixnQkFBVSxHQUFZLElBQUksQ0FBQzs7UUE2RG5DLGlCQUFpQjtJQUNyQixDQUFDO0lBNURHLHlCQUFNLEdBQU47UUFDSSxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ3JELElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDckQsSUFBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENB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O0lBRUQsbUNBQWdCLEdBQWhCLFVBQWlCLElBQWE7UUFDMUIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNuRSxDQUFDO0lBQ0QsNkJBQVUsR0FBVixVQUFXLENBQUM7UUFDUixJQUFJLFNBQVMsR0FBWSxDQUFDLENBQUMsTUFBTSxDQUFDO1FBQ2xDLGlDQUFlLENBQUMsUUFBUSxDQUFDLHFCQUFTLENBQUMsVUFBVSxFQUFFLFNBQVMsQ0FBQyxDQUFDO0lBQzlELENBQUM7SUE3RWdCLFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0FpRjVCO0lBQUQsZUFBQztDQWpGRCxBQWlGQyxDQWpGcUMsRUFBRSxDQUFDLFNBQVMsR0FpRmpEO2tCQWpGb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgeyBFdmVudFR5cGUgfSBmcm9tIFwiLi4vRGF0YS9FdmVudFR5cGVcIjtcclxuaW1wb3J0IHsgR2FtZU1hbmFnZXIgfSBmcm9tIFwiLi4vTWFuYWdlci9HYW1lTWFuYWdlclwiO1xyXG5pbXBvcnQgeyBMaXN0ZW5lck1hbmFnZXIgfSBmcm9tIFwiLi4vTWFuYWdlci9MaXN0ZW5lck1hbmFnZXJcIjtcclxuaW1wb3J0IHsgVXRpbHMgfSBmcm9tIFwiLi4vTWFuYWdlci9VdGlsc1wiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNldExldmVsIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICAvLyBvbkxvYWQgKCkge31cclxuXHJcbiAgICAvKirooYzmlbAgKi9cclxuICAgIHByaXZhdGUgcm93TnVtOiBudW1iZXIgPSA1O1xyXG4gICAgLyoq5YiX5pWwICovXHJcbiAgICBwcml2YXRlIGNvbE51bTogbnVtYmVyID0gNTtcclxuICAgIC8qKuihjOW3riAqL1xyXG4gICAgcHJpdmF0ZSByb3dEaWY6IG51bWJlciA9IDExMDtcclxuICAgIC8qKuWIl+W3riAqL1xyXG4gICAgcHJpdmF0ZSBjb2xEaWY6IG51bWJlciA9IDEwMDtcclxuICAgIC8qKuS4reW/g+eCueS9jee9ruWdkOaghyAqL1xyXG4gICAgcHJpdmF0ZSBjZW50ZXJQb3M6IGNjLlZlYzIgPSBjYy52MigwLCAwKTtcclxuICAgIC8v5bem5LiK6KeS5L2N572uXHJcbiAgICBwcml2YXRlIGluaXRQb3M6IGNjLlZlYzIgPSBudWxsO1xyXG5cclxuICAgIHByaXZhdGUgaW5pdE5vZGU6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIHByaXZhdGUgaXRlbVBhcmVudDogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIHRoaXMuaW5pdE5vZGUgPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJpbml0Tm9kZVwiKTtcclxuICAgICAgICB0aGlzLml0ZW1QYXJlbnQgPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJwYXJlbnRcIik7XHJcbiAgICAgICAgdGhpcy5pbml0UG9zID0gY2MudjIodGhpcy5jZW50ZXJQb3MueCAtIHRoaXMuY29sRGlmICogMiwgdGhpcy5jZW50ZXJQb3MueSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy/mmL7npLrlvZPliY3lhbPljaFcclxuICAgIGRpc3BsYXlMZXZlbChudW1iZXJBcnI6IG51bWJlcltdW10pIHtcclxuICAgICAgICBsZXQgbmV3TnVtYmVyQXJyOiBudW1iZXJbXVtdID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgY29sID0gMDsgY29sIDwgdGhpcy5jb2xOdW07IGNvbCsrKSB7XHJcbiAgICAgICAgICAgIGxldCBjb2xBcnI6IG51bWJlcltdID0gbnVtYmVyQXJyW2NvbF07XHJcbiAgICAgICAgICAgIG5ld051bWJlckFyci5wdXNoKGNvbEFycik7XHJcbiAgICAgICAgICAgIGZvciAobGV0IHJvdyA9IDA7IHJvdyA8IHRoaXMucm93TnVtOyByb3crKykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jcmVhdGVJdGVtKHJvdywgY29sLCBjb2xBcnJbcm93XSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG5ld051bWJlckFycjtcclxuICAgIH1cclxuXHJcbiAgICBjcmVhdGVJdGVtKHJvdzogbnVtYmVyLCBjb2w6IG51bWJlciwgbGFiZWxOdW06IG51bWJlcikge1xyXG4gICAgICAgIC8v56Gu5a6a5pi+56S65L2N572uXHJcbiAgICAgICAgbGV0IGl0ZW06IGNjLk5vZGUgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmluaXROb2RlKTtcclxuICAgICAgICBsZXQgcG9zOiBjYy5WZWMyID0gY2MudjIodGhpcy5pbml0UG9zLnggKyBjb2wgKiB0aGlzLmNvbERpZiArIChjb2wgLSAyKSAqIDEwICogcm93LCB0aGlzLmluaXRQb3MueSAtIHJvdyAqIHRoaXMucm93RGlmKTtcclxuICAgICAgICBpdGVtLnNldFBhcmVudCh0aGlzLml0ZW1QYXJlbnQpO1xyXG4gICAgICAgIGl0ZW0uc2V0UG9zaXRpb24ocG9zKTtcclxuICAgICAgICBpdGVtLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy/noa7lrprmmL7npLrmlbDlrZdcclxuICAgICAgICBpdGVtLmdldENoaWxkQnlOYW1lKFwibGFiZWxcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBTdHJpbmcobGFiZWxOdW0pO1xyXG4gICAgICAgIC8v6IqC54K55ZCN56ew5Li66KGMK+WIl1xyXG4gICAgICAgIGl0ZW0ubmFtZSA9IHJvdyArIFwiXCIgKyBjb2w7XHJcblxyXG4gICAgICAgIGlmIChsYWJlbE51bSA9PSAwKSB7XHJcbiAgICAgICAgICAgIGl0ZW0uZ2V0Q2hpbGRCeU5hbWUoXCJzdG9uZVwiKS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgaXRlbS5nZXRDaGlsZEJ5TmFtZShcImxhYmVsXCIpLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICBpdGVtLmdldENoaWxkQnlOYW1lKFwicmlnaHRcIikuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgVXRpbHMuc2V0U3ByaXRlRnJhbWUoaXRlbS5nZXRDaGlsZEJ5TmFtZShcInJpZ2h0XCIpLCBcIml0ZW1cIiArIGNvbCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaXRlbS5nZXRDaGlsZEJ5TmFtZShcInN0b25lXCIpLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIGl0ZW0uZ2V0Q2hpbGRCeU5hbWUoXCJsYWJlbFwiKS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICBpdGVtLmdldENoaWxkQnlOYW1lKFwicmlnaHRcIikuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIC8v5re75Yqg54K55Ye75LqL5Lu2XHJcbiAgICAgICAgICAgIHRoaXMuYWRkVG91Y2hFdmVudChpdGVtKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgYWRkVG91Y2hFdmVudChpdGVtOiBjYy5Ob2RlKSB7XHJcbiAgICAgICAgaXRlbS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgdGhpcy5vblRvdWNoTnVtLCB0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICByZW1vdmVUb3VjaEV2ZW50KGl0ZW06IGNjLk5vZGUpIHtcclxuICAgICAgICBpdGVtLm9mZihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgdGhpcy5vblRvdWNoTnVtLCB0aGlzKTtcclxuICAgIH1cclxuICAgIG9uVG91Y2hOdW0oZSkge1xyXG4gICAgICAgIGxldCB0b3VjaE5vZGU6IGNjLk5vZGUgPSBlLnRhcmdldDtcclxuICAgICAgICBMaXN0ZW5lck1hbmFnZXIuZGlzcGF0Y2goRXZlbnRUeXBlLlRPVUNIX0lURU0sIHRvdWNoTm9kZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Main/Money.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'deca9GNan1KvpBElDX++PXK', 'Money');
// Script/Main/Money.ts

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
var Utils_1 = require("../Manager/Utils");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Gold = /** @class */ (function (_super) {
    __extends(Gold, _super);
    function Gold() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.moneyNumLabel = null;
        _this.finalNumLabel = null;
        _this.maxMoneyNum = 3000000;
        return _this;
    }
    Gold.prototype.start = function () {
        var _this = this;
        this.moneyNumLabel.string = GameManager_1.GameManager.moneyNum + "";
        ListenerManager_1.ListenerManager.on(EventType_1.EventType.CHANGE_MONEY_VALUE, function (num) {
            _this.changeGoldNumber(num);
        }, this);
    };
    Gold.prototype.changeGoldNumber = function (num) {
        GameManager_1.GameManager.moneyNum += num;
        // let curGoldNum = Number(this.moneyNumLabel.string);
        var finalGoldNum = GameManager_1.GameManager.moneyNum;
        if (finalGoldNum <= 0) {
            finalGoldNum = 0;
        }
        this.moneyNumLabel.node.active = true;
        this.finalNumLabel.node.active = false;
        this.updateNumberAnim(this.moneyNumLabel.node, finalGoldNum);
    };
    //更新数字变换
    Gold.prototype.updateNumberAnim = function (labelNode, curNum) {
        var _this = this;
        var obj = {
            num: 0,
        };
        obj.num = Number(labelNode.getComponent(cc.Label).string);
        cc.tween(obj)
            .to(0.1, { num: curNum }, {
            progress: function (start, end, current, t) {
                labelNode.getComponent(cc.Label).string = String(Math.ceil(start + (end - start) * t));
                return start + (end - start) * t;
            }
        })
            .call(function () {
            _this.moneyNumLabel.node.active = false;
            _this.finalNumLabel.node.active = true;
            _this.finalNumLabel.string = Utils_1.Utils.formatNumber(curNum);
        })
            .start();
    };
    __decorate([
        property(cc.Label)
    ], Gold.prototype, "moneyNumLabel", void 0);
    __decorate([
        property(cc.Label)
    ], Gold.prototype, "finalNumLabel", void 0);
    Gold = __decorate([
        ccclass
    ], Gold);
    return Gold;
}(cc.Component));
exports.default = Gold;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxNYWluXFxNb25leS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwrQ0FBOEM7QUFDOUMsc0RBQXFEO0FBQ3JELDhEQUE2RDtBQUM3RCwwQ0FBeUM7QUFFbkMsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBa0Msd0JBQVk7SUFBOUM7UUFBQSxxRUFrREM7UUEvQ1csbUJBQWEsR0FBYSxJQUFJLENBQUM7UUFFL0IsbUJBQWEsR0FBYSxJQUFJLENBQUM7UUFFL0IsaUJBQVcsR0FBVyxPQUFPLENBQUM7O0lBMkMxQyxDQUFDO0lBeENHLG9CQUFLLEdBQUw7UUFBQSxpQkFLQztRQUpHLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxHQUFHLHlCQUFXLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztRQUN0RCxpQ0FBZSxDQUFDLEVBQUUsQ0FBQyxxQkFBUyxDQUFDLGtCQUFrQixFQUFFLFVBQUMsR0FBRztZQUNqRCxLQUFJLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDL0IsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ2IsQ0FBQztJQUVELCtCQUFnQixHQUFoQixVQUFpQixHQUFXO1FBQ3hCLHlCQUFXLENBQUMsUUFBUSxJQUFJLEdBQUcsQ0FBQztRQUM1QixzREFBc0Q7UUFDdEQsSUFBSSxZQUFZLEdBQUcseUJBQVcsQ0FBQyxRQUFRLENBQUM7UUFDeEMsSUFBSSxZQUFZLElBQUksQ0FBQyxFQUFFO1lBQ25CLFlBQVksR0FBRyxDQUFDLENBQUM7U0FDcEI7UUFDRCxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBQ3RDLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDdkMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxFQUFFLFlBQVksQ0FBQyxDQUFDO0lBQ2pFLENBQUM7SUFFRCxRQUFRO0lBQ1IsK0JBQWdCLEdBQWhCLFVBQWlCLFNBQWtCLEVBQUUsTUFBYztRQUFuRCxpQkFrQkM7UUFqQkcsSUFBSSxHQUFHLEdBQUc7WUFDTixHQUFHLEVBQUUsQ0FBQztTQUNULENBQUM7UUFDRixHQUFHLENBQUMsR0FBRyxHQUFHLE1BQU0sQ0FBQyxTQUFTLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUMxRCxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQzthQUNSLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFFLEVBQUU7WUFDdEIsUUFBUSxFQUFFLFVBQUMsS0FBSyxFQUFFLEdBQUcsRUFBRSxPQUFPLEVBQUUsQ0FBQztnQkFDN0IsU0FBUyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLEdBQUcsR0FBRyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUN2RixPQUFPLEtBQUssR0FBRyxDQUFDLEdBQUcsR0FBRyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDckMsQ0FBQztTQUNKLENBQUM7YUFDRCxJQUFJLENBQUM7WUFDRixLQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1lBQ3ZDLEtBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7WUFDdEMsS0FBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLEdBQUcsYUFBSyxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUMzRCxDQUFDLENBQUM7YUFDRCxLQUFLLEVBQUUsQ0FBQztJQUNqQixDQUFDO0lBN0NEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7K0NBQ29CO0lBRXZDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7K0NBQ29CO0lBTHRCLElBQUk7UUFEeEIsT0FBTztPQUNhLElBQUksQ0FrRHhCO0lBQUQsV0FBQztDQWxERCxBQWtEQyxDQWxEaUMsRUFBRSxDQUFDLFNBQVMsR0FrRDdDO2tCQWxEb0IsSUFBSSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEV2ZW50VHlwZSB9IGZyb20gXCIuLi9EYXRhL0V2ZW50VHlwZVwiO1xyXG5pbXBvcnQgeyBHYW1lTWFuYWdlciB9IGZyb20gXCIuLi9NYW5hZ2VyL0dhbWVNYW5hZ2VyXCI7XHJcbmltcG9ydCB7IExpc3RlbmVyTWFuYWdlciB9IGZyb20gXCIuLi9NYW5hZ2VyL0xpc3RlbmVyTWFuYWdlclwiO1xyXG5pbXBvcnQgeyBVdGlscyB9IGZyb20gXCIuLi9NYW5hZ2VyL1V0aWxzXCI7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR29sZCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgcHJpdmF0ZSBtb25leU51bUxhYmVsOiBjYy5MYWJlbCA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICBwcml2YXRlIGZpbmFsTnVtTGFiZWw6IGNjLkxhYmVsID0gbnVsbDtcclxuXHJcbiAgICBwcml2YXRlIG1heE1vbmV5TnVtOiBudW1iZXIgPSAzMDAwMDAwO1xyXG5cclxuXHJcbiAgICBzdGFydCgpIHtcclxuICAgICAgICB0aGlzLm1vbmV5TnVtTGFiZWwuc3RyaW5nID0gR2FtZU1hbmFnZXIubW9uZXlOdW0gKyBcIlwiO1xyXG4gICAgICAgIExpc3RlbmVyTWFuYWdlci5vbihFdmVudFR5cGUuQ0hBTkdFX01PTkVZX1ZBTFVFLCAobnVtKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuY2hhbmdlR29sZE51bWJlcihudW0pO1xyXG4gICAgICAgIH0sIHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIGNoYW5nZUdvbGROdW1iZXIobnVtOiBudW1iZXIpIHtcclxuICAgICAgICBHYW1lTWFuYWdlci5tb25leU51bSArPSBudW07XHJcbiAgICAgICAgLy8gbGV0IGN1ckdvbGROdW0gPSBOdW1iZXIodGhpcy5tb25leU51bUxhYmVsLnN0cmluZyk7XHJcbiAgICAgICAgbGV0IGZpbmFsR29sZE51bSA9IEdhbWVNYW5hZ2VyLm1vbmV5TnVtO1xyXG4gICAgICAgIGlmIChmaW5hbEdvbGROdW0gPD0gMCkge1xyXG4gICAgICAgICAgICBmaW5hbEdvbGROdW0gPSAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLm1vbmV5TnVtTGFiZWwubm9kZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuZmluYWxOdW1MYWJlbC5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMudXBkYXRlTnVtYmVyQW5pbSh0aGlzLm1vbmV5TnVtTGFiZWwubm9kZSwgZmluYWxHb2xkTnVtKTtcclxuICAgIH1cclxuXHJcbiAgICAvL+abtOaWsOaVsOWtl+WPmOaNolxyXG4gICAgdXBkYXRlTnVtYmVyQW5pbShsYWJlbE5vZGU6IGNjLk5vZGUsIGN1ck51bTogbnVtYmVyKSB7XHJcbiAgICAgICAgbGV0IG9iaiA9IHtcclxuICAgICAgICAgICAgbnVtOiAwLFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgb2JqLm51bSA9IE51bWJlcihsYWJlbE5vZGUuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcpO1xyXG4gICAgICAgIGNjLnR3ZWVuKG9iailcclxuICAgICAgICAgICAgLnRvKDAuMSwgeyBudW06IGN1ck51bSB9LCB7XHJcbiAgICAgICAgICAgICAgICBwcm9ncmVzczogKHN0YXJ0LCBlbmQsIGN1cnJlbnQsIHQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbE5vZGUuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBTdHJpbmcoTWF0aC5jZWlsKHN0YXJ0ICsgKGVuZCAtIHN0YXJ0KSAqIHQpKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gc3RhcnQgKyAoZW5kIC0gc3RhcnQpICogdDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tb25leU51bUxhYmVsLm5vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmZpbmFsTnVtTGFiZWwubm9kZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5maW5hbE51bUxhYmVsLnN0cmluZyA9IFV0aWxzLmZvcm1hdE51bWJlcihjdXJOdW0pO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuc3RhcnQoKTtcclxuICAgIH1cclxuXHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Main/TweenScale.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b0d72yqCKJI9KrhPc4LbzuI', 'TweenScale');
// Script/Main/TweenScale.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var TweenScale = /** @class */ (function (_super) {
    __extends(TweenScale, _super);
    function TweenScale() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TweenScale.prototype.onLoad = function () {
        this.node.runAction(cc.repeatForever(cc.sequence(cc.scaleTo(0.6, this.node.scale + 0.05), cc.scaleTo(0.7, this.node.scale))));
    };
    TweenScale = __decorate([
        ccclass
    ], TweenScale);
    return TweenScale;
}(cc.Component));
exports.default = TweenScale;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxNYWluXFxUd2VlblNjYWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNNLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXdDLDhCQUFZO0lBQXBEOztJQVNBLENBQUM7SUFQRywyQkFBTSxHQUFOO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUM1QyxFQUFFLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsRUFDdkMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FDbkMsQ0FBQyxDQUFDLENBQUM7SUFDUixDQUFDO0lBUGdCLFVBQVU7UUFEOUIsT0FBTztPQUNhLFVBQVUsQ0FTOUI7SUFBRCxpQkFBQztDQVRELEFBU0MsQ0FUdUMsRUFBRSxDQUFDLFNBQVMsR0FTbkQ7a0JBVG9CLFVBQVUiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFR3ZWVuU2NhbGUgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgICB0aGlzLm5vZGUucnVuQWN0aW9uKGNjLnJlcGVhdEZvcmV2ZXIoY2Muc2VxdWVuY2UoXHJcbiAgICAgICAgICAgIGNjLnNjYWxlVG8oMC42LCB0aGlzLm5vZGUuc2NhbGUgKyAwLjA1KSxcclxuICAgICAgICAgICAgY2Muc2NhbGVUbygwLjcsIHRoaXMubm9kZS5zY2FsZSlcclxuICAgICAgICApKSk7XHJcbiAgICB9XHJcblxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Manager/SoundManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd4a50njbgtBhr+3FejyEl+F', 'SoundManager');
// Script/Manager/SoundManager.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SoundManager = void 0;
var ConstValue_1 = require("../Data/ConstValue");
var GameManager_1 = require("./GameManager");
var SoundManagerClass = /** @class */ (function () {
    function SoundManagerClass() {
        /**存放纹理资源的map */
        this.audioClipMap = new Map();
        /**播放语音列表 */
        this.audioList = new Map();
        /**播放音效列表 */
        this.effectList = new Map();
        /**音频统一的引用计数 */
        this.referenceList = new Map();
    }
    SoundManagerClass.getInstance = function () {
        if (this.instance === null) {
            this.instance = new SoundManagerClass();
        }
        return this.instance;
    };
    /**加载resources里audios的音频资源*/
    SoundManagerClass.prototype.preLoadResAudioClip = function (callback) {
        var _this = this;
        var path = ConstValue_1.ConstValue.AUDIO_DIR;
        cc.loader.loadResDir(path, cc.AudioClip, function (error, audioClips) {
            //错误处理
            if (error) {
                cc.error(error);
                callback(false);
                return;
            }
            // 获取完毕后装入 Map
            audioClips.forEach(function (value) {
                cc.log('缓存完毕！value.name == ' + value.name);
                _this.audioClipMap.set(value.name, value);
                _this.referenceList.set(value.name, 0);
            });
            // 执行回调返回进度
            callback(true);
        });
    };
    /**缓存所有音频资源 */
    SoundManagerClass.prototype.preLoadAllAudioClips = function (callback) {
        var isCompletedLoadResAudio = false;
        this.preLoadResAudioClip(function (isCompleted) {
            if (isCompleted) {
                cc.log("缓存完毕！preLoadResAudioClip");
            }
            isCompletedLoadResAudio = true;
            if (isCompletedLoadResAudio) {
                callback(true);
            }
        });
    };
    /**单独缓存某一个音频 */
    SoundManagerClass.prototype.preLoadAudioClip = function (clipName, callback) {
        var _this = this;
        var path = ConstValue_1.ConstValue.AUDIO_DIR + clipName;
        cc.loader.loadRes(path, cc.AudioClip, function (err, audioClip) {
            if (err) {
                cc.error(err);
                return;
            }
            _this.audioClipMap.set(clipName, audioClip);
            _this.referenceList.set(clipName, 0);
            cc.log('缓存完毕！audioClip.name == ' + audioClip.name);
            callback();
        });
    };
    // 获取音频资源
    SoundManagerClass.prototype.getAudioClip = function (clipName) {
        if (!this.audioClipMap.has(clipName)) {
            cc.log("\u672A\u7F13\u5B58\u7684\u97F3\u9891\u8D44\u6E90: " + clipName);
            return null;
        }
        else {
            return this.audioClipMap.get(clipName);
        }
    };
    /**
     * 播放语音
     * @param clipName 语音clip文件
     * @param loop 是否循环
     * @param interrupt 是否打断其他语音
     * @param isMutex 是否互斥（指音效和语音），默认false
     * @param volume 音量（0.0~1.0）
     * @param onFinishCallback 播放完成回调函数
     */
    SoundManagerClass.prototype.playAudio = function (clipName, loop, interrupt, isMutex, volume, onFinishCallback) {
        var _this = this;
        if (isMutex === void 0) { isMutex = false; }
        if (volume === void 0) { volume = 1; }
        if (onFinishCallback === void 0) { onFinishCallback = null; }
        if (!clipName || GameManager_1.GameManager.isMute || !GameManager_1.GameManager.canPlayAudio)
            return;
        interrupt && this.stopAllAudio();
        isMutex && this.stopAllEffect();
        var clip = null;
        if (typeof clipName === 'string') {
            clip = this.getAudioClip(clipName);
            if (clip == null) {
                this.preLoadAudioClip(clipName, function () {
                    clip = _this.audioClipMap.get(clipName);
                    _this.playAudio(clip, loop, interrupt, isMutex, volume, onFinishCallback);
                });
                return;
            }
        }
        else {
            clip = clipName;
        }
        var id = cc.audioEngine.play(clip, loop, volume);
        this.audioList.set(clip.name, id);
        //播放引用计数+1
        var referenceCount = this.referenceList.get(clip.name);
        this.referenceList.set(clip.name, referenceCount++);
        cc.audioEngine.setFinishCallback(id, function () {
            //引用计数为0删除资源
            var referenceCount = _this.referenceList.get(clip.name);
            if (referenceCount-- < 0) {
                _this.stopSoundByName(clip.name);
            }
            _this.referenceList.set(clip.name, referenceCount < 0 ? 0 : referenceCount);
            setTimeout(function () {
                onFinishCallback && onFinishCallback();
            }, 100);
        });
    };
    /**
     * 播放音效
     * @param clipName 语音clip文件
     * @param loop 是否循环
     * @param interrupt 是否打断其他音效
     * @param isMutex 是否互斥（指音效和语音），默认false
     * @param volume 音量（0.0~1.0）
     * @param onFinishCallback 播放完成回调函数
     */
    SoundManagerClass.prototype.playEffect = function (clipName, loop, interrupt, isMutex, volume, onFinishCallback) {
        var _this = this;
        if (isMutex === void 0) { isMutex = false; }
        if (volume === void 0) { volume = 1; }
        if (onFinishCallback === void 0) { onFinishCallback = null; }
        if (!clipName || GameManager_1.GameManager.isMute || !GameManager_1.GameManager.canPlayAudio)
            return;
        interrupt && this.stopAllEffect();
        isMutex && this.stopAllAudio();
        var clip = null;
        if (typeof clipName === 'string') {
            clip = this.getAudioClip(clipName);
            if (clip == null) {
                this.preLoadAudioClip(clipName, function () {
                    clip = _this.audioClipMap.get(clipName);
                    _this.playEffect(clip, loop, interrupt, isMutex, volume, onFinishCallback);
                });
                return;
            }
        }
        else {
            clip = clipName;
        }
        var id = cc.audioEngine.playEffect(clip, loop);
        cc.audioEngine.setVolume(id, volume);
        this.effectList.set(clip.name, id);
        //播放引用计数+1
        var referenceCount = this.referenceList.get(clip.name);
        this.referenceList.set(clip.name, referenceCount++);
        cc.audioEngine.setFinishCallback(id, function () {
            //引用计数为0删除资源
            var referenceCount = _this.referenceList.get(clip.name);
            if (referenceCount-- < 0) {
                _this.stopSoundByName(clip.name);
            }
            _this.referenceList.set(clip.name, referenceCount < 0 ? 0 : referenceCount);
            setTimeout(function () {
                onFinishCallback && onFinishCallback();
            }, 100);
        });
        ;
    };
    /**停止所有语音播放 */
    SoundManagerClass.prototype.stopAllAudio = function () {
        var _this = this;
        this.audioList.forEach(function (value, index) {
            _this.referenceList.set(index, 0);
            for (var i = 0; i <= value; i++) {
                cc.audioEngine.stop(i);
            }
        });
        this.audioList = new Map();
    };
    /**停止所有音效播放 */
    SoundManagerClass.prototype.stopAllEffect = function () {
        var _this = this;
        this.effectList.forEach(function (value, index, arr) {
            _this.referenceList.set(index, 0);
            for (var i = 0; i <= value; i++) {
                cc.audioEngine.stopEffect(i);
            }
        });
        this.effectList = new Map();
    };
    /**停止所有语音和音效的播放 */
    SoundManagerClass.prototype.stopAll = function () {
        this.stopAllAudio();
        this.stopAllEffect();
        cc.audioEngine.stopAll();
    };
    /**通过名字停止播放指定的音频 */
    SoundManagerClass.prototype.stopSoundByName = function (clipName) {
        this.referenceList.set(clipName, 0);
        var id = this.audioList.get(clipName);
        if (id != null && id != -1) {
            cc.audioEngine.stop(id);
            this.audioList.delete(clipName);
        }
        id = this.effectList.get(clipName);
        if (id != null && id != -1) {
            cc.audioEngine.stop(id);
            this.effectList.delete(clipName);
        }
    };
    /**某个音效是否正在播放 */
    SoundManagerClass.prototype.isPlaying = function (clipName) {
        var id = this.audioList.get(clipName);
        if (id != null && id != -1) {
            return true;
        }
        id = this.effectList.get(clipName);
        if (id != null && id != -1) {
            return true;
        }
        return false;
    };
    SoundManagerClass.instance = null;
    return SoundManagerClass;
}());
/**音频管理类 */
exports.SoundManager = SoundManagerClass.getInstance();

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxNYW5hZ2VyXFxTb3VuZE1hbmFnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsaURBQWdEO0FBQ2hELDZDQUE0QztBQUU1QztJQUFBO1FBU0ksZ0JBQWdCO1FBQ1IsaUJBQVksR0FBOEIsSUFBSSxHQUFHLEVBQUUsQ0FBQztRQUM1RCxZQUFZO1FBQ0osY0FBUyxHQUF3QixJQUFJLEdBQUcsRUFBRSxDQUFDO1FBQ25ELFlBQVk7UUFDSixlQUFVLEdBQXdCLElBQUksR0FBRyxFQUFFLENBQUM7UUFDcEQsZUFBZTtRQUNQLGtCQUFhLEdBQXdCLElBQUksR0FBRyxFQUFFLENBQUM7SUErTjNELENBQUM7SUE3T2lCLDZCQUFXLEdBQXpCO1FBQ0ksSUFBSSxJQUFJLENBQUMsUUFBUSxLQUFLLElBQUksRUFBRTtZQUN4QixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksaUJBQWlCLEVBQUUsQ0FBQztTQUMzQztRQUNELE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUN6QixDQUFDO0lBV0QsNEJBQTRCO0lBQ3JCLCtDQUFtQixHQUExQixVQUEyQixRQUF3QztRQUFuRSxpQkFrQkM7UUFqQkcsSUFBSSxJQUFJLEdBQUcsdUJBQVUsQ0FBQyxTQUFTLENBQUM7UUFDaEMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxTQUFTLEVBQUUsVUFBQyxLQUFLLEVBQUUsVUFBMEI7WUFDdkUsTUFBTTtZQUNOLElBQUksS0FBSyxFQUFFO2dCQUNQLEVBQUUsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ2hCLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDaEIsT0FBTzthQUNWO1lBQ0QsY0FBYztZQUNkLFVBQVUsQ0FBQyxPQUFPLENBQUMsVUFBQyxLQUFLO2dCQUNyQixFQUFFLENBQUMsR0FBRyxDQUFDLHFCQUFxQixHQUFHLEtBQUssQ0FB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RCx3QkFBQztDQS9PRCxBQStPQyxJQUFBO0FBRUQsV0FBVztBQUNFLFFBQUEsWUFBWSxHQUFHLGlCQUFpQixDQUFDLFdBQVcsRUFBRSxDQUFDIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29uc3RWYWx1ZSB9IGZyb20gXCIuLi9EYXRhL0NvbnN0VmFsdWVcIjtcclxuaW1wb3J0IHsgR2FtZU1hbmFnZXIgfSBmcm9tIFwiLi9HYW1lTWFuYWdlclwiO1xyXG5cclxuY2xhc3MgU291bmRNYW5hZ2VyQ2xhc3Mge1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgaW5zdGFuY2U6IFNvdW5kTWFuYWdlckNsYXNzID0gbnVsbDtcclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0SW5zdGFuY2UoKTogU291bmRNYW5hZ2VyQ2xhc3Mge1xyXG4gICAgICAgIGlmICh0aGlzLmluc3RhbmNlID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaW5zdGFuY2UgPSBuZXcgU291bmRNYW5hZ2VyQ2xhc3MoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaW5zdGFuY2U7XHJcbiAgICB9XHJcblxyXG4gICAgLyoq5a2Y5pS+57q555CG6LWE5rqQ55qEbWFwICovXHJcbiAgICBwcml2YXRlIGF1ZGlvQ2xpcE1hcDogTWFwPHN0cmluZywgY2MuQXVkaW9DbGlwPiA9IG5ldyBNYXAoKTtcclxuICAgIC8qKuaSreaUvuivremfs+WIl+ihqCAqL1xyXG4gICAgcHJpdmF0ZSBhdWRpb0xpc3Q6IE1hcDxzdHJpbmcsIG51bWJlcj4gPSBuZXcgTWFwKCk7XHJcbiAgICAvKirmkq3mlL7pn7PmlYjliJfooaggKi9cclxuICAgIHByaXZhdGUgZWZmZWN0TGlzdDogTWFwPHN0cmluZywgbnVtYmVyPiA9IG5ldyBNYXAoKTtcclxuICAgIC8qKumfs+mikee7n+S4gOeahOW8leeUqOiuoeaVsCAqL1xyXG4gICAgcHJpdmF0ZSByZWZlcmVuY2VMaXN0OiBNYXA8c3RyaW5nLCBudW1iZXI+ID0gbmV3IE1hcCgpO1xyXG5cclxuICAgIC8qKuWKoOi9vXJlc291cmNlc+mHjGF1ZGlvc+eahOmfs+mikei1hOa6kCovXHJcbiAgICBwdWJsaWMgcHJlTG9hZFJlc0F1ZGlvQ2xpcChjYWxsYmFjazogKGlzQ29tcGxldGVkOiBib29sZWFuKSA9PiB2b2lkKSB7XHJcbiAgICAgICAgbGV0IHBhdGggPSBDb25zdFZhbHVlLkFVRElPX0RJUjtcclxuICAgICAgICBjYy5sb2FkZXIubG9hZFJlc0RpcihwYXRoLCBjYy5BdWRpb0NsaXAsIChlcnJvciwgYXVkaW9DbGlwczogY2MuQXVkaW9DbGlwW10pID0+IHtcclxuICAgICAgICAgICAgLy/plJnor6/lpITnkIZcclxuICAgICAgICAgICAgaWYgKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICBjYy5lcnJvcihlcnJvcik7XHJcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8g6I635Y+W5a6M5q+V5ZCO6KOF5YWlIE1hcFxyXG4gICAgICAgICAgICBhdWRpb0NsaXBzLmZvckVhY2goKHZhbHVlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjYy5sb2coJ+e8k+WtmOWujOavle+8gXZhbHVlLm5hbWUgPT0gJyArIHZhbHVlLm5hbWUpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hdWRpb0NsaXBNYXAuc2V0KHZhbHVlLm5hbWUsIHZhbHVlKTtcclxuICAgICAgICAgICAgICAgIHRoaXMucmVmZXJlbmNlTGlzdC5zZXQodmFsdWUubmFtZSwgMCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAvLyDmiafooYzlm57osIPov5Tlm57ov5vluqZcclxuICAgICAgICAgICAgY2FsbGJhY2sodHJ1ZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoq57yT5a2Y5omA5pyJ6Z+z6aKR6LWE5rqQICovXHJcbiAgICBwdWJsaWMgcHJlTG9hZEFsbEF1ZGlvQ2xpcHMoY2FsbGJhY2s6IChpc0NvbXBsZXRlZDogYm9vbGVhbikgPT4gdm9pZCkge1xyXG4gICAgICAgIGxldCBpc0NvbXBsZXRlZExvYWRSZXNBdWRpbyA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMucHJlTG9hZFJlc0F1ZGlvQ2xpcCgoaXNDb21wbGV0ZWQpID0+IHtcclxuICAgICAgICAgICAgaWYgKGlzQ29tcGxldGVkKSB7XHJcbiAgICAgICAgICAgICAgICBjYy5sb2coXCLnvJPlrZjlrozmr5XvvIFwcmVMb2FkUmVzQXVkaW9DbGlwXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlzQ29tcGxldGVkTG9hZFJlc0F1ZGlvID0gdHJ1ZTtcclxuICAgICAgICAgICAgaWYgKGlzQ29tcGxldGVkTG9hZFJlc0F1ZGlvKSB7XHJcbiAgICAgICAgICAgICAgICBjYWxsYmFjayh0cnVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKuWNleeLrOe8k+WtmOafkOS4gOS4qumfs+mikSAqL1xyXG4gICAgcHVibGljIHByZUxvYWRBdWRpb0NsaXAoY2xpcE5hbWU6IHN0cmluZywgY2FsbGJhY2s6ICgpID0+IHZvaWQpIHtcclxuICAgICAgICBsZXQgcGF0aCA9IENvbnN0VmFsdWUuQVVESU9fRElSICsgY2xpcE5hbWU7XHJcbiAgICAgICAgY2MubG9hZGVyLmxvYWRSZXMocGF0aCwgY2MuQXVkaW9DbGlwLCAoZXJyLCBhdWRpb0NsaXA6IGNjLkF1ZGlvQ2xpcCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICBjYy5lcnJvcihlcnIpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuYXVkaW9DbGlwTWFwLnNldChjbGlwTmFtZSwgYXVkaW9DbGlwKTtcclxuICAgICAgICAgICAgdGhpcy5yZWZlcmVuY2VMaXN0LnNldChjbGlwTmFtZSwgMCk7XHJcbiAgICAgICAgICAgIGNjLmxvZygn57yT5a2Y5a6M5q+V77yBYXVkaW9DbGlwLm5hbWUgPT0gJyArIGF1ZGlvQ2xpcC5uYW1lKTtcclxuICAgICAgICAgICAgY2FsbGJhY2soKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyDojrflj5bpn7PpopHotYTmupBcclxuICAgIHB1YmxpYyBnZXRBdWRpb0NsaXAoY2xpcE5hbWU6IHN0cmluZyk6IGNjLkF1ZGlvQ2xpcCB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmF1ZGlvQ2xpcE1hcC5oYXMoY2xpcE5hbWUpKSB7XHJcbiAgICAgICAgICAgIGNjLmxvZyhg5pyq57yT5a2Y55qE6Z+z6aKR6LWE5rqQOiAke2NsaXBOYW1lfWApO1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5hdWRpb0NsaXBNYXAuZ2V0KGNsaXBOYW1lKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmkq3mlL7or63pn7NcclxuICAgICAqIEBwYXJhbSBjbGlwTmFtZSDor63pn7NjbGlw5paH5Lu2XHJcbiAgICAgKiBAcGFyYW0gbG9vcCDmmK/lkKblvqrnjq9cclxuICAgICAqIEBwYXJhbSBpbnRlcnJ1cHQg5piv5ZCm5omT5pat5YW25LuW6K+t6Z+zXHJcbiAgICAgKiBAcGFyYW0gaXNNdXRleCDmmK/lkKbkupLmlqXvvIjmjIfpn7PmlYjlkozor63pn7PvvInvvIzpu5jorqRmYWxzZVxyXG4gICAgICogQHBhcmFtIHZvbHVtZSDpn7Pph4/vvIgwLjB+MS4w77yJXHJcbiAgICAgKiBAcGFyYW0gb25GaW5pc2hDYWxsYmFjayDmkq3mlL7lrozmiJDlm57osIPlh73mlbBcclxuICAgICAqL1xyXG4gICAgcHVibGljIHBsYXlBdWRpbyhcclxuICAgICAgICBjbGlwTmFtZTogc3RyaW5nIHwgY2MuQXVkaW9DbGlwLFxyXG4gICAgICAgIGxvb3A6IGJvb2xlYW4sXHJcbiAgICAgICAgaW50ZXJydXB0OiBib29sZWFuLFxyXG4gICAgICAgIGlzTXV0ZXg6IGJvb2xlYW4gPSBmYWxzZSxcclxuICAgICAgICB2b2x1bWU6IG51bWJlciA9IDEsXHJcbiAgICAgICAgb25GaW5pc2hDYWxsYmFjazogRnVuY3Rpb24gPSBudWxsXHJcbiAgICApIHtcclxuICAgICAgICBpZiAoIWNsaXBOYW1lIHx8IEdhbWVNYW5hZ2VyLmlzTXV0ZSB8fCAhR2FtZU1hbmFnZXIuY2FuUGxheUF1ZGlvKSByZXR1cm47XHJcbiAgICAgICAgaW50ZXJydXB0ICYmIHRoaXMuc3RvcEFsbEF1ZGlvKCk7XHJcbiAgICAgICAgaXNNdXRleCAmJiB0aGlzLnN0b3BBbGxFZmZlY3QoKTtcclxuICAgICAgICBsZXQgY2xpcCA9IG51bGw7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBjbGlwTmFtZSA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgICAgICAgY2xpcCA9IHRoaXMuZ2V0QXVkaW9DbGlwKGNsaXBOYW1lKTtcclxuICAgICAgICAgICAgaWYgKGNsaXAgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wcmVMb2FkQXVkaW9DbGlwKGNsaXBOYW1lLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2xpcCA9IHRoaXMuYXVkaW9DbGlwTWFwLmdldChjbGlwTmFtZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGF5QXVkaW8oY2xpcCwgbG9vcCwgaW50ZXJydXB0LCBpc011dGV4LCB2b2x1bWUsIG9uRmluaXNoQ2FsbGJhY2spO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjbGlwID0gY2xpcE5hbWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgaWQgPSBjYy5hdWRpb0VuZ2luZS5wbGF5KGNsaXAsIGxvb3AsIHZvbHVtZSk7XHJcbiAgICAgICAgdGhpcy5hdWRpb0xpc3Quc2V0KGNsaXAubmFtZSwgaWQpO1xyXG4gICAgICAgIC8v5pKt5pS+5byV55So6K6h5pWwKzFcclxuICAgICAgICBsZXQgcmVmZXJlbmNlQ291bnQgPSB0aGlzLnJlZmVyZW5jZUxpc3QuZ2V0KGNsaXAubmFtZSk7XHJcbiAgICAgICAgdGhpcy5yZWZlcmVuY2VMaXN0LnNldChjbGlwLm5hbWUsIHJlZmVyZW5jZUNvdW50KyspO1xyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnNldEZpbmlzaENhbGxiYWNrKGlkLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIC8v5byV55So6K6h5pWw5Li6MOWIoOmZpOi1hOa6kFxyXG4gICAgICAgICAgICBsZXQgcmVmZXJlbmNlQ291bnQgPSB0aGlzLnJlZmVyZW5jZUxpc3QuZ2V0KGNsaXAubmFtZSk7XHJcbiAgICAgICAgICAgIGlmIChyZWZlcmVuY2VDb3VudC0tIDwgMCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zdG9wU291bmRCeU5hbWUoY2xpcC5uYW1lKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLnJlZmVyZW5jZUxpc3Quc2V0KGNsaXAubmFtZSwgcmVmZXJlbmNlQ291bnQgPCAwID8gMCA6IHJlZmVyZW5jZUNvdW50KTtcclxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBvbkZpbmlzaENhbGxiYWNrICYmIG9uRmluaXNoQ2FsbGJhY2soKTtcclxuICAgICAgICAgICAgfSwgMTAwKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOaSreaUvumfs+aViFxyXG4gICAgICogQHBhcmFtIGNsaXBOYW1lIOivremfs2NsaXDmlofku7ZcclxuICAgICAqIEBwYXJhbSBsb29wIOaYr+WQpuW+queOr1xyXG4gICAgICogQHBhcmFtIGludGVycnVwdCDmmK/lkKbmiZPmlq3lhbbku5bpn7PmlYhcclxuICAgICAqIEBwYXJhbSBpc011dGV4IOaYr+WQpuS6kuaWpe+8iOaMh+mfs+aViOWSjOivremfs++8ie+8jOm7mOiupGZhbHNlXHJcbiAgICAgKiBAcGFyYW0gdm9sdW1lIOmfs+mHj++8iDAuMH4xLjDvvIlcclxuICAgICAqIEBwYXJhbSBvbkZpbmlzaENhbGxiYWNrIOaSreaUvuWujOaIkOWbnuiwg+WHveaVsFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgcGxheUVmZmVjdChcclxuICAgICAgICBjbGlwTmFtZTogc3RyaW5nIHwgY2MuQXVkaW9DbGlwLFxyXG4gICAgICAgIGxvb3A6IGJvb2xlYW4sXHJcbiAgICAgICAgaW50ZXJydXB0OiBib29sZWFuLFxyXG4gICAgICAgIGlzTXV0ZXg6IGJvb2xlYW4gPSBmYWxzZSxcclxuICAgICAgICB2b2x1bWU6IG51bWJlciA9IDEsXHJcbiAgICAgICAgb25GaW5pc2hDYWxsYmFjazogRnVuY3Rpb24gPSBudWxsXHJcbiAgICApIHtcclxuICAgICAgICBpZiAoIWNsaXBOYW1lIHx8IEdhbWVNYW5hZ2VyLmlzTXV0ZSB8fCAhR2FtZU1hbmFnZXIuY2FuUGxheUF1ZGlvKSByZXR1cm47XHJcbiAgICAgICAgaW50ZXJydXB0ICYmIHRoaXMuc3RvcEFsbEVmZmVjdCgpO1xyXG4gICAgICAgIGlzTXV0ZXggJiYgdGhpcy5zdG9wQWxsQXVkaW8oKTtcclxuICAgICAgICBsZXQgY2xpcCA9IG51bGw7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBjbGlwTmFtZSA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgICAgICAgY2xpcCA9IHRoaXMuZ2V0QXVkaW9DbGlwKGNsaXBOYW1lKTtcclxuICAgICAgICAgICAgaWYgKGNsaXAgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wcmVMb2FkQXVkaW9DbGlwKGNsaXBOYW1lLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2xpcCA9IHRoaXMuYXVkaW9DbGlwTWFwLmdldChjbGlwTmFtZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGF5RWZmZWN0KGNsaXAsIGxvb3AsIGludGVycnVwdCwgaXNNdXRleCwgdm9sdW1lLCBvbkZpbmlzaENhbGxiYWNrKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY2xpcCA9IGNsaXBOYW1lO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgaWQgPSBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KGNsaXAsIGxvb3ApO1xyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnNldFZvbHVtZShpZCwgdm9sdW1lKVxyXG4gICAgICAgIHRoaXMuZWZmZWN0TGlzdC5zZXQoY2xpcC5uYW1lLCBpZCk7XHJcbiAgICAgICAgLy/mkq3mlL7lvJXnlKjorqHmlbArMVxyXG4gICAgICAgIGxldCByZWZlcmVuY2VDb3VudCA9IHRoaXMucmVmZXJlbmNlTGlzdC5nZXQoY2xpcC5uYW1lKTtcclxuICAgICAgICB0aGlzLnJlZmVyZW5jZUxpc3Quc2V0KGNsaXAubmFtZSwgcmVmZXJlbmNlQ291bnQrKyk7XHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUuc2V0RmluaXNoQ2FsbGJhY2soaWQsICgpID0+IHtcclxuICAgICAgICAgICAgLy/lvJXnlKjorqHmlbDkuLow5Yig6Zmk6LWE5rqQXHJcbiAgICAgICAgICAgIGxldCByZWZlcmVuY2VDb3VudCA9IHRoaXMucmVmZXJlbmNlTGlzdC5nZXQoY2xpcC5uYW1lKTtcclxuICAgICAgICAgICAgaWYgKHJlZmVyZW5jZUNvdW50LS0gPCAwKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0b3BTb3VuZEJ5TmFtZShjbGlwLm5hbWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMucmVmZXJlbmNlTGlzdC5zZXQoY2xpcC5uYW1lLCByZWZlcmVuY2VDb3VudCA8IDAgPyAwIDogcmVmZXJlbmNlQ291bnQpO1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgIG9uRmluaXNoQ2FsbGJhY2sgJiYgb25GaW5pc2hDYWxsYmFjaygpO1xyXG4gICAgICAgICAgICB9LCAxMDApO1xyXG4gICAgICAgIH0pOztcclxuICAgIH1cclxuXHJcbiAgICAvKirlgZzmraLmiYDmnInor63pn7Pmkq3mlL4gKi9cclxuICAgIHB1YmxpYyBzdG9wQWxsQXVkaW8oKSB7XHJcbiAgICAgICAgdGhpcy5hdWRpb0xpc3QuZm9yRWFjaCgodmFsdWUsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMucmVmZXJlbmNlTGlzdC5zZXQoaW5kZXgsIDApO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8PSB2YWx1ZTsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5zdG9wKGkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5hdWRpb0xpc3QgPSBuZXcgTWFwKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoq5YGc5q2i5omA5pyJ6Z+z5pWI5pKt5pS+ICovXHJcbiAgICBwdWJsaWMgc3RvcEFsbEVmZmVjdCgpIHtcclxuICAgICAgICB0aGlzLmVmZmVjdExpc3QuZm9yRWFjaCgodmFsdWUsIGluZGV4LCBhcnIpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5yZWZlcmVuY2VMaXN0LnNldChpbmRleCwgMCk7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDw9IHZhbHVlOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnN0b3BFZmZlY3QoaSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLmVmZmVjdExpc3QgPSBuZXcgTWFwKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoq5YGc5q2i5omA5pyJ6K+t6Z+z5ZKM6Z+z5pWI55qE5pKt5pS+ICovXHJcbiAgICBwdWJsaWMgc3RvcEFsbCgpIHtcclxuICAgICAgICB0aGlzLnN0b3BBbGxBdWRpbygpO1xyXG4gICAgICAgIHRoaXMuc3RvcEFsbEVmZmVjdCgpO1xyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnN0b3BBbGwoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKirpgJrov4flkI3lrZflgZzmraLmkq3mlL7mjIflrprnmoTpn7PpopEgKi9cclxuICAgIHB1YmxpYyBzdG9wU291bmRCeU5hbWUoY2xpcE5hbWU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMucmVmZXJlbmNlTGlzdC5zZXQoY2xpcE5hbWUsIDApO1xyXG4gICAgICAgIGxldCBpZCA9IHRoaXMuYXVkaW9MaXN0LmdldChjbGlwTmFtZSk7XHJcbiAgICAgICAgaWYgKGlkICE9IG51bGwgJiYgaWQgIT0gLTEpIHtcclxuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUuc3RvcChpZCk7XHJcbiAgICAgICAgICAgIHRoaXMuYXVkaW9MaXN0LmRlbGV0ZShjbGlwTmFtZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlkID0gdGhpcy5lZmZlY3RMaXN0LmdldChjbGlwTmFtZSk7XHJcbiAgICAgICAgaWYgKGlkICE9IG51bGwgJiYgaWQgIT0gLTEpIHtcclxuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUuc3RvcChpZCk7XHJcbiAgICAgICAgICAgIHRoaXMuZWZmZWN0TGlzdC5kZWxldGUoY2xpcE5hbWUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKirmn5DkuKrpn7PmlYjmmK/lkKbmraPlnKjmkq3mlL4gKi9cclxuICAgIHB1YmxpYyBpc1BsYXlpbmcoY2xpcE5hbWU6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gICAgICAgIGxldCBpZCA9IHRoaXMuYXVkaW9MaXN0LmdldChjbGlwTmFtZSk7XHJcbiAgICAgICAgaWYgKGlkICE9IG51bGwgJiYgaWQgIT0gLTEpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlkID0gdGhpcy5lZmZlY3RMaXN0LmdldChjbGlwTmFtZSk7XHJcbiAgICAgICAgaWYgKGlkICE9IG51bGwgJiYgaWQgIT0gLTEpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbi8qKumfs+mikeeuoeeQhuexuyAqL1xyXG5leHBvcnQgY29uc3QgU291bmRNYW5hZ2VyID0gU291bmRNYW5hZ2VyQ2xhc3MuZ2V0SW5zdGFuY2UoKTtcclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Manager/NodeActionManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f67edGyoRtIL4ma/bUWccNk', 'NodeActionManager');
// Script/Manager/NodeActionManager.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NodeActionManager = void 0;
/**
 * 节点动画管理类
 * @param playNodeMoveAction 播放节点移动动画
 * @param playNodeScaleAction 播放节点缩放动画
 * @param stopNodeAction 停止节点正在播放动画
 */
var NodeActionManagerClass = /** @class */ (function () {
    function NodeActionManagerClass() {
        /**当前手指移动坐标数组 */
        this.curPosArr = [];
        /**移动时间数组 */
        this.moveTimeArr = [];
        /**节点大小 */
        this.nodeScale = 1;
    }
    NodeActionManagerClass.getInstance = function () {
        if (this.instance == null) {
            this.instance = new NodeActionManagerClass();
        }
        return this.instance;
    };
    /**
     * 停止节点正在播放动画
     * @param node 需要停止正在播放动画的节点
     */
    NodeActionManagerClass.prototype.stopNodeAction = function (node) {
        node.stopAllActions();
        this.curPosArr = [];
        this.moveTimeArr = [];
        node.scale = 0;
        node.opacity = 0;
    };
    /**
     * 播放节点移动动画
     * @param node 需要播放动画的节点
     * @param posArr 移动坐标数组，长度应大于等于2，且数组中第一个元素为节点起始位置
     * @param moveSpeed 移动速度，默认为500
     * @param loop 是否循环播放移动动画，默认循环
     * @param loopCount 不循环播放情况下，播放次数，默认为1
     * @param callback 播放完成回调，默认为null
     * @returns
     */
    NodeActionManagerClass.prototype.playNodeMoveAction = function (node, posArr, moveSpeed, loop, loopCount, callback) {
        var _this = this;
        if (moveSpeed === void 0) { moveSpeed = 500; }
        if (loop === void 0) { loop = true; }
        if (loopCount === void 0) { loopCount = 1; }
        if (callback === void 0) { callback = null; }
        if (posArr.length < 2) {
            cc.error("参数错误::cc.Vec2[]长度应大于等于2，且数组中第一个元素为手指起始位置");
            return;
        }
        node.stopAllActions();
        this.curPosArr = [];
        this.moveTimeArr = [];
        this.curPosArr = posArr;
        //获取每段距离移动所需时间
        this.curPosArr.forEach(function (value, index, arr) {
            if (index < arr.length - 1) {
                var distance = arr[index].sub(arr[index + 1]).mag();
                var time = distance / moveSpeed;
                _this.moveTimeArr.push(time);
            }
        });
        this.nodeMoveAction(node, 0, loop, loopCount, callback);
    };
    /**
     * 节点移动动画
     * @param node 需要播放动画的节点
     * @param index 播放第几段动画
     * @param loop 是否循环播放移动动画
     * @param loopCount 不循环播放情况下，播放次数
     * @param callback 播放完成回调，默认为null
     */
    NodeActionManagerClass.prototype.nodeMoveAction = function (node, index, loop, loopCount, callback) {
        var _this = this;
        if (this.curPosArr.length <= 2) {
            node.runAction(cc.sequence(cc.callFunc(function () {
                node.setPosition(_this.curPosArr[0]);
            }), cc.spawn(cc.scaleTo(0.2, this.nodeScale), cc.fadeIn(0.2)), cc.moveTo(this.moveTimeArr[index], this.curPosArr[index + 1]), cc.spawn(cc.scaleTo(0.2, 0), cc.fadeOut(0.2)), cc.callFunc(function () {
                if (loop) {
                    index = 0;
                    _this.nodeMoveAction(node, index, loop, loopCount, callback);
                }
                else {
                    loopCount -= 1;
                    if (loopCount <= 0) {
                        if (callback) {
                            callback();
                        }
                        return;
                    }
                    _this.nodeMoveAction(node, index, loop, loopCount, callback);
                }
            })));
        }
        else {
            if (index == 0) {
                node.runAction(cc.sequence(cc.callFunc(function () {
                    node.setPosition(_this.curPosArr[0]);
                }), cc.spawn(cc.scaleTo(0.2, this.nodeScale), cc.fadeIn(0.2)), cc.moveTo(this.moveTimeArr[index], this.curPosArr[index + 1]), cc.callFunc(function () {
                    index += 1;
                    _this.nodeMoveAction(node, index, loop, loopCount, callback);
                })));
            }
            else if (index == this.moveTimeArr.length - 1) {
                node.runAction(cc.sequence(cc.moveTo(this.moveTimeArr[index], this.curPosArr[index + 1]), cc.spawn(cc.scaleTo(0.2, 0), cc.fadeOut(0.2)), cc.callFunc(function () {
                    if (loop) {
                        index = 0;
                        _this.nodeMoveAction(node, index, loop, loopCount, callback);
                    }
                    else {
                        loopCount -= 1;
                        if (loopCount <= 0) {
                            if (callback) {
                                callback();
                            }
                            return;
                        }
                        _this.nodeMoveAction(node, index, loop, loopCount, callback);
                    }
                })));
            }
            else {
                node.runAction(cc.sequence(cc.moveTo(this.moveTimeArr[index], this.curPosArr[index + 1]), cc.callFunc(function () {
                    index += 1;
                    _this.nodeMoveAction(node, index, loop, loopCount, callback);
                })));
            }
        }
    };
    /**
     * 播放节点缩放动画
     * @param node 需要播放动画的节点
     * @param nodeMaxScale 节点缩放最大值
     * @param nodeMinScale 节点缩放最小值
     * @param pos 节点位置
     * @param loop 是否循环，默认循环
     * @param loopCount 不循环，循环次数，默认为1
     * @param callback 播放完成回调，默认为null
     */
    NodeActionManagerClass.prototype.playScaleAction = function (node, nodeMaxScale, nodeMinScale, pos, loop, loopCount, callback) {
        if (loop === void 0) { loop = true; }
        if (loopCount === void 0) { loopCount = 1; }
        if (callback === void 0) { callback = null; }
        node.stopAllActions();
        if (pos) {
            node.setPosition(pos);
        }
        node.opacity = 255;
        if (loop) {
            node.runAction(cc.repeatForever(cc.sequence(cc.scaleTo(0.3, nodeMaxScale), cc.scaleTo(0.3, nodeMinScale))));
        }
        else {
            node.runAction(cc.sequence(cc.repeat(cc.sequence(cc.scaleTo(0.3, nodeMaxScale), cc.scaleTo(0.3, nodeMinScale)), loopCount), cc.callFunc(function () {
                node.stopAllActions();
                callback();
            })));
        }
    };
    /**
     * 播放上下浮动动画
     * @param node
     * @param time
     * @param distance
     */
    NodeActionManagerClass.prototype.playNodeFloatAction = function (node, time, distance) {
        node.runAction(cc.repeatForever(cc.sequence(cc.moveTo(time, node.x, node.y + distance), cc.moveTo(time - 0.05, node.x, node.y - distance))));
    };
    /**果冻效果 */
    NodeActionManagerClass.prototype.JellyEffect = function (node, multiple, callback) {
        function generate_action(params) {
            var scale_action = cc.scaleTo(params.time, params.scale_x, params.scale_y);
            var fade_action = cc.fadeIn(params.time);
            return cc.spawn(scale_action, fade_action);
        }
        var spawn_action1 = generate_action({ time: 0.06, scale_x: 0.63 * multiple, scale_y: 1.3 * multiple, scale_z: 1 * multiple });
        var spawn_action2 = generate_action({ time: 0.12, scale_x: 1.1 * multiple, scale_y: 0.7 * multiple, scale_z: 1 * multiple });
        var spawn_action3 = generate_action({ time: 0.07, scale_x: 0.8 * multiple, scale_y: 1.1 * multiple, scale_z: 1 * multiple });
        var spawn_action4 = generate_action({ time: 0.07, scale_x: 1.1 * multiple, scale_: 0.95 * multiple, scale_z: 1 * multiple });
        var spawn_action5 = generate_action({ time: 0.07, scale_x: 1 * multiple, scale_y: 1 * multiple, scale_z: 1 * multiple });
        node.runAction(cc.sequence(spawn_action1, spawn_action2, spawn_action3, spawn_action4, spawn_action5, cc.callFunc(function () {
            callback();
        })));
    };
    NodeActionManagerClass.instance = null;
    return NodeActionManagerClass;
}());
exports.NodeActionManager = NodeActionManagerClass.getInstance();

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxNYW5hZ2VyXFxOb2RlQWN0aW9uTWFuYWdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7R0FLRztBQUNIO0lBQUE7UUFTSSxnQkFBZ0I7UUFDUixjQUFTLEdBQWMsRUFBRSxDQUFDO1FBRWxDLFlBQVk7UUFDSixnQkFBVyxHQUFhLEVBQUUsQ0FBQztRQUVuQyxVQUFVO1FBQ0YsY0FBUyxHQUFXLENBQUMsQ0FBQztJQXNQbEMsQ0FBQztJQXBRaUIsa0NBQVcsR0FBekI7UUFDSSxJQUFJLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxFQUFFO1lBQ3ZCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxzQkFBc0IsRUFBRSxDQUFDO1NBQ2hEO1FBQ0QsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3pCLENBQUM7SUFXRDs7O09BR0c7SUFDSSwrQ0FBYyxHQUFyQixVQUFzQixJQUFhO1FBQy9CLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN0QixJQUFJLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztRQUNwQixJQUFJLENBQUMsV0FBVyxHQUFHLEVBQUUsQ0FBQztRQUN0QixJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztRQUNmLElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDO0lBQ3JCLENBQUM7SUFFRDs7Ozs7Ozs7O09BU0c7SUFDSSxtREFBa0IsR0FBekIsVUFDSSxJQUFhLEVBQUUsTUFBaUIsRUFDaEMsU0FBdUIsRUFDdkIsSUFBb0IsRUFDcEIsU0FBcUIsRUFDckIsUUFBeUI7UUFMN0IsaUJBd0JDO1FBdEJHLDBCQUFBLEVBQUEsZUFBdUI7UUFDdkIscUJBQUEsRUFBQSxXQUFvQjtRQUNwQiwwQkFBQSxFQUFBLGFBQXFCO1FBQ3JCLHlCQUFBLEVBQUEsZUFBeUI7UUFFekIsSUFBSSxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtZQUNuQixFQUFF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QUFPLEVBQUUsQ0FBQyxHQUFHLFFBQVEsRUFBRSxDQUFDLENBQUM7UUFDN0gsSUFBSSxhQUFhLEdBQUcsZUFBZSxDQUFDLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsQ0FBQyxHQUFHLFFBQVEsRUFBRSxPQUFPLEVBQUUsQ0FBQyxHQUFHLFFBQVEsRUFBRSxPQUFPLEVBQUUsQ0FBQyxHQUFHLFFBQVEsRUFBRSxDQUFDLENBQUM7UUFDekgsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUN0QixhQUFhLEVBQ2IsYUFBYSxFQUNiLGFBQWEsRUFDYixhQUFhLEVBQ2IsYUFBYSxFQUNiLEVBQUUsQ0FBQyxRQUFRLENBQUM7WUFDUixRQUFRLEVBQUUsQ0FBQztRQUNmLENBQUMsQ0FBQyxDQUNMLENBQUMsQ0FBQztJQUNQLENBQUM7SUFwUWEsK0JBQVEsR0FBMkIsSUFBSSxDQUFDO0lBcVExRCw2QkFBQztDQXRRRCxBQXNRQyxJQUFBO0FBQ1ksUUFBQSxpQkFBaUIsR0FBRyxzQkFBc0IsQ0FBQyxXQUFXLEVBQUUsQ0FBQyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiDoioLngrnliqjnlLvnrqHnkIbnsbtcclxuICogQHBhcmFtIHBsYXlOb2RlTW92ZUFjdGlvbiDmkq3mlL7oioLngrnnp7vliqjliqjnlLtcclxuICogQHBhcmFtIHBsYXlOb2RlU2NhbGVBY3Rpb24g5pKt5pS+6IqC54K557yp5pS+5Yqo55S7XHJcbiAqIEBwYXJhbSBzdG9wTm9kZUFjdGlvbiDlgZzmraLoioLngrnmraPlnKjmkq3mlL7liqjnlLtcclxuICovXHJcbmNsYXNzIE5vZGVBY3Rpb25NYW5hZ2VyQ2xhc3Mge1xyXG4gICAgcHVibGljIHN0YXRpYyBpbnN0YW5jZTogTm9kZUFjdGlvbk1hbmFnZXJDbGFzcyA9IG51bGw7XHJcbiAgICBwdWJsaWMgc3RhdGljIGdldEluc3RhbmNlKCk6IE5vZGVBY3Rpb25NYW5hZ2VyQ2xhc3Mge1xyXG4gICAgICAgIGlmICh0aGlzLmluc3RhbmNlID09IG51bGwpIHtcclxuICAgICAgICAgICAgdGhpcy5pbnN0YW5jZSA9IG5ldyBOb2RlQWN0aW9uTWFuYWdlckNsYXNzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLmluc3RhbmNlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKuW9k+WJjeaJi+aMh+enu+WKqOWdkOagh+aVsOe7hCAqL1xyXG4gICAgcHJpdmF0ZSBjdXJQb3NBcnI6IGNjLlZlYzJbXSA9IFtdO1xyXG5cclxuICAgIC8qKuenu+WKqOaXtumXtOaVsOe7hCAqL1xyXG4gICAgcHJpdmF0ZSBtb3ZlVGltZUFycjogbnVtYmVyW10gPSBbXTtcclxuXHJcbiAgICAvKiroioLngrnlpKflsI8gKi9cclxuICAgIHByaXZhdGUgbm9kZVNjYWxlOiBudW1iZXIgPSAxO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICog5YGc5q2i6IqC54K55q2j5Zyo5pKt5pS+5Yqo55S7IFxyXG4gICAgICogQHBhcmFtIG5vZGUg6ZyA6KaB5YGc5q2i5q2j5Zyo5pKt5pS+5Yqo55S755qE6IqC54K5XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdG9wTm9kZUFjdGlvbihub2RlOiBjYy5Ob2RlKSB7XHJcbiAgICAgICAgbm9kZS5zdG9wQWxsQWN0aW9ucygpO1xyXG4gICAgICAgIHRoaXMuY3VyUG9zQXJyID0gW107XHJcbiAgICAgICAgdGhpcy5tb3ZlVGltZUFyciA9IFtdO1xyXG4gICAgICAgIG5vZGUuc2NhbGUgPSAwO1xyXG4gICAgICAgIG5vZGUub3BhY2l0eSA9IDA7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmkq3mlL7oioLngrnnp7vliqjliqjnlLtcclxuICAgICAqIEBwYXJhbSBub2RlIOmcgOimgeaSreaUvuWKqOeUu+eahOiKgueCuVxyXG4gICAgICogQHBhcmFtIHBvc0FyciDnp7vliqjlnZDmoIfmlbDnu4TvvIzplb/luqblupTlpKfkuo7nrYnkuo4y77yM5LiU5pWw57uE5Lit56ys5LiA5Liq5YWD57Sg5Li66IqC54K56LW35aeL5L2N572uXHJcbiAgICAgKiBAcGFyYW0gbW92ZVNwZWVkIOenu+WKqOmAn+W6pu+8jOm7mOiupOS4ujUwMFxyXG4gICAgICogQHBhcmFtIGxvb3Ag5piv5ZCm5b6q546v5pKt5pS+56e75Yqo5Yqo55S777yM6buY6K6k5b6q546vXHJcbiAgICAgKiBAcGFyYW0gbG9vcENvdW50IOS4jeW+queOr+aSreaUvuaDheWGteS4i++8jOaSreaUvuasoeaVsO+8jOm7mOiupOS4ujFcclxuICAgICAqIEBwYXJhbSBjYWxsYmFjayDmkq3mlL7lrozmiJDlm57osIPvvIzpu5jorqTkuLpudWxsXHJcbiAgICAgKiBAcmV0dXJucyBcclxuICAgICAqL1xyXG4gICAgcHVibGljIHBsYXlOb2RlTW92ZUFjdGlvbihcclxuICAgICAgICBub2RlOiBjYy5Ob2RlLCBwb3NBcnI6IGNjLlZlYzJbXSxcclxuICAgICAgICBtb3ZlU3BlZWQ6IG51bWJlciA9IDUwMCxcclxuICAgICAgICBsb29wOiBib29sZWFuID0gdHJ1ZSxcclxuICAgICAgICBsb29wQ291bnQ6IG51bWJlciA9IDEsXHJcbiAgICAgICAgY2FsbGJhY2s6IEZ1bmN0aW9uID0gbnVsbCxcclxuICAgICkge1xyXG4gICAgICAgIGlmIChwb3NBcnIubGVuZ3RoIDwgMikge1xyXG4gICAgICAgICAgICBjYy5lcnJvcihcIuWPguaVsOmUmeivrzo6Y2MuVmVjMltd6ZW/5bqm5bqU5aSn5LqO562J5LqOMu+8jOS4lOaVsOe7hOS4reesrOS4gOS4quWFg+e0oOS4uuaJi+aMh+i1t+Wni+S9jee9rlwiKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBub2RlLnN0b3BBbGxBY3Rpb25zKCk7XHJcbiAgICAgICAgdGhpcy5jdXJQb3NBcnIgPSBbXTtcclxuICAgICAgICB0aGlzLm1vdmVUaW1lQXJyID0gW107XHJcbiAgICAgICAgdGhpcy5jdXJQb3NBcnIgPSBwb3NBcnI7XHJcbiAgICAgICAgLy/ojrflj5bmr4/mrrXot53nprvnp7vliqjmiYDpnIDml7bpl7RcclxuICAgICAgICB0aGlzLmN1clBvc0Fyci5mb3JFYWNoKCh2YWx1ZSwgaW5kZXgsIGFycikgPT4ge1xyXG4gICAgICAgICAgICBpZiAoaW5kZXggPCBhcnIubGVuZ3RoIC0gMSkge1xyXG4gICAgICAgICAgICAgICAgbGV0IGRpc3RhbmNlID0gYXJyW2luZGV4XS5zdWIoYXJyW2luZGV4ICsgMV0pLm1hZygpO1xyXG4gICAgICAgICAgICAgICAgbGV0IHRpbWUgPSBkaXN0YW5jZSAvIG1vdmVTcGVlZDtcclxuICAgICAgICAgICAgICAgIHRoaXMubW92ZVRpbWVBcnIucHVzaCh0aW1lKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMubm9kZU1vdmVBY3Rpb24obm9kZSwgMCwgbG9vcCwgbG9vcENvdW50LCBjYWxsYmFjayk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDoioLngrnnp7vliqjliqjnlLtcclxuICAgICAqIEBwYXJhbSBub2RlIOmcgOimgeaSreaUvuWKqOeUu+eahOiKgueCuVxyXG4gICAgICogQHBhcmFtIGluZGV4IOaSreaUvuesrOWHoOauteWKqOeUu1xyXG4gICAgICogQHBhcmFtIGxvb3Ag5piv5ZCm5b6q546v5pKt5pS+56e75Yqo5Yqo55S7XHJcbiAgICAgKiBAcGFyYW0gbG9vcENvdW50IOS4jeW+queOr+aSreaUvuaDheWGteS4i++8jOaSreaUvuasoeaVsFxyXG4gICAgICogQHBhcmFtIGNhbGxiYWNrIOaSreaUvuWujOaIkOWbnuiwg++8jOm7mOiupOS4um51bGxcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBub2RlTW92ZUFjdGlvbihub2RlOiBjYy5Ob2RlLCBpbmRleDogbnVtYmVyLCBsb29wOiBib29sZWFuLCBsb29wQ291bnQ6IG51bWJlciwgY2FsbGJhY2s6IEZ1bmN0aW9uKSB7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmN1clBvc0Fyci5sZW5ndGggPD0gMikge1xyXG4gICAgICAgICAgICBub2RlLnJ1bkFjdGlvbihcclxuICAgICAgICAgICAgICAgIGNjLnNlcXVlbmNlKFxyXG4gICAgICAgICAgICAgICAgICAgIGNjLmNhbGxGdW5jKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS5zZXRQb3NpdGlvbih0aGlzLmN1clBvc0FyclswXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgICAgICAgICAgY2Muc3Bhd24oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNjLnNjYWxlVG8oMC4yLCB0aGlzLm5vZGVTY2FsZSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNjLmZhZGVJbigwLjIpXHJcbiAgICAgICAgICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgICAgICAgICBjYy5tb3ZlVG8odGhpcy5tb3ZlVGltZUFycltpbmRleF0sIHRoaXMuY3VyUG9zQXJyW2luZGV4ICsgMV0pLFxyXG4gICAgICAgICAgICAgICAgICAgIGNjLnNwYXduKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYy5zY2FsZVRvKDAuMiwgMCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNjLmZhZGVPdXQoMC4yKVxyXG4gICAgICAgICAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgICAgICAgICAgY2MuY2FsbEZ1bmMoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobG9vcCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXggPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlTW92ZUFjdGlvbihub2RlLCBpbmRleCwgbG9vcCwgbG9vcENvdW50LCBjYWxsYmFjayk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb29wQ291bnQgLT0gMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChsb29wQ291bnQgPD0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjYWxsYmFjaykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjaygpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGVNb3ZlQWN0aW9uKG5vZGUsIGluZGV4LCBsb29wLCBsb29wQ291bnQsIGNhbGxiYWNrKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGlmIChpbmRleCA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICBub2RlLnJ1bkFjdGlvbihcclxuICAgICAgICAgICAgICAgICAgICBjYy5zZXF1ZW5jZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2MuY2FsbEZ1bmMoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS5zZXRQb3NpdGlvbih0aGlzLmN1clBvc0FyclswXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYy5zcGF3bihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNjLnNjYWxlVG8oMC4yLCB0aGlzLm5vZGVTY2FsZSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYy5mYWRlSW4oMC4yKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICApLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYy5tb3ZlVG8odGhpcy5tb3ZlVGltZUFycltpbmRleF0sIHRoaXMuY3VyUG9zQXJyW2luZGV4ICsgMV0pLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYy5jYWxsRnVuYygoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmRleCArPSAxO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlTW92ZUFjdGlvbihub2RlLCBpbmRleCwgbG9vcCwgbG9vcENvdW50LCBjYWxsYmFjayk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoaW5kZXggPT0gdGhpcy5tb3ZlVGltZUFyci5sZW5ndGggLSAxKSB7XHJcbiAgICAgICAgICAgICAgICBub2RlLnJ1bkFjdGlvbihcclxuICAgICAgICAgICAgICAgICAgICBjYy5zZXF1ZW5jZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2MubW92ZVRvKHRoaXMubW92ZVRpbWVBcnJbaW5kZXhdLCB0aGlzLmN1clBvc0FycltpbmRleCArIDFdKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2Muc3Bhd24oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYy5zY2FsZVRvKDAuMiwgMCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYy5mYWRlT3V0KDAuMilcclxuICAgICAgICAgICAgICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2MuY2FsbEZ1bmMoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGxvb3ApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmRleCA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlTW92ZUFjdGlvbihub2RlLCBpbmRleCwgbG9vcCwgbG9vcENvdW50LCBjYWxsYmFjayk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb29wQ291bnQgLT0gMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobG9vcENvdW50IDw9IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjaygpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlTW92ZUFjdGlvbihub2RlLCBpbmRleCwgbG9vcCwgbG9vcENvdW50LCBjYWxsYmFjayk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBub2RlLnJ1bkFjdGlvbihcclxuICAgICAgICAgICAgICAgICAgICBjYy5zZXF1ZW5jZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2MubW92ZVRvKHRoaXMubW92ZVRpbWVBcnJbaW5kZXhdLCB0aGlzLmN1clBvc0FycltpbmRleCArIDFdKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2MuY2FsbEZ1bmMoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXggKz0gMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZU1vdmVBY3Rpb24obm9kZSwgaW5kZXgsIGxvb3AsIGxvb3BDb3VudCwgY2FsbGJhY2spO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmkq3mlL7oioLngrnnvKnmlL7liqjnlLtcclxuICAgICAqIEBwYXJhbSBub2RlIOmcgOimgeaSreaUvuWKqOeUu+eahOiKgueCuVxyXG4gICAgICogQHBhcmFtIG5vZGVNYXhTY2FsZSDoioLngrnnvKnmlL7mnIDlpKflgLxcclxuICAgICAqIEBwYXJhbSBub2RlTWluU2NhbGUg6IqC54K557yp5pS+5pyA5bCP5YC8XHJcbiAgICAgKiBAcGFyYW0gcG9zIOiKgueCueS9jee9rlxyXG4gICAgICogQHBhcmFtIGxvb3Ag5piv5ZCm5b6q546v77yM6buY6K6k5b6q546vXHJcbiAgICAgKiBAcGFyYW0gbG9vcENvdW50IOS4jeW+queOr++8jOW+queOr+asoeaVsO+8jOm7mOiupOS4ujFcclxuICAgICAqIEBwYXJhbSBjYWxsYmFjayDmkq3mlL7lrozmiJDlm57osIPvvIzpu5jorqTkuLpudWxsXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBwbGF5U2NhbGVBY3Rpb24oXHJcbiAgICAgICAgbm9kZTogY2MuTm9kZSxcclxuICAgICAgICBub2RlTWF4U2NhbGU6IG51bWJlcixcclxuICAgICAgICBub2RlTWluU2NhbGU6IG51bWJlcixcclxuICAgICAgICBwb3M/OiBjYy5WZWMzIHwgY2MuVmVjMixcclxuICAgICAgICBsb29wOiBib29sZWFuID0gdHJ1ZSxcclxuICAgICAgICBsb29wQ291bnQ6IG51bWJlciA9IDEsXHJcbiAgICAgICAgY2FsbGJhY2s6IEZ1bmN0aW9uID0gbnVsbFxyXG4gICAgKSB7XHJcbiAgICAgICAgbm9kZS5zdG9wQWxsQWN0aW9ucygpO1xyXG4gICAgICAgIGlmIChwb3MpIHtcclxuICAgICAgICAgICAgbm9kZS5zZXRQb3NpdGlvbihwb3MpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBub2RlLm9wYWNpdHkgPSAyNTU7XHJcbiAgICAgICAgaWYgKGxvb3ApIHtcclxuICAgICAgICAgICAgbm9kZS5ydW5BY3Rpb24oXHJcbiAgICAgICAgICAgICAgICBjYy5yZXBlYXRGb3JldmVyKFxyXG4gICAgICAgICAgICAgICAgICAgIGNjLnNlcXVlbmNlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYy5zY2FsZVRvKDAuMywgbm9kZU1heFNjYWxlKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2Muc2NhbGVUbygwLjMsIG5vZGVNaW5TY2FsZSlcclxuICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbm9kZS5ydW5BY3Rpb24oXHJcbiAgICAgICAgICAgICAgICBjYy5zZXF1ZW5jZShcclxuICAgICAgICAgICAgICAgICAgICBjYy5yZXBlYXQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNjLnNlcXVlbmNlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2Muc2NhbGVUbygwLjMsIG5vZGVNYXhTY2FsZSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYy5zY2FsZVRvKDAuMywgbm9kZU1pblNjYWxlKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICwgbG9vcENvdW50KSxcclxuICAgICAgICAgICAgICAgICAgICBjYy5jYWxsRnVuYygoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUuc3RvcEFsbEFjdGlvbnMoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2soKTtcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOaSreaUvuS4iuS4i+a1ruWKqOWKqOeUu1xyXG4gICAgICogQHBhcmFtIG5vZGVcclxuICAgICAqIEBwYXJhbSB0aW1lIFxyXG4gICAgICogQHBhcmFtIGRpc3RhbmNlIFxyXG4gICAgICovXHJcbiAgICBwbGF5Tm9kZUZsb2F0QWN0aW9uKG5vZGU6IGNjLk5vZGUsIHRpbWU6IG51bWJlciwgZGlzdGFuY2U6IG51bWJlcikge1xyXG4gICAgICAgIG5vZGUucnVuQWN0aW9uKFxyXG4gICAgICAgICAgICBjYy5yZXBlYXRGb3JldmVyKFxyXG4gICAgICAgICAgICAgICAgY2Muc2VxdWVuY2UoXHJcbiAgICAgICAgICAgICAgICAgICAgY2MubW92ZVRvKHRpbWUsIG5vZGUueCwgbm9kZS55ICsgZGlzdGFuY2UpLFxyXG4gICAgICAgICAgICAgICAgICAgIGNjLm1vdmVUbyh0aW1lIC0gMC4wNSwgbm9kZS54LCBub2RlLnkgLSBkaXN0YW5jZSksXHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKirmnpzlhrvmlYjmnpwgKi9cclxuICAgIEplbGx5RWZmZWN0KG5vZGU6IGNjLk5vZGUsIG11bHRpcGxlOiBudW1iZXIsIGNhbGxiYWNrPzogRnVuY3Rpb24pIHtcclxuICAgICAgICBmdW5jdGlvbiBnZW5lcmF0ZV9hY3Rpb24ocGFyYW1zKSB7XHJcbiAgICAgICAgICAgIHZhciBzY2FsZV9hY3Rpb24gPSBjYy5zY2FsZVRvKHBhcmFtcy50aW1lLCBwYXJhbXMuc2NhbGVfeCwgcGFyYW1zLnNjYWxlX3kpO1xyXG4gICAgICAgICAgICB2YXIgZmFkZV9hY3Rpb24gPSBjYy5mYWRlSW4ocGFyYW1zLnRpbWUpO1xyXG4gICAgICAgICAgICByZXR1cm4gY2Muc3Bhd24oc2NhbGVfYWN0aW9uLCBmYWRlX2FjdGlvbik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2YXIgc3Bhd25fYWN0aW9uMSA9IGdlbmVyYXRlX2FjdGlvbih7IHRpbWU6IDAuMDYsIHNjYWxlX3g6IDAuNjMgKiBtdWx0aXBsZSwgc2NhbGVfeTogMS4zICogbXVsdGlwbGUsIHNjYWxlX3o6IDEgKiBtdWx0aXBsZSB9KTtcclxuICAgICAgICB2YXIgc3Bhd25fYWN0aW9uMiA9IGdlbmVyYXRlX2FjdGlvbih7IHRpbWU6IDAuMTIsIHNjYWxlX3g6IDEuMSAqIG11bHRpcGxlLCBzY2FsZV95OiAwLjcgKiBtdWx0aXBsZSwgc2NhbGVfejogMSAqIG11bHRpcGxlIH0pO1xyXG4gICAgICAgIHZhciBzcGF3bl9hY3Rpb24zID0gZ2VuZXJhdGVfYWN0aW9uKHsgdGltZTogMC4wNywgc2NhbGVfeDogMC44ICogbXVsdGlwbGUsIHNjYWxlX3k6IDEuMSAqIG11bHRpcGxlLCBzY2FsZV96OiAxICogbXVsdGlwbGUgfSk7XHJcbiAgICAgICAgdmFyIHNwYXduX2FjdGlvbjQgPSBnZW5lcmF0ZV9hY3Rpb24oeyB0aW1lOiAwLjA3LCBzY2FsZV94OiAxLjEgKiBtdWx0aXBsZSwgc2NhbGVfOiAwLjk1ICogbXVsdGlwbGUsIHNjYWxlX3o6IDEgKiBtdWx0aXBsZSB9KTtcclxuICAgICAgICB2YXIgc3Bhd25fYWN0aW9uNSA9IGdlbmVyYXRlX2FjdGlvbih7IHRpbWU6IDAuMDcsIHNjYWxlX3g6IDEgKiBtdWx0aXBsZSwgc2NhbGVfeTogMSAqIG11bHRpcGxlLCBzY2FsZV96OiAxICogbXVsdGlwbGUgfSk7XHJcbiAgICAgICAgbm9kZS5ydW5BY3Rpb24oY2Muc2VxdWVuY2UoXHJcbiAgICAgICAgICAgIHNwYXduX2FjdGlvbjEsXHJcbiAgICAgICAgICAgIHNwYXduX2FjdGlvbjIsXHJcbiAgICAgICAgICAgIHNwYXduX2FjdGlvbjMsXHJcbiAgICAgICAgICAgIHNwYXduX2FjdGlvbjQsXHJcbiAgICAgICAgICAgIHNwYXduX2FjdGlvbjUsXHJcbiAgICAgICAgICAgIGNjLmNhbGxGdW5jKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGNhbGxiYWNrKCk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgKSk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGNvbnN0IE5vZGVBY3Rpb25NYW5hZ2VyID0gTm9kZUFjdGlvbk1hbmFnZXJDbGFzcy5nZXRJbnN0YW5jZSgpO1xyXG4iXX0=
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Main/super_html_playable.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '8a87avQYpBADpGRY0A9IbuL', 'super_html_playable');
// Script/Main/super_html_playable.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.super_html_playable = void 0;
/**
 * super-html playable adapter
 * @help https://store.cocos.com/app/detail/3657
 * @home https://github.com/magician-f/cocos-playable-demo
 * @author https://github.com/magician-f
 */
var super_html_playable = /** @class */ (function () {
    function super_html_playable() {
    }
    super_html_playable.prototype.download = function () {
        //@ts-ignore
        window.super_html && super_html.download();
    };
    super_html_playable.prototype.game_end = function () {
        //@ts-ignore
        window.super_html && super_html.game_end();
    };
    /**
     * 是否隐藏下载按钮，意味着使用平台注入的下载按钮
     * channel : google
     */
    super_html_playable.prototype.is_hide_download = function () {
        //@ts-ignore
        if (window.super_html && super_html.is_hide_download) {
            //@ts-ignore
            return super_html.is_hide_download();
        }
        return false;
    };
    /**
     * 设置商店地址
     * channel : unity
     * @param url https://play.google.com/store/apps/details?id=com.unity3d.auicreativetestapp
     */
    super_html_playable.prototype.set_google_play_url = function (url) {
        //@ts-ignore
        window.super_html && (super_html.google_play_url = url);
    };
    /**
     * 设置商店地址
     * channel : unity
     * @param url https://apps.apple.com/us/app/ad-testing/id1463016906
     */
    super_html_playable.prototype.set_app_store_url = function (url) {
        //@ts-ignore
        window.super_html && (super_html.appstore_url = url);
    };
    return super_html_playable;
}());
exports.super_html_playable = super_html_playable;
exports.default = new super_html_playable();

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxNYWluXFxzdXBlcl9odG1sX3BsYXlhYmxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7OztHQUtHO0FBQ0g7SUFBQTtJQTJDQSxDQUFDO0lBMUNHLHNDQUFRLEdBQVI7UUFDSSxZQUFZO1FBQ1osTUFBTSxDQUFDLFVBQVUsSUFBSSxVQUFVLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDL0MsQ0FBQztJQUVELHNDQUFRLEdBQVI7UUFDSSxZQUFZO1FBQ1osTUFBTSxDQUFDLFVBQVUsSUFBSSxVQUFVLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDL0MsQ0FBQztJQUVEOzs7T0FHRztJQUNILDhDQUFnQixHQUFoQjtRQUNJLFlBQVk7UUFDWixJQUFJLE1BQU0sQ0FBQyxVQUFVLElBQUksVUFBVSxDQUFDLGdCQUFnQixFQUFFO1lBQ2xELFlBQVk7WUFDWixPQUFPLFVBQVUsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1NBQ3hDO1FBQ0QsT0FBTyxLQUFLLENBQUM7SUFDakIsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxpREFBbUIsR0FBbkIsVUFBb0IsR0FBVztRQUMzQixZQUFZO1FBQ1osTUFBTSxDQUFDLFVBQVUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxlQUFlLEdBQUcsR0FBRyxDQUFDLENBQUM7SUFDNUQsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCwrQ0FBaUIsR0FBakIsVUFBa0IsR0FBVztRQUN6QixZQUFZO1FBQ1osTUFBTSxDQUFDLFVBQVUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxZQUFZLEdBQUcsR0FBRyxDQUFDLENBQUM7SUFDekQsQ0FBQztJQUNMLDBCQUFDO0FBQUQsQ0EzQ0EsQUEyQ0MsSUFBQTtBQTNDWSxrREFBbUI7QUE0Q2hDLGtCQUFlLElBQUksbUJBQW1CLEVBQUUsQ0FBQyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBzdXBlci1odG1sIHBsYXlhYmxlIGFkYXB0ZXJcclxuICogQGhlbHAgaHR0cHM6Ly9zdG9yZS5jb2Nvcy5jb20vYXBwL2RldGFpbC8zNjU3XHJcbiAqIEBob21lIGh0dHBzOi8vZ2l0aHViLmNvbS9tYWdpY2lhbi1mL2NvY29zLXBsYXlhYmxlLWRlbW9cclxuICogQGF1dGhvciBodHRwczovL2dpdGh1Yi5jb20vbWFnaWNpYW4tZlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIHN1cGVyX2h0bWxfcGxheWFibGUge1xyXG4gICAgZG93bmxvYWQoKSB7ICAgICAgICBcclxuICAgICAgICAvL0B0cy1pZ25vcmVcclxuICAgICAgICB3aW5kb3cuc3VwZXJfaHRtbCAmJiBzdXBlcl9odG1sLmRvd25sb2FkKCk7ICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBnYW1lX2VuZCgpIHsgICAgICAgIFxyXG4gICAgICAgIC8vQHRzLWlnbm9yZVxyXG4gICAgICAgIHdpbmRvdy5zdXBlcl9odG1sICYmIHN1cGVyX2h0bWwuZ2FtZV9lbmQoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOaYr+WQpumakOiXj+S4i+i9veaMiemSru+8jOaEj+WRs+edgOS9v+eUqOW5s+WPsOazqOWFpeeahOS4i+i9veaMiemSrlxyXG4gICAgICogY2hhbm5lbCA6IGdvb2dsZVxyXG4gICAgICovXHJcbiAgICBpc19oaWRlX2Rvd25sb2FkKCkge1xyXG4gICAgICAgIC8vQHRzLWlnbm9yZVxyXG4gICAgICAgIGlmICh3aW5kb3cuc3VwZXJfaHRtbCAmJiBzdXBlcl9odG1sLmlzX2hpZGVfZG93bmxvYWQpIHtcclxuICAgICAgICAgICAgLy9AdHMtaWdub3JlXHJcbiAgICAgICAgICAgIHJldHVybiBzdXBlcl9odG1sLmlzX2hpZGVfZG93bmxvYWQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6K6+572u5ZWG5bqX5Zyw5Z2AXHJcbiAgICAgKiBjaGFubmVsIDogdW5pdHlcclxuICAgICAqIEBwYXJhbSB1cmwgaHR0cHM6Ly9wbGF5Lmdvb2dsZS5jb20vc3RvcmUvYXBwcy9kZXRhaWxzP2lkPWNvbS51bml0eTNkLmF1aWNyZWF0aXZldGVzdGFwcFxyXG4gICAgICovXHJcbiAgICBzZXRfZ29vZ2xlX3BsYXlfdXJsKHVybDogc3RyaW5nKSB7XHJcbiAgICAgICAgLy9AdHMtaWdub3JlXHJcbiAgICAgICAgd2luZG93LnN1cGVyX2h0bWwgJiYgKHN1cGVyX2h0bWwuZ29vZ2xlX3BsYXlfdXJsID0gdXJsKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOiuvue9ruWVhuW6l+WcsOWdgFxyXG4gICAgICogY2hhbm5lbCA6IHVuaXR5XHJcbiAgICAgKiBAcGFyYW0gdXJsIGh0dHBzOi8vYXBwcy5hcHBsZS5jb20vdXMvYXBwL2FkLXRlc3RpbmcvaWQxNDYzMDE2OTA2XHJcbiAgICAgKi9cclxuICAgIHNldF9hcHBfc3RvcmVfdXJsKHVybDogc3RyaW5nKSB7XHJcbiAgICAgICAgLy9AdHMtaWdub3JlXHJcbiAgICAgICAgd2luZG93LnN1cGVyX2h0bWwgJiYgKHN1cGVyX2h0bWwuYXBwc3RvcmVfdXJsID0gdXJsKTtcclxuICAgIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBuZXcgc3VwZXJfaHRtbF9wbGF5YWJsZSgpO1xyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Manager/GameManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd44f4GU9OBA/7vI07QIHWhp', 'GameManager');
// Script/Manager/GameManager.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameManager = void 0;
var GameManagerClass = /** @class */ (function () {
    function GameManagerClass() {
        /**
         * 0 - 竖屏
         * 1 - 横屏
         */
        this.screenMode = 0;
        /**玩家拥有钱的数量 */
        this.moneyNum = 0;
        /**病人数量 */
        this.roleNum = 0;
        /**重玩次数 */
        this.retryNum = 0;
        this.canTouch = true;
        /**是否开启多语言 */
        this.isMultilingual = false;
        /**当前语言 */
        this.curLanguage = "en";
        /**是否已经跳转商店 */
        this.isJumpShop = false;
        /**是否首次点击 */
        this.firstClick = false;
        /**是否静音 */
        this.isMute = false;
        this.canPlayAudio = false;
        /**bingo次数 */
        this.bingoNum = 0;
        /**叶子颜色 */
        this.leafColor = [cc.color(255, 60, 157, 255), cc.color(9, 160, 2, 255), cc.color(72, 82, 240, 255), cc.color(254, 79, 21, 255)];
        /**当前数字 */
        this.curNum = -1;
        this.cardNumArr = [
            [11, 6, 3, 15, 4],
            [27, 2, 28, 99, 27],
            [7, 40, 0, 4, 40],
            [0, 0, 0, 0, 8],
            [6, 75, 23, 9, 75]
            // [11, 27, 7, 22, 6],
            // [6, 2, 40,  8, 75],
            // [3, 28, 0, 3, 23],
            // [15, 99, 4, 56, 9],
            // [4, 27 , 40,8, 75]
        ];
        // [
        //     [13, 9, 0, 8, 3],
        //     [16, 0, 13, 23, 29],
        //     [0, 0, 0, 40, 35],
        //     [51, 0, 0, 47, 0],
        //     [0, 0, 70, 0, 62]
        // ],
        // [
        //     [0, 0, 3, 0, 9],
        //     [29, 18, 27, 17, 19],
        //     [0, 0, 0, 41, 35],
        //     [0, 0, 0, 47, 49],
        //     [0, 0, 73, 0, 68]
        // ],
        // [
        //     [9, 0, 2, 11, 14],
        //     [0, 0, 21, 19, 0],
        //     [0, 0, 0, 35, 0],
        //     [59, 47, 0, 0, 50],
        //     [0, 0, 70, 0, 0]
        // ],
        // [
        //     [0, 9, 12, 0, 6],
        //     [25, 0, 19, 29, 0],
        //     [0, 0, 0, 35, 0],
        //     [0, 0, 0, 59, 53],
        //     [70, 0, 0, 0, 0]
        // ],
        // [
        //     [14, 7, 9, 0, 0],
        //     [0, 29, 0, 0, 0],
        //     [38, 43, 0, 32, 35],
        //     [59, 48, 51, 0, 0],
        //     [0, 66, 62, 74, 0]
        // ]
    }
    GameManagerClass.getInstance = function () {
        if (null === this._instance) {
            this._instance = new GameManagerClass();
        }
        return this._instance;
    };
    GameManagerClass._instance = null;
    /**bingo次数 */
    GameManagerClass.bingoNum = 0;
    return GameManagerClass;
}());
exports.GameManager = GameManagerClass.getInstance();

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxNYW5hZ2VyXFxHYW1lTWFuYWdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtJQUFBO1FBWUk7OztXQUdHO1FBQ0ksZUFBVSxHQUFXLENBQUMsQ0FBQztRQUM5QixjQUFjO1FBQ1AsYUFBUSxHQUFXLENBQUMsQ0FBQztRQUM1QixVQUFVO1FBQ0gsWUFBTyxHQUFXLENBQUMsQ0FBQztRQUMzQixVQUFVO1FBQ0gsYUFBUSxHQUFXLENBQUMsQ0FBQztRQUVyQixhQUFRLEdBQVksSUFBSSxDQUFDO1FBRWhDLGFBQWE7UUFDTixtQkFBYyxHQUFZLEtBQUssQ0FBQztRQUN2QyxVQUFVO1FBQ0gsZ0JBQVcsR0FBVyxJQUFJLENBQUM7UUFDbEMsY0FBYztRQUNQLGVBQVUsR0FBWSxLQUFLLENBQUM7UUFDbkMsWUFBWTtRQUNMLGVBQVUsR0FBWSxLQUFLLENBQUM7UUFFbkMsVUFBVTtRQUNILFdBQU0sR0FBWSxLQUFLLENBQUM7UUFFeEIsaUJBQVksR0FBWSxLQUFLLENBQUM7UUFFckMsYUFBYTtRQUNOLGFBQVEsR0FBVyxDQUFDLENBQUM7UUFFNUIsVUFBVTtRQUNILGNBQVMsR0FBZSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxHQUFHLENBQUMsRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUUvSSxVQUFVO1FBQ0gsV0FBTSxHQUFXLENBQUMsQ0FBQyxDQUFDO1FBR3BCLGVBQVUsR0FFVDtZQUNJLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztZQUNqQixDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFHLEVBQUUsRUFBRSxFQUFFLENBQUM7WUFDcEIsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO1lBQ2pCLENBQUMsQ0FBQyxFQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUNkLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRyxFQUFFLEVBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQztZQUNsQixzQkFBc0I7WUFDdEIsc0JBQXNCO1lBQ3RCLHFCQUFxQjtZQUNyQixzQkFBc0I7WUFDdEIscUJBQXFCO1NBQ3hCLENBQUE7UUFDRCxJQUFJO1FBQ0osd0JBQXdCO1FBQ3hCLDJCQUEyQjtRQUMzQix5QkFBeUI7UUFDekIseUJBQXlCO1FBQ3pCLHdCQUF3QjtRQUN4QixLQUFLO1FBQ0wsSUFBSTtRQUNKLHVCQUF1QjtRQUN2Qiw0QkFBNEI7UUFDNUIseUJBQXlCO1FBQ3pCLHlCQUF5QjtRQUN6Qix3QkFBd0I7UUFDeEIsS0FBSztRQUNMLElBQUk7UUFDSix5QkFBeUI7UUFDekIseUJBQXlCO1FBQ3pCLHdCQUF3QjtRQUN4QiwwQkFBMEI7UUFDMUIsdUJBQXVCO1FBQ3ZCLEtBQUs7UUFDTCxJQUFJO1FBQ0osd0JBQXdCO1FBQ3hCLDBCQUEwQjtRQUMxQix3QkFBd0I7UUFDeEIseUJBQXlCO1FBQ3pCLHVCQUF1QjtRQUN2QixLQUFLO1FBQ0wsSUFBSTtRQUNKLHdCQUF3QjtRQUN4Qix3QkFBd0I7UUFDeEIsMkJBQTJCO1FBQzNCLDBCQUEwQjtRQUMxQix5QkFBeUI7UUFDekIsSUFBSTtJQUVoQixDQUFDO0lBbEdpQiw0QkFBVyxHQUF6QjtRQUNJLElBQUksSUFBSSxLQUFLLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDekIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLGdCQUFnQixFQUFFLENBQUM7U0FDM0M7UUFDRCxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDMUIsQ0FBQztJQU5jLDBCQUFTLEdBQXFCLElBQUksQ0FBQztJQVFsRCxhQUFhO0lBQ0MseUJBQVEsR0FBVyxDQUFDLENBQUM7SUEwRnZDLHVCQUFDO0NBcEdELEFBb0dDLElBQUE7QUFFWSxRQUFBLFdBQVcsR0FBRyxnQkFBZ0IsQ0FBQyxXQUFXLEVBQUUsQ0FBQyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIEdhbWVNYW5hZ2VyQ2xhc3Mge1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgX2luc3RhbmNlOiBHYW1lTWFuYWdlckNsYXNzID0gbnVsbDtcclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0SW5zdGFuY2UoKTogR2FtZU1hbmFnZXJDbGFzcyB7XHJcbiAgICAgICAgaWYgKG51bGwgPT09IHRoaXMuX2luc3RhbmNlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2luc3RhbmNlID0gbmV3IEdhbWVNYW5hZ2VyQ2xhc3MoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2luc3RhbmNlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKmJpbmdv5qyh5pWwICovXHJcbiAgICBwdWJsaWMgc3RhdGljIGJpbmdvTnVtOiBudW1iZXIgPSAwO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogMCAtIOerluWxj1xyXG4gICAgICogMSAtIOaoquWxj1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc2NyZWVuTW9kZTogbnVtYmVyID0gMDtcclxuICAgIC8qKueOqeWutuaLpeaciemSseeahOaVsOmHjyAqL1xyXG4gICAgcHVibGljIG1vbmV5TnVtOiBudW1iZXIgPSAwO1xyXG4gICAgLyoq55eF5Lq65pWw6YePICovXHJcbiAgICBwdWJsaWMgcm9sZU51bTogbnVtYmVyID0gMDtcclxuICAgIC8qKumHjeeOqeasoeaVsCAqL1xyXG4gICAgcHVibGljIHJldHJ5TnVtOiBudW1iZXIgPSAwO1xyXG5cclxuICAgIHB1YmxpYyBjYW5Ub3VjaDogYm9vbGVhbiA9IHRydWU7XHJcblxyXG4gICAgLyoq5piv5ZCm5byA5ZCv5aSa6K+t6KiAICovXHJcbiAgICBwdWJsaWMgaXNNdWx0aWxpbmd1YWw6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIC8qKuW9k+WJjeivreiogCAqL1xyXG4gICAgcHVibGljIGN1ckxhbmd1YWdlOiBzdHJpbmcgPSBcImVuXCI7XHJcbiAgICAvKirmmK/lkKblt7Lnu4/ot7PovazllYblupcgKi9cclxuICAgIHB1YmxpYyBpc0p1bXBTaG9wOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICAvKirmmK/lkKbpppbmrKHngrnlh7sgKi9cclxuICAgIHB1YmxpYyBmaXJzdENsaWNrOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgLyoq5piv5ZCm6Z2Z6Z+zICovXHJcbiAgICBwdWJsaWMgaXNNdXRlOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgcHVibGljIGNhblBsYXlBdWRpbzogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIC8qKmJpbmdv5qyh5pWwICovXHJcbiAgICBwdWJsaWMgYmluZ29OdW06IG51bWJlciA9IDA7XHJcblxyXG4gICAgLyoq5Y+25a2Q6aKc6ImyICovXHJcbiAgICBwdWJsaWMgbGVhZkNvbG9yOiBjYy5Db2xvcltdID0gW2NjLmNvbG9yKDI1NSwgNjAsIDE1NywgMjU1KSwgY2MuY29sb3IoOSwgMTYwLCAyLCAyNTUpLCBjYy5jb2xvcig3MiwgODIsIDI0MCwgMjU1KSwgY2MuY29sb3IoMjU0LCA3OSwgMjEsIDI1NSldO1xyXG5cclxuICAgIC8qKuW9k+WJjeaVsOWtlyAqL1xyXG4gICAgcHVibGljIGN1ck51bTogbnVtYmVyID0gLTE7XHJcblxyXG5cclxuICAgIHB1YmxpYyBjYXJkTnVtQXJyOiBudW1iZXJbXVtdID1cclxuICAgICAgICBcclxuICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgWzExLCA2LCAzLCAxNSwgNF0sXHJcbiAgICAgICAgICAgICAgICBbMjcsIDIsIDI4LCAgOTksIDI3XSxcclxuICAgICAgICAgICAgICAgIFs3LCA0MCwgMCwgNCwgNDBdLFxyXG4gICAgICAgICAgICAgICAgWzAsMCwgMCwgMCwgOF0sXHJcbiAgICAgICAgICAgICAgICBbNiwgNzUgLCAyMyw5LCA3NV1cclxuICAgICAgICAgICAgICAgIC8vIFsxMSwgMjcsIDcsIDIyLCA2XSxcclxuICAgICAgICAgICAgICAgIC8vIFs2LCAyLCA0MCwgIDgsIDc1XSxcclxuICAgICAgICAgICAgICAgIC8vIFszLCAyOCwgMCwgMywgMjNdLFxyXG4gICAgICAgICAgICAgICAgLy8gWzE1LCA5OSwgNCwgNTYsIDldLFxyXG4gICAgICAgICAgICAgICAgLy8gWzQsIDI3ICwgNDAsOCwgNzVdXHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgLy8gW1xyXG4gICAgICAgICAgICAvLyAgICAgWzEzLCA5LCAwLCA4LCAzXSxcclxuICAgICAgICAgICAgLy8gICAgIFsxNiwgMCwgMTMsIDIzLCAyOV0sXHJcbiAgICAgICAgICAgIC8vICAgICBbMCwgMCwgMCwgNDAsIDM1XSxcclxuICAgICAgICAgICAgLy8gICAgIFs1MSwgMCwgMCwgNDcsIDBdLFxyXG4gICAgICAgICAgICAvLyAgICAgWzAsIDAsIDcwLCAwLCA2Ml1cclxuICAgICAgICAgICAgLy8gXSxcclxuICAgICAgICAgICAgLy8gW1xyXG4gICAgICAgICAgICAvLyAgICAgWzAsIDAsIDMsIDAsIDldLFxyXG4gICAgICAgICAgICAvLyAgICAgWzI5LCAxOCwgMjcsIDE3LCAxOV0sXHJcbiAgICAgICAgICAgIC8vICAgICBbMCwgMCwgMCwgNDEsIDM1XSxcclxuICAgICAgICAgICAgLy8gICAgIFswLCAwLCAwLCA0NywgNDldLFxyXG4gICAgICAgICAgICAvLyAgICAgWzAsIDAsIDczLCAwLCA2OF1cclxuICAgICAgICAgICAgLy8gXSxcclxuICAgICAgICAgICAgLy8gW1xyXG4gICAgICAgICAgICAvLyAgICAgWzksIDAsIDIsIDExLCAxNF0sXHJcbiAgICAgICAgICAgIC8vICAgICBbMCwgMCwgMjEsIDE5LCAwXSxcclxuICAgICAgICAgICAgLy8gICAgIFswLCAwLCAwLCAzNSwgMF0sXHJcbiAgICAgICAgICAgIC8vICAgICBbNTksIDQ3LCAwLCAwLCA1MF0sXHJcbiAgICAgICAgICAgIC8vICAgICBbMCwgMCwgNzAsIDAsIDBdXHJcbiAgICAgICAgICAgIC8vIF0sXHJcbiAgICAgICAgICAgIC8vIFtcclxuICAgICAgICAgICAgLy8gICAgIFswLCA5LCAxMiwgMCwgNl0sXHJcbiAgICAgICAgICAgIC8vICAgICBbMjUsIDAsIDE5LCAyOSwgMF0sXHJcbiAgICAgICAgICAgIC8vICAgICBbMCwgMCwgMCwgMzUsIDBdLFxyXG4gICAgICAgICAgICAvLyAgICAgWzAsIDAsIDAsIDU5LCA1M10sXHJcbiAgICAgICAgICAgIC8vICAgICBbNzAsIDAsIDAsIDAsIDBdXHJcbiAgICAgICAgICAgIC8vIF0sXHJcbiAgICAgICAgICAgIC8vIFtcclxuICAgICAgICAgICAgLy8gICAgIFsxNCwgNywgOSwgMCwgMF0sXHJcbiAgICAgICAgICAgIC8vICAgICBbMCwgMjksIDAsIDAsIDBdLFxyXG4gICAgICAgICAgICAvLyAgICAgWzM4LCA0MywgMCwgMzIsIDM1XSxcclxuICAgICAgICAgICAgLy8gICAgIFs1OSwgNDgsIDUxLCAwLCAwXSxcclxuICAgICAgICAgICAgLy8gICAgIFswLCA2NiwgNjIsIDc0LCAwXVxyXG4gICAgICAgICAgICAvLyBdXHJcbiAgICAgICAgXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBHYW1lTWFuYWdlciA9IEdhbWVNYW5hZ2VyQ2xhc3MuZ2V0SW5zdGFuY2UoKTtcclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Manager/Utils.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '4321cKGyYZMVYxzUolVhFaf', 'Utils');
// Script/Manager/Utils.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Utils = void 0;
var ConstValue_1 = require("../Data/ConstValue");
var GameManager_1 = require("./GameManager");
/**
 * 常用方法工具类
 */
var UtilsClass = /** @class */ (function () {
    function UtilsClass() {
    }
    UtilsClass.getInstance = function () {
        if (this._instance === null) {
            this._instance = new UtilsClass();
        }
        return this._instance;
    };
    /**
     * 设置节点spriteFrame
     * @param node 节点
     * @param name 图片name(图片需要放在resources/images文件夹下)
     */
    UtilsClass.prototype.setSpriteFrame = function (node, name) {
        var path = "images/" + name;
        cc.loader.loadRes(path, cc.SpriteFrame, function (err, spriteFrame) {
            node.getComponent(cc.Sprite).spriteFrame = spriteFrame;
        });
    };
    /**
    * 多语言设置文本内容
    * @param node
    * @param labelName
    */
    UtilsClass.prototype.setLabelString = function (node, labelName) {
        var path = ConstValue_1.ConstValue.JSON_DIR + "LanguageData";
        var languageName = null;
        if (!GameManager_1.GameManager.isMultilingual) {
            languageName = "en";
        }
        else {
            languageName = cc.sys.languageCode.slice(0, 2);
        }
        cc.loader.loadRes(path, cc.JsonAsset, function (err, language) {
            if (err || language.json[languageName][labelName] == undefined) {
                return;
            }
            else {
                node.getComponent(cc.Label).string = language.json[languageName][labelName];
            }
        });
    };
    /**
    * 随机数
    * @param min 最小数
    * @param max 最大数
    */
    UtilsClass.prototype.randomNumber = function (min, max) {
        return Math.floor(parseInt(Math.random() * (max - min + 1) + min, 10));
    };
    /**
    * 数组随机排序
    * @param arr 需要重新排序的数组
    */
    UtilsClass.prototype.shuffle = function (arr) {
        var _a;
        var i = arr.length;
        while (i) {
            var j = Math.floor(Math.random() * i--);
            _a = [arr[i], arr[j]], arr[j] = _a[0], arr[i] = _a[1];
        }
        return arr;
    };
    /**
     * 获取旋转角度
     * @param startPos 起始点坐标
     * @param endPos 终点坐标
     * @returns
     */
    UtilsClass.prototype.getAngle = function (startPos, endPos) {
        var x = endPos.x - startPos.x;
        var y = endPos.y - startPos.y;
        var radian = Math.atan2(y, x); //弧度   
        var angle = radian * 180 / Math.PI; //角度   
        return angle;
    };
    /**
     * 以某点为圆心，生成圆周上等分点的坐标
     *
     * @param {number} r 半径
     * @param {cc.Vec2} pos 圆心坐标
     * @param {number} count 等分点数量
     * @param {number} [randomScope=80] 等分点的随机波动范围
     * @returns {cc.Vec2[]} 返回等分点坐标
     */
    UtilsClass.prototype.getCirclePoints = function (r, pos, count, randomScope) {
        if (randomScope === void 0) { randomScope = 60; }
        var points = [];
        var radians = (Math.PI / 180) * Math.round(360 / count);
        for (var i = 0; i < count; i++) {
            var x = pos.x + r * Math.sin(radians * i);
            var y = pos.y + r * Math.cos(radians * i);
            points.unshift(cc.v3(x + Math.random() * randomScope, y + Math.random() * randomScope, 0));
        }
        return points;
    };
    /**
     * 获取移动时间
     * @param startPos 起始位置坐标
     * @param endPos 终点位置坐标
     * @param moveSpeed 移动速度
     * @returns 移动时间
     */
    UtilsClass.prototype.getMoveTime = function (startPos, endPos, moveSpeed) {
        // let distance = Math.sqrt(Math.pow((endPos.x - startPos.x), 2) + Math.pow((endPos.y - startPos.y), 2));
        var distance = startPos.sub(endPos).mag();
        var time = distance / moveSpeed;
        return time;
    };
    /**
     * 播放spine动画
     * @param {*} node 动画文件节点
     * @param {*} animName 动作名称
     * @param {*} loop 是否循环
     * @param {*} callback 播放完毕回调
     */
    UtilsClass.prototype.playSpine = function (node, animName, loop, callback) {
        // sp_Skeleton.premultipliedAlpha=false;//这样设置在cocos creator中才能有半透明效果
        if (loop === void 0) { loop = true; }
        if (callback === void 0) { callback = null; }
        // let spine = this.node.getComponent(sp.Skeleton);
        var sp_Skeleton = node.getComponent(sp.Skeleton);
        var track = sp_Skeleton.setAnimation(0, animName, loop);
        if (track) {
            // 注册动画的结束回调
            sp_Skeleton.setCompleteListener(function (trackEntry, loopCount) {
                var name = trackEntry.animation ? trackEntry.animation.name : '';
                if (name === animName && callback && callback != null) {
                    callback(); // 动画结束后执行自己的逻辑
                }
            });
        }
    };
    /**
     * 获取字符中的数字
     * @param str
     * @returns
     */
    UtilsClass.prototype.getNum = function (str) {
        var value = str.replace(/[^0-9]/ig, "");
        return Number(value);
    };
    /**
     * 获取字符中非数字的字符
     * @param str
     * @returns
     */
    UtilsClass.prototype.getString = function (str) {
        var value = str.match(/\D/ig);
        var lastValue = value.join("");
        return String(lastValue);
    };
    /**
     * 获取当前节点转换到某节点下的坐标
     * @param curNode
     * @param targetNode
     * @returns
     */
    UtilsClass.prototype.getNodePos = function (curNode, targetNode) {
        var worldPos = curNode.parent.convertToWorldSpaceAR(curNode.position);
        var pos = targetNode.convertToNodeSpaceAR(worldPos);
        return cc.v2(pos);
    };
    /**
     * 播放上下浮动动画
     * @param node
     * @param time
     * @param distance
     */
    UtilsClass.prototype.playNodeFloatAction = function (node, time, distance) {
        node.runAction(cc.repeatForever(cc.sequence(cc.moveTo(time, node.x, node.y + distance), cc.moveTo(time - 0.05, node.x, node.y - distance))));
    };
    /**
     * 显示气泡
     * @param bubble 气泡节点
     * @param callback 显示气泡后的回调函数
     */
    UtilsClass.prototype.displayBubble = function (bubble, callback) {
        if (callback === void 0) { callback = null; }
        bubble.active = true;
        bubble.scale = 0;
        bubble.runAction(cc.sequence(cc.scaleTo(0.3, 1).easing(cc.easeBackOut()), cc.callFunc(function () {
            if (callback) {
                callback();
            }
        })));
    };
    /**
     * 果冻效果
     * @param node
     * @param multiple scale
     * @param callback 结束回调
     */
    UtilsClass.prototype.JellyEffect = function (node, multiple, callback) {
        function generate_action(params) {
            var scale_action = cc.scaleTo(params.time, params.scale_x, params.scale_y);
            var fade_action = cc.fadeIn(params.time);
            return cc.spawn(scale_action, fade_action);
        }
        var spawn_action1 = generate_action({ time: 0.06, scale_x: 0.63 * multiple, scale_y: 1.3 * multiple, scale_z: 1 * multiple });
        var spawn_action2 = generate_action({ time: 0.12, scale_x: 1.1 * multiple, scale_y: 0.7 * multiple, scale_z: 1 * multiple });
        var spawn_action3 = generate_action({ time: 0.07, scale_x: 0.8 * multiple, scale_y: 1.1 * multiple, scale_z: 1 * multiple });
        var spawn_action4 = generate_action({ time: 0.07, scale_x: 1.1 * multiple, scale_: 0.95 * multiple, scale_z: 1 * multiple });
        var spawn_action5 = generate_action({ time: 0.07, scale_x: 1 * multiple, scale_y: 1 * multiple, scale_z: 1 * multiple });
        node.runAction(cc.sequence(spawn_action1, spawn_action2, spawn_action3, spawn_action4, spawn_action5, cc.callFunc(function () {
            if (callback) {
                callback();
            }
        })));
    };
    /**
     * 求点C在直线AB上的垂点坐标
     * @param posA
     * @param posB
     * @param posC
     * @returns
     */
    UtilsClass.prototype.getVerticalPointPos = function (posA, posB, posC) {
        var pointA = cc.v2(posA);
        var pointB = cc.v2(posB);
        var pointC = cc.v2(posC);
        var vecAB = cc.v2(pointB.x - pointA.x, pointB.y - pointA.y);
        var vecAC = cc.v2(pointC.x - pointA.x, pointC.y - pointA.y);
        var dotProd = vecAB.dot(vecAC);
        var lenAB = vecAB.mag();
        var projLen = dotProd / lenAB;
        var projVec = vecAB.normalizeSelf().mul(projLen);
        var pointD = pointA.add(projVec);
        return pointD;
    };
    /**
     * 设置视频clip
     * @param node 节点
     * @param name 视频name(视频需要放在resources/videos文件夹下)
     */
    UtilsClass.prototype.setVideoClip = function (node, name) {
        var path = ConstValue_1.ConstValue.VIDEOS_DIR + name;
        cc.loader.loadRes(path, cc.Asset, function (err, videoClip) {
            node.getComponent(cc.VideoPlayer).clip = videoClip;
        });
    };
    /**
      * 指定视频从哪个时间点开始播放
      * @param videoNode cc.Node视频节点
      * @param time 时间（s）
      */
    UtilsClass.prototype.setVideoCurrentTime = function (videoNode, time) {
        if (cc.sys.os === cc.sys.OS_IOS && cc.sys.browserType === cc.sys.BROWSER_TYPE_MOBILE_QQ) {
            //在ios上qq浏览器需要特殊处理
            var sourceNode = videoNode.getComponent(cc.VideoPlayer)["_impl"]._video;
            sourceNode.currentTime = time;
        }
        else {
            videoNode.getComponent(cc.VideoPlayer)["_impl"]._video.currentTime = time;
        }
    };
    /**
      * 设置视频播放速率
      * @param video cc.Node视频节点
      * @param rate number
      */
    UtilsClass.prototype.setVideoPlaybackRate = function (videoNode, rate) {
        if (cc.sys.os === cc.sys.OS_IOS && cc.sys.browserType === cc.sys.BROWSER_TYPE_MOBILE_QQ) {
            //在ios上qq浏览器需要特殊处理
            var sourceNode = videoNode.getComponent(cc.VideoPlayer)["_impl"]._video;
            sourceNode.playbackRate = rate;
        }
        else {
            videoNode.getComponent(cc.VideoPlayer)["_impl"]._video.playbackRate = rate;
        }
    };
    /**
     * 设置视频模糊
     * @param videoNode cc.Node视频节点
     */
    UtilsClass.prototype.setVideoBlur = function (videoNode) {
        if (cc.sys.os === cc.sys.OS_IOS && cc.sys.browserType === cc.sys.BROWSER_TYPE_MOBILE_QQ) {
            //在ios上qq浏览器需要特殊处理
            var sourceNode = videoNode.getComponent(cc.VideoPlayer)["_impl"]._video;
            sourceNode.style.filter = "blur(20px)";
        }
        else {
            videoNode.getComponent(cc.VideoPlayer)["_impl"]._video.style.filter = "blur(20px)";
        }
    };
    /**
   * 水平翻转（卡片翻转）
   * @param node 节点
   * @param duration 总时长
   * @param onMiddle 中间状态回调
   * @param onComplete 完成回调
   */
    UtilsClass.prototype.flip = function (node, duration, onMiddle, onComplete) {
        return new Promise(function (res) {
            var tween = cc.tween, time = duration / 3, scaleX = node.scale, skewY = scaleX > 0 ? 20 : -20;
            tween(node)
                .parallel(tween().to(time, { scaleX: 0 }, { easing: 'quadIn' }), tween().to(time, { skewY: -skewY }, { easing: 'quadOut' }))
                .call(function () {
                onMiddle && onMiddle();
            })
                .parallel(tween().to(time, { scaleX: -scaleX }, { easing: 'quadOut' }), tween().to(time, { skewY: 0 }, { easing: 'quadIn' }))
                .call(function () {
                onMiddle && onMiddle();
            })
                .parallel(tween().to(time, { scaleX: scaleX }, { easing: 'quadOut' }), tween().to(time, { skewY: 0 }, { easing: 'quadIn' }))
                .call(function () {
                onComplete && onComplete();
                res();
            })
                .start();
        });
    };
    /**
  * 2D节点绕Y轴旋转一圈动画
  * @param node 要旋转的节点
  * @param duration 动画时长
  * @param onComplete 完成回调
  */
    UtilsClass.prototype.flipY = function (node, duration, onComplete) {
        return new Promise(function (res) {
            var originalScale = node.scaleX;
            // 使用更平滑的缓动函数
            var smoothEasing = {
                easing: 'sineInOut',
                progress: function (start, end, current, ratio) {
                    // 使用更平滑的曲线
                    var progress = ratio < 0.5
                        ? 2 * ratio * ratio
                        : 1 - Math.pow(-2 * ratio + 2, 2) / 2;
                    return start + (end - start) * progress;
                }
            };
            cc.tween(node)
                .to(duration, {
                scaleX: -originalScale
            }, smoothEasing)
                .call(function () {
                onComplete && onComplete();
                res();
            })
                .start();
        });
    };
    // ... existing code ...
    //数字按照三个一组用逗号隔开
    UtilsClass.prototype.formatNumber = function (number) {
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    };
    UtilsClass._instance = null;
    return UtilsClass;
}());
exports.Utils = UtilsClass.getInstance();

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxNYW5hZ2VyXFxVdGlscy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxpREFBZ0Q7QUFDaEQsNkNBQTRDO0FBRTVDOztHQUVHO0FBQ0g7SUFBQTtJQW1aQSxDQUFDO0lBalppQixzQkFBVyxHQUF6QjtRQUNJLElBQUksSUFBSSxDQUFDLFNBQVMsS0FBSyxJQUFJLEVBQUU7WUFDekIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLFVBQVUsRUFBRSxDQUFDO1NBQ3JDO1FBQ0QsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQzFCLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsbUNBQWMsR0FBZCxVQUFlLElBQWEsRUFBRSxJQUFZO1FBQ3RDLElBQUksSUFBSSxHQUFHLFNBQVMsR0FBRyxJQUFJLENBQUM7UUFDNUIsRUFBRSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxXQUFXLEVBQUUsVUFBQyxHQUFHLEVBQUUsV0FBVztZQUNyRCxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO1FBQzNELENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVEOzs7O01BSUU7SUFDRixtQ0FBYyxHQUFkLFVBQWUsSUFBYSxFQUFFLFNBQWlCO1FBQzNDLElBQUksSUFBSSxHQUFHLHVCQUFVLENBQUMsUUFBUSxHQUFHLGNBQWMsQ0FBQztRQUNoRCxJQUFJLFlBQVksR0FBVyxJQUFJLENBQUM7UUFDaEMsSUFBSSxDQUFDLHlCQUFXLENBQUMsY0FBYyxFQUFFO1lBQzdCLFlBQVksR0FBRyxJQUFJLENBQUM7U0FDdkI7YUFBTTtZQUNILFlBQVksR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1NBQ2xEO1FBQ0QsRUFBRSxDQUFDLE1B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QztpQkFDTixRQUFRLENBQ0wsS0FBSyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksRUFBRSxFQUFFLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsQ0FBQyxFQUNyRCxLQUFLLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxFQUFFLEVBQUUsS0FBSyxFQUFFLENBQUMsS0FBSyxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLENBQUMsQ0FDN0Q7aUJBQ0EsSUFBSSxDQUFDO2dCQUNGLFFBQVEsSUFBSSxRQUFRLEVBQUUsQ0FBQztZQUMzQixDQUFDLENBQUM7aUJBQ0QsUUFBUSxDQUNMLEtBQUssRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLEVBQUUsRUFBRSxNQUFNLEVBQUUsQ0FBQyxNQUFNLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsQ0FBQyxFQUM1RCxLQUFLLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxFQUFFLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxDQUFDLENBQ3ZEO2lCQUNBLElBQUksQ0FBQztnQkFDRixRQUFRLElBQUksUUFBUSxFQUFFLENBQUM7WUFDM0IsQ0FBQyxDQUFDO2lCQUNELFFBQVEsQ0FDTCxLQUFLLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxFQUFFLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxDQUFDLEVBQzNELEtBQUssRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLEVBQUUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLENBQUMsQ0FDdkQ7aUJBQ0EsSUFBSSxDQUFDO2dCQUNGLFVBQVUsSUFBSSxVQUFVLEVBQUUsQ0FBQztnQkFDM0IsR0FBRyxFQUFFLENBQUM7WUFDVixDQUFDLENBQUM7aUJBQ0QsS0FBSyxFQUFFLENBQUM7UUFDakIsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQ7Ozs7O0lBS0E7SUFDQSwwQkFBSyxHQUFMLFVBQU0sSUFBYSxFQUFFLFFBQWdCLEVBQUUsVUFBcUI7UUFDeEQsT0FBTyxJQUFJLE9BQU8sQ0FBTyxVQUFBLEdBQUc7WUFDeEIsSUFBTSxhQUFhLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztZQUVsQyxhQUFhO1lBQ2IsSUFBTSxZQUFZLEdBQUc7Z0JBQ2pCLE1BQU0sRUFBRSxXQUFXO2dCQUNuQixRQUFRLEVBQUUsVUFBQyxLQUFLLEVBQUUsR0FBRyxFQUFFLE9BQU8sRUFBRSxLQUFLO29CQUNqQyxXQUFXO29CQUNYLElBQU0sUUFBUSxHQUFHLEtBQUssR0FBRyxHQUFHO3dCQUN4QixDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssR0FBRyxLQUFLO3dCQUNuQixDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsS0FBSyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7b0JBQzFDLE9BQU8sS0FBSyxHQUFHLENBQUMsR0FBRyxHQUFHLEtBQUssQ0FBQyxHQUFHLFFBQVEsQ0FBQztnQkFDNUMsQ0FBQzthQUNKLENBQUM7WUFFRixFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQztpQkFDVCxFQUFFLENBQUMsUUFBUSxFQUFFO2dCQUNWLE1BQU0sRUFBRSxDQUFDLGFBQWE7YUFDekIsRUFBRSxZQUFZLENBQUM7aUJBQ2YsSUFBSSxDQUFDO2dCQUNGLFVBQVUsSUFBSSxVQUFVLEVBQUUsQ0FBQztnQkFDM0IsR0FBRyxFQUFFLENBQUM7WUFDVixDQUFDLENBQUM7aUJBQ0QsS0FBSyxFQUFFLENBQUM7UUFDakIsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsd0JBQXdCO0lBRXhCLGVBQWU7SUFDZixpQ0FBWSxHQUFaLFVBQWEsTUFBTTtRQUNmLE9BQU8sTUFBTSxDQUFDLFFBQVEsRUFBRSxDQUFDLE9BQU8sQ0FBQyx1QkFBdUIsRUFBRSxHQUFHLENBQUMsQ0FBQztJQUNuRSxDQUFDO0lBalpjLG9CQUFTLEdBQWUsSUFBSSxDQUFDO0lBa1poRCxpQkFBQztDQW5aRCxBQW1aQyxJQUFBO0FBRVksUUFBQSxLQUFLLEdBQUcsVUFBVSxDQUFDLFdBQVcsRUFBRSxDQUFDIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29uc3RWYWx1ZSB9IGZyb20gXCIuLi9EYXRhL0NvbnN0VmFsdWVcIjtcclxuaW1wb3J0IHsgR2FtZU1hbmFnZXIgfSBmcm9tIFwiLi9HYW1lTWFuYWdlclwiO1xyXG5cclxuLyoqXHJcbiAqIOW4uOeUqOaWueazleW3peWFt+exu1xyXG4gKi9cclxuY2xhc3MgVXRpbHNDbGFzcyB7XHJcbiAgICBwcml2YXRlIHN0YXRpYyBfaW5zdGFuY2U6IFV0aWxzQ2xhc3MgPSBudWxsO1xyXG4gICAgcHVibGljIHN0YXRpYyBnZXRJbnN0YW5jZSgpOiBVdGlsc0NsYXNzIHtcclxuICAgICAgICBpZiAodGhpcy5faW5zdGFuY2UgPT09IG51bGwpIHtcclxuICAgICAgICAgICAgdGhpcy5faW5zdGFuY2UgPSBuZXcgVXRpbHNDbGFzcygpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy5faW5zdGFuY2U7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDorr7nva7oioLngrlzcHJpdGVGcmFtZVxyXG4gICAgICogQHBhcmFtIG5vZGUg6IqC54K5XHJcbiAgICAgKiBAcGFyYW0gbmFtZSDlm77niYduYW1lKOWbvueJh+mcgOimgeaUvuWcqHJlc291cmNlcy9pbWFnZXPmlofku7blpLnkuIspXHJcbiAgICAgKi9cclxuICAgIHNldFNwcml0ZUZyYW1lKG5vZGU6IGNjLk5vZGUsIG5hbWU6IHN0cmluZykge1xyXG4gICAgICAgIGxldCBwYXRoID0gXCJpbWFnZXMvXCIgKyBuYW1lO1xyXG4gICAgICAgIGNjLmxvYWRlci5sb2FkUmVzKHBhdGgsIGNjLlNwcml0ZUZyYW1lLCAoZXJyLCBzcHJpdGVGcmFtZSkgPT4ge1xyXG4gICAgICAgICAgICBub2RlLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gc3ByaXRlRnJhbWU7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAqIOWkmuivreiogOiuvue9ruaWh+acrOWGheWuuVxyXG4gICAgKiBAcGFyYW0gbm9kZSBcclxuICAgICogQHBhcmFtIGxhYmVsTmFtZSBcclxuICAgICovXHJcbiAgICBzZXRMYWJlbFN0cmluZyhub2RlOiBjYy5Ob2RlLCBsYWJlbE5hbWU6IHN0cmluZykge1xyXG4gICAgICAgIGxldCBwYXRoID0gQ29uc3RWYWx1ZS5KU09OX0RJUiArIFwiTGFuZ3VhZ2VEYXRhXCI7XHJcbiAgICAgICAgbGV0IGxhbmd1YWdlTmFtZTogc3RyaW5nID0gbnVsbDtcclxuICAgICAgICBpZiAoIUdhbWVNYW5hZ2VyLmlzTXVsdGlsaW5ndWFsKSB7XHJcbiAgICAgICAgICAgIGxhbmd1YWdlTmFtZSA9IFwiZW5cIjtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBsYW5ndWFnZU5hbWUgPSBjYy5zeXMubGFuZ3VhZ2VDb2RlLnNsaWNlKDAsIDIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYy5sb2FkZXIubG9hZFJlcyhwYXRoLCBjYy5Kc29uQXNzZXQsIChlcnIsIGxhbmd1YWdlOiBjYy5Kc29uQXNzZXQpID0+IHtcclxuICAgICAgICAgICAgaWYgKGVyciB8fCBsYW5ndWFnZS5qc29uW2xhbmd1YWdlTmFtZV1bbGFiZWxOYW1lXSA9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIG5vZGUuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBsYW5ndWFnZS5qc29uW2xhbmd1YWdlTmFtZV1bbGFiZWxOYW1lXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgKiDpmo/mnLrmlbBcclxuICAgICogQHBhcmFtIG1pbiDmnIDlsI/mlbBcclxuICAgICogQHBhcmFtIG1heCDmnIDlpKfmlbBcclxuICAgICovXHJcbiAgICByYW5kb21OdW1iZXIobWluOiBhbnksIG1heDogYW55KTogYW55IHtcclxuICAgICAgICByZXR1cm4gTWF0aC5mbG9vcihcclxuICAgICAgICAgICAgcGFyc2VJbnQoXHJcbiAgICAgICAgICAgICAgICBNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbiArIDEpICsgbWluLCAxMClcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgKiDmlbDnu4Tpmo/mnLrmjpLluo9cclxuICAgICogQHBhcmFtIGFyciDpnIDopoHph43mlrDmjpLluo/nmoTmlbDnu4RcclxuICAgICovXHJcbiAgICBzaHVmZmxlKGFycikge1xyXG4gICAgICAgIGxldCBpID0gYXJyLmxlbmd0aDtcclxuICAgICAgICB3aGlsZSAoaSkge1xyXG4gICAgICAgICAgICBsZXQgaiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGktLSk7XHJcbiAgICAgICAgICAgIFthcnJbal0sIGFycltpXV0gPSBbYXJyW2ldLCBhcnJbal1dO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gYXJyO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6I635Y+W5peL6L2s6KeS5bqmXHJcbiAgICAgKiBAcGFyYW0gc3RhcnRQb3Mg6LW35aeL54K55Z2Q5qCHXHJcbiAgICAgKiBAcGFyYW0gZW5kUG9zIOe7iOeCueWdkOagh1xyXG4gICAgICogQHJldHVybnMgXHJcbiAgICAgKi9cclxuICAgIGdldEFuZ2xlKHN0YXJ0UG9zOiBjYy5WZWMyIHwgY2MuVmVjMywgZW5kUG9zOiBjYy5WZWMyIHwgY2MuVmVjMykge1xyXG4gICAgICAgIGxldCB4ID0gZW5kUG9zLnggLSBzdGFydFBvcy54O1xyXG4gICAgICAgIGxldCB5ID0gZW5kUG9zLnkgLSBzdGFydFBvcy55XHJcbiAgICAgICAgbGV0IHJhZGlhbiA9IE1hdGguYXRhbjIoeSwgeCkgIC8v5byn5bqmICAgXHJcbiAgICAgICAgbGV0IGFuZ2xlID0gcmFkaWFuICogMTgwIC8gTWF0aC5QSTsgIC8v6KeS5bqmICAgXHJcbiAgICAgICAgcmV0dXJuIGFuZ2xlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5Lul5p+Q54K55Li65ZyG5b+D77yM55Sf5oiQ5ZyG5ZGo5LiK562J5YiG54K555qE5Z2Q5qCHXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHIg5Y2K5b6EXHJcbiAgICAgKiBAcGFyYW0ge2NjLlZlYzJ9IHBvcyDlnIblv4PlnZDmoIdcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBjb3VudCDnrYnliIbngrnmlbDph49cclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBbcmFuZG9tU2NvcGU9ODBdIOetieWIhueCueeahOmaj+acuuazouWKqOiMg+WbtFxyXG4gICAgICogQHJldHVybnMge2NjLlZlYzJbXX0g6L+U5Zue562J5YiG54K55Z2Q5qCHXHJcbiAgICAgKi9cclxuICAgIGdldENpcmNsZVBvaW50cyhyOiBudW1iZXIsIHBvczogY2MuVmVjMiwgY291bnQ6IG51bWJlciwgcmFuZG9tU2NvcGU6IG51bWJlciA9IDYwKTogY2MuVmVjMltdIHtcclxuICAgICAgICBsZXQgcG9pbnRzID0gW107XHJcbiAgICAgICAgbGV0IHJhZGlhbnMgPSAoTWF0aC5QSSAvIDE4MCkgKiBNYXRoLnJvdW5kKDM2MCAvIGNvdW50KTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvdW50OyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IHggPSBwb3MueCArIHIgKiBNYXRoLnNpbihyYWRpYW5zICogaSk7XHJcbiAgICAgICAgICAgIGxldCB5ID0gcG9zLnkgKyByICogTWF0aC5jb3MocmFkaWFucyAqIGkpO1xyXG4gICAgICAgICAgICBwb2ludHMudW5zaGlmdChjYy52Myh4ICsgTWF0aC5yYW5kb20oKSAqIHJhbmRvbVNjb3BlLCB5ICsgTWF0aC5yYW5kb20oKSAqIHJhbmRvbVNjb3BlLCAwKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBwb2ludHM7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDojrflj5bnp7vliqjml7bpl7RcclxuICAgICAqIEBwYXJhbSBzdGFydFBvcyDotbflp4vkvY3nva7lnZDmoIdcclxuICAgICAqIEBwYXJhbSBlbmRQb3Mg57uI54K55L2N572u5Z2Q5qCHXHJcbiAgICAgKiBAcGFyYW0gbW92ZVNwZWVkIOenu+WKqOmAn+W6plxyXG4gICAgICogQHJldHVybnMg56e75Yqo5pe26Ze0XHJcbiAgICAgKi9cclxuICAgIGdldE1vdmVUaW1lKHN0YXJ0UG9zOiBjYy5WZWMyLCBlbmRQb3M6IGNjLlZlYzIsIG1vdmVTcGVlZDogbnVtYmVyKSB7XHJcbiAgICAgICAgLy8gbGV0IGRpc3RhbmNlID0gTWF0aC5zcXJ0KE1hdGgucG93KChlbmRQb3MueCAtIHN0YXJ0UG9zLngpLCAyKSArIE1hdGgucG93KChlbmRQb3MueSAtIHN0YXJ0UG9zLnkpLCAyKSk7XHJcbiAgICAgICAgbGV0IGRpc3RhbmNlID0gc3RhcnRQb3Muc3ViKGVuZFBvcykubWFnKCk7XHJcbiAgICAgICAgbGV0IHRpbWUgPSBkaXN0YW5jZSAvIG1vdmVTcGVlZDtcclxuICAgICAgICByZXR1cm4gdGltZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOaSreaUvnNwaW5l5Yqo55S7XHJcbiAgICAgKiBAcGFyYW0geyp9IG5vZGUg5Yqo55S75paH5Lu26IqC54K5XHJcbiAgICAgKiBAcGFyYW0geyp9IGFuaW1OYW1lIOWKqOS9nOWQjeensFxyXG4gICAgICogQHBhcmFtIHsqfSBsb29wIOaYr+WQpuW+queOr1xyXG4gICAgICogQHBhcmFtIHsqfSBjYWxsYmFjayDmkq3mlL7lrozmr5Xlm57osINcclxuICAgICAqL1xyXG4gICAgcGxheVNwaW5lKG5vZGU6IGNjLk5vZGUsIGFuaW1OYW1lOiBzdHJpbmcsIGxvb3A6IGJvb2xlYW4gPSB0cnVlLCBjYWxsYmFjazogYW55ID0gbnVsbCkge1xyXG4gICAgICAgIC8vIHNwX1NrZWxldG9uLnByZW11bHRpcGxpZWRBbHBoYT1mYWxzZTsvL+i/meagt+iuvue9ruWcqGNvY29zIGNyZWF0b3LkuK3miY3og73mnInljYrpgI/mmI7mlYjmnpxcclxuXHJcbiAgICAgICAgLy8gbGV0IHNwaW5lID0gdGhpcy5ub2RlLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbik7XHJcbiAgICAgICAgbGV0IHNwX1NrZWxldG9uID0gbm9kZS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pO1xyXG4gICAgICAgIGxldCB0cmFjayA9IHNwX1NrZWxldG9uLnNldEFuaW1hdGlvbigwLCBhbmltTmFtZSwgbG9vcCk7XHJcbiAgICAgICAgaWYgKHRyYWNrKSB7XHJcbiAgICAgICAgICAgIC8vIOazqOWGjOWKqOeUu+eahOe7k+adn+Wbnuiwg1xyXG4gICAgICAgICAgICBzcF9Ta2VsZXRvbi5zZXRDb21wbGV0ZUxpc3RlbmVyKCh0cmFja0VudHJ5LCBsb29wQ291bnQpID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCBuYW1lID0gdHJhY2tFbnRyeS5hbmltYXRpb24gPyB0cmFja0VudHJ5LmFuaW1hdGlvbi5uYW1lIDogJyc7XHJcbiAgICAgICAgICAgICAgICBpZiAobmFtZSA9PT0gYW5pbU5hbWUgJiYgY2FsbGJhY2sgJiYgY2FsbGJhY2sgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKCk7IC8vIOWKqOeUu+e7k+adn+WQjuaJp+ihjOiHquW3seeahOmAu+i+kVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDojrflj5blrZfnrKbkuK3nmoTmlbDlrZdcclxuICAgICAqIEBwYXJhbSBzdHIgXHJcbiAgICAgKiBAcmV0dXJucyBcclxuICAgICAqL1xyXG4gICAgZ2V0TnVtKHN0cjogc3RyaW5nKSB7XHJcbiAgICAgICAgdmFyIHZhbHVlID0gc3RyLnJlcGxhY2UoL1teMC05XS9pZywgXCJcIik7XHJcbiAgICAgICAgcmV0dXJuIE51bWJlcih2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDojrflj5blrZfnrKbkuK3pnZ7mlbDlrZfnmoTlrZfnrKZcclxuICAgICAqIEBwYXJhbSBzdHIgXHJcbiAgICAgKiBAcmV0dXJucyBcclxuICAgICAqL1xyXG4gICAgZ2V0U3RyaW5nKHN0cjogc3RyaW5nKSB7XHJcbiAgICAgICAgdmFyIHZhbHVlID0gc3RyLm1hdGNoKC9cXEQvaWcpO1xyXG4gICAgICAgIGxldCBsYXN0VmFsdWUgPSB2YWx1ZS5qb2luKFwiXCIpO1xyXG4gICAgICAgIHJldHVybiBTdHJpbmcobGFzdFZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOiOt+WPluW9k+WJjeiKgueCuei9rOaNouWIsOafkOiKgueCueS4i+eahOWdkOagh1xyXG4gICAgICogQHBhcmFtIGN1ck5vZGUgXHJcbiAgICAgKiBAcGFyYW0gdGFyZ2V0Tm9kZSBcclxuICAgICAqIEByZXR1cm5zIFxyXG4gICAgICovXHJcbiAgICBnZXROb2RlUG9zKGN1ck5vZGU6IGNjLk5vZGUsIHRhcmdldE5vZGU6IGNjLk5vZGUpIHtcclxuICAgICAgICBsZXQgd29ybGRQb3MgPSBjdXJOb2RlLnBhcmVudC5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIoY3VyTm9kZS5wb3NpdGlvbik7XHJcbiAgICAgICAgbGV0IHBvcyA9IHRhcmdldE5vZGUuY29udmVydFRvTm9kZVNwYWNlQVIod29ybGRQb3MpO1xyXG4gICAgICAgIHJldHVybiBjYy52Mihwb3MpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5pKt5pS+5LiK5LiL5rWu5Yqo5Yqo55S7XHJcbiAgICAgKiBAcGFyYW0gbm9kZVxyXG4gICAgICogQHBhcmFtIHRpbWUgXHJcbiAgICAgKiBAcGFyYW0gZGlzdGFuY2UgXHJcbiAgICAgKi9cclxuICAgIHBsYXlOb2RlRmxvYXRBY3Rpb24obm9kZTogY2MuTm9kZSwgdGltZTogbnVtYmVyLCBkaXN0YW5jZTogbnVtYmVyKSB7XHJcbiAgICAgICAgbm9kZS5ydW5BY3Rpb24oXHJcbiAgICAgICAgICAgIGNjLnJlcGVhdEZvcmV2ZXIoXHJcbiAgICAgICAgICAgICAgICBjYy5zZXF1ZW5jZShcclxuICAgICAgICAgICAgICAgICAgICBjYy5tb3ZlVG8odGltZSwgbm9kZS54LCBub2RlLnkgKyBkaXN0YW5jZSksXHJcbiAgICAgICAgICAgICAgICAgICAgY2MubW92ZVRvKHRpbWUgLSAwLjA1LCBub2RlLngsIG5vZGUueSAtIGRpc3RhbmNlKSxcclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmmL7npLrmsJTms6FcclxuICAgICAqIEBwYXJhbSBidWJibGUg5rCU5rOh6IqC54K5XHJcbiAgICAgKiBAcGFyYW0gY2FsbGJhY2sg5pi+56S65rCU5rOh5ZCO55qE5Zue6LCD5Ye95pWwXHJcbiAgICAgKi9cclxuICAgIGRpc3BsYXlCdWJibGUoYnViYmxlOiBjYy5Ob2RlLCBjYWxsYmFjazogRnVuY3Rpb24gPSBudWxsKSB7XHJcbiAgICAgICAgYnViYmxlLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgYnViYmxlLnNjYWxlID0gMDtcclxuICAgICAgICBidWJibGUucnVuQWN0aW9uKFxyXG4gICAgICAgICAgICBjYy5zZXF1ZW5jZShcclxuICAgICAgICAgICAgICAgIGNjLnNjYWxlVG8oMC4zLCAxKS5lYXNpbmcoY2MuZWFzZUJhY2tPdXQoKSksXHJcbiAgICAgICAgICAgICAgICBjYy5jYWxsRnVuYygoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmnpzlhrvmlYjmnpxcclxuICAgICAqIEBwYXJhbSBub2RlIFxyXG4gICAgICogQHBhcmFtIG11bHRpcGxlIHNjYWxlXHJcbiAgICAgKiBAcGFyYW0gY2FsbGJhY2sg57uT5p2f5Zue6LCDXHJcbiAgICAgKi9cclxuICAgIEplbGx5RWZmZWN0KG5vZGU6IGNjLk5vZGUsIG11bHRpcGxlOiBudW1iZXIsIGNhbGxiYWNrPzogRnVuY3Rpb24pIHtcclxuICAgICAgICBmdW5jdGlvbiBnZW5lcmF0ZV9hY3Rpb24ocGFyYW1zKSB7XHJcbiAgICAgICAgICAgIHZhciBzY2FsZV9hY3Rpb24gPSBjYy5zY2FsZVRvKHBhcmFtcy50aW1lLCBwYXJhbXMuc2NhbGVfeCwgcGFyYW1zLnNjYWxlX3kpO1xyXG4gICAgICAgICAgICB2YXIgZmFkZV9hY3Rpb24gPSBjYy5mYWRlSW4ocGFyYW1zLnRpbWUpO1xyXG4gICAgICAgICAgICByZXR1cm4gY2Muc3Bhd24oc2NhbGVfYWN0aW9uLCBmYWRlX2FjdGlvbik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2YXIgc3Bhd25fYWN0aW9uMSA9IGdlbmVyYXRlX2FjdGlvbih7IHRpbWU6IDAuMDYsIHNjYWxlX3g6IDAuNjMgKiBtdWx0aXBsZSwgc2NhbGVfeTogMS4zICogbXVsdGlwbGUsIHNjYWxlX3o6IDEgKiBtdWx0aXBsZSB9KTtcclxuICAgICAgICB2YXIgc3Bhd25fYWN0aW9uMiA9IGdlbmVyYXRlX2FjdGlvbih7IHRpbWU6IDAuMTIsIHNjYWxlX3g6IDEuMSAqIG11bHRpcGxlLCBzY2FsZV95OiAwLjcgKiBtdWx0aXBsZSwgc2NhbGVfejogMSAqIG11bHRpcGxlIH0pO1xyXG4gICAgICAgIHZhciBzcGF3bl9hY3Rpb24zID0gZ2VuZXJhdGVfYWN0aW9uKHsgdGltZTogMC4wNywgc2NhbGVfeDogMC44ICogbXVsdGlwbGUsIHNjYWxlX3k6IDEuMSAqIG11bHRpcGxlLCBzY2FsZV96OiAxICogbXVsdGlwbGUgfSk7XHJcbiAgICAgICAgdmFyIHNwYXduX2FjdGlvbjQgPSBnZW5lcmF0ZV9hY3Rpb24oeyB0aW1lOiAwLjA3LCBzY2FsZV94OiAxLjEgKiBtdWx0aXBsZSwgc2NhbGVfOiAwLjk1ICogbXVsdGlwbGUsIHNjYWxlX3o6IDEgKiBtdWx0aXBsZSB9KTtcclxuICAgICAgICB2YXIgc3Bhd25fYWN0aW9uNSA9IGdlbmVyYXRlX2FjdGlvbih7IHRpbWU6IDAuMDcsIHNjYWxlX3g6IDEgKiBtdWx0aXBsZSwgc2NhbGVfeTogMSAqIG11bHRpcGxlLCBzY2FsZV96OiAxICogbXVsdGlwbGUgfSk7XHJcbiAgICAgICAgbm9kZS5ydW5BY3Rpb24oY2Muc2VxdWVuY2UoXHJcbiAgICAgICAgICAgIHNwYXduX2FjdGlvbjEsXHJcbiAgICAgICAgICAgIHNwYXduX2FjdGlvbjIsXHJcbiAgICAgICAgICAgIHNwYXduX2FjdGlvbjMsXHJcbiAgICAgICAgICAgIHNwYXduX2FjdGlvbjQsXHJcbiAgICAgICAgICAgIHNwYXduX2FjdGlvbjUsXHJcbiAgICAgICAgICAgIGNjLmNhbGxGdW5jKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChjYWxsYmFjaykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgKSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmsYLngrlD5Zyo55u057q/QULkuIrnmoTlnoLngrnlnZDmoIdcclxuICAgICAqIEBwYXJhbSBwb3NBIFxyXG4gICAgICogQHBhcmFtIHBvc0IgXHJcbiAgICAgKiBAcGFyYW0gcG9zQyBcclxuICAgICAqIEByZXR1cm5zIFxyXG4gICAgICovXHJcbiAgICBnZXRWZXJ0aWNhbFBvaW50UG9zKHBvc0E6IGNjLlZlYzIsIHBvc0I6IGNjLlZlYzIsIHBvc0M6IGNjLlZlYzIpIHtcclxuICAgICAgICBsZXQgcG9pbnRBID0gY2MudjIocG9zQSk7XHJcbiAgICAgICAgbGV0IHBvaW50QiA9IGNjLnYyKHBvc0IpO1xyXG4gICAgICAgIGxldCBwb2ludEMgPSBjYy52Mihwb3NDKTtcclxuXHJcbiAgICAgICAgbGV0IHZlY0FCID0gY2MudjIocG9pbnRCLnggLSBwb2ludEEueCwgcG9pbnRCLnkgLSBwb2ludEEueSk7XHJcbiAgICAgICAgbGV0IHZlY0FDID0gY2MudjIocG9pbnRDLnggLSBwb2ludEEueCwgcG9pbnRDLnkgLSBwb2ludEEueSk7XHJcblxyXG4gICAgICAgIGxldCBkb3RQcm9kID0gdmVjQUIuZG90KHZlY0FDKTtcclxuICAgICAgICBsZXQgbGVuQUIgPSB2ZWNBQi5tYWcoKTtcclxuICAgICAgICBsZXQgcHJvakxlbiA9IGRvdFByb2QgLyBsZW5BQjtcclxuICAgICAgICBsZXQgcHJvalZlYyA9IHZlY0FCLm5vcm1hbGl6ZVNlbGYoKS5tdWwocHJvakxlbik7XHJcblxyXG4gICAgICAgIGxldCBwb2ludEQgPSBwb2ludEEuYWRkKHByb2pWZWMpO1xyXG5cclxuICAgICAgICByZXR1cm4gcG9pbnREO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6K6+572u6KeG6aKRY2xpcFxyXG4gICAgICogQHBhcmFtIG5vZGUg6IqC54K5XHJcbiAgICAgKiBAcGFyYW0gbmFtZSDop4bpopFuYW1lKOinhumikemcgOimgeaUvuWcqHJlc291cmNlcy92aWRlb3Pmlofku7blpLnkuIspXHJcbiAgICAgKi9cclxuICAgIHNldFZpZGVvQ2xpcChub2RlOiBjYy5Ob2RlLCBuYW1lOiBzdHJpbmcpIHtcclxuICAgICAgICBsZXQgcGF0aCA9IENvbnN0VmFsdWUuVklERU9TX0RJUiArIG5hbWU7XHJcbiAgICAgICAgY2MubG9hZGVyLmxvYWRSZXMocGF0aCwgY2MuQXNzZXQsIChlcnIsIHZpZGVvQ2xpcCkgPT4ge1xyXG4gICAgICAgICAgICBub2RlLmdldENvbXBvbmVudChjYy5WaWRlb1BsYXllcikuY2xpcCA9IHZpZGVvQ2xpcDtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAgKiDmjIflrprop4bpopHku47lk6rkuKrml7bpl7TngrnlvIDlp4vmkq3mlL5cclxuICAgICAgKiBAcGFyYW0gdmlkZW9Ob2RlIGNjLk5vZGXop4bpopHoioLngrlcclxuICAgICAgKiBAcGFyYW0gdGltZSDml7bpl7TvvIhz77yJXHJcbiAgICAgICovXHJcbiAgICBzZXRWaWRlb0N1cnJlbnRUaW1lKHZpZGVvTm9kZTogY2MuTm9kZSwgdGltZTogbnVtYmVyKSB7XHJcbiAgICAgICAgaWYgKGNjLnN5cy5vcyA9PT0gY2Muc3lzLk9TX0lPUyAmJiBjYy5zeXMuYnJvd3NlclR5cGUgPT09IGNjLnN5cy5CUk9XU0VSX1RZUEVfTU9CSUxFX1FRKSB7XHJcbiAgICAgICAgICAgIC8v5ZyoaW9z5LiKcXHmtY/op4jlmajpnIDopoHnibnmrorlpITnkIZcclxuICAgICAgICAgICAgbGV0IHNvdXJjZU5vZGUgPSB2aWRlb05vZGUuZ2V0Q29tcG9uZW50KGNjLlZpZGVvUGxheWVyKVtcIl9pbXBsXCJdLl92aWRlbztcclxuICAgICAgICAgICAgc291cmNlTm9kZS5jdXJyZW50VGltZSA9IHRpbWU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdmlkZW9Ob2RlLmdldENvbXBvbmVudChjYy5WaWRlb1BsYXllcilbXCJfaW1wbFwiXS5fdmlkZW8uY3VycmVudFRpbWUgPSB0aW1lO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAgKiDorr7nva7op4bpopHmkq3mlL7pgJ/njodcclxuICAgICAgKiBAcGFyYW0gdmlkZW8gY2MuTm9kZeinhumikeiKgueCuVxyXG4gICAgICAqIEBwYXJhbSByYXRlIG51bWJlclxyXG4gICAgICAqL1xyXG4gICAgc2V0VmlkZW9QbGF5YmFja1JhdGUodmlkZW9Ob2RlOiBjYy5Ob2RlLCByYXRlOiBudW1iZXIpIHtcclxuICAgICAgICBpZiAoY2Muc3lzLm9zID09PSBjYy5zeXMuT1NfSU9TICYmIGNjLnN5cy5icm93c2VyVHlwZSA9PT0gY2Muc3lzLkJST1dTRVJfVFlQRV9NT0JJTEVfUVEpIHtcclxuICAgICAgICAgICAgLy/lnKhpb3PkuIpxcea1j+iniOWZqOmcgOimgeeJueauiuWkhOeQhlxyXG4gICAgICAgICAgICBsZXQgc291cmNlTm9kZSA9IHZpZGVvTm9kZS5nZXRDb21wb25lbnQoY2MuVmlkZW9QbGF5ZXIpW1wiX2ltcGxcIl0uX3ZpZGVvO1xyXG4gICAgICAgICAgICBzb3VyY2VOb2RlLnBsYXliYWNrUmF0ZSA9IHJhdGU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdmlkZW9Ob2RlLmdldENvbXBvbmVudChjYy5WaWRlb1BsYXllcilbXCJfaW1wbFwiXS5fdmlkZW8ucGxheWJhY2tSYXRlID0gcmF0ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDorr7nva7op4bpopHmqKHns4pcclxuICAgICAqIEBwYXJhbSB2aWRlb05vZGUgY2MuTm9kZeinhumikeiKgueCuVxyXG4gICAgICovXHJcbiAgICBzZXRWaWRlb0JsdXIodmlkZW9Ob2RlOiBjYy5Ob2RlKSB7XHJcbiAgICAgICAgaWYgKGNjLnN5cy5vcyA9PT0gY2Muc3lzLk9TX0lPUyAmJiBjYy5zeXMuYnJvd3NlclR5cGUgPT09IGNjLnN5cy5CUk9XU0VSX1RZUEVfTU9CSUxFX1FRKSB7XHJcbiAgICAgICAgICAgIC8v5ZyoaW9z5LiKcXHmtY/op4jlmajpnIDopoHnibnmrorlpITnkIZcclxuICAgICAgICAgICAgbGV0IHNvdXJjZU5vZGUgPSB2aWRlb05vZGUuZ2V0Q29tcG9uZW50KGNjLlZpZGVvUGxheWVyKVtcIl9pbXBsXCJdLl92aWRlbztcclxuICAgICAgICAgICAgc291cmNlTm9kZS5zdHlsZS5maWx0ZXIgPSBcImJsdXIoMjBweClcIjtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB2aWRlb05vZGUuZ2V0Q29tcG9uZW50KGNjLlZpZGVvUGxheWVyKVtcIl9pbXBsXCJdLl92aWRlby5zdHlsZS5maWx0ZXIgPSBcImJsdXIoMjBweClcIjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICog5rC05bmz57+76L2s77yI5Y2h54mH57+76L2s77yJXHJcbiAgICogQHBhcmFtIG5vZGUg6IqC54K5XHJcbiAgICogQHBhcmFtIGR1cmF0aW9uIOaAu+aXtumVv1xyXG4gICAqIEBwYXJhbSBvbk1pZGRsZSDkuK3pl7TnirbmgIHlm57osINcclxuICAgKiBAcGFyYW0gb25Db21wbGV0ZSDlrozmiJDlm57osINcclxuICAgKi9cclxuICAgIGZsaXAobm9kZTogY2MuTm9kZSwgZHVyYXRpb246IG51bWJlciwgb25NaWRkbGU/OiBGdW5jdGlvbiwgb25Db21wbGV0ZT86IEZ1bmN0aW9uKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlPHZvaWQ+KHJlcyA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHR3ZWVuID0gY2MudHdlZW4sXHJcbiAgICAgICAgICAgICAgICB0aW1lID0gZHVyYXRpb24gLyAzLFxyXG4gICAgICAgICAgICAgICAgc2NhbGVYID0gbm9kZS5zY2FsZSxcclxuICAgICAgICAgICAgICAgIHNrZXdZID0gc2NhbGVYID4gMCA/IDIwIDogLTIwO1xyXG4gICAgICAgICAgICB0d2Vlbihub2RlKVxyXG4gICAgICAgICAgICAgICAgLnBhcmFsbGVsKFxyXG4gICAgICAgICAgICAgICAgICAgIHR3ZWVuKCkudG8odGltZSwgeyBzY2FsZVg6IDAgfSwgeyBlYXNpbmc6ICdxdWFkSW4nIH0pLFxyXG4gICAgICAgICAgICAgICAgICAgIHR3ZWVuKCkudG8odGltZSwgeyBza2V3WTogLXNrZXdZIH0sIHsgZWFzaW5nOiAncXVhZE91dCcgfSksXHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgb25NaWRkbGUgJiYgb25NaWRkbGUoKTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAucGFyYWxsZWwoXHJcbiAgICAgICAgICAgICAgICAgICAgdHdlZW4oKS50byh0aW1lLCB7IHNjYWxlWDogLXNjYWxlWCB9LCB7IGVhc2luZzogJ3F1YWRPdXQnIH0pLFxyXG4gICAgICAgICAgICAgICAgICAgIHR3ZWVuKCkudG8odGltZSwgeyBza2V3WTogMCB9LCB7IGVhc2luZzogJ3F1YWRJbicgfSksXHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgb25NaWRkbGUgJiYgb25NaWRkbGUoKTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAucGFyYWxsZWwoXHJcbiAgICAgICAgICAgICAgICAgICAgdHdlZW4oKS50byh0aW1lLCB7IHNjYWxlWDogc2NhbGVYIH0sIHsgZWFzaW5nOiAncXVhZE91dCcgfSksXHJcbiAgICAgICAgICAgICAgICAgICAgdHdlZW4oKS50byh0aW1lLCB7IHNrZXdZOiAwIH0sIHsgZWFzaW5nOiAncXVhZEluJyB9KSxcclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgIC5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBvbkNvbXBsZXRlICYmIG9uQ29tcGxldGUoKTtcclxuICAgICAgICAgICAgICAgICAgICByZXMoKTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAuc3RhcnQoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAqIDJE6IqC54K557uVWei9tOaXi+i9rOS4gOWciOWKqOeUu1xyXG4gICogQHBhcmFtIG5vZGUg6KaB5peL6L2s55qE6IqC54K5XHJcbiAgKiBAcGFyYW0gZHVyYXRpb24g5Yqo55S75pe26ZW/XHJcbiAgKiBAcGFyYW0gb25Db21wbGV0ZSDlrozmiJDlm57osINcclxuICAqL1xyXG4gICAgZmxpcFkobm9kZTogY2MuTm9kZSwgZHVyYXRpb246IG51bWJlciwgb25Db21wbGV0ZT86IEZ1bmN0aW9uKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlPHZvaWQ+KHJlcyA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IG9yaWdpbmFsU2NhbGUgPSBub2RlLnNjYWxlWDtcclxuXHJcbiAgICAgICAgICAgIC8vIOS9v+eUqOabtOW5s+a7keeahOe8k+WKqOWHveaVsFxyXG4gICAgICAgICAgICBjb25zdCBzbW9vdGhFYXNpbmcgPSB7XHJcbiAgICAgICAgICAgICAgICBlYXNpbmc6ICdzaW5lSW5PdXQnLFxyXG4gICAgICAgICAgICAgICAgcHJvZ3Jlc3M6IChzdGFydCwgZW5kLCBjdXJyZW50LCByYXRpbykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIOS9v+eUqOabtOW5s+a7keeahOabsue6v1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHByb2dyZXNzID0gcmF0aW8gPCAwLjVcclxuICAgICAgICAgICAgICAgICAgICAgICAgPyAyICogcmF0aW8gKiByYXRpb1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA6IDEgLSBNYXRoLnBvdygtMiAqIHJhdGlvICsgMiwgMikgLyAyO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBzdGFydCArIChlbmQgLSBzdGFydCkgKiBwcm9ncmVzcztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIGNjLnR3ZWVuKG5vZGUpXHJcbiAgICAgICAgICAgICAgICAudG8oZHVyYXRpb24sIHtcclxuICAgICAgICAgICAgICAgICAgICBzY2FsZVg6IC1vcmlnaW5hbFNjYWxlXHJcbiAgICAgICAgICAgICAgICB9LCBzbW9vdGhFYXNpbmcpXHJcbiAgICAgICAgICAgICAgICAuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgb25Db21wbGV0ZSAmJiBvbkNvbXBsZXRlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzKCk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLnN0YXJ0KCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gLi4uIGV4aXN0aW5nIGNvZGUgLi4uXHJcblxyXG4gICAgLy/mlbDlrZfmjInnhafkuInkuKrkuIDnu4TnlKjpgJflj7fpmpTlvIBcclxuICAgIGZvcm1hdE51bWJlcihudW1iZXIpIHtcclxuICAgICAgICByZXR1cm4gbnVtYmVyLnRvU3RyaW5nKCkucmVwbGFjZSgvXFxCKD89KFxcZHszfSkrKD8hXFxkKSkvZywgXCIsXCIpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgVXRpbHMgPSBVdGlsc0NsYXNzLmdldEluc3RhbmNlKCk7Il19
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Data/ConstValue.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '51e6eR/VtZN15JyEWCt9kup', 'ConstValue');
// Script/Data/ConstValue.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConstValue = void 0;
var ConstValue = /** @class */ (function () {
    function ConstValue() {
    }
    ConstValue.AUDIO_DIR = "audios/"; //音频
    ConstValue.VIDEOS_DIR = "videos/"; //
    ConstValue.IMAGES_DIR = 'images/'; //图片
    ConstValue.ATLAS_DIR = 'atlas/'; //图集
    ConstValue.JSON_DIR = "json/";
    ConstValue.PREFAB_DIR = "prefabs/"; //预制体
    return ConstValue;
}());
exports.ConstValue = ConstValue;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxEYXRhXFxDb25zdFZhbHVlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0lBQUE7SUFPQSxDQUFDO0lBTjBCLG9CQUFTLEdBQUcsU0FBUyxDQUFDLENBQUEsSUFBSTtJQUMxQixxQkFBVSxHQUFHLFNBQVMsQ0FBQyxDQUFBLEVBQUU7SUFDekIscUJBQVUsR0FBRyxTQUFTLENBQUMsQ0FBQSxJQUFJO0lBQzNCLG9CQUFTLEdBQUcsUUFBUSxDQUFDLENBQUEsSUFBSTtJQUN6QixtQkFBUSxHQUFHLE9BQU8sQ0FBQztJQUNuQixxQkFBVSxHQUFHLFVBQVUsQ0FBQyxDQUFBLEtBQUs7SUFDeEQsaUJBQUM7Q0FQRCxBQU9DLElBQUE7QUFQWSxnQ0FBVSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBDb25zdFZhbHVlIHtcclxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgQVVESU9fRElSID0gXCJhdWRpb3MvXCI7Ly/pn7PpopFcclxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgVklERU9TX0RJUiA9IFwidmlkZW9zL1wiOy8vXHJcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IElNQUdFU19ESVIgPSAnaW1hZ2VzLyc7Ly/lm77niYdcclxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgQVRMQVNfRElSID0gJ2F0bGFzLyc7Ly/lm77pm4ZcclxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgSlNPTl9ESVIgPSBcImpzb24vXCI7XHJcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFBSRUZBQl9ESVIgPSBcInByZWZhYnMvXCI7Ly/pooTliLbkvZNcclxufSJdfQ==
//------QC-SOURCE-SPLIT------
