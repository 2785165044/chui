import { _decorator, Component, Node, Sprite, SpriteFrame, SpriteRenderer } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('Number3dText')
export class Number3dText extends Component {
    @property([Sprite])
    sr: Sprite[] = [];
    @property([SpriteFrame])
    num_img: SpriteFrame[] = [];
    @property
    value: number = 456;

    protected onLoad(): void {
        this.setNum(this.value);
    }

    setNum(value: number) {
        for (let i = 0; i < this.sr.length; i++) {
            const sr = this.sr[i];
            let index = 0;
            if (i == 0) {
                index = (value) % 10;
            }
            else {
                index = Math.floor(value / Math.pow(10, i)) % 10;
            }
            sr.spriteFrame = this.num_img[index];
        }

        let len = value.toString().length;
        for (let i = 0; i < this.sr.length; i++) {
            if( i < len ) {
                this.sr[i].node.active = true;
            }
            else {
                this.sr[i].node.active = false;
            }
        }
    }
}


