import Coordinate from './Coordinate.js'

export default function CanvasElement(x, y, z) {
    Coordinate.call(this, x, y, z)
}

CanvasElement.prototype = Object.create(Coordinate.prototype)
CanvasElement.prototype.constructor = CanvasElement

CanvasElement.prototype.notice = function(evt) {
    return this.is_in(evt) ? this : false
}
