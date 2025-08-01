"use strict";
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