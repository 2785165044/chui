import { _decorator, Camera, Material, Node, Sprite, tween, UITransform, v3, Vec2, Vec3, view } from "cc";

const { ccclass, property } = _decorator;

@ccclass
export default class Utils {

    /**
     * 父节点转换
     * @param node 需要转换的节点
     * @param parent 父节点
     */
    public static changeParent(node: Node, parent: Node) {
        var pos1 = node.getComponent(UITransform).convertToWorldSpaceAR(v3(0, 0, 0));
        var pos2 = parent.getComponent(UITransform).convertToNodeSpaceAR(pos1);
        node.setPosition(pos2);
        node.parent = parent;
    }

    /**获取当前节点转换到某节点下的坐标 */
    public static getNodePos(curNode: Node, targetNode: Node) {
        // 将当前节点的位置转换为世界坐标系中的位置
        let worldPos = curNode.worldPosition;
        // 将上一步转换得到的世界坐标，再转换为目标节点坐标系下的位置
        let pos = targetNode.getComponent(UITransform).convertToNodeSpaceAR(worldPos);
        return pos;
    }

    /**
     * 设置节点的材质（2D）
     * @param node 目标节点
     * @param isGray 是否进行置灰操作
     */
    public static setMaterial2D(node: Node, material: Material): void {
        node.getComponent(Sprite).setMaterial(material, 0);
    }


    /**获取两个二维向量之间的距离 */
    public static getDisVe2(v1: Vec2, v2: Vec2): number {
        let dis: number = 0;
        return Vec2.distance(v1, v2);
    }

    /**获取两个三维向量之间的距离 */
    public static getDisVe3(v1: Vec3, v2: Vec3): number {
        let dis: number = 0;
        return Vec3.distance(v1, v2);
    }

    /**获取角度 */
    public static getAngle(pos: Vec3): any {
        let angle = Math.atan2(pos.x, pos.z);
        return angle * (180 / Math.PI);
    }

    /**
     * 将3D坐标转化为2D坐标
     * @param node3D 3D节点
     * @param camera3D 摄像机节点
     * @returns 2D空间坐标
     */
    public static get3DPosTo2DPos(node_camera3d: Camera, node_model3d: Node, node_canvas: Node): any {
        let screen_pos = v3();
        node_camera3d.convertToUINode(node_model3d.worldPosition, node_canvas, screen_pos);
        return screen_pos;
    }

    /**
     * 获取3D节点在Canvas下的位置信息
     * @param node_camera3d 3d相机节点
     * @param node_model3d 3d模型节点
     * @param node_canvas canvas节点
     */
    public static setUIPos3DTo2D(node_camera3d: Camera, node_model3d: Node, node_canvas: Node): any {
        let screen_pos = v3();
        node_camera3d.convertToUINode(node_model3d.worldPosition, node_canvas, screen_pos);
        return screen_pos;
    }

    /**
     * 获取3D节点在Canvas下的位置信息
     * @param node_camera3d 3d相机节点
     * @param node_model3d_pos 3d模型节点世界坐标
     * @param node_canvas canvas节点
     */
    public static setUIPos3DTo2DWithPos(node_camera3d: Camera, node_model3d_pos: Vec3, node_canvas: Node): any {
        let screen_pos = v3();
        node_camera3d.convertToUINode(node_model3d_pos, node_canvas, screen_pos);
        return screen_pos;
    }

    /**播放Q弹动画2D */
    public static playQAnim2D(scale_tar, node: Node, cb?: Function): void {
        node.setScale(0, 0);
        let offsetX1 = 0.1;
        let offsetX2 = 0.2;
        let offsetY1 = 0.1;
        let offsetY2 = 0.2;
        let scale = scale_tar;
        let tween1 = tween(node.scale)
            .to(0.1, { x: scale + offsetX1, y: scale + offsetY1 })
            .to(0.1, { x: scale - offsetX1, y: scale - offsetY1 })
            .to(0.1, { x: scale + offsetX2, y: scale + offsetY2 })
            .to(0.1, { x: scale - offsetX2, y: scale - offsetY2 })
            .to(0.1, { x: scale, y: scale })
            .call(() => {
                tween1 = null;
                if (cb) cb();
            })
            .start();
    }

    /**播放Q弹动画3D */
    public static playQAnim3D(scale_tar: number, node: Node, cb?: Function): void {
        // node.setScale(0, 0, 0);
        let offsetX1 = 0.1;
        let offsetX2 = 0.2;
        let offsetY1 = 0.15;
        let offsetY2 = 0.5;
        let offsetZ1 = 0.15;
        let offsetZ2 = 0.1;
        let scale = scale_tar;
        let tween1 = tween(node)
            .to(0.1, { scale: v3(scale + offsetX1, scale + offsetY1, scale + offsetZ1) })
            .to(0.1, { scale: v3(scale - offsetX1, scale - offsetY1, scale - offsetZ1) })
            .to(0.1, { scale: v3(scale + offsetX1, scale + offsetY1, scale + offsetZ1) })
            .to(0.1, { scale: v3(scale - offsetX1, scale - offsetY1, scale - offsetZ1) })
            .to(0.1, { scale: v3(scale, scale, scale) })
            .call(() => {
                tween1 = null;
                if (cb) cb();
            })
            .start();
    }


}
