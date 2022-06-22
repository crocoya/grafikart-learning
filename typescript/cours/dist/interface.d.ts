interface Point {
    x: number;
}
interface Point {
    y: number;
}
interface Window {
    googleAnalytics: string;
}
interface PointA {
    x: number;
    y: number;
}
declare class TwoDimensionPoint implements PointA {
    x: number;
    y: number;
}
declare function draw(p: PointA): void;
