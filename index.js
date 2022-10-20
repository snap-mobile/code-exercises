// setCookies(["token-local=foo;expires=20210101021234;domain=snap.app","token-dev=bar;expires=20210101021234;domain=snap.app"], {'token-local': 'baz'})
//
const setCookies = (allCookies, cookies = {}) => {
  try {
    if (allCookies && cookies) {
      allCookies.forEach((cookie) => {
        data = cookie.split(';').map((c) => {
          return c.split("=")
        }).reduce((result, element) => {
          result[element[0].trim().toLowerCase()] = element[element.length - 1]
          return result
        }, {})
        const cookieSuffix = ['token-local', 'token-dev', 'token-staging', 'token']
        cookieSuffix.forEach((name) => {
          if (data[name]) {
            cookies[`${name}`] = {
              value: data[name],
              expires: data["expires"],
              domain: data["domain"],
              httponly: true,
              secure: true
            }
          }
        })
      })
      return cookies
    }
  } catch(err) {
    console.error(err);
  }
}
