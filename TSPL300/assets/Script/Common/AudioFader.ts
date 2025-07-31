import { _decorator, Component, AudioSource, math } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('AudioFader')
export class AudioFader extends Component {
    @property(AudioSource)
    private audioSource: AudioSource = null;

    @property
    private fadeDuration: number = 1; // 淡入淡出持续时间，单位为秒

    private targetVolume: number = 1;
    private currentVolume: number = 0;
    private fadeStartTime: number = 0;

    public fadeIn() {
        this.targetVolume = 1;
        this.fadeStartTime = performance.now();
        this.schedule(this.updateVolume, 0.01);
    }

    public fadeOut() {
        this.targetVolume = 0;
        this.fadeStartTime = performance.now();
        this.schedule(this.updateVolume, 0.01);
    }

    private updateVolume() {
        const elapsed = (performance.now() - this.fadeStartTime) / 1000;
        const progress = math.clamp01(elapsed / this.fadeDuration);
        this.currentVolume = math.lerp(this.currentVolume, this.targetVolume, progress);
        this.audioSource.volume = this.currentVolume;

        if (progress >= 1) {
            this.unschedule(this.updateVolume);
        }
    }
}
