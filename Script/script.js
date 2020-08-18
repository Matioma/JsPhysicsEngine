import {Vector2} from "./math.js";
import { Particle } from './Particle.js';


export const gameCanvas = document.getElementById("gameCanvas");
export const context2D = gameCanvas.getContext('2d');

let particles = new Array;
let Colliders = new Array;


let CurrentTime =0;
export let DeltaTime=0;

StartGame();

//Testing();



function Testing(){
    let vector = new Vector2(4,4);

    vector.multiply(2.5);
    console.log("multiplied vector is:"+vector.toString());
    console.log("Length is:" +vector.magnitude());
    
    let normalizedVector = vector.normalized();
    console.log("normalizedVector: " + normalizedVector.toString());
    console.log("initial vector is: " + vector.toString());
    


}
function StartGame(){
    CurrentTime = (new Date).getTime();
    
    SetUpGame();
    Loop();
}

function SetUpGame(){
    particles.push(new Particle(50,50,20));

    gameCanvas.width = 1200;
    gameCanvas.height =720;    
}


function Loop(){
    DeltaTime = (new Date).getTime()-CurrentTime;
    CurrentTime = (new Date).getTime();

    context2D.clearRect(0, 0, gameCanvas.width, gameCanvas.height);
    
    Update();
    window.requestAnimationFrame(Loop);
    
}


function Update(){
    for (var i=0; i< particles.length;i++){
        particles[i].update();
    }
} 
