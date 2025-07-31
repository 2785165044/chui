import { _decorator, Animation, Component, EventHandler, EventTouch, Node, tween, Tween, Vec2, Vec3 } from "cc";
import GameData from "../Main/GameData";
import { EnumRedAnimName } from "../Enum/EnumAnimName";
import { EnumGearState, EnumTaskStep, EnumWheelState } from "../Enum/EnumControllerState";
import TaskManager from "../Task/TaskManager";
import TaskItem from "../Task/TaskItem";

import { DEBUG } from "cc/env";
import GameManager from "../Main/GameManager";
import AudioManager, { AudioType } from "../../Base/AudioManager";
const { ccclass, property } = _decorator;

/** 方向盘 */
@ccclass("GameWheel")
export default class GameWheel extends Component {

    @property(Node)
    touchNode: Node = null;
    @property(Node)
    gearTouchNode: Node = null;
    @property(Node)
    gearTouchNode2: Node = null;
    @property(Node)
    wheel: Node = null;
    @property(Node)
    wheelSp: Node = null;
    @property(Node)
    gear: Node = null;
    @property(Node)
    gear_up: Node = null;
    @property(Node)
    gear_down: Node = null;
    @property(Node)
    guide_wheel: Node = null;
    @property(Node)
    guide_wheel_left: Node = null;
    @property(Node)
    guide_wheel_right: Node = null;
    @property(Node)
    guide_gear: Node = null;
    @property(Node)
    guide_gear_up: Node = null;
    @property(Node)
    guide_gear_down: Node = null;
    @property(Node)
    red: Node = null;
    @property(Animation)
    redAnim: Animation = null;
    @property(Node)
    gear2: Node = null;
    @property(Node)
    gear_up2: Node = null;
    @property(Node)
    gear_down2: Node = null;
    @property(Node)
    guide_gear2: Node = null;
    @property(Node)
    guide_gear_up2: Node = null;
    @property(Node)
    guide_gear_down2: Node = null;
    @property([Node])
    heads: Node[] = [];
    @property(Number)
    gearDist: number = 5;
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

    private startPos: Vec2 = null;
    private nowPos: Vec2 = null;
    private angle: number = 0;
    private nowAngle: number = 0;
    private isTouch: boolean = false;
    private isTouchGear: boolean = false;
    private isTouchMoveGear: boolean = false;
    private gearStartPos: Vec2 = null;
    private gearNowPos: Vec2 = null;

    public static inst: GameWheel = null;
    onLoad() {
        GameWheel.inst = this;
    }

    start() {
        this.registerEvent();
        this.onInit();
    }

    protected onEnable(): void {
        this.heads.forEach(head => {
            head.active = !GameData.isGoogle;
        });
    }

    private registerEvent(): void {
        this.touchNode.on(Node.EventType.TOUCH_START, this.onTouchWheelStart, this);
        this.touchNode.on(Node.EventType.TOUCH_MOVE, this.onTouchWheelMove, this);
        this.touchNode.on(Node.EventType.TOUCH_END, this.onTouchWheelEnd, this);
        this.touchNode.on(Node.EventType.TOUCH_CANCEL, this.onTouchWheelEnd, this);

        // this.gearTouchNode.on(Node.EventType.TOUCH_START, this.onTouchGearStart, this);
        // this.gearTouchNode.on(Node.EventType.TOUCH_MOVE, this.onTouchGearMove, this);
        // this.gearTouchNode.on(Node.EventType.TOUCH_END, this.onTouchGearEnd, this);
        // this.gearTouchNode.on(Node.EventType.TOUCH_CANCEL, this.onTouchGearEnd, this);

        this.gearTouchNode2.on(Node.EventType.TOUCH_START, this.onTouchGearStart2, this);
        this.gearTouchNode2.on(Node.EventType.TOUCH_MOVE, this.onTouchGearMove2, this);
        this.gearTouchNode2.on(Node.EventType.TOUCH_END, this.onTouchGearEnd2, this);
        this.gearTouchNode2.on(Node.EventType.TOUCH_CANCEL, this.onTouchGearEnd2, this);
    }

