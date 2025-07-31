import { _decorator, Component, math, Node, Tween, tween, Vec3 } from 'cc';
import GameData from '../Game/Main/GameData';
const { ccclass, property } = _decorator;

@ccclass('Scale')
export class Scale extends Component {
    //缩放大小
    @property(Vec3)
    scaleSize: Vec3 = new Vec3(1.2, 1.2, 1.2);
    //缩放时间
    @property
    scaleTime: number = 0.2;
    //是否循环
    @property
    isLoop: boolean = false;
    //当前缩放大小
    private curScale: math.Vec3 = math.Vec3.ONE;
    
    protected onLoad(): void {
        //克隆大小
        this.curScale = this.node.scale.clone();
    }

    protected onEnable(): void {
        if(GameData.isGoogle) return;
        Tween.stopAllByTarget(this.node);
        this.startScale();
    }

    public startScale():void{
        this.node.scale = this.curScale;
        tween(this.node)
        .to(this.scaleTime, {scale:this.scaleSize})
        .to(this.scaleTime, {scale:this.curScale})
        .call(()=>{
            if(this.isLoop){
                this.startScale();
            }
        })
        .start();
    }

    public stop(){
        Tween.stopAllByTarget(this.node);
        this.node.scale = this.curScale;
        this.enabled = false;
    }
}


