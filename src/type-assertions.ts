export type Expect<T extends true> = T;

export type Equal<X, Y> = (<T>() => T extends X ? 1 : 2) extends <
  T
>() => T extends Y ? 1 : 2
  ? true
  : false;

export type NotEqual<X, Y> = (<T>() => T extends X ? 2 : 1) extends <
  T
>() => T extends Y ? 2 : 1
  ? true
  : false;
