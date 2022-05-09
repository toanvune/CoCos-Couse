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
        // mEE.instance.registerEvent("click_onOrOff", this.onOrOff, this);
        // this.hideOrShowBtnDelete(false);
        
    },

    start() {
        
        if(selectedUser.length > 0) {
            this.onOrOffBtn(true);
        } else {
            this.onOrOffBtn(false);
        }
        this.btnDelete.node.on("mousedown", this.onClickDelete, this);
       if(data.length > 0) {
            
            this.onOrOffBtn(false);
       }
       
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
        
        if (data.length > 0) {
            
            this.hideOrShowBtnDelete(true);
        } else {
            
            this.hideOrShowBtnDelete(false);
        }
        
        if(selectedUser.length > 0) {
            this.onOrOffBtn(true);
        } else {
            this.onOrOffBtn(false);
        }
    },

});
