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
    constructor(canvas) {
        this.canvas = canvas
    }
}
