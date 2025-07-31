import { Component, ResolutionPolicy, _decorator, view } from "cc";
import { ViewResize } from "./ViewResize";
import MsgCenter from "../Common/MsgCenter";
import MsgBehavior from "../Common/MsgBehavior";

const { ccclass, property } = _decorator;

@ccclass
export default class FitScreenUtil extends Component {
  protected onLoad(): void {
    // 窗口发生变化时适配
    ViewResize.instance.reSizeCallBackAdd(() => {
      this._adapt();
    }, this);
  }

  protected start(): void {
    // 主动调用一次
    this._adapt();
  }

  private _adapt(): void {
    let frameSize = view.getVisibleSizeInPixel();
    if (frameSize.width > frameSize.height) {
      //横屏
      this._setFitHeight();
    } else {
      //竖屏
      if (frameSize.height / frameSize.width < 1.1) {
        this._setFitHeight();
      } else {
        this._setFitWidth();
      }
    }
    // let screenRatio = view.getVisibleSizeInPixel().width / view.getVisibleSizeInPixel().height;
    // // 判断屏幕宽高比
    // if (screenRatio <= 1) {
    //   this._setFitWidth();
    // } else {
    //   // 此屏幕宽度大于高度
    //   this._setFitHeight();
    // }
  }

  private _setFitHeight(): void {
    // console.log("FitHeight");
    view.setDesignResolutionSize(1280, 720, ResolutionPolicy.FIXED_HEIGHT);
    MsgCenter.Ins.dispatch(MsgBehavior.SCREEN_H);

  }

  private _setFitWidth(): void {
    // console.log("FitWidth");
    view.setDesignResolutionSize(720, 1280, ResolutionPolicy.FIXED_WIDTH);
    MsgCenter.Ins.dispatch(MsgBehavior.SCREEN_V);

  }
}
