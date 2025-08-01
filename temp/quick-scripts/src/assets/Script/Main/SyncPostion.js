"use strict";
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