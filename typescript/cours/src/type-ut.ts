/// PREMIERE PARTIE
class Poisson {}

class Chat {}

type AnimalOptions = { nager: any } | { sauter: any };
type AnimalFromOptions<T> = T extends { nager: any } ? Poisson : Chat;

function generator<T extends AnimalOptions>(options: T): AnimalFromOptions<T> {
  if ('nager' in options) {
    return new Poisson();
  } else {
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

type AnimalCri<T> = T extends { cri: () => infer U } ? U : never;

type AC = AnimalCri<ChatA>;
type BC = AnimalCri<PoissonA>;

/// TROISIEME PARTIE
class FeatureFlags {
  env = 'hello';
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

type OptionsFlag<T> = {
  +readonly [key in keyof T as `get${string &
    key}`]: T[key] extends () => boolean ? boolean : never;
};

type AF = OptionsFlag<FeatureFlags>;
