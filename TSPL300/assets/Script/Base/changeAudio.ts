import { Component, _decorator} from 'cc';
import AudioManager from './AudioManager';
const { ccclass, property } = _decorator;

@ccclass('ChangeAudio')
export default class ChangeAudio extends Component {
    static root3D: any;
    onLoad () {
        ChangeAudio.root3D = this.node.parent;
        // window.audioVolume = 1;
        // this.scheduleOnce(()=>{
        //     console.log("???");
            
        //     window.ListenerManager.dispatch("stopAllAudio");
        //     window.audioVolume = 0;
        //     // this.scheduleOnce(()=>{
        //     //     console.log("???");
                
        //     //     window.ListenerManager.dispatch("playAllAudio");
        //     //     window.audioVolume = 1;
        //     // },5)
        // },5)
    }

    start () {

    }

    // update (dt) {}
}
window.muteOpen = function () {
    console.log("静音开启");
    AudioManager.is_mute = true;
}

window.muteClose = function () {
    console.log("静音关闭");
    AudioManager.is_mute = false;
}