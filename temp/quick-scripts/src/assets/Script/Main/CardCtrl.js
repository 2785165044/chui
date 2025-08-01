"use strict";
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