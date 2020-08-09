import {Circle} from './Figures.js';
import {Vector2} from "./math.js";


export const gameCanvas = document.getElementById("gameCanvas");
export const context2D = gameCanvas.getContext('2d');


let Figures = new Array;


StartGame();

function SetUpGame(){
    Figures.push(new Circle(50,50,20));
    Figures.push(new Circle(20,20,20));
}


function StartGame(){
    SetUpGame();
    Loop();
}

function Loop(){
    window.requestAnimationFrame(Loop);

    Update();
    Draw();
}



function Draw(){
    context2D.clearRect(0,0,gameCanvas.width,gameCanvas.width);
    for(var i =0; i<Figures.length;i++){
        Figures[i].draw();
    }
}

function Update(){
    for(var i =0; i<Figures.length;i++){
        Figures[i].update();
    }
} 
function drawCircle( X, Y, radius){
    context2D.beginPath();
    context2D.arc(X, Y, radius, 0, 2 * Math.PI);
    context2D.stroke();
}

