import { EventType } from "../Data/EventType";
import { ListenerManager } from "../Manager/ListenerManager";
import { SoundManager } from "../Manager/SoundManager";

const { ccclass, property } = cc._decorator;

@ccclass
export default class CollisionDetection extends cc.Component {

    // 只在两个碰撞体开始接触时被调用一次
    onBeginContact(contact, selfCollider, otherCollider) {
        let selfNode: cc.Node = selfCollider.node;
        if (selfNode.name != "dropBall") {
            ListenerManager.dispatch(EventType.COLLISION_NODE, selfNode);
            selfNode.active = false;
        } else {
            SoundManager.playEffect("diaoluo", false, false, false);
        }
    }

    // 只在两个碰撞体结束接触时被调用一次
    onEndContact(contact, selfCollider, otherCollider) {
    }

    // 每次将要处理碰撞体接触逻辑时被调用
    onPreSolve(contact, selfCollider, otherCollider) {
    }

    // 每次处理完碰撞体接触逻辑时被调用
    onPostSolve(contact, selfCollider, otherCollider) {
    }

}