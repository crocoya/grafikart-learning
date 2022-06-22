"use strict";
function aB(arg) {
    if (arg instanceof HTMLInputElement) {
        arg.value = 'Hello';
    }
}
const aC = { isPrivate: true, isPublic: false };
const aA = ['tomate', 2];
const bB = ['banane', 3];
function merge(aA, bB) {
    return [...aA, ...bB];
}
var STEPS;
(function (STEPS) {
    STEPS[STEPS["Intro"] = 0] = "Intro";
    STEPS[STEPS["Selection"] = 1] = "Selection";
    STEPS[STEPS["Panier"] = 2] = "Panier";
    STEPS[STEPS["Paiement"] = 3] = "Paiement";
})(STEPS || (STEPS = {}));
let step = STEPS.Selection;
function demo() {
    step = STEPS.Paiement;
}
