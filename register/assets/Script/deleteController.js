// Learn cc.Class:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] https://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html

let selectedUser = require("selectedUser");
let data = JSON.parse(cc.sys.localStorage.getItem("users"));
cc.Class({
    extends: cc.Component,

    properties: {
        scrollView: cc.ScrollView,
        btnDelete: cc.Button,
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
        if(selectedUser.length > 0) {
            this.onOrOffBtn(true);
        } else {
            this.onOrOffBtn(false);
        }
        this.btnDelete.node.on("mousedown", this.onClickDelete, this);
       if(data != null) {
            this.renderAllUser();
            this.onOrOffBtn(false)
       }
       
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

    hideOrShowListUser(value) {
        this.scrollView.node.active = value;
    },
    hideOrShowBtnDelete(value) {
        this.btnDelete.node.active = value;
    },
    onOrOffBtn(value) {
        this.btnDelete.interactable = value;
    },

    onClickDelete() {
        this.deleteExecute();
        cc.sys.localStorage.setItem("users", JSON.stringify(data));
    },

    deleteExecute() {
        // let result = [];
        data = data.filter(({id: id1}) => !selectedUser.some(({id: id2}) => id2 === id1));
        return data;
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
        
        if(selectedUser.length > 0) {
            this.onOrOffBtn(true);
        } else {
            this.onOrOffBtn(false);
        }
    },

});
