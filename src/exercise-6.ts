import { Equal, Expect } from "type-assertions";

type BreadType = "rye" | "brown" | "white";

type Filling = "cheese" | "ham" | "salami";

// We want Sandwich to be a union of every permutation of
// the unions BreadType and Filling such that our test passes:
//
// https://www.sitepen.com/blog/taming-strings-with-template-literal-types
//
type Sandwich = unknown;

type tests = [
  Expect<
    Equal<
      Sandwich,
      | "rye sandwich with cheese"
      | "rye sandwich with ham"
      | "rye sandwich with salami"
      | "brown sandwich with cheese"
      | "brown sandwich with ham"
      | "brown sandwich with salami"
      | "white sandwich with cheese"
      | "white sandwich with ham"
      | "white sandwich with salami"
    >
  >
];