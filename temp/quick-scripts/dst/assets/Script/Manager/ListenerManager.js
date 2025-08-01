
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Manager/ListenerManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '5f524xFqgpP9LNI2s3bjxJ8', 'ListenerManager');
// Script/Manager/ListenerManager.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListenerManager = void 0;
var ListenerManagerClass = /** @class */ (function () {
    function ListenerManagerClass() {
        this.handle = {};
    }
    ListenerManagerClass.getInstance = function () {
        if (null === this._instance) {
            this._instance = new ListenerManagerClass();
        }
        return this._instance;
    };
    ListenerManagerClass.prototype.on = function (eventName, cb, target) {
        if (this.hasEvent(eventName, cb, target)) {
            return;
        }
        if (!this.handle[eventName]) {
            this.handle[eventName] = [];
        }
        var data = { func: cb, target: target };
        this.handle[eventName].push(data);
    };
    ListenerManagerClass.prototype.off = function (eventName, cb, target) {
        var list = this.handle[eventName];
        if (!list || list.length <= 0) {
            return;
        }
        for (var i = 0; i < list.length; i++) {
            var event = list[i];
            if (cb == event.func && (!target || target == event.target)) {
                list.splice(i, 1);
                break;
            }
        }
    };
    ListenerManagerClass.prototype.dispatch = function (eventName) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        var list = this.handle[eventName];
        if (!list || list.length <= 0) {
            return;
        }
        for (var i = 0; i < list.length; i++) {
            var event = list[i];
            event.func.apply(event.target, args);
        }
    };
    ListenerManagerClass.prototype.removeAll = function (target) {
        if (target) {
            for (var key in this.handle) {
                var list = this.handle[key];
                for (var i = 0, l = list.length; i < l; i++) {
                    var event = list[i];
                    if (event.target == target) {
                        list.splice(i, 1);
                        if (l > 0) {
                            l--;
                        }
                        i--;
                    }
                }
            }
        }
        else {
            for (var key in this.handle) {
                var list = this.handle[key];
                while (list.length > 0) {
                    list.pop();
                }
            }
        }
    };
    ListenerManagerClass.prototype.hasEvent = function (eventName, cb, target) {
        var list = this.handle[eventName];
        if (!list || list.length <= 0) {
            return false;
        }
        for (var i = 0; i < list.length; i++) {
            var event = list[i];
            if (cb == event.func && (!target || target == event.target)) {
                return true;
            }
        }
        return false;
    };
    ListenerManagerClass._instance = null;
    return ListenerManagerClass;
}());
exports.ListenerManager = ListenerManagerClass.getInstance();

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxNYW5hZ2VyXFxMaXN0ZW5lck1hbmFnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBU0E7SUFBQTtRQUVZLFdBQU0sR0FBVyxFQUFFLENBQUM7SUFvRmhDLENBQUM7SUFsRmlCLGdDQUFXLEdBQXpCO1FBQ0ksSUFBSSxJQUFJLEtBQUssSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUN6QixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksb0JBQW9CLEVBQUUsQ0FBQztTQUMvQztRQUNELE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUMxQixDQUFDO0lBRU0saUNBQUUsR0FBVCxVQUFVLFNBQWlCLEVBQUUsRUFBWSxFQUFFLE1BQVc7UUFDbEQsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsRUFBRSxFQUFFLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDdEMsT0FBTztTQUNWO1FBRUQsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLEVBQUU7WUFDekIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFLENBQUM7U0FDL0I7UUFDRCxJQUFNLElBQUksR0FBZSxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsTUFBTSxRQUFBLEVBQUUsQ0FBQztRQUM5QyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN0QyxDQUFDO0lBRU0sa0NBQUcsR0FBVixVQUFXLFNBQWlCLEVBQUUsRUFBWSxFQUFFLE1BQVk7UUFDcEQsSUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNwQyxJQUFJLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxNQUFNLElBQUksQ0FBQyxFQUFFO1lBQzNCLE9BQU87U0FDVjtRQUNELEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFF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LEVBQUU7Z0JBQ3pELE9BQU8sSUFBSSxDQUFDO2FBQ2Y7U0FDSjtRQUNELE9BQU8sS0FBSyxDQUFDO0lBQ2pCLENBQUM7SUFwRmMsOEJBQVMsR0FBeUIsSUFBSSxDQUFDO0lBcUYxRCwyQkFBQztDQXRGRCxBQXNGQyxJQUFBO0FBRVksUUFBQSxlQUFlLEdBQUcsb0JBQW9CLENBQUMsV0FBVyxFQUFFLENBQUMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbnRlcmZhY2UgSUV2ZW50RGF0YSB7XHJcbiAgICBmdW5jOiBGdW5jdGlvbjtcclxuICAgIHRhcmdldDogYW55O1xyXG59XHJcblxyXG5pbnRlcmZhY2UgSUV2ZW50IHtcclxuICAgIFtldmVudE5hbWU6IHN0cmluZ106IElFdmVudERhdGFbXTtcclxufVxyXG5cclxuY2xhc3MgTGlzdGVuZXJNYW5hZ2VyQ2xhc3Mge1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgX2luc3RhbmNlOiBMaXN0ZW5lck1hbmFnZXJDbGFzcyA9IG51bGw7XHJcbiAgICBwcml2YXRlIGhhbmRsZTogSUV2ZW50ID0ge307XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBnZXRJbnN0YW5jZSgpOiBMaXN0ZW5lck1hbmFnZXJDbGFzcyB7XHJcbiAgICAgICAgaWYgKG51bGwgPT09IHRoaXMuX2luc3RhbmNlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2luc3RhbmNlID0gbmV3IExpc3RlbmVyTWFuYWdlckNsYXNzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLl9pbnN0YW5jZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgb24oZXZlbnROYW1lOiBzdHJpbmcsIGNiOiBGdW5jdGlvbiwgdGFyZ2V0OiBhbnkpIHtcclxuICAgICAgICBpZiAodGhpcy5oYXNFdmVudChldmVudE5hbWUsIGNiLCB0YXJnZXQpKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghdGhpcy5oYW5kbGVbZXZlbnROYW1lXSkge1xyXG4gICAgICAgICAgICB0aGlzLmhhbmRsZVtldmVudE5hbWVdID0gW107XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGRhdGE6IElFdmVudERhdGEgPSB7IGZ1bmM6IGNiLCB0YXJnZXQgfTtcclxuICAgICAgICB0aGlzLmhhbmRsZVtldmVudE5hbWVdLnB1c2goZGF0YSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG9mZihldmVudE5hbWU6IHN0cmluZywgY2I6IEZ1bmN0aW9uLCB0YXJnZXQ/OiBhbnkpIHtcclxuICAgICAgICBjb25zdCBsaXN0ID0gdGhpcy5oYW5kbGVbZXZlbnROYW1lXTtcclxuICAgICAgICBpZiAoIWxpc3QgfHwgbGlzdC5sZW5ndGggPD0gMCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBjb25zdCBldmVudCA9IGxpc3RbaV07XHJcbiAgICAgICAgICAgIGlmIChjYiA9PSBldmVudC5mdW5jICYmICghdGFyZ2V0IHx8IHRhcmdldCA9PSBldmVudC50YXJnZXQpKSB7XHJcbiAgICAgICAgICAgICAgICBsaXN0LnNwbGljZShpLCAxKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBkaXNwYXRjaChldmVudE5hbWU6IHN0cmluZywgLi4uYXJnczogYW55KSB7XHJcbiAgICAgICAgY29uc3QgbGlzdCA9IHRoaXMuaGFuZGxlW2V2ZW50TmFtZV07XHJcbiAgICAgICAgaWYgKCFsaXN0IHx8IGxpc3QubGVuZ3RoIDw9IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgY29uc3QgZXZlbnQgPSBsaXN0W2ldO1xyXG4gICAgICAgICAgICBldmVudC5mdW5jLmFwcGx5KGV2ZW50LnRhcmdldCwgYXJncyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyByZW1vdmVBbGwodGFyZ2V0PzogYW55KSB7XHJcbiAgICAgICAgaWYgKHRhcmdldCkge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBrZXkgaW4gdGhpcy5oYW5kbGUpIHtcclxuICAgICAgICAgICAgICAgIGxldCBsaXN0ID0gdGhpcy5oYW5kbGVba2V5XTtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwLCBsID0gbGlzdC5sZW5ndGg7IGkgPCBsOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgZXZlbnQgPSBsaXN0W2ldO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChldmVudC50YXJnZXQgPT0gdGFyZ2V0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpc3Quc3BsaWNlKGksIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGwtLTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpLS07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZm9yIChsZXQga2V5IGluIHRoaXMuaGFuZGxlKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBsaXN0ID0gdGhpcy5oYW5kbGVba2V5XTtcclxuICAgICAgICAgICAgICAgIHdoaWxlIChsaXN0Lmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBsaXN0LnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBoYXNFdmVudChldmVudE5hbWU6IHN0cmluZywgY2I6IEZ1bmN0aW9uLCB0YXJnZXQ/OiBhbnkpOiBib29sZWFuIHtcclxuICAgICAgICBjb25zdCBsaXN0ID0gdGhpcy5oYW5kbGVbZXZlbnROYW1lXTtcclxuICAgICAgICBpZiAoIWxpc3QgfHwgbGlzdC5sZW5ndGggPD0gMCkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBjb25zdCBldmVudCA9IGxpc3RbaV07XHJcbiAgICAgICAgICAgIGlmIChjYiA9PSBldmVudC5mdW5jICYmICghdGFyZ2V0IHx8IHRhcmdldCA9PSBldmVudC50YXJnZXQpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBMaXN0ZW5lck1hbmFnZXIgPSBMaXN0ZW5lck1hbmFnZXJDbGFzcy5nZXRJbnN0YW5jZSgpO1xyXG4iXX0=