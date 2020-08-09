import {Vector2} from "./math.js";


import {context2D} from "./script.js";

export class Sprite2D{
    draw(){ console.log("Default \"Draw\" implementation")};
    update(){ console.log("Default \"Update\" implementation")};
}


export class Circle extends Sprite2D{
    constructor(x, y, radius){
        super();
        this.position = new Vector2(x,y);
        this.radius = radius;
        this.velocity = new Vector2(1,1);
    }
    draw(){
        context2D.beginPath();
        context2D.arc(this.position.x, this.position.y, this.radius, 0, 2 * Math.PI);
        context2D.stroke();
    }
    update(){
        this.position.add(this.velocity);
    }
}