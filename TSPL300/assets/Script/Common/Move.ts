import { _decorator, Component, Node, Tween, tween, TweenEasing, Vec3 } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('Move')
export class Move extends Component {
    //是否直接用当前位置
    @property
    isUseCurPos: boolean = false;
    //初始位置 如果isUseCurPos为true则不显示当前参数
    @property({ visible: function (this: Move) { return !this.isUseCurPos; } })
    startPos: Vec3 = new Vec3(0, 0, 0);
    //目标位置
    @property
    targetPos: Vec3 = new Vec3(0, 0, 0);
    //时间
    @property
    time: number = 0;
    //时间
    @property
    time_end: number = 0;
    //是否循环
    @property
    isLoop: boolean = false;
    //是否头尾相连
    @property
    isHead: boolean = false;
    //是否自动开始
    @property
    isAutoStart: boolean = false;
    //缓动函数
    @property
    easing: TweenEasing = "linear";
    //延迟多久开始
    @property
    delay: number = 0;

    protected onEnable(): void {
        this.scheduleOnce(() => {
            if (this.isAutoStart) this.startMove();
        }, this.delay);

        if (this.isUseCurPos) {
            this.startPos = this.node.getPosition();
        }
    }
    protected onDisable(): void {
        Tween.stopAllByTarget(this.node);
        this.isUseCurPos = false;
    }

    protected startMove(): void {
        this.node.setPosition(this.startPos);
        tween(this.node)
            .to(this.time, { position: this.targetPos }, { easing: this.easing })
            .call(() => {
                if (this.isLoop) {
                    if (this.isHead) {
                        this.reset();
                    }
                    else {
                        this.startMove();
                    }
                }
            })
            .start();
    }

    //恢复到初始位置
    public reset(): void {
        tween(this.node)
            .to(this.time_end, { position: this.startPos }, { easing: this.easing })
            .call(() => {
                if (this.isLoop) this.startMove();
            })
            .start();
    }
}


