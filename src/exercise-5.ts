import { Equal, Expect } from "type-assertions";

type Routes = "/users" | "/users/:id" | "/posts" | "/posts/:id";

// Building off of what we did in Exercise 4, can we create
// a type that would match only the dynamic routes in our collection
// of Routes above? (the ones that take an `:id`)
//
// You'll need a Utility Type to help you here:
//
// https://www.typescriptlang.org/docs/handbook/utility-types.html#extracttype-union
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
//
type DynamicRoutes = unknown;

type tests = [Expect<Equal<DynamicRoutes, "/users/:id" | "/posts/:id">>];