// setCookies(["token-local=foo;expires=20210101021234;domain=snap.app","token-dev=bar;expires=20210101021234;domain=snap.app"], {'token-local': 'baz'})

// 29 lines of code
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
  } catch (err) {
    console.error(err);
  }
}

// 24 lines of code
const setNewCookies = (allCookies, cookies = {}) => {
  if (!allCookies) return cookies;
  if (!Array.isArray(allCookies)) return cookies;
  allCookies.forEach((cookie) => {
    const cookieData = cookie.split(';').map((c) => {
      return c.split("=")
    }).reduce((result, element) => {
      result[element[0].trim().toLowerCase()] = element[element.length - 1]
      return result
    }, {});

    ['token-local', 'token-dev', 'token-staging', 'token'].forEach((name) => {
      if (!cookieData[name]) return;
      cookies[`${name}`] = {
        value: cookieData[name],
        expires: cookieData["expires"],
        domain: cookieData["domain"],
        httponly: true,
        secure: true
      }
    })
  })
  return cookies
} 

const cookies = setNewCookies(["token-local=foo;expires=20210101021234;domain=snap.app", "token-dev=bar;expires=20210101021234;domain=snap.app"], { 'token-local': 'baz' })
console.log('Old Cookie',cookies)

const newCookies = setCookies(["token-local=foo;expires=20210101021234;domain=snap.app", "token-dev=bar;expires=20210101021234;domain=snap.app"], { 'token-local': 'baz' })
console.log('New Cookie', newCookies)