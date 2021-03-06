// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        trang: {
            default: null,
            type: cc.Component
        }
    },
    
    editor: {
        executionOrder: 0

    },

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        this.trang.node.active = false;
    },

    start() {
        cc.log("vang: Hello");
        
    },

    update(dt) {
        if (this.node.x > 100) {
            this.trang.node.active = true;
            return;
        }
        this.node.x += 1;
    },
});