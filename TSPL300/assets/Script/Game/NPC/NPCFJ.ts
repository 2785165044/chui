import { _decorator, clamp01, Component, MeshRenderer, Node, tween, Tween, v3, Vec3 } from "cc";
import NPC from "./NPC";
import TaskManager from "../Task/TaskManager";
import { EnumTaskStep } from "../Enum/EnumControllerState";
const { ccclass, property } = _decorator;

export enum EnumFeiJi1State {
    Idle = 0,
    Move = 1,
    End = 2
}

@ccclass("NPCFJ")
export default class NPCFJ extends Component {

    @property(Node)
    model: Node = null;
    @property(Number)
    speed: number = 70;

    public state: EnumFeiJi1State = EnumFeiJi1State.Idle;
    private path: Node = null;

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
    @property(Boolean)
    public speedUp: boolean = false;

    @property(Boolean)
    public isDafeiji: boolean = false;

    protected start(): void {
        this.state = EnumFeiJi1State.Idle;
    }

    public onInit(path: Node, node: NPC = null, isRemove: boolean = false,extra:Node = null) {
        this.path = path;
        // this.callBack = () => {
        //     node && node.endCallBack(1);
        // }
        this.isRemove = isRemove;
        this.onInitLine(extra);
        // if (TaskManager.inst.curTask.step == EnumTaskStep.wheel_right_1) {
        //     this.state = EnumFeiJi1State.Idle;
        // } else {
        //     this.state = EnumFeiJi1State.Move;
        // }

        this.state = EnumFeiJi1State.Move;
        
    }

    onInitLine(extra:Node = null) {
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
        if (this.state != EnumFeiJi1State.Move) {
            return;
        }

        if (this.speedUp) {
            this.speed += 0.13;
            this.playLandingShake(this.model);
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
            Vec3.lerp(this.forward, this.curTarget.forward, this.nextTarget.forward, 0.1);
            this.node.forward = this.forward;
            this.node.worldPosition = this.out;
        } else {
            if (this.progress >= 1) {
                this.state = EnumFeiJi1State.End;
                if (this.callBack) {
                    this.callBack();
                }
                if (this.isRemove) {
                    this.node.destroy();
                }

                if (this.isDafeiji) {
                    const targetPosition = v3(this.node.worldPosition.x+1000, this.node.worldPosition.y + 100, this.node.worldPosition.z +300); // 起飞后的目标位置
                    const targetRotation = v3(30, this.node.eulerAngles.y, 30); // 起飞后的目标旋转角度（机头上扬）
                    this.playTakeOffAnimation(this.node, targetPosition, targetRotation, 14);
                }
            }
        }
    }

    qifeiAction() {
        
    }

    public playTakeOffAnimation(node: Node, targetPosition: Vec3, targetRotation: Vec3, duration: number = 3): void {
        // 停止当前节点的所有动画
        Tween.stopAllByTarget(node);
    
        // 起飞动画
        tween(node)
            .to(duration, { 
                position: targetPosition, // 目标位置
                eulerAngles: targetRotation // 目标旋转角度
            }, { easing: 'cubicOut' }) // 使用平滑的缓动效果
            .call(() => {
                console.log("起飞动画完成");
            })
            .start();

        tween(node)
            .to(2, { 
             
                eulerAngles: targetRotation // 目标旋转角度
            }, { easing: 'cubicOut' }) // 使用平滑的缓动效果
            .call(() => {
                console.log("起飞动画完成");
            })
            .start();
    }

    public playLandingShake(node: Node): void {
        const originalPosition = new Vec3(0,0,0); // 保存原始位置
        let amplitude = Math.random() * 0.1 + 0.1; // 随机生成抖动幅度
        const bounceUp = v3(originalPosition.x+ amplitude, originalPosition.y + amplitude, originalPosition.z);
        const bounceDown = v3(0, 0, 0);
        //Tween.stopAllByTarget(node);
        const bounceTween = tween(node)
            .to(amplitude/8, { position: bounceUp}) // 向上抖动
            .to(amplitude/8, { position: bounceDown }) // 向下抖动
            .call(() => {
                node.setPosition(originalPosition); // 恢复到原始位置
            });
        bounceTween.start();
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
        this.state = EnumFeiJi1State.Move;
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