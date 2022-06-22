declare function aB(arg: unknown): void;
declare const aC: {
    readonly isPrivate: true;
    readonly isPublic: false;
};
declare type ListItem = [string, number];
declare const aA: ListItem;
declare const bB: ListItem;
declare function merge<T extends unknown[], U extends unknown[]>(aA: T, bB: U): (T[number] | U[number])[];
declare enum STEPS {
    Intro = 0,
    Selection = 1,
    Panier = 2,
    Paiement = 3
}
declare let step: STEPS;
declare function demo(): void;
