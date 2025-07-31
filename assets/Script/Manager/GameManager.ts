class GameManagerClass {
    private static _instance: GameManagerClass = null;
    public static getInstance(): GameManagerClass {
        if (null === this._instance) {
            this._instance = new GameManagerClass();
        }
        return this._instance;
    }

    /**bingo次数 */
    public static bingoNum: number = 0;

    /**
     * 0 - 竖屏
     * 1 - 横屏
     */
    public screenMode: number = 0;
    /**玩家拥有钱的数量 */
    public moneyNum: number = 0;
    /**病人数量 */
    public roleNum: number = 0;
    /**重玩次数 */
    public retryNum: number = 0;

    public canTouch: boolean = true;

    /**是否开启多语言 */
    public isMultilingual: boolean = false;
    /**当前语言 */
    public curLanguage: string = "en";
    /**是否已经跳转商店 */
    public isJumpShop: boolean = false;
    /**是否首次点击 */
    public firstClick: boolean = false;

    /**是否静音 */
    public isMute: boolean = false;

    public canPlayAudio: boolean = false;

    /**bingo次数 */
    public bingoNum: number = 0;

    /**叶子颜色 */
    public leafColor: cc.Color[] = [cc.color(255, 60, 157, 255), cc.color(9, 160, 2, 255), cc.color(72, 82, 240, 255), cc.color(254, 79, 21, 255)];

    /**当前数字 */
    public curNum: number = -1;


    public cardNumArr: number[][] =
        
            [
                [11, 6, 3, 15, 4],
                [27, 2, 28,  99, 27],
                [7, 40, 0, 4, 40],
                [0,0, 0, 0, 8],
                [6, 75 , 23,9, 75]
                // [11, 27, 7, 22, 6],
                // [6, 2, 40,  8, 75],
                // [3, 28, 0, 3, 23],
                // [15, 99, 4, 56, 9],
                // [4, 27 , 40,8, 75]
            ]
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

export const GameManager = GameManagerClass.getInstance();
