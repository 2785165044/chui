import { _decorator, Component, Node, v3, Vec3 } from 'cc';

import ToolsMgr from '../Tools/ToolsMgr';
const { ccclass, property } = _decorator;

@ccclass('BaseMove')
export class BaseMove extends Component {
    protected speed: number = 3.5;
    protected target: Vec3 = null;
    protected target_c: Vec3 = null;
    protected target_angle: number = 0;
    protected isAngle: boolean = false;
    protected angle_speed: number = 200;
    protected angle_min_speed: number = 50;


    update(dt: number) {
     

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
            }
            else {
                let angle1 = Math.abs(ToolsMgr.calculateDegreeByTwoDegree(c_angle + speed, this.target_angle));
                let angle2 = Math.abs(ToolsMgr.calculateDegreeByTwoDegree(c_angle - speed, this.target_angle));

                if (angle1 < angle2) {
                    node.eulerAngles = v3(0, c_angle + speed, 0);
                }
                else {
                    node.eulerAngles = v3(0, c_angle - speed, 0);
                }
            }
        }
    }

    protected setAngle(_node: Vec3,offect:number = 0) {
        if (this.target_c != null && this.target_c.equals(_node)) {
            return;
        }
        this.target_c = _node.clone();
        let angle = ToolsMgr.calculateRo(this.node.worldPosition.x, this.node.worldPosition.z, _node.x, _node.z);
        this.target_angle = angle + offect;
        this.isAngle = true;
    }

    protected move(dt: number) {
        let target = this.target;
        if (target == null) {
            return false;
        }
        let s_speed = this.speed * dt;

        let di = ToolsMgr.calculateDistance(this.node.worldPosition.x, this.node.worldPosition.z, target.x, target.z);
        if (di <= s_speed) {
            this.node.setWorldPosition(target.x, target.y, target.z);
            return true;
        }
        else {
            let angle = ToolsMgr.calculateAngle(this.node.worldPosition.x, this.node.worldPosition.z, target.x, target.z);
            let nx = Math.sin(angle) * s_speed + this.node.worldPosition.x;
            let nz = Math.cos(angle) * s_speed + this.node.worldPosition.z;

            let ny = Math.sin(angle) * s_speed + this.node.worldPosition.y;
            this.node.setWorldPosition(nx, ny, nz);
            this.setAngle(target);
        }
        return false;
    }
}


