import { Equal, Expect } from "type-assertions";

// We want to extract types from this Enum, but TypeScript knows
// that the object can be mutated and doesn't want to trust it.
//
// How can we use TypeScript to make this config immutable?
//
// Research Hint: it's a feature introduced in TypeScript 3.4
//
export const programModeEnumMap = {
  GROUP: "group",
  ANNOUNCEMENT: "announcement",
  ONE_ON_ONE: "1on1",
  SELF_DIRECTED: "selfDirected",
  PLANNED: {
    ONE_ON_ONE: "planned1on1",
    SELF_DIRECTED: "plannedSelfDirected",
  },
} as const;

export type GroupProgram = (typeof programModeEnumMap)["GROUP"];
export type AnnouncementProgram = (typeof programModeEnumMap)["ANNOUNCEMENT"];
export type OneOnOneProgram = (typeof programModeEnumMap)["ONE_ON_ONE"];
export type SelfDirectedProgram = (typeof programModeEnumMap)["SELF_DIRECTED"];
export type PlannedOneOnOneProgram =
  (typeof programModeEnumMap)["PLANNED"]["ONE_ON_ONE"];
export type PlannedSelfDirectedProgram =
  (typeof programModeEnumMap)["PLANNED"]["SELF_DIRECTED"];

type tests = [
  Expect<Equal<GroupProgram, "group">>,
  Expect<Equal<AnnouncementProgram, "announcement">>,
  Expect<Equal<OneOnOneProgram, "1on1">>,
  Expect<Equal<SelfDirectedProgram, "selfDirected">>,
  Expect<Equal<PlannedOneOnOneProgram, "planned1on1">>,
  Expect<Equal<PlannedSelfDirectedProgram, "plannedSelfDirected">>
];
