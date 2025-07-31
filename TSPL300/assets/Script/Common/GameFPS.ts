import { _decorator, Component, game, Label, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('GameFPS')
export class GameFPS extends Component {
    private text: Label = null;
    protected onLoad(): void {
        this.text = this.node.getComponent(Label);
    }

    update(deltaTime: number) {
        this.text.string = Math.floor(1000 / (deltaTime * 60)/1000*60) + "";
    }
}