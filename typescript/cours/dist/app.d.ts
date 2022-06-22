declare type User = {
    firstname: string;
    lastname: string;
};
declare type DateString = string;
declare type Id = string | number;
declare type Identity<ArgType> = (arg: ArgType) => ArgType;
declare type Username = User['firstname'];
declare const userTest: {
    firstname: string;
    lastname: string;
    age: number;
};
declare type User2 = typeof userTest;
declare function consoleSize<Type extends {
    length: number;
}>(arg: Type): Type;
declare const abb: (string | number)[];
declare function identity<ArgType>(arg: ArgType): ArgType;
declare const aa: number;
declare function first<Type>(arg: Type[]): Type;
declare const aaa: Array<string | number>;
declare const a: string;
declare const n: number;
declare const b: boolean;
declare const d: null;
declare const date: DateString;
declare const arr: string[];
declare const arr2: any[];
declare const user: {
    firstname: string;
    lastname?: string;
};
declare const user2: {
    firstname: string;
    [key: string]: string;
};
declare const date2: Date;
declare const cb: (e: MouseEvent) => void;
declare function example(a: string | string[]): string | undefined;
declare function isDate(a: any): a is Date;
declare function example2(a: Date | HTMLInputElement): void;
declare const compteur: HTMLButtonElement | null;
declare let i: number;
declare const increment: (e: Event) => void;
