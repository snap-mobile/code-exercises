const f = (a, c = {}) => {
    a.forEach((k) => {
      d = k.split(';').map((c) => c.split("=")).reduce((r, e) => {
        r[e[0].trim().toLowerCase()] = e[e.length - 1]
        return r
      }, {})
      const s = ['token-local', 'token-dev', 'token-staging', 'token']
      s.forEach((n) => {
        d[n] ?
          c[`${n}`] = {
            value: d[n],
            expires: d["expires"],
            domain: d["domain"],
            httponly: true,
            secure: true
          }
         : ''
      })
    })
  return c
}

module.exports = {f};