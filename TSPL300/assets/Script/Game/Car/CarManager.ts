import { _decorator, Component, Node, Prefab, } from "cc";
import PoolMgr from "../../Base/PoolMgr";
import Car from "./Car";
const { ccclass, property } = _decorator;

@ccclass("CarManager")
export default class CarManager extends Component {

    @property(Node)
    root: Node = null;
    @property(Prefab)
    car: Prefab = null;
    @property([Node])
    paths: Node[] = [];

    private pathArry: Node[][] = [];

    public static inst: CarManager = null;
    protected onLoad(): void {
        CarManager.inst = this;
    }

    protected start(): void {
        for (let i: number = 0; i < this.paths.length; i++) {
            if (!this.pathArry[i]) {
                this.pathArry[i] = [];
            }
            for (let j: number = 0; j < this.paths[i].children.length; j++) {
                this.pathArry[i].push(this.paths[i].children[j]);
            }
        }

        this.onInitCar();
    }

    onInitCar() {
        this.schedule(() => {
            this.createCar(0);
        }, 0.5, 1);
        this.schedule(() => {
            this.createCar(0);
        }, 0.5, 3, 3);
        this.schedule(() => {
            this.createCar(0);
        }, 0.5, 3, 7);
        this.schedule(() => {
            this.createCar(0);
        }, 0.5, 2, 10);

        this.schedule(() => {
            this.createCar(1);
        }, 0.5, 1);
        this.schedule(() => {
            this.createCar(1);
        }, 0.5, 3, 4);
        this.schedule(() => {
            this.createCar(1);
        }, 0.5, 4, 8);
        this.schedule(() => {
            this.createCar(1);
        }, 0.5, 3, 12);
    }

    createCar(idx: number) {
        let car = PoolMgr.inst.getNode(this.car);
        car.parent = this.root;
        car.setWorldPosition(this.pathArry[idx][0].worldPosition);
        car.getComponent(Car).setPath(this.pathArry[idx], idx);
    }

    removeCar(car: Node, idx: number) {
        PoolMgr.inst.putNode(car);
        this.createCar(idx);
    }

}