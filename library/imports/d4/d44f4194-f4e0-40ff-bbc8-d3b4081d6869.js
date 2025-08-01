"use strict";
cc._RF.push(module, 'd44f4GU9OBA/7vI07QIHWhp', 'GameManager');
// Script/Manager/GameManager.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameManager = void 0;
var GameManagerClass = /** @class */ (function () {
    function GameManagerClass() {
        /**
         * 0 - 竖屏
         * 1 - 横屏
         */
        this.screenMode = 0;
        /**玩家拥有钱的数量 */
        this.moneyNum = 0;
        /**病人数量 */
        this.roleNum = 0;
        /**重玩次数 */
        this.retryNum = 0;
        this.canTouch = true;
        /**是否开启多语言 */
        this.isMultilingual = false;
        /**当前语言 */
        this.curLanguage = "en";
        /**是否已经跳转商店 */
        this.isJumpShop = false;
        /**是否首次点击 */
        this.firstClick = false;
        /**是否静音 */
        this.isMute = false;
        this.canPlayAudio = false;
        /**bingo次数 */
        this.bingoNum = 0;
        /**叶子颜色 */
        this.leafColor = [cc.color(255, 60, 157, 255), cc.color(9, 160, 2, 255), cc.color(72, 82, 240, 255), cc.color(254, 79, 21, 255)];
        /**当前数字 */
        this.curNum = -1;
        this.cardNumArr = [
            [11, 6, 3, 15, 4],
            [27, 2, 28, 99, 27],
            [7, 40, 0, 4, 40],
            [0, 0, 0, 0, 8],
            [6, 75, 23, 9, 75]
            // [11, 27, 7, 22, 6],
            // [6, 2, 40,  8, 75],
            // [3, 28, 0, 3, 23],
            // [15, 99, 4, 56, 9],
            // [4, 27 , 40,8, 75]
        ];
        // [
        //     [13, 9, 0, 8, 3],
        //     [16, 0, 13, 23, 29],
        //     [0, 0, 0, 40, 35],
        //     [51, 0, 0, 47, 0],
        //     [0, 0, 70, 0, 62]
        // ],
        // [
        //     [0, 0, 3, 0, 9],
        //     [29, 18, 27, 17, 19],
        //     [0, 0, 0, 41, 35],
        //     [0, 0, 0, 47, 49],
        //     [0, 0, 73, 0, 68]
        // ],
        // [
        //     [9, 0, 2, 11, 14],
        //     [0, 0, 21, 19, 0],
        //     [0, 0, 0, 35, 0],
        //     [59, 47, 0, 0, 50],
        //     [0, 0, 70, 0, 0]
        // ],
        // [
        //     [0, 9, 12, 0, 6],
        //     [25, 0, 19, 29, 0],
        //     [0, 0, 0, 35, 0],
        //     [0, 0, 0, 59, 53],
        //     [70, 0, 0, 0, 0]
        // ],
        // [
        //     [14, 7, 9, 0, 0],
        //     [0, 29, 0, 0, 0],
        //     [38, 43, 0, 32, 35],
        //     [59, 48, 51, 0, 0],
        //     [0, 66, 62, 74, 0]
        // ]
    }
    GameManagerClass.getInstance = function () {
        if (null === this._instance) {
            this._instance = new GameManagerClass();
        }
        return this._instance;
    };
    GameManagerClass._instance = null;
    /**bingo次数 */
    GameManagerClass.bingoNum = 0;
    return GameManagerClass;
}());
exports.GameManager = GameManagerClass.getInstance();

cc._RF.pop();