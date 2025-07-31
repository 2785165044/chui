/**
 * 节点动画管理类
 * @param playNodeMoveAction 播放节点移动动画
 * @param playNodeScaleAction 播放节点缩放动画
 * @param stopNodeAction 停止节点正在播放动画
 */
class NodeActionManagerClass {
    public static instance: NodeActionManagerClass = null;
    public static getInstance(): NodeActionManagerClass {
        if (this.instance == null) {
            this.instance = new NodeActionManagerClass();
        }
        return this.instance;
    }

    /**当前手指移动坐标数组 */
    private curPosArr: cc.Vec2[] = [];

    /**移动时间数组 */
    private moveTimeArr: number[] = [];

    /**节点大小 */
    private nodeScale: number = 1;

    /**
     * 停止节点正在播放动画 
     * @param node 需要停止正在播放动画的节点
     */
    public stopNodeAction(node: cc.Node) {
        node.stopAllActions();
        this.curPosArr = [];
        this.moveTimeArr = [];
        node.scale = 0;
        node.opacity = 0;
    }

    /**
     * 播放节点移动动画
     * @param node 需要播放动画的节点
     * @param posArr 移动坐标数组，长度应大于等于2，且数组中第一个元素为节点起始位置
     * @param moveSpeed 移动速度，默认为500
     * @param loop 是否循环播放移动动画，默认循环
     * @param loopCount 不循环播放情况下，播放次数，默认为1
     * @param callback 播放完成回调，默认为null
     * @returns 
     */
    public playNodeMoveAction(
        node: cc.Node, posArr: cc.Vec2[],
        moveSpeed: number = 500,
        loop: boolean = true,
        loopCount: number = 1,
        callback: Function = null,
    ) {
        if (posArr.length < 2) {
            cc.error("参数错误::cc.Vec2[]长度应大于等于2，且数组中第一个元素为手指起始位置");
            return;
        }
        node.stopAllActions();
        this.curPosArr = [];
        this.moveTimeArr = [];
        this.curPosArr = posArr;
        //获取每段距离移动所需时间
        this.curPosArr.forEach((value, index, arr) => {
            if (index < arr.length - 1) {
                let distance = arr[index].sub(arr[index + 1]).mag();
                let time = distance / moveSpeed;
                this.moveTimeArr.push(time);
            }
        });
        this.nodeMoveAction(node, 0, loop, loopCount, callback);
    }

    /**
     * 节点移动动画
     * @param node 需要播放动画的节点
     * @param index 播放第几段动画
     * @param loop 是否循环播放移动动画
     * @param loopCount 不循环播放情况下，播放次数
     * @param callback 播放完成回调，默认为null
     */
    private nodeMoveAction(node: cc.Node, index: number, loop: boolean, loopCount: number, callback: Function) {

        if (this.curPosArr.length <= 2) {
            node.runAction(
                cc.sequence(
                    cc.callFunc(() => {
                        node.setPosition(this.curPosArr[0]);
                    }),
                    cc.spawn(
                        cc.scaleTo(0.2, this.nodeScale),
                        cc.fadeIn(0.2)
                    ),
                    cc.moveTo(this.moveTimeArr[index], this.curPosArr[index + 1]),
                    cc.spawn(
                        cc.scaleTo(0.2, 0),
                        cc.fadeOut(0.2)
                    ),
                    cc.callFunc(() => {
                        if (loop) {
                            index = 0;
                            this.nodeMoveAction(node, index, loop, loopCount, callback);
                        } else {
                            loopCount -= 1;
                            if (loopCount <= 0) {
                                if (callback) {
                                    callback();
                                }
                                return;
                            }
                            this.nodeMoveAction(node, index, loop, loopCount, callback);

                        }
                    })
                )
            );
        } else {
            if (index == 0) {
                node.runAction(
                    cc.sequence(
                        cc.callFunc(() => {
                            node.setPosition(this.curPosArr[0]);
                        }),
                        cc.spawn(
                            cc.scaleTo(0.2, this.nodeScale),
                            cc.fadeIn(0.2)
                        ),
                        cc.moveTo(this.moveTimeArr[index], this.curPosArr[index + 1]),
                        cc.callFunc(() => {
                            index += 1;
                            this.nodeMoveAction(node, index, loop, loopCount, callback);

                        })
                    )
                );
            } else if (index == this.moveTimeArr.length - 1) {
                node.runAction(
                    cc.sequence(
                        cc.moveTo(this.moveTimeArr[index], this.curPosArr[index + 1]),
                        cc.spawn(
                            cc.scaleTo(0.2, 0),
                            cc.fadeOut(0.2)
                        ),
                        cc.callFunc(() => {
                            if (loop) {
                                index = 0;
                                this.nodeMoveAction(node, index, loop, loopCount, callback);

                            } else {
                                loopCount -= 1;
                                if (loopCount <= 0) {
                                    if (callback) {
                                        callback();
                                    }
                                    return;
                                }
                                this.nodeMoveAction(node, index, loop, loopCount, callback);

                            }
                        })
                    )
                );
            } else {
                node.runAction(
                    cc.sequence(
                        cc.moveTo(this.moveTimeArr[index], this.curPosArr[index + 1]),
                        cc.callFunc(() => {
                            index += 1;
                            this.nodeMoveAction(node, index, loop, loopCount, callback);
                        })
                    )
                );
            }
        }
    }

