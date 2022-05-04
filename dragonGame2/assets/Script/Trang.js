// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,
    properties: {
        xanh: {
            default: null,
            type: cc.Component
        },
    },
    

    editor: {
        executionOrder: 1
        

    },

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        return this.xanh.node.active = false;
    },

    start() {
        cc.log("trang: Hello");
        cc.log("trang: I'm white");
        
    },

    update(dt) {
        if (this.node.x > 100) {
            
            return this.xanh.node.active = true;
        }
        this.node.angle -= this.node.x * dt * 12.8;
        this.node.x += 1;

    },
});