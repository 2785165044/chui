import { EventType } from "../Data/EventType";
import { GameManager } from "../Manager/GameManager";
import { ListenerManager } from "../Manager/ListenerManager";
import { Utils } from "../Manager/Utils";

const { ccclass, property } = cc._decorator;

@ccclass
export default class Gold extends cc.Component {

    @property(cc.Label)
    private moneyNumLabel: cc.Label = null;
    @property(cc.Label)
    private finalNumLabel: cc.Label = null;

    private maxMoneyNum: number = 3000000;


    start() {
        this.moneyNumLabel.string = GameManager.moneyNum + "";
        ListenerManager.on(EventType.CHANGE_MONEY_VALUE, (num) => {
            this.changeGoldNumber(num);
        }, this);
    }

    changeGoldNumber(num: number) {
        GameManager.moneyNum += num;
        // let curGoldNum = Number(this.moneyNumLabel.string);
        let finalGoldNum = GameManager.moneyNum;
        if (finalGoldNum <= 0) {
            finalGoldNum = 0;
        }
        this.moneyNumLabel.node.active = true;
        this.finalNumLabel.node.active = false;
        this.updateNumberAnim(this.moneyNumLabel.node, finalGoldNum);
    }

    //更新数字变换
    updateNumberAnim(labelNode: cc.Node, curNum: number) {
        let obj = {
            num: 0,
        };
        obj.num = Number(labelNode.getComponent(cc.Label).string);
        cc.tween(obj)
            .to(0.1, { num: curNum }, {
                progress: (start, end, current, t) => {
                    labelNode.getComponent(cc.Label).string = String(Math.ceil(start + (end - start) * t));
                    return start + (end - start) * t;
                }
            })
            .call(() => {
                this.moneyNumLabel.node.active = false;
                this.finalNumLabel.node.active = true;
                this.finalNumLabel.string = Utils.formatNumber(curNum);
            })
            .start();
    }

}
