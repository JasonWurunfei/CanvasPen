const canvas = document.getElementById("canvas")
export default canvas

canvas.fresh = function () {
    this.width = window.innerWidth * 0.5
    this.height = window.innerHeight * 0.5
    ctx.strokeRect(0, 0, this.width, this.height)
    this.register.forEach(el => el.draw(ctx))
}

window.addEventListener('resize', () => canvas.fresh())

// canvas
canvas.register = []
canvas.broadcast = function broadcast(evt) {
    for (let el of this.register) {
        if (el.notice(evt)) {
            return el
        }
    }
}

let ctx
if (canvas.getContext) {
    ctx = canvas.getContext('2d');
}
canvas.fresh()

//click
canvas.addEventListener('click', evt => {
    let target = canvas.broadcast(evt)
    if (target != undefined && target.click != undefined)
        target.click(ctx, evt)
})


// mousedown
canvas.addEventListener('mousedown', evt => {
    let target = canvas.broadcast(evt)
    if (target != undefined && target.mousedown != undefined)
        target.mousedown({ctx, evt})
})


//drag
let drag_target
let pressedOn = function({ctx, evt}) {
    drag_target = drag_target == undefined ? canvas.broadcast(evt): drag_target
    if (drag_target != undefined && drag_target.pressedOn != undefined)
        drag_target.pressedOn({ctx, evt})
}

let pressedOn_called
canvas.addEventListener('mousedown', () => {
    pressedOn_called = function(evt) { pressedOn({ctx, evt}) }
    canvas.addEventListener('mousemove', pressedOn_called)
    canvas.addEventListener('mouseup', pressedOff)
})

let pressedOff = function() {
    canvas.removeEventListener('mousemove', pressedOn_called)
    canvas.removeEventListener('mouseup', pressedOff)
    drag_target = undefined
    pressedOn_called = undefined
}
