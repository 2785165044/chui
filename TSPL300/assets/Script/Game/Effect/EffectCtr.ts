import { _decorator, Animation, Component, Node, ParticleSystem, Prefab, tween, v3, Vec3 } from "cc";
import PoolMgr from "../../Base/PoolMgr";
import TimeManager from "../../Base/TimeManager";
const { ccclass, property } = _decorator;

export enum EffectType {
    eff = 0,
}

@ccclass("EffectCtr")
export default class EffectCtr extends Component {

    @property(Prefab)
    public effect: Prefab = null;

    public static inst: EffectCtr = null;
    protected onLoad(): void {
        EffectCtr.inst = this;
    }

    public getEffect(type: EffectType): Node {
        let effect: Node = null;
        switch (type) {
            case EffectType.eff:
                effect = PoolMgr.inst.getNode(this.effect);
                break;
        }
        return effect;
    }

    public play3D(type: EffectType, _pos: Vec3, deiTime: number): void {
        let effect: Node = this.getEffect(type);
        if (effect == null) {
            return;
        }
        let isOne: boolean = false;
        effect.active = true;
        this.node.addChild(effect);
        effect.setWorldPosition(_pos);
        this.playEffect(effect);

        this.removeNode(isOne, effect, deiTime);
    }

    private removeNode(isOne: boolean, effect: Node, deiTime: number) {
        TimeManager.instance.calculateTime(() => {
            if (isOne) {
                effect.active = false;
                return;
            }
            PoolMgr.inst.putNode(effect);
        }, deiTime, effect);
    }

    public playEffect(_effect: Node, animName: string = "") {
        let par = _effect.getComponentsInChildren(ParticleSystem);
        if (par != null) {
            par.forEach(p => {
                p.stop();
                p.play();
            });
        }

        let anim = _effect.getComponent(Animation);
        if (anim != null) {
            anim.play();
        }

        // let spine = _effect.getComponent(sp.Skeleton);
        // if (spine != null) {
        //     spine.setAnimation(0, animName, false);
        // }
    }

    public JianzhuEffect(_node: Node) {
        let scale = _node.scale.clone();
        let scale1 = v3(scale.x, scale.y * 0.3, scale.z);
        tween(_node)
            .to(0.2, { scale: scale1 })
            .to(0.5, { scale: scale }, { easing: 'backOut' })
            .start();
    }



    //缓动效果
    public showEffect(_node: Node, type: number = 0, call: Function = null) {
        let scale = _node.scale.clone();
        switch (type) {
            case 0:
                _node.active = true;
                _node.setScale(scale.x * 1.2, scale.y * 0.1, scale.z * 1.2);
                tween(_node)
                    .to(0.2, { scale: v3(scale.x * 0.8, scale.y * 1.5, scale.z * 0.8) })
                    .to(0.2, { scale: v3(scale.x * 1.1, scale.y * 0.8, scale.z * 1.1) })
                    .to(0.2, { scale: v3(scale.x * 1, scale.y * 1, scale.z * 1) })
                    .start();
                break;
            case 1:
                _node.active = true;
                _node.setScale(scale.x * 1, scale.y * 1, scale.z * 1);
                tween(_node)
                    .to(0.2, { scale: v3(scale.x * 1.3, scale.y * 0.7, scale.z * 1.3) })
                    .to(0.2, { scale: v3(scale.x * 1, scale.y * 1, scale.z * 1) })
                    .start();
                break;
            case 2:
                _node.active = true;
                _node.setScale(scale.x * 1, scale.y * 1, scale.z * 1);
                tween(_node)
                    .to(0.2, { scale: v3(scale.x * 1.3, scale.y * 0.7, scale.z * 1.3) })
                    .to(0.2, { scale: v3(scale.x * 1, 0, scale.z * 1) })
                    .call(() => {
                        call && call();
                    })
                    .start();
                break;
            case 3:
                _node.active = true;
                _node.setScale(scale.x * 1, scale.y * 1, scale.z * 1);
                tween(_node)
                    .to(0.2, { scale: v3(scale.x * 1, scale.y * 1.3, scale.z * 1) })
                    .to(0.2, { scale: v3(scale.x * 1, 0, scale.z * 1) })
                    .call(() => {
                        call && call();
                    })
                    .start();
                break;
            case 4:
                _node.active = true;
                // _node.setScale(scale.x * 1.2, scale.y * 0.1, scale.z * 1.2);
                tween(_node)
                    // .to(0.2, { scale: v3(scale.x * 0.9, scale.y * 0.9, scale.z * 0.9) })
                    .to(0.1, { scale: v3(scale.x * 1.1, scale.y * 1.1, scale.z * 1.1) })
                    .to(0.1, { scale: v3(scale.x * 1, scale.y * 1, scale.z * 1) })
                    .start();
                break;
            case 5:
                _node.active = true;
                // _node.setScale(scale.x * 1.2, scale.y * 0.1, scale.z * 1.2);
                tween(_node)
                    .to(0.05, { scale: v3(scale.x * 1.15, scale.y * 1.1, scale.z * 1.15) })
                    .to(0.05, { scale: v3(scale.x * 1, scale.y * 1, scale.z * 1) })
                    .to(0.05, { scale: v3(scale.x * 1.05, scale.y * 1.05, scale.z * 1.05) })
                    .to(0.05, { scale: v3(scale.x * 1, scale.y * 1, scale.z * 1) })
                    .to(0.05, { scale: v3(scale.x * 1.05, scale.y * 1.05, scale.z * 1.05) })
                    .to(0.05, { scale: v3(scale.x * 1, scale.y * 1, scale.z * 1) })
                    .union()
                    .repeatForever()
                    .start();
                break;
            case 6:
                _node.active = true;
                _node.setScale(1, 1, 1);
                tween(_node)
                    .to(0.1, { scale: v3(1.1, 1.05, 1.1) })
                    .to(0.1, { scale: v3(1, 1, 1) })
                    .call(() => {
                        call && call();
                    })
                    .start();
                break;
        }
    }

    public playEffectOther(_node: Node) {
        this.playEffect(_node);
    }

    public stopEffectOther(_node: Node) {
        let par = _node.getComponentsInChildren(ParticleSystem);
        if (par != null) {
            par.forEach(p => {
                p.stop();
            });
        }
    }


}
