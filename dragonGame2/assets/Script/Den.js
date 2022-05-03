// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        editor: {
            executionOrder: 3,
            default: null
        },
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        this.editor.executionOrder = 3;
    },

    start() {
        if (this.node.x < 0) {
            return;
        }
        cc.log("den: Hello");
        let inOut = cc.tween(this.node).repeat(3, this.zoomIn().then(this.zoomOut()));
        inOut.then(this.go100px()).then(this.flipDragon()).then(this.prev100px()).then(this.flipDragon()).start();
    },

    zoomIn() {
        return cc.tween().to(1, {
            scaleX: -2,
            scaleY: 2
        });
    },
    zoomOut() {
        return cc.tween().to(1, {
            scaleX: -1,
            scaleY: 1
        });
    },

    flipDragon() {
        return cc.tween().to(0.3, {
            scaleX: this.node.scaleX = -this.node.scaleX,
            scaleY: this.node.scaleY
        });
    },

    go100px() {
        return cc.tween().to(2, {
            position: cc.v2(100, 0)
        })
    },

    prev100px() {
        return cc.tween().to(2, {
            position: cc.v2(0, 0)
        })
    },

    update(dt) {

        // let flag = true;
        // if (this.node.x <= -1) {
        //     return;
        // }
        // if (this.node.x == 100) {
        //     flag = false;
        // }
        // if (!flag) {
        //     this.node.runAction(this.flipDragon());
        //     this.node.x -= 1;
        // }
        // this.go100px();

    },
});