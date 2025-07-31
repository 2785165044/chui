import { _decorator, Component, EventTouch, Input, Node } from 'cc';
import GameManager from './GameManager';
const { ccclass, property } = _decorator;

@ccclass('GameCtr')
export class GameCtr extends Component {

    public static inst: GameCtr = null;
    start() {
        GameCtr.inst = this;
        this.onEvent();
    }

    private onEvent() {
        this.node.on(Input.EventType.TOUCH_START, this.startTouch, this);
        this.node.on(Node.EventType.TOUCH_CANCEL, this.onTouchEnd, this, true);
        this.node.on(Node.EventType.TOUCH_END, this.onTouchEnd, this, true);
    }

    private offEvent() {
        this.node.off(Input.EventType.TOUCH_START, this.startTouch, this);
        this.node.off(Node.EventType.TOUCH_CANCEL, this.onTouchEnd, this, true);
        this.node.off(Node.EventType.TOUCH_END, this.onTouchEnd, this, true);
    }

    protected onDisable(): void {
        this.offEvent();
    }

    startTouch(event: EventTouch) {
        GameManager.inst.startTouch(event);
    }
    
    onTouchEnd(event: EventTouch) {

    }

}


