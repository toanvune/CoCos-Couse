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
       btnStart: cc.Button,
       btnStop: cc.Button,
       flag: true,
       x: null,
       y: null,
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {
        this.btnStart.node.on("click", this.btnStartClicked, this);
        this.btnStop.node.on("click", this.btnStopClicked, this);
        this.x = this.node.x;
        this.y = this.node.y;
        this.node.color = "#868686";	
    },

    btnStartClicked() {
        if(!this.flag) {
            return;
        }
        this.flag = false;
        this.node.x = this.x;
        this.node.y = this.y;
        this.moveAction = this.onMoveBy();
        this.jumpAction = this.onJumpBy();
        this.setFlag = cc.callFunc(() => {
            this.flag = true;
        });
        let spawn = cc.spawn(this.moveAction,this.jumpAction);
        let seq = cc.sequence(spawn, this.setFlag);
        this.node.runAction(cc.repeat(seq, 10));
        cc.log(seq);
    },

    onMoveBy() {
        let action = cc.moveBy(2, 10, 0);
        return action;
    },
    onJumpBy() {
        
        let up = cc.moveBy(1, 0, 50);
        let down = cc.moveBy(1, 0, -50);
        let action = cc.sequence(up, down);
        return action;
    },

    btnStopClicked() {
        this.node.stopAllActions();
        this.flag = true;
    },

    // update (dt) {},
});
