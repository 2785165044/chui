import { _decorator, Component, Node } from "cc";
import PassengerNpc from "./PassengerNpc";
import Car from "../Car/Car";


const { ccclass, property } = _decorator;

@ccclass("PassengerManager")
export default class PassengerManager extends Component {


    @property(Node)
    peopleNode: Node = null;

    public static inst: PassengerManager = null;
    protected onLoad(): void {
        PassengerManager.inst = this;
    }

    protected start(): void {
      
    }


    public allNpcGoHome() : void {
        console.log("npc go111111111");
        this.node.children.forEach((child: Node) => {
            let npc = child.getComponent(PassengerNpc);
            if (npc) 
            {
                //console.log("npc go");
                npc.onInit();
            }
        })

        //this.peopleNode.getComponent(PassengerNpc).onInit();
    }

}