import { _decorator, Component, Sprite, SpriteFrame, v3, Vec3 } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('Number2dText')
export class Number2dText extends Component {
    @property([Sprite])
    sr: Sprite[] = [];
    @property([SpriteFrame])
    num_img: SpriteFrame[] = [];
    @property(Number)
    value: number = 456;
    @property(Boolean)
    isSort: boolean = true;
    @property({ type: Number, visible: function (this) { return this.isSort } })
    space: number = 0.28;
    @property({ type: Vec3, visible: function (this) { return this.isSort } })
    init_pos: Vec3 = v3(0, 0, 0);

    private imgArr: SpriteFrame[] = [];

    public OValue: number = 0;
    protected onLoad(): void {
        for (let i = 0; i < this.num_img.length; i++) {
            const num = this.num_img[i];
            this.imgArr.push(num.clone());
        }

        this.setNum(this.value);
        this.OValue = this.value;
    }

    public addNum(value: number) {
        this.value += value;
        this.setNum(this.value);
    }

    setNum(value: number) {
        if (value < 0) {
            value = 0;
        }
        for (let i = 0; i < this.sr.length; i++) {
            const sr = this.sr[i];
            let index = 0;
            if (i == 0) {
                index = (value) % 10;
            }
            else {
                index = Math.floor(value / Math.pow(10, i)) % 10;
            }
            sr.spriteFrame = this.imgArr[index];
        }

        let len = value.toString().length;
        for (let i = 0; i < this.sr.length; i++) {
            if (i < len) {
                this.sr[i].node.active = true;
            }
            else {
                this.sr[i].node.active = false;
            }
        }
        if (this.isSort) {
            this.refreshPos();
        }
    }

    private refreshPos() {
        let active_num = 0;
        for (let i = 0; i < this.sr.length; i++) {
            if (this.sr[i].node.active) {
                active_num++;
            }
        }

        for (let i = 0; i < active_num; i++) {
            // let index = (this.sr.length - 1) - i;
            let index = i;

            let _node = this.sr[index].node;
            let nx = this.init_pos.x + i * this.space - active_num * this.space / 2 + this.space / 2;
            _node.setPosition(nx, this.init_pos.y, this.init_pos.z);
        }
    }
}