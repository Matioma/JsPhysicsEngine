import {context2D} from "./script.js";
import { Vector2 } from "./math.js";
import {DeltaTime, GetDeltaTime} from "./script.js";

export class Particle{
    constructor(x, y, radius){
        this.update =  function(){
            step();
            draw();
        }
        var that =this;

        this.radius = radius;

        

        // this.setPosition(){}
        // this.position = function(position){
        //     postion =
        // }

        // this.position = new Vector2(x,y);
        this.position = new Vector2(x,y);
        this.velocity = new Vector2(1000,0);
        
        this.acceleration  = new Vector2(0,0);
        this.force = new Vector2(0,0);

        //Value that creates the drag of the element
        this.damping =0.99;
        this.inversMass =0.1;

        this.gravityAcceleration = new Vector2(0,9);


        function step(){
            //Update position
            that.position.add(that.velocity.multiply(GetDeltaTime()));
    
            //Update Acceleration
            that.acceleration.add(forceAcceleration());
            that.acceleration.add(that.gravityAcceleration);
    
            //Update Velocity
            that.velocity = that.velocity.multiply(that.damping);
            that.velocity.add(that.acceleration.multiply(GetDeltaTime()));
        }
            
        function forceAcceleration(){
            let newAcceleration =that.force.multiply(that.inversMass);
            // newAcceleration.multiply(this.inversMass);
            return newAcceleration;
        }
          
        function draw(){
            context2D.beginPath();
            context2D.arc(that.position.x,that.position.y, that.radius, 0, 2 * Math.PI);
            context2D.stroke();
        }
    }
}