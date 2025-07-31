import { NodePool, Node, instantiate, Prefab, v3 } from "cc";

//对象池
export default class PoolMgr {
    //单例
    private static instance: PoolMgr = null;
    public static get inst(): PoolMgr {
        if (this.instance == null) {
            this.instance = new PoolMgr();
            this.instance.init();
        }
        return this.instance;
    }

    //对象池字典
    private pool: { [key: string]: NodePool } = null;
    private poolClass: { [key: string]: Array<any> } = null;

    //初始化
    public init() {
        this.pool = {};
        this.poolClass = {};
    }

    // 初始化节点池
    public initPool(prefab: Prefab, count: number) {
        const poolName = prefab.data.name;
        if (!this.pool[poolName]) {
            this.pool[poolName] = new NodePool();
        }

        for (let i = 0; i < count; i++) {
            // 使用预制体实例化一个新节点
            const node = instantiate(prefab);
            // 将这个新节点放入对象池中
            this.pool[poolName].put(node);
        }
    }
    //获取对象
    public getNode(_node: Node|Prefab): Node {
        let node = null;
        if (this.pool[_node.name] == null) {
            this.pool[_node.name] = new NodePool();
        }
        if (this.pool[_node.name].size() > 0) {
            node = this.pool[_node.name].get();
        }
        else {
            node = instantiate(_node);
        }
        node.active = true;
        return node;
    }

    //回收对象
    public putNode(_node: Node) {
        // console.log(_node.name + "已被加入回收池");

        if (this.pool[_node.name] == null) {
            this.pool[_node.name] = new NodePool();
        }
        this.pool[_node.name].put(_node);
        _node.active = false;
        if(_node.getChildByName("corn") != null || undefined) {
            _node.getChildByName("corn").children.forEach(child => {
                child.active = true;
            })
        }
    }

    //清空对象池
    public clear() {
        this.pool = {};
        this.poolClass = {};
    }

    //获取对象
    public getClass<T>(_class: T | any): T {
        let node = null;
        if (this.poolClass[_class.name] == null) {
            this.poolClass[_class.name] = new Array();
        }
        if (this.poolClass[_class.name].length > 0) {
            node = this.poolClass[_class.name].shift();
        }
        else {
            node = new _class();
        }
        return node;
    }

    //回收对象
    public putClass<T>(_class: T | any) {
        // console.log(_node.name + "已被加入回收池");

        if (this.poolClass[_class.name] == null) {
            this.poolClass[_class.name] = new Array();
        }
        this.poolClass[_class.name].push(_class);
    }
}
