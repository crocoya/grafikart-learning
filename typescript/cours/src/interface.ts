// Interface ouverte et flexible
interface Point {
  x: number;
}

interface Point {
  y: number;
}

interface Window {
  googleAnalytics: string;
}

window.googleAnalytics;

interface PointA {
  x: number;
  y: number;
}

class TwoDimensionPoint implements PointA {
  x = 0;
  y = 0;
}

function draw(p: PointA) {}

draw(new TwoDimensionPoint());

// Entre type et interface on peut faire plusieurs choses en communs
// Type : ne sont pas ouvert, peut pas modifier après être défini.
// Interface : peuvent être étendu, explicitement implémenté une class.
