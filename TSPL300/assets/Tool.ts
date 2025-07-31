import { Animation, JsonAsset, Label, Node, resources, sp, Sprite, SpriteFrame, sys, tween, UIOpacity, UITransform, v2, v3, Vec2, Vec3, VideoClip, VideoPlayer } from "cc";
import { ConstValue } from "./ConstValue";
import { GameConfig } from "./GameConfig";

/**
 * 常用方法工具类
 */
class ToolClass {
    private static _instance: ToolClass = null;
    public static getInstance(): ToolClass {
        if (this._instance === null) {
            this._instance = new ToolClass();
        }
        return this._instance;
    }

    /**
     * 设置节点spriteFrame
     * @param node 节点
     * @param name 图片name(图片需要放在resources/images文件夹下)
     */
    setSpriteFrame(node: Node, name: string) {
        let path = ConstValue.IMAGES_DIR + name + "/spriteFrame";
        resources.load(path, SpriteFrame, (err, spriteFrame) => {
            if (err) {
                console.log(err);
                return;
            } else {
                node.getComponent(Sprite).spriteFrame = spriteFrame;
            }
        });
    }

    /**
    * 多语言设置文本内容
    * @param node 
    * @param labelName 
    */
    setLabelString(node: Node, labelName: string) {
        let path = ConstValue.JSON_DIR + "LanguageData";
        let languageName: string = null;
        if (!GameConfig.isMultilingual) {
            languageName = "en";
        } else {
            languageName = sys.languageCode.slice(0, 2);
        }
        resources.load(path, JsonAsset, (err, language: JsonAsset) => {
            if (err || language.json[languageName][labelName] == undefined) {
                return;
            } else {
                node.getComponent(Label).string = language.json[languageName][labelName];
                node.getComponent(Label).updateRenderData();
            }
        });
    }

    /**
    * 随机数
    * @param min 最小数
    * @param max 最大数
    */
    randomNumber(min: any, max: any): any {
        return Math.floor(
            parseInt(
                Math.random() * (max - min + 1) + min, 10)
        );
    }

    /**
    * 数组随机排序
    * @param arr 需要重新排序的数组
    */
    shuffle(arr) {
        let i = arr.length;
        while (i) {
            let j = Math.floor(Math.random() * i--);
            [arr[j], arr[i]] = [arr[i], arr[j]];
        }
        return arr;
    }

    /**
     * 获取旋转角度
     * @param startPos 起始点坐标
     * @param endPos 终点坐标
     * @returns 
     */
    getAngle(startPos: Vec2 | Vec3, endPos: Vec2 | Vec3) {
        let x = endPos.x - startPos.x;
        let y = endPos.y - startPos.y
        let radian = Math.atan2(y, x)  //弧度  
        let angle = radian * 180 / Math.PI;  //角度   
        return angle;
    }

    /**
     * 以某点为圆心，生成圆周上等分点的坐标
     *
     * @param {number} r 半径
     * @param {cc.Vec2} pos 圆心坐标
     * @param {number} count 等分点数量
     * @param {number} [randomScope=80] 等分点的随机波动范围
     * @returns {cc.Vec2[]} 返回等分点坐标
     */
    getCirclePoints(r: number, pos: Vec2 | Vec3, count: number, randomScope: number = 80): Vec2 | Vec3[] {
        let points = [];
        let radians = (Math.PI / 180) * Math.round(360 / count);
        for (let i = 0; i < count; i++) {
            let x = pos.x + r * Math.sin(radians * i);
            let y = pos.y + r * Math.cos(radians * i);
            points.unshift(v3(x + Math.random() * randomScope, y + Math.random() * randomScope, 0));
        }
        return points;
    }

    /**
     * 获取移动时间
     * @param startPos 起始位置坐标
     * @param endPos 终点位置坐标
     * @param moveSpeed 移动速度
     * @returns 移动时间
     */
    getMoveTime(startPos: Vec2 | Vec3, endPos: Vec2 | Vec3, moveSpeed: number) {
        let distance = Math.sqrt(Math.pow((endPos.x - startPos.x), 2) + Math.pow((endPos.y - startPos.y), 2));
        let time = distance / moveSpeed;
        return time;
    }

