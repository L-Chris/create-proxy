!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):e.createProxy=n()}(this,function(){return function(e,n){for(var t=Object.keys(n),r=function(e){return e.reduce(function(e,n){return e[n]=!0,e},Object.create(null))}(t),o=Object.create(null),u=0,c=t;u<c.length;u+=1){var f=c[u];o[f]=new Proxy(e[f],n[f])}return new Proxy(e,{get:function(e,n){return r[n]?o[n]:e[n]}})}});
//# sourceMappingURL=create-proxy.umd.js.map