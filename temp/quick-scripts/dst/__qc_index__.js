
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__qc_index__.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}
require('./assets/Script/Data/ConstValue');
require('./assets/Script/Data/EventType');
require('./assets/Script/Main/Ball');
require('./assets/Script/Main/CardCtrl');
require('./assets/Script/Main/CollisionDetection');
require('./assets/Script/Main/End');
require('./assets/Script/Main/GameScene');
require('./assets/Script/Main/MainGame');
require('./assets/Script/Main/MainLogic');
require('./assets/Script/Main/Money');
require('./assets/Script/Main/RoateAction');
require('./assets/Script/Main/SetLevel');
require('./assets/Script/Main/SyncPostion');
require('./assets/Script/Main/TweenScale');
require('./assets/Script/Main/super_html_playable');
require('./assets/Script/Manager/GameManager');
require('./assets/Script/Manager/ListenerManager');
require('./assets/Script/Manager/NodeActionManager');
require('./assets/Script/Manager/SoundManager');
require('./assets/Script/Manager/Utils');

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