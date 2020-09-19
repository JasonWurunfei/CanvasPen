export default class List {
    constructor(l) {
        this.body = l
    }

    append(el) { this.body.push(el) }
    pop() { return this.body.pop() }
}