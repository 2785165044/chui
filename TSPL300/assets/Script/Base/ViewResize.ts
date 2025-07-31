import { _decorator, Component, Node, UITransform, view } from 'cc';
import GameData from '../Game/Main/GameData';
const { ccclass, property } = _decorator;

@ccclass('ViewResize')
export class ViewResize extends Component {
    @property(UITransform)
    canvas:UITransform = null;
    //单例的实例对象
    public static instance: ViewResize = null;
    protected onLoad(): void {
        ViewResize.instance = this;
        this.init();
    }

    /** 回调 */
    private _reSizeCallBackList: { method: Function, target: any }[] = []

    public init(): void {
        view.setResizeCallback(this.reSizeCallBack.bind(this));
        this.refreshData();
    }

    /**
     * 添加回调函数和触发对象
     * @param method 
     * @param target 
     */
    public reSizeCallBackAdd(method: Function, target: any): void {
        if (this._reSizeCallBackList.findIndex(item => item.method === method) === -1) {
            this._reSizeCallBackList.push({ method, target })
        }
    }

    /**
     * 添加回调函数和触发对象
     * @param method 
     * @param target 
     */
    public reSizeCallBackDel(method: Function): void {
        const index = this._reSizeCallBackList.findIndex(item => item.method === method)
        if (index !== -1) {
            this._reSizeCallBackList.splice(index, 1)
            // $g.log('ViewManager 删除全屏回调')
        }
    }

    private reSizeCallBack(): void {
        // this.reSetViewSize()
        let i = this._reSizeCallBackList.length
        while (--i > -1) {
            if (this._reSizeCallBackList.length > i) {
                const item = this._reSizeCallBackList[i]
                item.method.apply(item.target)
            }
        }

        this.refreshData();
    }

    private refreshData() {
        let frameSize = view.getVisibleSizeInPixel();
        let frameSize1 = view.getVisibleSize();

        GameData.isHOrV = frameSize.width > frameSize.height;

        //设计尺寸和当前屏幕尺寸的比例
        let scaleX = (frameSize1.width * 1) / this.canvas.width;
        let scaleY = (frameSize1.height * 1) / this.canvas.height;

        GameData.minScale = scaleX < scaleY ? scaleX : scaleY;
        GameData.maxScale = scaleX > scaleY ? scaleX : scaleY;

        //设计尺寸和当前屏幕尺寸的比例
        scaleX = (frameSize.width * 1) / this.canvas.width;
        scaleY = (frameSize.height * 1) / this.canvas.height;


        GameData.minScale1 = scaleX < scaleY ? scaleX : scaleY;
        GameData.maxScale1 = scaleX > scaleY ? scaleX : scaleY;


        scaleX = (frameSize.width * 1) / 720;
        scaleY = (frameSize.height * 1) / 1280;
        GameData.minScale2 = scaleX < scaleY ? scaleX : scaleY;
        GameData.maxScale2 = scaleX > scaleY ? scaleX : scaleY;

        // console.log(GameData.minScale1,GameData.maxScale1, GameData.minScale2, GameData.maxScale2)
    }
}


