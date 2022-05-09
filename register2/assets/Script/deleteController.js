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
const mEE = require("mEmitter");
let data = JSON.parse(cc.sys.localStorage.getItem("users"));
cc.Class({
    extends: cc.Component,

    properties: {

        btnDelete: cc.Button,
        layout_item: cc.Layout,
        lblItem: cc.Label,

    },

    // LIFE-CYCLE CALLBACKS:

    onLoad() {

    },

    start() {

        if (selectedUser.length > 0) {
            this.onOrOffBtn(true);
        } else {
            this.onOrOffBtn(false);
        }
        this.btnDelete.node.on("mousedown", this.onClickDelete, this);
        if (data.length > 0) {
            this.onOrOffBtn(false);
        }

    },

    onOrOffBtn(value) {
        this.btnDelete.interactable = value;
    },

    onClickDelete() {
        mEE.instance.emit("DELETE");
    },

    update(dt) {

        if (selectedUser.length > 0) {
            this.onOrOffBtn(true);
        } else {
            this.onOrOffBtn(false);
        }
    },

});