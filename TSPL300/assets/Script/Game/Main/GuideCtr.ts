import { _decorator, Component, Node, Tween, tween, v3, Vec3 } from 'cc';
import TimeManager from '../../Base/TimeManager';
import GameData from './GameData';
import ToolsMgr from '../../Tools/ToolsMgr';
const { ccclass, property } = _decorator;
export enum GuideState {
    null,
}

@ccclass('GuideCtr')
export class GuideCtr extends Component {
    @property(Node)
    jiantou_UI: Node = null;
    @property(Node)
    jiantou_model: Node = null;
    @property(Node)
    jiantou_node: Node = null;
    @property([Node])
    posArr: Node[] = [];
    private state: GuideState = GuideState.null;
    private uiDIMax: number = 20;

    private target: Node = null;
    private player: Node = null;
    private isScale: boolean = false;
    private isScale1: boolean = false;
    private isQiangzhi: boolean = false;
    private awaitTime: number = 0;

    public static inst: GuideCtr = null;
    protected onLoad(): void {
        GuideCtr.inst = this;
    }

    protected start(): void {
        // this.player = FlyCtr.inst.node;
        this.jiantou_UI.active = false;
        this.refresh();
        this.openEffect();
    }

    public getState() {
        return this.state;
    }

    public setState(_state: GuideState) {
        if (this.isQiangzhi) {
            return;
        }
        if (this.state == _state) {
            return;
        }
        this.state = _state;

        this.jiantou_node.active = false;
        this.jiantou_UI.active = false;
        this.target = null;
        if (_state == GuideState.null) {
            // this.jiantou_node.active = false;
            // this.jiantou_UI.active = false;
            return;
        }


        this.uiDIMax = 20;
        TimeManager.instance.calculateTime(() => {
            this.jiantou_node.active = true;
            this.jiantou_node.scale = v3(0, 0, 0);

            // if (this.jiantou_UI.active == false) {
            this.isScale = true;
            this.jiantou_UI.active = true;
            this.jiantou_UI.scale = v3(0, 0, 0);
            tween(this.jiantou_UI)
                .delay(0.5)
                .call(() => {
                    this.isScale = true;
                    this.isScale1 = true;
                })
                .start();
            // }

            this.refresh();

        }, 0.5, this.node);
    }

    public refresh() {
        this.target = this.posArr[this.state];
        if (this.target == null) {
            return;
        }
        this.jiantou_node.setWorldPosition(this.target.worldPosition);
    }

    protected update(dt: number): void {
        if (!GameData.isPlayerMove) return;

        this.isMoneyUI();

        if (this.target == null) {
            return;
        }
        let angle = ToolsMgr.calculateRo(this.player.worldPosition.x, this.player.worldPosition.z, this.target.worldPosition.x, this.target.worldPosition.z);
        this.jiantou_UI.setRotationFromEuler(0, angle - 90, 0);
        this.jiantou_node.setWorldPosition(this.target.worldPosition);

        let di = Vec3.distance(this.player.worldPosition, this.target.worldPosition);
        if (di < 8) {
            this.miniScaleEffect();
            this.awaitTime = 0.6;
        }
        else {
            this.awaitTime -= dt;
            if (this.awaitTime < 0) {
                this.maxScaleEffect();
            }
        }
        if (di < this.uiDIMax) {
            this.miniScaleEffect1();
        }
        else {
            this.maxScaleEffect1();
        }

    }

    private isMoneyUI() {
        this.isQiangzhi = false;
        let money = GameData.getCoin("0");
        if (GameData.hide_guide) {
            GuideCtr.inst.setState(GuideState.null);
            this.isQiangzhi = true;
        } else {
            GuideCtr.inst.setState(GuideState.null);
            this.isQiangzhi = true;
        }
    }

    public seekDirty() {
        this.isMoneyUI();
        // GuideCtr.inst.setState(GuideState.fish);
    }

    public openEffect() {
        Tween.stopAllByTarget(this.jiantou_model);
        let pos = this.jiantou_model.position.clone();
        let pos1 = pos.clone().add(v3(0, -0.65, 0));

        let t1 = tween(this.jiantou_model)
            .to(0.85, { position: pos1 }, { easing: 'quadInOut' })
            .to(0.45, { position: pos }, { easing: 'quadInOut' })

        this.jiantou_model.eulerAngles = v3(0, 0, 0);
        let t2 = tween(this.jiantou_model)
            // .to(0.5, { eulerAngles: v3(0,0,0) })
            .to(1.3, { eulerAngles: v3(0, -360, 0) }, { easing: 'quadInOut' })
        // .to(0.85, { eulerAngles: v3(0, -360, 0) })



        tween(this.jiantou_model).parallel(t1, t2).call(() => {
            this.openEffect();
        }).start();
    }

    miniScaleEffect() {
        if (this.isScale) {
            return;
        }
        this.isScale = true;
        Tween.stopAllByTarget(this.jiantou_node);
        tween(this.jiantou_node)
            .to(0.3, { scale: v3(0, 0, 0) })
            .start();
    }

    maxScaleEffect() {
        if (!this.isScale) {
            return;
        }
        this.isScale = false;
        Tween.stopAllByTarget(this.jiantou_node);
        tween(this.jiantou_node)
            .to(0.3, { scale: v3(1, 1, 1) })
            .start();
    }

    miniScaleEffect1() {
        if (this.isScale1) {
            return;
        }
        this.isScale1 = true;
        Tween.stopAllByTarget(this.jiantou_UI);
        tween(this.jiantou_UI)
            .to(0.3, { scale: v3(0, 0, 0) })
            .start();
    }

    maxScaleEffect1() {
        if (!this.isScale1) {
            return;
        }
        this.isScale1 = false;
        Tween.stopAllByTarget(this.jiantou_UI);
        tween(this.jiantou_UI)
            .to(0.3, { scale: v3(1, 1, 1) })
            .start();
    }
}