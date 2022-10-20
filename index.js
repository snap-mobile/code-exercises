const setCookies = (allCookies, cookies = {}) => {
  try {
    const suffixes = ["token-local", "token-dev", "token"];
    if (allCookies && cookies) {
      allCookies.forEach((cookieString) => {
        let name;
        const cookie = {};
        const data = cookieString.split(";");
        data.forEach((item, idx) => {
          const [key, value] = item.split("=");
          if (suffixes.includes(key)) {
            name = key;
            cookie.value = value;
          } else {
            cookie[key] = value;
          }
        });
        console.log("name cookie", name, cookie);
        if (name) {
          cookies[name] = cookie;
        }
      });
      return cookies;
    }
  } catch (err) {
    console.error(err);
  }
};

console.log(
  setCookies(
    [
      "token-local=foo;expires=20210101021234;domain=snap.app",
      "token-dev=bar;expires=20210101021234;domain=snap.app",
    ],
    { "token-local": "baz", "another-addition": "added!" }
  )
);
