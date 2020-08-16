import {Vector2} from "./math.js";


export class Collider{
    constructor(x,y){
        this.position = new Vector2(x,y);
    }

    draw(){console.log("default collider draw");   }
    step(){console.log("default collider Update"); }
}


export class CircleCollider extends Collider{
    constructor(x,y, radius){
        super(x,y);
        this.radius = radius;
    }


    step(){
        this.position.add(new Vector2(1,0));
    }
}