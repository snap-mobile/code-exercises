// setCookies(["token-local=foo;expires=20210101021234;domain=snap.app","token-dev=bar;expires=20210101021234;domain=snap.app"], {'token-local': 'baz'})
//
const setCookies = (allCookies, cookies = {}) => {
  if (!allCookies.length) {
    return cookies;
  }
  return allCookies.map((cookie) => {
    data = cookie.split(';').map((c) => {
      return c.split("=");
    });
    props = data.map(prop => {
      const obj = {};
      obj[`${prop[0]}`.trim().toLowerCase()] = prop[1];
      
      return obj;
    });
    return props.reduce((acc, curr) => {
      return {...acc, ...curr};
    }, {});
  }).reduce((acc, curr) => {
    const c = {};
    const name = Object.keys(curr)[0];
    c[`${name}`] = {
       value: curr[name],
       expires: curr.expires,
       domain: curr.domain,
       httponly: true,
       secure: true
    }
    return {...acc, ...c}
  }, {});
};

const x = setCookies(["token-local=foo;expires=20210101021234;domain=snap.app","token-dev=bar;expires=20210101021234;domain=snap.app"], {'token-local': 'baz'})

console.log(x);