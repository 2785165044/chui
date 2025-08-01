"use strict";
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