    /**
     * 获取两个节点之间的距离
     * @param node1 
     * @param node2 
     */
    getNodeDis(node1: Node, node2: Node) {
        let pos1: Vec2 | Vec3 = node1.position;
        let pos2: Vec2 | Vec3 = this.getNodePos(node2, node1.parent);
        let dis: number = Math.sqrt(Math.pow((pos1.x - pos2.x), 2) + Math.pow((pos1.y - pos2.y), 2));
        return dis;
    }
    /**获取两个二维向量之间的距离 */
    getDisVec2(v1: Vec2, v2: Vec2): number {
        let dis: number = 0;
        return Vec2.distance(v1, v2);
    }
    /**获取两个三维向量之间的距离 */
    getDisVec3(v1: Vec3, v2: Vec3): number {
        let dis: number = 0;
        return Vec3.distance(v1, v2);
    }

    /**
     * 播放spine动画
     * @param {*} node 动画文件节点
     * @param {*} animName 动作名称
     * @param {*} loop 是否循环
     * @param {*} callback 播放完毕回调
     */
    playSpine(node: Node, animName: string, loop: boolean = true, callback: any = null) {
        // sp_Skeleton.premultipliedAlpha=false;//这样设置在cocos creator中才能有半透明效果

        // let spine = this.node.getComponent(sp.Skeleton);
        let sp_Skeleton = node.getComponent(sp.Skeleton);
        let track = sp_Skeleton.setAnimation(0, animName, loop);
        if (track) {
            // 注册动画的结束回调
            sp_Skeleton.setCompleteListener((trackEntry) => {
                let name = trackEntry.animation ? trackEntry.animation.name : '';
                if (name === animName && callback && callback != null) {
                    callback(); // 动画结束后执行自己的逻辑
                }
            });
        }
    }

    /**
     * 获取字符中的数字
     * @param str 
     * @returns 
     */
    getNum(str: string) {
        var value = str.replace(/[^0-9]/ig, "");
        return Number(value);
    }

    /**
     * 获取字符中非数字的字符
     * @param str 
     * @returns 
     */
    getString(str: string) {
        var value = str.match(/\D/ig);
        let lastValue = value.join("");
        return String(lastValue);
    }

    /**
    * 获取当前节点转换到某节点下的坐标
    * @param curNode 
    * @param targetNode 
    * @returns 
    */
    getNodePos(curNode: Node, targetNode: Node) {
        if (!curNode.parent) return
        let worldPos = curNode.parent.getComponent(UITransform).convertToWorldSpaceAR(curNode.position);
        let pos = targetNode.getComponent(UITransform).convertToNodeSpaceAR(worldPos);
        return pos;
    }

    /**
     * 改变当前节点的父级节点
     * @param curNode 
     * @param parent 
     */
    changeNodeParent(curNode: Node, parent: Node) {
        if (!curNode.parent) return
        let pos = this.getNodePos(curNode, parent);
        curNode.setParent(parent);
        curNode.setPosition(pos);
    }


    /**
     * 显示气泡
     * @param bubble 气泡节点
     * @param callback 显示气泡后的回调函数
     */
    displayBubble(bubble: Node, callback: Function = null) {
        bubble.active = true;
        bubble.setScale(v3(0, 0, 0));
        tween(bubble)
            .to(0.3, { scale: v3(1, 1) })
            .call(() => {
                if (callback) {
                    callback();
                }
            })
            .start();
    }