    private get curTask(): TaskItem {
        return null// TaskManager.inst.curTask;
    }

    private onInit() {
        GameData.gearState = EnumGearState.up;
        // GameData.gearGudieState = EnumGearState.null;
        GameData.wheelState = EnumWheelState.stop;
        // GameData.wheelGuideState = EnumWheelState.null;
        this.refreshGearUI();
        this.refreshGearGuideUI();
        this.refreshWheelGuideUI();
        this.red.active = false;
        this.refreshGearUI2();

        this.showGearGuide();
    }

    public refreshGearUI2() {
        if (GameData.isFly) {
            this.gearTouchNode2.active = true;
            this.gear2.active = true;
            this.wheel.active = false;
            this.gear.active = false;
            this.guide_gear2.active = true;
            //this.guide_gear.active = false;
            this.guide_wheel.active = false;
        } else {
            this.gearTouchNode2.active = false;
            this.gear2.active = false;
            this.wheel.active = true;
            this.gear.active = true;
            this.guide_gear2.active = false;
            //this.guide_gear.active = true;
            this.guide_wheel.active = true;
        }
        this.refreshGearGuideUI2();
        switch (GameData.gearState) {
            case EnumGearState.up:
                this.gear_up2.active = true;
                this.gear_down2.active = false;
                break;
            case EnumGearState.down:
                this.gear_up2.active = false;
                this.gear_down2.active = true;
                break;
        }
    }

    public refreshGearGuideUI2() {
        switch (GameData.gearGudieState) {
            case EnumGearState.up:
                this.guide_gear_up2.active = true;
                this.guide_gear_down2.active = false;
                break;
            case EnumGearState.down:
                this.guide_gear_up2.active = false;
                this.guide_gear_down2.active = true;
                break;
            case EnumGearState.null:
                this.guide_gear_up2.active = false;
                this.guide_gear_down2.active = false;
                break;
        }
    }

    public onTouchGearStart2(e: EventTouch) {
        if (GameData.isOver) return;
        if (!GameData.isPlayerMove) return;
        if (GameData.isInterval) return;
        if (this.curTask.isGearLock) {
            return;
        }
        this.isTouchGear = true;
        this.isTouchMoveGear = false;
        this.gearStartPos = e.getUILocation();
        this.gearNowPos = e.getUILocation();
        // this.onTouchWheelMove(e);
    }

    public onTouchGearMove2(e: EventTouch) {
        if (GameData.isOver) return;
        if (!GameData.isPlayerMove) return;
        if (GameData.isInterval) return;
        if (this.curTask.isGearLock) {
            return;
        }
        if (!this.isTouchGear) {
            return;
        }
        this.gearNowPos = e.getUILocation();
        let dis = this.gearNowPos.y - this.gearStartPos.y;
        if (dis > this.gearDist) {
            GameData.gearState = EnumGearState.up;
        } else if (dis < -this.gearDist) {
            GameData.gearState = EnumGearState.down;
        }
        this.isTouchMoveGear = Math.abs(dis) > this.gearDist
        if (this.isTouchMoveGear) {
            if (GameData.gearState != EnumGearState.up) {
                this.redPlay(1);
            } else {
                this.redStop();
                this.refreshGearUI2();
                TaskManager.inst.startNextTask();
            }
        }
    }

    public onTouchGearEnd2(e: EventTouch) {
        if (GameData.isOver) return;
        if (!GameData.isPlayerMove) return;
        if (GameData.isInterval) return;
        // if (this.curTask.isGearLock) {
        //     return;
        // }
        this.isTouchGear = false;
        this.refreshGearUI2();
        if (GameData.gearState != EnumGearState.up && this.isTouchMoveGear) {
            this.onGearWarn(true);
        }
    }

    public onTouchWheelStart(e: EventTouch) {
        if (GameData.isOver) return;
        if (!GameData.isPlayerMove) return;
        if (GameData.isInterval) return;
        if (this.isTouchGear) {
            return;
        }
        // if (!GameData.isMoveEvery) {
        //     if (this.curTask.isWheelLock) {
        //         return;
        //     }
        // }
        this.isTouch = true;
        this.startPos = e.getUILocation();
        this.nowPos = e.getUILocation();
        this.onTouchWheelMove(e);
    }

