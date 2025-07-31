import { Component, Vec3, _decorator, v3, Node, lerp, math, CurveRange } from "cc";
import PoolMgr from "../Base/PoolMgr";
import ToolsMgr from "../Tools/ToolsMgr";
import { TipsData } from "./TipsData";

const { ccclass, property } = _decorator;

@ccclass('TipsBezierTo3D')
export default class TipsBezierTo3D extends Component {
    private target_pos: Vec3 = null;
    private init_pos: Vec3 = null;
    private m_pos: Vec3 = null;
    private timeSpeed: number = 1;
    private time: number = 0;
    private isRunning: boolean = false;
    private call: Function = null;
    private target: Node = null;
    private tarOffer: Vec3 = null;
    private toEulerAngles: Vec3 = v3(0, 0, 0);
    private isRandomAngle: boolean = false;
    private target_angle: math.Quat = null;
    private init_angle: math.Quat = null;
    private target_scale: number = 1;
    private init_scale: number = 1;
    private speedCurve:CurveRange = null;
    // private init_euler: Vec3 = null;

    //播放提示
    playTips(data: TipsData): void {
        this.speedCurve = data.speedCurve;
        this.init_scale = data.initScale;
        this.target_scale = data.endScale;

        this.target_angle = data.target_angle;
        this.init_angle = data.init_angle;

        this.isRandomAngle = data.isRandomAngle;
        this.target = data.target_node;
        this.tarOffer = data.target_offect;
        this.call = data.call;
        this.timeSpeed = 1 / data.time;
        if (this.target == null) {
            this.target_pos = data.target_pos;
        }
        else {
            this.target_pos = this.target.getWorldPosition().clone().add(this.tarOffer);
        }
        this.init_pos = data.init_pos;
        this.m_pos = this.target_pos.clone();
        this.m_pos.subtract(this.init_pos).multiplyScalar(0.7).add(this.init_pos).add(data.offer);
        // this.m_pos.add(offer);
        this.time = 0;

        if (data.delay_time <= 0) {
            this.isRunning = true;
        }
        else {
            this.scheduleOnce(() => {
                this.isRunning = true;
            }, data.delay_time);
        }

        if (data.isRandomAngle) {
            this.node.eulerAngles = v3(Math.random() * 360, Math.random() * 360, Math.random() * 360);
        }
        else {
            if (this.init_angle != null) {
                this.node.setWorldRotation(this.init_angle);
            }
        }

        this.node.setScale(this.init_scale, this.init_scale, this.init_scale);


        //特殊处理。并不通用
        // this.toEulerAngles = v3(-90,0,0);
        // if(this.target.children.length > 0) {
        //     this.target_pos = this.target.children[this.target.children.length-1].getWorldPosition(new Vec3);
        // }
    }

    protected update(dt: number): void {
        if (!this.isRunning) {
            return;
        }
        this.time += dt * this.timeSpeed;

        let _time = this.time;
        if (this.speedCurve != null) {
            _time = this.speedCurve.evaluate(this.time, 0);
        }
        if (_time > 1) {
            _time = 1;
        }

        if (this.target != null) {
            this.target_pos = this.target.getWorldPosition().add(this.tarOffer);
        }

        this.node.setWorldPosition(ToolsMgr.quadraticBezier3D(_time, this.init_pos, this.m_pos, this.target_pos));
        if (this.isRandomAngle) {
            this.node.eulerAngles = this.node.eulerAngles.lerp(this.toEulerAngles, _time);
        }
        else {
            if (this.init_angle != null && this.target_angle != null) {
                this.node.setWorldRotation(this.init_angle.lerp(this.target_angle, _time));
            }
        }
        // this.node.eulerAngles = this.node.eulerAngles.lerp(this.toEulerAngles, _time);


        if (this.init_scale != this.target_scale) {
            let scale = lerp(this.init_scale, this.target_scale, _time);
            this.node.setScale(scale, scale, scale);
        }

        if (_time >= 1) {
            this.isRunning = false;
            this.remove();
        }
    }

    //移除
    remove() {
        PoolMgr.inst.putNode(this.node);
        this.call && this.call();
        //移除当前组件
        // this.node.removeComponent(TipsBezierTo3D);
    }

}