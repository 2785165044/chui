/**自定义数学运算集成类 */
export default class MathDefine {

    /**
     * 随机数（单个）
     * @param min 最小值
     * @param max 最大值
     */
    public static RandomNumber(min: number, max: number): number {
        let res = 0;
        res = Math.floor(min + (max - min + 1) * Math.random());
        return res;
    }

    /**
     * 随机数（多个）
     * @param min 最小值
     * @param max 最大值
     * @param count 数量
     */
    public static RandomNumbers(min: number, max: number, count: number): number[] {
        if (count > (max - min)) return null;

        try {
            let res: number[] = [];
            for (let i = 0; i < count; i++) {
                res.push(Math.floor(min + (max - min + 1) * Math.random()));
            }
            return res;
        }
        catch (e) {
            console.log("数据计算出错");
        }


    }

    /**
     * 随机数（多个不重复）
     * @param min 最小值
     * @param max 最大值
     * @param count 数量
     */
    public static RandomNumbersDif(min: number, max: number, count: number): number[] {
        if (count > (max - min + 1)) return null;

        try {
            let res: number[] = [];
            let cacheList: number[] = [];
            let temp = min;

            for (let i = 0; i <= max - min; i++) {
                cacheList.push(temp);
                temp++;
            }

            for (let i = 0; i < count; i++) {
                if (cacheList.length != 0) {
                    let index = this.RandomNumber(0, cacheList.length - 1);
                    res.push(cacheList[index]);
                    cacheList.splice(index, 1);
                }
            }
            return res;
        }
        catch (e) {
            console.log("数据计算出错" + e);
        }

    }

    // update (dt) {}
}
