declare class Poisson {
}
declare class Chat {
}
declare type AnimalOptions = {
    nager: any;
} | {
    sauter: any;
};
declare type AnimalFromOptions<T> = T extends {
    nager: any;
} ? Poisson : Chat;
declare function generator<T extends AnimalOptions>(options: T): AnimalFromOptions<T>;
declare const aZe: Poisson;
declare class PoissonA {
    cri(): boolean;
}
declare class ChatA {
    cri(): string;
}
declare type AnimalCri<T> = T extends {
    cri: () => infer U;
} ? U : never;
declare type AC = AnimalCri<ChatA>;
declare type BC = AnimalCri<PoissonA>;
declare class FeatureFlags {
    env: string;
    darkMode(): boolean;
    privateMode(): boolean;
    nsfwMode(): boolean;
}
declare type OptionsFlag<T> = {
    +readonly [key in keyof T as `get${string & key}`]: T[key] extends () => boolean ? boolean : never;
};
declare type AF = OptionsFlag<FeatureFlags>;
