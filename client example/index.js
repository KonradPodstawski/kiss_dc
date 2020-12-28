(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 	};
/******/
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "" + chunkId + ".index.js"
/******/ 	}
/******/
/******/ 	// object to store loaded and loading wasm modules
/******/ 	var installedWasmModules = {};
/******/
/******/ 	function promiseResolve() { return Promise.resolve(); }
/******/
/******/ 	var wasmImportObjects = {
/******/ 		"../lib/pkg/index_bg.wasm": function() {
/******/ 			return {
/******/ 				"./index_bg.js": {
/******/ 					"__wbindgen_object_clone_ref": function(p0i32) {
/******/ 						return installedModules["../lib/pkg/index_bg.js"].exports["__wbindgen_object_clone_ref"](p0i32);
/******/ 					},
/******/ 					"__wbindgen_string_new": function(p0i32,p1i32) {
/******/ 						return installedModules["../lib/pkg/index_bg.js"].exports["__wbindgen_string_new"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_callmethod_1d11273c4c3d697b": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["../lib/pkg/index_bg.js"].exports["__wbg_callmethod_1d11273c4c3d697b"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbindgen_object_drop_ref": function(p0i32) {
/******/ 						return installedModules["../lib/pkg/index_bg.js"].exports["__wbindgen_object_drop_ref"](p0i32);
/******/ 					},
/******/ 					"__wbindgen_is_null": function(p0i32) {
/******/ 						return installedModules["../lib/pkg/index_bg.js"].exports["__wbindgen_is_null"](p0i32);
/******/ 					},
/******/ 					"__wbindgen_cb_drop": function(p0i32) {
/******/ 						return installedModules["../lib/pkg/index_bg.js"].exports["__wbindgen_cb_drop"](p0i32);
/******/ 					},
/******/ 					"__wbg_instanceof_9c2e2b67d62c5e3b": function(p0i32,p1i32) {
/******/ 						return installedModules["../lib/pkg/index_bg.js"].exports["__wbg_instanceof_9c2e2b67d62c5e3b"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbindgen_is_object": function(p0i32) {
/******/ 						return installedModules["../lib/pkg/index_bg.js"].exports["__wbindgen_is_object"](p0i32);
/******/ 					},
/******/ 					"__wbg_setprop_afd8527834154976": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["../lib/pkg/index_bg.js"].exports["__wbg_setprop_afd8527834154976"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbindgen_is_function": function(p0i32) {
/******/ 						return installedModules["../lib/pkg/index_bg.js"].exports["__wbindgen_is_function"](p0i32);
/******/ 					},
/******/ 					"__wbindgen_number_new": function(p0f64) {
/******/ 						return installedModules["../lib/pkg/index_bg.js"].exports["__wbindgen_number_new"](p0f64);
/******/ 					},
/******/ 					"__wbg_wrapclosure_9e4f082ffc4d1b1d": function(p0i32) {
/******/ 						return installedModules["../lib/pkg/index_bg.js"].exports["__wbg_wrapclosure_9e4f082ffc4d1b1d"](p0i32);
/******/ 					},
/******/ 					"__wbg_hasprop_00f5255fd2fbf99b": function(p0i32,p1i32) {
/******/ 						return installedModules["../lib/pkg/index_bg.js"].exports["__wbg_hasprop_00f5255fd2fbf99b"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_getprop_9e9cfcbcb04d581a": function(p0i32,p1i32) {
/******/ 						return installedModules["../lib/pkg/index_bg.js"].exports["__wbg_getprop_9e9cfcbcb04d581a"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_callfunc_aa5f75a0da4e3d33": function(p0i32,p1i32) {
/******/ 						return installedModules["../lib/pkg/index_bg.js"].exports["__wbg_callfunc_aa5f75a0da4e3d33"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_typeof_0fcbdffc01e6d837": function(p0i32,p1i32) {
/******/ 						return installedModules["../lib/pkg/index_bg.js"].exports["__wbg_typeof_0fcbdffc01e6d837"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_virtualmachine_new": function(p0i32) {
/******/ 						return installedModules["../lib/pkg/index_bg.js"].exports["__wbg_virtualmachine_new"](p0i32);
/******/ 					},
/******/ 					"__wbindgen_is_undefined": function(p0i32) {
/******/ 						return installedModules["../lib/pkg/index_bg.js"].exports["__wbindgen_is_undefined"](p0i32);
/******/ 					},
/******/ 					"__wbg_new_4dd197d7e2961aa0": function(p0i32) {
/******/ 						return installedModules["../lib/pkg/index_bg.js"].exports["__wbg_new_4dd197d7e2961aa0"](p0i32);
/******/ 					},
/******/ 					"__wbg_new_68adb0d58759a4ed": function() {
/******/ 						return installedModules["../lib/pkg/index_bg.js"].exports["__wbg_new_68adb0d58759a4ed"]();
/******/ 					},
/******/ 					"__wbg_set_2e79e744454afade": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["../lib/pkg/index_bg.js"].exports["__wbg_set_2e79e744454afade"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_instanceof_Window_49f532f06a9786ee": function(p0i32) {
/******/ 						return installedModules["../lib/pkg/index_bg.js"].exports["__wbg_instanceof_Window_49f532f06a9786ee"](p0i32);
/******/ 					},
/******/ 					"__wbg_document_c0366b39e4f4c89a": function(p0i32) {
/******/ 						return installedModules["../lib/pkg/index_bg.js"].exports["__wbg_document_c0366b39e4f4c89a"](p0i32);
/******/ 					},
/******/ 					"__wbg_cancelAnimationFrame_60f9cf59ec1c0125": function(p0i32,p1i32) {
/******/ 						return installedModules["../lib/pkg/index_bg.js"].exports["__wbg_cancelAnimationFrame_60f9cf59ec1c0125"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_requestAnimationFrame_ef0e2294dc8b1088": function(p0i32,p1i32) {
/******/ 						return installedModules["../lib/pkg/index_bg.js"].exports["__wbg_requestAnimationFrame_ef0e2294dc8b1088"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_fetch_f532e04b8fe49aa0": function(p0i32,p1i32) {
/******/ 						return installedModules["../lib/pkg/index_bg.js"].exports["__wbg_fetch_f532e04b8fe49aa0"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_querySelector_f7730f338b4d3d21": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["../lib/pkg/index_bg.js"].exports["__wbg_querySelector_f7730f338b4d3d21"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_set_76c6c83392bce553": function(p0i32,p1i32,p2i32,p3i32,p4i32) {
/******/ 						return installedModules["../lib/pkg/index_bg.js"].exports["__wbg_set_76c6c83392bce553"](p0i32,p1i32,p2i32,p3i32,p4i32);
/******/ 					},
/******/ 					"__wbg_getAttribute_b60b1fa07c65e091": function(p0i32,p1i32,p2i32,p3i32) {
/******/ 						return installedModules["../lib/pkg/index_bg.js"].exports["__wbg_getAttribute_b60b1fa07c65e091"](p0i32,p1i32,p2i32,p3i32);
/******/ 					},
/******/ 					"__wbg_setAttribute_e71b9086539f06a1": function(p0i32,p1i32,p2i32,p3i32,p4i32) {
/******/ 						return installedModules["../lib/pkg/index_bg.js"].exports["__wbg_setAttribute_e71b9086539f06a1"](p0i32,p1i32,p2i32,p3i32,p4i32);
/******/ 					},
/******/ 					"__wbg_log_f2e13ca55da8bad3": function(p0i32) {
/******/ 						return installedModules["../lib/pkg/index_bg.js"].exports["__wbg_log_f2e13ca55da8bad3"](p0i32);
/******/ 					},
/******/ 					"__wbg_instanceof_Response_f52c65c389890639": function(p0i32) {
/******/ 						return installedModules["../lib/pkg/index_bg.js"].exports["__wbg_instanceof_Response_f52c65c389890639"](p0i32);
/******/ 					},
/******/ 					"__wbg_arrayBuffer_0ba17dfaad804b6f": function(p0i32) {
/******/ 						return installedModules["../lib/pkg/index_bg.js"].exports["__wbg_arrayBuffer_0ba17dfaad804b6f"](p0i32);
/******/ 					},
/******/ 					"__wbg_json_012a7a84489a5ec5": function(p0i32) {
/******/ 						return installedModules["../lib/pkg/index_bg.js"].exports["__wbg_json_012a7a84489a5ec5"](p0i32);
/******/ 					},
/******/ 					"__wbg_text_afdc7a1dc7edda52": function(p0i32) {
/******/ 						return installedModules["../lib/pkg/index_bg.js"].exports["__wbg_text_afdc7a1dc7edda52"](p0i32);
/******/ 					},
/******/ 					"__wbg_headers_5f70b64960218e2f": function(p0i32) {
/******/ 						return installedModules["../lib/pkg/index_bg.js"].exports["__wbg_headers_5f70b64960218e2f"](p0i32);
/******/ 					},
/******/ 					"__wbg_newwithstrandinit_11debb554792e043": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["../lib/pkg/index_bg.js"].exports["__wbg_newwithstrandinit_11debb554792e043"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_now_3e1ab0b3ff4beaa9": function() {
/******/ 						return installedModules["../lib/pkg/index_bg.js"].exports["__wbg_now_3e1ab0b3ff4beaa9"]();
/******/ 					},
/******/ 					"__wbg_error_8fd01a064902a0b0": function(p0i32,p1i32) {
/******/ 						return installedModules["../lib/pkg/index_bg.js"].exports["__wbg_error_8fd01a064902a0b0"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_next_373211328013f949": function(p0i32) {
/******/ 						return installedModules["../lib/pkg/index_bg.js"].exports["__wbg_next_373211328013f949"](p0i32);
/******/ 					},
/******/ 					"__wbg_done_49c598117f977077": function(p0i32) {
/******/ 						return installedModules["../lib/pkg/index_bg.js"].exports["__wbg_done_49c598117f977077"](p0i32);
/******/ 					},
/******/ 					"__wbg_value_c9ae6368b110a068": function(p0i32) {
/******/ 						return installedModules["../lib/pkg/index_bg.js"].exports["__wbg_value_c9ae6368b110a068"](p0i32);
/******/ 					},
/******/ 					"__wbg_get_85e0a3b459845fe2": function(p0i32,p1i32) {
/******/ 						return installedModules["../lib/pkg/index_bg.js"].exports["__wbg_get_85e0a3b459845fe2"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_call_951bd0c6d815d6f1": function(p0i32,p1i32) {
/******/ 						return installedModules["../lib/pkg/index_bg.js"].exports["__wbg_call_951bd0c6d815d6f1"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_new_9dff83a08f5994f3": function() {
/******/ 						return installedModules["../lib/pkg/index_bg.js"].exports["__wbg_new_9dff83a08f5994f3"]();
/******/ 					},
/******/ 					"__wbg_isArray_cf56c8363b1b35d9": function(p0i32) {
/******/ 						return installedModules["../lib/pkg/index_bg.js"].exports["__wbg_isArray_cf56c8363b1b35d9"](p0i32);
/******/ 					},
/******/ 					"__wbg_push_3ddd8187ff2ff82d": function(p0i32,p1i32) {
/******/ 						return installedModules["../lib/pkg/index_bg.js"].exports["__wbg_push_3ddd8187ff2ff82d"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_instanceof_ArrayBuffer_3a0fa134e6809d57": function(p0i32) {
/******/ 						return installedModules["../lib/pkg/index_bg.js"].exports["__wbg_instanceof_ArrayBuffer_3a0fa134e6809d57"](p0i32);
/******/ 					},
/******/ 					"__wbg_isView_f9dff24a789fdeef": function(p0i32) {
/******/ 						return installedModules["../lib/pkg/index_bg.js"].exports["__wbg_isView_f9dff24a789fdeef"](p0i32);
/******/ 					},
/******/ 					"__wbg_values_f28e313e2260a03a": function(p0i32) {
/******/ 						return installedModules["../lib/pkg/index_bg.js"].exports["__wbg_values_f28e313e2260a03a"](p0i32);
/******/ 					},
/******/ 					"__wbg_instanceof_Error_659a8e367bd8a8e3": function(p0i32) {
/******/ 						return installedModules["../lib/pkg/index_bg.js"].exports["__wbg_instanceof_Error_659a8e367bd8a8e3"](p0i32);
/******/ 					},
/******/ 					"__wbg_new_94a7dfa9529ec6e8": function(p0i32,p1i32) {
/******/ 						return installedModules["../lib/pkg/index_bg.js"].exports["__wbg_new_94a7dfa9529ec6e8"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_message_36191aebccd723bd": function(p0i32) {
/******/ 						return installedModules["../lib/pkg/index_bg.js"].exports["__wbg_message_36191aebccd723bd"](p0i32);
/******/ 					},
/******/ 					"__wbg_name_39f7db2113c26547": function(p0i32) {
/******/ 						return installedModules["../lib/pkg/index_bg.js"].exports["__wbg_name_39f7db2113c26547"](p0i32);
/******/ 					},
/******/ 					"__wbg_toString_8cf45444b3520124": function(p0i32) {
/******/ 						return installedModules["../lib/pkg/index_bg.js"].exports["__wbg_toString_8cf45444b3520124"](p0i32);
/******/ 					},
/******/ 					"__wbg_newnoargs_7c6bd521992b4022": function(p0i32,p1i32) {
/******/ 						return installedModules["../lib/pkg/index_bg.js"].exports["__wbg_newnoargs_7c6bd521992b4022"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_apply_4e68243803368d89": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["../lib/pkg/index_bg.js"].exports["__wbg_apply_4e68243803368d89"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_call_bf745b1758bb6693": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["../lib/pkg/index_bg.js"].exports["__wbg_call_bf745b1758bb6693"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_name_80ec9423bdbda2b8": function(p0i32) {
/******/ 						return installedModules["../lib/pkg/index_bg.js"].exports["__wbg_name_80ec9423bdbda2b8"](p0i32);
/******/ 					},
/******/ 					"__wbg_new_caaee1a4adcc6164": function() {
/******/ 						return installedModules["../lib/pkg/index_bg.js"].exports["__wbg_new_caaee1a4adcc6164"]();
/******/ 					},
/******/ 					"__wbg_set_cc9a0fe818d4e028": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["../lib/pkg/index_bg.js"].exports["__wbg_set_cc9a0fe818d4e028"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_getTime_cf686ab22ab03a3e": function(p0i32) {
/******/ 						return installedModules["../lib/pkg/index_bg.js"].exports["__wbg_getTime_cf686ab22ab03a3e"](p0i32);
/******/ 					},
/******/ 					"__wbg_getTimezoneOffset_b9f3c4664b1a35ae": function(p0i32) {
/******/ 						return installedModules["../lib/pkg/index_bg.js"].exports["__wbg_getTimezoneOffset_b9f3c4664b1a35ae"](p0i32);
/******/ 					},
/******/ 					"__wbg_new0_abd359df4aeb5b55": function() {
/******/ 						return installedModules["../lib/pkg/index_bg.js"].exports["__wbg_new0_abd359df4aeb5b55"]();
/******/ 					},
/******/ 					"__wbg_instanceof_Object_cdaa71ad2ca2f4c5": function(p0i32) {
/******/ 						return installedModules["../lib/pkg/index_bg.js"].exports["__wbg_instanceof_Object_cdaa71ad2ca2f4c5"](p0i32);
/******/ 					},
/******/ 					"__wbg_create_38caaba5bba4fd3f": function(p0i32) {
/******/ 						return installedModules["../lib/pkg/index_bg.js"].exports["__wbg_create_38caaba5bba4fd3f"](p0i32);
/******/ 					},
/******/ 					"__wbg_entries_7144a7309b22df64": function(p0i32) {
/******/ 						return installedModules["../lib/pkg/index_bg.js"].exports["__wbg_entries_7144a7309b22df64"](p0i32);
/******/ 					},
/******/ 					"__wbg_new_ba07d0daa0e4677e": function() {
/******/ 						return installedModules["../lib/pkg/index_bg.js"].exports["__wbg_new_ba07d0daa0e4677e"]();
/******/ 					},
/******/ 					"__wbg_toString_05515dae4330f785": function(p0i32) {
/******/ 						return installedModules["../lib/pkg/index_bg.js"].exports["__wbg_toString_05515dae4330f785"](p0i32);
/******/ 					},
/******/ 					"__wbg_new_32d5e082ab68348c": function(p0i32,p1i32) {
/******/ 						return installedModules["../lib/pkg/index_bg.js"].exports["__wbg_new_32d5e082ab68348c"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_new_4d69c44a37f663ba": function(p0i32,p1i32) {
/******/ 						return installedModules["../lib/pkg/index_bg.js"].exports["__wbg_new_4d69c44a37f663ba"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_instanceof_Promise_673b2766d32e57f1": function(p0i32) {
/******/ 						return installedModules["../lib/pkg/index_bg.js"].exports["__wbg_instanceof_Promise_673b2766d32e57f1"](p0i32);
/******/ 					},
/******/ 					"__wbg_new_bb4e44ef089e45b4": function(p0i32,p1i32) {
/******/ 						return installedModules["../lib/pkg/index_bg.js"].exports["__wbg_new_bb4e44ef089e45b4"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_resolve_6e61e640925a0db9": function(p0i32) {
/******/ 						return installedModules["../lib/pkg/index_bg.js"].exports["__wbg_resolve_6e61e640925a0db9"](p0i32);
/******/ 					},
/******/ 					"__wbg_then_dd3785597974798a": function(p0i32,p1i32) {
/******/ 						return installedModules["../lib/pkg/index_bg.js"].exports["__wbg_then_dd3785597974798a"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_then_0f957e0f4c3e537a": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["../lib/pkg/index_bg.js"].exports["__wbg_then_0f957e0f4c3e537a"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_self_6baf3a3aa7b63415": function() {
/******/ 						return installedModules["../lib/pkg/index_bg.js"].exports["__wbg_self_6baf3a3aa7b63415"]();
/******/ 					},
/******/ 					"__wbg_window_63fc4027b66c265b": function() {
/******/ 						return installedModules["../lib/pkg/index_bg.js"].exports["__wbg_window_63fc4027b66c265b"]();
/******/ 					},
/******/ 					"__wbg_globalThis_513fb247e8e4e6d2": function() {
/******/ 						return installedModules["../lib/pkg/index_bg.js"].exports["__wbg_globalThis_513fb247e8e4e6d2"]();
/******/ 					},
/******/ 					"__wbg_global_b87245cd886d7113": function() {
/******/ 						return installedModules["../lib/pkg/index_bg.js"].exports["__wbg_global_b87245cd886d7113"]();
/******/ 					},
/******/ 					"__wbg_buffer_3f12a1c608c6d04e": function(p0i32) {
/******/ 						return installedModules["../lib/pkg/index_bg.js"].exports["__wbg_buffer_3f12a1c608c6d04e"](p0i32);
/******/ 					},
/******/ 					"__wbg_newwithbyteoffsetandlength_4c51342f87299c5a": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["../lib/pkg/index_bg.js"].exports["__wbg_newwithbyteoffsetandlength_4c51342f87299c5a"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_length_c645e7c02233b440": function(p0i32) {
/******/ 						return installedModules["../lib/pkg/index_bg.js"].exports["__wbg_length_c645e7c02233b440"](p0i32);
/******/ 					},
/******/ 					"__wbg_new_c6c0228e6d22a2f9": function(p0i32) {
/******/ 						return installedModules["../lib/pkg/index_bg.js"].exports["__wbg_new_c6c0228e6d22a2f9"](p0i32);
/******/ 					},
/******/ 					"__wbg_set_b91afac9fd216d99": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["../lib/pkg/index_bg.js"].exports["__wbg_set_b91afac9fd216d99"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_instanceof_Uint8Array_fda7b6a64c667462": function(p0i32) {
/******/ 						return installedModules["../lib/pkg/index_bg.js"].exports["__wbg_instanceof_Uint8Array_fda7b6a64c667462"](p0i32);
/******/ 					},
/******/ 					"__wbg_buffer_c385539cb4060297": function(p0i32) {
/******/ 						return installedModules["../lib/pkg/index_bg.js"].exports["__wbg_buffer_c385539cb4060297"](p0i32);
/******/ 					},
/******/ 					"__wbg_slice_f2f1a970784ef10a": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["../lib/pkg/index_bg.js"].exports["__wbg_slice_f2f1a970784ef10a"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_byteLength_11e6bdc2fac53a3c": function(p0i32) {
/******/ 						return installedModules["../lib/pkg/index_bg.js"].exports["__wbg_byteLength_11e6bdc2fac53a3c"](p0i32);
/******/ 					},
/******/ 					"__wbg_new_58386bdb6fa48b30": function(p0i32,p1i32) {
/******/ 						return installedModules["../lib/pkg/index_bg.js"].exports["__wbg_new_58386bdb6fa48b30"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_apply_bcaf00c3d1ffaca7": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["../lib/pkg/index_bg.js"].exports["__wbg_apply_bcaf00c3d1ffaca7"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_construct_51c8eecbc23b0aa1": function(p0i32,p1i32) {
/******/ 						return installedModules["../lib/pkg/index_bg.js"].exports["__wbg_construct_51c8eecbc23b0aa1"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_construct_54616b0871b59a2e": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["../lib/pkg/index_bg.js"].exports["__wbg_construct_54616b0871b59a2e"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_set_9bdd413385146137": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["../lib/pkg/index_bg.js"].exports["__wbg_set_9bdd413385146137"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_self_1c83eb4471d9eb9b": function() {
/******/ 						return installedModules["../lib/pkg/index_bg.js"].exports["__wbg_self_1c83eb4471d9eb9b"]();
/******/ 					},
/******/ 					"__wbg_static_accessor_MODULE_abf5ae284bffdf45": function() {
/******/ 						return installedModules["../lib/pkg/index_bg.js"].exports["__wbg_static_accessor_MODULE_abf5ae284bffdf45"]();
/******/ 					},
/******/ 					"__wbg_require_5b2b5b594d809d9f": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["../lib/pkg/index_bg.js"].exports["__wbg_require_5b2b5b594d809d9f"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_crypto_c12f14e810edcaa2": function(p0i32) {
/******/ 						return installedModules["../lib/pkg/index_bg.js"].exports["__wbg_crypto_c12f14e810edcaa2"](p0i32);
/******/ 					},
/******/ 					"__wbg_msCrypto_679be765111ba775": function(p0i32) {
/******/ 						return installedModules["../lib/pkg/index_bg.js"].exports["__wbg_msCrypto_679be765111ba775"](p0i32);
/******/ 					},
/******/ 					"__wbg_getRandomValues_05a60bf171bfc2be": function(p0i32) {
/******/ 						return installedModules["../lib/pkg/index_bg.js"].exports["__wbg_getRandomValues_05a60bf171bfc2be"](p0i32);
/******/ 					},
/******/ 					"__wbg_getRandomValues_3ac1b33c90b52596": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["../lib/pkg/index_bg.js"].exports["__wbg_getRandomValues_3ac1b33c90b52596"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_randomFillSync_6f956029658662ec": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["../lib/pkg/index_bg.js"].exports["__wbg_randomFillSync_6f956029658662ec"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbindgen_number_get": function(p0i32,p1i32) {
/******/ 						return installedModules["../lib/pkg/index_bg.js"].exports["__wbindgen_number_get"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbindgen_string_get": function(p0i32,p1i32) {
/******/ 						return installedModules["../lib/pkg/index_bg.js"].exports["__wbindgen_string_get"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbindgen_boolean_get": function(p0i32) {
/******/ 						return installedModules["../lib/pkg/index_bg.js"].exports["__wbindgen_boolean_get"](p0i32);
/******/ 					},
/******/ 					"__wbindgen_debug_string": function(p0i32,p1i32) {
/******/ 						return installedModules["../lib/pkg/index_bg.js"].exports["__wbindgen_debug_string"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbindgen_throw": function(p0i32,p1i32) {
/******/ 						return installedModules["../lib/pkg/index_bg.js"].exports["__wbindgen_throw"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbindgen_rethrow": function(p0i32) {
/******/ 						return installedModules["../lib/pkg/index_bg.js"].exports["__wbindgen_rethrow"](p0i32);
/******/ 					},
/******/ 					"__wbindgen_memory": function() {
/******/ 						return installedModules["../lib/pkg/index_bg.js"].exports["__wbindgen_memory"]();
/******/ 					},
/******/ 					"__wbindgen_closure_wrapper444": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["../lib/pkg/index_bg.js"].exports["__wbindgen_closure_wrapper444"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbindgen_closure_wrapper446": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["../lib/pkg/index_bg.js"].exports["__wbindgen_closure_wrapper446"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbindgen_closure_wrapper448": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["../lib/pkg/index_bg.js"].exports["__wbindgen_closure_wrapper448"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbindgen_closure_wrapper906": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["../lib/pkg/index_bg.js"].exports["__wbindgen_closure_wrapper906"](p0i32,p1i32,p2i32);
/******/ 					}
/******/ 				}
/******/ 			};
/******/ 		},
/******/ 	};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// JSONP chunk loading for javascript
/******/
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData !== 0) { // 0 means "already installed".
/******/
/******/ 			// a Promise means "currently loading".
/******/ 			if(installedChunkData) {
/******/ 				promises.push(installedChunkData[2]);
/******/ 			} else {
/******/ 				// setup Promise in chunk cache
/******/ 				var promise = new Promise(function(resolve, reject) {
/******/ 					installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 				});
/******/ 				promises.push(installedChunkData[2] = promise);
/******/
/******/ 				// start chunk loading
/******/ 				var script = document.createElement('script');
/******/ 				var onScriptComplete;
/******/
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.src = jsonpScriptSrc(chunkId);
/******/
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				onScriptComplete = function (event) {
/******/ 					// avoid mem leaks in IE.
/******/ 					script.onerror = script.onload = null;
/******/ 					clearTimeout(timeout);
/******/ 					var chunk = installedChunks[chunkId];
/******/ 					if(chunk !== 0) {
/******/ 						if(chunk) {
/******/ 							var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 							var realSrc = event && event.target && event.target.src;
/******/ 							error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 							error.name = 'ChunkLoadError';
/******/ 							error.type = errorType;
/******/ 							error.request = realSrc;
/******/ 							chunk[1](error);
/******/ 						}
/******/ 						installedChunks[chunkId] = undefined;
/******/ 					}
/******/ 				};
/******/ 				var timeout = setTimeout(function(){
/******/ 					onScriptComplete({ type: 'timeout', target: script });
/******/ 				}, 120000);
/******/ 				script.onerror = script.onload = onScriptComplete;
/******/ 				document.head.appendChild(script);
/******/ 			}
/******/ 		}
/******/
/******/ 		// Fetch + compile chunk loading for webassembly
/******/
/******/ 		var wasmModules = {"0":["../lib/pkg/index_bg.wasm"]}[chunkId] || [];
/******/
/******/ 		wasmModules.forEach(function(wasmModuleId) {
/******/ 			var installedWasmModuleData = installedWasmModules[wasmModuleId];
/******/
/******/ 			// a Promise means "currently loading" or "already loaded".
/******/ 			if(installedWasmModuleData)
/******/ 				promises.push(installedWasmModuleData);
/******/ 			else {
/******/ 				var importObject = wasmImportObjects[wasmModuleId]();
/******/ 				var req = fetch(__webpack_require__.p + "" + {"../lib/pkg/index_bg.wasm":"4ecb995c51c2218738bc"}[wasmModuleId] + ".module.wasm");
/******/ 				var promise;
/******/ 				if(importObject instanceof Promise && typeof WebAssembly.compileStreaming === 'function') {
/******/ 					promise = Promise.all([WebAssembly.compileStreaming(req), importObject]).then(function(items) {
/******/ 						return WebAssembly.instantiate(items[0], items[1]);
/******/ 					});
/******/ 				} else if(typeof WebAssembly.instantiateStreaming === 'function') {
/******/ 					promise = WebAssembly.instantiateStreaming(req, importObject);
/******/ 				} else {
/******/ 					var bytesPromise = req.then(function(x) { return x.arrayBuffer(); });
/******/ 					promise = bytesPromise.then(function(bytes) {
/******/ 						return WebAssembly.instantiate(bytes, importObject);
/******/ 					});
/******/ 				}
/******/ 				promises.push(installedWasmModules[wasmModuleId] = promise.then(function(res) {
/******/ 					return __webpack_require__.w[wasmModuleId] = (res.instance || res).exports;
/******/ 				}));
/******/ 			}
/******/ 		});
/******/ 		return Promise.all(promises);
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	// object with all WebAssembly.instance exports
/******/ 	__webpack_require__.w = {};
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/dcss.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/vm-browserify/index.js":
/*!*********************************************!*\
  !*** ./node_modules/vm-browserify/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var indexOf = function (xs, item) {\n    if (xs.indexOf) return xs.indexOf(item);\n    else for (var i = 0; i < xs.length; i++) {\n        if (xs[i] === item) return i;\n    }\n    return -1;\n};\nvar Object_keys = function (obj) {\n    if (Object.keys) return Object.keys(obj)\n    else {\n        var res = [];\n        for (var key in obj) res.push(key)\n        return res;\n    }\n};\n\nvar forEach = function (xs, fn) {\n    if (xs.forEach) return xs.forEach(fn)\n    else for (var i = 0; i < xs.length; i++) {\n        fn(xs[i], i, xs);\n    }\n};\n\nvar defineProp = (function() {\n    try {\n        Object.defineProperty({}, '_', {});\n        return function(obj, name, value) {\n            Object.defineProperty(obj, name, {\n                writable: true,\n                enumerable: false,\n                configurable: true,\n                value: value\n            })\n        };\n    } catch(e) {\n        return function(obj, name, value) {\n            obj[name] = value;\n        };\n    }\n}());\n\nvar globals = ['Array', 'Boolean', 'Date', 'Error', 'EvalError', 'Function',\n'Infinity', 'JSON', 'Math', 'NaN', 'Number', 'Object', 'RangeError',\n'ReferenceError', 'RegExp', 'String', 'SyntaxError', 'TypeError', 'URIError',\n'decodeURI', 'decodeURIComponent', 'encodeURI', 'encodeURIComponent', 'escape',\n'eval', 'isFinite', 'isNaN', 'parseFloat', 'parseInt', 'undefined', 'unescape'];\n\nfunction Context() {}\nContext.prototype = {};\n\nvar Script = exports.Script = function NodeScript (code) {\n    if (!(this instanceof Script)) return new Script(code);\n    this.code = code;\n};\n\nScript.prototype.runInContext = function (context) {\n    if (!(context instanceof Context)) {\n        throw new TypeError(\"needs a 'context' argument.\");\n    }\n    \n    var iframe = document.createElement('iframe');\n    if (!iframe.style) iframe.style = {};\n    iframe.style.display = 'none';\n    \n    document.body.appendChild(iframe);\n    \n    var win = iframe.contentWindow;\n    var wEval = win.eval, wExecScript = win.execScript;\n\n    if (!wEval && wExecScript) {\n        // win.eval() magically appears when this is called in IE:\n        wExecScript.call(win, 'null');\n        wEval = win.eval;\n    }\n    \n    forEach(Object_keys(context), function (key) {\n        win[key] = context[key];\n    });\n    forEach(globals, function (key) {\n        if (context[key]) {\n            win[key] = context[key];\n        }\n    });\n    \n    var winKeys = Object_keys(win);\n\n    var res = wEval.call(win, this.code);\n    \n    forEach(Object_keys(win), function (key) {\n        // Avoid copying circular objects like `top` and `window` by only\n        // updating existing context properties or new properties in the `win`\n        // that was only introduced after the eval.\n        if (key in context || indexOf(winKeys, key) === -1) {\n            context[key] = win[key];\n        }\n    });\n\n    forEach(globals, function (key) {\n        if (!(key in context)) {\n            defineProp(context, key, win[key]);\n        }\n    });\n    \n    document.body.removeChild(iframe);\n    \n    return res;\n};\n\nScript.prototype.runInThisContext = function () {\n    return eval(this.code); // maybe...\n};\n\nScript.prototype.runInNewContext = function (context) {\n    var ctx = Script.createContext(context);\n    var res = this.runInContext(ctx);\n\n    if (context) {\n        forEach(Object_keys(ctx), function (key) {\n            context[key] = ctx[key];\n        });\n    }\n\n    return res;\n};\n\nforEach(Object_keys(Script.prototype), function (name) {\n    exports[name] = Script[name] = function (code) {\n        var s = Script(code);\n        return s[name].apply(s, [].slice.call(arguments, 1));\n    };\n});\n\nexports.isContext = function (context) {\n    return context instanceof Context;\n};\n\nexports.createScript = function (code) {\n    return exports.Script(code);\n};\n\nexports.createContext = Script.createContext = function (context) {\n    var copy = new Context();\n    if(typeof context === 'object') {\n        forEach(Object_keys(context), function (key) {\n            copy[key] = context[key];\n        });\n    }\n    return copy;\n};\n\n\n//# sourceURL=webpack:///./node_modules/vm-browserify/index.js?");

/***/ }),

/***/ "./src/dcss.js":
/*!*********************!*\
  !*** ./src/dcss.js ***!
  \*********************/
/*! exports provided: connect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"connect\", function() { return connect; });\nconst vm = __webpack_require__(/*! vm */ \"./node_modules/vm-browserify/index.js\");\r\n\r\nlet rp;\r\nlet terminalVM;\r\n\r\n__webpack_require__.e(/*! import() */ 0).then(__webpack_require__.bind(null, /*! rustpython */ \"../lib/pkg/index.js\"))\r\n    .then((rustpy) => {\r\n        rp = rustpy;\r\n        window.rp = rustpy;\r\n    })\r\n    .catch((e) => {\r\n        console.error('Error importing `rustpython`:', e);\r\n    });\r\n\r\nfunction connect(ip, name_device, clean_terminal, delay) {\r\n    var ws = new WebSocket('ws://' + ip);\r\n\r\n    let leanguge_check = false;\r\n    let leanguge = \" \";\r\n\r\n    ws.onopen = function() {\r\n        ws.send(name_device);\r\n    };\r\n    \r\n    ws.onmessage = function(e) {\r\n        if (leanguge_check == false) {\r\n            leanguge = e.data;\r\n            leanguge_check = true;\r\n        }else {\r\n            if (leanguge == \"js\") {\r\n                if (e.data != name_device) {\r\n                    let script = new vm.Script(e.data);\r\n                    let buff = script.runInThisContext();\r\n                    //let buff = eval(e.data);\r\n\r\n\r\n                    ws.send(name_device + buff);\r\n                    buff = \"\";\r\n                    leanguge_check = false;\r\n                }\r\n            }\r\n            if (leanguge == \"python\") {\r\n                let buff;\r\n                if (e.data != name_device) {\r\n                    terminalVM = rp.vmStore.init('term_vm');\r\n                    terminalVM.setStdout((data) => buff+=data);\r\n\r\n                    try {\r\n                        terminalVM.exec(e.data);\r\n                    } catch (err) {\r\n                        if (err instanceof WebAssembly.RuntimeError) {\r\n                            err = window.__RUSTPYTHON_ERROR || err;\r\n                        }\r\n                        ws.send(name_device + err);\r\n                    }\r\n\r\n                    buff = buff.replace(\"undefined\", \"\" );\r\n                    ws.send(name_device + buff);\r\n                    buff = \"\";\r\n                    leanguge_check = false;\r\n                }\r\n            }\r\n        }\r\n    };\r\n    \r\n    ws.onclose = function() {\r\n        setTimeout(function() {\r\n            connect(ip, name_device, clean_terminal, delay);\r\n            if (clean_terminal) {\r\n                console.clear();\r\n            }\r\n        }, delay);\r\n    };\r\n    \r\n    ws.onerror = function() {\r\n        ws.close();\r\n    };\r\n}\n\n//# sourceURL=webpack:///./src/dcss.js?");

/***/ })

/******/ });
});