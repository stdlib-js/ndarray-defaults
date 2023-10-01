// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var e="function"==typeof Object.defineProperty?Object.defineProperty:null;var r=Object.defineProperty;function t(e){return"number"==typeof e}function i(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function n(e,r,t){var n=!1,a=r-e.length;return a<0||(function(e){return"-"===e[0]}(e)&&(n=!0,e=e.substr(1)),e=t?e+i(a):i(a)+e,n&&(e="-"+e)),e}var a=String.prototype.toLowerCase,o=String.prototype.toUpperCase;function s(e){var r,i,s;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(i=e.arg,s=parseInt(i,10),!isFinite(s)){if(!t(i))throw new Error("invalid integer. Value: "+i);s=0}return s<0&&("u"===e.specifier||10!==r)&&(s=4294967295+s+1),s<0?(i=(-s).toString(r),e.precision&&(i=n(i,e.precision,e.padRight)),i="-"+i):(i=s.toString(r),s||e.precision?e.precision&&(i=n(i,e.precision,e.padRight)):i="",e.sign&&(i=e.sign+i)),16===r&&(e.alternate&&(i="0x"+i),i=e.specifier===o.call(e.specifier)?o.call(i):a.call(i)),8===r&&e.alternate&&"0"!==i.charAt(0)&&(i="0"+i),i}function p(e){return"string"==typeof e}var l=Math.abs,c=String.prototype.toLowerCase,g=String.prototype.toUpperCase,d=String.prototype.replace,f=/e\+(\d)$/,u=/e-(\d)$/,h=/^(\d+)$/,_=/^(\d+)e/,w=/\.0$/,y=/\.0*e/,m=/(\..*[^0])0*e/;function b(e){var r,i,n=parseFloat(e.arg);if(!isFinite(n)){if(!t(e.arg))throw new Error("invalid floating-point number. Value: "+i);n=e.arg}switch(e.specifier){case"e":case"E":i=n.toExponential(e.precision);break;case"f":case"F":i=n.toFixed(e.precision);break;case"g":case"G":l(n)<1e-4?((r=e.precision)>0&&(r-=1),i=n.toExponential(r)):i=n.toPrecision(e.precision),e.alternate||(i=d.call(i,m,"$1e"),i=d.call(i,y,"e"),i=d.call(i,w,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return i=d.call(i,f,"e+0$1"),i=d.call(i,u,"e-0$1"),e.alternate&&(i=d.call(i,h,"$1."),i=d.call(i,_,"$1.e")),n>=0&&e.sign&&(i=e.sign+i),i=e.specifier===g.call(e.specifier)?g.call(i):c.call(i)}function v(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}function x(e,r,t){var i=r-e.length;return i<0?e:e=t?e+v(i):v(i)+e}var k=String.fromCharCode,E=isNaN,j=Array.isArray;function S(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function V(e){var r,t,i,a,o,l,c,g,d;if(!j(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(l="",c=1,g=0;g<e.length;g++)if(p(i=e[g]))l+=i;else{if(r=void 0!==i.precision,!(i=S(i)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+g+"`. Value: `"+i+"`.");for(i.mapping&&(c=i.mapping),t=i.flags,d=0;d<t.length;d++)switch(a=t.charAt(d)){case" ":i.sign=" ";break;case"+":i.sign="+";break;case"-":i.padRight=!0,i.padZeros=!1;break;case"0":i.padZeros=t.indexOf("-")<0;break;case"#":i.alternate=!0;break;default:throw new Error("invalid flag: "+a)}if("*"===i.width){if(i.width=parseInt(arguments[c],10),c+=1,E(i.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+i.width+"`.");i.width<0&&(i.padRight=!0,i.width=-i.width)}if(r&&"*"===i.precision){if(i.precision=parseInt(arguments[c],10),c+=1,E(i.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+i.precision+"`.");i.precision<0&&(i.precision=1,r=!1)}switch(i.arg=arguments[c],i.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(i.padZeros=!1),i.arg=s(i);break;case"s":i.maxWidth=r?i.precision:-1;break;case"c":if(!E(i.arg)){if((o=parseInt(i.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+i.arg);i.arg=E(o)?String(i.arg):k(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(i.precision=6),i.arg=b(i);break;default:throw new Error("invalid specifier: "+i.specifier)}i.maxWidth>=0&&i.arg.length>i.maxWidth&&(i.arg=i.arg.substring(0,i.maxWidth)),i.padZeros?i.arg=n(i.arg,i.width||i.precision,i.padRight):i.width&&(i.arg=x(i.arg,i.width,i.padRight)),l+=i.arg||"",c+=1}return l}var $=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function F(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function A(e){var r,t,i,n;for(t=[],n=0,i=$.exec(e);i;)(r=e.slice(n,$.lastIndex-i[0].length)).length&&t.push(r),t.push(F(i)),n=$.lastIndex,i=$.exec(e);return(r=e.slice(n)).length&&t.push(r),t}function I(e){return"string"==typeof e}function T(e){var r,t,i;if(!I(e))throw new TypeError(T("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=A(e),(t=new Array(arguments.length))[0]=r,i=1;i<t.length;i++)t[i]=arguments[i];return V.apply(null,t)}var C,R=Object.prototype,O=R.toString,P=R.__defineGetter__,Z=R.__defineSetter__,G=R.__lookupGetter__,W=R.__lookupSetter__;C=function(){try{return e({},"x",{}),!0}catch(e){return!1}}()?r:function(e,r,t){var i,n,a,o;if("object"!=typeof e||null===e||"[object Array]"===O.call(e))throw new TypeError(T("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===O.call(t))throw new TypeError(T("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((n="value"in t)&&(G.call(e,r)||W.call(e,r)?(i=e.__proto__,e.__proto__=R,delete e[r],e[r]=t.value,e.__proto__=i):e[r]=t.value),a="get"in t,o="set"in t,n&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&P&&P.call(e,r,t.get),o&&Z&&Z.call(e,r,t.set),e};var L=C;function N(){return{dtypes:{default:"float64",numeric:"float64",real:"float64",floating_point:"float64",real_floating_point:"float64",complex_floating_point:"complex128",integer:"int32",signed_integer:"int32",unsigned_integer:"uint32"},order:"row-major",casting:"safe",index_mode:"throw"}}var U={dtypes:{default:"float64",numeric:"float64",real:"float64",floating_point:"float64",real_floating_point:"float64",complex_floating_point:"complex128",integer:"int32",signed_integer:"int32",unsigned_integer:"uint32"},order:"row-major",casting:"safe",index_mode:"throw"},X={"dtypes.default":U.dtypes.default,"dtypes.numeric":U.dtypes.numeric,"dtypes.real":U.dtypes.real,"dtypes.floating_point":U.dtypes.floating_point,"dtypes.real_floating_point":U.dtypes.real_floating_point,"dtypes.complex_floating_point":U.dtypes.complex_floating_point,"dtypes.integer":U.dtypes.integer,"dtypes.signed_integer":U.dtypes.signed_integer,"dtypes.unsigned_integer":U.dtypes.unsigned_integer,order:U.order,casting:U.casting,index_mode:U.index_mode};function z(e){var r=X[e];return void 0===r?null:r}L(N,"get",{configurable:!1,enumerable:!1,writable:!1,value:z});export{N as default,z as get};
//# sourceMappingURL=mod.js.map
