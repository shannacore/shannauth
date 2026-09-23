/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/argon2-browser/dist/argon2.js":
/*!****************************************************!*\
  !*** ./node_modules/argon2-browser/dist/argon2.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var __dirname = "/";
var Module=typeof self!=="undefined"&&typeof self.Module!=="undefined"?self.Module:{};var jsModule=Module;var moduleOverrides={};var key;for(key in Module){if(Module.hasOwnProperty(key)){moduleOverrides[key]=Module[key]}}var arguments_=[];var thisProgram="./this.program";var quit_=function(status,toThrow){throw toThrow};var ENVIRONMENT_IS_WEB=false;var ENVIRONMENT_IS_WORKER=false;var ENVIRONMENT_IS_NODE=false;var ENVIRONMENT_IS_SHELL=false;ENVIRONMENT_IS_WEB=typeof window==="object";ENVIRONMENT_IS_WORKER=typeof importScripts==="function";ENVIRONMENT_IS_NODE=typeof process==="object"&&typeof process.versions==="object"&&typeof process.versions.node==="string";ENVIRONMENT_IS_SHELL=!ENVIRONMENT_IS_WEB&&!ENVIRONMENT_IS_NODE&&!ENVIRONMENT_IS_WORKER;var scriptDirectory="";function locateFile(path){if(Module["locateFile"]){return Module["locateFile"](path,scriptDirectory)}return scriptDirectory+path}var read_,readAsync,readBinary,setWindowTitle;var nodeFS;var nodePath;if(ENVIRONMENT_IS_NODE){if(ENVIRONMENT_IS_WORKER){scriptDirectory=(__webpack_require__(/*! path */ "?bcb2").dirname)(scriptDirectory)+"/"}else{scriptDirectory=__dirname+"/"}read_=function shell_read(filename,binary){if(!nodeFS)nodeFS=__webpack_require__(/*! fs */ "?722e");if(!nodePath)nodePath=__webpack_require__(/*! path */ "?bcb2");filename=nodePath["normalize"](filename);return nodeFS["readFileSync"](filename,binary?null:"utf8")};readBinary=function readBinary(filename){var ret=read_(filename,true);if(!ret.buffer){ret=new Uint8Array(ret)}assert(ret.buffer);return ret};if(process["argv"].length>1){thisProgram=process["argv"][1].replace(/\\/g,"/")}arguments_=process["argv"].slice(2);if(true){module["exports"]=Module}process["on"]("uncaughtException",function(ex){if(!(ex instanceof ExitStatus)){throw ex}});process["on"]("unhandledRejection",abort);quit_=function(status){process["exit"](status)};Module["inspect"]=function(){return"[Emscripten Module object]"}}else if(ENVIRONMENT_IS_SHELL){if(typeof read!="undefined"){read_=function shell_read(f){return read(f)}}readBinary=function readBinary(f){var data;if(typeof readbuffer==="function"){return new Uint8Array(readbuffer(f))}data=read(f,"binary");assert(typeof data==="object");return data};if(typeof scriptArgs!="undefined"){arguments_=scriptArgs}else if(typeof arguments!="undefined"){arguments_=arguments}if(typeof quit==="function"){quit_=function(status){quit(status)}}if(typeof print!=="undefined"){if(typeof console==="undefined")console={};console.log=print;console.warn=console.error=typeof printErr!=="undefined"?printErr:print}}else if(ENVIRONMENT_IS_WEB||ENVIRONMENT_IS_WORKER){if(ENVIRONMENT_IS_WORKER){scriptDirectory=self.location.href}else if(typeof document!=="undefined"&&document.currentScript){scriptDirectory=document.currentScript.src}if(scriptDirectory.indexOf("blob:")!==0){scriptDirectory=scriptDirectory.substr(0,scriptDirectory.lastIndexOf("/")+1)}else{scriptDirectory=""}{read_=function(url){var xhr=new XMLHttpRequest;xhr.open("GET",url,false);xhr.send(null);return xhr.responseText};if(ENVIRONMENT_IS_WORKER){readBinary=function(url){var xhr=new XMLHttpRequest;xhr.open("GET",url,false);xhr.responseType="arraybuffer";xhr.send(null);return new Uint8Array(xhr.response)}}readAsync=function(url,onload,onerror){var xhr=new XMLHttpRequest;xhr.open("GET",url,true);xhr.responseType="arraybuffer";xhr.onload=function(){if(xhr.status==200||xhr.status==0&&xhr.response){onload(xhr.response);return}onerror()};xhr.onerror=onerror;xhr.send(null)}}setWindowTitle=function(title){document.title=title}}else{}var out=Module["print"]||console.log.bind(console);var err=Module["printErr"]||console.warn.bind(console);for(key in moduleOverrides){if(moduleOverrides.hasOwnProperty(key)){Module[key]=moduleOverrides[key]}}moduleOverrides=null;if(Module["arguments"])arguments_=Module["arguments"];if(Module["thisProgram"])thisProgram=Module["thisProgram"];if(Module["quit"])quit_=Module["quit"];var wasmBinary;if(Module["wasmBinary"])wasmBinary=Module["wasmBinary"];var noExitRuntime=Module["noExitRuntime"]||true;if(typeof WebAssembly!=="object"){abort("no native wasm support detected")}var wasmMemory;var ABORT=false;var EXITSTATUS;function assert(condition,text){if(!condition){abort("Assertion failed: "+text)}}var ALLOC_NORMAL=0;var ALLOC_STACK=1;function allocate(slab,allocator){var ret;if(allocator==ALLOC_STACK){ret=stackAlloc(slab.length)}else{ret=_malloc(slab.length)}if(slab.subarray||slab.slice){HEAPU8.set(slab,ret)}else{HEAPU8.set(new Uint8Array(slab),ret)}return ret}var UTF8Decoder=typeof TextDecoder!=="undefined"?new TextDecoder("utf8"):undefined;function UTF8ArrayToString(heap,idx,maxBytesToRead){var endIdx=idx+maxBytesToRead;var endPtr=idx;while(heap[endPtr]&&!(endPtr>=endIdx))++endPtr;if(endPtr-idx>16&&heap.subarray&&UTF8Decoder){return UTF8Decoder.decode(heap.subarray(idx,endPtr))}else{var str="";while(idx<endPtr){var u0=heap[idx++];if(!(u0&128)){str+=String.fromCharCode(u0);continue}var u1=heap[idx++]&63;if((u0&224)==192){str+=String.fromCharCode((u0&31)<<6|u1);continue}var u2=heap[idx++]&63;if((u0&240)==224){u0=(u0&15)<<12|u1<<6|u2}else{u0=(u0&7)<<18|u1<<12|u2<<6|heap[idx++]&63}if(u0<65536){str+=String.fromCharCode(u0)}else{var ch=u0-65536;str+=String.fromCharCode(55296|ch>>10,56320|ch&1023)}}}return str}function UTF8ToString(ptr,maxBytesToRead){return ptr?UTF8ArrayToString(HEAPU8,ptr,maxBytesToRead):""}function alignUp(x,multiple){if(x%multiple>0){x+=multiple-x%multiple}return x}var buffer,HEAP8,HEAPU8,HEAP16,HEAPU16,HEAP32,HEAPU32,HEAPF32,HEAPF64;function updateGlobalBufferAndViews(buf){buffer=buf;Module["HEAP8"]=HEAP8=new Int8Array(buf);Module["HEAP16"]=HEAP16=new Int16Array(buf);Module["HEAP32"]=HEAP32=new Int32Array(buf);Module["HEAPU8"]=HEAPU8=new Uint8Array(buf);Module["HEAPU16"]=HEAPU16=new Uint16Array(buf);Module["HEAPU32"]=HEAPU32=new Uint32Array(buf);Module["HEAPF32"]=HEAPF32=new Float32Array(buf);Module["HEAPF64"]=HEAPF64=new Float64Array(buf)}var INITIAL_MEMORY=Module["INITIAL_MEMORY"]||16777216;var wasmTable;var __ATPRERUN__=[];var __ATINIT__=[];var __ATPOSTRUN__=[];var runtimeInitialized=false;function preRun(){if(Module["preRun"]){if(typeof Module["preRun"]=="function")Module["preRun"]=[Module["preRun"]];while(Module["preRun"].length){addOnPreRun(Module["preRun"].shift())}}callRuntimeCallbacks(__ATPRERUN__)}function initRuntime(){runtimeInitialized=true;callRuntimeCallbacks(__ATINIT__)}function postRun(){if(Module["postRun"]){if(typeof Module["postRun"]=="function")Module["postRun"]=[Module["postRun"]];while(Module["postRun"].length){addOnPostRun(Module["postRun"].shift())}}callRuntimeCallbacks(__ATPOSTRUN__)}function addOnPreRun(cb){__ATPRERUN__.unshift(cb)}function addOnInit(cb){__ATINIT__.unshift(cb)}function addOnPostRun(cb){__ATPOSTRUN__.unshift(cb)}var runDependencies=0;var runDependencyWatcher=null;var dependenciesFulfilled=null;function addRunDependency(id){runDependencies++;if(Module["monitorRunDependencies"]){Module["monitorRunDependencies"](runDependencies)}}function removeRunDependency(id){runDependencies--;if(Module["monitorRunDependencies"]){Module["monitorRunDependencies"](runDependencies)}if(runDependencies==0){if(runDependencyWatcher!==null){clearInterval(runDependencyWatcher);runDependencyWatcher=null}if(dependenciesFulfilled){var callback=dependenciesFulfilled;dependenciesFulfilled=null;callback()}}}Module["preloadedImages"]={};Module["preloadedAudios"]={};function abort(what){if(Module["onAbort"]){Module["onAbort"](what)}what+="";err(what);ABORT=true;EXITSTATUS=1;what="abort("+what+"). Build with -s ASSERTIONS=1 for more info.";var e=new WebAssembly.RuntimeError(what);throw e}var dataURIPrefix="data:application/octet-stream;base64,";function isDataURI(filename){return filename.startsWith(dataURIPrefix)}function isFileURI(filename){return filename.startsWith("file://")}var wasmBinaryFile="argon2.wasm";if(!isDataURI(wasmBinaryFile)){wasmBinaryFile=locateFile(wasmBinaryFile)}function getBinary(file){try{if(file==wasmBinaryFile&&wasmBinary){return new Uint8Array(wasmBinary)}if(readBinary){return readBinary(file)}else{throw"both async and sync fetching of the wasm failed"}}catch(err){abort(err)}}function getBinaryPromise(){if(!wasmBinary&&(ENVIRONMENT_IS_WEB||ENVIRONMENT_IS_WORKER)){if(typeof fetch==="function"&&!isFileURI(wasmBinaryFile)){return fetch(wasmBinaryFile,{credentials:"same-origin"}).then(function(response){if(!response["ok"]){throw"failed to load wasm binary file at '"+wasmBinaryFile+"'"}return response["arrayBuffer"]()}).catch(function(){return getBinary(wasmBinaryFile)})}else{if(readAsync){return new Promise(function(resolve,reject){readAsync(wasmBinaryFile,function(response){resolve(new Uint8Array(response))},reject)})}}}return Promise.resolve().then(function(){return getBinary(wasmBinaryFile)})}function createWasm(){var info={"a":asmLibraryArg};function receiveInstance(instance,module){var exports=instance.exports;Module["asm"]=exports;wasmMemory=Module["asm"]["c"];updateGlobalBufferAndViews(wasmMemory.buffer);wasmTable=Module["asm"]["k"];addOnInit(Module["asm"]["d"]);removeRunDependency("wasm-instantiate")}addRunDependency("wasm-instantiate");function receiveInstantiationResult(result){receiveInstance(result["instance"])}function instantiateArrayBuffer(receiver){return getBinaryPromise().then(function(binary){var result=WebAssembly.instantiate(binary,info);return result}).then(receiver,function(reason){err("failed to asynchronously prepare wasm: "+reason);abort(reason)})}function instantiateAsync(){if(!wasmBinary&&typeof WebAssembly.instantiateStreaming==="function"&&!isDataURI(wasmBinaryFile)&&!isFileURI(wasmBinaryFile)&&typeof fetch==="function"){return fetch(wasmBinaryFile,{credentials:"same-origin"}).then(function(response){var result=WebAssembly.instantiateStreaming(response,info);return result.then(receiveInstantiationResult,function(reason){err("wasm streaming compile failed: "+reason);err("falling back to ArrayBuffer instantiation");return instantiateArrayBuffer(receiveInstantiationResult)})})}else{return instantiateArrayBuffer(receiveInstantiationResult)}}if(Module["instantiateWasm"]){try{var exports=Module["instantiateWasm"](info,receiveInstance);return exports}catch(e){err("Module.instantiateWasm callback failed with error: "+e);return false}}instantiateAsync();return{}}function callRuntimeCallbacks(callbacks){while(callbacks.length>0){var callback=callbacks.shift();if(typeof callback=="function"){callback(Module);continue}var func=callback.func;if(typeof func==="number"){if(callback.arg===undefined){wasmTable.get(func)()}else{wasmTable.get(func)(callback.arg)}}else{func(callback.arg===undefined?null:callback.arg)}}}function _emscripten_memcpy_big(dest,src,num){HEAPU8.copyWithin(dest,src,src+num)}function emscripten_realloc_buffer(size){try{wasmMemory.grow(size-buffer.byteLength+65535>>>16);updateGlobalBufferAndViews(wasmMemory.buffer);return 1}catch(e){}}function _emscripten_resize_heap(requestedSize){var oldSize=HEAPU8.length;requestedSize=requestedSize>>>0;var maxHeapSize=2147418112;if(requestedSize>maxHeapSize){return false}for(var cutDown=1;cutDown<=4;cutDown*=2){var overGrownHeapSize=oldSize*(1+.2/cutDown);overGrownHeapSize=Math.min(overGrownHeapSize,requestedSize+100663296);var newSize=Math.min(maxHeapSize,alignUp(Math.max(requestedSize,overGrownHeapSize),65536));var replacement=emscripten_realloc_buffer(newSize);if(replacement){return true}}return false}var asmLibraryArg={"a":_emscripten_memcpy_big,"b":_emscripten_resize_heap};var asm=createWasm();var ___wasm_call_ctors=Module["___wasm_call_ctors"]=function(){return(___wasm_call_ctors=Module["___wasm_call_ctors"]=Module["asm"]["d"]).apply(null,arguments)};var _argon2_hash=Module["_argon2_hash"]=function(){return(_argon2_hash=Module["_argon2_hash"]=Module["asm"]["e"]).apply(null,arguments)};var _malloc=Module["_malloc"]=function(){return(_malloc=Module["_malloc"]=Module["asm"]["f"]).apply(null,arguments)};var _free=Module["_free"]=function(){return(_free=Module["_free"]=Module["asm"]["g"]).apply(null,arguments)};var _argon2_verify=Module["_argon2_verify"]=function(){return(_argon2_verify=Module["_argon2_verify"]=Module["asm"]["h"]).apply(null,arguments)};var _argon2_error_message=Module["_argon2_error_message"]=function(){return(_argon2_error_message=Module["_argon2_error_message"]=Module["asm"]["i"]).apply(null,arguments)};var _argon2_encodedlen=Module["_argon2_encodedlen"]=function(){return(_argon2_encodedlen=Module["_argon2_encodedlen"]=Module["asm"]["j"]).apply(null,arguments)};var _argon2_hash_ext=Module["_argon2_hash_ext"]=function(){return(_argon2_hash_ext=Module["_argon2_hash_ext"]=Module["asm"]["l"]).apply(null,arguments)};var _argon2_verify_ext=Module["_argon2_verify_ext"]=function(){return(_argon2_verify_ext=Module["_argon2_verify_ext"]=Module["asm"]["m"]).apply(null,arguments)};var stackAlloc=Module["stackAlloc"]=function(){return(stackAlloc=Module["stackAlloc"]=Module["asm"]["n"]).apply(null,arguments)};Module["allocate"]=allocate;Module["UTF8ToString"]=UTF8ToString;Module["ALLOC_NORMAL"]=ALLOC_NORMAL;var calledRun;function ExitStatus(status){this.name="ExitStatus";this.message="Program terminated with exit("+status+")";this.status=status}dependenciesFulfilled=function runCaller(){if(!calledRun)run();if(!calledRun)dependenciesFulfilled=runCaller};function run(args){args=args||arguments_;if(runDependencies>0){return}preRun();if(runDependencies>0){return}function doRun(){if(calledRun)return;calledRun=true;Module["calledRun"]=true;if(ABORT)return;initRuntime();if(Module["onRuntimeInitialized"])Module["onRuntimeInitialized"]();postRun()}if(Module["setStatus"]){Module["setStatus"]("Running...");setTimeout(function(){setTimeout(function(){Module["setStatus"]("")},1);doRun()},1)}else{doRun()}}Module["run"]=run;if(Module["preInit"]){if(typeof Module["preInit"]=="function")Module["preInit"]=[Module["preInit"]];while(Module["preInit"].length>0){Module["preInit"].pop()()}}run();if(true)module.exports=Module;Module.unloadRuntime=function(){if(typeof self!=="undefined"){delete self.Module}Module=jsModule=wasmMemory=wasmTable=asm=buffer=HEAP8=HEAPU8=HEAP16=HEAPU16=HEAP32=HEAPU32=HEAPF32=HEAPF64=undefined;if(true){delete module.exports}};


