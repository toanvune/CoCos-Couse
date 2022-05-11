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
let selectedUser = require("selectedUser");
const mEE = require("mEmitter");
cc.Class({
    extends: cc.Component,

    properties: {
        parentItem: cc.Layout,
        prefab_item: cc.Prefab,
        loading: cc.ProgressBar,
        text: "cls",
        
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        this.dltItem = this.deleteItem.bind(this);
        mEE.instance = new mEE();
        mEE.instance.registerEvent("DELETE", this.dltItem, this);
        mEE.instance.registerEvent("CREATE", this.addItem, this);
        cc.log("onLoad: ", this.text);

    },

    start() {

        if (data.length > 0) {
            // this.hideOrShowListUser(true);
            this.renderAllUser(data);

        }
    },

    // onOrOff(data) {
    //     cc.log(this);
    //     this.hideOrShowListUser(data);

    // },

    hideOrShowListUser(value) {
        return this.node.active = value;
    },

    renderAllUser(data) {
        data.forEach(user => { cc.log(this.renderUser(user)) });
    },

    renderUser(user) {

        let item = cc.instantiate(this.prefab_item);
        item.parent = this.parentItem.node;
        item.children[1].getComponent("cc.Label").string = user.username;
        item.children[0].getComponent("cc.Toggle").isChecked = false;
        item.children[0].getComponent("cc.Toggle").user = user;

        return item;
    },

    addItem(data) {
        cc.sys.localStorage.setItem("users", JSON.stringify(data));
    },

    deleteItem() {
        // cc.log(this.node)
        
        data = data.filter(({ id: id1 }) => !selectedUser.some(({ id: id2 }) => id2 === id1));
        cc.sys.localStorage.setItem("users", JSON.stringify(data));
        // mEE.instance.emit("DELETELOADING", this.list);
        // this.node.active = false
    },


    // update(dt) {
        
    //     if (data.length != this.newData.length) {
    //         data = this.newData;
    //         this.loading.node.active = true;
    //         this.node.active = false;
    //     }
    // },
});