// Learn cc.Class:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] https://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html
const Emitter = require('mEmitter');
cc.Class({
    extends: cc.Component,

    properties: {
        text: "say hello nicotin",
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.node.on("mousedown", this.onMousedown, this);
        
    },

    // onFoobar() {
    //     cc.log(this.text);
    // },

    onMousedown() {
        // this.node.emit("onFoobar");
        // this.node.emit("onSignature");
        // this.node.dispatchEvent(new cc.Event.EventCustom("disEvent", true));
        
    },

    onHello() {
        Emitter.instance.emit('HELLO', "hellooooooo");
    },
    onWelcome() {
        Emitter.instance.emit('HELLO', "Welcomeeeee");
    },

    start () {

    },

    // update (dt) {},
});
