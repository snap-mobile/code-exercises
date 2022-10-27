// setCookies(["token-local=foo;expires=20210101021234;domain=snap.app","token-dev=bar;expires=20210101021234;domain=snap.app"], {'token-local': 'baz'})
//

const processCookies = (cookies) => {
  return new Promise((resolve, reject) => {
    const processedCookies = [];
    cookies.forEach((cookie) => {
      let processedCookie = cookie
        .split(';')
        .map((c) => c.split('='))
        .reduce((result, element) => {
          result[element[0].trim().toLowerCase()] = element[element.length - 1];
          return result;
        }, {});
      processedCookies.push(processedCookie);
    });
    resolve(processedCookies);
  });
};

const cookieObj = (name, processedCookies, cookies) => {
  return new Promise((resolve, reject) => {
    const result = processedCookies.map((cookie) => {
      if (cookie[name]) {
        cookies[`${name}`] = {
          value: cookie[name],
          expires: cookie['expires'],
          domain: cookie['domain'],
          httponly: true,
          secure: true,
        };
      }
      return cookies;
    });
    resolve(result);
  });
};

const setCookies = async (allCookies, cookies = {}) => {
  try {
    if (!(allCookies && cookies))
      throw new Error('You must provide both arguments');
    const processedCookies = await processCookies(allCookies);
    const cookieSuffix = ['token-local', 'token-dev', 'token-staging', 'token'];
    const result = processedCookies.reduce((accum, cookie) => {
      const name = Object.keys(cookie)[0];
      if (cookieSuffix.includes(name)) {
        accum[`${name}`] = {
          value: cookie[name],
          expires: cookie['expires'],
          domain: cookie['domain'],
          httponly: true,
          secure: true,
        };
      }
      return accum;
    }, cookies);
    return result;
  } catch (err) {
    console.error(err);
  }
};

// const legacySetCookies = (allCookies, cookies = {}) => {
//   try {
//     if (allCookies && cookies) {
//       allCookies.forEach((cookie) => {
//         data = cookie
//           .split(';')
//           .map((c) => {
//             return c.split('=');
//           })
//           .reduce((result, element) => {
//             result[element[0].trim().toLowerCase()] =
//               element[element.length - 1];
//             return result;
//           }, {});
//         const cookieSuffix = [
//           'token-local',
//           'token-dev',
//           'token-staging',
//           'token',
//         ];
//         cookieSuffix.forEach((name) => {
//           if (data[name]) {
//             cookies[`${name}`] = {
//               value: data[name],
//               expires: data['expires'],
//               domain: data['domain'],
//               httponly: true,
//               secure: true,
//             };
//           }
//         });
//       });
//       return cookies;
//     }
//   } catch (err) {
//     console.error(err);
//   }
// };

const result = setCookies(
  [
    'token-local=foo;expires=20210101021234;domain=snap.app',
    'token-dev=bar;expires=20210101021234;domain=snap.app',
  ],
  { 'token-local': 'baz' }
).then((data) => console.log(data));


// { 'token-local':
//    { value: 'foo',
//      expires: '20210101021234',
//      domain: 'snap.app',
//      httponly: true,
//      secure: true },
//   'token-dev':
//    { value: 'bar',
//      expires: '20210101021234',
//      domain: 'snap.app',
//      httponly: true,
//      secure: true } }