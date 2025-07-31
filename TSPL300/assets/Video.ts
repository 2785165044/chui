import { _decorator, Camera, Component, game, macro, Node, NodeEventType, VideoPlayer } from 'cc';
import { Tool } from './Tool';
const { ccclass, property } = _decorator;

macro.ENABLE_TRANSPARENT_CANVAS = true;
@ccclass('Video')
export class Video extends Component {
    @property(Node)
    private video: Node = null;
    @property(Node)
    private videoBg: Node = null;


    onLoad() {
         Tool.setVideoBlur(this.videoBg);

        //this.scheduleOnce(() => {
            this.video.getComponent(VideoPlayer).play();
            this.videoBg.getComponent(VideoPlayer).play();
            // this.scheduleOnce(() => {
            //     this.video.getComponent(VideoPlayer).pause();
            //     this.videoBg.getComponent(VideoPlayer).pause();
            // }, 0.05);
        //}, 0);
    }
    start() {
    }

    update(deltaTime: number) {

    }
}


