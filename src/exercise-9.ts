import { Equal, Expect } from "type-assertions";

// How would we do the same thing, but with an array?
//
// Hint: You'll be using the solution from the first excercise, because TypeScript
// doesn't think it's immutable. You'll also need `typeof`
//
// More Info: Based on the solution above and what you know about Array lookups
// in general. How would you 'guess' this could be done?
//
const fruits = ["apple", "banana", "orange"];

type AppleOrBanana = unknown;
type Fruit = unknown;

type secondTest = [
  Expect<Equal<AppleOrBanana, "apple" | "banana">>,
  Expect<Equal<Fruit, "apple" | "banana" | "orange">>,
];
