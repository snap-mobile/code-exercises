// DEPRECATED: setCookies(["token-local=foo;expires=20210101021234;domain=snap.app","token-dev=bar;expires=20210101021234;domain=snap.app"], {'token-local': 'baz', 'another-addition': 'added!'})

// Function definition changed!!
// setCookies(
//   ['token-local', 'token-dev', 'token-staging', 'token'],
//   ["token-local=foo;expires=20210101021234;domain=snap.app","token-dev=bar;expires=20210101021234;domain=snap.app"],
//   {'token-local': 'baz', 'another-addition': 'added!'})
const setCookies = (cookieSuffix, allCookies, cookies = {}) => {
  try {
    if (allCookies && cookies && cookieSuffix.length > 0) {
      allCookies.forEach((cookie) => {
        let name = ''
        const data = cookie.split(';')
        data.map((item, idx) => {
          const values = item.split('=');
          if (cookieSuffix.includes(values[0])) {
            name = values[0]
            cookies[name] = {value: values[1]}
          } else {
            cookies[name] = {...cookies[name],[values[0]]: values[1]}
          }
          if (idx === data.length - 1) {
            cookies[name] = {...cookies[name], httponly: true, secure: true}
          }
        })
      })
        return cookies
    }
  } catch(err) {
    console.error(err);
  }
}
