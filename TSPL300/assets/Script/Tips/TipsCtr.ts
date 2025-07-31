import { Component, _decorator, Node, Camera, Vec3, v3, Prefab, CurveRange, math } from "cc";
import PoolMgr from "../Base/PoolMgr";
import Tips2D from "./Tips2D";
import { TipsData } from "./TipsData";
import { Tips2D_Bezier } from "./Tips2D_Bezier";
import TipsBezierTo3D from "./TipsBezierTo3D";
import GameManager from "../Game/Main/GameManager";

const { ccclass, property } = _decorator;

@ccclass('TipsCtr')
export default class TipsCtr extends Component {

    @property(Prefab)
    watchOut: Prefab = null;
    @property(Prefab)
    notAngle: Prefab = null;
    @property(CurveRange)
    speedCurve1: CurveRange = new CurveRange();

    //单例
    public static instance: TipsCtr = null;
    private node_canvas: Node = null;
    public node_camera: Camera = null;

    private time: number = 1;
    private isRun: boolean = false;
    private typeArr: boolean[] = [false, false, false];
    private tips2d_interval: number = 0.1;

    protected onLoad(): void {
        TipsCtr.instance = this;
        this.node_canvas = GameManager.inst.gameview.node;
        this.node_camera = GameManager.inst.camera;
    }

    protected start(): void {

    }

    //2d提示 文字向上飘动的提示
    public show2DTips(_node: Tips2D, _pos: Vec3): void {
        let wood = PoolMgr.inst.getNode(_node.node);
        wood.active = true;
        this.node_canvas.addChild(wood);
        wood.getComponent(Tips2D).setData();
        wood.setPosition(_pos);
    }

    //2d提示 文字向上飘动的提示
    public show2DTipsFromPrefab(prefab: Prefab, _pos: Vec3 = v3()): void {
        let node = PoolMgr.inst.getNode(prefab);
        node.active = true;
        this.node_canvas.addChild(node);
        node.getComponent(Tips2D).setData();
        node.setPosition(_pos);
    }

    //2d世界 贝塞尔移动的物品
    public show2DIconMove(data: TipsData) {
        let icon = PoolMgr.inst.getNode(data._icon);
        icon.setScale(data.initScale, data.initScale);
        this.node_canvas.addChild(icon);
        icon.active = true;
        icon.setWorldPosition(data.init_pos);

        icon.getComponent(Tips2D_Bezier).setData(data);
    }

    //3d世界的物品移动提示
    public show3DWorldTips(data: TipsData) {
        let node = PoolMgr.inst.getNode(data._icon);
        this.node.addChild(node);
        node.active = true;
        node.setWorldPosition(data.init_pos);
        let tbt3d = node.getComponent(TipsBezierTo3D);
        if (tbt3d == null) {
            tbt3d = node.addComponent(TipsBezierTo3D);
        }
        tbt3d.playTips(data);
    }

    public startMax(type: number) {
        this.typeArr[type] = true;
        this.isRunTypeMax();
    }

    public stopMax(type: number) {
        this.typeArr[type] = false;
        this.isRunTypeMax();
    }

    private isRunTypeMax() {
        for (let i = 0; i < this.typeArr.length; i++) {
            const value = this.typeArr[i];
            if (value) {
                this.isRun = true;
                return;
            }
        }
        this.isRun = false;
    }

    protected update(dt: number): void {
        this.tips2d_interval -= dt;
        if (this.isRun == false) {
            return;
        }
        //特殊逻辑集成到tipsCtr
        this.time += dt;
        // if (this.time >= 0.5) {
        //     this.time = 0;
        // this.show2DTips(this.word, v3(0, 0, 0), "MAX");
        // }
    }

    public getPrefab(type: number) {
        let goods: Prefab = null;
        switch (type) {
        }
        return goods;
    }

    public getID(_name: string) {
        let _id: number = 0;
        switch (_name) {
            case "corn":
                _id = 0;
                break;
        }
        return _id;
    }

    /**
     * 获取TipsData
     * @param _icon 预制体
     * @param initPos 初始坐标
     * @param targetNode 目标节点
     * @param targetPos 目标坐标
     * @param callBack 回调方法
     * @param time 时间
     * @param delayTime 延迟时间 
     * @param offer beizier偏移坐标
     * @param initScale 初始缩放
     * @param endScale 结束缩放
     * @param initAngle 初始角度
     * @param targetAngle 目标角度
     * @param targetOffect 目标坐标偏移
     * @param speedCurve 播放速率
     * @param isRandomAngle 是否随机角度
     * @param vigor beizier偏移坐标系数（2d）
     * @returns 
     */
    public getTipsData(_icon: Prefab, initPos: Vec3, targetNode: Node, targetPos: Vec3, callBack: Function,
        time: number = 0.5, delayTime: number = 0, offer: Vec3 = v3(-100, 100), initScale: number = 1, endScale: number = 1,
        initAngle: math.Quat = null, targetAngle: math.Quat = null, targetOffect: Vec3 = v3(), speedCurve: CurveRange = null,
        isRandomAngle: boolean = false, vigor: number = 1
    ): TipsData {
        let tipsdata: TipsData = PoolMgr.inst.getClass(TipsData)
        tipsdata.restart();
        tipsdata._icon = _icon;
        tipsdata.init_pos = initPos;
        tipsdata.target_node = targetNode;
        tipsdata.target_pos = targetPos;
        tipsdata.call = callBack;
        tipsdata.time = time;
        tipsdata.delay_time = delayTime;
        tipsdata.offer = offer;
        tipsdata.initScale = initScale;
        tipsdata.endScale = endScale;
        tipsdata.init_angle = initAngle;
        tipsdata.target_angle = targetAngle;
        tipsdata.target_offect = targetOffect;
        tipsdata.speedCurve = speedCurve;
        tipsdata.isRandomAngle = isRandomAngle;
        tipsdata.vigor = vigor;
        return tipsdata;
    }
}
