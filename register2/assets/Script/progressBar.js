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
        getLoading: cc.ProgressBar,
        getListUser: cc.Component,
        _pauseUpdate: true
    },

    loading(dt) {
        this._pauseUpdate = false
        this.schedule(() => {
            this.getLoading.progress += 1 / 30
            if (this.getLoading.progress >= 1) {
                this.getLoading.progress = 0;
                this.getListUser.node.active = true;
                this.node.active = false;
                this._pauseUpdate = true;
            }
        }, 0.05, 30);
    },

    start() {

    },

    update(dt) {
        if (this.node.active) {
            if (this._pauseUpdate)
                this.loading(dt)
        }
    },
});