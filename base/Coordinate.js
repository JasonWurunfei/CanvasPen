export default function Coordinate(x, y, z = 0) {
    this.x = x;
    this.y = y;
    this.z = z;
}

Coordinate.add = function(c1, c2) {
    if (c1.constructor != Coordinate ||
        c2.constructor != Coordinate)
        throw Error("The given arguments must be Coordiante objects.")
    return new Coordinate(c1.x + c2.x,
                          c1.y + c2.y,
                          c1.z + c2.z)
};

Coordinate.prototype.multi = function(ratio) {
    return new Coordinate(this.x*ratio, this.y*ratio, this.z*ratio)
}
