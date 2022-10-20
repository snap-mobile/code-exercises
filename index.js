// setCookies(["token-local=foo;expires=20210101021234;domain=snap.app","token-dev=bar;expires=20210101021234;domain=snap.app"], {'token-local': 'baz', 'another-addition': 'added!'})
//
const setCookies =  (allCookies, cookies = {}) => {
    return {...cookies, ...['token-local', 'token-dev', 'token-staging', 'token'].reduce((acc, cookieName) => {
        const data = allCookies.map(cookie => (Object.fromEntries(cookie.split(';').map(c => c.split('=')).map(([name, value]) => ([name.trim().toLowerCase(), value]))))).find(c => !!c[cookieName]);
        return {...acc, ...data ? {[cookieName]: {value: data[cookieName],expires: data["expires"],domain: data["domain"],httponly: true,secure: true}} : {}};
    }, {})};
};
