const {f} = require('./index');

// setCookies(
//  ["token-local=foo;expires=20210101021234;domain=snap.app","token-dev=bar;expires=20210101021234;domain=snap.app"], 
//  {'token-local': 'baz'}
//)

test("test", () => {
  expect(f(["token-local=foo;expires=20210101021234;domain=snap.app","token-dev=bar;expires=20210101021234;domain=snap.app"], {'token-local': 'baz'})).toMatchObject({
    "token-dev": {
      "domain": "snap.app",
      "expires": "20210101021234",
      "httponly": true,
      "secure": true,
      "value": "bar",
    },
    "token-local": {
      "domain": "snap.app",
      "expires": "20210101021234",
      "httponly": true,
      "secure": true,
      "value": "foo",
    },
  })
})