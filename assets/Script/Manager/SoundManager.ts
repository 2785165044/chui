import { ConstValue } from "../Data/ConstValue";
import { GameManager } from "./GameManager";

class SoundManagerClass {
    private static instance: SoundManagerClass = null;
    public static getInstance(): SoundManagerClass {
        if (this.instance === null) {
            this.instance = new SoundManagerClass();
        }
        return this.instance;
    }

    /**存放纹理资源的map */
    private audioClipMap: Map<string, cc.AudioClip> = new Map();
    /**播放语音列表 */
    private audioList: Map<string, number> = new Map();
    /**播放音效列表 */
    private effectList: Map<string, number> = new Map();
    /**音频统一的引用计数 */
    private referenceList: Map<string, number> = new Map();

    /**加载resources里audios的音频资源*/
    public preLoadResAudioClip(callback: (isCompleted: boolean) => void) {
        let path = ConstValue.AUDIO_DIR;
        cc.loader.loadResDir(path, cc.AudioClip, (error, audioClips: cc.AudioClip[]) => {
            //错误处理
            if (error) {
                cc.error(error);
                callback(false);
                return;
            }
            // 获取完毕后装入 Map
            audioClips.forEach((value) => {
                cc.log('缓存完毕！value.name == ' + value.name);
                this.audioClipMap.set(value.name, value);
                this.referenceList.set(value.name, 0);
            });
            // 执行回调返回进度
            callback(true);
        });
    }

    /**缓存所有音频资源 */
    public preLoadAllAudioClips(callback: (isCompleted: boolean) => void) {
        let isCompletedLoadResAudio = false;
        this.preLoadResAudioClip((isCompleted) => {
            if (isCompleted) {
                cc.log("缓存完毕！preLoadResAudioClip");
            }
            isCompletedLoadResAudio = true;
            if (isCompletedLoadResAudio) {
                callback(true);
            }
        });
    }

    /**单独缓存某一个音频 */
    public preLoadAudioClip(clipName: string, callback: () => void) {
        let path = ConstValue.AUDIO_DIR + clipName;
        cc.loader.loadRes(path, cc.AudioClip, (err, audioClip: cc.AudioClip) => {
            if (err) {
                cc.error(err);
                return;
            }
            this.audioClipMap.set(clipName, audioClip);
            this.referenceList.set(clipName, 0);
            cc.log('缓存完毕！audioClip.name == ' + audioClip.name);
            callback();
        });
    }

    // 获取音频资源
    public getAudioClip(clipName: string): cc.AudioClip {
        if (!this.audioClipMap.has(clipName)) {
            cc.log(`未缓存的音频资源: ${clipName}`);
            return null;
        } else {
            return this.audioClipMap.get(clipName);
        }
    }

    /**
     * 播放语音
     * @param clipName 语音clip文件
     * @param loop 是否循环
     * @param interrupt 是否打断其他语音
     * @param isMutex 是否互斥（指音效和语音），默认false
     * @param volume 音量（0.0~1.0）
     * @param onFinishCallback 播放完成回调函数
     */
    public playAudio(
        clipName: string | cc.AudioClip,
        loop: boolean,
        interrupt: boolean,
        isMutex: boolean = false,
        volume: number = 1,
        onFinishCallback: Function = null
    ) {
        if (!clipName || GameManager.isMute || !GameManager.canPlayAudio) return;
        interrupt && this.stopAllAudio();
        isMutex && this.stopAllEffect();
        let clip = null;
        if (typeof clipName === 'string') {
            clip = this.getAudioClip(clipName);
            if (clip == null) {
                this.preLoadAudioClip(clipName, () => {
                    clip = this.audioClipMap.get(clipName);
                    this.playAudio(clip, loop, interrupt, isMutex, volume, onFinishCallback);
                });
                return;
            }
        } else {
            clip = clipName;
        }

        let id = cc.audioEngine.play(clip, loop, volume);
        this.audioList.set(clip.name, id);
        //播放引用计数+1
        let referenceCount = this.referenceList.get(clip.name);
        this.referenceList.set(clip.name, referenceCount++);
        cc.audioEngine.setFinishCallback(id, () => {
            //引用计数为0删除资源
            let referenceCount = this.referenceList.get(clip.name);
            if (referenceCount-- < 0) {
                this.stopSoundByName(clip.name);
            }
            this.referenceList.set(clip.name, referenceCount < 0 ? 0 : referenceCount);
            setTimeout(() => {
                onFinishCallback && onFinishCallback();
            }, 100);
        });
    }

