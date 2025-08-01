"use strict";
cc._RF.push(module, '4321cKGyYZMVYxzUolVhFaf', 'Utils');
// Script/Manager/Utils.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Utils = void 0;
var ConstValue_1 = require("../Data/ConstValue");
var GameManager_1 = require("./GameManager");
/**
 * 常用方法工具类
 */
var UtilsClass = /** @class */ (function () {
    function UtilsClass() {
    }
    UtilsClass.getInstance = function () {
        if (this._instance === null) {
            this._instance = new UtilsClass();
        }
        return this._instance;
    };
    /**
     * 设置节点spriteFrame
     * @param node 节点
     * @param name 图片name(图片需要放在resources/images文件夹下)
     */
    UtilsClass.prototype.setSpriteFrame = function (node, name) {
        var path = "images/" + name;
        cc.loader.loadRes(path, cc.SpriteFrame, function (err, spriteFrame) {
            node.getComponent(cc.Sprite).spriteFrame = spriteFrame;
        });
    };
    /**
    * 多语言设置文本内容
    * @param node
    * @param labelName
    */
    UtilsClass.prototype.setLabelString = function (node, labelName) {
        var path = ConstValue_1.ConstValue.JSON_DIR + "LanguageData";
        var languageName = null;
        if (!GameManager_1.GameManager.isMultilingual) {
            languageName = "en";
        }
        else {
            languageName = cc.sys.languageCode.slice(0, 2);
        }
        cc.loader.loadRes(path, cc.JsonAsset, function (err, language) {
            if (err || language.json[languageName][labelName] == undefined) {
                return;
            }
            else {
                node.getComponent(cc.Label).string = language.json[languageName][labelName];
            }
        });
    };
    /**
    * 随机数
    * @param min 最小数
    * @param max 最大数
    */
    UtilsClass.prototype.randomNumber = function (min, max) {
        return Math.floor(parseInt(Math.random() * (max - min + 1) + min, 10));
    };
    /**
    * 数组随机排序
    * @param arr 需要重新排序的数组
    */
    UtilsClass.prototype.shuffle = function (arr) {
        var _a;
        var i = arr.length;
        while (i) {
            var j = Math.floor(Math.random() * i--);
            _a = [arr[i], arr[j]], arr[j] = _a[0], arr[i] = _a[1];
        }
        return arr;
    };
    /**
     * 获取旋转角度
     * @param startPos 起始点坐标
     * @param endPos 终点坐标
     * @returns
     */
    UtilsClass.prototype.getAngle = function (startPos, endPos) {
        var x = endPos.x - startPos.x;
        var y = endPos.y - startPos.y;
        var radian = Math.atan2(y, x); //弧度   
        var angle = radian * 180 / Math.PI; //角度   
        return angle;
    };
    /**
     * 以某点为圆心，生成圆周上等分点的坐标
     *
     * @param {number} r 半径
     * @param {cc.Vec2} pos 圆心坐标
     * @param {number} count 等分点数量
     * @param {number} [randomScope=80] 等分点的随机波动范围
     * @returns {cc.Vec2[]} 返回等分点坐标
     */
    UtilsClass.prototype.getCirclePoints = function (r, pos, count, randomScope) {
        if (randomScope === void 0) { randomScope = 60; }
        var points = [];
        var radians = (Math.PI / 180) * Math.round(360 / count);
        for (var i = 0; i < count; i++) {
            var x = pos.x + r * Math.sin(radians * i);
            var y = pos.y + r * Math.cos(radians * i);
            points.unshift(cc.v3(x + Math.random() * randomScope, y + Math.random() * randomScope, 0));
        }
        return points;
    };
    /**
     * 获取移动时间
     * @param startPos 起始位置坐标
     * @param endPos 终点位置坐标
     * @param moveSpeed 移动速度
     * @returns 移动时间
     */
    UtilsClass.prototype.getMoveTime = function (startPos, endPos, moveSpeed) {
        // let distance = Math.sqrt(Math.pow((endPos.x - startPos.x), 2) + Math.pow((endPos.y - startPos.y), 2));
        var distance = startPos.sub(endPos).mag();
        var time = distance / moveSpeed;
        return time;
    };
    /**
     * 播放spine动画
     * @param {*} node 动画文件节点
     * @param {*} animName 动作名称
     * @param {*} loop 是否循环
     * @param {*} callback 播放完毕回调
     */
    UtilsClass.prototype.playSpine = function (node, animName, loop, callback) {
        // sp_Skeleton.premultipliedAlpha=false;//这样设置在cocos creator中才能有半透明效果
        if (loop === void 0) { loop = true; }
        if (callback === void 0) { callback = null; }
        // let spine = this.node.getComponent(sp.Skeleton);
        var sp_Skeleton = node.getComponent(sp.Skeleton);
        var track = sp_Skeleton.setAnimation(0, animName, loop);
        if (track) {
            // 注册动画的结束回调
            sp_Skeleton.setCompleteListener(function (trackEntry, loopCount) {
                var name = trackEntry.animation ? trackEntry.animation.name : '';
                if (name === animName && callback && callback != null) {
                    callback(); // 动画结束后执行自己的逻辑
                }
            });
        }
    };
    /**
     * 获取字符中的数字
     * @param str
     * @returns
     */
    UtilsClass.prototype.getNum = function (str) {
        var value = str.replace(/[^0-9]/ig, "");
        return Number(value);
    };
    /**
     * 获取字符中非数字的字符
     * @param str
     * @returns
     */
    UtilsClass.prototype.getString = function (str) {
        var value = str.match(/\D/ig);
        var lastValue = value.join("");
        return String(lastValue);
    };
    /**
     * 获取当前节点转换到某节点下的坐标
     * @param curNode
     * @param targetNode
     * @returns
     */
    UtilsClass.prototype.getNodePos = function (curNode, targetNode) {
        var worldPos = curNode.parent.convertToWorldSpaceAR(curNode.position);
        var pos = targetNode.convertToNodeSpaceAR(worldPos);
        return cc.v2(pos);
    };
    /**
     * 播放上下浮动动画
     * @param node
     * @param time
     * @param distance
     */
    UtilsClass.prototype.playNodeFloatAction = function (node, time, distance) {
        node.runAction(cc.repeatForever(cc.sequence(cc.moveTo(time, node.x, node.y + distance), cc.moveTo(time - 0.05, node.x, node.y - distance))));
    };
    /**
     * 显示气泡
     * @param bubble 气泡节点
     * @param callback 显示气泡后的回调函数
     */
    UtilsClass.prototype.displayBubble = function (bubble, callback) {
        if (callback === void 0) { callback = null; }
        bubble.active = true;
        bubble.scale = 0;
        bubble.runAction(cc.sequence(cc.scaleTo(0.3, 1).easing(cc.easeBackOut()), cc.callFunc(function () {
            if (callback) {
                callback();
            }
        })));
    };
    /**
     * 果冻效果
     * @param node
     * @param multiple scale
     * @param callback 结束回调
     */
    UtilsClass.prototype.JellyEffect = function (node, multiple, callback) {
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
        node.runAction(cc.sequence(spawn_action1, spawn_action2, spawn_action3, spawn_action4, spawn_action5, cc.callFunc(function () {
            if (callback) {
                callback();
            }
        })));
    };
    /**
     * 求点C在直线AB上的垂点坐标
     * @param posA
     * @param posB
     * @param posC
     * @returns
     */
    UtilsClass.prototype.getVerticalPointPos = function (posA, posB, posC) {
        var pointA = cc.v2(posA);
        var pointB = cc.v2(posB);
        var pointC = cc.v2(posC);
        var vecAB = cc.v2(pointB.x - pointA.x, pointB.y - pointA.y);
        var vecAC = cc.v2(pointC.x - pointA.x, pointC.y - pointA.y);
        var dotProd = vecAB.dot(vecAC);
        var lenAB = vecAB.mag();
        var projLen = dotProd / lenAB;
        var projVec = vecAB.normalizeSelf().mul(projLen);
        var pointD = pointA.add(projVec);
        return pointD;
    };
    /**
     * 设置视频clip
     * @param node 节点
     * @param name 视频name(视频需要放在resources/videos文件夹下)
     */
    UtilsClass.prototype.setVideoClip = function (node, name) {
        var path = ConstValue_1.ConstValue.VIDEOS_DIR + name;
        cc.loader.loadRes(path, cc.Asset, function (err, videoClip) {
            node.getComponent(cc.VideoPlayer).clip = videoClip;
        });
    };
    /**
      * 指定视频从哪个时间点开始播放
      * @param videoNode cc.Node视频节点
      * @param time 时间（s）
      */
    UtilsClass.prototype.setVideoCurrentTime = function (videoNode, time) {
        if (cc.sys.os === cc.sys.OS_IOS && cc.sys.browserType === cc.sys.BROWSER_TYPE_MOBILE_QQ) {
            //在ios上qq浏览器需要特殊处理
            var sourceNode = videoNode.getComponent(cc.VideoPlayer)["_impl"]._video;
            sourceNode.currentTime = time;
        }
        else {
            videoNode.getComponent(cc.VideoPlayer)["_impl"]._video.currentTime = time;
        }
    };
    /**
      * 设置视频播放速率
      * @param video cc.Node视频节点
      * @param rate number
      */
    UtilsClass.prototype.setVideoPlaybackRate = function (videoNode, rate) {
        if (cc.sys.os === cc.sys.OS_IOS && cc.sys.browserType === cc.sys.BROWSER_TYPE_MOBILE_QQ) {
            //在ios上qq浏览器需要特殊处理
            var sourceNode = videoNode.getComponent(cc.VideoPlayer)["_impl"]._video;
            sourceNode.playbackRate = rate;
        }
        else {
            videoNode.getComponent(cc.VideoPlayer)["_impl"]._video.playbackRate = rate;
        }
    };
    /**
     * 设置视频模糊
     * @param videoNode cc.Node视频节点
     */
    UtilsClass.prototype.setVideoBlur = function (videoNode) {
        if (cc.sys.os === cc.sys.OS_IOS && cc.sys.browserType === cc.sys.BROWSER_TYPE_MOBILE_QQ) {
            //在ios上qq浏览器需要特殊处理
            var sourceNode = videoNode.getComponent(cc.VideoPlayer)["_impl"]._video;
            sourceNode.style.filter = "blur(20px)";
        }
        else {
            videoNode.getComponent(cc.VideoPlayer)["_impl"]._video.style.filter = "blur(20px)";
        }
    };
    /**
   * 水平翻转（卡片翻转）
   * @param node 节点
   * @param duration 总时长
   * @param onMiddle 中间状态回调
   * @param onComplete 完成回调
   */
    UtilsClass.prototype.flip = function (node, duration, onMiddle, onComplete) {
        return new Promise(function (res) {
            var tween = cc.tween, time = duration / 3, scaleX = node.scale, skewY = scaleX > 0 ? 20 : -20;
            tween(node)
                .parallel(tween().to(time, { scaleX: 0 }, { easing: 'quadIn' }), tween().to(time, { skewY: -skewY }, { easing: 'quadOut' }))
                .call(function () {
                onMiddle && onMiddle();
            })
                .parallel(tween().to(time, { scaleX: -scaleX }, { easing: 'quadOut' }), tween().to(time, { skewY: 0 }, { easing: 'quadIn' }))
                .call(function () {
                onMiddle && onMiddle();
            })
                .parallel(tween().to(time, { scaleX: scaleX }, { easing: 'quadOut' }), tween().to(time, { skewY: 0 }, { easing: 'quadIn' }))
                .call(function () {
                onComplete && onComplete();
                res();
            })
                .start();
        });
    };
    /**
  * 2D节点绕Y轴旋转一圈动画
  * @param node 要旋转的节点
  * @param duration 动画时长
  * @param onComplete 完成回调
  */
    UtilsClass.prototype.flipY = function (node, duration, onComplete) {
        return new Promise(function (res) {
            var originalScale = node.scaleX;
            // 使用更平滑的缓动函数
            var smoothEasing = {
                easing: 'sineInOut',
                progress: function (start, end, current, ratio) {
                    // 使用更平滑的曲线
                    var progress = ratio < 0.5
                        ? 2 * ratio * ratio
                        : 1 - Math.pow(-2 * ratio + 2, 2) / 2;
                    return start + (end - start) * progress;
                }
            };
            cc.tween(node)
                .to(duration, {
                scaleX: -originalScale
            }, smoothEasing)
                .call(function () {
                onComplete && onComplete();
                res();
            })
                .start();
        });
    };
    // ... existing code ...
    //数字按照三个一组用逗号隔开
    UtilsClass.prototype.formatNumber = function (number) {
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    };
    UtilsClass._instance = null;
    return UtilsClass;
}());
exports.Utils = UtilsClass.getInstance();

cc._RF.pop();