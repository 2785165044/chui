import { _decorator, Component, log, Node, UITransform, Vec2, Vec3, view } from 'cc';
import { ViewResize } from '../Base/ViewResize';
const { ccclass, property } = _decorator;

@ccclass('AutoScale')
export class AutoScale extends Component {
    //是否按比例缩放w
    @property
    private isScaleW: boolean = false;
    //是否按比例缩放w
    @property
    private isScaleH: boolean = false;
    //设计尺寸
    @property(Vec2)
    private designSize: Vec2 = new Vec2(720, 1280);

    //当前物体的宽高
    private nodeWH: Vec2 = new Vec2(100, 50);

    //储存当前的缩放，不让后续缩放超过标准缩放
    private _scale: Vec3 = new Vec3(1, 1, 1);
    onLoad() {
        //监听屏幕旋转
        ViewResize.instance.reSizeCallBackAdd(() => {
            this.adpcale();
        }, this);

        this._scale = this.node.scale.clone();
        this.nodeWH = new Vec2(this.node.getComponent(UITransform).width, this.node.getComponent(UITransform).height);

    }

    protected start(): void {
        this.scheduleOnce(() => {
            this.adpcale();
        }, 5);
        this.adpcale();

    }

    adpcale() {
        let frameSize = view.getDesignResolutionSize();
        let viewScale = 1;

        if (frameSize.width > frameSize.height) {
            //横屏
        } else {
            //竖屏
        }
        if (this.isScaleW) {
            let s_w = this._scale.x * this.nodeWH.x;
            //当前物体的宽高加缩放跟设计尺寸的比例
            viewScale = s_w / this.designSize.x;
            //当前屏幕的宽度
            let w = viewScale * frameSize.width;
            //当前物体的宽跟当前尺寸的比例
            viewScale = w / this.nodeWH.x;
            this.node.scale = new Vec3(viewScale, viewScale, viewScale);
            // log("当前物体的宽高加缩放跟设计尺寸的比例", viewScale);
            return;
        }
        if (this.isScaleH) {
            let s_H = this._scale.y * this.nodeWH.y;
            //当前物体的宽高加缩放跟设计尺寸的比例
            viewScale = s_H / this.designSize.y;
            //当前屏幕的宽度
            let h = viewScale * frameSize.height;
            //当前物体的宽跟当前尺寸的比例
            viewScale = h / this.nodeWH.y;
            this.node.scale = new Vec3(viewScale, viewScale, viewScale);
            // log("当前物体的宽高加缩放跟设计尺寸的比例", viewScale);
            return;
        }

        //设计尺寸和当前屏幕尺寸的比例
        let scaleX = (frameSize.width * viewScale) / this.node.getComponent(UITransform).width;
        let scaleY = (frameSize.height * viewScale) / this.node.getComponent(UITransform).height;
        //取最小的缩放
        let scale = scaleX < scaleY ? scaleX : scaleY;

        //设置缩放
        if (scale > this._scale.x) {
            this.node.scale = this._scale;
        } else {
            this.node.scale = new Vec3(scale, scale, scale);
        }
    }
}


