let _globalThis="undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:void 0,isObject=e=>null!==e&&"object"==typeof e,deepMerge=(...e)=>{let t={};for(let s of e)if(Array.isArray(s))Array.isArray(t)||(t=[]),t=[...t,...s];else if(isObject(s))for(let[r,o]of Object.entries(s))isObject(o)&&Reflect.has(t,r)&&(o=deepMerge(t[r],o)),t={...t,[r]:o};return t},requestMethods=["get","post","put","patch","head","delete"],responseTypes=["json","text","formData","arrayBuffer","blob"],retryMethods=new Set(["get","put","head","delete","options","trace"]),retryStatusCodes=new Set([408,413,429,500,502,503,504]),retryAfterStatusCodes=new Set([413,429,503]);class HTTPError extends Error{constructor(e){super(e.statusText),this.name="HTTPError",this.response=e}}class TimeoutError extends Error{constructor(){super("Request timed out"),this.name="TimeoutError"}}let delay=e=>new Promise(t=>setTimeout(t,e)),timeout=(e,t)=>Promise.race([e,(async()=>{throw await delay(t),new TimeoutError})()]),normalizeRequestMethod=e=>requestMethods.includes(e)?e.toUpperCase():e;class Ky{constructor(e,{timeout:t=1e4,hooks:s,throwHttpErrors:r=!0,searchParams:o,json:i,...n}){if(this._retryCount=0,this._options={method:"get",credentials:"same-origin",retry:2,...n},this._options.method=normalizeRequestMethod(this._options.method),this._options.prefixUrl=String(this._options.prefixUrl||""),this._input=String(e||""),this._options.prefixUrl&&this._input.startsWith("/"))throw Error("`input` must not begin with a slash when using `prefixUrl`");this._options.prefixUrl&&!this._options.prefixUrl.endsWith("/")&&(this._options.prefixUrl+="/");let a=new _globalThis.URL(this._options.prefixUrl+this._input,document.baseURI);if("string"==typeof o||o instanceof _globalThis.URLSearchParams)a.search=o;else if(o&&Object.values(o).every(e=>"number"==typeof e||"string"==typeof e))a.search=new _globalThis.URLSearchParams(o).toString();else if(o)throw Error("The `searchParams` option must be either a string, `URLSearchParams` instance or an object with string and number values");this._input=a.toString(),this._timeout=t,this._hooks=deepMerge({beforeRequest:[],afterResponse:[]},s),this._throwHttpErrors=r;let h=new _globalThis.Headers(this._options.headers||{});for(let p of(i&&(h.set("content-type","application/json"),this._options.body=JSON.stringify(i)),this._options.headers=h,this._response=this._fetch(),responseTypes))this._response[p]=this._retry(async()=>{this._retryCount>0&&(this._response=this._fetch());let e=await this._response;for(let t of this._hooks.afterResponse){let s=await t(e.clone());s instanceof _globalThis.Response&&(e=s)}if(!e.ok)throw new HTTPError(e);return e.clone()[p]()});return this._response}_calculateRetryDelay(e){if(this._retryCount++,this._retryCount<this._options.retry&&!(e instanceof TimeoutError)){if(e instanceof HTTPError){if(!retryStatusCodes.has(e.response.status))return 0;let t=e.response.headers.get("Retry-After");if(t&&retryAfterStatusCodes.has(e.response.status)){let s=Number(t);return Number.isNaN(s)?s=Date.parse(t)-Date.now():s*=1e3,s}if(413===e.response.status)return 0}return .3*2**(this._retryCount-1)*1e3}return 0}_retry(e){if(!retryMethods.has(this._options.method.toLowerCase()))return e;let t=async()=>{try{return await e()}catch(s){let r=this._calculateRetryDelay(s);if(0!==r)return await delay(r),t();if(this._throwHttpErrors)throw s}};return t}async _fetch(){for(let e of this._hooks.beforeRequest)await e(this._options);return timeout(_globalThis.fetch(this._input,this._options),this._timeout)}}let createInstance=(e={})=>{if(!isObject(e)||Array.isArray(e))throw TypeError("The `defaultOptions` argument must be an object");let t=(t,s)=>new Ky(t,deepMerge({},e,s));for(let s of requestMethods)t[s]=(t,r)=>new Ky(t,deepMerge({},e,r,{method:s}));return t.extend=e=>createInstance(e),t};export default createInstance();export{HTTPError,TimeoutError};
