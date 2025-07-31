import { Component, Vec3, _decorator, v3, Node, lerp } from "cc";
import PoolMgr from "../Base/PoolMgr";
import ToolsMgr from "../Tools/ToolsMgr";
import { TipsData } from "./TipsData";

const { ccclass, property } = _decorator;

@ccclass('TipsBezierTo3DWithScale')
export default class TipsBezierTo3DWithScale extends Component {
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
    private toScale: Vec3 = v3(0, 0, 0);
    private initScale: Vec3 = v3(0, 0, 0);
    private isRandomAngle: boolean = false;
    private target_angleY: number = 0;
    private init_angleY: number = 0;
    private scale_type: number = 1;
    //播放提示
    playTips(data: TipsData): void {
        this.target_angleY = data.target_angleY;
        this.isRandomAngle = data.isRandomAngle;
        this.target = data.target_node;
        this.tarOffer = data.target_offect;
        this.call = data.call;
        this.timeSpeed = 1 / data.time;
        this.target_pos = this.target.getWorldPosition().clone().add(this.tarOffer);
        this.init_pos = data.init_pos;
        this.m_pos = this.target_pos.clone();
        this.m_pos.subtract(this.init_pos).multiplyScalar(0.7).add(this.init_pos).add(data.offer);
        // this.m_pos.add(offer);
        this.time = 0;
        this.initScale = data.initScale;
        this.toScale = data.toScale;
        this.scale_type = data.scale_type;

        if (data.delay_time <= 0) {
            this.isRunning = true;
        }
        else {
            this.scheduleOnce(() => {
                this.isRunning = true;
            }, data.delay_time);
        }

        if (data.isRandomAngle) {
            // this.node.eulerAngles = v3(Math.random() * 360, Math.random() * 360, Math.random() * 360);
            this.toEulerAngles = v3(this.getRandomIntInRanges(50,60), this.getRandomIntInRanges(20,40), this.getRandomIntInRanges(40,50));

        }
        else {
            this.node.eulerAngles = v3(0, this.init_angleY, 0);
        }


        //特殊处理。并不通用
        // this.toEulerAngles = v3(0,this.target.parent.eulerAngles.y,0);
        // if(this.target.children.length > 0) {
        //     this.target_pos = this.target.children[this.target.children.length-1].getWorldPosition(new Vec3);
        // }
    }

    protected update(dt: number): void {
        if (!this.isRunning) {
            return;
        }
        this.time += dt * this.timeSpeed;
        if (this.time > 1) {
            this.time = 1;
        }

        this.target_pos = this.target.getWorldPosition().add(this.tarOffer);
        
        this.node.setWorldPosition(ToolsMgr.quadraticBezier3D(this.time, this.init_pos, this.m_pos, this.target_pos));
        if (this.isRandomAngle) {
            this.node.eulerAngles = this.node.eulerAngles.lerp(this.toEulerAngles, this.time);
        }
        else {
            this.node.eulerAngles = v3(0, lerp(this.init_angleY, this.target_angleY, this.time), 0);
        }

        if(this.scale_type == 0) {
            // 先变大后变小
            if(this.time < 0.7) {
                // 变大
                this.node.scale = this.node.scale.lerp(v3(2.5,2.5,2.5), this.time);
    
            }else if(this.time > 0.7) {
                // 变小
                this.node.scale = this.node.scale.lerp(v3(1,1,1), this.time);
            }
        }else if(this.scale_type == 1) {
            this.node.scale = this.node.scale.lerp(this.toScale, this.time);
        }
        

        if (this.time >= 1) {
            this.isRunning = false;
            this.remove();
        }
    }

    //移除
    remove() {
        this.node.scale = v3(1,1,1);
        PoolMgr.inst.putNode(this.node);
        this.call && this.call();
        //移除当前组件
        // this.node.removeComponent(TipsBezierTo3D);
    }


    private getRandomIntInRanges(min:number, max: number): number {
        // 生成一个随机布尔值，决定从哪一个范围内取值
        const selectRange = Math.random() < 0.5;
      
        if (selectRange) {
          // -60到-50的范围
          return Math.floor(Math.random() * 11) - max;
        } else {
          // 50到60的范围
          return Math.floor(Math.random() * 11) + min;
        }
      }
}