    public onTouchWheelMove(e: EventTouch) {

        this.guide_wheel.active = false;
        if (GameData.isOver) return;
        if (!GameData.isPlayerMove) return;
        if (GameData.isInterval) return;
        if (this.isTouchGear) {
            return;
        }
        // if (!GameData.isMoveEvery) {
        //     if (this.curTask.isWheelLock) {
        //         return;
        //     }
        // }
        if (!this.isTouch) {
            return;
        }
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
        this.nowAngle = this.angle;
        this.setAngle(this.angle);
        if (this.nowAngle > 0) {
            GameData.wheelState = EnumWheelState.right;
        } else if (this.nowAngle < 0) {
            GameData.wheelState = EnumWheelState.left;
        } else {
            GameData.wheelState = EnumWheelState.stop;
        }
        GameManager.inst.onTouchWheel();
        return; //新添加
        if (GameData.wheelGuideState != EnumWheelState.null) {
            if (GameData.wheelGuideState == GameData.wheelState) {
                this.curTask.isTouchWheel = true;
                this.redStop();
                if (this.curTask.step == EnumTaskStep.init) {
                    TaskManager.inst.startNextTask();
                    GameManager.inst.gameview.setTips();
                } else if (this.curTask.step == EnumTaskStep.wheel_right_4) {
                   
                }
                if (GameData.wheelState == EnumWheelState.right) {
                    if (this.curTask.isCanComplete || this.angle >= this.maxAngle) {
                        this.clearWheelGuide();
                        this.curTask.isWheelLock = true;
                    }
                } else if (GameData.wheelState == EnumWheelState.left) {
                    if (this.curTask.isCanComplete || this.angle <= this.minAngle) {
                        this.clearWheelGuide();
                        this.curTask.isWheelLock = true;
                    }
                }
            } else {
                if (GameData.wheelState != EnumWheelState.stop) {
                    this.redPlay();
                }
            }
        }
    }

    public onTouchWheelEnd(e: EventTouch) {

        
        if (GameData.isOver) return;
        if (!GameData.isPlayerMove) return;
        if (GameData.isInterval) return;
        if (this.isTouchGear) {
            return;
        }
        if (!GameData.isMoveEvery) {
            // if (this.curTask.isWheelLock) {
            //     return;
            // }
            // if (this.curTask.step == EnumTaskStep.init || this.curTask.step == EnumTaskStep.start) {
            //     this.curTask.isTouchWheel = true;
            // } else {
            //     this.curTask.isTouchWheel = false;
            // }
        }
        this.resetWheel();
        this.setAngle(this.angle);
        if (this.nowAngle != 0) {
            if (GameData.wheelGuideState != EnumWheelState.null && GameData.wheelGuideState != GameData.wheelState) {
                this.onWheelWarn();
            }
        }
    }

    public resetWheel() {
        this.isTouch = false;
        this.startPos = null;
        this.nowPos = null;
    }

    private setAngle(angle: number) {
        this.wheel.angle = -angle;
        this.callBack.forEach(c => c.emit([angle, this.isTouch]));
    }

    protected update(dt: number): void {
        if (GameData.isOver) return;
        if (!GameData.isPlayerMove) return;
        if (this.isTouch) {
            // if (this.curTask) {
            //     if (this.curTask.isCanComplete) {
            //         this.clearWheelGuide();
            //         this.curTask.isWheelLock = true;
            //     }
            // }

            // if (Math.abs(this.nowAngle - this.angle) < 1) {
            //     this.nowAngle = this.angle;
            // } else {
            //     let com = this.nowAngle > this.angle ? -this.speed : this.speed;
            //     let speed = com * dt;
            //     this.nowAngle += speed;
            //     if (this.nowAngle > this.maxAngle) {
            //         this.nowAngle = this.maxAngle;
            //     }
            //     if (this.nowAngle < this.minAngle) {
            //         this.nowAngle = this.minAngle;
            //     }
            // }
            // this.setAngle(this.nowAngle);
        } else {
            if (this.angle == 0) {
                return;
            }
            let com = this.backSpeed;
            if (this.nowAngle > 0) {
                com = -com;
            }
            this.nowAngle += com * dt;
            if (Math.abs(this.nowAngle) < 5) {
                this.angle = 0;
                this.nowAngle = 0;
                GameData.wheelState = EnumWheelState.stop;
                this.redStop();
            }
            this.setAngle(this.nowAngle);
        }
    }

