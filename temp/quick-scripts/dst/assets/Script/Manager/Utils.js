
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Manager/Utils.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxNYW5hZ2VyXFxVdGlscy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxpREFBZ0Q7QUFDaEQsNkNBQTRDO0FBRTVDOztHQUVHO0FBQ0g7SUFBQTtJQW1aQSxDQUFDO0lBalppQixzQkFBVyxHQUF6QjtRQUNJLElBQUksSUFBSSxDQUFDLFNBQVMsS0FBSyxJQUFJLEVBQUU7WUFDekIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLFVBQVUsRUFBRSxDQUFDO1NBQ3JDO1FBQ0QsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQzFCLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsbUNBQWMsR0FBZCxVQUFlLElBQWEsRUFBRSxJQUFZO1FBQ3RDLElBQUksSUFBSSxHQUFHLFNBQVMsR0FBRyxJQUFJLENBQUM7UUFDNUIsRUFBRSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxXQUFXLEVBQUUsVUFBQyxHQUFHLEVBQUUsV0FBVztZQUNyRCxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO1FBQzNELENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVEOzs7O01BSUU7SUFDRixtQ0FBYyxHQUFkLFVBQWUsSUFBYSxFQUFFLFNBQWlCO1FBQzNDLElBQUksSUFBSSxHQUFHLHVCQUFVLENBQUMsUUFBUSxHQUFHLGNBQWMsQ0FBQztRQUNoRCxJQUFJLFlBQVksR0FBVyxJQUFJLENBQUM7UUFDaEMsSUFBSSxDQUFDLHlCQUFXLENBQUMsY0FBYyxFQUFFO1lBQzdCLFlBQVksR0FBRyxJQUFJLENBQUM7U0FDdkI7YUFBTTtZQUNILFlBQVksR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1NBQ2xEO1FBQ0QsRUFBRSxDQUFDLE1B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QztpQkFDTixRQUFRLENBQ0wsS0FBSyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksRUFBRSxFQUFFLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsQ0FBQyxFQUNyRCxLQUFLLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxFQUFFLEVBQUUsS0FBSyxFQUFFLENBQUMsS0FBSyxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLENBQUMsQ0FDN0Q7aUJBQ0EsSUFBSSxDQUFDO2dCQUNGLFFBQVEsSUFBSSxRQUFRLEVBQUUsQ0FBQztZQUMzQixDQUFDLENBQUM7aUJBQ0QsUUFBUSxDQUNMLEtBQUssRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLEVBQUUsRUFBRSxNQUFNLEVBQUUsQ0FBQyxNQUFNLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsQ0FBQyxFQUM1RCxLQUFLLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxFQUFFLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxDQUFDLENBQ3ZEO2lCQUNBLElBQUksQ0FBQztnQkFDRixRQUFRLElBQUksUUFBUSxFQUFFLENBQUM7WUFDM0IsQ0FBQyxDQUFDO2lCQUNELFFBQVEsQ0FDTCxLQUFLLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxFQUFFLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxDQUFDLEVBQzNELEtBQUssRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLEVBQUUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLENBQUMsQ0FDdkQ7aUJBQ0EsSUFBSSxDQUFDO2dCQUNGLFVBQVUsSUFBSSxVQUFVLEVBQUUsQ0FBQztnQkFDM0IsR0FBRyxFQUFFLENBQUM7WUFDVixDQUFDLENBQUM7aUJBQ0QsS0FBSyxFQUFFLENBQUM7UUFDakIsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQ7Ozs7O0lBS0E7SUFDQSwwQkFBSyxHQUFMLFVBQU0sSUFBYSxFQUFFLFFBQWdCLEVBQUUsVUFBcUI7UUFDeEQsT0FBTyxJQUFJLE9BQU8sQ0FBTyxVQUFBLEdBQUc7WUFDeEIsSUFBTSxhQUFhLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztZQUVsQyxhQUFhO1lBQ2IsSUFBTSxZQUFZLEdBQUc7Z0JBQ2pCLE1BQU0sRUFBRSxXQUFXO2dCQUNuQixRQUFRLEVBQUUsVUFBQyxLQUFLLEVBQUUsR0FBRyxFQUFFLE9BQU8sRUFBRSxLQUFLO29CQUNqQyxXQUFXO29CQUNYLElBQU0sUUFBUSxHQUFHLEtBQUssR0FBRyxHQUFHO3dCQUN4QixDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssR0FBRyxLQUFLO3dCQUNuQixDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsS0FBSyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7b0JBQzFDLE9BQU8sS0FBSyxHQUFHLENBQUMsR0FBRyxHQUFHLEtBQUssQ0FBQyxHQUFHLFFBQVEsQ0FBQztnQkFDNUMsQ0FBQzthQUNKLENBQUM7WUFFRixFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQztpQkFDVCxFQUFFLENBQUMsUUFBUSxFQUFFO2dCQUNWLE1BQU0sRUFBRSxDQUFDLGFBQWE7YUFDekIsRUFBRSxZQUFZLENBQUM7aUJBQ2YsSUFBSSxDQUFDO2dCQUNGLFVBQVUsSUFBSSxVQUFVLEVBQUUsQ0FBQztnQkFDM0IsR0FBRyxFQUFFLENBQUM7WUFDVixDQUFDLENBQUM7aUJBQ0QsS0FBSyxFQUFFLENBQUM7UUFDakIsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsd0JBQXdCO0lBRXhCLGVBQWU7SUFDZixpQ0FBWSxHQUFaLFVBQWEsTUFBTTtRQUNmLE9BQU8sTUFBTSxDQUFDLFFBQVEsRUFBRSxDQUFDLE9BQU8sQ0FBQyx1QkFBdUIsRUFBRSxHQUFHLENBQUMsQ0FBQztJQUNuRSxDQUFDO0lBalpjLG9CQUFTLEdBQWUsSUFBSSxDQUFDO0lBa1poRCxpQkFBQztDQW5aRCxBQW1aQyxJQUFBO0FBRVksUUFBQSxLQUFLLEdBQUcsVUFBVSxDQUFDLFdBQVcsRUFBRSxDQUFDIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29uc3RWYWx1ZSB9IGZyb20gXCIuLi9EYXRhL0NvbnN0VmFsdWVcIjtcclxuaW1wb3J0IHsgR2FtZU1hbmFnZXIgfSBmcm9tIFwiLi9HYW1lTWFuYWdlclwiO1xyXG5cclxuLyoqXHJcbiAqIOW4uOeUqOaWueazleW3peWFt+exu1xyXG4gKi9cclxuY2xhc3MgVXRpbHNDbGFzcyB7XHJcbiAgICBwcml2YXRlIHN0YXRpYyBfaW5zdGFuY2U6IFV0aWxzQ2xhc3MgPSBudWxsO1xyXG4gICAgcHVibGljIHN0YXRpYyBnZXRJbnN0YW5jZSgpOiBVdGlsc0NsYXNzIHtcclxuICAgICAgICBpZiAodGhpcy5faW5zdGFuY2UgPT09IG51bGwpIHtcclxuICAgICAgICAgICAgdGhpcy5faW5zdGFuY2UgPSBuZXcgVXRpbHNDbGFzcygpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy5faW5zdGFuY2U7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDorr7nva7oioLngrlzcHJpdGVGcmFtZVxyXG4gICAgICogQHBhcmFtIG5vZGUg6IqC54K5XHJcbiAgICAgKiBAcGFyYW0gbmFtZSDlm77niYduYW1lKOWbvueJh+mcgOimgeaUvuWcqHJlc291cmNlcy9pbWFnZXPmlofku7blpLnkuIspXHJcbiAgICAgKi9cclxuICAgIHNldFNwcml0ZUZyYW1lKG5vZGU6IGNjLk5vZGUsIG5hbWU6IHN0cmluZykge1xyXG4gICAgICAgIGxldCBwYXRoID0gXCJpbWFnZXMvXCIgKyBuYW1lO1xyXG4gICAgICAgIGNjLmxvYWRlci5sb2FkUmVzKHBhdGgsIGNjLlNwcml0ZUZyYW1lLCAoZXJyLCBzcHJpdGVGcmFtZSkgPT4ge1xyXG4gICAgICAgICAgICBub2RlLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gc3ByaXRlRnJhbWU7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAqIOWkmuivreiogOiuvue9ruaWh+acrOWGheWuuVxyXG4gICAgKiBAcGFyYW0gbm9kZSBcclxuICAgICogQHBhcmFtIGxhYmVsTmFtZSBcclxuICAgICovXHJcbiAgICBzZXRMYWJlbFN0cmluZyhub2RlOiBjYy5Ob2RlLCBsYWJlbE5hbWU6IHN0cmluZykge1xyXG4gICAgICAgIGxldCBwYXRoID0gQ29uc3RWYWx1ZS5KU09OX0RJUiArIFwiTGFuZ3VhZ2VEYXRhXCI7XHJcbiAgICAgICAgbGV0IGxhbmd1YWdlTmFtZTogc3RyaW5nID0gbnVsbDtcclxuICAgICAgICBpZiAoIUdhbWVNYW5hZ2VyLmlzTXVsdGlsaW5ndWFsKSB7XHJcbiAgICAgICAgICAgIGxhbmd1YWdlTmFtZSA9IFwiZW5cIjtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBsYW5ndWFnZU5hbWUgPSBjYy5zeXMubGFuZ3VhZ2VDb2RlLnNsaWNlKDAsIDIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYy5sb2FkZXIubG9hZFJlcyhwYXRoLCBjYy5Kc29uQXNzZXQsIChlcnIsIGxhbmd1YWdlOiBjYy5Kc29uQXNzZXQpID0+IHtcclxuICAgICAgICAgICAgaWYgKGVyciB8fCBsYW5ndWFnZS5qc29uW2xhbmd1YWdlTmFtZV1bbGFiZWxOYW1lXSA9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIG5vZGUuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBsYW5ndWFnZS5qc29uW2xhbmd1YWdlTmFtZV1bbGFiZWxOYW1lXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgKiDpmo/mnLrmlbBcclxuICAgICogQHBhcmFtIG1pbiDmnIDlsI/mlbBcclxuICAgICogQHBhcmFtIG1heCDmnIDlpKfmlbBcclxuICAgICovXHJcbiAgICByYW5kb21OdW1iZXIobWluOiBhbnksIG1heDogYW55KTogYW55IHtcclxuICAgICAgICByZXR1cm4gTWF0aC5mbG9vcihcclxuICAgICAgICAgICAgcGFyc2VJbnQoXHJcbiAgICAgICAgICAgICAgICBNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbiArIDEpICsgbWluLCAxMClcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgKiDmlbDnu4Tpmo/mnLrmjpLluo9cclxuICAgICogQHBhcmFtIGFyciDpnIDopoHph43mlrDmjpLluo/nmoTmlbDnu4RcclxuICAgICovXHJcbiAgICBzaHVmZmxlKGFycikge1xyXG4gICAgICAgIGxldCBpID0gYXJyLmxlbmd0aDtcclxuICAgICAgICB3aGlsZSAoaSkge1xyXG4gICAgICAgICAgICBsZXQgaiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGktLSk7XHJcbiAgICAgICAgICAgIFthcnJbal0sIGFycltpXV0gPSBbYXJyW2ldLCBhcnJbal1dO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gYXJyO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6I635Y+W5peL6L2s6KeS5bqmXHJcbiAgICAgKiBAcGFyYW0gc3RhcnRQb3Mg6LW35aeL54K55Z2Q5qCHXHJcbiAgICAgKiBAcGFyYW0gZW5kUG9zIOe7iOeCueWdkOagh1xyXG4gICAgICogQHJldHVybnMgXHJcbiAgICAgKi9cclxuICAgIGdldEFuZ2xlKHN0YXJ0UG9zOiBjYy5WZWMyIHwgY2MuVmVjMywgZW5kUG9zOiBjYy5WZWMyIHwgY2MuVmVjMykge1xyXG4gICAgICAgIGxldCB4ID0gZW5kUG9zLnggLSBzdGFydFBvcy54O1xyXG4gICAgICAgIGxldCB5ID0gZW5kUG9zLnkgLSBzdGFydFBvcy55XHJcbiAgICAgICAgbGV0IHJhZGlhbiA9IE1hdGguYXRhbjIoeSwgeCkgIC8v5byn5bqmICAgXHJcbiAgICAgICAgbGV0IGFuZ2xlID0gcmFkaWFuICogMTgwIC8gTWF0aC5QSTsgIC8v6KeS5bqmICAgXHJcbiAgICAgICAgcmV0dXJuIGFuZ2xlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5Lul5p+Q54K55Li65ZyG5b+D77yM55Sf5oiQ5ZyG5ZGo5LiK562J5YiG54K555qE5Z2Q5qCHXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHIg5Y2K5b6EXHJcbiAgICAgKiBAcGFyYW0ge2NjLlZlYzJ9IHBvcyDlnIblv4PlnZDmoIdcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBjb3VudCDnrYnliIbngrnmlbDph49cclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBbcmFuZG9tU2NvcGU9ODBdIOetieWIhueCueeahOmaj+acuuazouWKqOiMg+WbtFxyXG4gICAgICogQHJldHVybnMge2NjLlZlYzJbXX0g6L+U5Zue562J5YiG54K55Z2Q5qCHXHJcbiAgICAgKi9cclxuICAgIGdldENpcmNsZVBvaW50cyhyOiBudW1iZXIsIHBvczogY2MuVmVjMiwgY291bnQ6IG51bWJlciwgcmFuZG9tU2NvcGU6IG51bWJlciA9IDYwKTogY2MuVmVjMltdIHtcclxuICAgICAgICBsZXQgcG9pbnRzID0gW107XHJcbiAgICAgICAgbGV0IHJhZGlhbnMgPSAoTWF0aC5QSSAvIDE4MCkgKiBNYXRoLnJvdW5kKDM2MCAvIGNvdW50KTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvdW50OyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IHggPSBwb3MueCArIHIgKiBNYXRoLnNpbihyYWRpYW5zICogaSk7XHJcbiAgICAgICAgICAgIGxldCB5ID0gcG9zLnkgKyByICogTWF0aC5jb3MocmFkaWFucyAqIGkpO1xyXG4gICAgICAgICAgICBwb2ludHMudW5zaGlmdChjYy52Myh4ICsgTWF0aC5yYW5kb20oKSAqIHJhbmRvbVNjb3BlLCB5ICsgTWF0aC5yYW5kb20oKSAqIHJhbmRvbVNjb3BlLCAwKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBwb2ludHM7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDojrflj5bnp7vliqjml7bpl7RcclxuICAgICAqIEBwYXJhbSBzdGFydFBvcyDotbflp4vkvY3nva7lnZDmoIdcclxuICAgICAqIEBwYXJhbSBlbmRQb3Mg57uI54K55L2N572u5Z2Q5qCHXHJcbiAgICAgKiBAcGFyYW0gbW92ZVNwZWVkIOenu+WKqOmAn+W6plxyXG4gICAgICogQHJldHVybnMg56e75Yqo5pe26Ze0XHJcbiAgICAgKi9cclxuICAgIGdldE1vdmVUaW1lKHN0YXJ0UG9zOiBjYy5WZWMyLCBlbmRQb3M6IGNjLlZlYzIsIG1vdmVTcGVlZDogbnVtYmVyKSB7XHJcbiAgICAgICAgLy8gbGV0IGRpc3RhbmNlID0gTWF0aC5zcXJ0KE1hdGgucG93KChlbmRQb3MueCAtIHN0YXJ0UG9zLngpLCAyKSArIE1hdGgucG93KChlbmRQb3MueSAtIHN0YXJ0UG9zLnkpLCAyKSk7XHJcbiAgICAgICAgbGV0IGRpc3RhbmNlID0gc3RhcnRQb3Muc3ViKGVuZFBvcykubWFnKCk7XHJcbiAgICAgICAgbGV0IHRpbWUgPSBkaXN0YW5jZSAvIG1vdmVTcGVlZDtcclxuICAgICAgICByZXR1cm4gdGltZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOaSreaUvnNwaW5l5Yqo55S7XHJcbiAgICAgKiBAcGFyYW0geyp9IG5vZGUg5Yqo55S75paH5Lu26IqC54K5XHJcbiAgICAgKiBAcGFyYW0geyp9IGFuaW1OYW1lIOWKqOS9nOWQjeensFxyXG4gICAgICogQHBhcmFtIHsqfSBsb29wIOaYr+WQpuW+queOr1xyXG4gICAgICogQHBhcmFtIHsqfSBjYWxsYmFjayDmkq3mlL7lrozmr5Xlm57osINcclxuICAgICAqL1xyXG4gICAgcGxheVNwaW5lKG5vZGU6IGNjLk5vZGUsIGFuaW1OYW1lOiBzdHJpbmcsIGxvb3A6IGJvb2xlYW4gPSB0cnVlLCBjYWxsYmFjazogYW55ID0gbnVsbCkge1xyXG4gICAgICAgIC8vIHNwX1NrZWxldG9uLnByZW11bHRpcGxpZWRBbHBoYT1mYWxzZTsvL+i/meagt+iuvue9ruWcqGNvY29zIGNyZWF0b3LkuK3miY3og73mnInljYrpgI/mmI7mlYjmnpxcclxuXHJcbiAgICAgICAgLy8gbGV0IHNwaW5lID0gdGhpcy5ub2RlLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbik7XHJcbiAgICAgICAgbGV0IHNwX1NrZWxldG9uID0gbm9kZS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pO1xyXG4gICAgICAgIGxldCB0cmFjayA9IHNwX1NrZWxldG9uLnNldEFuaW1hdGlvbigwLCBhbmltTmFtZSwgbG9vcCk7XHJcbiAgICAgICAgaWYgKHRyYWNrKSB7XHJcbiAgICAgICAgICAgIC8vIOazqOWGjOWKqOeUu+eahOe7k+adn+Wbnuiwg1xyXG4gICAgICAgICAgICBzcF9Ta2VsZXRvbi5zZXRDb21wbGV0ZUxpc3RlbmVyKCh0cmFja0VudHJ5LCBsb29wQ291bnQpID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCBuYW1lID0gdHJhY2tFbnRyeS5hbmltYXRpb24gPyB0cmFja0VudHJ5LmFuaW1hdGlvbi5uYW1lIDogJyc7XHJcbiAgICAgICAgICAgICAgICBpZiAobmFtZSA9PT0gYW5pbU5hbWUgJiYgY2FsbGJhY2sgJiYgY2FsbGJhY2sgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKCk7IC8vIOWKqOeUu+e7k+adn+WQjuaJp+ihjOiHquW3seeahOmAu+i+kVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDojrflj5blrZfnrKbkuK3nmoTmlbDlrZdcclxuICAgICAqIEBwYXJhbSBzdHIgXHJcbiAgICAgKiBAcmV0dXJucyBcclxuICAgICAqL1xyXG4gICAgZ2V0TnVtKHN0cjogc3RyaW5nKSB7XHJcbiAgICAgICAgdmFyIHZhbHVlID0gc3RyLnJlcGxhY2UoL1teMC05XS9pZywgXCJcIik7XHJcbiAgICAgICAgcmV0dXJuIE51bWJlcih2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDojrflj5blrZfnrKbkuK3pnZ7mlbDlrZfnmoTlrZfnrKZcclxuICAgICAqIEBwYXJhbSBzdHIgXHJcbiAgICAgKiBAcmV0dXJucyBcclxuICAgICAqL1xyXG4gICAgZ2V0U3RyaW5nKHN0cjogc3RyaW5nKSB7XHJcbiAgICAgICAgdmFyIHZhbHVlID0gc3RyLm1hdGNoKC9cXEQvaWcpO1xyXG4gICAgICAgIGxldCBsYXN0VmFsdWUgPSB2YWx1ZS5qb2luKFwiXCIpO1xyXG4gICAgICAgIHJldHVybiBTdHJpbmcobGFzdFZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOiOt+WPluW9k+WJjeiKgueCuei9rOaNouWIsOafkOiKgueCueS4i+eahOWdkOagh1xyXG4gICAgICogQHBhcmFtIGN1ck5vZGUgXHJcbiAgICAgKiBAcGFyYW0gdGFyZ2V0Tm9kZSBcclxuICAgICAqIEByZXR1cm5zIFxyXG4gICAgICovXHJcbiAgICBnZXROb2RlUG9zKGN1ck5vZGU6IGNjLk5vZGUsIHRhcmdldE5vZGU6IGNjLk5vZGUpIHtcclxuICAgICAgICBsZXQgd29ybGRQb3MgPSBjdXJOb2RlLnBhcmVudC5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIoY3VyTm9kZS5wb3NpdGlvbik7XHJcbiAgICAgICAgbGV0IHBvcyA9IHRhcmdldE5vZGUuY29udmVydFRvTm9kZVNwYWNlQVIod29ybGRQb3MpO1xyXG4gICAgICAgIHJldHVybiBjYy52Mihwb3MpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5pKt5pS+5LiK5LiL5rWu5Yqo5Yqo55S7XHJcbiAgICAgKiBAcGFyYW0gbm9kZVxyXG4gICAgICogQHBhcmFtIHRpbWUgXHJcbiAgICAgKiBAcGFyYW0gZGlzdGFuY2UgXHJcbiAgICAgKi9cclxuICAgIHBsYXlOb2RlRmxvYXRBY3Rpb24obm9kZTogY2MuTm9kZSwgdGltZTogbnVtYmVyLCBkaXN0YW5jZTogbnVtYmVyKSB7XHJcbiAgICAgICAgbm9kZS5ydW5BY3Rpb24oXHJcbiAgICAgICAgICAgIGNjLnJlcGVhdEZvcmV2ZXIoXHJcbiAgICAgICAgICAgICAgICBjYy5zZXF1ZW5jZShcclxuICAgICAgICAgICAgICAgICAgICBjYy5tb3ZlVG8odGltZSwgbm9kZS54LCBub2RlLnkgKyBkaXN0YW5jZSksXHJcbiAgICAgICAgICAgICAgICAgICAgY2MubW92ZVRvKHRpbWUgLSAwLjA1LCBub2RlLngsIG5vZGUueSAtIGRpc3RhbmNlKSxcclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmmL7npLrmsJTms6FcclxuICAgICAqIEBwYXJhbSBidWJibGUg5rCU5rOh6IqC54K5XHJcbiAgICAgKiBAcGFyYW0gY2FsbGJhY2sg5pi+56S65rCU5rOh5ZCO55qE5Zue6LCD5Ye95pWwXHJcbiAgICAgKi9cclxuICAgIGRpc3BsYXlCdWJibGUoYnViYmxlOiBjYy5Ob2RlLCBjYWxsYmFjazogRnVuY3Rpb24gPSBudWxsKSB7XHJcbiAgICAgICAgYnViYmxlLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgYnViYmxlLnNjYWxlID0gMDtcclxuICAgICAgICBidWJibGUucnVuQWN0aW9uKFxyXG4gICAgICAgICAgICBjYy5zZXF1ZW5jZShcclxuICAgICAgICAgICAgICAgIGNjLnNjYWxlVG8oMC4zLCAxKS5lYXNpbmcoY2MuZWFzZUJhY2tPdXQoKSksXHJcbiAgICAgICAgICAgICAgICBjYy5jYWxsRnVuYygoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmnpzlhrvmlYjmnpxcclxuICAgICAqIEBwYXJhbSBub2RlIFxyXG4gICAgICogQHBhcmFtIG11bHRpcGxlIHNjYWxlXHJcbiAgICAgKiBAcGFyYW0gY2FsbGJhY2sg57uT5p2f5Zue6LCDXHJcbiAgICAgKi9cclxuICAgIEplbGx5RWZmZWN0KG5vZGU6IGNjLk5vZGUsIG11bHRpcGxlOiBudW1iZXIsIGNhbGxiYWNrPzogRnVuY3Rpb24pIHtcclxuICAgICAgICBmdW5jdGlvbiBnZW5lcmF0ZV9hY3Rpb24ocGFyYW1zKSB7XHJcbiAgICAgICAgICAgIHZhciBzY2FsZV9hY3Rpb24gPSBjYy5zY2FsZVRvKHBhcmFtcy50aW1lLCBwYXJhbXMuc2NhbGVfeCwgcGFyYW1zLnNjYWxlX3kpO1xyXG4gICAgICAgICAgICB2YXIgZmFkZV9hY3Rpb24gPSBjYy5mYWRlSW4ocGFyYW1zLnRpbWUpO1xyXG4gICAgICAgICAgICByZXR1cm4gY2Muc3Bhd24oc2NhbGVfYWN0aW9uLCBmYWRlX2FjdGlvbik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2YXIgc3Bhd25fYWN0aW9uMSA9IGdlbmVyYXRlX2FjdGlvbih7IHRpbWU6IDAuMDYsIHNjYWxlX3g6IDAuNjMgKiBtdWx0aXBsZSwgc2NhbGVfeTogMS4zICogbXVsdGlwbGUsIHNjYWxlX3o6IDEgKiBtdWx0aXBsZSB9KTtcclxuICAgICAgICB2YXIgc3Bhd25fYWN0aW9uMiA9IGdlbmVyYXRlX2FjdGlvbih7IHRpbWU6IDAuMTIsIHNjYWxlX3g6IDEuMSAqIG11bHRpcGxlLCBzY2FsZV95OiAwLjcgKiBtdWx0aXBsZSwgc2NhbGVfejogMSAqIG11bHRpcGxlIH0pO1xyXG4gICAgICAgIHZhciBzcGF3bl9hY3Rpb24zID0gZ2VuZXJhdGVfYWN0aW9uKHsgdGltZTogMC4wNywgc2NhbGVfeDogMC44ICogbXVsdGlwbGUsIHNjYWxlX3k6IDEuMSAqIG11bHRpcGxlLCBzY2FsZV96OiAxICogbXVsdGlwbGUgfSk7XHJcbiAgICAgICAgdmFyIHNwYXduX2FjdGlvbjQgPSBnZW5lcmF0ZV9hY3Rpb24oeyB0aW1lOiAwLjA3LCBzY2FsZV94OiAxLjEgKiBtdWx0aXBsZSwgc2NhbGVfOiAwLjk1ICogbXVsdGlwbGUsIHNjYWxlX3o6IDEgKiBtdWx0aXBsZSB9KTtcclxuICAgICAgICB2YXIgc3Bhd25fYWN0aW9uNSA9IGdlbmVyYXRlX2FjdGlvbih7IHRpbWU6IDAuMDcsIHNjYWxlX3g6IDEgKiBtdWx0aXBsZSwgc2NhbGVfeTogMSAqIG11bHRpcGxlLCBzY2FsZV96OiAxICogbXVsdGlwbGUgfSk7XHJcbiAgICAgICAgbm9kZS5ydW5BY3Rpb24oY2Muc2VxdWVuY2UoXHJcbiAgICAgICAgICAgIHNwYXduX2FjdGlvbjEsXHJcbiAgICAgICAgICAgIHNwYXduX2FjdGlvbjIsXHJcbiAgICAgICAgICAgIHNwYXduX2FjdGlvbjMsXHJcbiAgICAgICAgICAgIHNwYXduX2FjdGlvbjQsXHJcbiAgICAgICAgICAgIHNwYXduX2FjdGlvbjUsXHJcbiAgICAgICAgICAgIGNjLmNhbGxGdW5jKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChjYWxsYmFjaykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgKSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmsYLngrlD5Zyo55u057q/QULkuIrnmoTlnoLngrnlnZDmoIdcclxuICAgICAqIEBwYXJhbSBwb3NBIFxyXG4gICAgICogQHBhcmFtIHBvc0IgXHJcbiAgICAgKiBAcGFyYW0gcG9zQyBcclxuICAgICAqIEByZXR1cm5zIFxyXG4gICAgICovXHJcbiAgICBnZXRWZXJ0aWNhbFBvaW50UG9zKHBvc0E6IGNjLlZlYzIsIHBvc0I6IGNjLlZlYzIsIHBvc0M6IGNjLlZlYzIpIHtcclxuICAgICAgICBsZXQgcG9pbnRBID0gY2MudjIocG9zQSk7XHJcbiAgICAgICAgbGV0IHBvaW50QiA9IGNjLnYyKHBvc0IpO1xyXG4gICAgICAgIGxldCBwb2ludEMgPSBjYy52Mihwb3NDKTtcclxuXHJcbiAgICAgICAgbGV0IHZlY0FCID0gY2MudjIocG9pbnRCLnggLSBwb2ludEEueCwgcG9pbnRCLnkgLSBwb2ludEEueSk7XHJcbiAgICAgICAgbGV0IHZlY0FDID0gY2MudjIocG9pbnRDLnggLSBwb2ludEEueCwgcG9pbnRDLnkgLSBwb2ludEEueSk7XHJcblxyXG4gICAgICAgIGxldCBkb3RQcm9kID0gdmVjQUIuZG90KHZlY0FDKTtcclxuICAgICAgICBsZXQgbGVuQUIgPSB2ZWNBQi5tYWcoKTtcclxuICAgICAgICBsZXQgcHJvakxlbiA9IGRvdFByb2QgLyBsZW5BQjtcclxuICAgICAgICBsZXQgcHJvalZlYyA9IHZlY0FCLm5vcm1hbGl6ZVNlbGYoKS5tdWwocHJvakxlbik7XHJcblxyXG4gICAgICAgIGxldCBwb2ludEQgPSBwb2ludEEuYWRkKHByb2pWZWMpO1xyXG5cclxuICAgICAgICByZXR1cm4gcG9pbnREO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6K6+572u6KeG6aKRY2xpcFxyXG4gICAgICogQHBhcmFtIG5vZGUg6IqC54K5XHJcbiAgICAgKiBAcGFyYW0gbmFtZSDop4bpopFuYW1lKOinhumikemcgOimgeaUvuWcqHJlc291cmNlcy92aWRlb3Pmlofku7blpLnkuIspXHJcbiAgICAgKi9cclxuICAgIHNldFZpZGVvQ2xpcChub2RlOiBjYy5Ob2RlLCBuYW1lOiBzdHJpbmcpIHtcclxuICAgICAgICBsZXQgcGF0aCA9IENvbnN0VmFsdWUuVklERU9TX0RJUiArIG5hbWU7XHJcbiAgICAgICAgY2MubG9hZGVyLmxvYWRSZXMocGF0aCwgY2MuQXNzZXQsIChlcnIsIHZpZGVvQ2xpcCkgPT4ge1xyXG4gICAgICAgICAgICBub2RlLmdldENvbXBvbmVudChjYy5WaWRlb1BsYXllcikuY2xpcCA9IHZpZGVvQ2xpcDtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAgKiDmjIflrprop4bpopHku47lk6rkuKrml7bpl7TngrnlvIDlp4vmkq3mlL5cclxuICAgICAgKiBAcGFyYW0gdmlkZW9Ob2RlIGNjLk5vZGXop4bpopHoioLngrlcclxuICAgICAgKiBAcGFyYW0gdGltZSDml7bpl7TvvIhz77yJXHJcbiAgICAgICovXHJcbiAgICBzZXRWaWRlb0N1cnJlbnRUaW1lKHZpZGVvTm9kZTogY2MuTm9kZSwgdGltZTogbnVtYmVyKSB7XHJcbiAgICAgICAgaWYgKGNjLnN5cy5vcyA9PT0gY2Muc3lzLk9TX0lPUyAmJiBjYy5zeXMuYnJvd3NlclR5cGUgPT09IGNjLnN5cy5CUk9XU0VSX1RZUEVfTU9CSUxFX1FRKSB7XHJcbiAgICAgICAgICAgIC8v5ZyoaW9z5LiKcXHmtY/op4jlmajpnIDopoHnibnmrorlpITnkIZcclxuICAgICAgICAgICAgbGV0IHNvdXJjZU5vZGUgPSB2aWRlb05vZGUuZ2V0Q29tcG9uZW50KGNjLlZpZGVvUGxheWVyKVtcIl9pbXBsXCJdLl92aWRlbztcclxuICAgICAgICAgICAgc291cmNlTm9kZS5jdXJyZW50VGltZSA9IHRpbWU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdmlkZW9Ob2RlLmdldENvbXBvbmVudChjYy5WaWRlb1BsYXllcilbXCJfaW1wbFwiXS5fdmlkZW8uY3VycmVudFRpbWUgPSB0aW1lO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAgKiDorr7nva7op4bpopHmkq3mlL7pgJ/njodcclxuICAgICAgKiBAcGFyYW0gdmlkZW8gY2MuTm9kZeinhumikeiKgueCuVxyXG4gICAgICAqIEBwYXJhbSByYXRlIG51bWJlclxyXG4gICAgICAqL1xyXG4gICAgc2V0VmlkZW9QbGF5YmFja1JhdGUodmlkZW9Ob2RlOiBjYy5Ob2RlLCByYXRlOiBudW1iZXIpIHtcclxuICAgICAgICBpZiAoY2Muc3lzLm9zID09PSBjYy5zeXMuT1NfSU9TICYmIGNjLnN5cy5icm93c2VyVHlwZSA9PT0gY2Muc3lzLkJST1dTRVJfVFlQRV9NT0JJTEVfUVEpIHtcclxuICAgICAgICAgICAgLy/lnKhpb3PkuIpxcea1j+iniOWZqOmcgOimgeeJueauiuWkhOeQhlxyXG4gICAgICAgICAgICBsZXQgc291cmNlTm9kZSA9IHZpZGVvTm9kZS5nZXRDb21wb25lbnQoY2MuVmlkZW9QbGF5ZXIpW1wiX2ltcGxcIl0uX3ZpZGVvO1xyXG4gICAgICAgICAgICBzb3VyY2VOb2RlLnBsYXliYWNrUmF0ZSA9IHJhdGU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdmlkZW9Ob2RlLmdldENvbXBvbmVudChjYy5WaWRlb1BsYXllcilbXCJfaW1wbFwiXS5fdmlkZW8ucGxheWJhY2tSYXRlID0gcmF0ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDorr7nva7op4bpopHmqKHns4pcclxuICAgICAqIEBwYXJhbSB2aWRlb05vZGUgY2MuTm9kZeinhumikeiKgueCuVxyXG4gICAgICovXHJcbiAgICBzZXRWaWRlb0JsdXIodmlkZW9Ob2RlOiBjYy5Ob2RlKSB7XHJcbiAgICAgICAgaWYgKGNjLnN5cy5vcyA9PT0gY2Muc3lzLk9TX0lPUyAmJiBjYy5zeXMuYnJvd3NlclR5cGUgPT09IGNjLnN5cy5CUk9XU0VSX1RZUEVfTU9CSUxFX1FRKSB7XHJcbiAgICAgICAgICAgIC8v5ZyoaW9z5LiKcXHmtY/op4jlmajpnIDopoHnibnmrorlpITnkIZcclxuICAgICAgICAgICAgbGV0IHNvdXJjZU5vZGUgPSB2aWRlb05vZGUuZ2V0Q29tcG9uZW50KGNjLlZpZGVvUGxheWVyKVtcIl9pbXBsXCJdLl92aWRlbztcclxuICAgICAgICAgICAgc291cmNlTm9kZS5zdHlsZS5maWx0ZXIgPSBcImJsdXIoMjBweClcIjtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB2aWRlb05vZGUuZ2V0Q29tcG9uZW50KGNjLlZpZGVvUGxheWVyKVtcIl9pbXBsXCJdLl92aWRlby5zdHlsZS5maWx0ZXIgPSBcImJsdXIoMjBweClcIjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICog5rC05bmz57+76L2s77yI5Y2h54mH57+76L2s77yJXHJcbiAgICogQHBhcmFtIG5vZGUg6IqC54K5XHJcbiAgICogQHBhcmFtIGR1cmF0aW9uIOaAu+aXtumVv1xyXG4gICAqIEBwYXJhbSBvbk1pZGRsZSDkuK3pl7TnirbmgIHlm57osINcclxuICAgKiBAcGFyYW0gb25Db21wbGV0ZSDlrozmiJDlm57osINcclxuICAgKi9cclxuICAgIGZsaXAobm9kZTogY2MuTm9kZSwgZHVyYXRpb246IG51bWJlciwgb25NaWRkbGU/OiBGdW5jdGlvbiwgb25Db21wbGV0ZT86IEZ1bmN0aW9uKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlPHZvaWQ+KHJlcyA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHR3ZWVuID0gY2MudHdlZW4sXHJcbiAgICAgICAgICAgICAgICB0aW1lID0gZHVyYXRpb24gLyAzLFxyXG4gICAgICAgICAgICAgICAgc2NhbGVYID0gbm9kZS5zY2FsZSxcclxuICAgICAgICAgICAgICAgIHNrZXdZID0gc2NhbGVYID4gMCA/IDIwIDogLTIwO1xyXG4gICAgICAgICAgICB0d2Vlbihub2RlKVxyXG4gICAgICAgICAgICAgICAgLnBhcmFsbGVsKFxyXG4gICAgICAgICAgICAgICAgICAgIHR3ZWVuKCkudG8odGltZSwgeyBzY2FsZVg6IDAgfSwgeyBlYXNpbmc6ICdxdWFkSW4nIH0pLFxyXG4gICAgICAgICAgICAgICAgICAgIHR3ZWVuKCkudG8odGltZSwgeyBza2V3WTogLXNrZXdZIH0sIHsgZWFzaW5nOiAncXVhZE91dCcgfSksXHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgb25NaWRkbGUgJiYgb25NaWRkbGUoKTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAucGFyYWxsZWwoXHJcbiAgICAgICAgICAgICAgICAgICAgdHdlZW4oKS50byh0aW1lLCB7IHNjYWxlWDogLXNjYWxlWCB9LCB7IGVhc2luZzogJ3F1YWRPdXQnIH0pLFxyXG4gICAgICAgICAgICAgICAgICAgIHR3ZWVuKCkudG8odGltZSwgeyBza2V3WTogMCB9LCB7IGVhc2luZzogJ3F1YWRJbicgfSksXHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgb25NaWRkbGUgJiYgb25NaWRkbGUoKTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAucGFyYWxsZWwoXHJcbiAgICAgICAgICAgICAgICAgICAgdHdlZW4oKS50byh0aW1lLCB7IHNjYWxlWDogc2NhbGVYIH0sIHsgZWFzaW5nOiAncXVhZE91dCcgfSksXHJcbiAgICAgICAgICAgICAgICAgICAgdHdlZW4oKS50byh0aW1lLCB7IHNrZXdZOiAwIH0sIHsgZWFzaW5nOiAncXVhZEluJyB9KSxcclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgIC5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBvbkNvbXBsZXRlICYmIG9uQ29tcGxldGUoKTtcclxuICAgICAgICAgICAgICAgICAgICByZXMoKTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAuc3RhcnQoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAqIDJE6IqC54K557uVWei9tOaXi+i9rOS4gOWciOWKqOeUu1xyXG4gICogQHBhcmFtIG5vZGUg6KaB5peL6L2s55qE6IqC54K5XHJcbiAgKiBAcGFyYW0gZHVyYXRpb24g5Yqo55S75pe26ZW/XHJcbiAgKiBAcGFyYW0gb25Db21wbGV0ZSDlrozmiJDlm57osINcclxuICAqL1xyXG4gICAgZmxpcFkobm9kZTogY2MuTm9kZSwgZHVyYXRpb246IG51bWJlciwgb25Db21wbGV0ZT86IEZ1bmN0aW9uKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlPHZvaWQ+KHJlcyA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IG9yaWdpbmFsU2NhbGUgPSBub2RlLnNjYWxlWDtcclxuXHJcbiAgICAgICAgICAgIC8vIOS9v+eUqOabtOW5s+a7keeahOe8k+WKqOWHveaVsFxyXG4gICAgICAgICAgICBjb25zdCBzbW9vdGhFYXNpbmcgPSB7XHJcbiAgICAgICAgICAgICAgICBlYXNpbmc6ICdzaW5lSW5PdXQnLFxyXG4gICAgICAgICAgICAgICAgcHJvZ3Jlc3M6IChzdGFydCwgZW5kLCBjdXJyZW50LCByYXRpbykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIOS9v+eUqOabtOW5s+a7keeahOabsue6v1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHByb2dyZXNzID0gcmF0aW8gPCAwLjVcclxuICAgICAgICAgICAgICAgICAgICAgICAgPyAyICogcmF0aW8gKiByYXRpb1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA6IDEgLSBNYXRoLnBvdygtMiAqIHJhdGlvICsgMiwgMikgLyAyO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBzdGFydCArIChlbmQgLSBzdGFydCkgKiBwcm9ncmVzcztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIGNjLnR3ZWVuKG5vZGUpXHJcbiAgICAgICAgICAgICAgICAudG8oZHVyYXRpb24sIHtcclxuICAgICAgICAgICAgICAgICAgICBzY2FsZVg6IC1vcmlnaW5hbFNjYWxlXHJcbiAgICAgICAgICAgICAgICB9LCBzbW9vdGhFYXNpbmcpXHJcbiAgICAgICAgICAgICAgICAuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgb25Db21wbGV0ZSAmJiBvbkNvbXBsZXRlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzKCk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLnN0YXJ0KCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gLi4uIGV4aXN0aW5nIGNvZGUgLi4uXHJcblxyXG4gICAgLy/mlbDlrZfmjInnhafkuInkuKrkuIDnu4TnlKjpgJflj7fpmpTlvIBcclxuICAgIGZvcm1hdE51bWJlcihudW1iZXIpIHtcclxuICAgICAgICByZXR1cm4gbnVtYmVyLnRvU3RyaW5nKCkucmVwbGFjZSgvXFxCKD89KFxcZHszfSkrKD8hXFxkKSkvZywgXCIsXCIpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgVXRpbHMgPSBVdGlsc0NsYXNzLmdldEluc3RhbmNlKCk7Il19