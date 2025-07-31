import { _decorator, CurveRange, math, Node, Prefab, v3, Vec3 } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('TipsData')
export class TipsData {
    name: string = "TipsData";
    
    _icon: Prefab;
    init_pos: Vec3;
    target_pos: Vec3;
    target_node: Node;
    call: Function;
    vigor: number = 1;
    offer: Vec3 = v3(-100, 100);
    endScale: number = 1;
    initScale: number = 1;
    isRandomAngle:boolean = false;
    target_offect:Vec3 = v3();
    target_angle:math.Quat = null;
    init_angle:math.Quat = null;

    time: number = 0.5;
    delay_time:number = 0;
    speedCurve: CurveRange = null;

    public restart() {
        this._icon = null;
        this.init_pos = null;
        this.target_pos = null;
        this.target_node = null;
        this.call = null;
        this.vigor = 1;
        this.offer = v3(-100, 100);
        this.isRandomAngle = false;
        this.target_offect = v3();
        this.target_angle = null;
        this.init_angle = null;
        this.time = 0.5;
        this.delay_time = 0;
        this.speedCurve = null;
        this.endScale = 1;
        this.initScale = 1;
    }
}