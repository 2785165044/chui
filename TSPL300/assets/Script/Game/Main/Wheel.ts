import { _decorator, Component, EventHandler, EventTouch, find, Node, UIOpacity, Vec2 } from "cc";
import GameData from "./GameData";
const { ccclass, property } = _decorator;

/** 方向盘 */
@ccclass("Wheel")
export default class Wheel extends Component {

    @property(Node)
    wheel: Node = null;
    @property(Number)
    maxAngle: number = 40;
    @property(Number)
    minAngle: number = -40;
    @property(Number)
    dist: number = 5;
    @property(Number)
    speed: number = 10;
    @property(Number)
    backSpeed: number = 20;
    /** 摇杆移动回调 */
    @property({ type: [EventHandler], tooltip: '回调' })
    callBack: EventHandler[] = [];

    private isRunning = true;
    private startPos: Vec2 = null;
    private nowPos: Vec2 = null;
    private angle: number = 0;
    private nowAngle: number = 0;
    private isTouch: boolean = false;

    private uiOpacity: UIOpacity = null;

    start() {
        this.uiOpacity = this.node.getComponent(UIOpacity);
        this.uiOpacity.opacity = 0;
        this.registerEvent(false);
        this.onInit();
    }

    canvas: Node;
    public registerEvent(isOff: boolean): void {
        this.canvas = find("Canvas");
        // this.canvas.on(Node.EventType.TOUCH_START, this.onTouchClick, this);
        this.canvas.on(Node.EventType.TOUCH_START, this.onTouchStart, this);
        this.canvas.on(Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
        this.canvas.on(Node.EventType.TOUCH_END, this.onTouchEnd, this);
        this.canvas.on(Node.EventType.TOUCH_CANCEL, this.onTouchEnd, this);
        if (isOff) this.canvas.off(Node.EventType.TOUCH_START, this.onTouchStart, this);
    }

    onInit() {
        this.angle = 0;
        this.nowAngle = 0;
        this.setAngle(this.nowAngle);
    }

    onTouchClick(e: EventTouch) {
        if (!this.isRunning) {
            return;
        }
        if (GameData.isOver) return;
        if (!GameData.isPlayerMove) return;
        if (GameData.isInterval) return;
        this.startPos = e.getUILocation();
        this.nowPos = e.getUILocation();
        this.onTouchMove(e);
    }

    onTouchStart(e: EventTouch) {
        if (!this.isRunning) {
            return;
        }
        if (GameData.isOver) return;
        if (!GameData.isPlayerMove) return;
        if (GameData.isInterval) return;
        this.uiOpacity.opacity = 255;
        this.isTouch = true;
        this.startPos = e.getUILocation();
        this.nowPos = e.getUILocation();
        this.onTouchMove(e);
    }

    onTouchMove(e: EventTouch) {
        if (!this.isRunning) {
            return;
        }
        if (GameData.isOver) return;
        if (!GameData.isPlayerMove) return;
        if (GameData.isInterval) return;

        let pos = e.getUILocation();
        let num = pos.x - this.nowPos.x;
        let angle = num / this.dist;
        this.angle += angle;
        if (this.angle > this.maxAngle) {
            this.angle = this.maxAngle;
        }
        if (this.angle < this.minAngle) {
            this.angle = this.minAngle;
        }
        this.nowPos = pos;
        // this.setAngle();
    }

    onTouchEnd(e: EventTouch) {
        if (!this.isRunning) {
            return;
        }
        if (GameData.isOver) return;
        this.isTouch = false;
        // this.setAngle();
        this.startPos = null;
        this.nowPos = null;
    }

    stopNode() {
        this.onTouchEnd(null);
        this.isRunning = false;
    }

    private setAngle(angle: number) {
        this.wheel.angle = -angle;
        this.callBack.forEach(c => c.emit([angle]));
    }

    protected update(dt: number): void {
        if (GameData.isOver) return;
        if (!GameData.isPlayerMove) return;
        if (this.isTouch) {
            if (Math.abs(this.nowAngle - this.angle) < 1) {
                this.nowAngle = this.angle;
            } else {
                let com = this.nowAngle > this.angle ? -this.speed : this.speed;
                let speed = com * dt;
                this.nowAngle += speed;
                if (this.nowAngle > this.maxAngle) {
                    this.nowAngle = this.maxAngle;
                }
                if (this.nowAngle < this.minAngle) {
                    this.nowAngle = this.minAngle;
                }
            }
            this.setAngle(this.nowAngle);
        } else {
            if (this.angle == 0) {
                return;
            }
            let com = this.backSpeed;
            if (this.nowAngle > 0) {
                com = -com;
            }
            this.nowAngle += com * dt;
            if (Math.abs(this.nowAngle) < 1) {
                this.angle = 0;
                this.nowAngle = 0;
            }
            this.setAngle(this.nowAngle);
        }
    }

}