    /**
     * 求点C在直线AB上的垂点坐标
     * @param posA 
     * @param posB 
     * @param posC 
     * @returns 
     */
    getVerticalPointPos(posA: Vec2, posB: Vec2, posC: Vec2) {
        let pointA = v2(posA);
        let pointB = v2(posB);
        let pointC = v2(posC);

        let vecAB = v2(pointB.x - pointA.x, pointB.y - pointA.y);
        let vecAC = v2(pointC.x - pointA.x, pointC.y - pointA.y);

        let dotProd = vecAB.dot(vecAC);
        let lenAB = vecAB.length();
        let projLen = dotProd / lenAB;
        let projVec = vecAB.normalize().multiplyScalar(projLen);

        let pointD = pointA.add(projVec);

        return pointD;
    }

    /**
     * 设置视频clip
     * @param node 节点
     * @param name 视频name(视频需要放在resources/videos文件夹下)
     */
    setVideoClip(node: Node, name: string) {
        let path = ConstValue.VIDEOS_DIR + name;
        resources.load(path, VideoClip, (err, videoClip) => {
            node.getComponent(VideoPlayer).clip = videoClip;
        });
    }

    /**
      * 指定视频从哪个时间点开始播放
      * @param videoNode cc.Node视频节点
      * @param time 时间（s）
      */
    setVideoCurrentTime(videoNode: Node, time: number) {
        if (sys.os === sys.OS.IOS && sys.browserType === sys.BrowserType.QQ) {
            //在ios上qq浏览器需要特殊处理
            let sourceNode = videoNode.getComponent(VideoPlayer)["_impl"].video;
            sourceNode.currentTime = time;
        } else {
            videoNode.getComponent(VideoPlayer)["_impl"].video.currentTime = time;
        }
    }

    /**
      * 设置视频播放速率
      * @param video cc.Node视频节点
      * @param rate number
      */
    setVideoPlaybackRate(videoNode: Node, rate: number) {
        if (sys.os === sys.OS.IOS && sys.browserType === sys.BrowserType.QQ) {
            //在ios上qq浏览器需要特殊处理
            let sourceNode = videoNode.getComponent(VideoPlayer)["_impl"].video;
            sourceNode.playbackRate = rate;
        } else {
            videoNode.getComponent(VideoPlayer)["_impl"].video.playbackRate = rate;
        }
    }

    /**
     * 设置视频模糊
     * @param videoNode cc.Node视频节点
     */
    setVideoBlur(videoNode: Node) {
        if (sys.os === sys.OS.IOS && sys.browserType === sys.BrowserType.QQ) {
            //在ios上qq浏览器需要特殊处理
            let sourceNode = videoNode.getComponent(VideoPlayer)["_impl"].video;
            sourceNode.style.filter = "blur(20px)";
        } else {
            videoNode.getComponent(VideoPlayer)["_impl"].video.style.filter = "blur(20px)";
        }
    }


    /**
     * 随机数（单个）
     * @param min 最小值
     * @param max 最大值
     */
    RandomNumber(min: number, max: number): number {
        let res = 0;
        res = Math.floor(min + (max - min + 1) * Math.random());
        return res;
    }

    /**
     * 
     * @param node 
     * @param name 
     * @param callback 
     */
    playAnim(node: Node, name?: string, callback: Function = null) {
        node.active = true;
        node.getComponent(Animation).play();
        if (callback && !node.getComponent(Animation).hasEventListener(Animation.EventType.FINISHED)) {
            node.getComponent(Animation).on(Animation.EventType.FINISHED, () => {
                callback();
            });
        }
    }
    /**
   * 二阶贝塞尔曲线运动
   * @param target 目标
   * @param duration 时间
   * @param c1 起始点
   * @param c2 控制点
   * @param to 终点
   * @param callback 回调
   * @param undateCallback 更新回调
   * @returns
   */bezierTo(target: any, duration: number, c1: Vec3, c2: Vec3, to: Vec3, callback?: any, undateCallback?: any) {
        let newC1 = c1.clone();
        let newC2 = c2.clone();
        let newTo = to.clone();

        // opts = opts || Object.create(null);
        let twoBezier = (t: number, p1: Vec3, cp: Vec3, p2: Vec3) => {
            let x = (1 - t) * (1 - t) * p1.x + 2 * t * (1 - t) * cp.x + t * t * p2.x;
            let y = (1 - t) * (1 - t) * p1.y + 2 * t * (1 - t) * cp.y + t * t * p2.y;
            return v3(x, y, 0);
        };
        return tween(target)
            .to(duration, { positon: to }, {
                onUpdate: (arg: Vec3, ratio: number) => {
                    target.position = twoBezier(ratio, newC1, newC2, newTo);
                    if (undateCallback) {
                        undateCallback();
                    }
                }
            }).call(() => {
                if (callback) {
                    callback();
                }
            }).start();
    }