/***/ }),

/***/ "./node_modules/argon2-browser/lib/argon2.js":
/*!***************************************************!*\
  !*** ./node_modules/argon2-browser/lib/argon2.js ***!
  \***************************************************/
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (root, factory) {
    if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else {}
})(typeof self !== 'undefined' ? self : this, function () {
    const global = typeof self !== 'undefined' ? self : this;

    /**
     * @enum
     */
    const ArgonType = {
        Argon2d: 0,
        Argon2i: 1,
        Argon2id: 2,
    };

    function loadModule(mem) {
        if (loadModule._promise) {
            return loadModule._promise;
        }
        if (loadModule._module) {
            return Promise.resolve(loadModule._module);
        }
        let promise;
        if (
            global.process &&
            global.process.versions &&
            global.process.versions.node
        ) {
            promise = loadWasmModule().then(
                (Module) =>
                    new Promise((resolve) => {
                        Module.postRun = () => resolve(Module);
                    })
            );
        } else {
            promise = loadWasmBinary().then((wasmBinary) => {
                const wasmMemory = mem ? createWasmMemory(mem) : undefined;
                return initWasm(wasmBinary, wasmMemory);
            });
        }
        loadModule._promise = promise;
        return promise.then((Module) => {
            loadModule._module = Module;
            delete loadModule._promise;
            return Module;
        });
    }

    function initWasm(wasmBinary, wasmMemory) {
        return new Promise((resolve) => {
            global.Module = {
                wasmBinary,
                wasmMemory,
                postRun() {
                    resolve(Module);
                },
            };
            return loadWasmModule();
        });
    }

    function loadWasmModule() {
        if (global.loadArgon2WasmModule) {
            return global.loadArgon2WasmModule();
        }
        if (true) {
            return Promise.resolve(__webpack_require__(/*! ../dist/argon2.js */ "./node_modules/argon2-browser/dist/argon2.js"));
        }
        return Promise.resolve(/*! import() */).then(__webpack_require__.t.bind(__webpack_require__, /*! ../dist/argon2.js */ "./node_modules/argon2-browser/dist/argon2.js", 23));
    }

    function loadWasmBinary() {
        if (global.loadArgon2WasmBinary) {
            return global.loadArgon2WasmBinary();
        }
        if (true) {
            return Promise.resolve(__webpack_require__(/*! ../dist/argon2.wasm */ "./node_modules/argon2-browser/dist/argon2.wasm")).then(
                (wasmModule) => {
                    return decodeWasmBinary(wasmModule);
                }
            );
        }
        const wasmPath =
            global.argon2WasmPath ||
            'node_modules/argon2-browser/dist/argon2.wasm';
        return fetch(wasmPath)
            .then((response) => response.arrayBuffer())
            .then((ab) => new Uint8Array(ab));
    }

    function decodeWasmBinary(base64) {
        const text = atob(base64);
        const binary = new Uint8Array(new ArrayBuffer(text.length));
        for (let i = 0; i < text.length; i++) {
            binary[i] = text.charCodeAt(i);
        }
        return binary;
    }

    function createWasmMemory(mem) {
        const KB = 1024;
        const MB = 1024 * KB;
        const GB = 1024 * MB;
        const WASM_PAGE_SIZE = 64 * KB;

        const totalMemory = (2 * GB - 64 * KB) / WASM_PAGE_SIZE;
        const initialMemory = Math.min(
            Math.max(Math.ceil((mem * KB) / WASM_PAGE_SIZE), 256) + 256,
            totalMemory
        );

        return new WebAssembly.Memory({
            initial: initialMemory,
            maximum: totalMemory,
        });
    }

    function allocateArray(Module, arr) {
        return Module.allocate(arr, 'i8', Module.ALLOC_NORMAL);
    }

    function allocateArrayStr(Module, arr) {
        const nullTerminatedArray = new Uint8Array([...arr, 0]);
        return allocateArray(Module, nullTerminatedArray);
    }

    function encodeUtf8(str) {
        if (typeof str !== 'string') {
            return str;
        }
        if (typeof TextEncoder === 'function') {
            return new TextEncoder().encode(str);
        } else if (typeof Buffer === 'function') {
            return Buffer.from(str);
        } else {
            throw new Error("Don't know how to encode UTF8");
        }
    }

    /**
     * Argon2 hash
     * @param {string|Uint8Array} params.pass - password string
     * @param {string|Uint8Array} params.salt - salt string
     * @param {number} [params.time=1] - the number of iterations
     * @param {number} [params.mem=1024] - used memory, in KiB
     * @param {number} [params.hashLen=24] - desired hash length
     * @param {number} [params.parallelism=1] - desired parallelism
     * @param {number} [params.type=argon2.ArgonType.Argon2d] - hash type:
     *      argon2.ArgonType.Argon2d
     *      argon2.ArgonType.Argon2i
     *      argon2.ArgonType.Argon2id
     *
     * @return Promise
     *
     * @example
     *  argon2.hash({ pass: 'password', salt: 'somesalt' })
     *      .then(h => console.log(h.hash, h.hashHex, h.encoded))
     *      .catch(e => console.error(e.message, e.code))
     */
    function argon2Hash(params) {
        const mCost = params.mem || 1024;
        return loadModule(mCost).then((Module) => {
            const tCost = params.time || 1;
            const parallelism = params.parallelism || 1;
            const pwdEncoded = encodeUtf8(params.pass);
            const pwd = allocateArrayStr(Module, pwdEncoded);
            const pwdlen = pwdEncoded.length;
            const saltEncoded = encodeUtf8(params.salt);
            const salt = allocateArrayStr(Module, saltEncoded);
            const saltlen = saltEncoded.length;
            const argon2Type = params.type || ArgonType.Argon2d;
            const hash = Module.allocate(
                new Array(params.hashLen || 24),
                'i8',
                Module.ALLOC_NORMAL
            );
            const secret = params.secret
                ? allocateArray(Module, params.secret)
                : 0;
            const secretlen = params.secret ? params.secret.byteLength : 0;
            const ad = params.ad ? allocateArray(Module, params.ad) : 0;
            const adlen = params.ad ? params.ad.byteLength : 0;
            const hashlen = params.hashLen || 24;
            const encodedlen = Module._argon2_encodedlen(
                tCost,
                mCost,
                parallelism,
                saltlen,
                hashlen,
                argon2Type
            );
            const encoded = Module.allocate(
                new Array(encodedlen + 1),
                'i8',
                Module.ALLOC_NORMAL
            );
            const version = 0x13;
            let err;
            let res;
            try {
                res = Module._argon2_hash_ext(
                    tCost,
                    mCost,
                    parallelism,
                    pwd,
                    pwdlen,
                    salt,
                    saltlen,
                    hash,
                    hashlen,
                    encoded,
                    encodedlen,
                    argon2Type,
                    secret,
                    secretlen,
                    ad,
                    adlen,
                    version
                );
            } catch (e) {
                err = e;
            }
            let result;
            if (res === 0 && !err) {
                let hashStr = '';
                const hashArr = new Uint8Array(hashlen);
                for (let i = 0; i < hashlen; i++) {
                    const byte = Module.HEAP8[hash + i];
                    hashArr[i] = byte;
                    hashStr += ('0' + (0xff & byte).toString(16)).slice(-2);
                }
                const encodedStr = Module.UTF8ToString(encoded);
                result = {
                    hash: hashArr,
                    hashHex: hashStr,
                    encoded: encodedStr,
                };
            } else {
                try {
                    if (!err) {
                        err = Module.UTF8ToString(
                            Module._argon2_error_message(res)
                        );
                    }
                } catch (e) {}
                result = { message: err, code: res };
            }
            try {
                Module._free(pwd);
                Module._free(salt);
                Module._free(hash);
                Module._free(encoded);
                if (ad) {
                    Module._free(ad);
                }
                if (secret) {
                    Module._free(secret);
                }
            } catch (e) {}
            if (err) {
                throw result;
            } else {
                return result;
            }
        });
    }

    /**
     * Argon2 verify function
     * @param {string} params.pass - password string
     * @param {string|Uint8Array} params.encoded - encoded hash
     * @param {number} [params.type=argon2.ArgonType.Argon2d] - hash type:
     *      argon2.ArgonType.Argon2d
     *      argon2.ArgonType.Argon2i
     *      argon2.ArgonType.Argon2id
     *
     * @returns Promise
     *
     * @example
     *  argon2.verify({ pass: 'password', encoded: 'encoded-hash' })
     *      .then(() => console.log('OK'))
     *      .catch(e => console.error(e.message, e.code))
     */
    function argon2Verify(params) {
        return loadModule().then((Module) => {
            const pwdEncoded = encodeUtf8(params.pass);
            const pwd = allocateArrayStr(Module, pwdEncoded);
            const pwdlen = pwdEncoded.length;
            const secret = params.secret
                ? allocateArray(Module, params.secret)
                : 0;
            const secretlen = params.secret ? params.secret.byteLength : 0;
            const ad = params.ad ? allocateArray(Module, params.ad) : 0;
            const adlen = params.ad ? params.ad.byteLength : 0;
            const encEncoded = encodeUtf8(params.encoded);
            const enc = allocateArrayStr(Module, encEncoded);
            let argon2Type = params.type;
            if (argon2Type === undefined) {
                let typeStr = params.encoded.split('$')[1];
                if (typeStr) {
                    typeStr = typeStr.replace('a', 'A');
                    argon2Type = ArgonType[typeStr] || ArgonType.Argon2d;
                }
            }
            let err;
            let res;
            try {
                res = Module._argon2_verify_ext(
                    enc,
                    pwd,
                    pwdlen,
                    secret,
                    secretlen,
                    ad,
                    adlen,
                    argon2Type
                );
            } catch (e) {
                err = e;
            }
            let result;
            if (res || err) {
                try {
                    if (!err) {
                        err = Module.UTF8ToString(
                            Module._argon2_error_message(res)
                        );
                    }
                } catch (e) {}
                result = { message: err, code: res };
            }
            try {
                Module._free(pwd);
                Module._free(enc);
            } catch (e) {}
            if (err) {
                throw result;
            } else {
                return result;
            }
        });
    }

    function unloadRuntime() {
        if (loadModule._module) {
            loadModule._module.unloadRuntime();
            delete loadModule._promise;
            delete loadModule._module;
        }
    }

    return {
        ArgonType,
        hash: argon2Hash,
        verify: argon2Verify,
        unloadRuntime,
    };
});


