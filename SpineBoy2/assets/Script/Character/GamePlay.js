const Action = require("Action");
const Anim = require("Anim");
const emitter = require("mEmitter");

let action = new Action();
let anim = new Anim();
cc.Class({
    extends: cc.Component,

    properties: {
        spinBoy: sp.Skeleton,
        creep1: sp.Skeleton,
        creep2: sp.Skeleton,
        door: cc.Sprite,

        btnPlay: cc.Button,
        flag: true,
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        emitter.instance = new emitter();
        cc.log(action);
        this.btnPlay.node.on("click", this.onPlay, this);
        cc.systemEvent.on("keydown", this.onKeyDown, this);
        cc.systemEvent.on("keyup", this.onKeyUp, this);

        this.spinBoy.node.active = false;
        this.creep1.node.active = false;
        this.creep2.node.active = false;

        this.door.node.active = false;
    },

    onKeyUp(event) {
        switch (event.keyCode) {
            case 37:
                {
                    this.flag = true;
                    this.spinBoy.node.stopAction();
                    anim.doDefault(this.spinBoy);

                    //cc.log("up: ", this.flag)
                    break;
                }
            case 38:
                {
                    this.spinBoy.setCompleteListener(() => {
                        this.flag = true;
                        anim.doDefault(this.spinBoy);
                    });
                    //cc.log("up: ", this.flag)
                    break;
                }
            case 39:
                {
                    this.flag = true;
                    this.spinBoy.node.stopAction();

                    anim.doDefault(this.spinBoy);

                    //cc.log("up: ", this.flag)
                    break;
                }
            case 40:
                {
                    //this.flag = true;
                    break;
                }
            default:
                break;
        }
    },

    onKeyDown(event) {
        switch (event.keyCode) {
            case 37:
                {
                    if (this.spinBoy.node.x < 1) {
                        break;
                    }
                    if (this.spinBoy.node.scaleX > 0) {
                        this.spinBoy.node.scaleX *= -1;
                    }

                    this.spinBoy.node.runAction(action.moveLeft());
                    if (this.flag) {
                        this.flag = false;
                        anim.doRun(this.spinBoy);
                        //cc.log("down: ", this.flag)
                    }

                    //emitter.instance.emit("KEYDOWN_LEFT", this.spinBoy)
                    break;
                }
            case 38:
                {

                    if (this.spinBoy.node.y > 0) {
                        break;
                    }
                    if (this.flag) {
                        this.flag = false;
                        this.spinBoy.node.runAction(action.jumpOn());
                        anim.doJump(this.spinBoy);
                        //cc.log("down: ", this.flag)
                    }

                    break;
                }
            case 39:
                {
                    if (this.spinBoy.node.x > 740) {
                        break;
                    }
                    if (this.spinBoy.node.scaleX < 0) {
                        this.spinBoy.node.scaleX *= -1;
                    }
                    this.spinBoy.node.runAction(action.moveRight());
                    if (this.flag) {
                        this.flag = false;
                        anim.doRun(this.spinBoy);

                    }
                    cc.log("down: ", this.flag)
                    break;
                }
            case 40:
                {
                    cc.log("event: down");
                    break;
                }
            default:
                break;
        }
    },

    onPlay() {
        this.spinBoy.node.active = true;
        this.creep1.node.active = true;
        this.creep2.node.active = true;

        this.door.node.active = true;
        this.btnPlay.node.active = false;
        this.spinBoy.setCompleteListener(() => {
            anim.doDefault(this.spinBoy);
        });
    },

    start() {

    },

    // update (dt) {},
});