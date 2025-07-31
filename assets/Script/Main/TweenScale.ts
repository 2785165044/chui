
const { ccclass, property } = cc._decorator;

@ccclass
export default class TweenScale extends cc.Component {

    onLoad() {
        this.node.runAction(cc.repeatForever(cc.sequence(
            cc.scaleTo(0.6, this.node.scale + 0.05),
            cc.scaleTo(0.7, this.node.scale)
        )));
    }

}
