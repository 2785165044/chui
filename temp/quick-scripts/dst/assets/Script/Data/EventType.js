
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Data/EventType.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'de11erLsm1BopNJbNpEkvJK', 'EventType');
// Script/Data/EventType.ts

"use strict";
/**
 * 自定义事件类型
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventType = void 0;
var EventType;
(function (EventType) {
    /**横屏 */
    EventType["SCREEN_H"] = "SCREEN_H";
    /**竖屏 */
    EventType["SCREEN_V"] = "SCREEN_V";
    /**横竖屏切换 */
    EventType["GAME_SCENE_CHANGE"] = "GAME_SCENE_CHANGE";
    /**场景移动 */
    EventType["GAME_SCENE_MOVE"] = "GAME_SCENE_MOVE";
    /**打开屏幕点击 */
    EventType["OPEN_SCREEN_TOUCH"] = "OPEN_SCREEN_TOUCH";
    /**关闭屏幕点击 */
    EventType["CLOSE_SCREEN_TOUCH"] = "CLOSE_SCREEN_TOUCH";
    /**游戏开始 */
    EventType["GAME_START"] = "GAME_START";
    /**游戏暂停 */
    EventType["GAME_PAUSE"] = "GAME_PAUSE";
    /**游戏继续 */
    EventType["GAME_CONTINUE"] = "GAME_CONTINUE";
    /**游戏失败 */
    EventType["GAME_FAIL"] = "GAME_FAIL";
    /**游戏重玩 */
    EventType["GAME_TRY_AGAIN"] = "GAME_TRY_AGAIN";
    /**游戏结束 */
    EventType["GAME_OVER"] = "GAME_OVER";
    /**点击下载按钮 */
    EventType["CLICK_DOWLAND_BTN"] = "CLICK_DOWLAND_BTN";
    /**改变资金值 */
    EventType["CHANGE_MONEY_VALUE"] = "CHANGE_MONEY_VALUE";
    /**点击第一个按钮 */
    EventType["TOUCH_FIRST_BTN"] = "TOUCH_FIRST_BTN";
    /**点击第二个按钮 */
    EventType["TOUCH_SECOND_BTN"] = "TOUCH_SECOND_BTN";
    /**点击第三个按钮 */
    EventType["TOUCH_THIRD_BTN"] = "TOUCH_THIRD_BTN";
    /**隐藏引导 */
    EventType["HIDE_HAND"] = "HIDE_HAND";
    /**显示引导 */
    EventType["DISPLAY_HAND"] = "DISPLAY_HAND";
    /** */
    EventType["CHANGE_GIRL"] = "CHANGE_GIRL";
    EventType["DISPLAY_PANEL"] = "DISPLAY_PANEL";
    EventType["COLLISION_NODE"] = "COLLISION_NODE";
    EventType["NEXT_BALL"] = "NEXT_BALL";
    EventType["TOUCH_ITEM"] = "TOUCH_ITEM";
    EventType["MUTE_OPEN"] = "MUTE_OPEN";
    EventType["MUTE_CLOSE"] = "MUTE_CLOSE";
    //可以点击的卡片
    EventType["NEED_TOUCH_CARD"] = "NEED_TOUCH_CARD";
    //点击卡片
    EventType["TOUCH_CARD"] = "TOUCH_CARD";
    //开始计时
    EventType["START_TIME"] = "START_TIME";
    //结束计时
    EventType["END_TIME"] = "END_TIME";
})(EventType = exports.EventType || (exports.EventType = {}));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxEYXRhXFxFdmVudFR5cGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztHQUVHOzs7QUFFSCxJQUFZLFNBNkRYO0FBN0RELFdBQVksU0FBUztJQUNqQixRQUFRO0lBQ1Isa0NBQXFCLENBQUE7SUFDckIsUUFBUTtJQUNSLGtDQUFxQixDQUFBO0lBQ3JCLFdBQVc7SUFDWCxvREFBdUMsQ0FBQTtJQUN2QyxVQUFVO0lBQ1YsZ0RBQW1DLENBQUE7SUFDbkMsWUFBWTtJQUNaLG9EQUF1QyxDQUFBO0lBQ3ZDLFlBQVk7SUFDWixzREFBeUMsQ0FBQTtJQUN6QyxVQUFVO0lBQ1Ysc0NBQXlCLENBQUE7SUFDekIsVUFBVTtJQUNWLHNDQUF5QixDQUFBO0lBQ3pCLFVBQVU7SUFDViw0Q0FBK0IsQ0FBQTtJQUMvQixVQUFVO0lBQ1Ysb0NBQXVCLENBQUE7SUFDdkIsVUFBVTtJQUNWLDhDQUFpQyxDQUFBO0lBQ2pDLFVBQVU7SUFDVixvQ0FBdUIsQ0FBQTtJQUN2QixZQUFZO0lBQ1osb0RBQXVDLENBQUE7SUFDdkMsV0FBVztJQUNYLHNEQUF5QyxDQUFBO0lBQ3pDLGFBQWE7SUFDYixnREFBbUMsQ0FBQTtJQUNuQyxhQUFhO0lBQ2Isa0RBQXFDLENBQUE7SUFDckMsYUFBYTtJQUNiLGdEQUFtQyxDQUFBO0lBQ25DLFVBQVU7SUFDVixvQ0FBdUIsQ0FBQTtJQUN2QixVQUFVO0lBQ1YsMENBQTZCLENBQUE7SUFDN0IsTUFBTTtJQUNOLHdDQUEyQixDQUFBO0lBRTNCLDRDQUErQixDQUFBO0lBRS9CLDhDQUFpQyxDQUFBO0lBRWpDLG9DQUF1QixDQUFBO0lBRXZCLHNDQUF5QixDQUFBO0lBRXpCLG9DQUF1QixDQUFBO0lBRXZCLHNDQUF5QixDQUFBO0lBQ3pCLFNBQVM7SUFDVCxnREFBbUMsQ0FBQTtJQUNuQyxNQUFNO0lBQ04sc0NBQXlCLENBQUE7SUFDekIsTUFBTTtJQUNOLHNDQUF5QixDQUFBO0lBQ3pCLE1BQU07SUFDTixrQ0FBcUIsQ0FBQTtBQUN6QixDQUFDLEVBN0RXLFNBQVMsR0FBVCxpQkFBUyxLQUFULGlCQUFTLFFBNkRwQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiDoh6rlrprkuYnkuovku7bnsbvlnotcclxuICovXHJcblxyXG5leHBvcnQgZW51bSBFdmVudFR5cGUge1xyXG4gICAgLyoq5qiq5bGPICovXHJcbiAgICBTQ1JFRU5fSCA9IFwiU0NSRUVOX0hcIixcclxuICAgIC8qKuerluWxjyAqL1xyXG4gICAgU0NSRUVOX1YgPSBcIlNDUkVFTl9WXCIsXHJcbiAgICAvKirmqKrnq5blsY/liIfmjaIgKi9cclxuICAgIEdBTUVfU0NFTkVfQ0hBTkdFID0gXCJHQU1FX1NDRU5FX0NIQU5HRVwiLFxyXG4gICAgLyoq5Zy65pmv56e75YqoICovXHJcbiAgICBHQU1FX1NDRU5FX01PVkUgPSBcIkdBTUVfU0NFTkVfTU9WRVwiLFxyXG4gICAgLyoq5omT5byA5bGP5bmV54K55Ye7ICovXHJcbiAgICBPUEVOX1NDUkVFTl9UT1VDSCA9IFwiT1BFTl9TQ1JFRU5fVE9VQ0hcIixcclxuICAgIC8qKuWFs+mXreWxj+W5leeCueWHuyAqL1xyXG4gICAgQ0xPU0VfU0NSRUVOX1RPVUNIID0gXCJDTE9TRV9TQ1JFRU5fVE9VQ0hcIixcclxuICAgIC8qKua4uOaIj+W8gOWniyAqL1xyXG4gICAgR0FNRV9TVEFSVCA9IFwiR0FNRV9TVEFSVFwiLFxyXG4gICAgLyoq5ri45oiP5pqC5YGcICovXHJcbiAgICBHQU1FX1BBVVNFID0gXCJHQU1FX1BBVVNFXCIsXHJcbiAgICAvKirmuLjmiI/nu6fnu60gKi9cclxuICAgIEdBTUVfQ09OVElOVUUgPSBcIkdBTUVfQ09OVElOVUVcIixcclxuICAgIC8qKua4uOaIj+Wksei0pSAqL1xyXG4gICAgR0FNRV9GQUlMID0gXCJHQU1FX0ZBSUxcIixcclxuICAgIC8qKua4uOaIj+mHjeeOqSAqL1xyXG4gICAgR0FNRV9UUllfQUdBSU4gPSBcIkdBTUVfVFJZX0FHQUlOXCIsXHJcbiAgICAvKirmuLjmiI/nu5PmnZ8gKi9cclxuICAgIEdBTUVfT1ZFUiA9IFwiR0FNRV9PVkVSXCIsXHJcbiAgICAvKirngrnlh7vkuIvovb3mjInpkq4gKi9cclxuICAgIENMSUNLX0RPV0xBTkRfQlROID0gXCJDTElDS19ET1dMQU5EX0JUTlwiLFxyXG4gICAgLyoq5pS55Y+Y6LWE6YeR5YC8ICovXHJcbiAgICBDSEFOR0VfTU9ORVlfVkFMVUUgPSBcIkNIQU5HRV9NT05FWV9WQUxVRVwiLFxyXG4gICAgLyoq54K55Ye756ys5LiA5Liq5oyJ6ZKuICovXHJcbiAgICBUT1VDSF9GSVJTVF9CVE4gPSBcIlRPVUNIX0ZJUlNUX0JUTlwiLFxyXG4gICAgLyoq54K55Ye756ys5LqM5Liq5oyJ6ZKuICovXHJcbiAgICBUT1VDSF9TRUNPTkRfQlROID0gXCJUT1VDSF9TRUNPTkRfQlROXCIsXHJcbiAgICAvKirngrnlh7vnrKzkuInkuKrmjInpkq4gKi9cclxuICAgIFRPVUNIX1RISVJEX0JUTiA9IFwiVE9VQ0hfVEhJUkRfQlROXCIsXHJcbiAgICAvKirpmpDol4/lvJXlr7wgKi9cclxuICAgIEhJREVfSEFORCA9IFwiSElERV9IQU5EXCIsXHJcbiAgICAvKirmmL7npLrlvJXlr7wgKi9cclxuICAgIERJU1BMQVlfSEFORCA9IFwiRElTUExBWV9IQU5EXCIsXHJcbiAgICAvKiogKi9cclxuICAgIENIQU5HRV9HSVJMID0gXCJDSEFOR0VfR0lSTFwiLFxyXG5cclxuICAgIERJU1BMQVlfUEFORUwgPSBcIkRJU1BMQVlfUEFORUxcIixcclxuXHJcbiAgICBDT0xMSVNJT05fTk9ERSA9IFwiQ09MTElTSU9OX05PREVcIixcclxuXHJcbiAgICBORVhUX0JBTEwgPSBcIk5FWFRfQkFMTFwiLFxyXG5cclxuICAgIFRPVUNIX0lURU0gPSBcIlRPVUNIX0lURU1cIixcclxuXHJcbiAgICBNVVRFX09QRU4gPSBcIk1VVEVfT1BFTlwiLFxyXG5cclxuICAgIE1VVEVfQ0xPU0UgPSBcIk1VVEVfQ0xPU0VcIixcclxuICAgIC8v5Y+v5Lul54K55Ye755qE5Y2h54mHXHJcbiAgICBORUVEX1RPVUNIX0NBUkQgPSBcIk5FRURfVE9VQ0hfQ0FSRFwiLFxyXG4gICAgLy/ngrnlh7vljaHniYdcclxuICAgIFRPVUNIX0NBUkQgPSBcIlRPVUNIX0NBUkRcIixcclxuICAgIC8v5byA5aeL6K6h5pe2XHJcbiAgICBTVEFSVF9USU1FID0gXCJTVEFSVF9USU1FXCIsXHJcbiAgICAvL+e7k+adn+iuoeaXtlxyXG4gICAgRU5EX1RJTUUgPSBcIkVORF9USU1FXCIsXHJcbn0iXX0=