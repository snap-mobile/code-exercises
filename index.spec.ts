import {rewrite, setCookies} from "."

it("should not break", () => {
  const result = rewrite(["token-local=foo;expires=20210101021234;domain=snap.app","token-dev=bar;expires=20210101021234;domain=snap.app"], {'token-local': 'baz'})

  expect(result).toEqual({"token-dev": {"domain": "snap.app", "expires": "20210101021234", "httponly": true, "secure": true, "value": "bar"}, "token-local": {"domain": "snap.app", "expires": "20210101021234", "httponly": true, "secure": true, "value": "foo"}})
})
