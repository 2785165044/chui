import { Node } from "cc";

export class GameConfig {
    /**金钱数量 */
    public static moneyNum: number = 50;
    /**是否开启多语言 */
    public static isMultilingual: boolean = true;
    /**当前语言 */
    public static curLanguage: string = "en";
    /**是否静音 */
    public static isMute: boolean = false;
    /**是否已经交互 */
    public static isInteraction: boolean = false;
    /**当前屏幕状态 0-竖屏 1-横屏*/
    public static screenState: number = 0;
    /**是否为谷歌*/
    public static isGoogle: boolean = false;
    /***********************************************/
}
