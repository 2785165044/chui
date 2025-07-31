import { _decorator, Camera, Component, Node, Vec3, view, Widget } from 'cc';
import { ViewResize } from '../Base/ViewResize';
const { ccclass, property } = _decorator;

@ccclass('TransverseWidthFit')
export class TransverseWidthFit extends Component {
    @property
    is_pos: boolean = false;
    @property({ visible: function (this) { return this.is_pos; } })
    h_pos: Vec3 = new Vec3();
    @property({ visible: function (this) { return this.is_pos; } })
    v_pos: Vec3 = new Vec3();
    @property
    widget_type: string = "";
    @property({ visible: function (this) { return this.widget_type != ""; } })
    widget_H: number = 0;
    @property({ visible: function (this) { return this.widget_type != ""; } })
    widget_V: number = 0;
    @property
    is_scale: boolean = false;
    @property({ visible: function (this) { return this.is_scale } })
    scale_H: number = 0;
    @property({ visible: function (this) { return this.is_scale } })
    scale_V: number = 0;
    @property
    is_rotate: boolean = false;
    @property({ type: Vec3, visible: function (this) { return this.is_rotate } })
    ro_H: Vec3 = null;
    @property({ type: Vec3, visible: function (this) { return this.is_rotate } })
    ro_V: Vec3 = null;
    @property
    is_ortho: boolean = false;
    @property({ type: Number, visible: function (this) { return this.is_ortho; } })
    h_ortho: number = 0;
    @property({ type: Number, visible: function (this) { return this.is_ortho; } })
    v_ortho: number = 0;

    protected onLoad(): void {
        //监听屏幕旋转
        ViewResize.instance.reSizeCallBackAdd(() => {
            this.adpcale();
        }, this);
        this.adpcale();
    }

    adpcale() {
        let data = this.getData();
        let pos = data.pos;
        let widget_value = data.widget_value;
        let scale = data.scale;
        let ro = data.ro;
        let ortho = data.ortho;

        if (this.is_pos) {
            this.node.setPosition(pos);
        }

        if (this.widget_type != "") {
            this.node.getComponent(Widget)[this.widget_type] = widget_value;
        }

        if (this.is_scale) {
            this.node.setScale(scale, scale, scale);
        }

        if (this.is_rotate) {
            this.node.setRotationFromEuler(ro);
        }
    }

    public getOrtho() {
        let ortho = this.v_ortho;
        let frameSize = view.getVisibleSizeInPixel();
        if (frameSize.width > frameSize.height) {
            ortho = this.h_ortho;
        }
        return ortho;
    }

    public getData() {
        let pos = this.v_pos;
        let widget_value = this.widget_V;
        let scale = this.scale_V;
        let ro = this.ro_V;
        let ortho = this.v_ortho;
        let frameSize = view.getVisibleSizeInPixel();
        if (frameSize.width > frameSize.height) {
            //横屏
            pos = this.h_pos;
            widget_value = this.widget_H;
            scale = this.scale_H;
            ortho = this.h_ortho;
            ro = this.ro_H;
        } else {
            //竖屏
            if (frameSize.height / frameSize.width < 1.1) {
                pos = this.h_pos;
                widget_value = this.widget_H;
                scale = this.scale_H;
                ortho = this.h_ortho;
                ro = this.ro_H;
            }
        }
        return { pos: pos, widget_value: widget_value, scale: scale, ro: ro, ortho: ortho };
    }

}