type User = { firstname: string; lastname: string }; // Alias de type
type DateString = string;
type Id = string | number;
type Identity<ArgType> = (arg: ArgType) => ArgType;
type Username = User['firstname'];
// NE SERA PAS EXPORTER DANS LE CODE JS

// Alias permet de simplifier la vie pour les types complexes et eviter les répétitions.
// Generics permet d'avoir des sorties de paramètres.
// Certains paramètres peuvent être deviner automatiquement.

const userTest = {
  firstname: 'John',
  lastname: 'Doe',
  age: 32,
};

type User2 = typeof userTest;

function consoleSize<Type extends { length: number }>(arg: Type): Type {
  console.log(arg.length);
  return arg;
}

const abb = consoleSize(['3', 2]);

function identity<ArgType>(arg: ArgType): ArgType {
  return arg;
}

const aa = identity<number>(3);

function first<Type>(arg: Type[]): Type {
  return arg[0];
}

const aaa: Array<string | number> = ['aze', 'cze', 3];

const a: string = 'Hello world';
const n: number = 3;
const b: boolean = true;
const d: null = null;
const date: DateString = 'string';
const arr: string[] = ['aze', 'aze'];
const arr2: any[] = ['aze', 'aze', 3];
const user: { firstname: string; lastname?: string } = {
  firstname: 'John',
  lastname: 'Doe',
};
const user2: { firstname: string; [key: string]: string } = {
  firstname: 'John',
  lastname: 'Doe',
};
const date2: Date = new Date();
const cb: (e: MouseEvent) => void = (e: MouseEvent): number => {
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

function example(a: string | string[]) {
  if (Array.isArray(a)) {
    return a[0];
  }
  return;
}

function isDate(a: any): a is Date {
  return a instanceof Date;
}

function example2(a: Date | HTMLInputElement) {
  if (isDate(a)) {
    a;
  }
}

const compteur = document.querySelector<HTMLButtonElement>('#compteur');
let i = 0;

const increment = (e: Event) => {
  e.preventDefault();
  i++;
  const span = compteur?.querySelector('span');

  if (span) {
    span.innerText = i.toString();
  }
};

compteur?.addEventListener('click', increment);
