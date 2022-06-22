"use strict";
window.googleAnalytics;
class TwoDimensionPoint {
    constructor() {
        this.x = 0;
        this.y = 0;
    }
}
function draw(p) { }
draw(new TwoDimensionPoint());
// Entre type et interface on peut faire plusieurs choses en communs
// Type : ne sont pas ouvert, peut pas modifier après être défini.
// Interface : peuvent être étendu, explicitement implémenté une class.
