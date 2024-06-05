//Object
//Factories Function

function createCircle(radius) {
    return {
        radius,
        draw: function () {
            console.log("draw");
        }
    }
}

//Constructor

//Constructor should always start with Capital Letter.
function Circle(radius) {
    //this represent the current object which is using.
    this.radius = radius;
    this.draw = function () {
        console.log("draw");
    }
    console.log(this)
}
 

// new keyword create the new object. By putting new keyword only we can get access to the this keyword. this keyword represent the current object. Or else the this will show global object.
const circle = new Circle(1);