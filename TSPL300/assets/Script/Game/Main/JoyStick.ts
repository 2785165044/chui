import { _decorator, CCInteger, Component, EventHandler, EventTouch, find, Node, UIOpacity, UITransform, v2, v3, Vec2, Vec3 } from 'cc';
import GameData from './GameData';
const { ccclass, property } = _decorator;

@ccclass('Joystick')
export default class Joystick extends Component {
    /** 摇杆移动中心 */
    @property({ type: Node, tooltip: '移动中心节点' })
    midNode: Node = null;
    /** 摇杆背景做监听，体验好些 */
    @property({ type: Node, tooltip: '摇杆背景节点' })
    joyBk: Node = null;
    /** 摇杆最大移动半径 */
    @property({ type: CCInteger, tooltip: '摇杆活动半径' })
    maxR: number = 100;
    /** 摇杆移动回调 */
    @property({ type: [EventHandler], tooltip: '摇杆移动回调' })
    joyCallBack: EventHandler[] = [];

    private isRunning = true;
    private uiOpacity: UIOpacity = null;
    private uiTran: UITransform = null;

    public static inst: Joystick = null;
    onLoad() {
        this.uiOpacity = this.node.getComponent(UIOpacity);
        this.uiTran = this.node.getComponent(UITransform);
        Joystick.inst = this;
        // 归位
        this.goBackMid();
    }

    start() {
        // MsgCenter.Ins.register(MsgBehavior.REGISTER_EVENT, this.registerEvent);        
        this.registerEvent(false);
    }
    canvas: Node;
    public registerEvent(isOff: boolean): void {

        this.canvas = find("Canvas");
        this.canvas.on(Node.EventType.TOUCH_START, this.onTouchClick, this);
        this.canvas.on(Node.EventType.TOUCH_START, this.onTouchStart, this);
        this.canvas.on(Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
        this.canvas.on(Node.EventType.TOUCH_END, this.onTouchEnd, this);
        this.canvas.on(Node.EventType.TOUCH_CANCEL, this.onTouchEnd, this);
        if (isOff) this.canvas.off(Node.EventType.TOUCH_START, this.onTouchStart, this);
    }

    /** 回归中心 */
    goBackMid() {
        this.midNode.setPosition(0, 0, 0);
    }

    onTouchClick(e: EventTouch) {
        if (!this.isRunning) {
            return;
        }
        if (GameData.isOver) return;
        if (!GameData.isPlayerMove) return;
        if(GameData.isInterval) return;
        this.node.active = true;
        const location = e.getUILocation();
        // let pos = this.canvas.getComponent(UITransform).convertToNodeSpaceAR(new Vec3(location.x, location.y));
        this.node.setWorldPosition(location.x,location.y,0);
        this.onTouchMove(e);
        this.uiOpacity.opacity = 255;
        // if (!GameManager.is_play) {
        //     find("AudioSource").getComponent(AudioSource).play();
        //     GameManager.is_play = true;
        // }
    }

    onTouchStart(e: EventTouch) {
        if (!this.isRunning) {
            return;
        }
        if (GameData.isOver) return;
        if (!GameData.isPlayerMove) return;
        if(GameData.isInterval) return;

        this.onTouchMove(e);
    }

    private _targetDirection = Vec3.FORWARD.clone();
    onTouchMove(e: EventTouch) {
        if (!this.isRunning) {
            return;
        }
        if (GameData.isOver) return;
        if (!GameData.isPlayerMove) return;
        if(GameData.isInterval) return;

        let name = "walk";
        const location = e.getUILocation();
        // 坐标转换
        // let pos = this.uiTran.convertToNodeSpaceAR(new Vec3(location.x, location.y));
        
        this.midNode.setWorldPosition(location.x, location.y, 0);
        let pos = this.midNode.position.clone();
        // 根据半径限制位置
        this.clampPos(pos);
        this.midNode.setPosition(pos.x, pos.y, 0);

        // 设置中间点的位置
        // 算出与(1,0)的夹角
        let angle = this.covertToAngle(pos);
        //获取角度并保存
        // GameManager.player_dis = angle;
        // 触发回调
        
        const delta = e.getDelta();
        let iii = v2(delta.x, delta.y);
        iii.normalize();
        if (iii.lengthSqr() > 0.01) {
            // 将 2D 摇杆输入转换为 3D 方向（假设在 XZ 平面移动）
            this._targetDirection.set(
                iii.x,
                0,
                -iii.y
            ).normalize();
        }
        
        // console.log(this._targetDirection, angle);
        this.joyCallBack.forEach(c => c.emit([pos, angle]));
    }

    onTouchEnd(e: EventTouch) {
        if (!this.isRunning) {
            return;
        }
        if (GameData.isOver) return;
        // if (!GameData.isPlayerMove) return;

        this.goBackMid();
        this.joyCallBack.forEach(c => c.emit([new Vec3(0, 0, 0)]));
        this.uiOpacity.opacity = 0;
        // if (GameManager.isAllowMove)
        if (GameData.isPlayerMove) {
            let name = "idle";
        }
    }

    /** 根据半径限制位置 */
    clampPos(pos: Vec3) {
        let len = pos.length();
        if (len > this.maxR) {
            let k = this.maxR / len;
            pos.x *= k;
            pos.y *= k;
        }
    }

    /** 根据位置转化角度 */
    covertToAngle(pos: Vec3) {
        let angle = Math.atan2(pos.y, pos.x);
        return angle * (180 / Math.PI);
    }

    stopNode() {
        this.onTouchEnd(null);
        this.isRunning = false;
    }
}
