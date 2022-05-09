// Learn cc.Class:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] https://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html

let data = JSON.parse(cc.sys.localStorage.getItem("users"));
const mEE = require("mEmitter");
cc.Class({
    extends: cc.Component,

    properties: {
        scrollView: cc.ScrollView,
        parentItem: cc.Layout, 
        prefab_item: cc.Prefab,
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.hideOrShowListUser(false);
    },

    start () {
        mEE.instance = new mEE();
        mEE.instance.registerEvent("click_onOrOff", this.onOrOff, this);
        if(data.length > 0) {
            this.hideOrShowListUser(true);
            this.renderAllUser();
            
       }
    },

    onOrOff(data) {
        cc.log(this);
    },

    hideOrShowListUser(value) {
        this.scrollView.active = value;
    },

    renderAllUser() {
        data.forEach(user => {cc.log(this.renderUser(user))});
    },

    renderUser(user) {
        
            let item = cc.instantiate(this.prefab_item);
            item.parent = this.parentItem.node;
            item.children[1].getComponent("cc.Label").string = user.username;
            item.children[0].getComponent("cc.Toggle").isChecked = false;
            item.children[0].getComponent("cc.Toggle").user = user;
            
            return item;
    },


    // update (dt) {},
});
