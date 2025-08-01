
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