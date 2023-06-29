import { Equal, Expect } from "type-assertions";

const myFunc = () => {
  return "hello";
};

/**
 * How do we extract the type that is returned from myFunc?
 *
 * https://www.typescriptlang.org/docs/handbook/utility-types.html
 * https://www.typescriptlang.org/docs/handbook/2/typeof-types.html
 */
type MyFuncReturn = unknown;

type tests = [Expect<Equal<MyFuncReturn, string>>];