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
cc.Class({
    extends: cc.Component,

    properties: {
        scrollView: cc.ScrollView,
        btnDelete: cc.Button,
        toggle: cc.Toggle,
        layout_item: cc.Layout,
        lblItem: cc.Label,
        parentItem: cc.Layout,
        
        prefab_item: cc.Prefab
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        this.hideOrShowListUser(false);
        this.hideOrShowBtnDelete(false);
    },

    start() {
        
       if(data != null) {
            this.renderAllUser();
            this.onOrOffBtn(false)
       }
       
    },

    renderAllUser() {
        data.forEach((user, index) => {cc.log(this.renderUser(user, index))});
    },

    renderUser(user, index) {
        
            let item = cc.instantiate(this.prefab_item);
            item.name = "pre " + index + 1;
            item.parent = this.parentItem.node;
            item.children[1].getComponent("cc.Label").string = user.username;
            item.children[0].getComponent("cc.Toggle").isChecked = false;
            return item;
    },

    hideOrShowListUser(value) {
        this.scrollView.node.active = value;
    },
    hideOrShowBtnDelete(value) {
        this.btnDelete.node.active = value;
    },
    onOrOffBtn(value) {
        this.btnDelete.interactable = value;
    },

    update(dt) {
        data = JSON.parse(cc.sys.localStorage.getItem("users"));
        if (data != null) {
            this.hideOrShowListUser(true);
            this.hideOrShowBtnDelete(true);
        } else {
            this.hideOrShowListUser(false);
            this.hideOrShowBtnDelete(false);
        }
        
    },
});
