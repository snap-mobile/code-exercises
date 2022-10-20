// setCookies(["token-local=foo;expires=20210101021234;domain=snap.app","token-dev=bar;expires=20210101021234;domain=snap.app"], {'token-local': 'baz'})
//

const processCookies = (cookies) => {
  new Promise((resolve, reject) => {
    const processedCookies = [];
    cookies.forEach((cookie) => {
      data = cookie
        .split(';')
        .map((c) => c.split('='))
        .reduce((result, element) => {
          result[element[0].trim().toLowerCase()] = element[element.length - 1];
          processedCookies.push(result);
        }, {});
    });
    resolve(processedCookies);
  });
};

const cookieObj = (name, processedCookies, cookies) => {
  new Promise((resolve, reject) => {
    const result = processedCookies.map((cookie) => {
      if (cookie[name]) {
        cookies[`${name}`] = {
          value: data[name],
          expires: data['expires'],
          domain: data['domain'],
          httponly: true,
          secure: true,
        };
      }
      return cookie;
    });
    resolve(result);
  });
};

const setCookies = async (allCookies, cookies = {}) => {
  try {
    if (!(allCookies && cookies))
      throw new Error('You must provide both arguments');
    processCookies(allCookies).then((data) => console.log(data));

    return Promise.all([
      await cookieObj('token-local', processedCookies, cookies),
      await cookieObj('token-dev', processedCookies, cookies),
      await cookieObj('token-staging', processedCookies, cookies),
      await cookieObj('token', processedCookies, cookies),
    ]);
  } catch (err) {
    console.error(err);
  }
};

result = setCookies(
  [
    'token-local=foo;expires=20210101021234;domain=snap.app',
    'token-dev=bar;expires=20210101021234;domain=snap.app',
  ],
  { 'token-local': 'baz' }
);

