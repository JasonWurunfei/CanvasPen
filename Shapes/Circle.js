import CanvasElement from '../base/CanvasElement.js'

export default function Circle(x, y, r, style = {}) {
    CanvasElement.call(this, x, y)
    this.x = x
    this.y = y
    this.r = r
    let {fillStyle, strokeStyle} = style
    this.fillStyle   = fillStyle    || "black"
    this.strokeStyle = strokeStyle  || "black"
}

// inhertance
Circle.prototype = Object.create(CanvasElement.prototype)
Circle.prototype.constructor = Circle

//draw
Circle.prototype.beginPath = function(ctx) {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.r, 0, Math.PI*2, true); 
}

Circle.prototype.fill = function(ctx) {
    ctx.fillStyle = this.fillStyle
    this.beginPath(ctx)
    ctx.fill()
}

Circle.prototype.stroke = function(ctx) {
    ctx.strokeStyle = this.strokeStyle
    this.beginPath(ctx)
    ctx.stroke()
}

/* ----------- hooks that must be defined -------------- */

// default draw
Circle.prototype.draw = Circle.prototype.fill

// hit detection
Circle.prototype.is_in = function(evt) {
    return (evt.x - this.x) * (evt.x - this.x) +
           (evt.y - this.y) * (evt.y - this.y) <= this.r * this.r ? true : false
}