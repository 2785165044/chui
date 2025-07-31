import { _decorator, Component, Node, v3, Vec3, } from "cc";
import ToolsMgr from "../../Tools/ToolsMgr";
import CarManager from "./CarManager";
const { ccclass, property } = _decorator;

@ccclass("Car")
export default class Car extends Component {

    @property(Boolean)
    isCanMove: boolean = true;

    private pathIdx: number = 0;
    private speed: number = 50;
    private idx: number = 0;
    private path: Node[] = [];
    private isMove: boolean = false;

    protected onEnable(): void {
        this.showModel();
    }

    private showModel() {
        let count = this.node.children.length;
        this.node.children.forEach((child) => {
            child.active = false;
        })
        let idx = Math.floor(Math.random() * count);
        this.node.children[idx].active = true;
    }

    public setPath(path: Node[], pathIdx: number) {
        this.path = path;
        this.pathIdx = pathIdx;
        this.idx = 0;
        this.isMove = true;
    }

    protected update(dt: number): void {
        if (!this.isCanMove) {
            return;
        }

        if (!this.isMove) {
            return;
        }

        this.move(dt, this.getPath());
        if (this.idx > this.path.length - 1) {
            this.isMove = false;
            CarManager.inst.removeCar(this.node, this.pathIdx);
        }

        if (this.isAngle) {
            const node = this.node;
            let c_angle = node.eulerAngles.y;
            c_angle = ToolsMgr.normalizedAngle(c_angle);
            let cahzhi = Math.abs(ToolsMgr.calculateDegreeByTwoDegree(c_angle, this.target_angle));
            let speed = this.angle_speed * dt * (cahzhi / 50);
            if (speed < this.angle_min_speed * dt) {
                speed = this.angle_min_speed * dt;
            }
            if (speed >= cahzhi) {
                node.eulerAngles = v3(0, this.target_angle, 0);
                this.isAngle = false;
            } else {
                let angle1 = Math.abs(ToolsMgr.calculateDegreeByTwoDegree(c_angle + speed, this.target_angle));
                let angle2 = Math.abs(ToolsMgr.calculateDegreeByTwoDegree(c_angle - speed, this.target_angle));
                if (angle1 < angle2) {
                    node.eulerAngles = v3(0, c_angle + speed, 0);
                } else {
                    node.eulerAngles = v3(0, c_angle - speed, 0);
                }
            }
        }
    }

    private target_angle: number = 0;
    private isAngle: boolean = false;
    private angle_speed: number = 500;
    private angle_min_speed: number = 300;
    private target_c: Vec3 = null;
    public setAngle(_node: Vec3) {
        if (this.target_c != null && this.target_c.equals(_node)) {
            return;
        }
        this.target_c = _node.clone();
        let angle = ToolsMgr.calculateRo(_node.x, _node.z, this.node.worldPosition.x, this.node.worldPosition.z,) - 90;
        this.target_angle = angle;
        this.isAngle = true;
    }

    private move(deltaTime: number, _node: Node) {
        if (_node == null) {
            return;
        }
        let target = _node.worldPosition;
        let s_speed = this.speed * deltaTime;
        let di = ToolsMgr.calculateDistance(this.node.worldPosition.x, this.node.worldPosition.z, target.x, target.z);
        if (di <= s_speed) {
            this.node.setWorldPosition(target.x, target.y, target.z);
            this.idx++;
        } else {
            let xiangl = target.clone().subtract(this.node.worldPosition).normalize().multiplyScalar(s_speed);
            this.node.setWorldPosition(xiangl.add(this.node.worldPosition));
            this.setAngle(target);
        }
    }

    private getPath() {
        if (this.path == null) {
            return null;
        }
        if (this.idx > this.path.length - 1) {
            return null;
        }
        return this.path[this.idx];
    }

}