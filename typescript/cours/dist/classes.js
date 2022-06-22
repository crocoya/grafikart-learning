"use strict";
/// PREMIERE PARTIE
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _a, _Geometry2_origin;
function reverse(arr) {
    return [...arr].reverse();
}
class A {
    constructor() {
        this.a = 3;
    }
    log() {
        console.log(this.a);
    }
}
class AA {
    constructor() {
        this.a = 3;
    }
    log() {
        console.log(this.a);
    }
}
class AAA {
    constructor() {
        this.a = 3;
    }
    log() {
        console.log(this.a);
    }
}
const aInstance = new A();
// console.log(aInstance.a) => propriété privé
aInstance.log();
class Z {
    constructor(z) {
        this.z = z;
    }
}
class Collection {
    constructor(items) {
        this.items = items;
    }
    add(item) {
        this.items.push(item);
        return this;
    }
    first() {
        return this.items[0] || null;
    }
    isEqual(a) {
        return a.items == this.items;
    }
}
class SubCollection extends Collection {
    constructor() {
        super(...arguments);
        this.a = 3;
    }
}
const w = new Collection([1, 2]);
const x = w.add(3);
const y = w.first();
/// DEUXIEME PARTIE
class Point {
    constructor() {
        this.x = 0;
        this.y = 0;
    }
}
class Geom {
    constructor() {
        this.x = 0;
        this.y = 0;
        this.surface = 0;
    }
}
function getX(p) {
    return p.x;
}
getX(new Geom());
/// TROISIEME PARTIE
class Geometry {
    constructor() {
        this.x = 0;
        this.y = 0;
    }
}
class Triangle extends Geometry {
    constructor() {
        super(...arguments);
        this.x = 2;
        this.y = 2;
    }
    surface() {
        return 3;
    }
}
/// DERNIERE PARTIE
class Geometry2 {
}
_a = Geometry2;
_Geometry2_origin = { value: void 0 };
(() => {
    __classPrivateFieldSet(Geometry2, _a, { x: 0, y: 0 }, "f", _Geometry2_origin);
})();
class Geometry3 {
    constructor(x, y) { }
}
Geometry3.origin = { x: 0, y: 0 };
class Triangle2 {
    constructor(x, y) { }
}
function shapeGenerator(shapeType, x, y) {
    return new shapeType(x, y);
}
shapeGenerator(Geometry3, 10, 20);
shapeGenerator(Triangle, 10, 20);
