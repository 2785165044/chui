"use strict";
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