// We have a route function that should accept fully
// qualified routes that start with a / as the base.
//
// How would we get TypeScript to allow the use cases
// titled 'SUCCEED' and how would we get TypeScript
// to fail the use cases titled 'FAIL'
//
// We'll want to change the Route type to add this
// functionality. Reference below:
//
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals

import { Expect, NotEqual } from "./type-assertions";

//
type Route = `/${string}`;

export const goToRoute = (route: Route) => {};

// SUCCEED
goToRoute("/users");
goToRoute("/");
goToRoute("/admin/users");

// FAIL
goToRoute("users/1");
goToRoute("http://facebook.com");

type tests = [
  Expect<NotEqual<"/users", Route>>,
  Expect<NotEqual<"/users", Route>>
];
