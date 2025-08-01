
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Main/super_html_playable.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '8a87avQYpBADpGRY0A9IbuL', 'super_html_playable');
// Script/Main/super_html_playable.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.super_html_playable = void 0;
/**
 * super-html playable adapter
 * @help https://store.cocos.com/app/detail/3657
 * @home https://github.com/magician-f/cocos-playable-demo
 * @author https://github.com/magician-f
 */
var super_html_playable = /** @class */ (function () {
    function super_html_playable() {
    }
    super_html_playable.prototype.download = function () {
        //@ts-ignore
        window.super_html && super_html.download();
    };
    super_html_playable.prototype.game_end = function () {
        //@ts-ignore
        window.super_html && super_html.game_end();
    };
    /**
     * 是否隐藏下载按钮，意味着使用平台注入的下载按钮
     * channel : google
     */
    super_html_playable.prototype.is_hide_download = function () {
        //@ts-ignore
        if (window.super_html && super_html.is_hide_download) {
            //@ts-ignore
            return super_html.is_hide_download();
        }
        return false;
    };
    /**
     * 设置商店地址
     * channel : unity
     * @param url https://play.google.com/store/apps/details?id=com.unity3d.auicreativetestapp
     */
    super_html_playable.prototype.set_google_play_url = function (url) {
        //@ts-ignore
        window.super_html && (super_html.google_play_url = url);
    };
    /**
     * 设置商店地址
     * channel : unity
     * @param url https://apps.apple.com/us/app/ad-testing/id1463016906
     */
    super_html_playable.prototype.set_app_store_url = function (url) {
        //@ts-ignore
        window.super_html && (super_html.appstore_url = url);
    };
    return super_html_playable;
}());
exports.super_html_playable = super_html_playable;
exports.default = new super_html_playable();

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxNYWluXFxzdXBlcl9odG1sX3BsYXlhYmxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7OztHQUtHO0FBQ0g7SUFBQTtJQTJDQSxDQUFDO0lBMUNHLHNDQUFRLEdBQVI7UUFDSSxZQUFZO1FBQ1osTUFBTSxDQUFDLFVBQVUsSUFBSSxVQUFVLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDL0MsQ0FBQztJQUVELHNDQUFRLEdBQVI7UUFDSSxZQUFZO1FBQ1osTUFBTSxDQUFDLFVBQVUsSUFBSSxVQUFVLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDL0MsQ0FBQztJQUVEOzs7T0FHRztJQUNILDhDQUFnQixHQUFoQjtRQUNJLFlBQVk7UUFDWixJQUFJLE1BQU0sQ0FBQyxVQUFVLElBQUksVUFBVSxDQUFDLGdCQUFnQixFQUFFO1lBQ2xELFlBQVk7WUFDWixPQUFPLFVBQVUsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1NBQ3hDO1FBQ0QsT0FBTyxLQUFLLENBQUM7SUFDakIsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxpREFBbUIsR0FBbkIsVUFBb0IsR0FBVztRQUMzQixZQUFZO1FBQ1osTUFBTSxDQUFDLFVBQVUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxlQUFlLEdBQUcsR0FBRyxDQUFDLENBQUM7SUFDNUQsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCwrQ0FBaUIsR0FBakIsVUFBa0IsR0FBVztRQUN6QixZQUFZO1FBQ1osTUFBTSxDQUFDLFVBQVUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxZQUFZLEdBQUcsR0FBRyxDQUFDLENBQUM7SUFDekQsQ0FBQztJQUNMLDBCQUFDO0FBQUQsQ0EzQ0EsQUEyQ0MsSUFBQTtBQTNDWSxrREFBbUI7QUE0Q2hDLGtCQUFlLElBQUksbUJBQW1CLEVBQUUsQ0FBQyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBzdXBlci1odG1sIHBsYXlhYmxlIGFkYXB0ZXJcclxuICogQGhlbHAgaHR0cHM6Ly9zdG9yZS5jb2Nvcy5jb20vYXBwL2RldGFpbC8zNjU3XHJcbiAqIEBob21lIGh0dHBzOi8vZ2l0aHViLmNvbS9tYWdpY2lhbi1mL2NvY29zLXBsYXlhYmxlLWRlbW9cclxuICogQGF1dGhvciBodHRwczovL2dpdGh1Yi5jb20vbWFnaWNpYW4tZlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIHN1cGVyX2h0bWxfcGxheWFibGUge1xyXG4gICAgZG93bmxvYWQoKSB7ICAgICAgICBcclxuICAgICAgICAvL0B0cy1pZ25vcmVcclxuICAgICAgICB3aW5kb3cuc3VwZXJfaHRtbCAmJiBzdXBlcl9odG1sLmRvd25sb2FkKCk7ICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBnYW1lX2VuZCgpIHsgICAgICAgIFxyXG4gICAgICAgIC8vQHRzLWlnbm9yZVxyXG4gICAgICAgIHdpbmRvdy5zdXBlcl9odG1sICYmIHN1cGVyX2h0bWwuZ2FtZV9lbmQoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOaYr+WQpumakOiXj+S4i+i9veaMiemSru+8jOaEj+WRs+edgOS9v+eUqOW5s+WPsOazqOWFpeeahOS4i+i9veaMiemSrlxyXG4gICAgICogY2hhbm5lbCA6IGdvb2dsZVxyXG4gICAgICovXHJcbiAgICBpc19oaWRlX2Rvd25sb2FkKCkge1xyXG4gICAgICAgIC8vQHRzLWlnbm9yZVxyXG4gICAgICAgIGlmICh3aW5kb3cuc3VwZXJfaHRtbCAmJiBzdXBlcl9odG1sLmlzX2hpZGVfZG93bmxvYWQpIHtcclxuICAgICAgICAgICAgLy9AdHMtaWdub3JlXHJcbiAgICAgICAgICAgIHJldHVybiBzdXBlcl9odG1sLmlzX2hpZGVfZG93bmxvYWQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6K6+572u5ZWG5bqX5Zyw5Z2AXHJcbiAgICAgKiBjaGFubmVsIDogdW5pdHlcclxuICAgICAqIEBwYXJhbSB1cmwgaHR0cHM6Ly9wbGF5Lmdvb2dsZS5jb20vc3RvcmUvYXBwcy9kZXRhaWxzP2lkPWNvbS51bml0eTNkLmF1aWNyZWF0aXZldGVzdGFwcFxyXG4gICAgICovXHJcbiAgICBzZXRfZ29vZ2xlX3BsYXlfdXJsKHVybDogc3RyaW5nKSB7XHJcbiAgICAgICAgLy9AdHMtaWdub3JlXHJcbiAgICAgICAgd2luZG93LnN1cGVyX2h0bWwgJiYgKHN1cGVyX2h0bWwuZ29vZ2xlX3BsYXlfdXJsID0gdXJsKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOiuvue9ruWVhuW6l+WcsOWdgFxyXG4gICAgICogY2hhbm5lbCA6IHVuaXR5XHJcbiAgICAgKiBAcGFyYW0gdXJsIGh0dHBzOi8vYXBwcy5hcHBsZS5jb20vdXMvYXBwL2FkLXRlc3RpbmcvaWQxNDYzMDE2OTA2XHJcbiAgICAgKi9cclxuICAgIHNldF9hcHBfc3RvcmVfdXJsKHVybDogc3RyaW5nKSB7XHJcbiAgICAgICAgLy9AdHMtaWdub3JlXHJcbiAgICAgICAgd2luZG93LnN1cGVyX2h0bWwgJiYgKHN1cGVyX2h0bWwuYXBwc3RvcmVfdXJsID0gdXJsKTtcclxuICAgIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBuZXcgc3VwZXJfaHRtbF9wbGF5YWJsZSgpO1xyXG4iXX0=