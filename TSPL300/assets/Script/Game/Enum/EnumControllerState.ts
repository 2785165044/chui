/** 档位状态 */
export enum EnumGearState {
    /** 空 */
    null = 0,
    /** 前进 */
    up = 1,
    /** 后退 */
    down = 2
}

/** 方向盘状态 */
export enum EnumWheelState {
    /** 空 */
    null = 0,
    /** 左 */
    left = 1,
    /** 右 */
    right = 2,
    /** 中间 */
    stop = 3,
    /** 换档占位，可操作，但是错误 */
    space = 4
}

/** 任务步骤 */
export enum EnumTaskStep {
    init = 0,
    start = 1,
    gear_down_1 = 2,
    wheel_right_1 = 3,
    wait_1 = 4,
    gear_up_1 = 5,
    wheel_left_1 = 6,
    gear_down_2 = 7,
    wheel_right_2 = 8,
    gear_up_2 = 9,
    wheel_right_3 = 10,
    zhuang_1 = 11,
    gear_down_3 = 12,
    wheel_left_2 = 13,
    wait_2 = 14,
    gear_up_3 = 15,
    wheel_right_4 = 16,
    fly = 17,
    end = 18,
    over = 19,
    run = 20,
    runStart = 21,
    toFly = 22,
    null = 999,
}

export enum EnumTaskPathIndex {
    start = 0,
    wheel_right_1 = 1,
    wait_1 = 2,
    wheel_left_1 = 3,
    wheel_right_2 = 4,
    wheel_right_3 = 5,
    zhuang_1 = 6,
    wheel_left_2 = 7,
    wheel_right_4 = 8,
    wheel_left_3 = 9,
    fly = 10,
    end = 11,
    over = 12,
}