    /**
     * 播放节点缩放动画
     * @param node 需要播放动画的节点
     * @param nodeMaxScale 节点缩放最大值
     * @param nodeMinScale 节点缩放最小值
     * @param pos 节点位置
     * @param loop 是否循环，默认循环
     * @param loopCount 不循环，循环次数，默认为1
     * @param callback 播放完成回调，默认为null
     */
    public playScaleAction(
        node: cc.Node,
        nodeMaxScale: number,
        nodeMinScale: number,
        pos?: cc.Vec3 | cc.Vec2,
        loop: boolean = true,
        loopCount: number = 1,
        callback: Function = null
    ) {
        node.stopAllActions();
        if (pos) {
            node.setPosition(pos);
        }
        node.opacity = 255;
        if (loop) {
            node.runAction(
                cc.repeatForever(
                    cc.sequence(
                        cc.scaleTo(0.3, nodeMaxScale),
                        cc.scaleTo(0.3, nodeMinScale)
                    )
                )
            );
        } else {
            node.runAction(
                cc.sequence(
                    cc.repeat(
                        cc.sequence(
                            cc.scaleTo(0.3, nodeMaxScale),
                            cc.scaleTo(0.3, nodeMinScale)
                        )
                        , loopCount),
                    cc.callFunc(() => {
                        node.stopAllActions();
                        callback();
                    })
                )
            );
        }
    }

    /**
     * 播放上下浮动动画
     * @param node
     * @param time 
     * @param distance 
     */
    playNodeFloatAction(node: cc.Node, time: number, distance: number) {
        node.runAction(
            cc.repeatForever(
                cc.sequence(
                    cc.moveTo(time, node.x, node.y + distance),
                    cc.moveTo(time - 0.05, node.x, node.y - distance),
                )
            )
        );
    }


    /**果冻效果 */
    JellyEffect(node: cc.Node, multiple: number, callback?: Function) {
        function generate_action(params) {
            var scale_action = cc.scaleTo(params.time, params.scale_x, params.scale_y);
            var fade_action = cc.fadeIn(params.time);
            return cc.spawn(scale_action, fade_action);
        }

        var spawn_action1 = generate_action({ time: 0.06, scale_x: 0.63 * multiple, scale_y: 1.3 * multiple, scale_z: 1 * multiple });
        var spawn_action2 = generate_action({ time: 0.12, scale_x: 1.1 * multiple, scale_y: 0.7 * multiple, scale_z: 1 * multiple });
        var spawn_action3 = generate_action({ time: 0.07, scale_x: 0.8 * multiple, scale_y: 1.1 * multiple, scale_z: 1 * multiple });
        var spawn_action4 = generate_action({ time: 0.07, scale_x: 1.1 * multiple, scale_: 0.95 * multiple, scale_z: 1 * multiple });
        var spawn_action5 = generate_action({ time: 0.07, scale_x: 1 * multiple, scale_y: 1 * multiple, scale_z: 1 * multiple });
        node.runAction(cc.sequence(
            spawn_action1,
            spawn_action2,
            spawn_action3,
            spawn_action4,
            spawn_action5,
            cc.callFunc(() => {
                callback();
            })
        ));
    }
}
export const NodeActionManager = NodeActionManagerClass.getInstance();
