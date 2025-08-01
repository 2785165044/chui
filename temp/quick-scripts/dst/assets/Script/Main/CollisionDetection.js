
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