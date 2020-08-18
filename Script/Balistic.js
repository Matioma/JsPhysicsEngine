import {Particle} from "./Particle.js"
import { Vector2 } from "./math.js";

export const WeaponTypes = {"PISTOL":1, "ARTILARY":2, "FIREBALL":3, "LASER":4}
Object.freeze(WeaponTypes)

export class Balistic{
    constructor(WeaponType){
        this.WeaponType = WeaponType;
        this.Objects = new Array;

        switch(WeaponType){
            case WeaponTypes.PISTOL:
                var bullet = new Particle(0,50,20);
                bullet.inversMass=1;
                bullet.velocity=new Vector2(1000,0);
                bullet.acceleration = new Vector2(0,0.5);
                bullet.setDamping = 0.999;
                this.Objects.push(bullet);
                break;
            case WeaponTypes.ARTILARY:
                console.log("ARTILARY");
                break;
            case WeaponTypes.FIREBALL:
                console.log("FIREBALL");
                break;
            case WeaponTypes.LASER:
                console.log("LASER");
                break;
        }
        // this.Objects.push(new Particle(50,50,20));
    }

    update(){
        for(var i =0; i< this.Objects.length; i++){
            this.Objects[i].update();
        }
    }
}

