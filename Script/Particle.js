import {context2D} from "./script.js";
import { Vector2 } from "./math.js";
import {DeltaTime} from "./script.js";

export class Particle{
    constructor(x, y, radius){
        this.radius = radius;

        this.position = new Vector2(x,y);
        this.velocity = new Vector2(10,0);
        this.acceleration  = new Vector2(0,0);
        this.force = new Vector2(10,0);

        //Value that creates the drag of the element
        this.damping =0.99;
        this.inversMass =0.1;
        this.gravityAcceleration = new Vector2(0,1);

    }


    computeAcceleration(){
        let newAcceleration = Vector2.Copy(this.force);
        newAcceleration.multiply(this.inversMass);
        return newAcceleration;
    }

    update(){
        this.step();
        this.draw();
    }

    step(){
        this.acceleration = this.computeAcceleration();
        this.acceleration.add(this.gravityAcceleration);
        
        // console.log(DeltaTime);
      

        // this.position.add(this.velocity.multiply(DeltaTime).add(this.acceleration.multiply(DeltaTime*Del)))
        this.velocity.add(this.acceleration);
        this.velocity.multiply(this.damping);
        this.position.add(this.velocity);
    }



    draw(){
        context2D.beginPath();
        context2D.arc(this.position.x, this.position.y, this.radius, 0, 2 * Math.PI);
        context2D.stroke();
    }

}