import { EventType } from "../Data/EventType";
import { ListenerManager } from "../Manager/ListenerManager";
import { SoundManager } from "../Manager/SoundManager";

const { ccclass, property } = cc._decorator;

@ccclass
export default class SyncPosition extends cc.Component {

    private initNodeScale: number = 1;
    start() {
        this.initNodeScale = this.node.scale;
        this.changeDesignResolution();
        ListenerManager.on(EventType.SCREEN_V, () => {
            if (this.node) {
                this.changeDesignResolution();
            }
        }, this);

        ListenerManager.on(EventType.SCREEN_H, () => {
            if (this.node) {
                this.changeDesignResolution();
            }
        }, this);
    }

    // 每次将要处理碰撞体接触逻辑时被调用
    onBeginContact(contact, selfCollider, otherCollider) {
        if (selfCollider.node.name == "huodui") {
            SoundManager.playEffect("diaoluo", false, false);
        }
    }

    // 每次处理完碰撞体接触逻辑时被调用
    onPostSolve(contact, selfCollider, otherCollider) {

    }

    update(dt: number) {
        if (this.node.getComponent(cc.RigidBody)) {
            this.node.getComponent(cc.RigidBody).syncPosition(true);
        }
    }

    changeDesignResolution() {
        //获取当前屏幕宽高
        let frameWidth = cc.view.getFrameSize().width;
        let frameHeight = cc.view.getFrameSize().height;
        if (frameHeight >= frameWidth) {
            this.node.scale = 1 * this.initNodeScale;
        } else {
            this.node.scale = 1 * this.initNodeScale;
        }
    }
}
