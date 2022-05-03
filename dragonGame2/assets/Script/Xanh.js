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
            executionOrder: 2,
            default: null
        },
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        this.editor.executionOrder = 2;
    },

    start() {
        cc.log("xanh: hmmmm");
        this.node.runAction(this.jump3Time());
    },

    jump3Time() {
        return cc.jumpBy(2, cc.v2(0, 0), 50, 3);
    },

    // update(dt) {

    // },
});