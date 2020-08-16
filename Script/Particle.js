import {context2D} from "./script.js";
import { Vector2 } from "./math.js";

export class Particle{
    constructor(x, y, radius){
        
        this.radius = radius;



        this.position = new Vector2(x,y);
        this.velocity = new Vector2(10,0);
        this.aceleration  = new Vector2(0,0);

        //Value that creates the drag of the element
        this.damping =0.99;
    }


    update(){
        this.step();
        this.draw();
    }

    step(){
        this.velocity.add(this.aceleration);
        this.velocity.multiply(this.damping);
        this.position.add(this.velocity);
    }



    draw(){
        context2D.beginPath();
        context2D.arc(this.position.x, this.position.y, this.radius, 0, 2 * Math.PI);
        context2D.stroke();
    }

}