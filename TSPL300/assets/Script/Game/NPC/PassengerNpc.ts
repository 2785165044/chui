import { _decorator, clamp01, Component, MeshRenderer, Node, SkeletalAnimation, tween, Tween, v3, Vec3 } from "cc";

const { ccclass, property } = _decorator;

export enum EnumFeiJi1State2 {
    Idle = 0,
    Move = 1,
    End = 2
}

@ccclass("PassengerNpc")
export default class PassengerNpc extends Component {

    @property(Node)
    model: Node = null;
    @property(Number)
    speed: number = 70;

    @property(Node)
    path: Node = null;

    @property(Node)
    skins: Node = null;

    @property(Node)
    skin: Node = null;


    public state: EnumFeiJi1State2 = EnumFeiJi1State2.Idle;
    //private path: Node = null;

    private curIndex: number = -1;
    private curTarget: Node = null;
    private nextTarget: Node = null;
    private pathNodes: Node[] = [];
    private _pathDistances: number[] = [];
    private _pathProgress: number[] = [];
    private progress: number = 0;
    private distance: number = 0;
    private totalDistance: number = 0;

    private callBack: Function = null;
    private isRemove: boolean = false;

    protected start(): void {
        this.state = EnumFeiJi1State2.Idle;

        this.skins = this.node.getChildByName("skin");

        let skinType = Math.floor(Math.random() * 1.9);
        this.skins.children.forEach((item, index) => {
            item.active = false;
        })
        this.skins.children.forEach((item, index) => {
            item.active = index == skinType;
        })

        this.skin = this.skins.children[skinType];

        this.skin.getComponent(SkeletalAnimation).play("walk");

        tween(this.node).delay(2).call(() => {
            this.skin.getComponent(SkeletalAnimation).play("idle");
        }).start();
    }

    public onInit() {

        //return;
        //this.path = path;
        // this.callBack = () => {
        //     node && node.endCallBack(1);
        // }
        this.isRemove = true;
        this.onInitLine();

        this.skin.getComponent(SkeletalAnimation).play("walk");
        // if (TaskManager.inst.curTask.step == EnumTaskStep.wheel_right_1) {
        //     this.state = EnumFeiJi1State.Idle;
        // } else {
        //     this.state = EnumFeiJi1State.Move;
        // }

        this.state = EnumFeiJi1State2.Move;
        
    }

    onInitLine(extra:Node = null) {

        let node = new Node();
        node.setWorldPosition(this.node.worldPosition);
        this.pathNodes.push(node);
        this.path.children.forEach((item) => {
            if (item.active) {
                this.pathNodes.push(item);
            }
        })

        if(extra){
            this.pathNodes.push(extra);
        }
        this.curIndex = -1;
        this.generatePathData();
        this.refreshIndexPath(0);
    }

    private generatePathData() {
        let fullDistance = 0;
        for (let i = 0; i < this.pathNodes.length; i++) {
            const curNode = this.pathNodes[i];
            const nextNode = this.pathNodes[(i + 1)];
            if (curNode == null || nextNode == null) break;
            let distance = Vec3.distance(curNode.worldPosition, nextNode.worldPosition);
            fullDistance += distance;
            this._pathDistances.push(fullDistance);
        }
        this.totalDistance = fullDistance;

        this._pathProgress.length = 0;
        for (let i = 0; i < this._pathDistances.length; i++) {
            const distance = this._pathDistances[i];
            let progress = distance / fullDistance;
            this._pathProgress.push(progress);
        }
    }

    private refreshIndexPath(curIndex: number) {
        if (this.curIndex == curIndex) return;
        this.curIndex = curIndex;
        if (this.curIndex >= this.pathNodes.length) {
            this.curTarget = this.pathNodes[this.curIndex];
            this.nextTarget = null;
        } else {
            this.curTarget = this.pathNodes[this.curIndex];
            this.nextTarget = this.pathNodes[this.curIndex + 1];
        }
    }

    protected update(dt: number): void {
        if (this.state != EnumFeiJi1State2.Move) {
            return;
        }
        this.move(dt);
    }

    private out: Vec3 = v3();
    private forward: Vec3 = v3();

    private move(dt: number) {
        this.distance += this.speed * dt;
        this.progress = clamp01(this.distance / this.totalDistance);
        const result = this.convertProgressToIndex(this.progress);
        this.refreshIndexPath(result.index);
        if (this.curTarget && this.nextTarget) {
            let pathProgress = result.pathProgress;
            Vec3.lerp(this.out, this.curTarget.worldPosition, this.nextTarget.worldPosition, pathProgress);
            Vec3.lerp(this.forward, this.curTarget.forward, this.nextTarget.forward, pathProgress);
            //this.node.forward = this.forward;
            this.node.worldPosition = this.out;
        } else {
            if (this.progress >= 1) {
                this.state = EnumFeiJi1State2.End;
                if (this.callBack) {
                    this.callBack();
                }
                if (this.isRemove) {
                    this.node.destroy();
                }
            }
        }
    }

    private convertProgressToIndex(progress: number) {
        let curIndex = 0; //序号
        let leftProgress = 0;
        for (let i = 0; i < this._pathProgress.length; i++) {
            let pathProgress = this._pathProgress[i];
            let offsetProgress = 0;//单个路径的进度
            if (i == 0) {
                offsetProgress = pathProgress;
            } else {
                offsetProgress = this._pathProgress[i] - this._pathProgress[i - 1];
            }

            if (progress >= pathProgress) {
                curIndex = i + 1;
            } else {
                leftProgress = clamp01(1 - (pathProgress - progress) / offsetProgress);
                break;
            }
        }
        return { index: curIndex, pathProgress: leftProgress };
    }

    public showModel() {
        if (!this.model.active) {
            this.model.active = true;
        }
    }

    public onUpdateWheelRight1State() {
        this.state = EnumFeiJi1State2.Move;
        this.showModel();
    }

    public onUpdateWheelRight1() {
        let angle = v3(this.model.eulerAngles.x, this.model.eulerAngles.y, this.model.eulerAngles.z);
        Tween.stopAllByTarget(this.model);
        tween(this.model)
            .to(1, { eulerAngles: v3(angle.x, angle.y, angle.z + 20) })
            .to(1, { eulerAngles: angle })
            .start();
    }

    public onUpdateFly() {
        //0, 0, -30
        let angle = v3(this.model.eulerAngles.x, this.model.eulerAngles.y, this.model.eulerAngles.z);
        Tween.stopAllByTarget(this.model);
        tween(this.model)
            .delay(2)
            .to(1, { eulerAngles: v3(angle.x - 10, angle.y, angle.z) })
            .to(1, { eulerAngles: v3(angle.x, angle.y, angle.z) })
            .start();
    }

}