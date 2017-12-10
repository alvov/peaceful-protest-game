export default class Slot {
    constructor({target, x, y}){
        this.target = target;
        this.x = x;
        this.y = y;
        this.taken = null;
        this.callback
    }
    update(){
        const {target: {x, y, direction}} = this;
        const point = Phaser.point.rotate(this, x, y, direction, true);
        return point;
    }
    take(protester){
        this.update();
        this.taken = protester;
    }
    dismiss() {
        this.taken = null
    }
}