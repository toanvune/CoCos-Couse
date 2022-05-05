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
        scrollView: cc.ScrollView,
        btnDelete: cc.Button,
        toggle: cc.Toggle,
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        this.scrollView.node.active = false;
        this.btnDelete.node.active = false;

    },

    start() {
        let users = cc.sys.localStorage.getItem('users');
        cc.log(users);
        if (cc.sys.localStorage.getItem('users') != null) {
            this.scrollView.node.active = true;
            this.btnDelete.node.active = true;
        }
        
    },

    // update (dt) {},
});
