import { _decorator, color, Component, tween, UIOpacity } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('ColorTween')
export class ColorTween extends Component {
    @property
    time: number = 0.5;
    @property
    loop: boolean = false;


    private uiOpacity: UIOpacity = null;
    protected onLoad(): void {
        this.uiOpacity = this.getComponent(UIOpacity);
    }

    start() {
        this.play();
    }

    public play() {
        tween(this.uiOpacity)
            .to(this.time, { opacity: 0 })
            .to(this.time, { opacity: 255 })
            .call(() => {
                this.play();
            })
            .start();
    }
}