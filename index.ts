// setCookies(["token-local=foo;expires=20210101021234;domain=snap.app","token-dev=bar;expires=20210101021234;domain=snap.app"], {'token-local': 'baz'})
//
export const setCookies = (allCookies, cookies = {}) => {
  try {
    if (allCookies && cookies) {
      allCookies.forEach((cookie) => {
        const data = cookie.split(';').map((c) => {
          return c.split("=")
        }).reduce((result, element) => {
          result[element[0].trim().toLowerCase()] = element[element.length - 1]
          return result
        }, {})
        const cookieSuffix = ['token-local', 'token-dev', 'token-staging', 'token']
        cookieSuffix.map((name) => {
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

interface Cookie {
"domain": string
"expires": string
"httponly": boolean
"secure": boolean
"value": string
}

interface Result {
  [key: string]: Cookie
}

export const rewrite = (allCookies: string[], cookies: any = {}) => {
  return ['local', 'dev', 'staging', ''].map(tok => !!tok ? 'token-' + tok : 'token').map(name => {
	  return allCookies.map(c => c.split(";").map(e=> e.split("="))).filter(cook => { return cook[0][0] === name}).map(ck => {
		  return {[name]: {
			  [ck[1][0]]: ck[1][1],
			  [ck[2][0]]: ck[2][1],
			  "httponly": true,
			  "secure": true,
			  "value": ck[0][1]
		  }}
	  })
  }).filter(e => !!e[0]).map(p => p[0])
  
}
