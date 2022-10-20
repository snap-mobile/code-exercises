const setCookies2 = (allCookies, cookies = {}) => {
  const whiteList = ['token-local', 'token-dev', 'token-staging', 'token'];
  const result = {};

  allCookies.forEach((cookie) => {
    const array = cookie.split(';').map((x) => x.split('='))
    const cookieName = array.shift()[0];
    array.push(['value', cookieName]);
    array.push(['httponly', true]);
    array.push(['secure', true]);

    if (whiteList.includes(cookieName)) {
      const obj = Object.fromEntries(array.map(([k, v]) => [k, v]));
      result[cookieName] = obj;
    }
  });

  return { ...cookies, ...result };
}

const cookies = [
  "token-local=foo;expires=20210101021234;domain=snap.app",
  "token-dev=bar;expires=20210101021234;domain=snap.app"
]
const result = setCookies2(cookies, {'token-local2': 'baz'})
console.log(result);

/*
{
  'token-local2': 'baz',
  'token-local': {
    value: 'foo',
    expires: '20210101021234',
    domain: 'snap.app',
    httponly: true,
    secure: true
  },
  'token-dev': {
    value: 'bar',
    expires: '20210101021234',
    domain: 'snap.app',
    httponly: true,
    secure: true
  }
}
*/