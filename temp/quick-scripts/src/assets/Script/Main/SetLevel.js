"use strict";
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