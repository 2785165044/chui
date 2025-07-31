import { _decorator, Animation, Camera, Component, CurveRange, lerp, Node, Quat, Tween, tween, v3, Vec3, view } from 'cc';
import { TransverseWidthFit } from '../../Common/TransverseWidthFit';
import TimeManager from '../../Base/TimeManager';
import GameData from './GameData';
import GameManager from './GameManager';
const { ccclass, property } = _decorator;
export enum CameraType {
    init, men, tudi, roleUI, grUI, nextUI, nextNpc, grShow,
    lv1_camera, lv2_camera, lv3_camera, end_camera,
    ui2_camera, ui3_camera, ui4_camera,
    step2_camera, step3_camera,
}
@ccclass('CameraCtr')
export class CameraCtr extends Component {
    @property(Node)
    private init_camera: Node = null;
    @property(Node)
    private lv1_camera: Node = null;
    @property(Node)
    private lv2_camera: Node = null;
    @property(Node)
    private lv3_camera: Node = null;
    @property(Node)
    private ui2_camera: Node = null;
    @property(Node)
    private ui3_camera: Node = null;
    @property(Node)
    private ui4_camera: Node = null;
    @property(Node)
    private end_camera: Node = null;
    @property(Node)
    private men_camera: Node = null;
    @property(Node)
    private step2_camera: Node = null;
    @property(Node)
    private step3_camera: Node = null;
    @property(Node)
    private camera_hide: Node = null;
    @property(CurveRange)
    private speedData: CurveRange = null;// new CurveRange();
    @property
    private isOrtho: boolean = false;

    private speed: number = 5;
    private angle_speed: number = 5;
    private type: number = 0;
    private time: number = 0;
    private time_r: number = 0;
    private init_ro: Vec3 = null;


    private target: Node = null;
    private fov_c: number = 40;
    private initfov: number = 40;
    private init_pos: Vec3 = null;

    private orthoHeigth: number = 10;
    private init_ortho: number = 10;



    private call: Function = null;
    private camera: Camera = null;
    public static inst: CameraCtr = null;
    protected onLoad(): void {
        CameraCtr.inst = this;
        this.camera = this.node.getComponent(Camera);
        this.initfov = this.camera.fov;
    }

    protected start(): void {

        console.log("CameraCtr start");
        //this.setType(CameraType.init);
        // this.node.setPosition(this.target.worldPosition);
        // this.node.eulerAngles = this.target.eulerAngles;
        // this.scheduleOnce(() => {
        //     if (this.camera_hide)
        //         this.camera_hide.active = false;
        // }, 3);
    }

    protected lateUpdate(dt: number): void {
        if (this.target == null) {
            return;
        }

        if(this.lv1_camera == this.target)
        {
            this.lv1_camera.worldPosition = GameManager.inst.fly.worldPosition.clone().add(new Vec3(-10.6, 7, -4));
        }
        dt = 1/60;
        if (this.type == 0) {
            let speed = this.speed * dt;
            let di = Vec3.distance(this.target.worldPosition, this.node.worldPosition);

            if (di > speed) {
                this.node.setPosition(this.target.worldPosition.clone().subtract(this.node.worldPosition).normalize().multiplyScalar(speed).add(this.node.worldPosition));
            }
            else {
                this.node.setPosition(this.target.worldPosition);
                this.call && this.call();
                this.call = null;
            }
        }
        else if (this.type == 1) {
            this.time += dt * this.speed;
            // log(z)
            if (this.time > 1) {
                this.time = 1;
                this.call && this.call();
                this.call = null;
            }

            let value = this.speedData.evaluate(this.time, 0);
            this.node.worldPosition = Vec3.lerp(this.node.worldPosition, this.init_pos, this.target.worldPosition, value);
            // this.init_pos = this.node.worldPosition.clone();
        }

        this.time_r += dt * this.angle_speed;
        if (this.time_r > 1) {
            this.time_r = 1;
        }

       
        let value = this.speedData.evaluate(this.time_r, 0);
       // this.node.eulerAngles = Vec3.lerp(this.node.eulerAngles, this.init_ro, this.target.eulerAngles, value);
        let tempRotation = new Quat();
        Quat.slerp(tempRotation, this.node.getWorldRotation(), this.target.getWorldRotation(), value); 
        //if(this.lv1_camera != this.target)
        {
            this.node.setWorldRotation(tempRotation);
        }
        // if (this.camera.projection == renderer.scene.CameraProjection.ORTHO) {
        //     this.camera.orthoHeight = this.target.getComponent(Camera).orthoHeight;
        // }
    }

