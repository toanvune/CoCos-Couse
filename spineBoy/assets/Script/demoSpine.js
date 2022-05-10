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
        spineBoy: sp.Skeleton
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start() {
        this.spineBoy.setAnimation(0, "run", false);
        // this.spineBoy.addAnimation(0, "aim", false);
        this.spineBoy.addAnimation(0, "jump", false);
        
        // this.spineBoy.setMix("walk", "run", 0.5);
        // this.spineBoy.setEventListener((entry, event) => {
        //     cc.log("entry", entry);
        //     cc.log("event", event);
        // })

        this.spineBoy.setCompleteListener((entry) => {
            // cc.log(entry);
            this.spineBoy.setCompleteListener(() => {
                this.spineBoy.clearTracks();
                this.spineBoy.setToSetupPose();
                cc.log("a");
            });
            // if (entry.animation != null) {
           
            //     cc.log("entry: ", entry);
            //     cc.log("entry.animation: ", entry.animation);
            // }
            // this.spineBoy.setToSetupPose();
                 
            // if(entry.trackIndex )


        });

    },

    // update (dt) {},
});
