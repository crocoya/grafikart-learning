"use strict";
// NE SERA PAS EXPORTER DANS LE CODE JS
// Alias permet de simplifier la vie pour les types complexes et eviter les répétitions.
// Generics permet d'avoir des sorties de paramètres.
// Certains paramètres peuvent être deviner automatiquement.
const userTest = {
    firstname: 'John',
    lastname: 'Doe',
    age: 32,
};
function consoleSize(arg) {
    console.log(arg.length);
    return arg;
}
const abb = consoleSize(['3', 2]);
function identity(arg) {
    return arg;
}
const aa = identity(3);
function first(arg) {
    return arg[0];
}
const aaa = ['aze', 'cze', 3];
const a = 'Hello world';
const n = 3;
const b = true;
const d = null;
const date = 'string';
const arr = ['aze', 'aze'];
const arr2 = ['aze', 'aze', 3];
const user = {
    firstname: 'John',
    lastname: 'Doe',
};
const user2 = {
    firstname: 'John',
    lastname: 'Doe',
};
const date2 = new Date();
const cb = (e) => {
    return 3;
};
// const compteur = document.querySelector('#compteur') as HTMLButtonElement;
// function printId(id: number | string): void {
//   console.log(id.toString());
// }
// function printId(id: string | number) {
//   if (typeof id == 'number') {
//     console.log((id * 3).toString());
//   } else {
//     console.log(id.toUpperCase());
//   }
// }
function example(a) {
    if (Array.isArray(a)) {
        return a[0];
    }
    return;
}
function isDate(a) {
    return a instanceof Date;
}
function example2(a) {
    if (isDate(a)) {
        a;
    }
}
const compteur = document.querySelector('#compteur');
let i = 0;
const increment = (e) => {
    e.preventDefault();
    i++;
    const span = compteur === null || compteur === void 0 ? void 0 : compteur.querySelector('span');
    if (span) {
        span.innerText = i.toString();
    }
};
compteur === null || compteur === void 0 ? void 0 : compteur.addEventListener('click', increment);
