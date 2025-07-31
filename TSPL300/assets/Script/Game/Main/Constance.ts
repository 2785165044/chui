export enum GoodsType {
    money = 1,
    tomato,
    tomatoTp,
}

export interface AddBoxItem {
    count: number,
    goodsType: GoodsType,
    goodsNodeArr: any[];
}

export class GameConfig {
    static GoodsBoxConfig = [
        { row: 2, col: 3, h: 1 ,w:1,l:2},
        { row: 2, col: 3, h: 1 ,w:1,l:2},
        { row: 2, col: 3, h: 1 ,w:1,l:1},
    ]
}

export enum needType {
    cigar = 1,
    hemp,
}