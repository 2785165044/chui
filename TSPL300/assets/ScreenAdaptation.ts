import { _decorator, Camera, Component, log, Node, ResolutionPolicy, Tween, UIOpacity, UITransform, v3, Vec3, view, Widget } from 'cc';

const { ccclass, property } = _decorator;

@ccclass('ScreenAdapt')
export class ScreenAdapt extends Component {
    @property(Node)
    UI: Node = null;
    @property(Camera)
    gameCamera: Camera = null;
    @property(Camera)
    UICamera: Camera = null;
    @property(Node)
    game: Node = null;
    @property(Node)
    threeBtn: Node = null;
    @property(Node)
    hand: Node = null;



    onLoad() {
        //return;
        // this.scheduleOnce(() => {
        this.adpCall();
        this.adpCall();
        // }, 0)
        //固定宽、高初始化
        //屏幕旋转时间监听
        view.setResizeCallback(() => {
            this.adpCall();
        });
    }

    start() {

    }

    update(deltaTime: number) {

    }

    private adpCall(): void {
        Tween.stopAllByTarget(this.game);
        // 当前屏幕比例
        let screenRatio =
            view.getVisibleSize().width / view.getVisibleSize().height;
        let moveX = 0;
        if (screenRatio <= 1) {
            view.setResolutionPolicy(ResolutionPolicy.FIXED_WIDTH);
            this.UI.setScale(1, 1);
            this.game.setScale(1, 1, 1);
            if (this.threeBtn) {
                if (this.isTablet()) {
                    let oldPos = view.getVisibleSize().height * 0.3;
                    this.threeBtn.getComponent(Widget).bottom = -oldPos;
                    this.threeBtn.setScale(0.7, 0.7, 0.7);
                }
            }
        }
        else {
            view.setResolutionPolicy(ResolutionPolicy.FIXED_HEIGHT);
            this.UI.setScale(1.5, 1.5);
            this.game.setScale(1, 1, 1);
        }
        if (this.threeBtn) {
           // this.threeBtn.getComponent(ThreeBtn).btnAdpCall(view.getVisibleSize().width, view.getVisibleSize().height);
        }
        this.scheduleOnce(() => {
            this.UICamera.orthoHeight = this.gameCamera.orthoHeight;
        }, 0)
    }

    private isTablet() {
        const ua = navigator.userAgent.toLowerCase();

        // 检查用户代理字符串中是否存在常见平板设备标识
        const isAndroidTablet = /android/.test(ua) && !/mobile/.test(ua);
        const isIPad = /ipad/.test(ua);

        // iPadOS 13 及更高版本识别：它们可能显示为桌面级浏览器
        const isIpadOS13Up = () => (
            /macintosh/.test(ua) && navigator.maxTouchPoints && navigator.maxTouchPoints > 1
        );

        // 结合条件判断
        return isAndroidTablet || isIPad || isIpadOS13Up();
    }

}


