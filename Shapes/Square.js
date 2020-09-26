import CanvasElement from '../base/CanvasElement.js'

export default function Square(x, y, dx, dy, style = {}) {
    CanvasElement.call(this, x, y)
    this.x = x
    this.y = y
    this.dx = dx
    this.dy = dy
    let {fillStyle, strokeStyle} = style
    this.fillStyle   = fillStyle    || "black"
    this.strokeStyle = strokeStyle  || "black"
}

// inhertance
Square.prototype = Object.create(CanvasElement.prototype)
Square.prototype.constructor = Square

//draw
Square.prototype.beginPath = function(ctx) {
    ctx.beginPath();
    ctx.moveTo(this.x,         this.y);
    ctx.lineTo(this.x,         this.y+this.dy);
    ctx.lineTo(this.x+this.dx, this.y+this.dy);
    ctx.lineTo(this.x+this.dx, this.y);
    ctx.closePath()
}

Square.prototype.fill = function(ctx) {
    ctx.fillStyle = this.fillStyle
    this.beginPath(ctx)
    ctx.fill()
}

Square.prototype.stroke = function(ctx) {
    ctx.strokeStyle = this.strokeStyle
    this.beginPath(ctx)
    ctx.stroke()
}

/* ----------- hooks that must be defined -------------- */

// default draw
Square.prototype.draw = Square.prototype.fill

// hit detection
Square.prototype.is_in = function(evt) {
    return (evt.x >= this.x && evt.x <= this.x+this.dx) &&
           (evt.y >= this.y && evt.y <= this.y+this.dy) ? true : false
}
