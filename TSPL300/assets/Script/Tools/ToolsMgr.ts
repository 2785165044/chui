import { Vec2, Node, tween, Vec3, v3, sys, resources, Asset, Camera, view, UITransform } from "cc";

export default class ToolsMgr {
    //单利模式
    private static _instance: ToolsMgr = null;
    public static get instance(): ToolsMgr {
        if (this._instance == null) {
            this._instance = new ToolsMgr();
        }
        return this._instance;
    }

    //洗牌算法
    public Shuffle(array: any[]) {
        let m = array.length, t, i;
        while (m) {
            i = Math.floor(Math.random() * m--);
            t = array[m];
            array[m] = array[i];
            array[i] = t;
        }
        return array;
    }

    //本地存储
    public setItem(key: string, value: string) {
        sys.localStorage.setItem(key, value);
    }

    public getItem(key: string, defaultValue: string = "") {
        let value = sys.localStorage.getItem(key);
        if (value == null || value == "") {
            value = defaultValue;
        }
        return value;
    }

    //加载逻辑
    public load(paths: string, type: typeof Asset, onComplete: (error: Error, resource: any) => void) {
        resources.load(paths, type, function (error, resource) {
            onComplete && onComplete(error, resource);
        });
    }

    // //返回一个节点的目标父节点的坐标
    // public getTargetPosition(node: Node, targetNode: string): Vec2 {
    //     //用循环的方式查找父节点，并转换坐标
    //     let nx = node.x;
    //     let ny = node.y;
    //     let parentNode = node.parent;
    //     while (parentNode != null) {
    //         if (parentNode.name == targetNode) {
    //             break;
    //         }
    //         nx += parentNode.x;
    //         ny += parentNode.y;
    //         parentNode = parentNode.parent;
    //     }
    //     return v2(nx, ny);
    // }

    //全局鼠标坐标转为中心为原点的点
    // public getGlobalMousePosition(event: Event.EventTouch): Vec3 {
    //     let x = event.getLocationX() - winSize.width / 2;
    //     let y = event.getLocationY() - winSize.height / 2;
    //     return v3(x, y);
    // }
    /**
    * 将3D坐标转化为2D坐标
    * @param node3D 3D节点
    * @param camera3D 摄像机节点
    * @returns 2D空间坐标
    */
    public static get3DPosTo2DPos(node3D: Node, camera3D: Node): any {
        // let screen_size = view.getVisibleSize(); //可视范围窗口
        let screen_size = view.getVisibleSizeInPixel(); //可视范围窗口

        let get_pos = v3();
        let camera_comp: Camera = camera3D.getComponent(Camera);
        camera_comp.worldToScreen(node3D.worldPosition, get_pos);
        get_pos = v3(
            get_pos.x - screen_size.width / 2,
            get_pos.y - screen_size.height / 2,
            0
        )
        return get_pos;
    }

    /**圆圆碰撞检测3d*/
    public circleCircleCollision(pos1: Vec3, pos2: Vec3, r: number): boolean {
        let distance = Vec3.distance(pos1, pos2);
        if (distance <= r) {
            return true;
        }
        return false;
    }

    // 将一个坐标转换为另一个坐标系下的坐标
    public convertToNodeSpaceAR(node: Node, targetNode: Node): Vec3 {
        let pos = node.getComponent(UITransform).convertToWorldSpaceAR(v3(0, 0, 0));
        pos = targetNode.getComponent(UITransform).convertToNodeSpaceAR(pos);
        return pos;
    }

    /**求距离*/
    public static calculateDistance(x1: number, y1: number, x2: number, y2: number): number {
        const vectorX = x2 - x1;
        const vectorY = y2 - y1;
        return Math.sqrt(vectorX * vectorX + vectorY * vectorY);
    }

    /**求距离*/
    public static calculateDistanceNode(_node1: Node, _node2: Node): number {
        return ToolsMgr.calculateDistance(_node1.worldPosition.x, _node1.worldPosition.z, _node2.worldPosition.x, _node2.worldPosition.z);
    }

    /**角度*/
    static calculateAngle(x1: number, y1: number, x2: number, y2: number): number {
        const deltaX = x2 - x1;
        const deltaY = y2 - y1;
        return Math.atan2(-deltaY, deltaX) + Math.PI / 2;
    }

    /**弧度*/
    static calculateAngle1(x1: number, y1: number, x2: number, y2: number): number {
        const deltaX = x2 - x1;
        const deltaY = y2 - y1;
        return Math.atan2(-deltaY, deltaX);
    }

    /**角度*/
    static calculateRo(x1: number, y1: number, x2: number, y2: number): number {
        const deltaX = x2 - x1;
        const deltaY = y2 - y1;
        return Math.atan2(-deltaY, deltaX) * 180 / Math.PI;
    }

    //二阶贝塞尔曲线
    static quadraticBezier3D(t: number, p0: Vec3, p1: Vec3, p2: Vec3): Vec3 {
        const u = 1 - t;
        const x = u * u * p0.x + 2 * u * t * p1.x + t * t * p2.x;
        const y = u * u * p0.y + 2 * u * t * p1.y + t * t * p2.y;
        const z = u * u * p0.z + 2 * u * t * p1.z + t * t * p2.z;
        return new Vec3(x, y, z);
    }

    //动态效果
    static applyProductionEffect(node: Node, duration: number, scaleMultiplier: number) {
        tween(node)
            .to(duration / 2, { scale: v3(scaleMultiplier, scaleMultiplier, scaleMultiplier) })
            .to(duration / 2, { scale: v3(1, 1, 1) })
            .start();
    }

    // JavaScript 原生的 lerp 函数
    static lerp(start: number, end: number, t: number): number {
        return start * (1 - t) + end * t;
    }

    static normalizedAngle(angle: number) {
        angle = angle % 360;
        if (angle < 0) {
            angle += 360;
        }
        return angle;
    }

    //计算两个角所成夹角角度
    public static calculateDegreeByTwoDegree( a:number, b:number){
        let abs = Math.abs(a - b);
        if(abs > 180){
            return 360 - abs;
        }
        return abs;
    }
}