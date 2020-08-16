import {Vector2} from "./math.js";
import { Particle } from './Particle.js';


export const gameCanvas = document.getElementById("gameCanvas");
export const context2D = gameCanvas.getContext('2d');

let particles = new Array;
let Colliders = new Array;

StartGame();

Testing();



function Testing(){
    let vector = new Vector2(4,4);
    console.log(vector.toString());
    console.log("Length is:" +vector.magnitude());
    
    let normalizedVector = vector.normalized();
    console.log("normalizedVector: " + normalizedVector.toString());
    console.log("initial vector is: " + vector.toString());
    


}
function StartGame(){
    SetUpGame();
    Loop();
}

function SetUpGame(){
    particles.push(new Particle(50,50,20));

    gameCanvas.width = 1200;
    gameCanvas.height =720;    
}


function Loop(){
    context2D.clearRect(0, 0, gameCanvas.width, gameCanvas.height);

    Update();
    window.requestAnimationFrame(Loop);
}


function Update(){
    for (var i=0; i< particles.length;i++){
        particles[i].update();
    }
} 
