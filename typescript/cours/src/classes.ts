/// PREMIERE PARTIE

function reverse<T>(arr: readonly T[]): T[] {
  return [...arr].reverse();
}

class A {
  private a = 3;

  log() {
    console.log(this.a);
  }
}

class AA {
  protected a = 3;

  log() {
    console.log(this.a);
  }
}

class AAA {
  public a = 3;

  log() {
    console.log(this.a);
  }
}

const aInstance = new A();
// console.log(aInstance.a) => propriété privé
aInstance.log();

class Z {
  constructor(public z: number) {}
}

class Collection<T> {
  constructor(private items: T[]) {}

  add(item: T): this {
    this.items.push(item);
    return this;
  }

  first(): T | null {
    return this.items[0] || null;
  }

  isEqual(a: this) {
    return a.items == this.items;
  }
}

class SubCollection<T> extends Collection<T> {
  a = 3;
}

const w = new Collection([1, 2]);
const x = w.add(3);
const y = w.first();

/// DEUXIEME PARTIE

class Point {
  x = 0;
  y = 0;
}

class Geom {
  x = 0;
  y = 0;
  surface = 0;
}

function getX(p: Point) {
  return p.x;
}

getX(new Geom());

/// TROISIEME PARTIE
abstract class Geometry {
  x = 0;
  y = 0;
  abstract surface(): number;
}

class Triangle extends Geometry {
  x = 2;
  y = 2;

  surface() {
    return 3;
  }
}

/// DERNIERE PARTIE

abstract class Geometry2 {
  static #origin: { x: number; y: number };

  static {
    Geometry2.#origin = { x: 0, y: 0 };
  }
}

class Geometry3 {
  static origin: { x: number; y: number } = { x: 0, y: 0 };

  constructor(x: number, y: number) {}
}

class Triangle2 {
  constructor(x: number, y: number) {}
}

type InstantiableShape = {
  new (x: number, y: number): {};
};

function shapeGenerator(shapeType: InstantiableShape, x: number, y: number) {
  return new shapeType(x, y);
}

shapeGenerator(Geometry3, 10, 20);
shapeGenerator(Triangle, 10, 20);
