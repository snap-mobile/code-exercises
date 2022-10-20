// setCookies(["token-local=foo;expires=20210101021234;domain=snap.app","token-dev=bar;expires=20210101021234;domain=snap.app"], {'token-local': 'baz'})
//
let s=(a,c={})=>{try{if(a&&c){let o=a.map(o=>o.match(/([\w-]+)=(\w+);expires=(\d+);domain=((\w+)\.(\w+))/));['token-local','token-dev','token-staging','token'].forEach(n=>{let f=o.filter(x=>x[1]==n)[0];if(f){c[f[1]]={value:f[2],expires:f[3],domain:f[4],httponly:true,secure:true}}});return c;}}catch(e){console.error(e)}}