    public setType(_type: CameraType, call: Function = null) {
        this.time_r = 0;
        this.time = 0;
        this.speed = 1 / 1;
        this.type = 1;
        this.angle_speed = 1 / 1;
        this.call = call;
        this.init_pos = this.node.worldPosition.clone();
        this.init_ro = this.node.eulerAngles.clone();
        //this.init_ortho = this.camera.orthoHeight;

        switch (_type) {
            case CameraType.init:
                //this.type = 0;
                this.speed = 2;
                this.target = this.init_camera;
                break;
            case CameraType.men:
                this.target = this.men_camera;
                // this.type = 0;
                this.speed = 1 / 0.6;
                break;
            case CameraType.lv1_camera:
                this.target = this.lv1_camera;
                // this.type = 0;
                this.speed = 2
                break;
            case CameraType.lv2_camera:
                this.target = this.lv2_camera;
                // this.type = 0;
                this.speed = 2;
                break;
            case CameraType.lv3_camera:
                this.target = this.lv3_camera;
                // this.type = 0;
                this.speed = 1 / 0.6;
                break;
            case CameraType.ui2_camera:
                this.target = this.ui2_camera;
                // this.type = 0;
                this.speed = 1 / 0.6;
                break;
            case CameraType.ui3_camera:
                this.target = this.ui3_camera;
                // this.type = 0;
                this.speed = 1 / 0.6;
                break;
            case CameraType.ui4_camera:
                this.target = this.ui4_camera;
                // this.type = 0;
                this.speed = 1 / 0.6;
                break;
            case CameraType.end_camera:
                this.target = this.end_camera;
                // this.type = 0;
                this.speed = 1 / 0.6;
                break;
            case CameraType.step2_camera:
                this.target = this.step2_camera;
                this.speed = 1;
                break;
            case CameraType.step3_camera:
                this.target = this.step3_camera;
                this.speed = 1;
                break;
        }

        if (this.isOrtho) {
            this.orthoHeigth = this.target.getComponent(TransverseWidthFit).getOrtho();
        }
    }

    shakeCamera() {
        let shakeDuration = 0.03   // 震动持续时间
        let shakeIntensity = 0.035  // 震动强度
        const cameraNode = this.node.parent;
        // const cameraNode = this.node;

        // 保存摄像机原始位置
        const originalPosition = cameraNode.position.clone();

        // 使用 Tween 动画系统创建震动效果
        tween(cameraNode)
            .to(shakeDuration, { position: v3(originalPosition.x + shakeIntensity, originalPosition.y, originalPosition.z) }, { easing: 'sineOut' })
            .to(shakeDuration, { position: v3(originalPosition.x, originalPosition.y + shakeIntensity, originalPosition.z) }, { easing: 'sineOut' })
            .to(shakeDuration, { position: v3(originalPosition.x, originalPosition.y, originalPosition.z + shakeIntensity) }, { easing: 'sineOut' })
            .to(shakeDuration, { position: originalPosition })
            .start();
    }

    public effectTarget(_type1: CameraType, _type2: CameraType, call1: Function = null, call2: Function = null, time: number = 1) {
        GameData.isInterval = true;
        GameData.hide_guide = true;
        this.setType(_type1, () => {
            if (call1) call1();
            TimeManager.instance.calculateTime(() => {
                this.setType(_type2, call2);
                GameData.isInterval = false;
            }, time, this.node, false);
            TimeManager.instance.calculateTime(() => {
                GameData.hide_guide = false;
            }, time + 1, this.node, false);
        });
    }

    public setFov(farOrNear: boolean) {
        let fov_value = this.initfov;
        let time = 2;
        if (farOrNear) {
            fov_value = this.initfov * 0.9;
            time = 2.5;
        }
        if (this.fov_c == fov_value) {
            return;
        }
        this.fov_c = fov_value;
        Tween.stopAllByTarget(this.camera);
        tween(this.camera)
            .to(time, { fov: fov_value }, { easing: 'quintOut' })
            .start();
    }


    public lookAtAirFly(call: Function = null) {

        //this.target = this.lv2_camera
        let parent = this.node.parent.parent;
        let worldPosition = this.node.parent.getWorldPosition();
        //this.node.parent.parent = this.target.parent.parent;

        //this.node.parent.setWorldPosition(worldPosition);
        this.lv2_camera.active = true;

        //

         let frameSize = view.getVisibleSizeInPixel();
        if (frameSize.width > frameSize.height) {
            //横屏
            
        }
        else {
            this.lv2_camera.getComponent(Animation).play("cameraanimationV")
        }
    
        this.setType(CameraType.lv2_camera, () => {
            tween(this.node).delay(5.2).call(() => {
                this.setType(CameraType.init)
                call();
                tween(this.node).delay(2).call(() => {
                    this.target = null;
                }).start();
                
            }).start();
            //this.node.parent.parent = parent;
            //TimeManager.instance.calculateTime(() => { this.setType(CameraType.init); }, 3.5, this.node, false);
        });
    }

    public lookAtAirFlyDrop() {
        this.lv1_camera.active = true;
        this.setType(CameraType.lv1_camera, () => {

        });
    }
}