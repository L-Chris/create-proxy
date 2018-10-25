export default function(e,n){for(var r=Object.keys(n),t=function(e){return e.reduce(function(e,n){return e[n]=!0,e},Object.create(null))}(r),u=Object.create(null),c=0,o=r;c<o.length;c+=1){var f=o[c];u[f]=new Proxy(e[f],n[f])}return new Proxy(e,{get:function(e,n){return t[n]?u[n]:e[n]}})};
//# sourceMappingURL=create-proxy.es.js.map