    /** 档位点击事件 */
    public onGearClick() {
        AudioManager.instance.play(AudioType.huandang);
        console.log("onGearClick");
        if (GameData.isOver) return;
        if (!GameData.isPlayerMove) return;
        if (GameData.isInterval) return;
        // if (this.curTask.isGearLock) {
        //     return;
        // }
        switch (GameData.gearState) {
            case EnumGearState.up:
                GameData.gearState = EnumGearState.down;
                break;
            case EnumGearState.down:
                GameData.gearState = EnumGearState.up;
                break;
        }
        this.refreshGearUI();

        GameManager.inst.onGameGearClick();
        // if (this.curTask.gearGuideState != EnumGearState.null) {
        //     if (GameData.gearState != this.curTask.gearGuideState) {
        //         this.redPlay(1);
        //     } else {
        //         this.curTask.gearGuideState = EnumGearState.null;
        //         TaskManager.inst.startNextTask();
        //     }
        // }
    }

    public onTouchGearStart(e: EventTouch) {

        console.log("onTouchGearStart");
        if (GameData.isOver) return;
        if (!GameData.isPlayerMove) return;
        if (GameData.isInterval) return;
        if (this.curTask.isGearLock) {
            return;
        }
        this.isTouchGear = true;
        this.isTouchMoveGear = false;
        this.gearStartPos = e.getUILocation();
        this.gearNowPos = e.getUILocation();
        // this.onTouchWheelMove(e);
    }

    public onTouchGearMove(e: EventTouch) {
        if (GameData.isOver) return;
        if (!GameData.isPlayerMove) return;
        if (GameData.isInterval) return;
        if (this.curTask.isGearLock) {
            return;
        }
        if (!this.isTouchGear) {
            return;
        }
        this.gearNowPos = e.getUILocation();
        let dis = this.gearNowPos.y - this.gearStartPos.y;
        if (dis > this.gearDist) {
            GameData.gearState = EnumGearState.up;
        } else if (dis < -this.gearDist) {
            GameData.gearState = EnumGearState.down;
        }
        this.isTouchMoveGear = Math.abs(dis) > this.gearDist
        if (this.curTask.gearGuideState != EnumGearState.null && this.isTouchMoveGear) {
            if (GameData.gearState != this.curTask.gearGuideState) {
                this.redPlay(1);
            } else {
                this.redStop();
                this.refreshGearUI();
                this.curTask.gearGuideState = EnumGearState.null;
                TaskManager.inst.startNextTask();
            }
        }
    }

    public onTouchGearEnd(e: EventTouch) {
        if (GameData.isOver) return;
        if (!GameData.isPlayerMove) return;
        if (GameData.isInterval) return;
        // if (this.curTask.isGearLock) {
        //     return;
        // }
        this.isTouchGear = false;
        this.refreshGearUI();
        if (GameData.gearGudieState != EnumGearState.null && GameData.gearState != GameData.gearGudieState && this.isTouchMoveGear) {
            this.onGearWarn(true);
        }
    }

    public refreshGearUI() {
        switch (GameData.gearState) {
            case EnumGearState.up:
                this.gear_up.active = true;
                this.gear_down.active = false;
                break;
            case EnumGearState.down:
                this.gear_up.active = false;
                this.gear_down.active = true;
                break;
        }
    }

    public refreshGearGuideUI() {
        switch (GameData.gearGudieState) {
            case EnumGearState.up:
                this.guide_gear_up.active = true;
                this.guide_gear_down.active = false;
                break;
            case EnumGearState.down:
                this.guide_gear_up.active = false;
                this.guide_gear_down.active = true;
                break;
            case EnumGearState.null:
                this.guide_gear_up.active = false;
                this.guide_gear_down.active = false;
                break;
        }
    }

