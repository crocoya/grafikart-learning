// const a: string = 'Hello world';
// const n: number = 3;
// const b: boolean = true;
// const d: null = null;
// const arr: string[] = ['aze', 'aze'];
// const arr2: any[] = ['aze', 'aze', 3];
// const user: { firstname: string; lastname?: string } = {
//   firstname: 'John',
//   lastname: 'Doe',
// };
// const user2: { firstname: string; [key: string]: string } = {
//   firstname: 'John',
//   lastname: 'Doe',
// };
// const date: Date = new Date();
// const cb: (e: MouseEvent) => void = (e: MouseEvent): number => {
//   return 3;
// };

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

// function example(a: string | string[]) {
//   if (Array.isArray(a)) {
//     return a[0];
//   }
//   return;
// }

// function isDate(a: any): a is Date {
//   return a instanceof Date;
// }

// function example2(a: Date | HTMLInputElement) {
//   if (isDate(a)) {
//     a;
//   }
// }

const compteur = document.querySelector('#compteur');
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