    /**
    * 3阶贝塞尔曲线
    * @param target 目标
    * @param duration 时间
    * @param c1 起始点
    * @param c2 控制点
    * @param c3 控制点
    * @param to 终点
    * @param callback 回调 
    * @returns 
    */
    bezierTo3(target: any, duration: number, c1: Vec3, c2: Vec3, c3: Vec3, to: Vec3, callback?: any) {
        let newC1 = c1.clone();
        let newC2 = c2.clone();
        let newC3 = c3.clone();
        let newTo = to.clone();

        const threeBezier = (t: number, p1: Vec3, cp1: Vec3, cp2: Vec3, p2: Vec3) => {
            let x =
                (1 - t) * (1 - t) * (1 - t) * p1.x +
                3 * t * (1 - t) * (1 - t) * cp1.x +
                3 * t * t * (1 - t) * cp2.x +
                t * t * t * p2.x;
            let y =
                (1 - t) * (1 - t) * (1 - t) * p1.y +
                3 * t * (1 - t) * (1 - t) * cp1.y +
                3 * t * t * (1 - t) * cp2.y +
                t * t * t * p2.y;
            return v3(x, y, 0);
        };
        return tween(target).to(duration, { positon: to }, {
            onUpdate: (arg: Vec3, ratio: number) => {
                target.position = threeBezier(ratio, newC1, newC2, newC3, newTo);

            }
        }).call(() => {
            if (callback) {
                callback();
            }
        }).start();
    }

    /**
     * 
     * @param polygonA 
     * @param polygonB 
     * @returns 
     */
    doPolygonsIntersect(polygonA, polygonB) {


        const axesA = this.getAxes(polygonA);
        const axesB = this.getAxes(polygonB);

        for (let axis of axesA.concat(axesB)) {
            const projectionA = this.projectPolygon(axis, polygonA);
            const projectionB = this.projectPolygon(axis, polygonB);
            if (!this.polygonsOverlap(projectionA, projectionB)) {
                return false; // 存在分离轴，不相交
            }
        }

        return true; // 没有分离轴，相交
    }
    private projectPolygon(axis, vertices) {
        let min = Infinity;
        let max = -Infinity;
        for (let vertex of vertices) {
            const projection = vertex.x * axis.x + vertex.y * axis.y;
            min = Math.min(min, projection);
            max = Math.max(max, projection);
        }
        return [min, max];
    }

    private polygonsOverlap(minMaxA, minMaxB) {
        return minMaxB[0] <= minMaxA[1] && minMaxA[0] <= minMaxB[1];
    }

    private getEdges(vertices) {
        const edges = [];
        for (let i = 0; i < vertices.length; i++) {
            let nextIndex = (i + 1) % vertices.length;
            let edge = {
                x: vertices[nextIndex].x - vertices[i].x,
                y: vertices[nextIndex].y - vertices[i].y
            };
            edges.push(edge);
        }
        return edges;
    }

    private getAxes(vertices) {
        const edges = this.getEdges(vertices);
        const axes = [];
        for (let edge of edges) {
            // 计算法线（轴）
            const axis = { x: -edge.y, y: edge.x };
            // 规范化
            const length = Math.sqrt(axis.x * axis.x + axis.y * axis.y);
            axes.push({ x: axis.x / length, y: axis.y / length });
        }
        return axes;
    }
}

export const Tool = ToolClass.getInstance();