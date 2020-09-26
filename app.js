import canvas from './base/Canvas.js'
import Square from './Shapes/Square.js'
import Circle from './Shapes/Circle.js'
import dragble from './interactbales/Dragble.js'

let ctx = canvas.getContext('2d')

let s1 = new Square(50, 50, 50, 50)
let s2 = new Square(150, 150, 50, 50)
let c1 = new Circle(300, 150, 25)
c1.draw = c1.stroke

canvas.register.push(s1)
canvas.register.push(s2)
canvas.register.push(c1)

dragble.canvas = canvas
Object.assign(s1, dragble)
Object.assign(s2, dragble)
Object.assign(c1, dragble)

canvas.fresh()
