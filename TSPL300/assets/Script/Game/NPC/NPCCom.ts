import { _decorator, Component } from "cc";
const { ccclass, property } = _decorator;

@ccclass("NPCCom")
export default class NPCCom extends Component {

    @property(Number)
    type: number = 1;

}