
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