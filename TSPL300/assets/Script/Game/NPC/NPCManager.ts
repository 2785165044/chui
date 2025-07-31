import { _decorator, Component, Node } from "cc";
import NPC from "./NPC";
import { EnumTaskStep } from "../Enum/EnumControllerState";
const { ccclass, property } = _decorator;

@ccclass("NPCManager")
export default class NPCManager extends Component {

    private npcNodes: Node[] = [];
    private npcArr: NPC[] = [];

    public static inst: NPCManager = null;
    protected onLoad(): void {
        NPCManager.inst = this;
    }

    protected start(): void {
        this.node.children.forEach((child: Node) => {
            let npc = child.getComponent(NPC);
            if (npc) {
                this.npcNodes.push(child);
                this.npcArr.push(npc);
            }
        })
    }

    public getNpcByStep(step: EnumTaskStep): NPC {
        return this.npcArr.find((npc: NPC) => npc.step === step);
    }

}