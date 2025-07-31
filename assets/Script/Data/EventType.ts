/**
 * 自定义事件类型
 */

export enum EventType {
    /**横屏 */
    SCREEN_H = "SCREEN_H",
    /**竖屏 */
    SCREEN_V = "SCREEN_V",
    /**横竖屏切换 */
    GAME_SCENE_CHANGE = "GAME_SCENE_CHANGE",
    /**场景移动 */
    GAME_SCENE_MOVE = "GAME_SCENE_MOVE",
    /**打开屏幕点击 */
    OPEN_SCREEN_TOUCH = "OPEN_SCREEN_TOUCH",
    /**关闭屏幕点击 */
    CLOSE_SCREEN_TOUCH = "CLOSE_SCREEN_TOUCH",
    /**游戏开始 */
    GAME_START = "GAME_START",
    /**游戏暂停 */
    GAME_PAUSE = "GAME_PAUSE",
    /**游戏继续 */
    GAME_CONTINUE = "GAME_CONTINUE",
    /**游戏失败 */
    GAME_FAIL = "GAME_FAIL",
    /**游戏重玩 */
    GAME_TRY_AGAIN = "GAME_TRY_AGAIN",
    /**游戏结束 */
    GAME_OVER = "GAME_OVER",
    /**点击下载按钮 */
    CLICK_DOWLAND_BTN = "CLICK_DOWLAND_BTN",
    /**改变资金值 */
    CHANGE_MONEY_VALUE = "CHANGE_MONEY_VALUE",
    /**点击第一个按钮 */
    TOUCH_FIRST_BTN = "TOUCH_FIRST_BTN",
    /**点击第二个按钮 */
    TOUCH_SECOND_BTN = "TOUCH_SECOND_BTN",
    /**点击第三个按钮 */
    TOUCH_THIRD_BTN = "TOUCH_THIRD_BTN",
    /**隐藏引导 */
    HIDE_HAND = "HIDE_HAND",
    /**显示引导 */
    DISPLAY_HAND = "DISPLAY_HAND",
    /** */
    CHANGE_GIRL = "CHANGE_GIRL",

    DISPLAY_PANEL = "DISPLAY_PANEL",

    COLLISION_NODE = "COLLISION_NODE",

    NEXT_BALL = "NEXT_BALL",

    TOUCH_ITEM = "TOUCH_ITEM",

    MUTE_OPEN = "MUTE_OPEN",

    MUTE_CLOSE = "MUTE_CLOSE",
    //可以点击的卡片
    NEED_TOUCH_CARD = "NEED_TOUCH_CARD",
    //点击卡片
    TOUCH_CARD = "TOUCH_CARD",
    //开始计时
    START_TIME = "START_TIME",
    //结束计时
    END_TIME = "END_TIME",
}