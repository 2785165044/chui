import { WECHAT } from "cc/env";
import { EnumGearState, EnumTaskStep, EnumWheelState } from "../Enum/EnumControllerState";

export default class GameData {
    public static isGoogle: boolean = false;
    public static isWX: boolean = WECHAT;
    public static isOver: boolean = false;
    public static isStart: boolean = false;
    public static isPlayerMove: boolean = true;
    public static isInterval: boolean = false;
    public static isTest: boolean = false;
    public static npcAnim: number = 0;
    //true 横屏 false 竖屏
    public static isHOrV: boolean = false;
    //横屏用的尺寸
    public static minScale: number = 1;
    public static maxScale: number = 1;
    //竖屏用的尺寸
    public static minScale1: number = 1;
    public static maxScale1: number = 1;
    //与设计尺寸的缩放
    public static minScale2: number = 1;
    public static maxScale2: number = 1;
    //货币
    private static coin = { "0": 0, "1": 0, "2": 0, "3": 0, "4": 0 };

    public static standard_money: number = 1;

    //大物品的间隔
    static maxGoods_interval: number = 0.02;

    /**飞物品的距离 */
    static goods_di: number = 1.5;

    static is_shouge_ing: boolean = false;
    static is_put_corn_ing: boolean = false;

    /**分发托盘的间隔 */
    static goods_interval: number = 0.05;

    static is_have_checkman: boolean = false;
    static is_have_BYG: boolean = false;

    static hide_guide: boolean = false;

    public static curCurSpeed: number = 1;

    public static isLv2: boolean = false;


    public static curStep: number = 1;

    public static level_money: number[] = [0, 5, 10, 20];
    public static level_count: number[] = [0, 10, 20, 30];

     public static CELL_TIME: number = 0.016;

    /** TSPL221 固定失败结局 */
    public static isWin: boolean = false;
    /** 是否到达起飞区域 */
    public static isFly: boolean = false;

    public static isMoveEvery: boolean = false;
    /** 按钮状态 */
    public static gearState: EnumGearState = EnumGearState.null;
    /** 按钮引导状态 */
    public static gearGudieState: EnumGearState = EnumGearState.null;
    /** 方向盘状态 */
    public static wheelState: EnumWheelState = EnumWheelState.null;
    /** 方向盘引导状态 */
    public static wheelGuideState: EnumWheelState = EnumWheelState.null;
    /** 当前任务 */
    public static taskStep: EnumTaskStep = EnumTaskStep.null;

    public static canRestart: boolean = false;

    // 0: 金币 1: 当前所需轮胎数量
    public static initData(): void {
        GameData.coin = { "0": 0, "1": 0, "2": 0, "3": 0, "4": 0 };
    }

    //根据id设置
    public static setCoin(id: string, num: number) {
        if ((GameData.coin[id] + num) < 0) {
            return
        }
        if (GameData.coin[id] === undefined || GameData.coin[id] === null) {
            GameData.coin[id] = num;
        }
        else {
            GameData.coin[id] += num;
        }
    }

    //根据id获取
    public static getCoin(id: string) {
        if (GameData.coin[id] == undefined || GameData.coin[id] == null) {
            return 0;
        }
        return GameData.coin[id];
    }

}
