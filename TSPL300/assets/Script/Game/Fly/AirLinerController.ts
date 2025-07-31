import { _decorator, Animation, AnimationClip, CapsuleCollider, clamp01, Collider, Color, Component, ERigidBodyType, Game, ICollisionEvent, ITriggerEvent, Material, MeshRenderer, Node, Quat, RigidBody, tween, Tween, v3, Vec3 } from "cc";
import TaskItem from "../Task/TaskItem";
import TaskManager from "../Task/TaskManager";
import GameData from "../Main/GameData";
import { EnumGearState, EnumTaskStep, EnumWheelState } from "../Enum/EnumControllerState";
import AudioManager, { AudioType } from "../../Base/AudioManager";
import FlyCamera from "./FlyCamera";
import GameWheel from "../wheel/GameWheel";
import EffectCtr, { EffectType } from "../Effect/EffectCtr";
import TipsCtr from "../../Tips/TipsCtr";
import ToolsMgr from "../../Tools/ToolsMgr";
import { EnumColliderGroup, EnumColliderName } from "../Enum/EnumCollider";
import NPCCom from "../NPC/NPCCom";
import { BaseMove } from "../../Base/BaseMove";
import { CameraCtr } from "../Main/CameraCtr";
import GameManager from "../Main/GameManager";
import PassengerManager from "../NPC/PassengerManager";
const { ccclass, property } = _decorator;

export enum FlyControllerState {
    State1 = 0, //降落
    State2 = 1, //停泊
    State3 = 2, //滑行准备
    State4 = 3, //起飞
    State5 = 4, //坠毁
    Null = 5,
}

// export enum FlyState {
//     null,
//     go_target,
//     move,
//     await,

// }


export enum FlyState {
    Idle,
    Fly,
    Dead,
    End,
    Null
}
/** 飞机 */
@ccclass("AirLinerController")
export default class AirLinerController extends Component {



}