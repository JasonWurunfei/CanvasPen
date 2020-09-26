import CanvasElement from '../base/CanvasElement.js'

export default function Square(x, y, dx, dy) {
    CanvasElement.call(this, x, y)
    this.x = x
    this.y = y
    this.dx = dx
    this.dy = dy
}

// inhertance
Square.prototype = Object.create(CanvasElement.prototype)
Square.prototype.constructor = Square

//draw
Square.prototype.draw = function(ctx) {
    ctx.fillRect(this.x, this.y, this.dx, this.dy)
}

// hit detection
Square.prototype.is_in = function(evt) {
    return (evt.x >= this.x && evt.x <= this.x+this.dx) &&
           (evt.y >= this.y && evt.y <= this.y+this.dy) ? true : false
}
