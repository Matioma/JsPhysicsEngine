import {Vector2} from "./math.js";


import {context2D} from "./script.js";
import { CircleCollider } from "./Colliders.js";

export class Sprite2D{
    constructor(collider){
        this.collider = collider;

    }

    draw(){ console.log("Default \"Draw\" implementation")};
    // update(){ console.log("Default \"Update\" implementation")};
}




export class Circle extends Sprite2D{
    constructor(x, y, radius){
        super(new CircleCollider(x,y,radius));

        this.position = new Vector2(x,y);
        // this.radius = radius;
        this.velocity = new Vector2(1,1);
    }
    draw(){
        context2D.beginPath();
        context2D.arc(this.collider.position.x, this.collider.position.y, this.collider.radius, 0, 2 * Math.PI);
        context2D.stroke();
    }
    // update(){
    //     coll
    //     this.position.add(this.velocity);
    // }
}