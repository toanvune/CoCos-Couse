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

    onLoad () {
        emitter.instance = new emitter();
        cc.log(action);
        this.btnPlay.node.on("click", this.onPlay, this);
        cc.systemEvent.on("keydown", this.checkEvent, this);
        cc.systemEvent.on("keyup", this.checkEventKeyUp, this);

        this.spinBoy.node.active = false;
        this.creep1.node.active = false;
        this.creep2.node.active = false;

        this.door.node.active = false;
    },

    checkEventKeyUp(event) {
        switch(event.keyCode) {
            case 37: {
                this.spinBoy.node.stopAction();
                anim.doDefault(this.spinBoy);
                break;
            }
            case 38: {
                if(this.spinBoy.node.y > 1){
                    break;
                }
            
                break;
            }
            case 39: {
                
                this.spinBoy.node.stopAction();
                anim.doDefault(this.spinBoy);
                break;
            }
            case 40: {
                
                break;
            }
            default: break;
        }
    },

    checkEvent(event) {
        switch(event.keyCode) {
            case 37: {
                if(this.spinBoy.node.x < 1) {
                    break;
                }
                if(this.spinBoy.node.scaleX > 0) {
                    this.spinBoy.node.scaleX *= -1;
                }
                if(!this.flag)
                this.spinBoy.node.runAction(action.moveLeft());
                anim.doRun(this.spinBoy);
                //emitter.instance.emit("KEYDOWN_LEFT", this.spinBoy)
                break;
            }
            case 38: {
                
                if(this.spinBoy.node.y > 1){
                    break;
                }
                //this.spinBoy.node.runAction(action.jumpOn());
                anim.doJump(this.spinBoy);
                break;
            }
            case 39: {
                if(this.spinBoy.node.x > 740) {
                    break;
                }
                if(this.spinBoy.node.scaleX < 0) {
                    this.spinBoy.node.scaleX *= -1;
                }
                this.spinBoy.node.runAction(action.moveRight());
                anim.doRun(this.spinBoy);
                break;
            }
            case 40: {
                cc.log("event: down");
                break;
            }
            default: break;
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

    start () {

    },

    // update (dt) {},
});
