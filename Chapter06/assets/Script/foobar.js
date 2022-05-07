const Emitter = require('mEmitter');
cc.Class({
    extends: cc.Component,

    properties: {
        label: {
            default: null,
            type: cc.Label
        },
        // defaults, set visually when attaching this script to the Canvas
        text: 'Hello, World!',
    },

    onEnable: function () {
        // this.node.on("mousedown", function (e) {
        //     this.printST(this.text = "nicotin");
        // }, this);
    },

    // use this for initialization
    onLoad: function () {
        // this.node.on("mousedown", function (e) {
        //     this.printST(this.text = "nicotin");
        // }.bind(this));
        // func().bind(this) => Bind nó sẽ tự tạo mới thằng this. vd this -> bind(this) = this copy

        // this.node.on("onFoobar", this.onFoobar, this);
        // this.node.on("onSignature", this.onSignature, this);
        // this.node.on("disEvent", function (e) {
        //     e.setUserData("set data chay");
        //     cc.log(e.getUserData());
        //     this.disEvent;
        // }, this);


    },

    onHello(data) {
        cc.log('hello', data);
    },
    onWelcome(data) {
        cc.log('welcome', data);
    },


    printST(param) {
        // cc.log("hello " + param);
    },

    onFoobar() {
        cc.log(this.text);
    },

    onSignature() {
        cc.log("ben nay la foobar");
    },

    disEvent() {
        cc.log("disEvent chay foobar");
    },

    // called every frame
    update: function (dt) {

    },

    onDisable: function () {
        // this.node.off("mousedown", function (e) {
        //     this.printST(this.text = "nicotin");
        // }, this);
    }
});
