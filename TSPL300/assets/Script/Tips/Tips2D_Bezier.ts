import { _decorator, Component, lerp, Node, Vec3 } from 'cc';
import { TipsData } from './TipsData';
import PoolMgr from '../Base/PoolMgr';
import ToolsMgr from '../Tools/ToolsMgr';
const { ccclass, property } = _decorator;

@ccclass('Tips2D_Bezier')
export class Tips2D_Bezier extends Component {
    private data: TipsData = null;

    private init_pos: Vec3 = null;
    private m_pos: Vec3 = null;
    private end_pos: Vec3 = null;
    private initScale: number = 0;
    private endScale: number = 0;

    private time: number = 0;
    private speed: number = 1;
    private isRun: boolean = false;

    public setData(data: TipsData) {
        this.data = data;
        this.m_pos = data.target_pos.clone().subtract(data.init_pos).multiplyScalar(0.5).add(data.init_pos).add(data.offer.multiplyScalar(data.vigor));
        this.init_pos = data.init_pos;
        this.end_pos = data.target_pos;
        this.time = 0;
        this.isRun = true;
        this.speed = 1 / data.time;
        this.node.setScale(data.initScale, data.initScale);

        this.initScale = data.initScale;
        this.endScale = data.endScale;
    }

    protected update(dt: number): void {
        if (!this.isRun) {
            return;
        }
        this.time += dt * this.speed;
        if (this.time > 1) {
            this.time = 1;
            this.over();
        }

        let pos = ToolsMgr.quadraticBezier3D(this.time, this.init_pos, this.m_pos, this.end_pos);
        this.node.setWorldPosition(pos);

        let scale = lerp(this.initScale, this.endScale, this.time);
        this.node.setScale(scale, scale);

    }

    private over() {
        this.isRun = false;

        PoolMgr.inst.putNode(this.node);
        this.data.call && this.data.call();
    }
}