    public refreshWheelGuideUI() {
        switch (GameData.wheelGuideState) {
            case EnumWheelState.left:
                this.guide_wheel_left.active = true;
                this.guide_wheel_right.active = false;
                break;
            case EnumWheelState.right:
                this.guide_wheel_left.active = false;
                this.guide_wheel_right.active = true;
                break;
            case EnumWheelState.null:
            case EnumWheelState.stop:
            case EnumWheelState.space:
                this.guide_wheel_left.active = false;
                this.guide_wheel_right.active = false;
                break;
        }
    }

    private clearWheelGuide() {
        GameData.wheelGuideState = EnumWheelState.null;
        this.refreshWheelGuideUI();
    }

    /** 红屏警告动画 */
    public redPlay(type: number = 0) {
        if (DEBUG) {
            console.log("***************** red *****************")
            console.log(this.curTask.step, this.curTask.notes);
            console.log("type = ", type);
            console.log("wheelState = ", GameData.wheelState);
            console.log("wheelGuideState = ", GameData.wheelGuideState);
            console.log("gearState = ", GameData.gearState);
            console.log("gearGudieState = ", GameData.gearGudieState);
            console.log("***************** red end *****************")
        }
        if (!this.red.active) {
            this.red.active = true;
            this.redAnim.stop();
            this.redAnim.play(EnumRedAnimName.red_start);
        }
    }

    /** 红屏警告动画结束 */
    public redStop() {
        if (this.red.active) {
            this.redAnim.stop();
            this.redAnim.play(EnumRedAnimName.red_end);
            this.redAnim.once(Animation.EventType.FINISHED, () => {
                this.red.active = false;
            });
        }
    }

    /** 方向盘警告动画 */
    public onWheelWarn() {
        Tween.stopAllByTarget(this.wheelSp);
        this.wheelSp.position = Vec3.ZERO;
        tween(this.wheelSp)
            .by(0.07, { position: new Vec3(5, 0, 0) }, { easing: 'quadIn' })
            .by(0.1, { position: new Vec3(-10, 0, 0) }, { easing: 'quartOut' })
            .by(0.1, { position: new Vec3(10, 0, 0) }, { easing: 'quartOut' })
            .by(0.07, { position: new Vec3(-5, 0, 0) }, { easing: 'quartOut' })
            .call(() => {
                this.wheelSp.position = Vec3.ZERO;
            })
            .start()
    }

    /** 齿轮警告动画 */
    public onGearWarn(isStopRed: boolean = false) {
        Tween.stopAllByTarget(this.gearTouchNode);
        this.gearTouchNode.position = Vec3.ZERO;
        tween(this.gearTouchNode)
            .by(0.07, { position: new Vec3(5, 0, 0) }, { easing: 'quadIn' })
            .by(0.1, { position: new Vec3(-10, 0, 0) }, { easing: 'quartOut' })
            .by(0.1, { position: new Vec3(10, 0, 0) }, { easing: 'quartOut' })
            .by(0.07, { position: new Vec3(-5, 0, 0) }, { easing: 'quartOut' })
            .call(() => {
                this.gearTouchNode.position = Vec3.ZERO;
                if (isStopRed) {
                    this.redStop();
                }
            })
            .start()
    }

    showGearGuide() {
        this.guide_gear.active = true;
        this.guide_gear_down.active = true;
    }

    public hideGearGuide() {
        //this.guide_wheel_left.active = true;
        this.guide_wheel_right.active = true;
        this.guide_wheel.active = true;
        this.gear.active = false;
        // tween(this.gear).delay(0.1).call(() => {
            
        // })
        this.guide_gear.active = false;
        this.guide_gear_down.active = false;
    }

    public hideWheel() {
        
        this.wheel.active = false;
    }


    public showWheel() {
        this.wheel.active = true;
        this.gear.active = true;
        this.gear_down.active = true;
        this.guide_gear_up.active = true;
        this.guide_gear.active = true;
    }
}