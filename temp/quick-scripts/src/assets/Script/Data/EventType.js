"use strict";
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