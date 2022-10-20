// setCookies(["token-local=foo;expires=20210101021234;domain=snap.app","token-dev=bar;expires=20210101021234;domain=snap.app"], {'token-local': 'baz'})
const setCookies = (allCookies = [], cookies = {}) => {
  if (allCookies.length === 0 || Object.keys(cookies).length === 0) return {};
  const cookieValueHash = {};
  allCookies.forEach((cookie) => {
    cookie.split(";").forEach((c) => {
      const [key, value] = c.split("=");
      cookieValueHash[key] = value;
    });
    const cookieSuffix = ["token-local", "token-dev", "token-staging", "token"];
    cookieSuffix.forEach((name) => {
      if (cookieValueHash[name]) {
        cookies[`${name}`] = {
          value: cookieValueHash[name],
          expires: cookieValueHash["expires"],
          domain: cookieValueHash["domain"],
          httponly: true,
          secure: true,
        };
      }
    });
  });
  return cookies;
};
