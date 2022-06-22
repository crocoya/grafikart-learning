function aB(arg: unknown) {
  if (arg instanceof HTMLInputElement) {
    arg.value = 'Hello';
  }
}

const aC = { isPrivate: true, isPublic: false } as const;

type ListItem = [string, number];

const aA: ListItem = ['tomate', 2];
const bB: ListItem = ['banane', 3];

function merge<T extends unknown[], U extends unknown[]>(aA: T, bB: U) {
  return [...aA, ...bB];
}

enum STEPS {
  Intro,
  Selection,
  Panier,
  Paiement,
}

let step: STEPS = STEPS.Selection;
function demo() {
  step = STEPS.Paiement;
}
