
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