    /**
     * 播放音效
     * @param clipName 语音clip文件
     * @param loop 是否循环
     * @param interrupt 是否打断其他音效
     * @param isMutex 是否互斥（指音效和语音），默认false
     * @param volume 音量（0.0~1.0）
     * @param onFinishCallback 播放完成回调函数
     */
    public playEffect(
        clipName: string | cc.AudioClip,
        loop: boolean,
        interrupt: boolean,
        isMutex: boolean = false,
        volume: number = 1,
        onFinishCallback: Function = null
    ) {
        if (!clipName || GameManager.isMute || !GameManager.canPlayAudio) return;
        interrupt && this.stopAllEffect();
        isMutex && this.stopAllAudio();
        let clip = null;
        if (typeof clipName === 'string') {
            clip = this.getAudioClip(clipName);
            if (clip == null) {
                this.preLoadAudioClip(clipName, () => {
                    clip = this.audioClipMap.get(clipName);
                    this.playEffect(clip, loop, interrupt, isMutex, volume, onFinishCallback);
                });
                return;
            }
        } else {
            clip = clipName;
        }
        let id = cc.audioEngine.playEffect(clip, loop);
        cc.audioEngine.setVolume(id, volume)
        this.effectList.set(clip.name, id);
        //播放引用计数+1
        let referenceCount = this.referenceList.get(clip.name);
        this.referenceList.set(clip.name, referenceCount++);
        cc.audioEngine.setFinishCallback(id, () => {
            //引用计数为0删除资源
            let referenceCount = this.referenceList.get(clip.name);
            if (referenceCount-- < 0) {
                this.stopSoundByName(clip.name);
            }
            this.referenceList.set(clip.name, referenceCount < 0 ? 0 : referenceCount);
            setTimeout(() => {
                onFinishCallback && onFinishCallback();
            }, 100);
        });;
    }

    /**停止所有语音播放 */
    public stopAllAudio() {
        this.audioList.forEach((value, index) => {
            this.referenceList.set(index, 0);
            for (let i = 0; i <= value; i++) {
                cc.audioEngine.stop(i);
            }
        });
        this.audioList = new Map();
    }

    /**停止所有音效播放 */
    public stopAllEffect() {
        this.effectList.forEach((value, index, arr) => {
            this.referenceList.set(index, 0);
            for (let i = 0; i <= value; i++) {
                cc.audioEngine.stopEffect(i);
            }
        });
        this.effectList = new Map();
    }

    /**停止所有语音和音效的播放 */
    public stopAll() {
        this.stopAllAudio();
        this.stopAllEffect();
        cc.audioEngine.stopAll();
    }

    /**通过名字停止播放指定的音频 */
    public stopSoundByName(clipName: string) {
        this.referenceList.set(clipName, 0);
        let id = this.audioList.get(clipName);
        if (id != null && id != -1) {
            cc.audioEngine.stop(id);
            this.audioList.delete(clipName);
        }
        id = this.effectList.get(clipName);
        if (id != null && id != -1) {
            cc.audioEngine.stop(id);
            this.effectList.delete(clipName);
        }
    }

    /**某个音效是否正在播放 */
    public isPlaying(clipName: string): boolean {
        let id = this.audioList.get(clipName);
        if (id != null && id != -1) {
            return true;
        }
        id = this.effectList.get(clipName);
        if (id != null && id != -1) {
            return true;
        }
        return false;
    }

}

/**音频管理类 */
export const SoundManager = SoundManagerClass.getInstance();
