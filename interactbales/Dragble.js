const dragble = {
    mousedown : function({evt}) {
        this.offset = {dx: this.x - evt.x, dy: this.y - evt.y}
    },
    pressedOn : function({ctx, evt}) {
        this.x = evt.x + this.offset.dx
        this.y = evt.y + this.offset.dy
        this.canvas.fresh()
    }
}

export default dragble
