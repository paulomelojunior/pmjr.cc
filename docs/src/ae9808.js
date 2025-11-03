var $h=Object.defineProperty;var Ph=(s,e,t)=>e in s?$h(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t;var j=(s,e,t)=>Ph(s,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerPolicy&&(r.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?r.credentials="include":n.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(n){if(n.ep)return;n.ep=!0;const r=t(n);fetch(n.href,r)}})();const Y=s=>typeof s=="string",hr=()=>{let s,e;const t=new Promise((i,n)=>{s=i,e=n});return t.resolve=s,t.reject=e,t},Fl=s=>s==null?"":""+s,kh=(s,e,t)=>{s.forEach(i=>{e[i]&&(t[i]=e[i])})},Th=/###/g,Al=s=>s&&s.indexOf("###")>-1?s.replace(Th,"."):s,Ll=s=>!s||Y(s),Er=(s,e,t)=>{const i=Y(e)?e.split("."):e;let n=0;for(;n<i.length-1;){if(Ll(s))return{};const r=Al(i[n]);!s[r]&&t&&(s[r]=new t),Object.prototype.hasOwnProperty.call(s,r)?s=s[r]:s={},++n}return Ll(s)?{}:{obj:s,k:Al(i[n])}},zl=(s,e,t)=>{const{obj:i,k:n}=Er(s,e,Object);if(i!==void 0||e.length===1){i[n]=t;return}let r=e[e.length-1],o=e.slice(0,e.length-1),a=Er(s,o,Object);for(;a.obj===void 0&&o.length;)r=`${o[o.length-1]}.${r}`,o=o.slice(0,o.length-1),a=Er(s,o,Object),a!=null&&a.obj&&typeof a.obj[`${a.k}.${r}`]<"u"&&(a.obj=void 0);a.obj[`${a.k}.${r}`]=t},Oh=(s,e,t,i)=>{const{obj:n,k:r}=Er(s,e,Object);n[r]=n[r]||[],n[r].push(t)},Ks=(s,e)=>{const{obj:t,k:i}=Er(s,e);if(t&&Object.prototype.hasOwnProperty.call(t,i))return t[i]},Fh=(s,e,t)=>{const i=Ks(s,t);return i!==void 0?i:Ks(e,t)},lc=(s,e,t)=>{for(const i in e)i!=="__proto__"&&i!=="constructor"&&(i in s?Y(s[i])||s[i]instanceof String||Y(e[i])||e[i]instanceof String?t&&(s[i]=e[i]):lc(s[i],e[i],t):s[i]=e[i]);return s},Pn=s=>s.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&");var Ah={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;"};const Lh=s=>Y(s)?s.replace(/[&<>"'\/]/g,e=>Ah[e]):s;class zh{constructor(e){this.capacity=e,this.regExpMap=new Map,this.regExpQueue=[]}getRegExp(e){const t=this.regExpMap.get(e);if(t!==void 0)return t;const i=new RegExp(e);return this.regExpQueue.length===this.capacity&&this.regExpMap.delete(this.regExpQueue.shift()),this.regExpMap.set(e,i),this.regExpQueue.push(e),i}}const Mh=[" ",",","?","!",";"],Rh=new zh(20),jh=(s,e,t)=>{e=e||"",t=t||"";const i=Mh.filter(o=>e.indexOf(o)<0&&t.indexOf(o)<0);if(i.length===0)return!0;const n=Rh.getRegExp(`(${i.map(o=>o==="?"?"\\?":o).join("|")})`);let r=!n.test(s);if(!r){const o=s.indexOf(t);o>0&&!n.test(s.substring(0,o))&&(r=!0)}return r},Qo=function(s,e){let t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:".";if(!s)return;if(s[e])return Object.prototype.hasOwnProperty.call(s,e)?s[e]:void 0;const i=e.split(t);let n=s;for(let r=0;r<i.length;){if(!n||typeof n!="object")return;let o,a="";for(let l=r;l<i.length;++l)if(l!==r&&(a+=t),a+=i[l],o=n[a],o!==void 0){if(["string","number","boolean"].indexOf(typeof o)>-1&&l<i.length-1)continue;r+=l-r+1;break}n=o}return n},Js=s=>s==null?void 0:s.replace("_","-"),Ih={type:"logger",log(s){this.output("log",s)},warn(s){this.output("warn",s)},error(s){this.output("error",s)},output(s,e){var t,i;(i=(t=console==null?void 0:console[s])==null?void 0:t.apply)==null||i.call(t,console,e)}};class Zs{constructor(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.init(e,t)}init(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.prefix=t.prefix||"i18next:",this.logger=e||Ih,this.options=t,this.debug=t.debug}log(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return this.forward(t,"log","",!0)}warn(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return this.forward(t,"warn","",!0)}error(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return this.forward(t,"error","")}deprecate(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return this.forward(t,"warn","WARNING DEPRECATED: ",!0)}forward(e,t,i,n){return n&&!this.debug?null:(Y(e[0])&&(e[0]=`${i}${this.prefix} ${e[0]}`),this.logger[t](e))}create(e){return new Zs(this.logger,{prefix:`${this.prefix}:${e}:`,...this.options})}clone(e){return e=e||this.options,e.prefix=e.prefix||this.prefix,new Zs(this.logger,e)}}var ri=new Zs;class yo{constructor(){this.observers={}}on(e,t){return e.split(" ").forEach(i=>{this.observers[i]||(this.observers[i]=new Map);const n=this.observers[i].get(t)||0;this.observers[i].set(t,n+1)}),this}off(e,t){if(this.observers[e]){if(!t){delete this.observers[e];return}this.observers[e].delete(t)}}emit(e){for(var t=arguments.length,i=new Array(t>1?t-1:0),n=1;n<t;n++)i[n-1]=arguments[n];this.observers[e]&&Array.from(this.observers[e].entries()).forEach(o=>{let[a,l]=o;for(let u=0;u<l;u++)a(...i)}),this.observers["*"]&&Array.from(this.observers["*"].entries()).forEach(o=>{let[a,l]=o;for(let u=0;u<l;u++)a.apply(a,[e,...i])})}}class Ml extends yo{constructor(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{ns:["translation"],defaultNS:"translation"};super(),this.data=e||{},this.options=t,this.options.keySeparator===void 0&&(this.options.keySeparator="."),this.options.ignoreJSONStructure===void 0&&(this.options.ignoreJSONStructure=!0)}addNamespaces(e){this.options.ns.indexOf(e)<0&&this.options.ns.push(e)}removeNamespaces(e){const t=this.options.ns.indexOf(e);t>-1&&this.options.ns.splice(t,1)}getResource(e,t,i){var u,c;let n=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};const r=n.keySeparator!==void 0?n.keySeparator:this.options.keySeparator,o=n.ignoreJSONStructure!==void 0?n.ignoreJSONStructure:this.options.ignoreJSONStructure;let a;e.indexOf(".")>-1?a=e.split("."):(a=[e,t],i&&(Array.isArray(i)?a.push(...i):Y(i)&&r?a.push(...i.split(r)):a.push(i)));const l=Ks(this.data,a);return!l&&!t&&!i&&e.indexOf(".")>-1&&(e=a[0],t=a[1],i=a.slice(2).join(".")),l||!o||!Y(i)?l:Qo((c=(u=this.data)==null?void 0:u[e])==null?void 0:c[t],i,r)}addResource(e,t,i,n){let r=arguments.length>4&&arguments[4]!==void 0?arguments[4]:{silent:!1};const o=r.keySeparator!==void 0?r.keySeparator:this.options.keySeparator;let a=[e,t];i&&(a=a.concat(o?i.split(o):i)),e.indexOf(".")>-1&&(a=e.split("."),n=t,t=a[1]),this.addNamespaces(t),zl(this.data,a,n),r.silent||this.emit("added",e,t,i,n)}addResources(e,t,i){let n=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{silent:!1};for(const r in i)(Y(i[r])||Array.isArray(i[r]))&&this.addResource(e,t,r,i[r],{silent:!0});n.silent||this.emit("added",e,t,i)}addResourceBundle(e,t,i,n,r){let o=arguments.length>5&&arguments[5]!==void 0?arguments[5]:{silent:!1,skipCopy:!1},a=[e,t];e.indexOf(".")>-1&&(a=e.split("."),n=i,i=t,t=a[1]),this.addNamespaces(t);let l=Ks(this.data,a)||{};o.skipCopy||(i=JSON.parse(JSON.stringify(i))),n?lc(l,i,r):l={...l,...i},zl(this.data,a,l),o.silent||this.emit("added",e,t,i)}removeResourceBundle(e,t){this.hasResourceBundle(e,t)&&delete this.data[e][t],this.removeNamespaces(t),this.emit("removed",e,t)}hasResourceBundle(e,t){return this.getResource(e,t)!==void 0}getResourceBundle(e,t){return t||(t=this.options.defaultNS),this.getResource(e,t)}getDataByLanguage(e){return this.data[e]}hasLanguageSomeTranslations(e){const t=this.getDataByLanguage(e);return!!(t&&Object.keys(t)||[]).find(n=>t[n]&&Object.keys(t[n]).length>0)}toJSON(){return this.data}}var uc={processors:{},addPostProcessor(s){this.processors[s.name]=s},handle(s,e,t,i,n){return s.forEach(r=>{var o;e=((o=this.processors[r])==null?void 0:o.process(e,t,i,n))??e}),e}};const Rl={},jl=s=>!Y(s)&&typeof s!="boolean"&&typeof s!="number";class Qs extends yo{constructor(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};super(),kh(["resourceStore","languageUtils","pluralResolver","interpolator","backendConnector","i18nFormat","utils"],e,this),this.options=t,this.options.keySeparator===void 0&&(this.options.keySeparator="."),this.logger=ri.create("translator")}changeLanguage(e){e&&(this.language=e)}exists(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{interpolation:{}};if(e==null)return!1;const i=this.resolve(e,t);return(i==null?void 0:i.res)!==void 0}extractFromKey(e,t){let i=t.nsSeparator!==void 0?t.nsSeparator:this.options.nsSeparator;i===void 0&&(i=":");const n=t.keySeparator!==void 0?t.keySeparator:this.options.keySeparator;let r=t.ns||this.options.defaultNS||[];const o=i&&e.indexOf(i)>-1,a=!this.options.userDefinedKeySeparator&&!t.keySeparator&&!this.options.userDefinedNsSeparator&&!t.nsSeparator&&!jh(e,i,n);if(o&&!a){const l=e.match(this.interpolator.nestingRegexp);if(l&&l.length>0)return{key:e,namespaces:Y(r)?[r]:r};const u=e.split(i);(i!==n||i===n&&this.options.ns.indexOf(u[0])>-1)&&(r=u.shift()),e=u.join(n)}return{key:e,namespaces:Y(r)?[r]:r}}translate(e,t,i){if(typeof t!="object"&&this.options.overloadTranslationOptionHandler&&(t=this.options.overloadTranslationOptionHandler(arguments)),typeof t=="object"&&(t={...t}),t||(t={}),e==null)return"";Array.isArray(e)||(e=[String(e)]);const n=t.returnDetails!==void 0?t.returnDetails:this.options.returnDetails,r=t.keySeparator!==void 0?t.keySeparator:this.options.keySeparator,{key:o,namespaces:a}=this.extractFromKey(e[e.length-1],t),l=a[a.length-1],u=t.lng||this.language,c=t.appendNamespaceToCIMode||this.options.appendNamespaceToCIMode;if((u==null?void 0:u.toLowerCase())==="cimode"){if(c){const F=t.nsSeparator||this.options.nsSeparator;return n?{res:`${l}${F}${o}`,usedKey:o,exactUsedKey:o,usedLng:u,usedNS:l,usedParams:this.getUsedParamsDetails(t)}:`${l}${F}${o}`}return n?{res:o,usedKey:o,exactUsedKey:o,usedLng:u,usedNS:l,usedParams:this.getUsedParamsDetails(t)}:o}const d=this.resolve(e,t);let h=d==null?void 0:d.res;const f=(d==null?void 0:d.usedKey)||o,g=(d==null?void 0:d.exactUsedKey)||o,p=["[object Number]","[object Function]","[object RegExp]"],m=t.joinArrays!==void 0?t.joinArrays:this.options.joinArrays,y=!this.i18nFormat||this.i18nFormat.handleAsObject,v=t.count!==void 0&&!Y(t.count),D=Qs.hasDefaultValue(t),x=v?this.pluralResolver.getSuffix(u,t.count,t):"",C=t.ordinal&&v?this.pluralResolver.getSuffix(u,t.count,{ordinal:!1}):"",E=v&&!t.ordinal&&t.count===0,w=E&&t[`defaultValue${this.options.pluralSeparator}zero`]||t[`defaultValue${x}`]||t[`defaultValue${C}`]||t.defaultValue;let k=h;y&&!h&&D&&(k=w);const $=jl(k),P=Object.prototype.toString.apply(k);if(y&&k&&$&&p.indexOf(P)<0&&!(Y(m)&&Array.isArray(k))){if(!t.returnObjects&&!this.options.returnObjects){this.options.returnedObjectHandler||this.logger.warn("accessing an object - but returnObjects options is not enabled!");const F=this.options.returnedObjectHandler?this.options.returnedObjectHandler(f,k,{...t,ns:a}):`key '${o} (${this.language})' returned an object instead of string.`;return n?(d.res=F,d.usedParams=this.getUsedParamsDetails(t),d):F}if(r){const F=Array.isArray(k),T=F?[]:{},H=F?g:f;for(const R in k)if(Object.prototype.hasOwnProperty.call(k,R)){const A=`${H}${r}${R}`;D&&!h?T[R]=this.translate(A,{...t,defaultValue:jl(w)?w[R]:void 0,joinArrays:!1,ns:a}):T[R]=this.translate(A,{...t,joinArrays:!1,ns:a}),T[R]===A&&(T[R]=k[R])}h=T}}else if(y&&Y(m)&&Array.isArray(h))h=h.join(m),h&&(h=this.extendTranslation(h,e,t,i));else{let F=!1,T=!1;!this.isValidLookup(h)&&D&&(F=!0,h=w),this.isValidLookup(h)||(T=!0,h=o);const R=(t.missingKeyNoValueFallbackToKey||this.options.missingKeyNoValueFallbackToKey)&&T?void 0:h,A=D&&w!==h&&this.options.updateMissing;if(T||F||A){if(this.logger.log(A?"updateKey":"missingKey",u,l,o,A?w:h),r){const W=this.resolve(o,{...t,keySeparator:!1});W&&W.res&&this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.")}let I=[];const M=this.languageUtils.getFallbackCodes(this.options.fallbackLng,t.lng||this.language);if(this.options.saveMissingTo==="fallback"&&M&&M[0])for(let W=0;W<M.length;W++)I.push(M[W]);else this.options.saveMissingTo==="all"?I=this.languageUtils.toResolveHierarchy(t.lng||this.language):I.push(t.lng||this.language);const N=(W,b,q)=>{var me;const ce=D&&q!==h?q:R;this.options.missingKeyHandler?this.options.missingKeyHandler(W,l,b,ce,A,t):(me=this.backendConnector)!=null&&me.saveMissing&&this.backendConnector.saveMissing(W,l,b,ce,A,t),this.emit("missingKey",W,l,b,h)};this.options.saveMissing&&(this.options.saveMissingPlurals&&v?I.forEach(W=>{const b=this.pluralResolver.getSuffixes(W,t);E&&t[`defaultValue${this.options.pluralSeparator}zero`]&&b.indexOf(`${this.options.pluralSeparator}zero`)<0&&b.push(`${this.options.pluralSeparator}zero`),b.forEach(q=>{N([W],o+q,t[`defaultValue${q}`]||w)})}):N(I,o,w))}h=this.extendTranslation(h,e,t,d,i),T&&h===o&&this.options.appendNamespaceToMissingKey&&(h=`${l}:${o}`),(T||F)&&this.options.parseMissingKeyHandler&&(h=this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey?`${l}:${o}`:o,F?h:void 0))}return n?(d.res=h,d.usedParams=this.getUsedParamsDetails(t),d):h}extendTranslation(e,t,i,n,r){var u,c;var o=this;if((u=this.i18nFormat)!=null&&u.parse)e=this.i18nFormat.parse(e,{...this.options.interpolation.defaultVariables,...i},i.lng||this.language||n.usedLng,n.usedNS,n.usedKey,{resolved:n});else if(!i.skipInterpolation){i.interpolation&&this.interpolator.init({...i,interpolation:{...this.options.interpolation,...i.interpolation}});const d=Y(e)&&(((c=i==null?void 0:i.interpolation)==null?void 0:c.skipOnVariables)!==void 0?i.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables);let h;if(d){const g=e.match(this.interpolator.nestingRegexp);h=g&&g.length}let f=i.replace&&!Y(i.replace)?i.replace:i;if(this.options.interpolation.defaultVariables&&(f={...this.options.interpolation.defaultVariables,...f}),e=this.interpolator.interpolate(e,f,i.lng||this.language||n.usedLng,i),d){const g=e.match(this.interpolator.nestingRegexp),p=g&&g.length;h<p&&(i.nest=!1)}!i.lng&&n&&n.res&&(i.lng=this.language||n.usedLng),i.nest!==!1&&(e=this.interpolator.nest(e,function(){for(var g=arguments.length,p=new Array(g),m=0;m<g;m++)p[m]=arguments[m];return(r==null?void 0:r[0])===p[0]&&!i.context?(o.logger.warn(`It seems you are nesting recursively key: ${p[0]} in key: ${t[0]}`),null):o.translate(...p,t)},i)),i.interpolation&&this.interpolator.reset()}const a=i.postProcess||this.options.postProcess,l=Y(a)?[a]:a;return e!=null&&(l!=null&&l.length)&&i.applyPostProcessor!==!1&&(e=uc.handle(l,e,t,this.options&&this.options.postProcessPassResolved?{i18nResolved:{...n,usedParams:this.getUsedParamsDetails(i)},...i}:i,this)),e}resolve(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i,n,r,o,a;return Y(e)&&(e=[e]),e.forEach(l=>{if(this.isValidLookup(i))return;const u=this.extractFromKey(l,t),c=u.key;n=c;let d=u.namespaces;this.options.fallbackNS&&(d=d.concat(this.options.fallbackNS));const h=t.count!==void 0&&!Y(t.count),f=h&&!t.ordinal&&t.count===0,g=t.context!==void 0&&(Y(t.context)||typeof t.context=="number")&&t.context!=="",p=t.lngs?t.lngs:this.languageUtils.toResolveHierarchy(t.lng||this.language,t.fallbackLng);d.forEach(m=>{var y,v;this.isValidLookup(i)||(a=m,!Rl[`${p[0]}-${m}`]&&((y=this.utils)!=null&&y.hasLoadedNamespace)&&!((v=this.utils)!=null&&v.hasLoadedNamespace(a))&&(Rl[`${p[0]}-${m}`]=!0,this.logger.warn(`key "${n}" for languages "${p.join(", ")}" won't get resolved as namespace "${a}" was not yet loaded`,"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")),p.forEach(D=>{var E;if(this.isValidLookup(i))return;o=D;const x=[c];if((E=this.i18nFormat)!=null&&E.addLookupKeys)this.i18nFormat.addLookupKeys(x,c,D,m,t);else{let w;h&&(w=this.pluralResolver.getSuffix(D,t.count,t));const k=`${this.options.pluralSeparator}zero`,$=`${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;if(h&&(x.push(c+w),t.ordinal&&w.indexOf($)===0&&x.push(c+w.replace($,this.options.pluralSeparator)),f&&x.push(c+k)),g){const P=`${c}${this.options.contextSeparator}${t.context}`;x.push(P),h&&(x.push(P+w),t.ordinal&&w.indexOf($)===0&&x.push(P+w.replace($,this.options.pluralSeparator)),f&&x.push(P+k))}}let C;for(;C=x.pop();)this.isValidLookup(i)||(r=C,i=this.getResource(D,m,C,t))}))})}),{res:i,usedKey:n,exactUsedKey:r,usedLng:o,usedNS:a}}isValidLookup(e){return e!==void 0&&!(!this.options.returnNull&&e===null)&&!(!this.options.returnEmptyString&&e==="")}getResource(e,t,i){var r;let n=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};return(r=this.i18nFormat)!=null&&r.getResource?this.i18nFormat.getResource(e,t,i,n):this.resourceStore.getResource(e,t,i,n)}getUsedParamsDetails(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const t=["defaultValue","ordinal","context","replace","lng","lngs","fallbackLng","ns","keySeparator","nsSeparator","returnObjects","returnDetails","joinArrays","postProcess","interpolation"],i=e.replace&&!Y(e.replace);let n=i?e.replace:e;if(i&&typeof e.count<"u"&&(n.count=e.count),this.options.interpolation.defaultVariables&&(n={...this.options.interpolation.defaultVariables,...n}),!i){n={...n};for(const r of t)delete n[r]}return n}static hasDefaultValue(e){const t="defaultValue";for(const i in e)if(Object.prototype.hasOwnProperty.call(e,i)&&t===i.substring(0,t.length)&&e[i]!==void 0)return!0;return!1}}class Il{constructor(e){this.options=e,this.supportedLngs=this.options.supportedLngs||!1,this.logger=ri.create("languageUtils")}getScriptPartFromCode(e){if(e=Js(e),!e||e.indexOf("-")<0)return null;const t=e.split("-");return t.length===2||(t.pop(),t[t.length-1].toLowerCase()==="x")?null:this.formatLanguageCode(t.join("-"))}getLanguagePartFromCode(e){if(e=Js(e),!e||e.indexOf("-")<0)return e;const t=e.split("-");return this.formatLanguageCode(t[0])}formatLanguageCode(e){if(Y(e)&&e.indexOf("-")>-1){let t;try{t=Intl.getCanonicalLocales(e)[0]}catch{}return t&&this.options.lowerCaseLng&&(t=t.toLowerCase()),t||(this.options.lowerCaseLng?e.toLowerCase():e)}return this.options.cleanCode||this.options.lowerCaseLng?e.toLowerCase():e}isSupportedCode(e){return(this.options.load==="languageOnly"||this.options.nonExplicitSupportedLngs)&&(e=this.getLanguagePartFromCode(e)),!this.supportedLngs||!this.supportedLngs.length||this.supportedLngs.indexOf(e)>-1}getBestMatchFromCodes(e){if(!e)return null;let t;return e.forEach(i=>{if(t)return;const n=this.formatLanguageCode(i);(!this.options.supportedLngs||this.isSupportedCode(n))&&(t=n)}),!t&&this.options.supportedLngs&&e.forEach(i=>{if(t)return;const n=this.getLanguagePartFromCode(i);if(this.isSupportedCode(n))return t=n;t=this.options.supportedLngs.find(r=>{if(r===n)return r;if(!(r.indexOf("-")<0&&n.indexOf("-")<0)&&(r.indexOf("-")>0&&n.indexOf("-")<0&&r.substring(0,r.indexOf("-"))===n||r.indexOf(n)===0&&n.length>1))return r})}),t||(t=this.getFallbackCodes(this.options.fallbackLng)[0]),t}getFallbackCodes(e,t){if(!e)return[];if(typeof e=="function"&&(e=e(t)),Y(e)&&(e=[e]),Array.isArray(e))return e;if(!t)return e.default||[];let i=e[t];return i||(i=e[this.getScriptPartFromCode(t)]),i||(i=e[this.formatLanguageCode(t)]),i||(i=e[this.getLanguagePartFromCode(t)]),i||(i=e.default),i||[]}toResolveHierarchy(e,t){const i=this.getFallbackCodes(t||this.options.fallbackLng||[],e),n=[],r=o=>{o&&(this.isSupportedCode(o)?n.push(o):this.logger.warn(`rejecting language code not found in supportedLngs: ${o}`))};return Y(e)&&(e.indexOf("-")>-1||e.indexOf("_")>-1)?(this.options.load!=="languageOnly"&&r(this.formatLanguageCode(e)),this.options.load!=="languageOnly"&&this.options.load!=="currentOnly"&&r(this.getScriptPartFromCode(e)),this.options.load!=="currentOnly"&&r(this.getLanguagePartFromCode(e))):Y(e)&&r(this.formatLanguageCode(e)),i.forEach(o=>{n.indexOf(o)<0&&r(this.formatLanguageCode(o))}),n}}const Nl={zero:0,one:1,two:2,few:3,many:4,other:5},Bl={select:s=>s===1?"one":"other",resolvedOptions:()=>({pluralCategories:["one","other"]})};class Nh{constructor(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.languageUtils=e,this.options=t,this.logger=ri.create("pluralResolver"),this.pluralRulesCache={}}addRule(e,t){this.rules[e]=t}clearCache(){this.pluralRulesCache={}}getRule(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const i=Js(e==="dev"?"en":e),n=t.ordinal?"ordinal":"cardinal",r=JSON.stringify({cleanedCode:i,type:n});if(r in this.pluralRulesCache)return this.pluralRulesCache[r];let o;try{o=new Intl.PluralRules(i,{type:n})}catch{if(!Intl)return this.logger.error("No Intl support, please use an Intl polyfill!"),Bl;if(!e.match(/-|_/))return Bl;const l=this.languageUtils.getLanguagePartFromCode(e);o=this.getRule(l,t)}return this.pluralRulesCache[r]=o,o}needsPlural(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=this.getRule(e,t);return i||(i=this.getRule("dev",t)),(i==null?void 0:i.resolvedOptions().pluralCategories.length)>1}getPluralFormsOfKey(e,t){let i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return this.getSuffixes(e,i).map(n=>`${t}${n}`)}getSuffixes(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=this.getRule(e,t);return i||(i=this.getRule("dev",t)),i?i.resolvedOptions().pluralCategories.sort((n,r)=>Nl[n]-Nl[r]).map(n=>`${this.options.prepend}${t.ordinal?`ordinal${this.options.prepend}`:""}${n}`):[]}getSuffix(e,t){let i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const n=this.getRule(e,i);return n?`${this.options.prepend}${i.ordinal?`ordinal${this.options.prepend}`:""}${n.select(t)}`:(this.logger.warn(`no plural rule found for: ${e}`),this.getSuffix("dev",t,i))}}const Hl=function(s,e,t){let i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:".",n=arguments.length>4&&arguments[4]!==void 0?arguments[4]:!0,r=Fh(s,e,t);return!r&&n&&Y(t)&&(r=Qo(s,t,i),r===void 0&&(r=Qo(e,t,i))),r},Oo=s=>s.replace(/\$/g,"$$$$");class Bh{constructor(){var t;let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.logger=ri.create("interpolator"),this.options=e,this.format=((t=e==null?void 0:e.interpolation)==null?void 0:t.format)||(i=>i),this.init(e)}init(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};e.interpolation||(e.interpolation={escapeValue:!0});const{escape:t,escapeValue:i,useRawValueToEscape:n,prefix:r,prefixEscaped:o,suffix:a,suffixEscaped:l,formatSeparator:u,unescapeSuffix:c,unescapePrefix:d,nestingPrefix:h,nestingPrefixEscaped:f,nestingSuffix:g,nestingSuffixEscaped:p,nestingOptionsSeparator:m,maxReplaces:y,alwaysFormat:v}=e.interpolation;this.escape=t!==void 0?t:Lh,this.escapeValue=i!==void 0?i:!0,this.useRawValueToEscape=n!==void 0?n:!1,this.prefix=r?Pn(r):o||"{{",this.suffix=a?Pn(a):l||"}}",this.formatSeparator=u||",",this.unescapePrefix=c?"":d||"-",this.unescapeSuffix=this.unescapePrefix?"":c||"",this.nestingPrefix=h?Pn(h):f||Pn("$t("),this.nestingSuffix=g?Pn(g):p||Pn(")"),this.nestingOptionsSeparator=m||",",this.maxReplaces=y||1e3,this.alwaysFormat=v!==void 0?v:!1,this.resetRegExp()}reset(){this.options&&this.init(this.options)}resetRegExp(){const e=(t,i)=>(t==null?void 0:t.source)===i?(t.lastIndex=0,t):new RegExp(i,"g");this.regexp=e(this.regexp,`${this.prefix}(.+?)${this.suffix}`),this.regexpUnescape=e(this.regexpUnescape,`${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`),this.nestingRegexp=e(this.nestingRegexp,`${this.nestingPrefix}(.+?)${this.nestingSuffix}`)}interpolate(e,t,i,n){var f;let r,o,a;const l=this.options&&this.options.interpolation&&this.options.interpolation.defaultVariables||{},u=g=>{if(g.indexOf(this.formatSeparator)<0){const v=Hl(t,l,g,this.options.keySeparator,this.options.ignoreJSONStructure);return this.alwaysFormat?this.format(v,void 0,i,{...n,...t,interpolationkey:g}):v}const p=g.split(this.formatSeparator),m=p.shift().trim(),y=p.join(this.formatSeparator).trim();return this.format(Hl(t,l,m,this.options.keySeparator,this.options.ignoreJSONStructure),y,i,{...n,...t,interpolationkey:m})};this.resetRegExp();const c=(n==null?void 0:n.missingInterpolationHandler)||this.options.missingInterpolationHandler,d=((f=n==null?void 0:n.interpolation)==null?void 0:f.skipOnVariables)!==void 0?n.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables;return[{regex:this.regexpUnescape,safeValue:g=>Oo(g)},{regex:this.regexp,safeValue:g=>this.escapeValue?Oo(this.escape(g)):Oo(g)}].forEach(g=>{for(a=0;r=g.regex.exec(e);){const p=r[1].trim();if(o=u(p),o===void 0)if(typeof c=="function"){const y=c(e,r,n);o=Y(y)?y:""}else if(n&&Object.prototype.hasOwnProperty.call(n,p))o="";else if(d){o=r[0];continue}else this.logger.warn(`missed to pass in variable ${p} for interpolating ${e}`),o="";else!Y(o)&&!this.useRawValueToEscape&&(o=Fl(o));const m=g.safeValue(o);if(e=e.replace(r[0],m),d?(g.regex.lastIndex+=o.length,g.regex.lastIndex-=r[0].length):g.regex.lastIndex=0,a++,a>=this.maxReplaces)break}}),e}nest(e,t){let i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},n,r,o;const a=(l,u)=>{const c=this.nestingOptionsSeparator;if(l.indexOf(c)<0)return l;const d=l.split(new RegExp(`${c}[ ]*{`));let h=`{${d[1]}`;l=d[0],h=this.interpolate(h,o);const f=h.match(/'/g),g=h.match(/"/g);(((f==null?void 0:f.length)??0)%2===0&&!g||g.length%2!==0)&&(h=h.replace(/'/g,'"'));try{o=JSON.parse(h),u&&(o={...u,...o})}catch(p){return this.logger.warn(`failed parsing options string in nesting for key ${l}`,p),`${l}${c}${h}`}return o.defaultValue&&o.defaultValue.indexOf(this.prefix)>-1&&delete o.defaultValue,l};for(;n=this.nestingRegexp.exec(e);){let l=[];o={...i},o=o.replace&&!Y(o.replace)?o.replace:o,o.applyPostProcessor=!1,delete o.defaultValue;let u=!1;if(n[0].indexOf(this.formatSeparator)!==-1&&!/{.*}/.test(n[1])){const c=n[1].split(this.formatSeparator).map(d=>d.trim());n[1]=c.shift(),l=c,u=!0}if(r=t(a.call(this,n[1].trim(),o),o),r&&n[0]===e&&!Y(r))return r;Y(r)||(r=Fl(r)),r||(this.logger.warn(`missed to resolve ${n[1]} for nesting ${e}`),r=""),u&&(r=l.reduce((c,d)=>this.format(c,d,i.lng,{...i,interpolationkey:n[1].trim()}),r.trim())),e=e.replace(n[0],r),this.regexp.lastIndex=0}return e}}const Hh=s=>{let e=s.toLowerCase().trim();const t={};if(s.indexOf("(")>-1){const i=s.split("(");e=i[0].toLowerCase().trim();const n=i[1].substring(0,i[1].length-1);e==="currency"&&n.indexOf(":")<0?t.currency||(t.currency=n.trim()):e==="relativetime"&&n.indexOf(":")<0?t.range||(t.range=n.trim()):n.split(";").forEach(o=>{if(o){const[a,...l]=o.split(":"),u=l.join(":").trim().replace(/^'+|'+$/g,""),c=a.trim();t[c]||(t[c]=u),u==="false"&&(t[c]=!1),u==="true"&&(t[c]=!0),isNaN(u)||(t[c]=parseInt(u,10))}})}return{formatName:e,formatOptions:t}},kn=s=>{const e={};return(t,i,n)=>{let r=n;n&&n.interpolationkey&&n.formatParams&&n.formatParams[n.interpolationkey]&&n[n.interpolationkey]&&(r={...r,[n.interpolationkey]:void 0});const o=i+JSON.stringify(r);let a=e[o];return a||(a=s(Js(i),n),e[o]=a),a(t)}};class Uh{constructor(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.logger=ri.create("formatter"),this.options=e,this.formats={number:kn((t,i)=>{const n=new Intl.NumberFormat(t,{...i});return r=>n.format(r)}),currency:kn((t,i)=>{const n=new Intl.NumberFormat(t,{...i,style:"currency"});return r=>n.format(r)}),datetime:kn((t,i)=>{const n=new Intl.DateTimeFormat(t,{...i});return r=>n.format(r)}),relativetime:kn((t,i)=>{const n=new Intl.RelativeTimeFormat(t,{...i});return r=>n.format(r,i.range||"day")}),list:kn((t,i)=>{const n=new Intl.ListFormat(t,{...i});return r=>n.format(r)})},this.init(e)}init(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{interpolation:{}};this.formatSeparator=t.interpolation.formatSeparator||","}add(e,t){this.formats[e.toLowerCase().trim()]=t}addCached(e,t){this.formats[e.toLowerCase().trim()]=kn(t)}format(e,t,i){let n=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};const r=t.split(this.formatSeparator);if(r.length>1&&r[0].indexOf("(")>1&&r[0].indexOf(")")<0&&r.find(a=>a.indexOf(")")>-1)){const a=r.findIndex(l=>l.indexOf(")")>-1);r[0]=[r[0],...r.splice(1,a)].join(this.formatSeparator)}return r.reduce((a,l)=>{var d;const{formatName:u,formatOptions:c}=Hh(l);if(this.formats[u]){let h=a;try{const f=((d=n==null?void 0:n.formatParams)==null?void 0:d[n.interpolationkey])||{},g=f.locale||f.lng||n.locale||n.lng||i;h=this.formats[u](a,g,{...c,...n,...f})}catch(f){this.logger.warn(f)}return h}else this.logger.warn(`there was no format function for ${u}`);return a},e)}}const Vh=(s,e)=>{s.pending[e]!==void 0&&(delete s.pending[e],s.pendingCount--)};class qh extends yo{constructor(e,t,i){var r,o;let n=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};super(),this.backend=e,this.store=t,this.services=i,this.languageUtils=i.languageUtils,this.options=n,this.logger=ri.create("backendConnector"),this.waitingReads=[],this.maxParallelReads=n.maxParallelReads||10,this.readingCalls=0,this.maxRetries=n.maxRetries>=0?n.maxRetries:5,this.retryTimeout=n.retryTimeout>=1?n.retryTimeout:350,this.state={},this.queue=[],(o=(r=this.backend)==null?void 0:r.init)==null||o.call(r,i,n.backend,n)}queueLoad(e,t,i,n){const r={},o={},a={},l={};return e.forEach(u=>{let c=!0;t.forEach(d=>{const h=`${u}|${d}`;!i.reload&&this.store.hasResourceBundle(u,d)?this.state[h]=2:this.state[h]<0||(this.state[h]===1?o[h]===void 0&&(o[h]=!0):(this.state[h]=1,c=!1,o[h]===void 0&&(o[h]=!0),r[h]===void 0&&(r[h]=!0),l[d]===void 0&&(l[d]=!0)))}),c||(a[u]=!0)}),(Object.keys(r).length||Object.keys(o).length)&&this.queue.push({pending:o,pendingCount:Object.keys(o).length,loaded:{},errors:[],callback:n}),{toLoad:Object.keys(r),pending:Object.keys(o),toLoadLanguages:Object.keys(a),toLoadNamespaces:Object.keys(l)}}loaded(e,t,i){const n=e.split("|"),r=n[0],o=n[1];t&&this.emit("failedLoading",r,o,t),!t&&i&&this.store.addResourceBundle(r,o,i,void 0,void 0,{skipCopy:!0}),this.state[e]=t?-1:2,t&&i&&(this.state[e]=0);const a={};this.queue.forEach(l=>{Oh(l.loaded,[r],o),Vh(l,e),t&&l.errors.push(t),l.pendingCount===0&&!l.done&&(Object.keys(l.loaded).forEach(u=>{a[u]||(a[u]={});const c=l.loaded[u];c.length&&c.forEach(d=>{a[u][d]===void 0&&(a[u][d]=!0)})}),l.done=!0,l.errors.length?l.callback(l.errors):l.callback())}),this.emit("loaded",a),this.queue=this.queue.filter(l=>!l.done)}read(e,t,i){let n=arguments.length>3&&arguments[3]!==void 0?arguments[3]:0,r=arguments.length>4&&arguments[4]!==void 0?arguments[4]:this.retryTimeout,o=arguments.length>5?arguments[5]:void 0;if(!e.length)return o(null,{});if(this.readingCalls>=this.maxParallelReads){this.waitingReads.push({lng:e,ns:t,fcName:i,tried:n,wait:r,callback:o});return}this.readingCalls++;const a=(u,c)=>{if(this.readingCalls--,this.waitingReads.length>0){const d=this.waitingReads.shift();this.read(d.lng,d.ns,d.fcName,d.tried,d.wait,d.callback)}if(u&&c&&n<this.maxRetries){setTimeout(()=>{this.read.call(this,e,t,i,n+1,r*2,o)},r);return}o(u,c)},l=this.backend[i].bind(this.backend);if(l.length===2){try{const u=l(e,t);u&&typeof u.then=="function"?u.then(c=>a(null,c)).catch(a):a(null,u)}catch(u){a(u)}return}return l(e,t,a)}prepareLoading(e,t){let i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},n=arguments.length>3?arguments[3]:void 0;if(!this.backend)return this.logger.warn("No backend was added via i18next.use. Will not load resources."),n&&n();Y(e)&&(e=this.languageUtils.toResolveHierarchy(e)),Y(t)&&(t=[t]);const r=this.queueLoad(e,t,i,n);if(!r.toLoad.length)return r.pending.length||n(),null;r.toLoad.forEach(o=>{this.loadOne(o)})}load(e,t,i){this.prepareLoading(e,t,{},i)}reload(e,t,i){this.prepareLoading(e,t,{reload:!0},i)}loadOne(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"";const i=e.split("|"),n=i[0],r=i[1];this.read(n,r,"read",void 0,void 0,(o,a)=>{o&&this.logger.warn(`${t}loading namespace ${r} for language ${n} failed`,o),!o&&a&&this.logger.log(`${t}loaded namespace ${r} for language ${n}`,a),this.loaded(e,o,a)})}saveMissing(e,t,i,n,r){var l,u,c,d,h;let o=arguments.length>5&&arguments[5]!==void 0?arguments[5]:{},a=arguments.length>6&&arguments[6]!==void 0?arguments[6]:()=>{};if((u=(l=this.services)==null?void 0:l.utils)!=null&&u.hasLoadedNamespace&&!((d=(c=this.services)==null?void 0:c.utils)!=null&&d.hasLoadedNamespace(t))){this.logger.warn(`did not save key "${i}" as the namespace "${t}" was not yet loaded`,"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");return}if(!(i==null||i==="")){if((h=this.backend)!=null&&h.create){const f={...o,isUpdate:r},g=this.backend.create.bind(this.backend);if(g.length<6)try{let p;g.length===5?p=g(e,t,i,n,f):p=g(e,t,i,n),p&&typeof p.then=="function"?p.then(m=>a(null,m)).catch(a):a(null,p)}catch(p){a(p)}else g(e,t,i,n,a,f)}!e||!e[0]||this.store.addResource(e[0],t,i,n)}}}const Ul=()=>({debug:!1,initAsync:!0,ns:["translation"],defaultNS:["translation"],fallbackLng:["dev"],fallbackNS:!1,supportedLngs:!1,nonExplicitSupportedLngs:!1,load:"all",preload:!1,simplifyPluralSuffix:!0,keySeparator:".",nsSeparator:":",pluralSeparator:"_",contextSeparator:"_",partialBundledLanguages:!1,saveMissing:!1,updateMissing:!1,saveMissingTo:"fallback",saveMissingPlurals:!0,missingKeyHandler:!1,missingInterpolationHandler:!1,postProcess:!1,postProcessPassResolved:!1,returnNull:!1,returnEmptyString:!0,returnObjects:!1,joinArrays:!1,returnedObjectHandler:!1,parseMissingKeyHandler:!1,appendNamespaceToMissingKey:!1,appendNamespaceToCIMode:!1,overloadTranslationOptionHandler:s=>{let e={};if(typeof s[1]=="object"&&(e=s[1]),Y(s[1])&&(e.defaultValue=s[1]),Y(s[2])&&(e.tDescription=s[2]),typeof s[2]=="object"||typeof s[3]=="object"){const t=s[3]||s[2];Object.keys(t).forEach(i=>{e[i]=t[i]})}return e},interpolation:{escapeValue:!0,format:s=>s,prefix:"{{",suffix:"}}",formatSeparator:",",unescapePrefix:"-",nestingPrefix:"$t(",nestingSuffix:")",nestingOptionsSeparator:",",maxReplaces:1e3,skipOnVariables:!0}}),Vl=s=>{var e,t;return Y(s.ns)&&(s.ns=[s.ns]),Y(s.fallbackLng)&&(s.fallbackLng=[s.fallbackLng]),Y(s.fallbackNS)&&(s.fallbackNS=[s.fallbackNS]),((t=(e=s.supportedLngs)==null?void 0:e.indexOf)==null?void 0:t.call(e,"cimode"))<0&&(s.supportedLngs=s.supportedLngs.concat(["cimode"])),typeof s.initImmediate=="boolean"&&(s.initAsync=s.initImmediate),s},vs=()=>{},Wh=s=>{Object.getOwnPropertyNames(Object.getPrototypeOf(s)).forEach(t=>{typeof s[t]=="function"&&(s[t]=s[t].bind(s))})};class Hr extends yo{constructor(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;if(super(),this.options=Vl(e),this.services={},this.logger=ri,this.modules={external:[]},Wh(this),t&&!this.isInitialized&&!e.isClone){if(!this.options.initAsync)return this.init(e,t),this;setTimeout(()=>{this.init(e,t)},0)}}init(){var e=this;let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},i=arguments.length>1?arguments[1]:void 0;this.isInitializing=!0,typeof t=="function"&&(i=t,t={}),t.defaultNS==null&&t.ns&&(Y(t.ns)?t.defaultNS=t.ns:t.ns.indexOf("translation")<0&&(t.defaultNS=t.ns[0]));const n=Ul();this.options={...n,...this.options,...Vl(t)},this.options.interpolation={...n.interpolation,...this.options.interpolation},t.keySeparator!==void 0&&(this.options.userDefinedKeySeparator=t.keySeparator),t.nsSeparator!==void 0&&(this.options.userDefinedNsSeparator=t.nsSeparator);const r=c=>c?typeof c=="function"?new c:c:null;if(!this.options.isClone){this.modules.logger?ri.init(r(this.modules.logger),this.options):ri.init(null,this.options);let c;this.modules.formatter?c=this.modules.formatter:c=Uh;const d=new Il(this.options);this.store=new Ml(this.options.resources,this.options);const h=this.services;h.logger=ri,h.resourceStore=this.store,h.languageUtils=d,h.pluralResolver=new Nh(d,{prepend:this.options.pluralSeparator,simplifyPluralSuffix:this.options.simplifyPluralSuffix}),c&&(!this.options.interpolation.format||this.options.interpolation.format===n.interpolation.format)&&(h.formatter=r(c),h.formatter.init(h,this.options),this.options.interpolation.format=h.formatter.format.bind(h.formatter)),h.interpolator=new Bh(this.options),h.utils={hasLoadedNamespace:this.hasLoadedNamespace.bind(this)},h.backendConnector=new qh(r(this.modules.backend),h.resourceStore,h,this.options),h.backendConnector.on("*",function(f){for(var g=arguments.length,p=new Array(g>1?g-1:0),m=1;m<g;m++)p[m-1]=arguments[m];e.emit(f,...p)}),this.modules.languageDetector&&(h.languageDetector=r(this.modules.languageDetector),h.languageDetector.init&&h.languageDetector.init(h,this.options.detection,this.options)),this.modules.i18nFormat&&(h.i18nFormat=r(this.modules.i18nFormat),h.i18nFormat.init&&h.i18nFormat.init(this)),this.translator=new Qs(this.services,this.options),this.translator.on("*",function(f){for(var g=arguments.length,p=new Array(g>1?g-1:0),m=1;m<g;m++)p[m-1]=arguments[m];e.emit(f,...p)}),this.modules.external.forEach(f=>{f.init&&f.init(this)})}if(this.format=this.options.interpolation.format,i||(i=vs),this.options.fallbackLng&&!this.services.languageDetector&&!this.options.lng){const c=this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);c.length>0&&c[0]!=="dev"&&(this.options.lng=c[0])}!this.services.languageDetector&&!this.options.lng&&this.logger.warn("init: no languageDetector is used and no lng is defined"),["getResource","hasResourceBundle","getResourceBundle","getDataByLanguage"].forEach(c=>{this[c]=function(){return e.store[c](...arguments)}}),["addResource","addResources","addResourceBundle","removeResourceBundle"].forEach(c=>{this[c]=function(){return e.store[c](...arguments),e}});const l=hr(),u=()=>{const c=(d,h)=>{this.isInitializing=!1,this.isInitialized&&!this.initializedStoreOnce&&this.logger.warn("init: i18next is already initialized. You should call init just once!"),this.isInitialized=!0,this.options.isClone||this.logger.log("initialized",this.options),this.emit("initialized",this.options),l.resolve(h),i(d,h)};if(this.languages&&!this.isInitialized)return c(null,this.t.bind(this));this.changeLanguage(this.options.lng,c)};return this.options.resources||!this.options.initAsync?u():setTimeout(u,0),l}loadResources(e){var r,o;let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:vs;const n=Y(e)?e:this.language;if(typeof e=="function"&&(i=e),!this.options.resources||this.options.partialBundledLanguages){if((n==null?void 0:n.toLowerCase())==="cimode"&&(!this.options.preload||this.options.preload.length===0))return i();const a=[],l=u=>{if(!u||u==="cimode")return;this.services.languageUtils.toResolveHierarchy(u).forEach(d=>{d!=="cimode"&&a.indexOf(d)<0&&a.push(d)})};n?l(n):this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach(c=>l(c)),(o=(r=this.options.preload)==null?void 0:r.forEach)==null||o.call(r,u=>l(u)),this.services.backendConnector.load(a,this.options.ns,u=>{!u&&!this.resolvedLanguage&&this.language&&this.setResolvedLanguage(this.language),i(u)})}else i(null)}reloadResources(e,t,i){const n=hr();return typeof e=="function"&&(i=e,e=void 0),typeof t=="function"&&(i=t,t=void 0),e||(e=this.languages),t||(t=this.options.ns),i||(i=vs),this.services.backendConnector.reload(e,t,r=>{n.resolve(),i(r)}),n}use(e){if(!e)throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");if(!e.type)throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");return e.type==="backend"&&(this.modules.backend=e),(e.type==="logger"||e.log&&e.warn&&e.error)&&(this.modules.logger=e),e.type==="languageDetector"&&(this.modules.languageDetector=e),e.type==="i18nFormat"&&(this.modules.i18nFormat=e),e.type==="postProcessor"&&uc.addPostProcessor(e),e.type==="formatter"&&(this.modules.formatter=e),e.type==="3rdParty"&&this.modules.external.push(e),this}setResolvedLanguage(e){if(!(!e||!this.languages)&&!(["cimode","dev"].indexOf(e)>-1))for(let t=0;t<this.languages.length;t++){const i=this.languages[t];if(!(["cimode","dev"].indexOf(i)>-1)&&this.store.hasLanguageSomeTranslations(i)){this.resolvedLanguage=i;break}}}changeLanguage(e,t){var i=this;this.isLanguageChangingTo=e;const n=hr();this.emit("languageChanging",e);const r=l=>{this.language=l,this.languages=this.services.languageUtils.toResolveHierarchy(l),this.resolvedLanguage=void 0,this.setResolvedLanguage(l)},o=(l,u)=>{u?(r(u),this.translator.changeLanguage(u),this.isLanguageChangingTo=void 0,this.emit("languageChanged",u),this.logger.log("languageChanged",u)):this.isLanguageChangingTo=void 0,n.resolve(function(){return i.t(...arguments)}),t&&t(l,function(){return i.t(...arguments)})},a=l=>{var c,d;!e&&!l&&this.services.languageDetector&&(l=[]);const u=Y(l)?l:this.services.languageUtils.getBestMatchFromCodes(l);u&&(this.language||r(u),this.translator.language||this.translator.changeLanguage(u),(d=(c=this.services.languageDetector)==null?void 0:c.cacheUserLanguage)==null||d.call(c,u)),this.loadResources(u,h=>{o(h,u)})};return!e&&this.services.languageDetector&&!this.services.languageDetector.async?a(this.services.languageDetector.detect()):!e&&this.services.languageDetector&&this.services.languageDetector.async?this.services.languageDetector.detect.length===0?this.services.languageDetector.detect().then(a):this.services.languageDetector.detect(a):a(e),n}getFixedT(e,t,i){var n=this;const r=function(o,a){let l;if(typeof a!="object"){for(var u=arguments.length,c=new Array(u>2?u-2:0),d=2;d<u;d++)c[d-2]=arguments[d];l=n.options.overloadTranslationOptionHandler([o,a].concat(c))}else l={...a};l.lng=l.lng||r.lng,l.lngs=l.lngs||r.lngs,l.ns=l.ns||r.ns,l.keyPrefix!==""&&(l.keyPrefix=l.keyPrefix||i||r.keyPrefix);const h=n.options.keySeparator||".";let f;return l.keyPrefix&&Array.isArray(o)?f=o.map(g=>`${l.keyPrefix}${h}${g}`):f=l.keyPrefix?`${l.keyPrefix}${h}${o}`:o,n.t(f,l)};return Y(e)?r.lng=e:r.lngs=e,r.ns=t,r.keyPrefix=i,r}t(){var n;for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return(n=this.translator)==null?void 0:n.translate(...t)}exists(){var n;for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return(n=this.translator)==null?void 0:n.exists(...t)}setDefaultNamespace(e){this.options.defaultNS=e}hasLoadedNamespace(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(!this.isInitialized)return this.logger.warn("hasLoadedNamespace: i18next was not initialized",this.languages),!1;if(!this.languages||!this.languages.length)return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty",this.languages),!1;const i=t.lng||this.resolvedLanguage||this.languages[0],n=this.options?this.options.fallbackLng:!1,r=this.languages[this.languages.length-1];if(i.toLowerCase()==="cimode")return!0;const o=(a,l)=>{const u=this.services.backendConnector.state[`${a}|${l}`];return u===-1||u===0||u===2};if(t.precheck){const a=t.precheck(this,o);if(a!==void 0)return a}return!!(this.hasResourceBundle(i,e)||!this.services.backendConnector.backend||this.options.resources&&!this.options.partialBundledLanguages||o(i,e)&&(!n||o(r,e)))}loadNamespaces(e,t){const i=hr();return this.options.ns?(Y(e)&&(e=[e]),e.forEach(n=>{this.options.ns.indexOf(n)<0&&this.options.ns.push(n)}),this.loadResources(n=>{i.resolve(),t&&t(n)}),i):(t&&t(),Promise.resolve())}loadLanguages(e,t){const i=hr();Y(e)&&(e=[e]);const n=this.options.preload||[],r=e.filter(o=>n.indexOf(o)<0&&this.services.languageUtils.isSupportedCode(o));return r.length?(this.options.preload=n.concat(r),this.loadResources(o=>{i.resolve(),t&&t(o)}),i):(t&&t(),Promise.resolve())}dir(e){var n,r;if(e||(e=this.resolvedLanguage||(((n=this.languages)==null?void 0:n.length)>0?this.languages[0]:this.language)),!e)return"rtl";const t=["ar","shu","sqr","ssh","xaa","yhd","yud","aao","abh","abv","acm","acq","acw","acx","acy","adf","ads","aeb","aec","afb","ajp","apc","apd","arb","arq","ars","ary","arz","auz","avl","ayh","ayl","ayn","ayp","bbz","pga","he","iw","ps","pbt","pbu","pst","prp","prd","ug","ur","ydd","yds","yih","ji","yi","hbo","men","xmn","fa","jpr","peo","pes","prs","dv","sam","ckb"],i=((r=this.services)==null?void 0:r.languageUtils)||new Il(Ul());return t.indexOf(i.getLanguagePartFromCode(e))>-1||e.toLowerCase().indexOf("-arab")>1?"rtl":"ltr"}static createInstance(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;return new Hr(e,t)}cloneInstance(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:vs;const i=e.forkResourceStore;i&&delete e.forkResourceStore;const n={...this.options,...e,isClone:!0},r=new Hr(n);if((e.debug!==void 0||e.prefix!==void 0)&&(r.logger=r.logger.clone(e)),["store","services","language"].forEach(a=>{r[a]=this[a]}),r.services={...this.services},r.services.utils={hasLoadedNamespace:r.hasLoadedNamespace.bind(r)},i){const a=Object.keys(this.store.data).reduce((l,u)=>(l[u]={...this.store.data[u]},Object.keys(l[u]).reduce((c,d)=>(c[d]={...l[u][d]},c),{})),{});r.store=new Ml(a,n),r.services.resourceStore=r.store}return r.translator=new Qs(r.services,n),r.translator.on("*",function(a){for(var l=arguments.length,u=new Array(l>1?l-1:0),c=1;c<l;c++)u[c-1]=arguments[c];r.emit(a,...u)}),r.init(n,t),r.translator.options=n,r.translator.backendConnector.services.utils={hasLoadedNamespace:r.hasLoadedNamespace.bind(r)},r}toJSON(){return{options:this.options,store:this.store,language:this.language,languages:this.languages,resolvedLanguage:this.resolvedLanguage}}}const _=Hr.createInstance();_.createInstance=Hr.createInstance;_.createInstance;_.dir;_.init;_.loadResources;_.reloadResources;_.use;_.changeLanguage;_.getFixedT;_.t;_.exists;_.setDefaultNamespace;_.hasLoadedNamespace;_.loadNamespaces;_.loadLanguages;const{slice:Yh,forEach:Xh}=[];function Gh(s){return Xh.call(Yh.call(arguments,1),e=>{if(e)for(const t in e)s[t]===void 0&&(s[t]=e[t])}),s}function Kh(s){return typeof s!="string"?!1:[/<\s*script.*?>/i,/<\s*\/\s*script\s*>/i,/<\s*img.*?on\w+\s*=/i,/<\s*\w+\s*on\w+\s*=.*?>/i,/javascript\s*:/i,/vbscript\s*:/i,/expression\s*\(/i,/eval\s*\(/i,/alert\s*\(/i,/document\.cookie/i,/document\.write\s*\(/i,/window\.location/i,/innerHTML/i].some(t=>t.test(s))}const ql=/^[\u0009\u0020-\u007e\u0080-\u00ff]+$/,Jh=function(s,e){const i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{path:"/"},n=encodeURIComponent(e);let r=`${s}=${n}`;if(i.maxAge>0){const o=i.maxAge-0;if(Number.isNaN(o))throw new Error("maxAge should be a Number");r+=`; Max-Age=${Math.floor(o)}`}if(i.domain){if(!ql.test(i.domain))throw new TypeError("option domain is invalid");r+=`; Domain=${i.domain}`}if(i.path){if(!ql.test(i.path))throw new TypeError("option path is invalid");r+=`; Path=${i.path}`}if(i.expires){if(typeof i.expires.toUTCString!="function")throw new TypeError("option expires is invalid");r+=`; Expires=${i.expires.toUTCString()}`}if(i.httpOnly&&(r+="; HttpOnly"),i.secure&&(r+="; Secure"),i.sameSite)switch(typeof i.sameSite=="string"?i.sameSite.toLowerCase():i.sameSite){case!0:r+="; SameSite=Strict";break;case"lax":r+="; SameSite=Lax";break;case"strict":r+="; SameSite=Strict";break;case"none":r+="; SameSite=None";break;default:throw new TypeError("option sameSite is invalid")}return i.partitioned&&(r+="; Partitioned"),r},Wl={create(s,e,t,i){let n=arguments.length>4&&arguments[4]!==void 0?arguments[4]:{path:"/",sameSite:"strict"};t&&(n.expires=new Date,n.expires.setTime(n.expires.getTime()+t*60*1e3)),i&&(n.domain=i),document.cookie=Jh(s,e,n)},read(s){const e=`${s}=`,t=document.cookie.split(";");for(let i=0;i<t.length;i++){let n=t[i];for(;n.charAt(0)===" ";)n=n.substring(1,n.length);if(n.indexOf(e)===0)return n.substring(e.length,n.length)}return null},remove(s,e){this.create(s,"",-1,e)}};var Zh={name:"cookie",lookup(s){let{lookupCookie:e}=s;if(e&&typeof document<"u")return Wl.read(e)||void 0},cacheUserLanguage(s,e){let{lookupCookie:t,cookieMinutes:i,cookieDomain:n,cookieOptions:r}=e;t&&typeof document<"u"&&Wl.create(t,s,i,n,r)}},Qh={name:"querystring",lookup(s){var i;let{lookupQuerystring:e}=s,t;if(typeof window<"u"){let{search:n}=window.location;!window.location.search&&((i=window.location.hash)==null?void 0:i.indexOf("?"))>-1&&(n=window.location.hash.substring(window.location.hash.indexOf("?")));const o=n.substring(1).split("&");for(let a=0;a<o.length;a++){const l=o[a].indexOf("=");l>0&&o[a].substring(0,l)===e&&(t=o[a].substring(l+1))}}return t}},ef={name:"hash",lookup(s){var n;let{lookupHash:e,lookupFromHashIndex:t}=s,i;if(typeof window<"u"){const{hash:r}=window.location;if(r&&r.length>2){const o=r.substring(1);if(e){const a=o.split("&");for(let l=0;l<a.length;l++){const u=a[l].indexOf("=");u>0&&a[l].substring(0,u)===e&&(i=a[l].substring(u+1))}}if(i)return i;if(!i&&t>-1){const a=r.match(/\/([a-zA-Z-]*)/g);return Array.isArray(a)?(n=a[typeof t=="number"?t:0])==null?void 0:n.replace("/",""):void 0}}}return i}};let Tn=null;const Yl=()=>{if(Tn!==null)return Tn;try{if(Tn=typeof window<"u"&&window.localStorage!==null,!Tn)return!1;const s="i18next.translate.boo";window.localStorage.setItem(s,"foo"),window.localStorage.removeItem(s)}catch{Tn=!1}return Tn};var tf={name:"localStorage",lookup(s){let{lookupLocalStorage:e}=s;if(e&&Yl())return window.localStorage.getItem(e)||void 0},cacheUserLanguage(s,e){let{lookupLocalStorage:t}=e;t&&Yl()&&window.localStorage.setItem(t,s)}};let On=null;const Xl=()=>{if(On!==null)return On;try{if(On=typeof window<"u"&&window.sessionStorage!==null,!On)return!1;const s="i18next.translate.boo";window.sessionStorage.setItem(s,"foo"),window.sessionStorage.removeItem(s)}catch{On=!1}return On};var nf={name:"sessionStorage",lookup(s){let{lookupSessionStorage:e}=s;if(e&&Xl())return window.sessionStorage.getItem(e)||void 0},cacheUserLanguage(s,e){let{lookupSessionStorage:t}=e;t&&Xl()&&window.sessionStorage.setItem(t,s)}},rf={name:"navigator",lookup(s){const e=[];if(typeof navigator<"u"){const{languages:t,userLanguage:i,language:n}=navigator;if(t)for(let r=0;r<t.length;r++)e.push(t[r]);i&&e.push(i),n&&e.push(n)}return e.length>0?e:void 0}},sf={name:"htmlTag",lookup(s){let{htmlTag:e}=s,t;const i=e||(typeof document<"u"?document.documentElement:null);return i&&typeof i.getAttribute=="function"&&(t=i.getAttribute("lang")),t}},of={name:"path",lookup(s){var n;let{lookupFromPathIndex:e}=s;if(typeof window>"u")return;const t=window.location.pathname.match(/\/([a-zA-Z-]*)/g);return Array.isArray(t)?(n=t[typeof e=="number"?e:0])==null?void 0:n.replace("/",""):void 0}},af={name:"subdomain",lookup(s){var n,r;let{lookupFromSubdomainIndex:e}=s;const t=typeof e=="number"?e+1:1,i=typeof window<"u"&&((r=(n=window.location)==null?void 0:n.hostname)==null?void 0:r.match(/^(\w{2,5})\.(([a-z0-9-]{1,63}\.[a-z]{2,6})|localhost)/i));if(i)return i[t]}};let cc=!1;try{document.cookie,cc=!0}catch{}const dc=["querystring","cookie","localStorage","sessionStorage","navigator","htmlTag"];cc||dc.splice(1,1);const lf=()=>({order:dc,lookupQuerystring:"lng",lookupCookie:"i18next",lookupLocalStorage:"i18nextLng",lookupSessionStorage:"i18nextLng",caches:["localStorage"],excludeCacheFor:["cimode"],convertDetectedLanguage:s=>s});class hc{constructor(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.type="languageDetector",this.detectors={},this.init(e,t)}init(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{languageUtils:{}},t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};this.services=e,this.options=Gh(t,this.options||{},lf()),typeof this.options.convertDetectedLanguage=="string"&&this.options.convertDetectedLanguage.indexOf("15897")>-1&&(this.options.convertDetectedLanguage=n=>n.replace("-","_")),this.options.lookupFromUrlIndex&&(this.options.lookupFromPathIndex=this.options.lookupFromUrlIndex),this.i18nOptions=i,this.addDetector(Zh),this.addDetector(Qh),this.addDetector(tf),this.addDetector(nf),this.addDetector(rf),this.addDetector(sf),this.addDetector(of),this.addDetector(af),this.addDetector(ef)}addDetector(e){return this.detectors[e.name]=e,this}detect(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:this.options.order,t=[];return e.forEach(i=>{if(this.detectors[i]){let n=this.detectors[i].lookup(this.options);n&&typeof n=="string"&&(n=[n]),n&&(t=t.concat(n))}}),t=t.filter(i=>i!=null&&!Kh(i)).map(i=>this.options.convertDetectedLanguage(i)),this.services&&this.services.languageUtils&&this.services.languageUtils.getBestMatchFromCodes?t:t.length>0?t[0]:null}cacheUserLanguage(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:this.options.caches;t&&(this.options.excludeCacheFor&&this.options.excludeCacheFor.indexOf(e)>-1||t.forEach(i=>{this.detectors[i]&&this.detectors[i].cacheUserLanguage(e,this.options)}))}}hc.type="languageDetector";const uf={about:"About",journey:"Journey",praxis:"Method",connect:"Connect",languages:{en:"EN",pt:"PT"}},cf={status:"Available for hiring",picDescription:"An image of Paul M., a bearded man with short, dark hair. He is looking to the right with a thoughtful expression. He is wearing a plain t-shirt.",content:{m1:"Product designer",m2:"and creative coder",d1:"Designer and coder crafting",d2:"future-ready digital interactions.",h1:"Enthusiast of decentralized technologies",p1:", driven by the open-source movement and other geeky stuff. Previously part of an interactive marketing company focused on lead generation from Denver, CO.",h2:"Devoted to quality",p2:", I commit to continuous learning and professional development, staying abreast of emerging design trends technological advancements, and industry best practices to deliver cutting-edge solutions."}},df={t1:"Design in thinking.",p1:"From insight to interface, I design with people in mind. Merging aesthetics, purpose, and cutting-edge tech through Design Thinking and Human-Centered Design.",t2:"Technology to deliver.",p2:"Learning from tech experts early on made algorithms a core part of my toolkit, bridging design and engineering to craft seamless, refined digital experiences."},hf={t0:"Journey",t1:"Design <br class='block xl:hidden'> intern",p1:"During my internship, I had the opportunity to refine and develop skills across various functions. HTML and CSS development, marketing initiatives, visual design, stoneing, and UX/UI design.",t2:"Designer, <br class='block xl:hidden'> front-end coder",p2:"In multifaceted collaboration with managers and the development team, we successfully redesigned the interfaces and features of company's software.",m2:"Also played a key role in co-creating a platform that facilitates connecting individuals facing legal issues with specialized professionals.",t3:"Visual and <br class='block xl:hidden'> product designer",p3:"Early 2018, I held the role of a generalist designer, tasked with developing and managing all aspects of design and creative outputs for their product project.",m3:"Second half of the year, I collaborated with another company to design an open-source library of interface components.",t4:"Lead designer, <br class='block xl:hidden'> UI engineer",p4:"Today responsible for redesigning the company's advanced lead management platform, using React components to improve performance and scalability."},ff={title:"Recent project",description:"A robust software for lead management, optimization, and distribution.",cta:"See details",project:"twyne.io"},pf={title:"Reach out"},gf={title:"Featured <br> projects",button:"Projects"},mf={menu:{about:"About",goal:"Goal",proposal:"Proposal",impact:"Impact",mobile:"Mobile",conclusion:"Conclusion"},t1:"Case study / 01",t2:"Twyne",about:{t1:"about",p1:"Developed by Ifficient, <span class='text-zinc-100'>Twyne is a robust software for lead management, optimization, and distribution, focused on monetization and real-time analytics.</span>",p2:"Targeted at the B2B market, it serves a few clients in volume, but with high ticket value and demanding customization.",details:{company:"Company",companyValue:"Ifficient",industry:"Industry",industryValue:"AdTech",product:"Product",productValue:"Software as a Service",contributions:"Contributions",contribution1:"Product Design",contribution2:"Design System",contribution3:"UI Engineering"}},goal:{t1:"Goal",p1:"Tackling one of the biggest challenges in digital design: creating a <span class='text-zinc-100'>modular</span>, <span class='text-zinc-100'>scalable</span>, and <span class='text-zinc-100'>adaptable</span> interface for highly complex software, with constant growth in features and requirements.",p2:"The visual approach needed to balance performance, readability, and continuous evolution, without requiring a restart for every new feature. Delivering clarity and control even in dense flows."},proposal:{t1:"Proposal",l1:["A robust, strategic, and flexible UI kit.","Simplified UI that puts information up front.","Built to last, scale, and ease development."],p1:"Each component carries decisions guided by performance, readability, and functional clarity, with special attention to business logic and the journey of corporate users."},impact:{t1:"Impact",l1:["Reduced rework for the engineering team.","Faster onboarding for new users.","Supports new modules with minimal friction.","Strengthened identity with a modern UI."]},numbers:{t1:"+ 400k",p1:"Registrations acquired per day",t2:"+ 2 million",p2:"User clicks on campaigns",t3:"+ 7 million",p3:"Leads negotiated daily"},mobile:{t1:"<span class='block mb-4'>Built on solid principles.</span> Ready for any platform."},conclusion:{t1:"Final thoughts",p1:"The modularity of the component library enables smart reuse, reducing complexity and increasing development speed.",p2:"Decisions on layout, typography, contrast, and spacing were calibrated to support dense data environments without compromising readability.",p3:"The result is an interface that adapts to the usage context without losing visual coherence or functional integrity."}},_f={title:"Allugator",tags:"Design Partner, Branding, Early stage start-up",year:"2018",description:"Acting as a generalist designer, I contributed key deliverables for the startup's growth in its early stage, from rebranding and brand communication to digital product evolution.",metrics:{valuation:{title:"R$ 2.4 M valuation",subtitle:"EqSeed: 46 investors in 2018"},users:{title:"+ 7000 new users",subtitle:"+ 100% compared to 2017"},daily:{title:"+ 1000 daily in 2018",subtitle:"+ 100% compared to 2017"}}},vf={title:"Damus",tags:"Experiment, Rebranding, Graphic design",year:"2024",description1:"<a href='https://damus.io/' rel='noreferrer noopener' class='underline text-zinc-100' target='_blank' title='Damus official website'>Damus</a> is a client for the decentralized social network Nostr, available for iOS, iPad, and macOS. It allows users to post text, images, videos, and GIFs, as well as interact with other users through the sending of <a href='https://en.wikipedia.org/wiki/Satoshi' class='underline text-zinc-100' target='_blank' title='Satoshi is the smallest unit of the system, representing 0.00000001 bitcoin, a hundredth of a millionth of a bitcoin.'>satoshis</a> and encrypted private messages.",description2:"The goal of Damus is to offer an alternative to traditional social networks, focusing on freedom of expression and privacy."},yf={title:"Ifficient",tags:"Product, UX, UI, Front-end",description1:"Interactive marketing company specialized in lead generation, based in Denver, CO.",description2:"There I led the design of Twyne and Path Evolution software, ensuring scalability and consistency in product evolution.",cta:"See details",fullView:"Full view"},bf={title:"Multiplayer Orchestra",tags:"Volunteer, Production, Visual Design",year:"2017",description1:"Created by former students of UFMG's School of Music, Multiplayer explored soundtracks from series, movies, and games in their repertoire, connecting classical music to pop culture.",description2:"I was invited to join the project as a designer, taking care of visual communication and providing support in event production.",metrics:{audience:{title:"+ 1600 people in 2 presentations",subtitle:"Lights, Camera, Multiplayer! @ Cine Theatro Brasil"},facebook:{title:"4.7k followers",subtitle:"Facebook"},youtube:{title:"2.1k subscribers",subtitle:"YouTube"}}},xf={404:{title:"404 · Page not found · Paulo Melo"},common:{description:"Enthusiast of decentralized technologies, Paul is a designer and coder from Brazil. Here you can find links to stay in touch with him.",keywords:"Paul M, Paulo Melo Jr, pmjr, digital product designer, product designer, interface designer, UI/UX, UX designer, UI designer, creative coder, front-end, frontend, web design, design system, GSAP, animations, motion design, branding, portfolio, Brazil, São Paulo, decentralized technologies, bitcoin, nostr"},home:{title:"Paulo Melo · Designer and coder"},projects:{title:"Featured projects · Paulo Melo",keywords:"archive, projects, case studies"},glyphs:{title:"Glyphs · Paulo Melo",keywords:"glyphs, symbols, special characters, unicode, copy symbols, icons"},twyne:{title:"Twyne · Paulo Melo",keywords:"twyne, case study, product design, ui/ux, onboarding, mobile, web, adtech, interactive marketing, lead generation"}},Df={menu:uf,about:cf,praxis:df,journey:hf,cases:ff,connect:pf,featured:gf,twyne:mf,allugator:_f,damus:vf,ifficient:yf,multiplayer:bf,seo:xf},wf={about:"Sobre",journey:"Jornada",praxis:"Método",connect:"Contato",languages:{en:"EN",pt:"PT"}},Cf={status:"Disponível para contratação",picDescription:"Uma foto de Paulo, um homem barbado com cabelos curtos e escuros. Ele está olhando para a direita com uma expressão pensativa. Ele usa uma camisa simples.",content:{m1:"Product designer",m2:"e front-end coder",d1:"Designer e programador criando",d2:"experiências digitais para o futuro.",h1:"Entusiasta de tecnologias descentralizadas",p1:" e valorizando soluções open-source. Recentemente atuei em uma empresa de marketing interativo especializada em geração de leads, com base em Denver, CO.",h2:"Comprometido com a qualidade",p2:" e o aprendizado contínuo, mantenho-me atualizado sobre tendências de design, avanços tecnológicos e as melhores práticas do setor para entregar soluções modernas e eficazes."}},Sf={t1:"Design no pensar.",p1:"Do insight à interface, projeto com foco nas pessoas. Unindo estética, propósito e tecnologia de ponta por meio do Design Thinking e Human-Centered Design.",t2:"Tecnologia para realizar.",p2:"Aprender com experts em tecnologia desde cedo tornou algoritmos parte do meu repertório, assim conecto design e engenharia para criar experiências refinadas."},Ef={t0:"Jornada",t1:"Estagiário de <br class='block xl:hidden'> design",p1:"Durante meu estágio, tive a oportunidade de refinar e desenvolver habilidades em várias funções. Desenvolvimento HTML e CSS, iniciativas de marketing, design visual, stoneing e design UX/UI.",m1:"",t2:"Designer, <br class='block xl:hidden'> front-end coder",p2:"Em colaboração multifacetada com gerentes e a equipe de desenvolvimento, redesenhamos com sucesso as interfaces e funcionalidades do software da empresa.",m2:"Também desempenhei um papel fundamental na co-criação de uma plataforma que facilita a conexão de pessoas enfrentando questões legais com profissionais especializados.",t3:"Designer de produto",p3:"No início de 2018, exerci o papel de designer generalista, responsável por desenvolver e gerenciar todos os aspectos do design e saídas criativas para o projeto de produto.",m3:"Na segunda metade do ano, colaborei com outra empresa para projetar uma biblioteca open-source de componentes de interface.",t4:"Lead designer, <br class='block xl:hidden'> UI engineer",p4:"Hoje responsável por redesenhar a plataforma avançada de gerenciamento de leads da empresa, usando componentes React para melhorar performance e escalabilidade."},$f={title:"Projeto mais recente",description:"Um software robusto para gestão, otimização e distribuição de leads.",cta:"Ver detalhes",project:"twyne.io"},Pf={title:"Entre em contato"},kf={title:"Projetos <br> em destaque",button:"Projetos"},Tf={menu:{about:"Sobre",goal:"Objetivo",proposal:"Proposta",impact:"Impacto",mobile:"Mobile",conclusion:"Conclusão"},t1:"Estudo de caso / 01",t2:"Twyne",about:{t1:"O que é",p1:"Desenvolvida pela Ifficient, <span class='text-zinc-100'>o Twyne é um software robusto de gestão, otimização e distribuição de leads, com foco em monetização e análise em tempo real.</span>",p2:"Voltada para o mercado B2B, atende poucos clientes em volume, mas com alto ticket médio e exigências elevadas de personalização."},projectInfo:{company:"Empresa",companyValue:"Ifficient",industry:"Setor",industryValue:"AdTech",product:"Produto",productValue:"Software as a Service",contributions:"Contribuições",contribution1:"Design de Produto",contribution2:"Design System",contribution3:"UI Engineering"},goal:{t1:"Objetivo",p1:"Resolver um dos grandes desafios do design digital: criar uma <span class='text-zinc-100'>interface modular</span>, <span class='text-zinc-100'>escalável</span> e <span class='text-zinc-100'>adaptável</span> para um software de alta complexidade técnica, com crescimento constante de features e demandas.",p2:"A proposta visual precisava equilibrar performance, legibilidade e evolução contínua, sem exigir recomeços a cada nova funcionalidade. Oferecendo clareza e controle mesmo em fluxos densos."},proposal:{t1:"Proposta",l1:["Biblioteca de componentes robusta, estratégica e flexível.","UI simplificada e informações em primeiro plano.","Pensado para durar, escalar e facilitar o desenvolvimento."],p1:"Cada componente carrega decisões orientadas por performance, legibilidade e clareza funcional, com atenção especial à jornada dos usuários corporativos."},impact:{t1:"Impactos",l1:["Redução de retrabalho no time de engenharia.","Aumento na velocidade de onboarding de novos usuários.","Base que suportou a adição de novos módulos sem atrito.","Fortalecimento da identidade do produto com uma UI moderna."]},numbers:{t1:"+ 400 mil",p1:"Registros adiquiridos por dia",t2:"+ 2 milhões",p2:"Clicks de usuários em campanhas",t3:"+ 7 milhões",p3:"Leads negociados diariamente"},mobile:{t1:"<span class='block mb-4'>Construído com solidez.</span> Pronto para qualquer plataforma."},conclusion:{t1:"Considerações finais",p1:"A modularidade do UI kit permite reuso inteligente, reduzindo complexidade e aumentando a velocidade de desenvolvimento.",p2:"As decisões de layout, tipografia, contraste e espaçamento foram calibradas para sustentar ambientes densos de dados sem comprometer a legibilidade.",p3:"O resultado é uma interface que se adapta ao contexto de uso sem perder coerência visual nem integridade funcional."}},Of={title:"Allugator",tags:"Design Partner, Branding, Early stage start-up",year:"2018",description:"Atuando como designer generalista, contribuí com entregas-chave para o crescimento da startup em seu estágio inicial, da reformulação da identidade e comunicação da marca à evolução do produto digital.",metrics:{valuation:{title:"R$ 2.4 M valuation",subtitle:"EqSeed: 46 investidores em 2018"},users:{title:"+ 7000 usuários novos",subtitle:"+ 100% em relação a 2017"},daily:{title:"+ 1000 diárias em 2018",subtitle:"+ 100% em relação a 2017"}}},Ff={title:"Damus",tags:"Experimento, Rebranding, Design gráfico",year:"2024",description1:"<a href='https://damus.io/' rel='noreferrer noopener' class='underline text-zinc-100' target='_blank' title='Site oficial do Damus'>Damus</a> é um cliente para a rede social descentralizada Nostr, disponível para iOS, iPad e macOS. Ele permite aos usuários postar textos, imagens, vídeos e GIFs, além de interagir com outros usuários através de envio de <a href='https://pt.wikipedia.org/wiki/Bitcoin' class='underline text-zinc-100' target='_blank' title='Satoshi, é a menor quantidade do sistema, representando 0,00000001 bitcoin, um centésimo de milionésimo de bitcoin.'>satoshis</a> e mensagens privadas criptografadas.",description2:"O objetivo do Damus é oferecer uma alternativa às redes sociais tradicionais, com foco na liberdade de expressão e privacidade."},Af={title:"Ifficient",tags:"Product, UX, UI, Front-end",description1:"Companhia de marketing interativo especializada em geração de leads, com base em Denver, CO.",description2:"Nela liderei o design dos softwares Twyne e Path Evolution, assegurando escalabilidade e consistência na evolução dos produtos.",cta:"Ver detalhes",fullView:"Ver tudo"},Lf={title:"Orquestra Multiplayer",tags:"Voluntário, Produção, Visual Design",year:"2017",description1:"Criada por ex-alunos da Escola de Música da UFMG, a Multiplayer explorava trilhas sonoras de séries, filmes e jogos em seu repertório, ligando música erudita à cultura pop.",description2:"Fui convidado a integrar o projeto como designer, cuidando da comunicação visual e prestando suporte na produção dos eventos.",metrics:{audience:{title:"+ 1600 pessoas em 2 apresentações",subtitle:"Luzes, Câmera, Multiplayer!  @ Cine Theatro Brasil"},facebook:{title:"4,7 mil seguidores",subtitle:"Facebook"},youtube:{title:"2,1 mil inscritos",subtitle:"YouTube"}}},zf={404:{title:"404 · Página não encontrada · Paulo Melo"},common:{description:"Entusiasta de tecnologias descentralizadas, Paulo é designer e coder do Brasil. Aqui você encontra links para se conectar com ele.",keywords:"Paulo Melo Júnior, Paulo Melo Jr, Paul M, pmjr, designer de produto digital, product designer, designer de interface, UI/UX, UX designer, UI designer, creative coder, front-end, frontend, web design, design system, GSAP, animações, motion design, stoneing, portfólio, Brasil, São Paulo, tecnologias descentralizadas, bitcoin, nostr"},home:{title:"Paulo Melo · Designer and coder"},projects:{title:"Projetos em destaque · Paulo Melo",keywords:"arquivo, projetos, cases"},glyphs:{title:"Glifos · Paulo Melo",keywords:"glifos, símbolos, caracteres especiais, unicode, copiar símbolos, ícones"},twyne:{title:"Twyne · Paulo Melo",keywords:"twyne, estudo de caso, design de produto, ui/ux, onboarding, mobile, web, adtech, marketing interativo, geração de leads"}},Mf={menu:wf,about:Cf,praxis:Sf,journey:Ef,cases:$f,connect:Pf,featured:kf,twyne:Tf,allugator:Of,damus:Ff,ifficient:Af,multiplayer:Lf,seo:zf};_.use(hc).init({fallbackLng:"en",detection:{order:["navigator","htmlTag"],caches:["localStorage"]},interpolation:{escapeValue:!1},resources:{en:{translation:Df},pt:{translation:Mf}}});_.on("languageChanged",s=>{document.documentElement.lang=s});var Rf="1.3.13";function fc(s,e,t){return Math.max(s,Math.min(e,t))}function jf(s,e,t){return(1-t)*s+t*e}function If(s,e,t,i){return jf(s,e,1-Math.exp(-t*i))}function Nf(s,e){return(s%e+e)%e}var Bf=class{constructor(){j(this,"isRunning",!1);j(this,"value",0);j(this,"from",0);j(this,"to",0);j(this,"currentTime",0);j(this,"lerp");j(this,"duration");j(this,"easing");j(this,"onUpdate")}advance(s){var t;if(!this.isRunning)return;let e=!1;if(this.duration&&this.easing){this.currentTime+=s;const i=fc(0,this.currentTime/this.duration,1);e=i>=1;const n=e?1:this.easing(i);this.value=this.from+(this.to-this.from)*n}else this.lerp?(this.value=If(this.value,this.to,this.lerp*60,s),Math.round(this.value)===this.to&&(this.value=this.to,e=!0)):(this.value=this.to,e=!0);e&&this.stop(),(t=this.onUpdate)==null||t.call(this,this.value,e)}stop(){this.isRunning=!1}fromTo(s,e,{lerp:t,duration:i,easing:n,onStart:r,onUpdate:o}){this.from=this.value=s,this.to=e,this.lerp=t,this.duration=i,this.easing=n,this.currentTime=0,this.isRunning=!0,r==null||r(),this.onUpdate=o}};function Hf(s,e){let t;return function(...i){let n=this;clearTimeout(t),t=setTimeout(()=>{t=void 0,s.apply(n,i)},e)}}var Uf=class{constructor(s,e,{autoResize:t=!0,debounce:i=250}={}){j(this,"width",0);j(this,"height",0);j(this,"scrollHeight",0);j(this,"scrollWidth",0);j(this,"debouncedResize");j(this,"wrapperResizeObserver");j(this,"contentResizeObserver");j(this,"resize",()=>{this.onWrapperResize(),this.onContentResize()});j(this,"onWrapperResize",()=>{this.wrapper instanceof Window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)});j(this,"onContentResize",()=>{this.wrapper instanceof Window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)});this.wrapper=s,this.content=e,t&&(this.debouncedResize=Hf(this.resize,i),this.wrapper instanceof Window?window.addEventListener("resize",this.debouncedResize,!1):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}destroy(){var s,e;(s=this.wrapperResizeObserver)==null||s.disconnect(),(e=this.contentResizeObserver)==null||e.disconnect(),this.wrapper===window&&this.debouncedResize&&window.removeEventListener("resize",this.debouncedResize,!1)}get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}},pc=class{constructor(){j(this,"events",{})}emit(s,...e){var i;let t=this.events[s]||[];for(let n=0,r=t.length;n<r;n++)(i=t[n])==null||i.call(t,...e)}on(s,e){var t;return(t=this.events[s])!=null&&t.push(e)||(this.events[s]=[e]),()=>{var i;this.events[s]=(i=this.events[s])==null?void 0:i.filter(n=>e!==n)}}off(s,e){var t;this.events[s]=(t=this.events[s])==null?void 0:t.filter(i=>e!==i)}destroy(){this.events={}}},Gl=100/6,ki={passive:!1},Vf=class{constructor(s,e={wheelMultiplier:1,touchMultiplier:1}){j(this,"touchStart",{x:0,y:0});j(this,"lastDelta",{x:0,y:0});j(this,"window",{width:0,height:0});j(this,"emitter",new pc);j(this,"onTouchStart",s=>{const{clientX:e,clientY:t}=s.targetTouches?s.targetTouches[0]:s;this.touchStart.x=e,this.touchStart.y=t,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:s})});j(this,"onTouchMove",s=>{const{clientX:e,clientY:t}=s.targetTouches?s.targetTouches[0]:s,i=-(e-this.touchStart.x)*this.options.touchMultiplier,n=-(t-this.touchStart.y)*this.options.touchMultiplier;this.touchStart.x=e,this.touchStart.y=t,this.lastDelta={x:i,y:n},this.emitter.emit("scroll",{deltaX:i,deltaY:n,event:s})});j(this,"onTouchEnd",s=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:s})});j(this,"onWheel",s=>{let{deltaX:e,deltaY:t,deltaMode:i}=s;const n=i===1?Gl:i===2?this.window.width:1,r=i===1?Gl:i===2?this.window.height:1;e*=n,t*=r,e*=this.options.wheelMultiplier,t*=this.options.wheelMultiplier,this.emitter.emit("scroll",{deltaX:e,deltaY:t,event:s})});j(this,"onWindowResize",()=>{this.window={width:window.innerWidth,height:window.innerHeight}});this.element=s,this.options=e,window.addEventListener("resize",this.onWindowResize,!1),this.onWindowResize(),this.element.addEventListener("wheel",this.onWheel,ki),this.element.addEventListener("touchstart",this.onTouchStart,ki),this.element.addEventListener("touchmove",this.onTouchMove,ki),this.element.addEventListener("touchend",this.onTouchEnd,ki)}on(s,e){return this.emitter.on(s,e)}destroy(){this.emitter.destroy(),window.removeEventListener("resize",this.onWindowResize,!1),this.element.removeEventListener("wheel",this.onWheel,ki),this.element.removeEventListener("touchstart",this.onTouchStart,ki),this.element.removeEventListener("touchmove",this.onTouchMove,ki),this.element.removeEventListener("touchend",this.onTouchEnd,ki)}},Kl=s=>Math.min(1,1.001-Math.pow(2,-10*s)),gc=class{constructor({wrapper:s=window,content:e=document.documentElement,eventsTarget:t=s,smoothWheel:i=!0,syncTouch:n=!1,syncTouchLerp:r=.075,touchInertiaExponent:o=1.7,duration:a,easing:l,lerp:u=.1,infinite:c=!1,orientation:d="vertical",gestureOrientation:h=d==="horizontal"?"both":"vertical",touchMultiplier:f=1,wheelMultiplier:g=1,autoResize:p=!0,prevent:m,virtualScroll:y,overscroll:v=!0,autoRaf:D=!1,anchors:x=!1,autoToggle:C=!1,allowNestedScroll:E=!1,__experimental__naiveDimensions:w=!1}={}){j(this,"_isScrolling",!1);j(this,"_isStopped",!1);j(this,"_isLocked",!1);j(this,"_preventNextNativeScrollEvent",!1);j(this,"_resetVelocityTimeout",null);j(this,"__rafID",null);j(this,"isTouching");j(this,"time",0);j(this,"userData",{});j(this,"lastVelocity",0);j(this,"velocity",0);j(this,"direction",0);j(this,"options");j(this,"targetScroll");j(this,"animatedScroll");j(this,"animate",new Bf);j(this,"emitter",new pc);j(this,"dimensions");j(this,"virtualScroll");j(this,"onScrollEnd",s=>{s instanceof CustomEvent||(this.isScrolling==="smooth"||this.isScrolling===!1)&&s.stopPropagation()});j(this,"dispatchScrollendEvent",()=>{this.options.wrapper.dispatchEvent(new CustomEvent("scrollend",{bubbles:this.options.wrapper===window,detail:{lenisScrollEnd:!0}}))});j(this,"onTransitionEnd",s=>{if(s.propertyName.includes("overflow")){const e=this.isHorizontal?"overflow-x":"overflow-y",t=getComputedStyle(this.rootElement)[e];["hidden","clip"].includes(t)?this.internalStop():this.internalStart()}});j(this,"onClick",s=>{const t=s.composedPath().find(i=>{var n;return i instanceof HTMLAnchorElement&&((n=i.getAttribute("href"))==null?void 0:n.includes("#"))});if(t){const i=t.getAttribute("href");if(i){const n=typeof this.options.anchors=="object"&&this.options.anchors?this.options.anchors:void 0,r=`#${i.split("#")[1]}`;this.scrollTo(r,n)}}});j(this,"onPointerDown",s=>{s.button===1&&this.reset()});j(this,"onVirtualScroll",s=>{if(typeof this.options.virtualScroll=="function"&&this.options.virtualScroll(s)===!1)return;const{deltaX:e,deltaY:t,event:i}=s;if(this.emitter.emit("virtual-scroll",{deltaX:e,deltaY:t,event:i}),i.ctrlKey||i.lenisStopPropagation)return;const n=i.type.includes("touch"),r=i.type.includes("wheel");this.isTouching=i.type==="touchstart"||i.type==="touchmove";const o=e===0&&t===0;if(this.options.syncTouch&&n&&i.type==="touchstart"&&o&&!this.isStopped&&!this.isLocked){this.reset();return}const l=this.options.gestureOrientation==="vertical"&&t===0||this.options.gestureOrientation==="horizontal"&&e===0;if(o||l)return;let u=i.composedPath();u=u.slice(0,u.indexOf(this.rootElement));const c=this.options.prevent;if(u.find(m=>{var y,v,D;return m instanceof HTMLElement&&(typeof c=="function"&&(c==null?void 0:c(m))||((y=m.hasAttribute)==null?void 0:y.call(m,"data-lenis-prevent"))||n&&((v=m.hasAttribute)==null?void 0:v.call(m,"data-lenis-prevent-touch"))||r&&((D=m.hasAttribute)==null?void 0:D.call(m,"data-lenis-prevent-wheel"))||this.options.allowNestedScroll&&this.checkNestedScroll(m,{deltaX:e,deltaY:t}))}))return;if(this.isStopped||this.isLocked){i.cancelable&&i.preventDefault();return}if(!(this.options.syncTouch&&n||this.options.smoothWheel&&r)){this.isScrolling="native",this.animate.stop(),i.lenisStopPropagation=!0;return}let h=t;this.options.gestureOrientation==="both"?h=Math.abs(t)>Math.abs(e)?t:e:this.options.gestureOrientation==="horizontal"&&(h=e),(!this.options.overscroll||this.options.infinite||this.options.wrapper!==window&&this.limit>0&&(this.animatedScroll>0&&this.animatedScroll<this.limit||this.animatedScroll===0&&t>0||this.animatedScroll===this.limit&&t<0))&&(i.lenisStopPropagation=!0),i.cancelable&&i.preventDefault();const f=n&&this.options.syncTouch,p=n&&i.type==="touchend";p&&(h=Math.sign(this.velocity)*Math.pow(Math.abs(this.velocity),this.options.touchInertiaExponent)),this.scrollTo(this.targetScroll+h,{programmatic:!1,...f?{lerp:p?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}})});j(this,"onNativeScroll",()=>{if(this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this._preventNextNativeScrollEvent){this._preventNextNativeScrollEvent=!1;return}if(this.isScrolling===!1||this.isScrolling==="native"){const s=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity,this.velocity=this.animatedScroll-s,this.direction=Math.sign(this.animatedScroll-s),this.isStopped||(this.isScrolling="native"),this.emit(),this.velocity!==0&&(this._resetVelocityTimeout=setTimeout(()=>{this.lastVelocity=this.velocity,this.velocity=0,this.isScrolling=!1,this.emit()},400))}});j(this,"raf",s=>{const e=s-(this.time||s);this.time=s,this.animate.advance(e*.001),this.options.autoRaf&&(this.__rafID=requestAnimationFrame(this.raf))});window.lenisVersion=Rf,(!s||s===document.documentElement)&&(s=window),typeof a=="number"&&typeof l!="function"?l=Kl:typeof l=="function"&&typeof a!="number"&&(a=1),this.options={wrapper:s,content:e,eventsTarget:t,smoothWheel:i,syncTouch:n,syncTouchLerp:r,touchInertiaExponent:o,duration:a,easing:l,lerp:u,infinite:c,gestureOrientation:h,orientation:d,touchMultiplier:f,wheelMultiplier:g,autoResize:p,prevent:m,virtualScroll:y,overscroll:v,autoRaf:D,anchors:x,autoToggle:C,allowNestedScroll:E,__experimental__naiveDimensions:w},this.dimensions=new Uf(s,e,{autoResize:p}),this.updateClassName(),this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll,!1),this.options.wrapper.addEventListener("scrollend",this.onScrollEnd,{capture:!0}),this.options.anchors&&this.options.wrapper===window&&this.options.wrapper.addEventListener("click",this.onClick,!1),this.options.wrapper.addEventListener("pointerdown",this.onPointerDown,!1),this.virtualScroll=new Vf(t,{touchMultiplier:f,wheelMultiplier:g}),this.virtualScroll.on("scroll",this.onVirtualScroll),this.options.autoToggle&&this.rootElement.addEventListener("transitionend",this.onTransitionEnd,{passive:!0}),this.options.autoRaf&&(this.__rafID=requestAnimationFrame(this.raf))}destroy(){this.emitter.destroy(),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll,!1),this.options.wrapper.removeEventListener("scrollend",this.onScrollEnd,{capture:!0}),this.options.wrapper.removeEventListener("pointerdown",this.onPointerDown,!1),this.options.anchors&&this.options.wrapper===window&&this.options.wrapper.removeEventListener("click",this.onClick,!1),this.virtualScroll.destroy(),this.dimensions.destroy(),this.cleanUpClassName(),this.__rafID&&cancelAnimationFrame(this.__rafID)}on(s,e){return this.emitter.on(s,e)}off(s,e){return this.emitter.off(s,e)}setScroll(s){this.isHorizontal?this.options.wrapper.scrollTo({left:s,behavior:"instant"}):this.options.wrapper.scrollTo({top:s,behavior:"instant"})}resize(){this.dimensions.resize(),this.animatedScroll=this.targetScroll=this.actualScroll,this.emit()}emit(){this.emitter.emit("scroll",this)}reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity=0,this.animate.stop()}start(){if(this.isStopped){if(this.options.autoToggle){this.rootElement.style.removeProperty("overflow");return}this.internalStart()}}internalStart(){this.isStopped&&(this.reset(),this.isStopped=!1,this.emit())}stop(){if(!this.isStopped){if(this.options.autoToggle){this.rootElement.style.setProperty("overflow","clip");return}this.internalStop()}}internalStop(){this.isStopped||(this.reset(),this.isStopped=!0,this.emit())}scrollTo(s,{offset:e=0,immediate:t=!1,lock:i=!1,duration:n=this.options.duration,easing:r=this.options.easing,lerp:o=this.options.lerp,onStart:a,onComplete:l,force:u=!1,programmatic:c=!0,userData:d}={}){if(!((this.isStopped||this.isLocked)&&!u)){if(typeof s=="string"&&["top","left","start","#"].includes(s))s=0;else if(typeof s=="string"&&["bottom","right","end"].includes(s))s=this.limit;else{let h;if(typeof s=="string"?(h=document.querySelector(s),h||(s==="#top"?s=0:console.warn("Lenis: Target not found",s))):s instanceof HTMLElement&&(s!=null&&s.nodeType)&&(h=s),h){if(this.options.wrapper!==window){const g=this.rootElement.getBoundingClientRect();e-=this.isHorizontal?g.left:g.top}const f=h.getBoundingClientRect();s=(this.isHorizontal?f.left:f.top)+this.animatedScroll}}if(typeof s=="number"){if(s+=e,s=Math.round(s),this.options.infinite){if(c){this.targetScroll=this.animatedScroll=this.scroll;const h=s-this.animatedScroll;h>this.limit/2?s=s-this.limit:h<-this.limit/2&&(s=s+this.limit)}}else s=fc(0,s,this.limit);if(s===this.targetScroll){a==null||a(this),l==null||l(this);return}if(this.userData=d??{},t){this.animatedScroll=this.targetScroll=s,this.setScroll(this.scroll),this.reset(),this.preventNextNativeScrollEvent(),this.emit(),l==null||l(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()});return}c||(this.targetScroll=s),typeof n=="number"&&typeof r!="function"?r=Kl:typeof r=="function"&&typeof n!="number"&&(n=1),this.animate.fromTo(this.animatedScroll,s,{duration:n,easing:r,lerp:o,onStart:()=>{i&&(this.isLocked=!0),this.isScrolling="smooth",a==null||a(this)},onUpdate:(h,f)=>{this.isScrolling="smooth",this.lastVelocity=this.velocity,this.velocity=h-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=h,this.setScroll(this.scroll),c&&(this.targetScroll=h),f||this.emit(),f&&(this.reset(),this.emit(),l==null||l(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()}),this.preventNextNativeScrollEvent())}})}}}preventNextNativeScrollEvent(){this._preventNextNativeScrollEvent=!0,requestAnimationFrame(()=>{this._preventNextNativeScrollEvent=!1})}checkNestedScroll(s,{deltaX:e,deltaY:t}){const i=Date.now(),n=s._lenis??(s._lenis={});let r,o,a,l,u,c,d,h;const f=this.options.gestureOrientation;if(i-(n.time??0)>2e3){n.time=Date.now();const C=window.getComputedStyle(s);n.computedStyle=C;const E=C.overflowX,w=C.overflowY;if(r=["auto","overlay","scroll"].includes(E),o=["auto","overlay","scroll"].includes(w),n.hasOverflowX=r,n.hasOverflowY=o,!r&&!o||f==="vertical"&&!o||f==="horizontal"&&!r)return!1;u=s.scrollWidth,c=s.scrollHeight,d=s.clientWidth,h=s.clientHeight,a=u>d,l=c>h,n.isScrollableX=a,n.isScrollableY=l,n.scrollWidth=u,n.scrollHeight=c,n.clientWidth=d,n.clientHeight=h}else a=n.isScrollableX,l=n.isScrollableY,r=n.hasOverflowX,o=n.hasOverflowY,u=n.scrollWidth,c=n.scrollHeight,d=n.clientWidth,h=n.clientHeight;if(!r&&!o||!a&&!l||f==="vertical"&&(!o||!l)||f==="horizontal"&&(!r||!a))return!1;let g;if(f==="horizontal")g="x";else if(f==="vertical")g="y";else{const C=e!==0,E=t!==0;C&&r&&a&&(g="x"),E&&o&&l&&(g="y")}if(!g)return!1;let p,m,y,v,D;if(g==="x")p=s.scrollLeft,m=u-d,y=e,v=r,D=a;else if(g==="y")p=s.scrollTop,m=c-h,y=t,v=o,D=l;else return!1;return(y>0?p<m:p>0)&&v&&D}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.__experimental__naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return this.options.orientation==="horizontal"}get actualScroll(){const s=this.options.wrapper;return this.isHorizontal?s.scrollX??s.scrollLeft:s.scrollY??s.scrollTop}get scroll(){return this.options.infinite?Nf(this.animatedScroll,this.limit):this.animatedScroll}get progress(){return this.limit===0?1:this.scroll/this.limit}get isScrolling(){return this._isScrolling}set isScrolling(s){this._isScrolling!==s&&(this._isScrolling=s,this.updateClassName())}get isStopped(){return this._isStopped}set isStopped(s){this._isStopped!==s&&(this._isStopped=s,this.updateClassName())}get isLocked(){return this._isLocked}set isLocked(s){this._isLocked!==s&&(this._isLocked=s,this.updateClassName())}get isSmooth(){return this.isScrolling==="smooth"}get className(){let s="lenis";return this.options.autoToggle&&(s+=" lenis-autoToggle"),this.isStopped&&(s+=" lenis-stopped"),this.isLocked&&(s+=" lenis-locked"),this.isScrolling&&(s+=" lenis-scrolling"),this.isScrolling==="smooth"&&(s+=" lenis-smooth"),s}updateClassName(){this.cleanUpClassName(),this.rootElement.className=`${this.rootElement.className} ${this.className}`.trim()}cleanUpClassName(){this.rootElement.className=this.rootElement.className.replace(/lenis(-\w+)?/g,"").trim()}};const Ur=new gc;window.lenis=Ur;function ea(s){Ur.raf(s),requestAnimationFrame(ea)}const qf=!!document.querySelector("mobile-loading");qf?(Ur.stop(),window.addEventListener("mobile-loading:done",()=>{Ur.start(),requestAnimationFrame(ea)},{once:!0})):requestAnimationFrame(ea);document.addEventListener("click",s=>{const e=s.target.closest('a[href^="#"]');if(!e)return;const t=e.getAttribute("href");if(!t)return;const i=document.querySelector(t);i&&(s.preventDefault(),Ur.scrollTo(i))});function gi(s){if(s===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return s}function mc(s,e){s.prototype=Object.create(e.prototype),s.prototype.constructor=s,s.__proto__=e}/*!
 * GSAP 3.13.0
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Lt={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Yn={duration:.5,overwrite:!1,delay:0},Ja,Ze,ve,Bt=1e8,pe=1/Bt,ta=Math.PI*2,Wf=ta/4,Yf=0,_c=Math.sqrt,Xf=Math.cos,Gf=Math.sin,Ye=function(e){return typeof e=="string"},$e=function(e){return typeof e=="function"},xi=function(e){return typeof e=="number"},Za=function(e){return typeof e>"u"},ui=function(e){return typeof e=="object"},yt=function(e){return e!==!1},Qa=function(){return typeof window<"u"},ys=function(e){return $e(e)||Ye(e)},vc=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},ot=Array.isArray,ia=/(?:-?\.?\d|\.)+/gi,yc=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,jn=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Fo=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,bc=/[+-]=-?[.\d]+/,xc=/[^,'"\[\]\s]+/gi,Kf=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,be,ti,na,el,zt={},eo={},Dc,wc=function(e){return(eo=Xn(e,zt))&&wt},tl=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},Vr=function(e,t){return!t&&console.warn(e)},Cc=function(e,t){return e&&(zt[e]=t)&&eo&&(eo[e]=t)||zt},qr=function(){return 0},Jf={suppressEvents:!0,isStart:!0,kill:!1},Rs={suppressEvents:!0,kill:!1},Zf={suppressEvents:!0},il={},ji=[],ra={},Sc,kt={},Ao={},Jl=30,js=[],nl="",rl=function(e){var t=e[0],i,n;if(ui(t)||$e(t)||(e=[e]),!(i=(t._gsap||{}).harness)){for(n=js.length;n--&&!js[n].targetTest(t););i=js[n]}for(n=e.length;n--;)e[n]&&(e[n]._gsap||(e[n]._gsap=new Gc(e[n],i)))||e.splice(n,1);return e},un=function(e){return e._gsap||rl(Ht(e))[0]._gsap},Ec=function(e,t,i){return(i=e[t])&&$e(i)?e[t]():Za(i)&&e.getAttribute&&e.getAttribute(t)||i},bt=function(e,t){return(e=e.split(",")).forEach(t)||e},Oe=function(e){return Math.round(e*1e5)/1e5||0},Me=function(e){return Math.round(e*1e7)/1e7||0},Bn=function(e,t){var i=t.charAt(0),n=parseFloat(t.substr(2));return e=parseFloat(e),i==="+"?e+n:i==="-"?e-n:i==="*"?e*n:e/n},Qf=function(e,t){for(var i=t.length,n=0;e.indexOf(t[n])<0&&++n<i;);return n<i},to=function(){var e=ji.length,t=ji.slice(0),i,n;for(ra={},ji.length=0,i=0;i<e;i++)n=t[i],n&&n._lazy&&(n.render(n._lazy[0],n._lazy[1],!0)._lazy=0)},sl=function(e){return!!(e._initted||e._startAt||e.add)},$c=function(e,t,i,n){ji.length&&!Ze&&to(),e.render(t,i,!!(Ze&&t<0&&sl(e))),ji.length&&!Ze&&to()},Pc=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(xc).length<2?t:Ye(e)?e.trim():e},kc=function(e){return e},Mt=function(e,t){for(var i in t)i in e||(e[i]=t[i]);return e},ep=function(e){return function(t,i){for(var n in i)n in t||n==="duration"&&e||n==="ease"||(t[n]=i[n])}},Xn=function(e,t){for(var i in t)e[i]=t[i];return e},Zl=function s(e,t){for(var i in t)i!=="__proto__"&&i!=="constructor"&&i!=="prototype"&&(e[i]=ui(t[i])?s(e[i]||(e[i]={}),t[i]):t[i]);return e},io=function(e,t){var i={},n;for(n in e)n in t||(i[n]=e[n]);return i},$r=function(e){var t=e.parent||be,i=e.keyframes?ep(ot(e.keyframes)):Mt;if(yt(e.inherit))for(;t;)i(e,t.vars.defaults),t=t.parent||t._dp;return e},tp=function(e,t){for(var i=e.length,n=i===t.length;n&&i--&&e[i]===t[i];);return i<0},Tc=function(e,t,i,n,r){var o=e[n],a;if(r)for(a=t[r];o&&o[r]>a;)o=o._prev;return o?(t._next=o._next,o._next=t):(t._next=e[i],e[i]=t),t._next?t._next._prev=t:e[n]=t,t._prev=o,t.parent=t._dp=e,t},bo=function(e,t,i,n){i===void 0&&(i="_first"),n===void 0&&(n="_last");var r=t._prev,o=t._next;r?r._next=o:e[i]===t&&(e[i]=o),o?o._prev=r:e[n]===t&&(e[n]=r),t._next=t._prev=t.parent=null},Hi=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},cn=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var i=e;i;)i._dirty=1,i=i.parent;return e},ip=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},sa=function(e,t,i,n){return e._startAt&&(Ze?e._startAt.revert(Rs):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,n))},np=function s(e){return!e||e._ts&&s(e.parent)},Ql=function(e){return e._repeat?Gn(e._tTime,e=e.duration()+e._rDelay)*e:0},Gn=function(e,t){var i=Math.floor(e=Me(e/t));return e&&i===e?i-1:i},no=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},xo=function(e){return e._end=Me(e._start+(e._tDur/Math.abs(e._ts||e._rts||pe)||0))},Do=function(e,t){var i=e._dp;return i&&i.smoothChildTiming&&e._ts&&(e._start=Me(i._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),xo(e),i._dirty||cn(i,e)),e},Oc=function(e,t){var i;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(i=no(e.rawTime(),t),(!t._dur||as(0,t.totalDuration(),i)-t._tTime>pe)&&t.render(i,!0)),cn(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(i=e;i._dp;)i.rawTime()>=0&&i.totalTime(i._tTime),i=i._dp;e._zTime=-pe}},ni=function(e,t,i,n){return t.parent&&Hi(t),t._start=Me((xi(i)?i:i||e!==be?jt(e,i,t):e._time)+t._delay),t._end=Me(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),Tc(e,t,"_first","_last",e._sort?"_start":0),oa(t)||(e._recent=t),n||Oc(e,t),e._ts<0&&Do(e,e._tTime),e},Fc=function(e,t){return(zt.ScrollTrigger||tl("scrollTrigger",t))&&zt.ScrollTrigger.create(t,e)},Ac=function(e,t,i,n,r){if(al(e,t,r),!e._initted)return 1;if(!i&&e._pt&&!Ze&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&Sc!==Ot.frame)return ji.push(e),e._lazy=[r,n],1},rp=function s(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||s(t))},oa=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},sp=function(e,t,i,n){var r=e.ratio,o=t<0||!t&&(!e._start&&rp(e)&&!(!e._initted&&oa(e))||(e._ts<0||e._dp._ts<0)&&!oa(e))?0:1,a=e._rDelay,l=0,u,c,d;if(a&&e._repeat&&(l=as(0,e._tDur,t),c=Gn(l,a),e._yoyo&&c&1&&(o=1-o),c!==Gn(e._tTime,a)&&(r=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==r||Ze||n||e._zTime===pe||!t&&e._zTime){if(!e._initted&&Ac(e,t,n,i,l))return;for(d=e._zTime,e._zTime=t||(i?pe:0),i||(i=t&&!d),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=l,u=e._pt;u;)u.r(o,u.d),u=u._next;t<0&&sa(e,t,i,!0),e._onUpdate&&!i&&At(e,"onUpdate"),l&&e._repeat&&!i&&e.parent&&At(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===o&&(o&&Hi(e,1),!i&&!Ze&&(At(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},op=function(e,t,i){var n;if(i>t)for(n=e._first;n&&n._start<=i;){if(n.data==="isPause"&&n._start>t)return n;n=n._next}else for(n=e._last;n&&n._start>=i;){if(n.data==="isPause"&&n._start<t)return n;n=n._prev}},Kn=function(e,t,i,n){var r=e._repeat,o=Me(t)||0,a=e._tTime/e._tDur;return a&&!n&&(e._time*=o/e._dur),e._dur=o,e._tDur=r?r<0?1e10:Me(o*(r+1)+e._rDelay*r):o,a>0&&!n&&Do(e,e._tTime=e._tDur*a),e.parent&&xo(e),i||cn(e.parent,e),e},eu=function(e){return e instanceof ft?cn(e):Kn(e,e._dur)},ap={_start:0,endTime:qr,totalDuration:qr},jt=function s(e,t,i){var n=e.labels,r=e._recent||ap,o=e.duration()>=Bt?r.endTime(!1):e._dur,a,l,u;return Ye(t)&&(isNaN(t)||t in n)?(l=t.charAt(0),u=t.substr(-1)==="%",a=t.indexOf("="),l==="<"||l===">"?(a>=0&&(t=t.replace(/=/,"")),(l==="<"?r._start:r.endTime(r._repeat>=0))+(parseFloat(t.substr(1))||0)*(u?(a<0?r:i).totalDuration()/100:1)):a<0?(t in n||(n[t]=o),n[t]):(l=parseFloat(t.charAt(a-1)+t.substr(a+1)),u&&i&&(l=l/100*(ot(i)?i[0]:i).totalDuration()),a>1?s(e,t.substr(0,a-1),i)+l:o+l)):t==null?o:+t},Pr=function(e,t,i){var n=xi(t[1]),r=(n?2:1)+(e<2?0:1),o=t[r],a,l;if(n&&(o.duration=t[1]),o.parent=i,e){for(a=o,l=i;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=yt(l.vars.inherit)&&l.parent;o.immediateRender=yt(a.immediateRender),e<2?o.runBackwards=1:o.startAt=t[r-1]}return new ze(t[0],o,t[r+1])},qi=function(e,t){return e||e===0?t(e):t},as=function(e,t,i){return i<e?e:i>t?t:i},rt=function(e,t){return!Ye(e)||!(t=Kf.exec(e))?"":t[1]},lp=function(e,t,i){return qi(i,function(n){return as(e,t,n)})},aa=[].slice,Lc=function(e,t){return e&&ui(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&ui(e[0]))&&!e.nodeType&&e!==ti},up=function(e,t,i){return i===void 0&&(i=[]),e.forEach(function(n){var r;return Ye(n)&&!t||Lc(n,1)?(r=i).push.apply(r,Ht(n)):i.push(n)})||i},Ht=function(e,t,i){return ve&&!t&&ve.selector?ve.selector(e):Ye(e)&&!i&&(na||!Jn())?aa.call((t||el).querySelectorAll(e),0):ot(e)?up(e,i):Lc(e)?aa.call(e,0):e?[e]:[]},la=function(e){return e=Ht(e)[0]||Vr("Invalid scope")||{},function(t){var i=e.current||e.nativeElement||e;return Ht(t,i.querySelectorAll?i:i===e?Vr("Invalid scope")||el.createElement("div"):e)}},zc=function(e){return e.sort(function(){return .5-Math.random()})},Mc=function(e){if($e(e))return e;var t=ui(e)?e:{each:e},i=dn(t.ease),n=t.from||0,r=parseFloat(t.base)||0,o={},a=n>0&&n<1,l=isNaN(n)||a,u=t.axis,c=n,d=n;return Ye(n)?c=d={center:.5,edges:.5,end:1}[n]||0:!a&&l&&(c=n[0],d=n[1]),function(h,f,g){var p=(g||t).length,m=o[p],y,v,D,x,C,E,w,k,$;if(!m){if($=t.grid==="auto"?0:(t.grid||[1,Bt])[1],!$){for(w=-Bt;w<(w=g[$++].getBoundingClientRect().left)&&$<p;);$<p&&$--}for(m=o[p]=[],y=l?Math.min($,p)*c-.5:n%$,v=$===Bt?0:l?p*d/$-.5:n/$|0,w=0,k=Bt,E=0;E<p;E++)D=E%$-y,x=v-(E/$|0),m[E]=C=u?Math.abs(u==="y"?x:D):_c(D*D+x*x),C>w&&(w=C),C<k&&(k=C);n==="random"&&zc(m),m.max=w-k,m.min=k,m.v=p=(parseFloat(t.amount)||parseFloat(t.each)*($>p?p-1:u?u==="y"?p/$:$:Math.max($,p/$))||0)*(n==="edges"?-1:1),m.b=p<0?r-p:r,m.u=rt(t.amount||t.each)||0,i=i&&p<0?Wc(i):i}return p=(m[h]-m.min)/m.max||0,Me(m.b+(i?i(p):p)*m.v)+m.u}},ua=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(i){var n=Me(Math.round(parseFloat(i)/e)*e*t);return(n-n%1)/t+(xi(i)?0:rt(i))}},Rc=function(e,t){var i=ot(e),n,r;return!i&&ui(e)&&(n=i=e.radius||Bt,e.values?(e=Ht(e.values),(r=!xi(e[0]))&&(n*=n)):e=ua(e.increment)),qi(t,i?$e(e)?function(o){return r=e(o),Math.abs(r-o)<=n?r:o}:function(o){for(var a=parseFloat(r?o.x:o),l=parseFloat(r?o.y:0),u=Bt,c=0,d=e.length,h,f;d--;)r?(h=e[d].x-a,f=e[d].y-l,h=h*h+f*f):h=Math.abs(e[d]-a),h<u&&(u=h,c=d);return c=!n||u<=n?e[c]:o,r||c===o||xi(o)?c:c+rt(o)}:ua(e))},jc=function(e,t,i,n){return qi(ot(e)?!t:i===!0?!!(i=0):!n,function(){return ot(e)?e[~~(Math.random()*e.length)]:(i=i||1e-5)&&(n=i<1?Math.pow(10,(i+"").length-2):1)&&Math.floor(Math.round((e-i/2+Math.random()*(t-e+i*.99))/i)*i*n)/n})},cp=function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return function(n){return t.reduce(function(r,o){return o(r)},n)}},dp=function(e,t){return function(i){return e(parseFloat(i))+(t||rt(i))}},hp=function(e,t,i){return Nc(e,t,0,1,i)},Ic=function(e,t,i){return qi(i,function(n){return e[~~t(n)]})},fp=function s(e,t,i){var n=t-e;return ot(e)?Ic(e,s(0,e.length),t):qi(i,function(r){return(n+(r-e)%n)%n+e})},pp=function s(e,t,i){var n=t-e,r=n*2;return ot(e)?Ic(e,s(0,e.length-1),t):qi(i,function(o){return o=(r+(o-e)%r)%r||0,e+(o>n?r-o:o)})},Wr=function(e){for(var t=0,i="",n,r,o,a;~(n=e.indexOf("random(",t));)o=e.indexOf(")",n),a=e.charAt(n+7)==="[",r=e.substr(n+7,o-n-7).match(a?xc:ia),i+=e.substr(t,n-t)+jc(a?r:+r[0],a?0:+r[1],+r[2]||1e-5),t=o+1;return i+e.substr(t,e.length-t)},Nc=function(e,t,i,n,r){var o=t-e,a=n-i;return qi(r,function(l){return i+((l-e)/o*a||0)})},gp=function s(e,t,i,n){var r=isNaN(e+t)?0:function(f){return(1-f)*e+f*t};if(!r){var o=Ye(e),a={},l,u,c,d,h;if(i===!0&&(n=1)&&(i=null),o)e={p:e},t={p:t};else if(ot(e)&&!ot(t)){for(c=[],d=e.length,h=d-2,u=1;u<d;u++)c.push(s(e[u-1],e[u]));d--,r=function(g){g*=d;var p=Math.min(h,~~g);return c[p](g-p)},i=t}else n||(e=Xn(ot(e)?[]:{},e));if(!c){for(l in t)ol.call(a,e,l,"get",t[l]);r=function(g){return cl(g,a)||(o?e.p:e)}}}return qi(i,r)},tu=function(e,t,i){var n=e.labels,r=Bt,o,a,l;for(o in n)a=n[o]-t,a<0==!!i&&a&&r>(a=Math.abs(a))&&(l=o,r=a);return l},At=function(e,t,i){var n=e.vars,r=n[t],o=ve,a=e._ctx,l,u,c;if(r)return l=n[t+"Params"],u=n.callbackScope||e,i&&ji.length&&to(),a&&(ve=a),c=l?r.apply(u,l):r.call(u),ve=o,c},yr=function(e){return Hi(e),e.scrollTrigger&&e.scrollTrigger.kill(!!Ze),e.progress()<1&&At(e,"onInterrupt"),e},In,Bc=[],Hc=function(e){if(e)if(e=!e.name&&e.default||e,Qa()||e.headless){var t=e.name,i=$e(e),n=t&&!i&&e.init?function(){this._props=[]}:e,r={init:qr,render:cl,add:ol,kill:Op,modifier:Tp,rawVars:0},o={targetTest:0,get:0,getSetter:ul,aliases:{},register:0};if(Jn(),e!==n){if(kt[t])return;Mt(n,Mt(io(e,r),o)),Xn(n.prototype,Xn(r,io(e,o))),kt[n.prop=t]=n,e.targetTest&&(js.push(n),il[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}Cc(t,n),e.register&&e.register(wt,n,xt)}else Bc.push(e)},fe=255,br={aqua:[0,fe,fe],lime:[0,fe,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,fe],navy:[0,0,128],white:[fe,fe,fe],olive:[128,128,0],yellow:[fe,fe,0],orange:[fe,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[fe,0,0],pink:[fe,192,203],cyan:[0,fe,fe],transparent:[fe,fe,fe,0]},Lo=function(e,t,i){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(i-t)*e*6:e<.5?i:e*3<2?t+(i-t)*(2/3-e)*6:t)*fe+.5|0},Uc=function(e,t,i){var n=e?xi(e)?[e>>16,e>>8&fe,e&fe]:0:br.black,r,o,a,l,u,c,d,h,f,g;if(!n){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),br[e])n=br[e];else if(e.charAt(0)==="#"){if(e.length<6&&(r=e.charAt(1),o=e.charAt(2),a=e.charAt(3),e="#"+r+r+o+o+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return n=parseInt(e.substr(1,6),16),[n>>16,n>>8&fe,n&fe,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),n=[e>>16,e>>8&fe,e&fe]}else if(e.substr(0,3)==="hsl"){if(n=g=e.match(ia),!t)l=+n[0]%360/360,u=+n[1]/100,c=+n[2]/100,o=c<=.5?c*(u+1):c+u-c*u,r=c*2-o,n.length>3&&(n[3]*=1),n[0]=Lo(l+1/3,r,o),n[1]=Lo(l,r,o),n[2]=Lo(l-1/3,r,o);else if(~e.indexOf("="))return n=e.match(yc),i&&n.length<4&&(n[3]=1),n}else n=e.match(ia)||br.transparent;n=n.map(Number)}return t&&!g&&(r=n[0]/fe,o=n[1]/fe,a=n[2]/fe,d=Math.max(r,o,a),h=Math.min(r,o,a),c=(d+h)/2,d===h?l=u=0:(f=d-h,u=c>.5?f/(2-d-h):f/(d+h),l=d===r?(o-a)/f+(o<a?6:0):d===o?(a-r)/f+2:(r-o)/f+4,l*=60),n[0]=~~(l+.5),n[1]=~~(u*100+.5),n[2]=~~(c*100+.5)),i&&n.length<4&&(n[3]=1),n},Vc=function(e){var t=[],i=[],n=-1;return e.split(Ii).forEach(function(r){var o=r.match(jn)||[];t.push.apply(t,o),i.push(n+=o.length+1)}),t.c=i,t},iu=function(e,t,i){var n="",r=(e+n).match(Ii),o=t?"hsla(":"rgba(",a=0,l,u,c,d;if(!r)return e;if(r=r.map(function(h){return(h=Uc(h,t,1))&&o+(t?h[0]+","+h[1]+"%,"+h[2]+"%,"+h[3]:h.join(","))+")"}),i&&(c=Vc(e),l=i.c,l.join(n)!==c.c.join(n)))for(u=e.replace(Ii,"1").split(jn),d=u.length-1;a<d;a++)n+=u[a]+(~l.indexOf(a)?r.shift()||o+"0,0,0,0)":(c.length?c:r.length?r:i).shift());if(!u)for(u=e.split(Ii),d=u.length-1;a<d;a++)n+=u[a]+r[a];return n+u[d]},Ii=(function(){var s="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in br)s+="|"+e+"\\b";return new RegExp(s+")","gi")})(),mp=/hsl[a]?\(/,qc=function(e){var t=e.join(" "),i;if(Ii.lastIndex=0,Ii.test(t))return i=mp.test(t),e[1]=iu(e[1],i),e[0]=iu(e[0],i,Vc(e[1])),!0},Yr,Ot=(function(){var s=Date.now,e=500,t=33,i=s(),n=i,r=1e3/240,o=r,a=[],l,u,c,d,h,f,g=function p(m){var y=s()-n,v=m===!0,D,x,C,E;if((y>e||y<0)&&(i+=y-t),n+=y,C=n-i,D=C-o,(D>0||v)&&(E=++d.frame,h=C-d.time*1e3,d.time=C=C/1e3,o+=D+(D>=r?4:r-D),x=1),v||(l=u(p)),x)for(f=0;f<a.length;f++)a[f](C,h,E,m)};return d={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(m){return h/(1e3/(m||60))},wake:function(){Dc&&(!na&&Qa()&&(ti=na=window,el=ti.document||{},zt.gsap=wt,(ti.gsapVersions||(ti.gsapVersions=[])).push(wt.version),wc(eo||ti.GreenSockGlobals||!ti.gsap&&ti||{}),Bc.forEach(Hc)),c=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&d.sleep(),u=c||function(m){return setTimeout(m,o-d.time*1e3+1|0)},Yr=1,g(2))},sleep:function(){(c?cancelAnimationFrame:clearTimeout)(l),Yr=0,u=qr},lagSmoothing:function(m,y){e=m||1/0,t=Math.min(y||33,e)},fps:function(m){r=1e3/(m||240),o=d.time*1e3+r},add:function(m,y,v){var D=y?function(x,C,E,w){m(x,C,E,w),d.remove(D)}:m;return d.remove(m),a[v?"unshift":"push"](D),Jn(),D},remove:function(m,y){~(y=a.indexOf(m))&&a.splice(y,1)&&f>=y&&f--},_listeners:a},d})(),Jn=function(){return!Yr&&Ot.wake()},se={},_p=/^[\d.\-M][\d.\-,\s]/,vp=/["']/g,yp=function(e){for(var t={},i=e.substr(1,e.length-3).split(":"),n=i[0],r=1,o=i.length,a,l,u;r<o;r++)l=i[r],a=r!==o-1?l.lastIndexOf(","):l.length,u=l.substr(0,a),t[n]=isNaN(u)?u.replace(vp,"").trim():+u,n=l.substr(a+1).trim();return t},bp=function(e){var t=e.indexOf("(")+1,i=e.indexOf(")"),n=e.indexOf("(",t);return e.substring(t,~n&&n<i?e.indexOf(")",i+1):i)},xp=function(e){var t=(e+"").split("("),i=se[t[0]];return i&&t.length>1&&i.config?i.config.apply(null,~e.indexOf("{")?[yp(t[1])]:bp(e).split(",").map(Pc)):se._CE&&_p.test(e)?se._CE("",e):i},Wc=function(e){return function(t){return 1-e(1-t)}},Yc=function s(e,t){for(var i=e._first,n;i;)i instanceof ft?s(i,t):i.vars.yoyoEase&&(!i._yoyo||!i._repeat)&&i._yoyo!==t&&(i.timeline?s(i.timeline,t):(n=i._ease,i._ease=i._yEase,i._yEase=n,i._yoyo=t)),i=i._next},dn=function(e,t){return e&&($e(e)?e:se[e]||xp(e))||t},wn=function(e,t,i,n){i===void 0&&(i=function(l){return 1-t(1-l)}),n===void 0&&(n=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var r={easeIn:t,easeOut:i,easeInOut:n},o;return bt(e,function(a){se[a]=zt[a]=r,se[o=a.toLowerCase()]=i;for(var l in r)se[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=se[a+"."+l]=r[l]}),r},Xc=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},zo=function s(e,t,i){var n=t>=1?t:1,r=(i||(e?.3:.45))/(t<1?t:1),o=r/ta*(Math.asin(1/n)||0),a=function(c){return c===1?1:n*Math.pow(2,-10*c)*Gf((c-o)*r)+1},l=e==="out"?a:e==="in"?function(u){return 1-a(1-u)}:Xc(a);return r=ta/r,l.config=function(u,c){return s(e,u,c)},l},Mo=function s(e,t){t===void 0&&(t=1.70158);var i=function(o){return o?--o*o*((t+1)*o+t)+1:0},n=e==="out"?i:e==="in"?function(r){return 1-i(1-r)}:Xc(i);return n.config=function(r){return s(e,r)},n};bt("Linear,Quad,Cubic,Quart,Quint,Strong",function(s,e){var t=e<5?e+1:e;wn(s+",Power"+(t-1),e?function(i){return Math.pow(i,t)}:function(i){return i},function(i){return 1-Math.pow(1-i,t)},function(i){return i<.5?Math.pow(i*2,t)/2:1-Math.pow((1-i)*2,t)/2})});se.Linear.easeNone=se.none=se.Linear.easeIn;wn("Elastic",zo("in"),zo("out"),zo());(function(s,e){var t=1/e,i=2*t,n=2.5*t,r=function(a){return a<t?s*a*a:a<i?s*Math.pow(a-1.5/e,2)+.75:a<n?s*(a-=2.25/e)*a+.9375:s*Math.pow(a-2.625/e,2)+.984375};wn("Bounce",function(o){return 1-r(1-o)},r)})(7.5625,2.75);wn("Expo",function(s){return Math.pow(2,10*(s-1))*s+s*s*s*s*s*s*(1-s)});wn("Circ",function(s){return-(_c(1-s*s)-1)});wn("Sine",function(s){return s===1?1:-Xf(s*Wf)+1});wn("Back",Mo("in"),Mo("out"),Mo());se.SteppedEase=se.steps=zt.SteppedEase={config:function(e,t){e===void 0&&(e=1);var i=1/e,n=e+(t?0:1),r=t?1:0,o=1-pe;return function(a){return((n*as(0,o,a)|0)+r)*i}}};Yn.ease=se["quad.out"];bt("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(s){return nl+=s+","+s+"Params,"});var Gc=function(e,t){this.id=Yf++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:Ec,this.set=t?t.getSetter:ul},Xr=(function(){function s(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Kn(this,+t.duration,1,1),this.data=t.data,ve&&(this._ctx=ve,ve.data.push(this)),Yr||Ot.wake()}var e=s.prototype;return e.delay=function(i){return i||i===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+i-this._delay),this._delay=i,this):this._delay},e.duration=function(i){return arguments.length?this.totalDuration(this._repeat>0?i+(i+this._rDelay)*this._repeat:i):this.totalDuration()&&this._dur},e.totalDuration=function(i){return arguments.length?(this._dirty=0,Kn(this,this._repeat<0?i:(i-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(i,n){if(Jn(),!arguments.length)return this._tTime;var r=this._dp;if(r&&r.smoothChildTiming&&this._ts){for(Do(this,i),!r._dp||r.parent||Oc(r,this);r&&r.parent;)r.parent._time!==r._start+(r._ts>=0?r._tTime/r._ts:(r.totalDuration()-r._tTime)/-r._ts)&&r.totalTime(r._tTime,!0),r=r.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&i<this._tDur||this._ts<0&&i>0||!this._tDur&&!i)&&ni(this._dp,this,this._start-this._delay)}return(this._tTime!==i||!this._dur&&!n||this._initted&&Math.abs(this._zTime)===pe||!i&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=i),$c(this,i,n)),this},e.time=function(i,n){return arguments.length?this.totalTime(Math.min(this.totalDuration(),i+Ql(this))%(this._dur+this._rDelay)||(i?this._dur:0),n):this._time},e.totalProgress=function(i,n){return arguments.length?this.totalTime(this.totalDuration()*i,n):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(i,n){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-i:i)+Ql(this),n):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(i,n){var r=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(i-1)*r,n):this._repeat?Gn(this._tTime,r)+1:1},e.timeScale=function(i,n){if(!arguments.length)return this._rts===-pe?0:this._rts;if(this._rts===i)return this;var r=this.parent&&this._ts?no(this.parent._time,this):this._tTime;return this._rts=+i||0,this._ts=this._ps||i===-pe?0:this._rts,this.totalTime(as(-Math.abs(this._delay),this.totalDuration(),r),n!==!1),xo(this),ip(this)},e.paused=function(i){return arguments.length?(this._ps!==i&&(this._ps=i,i?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Jn(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==pe&&(this._tTime-=pe)))),this):this._ps},e.startTime=function(i){if(arguments.length){this._start=i;var n=this.parent||this._dp;return n&&(n._sort||!this.parent)&&ni(n,this,i-this._delay),this}return this._start},e.endTime=function(i){return this._start+(yt(i)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(i){var n=this.parent||this._dp;return n?i&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?no(n.rawTime(i),this):this._tTime:this._tTime},e.revert=function(i){i===void 0&&(i=Zf);var n=Ze;return Ze=i,sl(this)&&(this.timeline&&this.timeline.revert(i),this.totalTime(-.01,i.suppressEvents)),this.data!=="nested"&&i.kill!==!1&&this.kill(),Ze=n,this},e.globalTime=function(i){for(var n=this,r=arguments.length?i:n.rawTime();n;)r=n._start+r/(Math.abs(n._ts)||1),n=n._dp;return!this.parent&&this._sat?this._sat.globalTime(i):r},e.repeat=function(i){return arguments.length?(this._repeat=i===1/0?-2:i,eu(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(i){if(arguments.length){var n=this._time;return this._rDelay=i,eu(this),n?this.time(n):this}return this._rDelay},e.yoyo=function(i){return arguments.length?(this._yoyo=i,this):this._yoyo},e.seek=function(i,n){return this.totalTime(jt(this,i),yt(n))},e.restart=function(i,n){return this.play().totalTime(i?-this._delay:0,yt(n)),this._dur||(this._zTime=-pe),this},e.play=function(i,n){return i!=null&&this.seek(i,n),this.reversed(!1).paused(!1)},e.reverse=function(i,n){return i!=null&&this.seek(i||this.totalDuration(),n),this.reversed(!0).paused(!1)},e.pause=function(i,n){return i!=null&&this.seek(i,n),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(i){return arguments.length?(!!i!==this.reversed()&&this.timeScale(-this._rts||(i?-pe:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-pe,this},e.isActive=function(){var i=this.parent||this._dp,n=this._start,r;return!!(!i||this._ts&&this._initted&&i.isActive()&&(r=i.rawTime(!0))>=n&&r<this.endTime(!0)-pe)},e.eventCallback=function(i,n,r){var o=this.vars;return arguments.length>1?(n?(o[i]=n,r&&(o[i+"Params"]=r),i==="onUpdate"&&(this._onUpdate=n)):delete o[i],this):o[i]},e.then=function(i){var n=this;return new Promise(function(r){var o=$e(i)?i:kc,a=function(){var u=n.then;n.then=null,$e(o)&&(o=o(n))&&(o.then||o===n)&&(n.then=u),r(o),n.then=u};n._initted&&n.totalProgress()===1&&n._ts>=0||!n._tTime&&n._ts<0?a():n._prom=a})},e.kill=function(){yr(this)},s})();Mt(Xr.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-pe,_prom:0,_ps:!1,_rts:1});var ft=(function(s){mc(e,s);function e(i,n){var r;return i===void 0&&(i={}),r=s.call(this,i)||this,r.labels={},r.smoothChildTiming=!!i.smoothChildTiming,r.autoRemoveChildren=!!i.autoRemoveChildren,r._sort=yt(i.sortChildren),be&&ni(i.parent||be,gi(r),n),i.reversed&&r.reverse(),i.paused&&r.paused(!0),i.scrollTrigger&&Fc(gi(r),i.scrollTrigger),r}var t=e.prototype;return t.to=function(n,r,o){return Pr(0,arguments,this),this},t.from=function(n,r,o){return Pr(1,arguments,this),this},t.fromTo=function(n,r,o,a){return Pr(2,arguments,this),this},t.set=function(n,r,o){return r.duration=0,r.parent=this,$r(r).repeatDelay||(r.repeat=0),r.immediateRender=!!r.immediateRender,new ze(n,r,jt(this,o),1),this},t.call=function(n,r,o){return ni(this,ze.delayedCall(0,n,r),o)},t.staggerTo=function(n,r,o,a,l,u,c){return o.duration=r,o.stagger=o.stagger||a,o.onComplete=u,o.onCompleteParams=c,o.parent=this,new ze(n,o,jt(this,l)),this},t.staggerFrom=function(n,r,o,a,l,u,c){return o.runBackwards=1,$r(o).immediateRender=yt(o.immediateRender),this.staggerTo(n,r,o,a,l,u,c)},t.staggerFromTo=function(n,r,o,a,l,u,c,d){return a.startAt=o,$r(a).immediateRender=yt(a.immediateRender),this.staggerTo(n,r,a,l,u,c,d)},t.render=function(n,r,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,u=this._dur,c=n<=0?0:Me(n),d=this._zTime<0!=n<0&&(this._initted||!u),h,f,g,p,m,y,v,D,x,C,E,w;if(this!==be&&c>l&&n>=0&&(c=l),c!==this._tTime||o||d){if(a!==this._time&&u&&(c+=this._time-a,n+=this._time-a),h=c,x=this._start,D=this._ts,y=!D,d&&(u||(a=this._zTime),(n||!r)&&(this._zTime=n)),this._repeat){if(E=this._yoyo,m=u+this._rDelay,this._repeat<-1&&n<0)return this.totalTime(m*100+n,r,o);if(h=Me(c%m),c===l?(p=this._repeat,h=u):(C=Me(c/m),p=~~C,p&&p===C&&(h=u,p--),h>u&&(h=u)),C=Gn(this._tTime,m),!a&&this._tTime&&C!==p&&this._tTime-C*m-this._dur<=0&&(C=p),E&&p&1&&(h=u-h,w=1),p!==C&&!this._lock){var k=E&&C&1,$=k===(E&&p&1);if(p<C&&(k=!k),a=k?0:c%u?u:c,this._lock=1,this.render(a||(w?0:Me(p*m)),r,!u)._lock=0,this._tTime=c,!r&&this.parent&&At(this,"onRepeat"),this.vars.repeatRefresh&&!w&&(this.invalidate()._lock=1),a&&a!==this._time||y!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(u=this._dur,l=this._tDur,$&&(this._lock=2,a=k?u:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!w&&this.invalidate()),this._lock=0,!this._ts&&!y)return this;Yc(this,w)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(v=op(this,Me(a),Me(h)),v&&(c-=h-(h=v._start))),this._tTime=c,this._time=h,this._act=!D,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=n,a=0),!a&&c&&!r&&!C&&(At(this,"onStart"),this._tTime!==c))return this;if(h>=a&&n>=0)for(f=this._first;f;){if(g=f._next,(f._act||h>=f._start)&&f._ts&&v!==f){if(f.parent!==this)return this.render(n,r,o);if(f.render(f._ts>0?(h-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(h-f._start)*f._ts,r,o),h!==this._time||!this._ts&&!y){v=0,g&&(c+=this._zTime=-pe);break}}f=g}else{f=this._last;for(var P=n<0?n:h;f;){if(g=f._prev,(f._act||P<=f._end)&&f._ts&&v!==f){if(f.parent!==this)return this.render(n,r,o);if(f.render(f._ts>0?(P-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(P-f._start)*f._ts,r,o||Ze&&sl(f)),h!==this._time||!this._ts&&!y){v=0,g&&(c+=this._zTime=P?-pe:pe);break}}f=g}}if(v&&!r&&(this.pause(),v.render(h>=a?0:-pe)._zTime=h>=a?1:-1,this._ts))return this._start=x,xo(this),this.render(n,r,o);this._onUpdate&&!r&&At(this,"onUpdate",!0),(c===l&&this._tTime>=this.totalDuration()||!c&&a)&&(x===this._start||Math.abs(D)!==Math.abs(this._ts))&&(this._lock||((n||!u)&&(c===l&&this._ts>0||!c&&this._ts<0)&&Hi(this,1),!r&&!(n<0&&!a)&&(c||a||!l)&&(At(this,c===l&&n>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(c<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(n,r){var o=this;if(xi(r)||(r=jt(this,r,n)),!(n instanceof Xr)){if(ot(n))return n.forEach(function(a){return o.add(a,r)}),this;if(Ye(n))return this.addLabel(n,r);if($e(n))n=ze.delayedCall(0,n);else return this}return this!==n?ni(this,n,r):this},t.getChildren=function(n,r,o,a){n===void 0&&(n=!0),r===void 0&&(r=!0),o===void 0&&(o=!0),a===void 0&&(a=-Bt);for(var l=[],u=this._first;u;)u._start>=a&&(u instanceof ze?r&&l.push(u):(o&&l.push(u),n&&l.push.apply(l,u.getChildren(!0,r,o)))),u=u._next;return l},t.getById=function(n){for(var r=this.getChildren(1,1,1),o=r.length;o--;)if(r[o].vars.id===n)return r[o]},t.remove=function(n){return Ye(n)?this.removeLabel(n):$e(n)?this.killTweensOf(n):(n.parent===this&&bo(this,n),n===this._recent&&(this._recent=this._last),cn(this))},t.totalTime=function(n,r){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Me(Ot.time-(this._ts>0?n/this._ts:(this.totalDuration()-n)/-this._ts))),s.prototype.totalTime.call(this,n,r),this._forcing=0,this):this._tTime},t.addLabel=function(n,r){return this.labels[n]=jt(this,r),this},t.removeLabel=function(n){return delete this.labels[n],this},t.addPause=function(n,r,o){var a=ze.delayedCall(0,r||qr,o);return a.data="isPause",this._hasPause=1,ni(this,a,jt(this,n))},t.removePause=function(n){var r=this._first;for(n=jt(this,n);r;)r._start===n&&r.data==="isPause"&&Hi(r),r=r._next},t.killTweensOf=function(n,r,o){for(var a=this.getTweensOf(n,o),l=a.length;l--;)Ai!==a[l]&&a[l].kill(n,r);return this},t.getTweensOf=function(n,r){for(var o=[],a=Ht(n),l=this._first,u=xi(r),c;l;)l instanceof ze?Qf(l._targets,a)&&(u?(!Ai||l._initted&&l._ts)&&l.globalTime(0)<=r&&l.globalTime(l.totalDuration())>r:!r||l.isActive())&&o.push(l):(c=l.getTweensOf(a,r)).length&&o.push.apply(o,c),l=l._next;return o},t.tweenTo=function(n,r){r=r||{};var o=this,a=jt(o,n),l=r,u=l.startAt,c=l.onStart,d=l.onStartParams,h=l.immediateRender,f,g=ze.to(o,Mt({ease:r.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:r.duration||Math.abs((a-(u&&"time"in u?u.time:o._time))/o.timeScale())||pe,onStart:function(){if(o.pause(),!f){var m=r.duration||Math.abs((a-(u&&"time"in u?u.time:o._time))/o.timeScale());g._dur!==m&&Kn(g,m,0,1).render(g._time,!0,!0),f=1}c&&c.apply(g,d||[])}},r));return h?g.render(0):g},t.tweenFromTo=function(n,r,o){return this.tweenTo(r,Mt({startAt:{time:jt(this,n)}},o))},t.recent=function(){return this._recent},t.nextLabel=function(n){return n===void 0&&(n=this._time),tu(this,jt(this,n))},t.previousLabel=function(n){return n===void 0&&(n=this._time),tu(this,jt(this,n),1)},t.currentLabel=function(n){return arguments.length?this.seek(n,!0):this.previousLabel(this._time+pe)},t.shiftChildren=function(n,r,o){o===void 0&&(o=0);for(var a=this._first,l=this.labels,u;a;)a._start>=o&&(a._start+=n,a._end+=n),a=a._next;if(r)for(u in l)l[u]>=o&&(l[u]+=n);return cn(this)},t.invalidate=function(n){var r=this._first;for(this._lock=0;r;)r.invalidate(n),r=r._next;return s.prototype.invalidate.call(this,n)},t.clear=function(n){n===void 0&&(n=!0);for(var r=this._first,o;r;)o=r._next,this.remove(r),r=o;return this._dp&&(this._time=this._tTime=this._pTime=0),n&&(this.labels={}),cn(this)},t.totalDuration=function(n){var r=0,o=this,a=o._last,l=Bt,u,c,d;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-n:n));if(o._dirty){for(d=o.parent;a;)u=a._prev,a._dirty&&a.totalDuration(),c=a._start,c>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,ni(o,a,c-a._delay,1)._lock=0):l=c,c<0&&a._ts&&(r-=c,(!d&&!o._dp||d&&d.smoothChildTiming)&&(o._start+=c/o._ts,o._time-=c,o._tTime-=c),o.shiftChildren(-c,!1,-1/0),l=0),a._end>r&&a._ts&&(r=a._end),a=u;Kn(o,o===be&&o._time>r?o._time:r,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(n){if(be._ts&&($c(be,no(n,be)),Sc=Ot.frame),Ot.frame>=Jl){Jl+=Lt.autoSleep||120;var r=be._first;if((!r||!r._ts)&&Lt.autoSleep&&Ot._listeners.length<2){for(;r&&!r._ts;)r=r._next;r||Ot.sleep()}}},e})(Xr);Mt(ft.prototype,{_lock:0,_hasPause:0,_forcing:0});var Dp=function(e,t,i,n,r,o,a){var l=new xt(this._pt,e,t,0,1,td,null,r),u=0,c=0,d,h,f,g,p,m,y,v;for(l.b=i,l.e=n,i+="",n+="",(y=~n.indexOf("random("))&&(n=Wr(n)),o&&(v=[i,n],o(v,e,t),i=v[0],n=v[1]),h=i.match(Fo)||[];d=Fo.exec(n);)g=d[0],p=n.substring(u,d.index),f?f=(f+1)%5:p.substr(-5)==="rgba("&&(f=1),g!==h[c++]&&(m=parseFloat(h[c-1])||0,l._pt={_next:l._pt,p:p||c===1?p:",",s:m,c:g.charAt(1)==="="?Bn(m,g)-m:parseFloat(g)-m,m:f&&f<4?Math.round:0},u=Fo.lastIndex);return l.c=u<n.length?n.substring(u,n.length):"",l.fp=a,(bc.test(n)||y)&&(l.e=0),this._pt=l,l},ol=function(e,t,i,n,r,o,a,l,u,c){$e(n)&&(n=n(r||0,e,o));var d=e[t],h=i!=="get"?i:$e(d)?u?e[t.indexOf("set")||!$e(e["get"+t.substr(3)])?t:"get"+t.substr(3)](u):e[t]():d,f=$e(d)?u?$p:Qc:ll,g;if(Ye(n)&&(~n.indexOf("random(")&&(n=Wr(n)),n.charAt(1)==="="&&(g=Bn(h,n)+(rt(h)||0),(g||g===0)&&(n=g))),!c||h!==n||ca)return!isNaN(h*n)&&n!==""?(g=new xt(this._pt,e,t,+h||0,n-(h||0),typeof d=="boolean"?kp:ed,0,f),u&&(g.fp=u),a&&g.modifier(a,this,e),this._pt=g):(!d&&!(t in e)&&tl(t,n),Dp.call(this,e,t,h,n,f,l||Lt.stringFilter,u))},wp=function(e,t,i,n,r){if($e(e)&&(e=kr(e,r,t,i,n)),!ui(e)||e.style&&e.nodeType||ot(e)||vc(e))return Ye(e)?kr(e,r,t,i,n):e;var o={},a;for(a in e)o[a]=kr(e[a],r,t,i,n);return o},Kc=function(e,t,i,n,r,o){var a,l,u,c;if(kt[e]&&(a=new kt[e]).init(r,a.rawVars?t[e]:wp(t[e],n,r,o,i),i,n,o)!==!1&&(i._pt=l=new xt(i._pt,r,e,0,1,a.render,a,0,a.priority),i!==In))for(u=i._ptLookup[i._targets.indexOf(r)],c=a._props.length;c--;)u[a._props[c]]=l;return a},Ai,ca,al=function s(e,t,i){var n=e.vars,r=n.ease,o=n.startAt,a=n.immediateRender,l=n.lazy,u=n.onUpdate,c=n.runBackwards,d=n.yoyoEase,h=n.keyframes,f=n.autoRevert,g=e._dur,p=e._startAt,m=e._targets,y=e.parent,v=y&&y.data==="nested"?y.vars.targets:m,D=e._overwrite==="auto"&&!Ja,x=e.timeline,C,E,w,k,$,P,F,T,H,R,A,I,M;if(x&&(!h||!r)&&(r="none"),e._ease=dn(r,Yn.ease),e._yEase=d?Wc(dn(d===!0?r:d,Yn.ease)):0,d&&e._yoyo&&!e._repeat&&(d=e._yEase,e._yEase=e._ease,e._ease=d),e._from=!x&&!!n.runBackwards,!x||h&&!n.stagger){if(T=m[0]?un(m[0]).harness:0,I=T&&n[T.prop],C=io(n,il),p&&(p._zTime<0&&p.progress(1),t<0&&c&&a&&!f?p.render(-1,!0):p.revert(c&&g?Rs:Jf),p._lazy=0),o){if(Hi(e._startAt=ze.set(m,Mt({data:"isStart",overwrite:!1,parent:y,immediateRender:!0,lazy:!p&&yt(l),startAt:null,delay:0,onUpdate:u&&function(){return At(e,"onUpdate")},stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Ze||!a&&!f)&&e._startAt.revert(Rs),a&&g&&t<=0&&i<=0){t&&(e._zTime=t);return}}else if(c&&g&&!p){if(t&&(a=!1),w=Mt({overwrite:!1,data:"isFromStart",lazy:a&&!p&&yt(l),immediateRender:a,stagger:0,parent:y},C),I&&(w[T.prop]=I),Hi(e._startAt=ze.set(m,w)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Ze?e._startAt.revert(Rs):e._startAt.render(-1,!0)),e._zTime=t,!a)s(e._startAt,pe,pe);else if(!t)return}for(e._pt=e._ptCache=0,l=g&&yt(l)||l&&!g,E=0;E<m.length;E++){if($=m[E],F=$._gsap||rl(m)[E]._gsap,e._ptLookup[E]=R={},ra[F.id]&&ji.length&&to(),A=v===m?E:v.indexOf($),T&&(H=new T).init($,I||C,e,A,v)!==!1&&(e._pt=k=new xt(e._pt,$,H.name,0,1,H.render,H,0,H.priority),H._props.forEach(function(N){R[N]=k}),H.priority&&(P=1)),!T||I)for(w in C)kt[w]&&(H=Kc(w,C,e,A,$,v))?H.priority&&(P=1):R[w]=k=ol.call(e,$,w,"get",C[w],A,v,0,n.stringFilter);e._op&&e._op[E]&&e.kill($,e._op[E]),D&&e._pt&&(Ai=e,be.killTweensOf($,R,e.globalTime(t)),M=!e.parent,Ai=0),e._pt&&l&&(ra[F.id]=1)}P&&id(e),e._onInit&&e._onInit(e)}e._onUpdate=u,e._initted=(!e._op||e._pt)&&!M,h&&t<=0&&x.render(Bt,!0,!0)},Cp=function(e,t,i,n,r,o,a,l){var u=(e._pt&&e._ptCache||(e._ptCache={}))[t],c,d,h,f;if(!u)for(u=e._ptCache[t]=[],h=e._ptLookup,f=e._targets.length;f--;){if(c=h[f][t],c&&c.d&&c.d._pt)for(c=c.d._pt;c&&c.p!==t&&c.fp!==t;)c=c._next;if(!c)return ca=1,e.vars[t]="+=0",al(e,a),ca=0,l?Vr(t+" not eligible for reset"):1;u.push(c)}for(f=u.length;f--;)d=u[f],c=d._pt||d,c.s=(n||n===0)&&!r?n:c.s+(n||0)+o*c.c,c.c=i-c.s,d.e&&(d.e=Oe(i)+rt(d.e)),d.b&&(d.b=c.s+rt(d.b))},Sp=function(e,t){var i=e[0]?un(e[0]).harness:0,n=i&&i.aliases,r,o,a,l;if(!n)return t;r=Xn({},t);for(o in n)if(o in r)for(l=n[o].split(","),a=l.length;a--;)r[l[a]]=r[o];return r},Ep=function(e,t,i,n){var r=t.ease||n||"power1.inOut",o,a;if(ot(t))a=i[e]||(i[e]=[]),t.forEach(function(l,u){return a.push({t:u/(t.length-1)*100,v:l,e:r})});else for(o in t)a=i[o]||(i[o]=[]),o==="ease"||a.push({t:parseFloat(e),v:t[o],e:r})},kr=function(e,t,i,n,r){return $e(e)?e.call(t,i,n,r):Ye(e)&&~e.indexOf("random(")?Wr(e):e},Jc=nl+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",Zc={};bt(Jc+",id,stagger,delay,duration,paused,scrollTrigger",function(s){return Zc[s]=1});var ze=(function(s){mc(e,s);function e(i,n,r,o){var a;typeof n=="number"&&(r.duration=n,n=r,r=null),a=s.call(this,o?n:$r(n))||this;var l=a.vars,u=l.duration,c=l.delay,d=l.immediateRender,h=l.stagger,f=l.overwrite,g=l.keyframes,p=l.defaults,m=l.scrollTrigger,y=l.yoyoEase,v=n.parent||be,D=(ot(i)||vc(i)?xi(i[0]):"length"in n)?[i]:Ht(i),x,C,E,w,k,$,P,F;if(a._targets=D.length?rl(D):Vr("GSAP target "+i+" not found. https://gsap.com",!Lt.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=f,g||h||ys(u)||ys(c)){if(n=a.vars,x=a.timeline=new ft({data:"nested",defaults:p||{},targets:v&&v.data==="nested"?v.vars.targets:D}),x.kill(),x.parent=x._dp=gi(a),x._start=0,h||ys(u)||ys(c)){if(w=D.length,P=h&&Mc(h),ui(h))for(k in h)~Jc.indexOf(k)&&(F||(F={}),F[k]=h[k]);for(C=0;C<w;C++)E=io(n,Zc),E.stagger=0,y&&(E.yoyoEase=y),F&&Xn(E,F),$=D[C],E.duration=+kr(u,gi(a),C,$,D),E.delay=(+kr(c,gi(a),C,$,D)||0)-a._delay,!h&&w===1&&E.delay&&(a._delay=c=E.delay,a._start+=c,E.delay=0),x.to($,E,P?P(C,$,D):0),x._ease=se.none;x.duration()?u=c=0:a.timeline=0}else if(g){$r(Mt(x.vars.defaults,{ease:"none"})),x._ease=dn(g.ease||n.ease||"none");var T=0,H,R,A;if(ot(g))g.forEach(function(I){return x.to(D,I,">")}),x.duration();else{E={};for(k in g)k==="ease"||k==="easeEach"||Ep(k,g[k],E,g.easeEach);for(k in E)for(H=E[k].sort(function(I,M){return I.t-M.t}),T=0,C=0;C<H.length;C++)R=H[C],A={ease:R.e,duration:(R.t-(C?H[C-1].t:0))/100*u},A[k]=R.v,x.to(D,A,T),T+=A.duration;x.duration()<u&&x.to({},{duration:u-x.duration()})}}u||a.duration(u=x.duration())}else a.timeline=0;return f===!0&&!Ja&&(Ai=gi(a),be.killTweensOf(D),Ai=0),ni(v,gi(a),r),n.reversed&&a.reverse(),n.paused&&a.paused(!0),(d||!u&&!g&&a._start===Me(v._time)&&yt(d)&&np(gi(a))&&v.data!=="nested")&&(a._tTime=-pe,a.render(Math.max(0,-c)||0)),m&&Fc(gi(a),m),a}var t=e.prototype;return t.render=function(n,r,o){var a=this._time,l=this._tDur,u=this._dur,c=n<0,d=n>l-pe&&!c?l:n<pe?0:n,h,f,g,p,m,y,v,D,x;if(!u)sp(this,n,r,o);else if(d!==this._tTime||!n||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==c||this._lazy){if(h=d,D=this.timeline,this._repeat){if(p=u+this._rDelay,this._repeat<-1&&c)return this.totalTime(p*100+n,r,o);if(h=Me(d%p),d===l?(g=this._repeat,h=u):(m=Me(d/p),g=~~m,g&&g===m?(h=u,g--):h>u&&(h=u)),y=this._yoyo&&g&1,y&&(x=this._yEase,h=u-h),m=Gn(this._tTime,p),h===a&&!o&&this._initted&&g===m)return this._tTime=d,this;g!==m&&(D&&this._yEase&&Yc(D,y),this.vars.repeatRefresh&&!y&&!this._lock&&h!==p&&this._initted&&(this._lock=o=1,this.render(Me(p*g),!0).invalidate()._lock=0))}if(!this._initted){if(Ac(this,c?n:h,o,r,d))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&g!==m))return this;if(u!==this._dur)return this.render(n,r,o)}if(this._tTime=d,this._time=h,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=v=(x||this._ease)(h/u),this._from&&(this.ratio=v=1-v),!a&&d&&!r&&!m&&(At(this,"onStart"),this._tTime!==d))return this;for(f=this._pt;f;)f.r(v,f.d),f=f._next;D&&D.render(n<0?n:D._dur*D._ease(h/this._dur),r,o)||this._startAt&&(this._zTime=n),this._onUpdate&&!r&&(c&&sa(this,n,r,o),At(this,"onUpdate")),this._repeat&&g!==m&&this.vars.onRepeat&&!r&&this.parent&&At(this,"onRepeat"),(d===this._tDur||!d)&&this._tTime===d&&(c&&!this._onUpdate&&sa(this,n,!0,!0),(n||!u)&&(d===this._tDur&&this._ts>0||!d&&this._ts<0)&&Hi(this,1),!r&&!(c&&!a)&&(d||a||y)&&(At(this,d===l?"onComplete":"onReverseComplete",!0),this._prom&&!(d<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(n){return(!n||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(n),s.prototype.invalidate.call(this,n)},t.resetTo=function(n,r,o,a,l){Yr||Ot.wake(),this._ts||this.play();var u=Math.min(this._dur,(this._dp._time-this._start)*this._ts),c;return this._initted||al(this,u),c=this._ease(u/this._dur),Cp(this,n,r,o,a,c,u,l)?this.resetTo(n,r,o,a,1):(Do(this,0),this.parent||Tc(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(n,r){if(r===void 0&&(r="all"),!n&&(!r||r==="all"))return this._lazy=this._pt=0,this.parent?yr(this):this.scrollTrigger&&this.scrollTrigger.kill(!!Ze),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(n,r,Ai&&Ai.vars.overwrite!==!0)._first||yr(this),this.parent&&o!==this.timeline.totalDuration()&&Kn(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=n?Ht(n):a,u=this._ptLookup,c=this._pt,d,h,f,g,p,m,y;if((!r||r==="all")&&tp(a,l))return r==="all"&&(this._pt=0),yr(this);for(d=this._op=this._op||[],r!=="all"&&(Ye(r)&&(p={},bt(r,function(v){return p[v]=1}),r=p),r=Sp(a,r)),y=a.length;y--;)if(~l.indexOf(a[y])){h=u[y],r==="all"?(d[y]=r,g=h,f={}):(f=d[y]=d[y]||{},g=r);for(p in g)m=h&&h[p],m&&((!("kill"in m.d)||m.d.kill(p)===!0)&&bo(this,m,"_pt"),delete h[p]),f!=="all"&&(f[p]=1)}return this._initted&&!this._pt&&c&&yr(this),this},e.to=function(n,r){return new e(n,r,arguments[2])},e.from=function(n,r){return Pr(1,arguments)},e.delayedCall=function(n,r,o,a){return new e(r,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:n,onComplete:r,onReverseComplete:r,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},e.fromTo=function(n,r,o){return Pr(2,arguments)},e.set=function(n,r){return r.duration=0,r.repeatDelay||(r.repeat=0),new e(n,r)},e.killTweensOf=function(n,r,o){return be.killTweensOf(n,r,o)},e})(Xr);Mt(ze.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});bt("staggerTo,staggerFrom,staggerFromTo",function(s){ze[s]=function(){var e=new ft,t=aa.call(arguments,0);return t.splice(s==="staggerFromTo"?5:4,0,0),e[s].apply(e,t)}});var ll=function(e,t,i){return e[t]=i},Qc=function(e,t,i){return e[t](i)},$p=function(e,t,i,n){return e[t](n.fp,i)},Pp=function(e,t,i){return e.setAttribute(t,i)},ul=function(e,t){return $e(e[t])?Qc:Za(e[t])&&e.setAttribute?Pp:ll},ed=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},kp=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},td=function(e,t){var i=t._pt,n="";if(!e&&t.b)n=t.b;else if(e===1&&t.e)n=t.e;else{for(;i;)n=i.p+(i.m?i.m(i.s+i.c*e):Math.round((i.s+i.c*e)*1e4)/1e4)+n,i=i._next;n+=t.c}t.set(t.t,t.p,n,t)},cl=function(e,t){for(var i=t._pt;i;)i.r(e,i.d),i=i._next},Tp=function(e,t,i,n){for(var r=this._pt,o;r;)o=r._next,r.p===n&&r.modifier(e,t,i),r=o},Op=function(e){for(var t=this._pt,i,n;t;)n=t._next,t.p===e&&!t.op||t.op===e?bo(this,t,"_pt"):t.dep||(i=1),t=n;return!i},Fp=function(e,t,i,n){n.mSet(e,t,n.m.call(n.tween,i,n.mt),n)},id=function(e){for(var t=e._pt,i,n,r,o;t;){for(i=t._next,n=r;n&&n.pr>t.pr;)n=n._next;(t._prev=n?n._prev:o)?t._prev._next=t:r=t,(t._next=n)?n._prev=t:o=t,t=i}e._pt=r},xt=(function(){function s(t,i,n,r,o,a,l,u,c){this.t=i,this.s=r,this.c=o,this.p=n,this.r=a||ed,this.d=l||this,this.set=u||ll,this.pr=c||0,this._next=t,t&&(t._prev=this)}var e=s.prototype;return e.modifier=function(i,n,r){this.mSet=this.mSet||this.set,this.set=Fp,this.m=i,this.mt=r,this.tween=n},s})();bt(nl+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(s){return il[s]=1});zt.TweenMax=zt.TweenLite=ze;zt.TimelineLite=zt.TimelineMax=ft;be=new ft({sortChildren:!1,defaults:Yn,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Lt.stringFilter=qc;var hn=[],Is={},Ap=[],nu=0,Lp=0,Ro=function(e){return(Is[e]||Ap).map(function(t){return t()})},da=function(){var e=Date.now(),t=[];e-nu>2&&(Ro("matchMediaInit"),hn.forEach(function(i){var n=i.queries,r=i.conditions,o,a,l,u;for(a in n)o=ti.matchMedia(n[a]).matches,o&&(l=1),o!==r[a]&&(r[a]=o,u=1);u&&(i.revert(),l&&t.push(i))}),Ro("matchMediaRevert"),t.forEach(function(i){return i.onMatch(i,function(n){return i.add(null,n)})}),nu=e,Ro("matchMedia"))},nd=(function(){function s(t,i){this.selector=i&&la(i),this.data=[],this._r=[],this.isReverted=!1,this.id=Lp++,t&&this.add(t)}var e=s.prototype;return e.add=function(i,n,r){$e(i)&&(r=n,n=i,i=$e);var o=this,a=function(){var u=ve,c=o.selector,d;return u&&u!==o&&u.data.push(o),r&&(o.selector=la(r)),ve=o,d=n.apply(o,arguments),$e(d)&&o._r.push(d),ve=u,o.selector=c,o.isReverted=!1,d};return o.last=a,i===$e?a(o,function(l){return o.add(null,l)}):i?o[i]=a:a},e.ignore=function(i){var n=ve;ve=null,i(this),ve=n},e.getTweens=function(){var i=[];return this.data.forEach(function(n){return n instanceof s?i.push.apply(i,n.getTweens()):n instanceof ze&&!(n.parent&&n.parent.data==="nested")&&i.push(n)}),i},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(i,n){var r=this;if(i?(function(){for(var a=r.getTweens(),l=r.data.length,u;l--;)u=r.data[l],u.data==="isFlip"&&(u.revert(),u.getChildren(!0,!0,!1).forEach(function(c){return a.splice(a.indexOf(c),1)}));for(a.map(function(c){return{g:c._dur||c._delay||c._sat&&!c._sat.vars.immediateRender?c.globalTime(0):-1/0,t:c}}).sort(function(c,d){return d.g-c.g||-1/0}).forEach(function(c){return c.t.revert(i)}),l=r.data.length;l--;)u=r.data[l],u instanceof ft?u.data!=="nested"&&(u.scrollTrigger&&u.scrollTrigger.revert(),u.kill()):!(u instanceof ze)&&u.revert&&u.revert(i);r._r.forEach(function(c){return c(i,r)}),r.isReverted=!0})():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),n)for(var o=hn.length;o--;)hn[o].id===this.id&&hn.splice(o,1)},e.revert=function(i){this.kill(i||{})},s})(),zp=(function(){function s(t){this.contexts=[],this.scope=t,ve&&ve.data.push(this)}var e=s.prototype;return e.add=function(i,n,r){ui(i)||(i={matches:i});var o=new nd(0,r||this.scope),a=o.conditions={},l,u,c;ve&&!o.selector&&(o.selector=ve.selector),this.contexts.push(o),n=o.add("onMatch",n),o.queries=i;for(u in i)u==="all"?c=1:(l=ti.matchMedia(i[u]),l&&(hn.indexOf(o)<0&&hn.push(o),(a[u]=l.matches)&&(c=1),l.addListener?l.addListener(da):l.addEventListener("change",da)));return c&&n(o,function(d){return o.add(null,d)}),this},e.revert=function(i){this.kill(i||{})},e.kill=function(i){this.contexts.forEach(function(n){return n.kill(i,!0)})},s})(),ro={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];t.forEach(function(n){return Hc(n)})},timeline:function(e){return new ft(e)},getTweensOf:function(e,t){return be.getTweensOf(e,t)},getProperty:function(e,t,i,n){Ye(e)&&(e=Ht(e)[0]);var r=un(e||{}).get,o=i?kc:Pc;return i==="native"&&(i=""),e&&(t?o((kt[t]&&kt[t].get||r)(e,t,i,n)):function(a,l,u){return o((kt[a]&&kt[a].get||r)(e,a,l,u))})},quickSetter:function(e,t,i){if(e=Ht(e),e.length>1){var n=e.map(function(c){return wt.quickSetter(c,t,i)}),r=n.length;return function(c){for(var d=r;d--;)n[d](c)}}e=e[0]||{};var o=kt[t],a=un(e),l=a.harness&&(a.harness.aliases||{})[t]||t,u=o?function(c){var d=new o;In._pt=0,d.init(e,i?c+i:c,In,0,[e]),d.render(1,d),In._pt&&cl(1,In)}:a.set(e,l);return o?u:function(c){return u(e,l,i?c+i:c,a,1)}},quickTo:function(e,t,i){var n,r=wt.to(e,Mt((n={},n[t]="+=0.1",n.paused=!0,n.stagger=0,n),i||{})),o=function(l,u,c){return r.resetTo(t,l,u,c)};return o.tween=r,o},isTweening:function(e){return be.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=dn(e.ease,Yn.ease)),Zl(Yn,e||{})},config:function(e){return Zl(Lt,e||{})},registerEffect:function(e){var t=e.name,i=e.effect,n=e.plugins,r=e.defaults,o=e.extendTimeline;(n||"").split(",").forEach(function(a){return a&&!kt[a]&&!zt[a]&&Vr(t+" effect requires "+a+" plugin.")}),Ao[t]=function(a,l,u){return i(Ht(a),Mt(l||{},r),u)},o&&(ft.prototype[t]=function(a,l,u){return this.add(Ao[t](a,ui(l)?l:(u=l)&&{},this),u)})},registerEase:function(e,t){se[e]=dn(t)},parseEase:function(e,t){return arguments.length?dn(e,t):se},getById:function(e){return be.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var i=new ft(e),n,r;for(i.smoothChildTiming=yt(e.smoothChildTiming),be.remove(i),i._dp=0,i._time=i._tTime=be._time,n=be._first;n;)r=n._next,(t||!(!n._dur&&n instanceof ze&&n.vars.onComplete===n._targets[0]))&&ni(i,n,n._start-n._delay),n=r;return ni(be,i,0),i},context:function(e,t){return e?new nd(e,t):ve},matchMedia:function(e){return new zp(e)},matchMediaRefresh:function(){return hn.forEach(function(e){var t=e.conditions,i,n;for(n in t)t[n]&&(t[n]=!1,i=1);i&&e.revert()})||da()},addEventListener:function(e,t){var i=Is[e]||(Is[e]=[]);~i.indexOf(t)||i.push(t)},removeEventListener:function(e,t){var i=Is[e],n=i&&i.indexOf(t);n>=0&&i.splice(n,1)},utils:{wrap:fp,wrapYoyo:pp,distribute:Mc,random:jc,snap:Rc,normalize:hp,getUnit:rt,clamp:lp,splitColor:Uc,toArray:Ht,selector:la,mapRange:Nc,pipe:cp,unitize:dp,interpolate:gp,shuffle:zc},install:wc,effects:Ao,ticker:Ot,updateRoot:ft.updateRoot,plugins:kt,globalTimeline:be,core:{PropTween:xt,globals:Cc,Tween:ze,Timeline:ft,Animation:Xr,getCache:un,_removeLinkedListItem:bo,reverting:function(){return Ze},context:function(e){return e&&ve&&(ve.data.push(e),e._ctx=ve),ve},suppressOverwrites:function(e){return Ja=e}}};bt("to,from,fromTo,delayedCall,set,killTweensOf",function(s){return ro[s]=ze[s]});Ot.add(ft.updateRoot);In=ro.to({},{duration:0});var Mp=function(e,t){for(var i=e._pt;i&&i.p!==t&&i.op!==t&&i.fp!==t;)i=i._next;return i},Rp=function(e,t){var i=e._targets,n,r,o;for(n in t)for(r=i.length;r--;)o=e._ptLookup[r][n],o&&(o=o.d)&&(o._pt&&(o=Mp(o,n)),o&&o.modifier&&o.modifier(t[n],e,i[r],n))},jo=function(e,t){return{name:e,headless:1,rawVars:1,init:function(n,r,o){o._onInit=function(a){var l,u;if(Ye(r)&&(l={},bt(r,function(c){return l[c]=1}),r=l),t){l={};for(u in r)l[u]=t(r[u]);r=l}Rp(a,r)}}}},wt=ro.registerPlugin({name:"attr",init:function(e,t,i,n,r){var o,a,l;this.tween=i;for(o in t)l=e.getAttribute(o)||"",a=this.add(e,"setAttribute",(l||0)+"",t[o],n,r,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(e,t){for(var i=t._pt;i;)Ze?i.set(i.t,i.p,i.b,i):i.r(e,i.d),i=i._next}},{name:"endArray",headless:1,init:function(e,t){for(var i=t.length;i--;)this.add(e,i,e[i]||0,t[i],0,0,0,0,0,1)}},jo("roundProps",ua),jo("modifiers"),jo("snap",Rc))||ro;ze.version=ft.version=wt.version="3.13.0";Dc=1;Qa()&&Jn();se.Power0;se.Power1;se.Power2;se.Power3;se.Power4;se.Linear;se.Quad;se.Cubic;se.Quart;se.Quint;se.Strong;se.Elastic;se.Back;se.SteppedEase;se.Bounce;se.Sine;se.Expo;se.Circ;/*!
 * CSSPlugin 3.13.0
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var ru,Li,Hn,dl,sn,su,hl,jp=function(){return typeof window<"u"},Di={},en=180/Math.PI,Un=Math.PI/180,Fn=Math.atan2,ou=1e8,fl=/([A-Z])/g,Ip=/(left|right|width|margin|padding|x)/i,Np=/[\s,\(]\S/,si={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},ha=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},Bp=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},Hp=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},Up=function(e,t){var i=t.s+t.c*e;t.set(t.t,t.p,~~(i+(i<0?-.5:.5))+t.u,t)},rd=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},sd=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},Vp=function(e,t,i){return e.style[t]=i},qp=function(e,t,i){return e.style.setProperty(t,i)},Wp=function(e,t,i){return e._gsap[t]=i},Yp=function(e,t,i){return e._gsap.scaleX=e._gsap.scaleY=i},Xp=function(e,t,i,n,r){var o=e._gsap;o.scaleX=o.scaleY=i,o.renderTransform(r,o)},Gp=function(e,t,i,n,r){var o=e._gsap;o[t]=i,o.renderTransform(r,o)},xe="transform",Dt=xe+"Origin",Kp=function s(e,t){var i=this,n=this.target,r=n.style,o=n._gsap;if(e in Di&&r){if(this.tfm=this.tfm||{},e!=="transform")e=si[e]||e,~e.indexOf(",")?e.split(",").forEach(function(a){return i.tfm[a]=mi(n,a)}):this.tfm[e]=o.x?o[e]:mi(n,e),e===Dt&&(this.tfm.zOrigin=o.zOrigin);else return si.transform.split(",").forEach(function(a){return s.call(i,a,t)});if(this.props.indexOf(xe)>=0)return;o.svg&&(this.svgo=n.getAttribute("data-svg-origin"),this.props.push(Dt,t,"")),e=xe}(r||t)&&this.props.push(e,t,r[e])},od=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},Jp=function(){var e=this.props,t=this.target,i=t.style,n=t._gsap,r,o;for(r=0;r<e.length;r+=3)e[r+1]?e[r+1]===2?t[e[r]](e[r+2]):t[e[r]]=e[r+2]:e[r+2]?i[e[r]]=e[r+2]:i.removeProperty(e[r].substr(0,2)==="--"?e[r]:e[r].replace(fl,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)n[o]=this.tfm[o];n.svg&&(n.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),r=hl(),(!r||!r.isStart)&&!i[xe]&&(od(i),n.zOrigin&&i[Dt]&&(i[Dt]+=" "+n.zOrigin+"px",n.zOrigin=0,n.renderTransform()),n.uncache=1)}},ad=function(e,t){var i={target:e,props:[],revert:Jp,save:Kp};return e._gsap||wt.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(n){return i.save(n)}),i},ld,fa=function(e,t){var i=Li.createElementNS?Li.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):Li.createElement(e);return i&&i.style?i:Li.createElement(e)},Ut=function s(e,t,i){var n=getComputedStyle(e);return n[t]||n.getPropertyValue(t.replace(fl,"-$1").toLowerCase())||n.getPropertyValue(t)||!i&&s(e,Zn(t)||t,1)||""},au="O,Moz,ms,Ms,Webkit".split(","),Zn=function(e,t,i){var n=t||sn,r=n.style,o=5;if(e in r&&!i)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(au[o]+e in r););return o<0?null:(o===3?"ms":o>=0?au[o]:"")+e},pa=function(){jp()&&window.document&&(ru=window,Li=ru.document,Hn=Li.documentElement,sn=fa("div")||{style:{}},fa("div"),xe=Zn(xe),Dt=xe+"Origin",sn.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",ld=!!Zn("perspective"),hl=wt.core.reverting,dl=1)},lu=function(e){var t=e.ownerSVGElement,i=fa("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),n=e.cloneNode(!0),r;n.style.display="block",i.appendChild(n),Hn.appendChild(i);try{r=n.getBBox()}catch{}return i.removeChild(n),Hn.removeChild(i),r},uu=function(e,t){for(var i=t.length;i--;)if(e.hasAttribute(t[i]))return e.getAttribute(t[i])},ud=function(e){var t,i;try{t=e.getBBox()}catch{t=lu(e),i=1}return t&&(t.width||t.height)||i||(t=lu(e)),t&&!t.width&&!t.x&&!t.y?{x:+uu(e,["x","cx","x1"])||0,y:+uu(e,["y","cy","y1"])||0,width:0,height:0}:t},cd=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&ud(e))},_n=function(e,t){if(t){var i=e.style,n;t in Di&&t!==Dt&&(t=xe),i.removeProperty?(n=t.substr(0,2),(n==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),i.removeProperty(n==="--"?t:t.replace(fl,"-$1").toLowerCase())):i.removeAttribute(t)}},zi=function(e,t,i,n,r,o){var a=new xt(e._pt,t,i,0,1,o?sd:rd);return e._pt=a,a.b=n,a.e=r,e._props.push(i),a},cu={deg:1,rad:1,turn:1},Zp={grid:1,flex:1},Ui=function s(e,t,i,n){var r=parseFloat(i)||0,o=(i+"").trim().substr((r+"").length)||"px",a=sn.style,l=Ip.test(t),u=e.tagName.toLowerCase()==="svg",c=(u?"client":"offset")+(l?"Width":"Height"),d=100,h=n==="px",f=n==="%",g,p,m,y;if(n===o||!r||cu[n]||cu[o])return r;if(o!=="px"&&!h&&(r=s(e,t,i,"px")),y=e.getCTM&&cd(e),(f||o==="%")&&(Di[t]||~t.indexOf("adius")))return g=y?e.getBBox()[l?"width":"height"]:e[c],Oe(f?r/g*d:r/100*g);if(a[l?"width":"height"]=d+(h?o:n),p=n!=="rem"&&~t.indexOf("adius")||n==="em"&&e.appendChild&&!u?e:e.parentNode,y&&(p=(e.ownerSVGElement||{}).parentNode),(!p||p===Li||!p.appendChild)&&(p=Li.body),m=p._gsap,m&&f&&m.width&&l&&m.time===Ot.time&&!m.uncache)return Oe(r/m.width*d);if(f&&(t==="height"||t==="width")){var v=e.style[t];e.style[t]=d+n,g=e[c],v?e.style[t]=v:_n(e,t)}else(f||o==="%")&&!Zp[Ut(p,"display")]&&(a.position=Ut(e,"position")),p===e&&(a.position="static"),p.appendChild(sn),g=sn[c],p.removeChild(sn),a.position="absolute";return l&&f&&(m=un(p),m.time=Ot.time,m.width=p[c]),Oe(h?g*r/d:g&&r?d/g*r:0)},mi=function(e,t,i,n){var r;return dl||pa(),t in si&&t!=="transform"&&(t=si[t],~t.indexOf(",")&&(t=t.split(",")[0])),Di[t]&&t!=="transform"?(r=Kr(e,n),r=t!=="transformOrigin"?r[t]:r.svg?r.origin:oo(Ut(e,Dt))+" "+r.zOrigin+"px"):(r=e.style[t],(!r||r==="auto"||n||~(r+"").indexOf("calc("))&&(r=so[t]&&so[t](e,t,i)||Ut(e,t)||Ec(e,t)||(t==="opacity"?1:0))),i&&!~(r+"").trim().indexOf(" ")?Ui(e,t,r,i)+i:r},Qp=function(e,t,i,n){if(!i||i==="none"){var r=Zn(t,e,1),o=r&&Ut(e,r,1);o&&o!==i?(t=r,i=o):t==="borderColor"&&(i=Ut(e,"borderTopColor"))}var a=new xt(this._pt,e.style,t,0,1,td),l=0,u=0,c,d,h,f,g,p,m,y,v,D,x,C;if(a.b=i,a.e=n,i+="",n+="",n.substring(0,6)==="var(--"&&(n=Ut(e,n.substring(4,n.indexOf(")")))),n==="auto"&&(p=e.style[t],e.style[t]=n,n=Ut(e,t)||n,p?e.style[t]=p:_n(e,t)),c=[i,n],qc(c),i=c[0],n=c[1],h=i.match(jn)||[],C=n.match(jn)||[],C.length){for(;d=jn.exec(n);)m=d[0],v=n.substring(l,d.index),g?g=(g+1)%5:(v.substr(-5)==="rgba("||v.substr(-5)==="hsla(")&&(g=1),m!==(p=h[u++]||"")&&(f=parseFloat(p)||0,x=p.substr((f+"").length),m.charAt(1)==="="&&(m=Bn(f,m)+x),y=parseFloat(m),D=m.substr((y+"").length),l=jn.lastIndex-D.length,D||(D=D||Lt.units[t]||x,l===n.length&&(n+=D,a.e+=D)),x!==D&&(f=Ui(e,t,p,D)||0),a._pt={_next:a._pt,p:v||u===1?v:",",s:f,c:y-f,m:g&&g<4||t==="zIndex"?Math.round:0});a.c=l<n.length?n.substring(l,n.length):""}else a.r=t==="display"&&n==="none"?sd:rd;return bc.test(n)&&(a.e=0),this._pt=a,a},du={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},eg=function(e){var t=e.split(" "),i=t[0],n=t[1]||"50%";return(i==="top"||i==="bottom"||n==="left"||n==="right")&&(e=i,i=n,n=e),t[0]=du[i]||i,t[1]=du[n]||n,t.join(" ")},tg=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var i=t.t,n=i.style,r=t.u,o=i._gsap,a,l,u;if(r==="all"||r===!0)n.cssText="",l=1;else for(r=r.split(","),u=r.length;--u>-1;)a=r[u],Di[a]&&(l=1,a=a==="transformOrigin"?Dt:xe),_n(i,a);l&&(_n(i,xe),o&&(o.svg&&i.removeAttribute("transform"),n.scale=n.rotate=n.translate="none",Kr(i,1),o.uncache=1,od(n)))}},so={clearProps:function(e,t,i,n,r){if(r.data!=="isFromStart"){var o=e._pt=new xt(e._pt,t,i,0,0,tg);return o.u=n,o.pr=-10,o.tween=r,e._props.push(i),1}}},Gr=[1,0,0,1,0,0],dd={},hd=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},hu=function(e){var t=Ut(e,xe);return hd(t)?Gr:t.substr(7).match(yc).map(Oe)},pl=function(e,t){var i=e._gsap||un(e),n=e.style,r=hu(e),o,a,l,u;return i.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,r=[l.a,l.b,l.c,l.d,l.e,l.f],r.join(",")==="1,0,0,1,0,0"?Gr:r):(r===Gr&&!e.offsetParent&&e!==Hn&&!i.svg&&(l=n.display,n.display="block",o=e.parentNode,(!o||!e.offsetParent&&!e.getBoundingClientRect().width)&&(u=1,a=e.nextElementSibling,Hn.appendChild(e)),r=hu(e),l?n.display=l:_n(e,"display"),u&&(a?o.insertBefore(e,a):o?o.appendChild(e):Hn.removeChild(e))),t&&r.length>6?[r[0],r[1],r[4],r[5],r[12],r[13]]:r)},ga=function(e,t,i,n,r,o){var a=e._gsap,l=r||pl(e,!0),u=a.xOrigin||0,c=a.yOrigin||0,d=a.xOffset||0,h=a.yOffset||0,f=l[0],g=l[1],p=l[2],m=l[3],y=l[4],v=l[5],D=t.split(" "),x=parseFloat(D[0])||0,C=parseFloat(D[1])||0,E,w,k,$;i?l!==Gr&&(w=f*m-g*p)&&(k=x*(m/w)+C*(-p/w)+(p*v-m*y)/w,$=x*(-g/w)+C*(f/w)-(f*v-g*y)/w,x=k,C=$):(E=ud(e),x=E.x+(~D[0].indexOf("%")?x/100*E.width:x),C=E.y+(~(D[1]||D[0]).indexOf("%")?C/100*E.height:C)),n||n!==!1&&a.smooth?(y=x-u,v=C-c,a.xOffset=d+(y*f+v*p)-y,a.yOffset=h+(y*g+v*m)-v):a.xOffset=a.yOffset=0,a.xOrigin=x,a.yOrigin=C,a.smooth=!!n,a.origin=t,a.originIsAbsolute=!!i,e.style[Dt]="0px 0px",o&&(zi(o,a,"xOrigin",u,x),zi(o,a,"yOrigin",c,C),zi(o,a,"xOffset",d,a.xOffset),zi(o,a,"yOffset",h,a.yOffset)),e.setAttribute("data-svg-origin",x+" "+C)},Kr=function(e,t){var i=e._gsap||new Gc(e);if("x"in i&&!t&&!i.uncache)return i;var n=e.style,r=i.scaleX<0,o="px",a="deg",l=getComputedStyle(e),u=Ut(e,Dt)||"0",c,d,h,f,g,p,m,y,v,D,x,C,E,w,k,$,P,F,T,H,R,A,I,M,N,W,b,q,ce,me,de,De;return c=d=h=p=m=y=v=D=x=0,f=g=1,i.svg=!!(e.getCTM&&cd(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(n[xe]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[xe]!=="none"?l[xe]:"")),n.scale=n.rotate=n.translate="none"),w=pl(e,i.svg),i.svg&&(i.uncache?(N=e.getBBox(),u=i.xOrigin-N.x+"px "+(i.yOrigin-N.y)+"px",M=""):M=!t&&e.getAttribute("data-svg-origin"),ga(e,M||u,!!M||i.originIsAbsolute,i.smooth!==!1,w)),C=i.xOrigin||0,E=i.yOrigin||0,w!==Gr&&(F=w[0],T=w[1],H=w[2],R=w[3],c=A=w[4],d=I=w[5],w.length===6?(f=Math.sqrt(F*F+T*T),g=Math.sqrt(R*R+H*H),p=F||T?Fn(T,F)*en:0,v=H||R?Fn(H,R)*en+p:0,v&&(g*=Math.abs(Math.cos(v*Un))),i.svg&&(c-=C-(C*F+E*H),d-=E-(C*T+E*R))):(De=w[6],me=w[7],b=w[8],q=w[9],ce=w[10],de=w[11],c=w[12],d=w[13],h=w[14],k=Fn(De,ce),m=k*en,k&&($=Math.cos(-k),P=Math.sin(-k),M=A*$+b*P,N=I*$+q*P,W=De*$+ce*P,b=A*-P+b*$,q=I*-P+q*$,ce=De*-P+ce*$,de=me*-P+de*$,A=M,I=N,De=W),k=Fn(-H,ce),y=k*en,k&&($=Math.cos(-k),P=Math.sin(-k),M=F*$-b*P,N=T*$-q*P,W=H*$-ce*P,de=R*P+de*$,F=M,T=N,H=W),k=Fn(T,F),p=k*en,k&&($=Math.cos(k),P=Math.sin(k),M=F*$+T*P,N=A*$+I*P,T=T*$-F*P,I=I*$-A*P,F=M,A=N),m&&Math.abs(m)+Math.abs(p)>359.9&&(m=p=0,y=180-y),f=Oe(Math.sqrt(F*F+T*T+H*H)),g=Oe(Math.sqrt(I*I+De*De)),k=Fn(A,I),v=Math.abs(k)>2e-4?k*en:0,x=de?1/(de<0?-de:de):0),i.svg&&(M=e.getAttribute("transform"),i.forceCSS=e.setAttribute("transform","")||!hd(Ut(e,xe)),M&&e.setAttribute("transform",M))),Math.abs(v)>90&&Math.abs(v)<270&&(r?(f*=-1,v+=p<=0?180:-180,p+=p<=0?180:-180):(g*=-1,v+=v<=0?180:-180)),t=t||i.uncache,i.x=c-((i.xPercent=c&&(!t&&i.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-c)?-50:0)))?e.offsetWidth*i.xPercent/100:0)+o,i.y=d-((i.yPercent=d&&(!t&&i.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-d)?-50:0)))?e.offsetHeight*i.yPercent/100:0)+o,i.z=h+o,i.scaleX=Oe(f),i.scaleY=Oe(g),i.rotation=Oe(p)+a,i.rotationX=Oe(m)+a,i.rotationY=Oe(y)+a,i.skewX=v+a,i.skewY=D+a,i.transformPerspective=x+o,(i.zOrigin=parseFloat(u.split(" ")[2])||!t&&i.zOrigin||0)&&(n[Dt]=oo(u)),i.xOffset=i.yOffset=0,i.force3D=Lt.force3D,i.renderTransform=i.svg?ng:ld?fd:ig,i.uncache=0,i},oo=function(e){return(e=e.split(" "))[0]+" "+e[1]},Io=function(e,t,i){var n=rt(t);return Oe(parseFloat(t)+parseFloat(Ui(e,"x",i+"px",n)))+n},ig=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,fd(e,t)},Ji="0deg",fr="0px",Zi=") ",fd=function(e,t){var i=t||this,n=i.xPercent,r=i.yPercent,o=i.x,a=i.y,l=i.z,u=i.rotation,c=i.rotationY,d=i.rotationX,h=i.skewX,f=i.skewY,g=i.scaleX,p=i.scaleY,m=i.transformPerspective,y=i.force3D,v=i.target,D=i.zOrigin,x="",C=y==="auto"&&e&&e!==1||y===!0;if(D&&(d!==Ji||c!==Ji)){var E=parseFloat(c)*Un,w=Math.sin(E),k=Math.cos(E),$;E=parseFloat(d)*Un,$=Math.cos(E),o=Io(v,o,w*$*-D),a=Io(v,a,-Math.sin(E)*-D),l=Io(v,l,k*$*-D+D)}m!==fr&&(x+="perspective("+m+Zi),(n||r)&&(x+="translate("+n+"%, "+r+"%) "),(C||o!==fr||a!==fr||l!==fr)&&(x+=l!==fr||C?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+Zi),u!==Ji&&(x+="rotate("+u+Zi),c!==Ji&&(x+="rotateY("+c+Zi),d!==Ji&&(x+="rotateX("+d+Zi),(h!==Ji||f!==Ji)&&(x+="skew("+h+", "+f+Zi),(g!==1||p!==1)&&(x+="scale("+g+", "+p+Zi),v.style[xe]=x||"translate(0, 0)"},ng=function(e,t){var i=t||this,n=i.xPercent,r=i.yPercent,o=i.x,a=i.y,l=i.rotation,u=i.skewX,c=i.skewY,d=i.scaleX,h=i.scaleY,f=i.target,g=i.xOrigin,p=i.yOrigin,m=i.xOffset,y=i.yOffset,v=i.forceCSS,D=parseFloat(o),x=parseFloat(a),C,E,w,k,$;l=parseFloat(l),u=parseFloat(u),c=parseFloat(c),c&&(c=parseFloat(c),u+=c,l+=c),l||u?(l*=Un,u*=Un,C=Math.cos(l)*d,E=Math.sin(l)*d,w=Math.sin(l-u)*-h,k=Math.cos(l-u)*h,u&&(c*=Un,$=Math.tan(u-c),$=Math.sqrt(1+$*$),w*=$,k*=$,c&&($=Math.tan(c),$=Math.sqrt(1+$*$),C*=$,E*=$)),C=Oe(C),E=Oe(E),w=Oe(w),k=Oe(k)):(C=d,k=h,E=w=0),(D&&!~(o+"").indexOf("px")||x&&!~(a+"").indexOf("px"))&&(D=Ui(f,"x",o,"px"),x=Ui(f,"y",a,"px")),(g||p||m||y)&&(D=Oe(D+g-(g*C+p*w)+m),x=Oe(x+p-(g*E+p*k)+y)),(n||r)&&($=f.getBBox(),D=Oe(D+n/100*$.width),x=Oe(x+r/100*$.height)),$="matrix("+C+","+E+","+w+","+k+","+D+","+x+")",f.setAttribute("transform",$),v&&(f.style[xe]=$)},rg=function(e,t,i,n,r){var o=360,a=Ye(r),l=parseFloat(r)*(a&&~r.indexOf("rad")?en:1),u=l-n,c=n+u+"deg",d,h;return a&&(d=r.split("_")[1],d==="short"&&(u%=o,u!==u%(o/2)&&(u+=u<0?o:-o)),d==="cw"&&u<0?u=(u+o*ou)%o-~~(u/o)*o:d==="ccw"&&u>0&&(u=(u-o*ou)%o-~~(u/o)*o)),e._pt=h=new xt(e._pt,t,i,n,u,Bp),h.e=c,h.u="deg",e._props.push(i),h},fu=function(e,t){for(var i in t)e[i]=t[i];return e},sg=function(e,t,i){var n=fu({},i._gsap),r="perspective,force3D,transformOrigin,svgOrigin",o=i.style,a,l,u,c,d,h,f,g;n.svg?(u=i.getAttribute("transform"),i.setAttribute("transform",""),o[xe]=t,a=Kr(i,1),_n(i,xe),i.setAttribute("transform",u)):(u=getComputedStyle(i)[xe],o[xe]=t,a=Kr(i,1),o[xe]=u);for(l in Di)u=n[l],c=a[l],u!==c&&r.indexOf(l)<0&&(f=rt(u),g=rt(c),d=f!==g?Ui(i,l,u,g):parseFloat(u),h=parseFloat(c),e._pt=new xt(e._pt,a,l,d,h-d,ha),e._pt.u=g||0,e._props.push(l));fu(a,n)};bt("padding,margin,Width,Radius",function(s,e){var t="Top",i="Right",n="Bottom",r="Left",o=(e<3?[t,i,n,r]:[t+r,t+i,n+i,n+r]).map(function(a){return e<2?s+a:"border"+a+s});so[e>1?"border"+s:s]=function(a,l,u,c,d){var h,f;if(arguments.length<4)return h=o.map(function(g){return mi(a,g,u)}),f=h.join(" "),f.split(h[0]).length===5?h[0]:f;h=(c+"").split(" "),f={},o.forEach(function(g,p){return f[g]=h[p]=h[p]||h[(p-1)/2|0]}),a.init(l,f,d)}});var pd={name:"css",register:pa,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,i,n,r){var o=this._props,a=e.style,l=i.vars.startAt,u,c,d,h,f,g,p,m,y,v,D,x,C,E,w,k;dl||pa(),this.styles=this.styles||ad(e),k=this.styles.props,this.tween=i;for(p in t)if(p!=="autoRound"&&(c=t[p],!(kt[p]&&Kc(p,t,i,n,e,r)))){if(f=typeof c,g=so[p],f==="function"&&(c=c.call(i,n,e,r),f=typeof c),f==="string"&&~c.indexOf("random(")&&(c=Wr(c)),g)g(this,e,p,c,i)&&(w=1);else if(p.substr(0,2)==="--")u=(getComputedStyle(e).getPropertyValue(p)+"").trim(),c+="",Ii.lastIndex=0,Ii.test(u)||(m=rt(u),y=rt(c)),y?m!==y&&(u=Ui(e,p,u,y)+y):m&&(c+=m),this.add(a,"setProperty",u,c,n,r,0,0,p),o.push(p),k.push(p,0,a[p]);else if(f!=="undefined"){if(l&&p in l?(u=typeof l[p]=="function"?l[p].call(i,n,e,r):l[p],Ye(u)&&~u.indexOf("random(")&&(u=Wr(u)),rt(u+"")||u==="auto"||(u+=Lt.units[p]||rt(mi(e,p))||""),(u+"").charAt(1)==="="&&(u=mi(e,p))):u=mi(e,p),h=parseFloat(u),v=f==="string"&&c.charAt(1)==="="&&c.substr(0,2),v&&(c=c.substr(2)),d=parseFloat(c),p in si&&(p==="autoAlpha"&&(h===1&&mi(e,"visibility")==="hidden"&&d&&(h=0),k.push("visibility",0,a.visibility),zi(this,a,"visibility",h?"inherit":"hidden",d?"inherit":"hidden",!d)),p!=="scale"&&p!=="transform"&&(p=si[p],~p.indexOf(",")&&(p=p.split(",")[0]))),D=p in Di,D){if(this.styles.save(p),f==="string"&&c.substring(0,6)==="var(--"&&(c=Ut(e,c.substring(4,c.indexOf(")"))),d=parseFloat(c)),x||(C=e._gsap,C.renderTransform&&!t.parseTransform||Kr(e,t.parseTransform),E=t.smoothOrigin!==!1&&C.smooth,x=this._pt=new xt(this._pt,a,xe,0,1,C.renderTransform,C,0,-1),x.dep=1),p==="scale")this._pt=new xt(this._pt,C,"scaleY",C.scaleY,(v?Bn(C.scaleY,v+d):d)-C.scaleY||0,ha),this._pt.u=0,o.push("scaleY",p),p+="X";else if(p==="transformOrigin"){k.push(Dt,0,a[Dt]),c=eg(c),C.svg?ga(e,c,0,E,0,this):(y=parseFloat(c.split(" ")[2])||0,y!==C.zOrigin&&zi(this,C,"zOrigin",C.zOrigin,y),zi(this,a,p,oo(u),oo(c)));continue}else if(p==="svgOrigin"){ga(e,c,1,E,0,this);continue}else if(p in dd){rg(this,C,p,h,v?Bn(h,v+c):c);continue}else if(p==="smoothOrigin"){zi(this,C,"smooth",C.smooth,c);continue}else if(p==="force3D"){C[p]=c;continue}else if(p==="transform"){sg(this,c,e);continue}}else p in a||(p=Zn(p)||p);if(D||(d||d===0)&&(h||h===0)&&!Np.test(c)&&p in a)m=(u+"").substr((h+"").length),d||(d=0),y=rt(c)||(p in Lt.units?Lt.units[p]:m),m!==y&&(h=Ui(e,p,u,y)),this._pt=new xt(this._pt,D?C:a,p,h,(v?Bn(h,v+d):d)-h,!D&&(y==="px"||p==="zIndex")&&t.autoRound!==!1?Up:ha),this._pt.u=y||0,m!==y&&y!=="%"&&(this._pt.b=u,this._pt.r=Hp);else if(p in a)Qp.call(this,e,p,u,v?v+c:c);else if(p in e)this.add(e,p,u||e[p],v?v+c:c,n,r);else if(p!=="parseTransform"){tl(p,c);continue}D||(p in a?k.push(p,0,a[p]):typeof e[p]=="function"?k.push(p,2,e[p]()):k.push(p,1,u||e[p])),o.push(p)}}w&&id(this)},render:function(e,t){if(t.tween._time||!hl())for(var i=t._pt;i;)i.r(e,i.d),i=i._next;else t.styles.revert()},get:mi,aliases:si,getSetter:function(e,t,i){var n=si[t];return n&&n.indexOf(",")<0&&(t=n),t in Di&&t!==Dt&&(e._gsap.x||mi(e,"x"))?i&&su===i?t==="scale"?Yp:Wp:(su=i||{})&&(t==="scale"?Xp:Gp):e.style&&!Za(e.style[t])?Vp:~t.indexOf("-")?qp:ul(e,t)},core:{_removeProperty:_n,_getMatrix:pl}};wt.utils.checkPrefix=Zn;wt.core.getStyleSaver=ad;(function(s,e,t,i){var n=bt(s+","+e+","+t,function(r){Di[r]=1});bt(e,function(r){Lt.units[r]="deg",dd[r]=1}),si[n[13]]=s+","+e,bt(i,function(r){var o=r.split(":");si[o[1]]=n[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");bt("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(s){Lt.units[s]="px"});wt.registerPlugin(pd);var ne=wt.registerPlugin(pd)||wt;ne.core.Tween;/*!
 * paths 3.13.0
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var og=/[achlmqstvz]|(-?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/ig,ag=/[\+\-]?\d*\.?\d+e[\+\-]?\d+/ig,lg=Math.PI/180,bs=Math.sin,xs=Math.cos,Tr=Math.abs,pr=Math.sqrt,ug=function(e){return typeof e=="number"},pu=1e5,Ti=function(e){return Math.round(e*pu)/pu||0};function cg(s,e,t,i,n,r,o){for(var a=s.length,l,u,c,d,h;--a>-1;)for(l=s[a],u=l.length,c=0;c<u;c+=2)d=l[c],h=l[c+1],l[c]=d*e+h*i+r,l[c+1]=d*t+h*n+o;return s._dirty=1,s}function dg(s,e,t,i,n,r,o,a,l){if(!(s===a&&e===l)){t=Tr(t),i=Tr(i);var u=n%360*lg,c=xs(u),d=bs(u),h=Math.PI,f=h*2,g=(s-a)/2,p=(e-l)/2,m=c*g+d*p,y=-d*g+c*p,v=m*m,D=y*y,x=v/(t*t)+D/(i*i);x>1&&(t=pr(x)*t,i=pr(x)*i);var C=t*t,E=i*i,w=(C*E-C*D-E*v)/(C*D+E*v);w<0&&(w=0);var k=(r===o?-1:1)*pr(w),$=k*(t*y/i),P=k*-(i*m/t),F=(s+a)/2,T=(e+l)/2,H=F+(c*$-d*P),R=T+(d*$+c*P),A=(m-$)/t,I=(y-P)/i,M=(-m-$)/t,N=(-y-P)/i,W=A*A+I*I,b=(I<0?-1:1)*Math.acos(A/pr(W)),q=(A*N-I*M<0?-1:1)*Math.acos((A*M+I*N)/pr(W*(M*M+N*N)));isNaN(q)&&(q=h),!o&&q>0?q-=f:o&&q<0&&(q+=f),b%=f,q%=f;var ce=Math.ceil(Tr(q)/(f/4)),me=[],de=q/ce,De=4/3*bs(de/2)/(1+xs(de/2)),Be=c*t,we=d*t,Xe=d*-i,He=c*i,Ce;for(Ce=0;Ce<ce;Ce++)n=b+Ce*de,m=xs(n),y=bs(n),A=xs(n+=de),I=bs(n),me.push(m-De*y,y+De*m,A+De*I,I-De*A,A,I);for(Ce=0;Ce<me.length;Ce+=2)m=me[Ce],y=me[Ce+1],me[Ce]=m*Be+y*Xe+H,me[Ce+1]=m*we+y*He+R;return me[Ce-2]=a,me[Ce-1]=l,me}}function hg(s){var e=(s+"").replace(ag,function($){var P=+$;return P<1e-4&&P>-1e-4?0:P}).match(og)||[],t=[],i=0,n=0,r=2/3,o=e.length,a=0,l="ERROR: malformed path: "+s,u,c,d,h,f,g,p,m,y,v,D,x,C,E,w,k=function(P,F,T,H){v=(T-P)/3,D=(H-F)/3,p.push(P+v,F+D,T-v,H-D,T,H)};if(!s||!isNaN(e[0])||isNaN(e[1]))return console.log(l),t;for(u=0;u<o;u++)if(C=f,isNaN(e[u])?(f=e[u].toUpperCase(),g=f!==e[u]):u--,d=+e[u+1],h=+e[u+2],g&&(d+=i,h+=n),u||(m=d,y=h),f==="M")p&&(p.length<8?t.length-=1:a+=p.length),i=m=d,n=y=h,p=[d,h],t.push(p),u+=2,f="L";else if(f==="C")p||(p=[0,0]),g||(i=n=0),p.push(d,h,i+e[u+3]*1,n+e[u+4]*1,i+=e[u+5]*1,n+=e[u+6]*1),u+=6;else if(f==="S")v=i,D=n,(C==="C"||C==="S")&&(v+=i-p[p.length-4],D+=n-p[p.length-3]),g||(i=n=0),p.push(v,D,d,h,i+=e[u+3]*1,n+=e[u+4]*1),u+=4;else if(f==="Q")v=i+(d-i)*r,D=n+(h-n)*r,g||(i=n=0),i+=e[u+3]*1,n+=e[u+4]*1,p.push(v,D,i+(d-i)*r,n+(h-n)*r,i,n),u+=4;else if(f==="T")v=i-p[p.length-4],D=n-p[p.length-3],p.push(i+v,n+D,d+(i+v*1.5-d)*r,h+(n+D*1.5-h)*r,i=d,n=h),u+=2;else if(f==="H")k(i,n,i=d,n),u+=1;else if(f==="V")k(i,n,i,n=d+(g?n-i:0)),u+=1;else if(f==="L"||f==="Z")f==="Z"&&(d=m,h=y,p.closed=!0),(f==="L"||Tr(i-d)>.5||Tr(n-h)>.5)&&(k(i,n,d,h),f==="L"&&(u+=2)),i=d,n=h;else if(f==="A"){if(E=e[u+4],w=e[u+5],v=e[u+6],D=e[u+7],c=7,E.length>1&&(E.length<3?(D=v,v=w,c--):(D=w,v=E.substr(2),c-=2),w=E.charAt(1),E=E.charAt(0)),x=dg(i,n,+e[u+1],+e[u+2],+e[u+3],+E,+w,(g?i:0)+v*1,(g?n:0)+D*1),u+=c,x)for(c=0;c<x.length;c++)p.push(x[c]);i=p[p.length-2],n=p[p.length-1]}else console.log(l);return u=p.length,u<6?(t.pop(),u=0):p[0]===p[u-2]&&p[1]===p[u-1]&&(p.closed=!0),t.totalPoints=a+u,t}function fg(s){ug(s[0])&&(s=[s]);var e="",t=s.length,i,n,r,o;for(n=0;n<t;n++){for(o=s[n],e+="M"+Ti(o[0])+","+Ti(o[1])+" C",i=o.length,r=2;r<i;r++)e+=Ti(o[r++])+","+Ti(o[r++])+" "+Ti(o[r++])+","+Ti(o[r++])+" "+Ti(o[r++])+","+Ti(o[r])+" ";o.closed&&(e+="z")}return e}/*!
 * CustomEase 3.13.0
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var vt,gd,md=function(){return vt||typeof window<"u"&&(vt=window.gsap)&&vt.registerPlugin&&vt},gu=function(){vt=md(),vt?(vt.registerEase("_CE",ar.create),gd=1):console.warn("Please gsap.registerPlugin(CustomEase)")},pg=1e20,Ds=function(e){return~~(e*1e3+(e<0?-.5:.5))/1e3},gg=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/gi,mg=/[cLlsSaAhHvVtTqQ]/g,_g=function(e){var t=e.length,i=pg,n;for(n=1;n<t;n+=6)+e[n]<i&&(i=+e[n]);return i},vg=function(e,t,i){!i&&i!==0&&(i=Math.max(+e[e.length-1],+e[1]));var n=+e[0]*-1,r=-i,o=e.length,a=1/(+e[o-2]+n),l=-t||(Math.abs(+e[o-1]-+e[1])<.01*(+e[o-2]-+e[0])?_g(e)+r:+e[o-1]+r),u;for(l?l=1/l:l=-a,u=0;u<o;u+=2)e[u]=(+e[u]+n)*a,e[u+1]=(+e[u+1]+r)*l},yg=function s(e,t,i,n,r,o,a,l,u,c,d){var h=(e+i)/2,f=(t+n)/2,g=(i+r)/2,p=(n+o)/2,m=(r+a)/2,y=(o+l)/2,v=(h+g)/2,D=(f+p)/2,x=(g+m)/2,C=(p+y)/2,E=(v+x)/2,w=(D+C)/2,k=a-e,$=l-t,P=Math.abs((i-a)*$-(n-l)*k),F=Math.abs((r-a)*$-(o-l)*k),T;return c||(c=[{x:e,y:t},{x:a,y:l}],d=1),c.splice(d||c.length-1,0,{x:E,y:w}),(P+F)*(P+F)>u*(k*k+$*$)&&(T=c.length,s(e,t,h,f,v,D,E,w,u,c,d),s(E,w,x,C,m,y,a,l,u,c,d+1+(c.length-T))),c},ar=(function(){function s(t,i,n){gd||gu(),this.id=t,this.setData(i,n)}var e=s.prototype;return e.setData=function(i,n){n=n||{},i=i||"0,0,1,1";var r=i.match(gg),o=1,a=[],l=[],u=n.precision||1,c=u<=1,d,h,f,g,p,m,y,v,D;if(this.data=i,(mg.test(i)||~i.indexOf("M")&&i.indexOf("C")<0)&&(r=hg(i)[0]),d=r.length,d===4)r.unshift(0,0),r.push(1,1),d=8;else if((d-2)%6)throw"Invalid CustomEase";for((+r[0]!=0||+r[d-2]!=1)&&vg(r,n.height,n.originY),this.segment=r,g=2;g<d;g+=6)h={x:+r[g-2],y:+r[g-1]},f={x:+r[g+4],y:+r[g+5]},a.push(h,f),yg(h.x,h.y,+r[g],+r[g+1],+r[g+2],+r[g+3],f.x,f.y,1/(u*2e5),a,a.length-1);for(d=a.length,g=0;g<d;g++)y=a[g],v=a[g-1]||y,(y.x>v.x||v.y!==y.y&&v.x===y.x||y===v)&&y.x<=1?(v.cx=y.x-v.x,v.cy=y.y-v.y,v.n=y,v.nx=y.x,c&&g>1&&Math.abs(v.cy/v.cx-a[g-2].cy/a[g-2].cx)>2&&(c=0),v.cx<o&&(v.cx?o=v.cx:(v.cx=.001,g===d-1&&(v.x-=.001,o=Math.min(o,.001),c=0)))):(a.splice(g--,1),d--);if(d=1/o+1|0,p=1/d,m=0,y=a[0],c){for(g=0;g<d;g++)D=g*p,y.nx<D&&(y=a[++m]),h=y.y+(D-y.x)/y.cx*y.cy,l[g]={x:D,cx:p,y:h,cy:0,nx:9},g&&(l[g-1].cy=h-l[g-1].y);m=a[a.length-1],l[d-1].cy=m.y-h,l[d-1].cx=m.x-l[l.length-1].x}else{for(g=0;g<d;g++)y.nx<g*p&&(y=a[++m]),l[g]=y;m<a.length-1&&(l[g-1]=a[a.length-2])}return this.ease=function(x){var C=l[x*d|0]||l[d-1];return C.nx<x&&(C=C.n),C.y+(x-C.x)/C.cx*C.cy},this.ease.custom=this,this.id&&vt&&vt.registerEase(this.id,this.ease),this},e.getSVGData=function(i){return s.getSVGData(this,i)},s.create=function(i,n,r){return new s(i,n,r).ease},s.register=function(i){vt=i,gu()},s.get=function(i){return vt.parseEase(i)},s.getSVGData=function(i,n){n=n||{};var r=n.width||100,o=n.height||100,a=n.x||0,l=(n.y||0)+o,u=vt.utils.toArray(n.path)[0],c,d,h,f,g,p,m,y,v,D;if(n.invert&&(o=-o,l=0),typeof i=="string"&&(i=vt.parseEase(i)),i.custom&&(i=i.custom),i instanceof s)c=fg(cg([i.segment],r,0,0,-o,a,l));else{for(c=[a,l],m=Math.max(5,(n.precision||1)*200),f=1/m,m+=2,y=5/m,v=Ds(a+f*r),D=Ds(l+i(f)*-o),d=(D-l)/(v-a),h=2;h<m;h++)g=Ds(a+h*f*r),p=Ds(l+i(h*f)*-o),(Math.abs((p-D)/(g-v)-d)>y||h===m-1)&&(c.push(v,D),d=(p-D)/(g-v)),v=g,D=p;c="M"+c.join(",")}return u&&u.setAttribute("d",c),c},s})();ar.version="3.13.0";ar.headless=!0;md()&&vt.registerPlugin(ar);function bg(s,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(s,i.key,i)}}function xg(s,e,t){return e&&bg(s.prototype,e),s}/*!
 * Observer 3.13.0
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Je,Ns,Ft,Mi,Ri,Vn,_d,tn,Or,vd,vi,Kt,yd,bd=function(){return Je||typeof window<"u"&&(Je=window.gsap)&&Je.registerPlugin&&Je},xd=1,Nn=[],te=[],li=[],Fr=Date.now,ma=function(e,t){return t},Dg=function(){var e=Or.core,t=e.bridge||{},i=e._scrollers,n=e._proxies;i.push.apply(i,te),n.push.apply(n,li),te=i,li=n,ma=function(o,a){return t[o](a)}},Ni=function(e,t){return~li.indexOf(e)&&li[li.indexOf(e)+1][t]},Ar=function(e){return!!~vd.indexOf(e)},ut=function(e,t,i,n,r){return e.addEventListener(t,i,{passive:n!==!1,capture:!!r})},lt=function(e,t,i,n){return e.removeEventListener(t,i,!!n)},ws="scrollLeft",Cs="scrollTop",_a=function(){return vi&&vi.isPressed||te.cache++},ao=function(e,t){var i=function n(r){if(r||r===0){xd&&(Ft.history.scrollRestoration="manual");var o=vi&&vi.isPressed;r=n.v=Math.round(r)||(vi&&vi.iOS?1:0),e(r),n.cacheID=te.cache,o&&ma("ss",r)}else(t||te.cache!==n.cacheID||ma("ref"))&&(n.cacheID=te.cache,n.v=e());return n.v+n.offset};return i.offset=0,e&&i},pt={s:ws,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:ao(function(s){return arguments.length?Ft.scrollTo(s,Ne.sc()):Ft.pageXOffset||Mi[ws]||Ri[ws]||Vn[ws]||0})},Ne={s:Cs,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:pt,sc:ao(function(s){return arguments.length?Ft.scrollTo(pt.sc(),s):Ft.pageYOffset||Mi[Cs]||Ri[Cs]||Vn[Cs]||0})},_t=function(e,t){return(t&&t._ctx&&t._ctx.selector||Je.utils.toArray)(e)[0]||(typeof e=="string"&&Je.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},wg=function(e,t){for(var i=t.length;i--;)if(t[i]===e||t[i].contains(e))return!0;return!1},Vi=function(e,t){var i=t.s,n=t.sc;Ar(e)&&(e=Mi.scrollingElement||Ri);var r=te.indexOf(e),o=n===Ne.sc?1:2;!~r&&(r=te.push(e)-1),te[r+o]||ut(e,"scroll",_a);var a=te[r+o],l=a||(te[r+o]=ao(Ni(e,i),!0)||(Ar(e)?n:ao(function(u){return arguments.length?e[i]=u:e[i]})));return l.target=e,a||(l.smooth=Je.getProperty(e,"scrollBehavior")==="smooth"),l},va=function(e,t,i){var n=e,r=e,o=Fr(),a=o,l=t||50,u=Math.max(500,l*3),c=function(g,p){var m=Fr();p||m-o>l?(r=n,n=g,a=o,o=m):i?n+=g:n=r+(g-r)/(m-a)*(o-a)},d=function(){r=n=i?0:n,a=o=0},h=function(g){var p=a,m=r,y=Fr();return(g||g===0)&&g!==n&&c(g),o===a||y-a>u?0:(n+(i?m:-m))/((i?y:o)-p)*1e3};return{update:c,reset:d,getVelocity:h}},gr=function(e,t){return t&&!e._gsapAllow&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},mu=function(e){var t=Math.max.apply(Math,e),i=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(i)?t:i},Dd=function(){Or=Je.core.globals().ScrollTrigger,Or&&Or.core&&Dg()},wd=function(e){return Je=e||bd(),!Ns&&Je&&typeof document<"u"&&document.body&&(Ft=window,Mi=document,Ri=Mi.documentElement,Vn=Mi.body,vd=[Ft,Mi,Ri,Vn],Je.utils.clamp,yd=Je.core.context||function(){},tn="onpointerenter"in Vn?"pointer":"mouse",_d=Fe.isTouch=Ft.matchMedia&&Ft.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in Ft||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,Kt=Fe.eventTypes=("ontouchstart"in Ri?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in Ri?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return xd=0},500),Dd(),Ns=1),Ns};pt.op=Ne;te.cache=0;var Fe=(function(){function s(t){this.init(t)}var e=s.prototype;return e.init=function(i){Ns||wd(Je)||console.warn("Please gsap.registerPlugin(Observer)"),Or||Dd();var n=i.tolerance,r=i.dragMinimum,o=i.type,a=i.target,l=i.lineHeight,u=i.debounce,c=i.preventDefault,d=i.onStop,h=i.onStopDelay,f=i.ignore,g=i.wheelSpeed,p=i.event,m=i.onDragStart,y=i.onDragEnd,v=i.onDrag,D=i.onPress,x=i.onRelease,C=i.onRight,E=i.onLeft,w=i.onUp,k=i.onDown,$=i.onChangeX,P=i.onChangeY,F=i.onChange,T=i.onToggleX,H=i.onToggleY,R=i.onHover,A=i.onHoverEnd,I=i.onMove,M=i.ignoreCheck,N=i.isNormalizer,W=i.onGestureStart,b=i.onGestureEnd,q=i.onWheel,ce=i.onEnable,me=i.onDisable,de=i.onClick,De=i.scrollSpeed,Be=i.capture,we=i.allowClicks,Xe=i.lockAxis,He=i.onLockAxis;this.target=a=_t(a)||Ri,this.vars=i,f&&(f=Je.utils.toArray(f)),n=n||1e-9,r=r||0,g=g||1,De=De||1,o=o||"wheel,touch,pointer",u=u!==!1,l||(l=parseFloat(Ft.getComputedStyle(Vn).lineHeight)||22);var Ce,at,gt,ae,Pe,mt,Ct,S=this,St=0,ci=0,Ci=i.passive||!c&&i.passive!==!1,Se=Vi(a,pt),di=Vi(a,Ne),Si=Se(),Wi=di(),Ue=~o.indexOf("touch")&&!~o.indexOf("pointer")&&Kt[0]==="pointerdown",Ei=Ar(a),ke=a.ownerDocument||Mi,qt=[0,0,0],Rt=[0,0,0],hi=0,lr=function(){return hi=Fr()},Ae=function(V,le){return(S.event=V)&&f&&wg(V.target,f)||le&&Ue&&V.pointerType!=="touch"||M&&M(V,le)},gs=function(){S._vx.reset(),S._vy.reset(),at.pause(),d&&d(S)},fi=function(){var V=S.deltaX=mu(qt),le=S.deltaY=mu(Rt),O=Math.abs(V)>=n,X=Math.abs(le)>=n;F&&(O||X)&&F(S,V,le,qt,Rt),O&&(C&&S.deltaX>0&&C(S),E&&S.deltaX<0&&E(S),$&&$(S),T&&S.deltaX<0!=St<0&&T(S),St=S.deltaX,qt[0]=qt[1]=qt[2]=0),X&&(k&&S.deltaY>0&&k(S),w&&S.deltaY<0&&w(S),P&&P(S),H&&S.deltaY<0!=ci<0&&H(S),ci=S.deltaY,Rt[0]=Rt[1]=Rt[2]=0),(ae||gt)&&(I&&I(S),gt&&(m&&gt===1&&m(S),v&&v(S),gt=0),ae=!1),mt&&!(mt=!1)&&He&&He(S),Pe&&(q(S),Pe=!1),Ce=0},Sn=function(V,le,O){qt[O]+=V,Rt[O]+=le,S._vx.update(V),S._vy.update(le),u?Ce||(Ce=requestAnimationFrame(fi)):fi()},En=function(V,le){Xe&&!Ct&&(S.axis=Ct=Math.abs(V)>Math.abs(le)?"x":"y",mt=!0),Ct!=="y"&&(qt[2]+=V,S._vx.update(V,!0)),Ct!=="x"&&(Rt[2]+=le,S._vy.update(le,!0)),u?Ce||(Ce=requestAnimationFrame(fi)):fi()},$i=function(V){if(!Ae(V,1)){V=gr(V,c);var le=V.clientX,O=V.clientY,X=le-S.x,B=O-S.y,G=S.isDragging;S.x=le,S.y=O,(G||(X||B)&&(Math.abs(S.startX-le)>=r||Math.abs(S.startY-O)>=r))&&(gt=G?2:1,G||(S.isDragging=!0),En(X,B))}},Yi=S.onPress=function(K){Ae(K,1)||K&&K.button||(S.axis=Ct=null,at.pause(),S.isPressed=!0,K=gr(K),St=ci=0,S.startX=S.x=K.clientX,S.startY=S.y=K.clientY,S._vx.reset(),S._vy.reset(),ut(N?a:ke,Kt[1],$i,Ci,!0),S.deltaX=S.deltaY=0,D&&D(S))},ie=S.onRelease=function(K){if(!Ae(K,1)){lt(N?a:ke,Kt[1],$i,!0);var V=!isNaN(S.y-S.startY),le=S.isDragging,O=le&&(Math.abs(S.x-S.startX)>3||Math.abs(S.y-S.startY)>3),X=gr(K);!O&&V&&(S._vx.reset(),S._vy.reset(),c&&we&&Je.delayedCall(.08,function(){if(Fr()-hi>300&&!K.defaultPrevented){if(K.target.click)K.target.click();else if(ke.createEvent){var B=ke.createEvent("MouseEvents");B.initMouseEvent("click",!0,!0,Ft,1,X.screenX,X.screenY,X.clientX,X.clientY,!1,!1,!1,!1,0,null),K.target.dispatchEvent(B)}}})),S.isDragging=S.isGesturing=S.isPressed=!1,d&&le&&!N&&at.restart(!0),gt&&fi(),y&&le&&y(S),x&&x(S,O)}},Xi=function(V){return V.touches&&V.touches.length>1&&(S.isGesturing=!0)&&W(V,S.isDragging)},Wt=function(){return(S.isGesturing=!1)||b(S)},Yt=function(V){if(!Ae(V)){var le=Se(),O=di();Sn((le-Si)*De,(O-Wi)*De,1),Si=le,Wi=O,d&&at.restart(!0)}},Xt=function(V){if(!Ae(V)){V=gr(V,c),q&&(Pe=!0);var le=(V.deltaMode===1?l:V.deltaMode===2?Ft.innerHeight:1)*g;Sn(V.deltaX*le,V.deltaY*le,0),d&&!N&&at.restart(!0)}},Gi=function(V){if(!Ae(V)){var le=V.clientX,O=V.clientY,X=le-S.x,B=O-S.y;S.x=le,S.y=O,ae=!0,d&&at.restart(!0),(X||B)&&En(X,B)}},$n=function(V){S.event=V,R(S)},pi=function(V){S.event=V,A(S)},ur=function(V){return Ae(V)||gr(V,c)&&de(S)};at=S._dc=Je.delayedCall(h||.25,gs).pause(),S.deltaX=S.deltaY=0,S._vx=va(0,50,!0),S._vy=va(0,50,!0),S.scrollX=Se,S.scrollY=di,S.isDragging=S.isGesturing=S.isPressed=!1,yd(this),S.enable=function(K){return S.isEnabled||(ut(Ei?ke:a,"scroll",_a),o.indexOf("scroll")>=0&&ut(Ei?ke:a,"scroll",Yt,Ci,Be),o.indexOf("wheel")>=0&&ut(a,"wheel",Xt,Ci,Be),(o.indexOf("touch")>=0&&_d||o.indexOf("pointer")>=0)&&(ut(a,Kt[0],Yi,Ci,Be),ut(ke,Kt[2],ie),ut(ke,Kt[3],ie),we&&ut(a,"click",lr,!0,!0),de&&ut(a,"click",ur),W&&ut(ke,"gesturestart",Xi),b&&ut(ke,"gestureend",Wt),R&&ut(a,tn+"enter",$n),A&&ut(a,tn+"leave",pi),I&&ut(a,tn+"move",Gi)),S.isEnabled=!0,S.isDragging=S.isGesturing=S.isPressed=ae=gt=!1,S._vx.reset(),S._vy.reset(),Si=Se(),Wi=di(),K&&K.type&&Yi(K),ce&&ce(S)),S},S.disable=function(){S.isEnabled&&(Nn.filter(function(K){return K!==S&&Ar(K.target)}).length||lt(Ei?ke:a,"scroll",_a),S.isPressed&&(S._vx.reset(),S._vy.reset(),lt(N?a:ke,Kt[1],$i,!0)),lt(Ei?ke:a,"scroll",Yt,Be),lt(a,"wheel",Xt,Be),lt(a,Kt[0],Yi,Be),lt(ke,Kt[2],ie),lt(ke,Kt[3],ie),lt(a,"click",lr,!0),lt(a,"click",ur),lt(ke,"gesturestart",Xi),lt(ke,"gestureend",Wt),lt(a,tn+"enter",$n),lt(a,tn+"leave",pi),lt(a,tn+"move",Gi),S.isEnabled=S.isPressed=S.isDragging=!1,me&&me(S))},S.kill=S.revert=function(){S.disable();var K=Nn.indexOf(S);K>=0&&Nn.splice(K,1),vi===S&&(vi=0)},Nn.push(S),N&&Ar(a)&&(vi=S),S.enable(p)},xg(s,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),s})();Fe.version="3.13.0";Fe.create=function(s){return new Fe(s)};Fe.register=wd;Fe.getAll=function(){return Nn.slice()};Fe.getById=function(s){return Nn.filter(function(e){return e.vars.id===s})[0]};bd()&&Je.registerPlugin(Fe);/*!
 * ScrollTrigger 3.13.0
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var L,zn,ee,ge,Tt,ue,gl,lo,Jr,Lr,xr,Ss,it,wo,ya,dt,_u,vu,Mn,Cd,No,Sd,ct,ba,Ed,$d,Oi,xa,ml,qn,_l,uo,Da,Bo,Es=1,nt=Date.now,Ho=nt(),Vt=0,Dr=0,yu=function(e,t,i){var n=Pt(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return i["_"+t+"Clamp"]=n,n?e.substr(6,e.length-7):e},bu=function(e,t){return t&&(!Pt(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},Cg=function s(){return Dr&&requestAnimationFrame(s)},xu=function(){return wo=1},Du=function(){return wo=0},ii=function(e){return e},wr=function(e){return Math.round(e*1e5)/1e5||0},Pd=function(){return typeof window<"u"},kd=function(){return L||Pd()&&(L=window.gsap)&&L.registerPlugin&&L},vn=function(e){return!!~gl.indexOf(e)},Td=function(e){return(e==="Height"?_l:ee["inner"+e])||Tt["client"+e]||ue["client"+e]},Od=function(e){return Ni(e,"getBoundingClientRect")||(vn(e)?function(){return qs.width=ee.innerWidth,qs.height=_l,qs}:function(){return _i(e)})},Sg=function(e,t,i){var n=i.d,r=i.d2,o=i.a;return(o=Ni(e,"getBoundingClientRect"))?function(){return o()[n]}:function(){return(t?Td(r):e["client"+r])||0}},Eg=function(e,t){return!t||~li.indexOf(e)?Od(e):function(){return qs}},oi=function(e,t){var i=t.s,n=t.d2,r=t.d,o=t.a;return Math.max(0,(i="scroll"+n)&&(o=Ni(e,i))?o()-Od(e)()[r]:vn(e)?(Tt[i]||ue[i])-Td(n):e[i]-e["offset"+n])},$s=function(e,t){for(var i=0;i<Mn.length;i+=3)(!t||~t.indexOf(Mn[i+1]))&&e(Mn[i],Mn[i+1],Mn[i+2])},Pt=function(e){return typeof e=="string"},st=function(e){return typeof e=="function"},Cr=function(e){return typeof e=="number"},nn=function(e){return typeof e=="object"},mr=function(e,t,i){return e&&e.progress(t?0:1)&&i&&e.pause()},Uo=function(e,t){if(e.enabled){var i=e._ctx?e._ctx.add(function(){return t(e)}):t(e);i&&i.totalTime&&(e.callbackAnimation=i)}},An=Math.abs,Fd="left",Ad="top",vl="right",yl="bottom",fn="width",pn="height",zr="Right",Mr="Left",Rr="Top",jr="Bottom",Le="padding",It="margin",Qn="Width",bl="Height",Ie="px",Nt=function(e){return ee.getComputedStyle(e)},$g=function(e){var t=Nt(e).position;e.style.position=t==="absolute"||t==="fixed"?t:"relative"},wu=function(e,t){for(var i in t)i in e||(e[i]=t[i]);return e},_i=function(e,t){var i=t&&Nt(e)[ya]!=="matrix(1, 0, 0, 1, 0, 0)"&&L.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),n=e.getBoundingClientRect();return i&&i.progress(0).kill(),n},co=function(e,t){var i=t.d2;return e["offset"+i]||e["client"+i]||0},Ld=function(e){var t=[],i=e.labels,n=e.duration(),r;for(r in i)t.push(i[r]/n);return t},Pg=function(e){return function(t){return L.utils.snap(Ld(e),t)}},xl=function(e){var t=L.utils.snap(e),i=Array.isArray(e)&&e.slice(0).sort(function(n,r){return n-r});return i?function(n,r,o){o===void 0&&(o=.001);var a;if(!r)return t(n);if(r>0){for(n-=o,a=0;a<i.length;a++)if(i[a]>=n)return i[a];return i[a-1]}else for(a=i.length,n+=o;a--;)if(i[a]<=n)return i[a];return i[0]}:function(n,r,o){o===void 0&&(o=.001);var a=t(n);return!r||Math.abs(a-n)<o||a-n<0==r<0?a:t(r<0?n-e:n+e)}},kg=function(e){return function(t,i){return xl(Ld(e))(t,i.direction)}},Ps=function(e,t,i,n){return i.split(",").forEach(function(r){return e(t,r,n)})},We=function(e,t,i,n,r){return e.addEventListener(t,i,{passive:!n,capture:!!r})},qe=function(e,t,i,n){return e.removeEventListener(t,i,!!n)},ks=function(e,t,i){i=i&&i.wheelHandler,i&&(e(t,"wheel",i),e(t,"touchmove",i))},Cu={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},Ts={toggleActions:"play",anticipatePin:0},ho={top:0,left:0,center:.5,bottom:1,right:1},Bs=function(e,t){if(Pt(e)){var i=e.indexOf("="),n=~i?+(e.charAt(i-1)+1)*parseFloat(e.substr(i+1)):0;~i&&(e.indexOf("%")>i&&(n*=t/100),e=e.substr(0,i-1)),e=n+(e in ho?ho[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},Os=function(e,t,i,n,r,o,a,l){var u=r.startColor,c=r.endColor,d=r.fontSize,h=r.indent,f=r.fontWeight,g=ge.createElement("div"),p=vn(i)||Ni(i,"pinType")==="fixed",m=e.indexOf("scroller")!==-1,y=p?ue:i,v=e.indexOf("start")!==-1,D=v?u:c,x="border-color:"+D+";font-size:"+d+";color:"+D+";font-weight:"+f+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return x+="position:"+((m||l)&&p?"fixed;":"absolute;"),(m||l||!p)&&(x+=(n===Ne?vl:yl)+":"+(o+parseFloat(h))+"px;"),a&&(x+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),g._isStart=v,g.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),g.style.cssText=x,g.innerText=t||t===0?e+"-"+t:e,y.children[0]?y.insertBefore(g,y.children[0]):y.appendChild(g),g._offset=g["offset"+n.op.d2],Hs(g,0,n,v),g},Hs=function(e,t,i,n){var r={display:"block"},o=i[n?"os2":"p2"],a=i[n?"p2":"os2"];e._isFlipped=n,r[i.a+"Percent"]=n?-100:0,r[i.a]=n?"1px":0,r["border"+o+Qn]=1,r["border"+a+Qn]=0,r[i.p]=t+"px",L.set(e,r)},J=[],wa={},Zr,Su=function(){return nt()-Vt>34&&(Zr||(Zr=requestAnimationFrame(bi)))},Ln=function(){(!ct||!ct.isPressed||ct.startX>ue.clientWidth)&&(te.cache++,ct?Zr||(Zr=requestAnimationFrame(bi)):bi(),Vt||bn("scrollStart"),Vt=nt())},Vo=function(){$d=ee.innerWidth,Ed=ee.innerHeight},Sr=function(e){te.cache++,(e===!0||!it&&!Sd&&!ge.fullscreenElement&&!ge.webkitFullscreenElement&&(!ba||$d!==ee.innerWidth||Math.abs(ee.innerHeight-Ed)>ee.innerHeight*.25))&&lo.restart(!0)},yn={},Tg=[],zd=function s(){return qe(Z,"scrollEnd",s)||on(!0)},bn=function(e){return yn[e]&&yn[e].map(function(t){return t()})||Tg},$t=[],Md=function(e){for(var t=0;t<$t.length;t+=5)(!e||$t[t+4]&&$t[t+4].query===e)&&($t[t].style.cssText=$t[t+1],$t[t].getBBox&&$t[t].setAttribute("transform",$t[t+2]||""),$t[t+3].uncache=1)},Dl=function(e,t){var i;for(dt=0;dt<J.length;dt++)i=J[dt],i&&(!t||i._ctx===t)&&(e?i.kill(1):i.revert(!0,!0));uo=!0,t&&Md(t),t||bn("revert")},Rd=function(e,t){te.cache++,(t||!ht)&&te.forEach(function(i){return st(i)&&i.cacheID++&&(i.rec=0)}),Pt(e)&&(ee.history.scrollRestoration=ml=e)},ht,gn=0,Eu,Og=function(){if(Eu!==gn){var e=Eu=gn;requestAnimationFrame(function(){return e===gn&&on(!0)})}},jd=function(){ue.appendChild(qn),_l=!ct&&qn.offsetHeight||ee.innerHeight,ue.removeChild(qn)},$u=function(e){return Jr(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(t){return t.style.display=e?"none":"block"})},on=function(e,t){if(Tt=ge.documentElement,ue=ge.body,gl=[ee,ge,Tt,ue],Vt&&!e&&!uo){We(Z,"scrollEnd",zd);return}jd(),ht=Z.isRefreshing=!0,te.forEach(function(n){return st(n)&&++n.cacheID&&(n.rec=n())});var i=bn("refreshInit");Cd&&Z.sort(),t||Dl(),te.forEach(function(n){st(n)&&(n.smooth&&(n.target.style.scrollBehavior="auto"),n(0))}),J.slice(0).forEach(function(n){return n.refresh()}),uo=!1,J.forEach(function(n){if(n._subPinOffset&&n.pin){var r=n.vars.horizontal?"offsetWidth":"offsetHeight",o=n.pin[r];n.revert(!0,1),n.adjustPinSpacing(n.pin[r]-o),n.refresh()}}),Da=1,$u(!0),J.forEach(function(n){var r=oi(n.scroller,n._dir),o=n.vars.end==="max"||n._endClamp&&n.end>r,a=n._startClamp&&n.start>=r;(o||a)&&n.setPositions(a?r-1:n.start,o?Math.max(a?r:n.start+1,r):n.end,!0)}),$u(!1),Da=0,i.forEach(function(n){return n&&n.render&&n.render(-1)}),te.forEach(function(n){st(n)&&(n.smooth&&requestAnimationFrame(function(){return n.target.style.scrollBehavior="smooth"}),n.rec&&n(n.rec))}),Rd(ml,1),lo.pause(),gn++,ht=2,bi(2),J.forEach(function(n){return st(n.vars.onRefresh)&&n.vars.onRefresh(n)}),ht=Z.isRefreshing=!1,bn("refresh")},Ca=0,Us=1,Ir,bi=function(e){if(e===2||!ht&&!uo){Z.isUpdating=!0,Ir&&Ir.update(0);var t=J.length,i=nt(),n=i-Ho>=50,r=t&&J[0].scroll();if(Us=Ca>r?-1:1,ht||(Ca=r),n&&(Vt&&!wo&&i-Vt>200&&(Vt=0,bn("scrollEnd")),xr=Ho,Ho=i),Us<0){for(dt=t;dt-- >0;)J[dt]&&J[dt].update(0,n);Us=1}else for(dt=0;dt<t;dt++)J[dt]&&J[dt].update(0,n);Z.isUpdating=!1}Zr=0},Sa=[Fd,Ad,yl,vl,It+jr,It+zr,It+Rr,It+Mr,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],Vs=Sa.concat([fn,pn,"boxSizing","max"+Qn,"max"+bl,"position",It,Le,Le+Rr,Le+zr,Le+jr,Le+Mr]),Fg=function(e,t,i){Wn(i);var n=e._gsap;if(n.spacerIsNative)Wn(n.spacerState);else if(e._gsap.swappedIn){var r=t.parentNode;r&&(r.insertBefore(e,t),r.removeChild(t))}e._gsap.swappedIn=!1},qo=function(e,t,i,n){if(!e._gsap.swappedIn){for(var r=Sa.length,o=t.style,a=e.style,l;r--;)l=Sa[r],o[l]=i[l];o.position=i.position==="absolute"?"absolute":"relative",i.display==="inline"&&(o.display="inline-block"),a[yl]=a[vl]="auto",o.flexBasis=i.flexBasis||"auto",o.overflow="visible",o.boxSizing="border-box",o[fn]=co(e,pt)+Ie,o[pn]=co(e,Ne)+Ie,o[Le]=a[It]=a[Ad]=a[Fd]="0",Wn(n),a[fn]=a["max"+Qn]=i[fn],a[pn]=a["max"+bl]=i[pn],a[Le]=i[Le],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},Ag=/([A-Z])/g,Wn=function(e){if(e){var t=e.t.style,i=e.length,n=0,r,o;for((e.t._gsap||L.core.getCache(e.t)).uncache=1;n<i;n+=2)o=e[n+1],r=e[n],o?t[r]=o:t[r]&&t.removeProperty(r.replace(Ag,"-$1").toLowerCase())}},Fs=function(e){for(var t=Vs.length,i=e.style,n=[],r=0;r<t;r++)n.push(Vs[r],i[Vs[r]]);return n.t=e,n},Lg=function(e,t,i){for(var n=[],r=e.length,o=i?8:0,a;o<r;o+=2)a=e[o],n.push(a,a in t?t[a]:e[o+1]);return n.t=e.t,n},qs={left:0,top:0},Pu=function(e,t,i,n,r,o,a,l,u,c,d,h,f,g){st(e)&&(e=e(l)),Pt(e)&&e.substr(0,3)==="max"&&(e=h+(e.charAt(4)==="="?Bs("0"+e.substr(3),i):0));var p=f?f.time():0,m,y,v;if(f&&f.seek(0),isNaN(e)||(e=+e),Cr(e))f&&(e=L.utils.mapRange(f.scrollTrigger.start,f.scrollTrigger.end,0,h,e)),a&&Hs(a,i,n,!0);else{st(t)&&(t=t(l));var D=(e||"0").split(" "),x,C,E,w;v=_t(t,l)||ue,x=_i(v)||{},(!x||!x.left&&!x.top)&&Nt(v).display==="none"&&(w=v.style.display,v.style.display="block",x=_i(v),w?v.style.display=w:v.style.removeProperty("display")),C=Bs(D[0],x[n.d]),E=Bs(D[1]||"0",i),e=x[n.p]-u[n.p]-c+C+r-E,a&&Hs(a,E,n,i-E<20||a._isStart&&E>20),i-=i-E}if(g&&(l[g]=e||-.001,e<0&&(e=0)),o){var k=e+i,$=o._isStart;m="scroll"+n.d2,Hs(o,k,n,$&&k>20||!$&&(d?Math.max(ue[m],Tt[m]):o.parentNode[m])<=k+1),d&&(u=_i(a),d&&(o.style[n.op.p]=u[n.op.p]-n.op.m-o._offset+Ie))}return f&&v&&(m=_i(v),f.seek(h),y=_i(v),f._caScrollDist=m[n.p]-y[n.p],e=e/f._caScrollDist*h),f&&f.seek(p),f?e:Math.round(e)},zg=/(webkit|moz|length|cssText|inset)/i,ku=function(e,t,i,n){if(e.parentNode!==t){var r=e.style,o,a;if(t===ue){e._stOrig=r.cssText,a=Nt(e);for(o in a)!+o&&!zg.test(o)&&a[o]&&typeof r[o]=="string"&&o!=="0"&&(r[o]=a[o]);r.top=i,r.left=n}else r.cssText=e._stOrig;L.core.getCache(e).uncache=1,t.appendChild(e)}},Id=function(e,t,i){var n=t,r=n;return function(o){var a=Math.round(e());return a!==n&&a!==r&&Math.abs(a-n)>3&&Math.abs(a-r)>3&&(o=a,i&&i()),r=n,n=Math.round(o),n}},As=function(e,t,i){var n={};n[t.p]="+="+i,L.set(e,n)},Tu=function(e,t){var i=Vi(e,t),n="_scroll"+t.p2,r=function o(a,l,u,c,d){var h=o.tween,f=l.onComplete,g={};u=u||i();var p=Id(i,u,function(){h.kill(),o.tween=0});return d=c&&d||0,c=c||a-u,h&&h.kill(),l[n]=a,l.inherit=!1,l.modifiers=g,g[n]=function(){return p(u+c*h.ratio+d*h.ratio*h.ratio)},l.onUpdate=function(){te.cache++,o.tween&&bi()},l.onComplete=function(){o.tween=0,f&&f.call(h)},h=o.tween=L.to(e,l),h};return e[n]=i,i.wheelHandler=function(){return r.tween&&r.tween.kill()&&(r.tween=0)},We(e,"wheel",i.wheelHandler),Z.isTouch&&We(e,"touchmove",i.wheelHandler),r},Z=(function(){function s(t,i){zn||s.register(L)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),xa(this),this.init(t,i)}var e=s.prototype;return e.init=function(i,n){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!Dr){this.update=this.refresh=this.kill=ii;return}i=wu(Pt(i)||Cr(i)||i.nodeType?{trigger:i}:i,Ts);var r=i,o=r.onUpdate,a=r.toggleClass,l=r.id,u=r.onToggle,c=r.onRefresh,d=r.scrub,h=r.trigger,f=r.pin,g=r.pinSpacing,p=r.invalidateOnRefresh,m=r.anticipatePin,y=r.onScrubComplete,v=r.onSnapComplete,D=r.once,x=r.snap,C=r.pinReparent,E=r.pinSpacer,w=r.containerAnimation,k=r.fastScrollEnd,$=r.preventOverlaps,P=i.horizontal||i.containerAnimation&&i.horizontal!==!1?pt:Ne,F=!d&&d!==0,T=_t(i.scroller||ee),H=L.core.getCache(T),R=vn(T),A=("pinType"in i?i.pinType:Ni(T,"pinType")||R&&"fixed")==="fixed",I=[i.onEnter,i.onLeave,i.onEnterBack,i.onLeaveBack],M=F&&i.toggleActions.split(" "),N="markers"in i?i.markers:Ts.markers,W=R?0:parseFloat(Nt(T)["border"+P.p2+Qn])||0,b=this,q=i.onRefreshInit&&function(){return i.onRefreshInit(b)},ce=Sg(T,R,P),me=Eg(T,R),de=0,De=0,Be=0,we=Vi(T,P),Xe,He,Ce,at,gt,ae,Pe,mt,Ct,S,St,ci,Ci,Se,di,Si,Wi,Ue,Ei,ke,qt,Rt,hi,lr,Ae,gs,fi,Sn,En,$i,Yi,ie,Xi,Wt,Yt,Xt,Gi,$n,pi;if(b._startClamp=b._endClamp=!1,b._dir=P,m*=45,b.scroller=T,b.scroll=w?w.time.bind(w):we,at=we(),b.vars=i,n=n||i.animation,"refreshPriority"in i&&(Cd=1,i.refreshPriority===-9999&&(Ir=b)),H.tweenScroll=H.tweenScroll||{top:Tu(T,Ne),left:Tu(T,pt)},b.tweenTo=Xe=H.tweenScroll[P.p],b.scrubDuration=function(O){Xi=Cr(O)&&O,Xi?ie?ie.duration(O):ie=L.to(n,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:Xi,paused:!0,onComplete:function(){return y&&y(b)}}):(ie&&ie.progress(1).kill(),ie=0)},n&&(n.vars.lazy=!1,n._initted&&!b.isReverted||n.vars.immediateRender!==!1&&i.immediateRender!==!1&&n.duration()&&n.render(0,!0,!0),b.animation=n.pause(),n.scrollTrigger=b,b.scrubDuration(d),$i=0,l||(l=n.vars.id)),x&&((!nn(x)||x.push)&&(x={snapTo:x}),"scrollBehavior"in ue.style&&L.set(R?[ue,Tt]:T,{scrollBehavior:"auto"}),te.forEach(function(O){return st(O)&&O.target===(R?ge.scrollingElement||Tt:T)&&(O.smooth=!1)}),Ce=st(x.snapTo)?x.snapTo:x.snapTo==="labels"?Pg(n):x.snapTo==="labelsDirectional"?kg(n):x.directional!==!1?function(O,X){return xl(x.snapTo)(O,nt()-De<500?0:X.direction)}:L.utils.snap(x.snapTo),Wt=x.duration||{min:.1,max:2},Wt=nn(Wt)?Lr(Wt.min,Wt.max):Lr(Wt,Wt),Yt=L.delayedCall(x.delay||Xi/2||.1,function(){var O=we(),X=nt()-De<500,B=Xe.tween;if((X||Math.abs(b.getVelocity())<10)&&!B&&!wo&&de!==O){var G=(O-ae)/Se,Ve=n&&!F?n.totalProgress():G,re=X?0:(Ve-Yi)/(nt()-xr)*1e3||0,Te=L.utils.clamp(-G,1-G,An(re/2)*re/.185),Qe=G+(x.inertia===!1?0:Te),Ee,_e,he=x,Gt=he.onStart,ye=he.onInterrupt,Et=he.onComplete;if(Ee=Ce(Qe,b),Cr(Ee)||(Ee=Qe),_e=Math.max(0,Math.round(ae+Ee*Se)),O<=Pe&&O>=ae&&_e!==O){if(B&&!B._initted&&B.data<=An(_e-O))return;x.inertia===!1&&(Te=Ee-G),Xe(_e,{duration:Wt(An(Math.max(An(Qe-Ve),An(Ee-Ve))*.185/re/.05||0)),ease:x.ease||"power3",data:An(_e-O),onInterrupt:function(){return Yt.restart(!0)&&ye&&ye(b)},onComplete:function(){b.update(),de=we(),n&&!F&&(ie?ie.resetTo("totalProgress",Ee,n._tTime/n._tDur):n.progress(Ee)),$i=Yi=n&&!F?n.totalProgress():b.progress,v&&v(b),Et&&Et(b)}},O,Te*Se,_e-O-Te*Se),Gt&&Gt(b,Xe.tween)}}else b.isActive&&de!==O&&Yt.restart(!0)}).pause()),l&&(wa[l]=b),h=b.trigger=_t(h||f!==!0&&f),pi=h&&h._gsap&&h._gsap.stRevert,pi&&(pi=pi(b)),f=f===!0?h:_t(f),Pt(a)&&(a={targets:h,className:a}),f&&(g===!1||g===It||(g=!g&&f.parentNode&&f.parentNode.style&&Nt(f.parentNode).display==="flex"?!1:Le),b.pin=f,He=L.core.getCache(f),He.spacer?di=He.pinState:(E&&(E=_t(E),E&&!E.nodeType&&(E=E.current||E.nativeElement),He.spacerIsNative=!!E,E&&(He.spacerState=Fs(E))),He.spacer=Ue=E||ge.createElement("div"),Ue.classList.add("pin-spacer"),l&&Ue.classList.add("pin-spacer-"+l),He.pinState=di=Fs(f)),i.force3D!==!1&&L.set(f,{force3D:!0}),b.spacer=Ue=He.spacer,En=Nt(f),lr=En[g+P.os2],ke=L.getProperty(f),qt=L.quickSetter(f,P.a,Ie),qo(f,Ue,En),Wi=Fs(f)),N){ci=nn(N)?wu(N,Cu):Cu,S=Os("scroller-start",l,T,P,ci,0),St=Os("scroller-end",l,T,P,ci,0,S),Ei=S["offset"+P.op.d2];var ur=_t(Ni(T,"content")||T);mt=this.markerStart=Os("start",l,ur,P,ci,Ei,0,w),Ct=this.markerEnd=Os("end",l,ur,P,ci,Ei,0,w),w&&($n=L.quickSetter([mt,Ct],P.a,Ie)),!A&&!(li.length&&Ni(T,"fixedMarkers")===!0)&&($g(R?ue:T),L.set([S,St],{force3D:!0}),gs=L.quickSetter(S,P.a,Ie),Sn=L.quickSetter(St,P.a,Ie))}if(w){var K=w.vars.onUpdate,V=w.vars.onUpdateParams;w.eventCallback("onUpdate",function(){b.update(0,0,1),K&&K.apply(w,V||[])})}if(b.previous=function(){return J[J.indexOf(b)-1]},b.next=function(){return J[J.indexOf(b)+1]},b.revert=function(O,X){if(!X)return b.kill(!0);var B=O!==!1||!b.enabled,G=it;B!==b.isReverted&&(B&&(Xt=Math.max(we(),b.scroll.rec||0),Be=b.progress,Gi=n&&n.progress()),mt&&[mt,Ct,S,St].forEach(function(Ve){return Ve.style.display=B?"none":"block"}),B&&(it=b,b.update(B)),f&&(!C||!b.isActive)&&(B?Fg(f,Ue,di):qo(f,Ue,Nt(f),Ae)),B||b.update(B),it=G,b.isReverted=B)},b.refresh=function(O,X,B,G){if(!((it||!b.enabled)&&!X)){if(f&&O&&Vt){We(s,"scrollEnd",zd);return}!ht&&q&&q(b),it=b,Xe.tween&&!B&&(Xe.tween.kill(),Xe.tween=0),ie&&ie.pause(),p&&n&&(n.revert({kill:!1}).invalidate(),n.getChildren&&n.getChildren(!0,!0,!1).forEach(function(Pi){return Pi.vars.immediateRender&&Pi.render(0,!0,!0)})),b.isReverted||b.revert(!0,!0),b._subPinOffset=!1;var Ve=ce(),re=me(),Te=w?w.duration():oi(T,P),Qe=Se<=.01||!Se,Ee=0,_e=G||0,he=nn(B)?B.end:i.end,Gt=i.endTrigger||h,ye=nn(B)?B.start:i.start||(i.start===0||!h?0:f?"0 0":"0 100%"),Et=b.pinnedContainer=i.pinnedContainer&&_t(i.pinnedContainer,b),Jt=h&&Math.max(0,J.indexOf(b))||0,Ge=Jt,Ke,et,Ki,ms,tt,je,Zt,To,Ol,cr,Qt,dr,_s;for(N&&nn(B)&&(dr=L.getProperty(S,P.p),_s=L.getProperty(St,P.p));Ge-- >0;)je=J[Ge],je.end||je.refresh(0,1)||(it=b),Zt=je.pin,Zt&&(Zt===h||Zt===f||Zt===Et)&&!je.isReverted&&(cr||(cr=[]),cr.unshift(je),je.revert(!0,!0)),je!==J[Ge]&&(Jt--,Ge--);for(st(ye)&&(ye=ye(b)),ye=yu(ye,"start",b),ae=Pu(ye,h,Ve,P,we(),mt,S,b,re,W,A,Te,w,b._startClamp&&"_startClamp")||(f?-.001:0),st(he)&&(he=he(b)),Pt(he)&&!he.indexOf("+=")&&(~he.indexOf(" ")?he=(Pt(ye)?ye.split(" ")[0]:"")+he:(Ee=Bs(he.substr(2),Ve),he=Pt(ye)?ye:(w?L.utils.mapRange(0,w.duration(),w.scrollTrigger.start,w.scrollTrigger.end,ae):ae)+Ee,Gt=h)),he=yu(he,"end",b),Pe=Math.max(ae,Pu(he||(Gt?"100% 0":Te),Gt,Ve,P,we()+Ee,Ct,St,b,re,W,A,Te,w,b._endClamp&&"_endClamp"))||-.001,Ee=0,Ge=Jt;Ge--;)je=J[Ge],Zt=je.pin,Zt&&je.start-je._pinPush<=ae&&!w&&je.end>0&&(Ke=je.end-(b._startClamp?Math.max(0,je.start):je.start),(Zt===h&&je.start-je._pinPush<ae||Zt===Et)&&isNaN(ye)&&(Ee+=Ke*(1-je.progress)),Zt===f&&(_e+=Ke));if(ae+=Ee,Pe+=Ee,b._startClamp&&(b._startClamp+=Ee),b._endClamp&&!ht&&(b._endClamp=Pe||-.001,Pe=Math.min(Pe,oi(T,P))),Se=Pe-ae||(ae-=.01)&&.001,Qe&&(Be=L.utils.clamp(0,1,L.utils.normalize(ae,Pe,Xt))),b._pinPush=_e,mt&&Ee&&(Ke={},Ke[P.a]="+="+Ee,Et&&(Ke[P.p]="-="+we()),L.set([mt,Ct],Ke)),f&&!(Da&&b.end>=oi(T,P)))Ke=Nt(f),ms=P===Ne,Ki=we(),Rt=parseFloat(ke(P.a))+_e,!Te&&Pe>1&&(Qt=(R?ge.scrollingElement||Tt:T).style,Qt={style:Qt,value:Qt["overflow"+P.a.toUpperCase()]},R&&Nt(ue)["overflow"+P.a.toUpperCase()]!=="scroll"&&(Qt.style["overflow"+P.a.toUpperCase()]="scroll")),qo(f,Ue,Ke),Wi=Fs(f),et=_i(f,!0),To=A&&Vi(T,ms?pt:Ne)(),g?(Ae=[g+P.os2,Se+_e+Ie],Ae.t=Ue,Ge=g===Le?co(f,P)+Se+_e:0,Ge&&(Ae.push(P.d,Ge+Ie),Ue.style.flexBasis!=="auto"&&(Ue.style.flexBasis=Ge+Ie)),Wn(Ae),Et&&J.forEach(function(Pi){Pi.pin===Et&&Pi.vars.pinSpacing!==!1&&(Pi._subPinOffset=!0)}),A&&we(Xt)):(Ge=co(f,P),Ge&&Ue.style.flexBasis!=="auto"&&(Ue.style.flexBasis=Ge+Ie)),A&&(tt={top:et.top+(ms?Ki-ae:To)+Ie,left:et.left+(ms?To:Ki-ae)+Ie,boxSizing:"border-box",position:"fixed"},tt[fn]=tt["max"+Qn]=Math.ceil(et.width)+Ie,tt[pn]=tt["max"+bl]=Math.ceil(et.height)+Ie,tt[It]=tt[It+Rr]=tt[It+zr]=tt[It+jr]=tt[It+Mr]="0",tt[Le]=Ke[Le],tt[Le+Rr]=Ke[Le+Rr],tt[Le+zr]=Ke[Le+zr],tt[Le+jr]=Ke[Le+jr],tt[Le+Mr]=Ke[Le+Mr],Si=Lg(di,tt,C),ht&&we(0)),n?(Ol=n._initted,No(1),n.render(n.duration(),!0,!0),hi=ke(P.a)-Rt+Se+_e,fi=Math.abs(Se-hi)>1,A&&fi&&Si.splice(Si.length-2,2),n.render(0,!0,!0),Ol||n.invalidate(!0),n.parent||n.totalTime(n.totalTime()),No(0)):hi=Se,Qt&&(Qt.value?Qt.style["overflow"+P.a.toUpperCase()]=Qt.value:Qt.style.removeProperty("overflow-"+P.a));else if(h&&we()&&!w)for(et=h.parentNode;et&&et!==ue;)et._pinOffset&&(ae-=et._pinOffset,Pe-=et._pinOffset),et=et.parentNode;cr&&cr.forEach(function(Pi){return Pi.revert(!1,!0)}),b.start=ae,b.end=Pe,at=gt=ht?Xt:we(),!w&&!ht&&(at<Xt&&we(Xt),b.scroll.rec=0),b.revert(!1,!0),De=nt(),Yt&&(de=-1,Yt.restart(!0)),it=0,n&&F&&(n._initted||Gi)&&n.progress()!==Gi&&n.progress(Gi||0,!0).render(n.time(),!0,!0),(Qe||Be!==b.progress||w||p||n&&!n._initted)&&(n&&!F&&(n._initted||Be||n.vars.immediateRender!==!1)&&n.totalProgress(w&&ae<-.001&&!Be?L.utils.normalize(ae,Pe,0):Be,!0),b.progress=Qe||(at-ae)/Se===Be?0:Be),f&&g&&(Ue._pinOffset=Math.round(b.progress*hi)),ie&&ie.invalidate(),isNaN(dr)||(dr-=L.getProperty(S,P.p),_s-=L.getProperty(St,P.p),As(S,P,dr),As(mt,P,dr-(G||0)),As(St,P,_s),As(Ct,P,_s-(G||0))),Qe&&!ht&&b.update(),c&&!ht&&!Ci&&(Ci=!0,c(b),Ci=!1)}},b.getVelocity=function(){return(we()-gt)/(nt()-xr)*1e3||0},b.endAnimation=function(){mr(b.callbackAnimation),n&&(ie?ie.progress(1):n.paused()?F||mr(n,b.direction<0,1):mr(n,n.reversed()))},b.labelToScroll=function(O){return n&&n.labels&&(ae||b.refresh()||ae)+n.labels[O]/n.duration()*Se||0},b.getTrailing=function(O){var X=J.indexOf(b),B=b.direction>0?J.slice(0,X).reverse():J.slice(X+1);return(Pt(O)?B.filter(function(G){return G.vars.preventOverlaps===O}):B).filter(function(G){return b.direction>0?G.end<=ae:G.start>=Pe})},b.update=function(O,X,B){if(!(w&&!B&&!O)){var G=ht===!0?Xt:b.scroll(),Ve=O?0:(G-ae)/Se,re=Ve<0?0:Ve>1?1:Ve||0,Te=b.progress,Qe,Ee,_e,he,Gt,ye,Et,Jt;if(X&&(gt=at,at=w?we():G,x&&(Yi=$i,$i=n&&!F?n.totalProgress():re)),m&&f&&!it&&!Es&&Vt&&(!re&&ae<G+(G-gt)/(nt()-xr)*m?re=1e-4:re===1&&Pe>G+(G-gt)/(nt()-xr)*m&&(re=.9999)),re!==Te&&b.enabled){if(Qe=b.isActive=!!re&&re<1,Ee=!!Te&&Te<1,ye=Qe!==Ee,Gt=ye||!!re!=!!Te,b.direction=re>Te?1:-1,b.progress=re,Gt&&!it&&(_e=re&&!Te?0:re===1?1:Te===1?2:3,F&&(he=!ye&&M[_e+1]!=="none"&&M[_e+1]||M[_e],Jt=n&&(he==="complete"||he==="reset"||he in n))),$&&(ye||Jt)&&(Jt||d||!n)&&(st($)?$(b):b.getTrailing($).forEach(function(Ki){return Ki.endAnimation()})),F||(ie&&!it&&!Es?(ie._dp._time-ie._start!==ie._time&&ie.render(ie._dp._time-ie._start),ie.resetTo?ie.resetTo("totalProgress",re,n._tTime/n._tDur):(ie.vars.totalProgress=re,ie.invalidate().restart())):n&&n.totalProgress(re,!!(it&&(De||O)))),f){if(O&&g&&(Ue.style[g+P.os2]=lr),!A)qt(wr(Rt+hi*re));else if(Gt){if(Et=!O&&re>Te&&Pe+1>G&&G+1>=oi(T,P),C)if(!O&&(Qe||Et)){var Ge=_i(f,!0),Ke=G-ae;ku(f,ue,Ge.top+(P===Ne?Ke:0)+Ie,Ge.left+(P===Ne?0:Ke)+Ie)}else ku(f,Ue);Wn(Qe||Et?Si:Wi),fi&&re<1&&Qe||qt(Rt+(re===1&&!Et?hi:0))}}x&&!Xe.tween&&!it&&!Es&&Yt.restart(!0),a&&(ye||D&&re&&(re<1||!Bo))&&Jr(a.targets).forEach(function(Ki){return Ki.classList[Qe||D?"add":"remove"](a.className)}),o&&!F&&!O&&o(b),Gt&&!it?(F&&(Jt&&(he==="complete"?n.pause().totalProgress(1):he==="reset"?n.restart(!0).pause():he==="restart"?n.restart(!0):n[he]()),o&&o(b)),(ye||!Bo)&&(u&&ye&&Uo(b,u),I[_e]&&Uo(b,I[_e]),D&&(re===1?b.kill(!1,1):I[_e]=0),ye||(_e=re===1?1:3,I[_e]&&Uo(b,I[_e]))),k&&!Qe&&Math.abs(b.getVelocity())>(Cr(k)?k:2500)&&(mr(b.callbackAnimation),ie?ie.progress(1):mr(n,he==="reverse"?1:!re,1))):F&&o&&!it&&o(b)}if(Sn){var et=w?G/w.duration()*(w._caScrollDist||0):G;gs(et+(S._isFlipped?1:0)),Sn(et)}$n&&$n(-G/w.duration()*(w._caScrollDist||0))}},b.enable=function(O,X){b.enabled||(b.enabled=!0,We(T,"resize",Sr),R||We(T,"scroll",Ln),q&&We(s,"refreshInit",q),O!==!1&&(b.progress=Be=0,at=gt=de=we()),X!==!1&&b.refresh())},b.getTween=function(O){return O&&Xe?Xe.tween:ie},b.setPositions=function(O,X,B,G){if(w){var Ve=w.scrollTrigger,re=w.duration(),Te=Ve.end-Ve.start;O=Ve.start+Te*O/re,X=Ve.start+Te*X/re}b.refresh(!1,!1,{start:bu(O,B&&!!b._startClamp),end:bu(X,B&&!!b._endClamp)},G),b.update()},b.adjustPinSpacing=function(O){if(Ae&&O){var X=Ae.indexOf(P.d)+1;Ae[X]=parseFloat(Ae[X])+O+Ie,Ae[1]=parseFloat(Ae[1])+O+Ie,Wn(Ae)}},b.disable=function(O,X){if(b.enabled&&(O!==!1&&b.revert(!0,!0),b.enabled=b.isActive=!1,X||ie&&ie.pause(),Xt=0,He&&(He.uncache=1),q&&qe(s,"refreshInit",q),Yt&&(Yt.pause(),Xe.tween&&Xe.tween.kill()&&(Xe.tween=0)),!R)){for(var B=J.length;B--;)if(J[B].scroller===T&&J[B]!==b)return;qe(T,"resize",Sr),R||qe(T,"scroll",Ln)}},b.kill=function(O,X){b.disable(O,X),ie&&!X&&ie.kill(),l&&delete wa[l];var B=J.indexOf(b);B>=0&&J.splice(B,1),B===dt&&Us>0&&dt--,B=0,J.forEach(function(G){return G.scroller===b.scroller&&(B=1)}),B||ht||(b.scroll.rec=0),n&&(n.scrollTrigger=null,O&&n.revert({kill:!1}),X||n.kill()),mt&&[mt,Ct,S,St].forEach(function(G){return G.parentNode&&G.parentNode.removeChild(G)}),Ir===b&&(Ir=0),f&&(He&&(He.uncache=1),B=0,J.forEach(function(G){return G.pin===f&&B++}),B||(He.spacer=0)),i.onKill&&i.onKill(b)},J.push(b),b.enable(!1,!1),pi&&pi(b),n&&n.add&&!Se){var le=b.update;b.update=function(){b.update=le,te.cache++,ae||Pe||b.refresh()},L.delayedCall(.01,b.update),Se=.01,ae=Pe=0}else b.refresh();f&&Og()},s.register=function(i){return zn||(L=i||kd(),Pd()&&window.document&&s.enable(),zn=Dr),zn},s.defaults=function(i){if(i)for(var n in i)Ts[n]=i[n];return Ts},s.disable=function(i,n){Dr=0,J.forEach(function(o){return o[n?"kill":"disable"](i)}),qe(ee,"wheel",Ln),qe(ge,"scroll",Ln),clearInterval(Ss),qe(ge,"touchcancel",ii),qe(ue,"touchstart",ii),Ps(qe,ge,"pointerdown,touchstart,mousedown",xu),Ps(qe,ge,"pointerup,touchend,mouseup",Du),lo.kill(),$s(qe);for(var r=0;r<te.length;r+=3)ks(qe,te[r],te[r+1]),ks(qe,te[r],te[r+2])},s.enable=function(){if(ee=window,ge=document,Tt=ge.documentElement,ue=ge.body,L&&(Jr=L.utils.toArray,Lr=L.utils.clamp,xa=L.core.context||ii,No=L.core.suppressOverwrites||ii,ml=ee.history.scrollRestoration||"auto",Ca=ee.pageYOffset||0,L.core.globals("ScrollTrigger",s),ue)){Dr=1,qn=document.createElement("div"),qn.style.height="100vh",qn.style.position="absolute",jd(),Cg(),Fe.register(L),s.isTouch=Fe.isTouch,Oi=Fe.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),ba=Fe.isTouch===1,We(ee,"wheel",Ln),gl=[ee,ge,Tt,ue],L.matchMedia?(s.matchMedia=function(u){var c=L.matchMedia(),d;for(d in u)c.add(d,u[d]);return c},L.addEventListener("matchMediaInit",function(){return Dl()}),L.addEventListener("matchMediaRevert",function(){return Md()}),L.addEventListener("matchMedia",function(){on(0,1),bn("matchMedia")}),L.matchMedia().add("(orientation: portrait)",function(){return Vo(),Vo})):console.warn("Requires GSAP 3.11.0 or later"),Vo(),We(ge,"scroll",Ln);var i=ue.hasAttribute("style"),n=ue.style,r=n.borderTopStyle,o=L.core.Animation.prototype,a,l;for(o.revert||Object.defineProperty(o,"revert",{value:function(){return this.time(-.01,!0)}}),n.borderTopStyle="solid",a=_i(ue),Ne.m=Math.round(a.top+Ne.sc())||0,pt.m=Math.round(a.left+pt.sc())||0,r?n.borderTopStyle=r:n.removeProperty("border-top-style"),i||(ue.setAttribute("style",""),ue.removeAttribute("style")),Ss=setInterval(Su,250),L.delayedCall(.5,function(){return Es=0}),We(ge,"touchcancel",ii),We(ue,"touchstart",ii),Ps(We,ge,"pointerdown,touchstart,mousedown",xu),Ps(We,ge,"pointerup,touchend,mouseup",Du),ya=L.utils.checkPrefix("transform"),Vs.push(ya),zn=nt(),lo=L.delayedCall(.2,on).pause(),Mn=[ge,"visibilitychange",function(){var u=ee.innerWidth,c=ee.innerHeight;ge.hidden?(_u=u,vu=c):(_u!==u||vu!==c)&&Sr()},ge,"DOMContentLoaded",on,ee,"load",on,ee,"resize",Sr],$s(We),J.forEach(function(u){return u.enable(0,1)}),l=0;l<te.length;l+=3)ks(qe,te[l],te[l+1]),ks(qe,te[l],te[l+2])}},s.config=function(i){"limitCallbacks"in i&&(Bo=!!i.limitCallbacks);var n=i.syncInterval;n&&clearInterval(Ss)||(Ss=n)&&setInterval(Su,n),"ignoreMobileResize"in i&&(ba=s.isTouch===1&&i.ignoreMobileResize),"autoRefreshEvents"in i&&($s(qe)||$s(We,i.autoRefreshEvents||"none"),Sd=(i.autoRefreshEvents+"").indexOf("resize")===-1)},s.scrollerProxy=function(i,n){var r=_t(i),o=te.indexOf(r),a=vn(r);~o&&te.splice(o,a?6:2),n&&(a?li.unshift(ee,n,ue,n,Tt,n):li.unshift(r,n))},s.clearMatchMedia=function(i){J.forEach(function(n){return n._ctx&&n._ctx.query===i&&n._ctx.kill(!0,!0)})},s.isInViewport=function(i,n,r){var o=(Pt(i)?_t(i):i).getBoundingClientRect(),a=o[r?fn:pn]*n||0;return r?o.right-a>0&&o.left+a<ee.innerWidth:o.bottom-a>0&&o.top+a<ee.innerHeight},s.positionInViewport=function(i,n,r){Pt(i)&&(i=_t(i));var o=i.getBoundingClientRect(),a=o[r?fn:pn],l=n==null?a/2:n in ho?ho[n]*a:~n.indexOf("%")?parseFloat(n)*a/100:parseFloat(n)||0;return r?(o.left+l)/ee.innerWidth:(o.top+l)/ee.innerHeight},s.killAll=function(i){if(J.slice(0).forEach(function(r){return r.vars.id!=="ScrollSmoother"&&r.kill()}),i!==!0){var n=yn.killAll||[];yn={},n.forEach(function(r){return r()})}},s})();Z.version="3.13.0";Z.saveStyles=function(s){return s?Jr(s).forEach(function(e){if(e&&e.style){var t=$t.indexOf(e);t>=0&&$t.splice(t,5),$t.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),L.core.getCache(e),xa())}}):$t};Z.revert=function(s,e){return Dl(!s,e)};Z.create=function(s,e){return new Z(s,e)};Z.refresh=function(s){return s?Sr(!0):(zn||Z.register())&&on(!0)};Z.update=function(s){return++te.cache&&bi(s===!0?2:0)};Z.clearScrollMemory=Rd;Z.maxScroll=function(s,e){return oi(s,e?pt:Ne)};Z.getScrollFunc=function(s,e){return Vi(_t(s),e?pt:Ne)};Z.getById=function(s){return wa[s]};Z.getAll=function(){return J.filter(function(s){return s.vars.id!=="ScrollSmoother"})};Z.isScrolling=function(){return!!Vt};Z.snapDirectional=xl;Z.addEventListener=function(s,e){var t=yn[s]||(yn[s]=[]);~t.indexOf(e)||t.push(e)};Z.removeEventListener=function(s,e){var t=yn[s],i=t&&t.indexOf(e);i>=0&&t.splice(i,1)};Z.batch=function(s,e){var t=[],i={},n=e.interval||.016,r=e.batchMax||1e9,o=function(u,c){var d=[],h=[],f=L.delayedCall(n,function(){c(d,h),d=[],h=[]}).pause();return function(g){d.length||f.restart(!0),d.push(g.trigger),h.push(g),r<=d.length&&f.progress(1)}},a;for(a in e)i[a]=a.substr(0,2)==="on"&&st(e[a])&&a!=="onRefreshInit"?o(a,e[a]):e[a];return st(r)&&(r=r(),We(Z,"refresh",function(){return r=e.batchMax()})),Jr(s).forEach(function(l){var u={};for(a in i)u[a]=i[a];u.trigger=l,t.push(Z.create(u))}),t};var Ou=function(e,t,i,n){return t>n?e(n):t<0&&e(0),i>n?(n-t)/(i-t):i<0?t/(t-i):1},Wo=function s(e,t){t===!0?e.style.removeProperty("touch-action"):e.style.touchAction=t===!0?"auto":t?"pan-"+t+(Fe.isTouch?" pinch-zoom":""):"none",e===Tt&&s(ue,t)},Ls={auto:1,scroll:1},Mg=function(e){var t=e.event,i=e.target,n=e.axis,r=(t.changedTouches?t.changedTouches[0]:t).target,o=r._gsap||L.core.getCache(r),a=nt(),l;if(!o._isScrollT||a-o._isScrollT>2e3){for(;r&&r!==ue&&(r.scrollHeight<=r.clientHeight&&r.scrollWidth<=r.clientWidth||!(Ls[(l=Nt(r)).overflowY]||Ls[l.overflowX]));)r=r.parentNode;o._isScroll=r&&r!==i&&!vn(r)&&(Ls[(l=Nt(r)).overflowY]||Ls[l.overflowX]),o._isScrollT=a}(o._isScroll||n==="x")&&(t.stopPropagation(),t._gsapAllow=!0)},Nd=function(e,t,i,n){return Fe.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:n=n&&Mg,onPress:n,onDrag:n,onScroll:n,onEnable:function(){return i&&We(ge,Fe.eventTypes[0],Au,!1,!0)},onDisable:function(){return qe(ge,Fe.eventTypes[0],Au,!0)}})},Rg=/(input|label|select|textarea)/i,Fu,Au=function(e){var t=Rg.test(e.target.tagName);(t||Fu)&&(e._gsapAllow=!0,Fu=t)},jg=function(e){nn(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var t=e,i=t.normalizeScrollX,n=t.momentum,r=t.allowNestedScroll,o=t.onRelease,a,l,u=_t(e.target)||Tt,c=L.core.globals().ScrollSmoother,d=c&&c.get(),h=Oi&&(e.content&&_t(e.content)||d&&e.content!==!1&&!d.smooth()&&d.content()),f=Vi(u,Ne),g=Vi(u,pt),p=1,m=(Fe.isTouch&&ee.visualViewport?ee.visualViewport.scale*ee.visualViewport.width:ee.outerWidth)/ee.innerWidth,y=0,v=st(n)?function(){return n(a)}:function(){return n||2.8},D,x,C=Nd(u,e.type,!0,r),E=function(){return x=!1},w=ii,k=ii,$=function(){l=oi(u,Ne),k=Lr(Oi?1:0,l),i&&(w=Lr(0,oi(u,pt))),D=gn},P=function(){h._gsap.y=wr(parseFloat(h._gsap.y)+f.offset)+"px",h.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(h._gsap.y)+", 0, 1)",f.offset=f.cacheID=0},F=function(){if(x){requestAnimationFrame(E);var N=wr(a.deltaY/2),W=k(f.v-N);if(h&&W!==f.v+f.offset){f.offset=W-f.v;var b=wr((parseFloat(h&&h._gsap.y)||0)-f.offset);h.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+b+", 0, 1)",h._gsap.y=b+"px",f.cacheID=te.cache,bi()}return!0}f.offset&&P(),x=!0},T,H,R,A,I=function(){$(),T.isActive()&&T.vars.scrollY>l&&(f()>l?T.progress(1)&&f(l):T.resetTo("scrollY",l))};return h&&L.set(h,{y:"+=0"}),e.ignoreCheck=function(M){return Oi&&M.type==="touchmove"&&F()||p>1.05&&M.type!=="touchstart"||a.isGesturing||M.touches&&M.touches.length>1},e.onPress=function(){x=!1;var M=p;p=wr((ee.visualViewport&&ee.visualViewport.scale||1)/m),T.pause(),M!==p&&Wo(u,p>1.01?!0:i?!1:"x"),H=g(),R=f(),$(),D=gn},e.onRelease=e.onGestureStart=function(M,N){if(f.offset&&P(),!N)A.restart(!0);else{te.cache++;var W=v(),b,q;i&&(b=g(),q=b+W*.05*-M.velocityX/.227,W*=Ou(g,b,q,oi(u,pt)),T.vars.scrollX=w(q)),b=f(),q=b+W*.05*-M.velocityY/.227,W*=Ou(f,b,q,oi(u,Ne)),T.vars.scrollY=k(q),T.invalidate().duration(W).play(.01),(Oi&&T.vars.scrollY>=l||b>=l-1)&&L.to({},{onUpdate:I,duration:W})}o&&o(M)},e.onWheel=function(){T._ts&&T.pause(),nt()-y>1e3&&(D=0,y=nt())},e.onChange=function(M,N,W,b,q){if(gn!==D&&$(),N&&i&&g(w(b[2]===N?H+(M.startX-M.x):g()+N-b[1])),W){f.offset&&P();var ce=q[2]===W,me=ce?R+M.startY-M.y:f()+W-q[1],de=k(me);ce&&me!==de&&(R+=de-me),f(de)}(W||N)&&bi()},e.onEnable=function(){Wo(u,i?!1:"x"),Z.addEventListener("refresh",I),We(ee,"resize",I),f.smooth&&(f.target.style.scrollBehavior="auto",f.smooth=g.smooth=!1),C.enable()},e.onDisable=function(){Wo(u,!0),qe(ee,"resize",I),Z.removeEventListener("refresh",I),C.kill()},e.lockAxis=e.lockAxis!==!1,a=new Fe(e),a.iOS=Oi,Oi&&!f()&&f(1),Oi&&L.ticker.add(ii),A=a._dc,T=L.to(a,{ease:"power4",paused:!0,inherit:!1,scrollX:i?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:Id(f,f(),function(){return T.pause()})},onUpdate:bi,onComplete:A.vars.onComplete}),a};Z.sort=function(s){if(st(s))return J.sort(s);var e=ee.pageYOffset||0;return Z.getAll().forEach(function(t){return t._sortY=t.trigger?e+t.trigger.getBoundingClientRect().top:t.start+ee.innerHeight}),J.sort(s||function(t,i){return(t.vars.refreshPriority||0)*-1e6+(t.vars.containerAnimation?1e6:t._sortY)-((i.vars.containerAnimation?1e6:i._sortY)+(i.vars.refreshPriority||0)*-1e6)})};Z.observe=function(s){return new Fe(s)};Z.normalizeScroll=function(s){if(typeof s>"u")return ct;if(s===!0&&ct)return ct.enable();if(s===!1){ct&&ct.kill(),ct=s;return}var e=s instanceof Fe?s:jg(s);return ct&&ct.target===e.target&&ct.kill(),vn(e.target)&&(ct=e),e};Z.core={_getVelocityProp:va,_inputObserver:Nd,_scrollers:te,_proxies:li,bridge:{ss:function(){Vt||bn("scrollStart"),Vt=nt()},ref:function(){return it}}};kd()&&L.registerPlugin(Z);/*!
 * DrawSVGPlugin 3.13.0
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var ai,wl,fo,Bd,Hd,Lu,Ea,Ud,Vd=function(){return typeof window<"u"},qd=function(){return ai||Vd()&&(ai=window.gsap)&&ai.registerPlugin&&ai},Ig=/[-+=\.]*\d+[\.e\-\+]*\d*[e\-\+]*\d*/gi,Yo={rect:["width","height"],circle:["r","r"],ellipse:["rx","ry"],line:["x2","y2"]},rn=function(e){return Math.round(e*1e4)/1e4},yi=function(e){return parseFloat(e)||0},zu=function(e,t){var i=yi(e);return~e.indexOf("%")?i/100*t:i},zs=function(e,t){return yi(e.getAttribute(t))},Ws=Math.sqrt,Mu=function(e,t,i,n,r,o){return Ws(Math.pow((yi(i)-yi(e))*r,2)+Math.pow((yi(n)-yi(t))*o,2))},Ru=function(e){return console.warn(e)},Wd=function(e){return e.getAttribute("vector-effect")==="non-scaling-stroke"},Ng=1,Bg=function(e,t,i){var n=e.indexOf(" "),r,o;return n<0?(r=i!==void 0?i+"":e,o=e):(r=e.substr(0,n),o=e.substr(n+1)),r=zu(r,t),o=zu(o,t),r>o?[o,r]:[r,o]},Ys=function(e){if(e=wl(e)[0],!e)return 0;var t=e.tagName.toLowerCase(),i=e.style,n=1,r=1,o,a,l,u,c,d,h;Wd(e)&&(r=e.getScreenCTM(),n=Ws(r.a*r.a+r.b*r.b),r=Ws(r.d*r.d+r.c*r.c));try{a=e.getBBox()}catch{Ru("Some browsers won't measure invisible elements (like display:none or masks inside defs).")}var f=a||{x:0,y:0,width:0,height:0},g=f.x,p=f.y,m=f.width,y=f.height;if((!a||!m&&!y)&&Yo[t]&&(m=zs(e,Yo[t][0]),y=zs(e,Yo[t][1]),t!=="rect"&&t!=="line"&&(m*=2,y*=2),t==="line"&&(g=zs(e,"x1"),p=zs(e,"y1"),m=Math.abs(m-g),y=Math.abs(y-p))),t==="path")u=i.strokeDasharray,i.strokeDasharray="none",o=e.getTotalLength()||0,rn(n)!==rn(r)&&!Lu&&(Lu=1)&&Ru("Warning: <path> length cannot be measured when vector-effect is non-scaling-stroke and the element isn't proportionally scaled."),o*=(n+r)/2,i.strokeDasharray=u;else if(t==="rect")o=m*2*n+y*2*r;else if(t==="line")o=Mu(g,p,g+m,p+y,n,r);else if(t==="polyline"||t==="polygon")for(l=e.getAttribute("points").match(Ig)||[],t==="polygon"&&l.push(l[0],l[1]),o=0,c=2;c<l.length;c+=2)o+=Mu(l[c-2],l[c-1],l[c],l[c+1],n,r)||0;else(t==="circle"||t==="ellipse")&&(d=m/2*n,h=y/2*r,o=Math.PI*(3*(d+h)-Ws((3*d+h)*(d+3*h))));return o||0},ju=function(e,t){if(e=wl(e)[0],!e)return[0,0];t||(t=Ys(e)+1);var i=fo.getComputedStyle(e),n=i.strokeDasharray||"",r=yi(i.strokeDashoffset),o=n.indexOf(",");return o<0&&(o=n.indexOf(" ")),n=o<0?t:yi(n.substr(0,o)),n>t&&(n=t),[-r||0,n-r||0]},Iu=function(){Vd()&&(fo=window,Hd=ai=qd(),wl=ai.utils.toArray,Ea=ai.core.getStyleSaver,Ud=ai.core.reverting||function(){},Bd=((fo.navigator||{}).userAgent||"").indexOf("Edge")!==-1)},Yd={version:"3.13.0",name:"drawSVG",register:function(e){ai=e,Iu()},init:function(e,t,i,n,r){if(!e.getBBox)return!1;Hd||Iu();var o=Ys(e),a,l,u;return this.styles=Ea&&Ea(e,"strokeDashoffset,strokeDasharray,strokeMiterlimit"),this.tween=i,this._style=e.style,this._target=e,t+""=="true"?t="0 100%":t?(t+"").indexOf(" ")===-1&&(t="0 "+t):t="0 0",a=ju(e,o),l=Bg(t,o,a[0]),this._length=rn(o),this._dash=rn(a[1]-a[0]),this._offset=rn(-a[0]),this._dashPT=this.add(this,"_dash",this._dash,rn(l[1]-l[0]),0,0,0,0,0,1),this._offsetPT=this.add(this,"_offset",this._offset,rn(-l[0]),0,0,0,0,0,1),Bd&&(u=fo.getComputedStyle(e),u.strokeLinecap!==u.strokeLinejoin&&(l=yi(u.strokeMiterlimit),this.add(e.style,"strokeMiterlimit",l,l+.01))),this._live=Wd(e)||~(t+"").indexOf("live"),this._nowrap=~(t+"").indexOf("nowrap"),this._props.push("drawSVG"),Ng},render:function(e,t){if(t.tween._time||!Ud()){var i=t._pt,n=t._style,r,o,a,l;if(i){for(t._live&&(r=Ys(t._target),r!==t._length&&(o=r/t._length,t._length=r,t._offsetPT&&(t._offsetPT.s*=o,t._offsetPT.c*=o),t._dashPT?(t._dashPT.s*=o,t._dashPT.c*=o):t._dash*=o));i;)i.r(e,i.d),i=i._next;a=t._dash||e&&e!==1&&1e-4||0,r=t._length-a+.1,l=t._offset,a&&l&&a+Math.abs(l%t._length)>t._length-.05&&(l+=l<0?.005:-.005)&&(r+=.005),n.strokeDashoffset=a?l:l+.001,n.strokeDasharray=r<.1?"none":a?a+"px,"+(t._nowrap?999999:r)+"px":"0px, 999999px"}}else t.styles.revert()},getLength:Ys,getPosition:ju};qd()&&ai.registerPlugin(Yd);/*!
 * strings: 3.13.0
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Hg=/(?:^\s+|\s+$)/g,Ug=/([\uD800-\uDBFF][\uDC00-\uDFFF](?:[\u200D\uFE0F][\uD800-\uDBFF][\uDC00-\uDFFF]){2,}|\uD83D\uDC69(?:\u200D(?:(?:\uD83D\uDC69\u200D)?\uD83D\uDC67|(?:\uD83D\uDC69\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C\uDFF3\uFE0F\u200D\uD83C\uDF08|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2642\u2640]\uFE0F|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDD27\uDCBC\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC6F\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3C-\uDD3E\uDDD6-\uDDDF])\u200D[\u2640\u2642]\uFE0F|\uD83C\uDDFD\uD83C\uDDF0|\uD83C\uDDF6\uD83C\uDDE6|\uD83C\uDDF4\uD83C\uDDF2|\uD83C\uDDE9(?:\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF])|\uD83C\uDDF7(?:\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC])|\uD83C\uDDE8(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF])|(?:\u26F9|\uD83C[\uDFCC\uDFCB]|\uD83D\uDD75)(?:\uFE0F\u200D[\u2640\u2642]|(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642])\uFE0F|(?:\uD83D\uDC41\uFE0F\u200D\uD83D\uDDE8|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\uD83D\uDC69\u200D[\u2695\u2696\u2708]|\uD83D\uDC68(?:(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708]))\uFE0F|\uD83C\uDDF2(?:\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF])|\uD83D\uDC69\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69]))|\uD83C\uDDF1(?:\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE])|\uD83C\uDDEF(?:\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5])|\uD83C\uDDED(?:\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA])|\uD83C\uDDEB(?:\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7])|[#\*0-9]\uFE0F\u20E3|\uD83C\uDDE7(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF])|\uD83C\uDDE6(?:\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF])|\uD83C\uDDFF(?:\uD83C[\uDDE6\uDDF2\uDDFC])|\uD83C\uDDF5(?:\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE])|\uD83C\uDDFB(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA])|\uD83C\uDDF3(?:\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF])|\uD83C\uDFF4\uDB40\uDC67\uDB40\uDC62(?:\uDB40\uDC77\uDB40\uDC6C\uDB40\uDC73|\uDB40\uDC73\uDB40\uDC63\uDB40\uDC74|\uDB40\uDC65\uDB40\uDC6E\uDB40\uDC67)\uDB40\uDC7F|\uD83D\uDC68(?:\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83D\uDC68|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]))|\uD83C\uDDF8(?:\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF])|\uD83C\uDDF0(?:\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF])|\uD83C\uDDFE(?:\uD83C[\uDDEA\uDDF9])|\uD83C\uDDEE(?:\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9])|\uD83C\uDDF9(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF])|\uD83C\uDDEC(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE])|\uD83C\uDDFA(?:\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF])|\uD83C\uDDEA(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA])|\uD83C\uDDFC(?:\uD83C[\uDDEB\uDDF8])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uD83C[\uDFFB-\uDFFF])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u270A-\u270D]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC70\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDCAA\uDD74\uDD7A\uDD90\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD36\uDDD1-\uDDD5])(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC68(?:\u200D(?:(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u26F9\u270A-\u270D]|\uD83C[\uDF85\uDFC2-\uDFC4\uDFC7\uDFCA-\uDFCC]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66-\uDC69\uDC6E\uDC70-\uDC78\uDC7C\uDC81-\uDC83\uDC85-\uDC87\uDCAA\uDD74\uDD75\uDD7A\uDD90\uDD95\uDD96\uDE45-\uDE47\uDE4B-\uDE4F\uDEA3\uDEB4-\uDEB6\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD26\uDD30-\uDD39\uDD3D\uDD3E\uDDD1-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])?|(?:[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u270A\u270B\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF93\uDFA0-\uDFCA\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF4\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC3E\uDC40\uDC42-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDD7A\uDD95\uDD96\uDDA4\uDDFB-\uDE4F\uDE80-\uDEC5\uDECC\uDED0-\uDED2\uDEEB\uDEEC\uDEF4-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])|(?:[#\*0-9\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u2660\u2663\u2665\u2666\u2668\u267B\u267F\u2692-\u2697\u2699\u269B\u269C\u26A0\u26A1\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD7A\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA4\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED2\uDEE0-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])\uFE0F)/;function Cl(s){var e=s.nodeType,t="";if(e===1||e===9||e===11){if(typeof s.textContent=="string")return s.textContent;for(s=s.firstChild;s;s=s.nextSibling)t+=Cl(s)}else if(e===3||e===4)return s.nodeValue;return t}function ei(s,e,t,i,n){if(s+="",t&&(s=s.trim?s.trim():s.replace(Hg,"")),e&&e!=="")return s.replace(/>/g,"&gt;").replace(/</g,"&lt;").split(e);for(var r=[],o=s.length,a=0,l,u;a<o;a++)u=s.charAt(a),(u.charCodeAt(0)>=55296&&u.charCodeAt(0)<=56319||s.charCodeAt(a+1)>=65024&&s.charCodeAt(a+1)<=65039)&&(l=((s.substr(a,12).split(Ug)||[])[1]||"").length||2,u=s.substr(a,l),r.emoji=1,a+=l-1),r.push(n?u:u===">"?"&gt;":u==="<"?"&lt;":i&&u===" "&&(s.charAt(a-1)===" "||s.charAt(a+1)===" ")?"&nbsp;":u);return r}/*!
 * ScrambleTextPlugin 3.13.0
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Xs=(function(){function s(t){this.chars=ei(t),this.sets=[],this.length=50;for(var i=0;i<20;i++)this.sets[i]=Bu(80,this.chars)}var e=s.prototype;return e.grow=function(i){for(var n=0;n<20;n++)this.sets[n]+=Bu(i-this.length,this.chars);this.length=i},s})(),an,Xd,Gd=function(){return an||typeof window<"u"&&(an=window.gsap)&&an.registerPlugin&&an},Vg=1,Nu=/\s+/g,Bu=function(e,t){for(var i=t.length,n="";--e>-1;)n+=t[~~(Math.random()*i)];return n},$a="ABCDEFGHIJKLMNOPQRSTUVWXYZ",Hu=$a.toLowerCase(),qg={upperCase:new Xs($a),lowerCase:new Xs(Hu),upperAndLowerCase:new Xs($a+Hu)},Uu=function(){Xd=an=Gd()},Co={version:"3.13.0",name:"scrambleText",register:function(e,t,i){an=e,Uu()},init:function(e,t,i,n,r){if(Xd||Uu(),this.prop="innerHTML"in e?"innerHTML":"textContent"in e?"textContent":0,!!this.prop){this.target=e,typeof t!="object"&&(t={text:t});var o=t.text||t.value||"",a=t.trim!==!1,l=this,u,c,d,h;return l.delimiter=u=t.delimiter||"",l.original=ei(Cl(e).replace(Nu," ").split("&nbsp;").join(""),u,a),(o==="{original}"||o===!0||o==null)&&(o=l.original.join(u)),l.text=ei((o||"").replace(Nu," "),u,a),l.hasClass=!!(t.newClass||t.oldClass),l.newClass=t.newClass,l.oldClass=t.oldClass,h=u==="",l.textHasEmoji=h&&!!l.text.emoji,l.charsHaveEmoji=!!t.chars&&!!ei(t.chars).emoji,l.length=h?l.original.length:l.original.join(u).length,l.lengthDif=(h?l.text.length:l.text.join(u).length)-l.length,l.fillChar=t.fillChar||t.chars&&~t.chars.indexOf(" ")?"&nbsp;":"",l.charSet=d=qg[t.chars||"upperCase"]||new Xs(t.chars),l.speed=.05/(t.speed||1),l.prevScrambleTime=0,l.setIndex=Math.random()*20|0,c=l.length+Math.max(l.lengthDif,0),c>d.length&&d.grow(c),l.chars=d.sets[l.setIndex],l.revealDelay=t.revealDelay||0,l.tweenLength=t.tweenLength!==!1,l.tween=i,l.rightToLeft=!!t.rightToLeft,l._props.push("scrambleText","text"),Vg}},render:function(e,t){var i=t.target,n=t.prop,r=t.text,o=t.delimiter,a=t.tween,l=t.prevScrambleTime,u=t.revealDelay,c=t.setIndex,d=t.chars,h=t.charSet,f=t.length,g=t.textHasEmoji,p=t.charsHaveEmoji,m=t.lengthDif,y=t.tweenLength,v=t.oldClass,D=t.newClass,x=t.rightToLeft,C=t.fillChar,E=t.speed,w=t.original,k=t.hasClass,$=r.length,P=a._time,F=P-l,T,H,R,A,I,M,N,W,b,q,ce;u&&(a._from&&(P=a._dur-P),e=P===0?0:P<u?1e-6:P===a._dur?1:a._ease((P-u)/(a._dur-u))),e<0?e=0:e>1&&(e=1),x&&(e=1-e),T=~~(e*$+.5),e?((F>E||F<-E)&&(t.setIndex=c=(c+(Math.random()*19|0))%20,t.chars=h.sets[c],t.prevScrambleTime+=F),A=d):A=w.join(o),ce=a._from?e:1-e,q=f+(y?a._from?ce*ce*ce:1-ce*ce*ce:1)*m,x?e===1&&(a._from||a.data==="isFromStart")?(R="",A=w.join(o)):(N=r.slice(T).join(o),p?R=ei(A).slice(0,q-(g?ei(N):N).length+.5|0).join(""):R=A.substr(0,q-(g?ei(N):N).length+.5|0),A=N):(R=r.slice(0,T).join(o),H=(g?ei(R):R).length,p?A=ei(A).slice(H,q+.5|0).join(""):A=A.substr(H,q-H+.5|0)),k?(W=x?v:D,b=x?D:v,I=W&&T!==0,M=b&&T!==$,N=(I?"<span class='"+W+"'>":"")+R+(I?"</span>":"")+(M?"<span class='"+b+"'>":"")+o+A+(M?"</span>":"")):N=R+o+A,i[n]=C==="&nbsp;"&&~N.indexOf("  ")?N.split("  ").join("&nbsp;&nbsp;"):N}};Co.emojiSafeSplit=ei;Co.getText=Cl;Gd()&&an.registerPlugin(Co);ne.defaults({duration:1,ease:ar.create("custom",".75,0,.5,1")});ne.registerPlugin(ar,Yd,Z,Co);function Pa(){ne.matchMedia().add("(min-width: 1024px)",()=>{ne.from("#job > *",{scrollTrigger:{trigger:".job",start:"0% 100%",toggleActions:"play none none reverse"},opacity:0,y:"10rem",stagger:.1}),ne.from(".cases",{scrollTrigger:{trigger:"#cases",start:"top 100%",end:"bottom 80%",toggleActions:"play none none reverse",scrub:2},stagger:-.1,y:"10rem"})}),ne.from("#menu > *",{scrollTrigger:{trigger:"footer",start:"top 50%",end:"top 0%",toggleActions:"play none none reverse"},opacity:0,stagger:.1,y:"5rem"})}window.addEventListener("mobile-loading:done",Pa,{once:!0});document.querySelector("mobile-loading")||(document.readyState==="complete"?Pa():window.addEventListener("load",Pa,{once:!0}));/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Gs=globalThis,Sl=Gs.ShadowRoot&&(Gs.ShadyCSS===void 0||Gs.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Kd=Symbol(),Vu=new WeakMap;let Wg=class{constructor(e,t,i){if(this._$cssResult$=!0,i!==Kd)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(Sl&&e===void 0){const i=t!==void 0&&t.length===1;i&&(e=Vu.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&Vu.set(t,e))}return e}toString(){return this.cssText}};const Yg=s=>new Wg(typeof s=="string"?s:s+"",void 0,Kd),Xg=(s,e)=>{if(Sl)s.adoptedStyleSheets=e.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet));else for(const t of e){const i=document.createElement("style"),n=Gs.litNonce;n!==void 0&&i.setAttribute("nonce",n),i.textContent=t.cssText,s.appendChild(i)}},qu=Sl?s=>s:s=>s instanceof CSSStyleSheet?(e=>{let t="";for(const i of e.cssRules)t+=i.cssText;return Yg(t)})(s):s;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:Gg,defineProperty:Kg,getOwnPropertyDescriptor:Jg,getOwnPropertyNames:Zg,getOwnPropertySymbols:Qg,getPrototypeOf:e0}=Object,Bi=globalThis,Wu=Bi.trustedTypes,t0=Wu?Wu.emptyScript:"",Xo=Bi.reactiveElementPolyfillSupport,Nr=(s,e)=>s,po={toAttribute(s,e){switch(e){case Boolean:s=s?t0:null;break;case Object:case Array:s=s==null?s:JSON.stringify(s)}return s},fromAttribute(s,e){let t=s;switch(e){case Boolean:t=s!==null;break;case Number:t=s===null?null:Number(s);break;case Object:case Array:try{t=JSON.parse(s)}catch{t=null}}return t}},El=(s,e)=>!Gg(s,e),Yu={attribute:!0,type:String,converter:po,reflect:!1,useDefault:!1,hasChanged:El};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),Bi.litPropertyMetadata??(Bi.litPropertyMetadata=new WeakMap);let Rn=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=Yu){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){const i=Symbol(),n=this.getPropertyDescriptor(e,i,t);n!==void 0&&Kg(this.prototype,e,n)}}static getPropertyDescriptor(e,t,i){const{get:n,set:r}=Jg(this.prototype,e)??{get(){return this[t]},set(o){this[t]=o}};return{get:n,set(o){const a=n==null?void 0:n.call(this);r==null||r.call(this,o),this.requestUpdate(e,a,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??Yu}static _$Ei(){if(this.hasOwnProperty(Nr("elementProperties")))return;const e=e0(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(Nr("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Nr("properties"))){const t=this.properties,i=[...Zg(t),...Qg(t)];for(const n of i)this.createProperty(n,t[n])}const e=this[Symbol.metadata];if(e!==null){const t=litPropertyMetadata.get(e);if(t!==void 0)for(const[i,n]of t)this.elementProperties.set(i,n)}this._$Eh=new Map;for(const[t,i]of this.elementProperties){const n=this._$Eu(t,i);n!==void 0&&this._$Eh.set(n,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const n of i)t.unshift(qu(n))}else e!==void 0&&t.push(qu(e));return t}static _$Eu(e,t){const i=t.attribute;return i===!1?void 0:typeof i=="string"?i:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach((t=>t(this)))}addController(e){var t;(this._$EO??(this._$EO=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&((t=e.hostConnected)==null||t.call(e))}removeController(e){var t;(t=this._$EO)==null||t.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const i of t.keys())this.hasOwnProperty(i)&&(e.set(i,this[i]),delete this[i]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Xg(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$EO)==null||e.forEach((t=>{var i;return(i=t.hostConnected)==null?void 0:i.call(t)}))}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$EO)==null||e.forEach((t=>{var i;return(i=t.hostDisconnected)==null?void 0:i.call(t)}))}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$ET(e,t){var r;const i=this.constructor.elementProperties.get(e),n=this.constructor._$Eu(e,i);if(n!==void 0&&i.reflect===!0){const o=(((r=i.converter)==null?void 0:r.toAttribute)!==void 0?i.converter:po).toAttribute(t,i.type);this._$Em=e,o==null?this.removeAttribute(n):this.setAttribute(n,o),this._$Em=null}}_$AK(e,t){var r,o;const i=this.constructor,n=i._$Eh.get(e);if(n!==void 0&&this._$Em!==n){const a=i.getPropertyOptions(n),l=typeof a.converter=="function"?{fromAttribute:a.converter}:((r=a.converter)==null?void 0:r.fromAttribute)!==void 0?a.converter:po;this._$Em=n;const u=l.fromAttribute(t,a.type);this[n]=u??((o=this._$Ej)==null?void 0:o.get(n))??u,this._$Em=null}}requestUpdate(e,t,i){var n;if(e!==void 0){const r=this.constructor,o=this[e];if(i??(i=r.getPropertyOptions(e)),!((i.hasChanged??El)(o,t)||i.useDefault&&i.reflect&&o===((n=this._$Ej)==null?void 0:n.get(e))&&!this.hasAttribute(r._$Eu(e,i))))return;this.C(e,t,i)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,t,{useDefault:i,reflect:n,wrapped:r},o){i&&!(this._$Ej??(this._$Ej=new Map)).has(e)&&(this._$Ej.set(e,o??t??this[e]),r!==!0||o!==void 0)||(this._$AL.has(e)||(this.hasUpdated||i||(t=void 0),this._$AL.set(e,t)),n===!0&&this._$Em!==e&&(this._$Eq??(this._$Eq=new Set)).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var i;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[r,o]of this._$Ep)this[r]=o;this._$Ep=void 0}const n=this.constructor.elementProperties;if(n.size>0)for(const[r,o]of n){const{wrapped:a}=o,l=this[r];a!==!0||this._$AL.has(r)||l===void 0||this.C(r,void 0,o,l)}}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),(i=this._$EO)==null||i.forEach((n=>{var r;return(r=n.hostUpdate)==null?void 0:r.call(n)})),this.update(t)):this._$EM()}catch(n){throw e=!1,this._$EM(),n}e&&this._$AE(t)}willUpdate(e){}_$AE(e){var t;(t=this._$EO)==null||t.forEach((i=>{var n;return(n=i.hostUpdated)==null?void 0:n.call(i)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&(this._$Eq=this._$Eq.forEach((t=>this._$ET(t,this[t])))),this._$EM()}updated(e){}firstUpdated(e){}};Rn.elementStyles=[],Rn.shadowRootOptions={mode:"open"},Rn[Nr("elementProperties")]=new Map,Rn[Nr("finalized")]=new Map,Xo==null||Xo({ReactiveElement:Rn}),(Bi.reactiveElementVersions??(Bi.reactiveElementVersions=[])).push("2.1.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Br=globalThis,go=Br.trustedTypes,Xu=go?go.createPolicy("lit-html",{createHTML:s=>s}):void 0,Jd="$lit$",Fi=`lit$${Math.random().toFixed(9).slice(2)}$`,Zd="?"+Fi,i0=`<${Zd}>`,xn=document,Qr=()=>xn.createComment(""),es=s=>s===null||typeof s!="object"&&typeof s!="function",$l=Array.isArray,n0=s=>$l(s)||typeof(s==null?void 0:s[Symbol.iterator])=="function",Go=`[ 	
\f\r]`,_r=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Gu=/-->/g,Ku=/>/g,Qi=RegExp(`>|${Go}(?:([^\\s"'>=/]+)(${Go}*=${Go}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Ju=/'/g,Zu=/"/g,Qd=/^(?:script|style|textarea|title)$/i,r0=s=>(e,...t)=>({_$litType$:s,strings:e,values:t}),U=r0(1),Dn=Symbol.for("lit-noChange"),Re=Symbol.for("lit-nothing"),Qu=new WeakMap,ln=xn.createTreeWalker(xn,129);function eh(s,e){if(!$l(s)||!s.hasOwnProperty("raw"))throw Error("invalid template strings array");return Xu!==void 0?Xu.createHTML(e):e}const s0=(s,e)=>{const t=s.length-1,i=[];let n,r=e===2?"<svg>":e===3?"<math>":"",o=_r;for(let a=0;a<t;a++){const l=s[a];let u,c,d=-1,h=0;for(;h<l.length&&(o.lastIndex=h,c=o.exec(l),c!==null);)h=o.lastIndex,o===_r?c[1]==="!--"?o=Gu:c[1]!==void 0?o=Ku:c[2]!==void 0?(Qd.test(c[2])&&(n=RegExp("</"+c[2],"g")),o=Qi):c[3]!==void 0&&(o=Qi):o===Qi?c[0]===">"?(o=n??_r,d=-1):c[1]===void 0?d=-2:(d=o.lastIndex-c[2].length,u=c[1],o=c[3]===void 0?Qi:c[3]==='"'?Zu:Ju):o===Zu||o===Ju?o=Qi:o===Gu||o===Ku?o=_r:(o=Qi,n=void 0);const f=o===Qi&&s[a+1].startsWith("/>")?" ":"";r+=o===_r?l+i0:d>=0?(i.push(u),l.slice(0,d)+Jd+l.slice(d)+Fi+f):l+Fi+(d===-2?a:f)}return[eh(s,r+(s[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),i]};class ts{constructor({strings:e,_$litType$:t},i){let n;this.parts=[];let r=0,o=0;const a=e.length-1,l=this.parts,[u,c]=s0(e,t);if(this.el=ts.createElement(u,i),ln.currentNode=this.el.content,t===2||t===3){const d=this.el.content.firstChild;d.replaceWith(...d.childNodes)}for(;(n=ln.nextNode())!==null&&l.length<a;){if(n.nodeType===1){if(n.hasAttributes())for(const d of n.getAttributeNames())if(d.endsWith(Jd)){const h=c[o++],f=n.getAttribute(d).split(Fi),g=/([.?@])?(.*)/.exec(h);l.push({type:1,index:r,name:g[2],strings:f,ctor:g[1]==="."?a0:g[1]==="?"?l0:g[1]==="@"?u0:So}),n.removeAttribute(d)}else d.startsWith(Fi)&&(l.push({type:6,index:r}),n.removeAttribute(d));if(Qd.test(n.tagName)){const d=n.textContent.split(Fi),h=d.length-1;if(h>0){n.textContent=go?go.emptyScript:"";for(let f=0;f<h;f++)n.append(d[f],Qr()),ln.nextNode(),l.push({type:2,index:++r});n.append(d[h],Qr())}}}else if(n.nodeType===8)if(n.data===Zd)l.push({type:2,index:r});else{let d=-1;for(;(d=n.data.indexOf(Fi,d+1))!==-1;)l.push({type:7,index:r}),d+=Fi.length-1}r++}}static createElement(e,t){const i=xn.createElement("template");return i.innerHTML=e,i}}function er(s,e,t=s,i){var o,a;if(e===Dn)return e;let n=i!==void 0?(o=t._$Co)==null?void 0:o[i]:t._$Cl;const r=es(e)?void 0:e._$litDirective$;return(n==null?void 0:n.constructor)!==r&&((a=n==null?void 0:n._$AO)==null||a.call(n,!1),r===void 0?n=void 0:(n=new r(s),n._$AT(s,t,i)),i!==void 0?(t._$Co??(t._$Co=[]))[i]=n:t._$Cl=n),n!==void 0&&(e=er(s,n._$AS(s,e.values),n,i)),e}class o0{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:i}=this._$AD,n=((e==null?void 0:e.creationScope)??xn).importNode(t,!0);ln.currentNode=n;let r=ln.nextNode(),o=0,a=0,l=i[0];for(;l!==void 0;){if(o===l.index){let u;l.type===2?u=new ls(r,r.nextSibling,this,e):l.type===1?u=new l.ctor(r,l.name,l.strings,this,e):l.type===6&&(u=new c0(r,this,e)),this._$AV.push(u),l=i[++a]}o!==(l==null?void 0:l.index)&&(r=ln.nextNode(),o++)}return ln.currentNode=xn,n}p(e){let t=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}}class ls{get _$AU(){var e;return((e=this._$AM)==null?void 0:e._$AU)??this._$Cv}constructor(e,t,i,n){this.type=2,this._$AH=Re,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=n,this._$Cv=(n==null?void 0:n.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=er(this,e,t),es(e)?e===Re||e==null||e===""?(this._$AH!==Re&&this._$AR(),this._$AH=Re):e!==this._$AH&&e!==Dn&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):n0(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==Re&&es(this._$AH)?this._$AA.nextSibling.data=e:this.T(xn.createTextNode(e)),this._$AH=e}$(e){var r;const{values:t,_$litType$:i}=e,n=typeof i=="number"?this._$AC(e):(i.el===void 0&&(i.el=ts.createElement(eh(i.h,i.h[0]),this.options)),i);if(((r=this._$AH)==null?void 0:r._$AD)===n)this._$AH.p(t);else{const o=new o0(n,this),a=o.u(this.options);o.p(t),this.T(a),this._$AH=o}}_$AC(e){let t=Qu.get(e.strings);return t===void 0&&Qu.set(e.strings,t=new ts(e)),t}k(e){$l(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,n=0;for(const r of e)n===t.length?t.push(i=new ls(this.O(Qr()),this.O(Qr()),this,this.options)):i=t[n],i._$AI(r),n++;n<t.length&&(this._$AR(i&&i._$AB.nextSibling,n),t.length=n)}_$AR(e=this._$AA.nextSibling,t){var i;for((i=this._$AP)==null?void 0:i.call(this,!1,!0,t);e!==this._$AB;){const n=e.nextSibling;e.remove(),e=n}}setConnected(e){var t;this._$AM===void 0&&(this._$Cv=e,(t=this._$AP)==null||t.call(this,e))}}class So{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,i,n,r){this.type=1,this._$AH=Re,this._$AN=void 0,this.element=e,this.name=t,this._$AM=n,this.options=r,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=Re}_$AI(e,t=this,i,n){const r=this.strings;let o=!1;if(r===void 0)e=er(this,e,t,0),o=!es(e)||e!==this._$AH&&e!==Dn,o&&(this._$AH=e);else{const a=e;let l,u;for(e=r[0],l=0;l<r.length-1;l++)u=er(this,a[i+l],t,l),u===Dn&&(u=this._$AH[l]),o||(o=!es(u)||u!==this._$AH[l]),u===Re?e=Re:e!==Re&&(e+=(u??"")+r[l+1]),this._$AH[l]=u}o&&!n&&this.j(e)}j(e){e===Re?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class a0 extends So{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===Re?void 0:e}}class l0 extends So{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==Re)}}class u0 extends So{constructor(e,t,i,n,r){super(e,t,i,n,r),this.type=5}_$AI(e,t=this){if((e=er(this,e,t,0)??Re)===Dn)return;const i=this._$AH,n=e===Re&&i!==Re||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,r=e!==Re&&(i===Re||n);n&&this.element.removeEventListener(this.name,this,i),r&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t;typeof this._$AH=="function"?this._$AH.call(((t=this.options)==null?void 0:t.host)??this.element,e):this._$AH.handleEvent(e)}}class c0{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){er(this,e)}}const Ko=Br.litHtmlPolyfillSupport;Ko==null||Ko(ts,ls),(Br.litHtmlVersions??(Br.litHtmlVersions=[])).push("3.3.1");const d0=(s,e,t)=>{const i=(t==null?void 0:t.renderBefore)??e;let n=i._$litPart$;if(n===void 0){const r=(t==null?void 0:t.renderBefore)??null;i._$litPart$=n=new ls(e.insertBefore(Qr(),r),r,void 0,t??{})}return n._$AI(s),n};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const mn=globalThis;let Q=class extends Rn{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t;const e=super.createRenderRoot();return(t=this.renderOptions).renderBefore??(t.renderBefore=e.firstChild),e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=d0(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return Dn}};var ac;Q._$litElement$=!0,Q.finalized=!0,(ac=mn.litElementHydrateSupport)==null||ac.call(mn,{LitElement:Q});const Jo=mn.litElementPolyfillSupport;Jo==null||Jo({LitElement:Q});(mn.litElementVersions??(mn.litElementVersions=[])).push("4.2.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const oe=s=>(e,t)=>{t!==void 0?t.addInitializer((()=>{customElements.define(s,e)})):customElements.define(s,e)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const h0={attribute:!0,type:String,converter:po,reflect:!1,hasChanged:El},f0=(s=h0,e,t)=>{const{kind:i,metadata:n}=t;let r=globalThis.litPropertyMetadata.get(n);if(r===void 0&&globalThis.litPropertyMetadata.set(n,r=new Map),i==="setter"&&((s=Object.create(s)).wrapped=!0),r.set(t.name,s),i==="accessor"){const{name:o}=t;return{set(a){const l=e.get.call(this);e.set.call(this,a),this.requestUpdate(o,l,s)},init(a){return a!==void 0&&this.C(o,void 0,s,a),a}}}if(i==="setter"){const{name:o}=t;return function(a){const l=this[o];e.call(this,a),this.requestUpdate(o,l,s)}}throw Error("Unsupported decorator location: "+i)};function z(s){return(e,t)=>typeof t=="object"?f0(s,e,t):((i,n,r)=>{const o=n.hasOwnProperty(r);return n.constructor.createProperty(r,i),o?Object.getOwnPropertyDescriptor(n,r):void 0})(s,e,t)}const p0="/src/6fcbae.png",g0="/src/2fe1e5.png",m0="/src/d23901.png",_0="/src/09b1b5.png",v0="/src/64d59d.png",y0="/src/6db26f.png",b0="/src/34521f.png",x0="/src/bda8b1.png",D0="/src/25e321.png",w0="/src/7a9943.png",C0="/src/a20a34.png";var S0=Object.defineProperty,E0=Object.getOwnPropertyDescriptor,us=(s,e,t,i)=>{for(var n=i>1?void 0:i?E0(e,t):e,r=s.length-1,o;r>=0;r--)(o=s[r])&&(n=(i?o(e,t,n):o(n))||n);return i&&n&&S0(e,t,n),n};let tr=class extends Q{constructor(){super(...arguments),this.lang=_.language,this.currentIndex=0,this.screens=[],this.updateScreens=()=>{},this.handleLanguageChange=()=>{this.lang=_.language}}connectedCallback(){super.connectedCallback(),_.on("languageChanged",this.handleLanguageChange)}disconnectedCallback(){super.disconnectedCallback(),_.off("languageChanged",this.handleLanguageChange)}firstUpdated(s){const e=document.querySelectorAll(".carrossel img");this.currentIndex=0,this.screens=e,this.updateScreens=()=>{this.screens.forEach((n,r)=>{r===this.currentIndex?ne.to(n,{opacity:1,duration:.4,y:0,delay:.2,onStart:()=>n.classList.remove("invisible")}):ne.to(n,{opacity:0,duration:.4,y:"2rem",onComplete:()=>n.classList.add("invisible")})})},this.updateScreens();const t=this.renderRoot.querySelector("button:first-of-type"),i=this.renderRoot.querySelector("button:last-of-type");t&&i&&(t.addEventListener("click",()=>{this.currentIndex=(this.currentIndex-1+this.screens.length)%this.screens.length,this.updateScreens()}),i.addEventListener("click",()=>{this.currentIndex=(this.currentIndex+1)%this.screens.length,this.updateScreens()}))}render(){return U`
      <section class="relative">
        <div class="container">
          <div class="carrossel relative overflow-hidden rounded-b-2xl">
            <img
              src="${p0}"
              width="1728"
              height="976"
              class="relative rounded-2xl"
              loading="lazy"
            />
            <img
              src="${g0}"
              width="1920"
              height="1080"
              class="invisible absolute left-0 top-0 rounded-2xl"
              loading="lazy"
            />
            <img
              src="${m0}"
              width="1920"
              height="1080"
              class="invisible absolute left-0 top-0 rounded-2xl"
              loading="lazy"
            />
            <img
              src="${_0}"
              width="1920"
              height="1080"
              class="invisible absolute left-0 top-0 rounded-2xl"
              loading="lazy"
            />
            <img
              src="${v0}"
              width="1920"
              height="1080"
              class="invisible absolute left-0 top-0 rounded-2xl"
              loading="lazy"
            />
            <img
              src="${y0}"
              width="1920"
              height="1080"
              class="invisible absolute left-0 top-0 rounded-2xl"
              loading="lazy"
            />
            <img
              src="${b0}"
              width="1920"
              height="1080"
              class="invisible absolute left-0 top-0 rounded-2xl"
            />
            <img
              src="${x0}"
              width="1920"
              height="1080"
              class="invisible absolute left-0 top-0 rounded-2xl"
              loading="lazy"
            />
            <img
              src="${D0}"
              width="1920"
              height="1080"
              class="invisible absolute left-0 top-0 rounded-2xl"
              loading="lazy"
            />
            <img
              src="${w0}"
              width="1920"
              height="1080"
              class="invisible absolute left-0 top-0 rounded-2xl"
              loading="lazy"
            />
            <img
              src="${C0}"
              width="1920"
              height="1080"
              class="invisible absolute left-0 top-0 rounded-2xl"
              loading="lazy"
            />
          </div>
          <div class="absolute inset-0">
            <div
              class="sticky top-[calc(100dvh-4rem)] translate-y-full isolate flex h-16 items-center justify-center after:absolute after:-inset-px after:z-10 after:rounded-b-2xl after:bg-zinc-950/50 after:backdrop-blur-md after:content-['']"
            >
              <div class="relative z-20 flex gap-px">
                <button
                  class="flex items-center gap-4 rounded-s-full bg-zinc-50/10 py-3 pe-4 ps-5 text-[.75rem] uppercase leading-none tracking-[.05em] text-zinc-100 transition-all hover:bg-zinc-100 hover:text-zinc-950"
                >
                  Prev
                </button>

                <span
                  class="flex items-center justify-center bg-zinc-50/5 px-4 font-mono text-[.75rem] font-medium uppercase leading-none tracking-[.05em] text-zinc-50/50"
                >
                  ${this.currentIndex+1} / ${this.screens.length}
                </span>
                <button
                  class="flex items-center gap-4 rounded-e-full bg-zinc-50/10 py-3 pe-5 ps-4 text-[.75rem] uppercase leading-none tracking-[.05em] text-zinc-100 transition-all hover:bg-zinc-100 hover:text-zinc-950"
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    `}createRenderRoot(){return this}};us([z({type:String})],tr.prototype,"lang",2);us([z({type:Number})],tr.prototype,"currentIndex",2);us([z({type:Array})],tr.prototype,"screens",2);us([z({type:Function})],tr.prototype,"updateScreens",2);tr=us([oe("allu-press")],tr);const $0="/src/5c2c4b.webp",P0="/src/36c011.webp",k0="/src/c5764d.webp",T0="/src/a374cc.webp",O0="/src/bf87a5.webp",F0="/src/fd8081.webp";var A0=Object.defineProperty,L0=Object.getOwnPropertyDescriptor,th=(s,e,t,i)=>{for(var n=i>1?void 0:i?L0(e,t):e,r=s.length-1,o;r>=0;r--)(o=s[r])&&(n=(i?o(e,t,n):o(n))||n);return i&&n&&A0(e,t,n),n};let ka=class extends Q{constructor(){super(...arguments),this.lang=_.language,this.handleLanguageChange=()=>{this.lang=_.language}}connectedCallback(){super.connectedCallback(),_.on("languageChanged",this.handleLanguageChange)}disconnectedCallback(){super.disconnectedCallback(),_.off("languageChanged",this.handleLanguageChange)}render(){const s=`
      <p class="mb-3 text-[.875rem]">
        ${_.t("allugator.description")}
      </p>
      <div class="my-3 grid gap-3 border-s border-zinc-800 ps-4">
        <h3 class="text-[1.25rem] leading-none text-zinc-100">
          ${_.t("allugator.metrics.valuation.title")}
        </h3>
        <p class="text-[.875rem] leading-none">${_.t("allugator.metrics.valuation.subtitle")}</p>
      </div>
      <div class="my-3 grid gap-3 border-s border-zinc-800 ps-4">
        <h3 class="text-[1.25rem] leading-none text-zinc-100">
          ${_.t("allugator.metrics.users.title")}
        </h3>
        <p class="text-[.875rem] leading-none">${_.t("allugator.metrics.users.subtitle")}</p>
      </div>
      <div class="my-3 grid gap-3 border-s border-zinc-800 ps-4">
        <h3 class="text-[1.25rem] leading-none text-zinc-100">
          ${_.t("allugator.metrics.daily.title")}
        </h3>
        <p class="text-[.875rem] leading-none">${_.t("allugator.metrics.daily.subtitle")}</p>
      </div>
    `;return U`
      <div id="allugator" class="grid grid-cols-3 gap-16 py-16">
        <item-header
          title="${_.t("allugator.title")}"
          tags="${_.t("allugator.tags")}"
          year="${_.t("allugator.year")}"
          .contentHtml=${s}
        ></item-header>
        <div class="col-span-2 grid grid-cols-3 gap-4 *:rounded-[.5rem]">
          <img src="${$0}" loading="lazy" />
          <img src="${O0}" loading="lazy" />
          <img src="${k0}" loading="lazy" />
          <img class="col-span-2 row-span-2" src="${P0}" loading="lazy" />
          <img src="${T0}" loading="lazy" />
          <img src="${F0}" loading="lazy" />
          <div class="col-span-3">
            <allu-press></allu-press>
          </div>
        </div>
      </div>
    `}createRenderRoot(){return this}};th([z({type:String})],ka.prototype,"lang",2);ka=th([oe("projects-allugator")],ka);const z0="/src/39683d.webp",M0="/src/15c264.webp",R0="/src/295098.webp",j0="/src/778272.webp",I0="/src/50783c.webp";var N0=Object.defineProperty,B0=Object.getOwnPropertyDescriptor,ih=(s,e,t,i)=>{for(var n=i>1?void 0:i?B0(e,t):e,r=s.length-1,o;r>=0;r--)(o=s[r])&&(n=(i?o(e,t,n):o(n))||n);return i&&n&&N0(e,t,n),n};let Ta=class extends Q{constructor(){super(...arguments),this.lang=_.language,this.handleLanguageChange=()=>{this.lang=_.language}}connectedCallback(){super.connectedCallback(),_.on("languageChanged",this.handleLanguageChange)}disconnectedCallback(){super.disconnectedCallback(),_.off("languageChanged",this.handleLanguageChange)}renderDescription(){return`${_.t("damus.description1")}`}render(){const s=`
      <p class="text-[.875rem]">
        ${this.renderDescription()}
      </p>
      <p class="text-[.875rem]">
        ${_.t("damus.description2")}
      </p>
    `;return U`
      <div id="damus" class="grid grid-cols-3 gap-16 py-16">
        <item-header
          title="${_.t("damus.title")}"
          tags="${_.t("damus.tags")}"
          year="${_.t("damus.year")}"
          .contentHtml=${s}
        ></item-header>
        <div class="col-span-2 grid grid-cols-2 gap-4 *:rounded-[.5rem]">
          <img src="${z0}" loading="lazy" />
          <img src="${M0}" loading="lazy" />
          <img src="${R0}" loading="lazy"/>
          <img src="${I0}" loading="lazy"/>
          <img class="col-span-2" src="${j0}" loading="lazy"/>
        </div>
      </div>
    `}createRenderRoot(){return this}};ih([z({type:String})],Ta.prototype,"lang",2);Ta=ih([oe("projects-damus")],Ta);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const H0={CHILD:2},U0=s=>(...e)=>({_$litDirective$:s,values:e});class V0{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,i){this._$Ct=e,this._$AM=t,this._$Ci=i}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Oa extends V0{constructor(e){if(super(e),this.it=Re,e.type!==H0.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===Re||e==null)return this._t=void 0,this.it=e;if(e===Dn)return e;if(typeof e!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.it)return this._t;this.it=e;const t=[e];return t.raw=t,this._t={_$litType$:this.constructor.resultType,strings:t,values:[]}}}Oa.directiveName="unsafeHTML",Oa.resultType=1;const wi=U0(Oa);var q0=Object.defineProperty,W0=Object.getOwnPropertyDescriptor,nh=(s,e,t,i)=>{for(var n=i>1?void 0:i?W0(e,t):e,r=s.length-1,o;r>=0;r--)(o=s[r])&&(n=(i?o(e,t,n):o(n))||n);return i&&n&&q0(e,t,n),n};let Fa=class extends Q{constructor(){super(...arguments),this.lang=_.language,this.handleLanguageChange=()=>{this.lang=_.language}}connectedCallback(){super.connectedCallback(),_.on("languageChanged",this.handleLanguageChange)}disconnectedCallback(){super.disconnectedCallback(),_.off("languageChanged",this.handleLanguageChange)}render(){return U`
      <div class="pt-16 pb-8 px-3">
        <div class="flex items-center gap-6">
          <h1
            class="text-[2.5rem] leading-none tracking-[-0.05em] xl:text-[3rem] 2xl:text-[4rem] text-zinc-100"
          >
            ${wi(_.t("featured.title"))}
          </h1>
        </div>
      </div>
    `}createRenderRoot(){return this}};nh([z({type:String})],Fa.prototype,"lang",2);Fa=nh([oe("projects-header")],Fa);const Y0="/src/e761eb.webp",X0="/src/140c7b.webp",G0="/src/36a4a4.webp",K0="/src/ae754e.webp",J0="/src/492162.webp",Z0="/src/bec54c.webp",Q0="/src/555530.webp",em="/src/6a0945.webp",tm="/src/4fb0f0.webp",im="/src/52e81e.webp",nm="/src/f150ed.webp",rm="/src/55a96b.webp",sm="/src/85d489.webp";var om=Object.defineProperty,am=Object.getOwnPropertyDescriptor,rh=(s,e,t,i)=>{for(var n=i>1?void 0:i?am(e,t):e,r=s.length-1,o;r>=0;r--)(o=s[r])&&(n=(i?o(e,t,n):o(n))||n);return i&&n&&om(e,t,n),n};let Aa=class extends Q{constructor(){super(...arguments),this.src="",this.overlayRafId=0,this.onKeydown=s=>{s.key==="Escape"&&this.close()},this.onBackdropClick=s=>{s.target===this.querySelector(".zoom-overlay")&&this.close()},this.close=()=>{this.remove()}}connectedCallback(){var s;super.connectedCallback(),(s=window.lenis)==null||s.stop(),document.body.style.overflow="hidden",document.addEventListener("keydown",this.onKeydown)}disconnectedCallback(){var s,e,t;super.disconnectedCallback(),this.overlayRafId&&cancelAnimationFrame(this.overlayRafId),this.overlayRafId=0,(e=(s=this.overlayLenis)==null?void 0:s.destroy)==null||e.call(s),this.overlayLenis=void 0,(t=window.lenis)==null||t.start(),document.body.style.overflow="",document.removeEventListener("keydown",this.onKeydown)}firstUpdated(){const s=this.querySelector(".zoom-overlay"),e=this.querySelector(".zoom-content");if(!s||!e)return;this.overlayLenis=new gc({wrapper:s,content:e});const t=i=>{var n;(n=this.overlayLenis)==null||n.raf(i),this.overlayRafId=requestAnimationFrame(t)};this.overlayRafId=requestAnimationFrame(t),s.addEventListener("click",this.onBackdropClick)}render(){return U`
      <button class="${"fixed right-5 leading-none top-5 z-60 flex transition-all ps-3 pe-1 xl:pe-1.5 gap-1 h-8 rounded-full items-center hover:bg-zinc-100 hover:text-zinc-950 hover:font-semibold text-zinc-100"}" @click=${this.close}>
        Esc
        <svg
          class="size-5 stroke-zinc-100"
          stroke-width="2"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.75827 17.2426L12.0009 12M17.2435 6.75736L12.0009 12M12.0009 12L6.75827 6.75736M12.0009 12L17.2435 17.2426"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      </button>
      <div
        class="zoom-overlay fixed inset-0 z-50 overflow-auto overscroll-contain bg-zinc-50/20 backdrop-blur backdrop-brightness-50"
      >
        <div class="zoom-content container max-w-[1280px] my-24">
          <picture>
            <img src="${J0}" width="1920" height="1136" type="image/webp" class="rounded-t-[.5rem]" />
            <img src="${Z0}" width="1920" height="800" loading="lazy" type="image/webp" />
            <img src="${Q0}" width="1920" height="800" loading="lazy" type="image/webp" />
            <img src="${em}" width="1920" height="800" loading="lazy" type="image/webp" />
            <img src="${tm}" width="1920" height="800" loading="lazy" type="image/webp" />
            <img src="${im}" width="1920" height="800" loading="lazy" type="image/webp" />
            <img src="${nm}" width="1920" height="800" loading="lazy" type="image/webp" />
            <img src="${rm}" width="1920" height="800" loading="lazy" type="image/webp" />
            <img src="${sm}" width="1920" height="236" loading="lazy" type="image/webp" class="rounded-b-[.5rem]" />
          </picture>
        </div>
      </div>
    `}createRenderRoot(){return this}};rh([z({type:String})],Aa.prototype,"src",2);Aa=rh([oe("img-zoom")],Aa);var lm=Object.defineProperty,um=Object.getOwnPropertyDescriptor,sh=(s,e,t,i)=>{for(var n=i>1?void 0:i?um(e,t):e,r=s.length-1,o;r>=0;r--)(o=s[r])&&(n=(i?o(e,t,n):o(n))||n);return i&&n&&lm(e,t,n),n};let La=class extends Q{constructor(){super(...arguments),this.lang=_.language,this.handleLanguageChange=()=>{this.lang=_.language},this.createZoomBox=s=>{const e=document.createElement("img-zoom");return e.setAttribute("src",s.src),e},this.handleSeeFullPage=()=>{const s=document.querySelector("#ifficient-homepage");if(s){const e=this.createZoomBox(s);document.body.appendChild(e)}}}connectedCallback(){super.connectedCallback(),_.on("languageChanged",this.handleLanguageChange)}disconnectedCallback(){super.disconnectedCallback(),_.off("languageChanged",this.handleLanguageChange)}render(){const s=`
      <p class="text-[.875rem]">
        ${_.t("ifficient.description1")}
      </p>
      <p class="text-[.875rem]">
        ${_.t("ifficient.description2")}
      </p>
      <a
        href="/last-project"
        class="cta-button inline-flex items-center gap-4 mt-6 px-6"
      >
        ${_.t("ifficient.cta")}
      </a>
    `;return U`
      <div id="ifficient" class="grid grid-cols-3 gap-16 py-16">
        <item-header title="${_.t("ifficient.title")}" tags="${_.t("ifficient.tags")}" .contentHtml=${s}></item-header>
        <div class="col-span-2 grid gap-4 *:rounded-[.75rem]">
          <div
            class="relative group cursor-pointer aspect-video overflow-hidden border-2 border-zinc-900 before:hover:opacity-1 before:absolute before:inset-0 hover:before:bg-zinc-950/50 before:transition-colors before:duration-200"
            @click=${this.handleSeeFullPage}
          >
            <img id="ifficient-homepage" class="w-full" src="${Y0}" />
            <div
              class="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 rounded-full py-3 px-5 text-[1rem] font-medium leading-[20px] text-zinc-50 opacity-0 group-hover:opacity-100 transition-all backdrop-blur duration-200 bg-zinc-100/15 hover:bg-zinc-100/30"
            >
              ${_.t("ifficient.fullView")}
            </div>
          </div>
          <div class="grid grid-cols-3 gap-4 *:rounded-[.75rem]">
            <img src="${G0}" />
            <img src="${X0}" />
            <img src="${K0}" />
          </div>
        </div>
      </div>
    `}createRenderRoot(){return this}};sh([z({type:String})],La.prototype,"lang",2);La=sh([oe("projects-ifficient")],La);var cm=Object.defineProperty,dm=Object.getOwnPropertyDescriptor,cs=(s,e,t,i)=>{for(var n=i>1?void 0:i?dm(e,t):e,r=s.length-1,o;r>=0;r--)(o=s[r])&&(n=(i?o(e,t,n):o(n))||n);return i&&n&&cm(e,t,n),n};let ir=class extends Q{constructor(){super(...arguments),this.title="",this.tags="",this.year="2025",this.contentHtml=""}connectedCallback(){super.connectedCallback()}disconnectedCallback(){super.disconnectedCallback()}render(){const e=this.tags.split(",").map(t=>t.trim()).map(t=>U`<span class="text-[.875rem] text-zinc-600">/</span><span>${t}</span>`);return U`
      <div class="sticky top-20 grid items-end gap-8">
        <div class="mb-2 flex flex-wrap gap-2 leading-none text-[.875rem]">
          <span class="text-zinc-100"> ${this.year} </span>
          ${e}
        </div>
        <h2 class="text-[2.5rem] leading-none text-zinc-100">${this.title}</h2>
        ${this.contentHtml?U`<div class="flex flex-col gap-4 text-balance leading-loose items-start">
              ${wi(this.contentHtml)}
            </div>`:null}
      </div>
    `}createRenderRoot(){return this}};cs([z({type:String})],ir.prototype,"title",2);cs([z({type:String})],ir.prototype,"tags",2);cs([z({type:String})],ir.prototype,"year",2);cs([z({type:String})],ir.prototype,"contentHtml",2);ir=cs([oe("item-header")],ir);class hm{constructor(){this._dark=!0,this.listeners=new Set}get dark(){return this._dark}set dark(e){this._dark=e,document.documentElement.classList.toggle("dark",e),localStorage.setItem("theme",e?"dark":"light"),this.notifyListeners()}toggle(){this.dark=!this.dark}subscribe(e){this.listeners.add(e)}unsubscribe(e){this.listeners.delete(e)}notifyListeners(){this.listeners.forEach(e=>{e.requestUpdate()})}init(){const e=localStorage.getItem("theme");e&&(this._dark=e==="dark"),document.documentElement.classList.toggle("dark",this._dark)}}const vr=new hm,Cn=s=>class extends s{connectedCallback(){super.connectedCallback(),vr.subscribe(this)}disconnectedCallback(){super.disconnectedCallback(),vr.unsubscribe(this)}get dark(){return vr.dark}set dark(e){vr.dark=e}toggleTheme(){vr.toggle()}},fm="/src/bf8bfa.png";var pm=Object.defineProperty,gm=Object.getOwnPropertyDescriptor,Pl=(s,e,t,i)=>{for(var n=i>1?void 0:i?gm(e,t):e,r=s.length-1,o;r>=0;r--)(o=s[r])&&(n=(i?o(e,t,n):o(n))||n);return i&&n&&pm(e,t,n),n};let mo=class extends Cn(Q){constructor(){super(),this.more=!1,this.lang=_.language,this.handleLanguageChange=()=>{this.lang=_.language};const s=localStorage.getItem("lang");s&&(this.lang=s,_.changeLanguage(s))}connectedCallback(){super.connectedCallback(),_.on("languageChanged",this.handleLanguageChange)}disconnectedCallback(){super.disconnectedCallback(),_.off("languageChanged",this.handleLanguageChange)}changeLang(){const e=_.language==="en"?"pt":"en";_.changeLanguage(e),localStorage.setItem("lang",e),this.lang=e}changeTheme(){this.toggleTheme()}copyEmail(){navigator.clipboard.writeText("hello@pmjr.cc").then(()=>{this.updateText(this.lang==="en"?"Copied!":"Copiado!",0)}).catch(e=>{alert(`Failed to copy email: ${e}`)})}copyEmailReset(){this.updateText(this.lang==="en"?"Click to copy":"Copiar e-mail",300)}updateText(s,e){const t=document.querySelector("mail-button span");t&&setTimeout(()=>{t.textContent=s},e)}firstUpdated(){ne.to("header",{scrollTrigger:{trigger:"header",start:"bottom top",toggleActions:"play none none reverse",scrub:2},outline:"1px solid hsla(0 0 100% / 0.05)",padding:"0 0 0 0"})}getPreviousPage(){window.location.href="/"}render(){return U`
      <header
        class="absolute inset-x-0 z-40 hidden w-full bg-linear-to-b from-zinc-950 backdrop-blur to-zinc-950/80 backdrop-saturate-200 xl:fixed xl:block py-2"
      >
        <div class="container grid items-center xl:grid-cols-3">
          <div class="flex items-center">
            <button
              @click=${()=>this.getPreviousPage()}
              class="flex size-12 p-3 cursor-pointer transition-background duration-500 items-center justify-center *:opacity-75 *:hover:opacity-100 hover:bg-zinc-950"
              title="Go back homepage"
            >
              <img
                src="${fm}"
                class="transition-opacity duration-500"
                title="Back to homepage"
              />
            </button>
            <mail-button
              @click=${()=>this.copyEmail()}
              @mouseleave=${()=>this.copyEmailReset()}
              label="hello@pmjr.cc"
              hover="${this.lang==="en"?"Click to copy":"Copiar e-mail"}"
            ></mail-button>
          </div>
          <nav>
            <ul id="anchors" class="flex justify-evenly px-5 xl:px-10">
              <li class="flex-1">
                <menu-item
                  href="#ifficient"
                  label="Ifficient"
                ></menu-item>
              </li>
              <li class="flex-1">
                <menu-item
                  href="#damus"
                  label="Damus"
                ></menu-item>
              </li>
              <li class="flex-1">
                <menu-item
                  href="#allugator"
                  label="Allugator"
                ></menu-item>
              </li>
              <li class="flex-1">
                <menu-item
                  href="#multiplayer"
                  label="Multiplayer"
                ></menu-item>
              </li>
            </ul>
            <div
              id="copy"
              class="absolute flex h-12 w-full items-center justify-center px-5 font-mono text-[.625rem] font-semibold uppercase xl:hidden bg-zinc-900"
            >
              <span> Copyright 2025 Paulo Melo Jr. </span>
            </div>
          </nav>
          <div class="flex justify-end">
            <div class="flex items-center justify-center gap-2">
              <a
                class="cta-button flex items-center gap-2 uppercase font-semibold text-[.75rem] py-1.5 pe-2 tracking-[0.05em]"
                href="/Paulo Melo Jr. - Currículo.pdf"
                target="_blank"
              >
                ${this.lang==="en"?"Resume":"Currículo"}
                <svg
                  alt="${this.lang==="en"?"Download":"Baixar"}"
                  width="20px"
                  height="20px"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 13V22M12 22L15.5 18.5M12 22L8.5 18.5"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M20 17.6073C21.4937 17.0221 23 15.6889 23 13C23 9 19.6667 8 18 8C18 6 18 2 12 2C6 2 6 6 6 8C4.33333 8 1 9 1 13C1 15.6889 2.50628 17.0221 4 17.6073"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </a>
              <div class="flex h-12 items-center justify-center px-1">
                <lang-button
                  @click=${()=>this.changeLang()}
                  label=${this.lang==="pt"?"PT · BR":"EN · US"}
                  title="${this.lang==="en"?"Mudar para português":"Change to english"}"
                ></lang-button>
              </div>
            </div>
          </div>
        </div>
      </header>
    `}createRenderRoot(){return this}};Pl([z({type:Boolean})],mo.prototype,"more",2);Pl([z({type:String})],mo.prototype,"lang",2);mo=Pl([oe("projects-menu")],mo);const mm="/src/00c014.webp",_m="/src/f89330.webp",vm="/src/342435.webp",ym="/src/8e3288.webp",bm="/src/a44924.webp",xm="/src/a6b260.webp",Dm="/src/53e6da.gif",wm="/src/73910b.webp",Cm="/src/b808d9.webp",Sm="/src/80a3c2.gif",Em="/src/dd2f35.webp";var $m=Object.defineProperty,Pm=Object.getOwnPropertyDescriptor,oh=(s,e,t,i)=>{for(var n=i>1?void 0:i?Pm(e,t):e,r=s.length-1,o;r>=0;r--)(o=s[r])&&(n=(i?o(e,t,n):o(n))||n);return i&&n&&$m(e,t,n),n};let za=class extends Q{constructor(){super(...arguments),this.lang=_.language,this.handleLanguageChange=()=>{this.lang=_.language}}connectedCallback(){super.connectedCallback(),_.on("languageChanged",this.handleLanguageChange)}disconnectedCallback(){super.disconnectedCallback(),_.off("languageChanged",this.handleLanguageChange)}render(){const s=`
      <p class="text-[.875rem]">
        ${_.t("multiplayer.description1")}
      </p>
      <p class="mb-3 text-[.875rem]">
        ${_.t("multiplayer.description2")}
      </p>
      <div class="my-3 grid gap-3 border-s border-zinc-800 ps-4">
        <h3 class="text-[1.25rem] leading-none text-zinc-100">
          ${_.t("multiplayer.metrics.audience.title")}
        </h3>
        <p class="text-[.875rem] leading-none">${_.t("multiplayer.metrics.audience.subtitle")}</p>
      </div>
      <div class="my-3 grid gap-3 border-s border-zinc-800 ps-4">
        <h3 class="text-[1.25rem] leading-none text-zinc-100">
          ${_.t("multiplayer.metrics.facebook.title")}
        </h3>
        <p class="text-[.875rem] leading-none">${_.t("multiplayer.metrics.facebook.subtitle")}</p>
      </div>
      <div class="my-3 grid gap-3 border-s border-zinc-800 ps-4">
        <h3 class="text-[1.25rem] leading-none text-zinc-100">
          ${_.t("multiplayer.metrics.youtube.title")}
        </h3>
        <p class="text-[.875rem] leading-none">${_.t("multiplayer.metrics.youtube.subtitle")}</p>
      </div>
    `;return U`
      <div id="multiplayer" class="grid grid-cols-3 gap-16 py-16">
        <item-header
          title="${_.t("multiplayer.title")}"
          tags="${_.t("multiplayer.tags")}"
          year="${_.t("multiplayer.year")}"
          .contentHtml=${s}
        ></item-header>
        <div class="col-span-2 grid grid-cols-2 gap-4 *:rounded-[.5rem]">
          <img src="${_m}" loading="lazy" />
          <img src="${vm}" loading="lazy" />
          <img src="${bm}" loading="lazy"/>
          <img src="${xm}" loading="lazy"/>
          <img src="${Sm}" loading="lazy"/>
          <img src="${ym}" loading="lazy"/>
          <img src="${Cm}" loading="lazy"/>
          <img src="${Em}" loading="lazy"/>
          <img src="${wm}" loading="lazy"/>
          <img src="${Dm}" loading="lazy"/>
          <img class="col-span-2" src="${mm}" loading="lazy" />
        </div>
      </div>
    `}createRenderRoot(){return this}};oh([z({type:String})],za.prototype,"lang",2);za=oh([oe("projects-multiplayer")],za);var km=Object.defineProperty,Tm=Object.getOwnPropertyDescriptor,ds=(s,e,t,i)=>{for(var n=i>1?void 0:i?Tm(e,t):e,r=s.length-1,o;r>=0;r--)(o=s[r])&&(n=(i?o(e,t,n):o(n))||n);return i&&n&&km(e,t,n),n};let nr=class extends Q{constructor(){super(...arguments),this.lang=_.language,this.currentIndex=0,this.screens=[],this.updateScreens=()=>{},this.handleLanguageChange=()=>{this.lang=_.language}}connectedCallback(){super.connectedCallback(),_.on("languageChanged",this.handleLanguageChange)}disconnectedCallback(){super.disconnectedCallback(),_.off("languageChanged",this.handleLanguageChange)}firstUpdated(s){const e=document.querySelectorAll(".carrossel img");this.currentIndex=0,this.screens=e,this.updateScreens=()=>{this.screens.forEach((n,r)=>{r===this.currentIndex?ne.to(n,{opacity:1,duration:.4,y:0,delay:.2,onStart:()=>n.classList.remove("invisible")}):ne.to(n,{opacity:0,duration:.4,y:100,onComplete:()=>n.classList.add("invisible")})})},this.updateScreens();const t=this.renderRoot.querySelector("button:first-of-type"),i=this.renderRoot.querySelector("button:last-of-type");t&&i&&(t.addEventListener("click",()=>{this.currentIndex=(this.currentIndex-1+this.screens.length)%this.screens.length,this.updateScreens()}),i.addEventListener("click",()=>{this.currentIndex=(this.currentIndex+1)%this.screens.length,this.updateScreens()}))}render(){return U`
      <section class="relative mt-32">
        <div class="container">
          <div class="carrossel relative overflow-hidden">
            <img
              src=""
              width="1728"
              height="976"
              class="relative rounded-[.5rem]"
            />
            <img
              src=""
              width="1728"
              height="976"
              class="invisible absolute left-0 top-0 rounded-[.5rem]"
            />
            <img
              src=""
              width="1728"
              height="976"
              class="invisible absolute left-0 top-0 rounded-[.5rem]"
            />
          </div>
          <div class="absolute inset-0">
            <div
              class="sticky -inset-x-4 top-[calc(100dvh-12rem)] isolate flex h-48 items-end justify-center after:absolute after:inset-0 after:z-10 after:bg-linear-to-t after:from-zinc-950 after:content-['']"
            >
              <progressive-blur></progressive-blur>
              <div class="relative z-20 flex gap-px pb-2">
                <button
                  class="flex items-center gap-4 rounded-s-full bg-zinc-100/10 py-3 pe-4 ps-5 text-[.75rem] uppercase leading-none tracking-[.05em] text-zinc-100 transition-all hover:bg-zinc-100 hover:text-zinc-950"
                >
                  Prev
                </button>

                <span
                  class="flex items-center justify-center bg-zinc-50/5 px-4 font-mono text-[.75rem] font-medium uppercase leading-none tracking-[.05em]"
                >
                  ${this.currentIndex+1} / ${this.screens.length}
                </span>
                <button
                  class="flex items-center gap-4 rounded-e-full bg-zinc-100/10 py-3 pe-5 ps-4 text-[.75rem] uppercase leading-none tracking-[.05em] text-zinc-100 transition-all hover:bg-zinc-100 hover:text-zinc-950"
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    `}createRenderRoot(){return this}};ds([z({type:String})],nr.prototype,"lang",2);ds([z({type:Number})],nr.prototype,"currentIndex",2);ds([z({type:Array})],nr.prototype,"screens",2);ds([z({type:Function})],nr.prototype,"updateScreens",2);nr=ds([oe("projects-screens")],nr);var Om=Object.getOwnPropertyDescriptor,Fm=(s,e,t,i)=>{for(var n=i>1?void 0:i?Om(e,t):e,r=s.length-1,o;r>=0;r--)(o=s[r])&&(n=o(n)||n);return n};let ec=class extends Cn(Q){render(){return U`
      <section class="container pt-12">
        <projects-header></projects-header>
        <div class="px-3">
          <projects-ifficient></projects-ifficient>
          <div
            class="my-16 h-px w-full bg-linear-to-r from-transparent via-zinc-700 to-transparent xl:block"
          ></div>
          <projects-damus></projects-damus>
          <div
            class="my-16 h-px w-full bg-linear-to-r from-transparent via-zinc-700 to-transparent xl:block"
          ></div>
          <projects-allugator></projects-allugator>
          <div
            class="my-16 h-px w-full bg-linear-to-r from-transparent via-zinc-700 to-transparent xl:block"
          ></div>
          <projects-multiplayer></projects-multiplayer>
          <div
            class="mt-16 mb-32 h-px w-full bg-linear-to-r bg-transparent"
          ></div>
          <cases-section></cases-section>
        </div>
      </section>
    `}createRenderRoot(){return this}};ec=Fm([oe("projects-index")],ec);var Am=Object.defineProperty,Lm=Object.getOwnPropertyDescriptor,ah=(s,e,t,i)=>{for(var n=i>1?void 0:i?Lm(e,t):e,r=s.length-1,o;r>=0;r--)(o=s[r])&&(n=(i?o(e,t,n):o(n))||n);return i&&n&&Am(e,t,n),n};let Ma=class extends Q{constructor(){super(...arguments),this.lang=_.language,this.handleLanguageChange=()=>{this.lang=_.language}}connectedCallback(){super.connectedCallback(),_.on("languageChanged",this.handleLanguageChange)}disconnectedCallback(){super.disconnectedCallback(),_.off("languageChanged",this.handleLanguageChange)}render(){return U`
      <div
        class="hero flex h-dvh flex-col items-center justify-center gap-16 p-8 text-center text-[1.5rem] text-zinc-100 xl:hidden"
      >
        Sorry, this page isn't available <br />
        for small screens yet.
        <a
          href="/"
          class=" flex items-center gap-4 rounded-full bg-zinc-100 py-3 pe-6 ps-4 text-[1rem] font-semibold uppercase leading-none text-zinc-950"
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8 13L2 6.99999M2 6.99999L8 1M2 6.99999L14 6.99999"
              stroke="black"
              stroke-width="2"
            />
          </svg>
          Go back
        </a>
        <svg
          class="absolute bottom-8 h-12 rotate-21 stroke-zinc-600"
          width="44"
          height="67"
          viewBox="0 0 44 67"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13.622 26.2432C21.3514 21.7806 26.8467 14.2637 26.8467 14.2637L24.3142 20.9771C22.2556 25.7528 20.6914 30.708 18.6864 35.4888C16.8732 39.8121 13.9681 45.3093 12.0938 48.2719C10.2195 51.2345 5.20238 56.9493 4.7375 53.4575C4.51176 51.7619 5.98672 46.8824 8.83354 42.6494C11.6804 38.4164 18.3776 29.4011 24.7806 25.0562C32.0957 20.0925 40.026 12.6061 40.6384 8.03106C42.2438 -3.96201 21.0414 0.396133 1.82617 23.5558"
            stroke-width="3"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M12.0068 65.5502C25.5655 61.1839 21.8028 42.839 27.25 23.3022C28.2281 19.7942 29.5032 16.2477 31.2288 12.7368C30.2319 15.3528 27.6369 24.4559 30.9257 27.8938C34.2144 31.3317 40.2681 27.7068 42.8838 25.4646"
            stroke-width="3"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
    `}createRenderRoot(){return this}};ah([z({type:String})],Ma.prototype,"lang",2);Ma=ah([oe("projects-fail")],Ma);var zm=Object.defineProperty,Mm=Object.getOwnPropertyDescriptor,lh=(s,e,t,i)=>{for(var n=i>1?void 0:i?Mm(e,t):e,r=s.length-1,o;r>=0;r--)(o=s[r])&&(n=(i?o(e,t,n):o(n))||n);return i&&n&&zm(e,t,n),n};let Ra=class extends Q{constructor(){super(...arguments),this.reverse=!1}render(){return U`
      <div class="progressive-blur ${this.reverse?"progressive-blur--reverse":""}">
        ${Array.from({length:6},()=>U`<div></div>`)}
      </div>
    `}createRenderRoot(){return this}};lh([z({type:Boolean})],Ra.prototype,"reverse",2);Ra=lh([oe("progressive-blur")],Ra);const Rm="/src/9625ae.webp",jm="/src/2a0e5c.webp";var Im=Object.defineProperty,Nm=Object.getOwnPropertyDescriptor,uh=(s,e,t,i)=>{for(var n=i>1?void 0:i?Nm(e,t):e,r=s.length-1,o;r>=0;r--)(o=s[r])&&(n=(i?o(e,t,n):o(n))||n);return i&&n&&Im(e,t,n),n};let ja=class extends Q{constructor(){super(...arguments),this.lang=_.language,this.handleLanguageChange=()=>{this.lang=_.language}}connectedCallback(){super.connectedCallback(),_.on("languageChanged",this.handleLanguageChange)}disconnectedCallback(){super.disconnectedCallback(),_.off("languageChanged",this.handleLanguageChange)}renderTitle(s){const e=s.split("<br class='block xl:hidden'>");return e.length>1?U`
        ${e[0]}
        <br class="block xl:hidden" />
        ${e[1]}
      `:s}render(){return U`
      <section id="cases" class="hidden xl:block">
        <div class="container">
          <div
            class="hidden h-px w-full bg-linear-to-r from-transparent via-zinc-700 to-transparent xl:block"
          ></div>
          <div
            class="to-zinc-zinc-950 relative flex rounded-4xl from-zinc-900 xl:bg-linear-to-r 2xl:h-[512px]"
          >
            <div class="hidden w-2/3 justify-center xl:flex">
              <span
                class="absolute bottom-0 left-0 flex gap-2 p-8 font-mono text-[.75rem] font-medium uppercase leading-none tracking-[.05em] text-zinc-600"
              >
                2025 ${_.t("cases.project")}
              </span>
              <div class="absolute bottom-0 overflow-hidden pointer-events-none">
                <img
                  loading="lazy"
                  class="cases absolute w-[calc(1264px*0.8)] max-w-none drop-shadow-[0_5rem_5rem_black] 2xl:w-auto"
                  src="${Rm}"
                  width="1264"
                  height="720"
                  alt="Dark mode mobile dashboard showing analytics overview with graphs, lead count, and campaign metrics on a tilted iPhone screen."
                />
                <img
                  loading="lazy"
                  class="cases w-[calc(1264px*0.8)] max-w-none drop-shadow-[0_5rem_5rem_black] 2xl:w-auto"
                  src="${jm}"
                  width="1264"
                  height="720"
                  alt="Mobile screen in dark mode showcasing an organized campaign list view, with project names, dates, and quick actions."
                />
              </div>
            </div>
            <div
              class="cases-content relative flex flex-1 flex-col p-20 text-center xl:aspect-square xl:rounded-r-4xl xl:backdrop-blur-sm 2xl:p-24"
            >
              <h2
                class="text-[2.5rem] leading-none tracking-[-0.04em] text-zinc-100 2xl:text-[3rem]"
              >
                ${this.renderTitle(_.t("cases.title"))}
              </h2>
              <p
                class="mb-auto mt-8 text-pretty text-sm/loose 2xl:text-base/loose"
              >
                ${_.t("cases.description")}
              </p>
              <a
                href="/last-project"
                class="cta-button flex items-center gap-3 self-center ps-6"
              >
                ${_.t("cases.cta")}
                <svg
                  width="14"
                  height="14"
                  class="rotate-180"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8 13L2 6.99999M2 6.99999L8 1M2 6.99999L14 6.99999"
                    stroke="currentColor"
                    stroke-width="1.5"
                  />
                </svg>
              </a>
            </div>
          </div>
          <div
            class="hidden h-px w-full bg-linear-to-r from-transparent via-zinc-700 to-transparent xl:block"
          ></div>
        </div>
      </section>
    `}createRenderRoot(){return this}};uh([z({type:String})],ja.prototype,"lang",2);ja=uh([oe("cases-section")],ja);const Bm="/src/bf8bfa.png";var Hm=Object.defineProperty,Um=Object.getOwnPropertyDescriptor,ch=(s,e,t,i)=>{for(var n=i>1?void 0:i?Um(e,t):e,r=s.length-1,o;r>=0;r--)(o=s[r])&&(n=(i?o(e,t,n):o(n))||n);return i&&n&&Hm(e,t,n),n};let Ia=class extends Q{constructor(){super(...arguments),this.lang=_.language,this.handleLanguageChange=()=>{this.lang=_.language}}connectedCallback(){super.connectedCallback(),_.on("languageChanged",this.handleLanguageChange)}disconnectedCallback(){super.disconnectedCallback(),_.off("languageChanged",this.handleLanguageChange)}initScrambleText(){const s=this.querySelector("#copyright"),e=this.querySelector(".copyright span");s&&e&&(s.addEventListener("mouseenter",()=>{ne.to(e,{duration:1,scrambleText:{text:"Made by a human being",chars:"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ",speed:.1}})}),s.addEventListener("mouseleave",()=>{ne.to(e,{duration:.5,scrambleText:{text:"Copyright",chars:"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ",speed:.1}})}))}firstUpdated(s){const e=document.querySelector("#menu");if(!e)return;Object.values({github:{label:"GitHub",url:"https://github.com/paulomelojunior"},linkedin:{label:"LinkedIn",url:"https://linkedin.com/in/paulomelojunior/"},email:{label:"Email",url:"mailto:hello@pmjr.cc"}}).forEach((n,r)=>{const o=(r+1).toString().padStart(2,"0"),a=`
				<div class="border-b border-zinc-800 xl:border-0">
					<a target="_blank" class="menu-item h-20 xl:h-16 px-5 pt-1 flex items-center text-zinc-100 relative" rel="noopener noreferrer" href="${n.url}">
						${n.label}
						<div class="absolute flex items-center px-5 pt-1 inset-0 xl:rounded-full text-zinc-950">
							${n.label}
						</div>
						<span class="xl:hidden absolute opacity-50 right-6 bottom-6 font-mono text-[.75rem] tracking-[0.05em]">
							${n.label==="Email"?"hello@pmjr.cc":o}
						</span>
					</a>
				</div>`;e.insertAdjacentHTML("beforeend",a)}),this.initScrambleText()}render(){return U`
      <footer
        id="section-connect"
        class="footer relative z-10 h-lvh overflow-hidden rounded-t-4xl before:content-none xl:before:content-['']"
      >
        <div
          id="footerLinks"
          class="relative z-10 flex h-full flex-1 items-center pb-24 xl:pb-0"
        >
          <div
            id="menu"
            class="flex flex-1 flex-col flex-wrap gap-0 text-[2rem] tracking-[-0.04em] xl:flex-row xl:items-baseline xl:justify-center xl:gap-4 2xl:text-[2.5rem]"
          >
            <span
              class="flex h-20 items-center px-5 xl:p-0 text-zinc-600 me-5"
            >
              ${_.t("connect.title")}
            </span>
            <span
              class="hidden xl:flex items-center self-center relative px-2"
            >
              <img src="${Bm}" class="size-12" alt="pmjr.cc" />
            </span>
          </div>
        </div>
        <div class="absolute z-50 inset-x-0 bottom-0 h-12 w-full flex items-center gap-2 justify-center px-5 font-mono text-[.625rem] font-semibold uppercase bg-zinc-900 xl:bg-zinc-950 tracking-[0.1em]">
            <span> [c] 2025 pmjr.cc </span>
            <span class="text-zinc-600"> / </span>
            <span> Made by a human being </span>
          </div>
      </footer>
    `}createRenderRoot(){return this}};ch([z({type:String})],Ia.prototype,"lang",2);Ia=ch([oe("footer-section")],Ia);const tc="/src/c2501f.webp",Vm="/src/6c7165.webp",qm="/src/b1426f.webp";var Wm=Object.defineProperty,Ym=Object.getOwnPropertyDescriptor,dh=(s,e,t,i)=>{for(var n=i>1?void 0:i?Ym(e,t):e,r=s.length-1,o;r>=0;r--)(o=s[r])&&(n=(i?o(e,t,n):o(n))||n);return i&&n&&Wm(e,t,n),n};let Na=class extends Cn(Q){constructor(){super(...arguments),this.lang=_.language}connectedCallback(){super.connectedCallback(),_.on("languageChanged",()=>{this.lang=_.language})}disconnectedCallback(){super.disconnectedCallback(),_.off("languageChanged",()=>{this.lang=_.language})}firstUpdated(){document.querySelectorAll("[data-parallax-layers]").forEach(s=>{let e=ne.timeline({scrollTrigger:{trigger:s,start:"0% 0%",end:"100% 0%",scrub:0}});[{layer:"1",y:"5rem",opacity:0}].forEach((i,n)=>{e.to(s.querySelectorAll(`[data-parallax-layer="${i.layer}"]`),{y:i.y,ease:"none",opacity:i.opacity},n===0?void 0:"<")})})}render(){return U`
      <section class="hero" data-parallax-layers>
        <div
          class="container flex min-h-[calc(100svh-4rem)] flex-col justify-center gap-10 pt-12 xl:justify-end xl:gap-0 xl:pt-0"
        >
          <div
            class="flex flex-col items-start justify-end gap-8 px-5 xl:py-24 2xl:py-32"
            data-parallax-layer="1"
          >
            <div class="flex items-center gap-4">
              <img
                src="${tc}"
                srcset="${tc} 64w, ${Vm} 96w, ${qm} 128w"
                sizes="64px"
                height="64"
                width="64"
                fetchpriority="high"
                decoding="async"
                loading="eager"
                alt="${_.t("about.picDescription")}"
                class="h-16 rounded-full bg-zinc-900"
              />
              <div class="grid gap-2 leading-none">
                <span class="text-[1.25rem] text-white"> Paulo Melo Jr. </span>
                <span class="flex items-center gap-2 text-[1rem]">
                  <span class="relative flex size-3">
                    <span
                      class="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400"
                    ></span>
                    <span
                      class="relative m-0.5 inline-flex size-2 rounded-full bg-green-300"
                    ></span>
                  </span>
                  ${_.t("about.status")}
                </span>
              </div>
            </div>
            <h1
              class="text-pretty bg-linear-to-b/oklch from-zinc-300 to-zinc-50 bg-clip-text text-[2.5rem] leading-none pt-2 tracking-[-0.05em] xl:font-semibold xl:uppercase text-transparent xl:text-[3rem] 2xl:text-[4rem]"
            >
              <span class="block xl:hidden">
                ${_.t("about.content.m1")}
              </span>
              <span class="block xl:hidden">
                ${_.t("about.content.m2")}
              </span>
              <span class="hidden xl:block">
                ${_.t("about.content.d1")}
              </span>
              <span class="hidden xl:block">
                ${_.t("about.content.d2")}
              </span>
            </h1>
          </div>
          <div
            class="relative mx-5 hidden h-px bg-linear-to-r from-black via-zinc-700 to-black xl:block"
            data-parallax-layer="1"
          ></div>
          <div
            class="grid px-5 xl:grid-cols-2 xl:gap-24"
            data-parallax-layer="1"
          >
            <div class="xl:py-24 2xl:py-32">
              <p class="text-default text-pretty">
                <mark
                  class="inline-block bg-transparent text-zinc-50"
                  >${_.t("about.content.h1")}</mark
                >${_.t("about.content.p1")}
              </p>
            </div>
            <div class="hidden xl:block xl:py-24 2xl:py-32">
              <p class="text-default text-pretty">
                <mark
                  class="inline-block bg-transparent text-zinc-50"
                  >${_.t("about.content.h2")}</mark
                >${_.t("about.content.p2")}
              </p>
            </div>
          </div>
        </div>
      </section>
    `}createRenderRoot(){return this}};dh([z({type:String})],Na.prototype,"lang",2);Na=dh([oe("hero-section")],Na);var Xm=Object.defineProperty,Gm=Object.getOwnPropertyDescriptor,hh=(s,e,t,i)=>{for(var n=i>1?void 0:i?Gm(e,t):e,r=s.length-1,o;r>=0;r--)(o=s[r])&&(n=(i?o(e,t,n):o(n))||n);return i&&n&&Xm(e,t,n),n};let Ba=class extends Cn(Q){constructor(){super(...arguments),this.lang=_.language,this.handleLanguageChange=()=>{this.lang=_.language,this.updateJourneyContent()}}connectedCallback(){super.connectedCallback(),_.on("languageChanged",this.handleLanguageChange)}disconnectedCallback(){super.disconnectedCallback(),_.off("languageChanged",this.handleLanguageChange)}updateJourneyContent(){const s=document.querySelector("#job");if(!s)return;s.innerHTML="";const e=this.getJourneyItems(),t=Object.values(e),i=this.createJourneyHeader();s.insertAdjacentHTML("beforeend",i),t.forEach(n=>{const r=this.createJourneyItemHTML(n);s.insertAdjacentHTML("beforeend",r)})}getJourneyItems(){return{1:{hide:!1,custom:"text-brand-400",start:"2019",end:"2025",title:_.t("journey.t4"),description:_.t("journey.p4"),more:void 0},2:{hide:!1,start:"2018",end:"2019",title:_.t("journey.t3"),description:_.t("journey.p3"),more:_.t("journey.m3"),custom:void 0},3:{hide:!1,start:"2016",end:"2018",title:_.t("journey.t2"),description:_.t("journey.p2"),more:_.t("journey.m2"),custom:void 0},4:{hide:!0,start:"2015",end:"2016",title:_.t("journey.t1"),description:_.t("journey.p1"),custom:void 0,more:void 0}}}createJourneyHeader(){return`
      <h2
        class="text-pretty text-[2.5rem] leading-none tracking-[-0.04em] xl:text-[3rem] 2xl:text-[4rem] text-zinc-100 px-5 xl:px-20 2xl:px-32"
      >
        ${_.t("journey.t0")}
      </h2>
      <div class="flex items-center xl:justify-end order-1 xl:order-0 px-5 xl:px-20 2xl:px-32">
        <a
          href="/Paulo Melo Jr. - Currículo.pdf"
          target="_blank"
          class="cta-button flex items-center gap-4 rounded-full py-3 pe-4 ps-6 text-[1rem] leading-none"
        >
          ${this.lang==="en"?"Download my resume":"Baixar meu currículo"}
          <svg
            alt="${this.lang==="en"?"Download":"Baixar"}"
            width="20px"
            height="20px"
            stroke-width="2"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 13V22M12 22L15.5 18.5M12 22L8.5 18.5"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M20 17.6073C21.4937 17.0221 23 15.6889 23 13C23 9 19.6667 8 18 8C18 6 18 2 12 2C6 2 6 6 6 8C4.33333 8 1 9 1 13C1 15.6889 2.50628 17.0221 4 17.6073"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </svg>
        </a>
      </div>
    `}createJourneyItemHTML(s){const e=s.hide?"hidden xl:flex":"flex",t=s.custom?` class="${s.custom}"`:"";return`
      <div class="${e} job relative justify-between flex-col gap-4 px-5 xl:px-20 2xl:px-32">
        <span class="font-mono text-[.75rem] leading-none font-medium tracking-[.05em] text-zinc-500 mb-2">
          ${s.start} &bull; <span${t}>${s.end}</span>
        </span>
        <h2 class="text-[1.5rem] 2xl:text-[2rem] xl:leading-none text-zinc-100">
          ${s.title}
        </h2>
        <p class="text-sm/loose 2xl:text-base/loose text-pretty">
          ${s.description}
        </p>
      </div>
    `}firstUpdated(s){const e=this.querySelector("#job"),t=this.getJourneyItems(),i=Object.values(t),n=this.createJourneyHeader();e.insertAdjacentHTML("beforeend",n),i.forEach(r=>{const o=this.createJourneyItemHTML(r);e.insertAdjacentHTML("beforeend",o)})}render(){return U`
      <section id="section-journey">
        <div
          class="xl:py-24 2xl:py-32 bg-[linear-gradient(var(--color-zinc-950),var(--color-zinc-950)_100%)]"
        >
          <div
            id="job"
            class="container grid gap-y-16 overflow-hidden py-16 xl:grid-cols-2 xl:gap-y-32"
          ></div>
        </div>
      </section>
    `}createRenderRoot(){return this}};hh([z({type:String})],Ba.prototype,"lang",2);Ba=hh([oe("journey-section")],Ba);function Km(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var Zo={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/var ic;function Jm(){return ic||(ic=1,(function(s){(function(){var e={}.hasOwnProperty;function t(){for(var r="",o=0;o<arguments.length;o++){var a=arguments[o];a&&(r=n(r,i(a)))}return r}function i(r){if(typeof r=="string"||typeof r=="number")return r;if(typeof r!="object")return"";if(Array.isArray(r))return t.apply(null,r);if(r.toString!==Object.prototype.toString&&!r.toString.toString().includes("[native code]"))return r.toString();var o="";for(var a in r)e.call(r,a)&&r[a]&&(o=n(o,a));return o}function n(r,o){return o?r?r+" "+o:r+o:r}s.exports?(t.default=t,s.exports=t):window.classNames=t})()})(Zo)),Zo.exports}var Zm=Jm();const is=Km(Zm);var Qm=Object.defineProperty,e1=Object.getOwnPropertyDescriptor,Eo=(s,e,t,i)=>{for(var n=i>1?void 0:i?e1(e,t):e,r=s.length-1,o;r>=0;r--)(o=s[r])&&(n=(i?o(e,t,n):o(n))||n);return i&&n&&Qm(e,t,n),n};let ns=class extends Q{constructor(){super(...arguments),this.star="",this.items="",this.reverse=!1}render(){const e=this.items.split(",").map(n=>n.trim()).map(n=>U`<li>${n}</li>
          <li>
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              class="${this.star} size-2 xl:size-3"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.9385 8.60896C13.9091 8.20693 14.9494 8 16 8C14.9494 8 13.9091 7.79307 12.9385 7.39104C11.9679 6.989 11.086 6.39972 10.3431 5.65685C9.60028 4.91399 9.011 4.03207 8.60896 3.06147C8.20693 2.09086 8 1.05057 8 0C8 2.12173 7.15714 4.15657 5.65685 5.65686C4.15656 7.15715 2.12173 8 0 8C1.05057 8 2.09086 8.20693 3.06147 8.60896C4.03207 9.011 4.91399 9.60028 5.65686 10.3431C6.39972 11.086 6.989 11.9679 7.39104 12.9385C7.79307 13.9091 8 14.9494 8 16C8 14.9494 8.20693 13.9091 8.60896 12.9385C9.011 11.9679 9.60028 11.086 10.3431 10.3431C11.086 9.60028 11.9679 9.011 12.9385 8.60896Z"
              />
            </svg>
          </li>`),t=this.reverse,i=is("marquee",{reverse:t});return U`
      <div class=${i}>
        <ul class="marquee__content">
          ${e}
        </ul>
        <ul class="marquee__content">
          ${e}
        </ul>
      </div>
    `}createRenderRoot(){return this}};Eo([z({type:String})],ns.prototype,"star",2);Eo([z({type:String})],ns.prototype,"items",2);Eo([z({type:Boolean})],ns.prototype,"reverse",2);ns=Eo([oe("marquee-element")],ns);var t1=Object.defineProperty,i1=Object.getOwnPropertyDescriptor,$o=(s,e,t,i)=>{for(var n=i>1?void 0:i?i1(e,t):e,r=s.length-1,o;r>=0;r--)(o=s[r])&&(n=(i?o(e,t,n):o(n))||n);return i&&n&&t1(e,t,n),n};let rs=class extends Q{constructor(){super(...arguments),this.classNames="",this.href="",this.label=""}firstUpdated(){const s=document.querySelectorAll(".menu-item");s.forEach(i=>{const n=i.firstElementChild;ne.set(n,{clipPath:"inset(0% 0% 100% 0%)"})});function e(){const i=this.firstElementChild;ne.to(i,{duration:.2,clipPath:"inset(0% 0% 0% 0%)"})}function t(){if(this.classList.contains("active"))return;const i=this.firstElementChild;i&&ne.to(i,{duration:.2,clipPath:"inset(100% 0 0 0)",onComplete:()=>{ne.set(i,{clipPath:"inset(0% 0% 100%)"})}})}s.forEach(i=>{i.addEventListener("mouseenter",e),i.addEventListener("mouseleave",t)})}render(){const s=is("menu-item font-semibold relative tracking-[0.05em] flex justify-center h-12 xl:h-12 px-4 text-zinc-300 text-[.75rem] uppercase xl:items-center leading-12.5"),e=is("absolute flex items-center justify-center inset-0 text-zinc-950");return U`<a
      class="${s} ${this.classNames}"
      href="${this.href}"
      data-label="${this.label}"
    >
      <div aria-hidden="true" class="${e}">${this.label}</div>
      ${this.label}
    </a>`}createRenderRoot(){return this}};$o([z({type:String})],rs.prototype,"classNames",2);$o([z({type:String})],rs.prototype,"href",2);$o([z({type:String})],rs.prototype,"label",2);rs=$o([oe("menu-item")],rs);const n1="/src/bf8bfa.png";var r1=Object.defineProperty,s1=Object.getOwnPropertyDescriptor,kl=(s,e,t,i)=>{for(var n=i>1?void 0:i?s1(e,t):e,r=s.length-1,o;r>=0;r--)(o=s[r])&&(n=(i?o(e,t,n):o(n))||n);return i&&n&&r1(e,t,n),n};let _o=class extends Cn(Q){constructor(){super(),this.more=!1,this.lang=_.language,this.handleLanguageChange=()=>{this.lang=_.language};const s=localStorage.getItem("lang");s&&(this.lang=s,_.changeLanguage(s))}toggleMore(){this.more=!this.more}connectedCallback(){super.connectedCallback(),_.on("languageChanged",this.handleLanguageChange)}disconnectedCallback(){super.disconnectedCallback(),_.off("languageChanged",this.handleLanguageChange)}changeLang(){const e=_.language==="en"?"pt":"en";_.changeLanguage(e),localStorage.setItem("lang",e),this.lang=e}copyEmail(){navigator.clipboard.writeText("hello@pmjr.cc").then(()=>{this.updateText(this.lang==="en"?"Email copied!":"Email copiado!",0)}).catch(e=>{alert(`Failed to copy email: ${e}`)})}copyEmailReset(){this.updateText(this.lang==="en"?"Click to copy":"Copiar e-mail",300)}updateText(s,e){const t=document.querySelector("mail-button span");t&&setTimeout(()=>{t.textContent=s},e)}firstUpdated(){window.addEventListener("scroll",()=>{this.more=!1}),ne.to("header",{scrollTrigger:{trigger:"header",start:"bottom top",toggleActions:"play none none reverse",scrub:2},outline:"1px solid hsla(0 0 100% / 0.075)",padding:"0 0 0 0"})}render(){return U`
      <header
        class="fixed inset-x-0 z-40 w-full bg-linear-to-b from-zinc-950 backdrop-blur to-zinc-950/20 xl:fixed py-2"
      >
        <div class="container xl:grid flex items-center xl:grid-cols-3">
          <nav class="xl:hidden">
            <ul id="anchors" class="flex bg-zinc-950 overflow-hidden fixed inset-0 flex-col justify-center w-dvw *:transition-all duration-500 ${this.more?"h-dvh":"h-0 *:opacity-0"}">
              <li>
                <span class="text-[2rem] tracking-[-0.04em] h-20 px-5 flex items-center text-zinc-500">
                  Menu
                </span>
              </li>
              <li>
                <mobile-item
                  href="/last-project"
                  label="Last project"
                  index="001"
                ></mobile-item>
              </li>
              <li>
                <mobile-item
                  href="/"
                  label="GitHub"
                  index="002"
                ></mobile-item>
              </li>
              <li>
                <mobile-item
                  href="/"
                  label="LinkedIn"
                  index="003"
                ></mobile-item>
              </li>
              <li>
                <mobile-item
                  href="/"
                  label="Email"
                  index="hello@pmjr.cc"
                ></mobile-item>
              </li>
            </ul>
          </nav>  
          <div
            class="size-12 p-3 cursor-pointer transition-background duration-500 items-center justify-center *:opacity-75 *:hover:opacity-100 hover:bg-zinc-950 xl:hidden"
          >
            <img
              src="${n1}"
              class="transition-opacity duration-500"
              title="Back to homepage"
            />
          </div>
          <mail-button
            @click=${()=>this.copyEmail()}
            @mouseleave=${()=>this.copyEmailReset()}
            label="hello@pmjr.cc"
            class="hidden xl:flex"
            hover="${this.lang==="en"?"Click to copy":"Copiar e-mail"}"
          ></mail-button>
          <button
            class="menu-toggle xl:hidden ms-auto me-4 ${this.more?"menu-toggle--close":""}"
            @click=${()=>this.toggleMore()}
          >
            <span class="uppercase text-[.75rem] font-semibold">
              Menu
            </span>
          </button>
          <nav>
            <ul id="anchors" class="hidden xl:flex justify-end px-0 xl:px-20">
              <li class="flex-1">
                <menu-item
                  href="#section-praxis"
                  label="${_.t("menu.praxis")}"
                ></menu-item>
              </li>
              <li class="flex-1">
                <menu-item
                  href="#section-journey"
                  label="${_.t("menu.journey")}"
                ></menu-item>
              </li>
              <li class="flex-1">
                <menu-item
                  href="#section-connect"
                  label="${_.t("menu.connect")}"
                ></menu-item>
              </li>
            </ul>
          </nav>
          <div class="hidden xl:flex items-center justify-end gap-2">
            <a class="cta-button py-1.5 px-4 uppercase font-semibold text-[.75rem] tracking-[0.05em]" href="/projects">
              ${_.t("featured.button")}
            </a>
            <div class="flex h-12 items-center justify-center px-1 xl:h-12">
              <lang-button
                @click=${()=>this.changeLang()}
                label=${this.lang==="pt"?"PT · BR":"EN · US"}
                title="${this.lang==="en"?"Mudar para português":"Change to english"}"
              ></lang-button>
            </div>
          </div>
        </div>
      </header>
    `}createRenderRoot(){return this}};kl([z({type:Boolean})],_o.prototype,"more",2);kl([z({type:String})],_o.prototype,"lang",2);_o=kl([oe("menu-container")],_o);var o1=Object.defineProperty,a1=Object.getOwnPropertyDescriptor,hs=(s,e,t,i)=>{for(var n=i>1?void 0:i?a1(e,t):e,r=s.length-1,o;r>=0;r--)(o=s[r])&&(n=(i?o(e,t,n):o(n))||n);return i&&n&&o1(e,t,n),n};let rr=class extends Q{constructor(){super(...arguments),this.classNames="",this.icon="",this.label="",this.title=""}render(){const e=is("relative text-[.75rem] tracking-[0.05em] flex transition-all ps-3 pe-1 xl:pe-1.5 gap-2 h-8 xl:h-6 hover:h-8 rounded-full leading-8.5 xl:items-center hover:bg-zinc-100 hover:text-zinc-950 text-zinc-300 font-semibold stroke-zinc-300 hover:stroke-zinc-950 hover:fill-zinc-100",this.classNames);return U`
      <button class="${e}" title="${this.title}">
        ${this.label}
        <svg
          width="20px"
          height="20px"
          stroke-width="1.75"
          viewBox="0 0 24 24"
          class="h-8 "
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12Z"
            stroke-width="1.75"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M13 2.04932C13 2.04932 16 5.99994 16 11.9999C16 17.9999 13 21.9506 13 21.9506"
            stroke-width="1.75"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M11 21.9506C11 21.9506 8 17.9999 8 11.9999C8 5.99994 11 2.04932 11 2.04932"
            stroke-width="1.75"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M2.62964 15.5H21.3704"
            stroke-width="1.75"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M2.62964 8.5H21.3704"
            stroke-width="1.75"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      </button>
    `}createRenderRoot(){return this}};hs([z({type:String})],rr.prototype,"classNames",2);hs([z({type:String})],rr.prototype,"icon",2);hs([z({type:String})],rr.prototype,"label",2);hs([z({type:String})],rr.prototype,"title",2);rr=hs([oe("lang-button")],rr);var l1=Object.defineProperty,u1=Object.getOwnPropertyDescriptor,Po=(s,e,t,i)=>{for(var n=i>1?void 0:i?u1(e,t):e,r=s.length-1,o;r>=0;r--)(o=s[r])&&(n=(i?o(e,t,n):o(n))||n);return i&&n&&l1(e,t,n),n};let ss=class extends Q{constructor(){super(...arguments),this.href="",this.label="",this.hover=""}render(){const s=is("flex px-3 gap-2 text-zinc-50 tracking-[0.05em] text-[.75rem] uppercase items-center h-8 leading-12.5 rounded-full whitespace-nowrap font-medium");return U`<button class="menu-item group/item ${s} relative">
      <div
        class="${s} pointer-events-none absolute inset-0 justify-center"
        aria-hidden="true"
      >
        <span class="font-semibold text-zinc-950">
          ${this.hover?this.hover:this.label}
        </span>
      </div>
      ${this.label}
    </button>`}createRenderRoot(){return this}};Po([z({type:String})],ss.prototype,"href",2);Po([z({type:String})],ss.prototype,"label",2);Po([z({type:String})],ss.prototype,"hover",2);ss=Po([oe("mail-button")],ss);var c1=Object.defineProperty,d1=Object.getOwnPropertyDescriptor,ko=(s,e,t,i)=>{for(var n=i>1?void 0:i?d1(e,t):e,r=s.length-1,o;r>=0;r--)(o=s[r])&&(n=(i?o(e,t,n):o(n))||n);return i&&n&&c1(e,t,n),n};let os=class extends Q{constructor(){super(...arguments),this.href="",this.label="",this.index=""}render(){return U`<div class="border-b border-zinc-800 xl:border-0">
      <a class="text-[2rem] tracking-[-0.04em] menu-item h-20 xl:h-16 px-5 pt-1 flex items-center text-zinc-100 relative" rel="noopener noreferrer" href="${this.href}">
        ${this.label}
        <div class="absolute flex items-center px-5 pt-1 inset-0 xl:rounded-full text-zinc-950">
          ${this.label}
        </div>
        <span class="xl:hidden absolute opacity-50 right-6 bottom-6 font-mono text-[.75rem] tracking-[0.05em]">
          ${this.index}
        </span>
      </a>
    </div>`}createRenderRoot(){return this}};ko([z({type:String})],os.prototype,"href",2);ko([z({type:String})],os.prototype,"label",2);ko([z({type:String})],os.prototype,"index",2);os=ko([oe("mobile-item")],os);var h1=Object.defineProperty,f1=Object.getOwnPropertyDescriptor,fh=(s,e,t,i)=>{for(var n=i>1?void 0:i?f1(e,t):e,r=s.length-1,o;r>=0;r--)(o=s[r])&&(n=(i?o(e,t,n):o(n))||n);return i&&n&&h1(e,t,n),n};let Ha=class extends Cn(Q){constructor(){super(...arguments),this.lang=_.language}connectedCallback(){super.connectedCallback(),_.on("languageChanged",()=>{this.lang=_.language})}disconnectedCallback(){super.disconnectedCallback(),_.off("languageChanged",()=>{this.lang=_.language})}firstUpdated(){this.renderRoot.querySelectorAll(".praxis svg").forEach(t=>{const i=t.querySelectorAll("path");ne.from(i,{scrollTrigger:{trigger:t,start:"0% 75%",toggleActions:"play none none reverse"},stagger:.12,opacity:0,fill:this.dark?"var(--color-brand-500)":"var(--color-brand-400)",drawSVG:!1})}),this.renderRoot.querySelectorAll(".praxis").forEach(t=>{ne.from(t.children,{scrollTrigger:{trigger:t.children,start:"0% 75%",toggleActions:"play none none reverse"},duration:.8,stagger:.1,x:"5rem",filter:"blur(.5rem)",opacity:i=>i===0?1:0})})}render(){return U`
      <section id="section-praxis" class="bg-zinc-900">
        <div
          class="relative mx-5 h-px bg-linear-to-r from-zinc-900 via-zinc-700 to-zinc-900"
        ></div>
        <div class="container">
          <marquee-element
            star="fill-brand-500"
            items="Design Engineering, Product Design, UX & UI"
          ></marquee-element>
          <div
            class="grid gap-16 overflow-x-hidden px-5 py-16 *:flex *:items-start *:justify-center *:gap-5 xl:grid-cols-2 xl:gap-24 xl:py-0 xl:*:flex-row *:xl:gap-12 *:xl:py-24 *:2xl:py-32"
          >
            <div class="praxis">
              <svg
                class="size-16 shrink-0 xl:size-24"
                width="82"
                height="81"
                viewBox="0 0 82 81"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19 23C31.1503 23 41 13.1503 41 1C28.8497 1 19 10.8497 19 23Z"
                />
                <path
                  d="M41 1C53.1503 1 63 10.8497 63 23C50.8497 23 41 13.1503 41 1Z"
                />
                <path
                  d="M19 23C31.1503 23 41 32.8497 41 45C28.8497 45 19 35.1503 19 23Z"
                />
                <path
                  d="M41 45C53.1503 45 63 35.1503 63 23C50.8497 23 41 32.8497 41 45Z"
                />
                <path
                  d="M41 79.0966C44.5746 79.0966 48.1492 78.4978 51.5712 77.3001L81 67V57C81 50.3726 75.6274 45 69 45H41"
                />
                <path
                  d="M41 79.0966C37.4254 79.0966 33.8508 78.4978 30.4288 77.3001L1 67V57C1 50.3726 6.37258 45 13 45H41"
                />
              </svg>
              <div class="grid gap-2 xl:gap-0">
                <h2
                  class="flex items-center text-[1.5rem] text-zinc-100 xl:text-[2rem] h-16 xl:leading-24 2xl:text-[2.5rem]"
                >
                  ${_.t("praxis.t1")}
                </h2>
                <p class="text-default text-pretty">
                  ${_.t("praxis.p1")}
                </p>
              </div>
            </div>
            <div class="praxis">
              <svg
                class="size-16 shrink-0 xl:size-24"
                width="82"
                height="66"
                viewBox="0 0 82 66"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M19 23C31.1503 23 41 13.1503 41 1H1V23H19Z" />
                <path d="M63 23C50.8497 23 41 13.1503 41 1H81V23H63Z" />
                <path d="M19 23C31.1503 23 41 32.8497 41 45H1V23H19Z" />
                <path d="M63 23C50.8497 23 41 32.8497 41 45H81V23H63Z" />
                <path d="M41 65H11V57H29C33.4183 57 37 53.4183 37 49V45H41" />
                <path d="M41 65H71V57H53C48.5817 57 45 53.4183 45 49V45H41" />
              </svg>
              <div class="grid gap-2 xl:gap-0">
                <h2
                  class="flex items-center text-[1.5rem] text-zinc-100 xl:text-[2rem] h-16 xl:leading-24 2xl:text-[2.5rem]"
                >
                  ${_.t("praxis.t2")}
                </h2>
                <p class="text-default text-pretty">
                  ${_.t("praxis.p2")}
                </p>
              </div>
            </div>
          </div>
          <marquee-element
            reverse
            star="fill-brand-500"
            items="Design Engineering, Product Design, UX & UI"
          ></marquee-element>
          <div
            class="relative mx-5 h-px bg-linear-to-r from-zinc-900 via-zinc-700 to-zinc-900"
          ></div>
        </div>
      </section>
    `}createRenderRoot(){return this}};fh([z({type:String})],Ha.prototype,"lang",2);Ha=fh([oe("praxis-section")],Ha);const p1="/src/4f3f0c.png";var g1=Object.defineProperty,m1=Object.getOwnPropertyDescriptor,ph=(s,e,t,i)=>{for(var n=i>1?void 0:i?m1(e,t):e,r=s.length-1,o;r>=0;r--)(o=s[r])&&(n=(i?o(e,t,n):o(n))||n);return i&&n&&g1(e,t,n),n};let Ua=class extends Q{constructor(){super(...arguments),this.lang=_.language,this.handleLanguageChange=()=>{this.lang=_.language}}connectedCallback(){super.connectedCallback(),_.on("languageChanged",this.handleLanguageChange)}disconnectedCallback(){super.disconnectedCallback(),_.off("languageChanged",this.handleLanguageChange)}firstUpdated(){const s=document.querySelector("#cover-image");s&&ne.matchMedia().add("(min-width: 1024px)",()=>{ne.to(s,{scrollTrigger:{trigger:"#about",start:"top 20%",end:"bottom 20%",scrub:2},y:"-5rem",ease:"none"})})}render(){return U` <div
      id="about"
      class="relative grid xl:grid-cols-2 overflow-hidden xl:rounded-4xl bg-linear-to-b from-zinc-900 to-zinc-950"
    >
      <div
        class="absolute h-px w-full bg-linear-to-r from-transparent via-zinc-700 to-transparent xl:block"
      ></div>
      <div class="flex flex-col xl:p-16 p-6">
        <p class="text-default mb-4 text-balance xl:-mt-2">
          ${wi(_.t("twyne.about.p2"))}
        </p>
        <p class="text-default text-pretty">
          ${wi(_.t("twyne.about.p1"))}
        </p>
        <ul class="hidden xl:block mt-auto text-[.75rem] leading-none *:py-6 2xl:text-[1rem] *:border-b *:border-zinc-800">
          <li class="flex justify-between align-baseline">
            <span> ${_.t("twyne.about.details.company")} </span>
            <span class="text-right text-zinc-100">
              ${_.t("twyne.about.details.companyValue")}
            </span>
          </li>
          <li class="flex justify-between align-baseline">
            <span> ${_.t("twyne.about.details.industry")} </span>
            <span class="text-right text-zinc-100">
              ${_.t("twyne.about.details.industryValue")}
            </span>
          </li>
          <li class="flex justify-between align-baseline">
            <span> ${_.t("twyne.about.details.product")} </span>
            <span class="text-right text-zinc-100">
              ${_.t("twyne.about.details.productValue")}
            </span>
          </li>
          <li class="flex justify-between align-baseline">
            <span>
              ${_.t("twyne.about.details.contributions")}
            </span>
            <span class="flex flex-col xl:flex-row align-baseline gap-2 text-right text-zinc-100">
              ${_.t("twyne.about.details.contribution1")}
              <span class="text-zinc-500">/</span>
              ${_.t("twyne.about.details.contribution2")}
              <span class="text-zinc-500">/</span>
              ${_.t("twyne.about.details.contribution3")}
            </span>
          </li>
        </ul>
      </div>
      <div class="relative flex aspect-square overflow-hidden">
        <img
          src="${p1}"
          id="cover-image"
          class="absolute xl:left-16 xl:top-16 left-6 top-0 xl:max-w-none flex-none xl:rounded-ss-lg rounded-ss-md border-t border-zinc-800 shadow-[0px_24px_24px_0px_black]"
        />
        <progressive-blur
          class="absolute inset-x-0 bottom-0 h-1/3 bg-linear-to-t from-zinc-950 to-transparent"
        ></progressive-blur>
      </div>
    </div>`}createRenderRoot(){return this}};ph([z({type:String})],Ua.prototype,"lang",2);Ua=ph([oe("twyne-about")],Ua);var _1=Object.defineProperty,v1=Object.getOwnPropertyDescriptor,gh=(s,e,t,i)=>{for(var n=i>1?void 0:i?v1(e,t):e,r=s.length-1,o;r>=0;r--)(o=s[r])&&(n=(i?o(e,t,n):o(n))||n);return i&&n&&_1(e,t,n),n};ne.registerPlugin(Z);let Va=class extends Q{constructor(){super(...arguments),this.lang=_.language,this.handleLanguageChange=()=>{this.lang=_.language}}connectedCallback(){super.connectedCallback(),_.on("languageChanged",this.handleLanguageChange)}disconnectedCallback(){super.disconnectedCallback(),_.off("languageChanged",this.handleLanguageChange),this.cleanupAnimation()}setupSignatureAnimation(){if(!this.signElement)return;const s=this.signElement.querySelectorAll("path");this.animation=ne.from(s,{scrollTrigger:{trigger:this.signElement,start:"100% 100%",toggleActions:"play none none reverse"},duration:.75,stagger:.75,drawSVG:!1})}cleanupAnimation(){this.animation&&(this.animation.kill(),this.animation=void 0)}firstUpdated(s){this.signElement=this.querySelector("#sign"),this.setupSignatureAnimation()}renderSignature(){return U`
      <svg
        id="sign"
        class="rotate-21 stroke-zinc-600 mt-2"
        width="44"
        height="67"
        viewBox="0 0 44 67"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M13.622 26.2432C21.3514 21.7806 26.8467 14.2637 26.8467 14.2637L24.3142 20.9771C22.2556 25.7528 20.6914 30.708 18.6864 35.4888C16.8732 39.8121 13.9681 45.3093 12.0938 48.2719C10.2195 51.2345 5.20238 56.9493 4.7375 53.4575C4.51176 51.7619 5.98672 46.8824 8.83354 42.6494C11.6804 38.4164 18.3776 29.4011 24.7806 25.0562C32.0957 20.0925 40.026 12.6061 40.6384 8.03106C42.2438 -3.96201 21.0414 0.396133 1.82617 23.5558"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M12.0068 65.5502C25.5655 61.1839 21.8028 42.839 27.25 23.3022C28.2281 19.7942 29.5032 16.2477 31.2288 12.7368C30.2319 15.3528 27.6369 24.4559 30.9257 27.8938C34.2144 31.3317 40.2681 27.7068 42.8838 25.4646"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    `}renderContent(){return U`
      <h2
        class="mb-4 mt-16 font-semibold uppercase leading-none tracking-[0.05em] text-[0.75rem] text-zinc-500"
      >
        ${_.t("twyne.conclusion.t1")}
      </h2>
      <p class="text-default">${_.t("twyne.conclusion.p1")}</p>
      <p class="text-default">${_.t("twyne.conclusion.p2")}</p>
      <p class="text-default">${_.t("twyne.conclusion.p3")}</p>
    `}render(){return U`
      <section id="conclusion">
        <div class="container xl:grid grid-cols-4 pt-24 xl:pt-32 px-6">
          <div
            class="relative col-span-2 col-start-2 flex aspect-square flex-col items-center justify-center gap-8 text-balance text-center text-[1.25rem] leading-loose text-zinc-300 2xl:text-[1.5rem]"
          >
            ${this.renderContent()} ${this.renderSignature()}
          </div>
        </div>
      </section>
    `}createRenderRoot(){return this}};gh([z({type:String})],Va.prototype,"lang",2);Va=gh([oe("twyne-conclusion")],Va);var y1=Object.defineProperty,b1=Object.getOwnPropertyDescriptor,mh=(s,e,t,i)=>{for(var n=i>1?void 0:i?b1(e,t):e,r=s.length-1,o;r>=0;r--)(o=s[r])&&(n=(i?o(e,t,n):o(n))||n);return i&&n&&y1(e,t,n),n};let qa=class extends Q{constructor(){super(...arguments),this.lang=_.language,this.handleLanguageChange=()=>{this.lang=_.language}}connectedCallback(){super.connectedCallback(),_.on("languageChanged",this.handleLanguageChange)}disconnectedCallback(){super.disconnectedCallback(),_.off("languageChanged",this.handleLanguageChange)}render(){return U`
      <section id="goal" class="container py-24 px-6 xl:p-24 2xl:p-32">
        <div class="xl:grid grid-cols-4 justify-center">
          <div
            class="col-span-2 col-start-2 flex aspect-square flex-col justify-center"
          >
            <h2
              class="mb-10 text-[2rem] xl:text-[2.5rem] leading-none tracking-[-.02em] 2xl:text-[3rem] text-zinc-100"
            >
              ${_.t("twyne.goal.t1")}
            </h2>
            <p
              class="mb-8 text-pretty text-default leading-loose"
            >
              ${wi(_.t("twyne.goal.p1"))}
            </p>
            <p class="text-pretty text-default leading-loose">
              ${_.t("twyne.goal.p2")}
            </p>
          </div>
        </div>
      </section>
    `}createRenderRoot(){return this}};mh([z({type:String})],qa.prototype,"lang",2);qa=mh([oe("twyne-goal")],qa);const x1="/src/588b59.svg";var D1=Object.defineProperty,w1=Object.getOwnPropertyDescriptor,_h=(s,e,t,i)=>{for(var n=i>1?void 0:i?w1(e,t):e,r=s.length-1,o;r>=0;r--)(o=s[r])&&(n=(i?o(e,t,n):o(n))||n);return i&&n&&D1(e,t,n),n};let Wa=class extends Q{constructor(){super(...arguments),this.lang=_.language,this.handleLanguageChange=()=>{this.lang=_.language}}connectedCallback(){super.connectedCallback(),_.on("languageChanged",this.handleLanguageChange)}disconnectedCallback(){super.disconnectedCallback(),_.off("languageChanged",this.handleLanguageChange)}render(){return U`
      <div class="flex flex-col items-start xl:gap-2 xl:px-14 px-5 py-16 pb-14 xl:pb-16">
        <div class="flex items-center gap-6">
          <img src="${x1}" class=" hidden xl:block xl:h-14 xl:border-r border-zinc-900 pr-6" />
          <h1
            class="xl:h-14 leading-none tracking-[-0.04em] text-[3rem] 2xl:text-[4rem] text-zinc-100"
          >
            ${_.t("twyne.t2")}
          </h1>
        </div>
      </div>
    `}createRenderRoot(){return this}};_h([z({type:String})],Wa.prototype,"lang",2);Wa=_h([oe("twyne-header")],Wa);var C1=Object.defineProperty,S1=Object.getOwnPropertyDescriptor,vh=(s,e,t,i)=>{for(var n=i>1?void 0:i?S1(e,t):e,r=s.length-1,o;r>=0;r--)(o=s[r])&&(n=(i?o(e,t,n):o(n))||n);return i&&n&&C1(e,t,n),n};let Ya=class extends Q{constructor(){super(...arguments),this.lang=_.language,this.handleLanguageChange=()=>{this.lang=_.language}}connectedCallback(){super.connectedCallback(),_.on("languageChanged",this.handleLanguageChange)}disconnectedCallback(){super.disconnectedCallback(),_.off("languageChanged",this.handleLanguageChange)}render(){const s=_.t("twyne.impact.l1",{returnObjects:!0});return U`
      <div id="impact" class="container grid gap-10 xl:gap-16 px-6 pt-24 xl:px-24 xl:pt-32 2xl:px-32">
        <h2
          class="text-[2rem] xl:text-[2.5rem] leading-none tracking-[-.02em] 2xl:text-[3rem] text-zinc-100"
        >
          ${wi(_.t("twyne.impact.t1"))}
        </h2>

        <div class="grid gap-6 xl:grid-cols-3">
          <div class="grid gap-2 border-s border-zinc-800 ps-4 xl:ps-8">
            <h3 class="text-[1.25rem] xl:text-[2rem] leading-none text-zinc-100">
              ${_.t("twyne.numbers.t1")}
            </h3>
            <p class="text-pretty text-base/none">
              ${_.t("twyne.numbers.p1")}
            </p>
          </div>
          <div class="grid gap-2 border-s border-zinc-800 ps-4 xl:ps-8">
            <h3 class="text-[1.25rem] xl:text-[2rem] leading-none text-zinc-100">
              ${_.t("twyne.numbers.t2")}
            </h3>
            <p class="text-pretty text-base/none">
              ${_.t("twyne.numbers.p2")}
            </p>
          </div>
          <div class="grid gap-2 border-s border-zinc-800 ps-4 xl:ps-8">
            <h3 class="text-[1.25rem] xl:text-[2rem] leading-none text-zinc-100">
              ${_.t("twyne.numbers.t3")}
            </h3>
            <p class="text-pretty text-base/none">
              ${_.t("twyne.numbers.p3")}
            </p>
          </div>
        </div>
        <ul
          class="grid xl:grid-cols-2 gap-2 xl:gap-0"
        >
          ${s.map(e=>U`<li
                class="flex items-baseline text-default gap-2 before:-ms-2 xl:gap-4 before:text-default text-pretty before:text-zinc-700 before:content-['✦']"
              >
                ${e}
              </li>`)}
        </ul>
      </div>
    `}createRenderRoot(){return this}};vh([z({type:String})],Ya.prototype,"lang",2);Ya=vh([oe("twyne-impact")],Ya);const E1="/src/bf8bfa.png";var $1=Object.defineProperty,P1=Object.getOwnPropertyDescriptor,Tl=(s,e,t,i)=>{for(var n=i>1?void 0:i?P1(e,t):e,r=s.length-1,o;r>=0;r--)(o=s[r])&&(n=(i?o(e,t,n):o(n))||n);return i&&n&&$1(e,t,n),n};let vo=class extends Cn(Q){constructor(){super(),this.more=!1,this.lang=_.language,this.handleLanguageChange=()=>{this.lang=_.language};const s=localStorage.getItem("lang");s&&(this.lang=s,_.changeLanguage(s))}toggleMore(){this.more=!this.more}connectedCallback(){super.connectedCallback(),_.on("languageChanged",this.handleLanguageChange)}disconnectedCallback(){super.disconnectedCallback(),_.off("languageChanged",this.handleLanguageChange)}changeLang(){const e=_.language==="en"?"pt":"en";_.changeLanguage(e),localStorage.setItem("lang",e),this.lang=e}copyEmail(){navigator.clipboard.writeText("hello@pmjr.cc").then(()=>{this.updateText(this.lang==="en"?"Email copied!":"Email copiado!",0)}).catch(e=>{alert(`Failed to copy email: ${e}`)})}copyEmailReset(){this.updateText(this.lang==="en"?"Click to copy":"Copiar e-mail",300)}updateText(s,e){const t=document.querySelector("mail-button span");t&&setTimeout(()=>{t.textContent=s},e)}firstUpdated(){window.addEventListener("scroll",()=>{this.more=!1}),ne.to("header",{scrollTrigger:{trigger:"header",start:"bottom top",toggleActions:"play none none reverse",scrub:2},outline:"1px solid hsla(0 0 100% / 0.05)",padding:"0 0 0 0"})}getPreviousPage(){window.location.href="/"}render(){return U`
      <header
        class="fixed inset-x-0 z-40 w-full bg-linear-to-b from-zinc-950 backdrop-blur to-zinc-950/80 backdrop-saturate-200 xl:fixed xl:block py-2"
      >
        <div class="container xl:grid flex items-center xl:grid-cols-3">
          <nav class="xl:hidden">
            <ul id="anchors" class="flex bg-zinc-950 overflow-hidden fixed inset-0 flex-col justify-center w-dvw *:transition-all duration-500 ${this.more?"h-dvh":"h-0 *:opacity-0"}">
              <li>
                <span class="text-[2rem] tracking-[-0.04em] h-20 px-5 flex items-center text-zinc-500">
                  Menu
                </span>
              </li>
              <li>
                <mobile-item
                  href="/"
                  label="Home"
                  index="001"
                ></mobile-item>
              </li>
              <li>
                <mobile-item
                  href="/"
                  label="GitHub"
                  index="002"
                ></mobile-item>
              </li>
              <li>
                <mobile-item
                  href="/"
                  label="LinkedIn"
                  index="003"
                ></mobile-item>
              </li>
              <li>
                <mobile-item
                  href="/"
                  label="Email"
                  index="hello@pmjr.cc"
                ></mobile-item>
              </li>
            </ul>
          </nav>
          <div class="flex items-center">
            <button
              @click=${()=>this.getPreviousPage()}
              class="size-12 p-3 cursor-pointer transition-background duration-500 items-center justify-center *:opacity-75 *:hover:opacity-100 hover:bg-zinc-950"
            >
              <img
                src="${E1}"
                class="transition-opacity duration-500"
                title="Back to homepage"
              />
            </button>
            <mail-button
              @click=${()=>this.copyEmail()}
              @mouseleave=${()=>this.copyEmailReset()}
              label="hello@pmjr.cc"
              class="hidden xl:flex"
              hover="${this.lang==="en"?"Click to copy":"Copiar e-mail"}"
            ></mail-button>
          </div>
          <button
            class="menu-toggle xl:hidden ms-auto me-4 ${this.more?"menu-toggle--close":""}"
            @click=${()=>this.toggleMore()}
          >
            <span class="uppercase text-[.75rem] font-semibold">
              Menu
            </span>
          </button>
          <nav>
            <ul id="anchors" class="hidden xl:flex justify-end px-0 xl:px-20">
              <li class="flex-1">
                <menu-item
                  href="#goal"
                  label="${_.t("twyne.menu.goal")}"
                ></menu-item>
              </li>
              <li class="flex-1">
                <menu-item
                  href="#proposal"
                  label="${_.t("twyne.menu.proposal")}"
                ></menu-item>
              </li>
              <li class="flex-1">
                <menu-item
                  href="#impact"
                  label="${_.t("twyne.menu.impact")}"
                ></menu-item>
              </li>
              <li class="flex-1">
                <menu-item
                  href="#mobile"
                  label="${_.t("twyne.menu.mobile")}"
                ></menu-item>
              </li>
            </ul>
          </nav>
          <div class="hidden xl:flex items-center justify-end gap-2">
            <a class="cta-button py-1.5 px-4 uppercase font-semibold text-[.75rem] tracking-[0.05em]" href="/projects">
              ${_.t("featured.button")}
            </a>
            <div class="flex h-12 items-center justify-center px-1 xl:h-12">
              <lang-button
                @click=${()=>this.changeLang()}
                label=${this.lang==="pt"?"PT · BR":"EN · US"}
                title="${this.lang==="en"?"Mudar para português":"Change to english"}"
              ></lang-button>
            </div>
          </div>
        </div>
      </header>
    `}createRenderRoot(){return this}};Tl([z({type:Boolean})],vo.prototype,"more",2);Tl([z({type:String})],vo.prototype,"lang",2);vo=Tl([oe("twyne-menu")],vo);const yh="/src/cef3d9.png",bh="/src/6f2cb8.png",xh="/src/6b0ed1.png",Dh="/src/b2e798.png",wh="/src/9bbc2e.png",k1="/src/ef0222.png";var T1=Object.defineProperty,O1=Object.getOwnPropertyDescriptor,Ch=(s,e,t,i)=>{for(var n=i>1?void 0:i?O1(e,t):e,r=s.length-1,o;r>=0;r--)(o=s[r])&&(n=(i?o(e,t,n):o(n))||n);return i&&n&&T1(e,t,n),n};let Xa=class extends Q{constructor(){super(...arguments),this.lang=_.language,this.handleLanguageChange=()=>{this.lang=_.language}}connectedCallback(){super.connectedCallback(),_.on("languageChanged",this.handleLanguageChange)}disconnectedCallback(){super.disconnectedCallback(),_.off("languageChanged",this.handleLanguageChange)}firstUpdated(s){document.querySelectorAll("[data-parallax-screens]").forEach(e=>{let t=ne.timeline({scrollTrigger:{trigger:"#mobile-images",start:"0% 100%",end:"50% 100%",scrub:2}});[{layer:"1",y:"10%",opacity:0},{layer:"2",y:"20%",opacity:.5},{layer:"3",y:"30%",opacity:1}].forEach((n,r)=>{t.from(e.querySelectorAll(`[data-parallax-screens="${n.layer}"]`),{y:n.y,ease:"none",opacity:n.opacity},r===0?void 0:"<")})})}render(){return U`
      <section id="mobile" class="mt-32 py-32">
        <h2
          class="mb-32 text-center text-[2.5rem] font-light leading-none tracking-[-.02em] 2xl:text-[3rem] text-zinc-100"
        >
          ${wi(_.t("twyne.mobile.t1"))}
        </h2>
        <div
          id="mobile-images"
          class="mx-auto grid max-w-[1920px] grid-cols-5 items-center justify-center gap-4 px-4"
          data-parallax-screens
        >
          <img src="${bh}" data-parallax-screens="1" class="mobile-screen" />
          <img src="${yh}" data-parallax-screens="2" class="mobile-screen" />
          <img src="${xh}" data-parallax-screens="3" class="mobile-screen" />
          <img src="${Dh}" data-parallax-screens="2" class="mobile-screen" />
          <img src="${wh}" data-parallax-screens="1" class="mobile-screen" />
        </div>
      </section>
      <style>
        .mobile-screen {
          mask-image: url(${k1});
          mask-mode: luminance;
          mask-size: cover;
        }
      </style>
    `}createRenderRoot(){return this}};Ch([z({type:String})],Xa.prototype,"lang",2);Xa=Ch([oe("twyne-mobile")],Xa);var F1=Object.defineProperty,A1=Object.getOwnPropertyDescriptor,fs=(s,e,t,i)=>{for(var n=i>1?void 0:i?A1(e,t):e,r=s.length-1,o;r>=0;r--)(o=s[r])&&(n=(i?o(e,t,n):o(n))||n);return i&&n&&F1(e,t,n),n};let sr=class extends Q{constructor(){super(...arguments),this.lang=_.language,this.currentIndex=0,this.screens=[],this.updateMobScreens=()=>{},this.handleLanguageChange=()=>{this.lang=_.language}}connectedCallback(){super.connectedCallback(),_.on("languageChanged",this.handleLanguageChange)}disconnectedCallback(){super.disconnectedCallback(),_.off("languageChanged",this.handleLanguageChange)}firstUpdated(s){const e=document.querySelectorAll(".mob-carrossel img");this.currentIndex=0,this.screens=e,this.updateMobScreens=()=>{this.screens.forEach((n,r)=>{r===this.currentIndex?ne.to(n,{opacity:1,duration:.4,y:0,delay:.2,onStart:()=>n.classList.remove("invisible")}):ne.to(n,{opacity:0,duration:.4,y:100,onComplete:()=>n.classList.add("invisible")})})},this.updateMobScreens();const t=this.renderRoot.querySelector("button:first-of-type"),i=this.renderRoot.querySelector("button:last-of-type");t&&i&&(t.addEventListener("click",()=>{this.currentIndex=(this.currentIndex-1+this.screens.length)%this.screens.length,this.updateMobScreens()}),i.addEventListener("click",()=>{this.currentIndex=(this.currentIndex+1)%this.screens.length,this.updateMobScreens()}))}render(){return U`
      <section class="relative px-2 mt-24 xl:mt-32">
        <div class="container">
          <h2
            class="mb-10 text-[2rem] text-center xl:text-[2.5rem] leading-none tracking-[-.02em] 2xl:text-[3rem] text-zinc-100"
          >
            ${wi(_.t("twyne.mobile.t1"))}
          </h2>
          <div class="mob-carrossel relative overflow-hidden">
            <img
              src="${yh}"
              class="relative mobile-screen"
            />
            <img
              src="${bh}"
              class="invisible absolute left-0 top-0 mobile-screen"
            />
            <img
              src="${xh}"
              class="invisible absolute left-0 top-0 mobile-screen"
            />
            <img
              src="${Dh}"
              class="invisible absolute left-0 top-0 mobile-screen"
            />
            <img
              src="${wh}"
              class="invisible absolute left-0 top-0 mobile-screen"
            />
          </div>
          <div class="absolute inset-0">
            <div
              class="sticky -inset-x-4 top-[calc(100dvh-15rem)] isolate flex h-60 items-end justify-center after:absolute after:inset-0 after:z-10 after:bg-linear-to-t after:from-zinc-950 after:content-['']"
            >
              <progressive-blur></progressive-blur>
              <div class="relative z-20 flex gap-px pb-2">
                <button
                  class="flex items-center gap-4 rounded-s-full bg-zinc-100/10 py-3 pe-4 ps-5 text-[.75rem] uppercase leading-none tracking-[.05em] text-zinc-100 transition-all hover:bg-zinc-100 hover:text-zinc-950"
                >
                  Prev
                </button>

                <span
                  class="flex items-center justify-center bg-zinc-50/5 px-4 font-mono text-[.75rem] font-medium uppercase leading-none tracking-[.05em]"
                >
                  ${this.currentIndex+1} / ${this.screens.length}
                </span>
                <button
                  class="flex items-center gap-4 rounded-e-full bg-zinc-100/10 py-3 pe-5 ps-4 text-[.75rem] uppercase leading-none tracking-[.05em] text-zinc-100 transition-all hover:bg-zinc-100 hover:text-zinc-950"
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    `}createRenderRoot(){return this}};fs([z({type:String})],sr.prototype,"lang",2);fs([z({type:Number})],sr.prototype,"currentIndex",2);fs([z({type:Array})],sr.prototype,"screens",2);fs([z({type:Function})],sr.prototype,"updateMobScreens",2);sr=fs([oe("mobile-screens")],sr);const L1="/src/6ab55e.png",z1="/src/b0e17e.png",M1="/src/96ef6f.png",R1="/src/2bf8a7.png",j1="/src/2eab02.png",I1="/src/a54df0.png",N1="/src/b3d826.png",B1="/src/adef9e.png",H1="/src/120066.png",U1="/src/908f2c.png",V1="/src/20a18e.png";var q1=Object.defineProperty,W1=Object.getOwnPropertyDescriptor,Sh=(s,e,t,i)=>{for(var n=i>1?void 0:i?W1(e,t):e,r=s.length-1,o;r>=0;r--)(o=s[r])&&(n=(i?o(e,t,n):o(n))||n);return i&&n&&q1(e,t,n),n};ne.registerPlugin(Z);let Ga=class extends Q{constructor(){super(...arguments),this.lang=_.language,this.componentAnimations=[],this.handleLanguageChange=()=>{this.lang=_.language}}connectedCallback(){super.connectedCallback(),_.on("languageChanged",this.handleLanguageChange)}disconnectedCallback(){super.disconnectedCallback(),_.off("languageChanged",this.handleLanguageChange),this.cleanupAnimations()}setupComponentAnimations(){this.renderRoot.querySelectorAll("img").forEach(e=>{const t=ne.from(e,{scrollTrigger:{trigger:e,start:"0% 100%",end:"0% 50%",toggleActions:"play none none reverse"},scale:1,opacity:0,filter:"blur(1rem)",duration:1,y:"20%"});this.componentAnimations.push(t)})}cleanupAnimations(){this.componentAnimations.forEach(s=>{s&&s.kill()}),this.componentAnimations=[]}firstUpdated(){this.setupComponentAnimations()}renderProposalList(){const s=_.t("twyne.proposal.l1",{returnObjects:!0});return U`
      <ul
        class="text-default leading-loose 2xl:text-[1.25rem] text-zinc-100"
      >
        ${s.map(e=>U`
            <li
              class="flex items-center gap-2 before:-ms-2 xl:gap-4 before:text-default before:text-zinc-700 before:content-['✦']"
            >
              ${e}
            </li>
          `)}
      </ul>
    `}renderComponentGrid(){return U`
      <div class="flex flex-col gap-2 xl:gap-4">
        <div class="flex gap-4">
          <div class="hidden xl:flex flex-col gap-4">
            <img
              src="${j1}"
              height="425"
              width="216"
              loading="lazy"
              alt="Component B1"
            />
            <img
              src="${N1}"
              height="216"
              width="216"
              loading="lazy"
              alt="Component B3"
            />
          </div>
          <img
            src="${I1}"
            height="660"
            width="560"
            loading="lazy"
            alt="Component B2"
          />
        </div>
        <div class="hidden xl:flex gap-4">
          <img
            src="${V1}"
            height="218"
            width="280"
            loading="lazy"
            alt="Component B7"
          />
          <img
            src="${H1}"
            height="218"
            width="240"
            loading="lazy"
            alt="Component B5"
          />
          <img
            src="${U1}"
            height="218"
            width="240"
            loading="lazy"
            alt="Component B6"
          />
        </div>
        <img
          src="${B1}"
          height="448"
          width="792"
          loading="lazy"
          alt="Component B4"
        />
      </div>
    `}renderComponentColumn(){return U`
      <div class="grid gap-2 xl:gap-4">
        <img
          src="${L1}"
          height="264"
          width="480"
          loading="lazy"
          alt="Component A1"
        />
        <img
          src="${z1}"
          height="248"
          width="480"
          loading="lazy"
          alt="Component A2"
        />
        <img
          src="${M1}"
          height="492"
          width="480"
          loading="lazy"
          alt="Component A3"
        />
        <img
          src="${R1}"
          height="296"
          width="480"
          loading="lazy"
          alt="Component A4"
        />
      </div>
    `}renderComponentsSection(){return U`
      <div
        id="components"
        class="relative px-2 xl:p-0 flex flex-col xl:flex-row xl:min-h-[1348px] items-start justify-center gap-2 xl:gap-4"
      >
        <style>
          #components img {
            border-radius: 0.25rem;
          }
        </style>
        ${this.renderComponentGrid()} ${this.renderComponentColumn()}
      </div>
    `}render(){return U`
      <section id="proposal">
        <div
          class="container hidden h-px w-full bg-linear-to-r from-transparent via-zinc-700 to-transparent xl:block"
        ></div>
        <div class="container rounded-t-4xl px-6 pb-24 xl:p-24 2xl:p-32">
          <h2
            class="mb-10 text-[2rem] xl:text-[2.5rem] leading-none tracking-[-.02em] 2xl:text-[3rem] text-zinc-100"
          >
            ${_.t("twyne.proposal.t1")}
          </h2>
          <div class="flex flex-col gap-8 xl:grid grid-cols-2 xl:gap-24">
            ${this.renderProposalList()}
            <p class="text-default text-pretty">
              ${_.t("twyne.proposal.p1")}
            </p>
          </div>
        </div>
        ${this.renderComponentsSection()}
        <twyne-impact></twyne-impact>
      </section>
    `}createRenderRoot(){return this}};Sh([z({type:String})],Ga.prototype,"lang",2);Ga=Sh([oe("twyne-proposal")],Ga);const Y1="/src/2f4591.png",X1="/src/367502.png",G1="/src/014eec.png";var K1=Object.defineProperty,J1=Object.getOwnPropertyDescriptor,ps=(s,e,t,i)=>{for(var n=i>1?void 0:i?J1(e,t):e,r=s.length-1,o;r>=0;r--)(o=s[r])&&(n=(i?o(e,t,n):o(n))||n);return i&&n&&K1(e,t,n),n};let or=class extends Q{constructor(){super(...arguments),this.lang=_.language,this.currentIndex=0,this.screens=[],this.updateScreens=()=>{},this.handleLanguageChange=()=>{this.lang=_.language}}connectedCallback(){super.connectedCallback(),_.on("languageChanged",this.handleLanguageChange)}disconnectedCallback(){super.disconnectedCallback(),_.off("languageChanged",this.handleLanguageChange)}firstUpdated(s){const e=document.querySelectorAll(".carrossel img");this.currentIndex=0,this.screens=e,this.updateScreens=()=>{this.screens.forEach((n,r)=>{r===this.currentIndex?ne.to(n,{opacity:1,duration:.4,y:0,delay:.2,onStart:()=>n.classList.remove("invisible")}):ne.to(n,{opacity:0,duration:.4,y:100,onComplete:()=>n.classList.add("invisible")})})},this.updateScreens();const t=this.renderRoot.querySelector("button:first-of-type"),i=this.renderRoot.querySelector("button:last-of-type");t&&i&&(t.addEventListener("click",()=>{this.currentIndex=(this.currentIndex-1+this.screens.length)%this.screens.length,this.updateScreens()}),i.addEventListener("click",()=>{this.currentIndex=(this.currentIndex+1)%this.screens.length,this.updateScreens()}))}render(){return U`
      <section class="relative mt-24 xl:mt-32">
        <div class="container">
          <div class="carrossel relative overflow-hidden">
            <img
              src="${Y1}"
              width="1728"
              height="976"
              class="relative rounded-[.5rem]"
            />
            <img
              src="${X1}"
              width="1728"
              height="976"
              class="invisible absolute left-0 top-0 rounded-[.5rem]"
            />
            <img
              src="${G1}"
              width="1728"
              height="976"
              class="invisible absolute left-0 top-0 rounded-[.5rem]"
            />
          </div>
          <div class="absolute inset-0">
            <div
              class="sticky -inset-x-4 top-[calc(100dvh-15rem)] isolate flex h-60 items-end justify-center after:absolute after:inset-0 after:z-10 after:bg-linear-to-t after:from-zinc-950 after:content-['']"
            >
              <progressive-blur></progressive-blur>
              <div class="relative z-20 flex gap-px pb-2">
                <button
                  class="flex items-center gap-4 rounded-s-full bg-zinc-100/10 py-3 pe-4 ps-5 text-[.75rem] uppercase leading-none tracking-[.05em] text-zinc-100 transition-all hover:bg-zinc-100 hover:text-zinc-950"
                >
                  Prev
                </button>

                <span
                  class="flex items-center justify-center bg-zinc-50/5 px-4 font-mono text-[.75rem] font-medium uppercase leading-none tracking-[.05em]"
                >
                  ${this.currentIndex+1} / ${this.screens.length}
                </span>
                <button
                  class="flex items-center gap-4 rounded-e-full bg-zinc-100/10 py-3 pe-5 ps-4 text-[.75rem] uppercase leading-none tracking-[.05em] text-zinc-100 transition-all hover:bg-zinc-100 hover:text-zinc-950"
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    `}createRenderRoot(){return this}};ps([z({type:String})],or.prototype,"lang",2);ps([z({type:Number})],or.prototype,"currentIndex",2);ps([z({type:Array})],or.prototype,"screens",2);ps([z({type:Function})],or.prototype,"updateScreens",2);or=ps([oe("twyne-screens")],or);const Z1=`<style>
    .spinning {
        animation: spinning .75s infinite linear;
        transform-origin: 50% 50%;
        vector-effect: non-scaling-stroke;
    }

    @keyframes spinning {
        0% {
            transform: rotate(0deg);
        }

        100% {
            transform: rotate(360deg);
        }
    }
</style>
<svg class="spinning" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<mask id="path-1-inside-1_1307_1673" fill="white">
<path d="M40 20C40 31.0457 31.0457 40 20 40C8.95431 40 0 31.0457 0 20C0 8.95431 8.95431 0 20 0C31.0457 0 40 8.95431 40 20Z"/>
</mask>
<g clip-path="url(#paint0_angular_1307_1673_clip_path)" data-figma-skip-parse="true" mask="url(#path-1-inside-1_1307_1673)"><g transform="matrix(0 -0.02 0.02 0 20 20)"><foreignObject x="-1200" y="-1200" width="2400" height="2400"><div xmlns="http://www.w3.org/1999/xhtml" style="background:conic-gradient(from 90deg,rgba(255, 255, 255, 0) 0deg,rgba(183, 210, 224, 0.75) 306.968deg,rgba(255, 255, 255, 1) 360deg);height:100%;width:100%;opacity:1"></div></foreignObject></g></g><path d="M40 20H36C36 28.8366 28.8366 36 20 36V40V44C33.2548 44 44 33.2548 44 20H40ZM20 40V36C11.1634 36 4 28.8366 4 20H0H-4C-4 33.2548 6.74517 44 20 44V40ZM0 20H4C4 11.1634 11.1634 4 20 4V0V-4C6.74517 -4 -4 6.74517 -4 20H0ZM20 0V4C28.8366 4 36 11.1634 36 20H40H44C44 6.74517 33.2548 -4 20 -4V0Z" data-figma-gradient-fill="{&#34;type&#34;:&#34;GRADIENT_ANGULAR&#34;,&#34;stops&#34;:[{&#34;color&#34;:{&#34;r&#34;:1.0,&#34;g&#34;:1.0,&#34;b&#34;:1.0,&#34;a&#34;:0.0},&#34;position&#34;:0.0},{&#34;color&#34;:{&#34;r&#34;:0.72000002861022949,&#34;g&#34;:0.82666671276092529,&#34;b&#34;:0.87999999523162842,&#34;a&#34;:0.750},&#34;position&#34;:0.85268861055374146},{&#34;color&#34;:{&#34;r&#34;:1.0,&#34;g&#34;:1.0,&#34;b&#34;:1.0,&#34;a&#34;:1.0},&#34;position&#34;:1.0}],&#34;stopsVar&#34;:[{&#34;color&#34;:{&#34;r&#34;:1.0,&#34;g&#34;:1.0,&#34;b&#34;:1.0,&#34;a&#34;:0.0},&#34;position&#34;:0.0},{&#34;color&#34;:{&#34;r&#34;:0.72000002861022949,&#34;g&#34;:0.82666671276092529,&#34;b&#34;:0.87999999523162842,&#34;a&#34;:0.750},&#34;position&#34;:0.85268861055374146},{&#34;color&#34;:{&#34;r&#34;:1.0,&#34;g&#34;:1.0,&#34;b&#34;:1.0,&#34;a&#34;:1.0},&#34;position&#34;:1.0}],&#34;transform&#34;:{&#34;m00&#34;:-7.3478812213901255e-15,&#34;m01&#34;:40.0,&#34;m02&#34;:-7.1054273576010019e-14,&#34;m10&#34;:-40.0,&#34;m11&#34;:-7.3478812213901255e-15,&#34;m12&#34;:40.0},&#34;opacity&#34;:1.0,&#34;blendMode&#34;:&#34;NORMAL&#34;,&#34;visible&#34;:true}" mask="url(#path-1-inside-1_1307_1673)"/>
<path d="M20 1.50996e-07C20.2626 1.39515e-07 20.5227 0.0517317 20.7654 0.152241C21.008 0.25275 21.2285 0.400069 21.4142 0.585787C21.5999 0.771504 21.7472 0.991982 21.8478 1.23463C21.9483 1.47728 22 1.73736 22 2C22 2.26264 21.9483 2.52272 21.8478 2.76537C21.7472 3.00802 21.5999 3.2285 21.4142 3.41421C21.2285 3.59993 21.008 3.74725 20.7654 3.84776C20.5227 3.94827 20.2626 4 20 4L20 2L20 1.50996e-07Z" fill="white"/>
<defs>
<clipPath id="paint0_angular_1307_1673_clip_path"><path d="M40 20H36C36 28.8366 28.8366 36 20 36V40V44C33.2548 44 44 33.2548 44 20H40ZM20 40V36C11.1634 36 4 28.8366 4 20H0H-4C-4 33.2548 6.74517 44 20 44V40ZM0 20H4C4 11.1634 11.1634 4 20 4V0V-4C6.74517 -4 -4 6.74517 -4 20H0ZM20 0V4C28.8366 4 36 11.1634 36 20H40H44C44 6.74517 33.2548 -4 20 -4V0Z" mask="url(#path-1-inside-1_1307_1673)"/></clipPath></defs>
</svg>`;var Q1=Object.defineProperty,e_=Object.getOwnPropertyDescriptor,Eh=(s,e,t,i)=>{for(var n=i>1?void 0:i?e_(e,t):e,r=s.length-1,o;r>=0;r--)(o=s[r])&&(n=(i?o(e,t,n):o(n))||n);return i&&n&&Q1(e,t,n),n};let Ka=class extends Q{constructor(){super(...arguments),this.minMs=500,this.mountedAt=0,this.finishTimeoutId=null,this.fallbackTimeoutId=null,this.isExiting=!1,this.onDomContentLoaded=()=>this.finishAfterMinTime(),this.onWindowLoad=()=>this.finishAfterMinTime()}connectedCallback(){super.connectedCallback(),this.setAttribute("aria-busy","true"),this.setAttribute("aria-live","polite"),this.mountedAt=performance.now(),document.readyState==="complete"||document.readyState==="interactive"?this.finishAfterMinTime():(document.addEventListener("DOMContentLoaded",this.onDomContentLoaded,{once:!0}),window.addEventListener("load",this.onWindowLoad,{once:!0}),this.fallbackTimeoutId=window.setTimeout(()=>this.finishAfterMinTime(),8e3))}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("DOMContentLoaded",this.onDomContentLoaded),window.removeEventListener("load",this.onWindowLoad),this.finishTimeoutId&&(clearTimeout(this.finishTimeoutId),this.finishTimeoutId=null),this.fallbackTimeoutId&&(clearTimeout(this.fallbackTimeoutId),this.fallbackTimeoutId=null)}finishAfterMinTime(){const s=performance.now()-this.mountedAt,e=Math.max(0,this.minMs-s);this.finishTimeoutId=window.setTimeout(()=>this.exit(),e)}exit(){if(this.isExiting)return;this.isExiting=!0,this.finishTimeoutId&&(clearTimeout(this.finishTimeoutId),this.finishTimeoutId=null),this.fallbackTimeoutId&&(clearTimeout(this.fallbackTimeoutId),this.fallbackTimeoutId=null);const s=this.querySelector("#loading")||this,e=document.querySelector("main");ne.set(e,{y:"5rem",opacity:0}),ne.to(s,{opacity:0,scale:2,filter:"blur(1rem)",duration:.4,force3D:!0,onComplete:()=>{this.dispatchEvent(new CustomEvent("mobile-loading:done",{bubbles:!0,composed:!0})),ne.to(e,{y:0,opacity:1,duration:1,onComplete:()=>{e.removeAttribute("style")}}),this.remove()}})}render(){return U` <div
      id="loading"
      class="fixed top-0 z-100 h-svh w-full bg-zinc-950"
    >
      <div
        class="container flex h-full items-center justify-center gap-4 flex-col"
      >
        <div class="saturate-50">
          ${wi(`${Z1}`)}
        </div>
        <span
          class="hidden animate-pulse text-[.75rem] uppercase leading-10 tracking-[.05em] text-zinc-50"
        >
          ${this.lang==="pt"?U`Carregando...`:U`Loading...`}
        </span>
      </div>
    </div>`}createRenderRoot(){return this}};Eh([z({type:Number,attribute:"min-ms"})],Ka.prototype,"minMs",2);Ka=Eh([oe("mobile-loading")],Ka);function Ms(s){let e=document.querySelector(`meta[name="${s}"]`);return e||(e=document.createElement("meta"),e.setAttribute("name",s),document.head.appendChild(e)),e}function nc(s){let e=document.querySelector(`meta[property="${s}"]`);return e||(e=document.createElement("meta"),e.setAttribute("property",s),document.head.appendChild(e)),e}function t_(s){const e=s.replace(/\/+$/,"")||"/";return e==="/"||e.endsWith("/index.html")?"home":e.endsWith("/projects")||e.endsWith("/projects.html")?"projects":e.endsWith("/glyphs")||e.endsWith("/glyphs.html")?"glyphs":e.endsWith("/twyne")||e.endsWith("/twyne.html")?"twyne":e.endsWith("/404")||e.endsWith("/404.html")?"404":"home"}function rc(s){const e=_.t.bind(_),t=e("seo.common.description"),i=e("seo.common.keywords");switch(s){case"projects":return{title:e("seo.projects.title"),description:t,keywords:[i,e("seo.projects.keywords")].filter(Boolean).join(", ")};case"glyphs":return{title:e("seo.glyphs.title"),description:t,keywords:[i,e("seo.glyphs.keywords")].filter(Boolean).join(", ")};case"twyne":return{title:e("seo.twyne.title"),description:t,keywords:[i,e("seo.twyne.keywords")].filter(Boolean).join(", ")};case"404":return{title:e("seo.404.title"),description:t,keywords:i};case"home":default:return{title:e("seo.home.title"),description:t,keywords:i}}}function sc(s){document.title=s.title,Ms("description").setAttribute("content",s.description),Ms("keywords").setAttribute("content",s.keywords),nc("og:title").setAttribute("content",s.title),nc("og:description").setAttribute("content",s.description),Ms("twitter:title").setAttribute("content",s.title),Ms("twitter:description").setAttribute("content",s.description)}function oc(){const s=t_(window.location.pathname);sc(rc(s)),_.on("languageChanged",()=>{sc(rc(s))})}typeof window<"u"&&document.readyState!=="loading"?oc():typeof window<"u"&&document.addEventListener("DOMContentLoaded",()=>oc(),{once:!0});
