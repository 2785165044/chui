"use strict";
cc._RF.push(module, 'd4a50njbgtBhr+3FejyEl+F', 'SoundManager');
// Script/Manager/SoundManager.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SoundManager = void 0;
var ConstValue_1 = require("../Data/ConstValue");
var GameManager_1 = require("./GameManager");
var SoundManagerClass = /** @class */ (function () {
    function SoundManagerClass() {
        /**存放纹理资源的map */
        this.audioClipMap = new Map();
        /**播放语音列表 */
        this.audioList = new Map();
        /**播放音效列表 */
        this.effectList = new Map();
        /**音频统一的引用计数 */
        this.referenceList = new Map();
    }
    SoundManagerClass.getInstance = function () {
        if (this.instance === null) {
            this.instance = new SoundManagerClass();
        }
        return this.instance;
    };
    /**加载resources里audios的音频资源*/
    SoundManagerClass.prototype.preLoadResAudioClip = function (callback) {
        var _this = this;
        var path = ConstValue_1.ConstValue.AUDIO_DIR;
        cc.loader.loadResDir(path, cc.AudioClip, function (error, audioClips) {
            //错误处理
            if (error) {
                cc.error(error);
                callback(false);
                return;
            }
            // 获取完毕后装入 Map
            audioClips.forEach(function (value) {
                cc.log('缓存完毕！value.name == ' + value.name);
                _this.audioClipMap.set(value.name, value);
                _this.referenceList.set(value.name, 0);
            });
            // 执行回调返回进度
            callback(true);
        });
    };
    /**缓存所有音频资源 */
    SoundManagerClass.prototype.preLoadAllAudioClips = function (callback) {
        var isCompletedLoadResAudio = false;
        this.preLoadResAudioClip(function (isCompleted) {
            if (isCompleted) {
                cc.log("缓存完毕！preLoadResAudioClip");
            }
            isCompletedLoadResAudio = true;
            if (isCompletedLoadResAudio) {
                callback(true);
            }
        });
    };
    /**单独缓存某一个音频 */
    SoundManagerClass.prototype.preLoadAudioClip = function (clipName, callback) {
        var _this = this;
        var path = ConstValue_1.ConstValue.AUDIO_DIR + clipName;
        cc.loader.loadRes(path, cc.AudioClip, function (err, audioClip) {
            if (err) {
                cc.error(err);
                return;
            }
            _this.audioClipMap.set(clipName, audioClip);
            _this.referenceList.set(clipName, 0);
            cc.log('缓存完毕！audioClip.name == ' + audioClip.name);
            callback();
        });
    };
    // 获取音频资源
    SoundManagerClass.prototype.getAudioClip = function (clipName) {
        if (!this.audioClipMap.has(clipName)) {
            cc.log("\u672A\u7F13\u5B58\u7684\u97F3\u9891\u8D44\u6E90: " + clipName);
            return null;
        }
        else {
            return this.audioClipMap.get(clipName);
        }
    };
    /**
     * 播放语音
     * @param clipName 语音clip文件
     * @param loop 是否循环
     * @param interrupt 是否打断其他语音
     * @param isMutex 是否互斥（指音效和语音），默认false
     * @param volume 音量（0.0~1.0）
     * @param onFinishCallback 播放完成回调函数
     */
    SoundManagerClass.prototype.playAudio = function (clipName, loop, interrupt, isMutex, volume, onFinishCallback) {
        var _this = this;
        if (isMutex === void 0) { isMutex = false; }
        if (volume === void 0) { volume = 1; }
        if (onFinishCallback === void 0) { onFinishCallback = null; }
        if (!clipName || GameManager_1.GameManager.isMute || !GameManager_1.GameManager.canPlayAudio)
            return;
        interrupt && this.stopAllAudio();
        isMutex && this.stopAllEffect();
        var clip = null;
        if (typeof clipName === 'string') {
            clip = this.getAudioClip(clipName);
            if (clip == null) {
                this.preLoadAudioClip(clipName, function () {
                    clip = _this.audioClipMap.get(clipName);
                    _this.playAudio(clip, loop, interrupt, isMutex, volume, onFinishCallback);
                });
                return;
            }
        }
        else {
            clip = clipName;
        }
        var id = cc.audioEngine.play(clip, loop, volume);
        this.audioList.set(clip.name, id);
        //播放引用计数+1
        var referenceCount = this.referenceList.get(clip.name);
        this.referenceList.set(clip.name, referenceCount++);
        cc.audioEngine.setFinishCallback(id, function () {
            //引用计数为0删除资源
            var referenceCount = _this.referenceList.get(clip.name);
            if (referenceCount-- < 0) {
                _this.stopSoundByName(clip.name);
            }
            _this.referenceList.set(clip.name, referenceCount < 0 ? 0 : referenceCount);
            setTimeout(function () {
                onFinishCallback && onFinishCallback();
            }, 100);
        });
    };
    /**
     * 播放音效
     * @param clipName 语音clip文件
     * @param loop 是否循环
     * @param interrupt 是否打断其他音效
     * @param isMutex 是否互斥（指音效和语音），默认false
     * @param volume 音量（0.0~1.0）
     * @param onFinishCallback 播放完成回调函数
     */
    SoundManagerClass.prototype.playEffect = function (clipName, loop, interrupt, isMutex, volume, onFinishCallback) {
        var _this = this;
        if (isMutex === void 0) { isMutex = false; }
        if (volume === void 0) { volume = 1; }
        if (onFinishCallback === void 0) { onFinishCallback = null; }
        if (!clipName || GameManager_1.GameManager.isMute || !GameManager_1.GameManager.canPlayAudio)
            return;
        interrupt && this.stopAllEffect();
        isMutex && this.stopAllAudio();
        var clip = null;
        if (typeof clipName === 'string') {
            clip = this.getAudioClip(clipName);
            if (clip == null) {
                this.preLoadAudioClip(clipName, function () {
                    clip = _this.audioClipMap.get(clipName);
                    _this.playEffect(clip, loop, interrupt, isMutex, volume, onFinishCallback);
                });
                return;
            }
        }
        else {
            clip = clipName;
        }
        var id = cc.audioEngine.playEffect(clip, loop);
        cc.audioEngine.setVolume(id, volume);
        this.effectList.set(clip.name, id);
        //播放引用计数+1
        var referenceCount = this.referenceList.get(clip.name);
        this.referenceList.set(clip.name, referenceCount++);
        cc.audioEngine.setFinishCallback(id, function () {
            //引用计数为0删除资源
            var referenceCount = _this.referenceList.get(clip.name);
            if (referenceCount-- < 0) {
                _this.stopSoundByName(clip.name);
            }
            _this.referenceList.set(clip.name, referenceCount < 0 ? 0 : referenceCount);
            setTimeout(function () {
                onFinishCallback && onFinishCallback();
            }, 100);
        });
        ;
    };
    /**停止所有语音播放 */
    SoundManagerClass.prototype.stopAllAudio = function () {
        var _this = this;
        this.audioList.forEach(function (value, index) {
            _this.referenceList.set(index, 0);
            for (var i = 0; i <= value; i++) {
                cc.audioEngine.stop(i);
            }
        });
        this.audioList = new Map();
    };
    /**停止所有音效播放 */
    SoundManagerClass.prototype.stopAllEffect = function () {
        var _this = this;
        this.effectList.forEach(function (value, index, arr) {
            _this.referenceList.set(index, 0);
            for (var i = 0; i <= value; i++) {
                cc.audioEngine.stopEffect(i);
            }
        });
        this.effectList = new Map();
    };
    /**停止所有语音和音效的播放 */
    SoundManagerClass.prototype.stopAll = function () {
        this.stopAllAudio();
        this.stopAllEffect();
        cc.audioEngine.stopAll();
    };
    /**通过名字停止播放指定的音频 */
    SoundManagerClass.prototype.stopSoundByName = function (clipName) {
        this.referenceList.set(clipName, 0);
        var id = this.audioList.get(clipName);
        if (id != null && id != -1) {
            cc.audioEngine.stop(id);
            this.audioList.delete(clipName);
        }
        id = this.effectList.get(clipName);
        if (id != null && id != -1) {
            cc.audioEngine.stop(id);
            this.effectList.delete(clipName);
        }
    };
    /**某个音效是否正在播放 */
    SoundManagerClass.prototype.isPlaying = function (clipName) {
        var id = this.audioList.get(clipName);
        if (id != null && id != -1) {
            return true;
        }
        id = this.effectList.get(clipName);
        if (id != null && id != -1) {
            return true;
        }
        return false;
    };
    SoundManagerClass.instance = null;
    return SoundManagerClass;
}());
/**音频管理类 */
exports.SoundManager = SoundManagerClass.getInstance();

cc._RF.pop();