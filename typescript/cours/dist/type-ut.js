"use strict";
/// PREMIERE PARTIE
class Poisson {
}
class Chat {
}
function generator(options) {
    if ('nager' in options) {
        return new Poisson();
    }
    else {
        return new Chat();
    }
}
const aZe = generator({ nager: 'aze' });
/// DEUXIEME PARTIE
class PoissonA {
    cri() {
        return false;
    }
}
class ChatA {
    cri() {
        return 'miaouu';
    }
}
/// TROISIEME PARTIE
class FeatureFlags {
    constructor() {
        this.env = 'hello';
    }
    darkMode() {
        return true;
    }
    privateMode() {
        return true;
    }
    nsfwMode() {
        return true;
    }
}
