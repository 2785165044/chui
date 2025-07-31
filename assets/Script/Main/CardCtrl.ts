import { EventType } from "../Data/EventType";
import { GameManager } from "../Manager/GameManager";
import { ListenerManager } from "../Manager/ListenerManager";
import { SoundManager } from "../Manager/SoundManager";
import { Utils } from "../Manager/Utils";
import Ball from "./Ball";
import SetLevel from "./SetLevel";

const { ccclass, property } = cc._decorator;

@ccclass
export default class CardCtrl extends cc.Component {

    private bingoParent: cc.Node = null;

    private numberNodeParent: cc.Node = null;

    private hand: cc.Node = null;
    //当前需要点击的数字
    private curNum: number = -1;
    //bingo次数
    private bingoNum: number = 0;
    //是否可以点击
    private canTouch: boolean = true;
    //点击正确数量
    private rightNum: number = 0;

    //每列的数字
    private numberArr: number[][] = [];

    //当前需要点击的节点
    private targetNode: cc.Node = null;

    private rowCount: number = 5;

    private colCount: number = 5;

    private selectNode: cc.Node = null;
    start() {
        this.hand = this.node.getChildByName("hand");
        this.bingoParent = this.node.getChildByName("bingoParent");
        this.numberArr = this.node.getComponent(SetLevel).displayLevel(GameManager.cardNumArr);
        this.numberNodeParent = this.node.getChildByName("parent");

        // this.initCheeseBackground();
        // for (let i = 0; i < this.numberNodeParent.childrenCount; i++) {
        // let node = this.numberNodeParent.children[i];
        // let col: number = Number(node.name.split("")[1]);
        // // 如果stone节点需要每列不同的图标，可以在这里设置
        // Utils.setSpriteFrame(node.getChildByName("stone"), "stone" + col);
        // }

        ListenerManager.on(EventType.DISPLAY_HAND, (num: number) => {
            this.targetNode = this.getTargetNode(num);
            if (this.targetNode) {
                this.curNum = num;
                this.displayHand();
                ListenerManager.dispatch(EventType.NEED_TOUCH_CARD, this.targetNode);
            }
        }, this);

        ListenerManager.on(EventType.TOUCH_ITEM, (touchNode: cc.Node) => {
            this.onTouchNum(touchNode);
        }, this);
    }
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
        getTargetNode(num: number) {
        for (let i = 0; i < this.numberNodeParent.childrenCount; i++) {
            let labelNum: number = Number(this.numberNodeParent.children[i].getChildByName("label").getComponent(cc.Label).string);
            if (labelNum == num) {
                return this.numberNodeParent.children[i];
            }
        }
    }

    displayHand() {
        this.unscheduleAllCallbacks();
        this.hand.setPosition(Utils.getNodePos(this.targetNode, this.hand.parent));
        this.hand.active = true;
        this.hand.runAction(
            cc.repeatForever(
                cc.sequence(
                    cc.scaleTo(0.25, 0.9),
                    cc.scaleTo(0.25, 1)
                )
            )
        );

        this.targetNode.getChildByName("tip").active = true;
    }

    hideHand() {
        this.unscheduleAllCallbacks();
        this.hand.stopAllActions();
        this.hand.active = false;
    }

    onTouchNum(touchNode: cc.Node) {
        if (!this.canTouch || touchNode.parent != this.numberNodeParent) {
            return;
        }
        let labelNode: cc.Node = touchNode.getChildByName("label");
        let touchNum: number = Number(labelNode.getComponent(cc.Label).string);
        SoundManager.playEffect("click", false, false, false);

        if (touchNum == this.curNum) {
            this.rightNum += 1;
            this.hideHand();
            //点击正确后全部变为0
            labelNode.getComponent(cc.Label).string = "0";

            touchNode.getChildByName("tip").active = false;
            this.node.getComponent(SetLevel).removeTouchEvent(touchNode);

            touchNode.getChildByName("stone").active = false;
            touchNode.getChildByName("right").active = true;
            let col: number = Number(touchNode.name.split("")[1]);
            // Utils.setSpriteFrame(touchNode.getChildByName("right"), "item" + col);

            Utils.flipY(touchNode.getChildByName("right"), 0.5, () => {
                this.checkBingo(this.numberArr);
            })
            SoundManager.playEffect("fly", false, false, false, 0.5);

            //选择正确
            labelNode.active = false;

            ListenerManager.dispatch(EventType.TOUCH_CARD, touchNode);

            let Particle: cc.Node = touchNode.getChildByName("Particle");
            Particle.active = true;
            Particle.setScale(1);
            Particle.getComponent(cc.ParticleSystem).resetSystem();

        } else {
            SoundManager.playEffect("wrong", false, false, false, 0.5);
            //选择错误
            let wrongNode: cc.Node = touchNode.getChildByName("wrong");
            wrongNode.scale = 0;
            wrongNode.active = true;
            wrongNode.runAction(
                cc.sequence(
                    cc.scaleTo(0.3, 1).easing(cc.easeBackOut()),
                    cc.scaleTo(0.3, 0).easing(cc.easeBackIn()),
                    cc.callFunc(() => {
                        wrongNode.active = false;
                    })
                )
            );
        }

        ListenerManager.dispatch(EventType.START_TIME);
    }

