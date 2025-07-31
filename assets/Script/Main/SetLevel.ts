
import { EventType } from "../Data/EventType";
import { GameManager } from "../Manager/GameManager";
import { ListenerManager } from "../Manager/ListenerManager";
import { Utils } from "../Manager/Utils";

const { ccclass, property } = cc._decorator;

@ccclass
export default class SetLevel extends cc.Component {

    // onLoad () {}

    /**行数 */
    private rowNum: number = 5;
    /**列数 */
    private colNum: number = 5;
    /**行差 */
    private rowDif: number = 110;
    /**列差 */
    private colDif: number = 100;
    /**中心点位置坐标 */
    private centerPos: cc.Vec2 = cc.v2(0, 0);
    //左上角位置
    private initPos: cc.Vec2 = null;

    private initNode: cc.Node = null;

    private itemParent: cc.Node = null;

    onLoad() {
        this.initNode = this.node.getChildByName("initNode");
        this.itemParent = this.node.getChildByName("parent");
        this.initPos = cc.v2(this.centerPos.x - this.colDif * 2, this.centerPos.y);
    }

    //显示当前关卡
    displayLevel(numberArr: number[][]) {
        let newNumberArr: number[][] = [];
        for (let col = 0; col < this.colNum; col++) {
            let colArr: number[] = numberArr[col];
            newNumberArr.push(colArr);
            for (let row = 0; row < this.rowNum; row++) {
                this.createItem(row, col, colArr[row]);
            }
        }
        return newNumberArr;
    }

    createItem(row: number, col: number, labelNum: number) {
        //确定显示位置
        let item: cc.Node = cc.instantiate(this.initNode);
        let pos: cc.Vec2 = cc.v2(this.initPos.x + col * this.colDif + (col - 2) * 10 * row, this.initPos.y - row * this.rowDif);
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
            Utils.setSpriteFrame(item.getChildByName("right"), "item" + col);
        } else {
            item.getChildByName("stone").active = true;
            item.getChildByName("label").active = true;
            item.getChildByName("right").active = false;
            //添加点击事件
            this.addTouchEvent(item);
        }
    }

    addTouchEvent(item: cc.Node) {
        item.on(cc.Node.EventType.TOUCH_START, this.onTouchNum, this);
    }

    removeTouchEvent(item: cc.Node) {
        item.off(cc.Node.EventType.TOUCH_START, this.onTouchNum, this);
    }
    onTouchNum(e) {
        let touchNode: cc.Node = e.target;
        ListenerManager.dispatch(EventType.TOUCH_ITEM, touchNode);
    }


    // update (dt) {}
}
