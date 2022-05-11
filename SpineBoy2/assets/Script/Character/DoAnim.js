
cc.Class({
    extends: cc.Component,

    properties: {
        // foo: {
        //     // ATTRIBUTES:
        //     default: null,        // The default value will be used only when the component attaching
        //                           // to a node for the first time
        //     type: cc.SpriteFrame, // optional, default is typeof default
        //     serializable: true,   // optional, default is true
        // },
        // bar: {
        //     get () {
        //         return this._bar;
        //     },
        //     set (value) {
        //         this._bar = value;
        //     }
        // },
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        // emitter.instance = new emitter();
        // anim = new Anim();

        // this.keyDown = this.onKeyDown.bind(this);

        // emitter.instance.registerEvent("KEYDOWN", this.keyDown);
    },

    onKeyDown(data) {
        // cc.log(data);
    },

    start () {

    },

    // update (dt) {},
});
