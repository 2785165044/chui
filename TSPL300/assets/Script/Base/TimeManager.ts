import { _decorator, Component } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('TimeManager')
export default class TimeManager extends Component {
    //单例模式调用
    public static instance: TimeManager = null;

    //当前时间
    private time: number = 0;

    //是否停止运行
    private isStop: boolean = false;
    private setpUP:number = 1000;

    //创建字典
    private callBackDic: { [key: string]: { callBack: Function, time: number } } = {};

    protected onLoad(): void {
        TimeManager.instance = this;
    }

    protected update(dt: number): void {
        if (this.isStop) return;
        this.time += dt;

        //遍历字典
        for (const key in this.callBackDic) {
            if (this.callBackDic.hasOwnProperty(key)) {
                const element = this.callBackDic[key];
                if (this.time >= element.time) {
                    delete this.callBackDic[key];
                    element.callBack();
                }
            }
        }
    }

    //获取当前时间
    public getTime(): number {
        return this.time;
    }

    //停止运行
    public stop() {
        this.isStop = true;
    }

    //开始运行
    public start() {
        this.isStop = false;
    }

    //重置时间
    public reset() {
        this.time = 0;
    }

    //计算时间，并且调用回调,根据作用域和函数名来判断是否存在
    public calculateTime(callBack: Function, time: number, _this: any, isCover: boolean = true) {
        //获取回调的唯一标识
        let callBackId = _this ? callBack.name + _this.uuid : callBack.name;
        if (!isCover) {
            callBackId += this.setpUP++;
        }
        //存储回调和完成时间
        this.callBackDic[callBackId] = { callBack: callBack, time: this.time + time };
    }

    //取消计时
    public cancelTime(callBack: Function, _this: any) {
        //获取回调的唯一标识
        let callBackId = _this ? callBack.name + _this.uuid : callBack.name;
        if (this.callBackDic.hasOwnProperty(callBackId)) {
            delete this.callBackDic[callBackId];
        }
    }

}
