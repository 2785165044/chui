import { ConstValue } from "../Data/ConstValue";
import { GameManager } from "./GameManager";

/**
 * 常用方法工具类
 */
class UtilsClass {
    private static _instance: UtilsClass = null;
    public static getInstance(): UtilsClass {
        if (this._instance === null) {
            this._instance = new UtilsClass();
        }
        return this._instance;
    }

    /**
     * 设置节点spriteFrame
     * @param node 节点
     * @param name 图片name(图片需要放在resources/images文件夹下)
     */
    setSpriteFrame(node: cc.Node, name: string) {
        let path = "images/" + name;
        cc.loader.loadRes(path, cc.SpriteFrame, (err, spriteFrame) => {
            node.getComponent(cc.Sprite).spriteFrame = spriteFrame;
        });
    }

    /**
    * 多语言设置文本内容
    * @param node 
    * @param labelName 
    */
    setLabelString(node: cc.Node, labelName: string) {
        let path = ConstValue.JSON_DIR + "LanguageData";
        let languageName: string = null;
        if (!GameManager.isMultilingual) {
            languageName = "en";
        } else {
            languageName = cc.sys.languageCode.slice(0, 2);
        }
        cc.loader.loadRes(path, cc.JsonAsset, (err, language: cc.JsonAsset) => {
            if (err || language.json[languageName][labelName] == undefined) {
                return;
            } else {
                node.getComponent(cc.Label).string = language.json[languageName][labelName];
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
    getAngle(startPos: cc.Vec2 | cc.Vec3, endPos: cc.Vec2 | cc.Vec3) {
        let x = endPos.x - startPos.x;
        let y = endPos.y - startPos.y
        let radian = Math.atan2(y, x)  //弧度   
        let angle = radian * 180 / Math.PI;  //角度   
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
    getCirclePoints(r: number, pos: cc.Vec2, count: number, randomScope: number = 60): cc.Vec2[] {
        let points = [];
        let radians = (Math.PI / 180) * Math.round(360 / count);
        for (let i = 0; i < count; i++) {
            let x = pos.x + r * Math.sin(radians * i);
            let y = pos.y + r * Math.cos(radians * i);
            points.unshift(cc.v3(x + Math.random() * randomScope, y + Math.random() * randomScope, 0));
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
    getMoveTime(startPos: cc.Vec2, endPos: cc.Vec2, moveSpeed: number) {
        // let distance = Math.sqrt(Math.pow((endPos.x - startPos.x), 2) + Math.pow((endPos.y - startPos.y), 2));
        let distance = startPos.sub(endPos).mag();
        let time = distance / moveSpeed;
        return time;
    }

    /**
     * 播放spine动画
     * @param {*} node 动画文件节点
     * @param {*} animName 动作名称
     * @param {*} loop 是否循环
     * @param {*} callback 播放完毕回调
     */
    playSpine(node: cc.Node, animName: string, loop: boolean = true, callback: any = null) {
        // sp_Skeleton.premultipliedAlpha=false;//这样设置在cocos creator中才能有半透明效果

        // let spine = this.node.getComponent(sp.Skeleton);
        let sp_Skeleton = node.getComponent(sp.Skeleton);
        let track = sp_Skeleton.setAnimation(0, animName, loop);
        if (track) {
            // 注册动画的结束回调
            sp_Skeleton.setCompleteListener((trackEntry, loopCount) => {
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
    getNodePos(curNode: cc.Node, targetNode: cc.Node) {
        let worldPos = curNode.parent.convertToWorldSpaceAR(curNode.position);
        let pos = targetNode.convertToNodeSpaceAR(worldPos);
        return cc.v2(pos);
    }

    /**
     * 播放上下浮动动画
     * @param node
     * @param time 
     * @param distance 
     */
    playNodeFloatAction(node: cc.Node, time: number, distance: number) {
        node.runAction(
            cc.repeatForever(
                cc.sequence(
                    cc.moveTo(time, node.x, node.y + distance),
                    cc.moveTo(time - 0.05, node.x, node.y - distance),
                )
            )
        );
    }

    /**
     * 显示气泡
     * @param bubble 气泡节点
     * @param callback 显示气泡后的回调函数
     */
    displayBubble(bubble: cc.Node, callback: Function = null) {
        bubble.active = true;
        bubble.scale = 0;
        bubble.runAction(
            cc.sequence(
                cc.scaleTo(0.3, 1).easing(cc.easeBackOut()),
                cc.callFunc(() => {
                    if (callback) {
                        callback();
                    }
                })
            )
        );
    }

    /**
     * 果冻效果
     * @param node 
     * @param multiple scale
     * @param callback 结束回调
     */
    JellyEffect(node: cc.Node, multiple: number, callback?: Function) {
        function generate_action(params) {
            var scale_action = cc.scaleTo(params.time, params.scale_x, params.scale_y);
            var fade_action = cc.fadeIn(params.time);
            return cc.spawn(scale_action, fade_action);
        }

        var spawn_action1 = generate_action({ time: 0.06, scale_x: 0.63 * multiple, scale_y: 1.3 * multiple, scale_z: 1 * multiple });
        var spawn_action2 = generate_action({ time: 0.12, scale_x: 1.1 * multiple, scale_y: 0.7 * multiple, scale_z: 1 * multiple });
        var spawn_action3 = generate_action({ time: 0.07, scale_x: 0.8 * multiple, scale_y: 1.1 * multiple, scale_z: 1 * multiple });
        var spawn_action4 = generate_action({ time: 0.07, scale_x: 1.1 * multiple, scale_: 0.95 * multiple, scale_z: 1 * multiple });
        var spawn_action5 = generate_action({ time: 0.07, scale_x: 1 * multiple, scale_y: 1 * multiple, scale_z: 1 * multiple });
        node.runAction(cc.sequence(
            spawn_action1,
            spawn_action2,
            spawn_action3,
            spawn_action4,
            spawn_action5,
            cc.callFunc(() => {
                if (callback) {
                    callback();
                }
            })
        ));
    }

    /**
     * 求点C在直线AB上的垂点坐标
     * @param posA 
     * @param posB 
     * @param posC 
     * @returns 
     */
    getVerticalPointPos(posA: cc.Vec2, posB: cc.Vec2, posC: cc.Vec2) {
        let pointA = cc.v2(posA);
        let pointB = cc.v2(posB);
        let pointC = cc.v2(posC);

        let vecAB = cc.v2(pointB.x - pointA.x, pointB.y - pointA.y);
        let vecAC = cc.v2(pointC.x - pointA.x, pointC.y - pointA.y);

        let dotProd = vecAB.dot(vecAC);
        let lenAB = vecAB.mag();
        let projLen = dotProd / lenAB;
        let projVec = vecAB.normalizeSelf().mul(projLen);

        let pointD = pointA.add(projVec);

        return pointD;
    }

    /**
     * 设置视频clip
     * @param node 节点
     * @param name 视频name(视频需要放在resources/videos文件夹下)
     */
    setVideoClip(node: cc.Node, name: string) {
        let path = ConstValue.VIDEOS_DIR + name;
        cc.loader.loadRes(path, cc.Asset, (err, videoClip) => {
            node.getComponent(cc.VideoPlayer).clip = videoClip;
        });
    }

    /**
      * 指定视频从哪个时间点开始播放
      * @param videoNode cc.Node视频节点
      * @param time 时间（s）
      */
    setVideoCurrentTime(videoNode: cc.Node, time: number) {
        if (cc.sys.os === cc.sys.OS_IOS && cc.sys.browserType === cc.sys.BROWSER_TYPE_MOBILE_QQ) {
            //在ios上qq浏览器需要特殊处理
            let sourceNode = videoNode.getComponent(cc.VideoPlayer)["_impl"]._video;
            sourceNode.currentTime = time;
        } else {
            videoNode.getComponent(cc.VideoPlayer)["_impl"]._video.currentTime = time;
        }
    }

    /**
      * 设置视频播放速率
      * @param video cc.Node视频节点
      * @param rate number
      */
    setVideoPlaybackRate(videoNode: cc.Node, rate: number) {
        if (cc.sys.os === cc.sys.OS_IOS && cc.sys.browserType === cc.sys.BROWSER_TYPE_MOBILE_QQ) {
            //在ios上qq浏览器需要特殊处理
            let sourceNode = videoNode.getComponent(cc.VideoPlayer)["_impl"]._video;
            sourceNode.playbackRate = rate;
        } else {
            videoNode.getComponent(cc.VideoPlayer)["_impl"]._video.playbackRate = rate;
        }
    }

    /**
     * 设置视频模糊
     * @param videoNode cc.Node视频节点
     */
    setVideoBlur(videoNode: cc.Node) {
        if (cc.sys.os === cc.sys.OS_IOS && cc.sys.browserType === cc.sys.BROWSER_TYPE_MOBILE_QQ) {
            //在ios上qq浏览器需要特殊处理
            let sourceNode = videoNode.getComponent(cc.VideoPlayer)["_impl"]._video;
            sourceNode.style.filter = "blur(20px)";
        } else {
            videoNode.getComponent(cc.VideoPlayer)["_impl"]._video.style.filter = "blur(20px)";
        }
    }

    /**
   * 水平翻转（卡片翻转）
   * @param node 节点
   * @param duration 总时长
   * @param onMiddle 中间状态回调
   * @param onComplete 完成回调
   */
    flip(node: cc.Node, duration: number, onMiddle?: Function, onComplete?: Function): Promise<void> {
        return new Promise<void>(res => {
            const tween = cc.tween,
                time = duration / 3,
                scaleX = node.scale,
                skewY = scaleX > 0 ? 20 : -20;
            tween(node)
                .parallel(
                    tween().to(time, { scaleX: 0 }, { easing: 'quadIn' }),
                    tween().to(time, { skewY: -skewY }, { easing: 'quadOut' }),
                )
                .call(() => {
                    onMiddle && onMiddle();
                })
                .parallel(
                    tween().to(time, { scaleX: -scaleX }, { easing: 'quadOut' }),
                    tween().to(time, { skewY: 0 }, { easing: 'quadIn' }),
                )
                .call(() => {
                    onMiddle && onMiddle();
                })
                .parallel(
                    tween().to(time, { scaleX: scaleX }, { easing: 'quadOut' }),
                    tween().to(time, { skewY: 0 }, { easing: 'quadIn' }),
                )
                .call(() => {
                    onComplete && onComplete();
                    res();
                })
                .start();
        });
    }

    /**
  * 2D节点绕Y轴旋转一圈动画
  * @param node 要旋转的节点
  * @param duration 动画时长
  * @param onComplete 完成回调
  */
    flipY(node: cc.Node, duration: number, onComplete?: Function): Promise<void> {
        return new Promise<void>(res => {
            const originalScale = node.scaleX;

            // 使用更平滑的缓动函数
            const smoothEasing = {
                easing: 'sineInOut',
                progress: (start, end, current, ratio) => {
                    // 使用更平滑的曲线
                    const progress = ratio < 0.5
                        ? 2 * ratio * ratio
                        : 1 - Math.pow(-2 * ratio + 2, 2) / 2;
                    return start + (end - start) * progress;
                }
            };

            cc.tween(node)
                .to(duration, {
                    scaleX: -originalScale
                }, smoothEasing)
                .call(() => {
                    onComplete && onComplete();
                    res();
                })
                .start();
        });
    }

    // ... existing code ...

    //数字按照三个一组用逗号隔开
    formatNumber(number) {
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
}

export const Utils = UtilsClass.getInstance();