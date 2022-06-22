declare function reverse<T>(arr: readonly T[]): T[];
declare class A {
    private a;
    log(): void;
}
declare class AA {
    protected a: number;
    log(): void;
}
declare class AAA {
    a: number;
    log(): void;
}
declare const aInstance: A;
declare class Z {
    z: number;
    constructor(z: number);
}
declare class Collection<T> {
    private items;
    constructor(items: T[]);
    add(item: T): this;
    first(): T | null;
    isEqual(a: this): boolean;
}
declare class SubCollection<T> extends Collection<T> {
    a: number;
}
declare const w: Collection<number>;
declare const x: Collection<number>;
declare const y: number | null;
declare class Point {
    x: number;
    y: number;
}
declare class Geom {
    x: number;
    y: number;
    surface: number;
}
declare function getX(p: Point): number;
declare abstract class Geometry {
    x: number;
    y: number;
    abstract surface(): number;
}
declare class Triangle extends Geometry {
    x: number;
    y: number;
    surface(): number;
}
declare abstract class Geometry2 {
    #private;
}
declare class Geometry3 {
    static origin: {
        x: number;
        y: number;
    };
    constructor(x: number, y: number);
}
declare class Triangle2 {
    constructor(x: number, y: number);
}
declare type InstantiableShape = {
    new (x: number, y: number): {};
};
declare function shapeGenerator(shapeType: InstantiableShape, x: number, y: number): {};
