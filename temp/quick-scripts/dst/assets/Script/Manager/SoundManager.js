
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Manager/SoundManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxNYW5hZ2VyXFxTb3VuZE1hbmFnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsaURBQWdEO0FBQ2hELDZDQUE0QztBQUU1QztJQUFBO1FBU0ksZ0JBQWdCO1FBQ1IsaUJBQVksR0FBOEIsSUFBSSxHQUFHLEVBQUUsQ0FBQztRQUM1RCxZQUFZO1FBQ0osY0FBUyxHQUF3QixJQUFJLEdBQUcsRUFBRSxDQUFDO1FBQ25ELFlBQVk7UUFDSixlQUFVLEdBQXdCLElBQUksR0FBRyxFQUFFLENBQUM7UUFDcEQsZUFBZTtRQUNQLGtCQUFhLEdBQXdCLElBQUksR0FBRyxFQUFFLENBQUM7SUErTjNELENBQUM7SUE3T2lCLDZCQUFXLEdBQXpCO1FBQ0ksSUFBSSxJQUFJLENBQUMsUUFBUSxLQUFLLElBQUksRUFBRTtZQUN4QixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksaUJBQWlCLEVBQUUsQ0FBQztTQUMzQztRQUNELE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUN6QixDQUFDO0lBV0QsNEJBQTRCO0lBQ3JCLCtDQUFtQixHQUExQixVQUEyQixRQUF3QztRQUFuRSxpQkFrQkM7UUFqQkcsSUFBSSxJQUFJLEdBQUcsdUJBQVUsQ0FBQyxTQUFTLENBQUM7UUFDaEMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxTQUFTLEVBQUUsVUFBQyxLQUFLLEVBQUUsVUFBMEI7WUFDdkUsTUFBTTtZQUNOLElBQUksS0FBSyxFQUFFO2dCQUNQLEVBQUUsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ2hCLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDaEIsT0FBTzthQUNWO1lBQ0QsY0FBYztZQUNkLFVBQVUsQ0FBQyxPQUFPLENBQUMsVUFBQyxLQUFLO2dCQUNyQixFQUFFLENBQUMsR0FBRyxDQUFDLHFCQUFxQixHQUFHLEtBQUssQ0FB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RCx3QkFBQztDQS9PRCxBQStPQyxJQUFBO0FBRUQsV0FBVztBQUNFLFFBQUEsWUFBWSxHQUFHLGlCQUFpQixDQUFDLFdBQVcsRUFBRSxDQUFDIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29uc3RWYWx1ZSB9IGZyb20gXCIuLi9EYXRhL0NvbnN0VmFsdWVcIjtcclxuaW1wb3J0IHsgR2FtZU1hbmFnZXIgfSBmcm9tIFwiLi9HYW1lTWFuYWdlclwiO1xyXG5cclxuY2xhc3MgU291bmRNYW5hZ2VyQ2xhc3Mge1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgaW5zdGFuY2U6IFNvdW5kTWFuYWdlckNsYXNzID0gbnVsbDtcclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0SW5zdGFuY2UoKTogU291bmRNYW5hZ2VyQ2xhc3Mge1xyXG4gICAgICAgIGlmICh0aGlzLmluc3RhbmNlID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaW5zdGFuY2UgPSBuZXcgU291bmRNYW5hZ2VyQ2xhc3MoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaW5zdGFuY2U7XHJcbiAgICB9XHJcblxyXG4gICAgLyoq5a2Y5pS+57q555CG6LWE5rqQ55qEbWFwICovXHJcbiAgICBwcml2YXRlIGF1ZGlvQ2xpcE1hcDogTWFwPHN0cmluZywgY2MuQXVkaW9DbGlwPiA9IG5ldyBNYXAoKTtcclxuICAgIC8qKuaSreaUvuivremfs+WIl+ihqCAqL1xyXG4gICAgcHJpdmF0ZSBhdWRpb0xpc3Q6IE1hcDxzdHJpbmcsIG51bWJlcj4gPSBuZXcgTWFwKCk7XHJcbiAgICAvKirmkq3mlL7pn7PmlYjliJfooaggKi9cclxuICAgIHByaXZhdGUgZWZmZWN0TGlzdDogTWFwPHN0cmluZywgbnVtYmVyPiA9IG5ldyBNYXAoKTtcclxuICAgIC8qKumfs+mikee7n+S4gOeahOW8leeUqOiuoeaVsCAqL1xyXG4gICAgcHJpdmF0ZSByZWZlcmVuY2VMaXN0OiBNYXA8c3RyaW5nLCBudW1iZXI+ID0gbmV3IE1hcCgpO1xyXG5cclxuICAgIC8qKuWKoOi9vXJlc291cmNlc+mHjGF1ZGlvc+eahOmfs+mikei1hOa6kCovXHJcbiAgICBwdWJsaWMgcHJlTG9hZFJlc0F1ZGlvQ2xpcChjYWxsYmFjazogKGlzQ29tcGxldGVkOiBib29sZWFuKSA9PiB2b2lkKSB7XHJcbiAgICAgICAgbGV0IHBhdGggPSBDb25zdFZhbHVlLkFVRElPX0RJUjtcclxuICAgICAgICBjYy5sb2FkZXIubG9hZFJlc0RpcihwYXRoLCBjYy5BdWRpb0NsaXAsIChlcnJvciwgYXVkaW9DbGlwczogY2MuQXVkaW9DbGlwW10pID0+IHtcclxuICAgICAgICAgICAgLy/plJnor6/lpITnkIZcclxuICAgICAgICAgICAgaWYgKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICBjYy5lcnJvcihlcnJvcik7XHJcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8g6I635Y+W5a6M5q+V5ZCO6KOF5YWlIE1hcFxyXG4gICAgICAgICAgICBhdWRpb0NsaXBzLmZvckVhY2goKHZhbHVlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjYy5sb2coJ+e8k+WtmOWujOavle+8gXZhbHVlLm5hbWUgPT0gJyArIHZhbHVlLm5hbWUpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hdWRpb0NsaXBNYXAuc2V0KHZhbHVlLm5hbWUsIHZhbHVlKTtcclxuICAgICAgICAgICAgICAgIHRoaXMucmVmZXJlbmNlTGlzdC5zZXQodmFsdWUubmFtZSwgMCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAvLyDmiafooYzlm57osIPov5Tlm57ov5vluqZcclxuICAgICAgICAgICAgY2FsbGJhY2sodHJ1ZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoq57yT5a2Y5omA5pyJ6Z+z6aKR6LWE5rqQICovXHJcbiAgICBwdWJsaWMgcHJlTG9hZEFsbEF1ZGlvQ2xpcHMoY2FsbGJhY2s6IChpc0NvbXBsZXRlZDogYm9vbGVhbikgPT4gdm9pZCkge1xyXG4gICAgICAgIGxldCBpc0NvbXBsZXRlZExvYWRSZXNBdWRpbyA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMucHJlTG9hZFJlc0F1ZGlvQ2xpcCgoaXNDb21wbGV0ZWQpID0+IHtcclxuICAgICAgICAgICAgaWYgKGlzQ29tcGxldGVkKSB7XHJcbiAgICAgICAgICAgICAgICBjYy5sb2coXCLnvJPlrZjlrozmr5XvvIFwcmVMb2FkUmVzQXVkaW9DbGlwXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlzQ29tcGxldGVkTG9hZFJlc0F1ZGlvID0gdHJ1ZTtcclxuICAgICAgICAgICAgaWYgKGlzQ29tcGxldGVkTG9hZFJlc0F1ZGlvKSB7XHJcbiAgICAgICAgICAgICAgICBjYWxsYmFjayh0cnVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKuWNleeLrOe8k+WtmOafkOS4gOS4qumfs+mikSAqL1xyXG4gICAgcHVibGljIHByZUxvYWRBdWRpb0NsaXAoY2xpcE5hbWU6IHN0cmluZywgY2FsbGJhY2s6ICgpID0+IHZvaWQpIHtcclxuICAgICAgICBsZXQgcGF0aCA9IENvbnN0VmFsdWUuQVVESU9fRElSICsgY2xpcE5hbWU7XHJcbiAgICAgICAgY2MubG9hZGVyLmxvYWRSZXMocGF0aCwgY2MuQXVkaW9DbGlwLCAoZXJyLCBhdWRpb0NsaXA6IGNjLkF1ZGlvQ2xpcCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICBjYy5lcnJvcihlcnIpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuYXVkaW9DbGlwTWFwLnNldChjbGlwTmFtZSwgYXVkaW9DbGlwKTtcclxuICAgICAgICAgICAgdGhpcy5yZWZlcmVuY2VMaXN0LnNldChjbGlwTmFtZSwgMCk7XHJcbiAgICAgICAgICAgIGNjLmxvZygn57yT5a2Y5a6M5q+V77yBYXVkaW9DbGlwLm5hbWUgPT0gJyArIGF1ZGlvQ2xpcC5uYW1lKTtcclxuICAgICAgICAgICAgY2FsbGJhY2soKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyDojrflj5bpn7PpopHotYTmupBcclxuICAgIHB1YmxpYyBnZXRBdWRpb0NsaXAoY2xpcE5hbWU6IHN0cmluZyk6IGNjLkF1ZGlvQ2xpcCB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmF1ZGlvQ2xpcE1hcC5oYXMoY2xpcE5hbWUpKSB7XHJcbiAgICAgICAgICAgIGNjLmxvZyhg5pyq57yT5a2Y55qE6Z+z6aKR6LWE5rqQOiAke2NsaXBOYW1lfWApO1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5hdWRpb0NsaXBNYXAuZ2V0KGNsaXBOYW1lKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmkq3mlL7or63pn7NcclxuICAgICAqIEBwYXJhbSBjbGlwTmFtZSDor63pn7NjbGlw5paH5Lu2XHJcbiAgICAgKiBAcGFyYW0gbG9vcCDmmK/lkKblvqrnjq9cclxuICAgICAqIEBwYXJhbSBpbnRlcnJ1cHQg5piv5ZCm5omT5pat5YW25LuW6K+t6Z+zXHJcbiAgICAgKiBAcGFyYW0gaXNNdXRleCDmmK/lkKbkupLmlqXvvIjmjIfpn7PmlYjlkozor63pn7PvvInvvIzpu5jorqRmYWxzZVxyXG4gICAgICogQHBhcmFtIHZvbHVtZSDpn7Pph4/vvIgwLjB+MS4w77yJXHJcbiAgICAgKiBAcGFyYW0gb25GaW5pc2hDYWxsYmFjayDmkq3mlL7lrozmiJDlm57osIPlh73mlbBcclxuICAgICAqL1xyXG4gICAgcHVibGljIHBsYXlBdWRpbyhcclxuICAgICAgICBjbGlwTmFtZTogc3RyaW5nIHwgY2MuQXVkaW9DbGlwLFxyXG4gICAgICAgIGxvb3A6IGJvb2xlYW4sXHJcbiAgICAgICAgaW50ZXJydXB0OiBib29sZWFuLFxyXG4gICAgICAgIGlzTXV0ZXg6IGJvb2xlYW4gPSBmYWxzZSxcclxuICAgICAgICB2b2x1bWU6IG51bWJlciA9IDEsXHJcbiAgICAgICAgb25GaW5pc2hDYWxsYmFjazogRnVuY3Rpb24gPSBudWxsXHJcbiAgICApIHtcclxuICAgICAgICBpZiAoIWNsaXBOYW1lIHx8IEdhbWVNYW5hZ2VyLmlzTXV0ZSB8fCAhR2FtZU1hbmFnZXIuY2FuUGxheUF1ZGlvKSByZXR1cm47XHJcbiAgICAgICAgaW50ZXJydXB0ICYmIHRoaXMuc3RvcEFsbEF1ZGlvKCk7XHJcbiAgICAgICAgaXNNdXRleCAmJiB0aGlzLnN0b3BBbGxFZmZlY3QoKTtcclxuICAgICAgICBsZXQgY2xpcCA9IG51bGw7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBjbGlwTmFtZSA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgICAgICAgY2xpcCA9IHRoaXMuZ2V0QXVkaW9DbGlwKGNsaXBOYW1lKTtcclxuICAgICAgICAgICAgaWYgKGNsaXAgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wcmVMb2FkQXVkaW9DbGlwKGNsaXBOYW1lLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2xpcCA9IHRoaXMuYXVkaW9DbGlwTWFwLmdldChjbGlwTmFtZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGF5QXVkaW8oY2xpcCwgbG9vcCwgaW50ZXJydXB0LCBpc011dGV4LCB2b2x1bWUsIG9uRmluaXNoQ2FsbGJhY2spO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjbGlwID0gY2xpcE5hbWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgaWQgPSBjYy5hdWRpb0VuZ2luZS5wbGF5KGNsaXAsIGxvb3AsIHZvbHVtZSk7XHJcbiAgICAgICAgdGhpcy5hdWRpb0xpc3Quc2V0KGNsaXAubmFtZSwgaWQpO1xyXG4gICAgICAgIC8v5pKt5pS+5byV55So6K6h5pWwKzFcclxuICAgICAgICBsZXQgcmVmZXJlbmNlQ291bnQgPSB0aGlzLnJlZmVyZW5jZUxpc3QuZ2V0KGNsaXAubmFtZSk7XHJcbiAgICAgICAgdGhpcy5yZWZlcmVuY2VMaXN0LnNldChjbGlwLm5hbWUsIHJlZmVyZW5jZUNvdW50KyspO1xyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnNldEZpbmlzaENhbGxiYWNrKGlkLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIC8v5byV55So6K6h5pWw5Li6MOWIoOmZpOi1hOa6kFxyXG4gICAgICAgICAgICBsZXQgcmVmZXJlbmNlQ291bnQgPSB0aGlzLnJlZmVyZW5jZUxpc3QuZ2V0KGNsaXAubmFtZSk7XHJcbiAgICAgICAgICAgIGlmIChyZWZlcmVuY2VDb3VudC0tIDwgMCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zdG9wU291bmRCeU5hbWUoY2xpcC5uYW1lKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLnJlZmVyZW5jZUxpc3Quc2V0KGNsaXAubmFtZSwgcmVmZXJlbmNlQ291bnQgPCAwID8gMCA6IHJlZmVyZW5jZUNvdW50KTtcclxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBvbkZpbmlzaENhbGxiYWNrICYmIG9uRmluaXNoQ2FsbGJhY2soKTtcclxuICAgICAgICAgICAgfSwgMTAwKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOaSreaUvumfs+aViFxyXG4gICAgICogQHBhcmFtIGNsaXBOYW1lIOivremfs2NsaXDmlofku7ZcclxuICAgICAqIEBwYXJhbSBsb29wIOaYr+WQpuW+queOr1xyXG4gICAgICogQHBhcmFtIGludGVycnVwdCDmmK/lkKbmiZPmlq3lhbbku5bpn7PmlYhcclxuICAgICAqIEBwYXJhbSBpc011dGV4IOaYr+WQpuS6kuaWpe+8iOaMh+mfs+aViOWSjOivremfs++8ie+8jOm7mOiupGZhbHNlXHJcbiAgICAgKiBAcGFyYW0gdm9sdW1lIOmfs+mHj++8iDAuMH4xLjDvvIlcclxuICAgICAqIEBwYXJhbSBvbkZpbmlzaENhbGxiYWNrIOaSreaUvuWujOaIkOWbnuiwg+WHveaVsFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgcGxheUVmZmVjdChcclxuICAgICAgICBjbGlwTmFtZTogc3RyaW5nIHwgY2MuQXVkaW9DbGlwLFxyXG4gICAgICAgIGxvb3A6IGJvb2xlYW4sXHJcbiAgICAgICAgaW50ZXJydXB0OiBib29sZWFuLFxyXG4gICAgICAgIGlzTXV0ZXg6IGJvb2xlYW4gPSBmYWxzZSxcclxuICAgICAgICB2b2x1bWU6IG51bWJlciA9IDEsXHJcbiAgICAgICAgb25GaW5pc2hDYWxsYmFjazogRnVuY3Rpb24gPSBudWxsXHJcbiAgICApIHtcclxuICAgICAgICBpZiAoIWNsaXBOYW1lIHx8IEdhbWVNYW5hZ2VyLmlzTXV0ZSB8fCAhR2FtZU1hbmFnZXIuY2FuUGxheUF1ZGlvKSByZXR1cm47XHJcbiAgICAgICAgaW50ZXJydXB0ICYmIHRoaXMuc3RvcEFsbEVmZmVjdCgpO1xyXG4gICAgICAgIGlzTXV0ZXggJiYgdGhpcy5zdG9wQWxsQXVkaW8oKTtcclxuICAgICAgICBsZXQgY2xpcCA9IG51bGw7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBjbGlwTmFtZSA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgICAgICAgY2xpcCA9IHRoaXMuZ2V0QXVkaW9DbGlwKGNsaXBOYW1lKTtcclxuICAgICAgICAgICAgaWYgKGNsaXAgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wcmVMb2FkQXVkaW9DbGlwKGNsaXBOYW1lLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2xpcCA9IHRoaXMuYXVkaW9DbGlwTWFwLmdldChjbGlwTmFtZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGF5RWZmZWN0KGNsaXAsIGxvb3AsIGludGVycnVwdCwgaXNNdXRleCwgdm9sdW1lLCBvbkZpbmlzaENhbGxiYWNrKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY2xpcCA9IGNsaXBOYW1lO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgaWQgPSBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KGNsaXAsIGxvb3ApO1xyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnNldFZvbHVtZShpZCwgdm9sdW1lKVxyXG4gICAgICAgIHRoaXMuZWZmZWN0TGlzdC5zZXQoY2xpcC5uYW1lLCBpZCk7XHJcbiAgICAgICAgLy/mkq3mlL7lvJXnlKjorqHmlbArMVxyXG4gICAgICAgIGxldCByZWZlcmVuY2VDb3VudCA9IHRoaXMucmVmZXJlbmNlTGlzdC5nZXQoY2xpcC5uYW1lKTtcclxuICAgICAgICB0aGlzLnJlZmVyZW5jZUxpc3Quc2V0KGNsaXAubmFtZSwgcmVmZXJlbmNlQ291bnQrKyk7XHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUuc2V0RmluaXNoQ2FsbGJhY2soaWQsICgpID0+IHtcclxuICAgICAgICAgICAgLy/lvJXnlKjorqHmlbDkuLow5Yig6Zmk6LWE5rqQXHJcbiAgICAgICAgICAgIGxldCByZWZlcmVuY2VDb3VudCA9IHRoaXMucmVmZXJlbmNlTGlzdC5nZXQoY2xpcC5uYW1lKTtcclxuICAgICAgICAgICAgaWYgKHJlZmVyZW5jZUNvdW50LS0gPCAwKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0b3BTb3VuZEJ5TmFtZShjbGlwLm5hbWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMucmVmZXJlbmNlTGlzdC5zZXQoY2xpcC5uYW1lLCByZWZlcmVuY2VDb3VudCA8IDAgPyAwIDogcmVmZXJlbmNlQ291bnQpO1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgIG9uRmluaXNoQ2FsbGJhY2sgJiYgb25GaW5pc2hDYWxsYmFjaygpO1xyXG4gICAgICAgICAgICB9LCAxMDApO1xyXG4gICAgICAgIH0pOztcclxuICAgIH1cclxuXHJcbiAgICAvKirlgZzmraLmiYDmnInor63pn7Pmkq3mlL4gKi9cclxuICAgIHB1YmxpYyBzdG9wQWxsQXVkaW8oKSB7XHJcbiAgICAgICAgdGhpcy5hdWRpb0xpc3QuZm9yRWFjaCgodmFsdWUsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMucmVmZXJlbmNlTGlzdC5zZXQoaW5kZXgsIDApO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8PSB2YWx1ZTsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5zdG9wKGkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5hdWRpb0xpc3QgPSBuZXcgTWFwKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoq5YGc5q2i5omA5pyJ6Z+z5pWI5pKt5pS+ICovXHJcbiAgICBwdWJsaWMgc3RvcEFsbEVmZmVjdCgpIHtcclxuICAgICAgICB0aGlzLmVmZmVjdExpc3QuZm9yRWFjaCgodmFsdWUsIGluZGV4LCBhcnIpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5yZWZlcmVuY2VMaXN0LnNldChpbmRleCwgMCk7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDw9IHZhbHVlOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnN0b3BFZmZlY3QoaSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLmVmZmVjdExpc3QgPSBuZXcgTWFwKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoq5YGc5q2i5omA5pyJ6K+t6Z+z5ZKM6Z+z5pWI55qE5pKt5pS+ICovXHJcbiAgICBwdWJsaWMgc3RvcEFsbCgpIHtcclxuICAgICAgICB0aGlzLnN0b3BBbGxBdWRpbygpO1xyXG4gICAgICAgIHRoaXMuc3RvcEFsbEVmZmVjdCgpO1xyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnN0b3BBbGwoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKirpgJrov4flkI3lrZflgZzmraLmkq3mlL7mjIflrprnmoTpn7PpopEgKi9cclxuICAgIHB1YmxpYyBzdG9wU291bmRCeU5hbWUoY2xpcE5hbWU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMucmVmZXJlbmNlTGlzdC5zZXQoY2xpcE5hbWUsIDApO1xyXG4gICAgICAgIGxldCBpZCA9IHRoaXMuYXVkaW9MaXN0LmdldChjbGlwTmFtZSk7XHJcbiAgICAgICAgaWYgKGlkICE9IG51bGwgJiYgaWQgIT0gLTEpIHtcclxuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUuc3RvcChpZCk7XHJcbiAgICAgICAgICAgIHRoaXMuYXVkaW9MaXN0LmRlbGV0ZShjbGlwTmFtZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlkID0gdGhpcy5lZmZlY3RMaXN0LmdldChjbGlwTmFtZSk7XHJcbiAgICAgICAgaWYgKGlkICE9IG51bGwgJiYgaWQgIT0gLTEpIHtcclxuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUuc3RvcChpZCk7XHJcbiAgICAgICAgICAgIHRoaXMuZWZmZWN0TGlzdC5kZWxldGUoY2xpcE5hbWUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKirmn5DkuKrpn7PmlYjmmK/lkKbmraPlnKjmkq3mlL4gKi9cclxuICAgIHB1YmxpYyBpc1BsYXlpbmcoY2xpcE5hbWU6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gICAgICAgIGxldCBpZCA9IHRoaXMuYXVkaW9MaXN0LmdldChjbGlwTmFtZSk7XHJcbiAgICAgICAgaWYgKGlkICE9IG51bGwgJiYgaWQgIT0gLTEpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlkID0gdGhpcy5lZmZlY3RMaXN0LmdldChjbGlwTmFtZSk7XHJcbiAgICAgICAgaWYgKGlkICE9IG51bGwgJiYgaWQgIT0gLTEpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbi8qKumfs+mikeeuoeeQhuexuyAqL1xyXG5leHBvcnQgY29uc3QgU291bmRNYW5hZ2VyID0gU291bmRNYW5hZ2VyQ2xhc3MuZ2V0SW5zdGFuY2UoKTtcclxuIl19