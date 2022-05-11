const Anim = cc.Class({
    doDefault(character) {
        let anim = character.setAnimation(0, "idle", true);
        return anim;
    },
    doRun(character) {
        let anim = character.setAnimation(0, "run", true);
        return anim;
    },
    doJump(character) {
        let anim = character.setAnimation(0, "jump", false);
        return anim;
    },

});

module.exports = Anim;