export class Vector2{
    constructor(x, y){
        this.x = x;
        this.y = y;
    }

    add(vector){
        this.x += vector.x;
        this.y += vector.y;

    }
    subtract(vector){
        this.x -= vector.x;
        this.y -= vector.y;
    }
    multiply(scalar){
        this.x *= scalar;
        this.y *= scalar;
    }

    componentProduct(vector){
        this.x*= vector.x;
        this.y *= vector.y;
    }

    dotProduct(vector){
        return this.x*vector.x + this.y* vector.y;
    }
    // crossProduct(vector){
    //     return new Vector2(this.x*)

    // }

    invert(){
        this.x = -this.x;
        this.y = - this.y;
    }

    toString(){
        return "x =  "+ this.x + "; y = "+ this.y; 
    }
    
    magnitude(){
        return Math.sqrt(this.x*this.x + this.y*this.y);
    }
    sqrMagnitude(){
        return this.x*this.x + this.y*this.y;
    }

    normalize(){
        this.multiply(1/this.magnitude());
    }

    normalized(){
        let vector = new Vector2(this.x , this.y);
        vector.multiply(1/vector.magnitude());
        return vector;
    }
}