import { Equal, Expect } from "type-assertions";

const getUser = () => {
  return Promise.resolve({
    id: "123",
    name: "John",
    email: "john@example.com",
  });
};

/**
 * Since this is a Promise, how would we extract the return type of the
 * getUser function? You'll need to enlist the help of an additional
 * utility.
 *
 * https://www.typescriptlang.org/docs/handbook/utility-types.html
 */
type ReturnValue = Awaited<ReturnType<typeof getUser>>;

type tests = [
  Expect<Equal<ReturnValue, { id: string; name: string; email: string }>>
];
