// Learn cc.Class:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] https://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        propressBar: {
            default: null,
            type: cc.ProgressBar
        },
        newSprite: cc.SpriteFrame
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {
        this.propressBar.totalLength = 300;
        cc.warn(this.propressBar.barSprite.spriteFrame = this.newSprite);
        this.propressBar.progress = 0;
        
    },

    update (dt) {
        if(this.propressBar.progress > 1) {
            return;
        }
        this.propressBar.progress += dt;
    },
});
