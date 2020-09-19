class Coordinate {
    constructor(x, y, z) {
        this.x = x
        this.y = y
        this.z = z
    }
}

class Element {
    constructor(coordinate, parent, childs) {
        this.coordinate = coordinate
        this.parent = parent
        this.childs = childs
    }

    addChild(el) { this.childs.append(el) }
}

class Editor {
    constructor(canvas, width, height) {
        this.canvas = canvas
        this.canvas.width = width
        this.canvas.height = height


        // computed attributes
        this.width = this.canvas.width
        this.height = this.canvas.height

        // create canvas obeject
        if (this.canvas.getContext){
            this.ctx = this.canvas.getContext('2d')
        } else {
            throw {
                toString: function() {
                    return "HTML 5 canvas is not supported on this browser."
                } 
            }
        }
    }
}
