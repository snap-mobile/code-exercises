import { Equal, Expect } from "type-assertions";

const makeQuery = (
  url: string,
  opts?: {
    method?: string;
    headers?: {
      [key: string]: string;
    };
    body?: string;
  }
) => {
  return "hello";
};

/**
 * This time we want to extract parameters from this makeQuery function.
 *
 * In order to get the types of the function parameters, you’ll need typeof as well as another utility type.
 *
 * Take a look around the TypeScript docs to see if any of the utility types there are any help.
 *
 * https://www.typescriptlang.org/docs/handbook/utility-types.html
 * https://www.typescriptlang.org/docs/handbook/2/typeof-types.html
 */
type MakeQueryParameters = Parameters<typeof makeQuery>;

type tests = [
  Expect<
    Equal<
      MakeQueryParameters,
      [
        url: string,
        opts?: {
          method?: string;
          headers?: {
            [key: string]: string;
          };
          body?: string;
        }
      ]
    >
  >
];