    // 获取节点数字
    private getNodeNumber(node: cc.Node): number {
        return Number(node.getChildByName("label").getComponent(cc.Label).string);
    }

    // 检查一行或一列是否形成Bingo
    private checkLine(start: number, end: number, isRow: boolean): cc.Node[] {
        const nodes: cc.Node[] = [];
        const numbers: number[] = [];

        for (let i = 0; i <= end; i++) {
            const nodeName = isRow ? `${start}${i}` : `${i}${start}`;
            const node = this.numberNodeParent.getChildByName(nodeName);
            if (!node) continue;

            const num = this.getNodeNumber(node);
            if (num <= 0) {
                numbers.push(num);
                nodes.push(node);
            }
        }

        if (nodes.length >= this.rowCount && numbers.indexOf(0) !== -1) {
            return nodes;
        }
        return null;
    }

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
    checkColumn() {
        const nodeArr: cc.Node[][] = [];
        for (let col = 0; col < this.colCount; col++) {
            const lineNodes = this.checkLine(col, this.rowCount - 1, false);
            if (lineNodes) {
                nodeArr.push(lineNodes);
            }
        }
        return nodeArr;
    }

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

    checkBingo(numArr: number[][]) {
        // 检查每一行
        // let rowArr: cc.Node[][] = this.checkRow();

        // 检查每一列
        let colArr: cc.Node[][] = this.checkColumn();

        // 检查对角线
        // let diagArr: cc.Node[][] = this.checkDiagonal();

        let nodeArr: cc.Node[][] = colArr;

        let isBingo: boolean = false;
        if (nodeArr.length > 0) {
            SoundManager.playEffect("upgrade", false, false, false);
            for (let i = 0; i < nodeArr.length; i++) {
                let curArr: cc.Node[] = nodeArr[i];
                for (let j = 0; j < curArr.length; j++) {
                    let node: cc.Node = curArr[j];
                    node.getChildByName("label").getComponent(cc.Label).string = "-1";
                    let right: cc.Node = node.getChildByName("right");
                    let col: number = Number(node.name.split("")[1]);
                    let item: cc.Node = node.getChildByName("item");
                    Utils.setSpriteFrame(item, "fruit" + col);
                    item.active = true;
                    item.scale = 0;
                    item.runAction(
                        cc.sequence(
                            cc.delayTime(0.12 * j),
                            cc.callFunc(() => {
                                right.active = false;
                                let star: cc.Node = node.getChildByName("star");
                                star.active = true;
                                star.getComponent(cc.Animation).play();
                                star.getComponent(cc.Animation).on(cc.Animation.EventType.FINISHED, () => {
                                    star.active = false;
                                });
                            }),
                            cc.scaleTo(0.15, 0.6).easing(cc.easeBackOut()),
                            cc.scaleTo(0.15, 0.5),
                            cc.delayTime(0.15),
                            cc.callFunc(() => {
                                if (!isBingo) {
                                    isBingo = true;
                                    this.displayBingo(col);
                                }
                            }),
                        ),
                    )
                }
            }
        }
    }

    private spriteName: string[] = ["bingo", "double bingo", "trible bingo", "mega bingo"];
    //显示bingo动画
    displayBingo(index: number) {
        this.canTouch = false;
        this.bingoNum += 1;
        if (this.bingoNum >= 4) {
            this.bingoNum = 4;
        }
        let star: cc.Node = this.bingoParent.getChildByName("star");
        this.playAn(star);

        let bingo: cc.Node = this.bingoParent.getChildByName("bingo");
        bingo.active = true;
        Utils.playSpine(bingo, this.spriteName[this.bingoNum - 1], false, () => {
            bingo.active = false;
            this.canTouch = true;
        });

        let leaf: cc.Node = this.bingoParent.getChildByName("leaf");
        // for (let i = 0; i < leaf.childrenCount; i++) {
        //     let child: cc.Node = leaf.children[i];
        //     child.active = true;
        //     Utils.setSpriteFrame(child, "leaf" + (this.bingoNum - 1));
        // }
        Utils.setSpriteFrame(leaf, "fruit" + index);
        leaf.active = true;
        leaf.setScale(0);
        leaf.runAction(
            cc.sequence(
                cc.scaleTo(0.5, 2).easing(cc.easeBackOut()),
                cc.delayTime(0.5),
                cc.scaleTo(0.5, 0).easing(cc.easeBackIn()),
                cc.callFunc(() => {
                    leaf.active = false;
                })
            )
        );

        SoundManager.playEffect("bingo_x" + this.bingoNum, false, false, false);
    }

    //播放动画
    playAn(node: cc.Node, callback: Function = null) {
        node.active = true;
        node.getComponent(cc.Animation).play();
        node.getComponent(cc.Animation).on(cc.Animation.EventType.FINISHED, () => {
            node.active = false;
            if (callback) {
                callback();
            }
        });
    }
}
