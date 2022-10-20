// setCookies(["token-local=foo;expires=20210101021234;domain=snap.app","token-dev=bar;expires=20210101021234;domain=snap.app"], {'token-local': 'baz'})
//
const setCookies = (allCookies, cookies = {}) => {
  if (allCookies && cookies) {
    return allCookies.reduce((merged, cookie) => {
      const data = cookie.split(';').map((c) => c.split("=")).reduce((r, e) => ({
        ...r,
        [e[0].trim().toLowerCase()]: e.at(-1),
      }), {})
      const name = Object.keys(data)[0];
      const cs = ['token-local', 'token-dev', 'token-staging', 'token']
      return cs.indexOf(name) !== -1 ?
        {
          ...merged,
          [name]: {
            value: data[name],
            expires: data.expires,
            domain: data.domain,
            httponly: true,
            secure: true
          }
        }
        : merged
    }, cookies)
  }
}
