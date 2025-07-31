import { Component, Label, Tween, _decorator, tween, Node, v3 } from "cc";
import { Number2dText } from "./Number2dText";
import GameData from "../Game/Main/GameData";

const { ccclass, property } = _decorator;

@ccclass('CurrencySprite')
export default class CurrencySprite extends Component {
    @property
    id: string = "0";

    private lable: Label = null;
    private num_2d: Number2dText = null;
    private value: number = -1;
    private time: number = 99;
    protected onLoad(): void {
        this.lable = this.node.getComponent(Label);
        this.num_2d = this.node.getComponent(Number2dText);
    }

    protected lateUpdate(dt: number): void {
        this.time++;
        if (this.time < 20) {
            return;
        }
        let coin = GameData.getCoin(this.id);
        if (this.value != coin) {
            this.value = coin;
            if (this.lable) {
                this.lable.string = coin + "";
            }
            if (this.num_2d) {
                this.num_2d.setNum(coin);
            }
            Tween.stopAllByTarget(this.node);
            tween(this.node)
                .to(0.2, { scale: v3(1.2, 1.2, 1.2) })
                .to(0.2, { scale: v3(1, 1, 1) })
                .start();
        }
    }
}
