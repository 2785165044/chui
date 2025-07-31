import { _decorator, BatchingUtility, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('BatchingCtr')
export class BatchingCtr extends Component {
    @property(Node)
    root: Node = null;

    protected start(): void {
        BatchingUtility.batchStaticModel(this.node, this.root);
    }
}


