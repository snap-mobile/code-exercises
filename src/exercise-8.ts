import { Equal, Expect } from "type-assertions";

// We want to derive a new type that represents the types from
// either GROUP or ANNOUNCEMENT. How could we do that?
//
// Hint: You'll be using the solution from the first excercise, because TypeScript
// doesn't think it's immutable. You'll also need `typeof`
//
// More Reading: https://www.typescript-training.com/course/intermediate-v1/08-indexed-access-types
//
export const programModeEnumMap = {
  GROUP: "group",
  ANNOUNCEMENT: "announcement",
  ONE_ON_ONE: "1on1",
  SELF_DIRECTED: "selfDirected",
  PLANNED: {
    ONE_ON_ONE: "planned1on1",
    SELF_DIRECTED: "plannedSelfDirected",
  }
} as const;

export type GroupProgram = typeof programModeEnumMap["GROUP" | "ANNOUNCEMENT"];

type tests = [
  Expect<
    Equal<
      GroupProgram,
      "group" | "announcement"
    >
  >,
];