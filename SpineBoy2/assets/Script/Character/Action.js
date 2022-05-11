const Action = cc.Class({
    

    moveRight() {
        let action;
        return action = cc.moveBy(0.1, cc.v2(20, 0));
    },
    moveLeft() {
        let action;
        return action = cc.moveBy(0.1, cc.v2(-20, 0));
    },
    jumpOn() {
        let action;
        return action = cc.jumpBy(1, cc.v2(0, 0), 150);
    },
    actionFlip() {
        let action;
        return action = cc.flipX(true);
    }
});
module.exports = Action;