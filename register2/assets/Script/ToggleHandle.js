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


const User = require("User");

cc.Class({
    extends: cc.Component,

    properties: {

    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start() {

    },

    onSelected(toggle) {
        let user = new User();
        user = toggle.user;
        if (toggle.isChecked) {
            this.addSelectedUser(user);
        } else {
            this.removeSelectedUser(user);
        }
        //cc.log("selected: ", selectedUser);

    },

    addSelectedUser(user) {
        selectedUser.push(user);
        return selectedUser
    },

    removeSelectedUser(user) {
        let index = selectedUser.indexOf(user)
        selectedUser.splice(index, 1);
        return selectedUser;
    }

    // update (dt) {},
});