/***/ }),

/***/ "./node_modules/argon2-browser/dist/argon2.wasm":
/*!******************************************************!*\
  !*** ./node_modules/argon2-browser/dist/argon2.wasm ***!
  \******************************************************/
/***/ (function(module, exports) {

module.exports = "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DwtBixEPC0GeEyEBCyABC48DAQF/IwBBgANrIgQkACAEQQA2AowBIARBjAFqIAEQBwJAIAFBwABNBEAgBEGQAWogARAYQQBIDQEgBEGQAWogBEGMAWpBBBAGQQBIDQEgBEGQAWogAiADEAZBAEgNASAEQZABaiAAIAEQEhoMAQsgBEGQAWpBwAAQGEEASA0AIARBkAFqIARBjAFqQQQQBkEASA0AIARBkAFqIAIgAxAGQQBIDQAgBEGQAWogBEFAa0HAABASQQBIDQAgACAEKQNANwAAIAAgBCkDSDcACCAAIAQpA1g3ABggACAEKQNQNwAQIABBIGohACABQSBrIgJBwQBPBEADQCAEIARBQGtBwAAQBSIBQUBrQcAAIAEQMUEASA0CIAAgASkDQDcAACAAIAEpA0g3AAggACAEKQNYNwAYIAAgBCkDUDcAECAAQSBqIQAgAkEgayICQcAASw0ACwsgBCAEQUBrQcAAEAUiAUFAayACIAEQMUEASA0AIAAgAUFAayACEAUaCyAEQZABakHwARAEIARBgANqJAALAwABC5kCACAARQRAQQAPCwJ/AkAgAAR/IAFB/wBNDQECQEGgHigCACgCAEUEQCABQYB/cUGAvwNGDQMMAQsgAUH/D00EQCAAIAFBP3FBgAFyOgABIAAgAUEGdkHAAXI6AABBAgwECyABQYCwA09BACABQYBAcUGAwANHG0UEQCAAIAFBP3FBgAFyOgACIAAgAUEMdkHgAXI6AAAgACABQQZ2QT9xQYABcjoAAUEDDAQLIAFBgIAEa0H//z9NBEAgACABQT9xQYABcjoAAyAAIAFBEnZB8AFyOgAAIAAgAUEGdkE/cUGAAXI6AAIgACABQQx2QT9xQYABcjoAAUEEDAQLC0HcHkEZNgIAQX8FQQELDAELIAAgAToAAEEBCwtQAQN/AkAgACgCACwAABAPRQRADAELA0AgACgCACICLAAAIQMgACACQQFqNgIAIAEgA2pBMGshASACLAABEA9FDQEgAUEKbCEBDAALAAsgAQu7AgACQCABQRRLDQACQAJAAkACQAJAAkACQAJAAkACQCABQQlrDgoAAQIDBAUGBwgJCgsgAiACKAIAIgFBBGo2AgAgACABKAIANgIADwsgAiACKAIAIgFBBGo2AgAgACABNAIANwMADwsgAiACKAIAIgFBBGo2AgAgACABNQIANwMADwsgAiACKAIAQQdqQXhxIgFBCGo2AgAgACABKQMANwMADwsgAiACKAIAIgFBBGo2AgAgACABMgEANwMADwsgAiACKAIAIgFBBGo2AgAgACABMwEANwMADwsgAiACKAIAIgFBBGo2AgAgACABMAAANwMADwsgAiACKAIAIgFBBGo2AgAgACABMQAANwMADwsgAiACKAIAQQdqQXhxIgFBCGo2AgAgACABKwMAOQMADwsgACACQQARAgALCxkAIAAtAOgBBEAgAEJ/NwNYCyAAQn83A1ALIwAgASABKQMwQgF8NwMwIAIgASAAQQAQESACIAAgAEEAEBELOQECfyAAQQNuIgJBAnQhAQJAAkACQCACQQNsQX9zIABqDgIBAAILIAFBAXIhAQsgAUECaiEBCyABC3oBAn8gAEHA/wBzQQFqQQh2QX9zQS9xIABBwf8Ac0EBakEIdkF/c0ErcSAAQeb/A2pBCHZB/wFxIgEgAEHBAGpxcnIgAEHM/wNqQQh2IgIgAEHHAGpxIAFB/wFzcXIgAEH8AWogAEHC/wNqQQh2cSACQX9zcUH/AXFyC9YBAQV/QX8hBCADQQNuIgZBAnQhBQJAAkACQCAGQQNsQX9zIANqDgIBAAILIAVBAXIhBQsgBUECaiEFCyABIAVLBH8CQCADRQ0AQQAhAUEIIQQDQCABIAItAAAiCHIhBwNAIAAiASAHIAQiBkEGayIEdkE/cRAoOgAAIAFBAWohACAEQQVLDQALIANBAWsiAwRAIAJBAWohAiAHQQh0IQEgBEEIaiEEDAELCyAERQ0AIAEgCEEMIAZrdEE/cRAoOgABIAFBAmohAAsgAEEAOgAAIAUFIAQLC8oEAQN/IwBB4ABrIgQkACADEB8hBSACEBwhAwJAAkAgBUUNACADDQEgAUECSQ0AIABBJDsAACABQQFrIgMgBRAKIgFNDQAgAEEBaiAFIAFBAWoQBSEAIAMgAWsiA0EESQ0AIAAgAWoiAUGk7PUBNgAAIAQgAigCODYCMCAEQUBrIARBMGoQEyADQQNrIgMgBEFAaxAKIgBNDQAgAUEDaiAEQUBrIABBAWoQBSEBIAMgAGsiA0EESQ0AIAAgAWoiAUGk2vUBNgAAIAQgAigCLDYCICAEQUBrIARBIGoQEyADQQNrIgMgBEFAaxAKIgBNDQAgAUEDaiAEQUBrIABBAWoQBSEBIAMgAGsiA0EESQ0AIAAgAWoiAUGs6PUBNgAAIAQgAigCKDYCECAEQUBrIARBEGoQEyADQQNrIgMgBEFAaxAKIgBNDQAgAUEDaiAEQUBrIABBAWoQBSEBIAMgAGsiA0EESQ0AIAAgAWoiAUGs4PUBNgAAIAQgAigCMDYCACAEQUBrIAQQEyADQQNrIgMgBEFAaxAKIgBNDQAgAUEDaiAEQUBrIABBAWoQBSEBIAMgAGsiA0ECSQ0AIAAgAWoiAEEkOwAAIABBAWoiACADQQFrIgYgAigCECACKAIUECkiAUF/RiIFDQBBYSEDIAZBACABIAUbayIGQQJJDQEgACAAIAFqIAUbIgBBJDsAACAAQQFqIAZBAWsgAigCACACKAIEECkhACAEQeAAaiQAQWFBACAAQX9GGw8LQWEhAwsgBEHgAGokACADC7gBAQF/QQAgAEEEaiAAQdD/A2pBCHZBf3NxQTkgAGtBCHZBf3NxQf8BcSAAQcEAayIBIAFBCHZBf3NxQdoAIABrQQh2QX9zcUH/AXEgAEG5AWogAEGf/wNqQQh2QX9zcUH6ACAAa0EIdkF/c3FB/wFxIABB0P8Ac0EBakEIdkF/c0E/cSAAQdT/AHNBAWpBCHZBf3NBPnFycnJyIgFrQQh2QX9zIABBvv8Dc0EBakEIdnFB/wFxIAFyC64BAQR/An8CfyACLAAAECsiBkH/AUYEQEF/DAELA0AgBCAGaiEEAkAgA0EGaiIGQQhJBEAgBiEDDAELIAEoAgAgBU0EQEEADwsgACAEIANBAmsiA3Y6AAAgAEEBaiEAIAVBAWohBQsgAkEBaiICLAAAECsiBkH/AUcEQCAEQQZ0IQQMAQsLQQAgA0EESw0BGkF/IAN0CyEDQQAgBCADQX9zcQ0AGiABIAU2AgAgAgsLrAMBBX8jAEEQayIDJAAgACgCBCEGIAAoAhQhBwJAIAIQHyIERQRAQWYhAgwBC0FgIQIgAS0AACIFQSRHDQAgAUEBaiABIAVBJEYbIgEgBCAEEAoiBBAQIgUNACAAQRA2AjggASABIARqIgEgBRsiBEHfFEEDEBBFBEAgBEEDaiADQQxqEBUiAUUNASAAIAMoAgw2AjgLIAFB6xRBAxAQDQAgAUEDaiADQQxqEBUiAUUNACAAIAMoAgw2AiwgAUHjFEEDEBANACABQQNqIANBDGoQFSIBRQ0AIAAgAygCDDYCKCABQecUQQMQEA0AIAFBA2ogA0EMahAVIgFFDQAgACADKAIMIgQ2AjAgACAENgI0IAEtAABBJEcNACADIAc2AgwgACgCECADQQxqIAFBAWoQLCIBRQ0AIAAgAygCDDYCFCABLQAAQSRHDQAgAyAGNgIMIAAoAgAgA0EMaiABQQFqECwiAUUNACAAIAMoAgw2AgQgAEEANgJEIABCADcCPCAAQgA3AhggAEIANwIgIAAQHCICDQBBYEEAIAEtAAAbIQILIANBEGokACACCykBAn8DQCAAIAJBA3QiA2ogASADaikAADcDACACQQFqIgJBgAFHDQALCwwAIABBAEGACBALGgtlAQJ/IAAgAhAeIgIEfyACBUFdQQACfyAAKAIAIQRBACECIAAoAgQiAAR/A0AgAyACIARqLQAAIAEgAmotAABzciEDIAJBAWoiAiAARw0ACyADQQFrQQh2QQFxQQFrBUEACwsbCwtdAQJ/IwBB8AFrIgMkAEF/IQQCQCACRSAARSABRXJyIAFBwABLcg0AIAMgARAYQQBIDQAgAyACQcAAEAZBAEgNACADIAAgARASIQQLIANB8AEQBCADQfABaiQAIAQLCQAgACABNwAACxAAIwAgAGtBcHEiACQAIAALMwEBfyAAKAIUIgMgASACIAAoAhAgA2siASABIAJLGyIBEAUaIAAgACgCFCABajYCFCACC9oBAQR/IwBB0ABrIggkAAJAIABFBEBBYCEADAELIAggABAKIgk2AgwgCCAJNgIcIAggCRAJIgo2AhggCCAJEAkiCzYCCEEAIQkCQAJAIApFIAtFcg0AIAggAjYCFCAIIAE2AhAgCEEIaiAAIAcQLSIADQEgCCgCCCEJIAggCCgCDBAJIgA2AgggAEUNACAIIAY2AiwgCCAFNgIoIAggBDYCJCAIIAM2AiAgCEEIaiAJIAcQMCEADAELQWohAAsgCCgCGBAIIAgoAggQCCAJEAgLIAhB0ABqJAAgAAuQAgEDfyMAQdAAayIRJABBfiETAkAgCEEESQ0AIAgQCSISRQRAQWohEwwBCyARQQA2AkwgEUIANwJEIBEgAjYCPCARIAI2AjggESABNgI0IBEgADYCMCARIA82AiwgESAONgIoIBEgDTYCJCAR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IGxvbmcgb3IgdG9vIHNob3J0AE1pc3NpbmcgYXJndW1lbnRzAFRvbyBtYW55IGxhbmVzAFRvbyBmZXcgbGFuZXMAVG9vIG1hbnkgdGhyZWFkcwBOb3QgZW5vdWdoIHRocmVhZHMATWVtb3J5IGFsbG9jYXRpb24gZXJyb3IATWVtb3J5IGNvc3QgaXMgdG9vIHNtYWxsAFRpbWUgY29zdCBpcyB0b28gc21hbGwAYXJnb24yaQBBcmdvbjJpAFRoZSBwYXNzd29yZCBkb2VzIG5vdCBtYXRjaCB0aGUgc3VwcGxpZWQgaGFzaABPdXRwdXQgcG9pbnRlciBtaXNtYXRjaABPdXRwdXQgaXMgdG9vIGxvbmcAU2FsdCBpcyB0b28gbG9uZwBTZWNyZXQgaXMgdG9vIGxvbmcAUGFzc3dvcmQgaXMgdG9vIGxvbmcAQXNzb2NpYXRlZCBkYXRhIGlzIHRvbyBsb25nAFRocmVhZGluZyBmYWlsdXJlAE1lbW9yeSBjb3N0IGlzIHRvbyBsYXJnZQBUaW1lIGNvc3QgaXMgdG9vIGxhcmdlAFVua25vd24gZXJyb3IgY29kZQBhcmdvbjJpZABBcmdvbjJpZABFbmNvZGluZyBmYWlsZWQARGVjb2RpbmcgZmFpbGVkAGFyZ29uMmQAQXJnb24yZABBcmdvbjJfQ29udGV4dCBjb250ZXh0IGlzIE5VTEwAT3V0cHV0IHBvaW50ZXIgaXMgTlVMTABUaGUgYWxsb2NhdGUgbWVtb3J5IGNhbGxiYWNrIGlzIE5VTEwAVGhlIGZyZWUgbWVtb3J5IGNhbGxiYWNrIGlzIE5VTEwAT0sAJHY9ACx0PQAscD0AJG09AFRoZXJlIGlzIG5vIHN1Y2ggdmVyc2lvbiBvZiBBcmdvbjIAU2FsdCBwb2ludGVyIGlzIE5VTEwsIGJ1dCBzYWx0IGxlbmd0aCBpcyBub3QgMABTZWNyZXQgcG9pbnRlciBpcyBOVUxMLCBidXQgc2VjcmV0IGxlbmd0aCBpcyBub3QgMABQYXNzd29yZCBwb2ludGVyIGlzIE5VTEwsIGJ1dCBwYXNzd29yZCBsZW5ndGggaXMgbm90IDAAQXNzb2NpYXRlZCBkYXRhIHBvaW50ZXIgaXMgTlVMTCwgYnV0IGFkIGxlbmd0aCBpcyBub3QgMAAobnVsbCkAAACbCAAAuwcAAEkJAADACQAAsAkAAPAHAAAfCAAAMAgAAMkIAABvCgAA4AkAABYKAAA7CgAAQwgAACsLAADBCgAAkgoAAPQKAAACCAAAEQgAAFsJAABbCAAAdAkAAHQIAAAFCQAAdAcAAC0JAACeBwAA9AgAAGIHAAAYCQAAiAcAAOEIAABOBwAA/wkAAFwKAAABAEGkGAsBAgBByxgLBf//////AEGQGQtBEQAKABEREQAAAAAFAAAAAAAACQAAAAALAAAAAAAAAAARAA8KERERAwoHAAEACQsLAAAJBgsAAAsABhEAAAAREREAQeEZCyELAAAAAAAAAAARAAoKERERAAoAAAIACQsAAAAJAAsAAAsAQZsaCwEMAEGnGgsVDAAAAAAMAAAAAAkMAAAAAAAMAAAMAEHVGgsBDgBB4RoLFQ0AAAAEDQAAAAAJDgAAAAAADgAADgBBjxsLARAAQZsbCx4PAAAAAA8AAAAACRAAAAAAABAAABAAABIAAAASEhIAQdIbCw4SAAAAEhISAAAAAAAACQBBgxwLAQsAQY8cCxUKAAAAAAoAAAAACQsAAAAAAAsAAAsAQb0cCwEMAEHJHAsnDAAAAAAMAAAAAAkMAAAAAAAMAAAMAAAwMTIzNDU2Nzg5QUJDREVGAEHwHAsBAQBBoB4LAogPAEHYHgsDkBFQ"

/***/ }),

