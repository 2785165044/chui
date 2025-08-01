
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Manager/GameManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxNYW5hZ2VyXFxHYW1lTWFuYWdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtJQUFBO1FBWUk7OztXQUdHO1FBQ0ksZUFBVSxHQUFXLENBQUMsQ0FBQztRQUM5QixjQUFjO1FBQ1AsYUFBUSxHQUFXLENBQUMsQ0FBQztRQUM1QixVQUFVO1FBQ0gsWUFBTyxHQUFXLENBQUMsQ0FBQztRQUMzQixVQUFVO1FBQ0gsYUFBUSxHQUFXLENBQUMsQ0FBQztRQUVyQixhQUFRLEdBQVksSUFBSSxDQUFDO1FBRWhDLGFBQWE7UUFDTixtQkFBYyxHQUFZLEtBQUssQ0FBQztRQUN2QyxVQUFVO1FBQ0gsZ0JBQVcsR0FBVyxJQUFJLENBQUM7UUFDbEMsY0FBYztRQUNQLGVBQVUsR0FBWSxLQUFLLENBQUM7UUFDbkMsWUFBWTtRQUNMLGVBQVUsR0FBWSxLQUFLLENBQUM7UUFFbkMsVUFBVTtRQUNILFdBQU0sR0FBWSxLQUFLLENBQUM7UUFFeEIsaUJBQVksR0FBWSxLQUFLLENBQUM7UUFFckMsYUFBYTtRQUNOLGFBQVEsR0FBVyxDQUFDLENBQUM7UUFFNUIsVUFBVTtRQUNILGNBQVMsR0FBZSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxHQUFHLENBQUMsRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUUvSSxVQUFVO1FBQ0gsV0FBTSxHQUFXLENBQUMsQ0FBQyxDQUFDO1FBR3BCLGVBQVUsR0FFVDtZQUNJLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztZQUNqQixDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFHLEVBQUUsRUFBRSxFQUFFLENBQUM7WUFDcEIsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO1lBQ2pCLENBQUMsQ0FBQyxFQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUNkLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRyxFQUFFLEVBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQztZQUNsQixzQkFBc0I7WUFDdEIsc0JBQXNCO1lBQ3RCLHFCQUFxQjtZQUNyQixzQkFBc0I7WUFDdEIscUJBQXFCO1NBQ3hCLENBQUE7UUFDRCxJQUFJO1FBQ0osd0JBQXdCO1FBQ3hCLDJCQUEyQjtRQUMzQix5QkFBeUI7UUFDekIseUJBQXlCO1FBQ3pCLHdCQUF3QjtRQUN4QixLQUFLO1FBQ0wsSUFBSTtRQUNKLHVCQUF1QjtRQUN2Qiw0QkFBNEI7UUFDNUIseUJBQXlCO1FBQ3pCLHlCQUF5QjtRQUN6Qix3QkFBd0I7UUFDeEIsS0FBSztRQUNMLElBQUk7UUFDSix5QkFBeUI7UUFDekIseUJBQXlCO1FBQ3pCLHdCQUF3QjtRQUN4QiwwQkFBMEI7UUFDMUIsdUJBQXVCO1FBQ3ZCLEtBQUs7UUFDTCxJQUFJO1FBQ0osd0JBQXdCO1FBQ3hCLDBCQUEwQjtRQUMxQix3QkFBd0I7UUFDeEIseUJBQXlCO1FBQ3pCLHVCQUF1QjtRQUN2QixLQUFLO1FBQ0wsSUFBSTtRQUNKLHdCQUF3QjtRQUN4Qix3QkFBd0I7UUFDeEIsMkJBQTJCO1FBQzNCLDBCQUEwQjtRQUMxQix5QkFBeUI7UUFDekIsSUFBSTtJQUVoQixDQUFDO0lBbEdpQiw0QkFBVyxHQUF6QjtRQUNJLElBQUksSUFBSSxLQUFLLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDekIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLGdCQUFnQixFQUFFLENBQUM7U0FDM0M7UUFDRCxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDMUIsQ0FBQztJQU5jLDBCQUFTLEdBQXFCLElBQUksQ0FBQztJQVFsRCxhQUFhO0lBQ0MseUJBQVEsR0FBVyxDQUFDLENBQUM7SUEwRnZDLHVCQUFDO0NBcEdELEFBb0dDLElBQUE7QUFFWSxRQUFBLFdBQVcsR0FBRyxnQkFBZ0IsQ0FBQyxXQUFXLEVBQUUsQ0FBQyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIEdhbWVNYW5hZ2VyQ2xhc3Mge1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgX2luc3RhbmNlOiBHYW1lTWFuYWdlckNsYXNzID0gbnVsbDtcclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0SW5zdGFuY2UoKTogR2FtZU1hbmFnZXJDbGFzcyB7XHJcbiAgICAgICAgaWYgKG51bGwgPT09IHRoaXMuX2luc3RhbmNlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2luc3RhbmNlID0gbmV3IEdhbWVNYW5hZ2VyQ2xhc3MoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2luc3RhbmNlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKmJpbmdv5qyh5pWwICovXHJcbiAgICBwdWJsaWMgc3RhdGljIGJpbmdvTnVtOiBudW1iZXIgPSAwO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogMCAtIOerluWxj1xyXG4gICAgICogMSAtIOaoquWxj1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc2NyZWVuTW9kZTogbnVtYmVyID0gMDtcclxuICAgIC8qKueOqeWutuaLpeaciemSseeahOaVsOmHjyAqL1xyXG4gICAgcHVibGljIG1vbmV5TnVtOiBudW1iZXIgPSAwO1xyXG4gICAgLyoq55eF5Lq65pWw6YePICovXHJcbiAgICBwdWJsaWMgcm9sZU51bTogbnVtYmVyID0gMDtcclxuICAgIC8qKumHjeeOqeasoeaVsCAqL1xyXG4gICAgcHVibGljIHJldHJ5TnVtOiBudW1iZXIgPSAwO1xyXG5cclxuICAgIHB1YmxpYyBjYW5Ub3VjaDogYm9vbGVhbiA9IHRydWU7XHJcblxyXG4gICAgLyoq5piv5ZCm5byA5ZCv5aSa6K+t6KiAICovXHJcbiAgICBwdWJsaWMgaXNNdWx0aWxpbmd1YWw6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIC8qKuW9k+WJjeivreiogCAqL1xyXG4gICAgcHVibGljIGN1ckxhbmd1YWdlOiBzdHJpbmcgPSBcImVuXCI7XHJcbiAgICAvKirmmK/lkKblt7Lnu4/ot7PovazllYblupcgKi9cclxuICAgIHB1YmxpYyBpc0p1bXBTaG9wOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICAvKirmmK/lkKbpppbmrKHngrnlh7sgKi9cclxuICAgIHB1YmxpYyBmaXJzdENsaWNrOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgLyoq5piv5ZCm6Z2Z6Z+zICovXHJcbiAgICBwdWJsaWMgaXNNdXRlOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgcHVibGljIGNhblBsYXlBdWRpbzogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIC8qKmJpbmdv5qyh5pWwICovXHJcbiAgICBwdWJsaWMgYmluZ29OdW06IG51bWJlciA9IDA7XHJcblxyXG4gICAgLyoq5Y+25a2Q6aKc6ImyICovXHJcbiAgICBwdWJsaWMgbGVhZkNvbG9yOiBjYy5Db2xvcltdID0gW2NjLmNvbG9yKDI1NSwgNjAsIDE1NywgMjU1KSwgY2MuY29sb3IoOSwgMTYwLCAyLCAyNTUpLCBjYy5jb2xvcig3MiwgODIsIDI0MCwgMjU1KSwgY2MuY29sb3IoMjU0LCA3OSwgMjEsIDI1NSldO1xyXG5cclxuICAgIC8qKuW9k+WJjeaVsOWtlyAqL1xyXG4gICAgcHVibGljIGN1ck51bTogbnVtYmVyID0gLTE7XHJcblxyXG5cclxuICAgIHB1YmxpYyBjYXJkTnVtQXJyOiBudW1iZXJbXVtdID1cclxuICAgICAgICBcclxuICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgWzExLCA2LCAzLCAxNSwgNF0sXHJcbiAgICAgICAgICAgICAgICBbMjcsIDIsIDI4LCAgOTksIDI3XSxcclxuICAgICAgICAgICAgICAgIFs3LCA0MCwgMCwgNCwgNDBdLFxyXG4gICAgICAgICAgICAgICAgWzAsMCwgMCwgMCwgOF0sXHJcbiAgICAgICAgICAgICAgICBbNiwgNzUgLCAyMyw5LCA3NV1cclxuICAgICAgICAgICAgICAgIC8vIFsxMSwgMjcsIDcsIDIyLCA2XSxcclxuICAgICAgICAgICAgICAgIC8vIFs2LCAyLCA0MCwgIDgsIDc1XSxcclxuICAgICAgICAgICAgICAgIC8vIFszLCAyOCwgMCwgMywgMjNdLFxyXG4gICAgICAgICAgICAgICAgLy8gWzE1LCA5OSwgNCwgNTYsIDldLFxyXG4gICAgICAgICAgICAgICAgLy8gWzQsIDI3ICwgNDAsOCwgNzVdXHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgLy8gW1xyXG4gICAgICAgICAgICAvLyAgICAgWzEzLCA5LCAwLCA4LCAzXSxcclxuICAgICAgICAgICAgLy8gICAgIFsxNiwgMCwgMTMsIDIzLCAyOV0sXHJcbiAgICAgICAgICAgIC8vICAgICBbMCwgMCwgMCwgNDAsIDM1XSxcclxuICAgICAgICAgICAgLy8gICAgIFs1MSwgMCwgMCwgNDcsIDBdLFxyXG4gICAgICAgICAgICAvLyAgICAgWzAsIDAsIDcwLCAwLCA2Ml1cclxuICAgICAgICAgICAgLy8gXSxcclxuICAgICAgICAgICAgLy8gW1xyXG4gICAgICAgICAgICAvLyAgICAgWzAsIDAsIDMsIDAsIDldLFxyXG4gICAgICAgICAgICAvLyAgICAgWzI5LCAxOCwgMjcsIDE3LCAxOV0sXHJcbiAgICAgICAgICAgIC8vICAgICBbMCwgMCwgMCwgNDEsIDM1XSxcclxuICAgICAgICAgICAgLy8gICAgIFswLCAwLCAwLCA0NywgNDldLFxyXG4gICAgICAgICAgICAvLyAgICAgWzAsIDAsIDczLCAwLCA2OF1cclxuICAgICAgICAgICAgLy8gXSxcclxuICAgICAgICAgICAgLy8gW1xyXG4gICAgICAgICAgICAvLyAgICAgWzksIDAsIDIsIDExLCAxNF0sXHJcbiAgICAgICAgICAgIC8vICAgICBbMCwgMCwgMjEsIDE5LCAwXSxcclxuICAgICAgICAgICAgLy8gICAgIFswLCAwLCAwLCAzNSwgMF0sXHJcbiAgICAgICAgICAgIC8vICAgICBbNTksIDQ3LCAwLCAwLCA1MF0sXHJcbiAgICAgICAgICAgIC8vICAgICBbMCwgMCwgNzAsIDAsIDBdXHJcbiAgICAgICAgICAgIC8vIF0sXHJcbiAgICAgICAgICAgIC8vIFtcclxuICAgICAgICAgICAgLy8gICAgIFswLCA5LCAxMiwgMCwgNl0sXHJcbiAgICAgICAgICAgIC8vICAgICBbMjUsIDAsIDE5LCAyOSwgMF0sXHJcbiAgICAgICAgICAgIC8vICAgICBbMCwgMCwgMCwgMzUsIDBdLFxyXG4gICAgICAgICAgICAvLyAgICAgWzAsIDAsIDAsIDU5LCA1M10sXHJcbiAgICAgICAgICAgIC8vICAgICBbNzAsIDAsIDAsIDAsIDBdXHJcbiAgICAgICAgICAgIC8vIF0sXHJcbiAgICAgICAgICAgIC8vIFtcclxuICAgICAgICAgICAgLy8gICAgIFsxNCwgNywgOSwgMCwgMF0sXHJcbiAgICAgICAgICAgIC8vICAgICBbMCwgMjksIDAsIDAsIDBdLFxyXG4gICAgICAgICAgICAvLyAgICAgWzM4LCA0MywgMCwgMzIsIDM1XSxcclxuICAgICAgICAgICAgLy8gICAgIFs1OSwgNDgsIDUxLCAwLCAwXSxcclxuICAgICAgICAgICAgLy8gICAgIFswLCA2NiwgNjIsIDc0LCAwXVxyXG4gICAgICAgICAgICAvLyBdXHJcbiAgICAgICAgXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBHYW1lTWFuYWdlciA9IEdhbWVNYW5hZ2VyQ2xhc3MuZ2V0SW5zdGFuY2UoKTtcclxuIl19