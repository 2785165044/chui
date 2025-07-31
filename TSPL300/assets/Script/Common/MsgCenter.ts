import { _decorator, EventTarget } from 'cc';
const { ccclass, property } = _decorator;
export default class MsgCenter {
    private eventTarget: EventTarget = new EventTarget();

    private static instance: MsgCenter = null;
    public static get Ins(): MsgCenter {
        if (this.instance == null) {
            this.instance = new MsgCenter();
        }
        return this.instance;
    }

    /**
   * 注册消息
   * @param name 
   * @param callback 
   */
    public register(name: string, callback: (...any: any[]) => void, target?: any): void {
        this.eventTarget.on(name, callback, target);
    }

    /**
     * 派发消息
     * @param name 
     */
    public dispatch(name: string, arg1?: any, arg2?: any, arg3?: any, arg4?: any, arg5?: any): void {
        this.eventTarget.emit(name, arg1, arg2, arg3, arg4, arg5);
    }

    /**
     * 注销消息
     * @param name 
     */
    public off(name: string, callback?: (...any: any[]) => void, target?: any): void {
        this.eventTarget.off(name, callback, target);
    }

}