/***/ "?722e":
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "?bcb2":
/*!**********************!*\
  !*** path (ignored) ***!
  \**********************/
/***/ (() => {

/* (ignored) */

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/create fake namespace object */
/******/ 	(() => {
/******/ 		var getProto = Object.getPrototypeOf ? (obj) => (Object.getPrototypeOf(obj)) : (obj) => (obj.__proto__);
/******/ 		var leafPrototypes;
/******/ 		// create a fake namespace object
/******/ 		// mode & 1: value is a module id, require it
/******/ 		// mode & 2: merge all properties of value into the ns
/******/ 		// mode & 4: return value when already ns object
/******/ 		// mode & 16: return value when it's Promise-like
/******/ 		// mode & 8|1: behave like require
/******/ 		__webpack_require__.t = function(value, mode) {
/******/ 			if(mode & 1) value = this(value);
/******/ 			if(mode & 8) return value;
/******/ 			if(typeof value === 'object' && value) {
/******/ 				if((mode & 4) && value.__esModule) return value;
/******/ 				if((mode & 16) && typeof value.then === 'function') return value;
/******/ 			}
/******/ 			var ns = Object.create(null);
/******/ 			__webpack_require__.r(ns);
/******/ 			var def = {};
/******/ 			leafPrototypes = leafPrototypes || [null, getProto({}), getProto([]), getProto(getProto)];
/******/ 			for(var current = mode & 2 && value; typeof current == 'object' && !~leafPrototypes.indexOf(current); current = getProto(current)) {
/******/ 				Object.getOwnPropertyNames(current).forEach((key) => (def[key] = () => (value[key])));
/******/ 			}
/******/ 			def['default'] = () => (value);
/******/ 			__webpack_require__.d(ns, def);
/******/ 			return ns;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/argon.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var argon2_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! argon2-browser */ "./node_modules/argon2-browser/lib/argon2.js");
/* harmony import */ var argon2_browser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(argon2_browser__WEBPACK_IMPORTED_MODULE_0__);
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

window.addEventListener("message", (event) => {
    const message = event.data;
    const source = event.source;
    if (!source) {
        return;
    }
    switch (message.action) {
        case "hash":
            Argon.hash(message.value, message.salt).then((hash) => {
                source.postMessage({ response: hash }, event.origin);
            });
            break;
        case "verify":
            Argon.compareHash(message.hash, message.value).then((result) => {
                source.postMessage({ response: result }, event.origin);
            });
            break;
        default:
            break;
    }
    return;
});
class Argon {
    static hash(value, salt) {
        return __awaiter(this, void 0, void 0, function* () {
            const hash = yield argon2_browser__WEBPACK_IMPORTED_MODULE_0___default().hash({
                pass: value,
                salt: salt,
                time: 2,
                mem: 1024 * 19,
                parallelism: 1,
                hashLen: 32,
                type: (argon2_browser__WEBPACK_IMPORTED_MODULE_0___default().ArgonType).Argon2id,
            });
            return hash.encoded;
        });
    }
    static compareHash(hash, value) {
        return new Promise((resolve) => {
            argon2_browser__WEBPACK_IMPORTED_MODULE_0___default().verify({
                pass: value,
                encoded: hash,
            })
                .then(() => resolve(true))
                .catch((e) => {
                console.error("Error decoding hash", e);
                resolve(false);
            });
        });
    }
}

})();

/******/ })()
;
//# sourceMappingURL=argon.js.map