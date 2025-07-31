import { Component, Label, RichText, _decorator } from "cc";
import LocalizationCtr from "./LocalizationCtr";
import MsgCenter from "../../Common/MsgCenter";
import MsgBehavior from "../../Common/MsgBehavior";

const { ccclass, property } = _decorator;

@ccclass('LocalizationText')
export default class LocalizationText extends Component {
    //键
    @property
    key: string = '';

    protected onLoad(): void {
        this.Refresh();
        MsgCenter.Ins.register(MsgBehavior.LanguageChange, this.Refresh, this);
    }

    protected OnEnable() {
        this.Refresh();
        MsgCenter.Ins.register(MsgBehavior.LanguageChange, this.Refresh, this);
    }

    protected OnDisable() {
        MsgCenter.Ins.off(MsgBehavior.LanguageChange, this.Refresh, this);
    }

    //刷新ui
    public Refresh() {
        if(this.node.getComponent(Label) != null)
            this.node.getComponent(Label).string = LocalizationCtr.instance.GetText(this.key);
        else if(this.node.getComponent(RichText) != null)
            this.node.getComponent(RichText).string = LocalizationCtr.instance.GetText(this.key);
    }
}