import Square from "../Shapes/Square.js"
import CanvasElement from '../base/CanvasElement.js'

export default function Input(x, y, dx, dy) {
    CanvasElement.call(this, x, y)
    this.background = new Square(x, y, dx, dy)
}

// inhertance
Input.prototype = Object.create(CanvasElement.prototype)
Input.prototype.constructor = Input

/* ----------- hooks that must be defined -------------- */
Input.prototype.draw = function(ctx) {
    this.background.draw(ctx)
}
Input.prototype.is_in = function(evt) {
    return this.background.is_in(evt)
}
Input.prototype.click = function() {
    alert("is in")
}
