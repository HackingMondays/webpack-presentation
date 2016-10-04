/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(1);
	__webpack_require__(5);
	__webpack_require__(11);
	module.exports = __webpack_require__(13);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(2);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(4)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../css-loader/index.js!./index.css", function() {
				var newContent = require("!!./../css-loader/index.js!./index.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports


	// module
	exports.push([module.id, "@charset \"UTF-8\";\n\n/*!\n * reveal.js\n * http://lab.hakim.se/reveal-js\n * MIT licensed\n *\n * Copyright (C) 2013 Hakim El Hattab, http://hakim.se\n */\n\n\n/*********************************************\n * RESET STYLES\n *********************************************/\n\nhtml, body, .reveal div, .reveal span, .reveal applet, .reveal object, .reveal iframe,\n.reveal h1, .reveal h2, .reveal h3, .reveal h4, .reveal h5, .reveal h6, .reveal p, .reveal blockquote, .reveal pre,\n.reveal a, .reveal abbr, .reveal acronym, .reveal address, .reveal big, .reveal cite, .reveal code,\n.reveal del, .reveal dfn, .reveal em, .reveal img, .reveal ins, .reveal kbd, .reveal q, .reveal s, .reveal samp,\n.reveal small, .reveal strike, .reveal strong, .reveal sub, .reveal sup, .reveal tt, .reveal var,\n.reveal b, .reveal u, .reveal i, .reveal center,\n.reveal dl, .reveal dt, .reveal dd, .reveal ol, .reveal ul, .reveal li,\n.reveal fieldset, .reveal form, .reveal label, .reveal legend,\n.reveal table, .reveal caption, .reveal tbody, .reveal tfoot, .reveal thead, .reveal tr, .reveal th, .reveal td,\n.reveal article, .reveal aside, .reveal canvas, .reveal details, .reveal embed,\n.reveal figure, .reveal figcaption, .reveal footer, .reveal header, .reveal hgroup,\n.reveal menu, .reveal nav, .reveal output, .reveal ruby, .reveal section, .reveal summary,\n.reveal time, .reveal mark, .reveal audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n\n.reveal article, .reveal aside, .reveal details, .reveal figcaption, .reveal figure,\n.reveal footer, .reveal header, .reveal hgroup, .reveal menu, .reveal nav, .reveal section {\n\tdisplay: block;\n}\n\n\n/*********************************************\n * GLOBAL STYLES\n *********************************************/\n\nhtml,\nbody {\n\twidth: 100%;\n\theight: 100%;\n\toverflow: hidden;\n}\n\nbody {\n\tposition: relative;\n\tline-height: 1;\n}\n\n::selection {\n\tbackground: #FF5E99;\n\tcolor: #fff;\n\ttext-shadow: none;\n}\n\n\n/*********************************************\n * HEADERS\n *********************************************/\n\n.reveal h1,\n.reveal h2,\n.reveal h3,\n.reveal h4,\n.reveal h5,\n.reveal h6 {\n\t-webkit-hyphens: auto;\n\t   -moz-hyphens: auto;\n\t        hyphens: auto;\n\n\tword-wrap: break-word;\n\tline-height: 1;\n}\n\n.reveal h1 { font-size: 3.77em; }\n.reveal h2 { font-size: 2.11em;\t}\n.reveal h3 { font-size: 1.55em;\t}\n.reveal h4 { font-size: 1em;\t}\n\n\n/*********************************************\n * VIEW FRAGMENTS\n *********************************************/\n\n.reveal .slides section .fragment {\n\topacity: 0;\n\n\t-webkit-transition: all .2s ease;\n\t   -moz-transition: all .2s ease;\n\t    -ms-transition: all .2s ease;\n\t     -o-transition: all .2s ease;\n\t        transition: all .2s ease;\n}\n\t.reveal .slides section .fragment.visible {\n\t\topacity: 1;\n\t}\n\n.reveal .slides section .fragment.grow {\n\topacity: 1;\n}\n\t.reveal .slides section .fragment.grow.visible {\n\t\t-webkit-transform: scale( 1.3 );\n\t\t   -moz-transform: scale( 1.3 );\n\t\t    -ms-transform: scale( 1.3 );\n\t\t     -o-transform: scale( 1.3 );\n\t\t        transform: scale( 1.3 );\n\t}\n\n.reveal .slides section .fragment.shrink {\n\topacity: 1;\n}\n\t.reveal .slides section .fragment.shrink.visible {\n\t\t-webkit-transform: scale( 0.7 );\n\t\t   -moz-transform: scale( 0.7 );\n\t\t    -ms-transform: scale( 0.7 );\n\t\t     -o-transform: scale( 0.7 );\n\t\t        transform: scale( 0.7 );\n\t}\n\n.reveal .slides section .fragment.zoom-in {\n\topacity: 0;\n\n\t-webkit-transform: scale( 0.1 );\n\t   -moz-transform: scale( 0.1 );\n\t    -ms-transform: scale( 0.1 );\n\t     -o-transform: scale( 0.1 );\n\t        transform: scale( 0.1 );\n}\n\n\t.reveal .slides section .fragment.zoom-in.visible {\n\t\topacity: 1;\n\n\t\t-webkit-transform: scale( 1 );\n\t\t   -moz-transform: scale( 1 );\n\t\t    -ms-transform: scale( 1 );\n\t\t     -o-transform: scale( 1 );\n\t\t        transform: scale( 1 );\n\t}\n\n.reveal .slides section .fragment.roll-in {\n\topacity: 0;\n\n\t-webkit-transform: rotateX( 90deg );\n\t   -moz-transform: rotateX( 90deg );\n\t    -ms-transform: rotateX( 90deg );\n\t     -o-transform: rotateX( 90deg );\n\t        transform: rotateX( 90deg );\n}\n\t.reveal .slides section .fragment.roll-in.visible {\n\t\topacity: 1;\n\n\t\t-webkit-transform: rotateX( 0 );\n\t\t   -moz-transform: rotateX( 0 );\n\t\t    -ms-transform: rotateX( 0 );\n\t\t     -o-transform: rotateX( 0 );\n\t\t        transform: rotateX( 0 );\n\t}\n\n.reveal .slides section .fragment.fade-out {\n\topacity: 1;\n}\n\t.reveal .slides section .fragment.fade-out.visible {\n\t\topacity: 0;\n\t}\n\n.reveal .slides section .fragment.semi-fade-out {\n\topacity: 1;\n}\n\t.reveal .slides section .fragment.semi-fade-out.visible {\n\t\topacity: 0.5;\n\t}\n\n.reveal .slides section .fragment.current-visible {\n\topacity:0;\n}\n\n.reveal .slides section .fragment.current-visible.current-fragment {\n\topacity:1;\n}\n\n.reveal .slides section .fragment.highlight-red,\n.reveal .slides section .fragment.highlight-current-red,\n.reveal .slides section .fragment.highlight-green,\n.reveal .slides section .fragment.highlight-current-green,\n.reveal .slides section .fragment.highlight-blue,\n.reveal .slides section .fragment.highlight-current-blue {\n\topacity: 1;\n}\n\t.reveal .slides section .fragment.highlight-red.visible {\n\t\tcolor: #ff2c2d\n\t}\n\t.reveal .slides section .fragment.highlight-green.visible {\n\t\tcolor: #17ff2e;\n\t}\n\t.reveal .slides section .fragment.highlight-blue.visible {\n\t\tcolor: #1b91ff;\n\t}\n\n.reveal .slides section .fragment.highlight-current-red.current-fragment {\n\tcolor: #ff2c2d\n}\n.reveal .slides section .fragment.highlight-current-green.current-fragment {\n\tcolor: #17ff2e;\n}\n.reveal .slides section .fragment.highlight-current-blue.current-fragment {\n\tcolor: #1b91ff;\n}\n\n\n/*********************************************\n * DEFAULT ELEMENT STYLES\n *********************************************/\n\n/* Fixes issue in Chrome where italic fonts did not appear when printing to PDF */\n.reveal:after {\n  content: '';\n  font-style: italic;\n}\n\n.reveal iframe {\n\tz-index: 1;\n}\n\n/* Ensure certain elements are never larger than the slide itself */\n.reveal img,\n.reveal video,\n.reveal iframe {\n\tmax-width: 95%;\n\tmax-height: 95%;\n}\n\n/** Prevents layering issues in certain browser/transition combinations */\n.reveal a {\n\tposition: relative;\n}\n\n.reveal strong,\n.reveal b {\n\tfont-weight: bold;\n}\n\n.reveal em,\n.reveal i {\n\tfont-style: italic;\n}\n\n.reveal ol,\n.reveal ul {\n\tdisplay: inline-block;\n\n\ttext-align: left;\n\tmargin: 0 0 0 1em;\n}\n\n.reveal ol {\n\tlist-style-type: decimal;\n}\n\n.reveal ul {\n\tlist-style-type: disc;\n}\n\n.reveal ul ul {\n\tlist-style-type: square;\n}\n\n.reveal ul ul ul {\n\tlist-style-type: circle;\n}\n\n.reveal ul ul,\n.reveal ul ol,\n.reveal ol ol,\n.reveal ol ul {\n\tdisplay: block;\n\tmargin-left: 40px;\n}\n\n.reveal p {\n\tmargin-bottom: 10px;\n\tline-height: 1.2em;\n}\n\n.reveal q,\n.reveal blockquote {\n\tquotes: none;\n}\n\n.reveal blockquote {\n\tdisplay: block;\n\tposition: relative;\n\twidth: 70%;\n\tmargin: 5px auto;\n\tpadding: 5px;\n\n\tfont-style: italic;\n\tbackground: rgba(255, 255, 255, 0.05);\n\tbox-shadow: 0px 0px 2px rgba(0,0,0,0.2);\n}\n\t.reveal blockquote p:first-child,\n\t.reveal blockquote p:last-child {\n\t\tdisplay: inline-block;\n\t}\n\n.reveal q {\n\tfont-style: italic;\n}\n\n.reveal pre {\n\tdisplay: block;\n\tposition: relative;\n\twidth: 90%;\n\tmargin: 15px auto;\n\n\ttext-align: left;\n\tfont-size: 0.55em;\n\tfont-family: monospace;\n\tline-height: 1.2em;\n\n\tword-wrap: break-word;\n\n\tbox-shadow: 0px 0px 6px rgba(0,0,0,0.3);\n}\n.reveal code {\n\tfont-family: monospace;\n}\n.reveal pre code {\n\tpadding: 5px;\n\toverflow: auto;\n\tmax-height: 400px;\n\tword-wrap: normal;\n}\n.reveal pre.stretch code {\n\theight: 100%;\n\tmax-height: 100%;\n\n\t-webkit-box-sizing: border-box;\n\t   -moz-box-sizing: border-box;\n\t        box-sizing: border-box;\n}\n\n.reveal table th,\n.reveal table td {\n\ttext-align: left;\n\tpadding-right: .3em;\n}\n\n.reveal table th {\n\tfont-weight: bold;\n}\n\n.reveal sup {\n\tvertical-align: super;\n}\n.reveal sub {\n\tvertical-align: sub;\n}\n\n.reveal small {\n\tdisplay: inline-block;\n\tfont-size: 0.6em;\n\tline-height: 1.2em;\n\tvertical-align: top;\n}\n\n.reveal small * {\n\tvertical-align: top;\n}\n\n.reveal .stretch {\n\tmax-width: none;\n\tmax-height: none;\n}\n\n\n/*********************************************\n * CONTROLS\n *********************************************/\n\n.reveal .controls {\n\tdisplay: none;\n\tposition: fixed;\n\twidth: 110px;\n\theight: 110px;\n\tz-index: 30;\n\tright: 10px;\n\tbottom: 10px;\n}\n\n.reveal .controls div {\n\tposition: absolute;\n\topacity: 0.05;\n\twidth: 0;\n\theight: 0;\n\tborder: 12px solid transparent;\n\n\t-moz-transform: scale(.9999);\n\n\t-webkit-transition: all 0.2s ease;\n\t   -moz-transition: all 0.2s ease;\n\t    -ms-transition: all 0.2s ease;\n\t     -o-transition: all 0.2s ease;\n\t        transition: all 0.2s ease;\n}\n\n.reveal .controls div.enabled {\n\topacity: 0.7;\n\tcursor: pointer;\n}\n\n.reveal .controls div.enabled:active {\n\tmargin-top: 1px;\n}\n\n\t.reveal .controls div.navigate-left {\n\t\ttop: 42px;\n\n\t\tborder-right-width: 22px;\n\t\tborder-right-color: #eee;\n\t}\n\t\t.reveal .controls div.navigate-left.fragmented {\n\t\t\topacity: 0.3;\n\t\t}\n\n\t.reveal .controls div.navigate-right {\n\t\tleft: 74px;\n\t\ttop: 42px;\n\n\t\tborder-left-width: 22px;\n\t\tborder-left-color: #eee;\n\t}\n\t\t.reveal .controls div.navigate-right.fragmented {\n\t\t\topacity: 0.3;\n\t\t}\n\n\t.reveal .controls div.navigate-up {\n\t\tleft: 42px;\n\n\t\tborder-bottom-width: 22px;\n\t\tborder-bottom-color: #eee;\n\t}\n\t\t.reveal .controls div.navigate-up.fragmented {\n\t\t\topacity: 0.3;\n\t\t}\n\n\t.reveal .controls div.navigate-down {\n\t\tleft: 42px;\n\t\ttop: 74px;\n\n\t\tborder-top-width: 22px;\n\t\tborder-top-color: #eee;\n\t}\n\t\t.reveal .controls div.navigate-down.fragmented {\n\t\t\topacity: 0.3;\n\t\t}\n\n\n/*********************************************\n * PROGRESS BAR\n *********************************************/\n\n.reveal .progress {\n\tposition: fixed;\n\tdisplay: none;\n\theight: 3px;\n\twidth: 100%;\n\tbottom: 0;\n\tleft: 0;\n\tz-index: 10;\n}\n\t.reveal .progress:after {\n\t\tcontent: '';\n\t\tdisplay: 'block';\n\t\tposition: absolute;\n\t\theight: 20px;\n\t\twidth: 100%;\n\t\ttop: -20px;\n\t}\n\t.reveal .progress span {\n\t\tdisplay: block;\n\t\theight: 100%;\n\t\twidth: 0px;\n\n\t\t-webkit-transition: width 800ms cubic-bezier(0.260, 0.860, 0.440, 0.985);\n\t\t   -moz-transition: width 800ms cubic-bezier(0.260, 0.860, 0.440, 0.985);\n\t\t    -ms-transition: width 800ms cubic-bezier(0.260, 0.860, 0.440, 0.985);\n\t\t     -o-transition: width 800ms cubic-bezier(0.260, 0.860, 0.440, 0.985);\n\t\t        transition: width 800ms cubic-bezier(0.260, 0.860, 0.440, 0.985);\n\t}\n\n/*********************************************\n * SLIDE NUMBER\n *********************************************/\n\n.reveal .slide-number {\n\tposition: fixed;\n\tdisplay: block;\n\tright: 15px;\n\tbottom: 15px;\n\topacity: 0.5;\n\tz-index: 31;\n\tfont-size: 12px;\n}\n\n/*********************************************\n * SLIDES\n *********************************************/\n\n.reveal {\n\tposition: relative;\n\twidth: 100%;\n\theight: 100%;\n\n\t-ms-touch-action: none;\n}\n\n.reveal .slides {\n\tposition: absolute;\n\twidth: 100%;\n\theight: 100%;\n\tleft: 50%;\n\ttop: 50%;\n\n\toverflow: visible;\n\tz-index: 1;\n\ttext-align: center;\n\n\t-webkit-transition: -webkit-perspective .4s ease;\n\t   -moz-transition: -moz-perspective .4s ease;\n\t    -ms-transition: -ms-perspective .4s ease;\n\t     -o-transition: -o-perspective .4s ease;\n\t        transition: perspective .4s ease;\n\n\t-webkit-perspective: 600px;\n\t   -moz-perspective: 600px;\n\t    -ms-perspective: 600px;\n\t        perspective: 600px;\n\n\t-webkit-perspective-origin: 0px -100px;\n\t   -moz-perspective-origin: 0px -100px;\n\t    -ms-perspective-origin: 0px -100px;\n\t        perspective-origin: 0px -100px;\n}\n\n.reveal .slides>section {\n\t-ms-perspective: 600px;\n}\n\n.reveal .slides>section,\n.reveal .slides>section>section {\n\tdisplay: none;\n\tposition: absolute;\n\twidth: 100%;\n\tpadding: 20px 0px;\n\n\tz-index: 10;\n\tline-height: 1.2em;\n\tfont-weight: inherit;\n\n\t-webkit-transform-style: preserve-3d;\n\t   -moz-transform-style: preserve-3d;\n\t    -ms-transform-style: preserve-3d;\n\t        transform-style: preserve-3d;\n\n\t-webkit-transition: -webkit-transform-origin 800ms cubic-bezier(0.260, 0.860, 0.440, 0.985),\n\t\t\t\t\t\t-webkit-transform 800ms cubic-bezier(0.260, 0.860, 0.440, 0.985),\n\t\t\t\t\t\tvisibility 800ms cubic-bezier(0.260, 0.860, 0.440, 0.985),\n\t\t\t\t\t\topacity 800ms cubic-bezier(0.260, 0.860, 0.440, 0.985);\n\t   -moz-transition: -moz-transform-origin 800ms cubic-bezier(0.260, 0.860, 0.440, 0.985),\n\t\t\t\t\t\t-moz-transform 800ms cubic-bezier(0.260, 0.860, 0.440, 0.985),\n\t\t\t\t\t\tvisibility 800ms cubic-bezier(0.260, 0.860, 0.440, 0.985),\n\t\t\t\t\t\topacity 800ms cubic-bezier(0.260, 0.860, 0.440, 0.985);\n\t    -ms-transition: -ms-transform-origin 800ms cubic-bezier(0.260, 0.860, 0.440, 0.985),\n\t\t\t\t\t\t-ms-transform 800ms cubic-bezier(0.260, 0.860, 0.440, 0.985),\n\t\t\t\t\t\tvisibility 800ms cubic-bezier(0.260, 0.860, 0.440, 0.985),\n\t\t\t\t\t\topacity 800ms cubic-bezier(0.260, 0.860, 0.440, 0.985);\n\t     -o-transition: -o-transform-origin 800ms cubic-bezier(0.260, 0.860, 0.440, 0.985),\n\t\t\t\t\t\t-o-transform 800ms cubic-bezier(0.260, 0.860, 0.440, 0.985),\n\t\t\t\t\t\tvisibility 800ms cubic-bezier(0.260, 0.860, 0.440, 0.985),\n\t\t\t\t\t\topacity 800ms cubic-bezier(0.260, 0.860, 0.440, 0.985);\n\t        transition: transform-origin 800ms cubic-bezier(0.260, 0.860, 0.440, 0.985),\n\t\t\t\t\t\ttransform 800ms cubic-bezier(0.260, 0.860, 0.440, 0.985),\n\t\t\t\t\t\tvisibility 800ms cubic-bezier(0.260, 0.860, 0.440, 0.985),\n\t\t\t\t\t\topacity 800ms cubic-bezier(0.260, 0.860, 0.440, 0.985);\n}\n\n/* Global transition speed settings */\n.reveal[data-transition-speed=\"fast\"] .slides section {\n\t-webkit-transition-duration: 400ms;\n\t   -moz-transition-duration: 400ms;\n\t    -ms-transition-duration: 400ms;\n\t        transition-duration: 400ms;\n}\n.reveal[data-transition-speed=\"slow\"] .slides section {\n\t-webkit-transition-duration: 1200ms;\n\t   -moz-transition-duration: 1200ms;\n\t    -ms-transition-duration: 1200ms;\n\t        transition-duration: 1200ms;\n}\n\n/* Slide-specific transition speed overrides */\n.reveal .slides section[data-transition-speed=\"fast\"] {\n\t-webkit-transition-duration: 400ms;\n\t   -moz-transition-duration: 400ms;\n\t    -ms-transition-duration: 400ms;\n\t        transition-duration: 400ms;\n}\n.reveal .slides section[data-transition-speed=\"slow\"] {\n\t-webkit-transition-duration: 1200ms;\n\t   -moz-transition-duration: 1200ms;\n\t    -ms-transition-duration: 1200ms;\n\t        transition-duration: 1200ms;\n}\n\n.reveal .slides>section {\n\tleft: -50%;\n\ttop: -50%;\n}\n\n.reveal .slides>section.stack {\n\tpadding-top: 0;\n\tpadding-bottom: 0;\n}\n\n.reveal .slides>section.present,\n.reveal .slides>section>section.present {\n\tdisplay: block;\n\tz-index: 11;\n\topacity: 1;\n}\n\n.reveal.center,\n.reveal.center .slides,\n.reveal.center .slides section {\n\tmin-height: auto !important;\n}\n\n/* Don't allow interaction with invisible slides */\n.reveal .slides>section.future,\n.reveal .slides>section>section.future,\n.reveal .slides>section.past,\n.reveal .slides>section>section.past {\n\tpointer-events: none;\n}\n\n.reveal.overview .slides>section,\n.reveal.overview .slides>section>section {\n\tpointer-events: auto;\n}\n\n\n\n/*********************************************\n * DEFAULT TRANSITION\n *********************************************/\n\n.reveal .slides>section[data-transition=default].past,\n.reveal .slides>section.past {\n\tdisplay: block;\n\topacity: 0;\n\n\t-webkit-transform: translate3d(-100%, 0, 0) rotateY(-90deg) translate3d(-100%, 0, 0);\n\t   -moz-transform: translate3d(-100%, 0, 0) rotateY(-90deg) translate3d(-100%, 0, 0);\n\t    -ms-transform: translate3d(-100%, 0, 0) rotateY(-90deg) translate3d(-100%, 0, 0);\n\t        transform: translate3d(-100%, 0, 0) rotateY(-90deg) translate3d(-100%, 0, 0);\n}\n.reveal .slides>section[data-transition=default].future,\n.reveal .slides>section.future {\n\tdisplay: block;\n\topacity: 0;\n\n\t-webkit-transform: translate3d(100%, 0, 0) rotateY(90deg) translate3d(100%, 0, 0);\n\t   -moz-transform: translate3d(100%, 0, 0) rotateY(90deg) translate3d(100%, 0, 0);\n\t    -ms-transform: translate3d(100%, 0, 0) rotateY(90deg) translate3d(100%, 0, 0);\n\t        transform: translate3d(100%, 0, 0) rotateY(90deg) translate3d(100%, 0, 0);\n}\n\n.reveal .slides>section>section[data-transition=default].past,\n.reveal .slides>section>section.past {\n\tdisplay: block;\n\topacity: 0;\n\n\t-webkit-transform: translate3d(0, -300px, 0) rotateX(70deg) translate3d(0, -300px, 0);\n\t   -moz-transform: translate3d(0, -300px, 0) rotateX(70deg) translate3d(0, -300px, 0);\n\t    -ms-transform: translate3d(0, -300px, 0) rotateX(70deg) translate3d(0, -300px, 0);\n\t        transform: translate3d(0, -300px, 0) rotateX(70deg) translate3d(0, -300px, 0);\n}\n.reveal .slides>section>section[data-transition=default].future,\n.reveal .slides>section>section.future {\n\tdisplay: block;\n\topacity: 0;\n\n\t-webkit-transform: translate3d(0, 300px, 0) rotateX(-70deg) translate3d(0, 300px, 0);\n\t   -moz-transform: translate3d(0, 300px, 0) rotateX(-70deg) translate3d(0, 300px, 0);\n\t    -ms-transform: translate3d(0, 300px, 0) rotateX(-70deg) translate3d(0, 300px, 0);\n\t        transform: translate3d(0, 300px, 0) rotateX(-70deg) translate3d(0, 300px, 0);\n}\n\n\n/*********************************************\n * CONCAVE TRANSITION\n *********************************************/\n\n.reveal .slides>section[data-transition=concave].past,\n.reveal.concave  .slides>section.past {\n\t-webkit-transform: translate3d(-100%, 0, 0) rotateY(90deg) translate3d(-100%, 0, 0);\n\t   -moz-transform: translate3d(-100%, 0, 0) rotateY(90deg) translate3d(-100%, 0, 0);\n\t    -ms-transform: translate3d(-100%, 0, 0) rotateY(90deg) translate3d(-100%, 0, 0);\n\t        transform: translate3d(-100%, 0, 0) rotateY(90deg) translate3d(-100%, 0, 0);\n}\n.reveal .slides>section[data-transition=concave].future,\n.reveal.concave .slides>section.future {\n\t-webkit-transform: translate3d(100%, 0, 0) rotateY(-90deg) translate3d(100%, 0, 0);\n\t   -moz-transform: translate3d(100%, 0, 0) rotateY(-90deg) translate3d(100%, 0, 0);\n\t    -ms-transform: translate3d(100%, 0, 0) rotateY(-90deg) translate3d(100%, 0, 0);\n\t        transform: translate3d(100%, 0, 0) rotateY(-90deg) translate3d(100%, 0, 0);\n}\n\n.reveal .slides>section>section[data-transition=concave].past,\n.reveal.concave .slides>section>section.past {\n\t-webkit-transform: translate3d(0, -80%, 0) rotateX(-70deg) translate3d(0, -80%, 0);\n\t   -moz-transform: translate3d(0, -80%, 0) rotateX(-70deg) translate3d(0, -80%, 0);\n\t    -ms-transform: translate3d(0, -80%, 0) rotateX(-70deg) translate3d(0, -80%, 0);\n\t        transform: translate3d(0, -80%, 0) rotateX(-70deg) translate3d(0, -80%, 0);\n}\n.reveal .slides>section>section[data-transition=concave].future,\n.reveal.concave .slides>section>section.future {\n\t-webkit-transform: translate3d(0, 80%, 0) rotateX(70deg) translate3d(0, 80%, 0);\n\t   -moz-transform: translate3d(0, 80%, 0) rotateX(70deg) translate3d(0, 80%, 0);\n\t    -ms-transform: translate3d(0, 80%, 0) rotateX(70deg) translate3d(0, 80%, 0);\n\t        transform: translate3d(0, 80%, 0) rotateX(70deg) translate3d(0, 80%, 0);\n}\n\n\n/*********************************************\n * ZOOM TRANSITION\n *********************************************/\n\n.reveal .slides>section[data-transition=zoom],\n.reveal.zoom .slides>section {\n\t-webkit-transition-timing-function: ease;\n\t   -moz-transition-timing-function: ease;\n\t    -ms-transition-timing-function: ease;\n\t     -o-transition-timing-function: ease;\n\t        transition-timing-function: ease;\n}\n\n.reveal .slides>section[data-transition=zoom].past,\n.reveal.zoom .slides>section.past {\n\topacity: 0;\n\tvisibility: hidden;\n\n\t-webkit-transform: scale(16);\n\t   -moz-transform: scale(16);\n\t    -ms-transform: scale(16);\n\t     -o-transform: scale(16);\n\t        transform: scale(16);\n}\n.reveal .slides>section[data-transition=zoom].future,\n.reveal.zoom .slides>section.future {\n\topacity: 0;\n\tvisibility: hidden;\n\n\t-webkit-transform: scale(0.2);\n\t   -moz-transform: scale(0.2);\n\t    -ms-transform: scale(0.2);\n\t     -o-transform: scale(0.2);\n\t        transform: scale(0.2);\n}\n\n.reveal .slides>section>section[data-transition=zoom].past,\n.reveal.zoom .slides>section>section.past {\n\t-webkit-transform: translate(0, -150%);\n\t   -moz-transform: translate(0, -150%);\n\t    -ms-transform: translate(0, -150%);\n\t     -o-transform: translate(0, -150%);\n\t        transform: translate(0, -150%);\n}\n.reveal .slides>section>section[data-transition=zoom].future,\n.reveal.zoom .slides>section>section.future {\n\t-webkit-transform: translate(0, 150%);\n\t   -moz-transform: translate(0, 150%);\n\t    -ms-transform: translate(0, 150%);\n\t     -o-transform: translate(0, 150%);\n\t        transform: translate(0, 150%);\n}\n\n\n/*********************************************\n * LINEAR TRANSITION\n *********************************************/\n\n.reveal.linear section {\n\t-webkit-backface-visibility: hidden;\n\t   -moz-backface-visibility: hidden;\n\t    -ms-backface-visibility: hidden;\n\t        backface-visibility: hidden;\n}\n\n.reveal .slides>section[data-transition=linear].past,\n.reveal.linear .slides>section.past {\n\t-webkit-transform: translate(-150%, 0);\n\t   -moz-transform: translate(-150%, 0);\n\t    -ms-transform: translate(-150%, 0);\n\t     -o-transform: translate(-150%, 0);\n\t        transform: translate(-150%, 0);\n}\n.reveal .slides>section[data-transition=linear].future,\n.reveal.linear .slides>section.future {\n\t-webkit-transform: translate(150%, 0);\n\t   -moz-transform: translate(150%, 0);\n\t    -ms-transform: translate(150%, 0);\n\t     -o-transform: translate(150%, 0);\n\t        transform: translate(150%, 0);\n}\n\n.reveal .slides>section>section[data-transition=linear].past,\n.reveal.linear .slides>section>section.past {\n\t-webkit-transform: translate(0, -150%);\n\t   -moz-transform: translate(0, -150%);\n\t    -ms-transform: translate(0, -150%);\n\t     -o-transform: translate(0, -150%);\n\t        transform: translate(0, -150%);\n}\n.reveal .slides>section>section[data-transition=linear].future,\n.reveal.linear .slides>section>section.future {\n\t-webkit-transform: translate(0, 150%);\n\t   -moz-transform: translate(0, 150%);\n\t    -ms-transform: translate(0, 150%);\n\t     -o-transform: translate(0, 150%);\n\t        transform: translate(0, 150%);\n}\n\n\n/*********************************************\n * CUBE TRANSITION\n *********************************************/\n\n.reveal.cube .slides {\n\t-webkit-perspective: 1300px;\n\t   -moz-perspective: 1300px;\n\t    -ms-perspective: 1300px;\n\t        perspective: 1300px;\n}\n\n.reveal.cube .slides section {\n\tpadding: 30px;\n\tmin-height: 700px;\n\n\t-webkit-backface-visibility: hidden;\n\t   -moz-backface-visibility: hidden;\n\t    -ms-backface-visibility: hidden;\n\t        backface-visibility: hidden;\n\n\t-webkit-box-sizing: border-box;\n\t   -moz-box-sizing: border-box;\n\t        box-sizing: border-box;\n}\n\t.reveal.center.cube .slides section {\n\t\tmin-height: auto;\n\t}\n\t.reveal.cube .slides section:not(.stack):before {\n\t\tcontent: '';\n\t\tposition: absolute;\n\t\tdisplay: block;\n\t\twidth: 100%;\n\t\theight: 100%;\n\t\tleft: 0;\n\t\ttop: 0;\n\t\tbackground: rgba(0,0,0,0.1);\n\t\tborder-radius: 4px;\n\n\t\t-webkit-transform: translateZ( -20px );\n\t\t   -moz-transform: translateZ( -20px );\n\t\t    -ms-transform: translateZ( -20px );\n\t\t     -o-transform: translateZ( -20px );\n\t\t        transform: translateZ( -20px );\n\t}\n\t.reveal.cube .slides section:not(.stack):after {\n\t\tcontent: '';\n\t\tposition: absolute;\n\t\tdisplay: block;\n\t\twidth: 90%;\n\t\theight: 30px;\n\t\tleft: 5%;\n\t\tbottom: 0;\n\t\tbackground: none;\n\t\tz-index: 1;\n\n\t\tborder-radius: 4px;\n\t\tbox-shadow: 0px 95px 25px rgba(0,0,0,0.2);\n\n\t\t-webkit-transform: translateZ(-90px) rotateX( 65deg );\n\t\t   -moz-transform: translateZ(-90px) rotateX( 65deg );\n\t\t    -ms-transform: translateZ(-90px) rotateX( 65deg );\n\t\t     -o-transform: translateZ(-90px) rotateX( 65deg );\n\t\t        transform: translateZ(-90px) rotateX( 65deg );\n\t}\n\n.reveal.cube .slides>section.stack {\n\tpadding: 0;\n\tbackground: none;\n}\n\n.reveal.cube .slides>section.past {\n\t-webkit-transform-origin: 100% 0%;\n\t   -moz-transform-origin: 100% 0%;\n\t    -ms-transform-origin: 100% 0%;\n\t        transform-origin: 100% 0%;\n\n\t-webkit-transform: translate3d(-100%, 0, 0) rotateY(-90deg);\n\t   -moz-transform: translate3d(-100%, 0, 0) rotateY(-90deg);\n\t    -ms-transform: translate3d(-100%, 0, 0) rotateY(-90deg);\n\t        transform: translate3d(-100%, 0, 0) rotateY(-90deg);\n}\n\n.reveal.cube .slides>section.future {\n\t-webkit-transform-origin: 0% 0%;\n\t   -moz-transform-origin: 0% 0%;\n\t    -ms-transform-origin: 0% 0%;\n\t        transform-origin: 0% 0%;\n\n\t-webkit-transform: translate3d(100%, 0, 0) rotateY(90deg);\n\t   -moz-transform: translate3d(100%, 0, 0) rotateY(90deg);\n\t    -ms-transform: translate3d(100%, 0, 0) rotateY(90deg);\n\t        transform: translate3d(100%, 0, 0) rotateY(90deg);\n}\n\n.reveal.cube .slides>section>section.past {\n\t-webkit-transform-origin: 0% 100%;\n\t   -moz-transform-origin: 0% 100%;\n\t    -ms-transform-origin: 0% 100%;\n\t        transform-origin: 0% 100%;\n\n\t-webkit-transform: translate3d(0, -100%, 0) rotateX(90deg);\n\t   -moz-transform: translate3d(0, -100%, 0) rotateX(90deg);\n\t    -ms-transform: translate3d(0, -100%, 0) rotateX(90deg);\n\t        transform: translate3d(0, -100%, 0) rotateX(90deg);\n}\n\n.reveal.cube .slides>section>section.future {\n\t-webkit-transform-origin: 0% 0%;\n\t   -moz-transform-origin: 0% 0%;\n\t    -ms-transform-origin: 0% 0%;\n\t        transform-origin: 0% 0%;\n\n\t-webkit-transform: translate3d(0, 100%, 0) rotateX(-90deg);\n\t   -moz-transform: translate3d(0, 100%, 0) rotateX(-90deg);\n\t    -ms-transform: translate3d(0, 100%, 0) rotateX(-90deg);\n\t        transform: translate3d(0, 100%, 0) rotateX(-90deg);\n}\n\n\n/*********************************************\n * PAGE TRANSITION\n *********************************************/\n\n.reveal.page .slides {\n\t-webkit-perspective-origin: 0% 50%;\n\t   -moz-perspective-origin: 0% 50%;\n\t    -ms-perspective-origin: 0% 50%;\n\t        perspective-origin: 0% 50%;\n\n\t-webkit-perspective: 3000px;\n\t   -moz-perspective: 3000px;\n\t    -ms-perspective: 3000px;\n\t        perspective: 3000px;\n}\n\n.reveal.page .slides section {\n\tpadding: 30px;\n\tmin-height: 700px;\n\n\t-webkit-box-sizing: border-box;\n\t   -moz-box-sizing: border-box;\n\t        box-sizing: border-box;\n}\n\t.reveal.page .slides section.past {\n\t\tz-index: 12;\n\t}\n\t.reveal.page .slides section:not(.stack):before {\n\t\tcontent: '';\n\t\tposition: absolute;\n\t\tdisplay: block;\n\t\twidth: 100%;\n\t\theight: 100%;\n\t\tleft: 0;\n\t\ttop: 0;\n\t\tbackground: rgba(0,0,0,0.1);\n\n\t\t-webkit-transform: translateZ( -20px );\n\t\t   -moz-transform: translateZ( -20px );\n\t\t    -ms-transform: translateZ( -20px );\n\t\t     -o-transform: translateZ( -20px );\n\t\t        transform: translateZ( -20px );\n\t}\n\t.reveal.page .slides section:not(.stack):after {\n\t\tcontent: '';\n\t\tposition: absolute;\n\t\tdisplay: block;\n\t\twidth: 90%;\n\t\theight: 30px;\n\t\tleft: 5%;\n\t\tbottom: 0;\n\t\tbackground: none;\n\t\tz-index: 1;\n\n\t\tborder-radius: 4px;\n\t\tbox-shadow: 0px 95px 25px rgba(0,0,0,0.2);\n\n\t\t-webkit-transform: translateZ(-90px) rotateX( 65deg );\n\t}\n\n.reveal.page .slides>section.stack {\n\tpadding: 0;\n\tbackground: none;\n}\n\n.reveal.page .slides>section.past {\n\t-webkit-transform-origin: 0% 0%;\n\t   -moz-transform-origin: 0% 0%;\n\t    -ms-transform-origin: 0% 0%;\n\t        transform-origin: 0% 0%;\n\n\t-webkit-transform: translate3d(-40%, 0, 0) rotateY(-80deg);\n\t   -moz-transform: translate3d(-40%, 0, 0) rotateY(-80deg);\n\t    -ms-transform: translate3d(-40%, 0, 0) rotateY(-80deg);\n\t        transform: translate3d(-40%, 0, 0) rotateY(-80deg);\n}\n\n.reveal.page .slides>section.future {\n\t-webkit-transform-origin: 100% 0%;\n\t   -moz-transform-origin: 100% 0%;\n\t    -ms-transform-origin: 100% 0%;\n\t        transform-origin: 100% 0%;\n\n\t-webkit-transform: translate3d(0, 0, 0);\n\t   -moz-transform: translate3d(0, 0, 0);\n\t    -ms-transform: translate3d(0, 0, 0);\n\t        transform: translate3d(0, 0, 0);\n}\n\n.reveal.page .slides>section>section.past {\n\t-webkit-transform-origin: 0% 0%;\n\t   -moz-transform-origin: 0% 0%;\n\t    -ms-transform-origin: 0% 0%;\n\t        transform-origin: 0% 0%;\n\n\t-webkit-transform: translate3d(0, -40%, 0) rotateX(80deg);\n\t   -moz-transform: translate3d(0, -40%, 0) rotateX(80deg);\n\t    -ms-transform: translate3d(0, -40%, 0) rotateX(80deg);\n\t        transform: translate3d(0, -40%, 0) rotateX(80deg);\n}\n\n.reveal.page .slides>section>section.future {\n\t-webkit-transform-origin: 0% 100%;\n\t   -moz-transform-origin: 0% 100%;\n\t    -ms-transform-origin: 0% 100%;\n\t        transform-origin: 0% 100%;\n\n\t-webkit-transform: translate3d(0, 0, 0);\n\t   -moz-transform: translate3d(0, 0, 0);\n\t    -ms-transform: translate3d(0, 0, 0);\n\t        transform: translate3d(0, 0, 0);\n}\n\n\n/*********************************************\n * FADE TRANSITION\n *********************************************/\n\n.reveal .slides section[data-transition=fade],\n.reveal.fade .slides section,\n.reveal.fade .slides>section>section {\n    -webkit-transform: none;\n\t   -moz-transform: none;\n\t    -ms-transform: none;\n\t     -o-transform: none;\n\t        transform: none;\n\n\t-webkit-transition: opacity 0.5s;\n\t   -moz-transition: opacity 0.5s;\n\t    -ms-transition: opacity 0.5s;\n\t     -o-transition: opacity 0.5s;\n\t        transition: opacity 0.5s;\n}\n\n\n.reveal.fade.overview .slides section,\n.reveal.fade.overview .slides>section>section,\n.reveal.fade.overview-deactivating .slides section,\n.reveal.fade.overview-deactivating .slides>section>section {\n\t-webkit-transition: none;\n\t   -moz-transition: none;\n\t    -ms-transition: none;\n\t     -o-transition: none;\n\t        transition: none;\n}\n\n\n/*********************************************\n * NO TRANSITION\n *********************************************/\n\n.reveal .slides section[data-transition=none],\n.reveal.none .slides section {\n\t-webkit-transform: none;\n\t   -moz-transform: none;\n\t    -ms-transform: none;\n\t     -o-transform: none;\n\t        transform: none;\n\n\t-webkit-transition: none;\n\t   -moz-transition: none;\n\t    -ms-transition: none;\n\t     -o-transition: none;\n\t        transition: none;\n}\n\n\n/*********************************************\n * OVERVIEW\n *********************************************/\n\n.reveal.overview .slides {\n\t-webkit-perspective-origin: 0% 0%;\n\t   -moz-perspective-origin: 0% 0%;\n\t    -ms-perspective-origin: 0% 0%;\n\t        perspective-origin: 0% 0%;\n\n\t-webkit-perspective: 700px;\n\t   -moz-perspective: 700px;\n\t    -ms-perspective: 700px;\n\t        perspective: 700px;\n}\n\n.reveal.overview .slides section {\n\theight: 600px;\n\ttop: -300px !important;\n\toverflow: hidden;\n\topacity: 1 !important;\n\tvisibility: visible !important;\n\tcursor: pointer;\n\tbackground: rgba(0,0,0,0.1);\n}\n.reveal.overview .slides section .fragment {\n\topacity: 1;\n}\n.reveal.overview .slides section:after,\n.reveal.overview .slides section:before {\n\tdisplay: none !important;\n}\n.reveal.overview .slides section>section {\n\topacity: 1;\n\tcursor: pointer;\n}\n\t.reveal.overview .slides section:hover {\n\t\tbackground: rgba(0,0,0,0.3);\n\t}\n\t.reveal.overview .slides section.present {\n\t\tbackground: rgba(0,0,0,0.3);\n\t}\n.reveal.overview .slides>section.stack {\n\tpadding: 0;\n\ttop: 0 !important;\n\tbackground: none;\n\toverflow: visible;\n}\n\n\n/*********************************************\n * PAUSED MODE\n *********************************************/\n\n.reveal .pause-overlay {\n\tposition: absolute;\n\ttop: 0;\n\tleft: 0;\n\twidth: 100%;\n\theight: 100%;\n\tbackground: black;\n\tvisibility: hidden;\n\topacity: 0;\n\tz-index: 100;\n\n\t-webkit-transition: all 1s ease;\n\t   -moz-transition: all 1s ease;\n\t    -ms-transition: all 1s ease;\n\t     -o-transition: all 1s ease;\n\t        transition: all 1s ease;\n}\n.reveal.paused .pause-overlay {\n\tvisibility: visible;\n\topacity: 1;\n}\n\n\n/*********************************************\n * FALLBACK\n *********************************************/\n\n.no-transforms {\n\toverflow-y: auto;\n}\n\n.no-transforms .reveal .slides {\n\tposition: relative;\n\twidth: 80%;\n\theight: auto !important;\n\ttop: 0;\n\tleft: 50%;\n\tmargin: 0;\n\ttext-align: center;\n}\n\n.no-transforms .reveal .controls,\n.no-transforms .reveal .progress {\n\tdisplay: none !important;\n}\n\n.no-transforms .reveal .slides section {\n\tdisplay: block !important;\n\topacity: 1 !important;\n\tposition: relative !important;\n\theight: auto;\n\tmin-height: auto;\n\ttop: 0;\n\tleft: -50%;\n\tmargin: 70px 0;\n\n\t-webkit-transform: none;\n\t   -moz-transform: none;\n\t    -ms-transform: none;\n\t     -o-transform: none;\n\t        transform: none;\n}\n\n.no-transforms .reveal .slides section section {\n\tleft: 0;\n}\n\n.reveal .no-transition,\n.reveal .no-transition * {\n\t-webkit-transition: none !important;\n\t   -moz-transition: none !important;\n\t    -ms-transition: none !important;\n\t     -o-transition: none !important;\n\t        transition: none !important;\n}\n\n\n/*********************************************\n * BACKGROUND STATES [DEPRECATED]\n *********************************************/\n\n.reveal .state-background {\n\tposition: absolute;\n\twidth: 100%;\n\theight: 100%;\n\tbackground: rgba( 0, 0, 0, 0 );\n\n\t-webkit-transition: background 800ms ease;\n\t   -moz-transition: background 800ms ease;\n\t    -ms-transition: background 800ms ease;\n\t     -o-transition: background 800ms ease;\n\t        transition: background 800ms ease;\n}\n.alert .reveal .state-background {\n\tbackground: rgba( 200, 50, 30, 0.6 );\n}\n.soothe .reveal .state-background {\n\tbackground: rgba( 50, 200, 90, 0.4 );\n}\n.blackout .reveal .state-background {\n\tbackground: rgba( 0, 0, 0, 0.6 );\n}\n.whiteout .reveal .state-background {\n\tbackground: rgba( 255, 255, 255, 0.6 );\n}\n.cobalt .reveal .state-background {\n\tbackground: rgba( 22, 152, 213, 0.6 );\n}\n.mint .reveal .state-background {\n\tbackground: rgba( 22, 213, 75, 0.6 );\n}\n.submerge .reveal .state-background {\n\tbackground: rgba( 12, 25, 77, 0.6);\n}\n.lila .reveal .state-background {\n\tbackground: rgba( 180, 50, 140, 0.6 );\n}\n.sunset .reveal .state-background {\n\tbackground: rgba( 255, 122, 0, 0.6 );\n}\n\n\n/*********************************************\n * PER-SLIDE BACKGROUNDS\n *********************************************/\n\n.reveal>.backgrounds {\n\tposition: absolute;\n\twidth: 100%;\n\theight: 100%;\n\n\t-webkit-perspective: 600px;\n\t   -moz-perspective: 600px;\n\t    -ms-perspective: 600px;\n\t        perspective: 600px;\n}\n\t.reveal .slide-background {\n\t\tposition: absolute;\n\t\twidth: 100%;\n\t\theight: 100%;\n\t\topacity: 0;\n\t\tvisibility: hidden;\n\n\t\tbackground-color: rgba( 0, 0, 0, 0 );\n\t\tbackground-position: 50% 50%;\n\t\tbackground-repeat: no-repeat;\n\t\tbackground-size: cover;\n\n\t\t-webkit-transition: all 800ms cubic-bezier(0.260, 0.860, 0.440, 0.985);\n\t\t   -moz-transition: all 800ms cubic-bezier(0.260, 0.860, 0.440, 0.985);\n\t\t    -ms-transition: all 800ms cubic-bezier(0.260, 0.860, 0.440, 0.985);\n\t\t     -o-transition: all 800ms cubic-bezier(0.260, 0.860, 0.440, 0.985);\n\t\t        transition: all 800ms cubic-bezier(0.260, 0.860, 0.440, 0.985);\n\t}\n\t.reveal .slide-background.present {\n\t\topacity: 1;\n\t\tvisibility: visible;\n\t}\n\n\t.print-pdf .reveal .slide-background {\n\t\topacity: 1 !important;\n\t\tvisibility: visible !important;\n\t}\n\n/* Immediate transition style */\n.reveal[data-background-transition=none]>.backgrounds .slide-background,\n.reveal>.backgrounds .slide-background[data-background-transition=none] {\n\t-webkit-transition: none;\n\t   -moz-transition: none;\n\t    -ms-transition: none;\n\t     -o-transition: none;\n\t        transition: none;\n}\n\n/* 2D slide */\n.reveal[data-background-transition=slide]>.backgrounds .slide-background,\n.reveal>.backgrounds .slide-background[data-background-transition=slide] {\n\topacity: 1;\n\n\t-webkit-backface-visibility: hidden;\n\t   -moz-backface-visibility: hidden;\n\t    -ms-backface-visibility: hidden;\n\t        backface-visibility: hidden;\n}\n\t.reveal[data-background-transition=slide]>.backgrounds .slide-background.past,\n\t.reveal>.backgrounds .slide-background.past[data-background-transition=slide] {\n\t\t-webkit-transform: translate(-100%, 0);\n\t\t   -moz-transform: translate(-100%, 0);\n\t\t    -ms-transform: translate(-100%, 0);\n\t\t     -o-transform: translate(-100%, 0);\n\t\t        transform: translate(-100%, 0);\n\t}\n\t.reveal[data-background-transition=slide]>.backgrounds .slide-background.future,\n\t.reveal>.backgrounds .slide-background.future[data-background-transition=slide] {\n\t\t-webkit-transform: translate(100%, 0);\n\t\t   -moz-transform: translate(100%, 0);\n\t\t    -ms-transform: translate(100%, 0);\n\t\t     -o-transform: translate(100%, 0);\n\t\t        transform: translate(100%, 0);\n\t}\n\n\t.reveal[data-background-transition=slide]>.backgrounds .slide-background>.slide-background.past,\n\t.reveal>.backgrounds .slide-background>.slide-background.past[data-background-transition=slide] {\n\t\t-webkit-transform: translate(0, -100%);\n\t\t   -moz-transform: translate(0, -100%);\n\t\t    -ms-transform: translate(0, -100%);\n\t\t     -o-transform: translate(0, -100%);\n\t\t        transform: translate(0, -100%);\n\t}\n\t.reveal[data-background-transition=slide]>.backgrounds .slide-background>.slide-background.future,\n\t.reveal>.backgrounds .slide-background>.slide-background.future[data-background-transition=slide] {\n\t\t-webkit-transform: translate(0, 100%);\n\t\t   -moz-transform: translate(0, 100%);\n\t\t    -ms-transform: translate(0, 100%);\n\t\t     -o-transform: translate(0, 100%);\n\t\t        transform: translate(0, 100%);\n\t}\n\n\n/* Convex */\n.reveal[data-background-transition=convex]>.backgrounds .slide-background.past,\n.reveal>.backgrounds .slide-background.past[data-background-transition=convex] {\n\topacity: 0;\n\n\t-webkit-transform: translate3d(-100%, 0, 0) rotateY(-90deg) translate3d(-100%, 0, 0);\n\t   -moz-transform: translate3d(-100%, 0, 0) rotateY(-90deg) translate3d(-100%, 0, 0);\n\t    -ms-transform: translate3d(-100%, 0, 0) rotateY(-90deg) translate3d(-100%, 0, 0);\n\t        transform: translate3d(-100%, 0, 0) rotateY(-90deg) translate3d(-100%, 0, 0);\n}\n.reveal[data-background-transition=convex]>.backgrounds .slide-background.future,\n.reveal>.backgrounds .slide-background.future[data-background-transition=convex] {\n\topacity: 0;\n\n\t-webkit-transform: translate3d(100%, 0, 0) rotateY(90deg) translate3d(100%, 0, 0);\n\t   -moz-transform: translate3d(100%, 0, 0) rotateY(90deg) translate3d(100%, 0, 0);\n\t    -ms-transform: translate3d(100%, 0, 0) rotateY(90deg) translate3d(100%, 0, 0);\n\t        transform: translate3d(100%, 0, 0) rotateY(90deg) translate3d(100%, 0, 0);\n}\n\n.reveal[data-background-transition=convex]>.backgrounds .slide-background>.slide-background.past,\n.reveal>.backgrounds .slide-background>.slide-background.past[data-background-transition=convex] {\n\topacity: 0;\n\n\t-webkit-transform: translate3d(0, -100%, 0) rotateX(90deg) translate3d(0, -100%, 0);\n\t   -moz-transform: translate3d(0, -100%, 0) rotateX(90deg) translate3d(0, -100%, 0);\n\t    -ms-transform: translate3d(0, -100%, 0) rotateX(90deg) translate3d(0, -100%, 0);\n\t        transform: translate3d(0, -100%, 0) rotateX(90deg) translate3d(0, -100%, 0);\n}\n.reveal[data-background-transition=convex]>.backgrounds .slide-background>.slide-background.future,\n.reveal>.backgrounds .slide-background>.slide-background.future[data-background-transition=convex] {\n\topacity: 0;\n\n\t-webkit-transform: translate3d(0, 100%, 0) rotateX(-90deg) translate3d(0, 100%, 0);\n\t   -moz-transform: translate3d(0, 100%, 0) rotateX(-90deg) translate3d(0, 100%, 0);\n\t    -ms-transform: translate3d(0, 100%, 0) rotateX(-90deg) translate3d(0, 100%, 0);\n\t        transform: translate3d(0, 100%, 0) rotateX(-90deg) translate3d(0, 100%, 0);\n}\n\n\n/* Concave */\n.reveal[data-background-transition=concave]>.backgrounds .slide-background.past,\n.reveal>.backgrounds .slide-background.past[data-background-transition=concave] {\n\topacity: 0;\n\n\t-webkit-transform: translate3d(-100%, 0, 0) rotateY(90deg) translate3d(-100%, 0, 0);\n\t   -moz-transform: translate3d(-100%, 0, 0) rotateY(90deg) translate3d(-100%, 0, 0);\n\t    -ms-transform: translate3d(-100%, 0, 0) rotateY(90deg) translate3d(-100%, 0, 0);\n\t        transform: translate3d(-100%, 0, 0) rotateY(90deg) translate3d(-100%, 0, 0);\n}\n.reveal[data-background-transition=concave]>.backgrounds .slide-background.future,\n.reveal>.backgrounds .slide-background.future[data-background-transition=concave] {\n\topacity: 0;\n\n\t-webkit-transform: translate3d(100%, 0, 0) rotateY(-90deg) translate3d(100%, 0, 0);\n\t   -moz-transform: translate3d(100%, 0, 0) rotateY(-90deg) translate3d(100%, 0, 0);\n\t    -ms-transform: translate3d(100%, 0, 0) rotateY(-90deg) translate3d(100%, 0, 0);\n\t        transform: translate3d(100%, 0, 0) rotateY(-90deg) translate3d(100%, 0, 0);\n}\n\n.reveal[data-background-transition=concave]>.backgrounds .slide-background>.slide-background.past,\n.reveal>.backgrounds .slide-background>.slide-background.past[data-background-transition=concave] {\n\topacity: 0;\n\n\t-webkit-transform: translate3d(0, -100%, 0) rotateX(-90deg) translate3d(0, -100%, 0);\n\t   -moz-transform: translate3d(0, -100%, 0) rotateX(-90deg) translate3d(0, -100%, 0);\n\t    -ms-transform: translate3d(0, -100%, 0) rotateX(-90deg) translate3d(0, -100%, 0);\n\t        transform: translate3d(0, -100%, 0) rotateX(-90deg) translate3d(0, -100%, 0);\n}\n.reveal[data-background-transition=concave]>.backgrounds .slide-background>.slide-background.future,\n.reveal>.backgrounds .slide-background>.slide-background.future[data-background-transition=concave] {\n\topacity: 0;\n\n\t-webkit-transform: translate3d(0, 100%, 0) rotateX(90deg) translate3d(0, 100%, 0);\n\t   -moz-transform: translate3d(0, 100%, 0) rotateX(90deg) translate3d(0, 100%, 0);\n\t    -ms-transform: translate3d(0, 100%, 0) rotateX(90deg) translate3d(0, 100%, 0);\n\t        transform: translate3d(0, 100%, 0) rotateX(90deg) translate3d(0, 100%, 0);\n}\n\n/* Zoom */\n.reveal[data-background-transition=zoom]>.backgrounds .slide-background,\n.reveal>.backgrounds .slide-background[data-background-transition=zoom] {\n\t-webkit-transition-timing-function: ease;\n\t   -moz-transition-timing-function: ease;\n\t    -ms-transition-timing-function: ease;\n\t     -o-transition-timing-function: ease;\n\t        transition-timing-function: ease;\n}\n\n.reveal[data-background-transition=zoom]>.backgrounds .slide-background.past,\n.reveal>.backgrounds .slide-background.past[data-background-transition=zoom] {\n\topacity: 0;\n\tvisibility: hidden;\n\n\t-webkit-transform: scale(16);\n\t   -moz-transform: scale(16);\n\t    -ms-transform: scale(16);\n\t     -o-transform: scale(16);\n\t        transform: scale(16);\n}\n.reveal[data-background-transition=zoom]>.backgrounds .slide-background.future,\n.reveal>.backgrounds .slide-background.future[data-background-transition=zoom] {\n\topacity: 0;\n\tvisibility: hidden;\n\n\t-webkit-transform: scale(0.2);\n\t   -moz-transform: scale(0.2);\n\t    -ms-transform: scale(0.2);\n\t     -o-transform: scale(0.2);\n\t        transform: scale(0.2);\n}\n\n.reveal[data-background-transition=zoom]>.backgrounds .slide-background>.slide-background.past,\n.reveal>.backgrounds .slide-background>.slide-background.past[data-background-transition=zoom] {\n\topacity: 0;\n\t\tvisibility: hidden;\n\n\t\t-webkit-transform: scale(16);\n\t\t   -moz-transform: scale(16);\n\t\t    -ms-transform: scale(16);\n\t\t     -o-transform: scale(16);\n\t\t        transform: scale(16);\n}\n.reveal[data-background-transition=zoom]>.backgrounds .slide-background>.slide-background.future,\n.reveal>.backgrounds .slide-background>.slide-background.future[data-background-transition=zoom] {\n\topacity: 0;\n\tvisibility: hidden;\n\n\t-webkit-transform: scale(0.2);\n\t   -moz-transform: scale(0.2);\n\t    -ms-transform: scale(0.2);\n\t     -o-transform: scale(0.2);\n\t        transform: scale(0.2);\n}\n\n\n/* Global transition speed settings */\n.reveal[data-transition-speed=\"fast\"]>.backgrounds .slide-background {\n\t-webkit-transition-duration: 400ms;\n\t   -moz-transition-duration: 400ms;\n\t    -ms-transition-duration: 400ms;\n\t        transition-duration: 400ms;\n}\n.reveal[data-transition-speed=\"slow\"]>.backgrounds .slide-background {\n\t-webkit-transition-duration: 1200ms;\n\t   -moz-transition-duration: 1200ms;\n\t    -ms-transition-duration: 1200ms;\n\t        transition-duration: 1200ms;\n}\n\n\n/*********************************************\n * RTL SUPPORT\n *********************************************/\n\n.reveal.rtl .slides,\n.reveal.rtl .slides h1,\n.reveal.rtl .slides h2,\n.reveal.rtl .slides h3,\n.reveal.rtl .slides h4,\n.reveal.rtl .slides h5,\n.reveal.rtl .slides h6 {\n\tdirection: rtl;\n\tfont-family: sans-serif;\n}\n\n.reveal.rtl pre,\n.reveal.rtl code {\n\tdirection: ltr;\n}\n\n.reveal.rtl ol,\n.reveal.rtl ul {\n\ttext-align: right;\n}\n\n.reveal.rtl .progress span {\n\tfloat: right\n}\n\n/*********************************************\n * PARALLAX BACKGROUND\n *********************************************/\n\n.reveal.has-parallax-background .backgrounds {\n\t-webkit-transition: all 0.8s ease;\n\t   -moz-transition: all 0.8s ease;\n\t    -ms-transition: all 0.8s ease;\n\t        transition: all 0.8s ease;\n}\n\n/* Global transition speed settings */\n.reveal.has-parallax-background[data-transition-speed=\"fast\"] .backgrounds {\n\t-webkit-transition-duration: 400ms;\n\t   -moz-transition-duration: 400ms;\n\t    -ms-transition-duration: 400ms;\n\t        transition-duration: 400ms;\n}\n.reveal.has-parallax-background[data-transition-speed=\"slow\"] .backgrounds {\n\t-webkit-transition-duration: 1200ms;\n\t   -moz-transition-duration: 1200ms;\n\t    -ms-transition-duration: 1200ms;\n\t        transition-duration: 1200ms;\n}\n\n\n/*********************************************\n * LINK PREVIEW OVERLAY\n *********************************************/\n\n .reveal .preview-link-overlay {\n \tposition: absolute;\n \ttop: 0;\n \tleft: 0;\n \twidth: 100%;\n \theight: 100%;\n \tz-index: 1000;\n \tbackground: rgba( 0, 0, 0, 0.9 );\n \topacity: 0;\n \tvisibility: hidden;\n\n \t-webkit-transition: all 0.3s ease;\n \t   -moz-transition: all 0.3s ease;\n \t    -ms-transition: all 0.3s ease;\n \t        transition: all 0.3s ease;\n }\n \t.reveal .preview-link-overlay.visible {\n \t\topacity: 1;\n \t\tvisibility: visible;\n \t}\n\n \t.reveal .preview-link-overlay .spinner {\n \t\tposition: absolute;\n \t\tdisplay: block;\n \t\ttop: 50%;\n \t\tleft: 50%;\n \t\twidth: 32px;\n \t\theight: 32px;\n \t\tmargin: -16px 0 0 -16px;\n \t\tz-index: 10;\n \t\tbackground-image: url(data:image/gif;base64,R0lGODlhIAAgAPMAAJmZmf%2F%2F%2F6%2Bvr8nJybW1tcDAwOjo6Nvb26ioqKOjo7Ozs%2FLy8vz8%2FAAAAAAAAAAAACH%2FC05FVFNDQVBFMi4wAwEAAAAh%2FhpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh%2BQQJCgAAACwAAAAAIAAgAAAE5xDISWlhperN52JLhSSdRgwVo1ICQZRUsiwHpTJT4iowNS8vyW2icCF6k8HMMBkCEDskxTBDAZwuAkkqIfxIQyhBQBFvAQSDITM5VDW6XNE4KagNh6Bgwe60smQUB3d4Rz1ZBApnFASDd0hihh12BkE9kjAJVlycXIg7CQIFA6SlnJ87paqbSKiKoqusnbMdmDC2tXQlkUhziYtyWTxIfy6BE8WJt5YJvpJivxNaGmLHT0VnOgSYf0dZXS7APdpB309RnHOG5gDqXGLDaC457D1zZ%2FV%2FnmOM82XiHRLYKhKP1oZmADdEAAAh%2BQQJCgAAACwAAAAAIAAgAAAE6hDISWlZpOrNp1lGNRSdRpDUolIGw5RUYhhHukqFu8DsrEyqnWThGvAmhVlteBvojpTDDBUEIFwMFBRAmBkSgOrBFZogCASwBDEY%2FCZSg7GSE0gSCjQBMVG023xWBhklAnoEdhQEfyNqMIcKjhRsjEdnezB%2BA4k8gTwJhFuiW4dokXiloUepBAp5qaKpp6%2BHo7aWW54wl7obvEe0kRuoplCGepwSx2jJvqHEmGt6whJpGpfJCHmOoNHKaHx61WiSR92E4lbFoq%2BB6QDtuetcaBPnW6%2BO7wDHpIiK9SaVK5GgV543tzjgGcghAgAh%2BQQJCgAAACwAAAAAIAAgAAAE7hDISSkxpOrN5zFHNWRdhSiVoVLHspRUMoyUakyEe8PTPCATW9A14E0UvuAKMNAZKYUZCiBMuBakSQKG8G2FzUWox2AUtAQFcBKlVQoLgQReZhQlCIJesQXI5B0CBnUMOxMCenoCfTCEWBsJColTMANldx15BGs8B5wlCZ9Po6OJkwmRpnqkqnuSrayqfKmqpLajoiW5HJq7FL1Gr2mMMcKUMIiJgIemy7xZtJsTmsM4xHiKv5KMCXqfyUCJEonXPN2rAOIAmsfB3uPoAK%2B%2BG%2Bw48edZPK%2BM6hLJpQg484enXIdQFSS1u6UhksENEQAAIfkECQoAAAAsAAAAACAAIAAABOcQyEmpGKLqzWcZRVUQnZYg1aBSh2GUVEIQ2aQOE%2BG%2BcD4ntpWkZQj1JIiZIogDFFyHI0UxQwFugMSOFIPJftfVAEoZLBbcLEFhlQiqGp1Vd140AUklUN3eCA51C1EWMzMCezCBBmkxVIVHBWd3HHl9JQOIJSdSnJ0TDKChCwUJjoWMPaGqDKannasMo6WnM562R5YluZRwur0wpgqZE7NKUm%2BFNRPIhjBJxKZteWuIBMN4zRMIVIhffcgojwCF117i4nlLnY5ztRLsnOk%2BaV%2BoJY7V7m76PdkS4trKcdg0Zc0tTcKkRAAAIfkECQoAAAAsAAAAACAAIAAABO4QyEkpKqjqzScpRaVkXZWQEximw1BSCUEIlDohrft6cpKCk5xid5MNJTaAIkekKGQkWyKHkvhKsR7ARmitkAYDYRIbUQRQjWBwJRzChi9CRlBcY1UN4g0%2FVNB0AlcvcAYHRyZPdEQFYV8ccwR5HWxEJ02YmRMLnJ1xCYp0Y5idpQuhopmmC2KgojKasUQDk5BNAwwMOh2RtRq5uQuPZKGIJQIGwAwGf6I0JXMpC8C7kXWDBINFMxS4DKMAWVWAGYsAdNqW5uaRxkSKJOZKaU3tPOBZ4DuK2LATgJhkPJMgTwKCdFjyPHEnKxFCDhEAACH5BAkKAAAALAAAAAAgACAAAATzEMhJaVKp6s2nIkolIJ2WkBShpkVRWqqQrhLSEu9MZJKK9y1ZrqYK9WiClmvoUaF8gIQSNeF1Er4MNFn4SRSDARWroAIETg1iVwuHjYB1kYc1mwruwXKC9gmsJXliGxc%2BXiUCby9ydh1sOSdMkpMTBpaXBzsfhoc5l58Gm5yToAaZhaOUqjkDgCWNHAULCwOLaTmzswadEqggQwgHuQsHIoZCHQMMQgQGubVEcxOPFAcMDAYUA85eWARmfSRQCdcMe0zeP1AAygwLlJtPNAAL19DARdPzBOWSm1brJBi45soRAWQAAkrQIykShQ9wVhHCwCQCACH5BAkKAAAALAAAAAAgACAAAATrEMhJaVKp6s2nIkqFZF2VIBWhUsJaTokqUCoBq%2BE71SRQeyqUToLA7VxF0JDyIQh%2FMVVPMt1ECZlfcjZJ9mIKoaTl1MRIl5o4CUKXOwmyrCInCKqcWtvadL2SYhyASyNDJ0uIiRMDjI0Fd30%2FiI2UA5GSS5UDj2l6NoqgOgN4gksEBgYFf0FDqKgHnyZ9OX8HrgYHdHpcHQULXAS2qKpENRg7eAMLC7kTBaixUYFkKAzWAAnLC7FLVxLWDBLKCwaKTULgEwbLA4hJtOkSBNqITT3xEgfLpBtzE%2FjiuL04RGEBgwWhShRgQExHBAAh%2BQQJCgAAACwAAAAAIAAgAAAE7xDISWlSqerNpyJKhWRdlSAVoVLCWk6JKlAqAavhO9UkUHsqlE6CwO1cRdCQ8iEIfzFVTzLdRAmZX3I2SfZiCqGk5dTESJeaOAlClzsJsqwiJwiqnFrb2nS9kmIcgEsjQydLiIlHehhpejaIjzh9eomSjZR%2BipslWIRLAgMDOR2DOqKogTB9pCUJBagDBXR6XB0EBkIIsaRsGGMMAxoDBgYHTKJiUYEGDAzHC9EACcUGkIgFzgwZ0QsSBcXHiQvOwgDdEwfFs0sDzt4S6BK4xYjkDOzn0unFeBzOBijIm1Dgmg5YFQwsCMjp1oJ8LyIAACH5BAkKAAAALAAAAAAgACAAAATwEMhJaVKp6s2nIkqFZF2VIBWhUsJaTokqUCoBq%2BE71SRQeyqUToLA7VxF0JDyIQh%2FMVVPMt1ECZlfcjZJ9mIKoaTl1MRIl5o4CUKXOwmyrCInCKqcWtvadL2SYhyASyNDJ0uIiUd6GGl6NoiPOH16iZKNlH6KmyWFOggHhEEvAwwMA0N9GBsEC6amhnVcEwavDAazGwIDaH1ipaYLBUTCGgQDA8NdHz0FpqgTBwsLqAbWAAnIA4FWKdMLGdYGEgraigbT0OITBcg5QwPT4xLrROZL6AuQAPUS7bxLpoWidY0JtxLHKhwwMJBTHgPKdEQAACH5BAkKAAAALAAAAAAgACAAAATrEMhJaVKp6s2nIkqFZF2VIBWhUsJaTokqUCoBq%2BE71SRQeyqUToLA7VxF0JDyIQh%2FMVVPMt1ECZlfcjZJ9mIKoaTl1MRIl5o4CUKXOwmyrCInCKqcWtvadL2SYhyASyNDJ0uIiUd6GAULDJCRiXo1CpGXDJOUjY%2BYip9DhToJA4RBLwMLCwVDfRgbBAaqqoZ1XBMHswsHtxtFaH1iqaoGNgAIxRpbFAgfPQSqpbgGBqUD1wBXeCYp1AYZ19JJOYgH1KwA4UBvQwXUBxPqVD9L3sbp2BNk2xvvFPJd%2BMFCN6HAAIKgNggY0KtEBAAh%2BQQJCgAAACwAAAAAIAAgAAAE6BDISWlSqerNpyJKhWRdlSAVoVLCWk6JKlAqAavhO9UkUHsqlE6CwO1cRdCQ8iEIfzFVTzLdRAmZX3I2SfYIDMaAFdTESJeaEDAIMxYFqrOUaNW4E4ObYcCXaiBVEgULe0NJaxxtYksjh2NLkZISgDgJhHthkpU4mW6blRiYmZOlh4JWkDqILwUGBnE6TYEbCgevr0N1gH4At7gHiRpFaLNrrq8HNgAJA70AWxQIH1%2BvsYMDAzZQPC9VCNkDWUhGkuE5PxJNwiUK4UfLzOlD4WvzAHaoG9nxPi5d%2BjYUqfAhhykOFwJWiAAAIfkECQoAAAAsAAAAACAAIAAABPAQyElpUqnqzaciSoVkXVUMFaFSwlpOCcMYlErAavhOMnNLNo8KsZsMZItJEIDIFSkLGQoQTNhIsFehRww2CQLKF0tYGKYSg%2BygsZIuNqJksKgbfgIGepNo2cIUB3V1B3IvNiBYNQaDSTtfhhx0CwVPI0UJe0%2Bbm4g5VgcGoqOcnjmjqDSdnhgEoamcsZuXO1aWQy8KAwOAuTYYGwi7w5h%2BKr0SJ8MFihpNbx%2B4Erq7BYBuzsdiH1jCAzoSfl0rVirNbRXlBBlLX%2BBP0XJLAPGzTkAuAOqb0WT5AH7OcdCm5B8TgRwSRKIHQtaLCwg1RAAAOwAAAAAAAAAAAA%3D%3D);\n\n \t\tvisibility: visible;\n \t\topacity: 0.6;\n\n \t\t-webkit-transition: all 0.3s ease;\n \t\t   -moz-transition: all 0.3s ease;\n \t\t    -ms-transition: all 0.3s ease;\n \t\t        transition: all 0.3s ease;\n \t}\n\n \t.reveal .preview-link-overlay header {\n \t\tposition: absolute;\n \t\tleft: 0;\n \t\ttop: 0;\n \t\twidth: 100%;\n \t\theight: 40px;\n \t\tz-index: 2;\n \t\tborder-bottom: 1px solid #222;\n \t}\n \t\t.reveal .preview-link-overlay header a {\n \t\t\tdisplay: inline-block;\n \t\t\twidth: 40px;\n \t\t\theight: 40px;\n \t\t\tpadding: 0 10px;\n \t\t\tfloat: right;\n \t\t\topacity: 0.6;\n\n \t\t\tbox-sizing: border-box;\n \t\t}\n \t\t\t.reveal .preview-link-overlay header a:hover {\n \t\t\t\topacity: 1;\n \t\t\t}\n \t\t\t.reveal .preview-link-overlay header a .icon {\n \t\t\t\tdisplay: inline-block;\n \t\t\t\twidth: 20px;\n \t\t\t\theight: 20px;\n\n \t\t\t\tbackground-position: 50% 50%;\n \t\t\t\tbackground-size: 100%;\n \t\t\t\tbackground-repeat: no-repeat;\n \t\t\t}\n \t\t\t.reveal .preview-link-overlay header a.close .icon {\n \t\t\t\tbackground-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAABkklEQVRYR8WX4VHDMAxG6wnoJrABZQPYBCaBTWAD2g1gE5gg6OOsXuxIlr40d81dfrSJ9V4c2VLK7spHuTJ/5wpM07QXuXc5X0opX2tEJcadjHuV80li/FgxTIEK/5QBCICBD6xEhSMGHgQPgBgLiYVAB1dpSqKDawxTohFw4JSEA3clzgIBPCURwE2JucBR7rhPJJv5OpJwDX+SfDjgx1wACQeJG1aChP9K/IMmdZ8DtESV1WyP3Bt4MwM6sj4NMxMYiqUWHQu4KYA/SYkIjOsm3BXYWMKFDwU2khjCQ4ELJUJ4SmClRArOCmSXGuKma0fYD5CbzHxFpCSGAhfAVSSUGDUk2BWZaff2g6GE15BsBQ9nwmpIGDiyHQddwNTMKkbZaf9fajXQca1EX44puJZUsnY0ObGmITE3GVLCbEhQUjGVt146j6oasWN+49Vph2w1pZ5EansNZqKBm1txbU57iRRcZ86RWMDdWtBJUHBHwoQPi1GV+JCbntmvok7iTX4/Up9mgyTc/FJYDTcndgH/AA5A/CHsyEkVAAAAAElFTkSuQmCC);\n \t\t\t}\n \t\t\t.reveal .preview-link-overlay header a.external .icon {\n \t\t\t\tbackground-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAcElEQVRYR+2WSQoAIQwEzf8f7XiOMkUQxUPlGkM3hVmiQfQR9GYnH1SsAQlI4DiBqkCMoNb9y2e90IAEJPAcgdznU9+engMaeJ7Azh5Y1U67gAho4DqBqmB1buAf0MB1AlVBek83ZPkmJMGc1wAR+AAqod/B97TRpQAAAABJRU5ErkJggg==);\n \t\t\t}\n\n \t.reveal .preview-link-overlay .viewport {\n \t\tposition: absolute;\n \t\ttop: 40px;\n \t\tright: 0;\n \t\tbottom: 0;\n \t\tleft: 0;\n \t}\n\n \t.reveal .preview-link-overlay .viewport iframe {\n \t\twidth: 100%;\n \t\theight: 100%;\n \t\tmax-width: 100%;\n \t\tmax-height: 100%;\n \t\tborder: 0;\n\n \t\topacity: 0;\n \t\tvisibility: hidden;\n\n \t\t-webkit-transition: all 0.3s ease;\n \t\t   -moz-transition: all 0.3s ease;\n \t\t    -ms-transition: all 0.3s ease;\n \t\t        transition: all 0.3s ease;\n \t}\n\n \t.reveal .preview-link-overlay.loaded .viewport iframe {\n \t\topacity: 1;\n \t\tvisibility: visible;\n \t}\n\n \t.reveal .preview-link-overlay.loaded .spinner {\n \t\topacity: 0;\n \t\tvisibility: hidden;\n\n \t\t-webkit-transform: scale(0.2);\n \t\t   -moz-transform: scale(0.2);\n \t\t    -ms-transform: scale(0.2);\n \t\t        transform: scale(0.2);\n \t}\n\n\n\n/*********************************************\n * PLAYBACK COMPONENT\n *********************************************/\n\n.reveal .playback {\n\tposition: fixed;\n\tleft: 15px;\n\tbottom: 15px;\n\tz-index: 30;\n\tcursor: pointer;\n\n\t-webkit-transition: all 400ms ease;\n\t   -moz-transition: all 400ms ease;\n\t    -ms-transition: all 400ms ease;\n\t        transition: all 400ms ease;\n}\n\n.reveal.overview .playback {\n\topacity: 0;\n\tvisibility: hidden;\n}\n\n\n/*********************************************\n * ROLLING LINKS\n *********************************************/\n\n.reveal .roll {\n\tdisplay: inline-block;\n\tline-height: 1.2;\n\toverflow: hidden;\n\n\tvertical-align: top;\n\n\t-webkit-perspective: 400px;\n\t   -moz-perspective: 400px;\n\t    -ms-perspective: 400px;\n\t        perspective: 400px;\n\n\t-webkit-perspective-origin: 50% 50%;\n\t   -moz-perspective-origin: 50% 50%;\n\t    -ms-perspective-origin: 50% 50%;\n\t        perspective-origin: 50% 50%;\n}\n\t.reveal .roll:hover {\n\t\tbackground: none;\n\t\ttext-shadow: none;\n\t}\n.reveal .roll span {\n\tdisplay: block;\n\tposition: relative;\n\tpadding: 0 2px;\n\n\tpointer-events: none;\n\n\t-webkit-transition: all 400ms ease;\n\t   -moz-transition: all 400ms ease;\n\t    -ms-transition: all 400ms ease;\n\t        transition: all 400ms ease;\n\n\t-webkit-transform-origin: 50% 0%;\n\t   -moz-transform-origin: 50% 0%;\n\t    -ms-transform-origin: 50% 0%;\n\t        transform-origin: 50% 0%;\n\n\t-webkit-transform-style: preserve-3d;\n\t   -moz-transform-style: preserve-3d;\n\t    -ms-transform-style: preserve-3d;\n\t        transform-style: preserve-3d;\n\n\t-webkit-backface-visibility: hidden;\n\t   -moz-backface-visibility: hidden;\n\t        backface-visibility: hidden;\n}\n\t.reveal .roll:hover span {\n\t    background: rgba(0,0,0,0.5);\n\n\t    -webkit-transform: translate3d( 0px, 0px, -45px ) rotateX( 90deg );\n\t       -moz-transform: translate3d( 0px, 0px, -45px ) rotateX( 90deg );\n\t        -ms-transform: translate3d( 0px, 0px, -45px ) rotateX( 90deg );\n\t            transform: translate3d( 0px, 0px, -45px ) rotateX( 90deg );\n\t}\n.reveal .roll span:after {\n\tcontent: attr(data-title);\n\n\tdisplay: block;\n\tposition: absolute;\n\tleft: 0;\n\ttop: 0;\n\tpadding: 0 2px;\n\n\t-webkit-backface-visibility: hidden;\n\t   -moz-backface-visibility: hidden;\n\t        backface-visibility: hidden;\n\n\t-webkit-transform-origin: 50% 0%;\n\t   -moz-transform-origin: 50% 0%;\n\t    -ms-transform-origin: 50% 0%;\n\t        transform-origin: 50% 0%;\n\n\t-webkit-transform: translate3d( 0px, 110%, 0px ) rotateX( -90deg );\n\t   -moz-transform: translate3d( 0px, 110%, 0px ) rotateX( -90deg );\n\t    -ms-transform: translate3d( 0px, 110%, 0px ) rotateX( -90deg );\n\t        transform: translate3d( 0px, 110%, 0px ) rotateX( -90deg );\n}\n\n\n/*********************************************\n * SPEAKER NOTES\n *********************************************/\n\n.reveal aside.notes {\n\tdisplay: none;\n}\n\n\n/*********************************************\n * ZOOM PLUGIN\n *********************************************/\n\n.zoomed .reveal *,\n.zoomed .reveal *:before,\n.zoomed .reveal *:after {\n\t-webkit-transform: none !important;\n\t   -moz-transform: none !important;\n\t    -ms-transform: none !important;\n\t        transform: none !important;\n\n\t-webkit-backface-visibility: visible !important;\n\t   -moz-backface-visibility: visible !important;\n\t    -ms-backface-visibility: visible !important;\n\t        backface-visibility: visible !important;\n}\n\n.zoomed .reveal .progress,\n.zoomed .reveal .controls {\n\topacity: 0;\n}\n\n.zoomed .reveal .roll span {\n\tbackground: none;\n}\n\n.zoomed .reveal .roll span:after {\n\tvisibility: hidden;\n}\n\n\n", ""]);

	// exports


/***/ },
/* 3 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(6);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(4)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../css-loader/index.js!./moon.css", function() {
				var newContent = require("!!./../../css-loader/index.js!./moon.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports
	exports.push([module.id, "@import url(https://fonts.googleapis.com/css?family=Lato:400,700,400italic,700italic);", ""]);

	// module
	exports.push([module.id, "/**\n * Solarized Dark theme for reveal.js.\n * Author: Achim Staebler\n */\n@font-face {\n  font-family: 'League Gothic';\n  src: url(" + __webpack_require__(7) + ");\n  src: url(" + __webpack_require__(7) + "?#iefix) format(\"embedded-opentype\"), url(" + __webpack_require__(8) + ") format(\"woff\"), url(" + __webpack_require__(9) + ") format(\"truetype\"), url(" + __webpack_require__(10) + "#LeagueGothicRegular) format(\"svg\");\n  font-weight: normal;\n  font-style: normal; }\n\n/**\n * Solarized colors by Ethan Schoonover\n */\nhtml * {\n  color-profile: sRGB;\n  rendering-intent: auto; }\n\n/*********************************************\n * GLOBAL STYLES\n *********************************************/\nbody {\n  background: #002b36;\n  background-color: #002b36; }\n\n.reveal {\n  font-family: \"Lato\", sans-serif;\n  font-size: 36px;\n  font-weight: normal;\n  letter-spacing: -0.02em;\n  color: #93a1a1; }\n\n::selection {\n  color: white;\n  background: #d33682;\n  text-shadow: none; }\n\n/*********************************************\n * HEADERS\n *********************************************/\n.reveal h1,\n.reveal h2,\n.reveal h3,\n.reveal h4,\n.reveal h5,\n.reveal h6 {\n  margin: 0 0 20px 0;\n  color: #eee8d5;\n  font-family: \"League Gothic\", Impact, sans-serif;\n  line-height: 0.9em;\n  letter-spacing: 0.02em;\n  text-transform: uppercase;\n  text-shadow: none; }\n\n.reveal h1 {\n  text-shadow: 0px 0px 6px rgba(0, 0, 0, 0.2); }\n\n/*********************************************\n * LINKS\n *********************************************/\n.reveal a:not(.image) {\n  color: #268bd2;\n  text-decoration: none;\n  -webkit-transition: color .15s ease;\n  -moz-transition: color .15s ease;\n  -ms-transition: color .15s ease;\n  -o-transition: color .15s ease;\n  transition: color .15s ease; }\n\n.reveal a:not(.image):hover {\n  color: #78b9e6;\n  text-shadow: none;\n  border: none; }\n\n.reveal .roll span:after {\n  color: #fff;\n  background: #1a6091; }\n\n/*********************************************\n * IMAGES\n *********************************************/\n.reveal section img {\n  margin: 15px 0px;\n  background: rgba(255, 255, 255, 0.12);\n  border: 4px solid #93a1a1;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);\n  -webkit-transition: all .2s linear;\n  -moz-transition: all .2s linear;\n  -ms-transition: all .2s linear;\n  -o-transition: all .2s linear;\n  transition: all .2s linear; }\n\n.reveal a:hover img {\n  background: rgba(255, 255, 255, 0.2);\n  border-color: #268bd2;\n  box-shadow: 0 0 20px rgba(0, 0, 0, 0.55); }\n\n/*********************************************\n * NAVIGATION CONTROLS\n *********************************************/\n.reveal .controls div.navigate-left,\n.reveal .controls div.navigate-left.enabled {\n  border-right-color: #268bd2; }\n\n.reveal .controls div.navigate-right,\n.reveal .controls div.navigate-right.enabled {\n  border-left-color: #268bd2; }\n\n.reveal .controls div.navigate-up,\n.reveal .controls div.navigate-up.enabled {\n  border-bottom-color: #268bd2; }\n\n.reveal .controls div.navigate-down,\n.reveal .controls div.navigate-down.enabled {\n  border-top-color: #268bd2; }\n\n.reveal .controls div.navigate-left.enabled:hover {\n  border-right-color: #78b9e6; }\n\n.reveal .controls div.navigate-right.enabled:hover {\n  border-left-color: #78b9e6; }\n\n.reveal .controls div.navigate-up.enabled:hover {\n  border-bottom-color: #78b9e6; }\n\n.reveal .controls div.navigate-down.enabled:hover {\n  border-top-color: #78b9e6; }\n\n/*********************************************\n * PROGRESS BAR\n *********************************************/\n.reveal .progress {\n  background: rgba(0, 0, 0, 0.2); }\n\n.reveal .progress span {\n  background: #268bd2;\n  -webkit-transition: width 800ms cubic-bezier(0.26, 0.86, 0.44, 0.985);\n  -moz-transition: width 800ms cubic-bezier(0.26, 0.86, 0.44, 0.985);\n  -ms-transition: width 800ms cubic-bezier(0.26, 0.86, 0.44, 0.985);\n  -o-transition: width 800ms cubic-bezier(0.26, 0.86, 0.44, 0.985);\n  transition: width 800ms cubic-bezier(0.26, 0.86, 0.44, 0.985); }\n\n/*********************************************\n * SLIDE NUMBER\n *********************************************/\n.reveal .slide-number {\n  color: #268bd2; }\n", ""]);

	// exports


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "league_gothic-webfont_7c45e80a47dd1698cbf946705d809ee0.eot";

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "league_gothic-webfont_be4f8744ed8cc89b8ee15acd51188379.woff";

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "league_gothic-webfont_582c7d09d5227d06492ef8bcd0ca6ba4.ttf";

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "league_gothic-webfont_fe0b97f78d0e6a8ab4b10c7d0814bead.svg";

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(12);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(4)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../../css-loader/index.js!./zenburn.css", function() {
				var newContent = require("!!./../../../../../css-loader/index.js!./zenburn.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports


	// module
	exports.push([module.id, "/*\n\nZenburn style from voldmar.ru (c) Vladimir Epifanov <voldmar@voldmar.ru>\nbased on dark.css by Ivan Sagalaev\n\n*/\n\npre code {\n  display: block; padding: 0.5em;\n  background: #3F3F3F;\n  color: #DCDCDC;\n}\n\npre .keyword,\npre .tag,\npre .django .tag,\npre .django .keyword,\npre .css .class,\npre .css .id,\npre .lisp .title {\n  color: #E3CEAB;\n}\n\npre .django .template_tag,\npre .django .variable,\npre .django .filter .argument {\n  color: #DCDCDC;\n}\n\npre .number,\npre .date {\n  color: #8CD0D3;\n}\n\npre .dos .envvar,\npre .dos .stream,\npre .variable,\npre .apache .sqbracket {\n  color: #EFDCBC;\n}\n\npre .dos .flow,\npre .diff .change,\npre .python .exception,\npre .python .built_in,\npre .literal,\npre .tex .special {\n  color: #EFEFAF;\n}\n\npre .diff .chunk,\npre .ruby .subst {\n  color: #8F8F8F;\n}\n\npre .dos .keyword,\npre .python .decorator,\npre .class .title,\npre .haskell .label,\npre .function .title,\npre .ini .title,\npre .diff .header,\npre .ruby .class .parent,\npre .apache .tag,\npre .nginx .built_in,\npre .tex .command,\npre .input_number {\n    color: #efef8f;\n}\n\npre .dos .winutils,\npre .ruby .symbol,\npre .ruby .symbol .string,\npre .ruby .symbol .keyword,\npre .ruby .symbol .keymethods,\npre .ruby .string,\npre .ruby .instancevar {\n  color: #DCA3A3;\n}\n\npre .diff .deletion,\npre .string,\npre .tag .value,\npre .preprocessor,\npre .built_in,\npre .sql .aggregate,\npre .javadoc,\npre .smalltalk .class,\npre .smalltalk .localvars,\npre .smalltalk .array,\npre .css .rules .value,\npre .attr_selector,\npre .pseudo,\npre .apache .cbracket,\npre .tex .formula {\n  color: #CC9393;\n}\n\npre .shebang,\npre .diff .addition,\npre .comment,\npre .java .annotation,\npre .template_comment,\npre .pi,\npre .doctype {\n  color: #7F9F7F;\n}\n\npre .xml .css,\npre .xml .javascript,\npre .xml .vbscript,\npre .tex .formula {\n  opacity: 0.5;\n}\n\n", ""]);

	// exports


/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Reveal) {"use strict";
	var hljs = __webpack_require__(15);
	Reveal.initialize({});
	document.addEventListener('DOMContentLoaded', function (event) {
	    setTimeout(function () {
	        var codes = document.querySelectorAll('pre code');
	        for (var i = 0; i < codes.length; i++) {
	            hljs.highlightBlock(codes[i]);
	        }
	    }, 500);
	});

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(14)))

/***/ },
/* 14 */
/***/ function(module, exports) {

	/*!
	 * reveal.js
	 * http://lab.hakim.se/reveal-js
	 * MIT licensed
	 *
	 * Copyright (C) 2013 Hakim El Hattab, http://hakim.se
	 */
	var Reveal = (function(){

		'use strict';

		var SLIDES_SELECTOR = '.reveal .slides section',
			HORIZONTAL_SLIDES_SELECTOR = '.reveal .slides>section',
			VERTICAL_SLIDES_SELECTOR = '.reveal .slides>section.present>section',
			HOME_SLIDE_SELECTOR = '.reveal .slides>section:first-of-type',

			// Configurations defaults, can be overridden at initialization time
			config = {

				// The "normal" size of the presentation, aspect ratio will be preserved
				// when the presentation is scaled to fit different resolutions
				width: 960,
				height: 700,

				// Factor of the display size that should remain empty around the content
				margin: 0.1,

				// Bounds for smallest/largest possible scale to apply to content
				minScale: 0.2,
				maxScale: 1.0,

				// Display controls in the bottom right corner
				controls: true,

				// Display a presentation progress bar
				progress: true,

				// Display the page number of the current slide
				slideNumber: false,

				// Push each slide change to the browser history
				history: false,

				// Enable keyboard shortcuts for navigation
				keyboard: true,

				// Enable the slide overview mode
				overview: true,

				// Vertical centering of slides
				center: true,

				// Enables touch navigation on devices with touch input
				touch: true,

				// Loop the presentation
				loop: false,

				// Change the presentation direction to be RTL
				rtl: false,

				// Turns fragments on and off globally
				fragments: true,

				// Flags if the presentation is running in an embedded mode,
				// i.e. contained within a limited portion of the screen
				embedded: false,

				// Number of milliseconds between automatically proceeding to the
				// next slide, disabled when set to 0, this value can be overwritten
				// by using a data-autoslide attribute on your slides
				autoSlide: 0,

				// Stop auto-sliding after user input
				autoSlideStoppable: true,

				// Enable slide navigation via mouse wheel
				mouseWheel: false,

				// Apply a 3D roll to links on hover
				rollingLinks: false,

				// Hides the address bar on mobile devices
				hideAddressBar: true,

				// Opens links in an iframe preview overlay
				previewLinks: false,

				// Focuses body when page changes visiblity to ensure keyboard shortcuts work
				focusBodyOnPageVisiblityChange: true,

				// Theme (see /css/theme)
				theme: null,

				// Transition style
				transition: 'default', // default/cube/page/concave/zoom/linear/fade/none

				// Transition speed
				transitionSpeed: 'default', // default/fast/slow

				// Transition style for full page slide backgrounds
				backgroundTransition: 'default', // default/linear/none

				// Parallax background image
				parallaxBackgroundImage: '', // CSS syntax, e.g. "a.jpg"

				// Parallax background size
				parallaxBackgroundSize: '', // CSS syntax, e.g. "3000px 2000px"

				// Number of slides away from the current that are visible
				viewDistance: 3,

				// Script dependencies to load
				dependencies: []

			},

			// Flags if reveal.js is loaded (has dispatched the 'ready' event)
			loaded = false,

			// The horizontal and vertical index of the currently active slide
			indexh,
			indexv,

			// The previous and current slide HTML elements
			previousSlide,
			currentSlide,

			previousBackground,

			// Slides may hold a data-state attribute which we pick up and apply
			// as a class to the body. This list contains the combined state of
			// all current slides.
			state = [],

			// The current scale of the presentation (see width/height config)
			scale = 1,

			// Cached references to DOM elements
			dom = {},

			// Features supported by the browser, see #checkCapabilities()
			features = {},

			// Client is a mobile device, see #checkCapabilities()
			isMobileDevice,

			// Throttles mouse wheel navigation
			lastMouseWheelStep = 0,

			// Delays updates to the URL due to a Chrome thumbnailer bug
			writeURLTimeout = 0,

			// A delay used to activate the overview mode
			activateOverviewTimeout = 0,

			// A delay used to deactivate the overview mode
			deactivateOverviewTimeout = 0,

			// Flags if the interaction event listeners are bound
			eventsAreBound = false,

			// The current auto-slide duration
			autoSlide = 0,

			// Auto slide properties
			autoSlidePlayer,
			autoSlideTimeout = 0,
			autoSlideStartTime = -1,
			autoSlidePaused = false,

			// Holds information about the currently ongoing touch input
			touch = {
				startX: 0,
				startY: 0,
				startSpan: 0,
				startCount: 0,
				captured: false,
				threshold: 40
			};

		/**
		 * Starts up the presentation if the client is capable.
		 */
		function initialize( options ) {

			checkCapabilities();

			if( !features.transforms2d && !features.transforms3d ) {
				document.body.setAttribute( 'class', 'no-transforms' );

				// If the browser doesn't support core features we won't be
				// using JavaScript to control the presentation
				return;
			}

			// Force a layout when the whole page, incl fonts, has loaded
			window.addEventListener( 'load', layout, false );

			var query = Reveal.getQueryHash();

			// Do not accept new dependencies via query config to avoid
			// the potential of malicious script injection
			if( typeof query['dependencies'] !== 'undefined' ) delete query['dependencies'];

			// Copy options over to our config object
			extend( config, options );
			extend( config, query );

			// Hide the address bar in mobile browsers
			hideAddressBar();

			// Loads the dependencies and continues to #start() once done
			load();

		}

		/**
		 * Inspect the client to see what it's capable of, this
		 * should only happens once per runtime.
		 */
		function checkCapabilities() {

			features.transforms3d = 'WebkitPerspective' in document.body.style ||
									'MozPerspective' in document.body.style ||
									'msPerspective' in document.body.style ||
									'OPerspective' in document.body.style ||
									'perspective' in document.body.style;

			features.transforms2d = 'WebkitTransform' in document.body.style ||
									'MozTransform' in document.body.style ||
									'msTransform' in document.body.style ||
									'OTransform' in document.body.style ||
									'transform' in document.body.style;

			features.requestAnimationFrameMethod = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame;
			features.requestAnimationFrame = typeof features.requestAnimationFrameMethod === 'function';

			features.canvas = !!document.createElement( 'canvas' ).getContext;

			isMobileDevice = navigator.userAgent.match( /(iphone|ipod|android)/gi );

		}


	    /**
	     * Loads the dependencies of reveal.js. Dependencies are
	     * defined via the configuration option 'dependencies'
	     * and will be loaded prior to starting/binding reveal.js.
	     * Some dependencies may have an 'async' flag, if so they
	     * will load after reveal.js has been started up.
	     */
		function load() {

			var scripts = [],
				scriptsAsync = [],
				scriptsToPreload = 0;

			// Called once synchronous scripts finish loading
			function proceed() {
				if( scriptsAsync.length ) {
					// Load asynchronous scripts
					head.js.apply( null, scriptsAsync );
				}

				start();
			}

			function loadScript( s ) {
				head.ready( s.src.match( /([\w\d_\-]*)\.?js$|[^\\\/]*$/i )[0], function() {
					// Extension may contain callback functions
					if( typeof s.callback === 'function' ) {
						s.callback.apply( this );
					}

					if( --scriptsToPreload === 0 ) {
						proceed();
					}
				});
			}

			for( var i = 0, len = config.dependencies.length; i < len; i++ ) {
				var s = config.dependencies[i];

				// Load if there's no condition or the condition is truthy
				if( !s.condition || s.condition() ) {
					if( s.async ) {
						scriptsAsync.push( s.src );
					}
					else {
						scripts.push( s.src );
					}

					loadScript( s );
				}
			}

			if( scripts.length ) {
				scriptsToPreload = scripts.length;

				// Load synchronous scripts
				head.js.apply( null, scripts );
			}
			else {
				proceed();
			}

		}

		/**
		 * Starts up reveal.js by binding input events and navigating
		 * to the current URL deeplink if there is one.
		 */
		function start() {

			// Make sure we've got all the DOM elements we need
			setupDOM();

			// Resets all vertical slides so that only the first is visible
			resetVerticalSlides();

			// Updates the presentation to match the current configuration values
			configure();

			// Read the initial hash
			readURL();

			// Update all backgrounds
			updateBackground( true );

			// Notify listeners that the presentation is ready but use a 1ms
			// timeout to ensure it's not fired synchronously after #initialize()
			setTimeout( function() {
				// Enable transitions now that we're loaded
				dom.slides.classList.remove( 'no-transition' );

				loaded = true;

				dispatchEvent( 'ready', {
					'indexh': indexh,
					'indexv': indexv,
					'currentSlide': currentSlide
				} );
			}, 1 );

		}

		/**
		 * Finds and stores references to DOM elements which are
		 * required by the presentation. If a required element is
		 * not found, it is created.
		 */
		function setupDOM() {

			// Cache references to key DOM elements
			dom.theme = document.querySelector( '#theme' );
			dom.wrapper = document.querySelector( '.reveal' );
			dom.slides = document.querySelector( '.reveal .slides' );

			// Prevent transitions while we're loading
			dom.slides.classList.add( 'no-transition' );

			// Background element
			dom.background = createSingletonNode( dom.wrapper, 'div', 'backgrounds', null );

			// Progress bar
			dom.progress = createSingletonNode( dom.wrapper, 'div', 'progress', '<span></span>' );
			dom.progressbar = dom.progress.querySelector( 'span' );

			// Arrow controls
			createSingletonNode( dom.wrapper, 'aside', 'controls',
				'<div class="navigate-left"></div>' +
				'<div class="navigate-right"></div>' +
				'<div class="navigate-up"></div>' +
				'<div class="navigate-down"></div>' );

			// Slide number
			dom.slideNumber = createSingletonNode( dom.wrapper, 'div', 'slide-number', '' );

			// State background element [DEPRECATED]
			createSingletonNode( dom.wrapper, 'div', 'state-background', null );

			// Overlay graphic which is displayed during the paused mode
			createSingletonNode( dom.wrapper, 'div', 'pause-overlay', null );

			// Cache references to elements
			dom.controls = document.querySelector( '.reveal .controls' );

			// There can be multiple instances of controls throughout the page
			dom.controlsLeft = toArray( document.querySelectorAll( '.navigate-left' ) );
			dom.controlsRight = toArray( document.querySelectorAll( '.navigate-right' ) );
			dom.controlsUp = toArray( document.querySelectorAll( '.navigate-up' ) );
			dom.controlsDown = toArray( document.querySelectorAll( '.navigate-down' ) );
			dom.controlsPrev = toArray( document.querySelectorAll( '.navigate-prev' ) );
			dom.controlsNext = toArray( document.querySelectorAll( '.navigate-next' ) );

		}

		/**
		 * Creates an HTML element and returns a reference to it.
		 * If the element already exists the existing instance will
		 * be returned.
		 */
		function createSingletonNode( container, tagname, classname, innerHTML ) {

			var node = container.querySelector( '.' + classname );
			if( !node ) {
				node = document.createElement( tagname );
				node.classList.add( classname );
				if( innerHTML !== null ) {
					node.innerHTML = innerHTML;
				}
				container.appendChild( node );
			}
			return node;

		}

		/**
		 * Creates the slide background elements and appends them
		 * to the background container. One element is created per
		 * slide no matter if the given slide has visible background.
		 */
		function createBackgrounds() {

			if( isPrintingPDF() ) {
				document.body.classList.add( 'print-pdf' );
			}

			// Clear prior backgrounds
			dom.background.innerHTML = '';
			dom.background.classList.add( 'no-transition' );

			// Helper method for creating a background element for the
			// given slide
			function _createBackground( slide, container ) {

				var data = {
					background: slide.getAttribute( 'data-background' ),
					backgroundSize: slide.getAttribute( 'data-background-size' ),
					backgroundImage: slide.getAttribute( 'data-background-image' ),
					backgroundColor: slide.getAttribute( 'data-background-color' ),
					backgroundRepeat: slide.getAttribute( 'data-background-repeat' ),
					backgroundPosition: slide.getAttribute( 'data-background-position' ),
					backgroundTransition: slide.getAttribute( 'data-background-transition' )
				};

				var element = document.createElement( 'div' );
				element.className = 'slide-background';

				if( data.background ) {
					// Auto-wrap image urls in url(...)
					if( /^(http|file|\/\/)/gi.test( data.background ) || /\.(svg|png|jpg|jpeg|gif|bmp)$/gi.test( data.background ) ) {
						element.style.backgroundImage = 'url('+ data.background +')';
					}
					else {
						element.style.background = data.background;
					}
				}

				if( data.background || data.backgroundColor || data.backgroundImage ) {
					element.setAttribute( 'data-background-hash', data.background + data.backgroundSize + data.backgroundImage + data.backgroundColor + data.backgroundRepeat + data.backgroundPosition + data.backgroundTransition );
				}

				// Additional and optional background properties
				if( data.backgroundSize ) element.style.backgroundSize = data.backgroundSize;
				if( data.backgroundImage ) element.style.backgroundImage = 'url("' + data.backgroundImage + '")';
				if( data.backgroundColor ) element.style.backgroundColor = data.backgroundColor;
				if( data.backgroundRepeat ) element.style.backgroundRepeat = data.backgroundRepeat;
				if( data.backgroundPosition ) element.style.backgroundPosition = data.backgroundPosition;
				if( data.backgroundTransition ) element.setAttribute( 'data-background-transition', data.backgroundTransition );

				container.appendChild( element );

				return element;

			}

			// Iterate over all horizontal slides
			toArray( document.querySelectorAll( HORIZONTAL_SLIDES_SELECTOR ) ).forEach( function( slideh ) {

				var backgroundStack;

				if( isPrintingPDF() ) {
					backgroundStack = _createBackground( slideh, slideh );
				}
				else {
					backgroundStack = _createBackground( slideh, dom.background );
				}

				// Iterate over all vertical slides
				toArray( slideh.querySelectorAll( 'section' ) ).forEach( function( slidev ) {

					if( isPrintingPDF() ) {
						_createBackground( slidev, slidev );
					}
					else {
						_createBackground( slidev, backgroundStack );
					}

				} );

			} );

			// Add parallax background if specified
			if( config.parallaxBackgroundImage ) {

				dom.background.style.backgroundImage = 'url("' + config.parallaxBackgroundImage + '")';
				dom.background.style.backgroundSize = config.parallaxBackgroundSize;

				// Make sure the below properties are set on the element - these properties are
				// needed for proper transitions to be set on the element via CSS. To remove
				// annoying background slide-in effect when the presentation starts, apply
				// these properties after short time delay
				setTimeout( function() {
					dom.wrapper.classList.add( 'has-parallax-background' );
				}, 1 );

			}
			else {

				dom.background.style.backgroundImage = '';
				dom.wrapper.classList.remove( 'has-parallax-background' );

			}

		}

		/**
		 * Applies the configuration settings from the config
		 * object. May be called multiple times.
		 */
		function configure( options ) {

			var numberOfSlides = document.querySelectorAll( SLIDES_SELECTOR ).length;

			dom.wrapper.classList.remove( config.transition );

			// New config options may be passed when this method
			// is invoked through the API after initialization
			if( typeof options === 'object' ) extend( config, options );

			// Force linear transition based on browser capabilities
			if( features.transforms3d === false ) config.transition = 'linear';

			dom.wrapper.classList.add( config.transition );

			dom.wrapper.setAttribute( 'data-transition-speed', config.transitionSpeed );
			dom.wrapper.setAttribute( 'data-background-transition', config.backgroundTransition );

			dom.controls.style.display = config.controls ? 'block' : 'none';
			dom.progress.style.display = config.progress ? 'block' : 'none';

			if( config.rtl ) {
				dom.wrapper.classList.add( 'rtl' );
			}
			else {
				dom.wrapper.classList.remove( 'rtl' );
			}

			if( config.center ) {
				dom.wrapper.classList.add( 'center' );
			}
			else {
				dom.wrapper.classList.remove( 'center' );
			}

			if( config.mouseWheel ) {
				document.addEventListener( 'DOMMouseScroll', onDocumentMouseScroll, false ); // FF
				document.addEventListener( 'mousewheel', onDocumentMouseScroll, false );
			}
			else {
				document.removeEventListener( 'DOMMouseScroll', onDocumentMouseScroll, false ); // FF
				document.removeEventListener( 'mousewheel', onDocumentMouseScroll, false );
			}

			// Rolling 3D links
			if( config.rollingLinks ) {
				enableRollingLinks();
			}
			else {
				disableRollingLinks();
			}

			// Iframe link previews
			if( config.previewLinks ) {
				enablePreviewLinks();
			}
			else {
				disablePreviewLinks();
				enablePreviewLinks( '[data-preview-link]' );
			}

			// Auto-slide playback controls
			if( numberOfSlides > 1 && config.autoSlide && config.autoSlideStoppable && features.canvas && features.requestAnimationFrame ) {
				autoSlidePlayer = new Playback( dom.wrapper, function() {
					return Math.min( Math.max( ( Date.now() - autoSlideStartTime ) / autoSlide, 0 ), 1 );
				} );

				autoSlidePlayer.on( 'click', onAutoSlidePlayerClick );
				autoSlidePaused = false;
			}
			else if( autoSlidePlayer ) {
				autoSlidePlayer.destroy();
				autoSlidePlayer = null;
			}

			// Load the theme in the config, if it's not already loaded
			if( config.theme && dom.theme ) {
				var themeURL = dom.theme.getAttribute( 'href' );
				var themeFinder = /[^\/]*?(?=\.css)/;
				var themeName = themeURL.match(themeFinder)[0];

				if(  config.theme !== themeName ) {
					themeURL = themeURL.replace(themeFinder, config.theme);
					dom.theme.setAttribute( 'href', themeURL );
				}
			}

			sync();

		}

		/**
		 * Binds all event listeners.
		 */
		function addEventListeners() {

			eventsAreBound = true;

			window.addEventListener( 'hashchange', onWindowHashChange, false );
			window.addEventListener( 'resize', onWindowResize, false );

			if( config.touch ) {
				dom.wrapper.addEventListener( 'touchstart', onTouchStart, false );
				dom.wrapper.addEventListener( 'touchmove', onTouchMove, false );
				dom.wrapper.addEventListener( 'touchend', onTouchEnd, false );

				// Support pointer-style touch interaction as well
				if( window.navigator.msPointerEnabled ) {
					dom.wrapper.addEventListener( 'MSPointerDown', onPointerDown, false );
					dom.wrapper.addEventListener( 'MSPointerMove', onPointerMove, false );
					dom.wrapper.addEventListener( 'MSPointerUp', onPointerUp, false );
				}
			}

			if( config.keyboard ) {
				document.addEventListener( 'keydown', onDocumentKeyDown, false );
			}

			if( config.progress && dom.progress ) {
				dom.progress.addEventListener( 'click', onProgressClicked, false );
			}

			if( config.focusBodyOnPageVisiblityChange ) {
				var visibilityChange;

				if( 'hidden' in document ) {
					visibilityChange = 'visibilitychange';
				}
				else if( 'msHidden' in document ) {
					visibilityChange = 'msvisibilitychange';
				}
				else if( 'webkitHidden' in document ) {
					visibilityChange = 'webkitvisibilitychange';
				}

				if( visibilityChange ) {
					document.addEventListener( visibilityChange, onPageVisibilityChange, false );
				}
			}

			[ 'touchstart', 'click' ].forEach( function( eventName ) {
				dom.controlsLeft.forEach( function( el ) { el.addEventListener( eventName, onNavigateLeftClicked, false ); } );
				dom.controlsRight.forEach( function( el ) { el.addEventListener( eventName, onNavigateRightClicked, false ); } );
				dom.controlsUp.forEach( function( el ) { el.addEventListener( eventName, onNavigateUpClicked, false ); } );
				dom.controlsDown.forEach( function( el ) { el.addEventListener( eventName, onNavigateDownClicked, false ); } );
				dom.controlsPrev.forEach( function( el ) { el.addEventListener( eventName, onNavigatePrevClicked, false ); } );
				dom.controlsNext.forEach( function( el ) { el.addEventListener( eventName, onNavigateNextClicked, false ); } );
			} );

		}

		/**
		 * Unbinds all event listeners.
		 */
		function removeEventListeners() {

			eventsAreBound = false;

			document.removeEventListener( 'keydown', onDocumentKeyDown, false );
			window.removeEventListener( 'hashchange', onWindowHashChange, false );
			window.removeEventListener( 'resize', onWindowResize, false );

			dom.wrapper.removeEventListener( 'touchstart', onTouchStart, false );
			dom.wrapper.removeEventListener( 'touchmove', onTouchMove, false );
			dom.wrapper.removeEventListener( 'touchend', onTouchEnd, false );

			if( window.navigator.msPointerEnabled ) {
				dom.wrapper.removeEventListener( 'MSPointerDown', onPointerDown, false );
				dom.wrapper.removeEventListener( 'MSPointerMove', onPointerMove, false );
				dom.wrapper.removeEventListener( 'MSPointerUp', onPointerUp, false );
			}

			if ( config.progress && dom.progress ) {
				dom.progress.removeEventListener( 'click', onProgressClicked, false );
			}

			[ 'touchstart', 'click' ].forEach( function( eventName ) {
				dom.controlsLeft.forEach( function( el ) { el.removeEventListener( eventName, onNavigateLeftClicked, false ); } );
				dom.controlsRight.forEach( function( el ) { el.removeEventListener( eventName, onNavigateRightClicked, false ); } );
				dom.controlsUp.forEach( function( el ) { el.removeEventListener( eventName, onNavigateUpClicked, false ); } );
				dom.controlsDown.forEach( function( el ) { el.removeEventListener( eventName, onNavigateDownClicked, false ); } );
				dom.controlsPrev.forEach( function( el ) { el.removeEventListener( eventName, onNavigatePrevClicked, false ); } );
				dom.controlsNext.forEach( function( el ) { el.removeEventListener( eventName, onNavigateNextClicked, false ); } );
			} );

		}

		/**
		 * Extend object a with the properties of object b.
		 * If there's a conflict, object b takes precedence.
		 */
		function extend( a, b ) {

			for( var i in b ) {
				a[ i ] = b[ i ];
			}

		}

		/**
		 * Converts the target object to an array.
		 */
		function toArray( o ) {

			return Array.prototype.slice.call( o );

		}

		/**
		 * Measures the distance in pixels between point a
		 * and point b.
		 *
		 * @param {Object} a point with x/y properties
		 * @param {Object} b point with x/y properties
		 */
		function distanceBetween( a, b ) {

			var dx = a.x - b.x,
				dy = a.y - b.y;

			return Math.sqrt( dx*dx + dy*dy );

		}

		/**
		 * Applies a CSS transform to the target element.
		 */
		function transformElement( element, transform ) {

			element.style.WebkitTransform = transform;
			element.style.MozTransform = transform;
			element.style.msTransform = transform;
			element.style.OTransform = transform;
			element.style.transform = transform;

		}

		/**
		 * Retrieves the height of the given element by looking
		 * at the position and height of its immediate children.
		 */
		function getAbsoluteHeight( element ) {

			var height = 0;

			if( element ) {
				var absoluteChildren = 0;

				toArray( element.childNodes ).forEach( function( child ) {

					if( typeof child.offsetTop === 'number' && child.style ) {
						// Count # of abs children
						if( child.style.position === 'absolute' ) {
							absoluteChildren += 1;
						}

						height = Math.max( height, child.offsetTop + child.offsetHeight );
					}

				} );

				// If there are no absolute children, use offsetHeight
				if( absoluteChildren === 0 ) {
					height = element.offsetHeight;
				}

			}

			return height;

		}

		/**
		 * Returns the remaining height within the parent of the
		 * target element after subtracting the height of all
		 * siblings.
		 *
		 * remaining height = [parent height] - [ siblings height]
		 */
		function getRemainingHeight( element, height ) {

			height = height || 0;

			if( element ) {
				var parent = element.parentNode;
				var siblings = parent.childNodes;

				// Subtract the height of each sibling
				toArray( siblings ).forEach( function( sibling ) {

					if( typeof sibling.offsetHeight === 'number' && sibling !== element ) {

						var styles = window.getComputedStyle( sibling ),
							marginTop = parseInt( styles.marginTop, 10 ),
							marginBottom = parseInt( styles.marginBottom, 10 );

						height -= sibling.offsetHeight + marginTop + marginBottom;

					}

				} );

				var elementStyles = window.getComputedStyle( element );

				// Subtract the margins of the target element
				height -= parseInt( elementStyles.marginTop, 10 ) +
							parseInt( elementStyles.marginBottom, 10 );

			}

			return height;

		}

		/**
		 * Checks if this instance is being used to print a PDF.
		 */
		function isPrintingPDF() {

			return ( /print-pdf/gi ).test( window.location.search );

		}

		/**
		 * Hides the address bar if we're on a mobile device.
		 */
		function hideAddressBar() {

			if( config.hideAddressBar && isMobileDevice ) {
				// Events that should trigger the address bar to hide
				window.addEventListener( 'load', removeAddressBar, false );
				window.addEventListener( 'orientationchange', removeAddressBar, false );
			}

		}

		/**
		 * Causes the address bar to hide on mobile devices,
		 * more vertical space ftw.
		 */
		function removeAddressBar() {

			setTimeout( function() {
				window.scrollTo( 0, 1 );
			}, 10 );

		}

		/**
		 * Dispatches an event of the specified type from the
		 * reveal DOM element.
		 */
		function dispatchEvent( type, properties ) {

			var event = document.createEvent( "HTMLEvents", 1, 2 );
			event.initEvent( type, true, true );
			extend( event, properties );
			dom.wrapper.dispatchEvent( event );

		}

		/**
		 * Wrap all links in 3D goodness.
		 */
		function enableRollingLinks() {

			if( features.transforms3d && !( 'msPerspective' in document.body.style ) ) {
				var anchors = document.querySelectorAll( SLIDES_SELECTOR + ' a:not(.image)' );

				for( var i = 0, len = anchors.length; i < len; i++ ) {
					var anchor = anchors[i];

					if( anchor.textContent && !anchor.querySelector( '*' ) && ( !anchor.className || !anchor.classList.contains( anchor, 'roll' ) ) ) {
						var span = document.createElement('span');
						span.setAttribute('data-title', anchor.text);
						span.innerHTML = anchor.innerHTML;

						anchor.classList.add( 'roll' );
						anchor.innerHTML = '';
						anchor.appendChild(span);
					}
				}
			}

		}

		/**
		 * Unwrap all 3D links.
		 */
		function disableRollingLinks() {

			var anchors = document.querySelectorAll( SLIDES_SELECTOR + ' a.roll' );

			for( var i = 0, len = anchors.length; i < len; i++ ) {
				var anchor = anchors[i];
				var span = anchor.querySelector( 'span' );

				if( span ) {
					anchor.classList.remove( 'roll' );
					anchor.innerHTML = span.innerHTML;
				}
			}

		}

		/**
		 * Bind preview frame links.
		 */
		function enablePreviewLinks( selector ) {

			var anchors = toArray( document.querySelectorAll( selector ? selector : 'a' ) );

			anchors.forEach( function( element ) {
				if( /^(http|www)/gi.test( element.getAttribute( 'href' ) ) ) {
					element.addEventListener( 'click', onPreviewLinkClicked, false );
				}
			} );

		}

		/**
		 * Unbind preview frame links.
		 */
		function disablePreviewLinks() {

			var anchors = toArray( document.querySelectorAll( 'a' ) );

			anchors.forEach( function( element ) {
				if( /^(http|www)/gi.test( element.getAttribute( 'href' ) ) ) {
					element.removeEventListener( 'click', onPreviewLinkClicked, false );
				}
			} );

		}

		/**
		 * Opens a preview window for the target URL.
		 */
		function openPreview( url ) {

			closePreview();

			dom.preview = document.createElement( 'div' );
			dom.preview.classList.add( 'preview-link-overlay' );
			dom.wrapper.appendChild( dom.preview );

			dom.preview.innerHTML = [
				'<header>',
					'<a class="close" href="#"><span class="icon"></span></a>',
					'<a class="external" href="'+ url +'" target="_blank"><span class="icon"></span></a>',
				'</header>',
				'<div class="spinner"></div>',
				'<div class="viewport">',
					'<iframe src="'+ url +'"></iframe>',
				'</div>'
			].join('');

			dom.preview.querySelector( 'iframe' ).addEventListener( 'load', function( event ) {
				dom.preview.classList.add( 'loaded' );
			}, false );

			dom.preview.querySelector( '.close' ).addEventListener( 'click', function( event ) {
				closePreview();
				event.preventDefault();
			}, false );

			dom.preview.querySelector( '.external' ).addEventListener( 'click', function( event ) {
				closePreview();
			}, false );

			setTimeout( function() {
				dom.preview.classList.add( 'visible' );
			}, 1 );

		}

		/**
		 * Closes the iframe preview window.
		 */
		function closePreview() {

			if( dom.preview ) {
				dom.preview.setAttribute( 'src', '' );
				dom.preview.parentNode.removeChild( dom.preview );
				dom.preview = null;
			}

		}

		/**
		 * Applies JavaScript-controlled layout rules to the
		 * presentation.
		 */
		function layout() {

			if( dom.wrapper && !isPrintingPDF() ) {

				// Available space to scale within
				var availableWidth = dom.wrapper.offsetWidth,
					availableHeight = dom.wrapper.offsetHeight;

				// Reduce available space by margin
				availableWidth -= ( availableHeight * config.margin );
				availableHeight -= ( availableHeight * config.margin );

				// Dimensions of the content
				var slideWidth = config.width,
					slideHeight = config.height,
					slidePadding = 20; // TODO Dig this out of DOM

				// Layout the contents of the slides
				layoutSlideContents( config.width, config.height, slidePadding );

				// Slide width may be a percentage of available width
				if( typeof slideWidth === 'string' && /%$/.test( slideWidth ) ) {
					slideWidth = parseInt( slideWidth, 10 ) / 100 * availableWidth;
				}

				// Slide height may be a percentage of available height
				if( typeof slideHeight === 'string' && /%$/.test( slideHeight ) ) {
					slideHeight = parseInt( slideHeight, 10 ) / 100 * availableHeight;
				}

				dom.slides.style.width = slideWidth + 'px';
				dom.slides.style.height = slideHeight + 'px';

				// Determine scale of content to fit within available space
				scale = Math.min( availableWidth / slideWidth, availableHeight / slideHeight );

				// Respect max/min scale settings
				scale = Math.max( scale, config.minScale );
				scale = Math.min( scale, config.maxScale );

				// Prefer applying scale via zoom since Chrome blurs scaled content
				// with nested transforms
				if( typeof dom.slides.style.zoom !== 'undefined' && !navigator.userAgent.match( /(iphone|ipod|ipad|android)/gi ) ) {
					dom.slides.style.zoom = scale;
				}
				// Apply scale transform as a fallback
				else {
					transformElement( dom.slides, 'translate(-50%, -50%) scale('+ scale +') translate(50%, 50%)' );
				}

				// Select all slides, vertical and horizontal
				var slides = toArray( document.querySelectorAll( SLIDES_SELECTOR ) );

				for( var i = 0, len = slides.length; i < len; i++ ) {
					var slide = slides[ i ];

					// Don't bother updating invisible slides
					if( slide.style.display === 'none' ) {
						continue;
					}

					if( config.center || slide.classList.contains( 'center' ) ) {
						// Vertical stacks are not centred since their section
						// children will be
						if( slide.classList.contains( 'stack' ) ) {
							slide.style.top = 0;
						}
						else {
							slide.style.top = Math.max( - ( getAbsoluteHeight( slide ) / 2 ) - slidePadding, -slideHeight / 2 ) + 'px';
						}
					}
					else {
						slide.style.top = '';
					}

				}

				updateProgress();
				updateParallax();

			}

		}

		/**
		 * Applies layout logic to the contents of all slides in
		 * the presentation.
		 */
		function layoutSlideContents( width, height, padding ) {

			// Handle sizing of elements with the 'stretch' class
			toArray( dom.slides.querySelectorAll( 'section > .stretch' ) ).forEach( function( element ) {

				// Determine how much vertical space we can use
				var remainingHeight = getRemainingHeight( element, ( height - ( padding * 2 ) ) );

				// Consider the aspect ratio of media elements
				if( /(img|video)/gi.test( element.nodeName ) ) {
					var nw = element.naturalWidth || element.videoWidth,
						nh = element.naturalHeight || element.videoHeight;

					var es = Math.min( width / nw, remainingHeight / nh );

					element.style.width = ( nw * es ) + 'px';
					element.style.height = ( nh * es ) + 'px';

				}
				else {
					element.style.width = width + 'px';
					element.style.height = remainingHeight + 'px';
				}

			} );

		}

		/**
		 * Stores the vertical index of a stack so that the same
		 * vertical slide can be selected when navigating to and
		 * from the stack.
		 *
		 * @param {HTMLElement} stack The vertical stack element
		 * @param {int} v Index to memorize
		 */
		function setPreviousVerticalIndex( stack, v ) {

			if( typeof stack === 'object' && typeof stack.setAttribute === 'function' ) {
				stack.setAttribute( 'data-previous-indexv', v || 0 );
			}

		}

		/**
		 * Retrieves the vertical index which was stored using
		 * #setPreviousVerticalIndex() or 0 if no previous index
		 * exists.
		 *
		 * @param {HTMLElement} stack The vertical stack element
		 */
		function getPreviousVerticalIndex( stack ) {

			if( typeof stack === 'object' && typeof stack.setAttribute === 'function' && stack.classList.contains( 'stack' ) ) {
				// Prefer manually defined start-indexv
				var attributeName = stack.hasAttribute( 'data-start-indexv' ) ? 'data-start-indexv' : 'data-previous-indexv';

				return parseInt( stack.getAttribute( attributeName ) || 0, 10 );
			}

			return 0;

		}

		/**
		 * Displays the overview of slides (quick nav) by
		 * scaling down and arranging all slide elements.
		 *
		 * Experimental feature, might be dropped if perf
		 * can't be improved.
		 */
		function activateOverview() {

			// Only proceed if enabled in config
			if( config.overview ) {

				// Don't auto-slide while in overview mode
				cancelAutoSlide();

				var wasActive = dom.wrapper.classList.contains( 'overview' );

				// Vary the depth of the overview based on screen size
				var depth = window.innerWidth < 400 ? 1000 : 2500;

				dom.wrapper.classList.add( 'overview' );
				dom.wrapper.classList.remove( 'overview-deactivating' );

				clearTimeout( activateOverviewTimeout );
				clearTimeout( deactivateOverviewTimeout );

				// Not the pretties solution, but need to let the overview
				// class apply first so that slides are measured accurately
				// before we can position them
				activateOverviewTimeout = setTimeout( function() {

					var horizontalSlides = document.querySelectorAll( HORIZONTAL_SLIDES_SELECTOR );

					for( var i = 0, len1 = horizontalSlides.length; i < len1; i++ ) {
						var hslide = horizontalSlides[i],
							hoffset = config.rtl ? -105 : 105;

						hslide.setAttribute( 'data-index-h', i );

						// Apply CSS transform
						transformElement( hslide, 'translateZ(-'+ depth +'px) translate(' + ( ( i - indexh ) * hoffset ) + '%, 0%)' );

						if( hslide.classList.contains( 'stack' ) ) {

							var verticalSlides = hslide.querySelectorAll( 'section' );

							for( var j = 0, len2 = verticalSlides.length; j < len2; j++ ) {
								var verticalIndex = i === indexh ? indexv : getPreviousVerticalIndex( hslide );

								var vslide = verticalSlides[j];

								vslide.setAttribute( 'data-index-h', i );
								vslide.setAttribute( 'data-index-v', j );

								// Apply CSS transform
								transformElement( vslide, 'translate(0%, ' + ( ( j - verticalIndex ) * 105 ) + '%)' );

								// Navigate to this slide on click
								vslide.addEventListener( 'click', onOverviewSlideClicked, true );
							}

						}
						else {

							// Navigate to this slide on click
							hslide.addEventListener( 'click', onOverviewSlideClicked, true );

						}
					}

					updateSlidesVisibility();

					layout();

					if( !wasActive ) {
						// Notify observers of the overview showing
						dispatchEvent( 'overviewshown', {
							'indexh': indexh,
							'indexv': indexv,
							'currentSlide': currentSlide
						} );
					}

				}, 10 );

			}

		}

		/**
		 * Exits the slide overview and enters the currently
		 * active slide.
		 */
		function deactivateOverview() {

			// Only proceed if enabled in config
			if( config.overview ) {

				clearTimeout( activateOverviewTimeout );
				clearTimeout( deactivateOverviewTimeout );

				dom.wrapper.classList.remove( 'overview' );

				// Temporarily add a class so that transitions can do different things
				// depending on whether they are exiting/entering overview, or just
				// moving from slide to slide
				dom.wrapper.classList.add( 'overview-deactivating' );

				deactivateOverviewTimeout = setTimeout( function () {
					dom.wrapper.classList.remove( 'overview-deactivating' );
				}, 1 );

				// Select all slides
				toArray( document.querySelectorAll( SLIDES_SELECTOR ) ).forEach( function( slide ) {
					// Resets all transforms to use the external styles
					transformElement( slide, '' );

					slide.removeEventListener( 'click', onOverviewSlideClicked, true );
				} );

				slide( indexh, indexv );

				cueAutoSlide();

				// Notify observers of the overview hiding
				dispatchEvent( 'overviewhidden', {
					'indexh': indexh,
					'indexv': indexv,
					'currentSlide': currentSlide
				} );

			}
		}

		/**
		 * Toggles the slide overview mode on and off.
		 *
		 * @param {Boolean} override Optional flag which overrides the
		 * toggle logic and forcibly sets the desired state. True means
		 * overview is open, false means it's closed.
		 */
		function toggleOverview( override ) {

			if( typeof override === 'boolean' ) {
				override ? activateOverview() : deactivateOverview();
			}
			else {
				isOverview() ? deactivateOverview() : activateOverview();
			}

		}

		/**
		 * Checks if the overview is currently active.
		 *
		 * @return {Boolean} true if the overview is active,
		 * false otherwise
		 */
		function isOverview() {

			return dom.wrapper.classList.contains( 'overview' );

		}

		/**
		 * Checks if the current or specified slide is vertical
		 * (nested within another slide).
		 *
		 * @param {HTMLElement} slide [optional] The slide to check
		 * orientation of
		 */
		function isVerticalSlide( slide ) {

			// Prefer slide argument, otherwise use current slide
			slide = slide ? slide : currentSlide;

			return slide && slide.parentNode && !!slide.parentNode.nodeName.match( /section/i );

		}

		/**
		 * Handling the fullscreen functionality via the fullscreen API
		 *
		 * @see http://fullscreen.spec.whatwg.org/
		 * @see https://developer.mozilla.org/en-US/docs/DOM/Using_fullscreen_mode
		 */
		function enterFullscreen() {

			var element = document.body;

			// Check which implementation is available
			var requestMethod = element.requestFullScreen ||
								element.webkitRequestFullscreen ||
								element.webkitRequestFullScreen ||
								element.mozRequestFullScreen ||
								element.msRequestFullScreen;

			if( requestMethod ) {
				requestMethod.apply( element );
			}

		}

		/**
		 * Enters the paused mode which fades everything on screen to
		 * black.
		 */
		function pause() {

			var wasPaused = dom.wrapper.classList.contains( 'paused' );

			cancelAutoSlide();
			dom.wrapper.classList.add( 'paused' );

			if( wasPaused === false ) {
				dispatchEvent( 'paused' );
			}

		}

		/**
		 * Exits from the paused mode.
		 */
		function resume() {

			var wasPaused = dom.wrapper.classList.contains( 'paused' );
			dom.wrapper.classList.remove( 'paused' );

			cueAutoSlide();

			if( wasPaused ) {
				dispatchEvent( 'resumed' );
			}

		}

		/**
		 * Toggles the paused mode on and off.
		 */
		function togglePause() {

			if( isPaused() ) {
				resume();
			}
			else {
				pause();
			}

		}

		/**
		 * Checks if we are currently in the paused mode.
		 */
		function isPaused() {

			return dom.wrapper.classList.contains( 'paused' );

		}

		/**
		 * Steps from the current point in the presentation to the
		 * slide which matches the specified horizontal and vertical
		 * indices.
		 *
		 * @param {int} h Horizontal index of the target slide
		 * @param {int} v Vertical index of the target slide
		 * @param {int} f Optional index of a fragment within the
		 * target slide to activate
		 * @param {int} o Optional origin for use in multimaster environments
		 */
		function slide( h, v, f, o ) {

			// Remember where we were at before
			previousSlide = currentSlide;

			// Query all horizontal slides in the deck
			var horizontalSlides = document.querySelectorAll( HORIZONTAL_SLIDES_SELECTOR );

			// If no vertical index is specified and the upcoming slide is a
			// stack, resume at its previous vertical index
			if( v === undefined ) {
				v = getPreviousVerticalIndex( horizontalSlides[ h ] );
			}

			// If we were on a vertical stack, remember what vertical index
			// it was on so we can resume at the same position when returning
			if( previousSlide && previousSlide.parentNode && previousSlide.parentNode.classList.contains( 'stack' ) ) {
				setPreviousVerticalIndex( previousSlide.parentNode, indexv );
			}

			// Remember the state before this slide
			var stateBefore = state.concat();

			// Reset the state array
			state.length = 0;

			var indexhBefore = indexh || 0,
				indexvBefore = indexv || 0;

			// Activate and transition to the new slide
			indexh = updateSlides( HORIZONTAL_SLIDES_SELECTOR, h === undefined ? indexh : h );
			indexv = updateSlides( VERTICAL_SLIDES_SELECTOR, v === undefined ? indexv : v );

			// Update the visibility of slides now that the indices have changed
			updateSlidesVisibility();

			layout();

			// Apply the new state
			stateLoop: for( var i = 0, len = state.length; i < len; i++ ) {
				// Check if this state existed on the previous slide. If it
				// did, we will avoid adding it repeatedly
				for( var j = 0; j < stateBefore.length; j++ ) {
					if( stateBefore[j] === state[i] ) {
						stateBefore.splice( j, 1 );
						continue stateLoop;
					}
				}

				document.documentElement.classList.add( state[i] );

				// Dispatch custom event matching the state's name
				dispatchEvent( state[i] );
			}

			// Clean up the remains of the previous state
			while( stateBefore.length ) {
				document.documentElement.classList.remove( stateBefore.pop() );
			}

			// If the overview is active, re-activate it to update positions
			if( isOverview() ) {
				activateOverview();
			}

			// Find the current horizontal slide and any possible vertical slides
			// within it
			var currentHorizontalSlide = horizontalSlides[ indexh ],
				currentVerticalSlides = currentHorizontalSlide.querySelectorAll( 'section' );

			// Store references to the previous and current slides
			currentSlide = currentVerticalSlides[ indexv ] || currentHorizontalSlide;

			// Show fragment, if specified
			if( typeof f !== 'undefined' ) {
				navigateFragment( f );
			}

			// Dispatch an event if the slide changed
			var slideChanged = ( indexh !== indexhBefore || indexv !== indexvBefore );
			if( slideChanged ) {
				dispatchEvent( 'slidechanged', {
					'indexh': indexh,
					'indexv': indexv,
					'previousSlide': previousSlide,
					'currentSlide': currentSlide,
					'origin': o
				} );
			}
			else {
				// Ensure that the previous slide is never the same as the current
				previousSlide = null;
			}

			// Solves an edge case where the previous slide maintains the
			// 'present' class when navigating between adjacent vertical
			// stacks
			if( previousSlide ) {
				previousSlide.classList.remove( 'present' );

				// Reset all slides upon navigate to home
				// Issue: #285
				if ( document.querySelector( HOME_SLIDE_SELECTOR ).classList.contains( 'present' ) ) {
					// Launch async task
					setTimeout( function () {
						var slides = toArray( document.querySelectorAll( HORIZONTAL_SLIDES_SELECTOR + '.stack') ), i;
						for( i in slides ) {
							if( slides[i] ) {
								// Reset stack
								setPreviousVerticalIndex( slides[i], 0 );
							}
						}
					}, 0 );
				}
			}

			// Handle embedded content
			if( slideChanged ) {
				stopEmbeddedContent( previousSlide );
				startEmbeddedContent( currentSlide );
			}

			updateControls();
			updateProgress();
			updateBackground();
			updateParallax();
			updateSlideNumber();

			// Update the URL hash
			writeURL();

			cueAutoSlide();

		}

		/**
		 * Syncs the presentation with the current DOM. Useful
		 * when new slides or control elements are added or when
		 * the configuration has changed.
		 */
		function sync() {

			// Subscribe to input
			removeEventListeners();
			addEventListeners();

			// Force a layout to make sure the current config is accounted for
			layout();

			// Reflect the current autoSlide value
			autoSlide = config.autoSlide;

			// Start auto-sliding if it's enabled
			cueAutoSlide();

			// Re-create the slide backgrounds
			createBackgrounds();

			sortAllFragments();

			updateControls();
			updateProgress();
			updateBackground( true );
			updateSlideNumber();

		}

		/**
		 * Resets all vertical slides so that only the first
		 * is visible.
		 */
		function resetVerticalSlides() {

			var horizontalSlides = toArray( document.querySelectorAll( HORIZONTAL_SLIDES_SELECTOR ) );
			horizontalSlides.forEach( function( horizontalSlide ) {

				var verticalSlides = toArray( horizontalSlide.querySelectorAll( 'section' ) );
				verticalSlides.forEach( function( verticalSlide, y ) {

					if( y > 0 ) {
						verticalSlide.classList.remove( 'present' );
						verticalSlide.classList.remove( 'past' );
						verticalSlide.classList.add( 'future' );
					}

				} );

			} );

		}

		/**
		 * Sorts and formats all of fragments in the
		 * presentation.
		 */
		function sortAllFragments() {

			var horizontalSlides = toArray( document.querySelectorAll( HORIZONTAL_SLIDES_SELECTOR ) );
			horizontalSlides.forEach( function( horizontalSlide ) {

				var verticalSlides = toArray( horizontalSlide.querySelectorAll( 'section' ) );
				verticalSlides.forEach( function( verticalSlide, y ) {

					sortFragments( verticalSlide.querySelectorAll( '.fragment' ) );

				} );

				if( verticalSlides.length === 0 ) sortFragments( horizontalSlide.querySelectorAll( '.fragment' ) );

			} );

		}

		/**
		 * Updates one dimension of slides by showing the slide
		 * with the specified index.
		 *
		 * @param {String} selector A CSS selector that will fetch
		 * the group of slides we are working with
		 * @param {Number} index The index of the slide that should be
		 * shown
		 *
		 * @return {Number} The index of the slide that is now shown,
		 * might differ from the passed in index if it was out of
		 * bounds.
		 */
		function updateSlides( selector, index ) {

			// Select all slides and convert the NodeList result to
			// an array
			var slides = toArray( document.querySelectorAll( selector ) ),
				slidesLength = slides.length;

			if( slidesLength ) {

				// Should the index loop?
				if( config.loop ) {
					index %= slidesLength;

					if( index < 0 ) {
						index = slidesLength + index;
					}
				}

				// Enforce max and minimum index bounds
				index = Math.max( Math.min( index, slidesLength - 1 ), 0 );

				for( var i = 0; i < slidesLength; i++ ) {
					var element = slides[i];

					var reverse = config.rtl && !isVerticalSlide( element );

					element.classList.remove( 'past' );
					element.classList.remove( 'present' );
					element.classList.remove( 'future' );

					// http://www.w3.org/html/wg/drafts/html/master/editing.html#the-hidden-attribute
					element.setAttribute( 'hidden', '' );

					if( i < index ) {
						// Any element previous to index is given the 'past' class
						element.classList.add( reverse ? 'future' : 'past' );

						var pastFragments = toArray( element.querySelectorAll( '.fragment' ) );

						// Show all fragments on prior slides
						while( pastFragments.length ) {
							var pastFragment = pastFragments.pop();
							pastFragment.classList.add( 'visible' );
							pastFragment.classList.remove( 'current-fragment' );
						}
					}
					else if( i > index ) {
						// Any element subsequent to index is given the 'future' class
						element.classList.add( reverse ? 'past' : 'future' );

						var futureFragments = toArray( element.querySelectorAll( '.fragment.visible' ) );

						// No fragments in future slides should be visible ahead of time
						while( futureFragments.length ) {
							var futureFragment = futureFragments.pop();
							futureFragment.classList.remove( 'visible' );
							futureFragment.classList.remove( 'current-fragment' );
						}
					}

					// If this element contains vertical slides
					if( element.querySelector( 'section' ) ) {
						element.classList.add( 'stack' );
					}
				}

				// Mark the current slide as present
				slides[index].classList.add( 'present' );
				slides[index].removeAttribute( 'hidden' );

				// If this slide has a state associated with it, add it
				// onto the current state of the deck
				var slideState = slides[index].getAttribute( 'data-state' );
				if( slideState ) {
					state = state.concat( slideState.split( ' ' ) );
				}

			}
			else {
				// Since there are no slides we can't be anywhere beyond the
				// zeroth index
				index = 0;
			}

			return index;

		}

		/**
		 * Optimization method; hide all slides that are far away
		 * from the present slide.
		 */
		function updateSlidesVisibility() {

			// Select all slides and convert the NodeList result to
			// an array
			var horizontalSlides = toArray( document.querySelectorAll( HORIZONTAL_SLIDES_SELECTOR ) ),
				horizontalSlidesLength = horizontalSlides.length,
				distanceX,
				distanceY;

			if( horizontalSlidesLength ) {

				// The number of steps away from the present slide that will
				// be visible
				var viewDistance = isOverview() ? 10 : config.viewDistance;

				// Limit view distance on weaker devices
				if( isMobileDevice ) {
					viewDistance = isOverview() ? 6 : 1;
				}

				for( var x = 0; x < horizontalSlidesLength; x++ ) {
					var horizontalSlide = horizontalSlides[x];

					var verticalSlides = toArray( horizontalSlide.querySelectorAll( 'section' ) ),
						verticalSlidesLength = verticalSlides.length;

					// Loops so that it measures 1 between the first and last slides
					distanceX = Math.abs( ( indexh - x ) % ( horizontalSlidesLength - viewDistance ) ) || 0;

					// Show the horizontal slide if it's within the view distance
					horizontalSlide.style.display = distanceX > viewDistance ? 'none' : 'block';

					if( verticalSlidesLength ) {

						var oy = getPreviousVerticalIndex( horizontalSlide );

						for( var y = 0; y < verticalSlidesLength; y++ ) {
							var verticalSlide = verticalSlides[y];

							distanceY = x === indexh ? Math.abs( indexv - y ) : Math.abs( y - oy );

							verticalSlide.style.display = ( distanceX + distanceY ) > viewDistance ? 'none' : 'block';
						}

					}
				}

			}

		}

		/**
		 * Updates the progress bar to reflect the current slide.
		 */
		function updateProgress() {

			// Update progress if enabled
			if( config.progress && dom.progress ) {

				var horizontalSlides = toArray( document.querySelectorAll( HORIZONTAL_SLIDES_SELECTOR ) );

				// The number of past and total slides
				var totalCount = document.querySelectorAll( SLIDES_SELECTOR + ':not(.stack)' ).length;
				var pastCount = 0;

				// Step through all slides and count the past ones
				mainLoop: for( var i = 0; i < horizontalSlides.length; i++ ) {

					var horizontalSlide = horizontalSlides[i];
					var verticalSlides = toArray( horizontalSlide.querySelectorAll( 'section' ) );

					for( var j = 0; j < verticalSlides.length; j++ ) {

						// Stop as soon as we arrive at the present
						if( verticalSlides[j].classList.contains( 'present' ) ) {
							break mainLoop;
						}

						pastCount++;

					}

					// Stop as soon as we arrive at the present
					if( horizontalSlide.classList.contains( 'present' ) ) {
						break;
					}

					// Don't count the wrapping section for vertical slides
					if( horizontalSlide.classList.contains( 'stack' ) === false ) {
						pastCount++;
					}

				}

				dom.progressbar.style.width = ( pastCount / ( totalCount - 1 ) ) * window.innerWidth + 'px';

			}

		}

		/**
		 * Updates the slide number div to reflect the current slide.
		 */
		function updateSlideNumber() {

			// Update slide number if enabled
			if( config.slideNumber && dom.slideNumber) {

				// Display the number of the page using 'indexh - indexv' format
				var indexString = indexh;
				if( indexv > 0 ) {
					indexString += ' - ' + indexv;
				}

				dom.slideNumber.innerHTML = indexString;
			}

		}

		/**
		 * Updates the state of all control/navigation arrows.
		 */
		function updateControls() {

			var routes = availableRoutes();
			var fragments = availableFragments();

			// Remove the 'enabled' class from all directions
			dom.controlsLeft.concat( dom.controlsRight )
							.concat( dom.controlsUp )
							.concat( dom.controlsDown )
							.concat( dom.controlsPrev )
							.concat( dom.controlsNext ).forEach( function( node ) {
				node.classList.remove( 'enabled' );
				node.classList.remove( 'fragmented' );
			} );

			// Add the 'enabled' class to the available routes
			if( routes.left ) dom.controlsLeft.forEach( function( el ) { el.classList.add( 'enabled' );	} );
			if( routes.right ) dom.controlsRight.forEach( function( el ) { el.classList.add( 'enabled' ); } );
			if( routes.up ) dom.controlsUp.forEach( function( el ) { el.classList.add( 'enabled' );	} );
			if( routes.down ) dom.controlsDown.forEach( function( el ) { el.classList.add( 'enabled' ); } );

			// Prev/next buttons
			if( routes.left || routes.up ) dom.controlsPrev.forEach( function( el ) { el.classList.add( 'enabled' ); } );
			if( routes.right || routes.down ) dom.controlsNext.forEach( function( el ) { el.classList.add( 'enabled' ); } );

			// Highlight fragment directions
			if( currentSlide ) {

				// Always apply fragment decorator to prev/next buttons
				if( fragments.prev ) dom.controlsPrev.forEach( function( el ) { el.classList.add( 'fragmented', 'enabled' ); } );
				if( fragments.next ) dom.controlsNext.forEach( function( el ) { el.classList.add( 'fragmented', 'enabled' ); } );

				// Apply fragment decorators to directional buttons based on
				// what slide axis they are in
				if( isVerticalSlide( currentSlide ) ) {
					if( fragments.prev ) dom.controlsUp.forEach( function( el ) { el.classList.add( 'fragmented', 'enabled' ); } );
					if( fragments.next ) dom.controlsDown.forEach( function( el ) { el.classList.add( 'fragmented', 'enabled' ); } );
				}
				else {
					if( fragments.prev ) dom.controlsLeft.forEach( function( el ) { el.classList.add( 'fragmented', 'enabled' ); } );
					if( fragments.next ) dom.controlsRight.forEach( function( el ) { el.classList.add( 'fragmented', 'enabled' ); } );
				}

			}

		}

		/**
		 * Updates the background elements to reflect the current
		 * slide.
		 *
		 * @param {Boolean} includeAll If true, the backgrounds of
		 * all vertical slides (not just the present) will be updated.
		 */
		function updateBackground( includeAll ) {

			var currentBackground = null;

			// Reverse past/future classes when in RTL mode
			var horizontalPast = config.rtl ? 'future' : 'past',
				horizontalFuture = config.rtl ? 'past' : 'future';

			// Update the classes of all backgrounds to match the
			// states of their slides (past/present/future)
			toArray( dom.background.childNodes ).forEach( function( backgroundh, h ) {

				if( h < indexh ) {
					backgroundh.className = 'slide-background ' + horizontalPast;
				}
				else if ( h > indexh ) {
					backgroundh.className = 'slide-background ' + horizontalFuture;
				}
				else {
					backgroundh.className = 'slide-background present';

					// Store a reference to the current background element
					currentBackground = backgroundh;
				}

				if( includeAll || h === indexh ) {
					toArray( backgroundh.childNodes ).forEach( function( backgroundv, v ) {

						if( v < indexv ) {
							backgroundv.className = 'slide-background past';
						}
						else if ( v > indexv ) {
							backgroundv.className = 'slide-background future';
						}
						else {
							backgroundv.className = 'slide-background present';

							// Only if this is the present horizontal and vertical slide
							if( h === indexh ) currentBackground = backgroundv;
						}

					} );
				}

			} );

			// Don't transition between identical backgrounds. This
			// prevents unwanted flicker.
			if( currentBackground ) {
				var previousBackgroundHash = previousBackground ? previousBackground.getAttribute( 'data-background-hash' ) : null;
				var currentBackgroundHash = currentBackground.getAttribute( 'data-background-hash' );
				if( currentBackgroundHash && currentBackgroundHash === previousBackgroundHash && currentBackground !== previousBackground ) {
					dom.background.classList.add( 'no-transition' );
				}

				previousBackground = currentBackground;
			}

			// Allow the first background to apply without transition
			setTimeout( function() {
				dom.background.classList.remove( 'no-transition' );
			}, 1 );

		}

		/**
		 * Updates the position of the parallax background based
		 * on the current slide index.
		 */
		function updateParallax() {

			if( config.parallaxBackgroundImage ) {

				var horizontalSlides = document.querySelectorAll( HORIZONTAL_SLIDES_SELECTOR ),
					verticalSlides = document.querySelectorAll( VERTICAL_SLIDES_SELECTOR );

				var backgroundSize = dom.background.style.backgroundSize.split( ' ' ),
					backgroundWidth, backgroundHeight;

				if( backgroundSize.length === 1 ) {
					backgroundWidth = backgroundHeight = parseInt( backgroundSize[0], 10 );
				}
				else {
					backgroundWidth = parseInt( backgroundSize[0], 10 );
					backgroundHeight = parseInt( backgroundSize[1], 10 );
				}

				var slideWidth = dom.background.offsetWidth;
				var horizontalSlideCount = horizontalSlides.length;
				var horizontalOffset = -( backgroundWidth - slideWidth ) / ( horizontalSlideCount-1 ) * indexh;

				var slideHeight = dom.background.offsetHeight;
				var verticalSlideCount = verticalSlides.length;
				var verticalOffset = verticalSlideCount > 0 ? -( backgroundHeight - slideHeight ) / ( verticalSlideCount-1 ) * indexv : 0;

				dom.background.style.backgroundPosition = horizontalOffset + 'px ' + verticalOffset + 'px';

			}

		}

		/**
		 * Determine what available routes there are for navigation.
		 *
		 * @return {Object} containing four booleans: left/right/up/down
		 */
		function availableRoutes() {

			var horizontalSlides = document.querySelectorAll( HORIZONTAL_SLIDES_SELECTOR ),
				verticalSlides = document.querySelectorAll( VERTICAL_SLIDES_SELECTOR );

			var routes = {
				left: indexh > 0 || config.loop,
				right: indexh < horizontalSlides.length - 1 || config.loop,
				up: indexv > 0,
				down: indexv < verticalSlides.length - 1
			};

			// reverse horizontal controls for rtl
			if( config.rtl ) {
				var left = routes.left;
				routes.left = routes.right;
				routes.right = left;
			}

			return routes;

		}

		/**
		 * Returns an object describing the available fragment
		 * directions.
		 *
		 * @return {Object} two boolean properties: prev/next
		 */
		function availableFragments() {

			if( currentSlide && config.fragments ) {
				var fragments = currentSlide.querySelectorAll( '.fragment' );
				var hiddenFragments = currentSlide.querySelectorAll( '.fragment:not(.visible)' );

				return {
					prev: fragments.length - hiddenFragments.length > 0,
					next: !!hiddenFragments.length
				};
			}
			else {
				return { prev: false, next: false };
			}

		}

		/**
		 * Start playback of any embedded content inside of
		 * the targeted slide.
		 */
		function startEmbeddedContent( slide ) {

			if( slide && !isSpeakerNotes() ) {
				// HTML5 media elements
				toArray( slide.querySelectorAll( 'video, audio' ) ).forEach( function( el ) {
					if( el.hasAttribute( 'data-autoplay' ) ) {
						el.play();
					}
				} );

				// iframe embeds
				toArray( slide.querySelectorAll( 'iframe' ) ).forEach( function( el ) {
					el.contentWindow.postMessage( 'slide:start', '*' );
				});

				// YouTube embeds
				toArray( slide.querySelectorAll( 'iframe[src*="youtube.com/embed/"]' ) ).forEach( function( el ) {
					if( el.hasAttribute( 'data-autoplay' ) ) {
						el.contentWindow.postMessage( '{"event":"command","func":"playVideo","args":""}', '*' );
					}
				});
			}

		}

		/**
		 * Stop playback of any embedded content inside of
		 * the targeted slide.
		 */
		function stopEmbeddedContent( slide ) {

			if( slide ) {
				// HTML5 media elements
				toArray( slide.querySelectorAll( 'video, audio' ) ).forEach( function( el ) {
					if( !el.hasAttribute( 'data-ignore' ) ) {
						el.pause();
					}
				} );

				// iframe embeds
				toArray( slide.querySelectorAll( 'iframe' ) ).forEach( function( el ) {
					el.contentWindow.postMessage( 'slide:stop', '*' );
				});

				// YouTube embeds
				toArray( slide.querySelectorAll( 'iframe[src*="youtube.com/embed/"]' ) ).forEach( function( el ) {
					if( !el.hasAttribute( 'data-ignore' ) && typeof el.contentWindow.postMessage === 'function' ) {
						el.contentWindow.postMessage( '{"event":"command","func":"pauseVideo","args":""}', '*' );
					}
				});
			}

		}

		/**
		 * Checks if this presentation is running inside of the
		 * speaker notes window.
		 */
		function isSpeakerNotes() {

			return !!window.location.search.match( /receiver/gi );

		}

		/**
		 * Reads the current URL (hash) and navigates accordingly.
		 */
		function readURL() {

			var hash = window.location.hash;

			// Attempt to parse the hash as either an index or name
			var bits = hash.slice( 2 ).split( '/' ),
				name = hash.replace( /#|\//gi, '' );

			// If the first bit is invalid and there is a name we can
			// assume that this is a named link
			if( isNaN( parseInt( bits[0], 10 ) ) && name.length ) {
				// Find the slide with the specified name
				var element = document.querySelector( '#' + name );

				if( element ) {
					// Find the position of the named slide and navigate to it
					var indices = Reveal.getIndices( element );
					slide( indices.h, indices.v );
				}
				// If the slide doesn't exist, navigate to the current slide
				else {
					slide( indexh || 0, indexv || 0 );
				}
			}
			else {
				// Read the index components of the hash
				var h = parseInt( bits[0], 10 ) || 0,
					v = parseInt( bits[1], 10 ) || 0;

				if( h !== indexh || v !== indexv ) {
					slide( h, v );
				}
			}

		}

		/**
		 * Updates the page URL (hash) to reflect the current
		 * state.
		 *
		 * @param {Number} delay The time in ms to wait before
		 * writing the hash
		 */
		function writeURL( delay ) {

			if( config.history ) {

				// Make sure there's never more than one timeout running
				clearTimeout( writeURLTimeout );

				// If a delay is specified, timeout this call
				if( typeof delay === 'number' ) {
					writeURLTimeout = setTimeout( writeURL, delay );
				}
				else {
					var url = '/';

					// If the current slide has an ID, use that as a named link
					if( currentSlide && typeof currentSlide.getAttribute( 'id' ) === 'string' ) {
						url = '/' + currentSlide.getAttribute( 'id' );
					}
					// Otherwise use the /h/v index
					else {
						if( indexh > 0 || indexv > 0 ) url += indexh;
						if( indexv > 0 ) url += '/' + indexv;
					}

					window.location.hash = url;
				}
			}

		}

		/**
		 * Retrieves the h/v location of the current, or specified,
		 * slide.
		 *
		 * @param {HTMLElement} slide If specified, the returned
		 * index will be for this slide rather than the currently
		 * active one
		 *
		 * @return {Object} { h: <int>, v: <int>, f: <int> }
		 */
		function getIndices( slide ) {

			// By default, return the current indices
			var h = indexh,
				v = indexv,
				f;

			// If a slide is specified, return the indices of that slide
			if( slide ) {
				var isVertical = isVerticalSlide( slide );
				var slideh = isVertical ? slide.parentNode : slide;

				// Select all horizontal slides
				var horizontalSlides = toArray( document.querySelectorAll( HORIZONTAL_SLIDES_SELECTOR ) );

				// Now that we know which the horizontal slide is, get its index
				h = Math.max( horizontalSlides.indexOf( slideh ), 0 );

				// If this is a vertical slide, grab the vertical index
				if( isVertical ) {
					v = Math.max( toArray( slide.parentNode.querySelectorAll( 'section' ) ).indexOf( slide ), 0 );
				}
			}

			if( !slide && currentSlide ) {
				var hasFragments = currentSlide.querySelectorAll( '.fragment' ).length > 0;
				if( hasFragments ) {
					var visibleFragments = currentSlide.querySelectorAll( '.fragment.visible' );
					f = visibleFragments.length - 1;
				}
			}

			return { h: h, v: v, f: f };

		}

		/**
		 * Return a sorted fragments list, ordered by an increasing
		 * "data-fragment-index" attribute.
		 *
		 * Fragments will be revealed in the order that they are returned by
		 * this function, so you can use the index attributes to control the
		 * order of fragment appearance.
		 *
		 * To maintain a sensible default fragment order, fragments are presumed
		 * to be passed in document order. This function adds a "fragment-index"
		 * attribute to each node if such an attribute is not already present,
		 * and sets that attribute to an integer value which is the position of
		 * the fragment within the fragments list.
		 */
		function sortFragments( fragments ) {

			fragments = toArray( fragments );

			var ordered = [],
				unordered = [],
				sorted = [];

			// Group ordered and unordered elements
			fragments.forEach( function( fragment, i ) {
				if( fragment.hasAttribute( 'data-fragment-index' ) ) {
					var index = parseInt( fragment.getAttribute( 'data-fragment-index' ), 10 );

					if( !ordered[index] ) {
						ordered[index] = [];
					}

					ordered[index].push( fragment );
				}
				else {
					unordered.push( [ fragment ] );
				}
			} );

			// Append fragments without explicit indices in their
			// DOM order
			ordered = ordered.concat( unordered );

			// Manually count the index up per group to ensure there
			// are no gaps
			var index = 0;

			// Push all fragments in their sorted order to an array,
			// this flattens the groups
			ordered.forEach( function( group ) {
				group.forEach( function( fragment ) {
					sorted.push( fragment );
					fragment.setAttribute( 'data-fragment-index', index );
				} );

				index ++;
			} );

			return sorted;

		}

		/**
		 * Navigate to the specified slide fragment.
		 *
		 * @param {Number} index The index of the fragment that
		 * should be shown, -1 means all are invisible
		 * @param {Number} offset Integer offset to apply to the
		 * fragment index
		 *
		 * @return {Boolean} true if a change was made in any
		 * fragments visibility as part of this call
		 */
		function navigateFragment( index, offset ) {

			if( currentSlide && config.fragments ) {

				var fragments = sortFragments( currentSlide.querySelectorAll( '.fragment' ) );
				if( fragments.length ) {

					// If no index is specified, find the current
					if( typeof index !== 'number' ) {
						var lastVisibleFragment = sortFragments( currentSlide.querySelectorAll( '.fragment.visible' ) ).pop();

						if( lastVisibleFragment ) {
							index = parseInt( lastVisibleFragment.getAttribute( 'data-fragment-index' ) || 0, 10 );
						}
						else {
							index = -1;
						}
					}

					// If an offset is specified, apply it to the index
					if( typeof offset === 'number' ) {
						index += offset;
					}

					var fragmentsShown = [],
						fragmentsHidden = [];

					toArray( fragments ).forEach( function( element, i ) {

						if( element.hasAttribute( 'data-fragment-index' ) ) {
							i = parseInt( element.getAttribute( 'data-fragment-index' ), 10 );
						}

						// Visible fragments
						if( i <= index ) {
							if( !element.classList.contains( 'visible' ) ) fragmentsShown.push( element );
							element.classList.add( 'visible' );
							element.classList.remove( 'current-fragment' );

							if( i === index ) {
								element.classList.add( 'current-fragment' );
							}
						}
						// Hidden fragments
						else {
							if( element.classList.contains( 'visible' ) ) fragmentsHidden.push( element );
							element.classList.remove( 'visible' );
							element.classList.remove( 'current-fragment' );
						}


					} );

					if( fragmentsHidden.length ) {
						dispatchEvent( 'fragmenthidden', { fragment: fragmentsHidden[0], fragments: fragmentsHidden } );
					}

					if( fragmentsShown.length ) {
						dispatchEvent( 'fragmentshown', { fragment: fragmentsShown[0], fragments: fragmentsShown } );
					}

					updateControls();

					return !!( fragmentsShown.length || fragmentsHidden.length );

				}

			}

			return false;

		}

		/**
		 * Navigate to the next slide fragment.
		 *
		 * @return {Boolean} true if there was a next fragment,
		 * false otherwise
		 */
		function nextFragment() {

			return navigateFragment( null, 1 );

		}

		/**
		 * Navigate to the previous slide fragment.
		 *
		 * @return {Boolean} true if there was a previous fragment,
		 * false otherwise
		 */
		function previousFragment() {

			return navigateFragment( null, -1 );

		}

		/**
		 * Cues a new automated slide if enabled in the config.
		 */
		function cueAutoSlide() {

			cancelAutoSlide();

			if( currentSlide ) {

				var parentAutoSlide = currentSlide.parentNode ? currentSlide.parentNode.getAttribute( 'data-autoslide' ) : null;
				var slideAutoSlide = currentSlide.getAttribute( 'data-autoslide' );

				// Pick value in the following priority order:
				// 1. Current slide's data-autoslide
				// 2. Parent slide's data-autoslide
				// 3. Global autoSlide setting
				if( slideAutoSlide ) {
					autoSlide = parseInt( slideAutoSlide, 10 );
				}
				else if( parentAutoSlide ) {
					autoSlide = parseInt( parentAutoSlide, 10 );
				}
				else {
					autoSlide = config.autoSlide;
				}

				// If there are media elements with data-autoplay,
				// automatically set the autoSlide duration to the
				// length of that media
				toArray( currentSlide.querySelectorAll( 'video, audio' ) ).forEach( function( el ) {
					if( el.hasAttribute( 'data-autoplay' ) ) {
						if( autoSlide && el.duration * 1000 > autoSlide ) {
							autoSlide = ( el.duration * 1000 ) + 1000;
						}
					}
				} );

				// Cue the next auto-slide if:
				// - There is an autoSlide value
				// - Auto-sliding isn't paused by the user
				// - The presentation isn't paused
				// - The overview isn't active
				// - The presentation isn't over
				if( autoSlide && !autoSlidePaused && !isPaused() && !isOverview() && ( !Reveal.isLastSlide() || config.loop === true ) ) {
					autoSlideTimeout = setTimeout( navigateNext, autoSlide );
					autoSlideStartTime = Date.now();
				}

				if( autoSlidePlayer ) {
					autoSlidePlayer.setPlaying( autoSlideTimeout !== -1 );
				}

			}

		}

		/**
		 * Cancels any ongoing request to auto-slide.
		 */
		function cancelAutoSlide() {

			clearTimeout( autoSlideTimeout );
			autoSlideTimeout = -1;

		}

		function pauseAutoSlide() {

			autoSlidePaused = true;
			clearTimeout( autoSlideTimeout );

			if( autoSlidePlayer ) {
				autoSlidePlayer.setPlaying( false );
			}

		}

		function resumeAutoSlide() {

			autoSlidePaused = false;
			cueAutoSlide();

		}

		function navigateLeft() {

			// Reverse for RTL
			if( config.rtl ) {
				if( ( isOverview() || nextFragment() === false ) && availableRoutes().left ) {
					slide( indexh + 1 );
				}
			}
			// Normal navigation
			else if( ( isOverview() || previousFragment() === false ) && availableRoutes().left ) {
				slide( indexh - 1 );
			}

		}

		function navigateRight() {

			// Reverse for RTL
			if( config.rtl ) {
				if( ( isOverview() || previousFragment() === false ) && availableRoutes().right ) {
					slide( indexh - 1 );
				}
			}
			// Normal navigation
			else if( ( isOverview() || nextFragment() === false ) && availableRoutes().right ) {
				slide( indexh + 1 );
			}

		}

		function navigateUp() {

			// Prioritize hiding fragments
			if( ( isOverview() || previousFragment() === false ) && availableRoutes().up ) {
				slide( indexh, indexv - 1 );
			}

		}

		function navigateDown() {

			// Prioritize revealing fragments
			if( ( isOverview() || nextFragment() === false ) && availableRoutes().down ) {
				slide( indexh, indexv + 1 );
			}

		}

		/**
		 * Navigates backwards, prioritized in the following order:
		 * 1) Previous fragment
		 * 2) Previous vertical slide
		 * 3) Previous horizontal slide
		 */
		function navigatePrev() {

			// Prioritize revealing fragments
			if( previousFragment() === false ) {
				if( availableRoutes().up ) {
					navigateUp();
				}
				else {
					// Fetch the previous horizontal slide, if there is one
					var previousSlide = document.querySelector( HORIZONTAL_SLIDES_SELECTOR + '.past:nth-child(' + indexh + ')' );

					if( previousSlide ) {
						var v = ( previousSlide.querySelectorAll( 'section' ).length - 1 ) || undefined;
						var h = indexh - 1;
						slide( h, v );
					}
				}
			}

		}

		/**
		 * Same as #navigatePrev() but navigates forwards.
		 */
		function navigateNext() {

			// Prioritize revealing fragments
			if( nextFragment() === false ) {
				availableRoutes().down ? navigateDown() : navigateRight();
			}

			// If auto-sliding is enabled we need to cue up
			// another timeout
			cueAutoSlide();

		}


		// --------------------------------------------------------------------//
		// ----------------------------- EVENTS -------------------------------//
		// --------------------------------------------------------------------//

		/**
		 * Called by all event handlers that are based on user
		 * input.
		 */
		function onUserInput( event ) {

			if( config.autoSlideStoppable ) {
				pauseAutoSlide();
			}

		}

		/**
		 * Handler for the document level 'keydown' event.
		 */
		function onDocumentKeyDown( event ) {

			onUserInput( event );

			// Check if there's a focused element that could be using
			// the keyboard
			var activeElement = document.activeElement;
			var hasFocus = !!( document.activeElement && ( document.activeElement.type || document.activeElement.href || document.activeElement.contentEditable !== 'inherit' ) );

			// Disregard the event if there's a focused element or a
			// keyboard modifier key is present
			if( hasFocus || (event.shiftKey && event.keyCode !== 32) || event.altKey || event.ctrlKey || event.metaKey ) return;

			// While paused only allow "unpausing" keyboard events (b and .)
			if( isPaused() && [66,190,191].indexOf( event.keyCode ) === -1 ) {
				return false;
			}

			var triggered = false;

			// 1. User defined key bindings
			if( typeof config.keyboard === 'object' ) {

				for( var key in config.keyboard ) {

					// Check if this binding matches the pressed key
					if( parseInt( key, 10 ) === event.keyCode ) {

						var value = config.keyboard[ key ];

						// Callback function
						if( typeof value === 'function' ) {
							value.apply( null, [ event ] );
						}
						// String shortcuts to reveal.js API
						else if( typeof value === 'string' && typeof Reveal[ value ] === 'function' ) {
							Reveal[ value ].call();
						}

						triggered = true;

					}

				}

			}

			// 2. System defined key bindings
			if( triggered === false ) {

				// Assume true and try to prove false
				triggered = true;

				switch( event.keyCode ) {
					// p, page up
					case 80: case 33: navigatePrev(); break;
					// n, page down
					case 78: case 34: navigateNext(); break;
					// h, left
					case 72: case 37: navigateLeft(); break;
					// l, right
					case 76: case 39: navigateRight(); break;
					// k, up
					case 75: case 38: navigateUp(); break;
					// j, down
					case 74: case 40: navigateDown(); break;
					// home
					case 36: slide( 0 ); break;
					// end
					case 35: slide( Number.MAX_VALUE ); break;
					// space
					case 32: isOverview() ? deactivateOverview() : event.shiftKey ? navigatePrev() : navigateNext(); break;
					// return
					case 13: isOverview() ? deactivateOverview() : triggered = false; break;
					// b, period, Logitech presenter tools "black screen" button
					case 66: case 190: case 191: togglePause(); break;
					// f
					case 70: enterFullscreen(); break;
					default:
						triggered = false;
				}

			}

			// If the input resulted in a triggered action we should prevent
			// the browsers default behavior
			if( triggered ) {
				event.preventDefault();
			}
			// ESC or O key
			else if ( ( event.keyCode === 27 || event.keyCode === 79 ) && features.transforms3d ) {
				if( dom.preview ) {
					closePreview();
				}
				else {
					toggleOverview();
				}

				event.preventDefault();
			}

			// If auto-sliding is enabled we need to cue up
			// another timeout
			cueAutoSlide();

		}

		/**
		 * Handler for the 'touchstart' event, enables support for
		 * swipe and pinch gestures.
		 */
		function onTouchStart( event ) {

			touch.startX = event.touches[0].clientX;
			touch.startY = event.touches[0].clientY;
			touch.startCount = event.touches.length;

			// If there's two touches we need to memorize the distance
			// between those two points to detect pinching
			if( event.touches.length === 2 && config.overview ) {
				touch.startSpan = distanceBetween( {
					x: event.touches[1].clientX,
					y: event.touches[1].clientY
				}, {
					x: touch.startX,
					y: touch.startY
				} );
			}

		}

		/**
		 * Handler for the 'touchmove' event.
		 */
		function onTouchMove( event ) {

			// Each touch should only trigger one action
			if( !touch.captured ) {
				onUserInput( event );

				var currentX = event.touches[0].clientX;
				var currentY = event.touches[0].clientY;

				// If the touch started with two points and still has
				// two active touches; test for the pinch gesture
				if( event.touches.length === 2 && touch.startCount === 2 && config.overview ) {

					// The current distance in pixels between the two touch points
					var currentSpan = distanceBetween( {
						x: event.touches[1].clientX,
						y: event.touches[1].clientY
					}, {
						x: touch.startX,
						y: touch.startY
					} );

					// If the span is larger than the desire amount we've got
					// ourselves a pinch
					if( Math.abs( touch.startSpan - currentSpan ) > touch.threshold ) {
						touch.captured = true;

						if( currentSpan < touch.startSpan ) {
							activateOverview();
						}
						else {
							deactivateOverview();
						}
					}

					event.preventDefault();

				}
				// There was only one touch point, look for a swipe
				else if( event.touches.length === 1 && touch.startCount !== 2 ) {

					var deltaX = currentX - touch.startX,
						deltaY = currentY - touch.startY;

					if( deltaX > touch.threshold && Math.abs( deltaX ) > Math.abs( deltaY ) ) {
						touch.captured = true;
						navigateLeft();
					}
					else if( deltaX < -touch.threshold && Math.abs( deltaX ) > Math.abs( deltaY ) ) {
						touch.captured = true;
						navigateRight();
					}
					else if( deltaY > touch.threshold ) {
						touch.captured = true;
						navigateUp();
					}
					else if( deltaY < -touch.threshold ) {
						touch.captured = true;
						navigateDown();
					}

					// If we're embedded, only block touch events if they have
					// triggered an action
					if( config.embedded ) {
						if( touch.captured || isVerticalSlide( currentSlide ) ) {
							event.preventDefault();
						}
					}
					// Not embedded? Block them all to avoid needless tossing
					// around of the viewport in iOS
					else {
						event.preventDefault();
					}

				}
			}
			// There's a bug with swiping on some Android devices unless
			// the default action is always prevented
			else if( navigator.userAgent.match( /android/gi ) ) {
				event.preventDefault();
			}

		}

		/**
		 * Handler for the 'touchend' event.
		 */
		function onTouchEnd( event ) {

			touch.captured = false;

		}

		/**
		 * Convert pointer down to touch start.
		 */
		function onPointerDown( event ) {

			if( event.pointerType === event.MSPOINTER_TYPE_TOUCH ) {
				event.touches = [{ clientX: event.clientX, clientY: event.clientY }];
				onTouchStart( event );
			}

		}

		/**
		 * Convert pointer move to touch move.
		 */
		function onPointerMove( event ) {

			if( event.pointerType === event.MSPOINTER_TYPE_TOUCH ) {
				event.touches = [{ clientX: event.clientX, clientY: event.clientY }];
				onTouchMove( event );
			}

		}

		/**
		 * Convert pointer up to touch end.
		 */
		function onPointerUp( event ) {

			if( event.pointerType === event.MSPOINTER_TYPE_TOUCH ) {
				event.touches = [{ clientX: event.clientX, clientY: event.clientY }];
				onTouchEnd( event );
			}

		}

		/**
		 * Handles mouse wheel scrolling, throttled to avoid skipping
		 * multiple slides.
		 */
		function onDocumentMouseScroll( event ) {

			if( Date.now() - lastMouseWheelStep > 600 ) {

				lastMouseWheelStep = Date.now();

				var delta = event.detail || -event.wheelDelta;
				if( delta > 0 ) {
					navigateNext();
				}
				else {
					navigatePrev();
				}

			}

		}

		/**
		 * Clicking on the progress bar results in a navigation to the
		 * closest approximate horizontal slide using this equation:
		 *
		 * ( clickX / presentationWidth ) * numberOfSlides
		 */
		function onProgressClicked( event ) {

			onUserInput( event );

			event.preventDefault();

			var slidesTotal = toArray( document.querySelectorAll( HORIZONTAL_SLIDES_SELECTOR ) ).length;
			var slideIndex = Math.floor( ( event.clientX / dom.wrapper.offsetWidth ) * slidesTotal );

			slide( slideIndex );

		}

		/**
		 * Event handler for navigation control buttons.
		 */
		function onNavigateLeftClicked( event ) { event.preventDefault(); onUserInput(); navigateLeft(); }
		function onNavigateRightClicked( event ) { event.preventDefault(); onUserInput(); navigateRight(); }
		function onNavigateUpClicked( event ) { event.preventDefault(); onUserInput(); navigateUp(); }
		function onNavigateDownClicked( event ) { event.preventDefault(); onUserInput(); navigateDown(); }
		function onNavigatePrevClicked( event ) { event.preventDefault(); onUserInput(); navigatePrev(); }
		function onNavigateNextClicked( event ) { event.preventDefault(); onUserInput(); navigateNext(); }

		/**
		 * Handler for the window level 'hashchange' event.
		 */
		function onWindowHashChange( event ) {

			readURL();

		}

		/**
		 * Handler for the window level 'resize' event.
		 */
		function onWindowResize( event ) {

			layout();

		}

		/**
		 * Handle for the window level 'visibilitychange' event.
		 */
		function onPageVisibilityChange( event ) {

			var isHidden =  document.webkitHidden ||
							document.msHidden ||
							document.hidden;

			// If, after clicking a link or similar and we're coming back,
			// focus the document.body to ensure we can use keyboard shortcuts
			if( isHidden === false && document.activeElement !== document.body ) {
				document.activeElement.blur();
				document.body.focus();
			}

		}

		/**
		 * Invoked when a slide is and we're in the overview.
		 */
		function onOverviewSlideClicked( event ) {

			// TODO There's a bug here where the event listeners are not
			// removed after deactivating the overview.
			if( eventsAreBound && isOverview() ) {
				event.preventDefault();

				var element = event.target;

				while( element && !element.nodeName.match( /section/gi ) ) {
					element = element.parentNode;
				}

				if( element && !element.classList.contains( 'disabled' ) ) {

					deactivateOverview();

					if( element.nodeName.match( /section/gi ) ) {
						var h = parseInt( element.getAttribute( 'data-index-h' ), 10 ),
							v = parseInt( element.getAttribute( 'data-index-v' ), 10 );

						slide( h, v );
					}

				}
			}

		}

		/**
		 * Handles clicks on links that are set to preview in the
		 * iframe overlay.
		 */
		function onPreviewLinkClicked( event ) {

			var url = event.target.getAttribute( 'href' );
			if( url ) {
				openPreview( url );
				event.preventDefault();
			}

		}

		/**
		 * Handles click on the auto-sliding controls element.
		 */
		function onAutoSlidePlayerClick( event ) {

			// Replay
			if( Reveal.isLastSlide() && config.loop === false ) {
				slide( 0, 0 );
				resumeAutoSlide();
			}
			// Resume
			else if( autoSlidePaused ) {
				resumeAutoSlide();
			}
			// Pause
			else {
				pauseAutoSlide();
			}

		}


		// --------------------------------------------------------------------//
		// ------------------------ PLAYBACK COMPONENT ------------------------//
		// --------------------------------------------------------------------//


		/**
		 * Constructor for the playback component, which displays
		 * play/pause/progress controls.
		 *
		 * @param {HTMLElement} container The component will append
		 * itself to this
		 * @param {Function} progressCheck A method which will be
		 * called frequently to get the current progress on a range
		 * of 0-1
		 */
		function Playback( container, progressCheck ) {

			// Cosmetics
			this.diameter = 50;
			this.thickness = 3;

			// Flags if we are currently playing
			this.playing = false;

			// Current progress on a 0-1 range
			this.progress = 0;

			// Used to loop the animation smoothly
			this.progressOffset = 1;

			this.container = container;
			this.progressCheck = progressCheck;

			this.canvas = document.createElement( 'canvas' );
			this.canvas.className = 'playback';
			this.canvas.width = this.diameter;
			this.canvas.height = this.diameter;
			this.context = this.canvas.getContext( '2d' );

			this.container.appendChild( this.canvas );

			this.render();

		}

		Playback.prototype.setPlaying = function( value ) {

			var wasPlaying = this.playing;

			this.playing = value;

			// Start repainting if we weren't already
			if( !wasPlaying && this.playing ) {
				this.animate();
			}
			else {
				this.render();
			}

		};

		Playback.prototype.animate = function() {

			var progressBefore = this.progress;

			this.progress = this.progressCheck();

			// When we loop, offset the progress so that it eases
			// smoothly rather than immediately resetting
			if( progressBefore > 0.8 && this.progress < 0.2 ) {
				this.progressOffset = this.progress;
			}

			this.render();

			if( this.playing ) {
				features.requestAnimationFrameMethod.call( window, this.animate.bind( this ) );
			}

		};

		/**
		 * Renders the current progress and playback state.
		 */
		Playback.prototype.render = function() {

			var progress = this.playing ? this.progress : 0,
				radius = ( this.diameter / 2 ) - this.thickness,
				x = this.diameter / 2,
				y = this.diameter / 2,
				iconSize = 14;

			// Ease towards 1
			this.progressOffset += ( 1 - this.progressOffset ) * 0.1;

			var endAngle = ( - Math.PI / 2 ) + ( progress * ( Math.PI * 2 ) );
			var startAngle = ( - Math.PI / 2 ) + ( this.progressOffset * ( Math.PI * 2 ) );

			this.context.save();
			this.context.clearRect( 0, 0, this.diameter, this.diameter );

			// Solid background color
			this.context.beginPath();
			this.context.arc( x, y, radius + 2, 0, Math.PI * 2, false );
			this.context.fillStyle = 'rgba( 0, 0, 0, 0.4 )';
			this.context.fill();

			// Draw progress track
			this.context.beginPath();
			this.context.arc( x, y, radius, 0, Math.PI * 2, false );
			this.context.lineWidth = this.thickness;
			this.context.strokeStyle = '#666';
			this.context.stroke();

			if( this.playing ) {
				// Draw progress on top of track
				this.context.beginPath();
				this.context.arc( x, y, radius, startAngle, endAngle, false );
				this.context.lineWidth = this.thickness;
				this.context.strokeStyle = '#fff';
				this.context.stroke();
			}

			this.context.translate( x - ( iconSize / 2 ), y - ( iconSize / 2 ) );

			// Draw play/pause icons
			if( this.playing ) {
				this.context.fillStyle = '#fff';
				this.context.fillRect( 0, 0, iconSize / 2 - 2, iconSize );
				this.context.fillRect( iconSize / 2 + 2, 0, iconSize / 2 - 2, iconSize );
			}
			else {
				this.context.beginPath();
				this.context.translate( 2, 0 );
				this.context.moveTo( 0, 0 );
				this.context.lineTo( iconSize - 2, iconSize / 2 );
				this.context.lineTo( 0, iconSize );
				this.context.fillStyle = '#fff';
				this.context.fill();
			}

			this.context.restore();

		};

		Playback.prototype.on = function( type, listener ) {
			this.canvas.addEventListener( type, listener, false );
		};

		Playback.prototype.off = function( type, listener ) {
			this.canvas.removeEventListener( type, listener, false );
		};

		Playback.prototype.destroy = function() {

			this.playing = false;

			if( this.canvas.parentNode ) {
				this.container.removeChild( this.canvas );
			}

		};


		// --------------------------------------------------------------------//
		// ------------------------------- API --------------------------------//
		// --------------------------------------------------------------------//


		return {
			initialize: initialize,
			configure: configure,
			sync: sync,

			// Navigation methods
			slide: slide,
			left: navigateLeft,
			right: navigateRight,
			up: navigateUp,
			down: navigateDown,
			prev: navigatePrev,
			next: navigateNext,

			// Fragment methods
			navigateFragment: navigateFragment,
			prevFragment: previousFragment,
			nextFragment: nextFragment,

			// Deprecated aliases
			navigateTo: slide,
			navigateLeft: navigateLeft,
			navigateRight: navigateRight,
			navigateUp: navigateUp,
			navigateDown: navigateDown,
			navigatePrev: navigatePrev,
			navigateNext: navigateNext,

			// Forces an update in slide layout
			layout: layout,

			// Returns an object with the available routes as booleans (left/right/top/bottom)
			availableRoutes: availableRoutes,

			// Returns an object with the available fragments as booleans (prev/next)
			availableFragments: availableFragments,

			// Toggles the overview mode on/off
			toggleOverview: toggleOverview,

			// Toggles the "black screen" mode on/off
			togglePause: togglePause,

			// State checks
			isOverview: isOverview,
			isPaused: isPaused,

			// Adds or removes all internal event listeners (such as keyboard)
			addEventListeners: addEventListeners,
			removeEventListeners: removeEventListeners,

			// Returns the indices of the current, or specified, slide
			getIndices: getIndices,

			// Returns the slide at the specified index, y is optional
			getSlide: function( x, y ) {
				var horizontalSlide = document.querySelectorAll( HORIZONTAL_SLIDES_SELECTOR )[ x ];
				var verticalSlides = horizontalSlide && horizontalSlide.querySelectorAll( 'section' );

				if( typeof y !== 'undefined' ) {
					return verticalSlides ? verticalSlides[ y ] : undefined;
				}

				return horizontalSlide;
			},

			// Returns the previous slide element, may be null
			getPreviousSlide: function() {
				return previousSlide;
			},

			// Returns the current slide element
			getCurrentSlide: function() {
				return currentSlide;
			},

			// Returns the current scale of the presentation content
			getScale: function() {
				return scale;
			},

			// Returns the current configuration object
			getConfig: function() {
				return config;
			},

			// Helper method, retrieves query string as a key/value hash
			getQueryHash: function() {
				var query = {};

				location.search.replace( /[A-Z0-9]+?=([\w\.%-]*)/gi, function(a) {
					query[ a.split( '=' ).shift() ] = a.split( '=' ).pop();
				} );

				// Basic deserialization
				for( var i in query ) {
					var value = query[ i ];

					query[ i ] = unescape( value );

					if( value === 'null' ) query[ i ] = null;
					else if( value === 'true' ) query[ i ] = true;
					else if( value === 'false' ) query[ i ] = false;
					else if( value.match( /^\d+$/ ) ) query[ i ] = parseFloat( value );
				}

				return query;
			},

			// Returns true if we're currently on the first slide
			isFirstSlide: function() {
				return document.querySelector( SLIDES_SELECTOR + '.past' ) == null ? true : false;
			},

			// Returns true if we're currently on the last slide
			isLastSlide: function() {
				if( currentSlide ) {
					// Does this slide has next a sibling?
					if( currentSlide.nextElementSibling ) return false;

					// If it's vertical, does its parent have a next sibling?
					if( isVerticalSlide( currentSlide ) && currentSlide.parentNode.nextElementSibling ) return false;

					return true;
				}

				return false;
			},

			// Checks if reveal.js has been loaded and is ready for use
			isReady: function() {
				return loaded;
			},

			// Forward event binding to the reveal DOM element
			addEventListener: function( type, listener, useCapture ) {
				if( 'addEventListener' in window ) {
					( dom.wrapper || document.querySelector( '.reveal' ) ).addEventListener( type, listener, useCapture );
				}
			},
			removeEventListener: function( type, listener, useCapture ) {
				if( 'addEventListener' in window ) {
					( dom.wrapper || document.querySelector( '.reveal' ) ).removeEventListener( type, listener, useCapture );
				}
			}
		};

	})();

	module.exports = Reveal;

/***/ },
/* 15 */
/***/ function(module, exports) {

	var hljs=new function(){function l(o){return o.replace(/&/gm,"&amp;").replace(/</gm,"&lt;")}function c(q,p,o){return RegExp(p,"m"+(q.cI?"i":"")+(o?"g":""))}function i(q){for(var o=0;o<q.childNodes.length;o++){var p=q.childNodes[o];if(p.nodeName=="CODE"){return p}if(!(p.nodeType==3&&p.nodeValue.match(/\s+/))){break}}}function g(s,r){var q="";for(var p=0;p<s.childNodes.length;p++){if(s.childNodes[p].nodeType==3){var o=s.childNodes[p].nodeValue;if(r){o=o.replace(/\n/g,"")}q+=o}else{if(s.childNodes[p].nodeName=="BR"){q+="\n"}else{q+=g(s.childNodes[p])}}}if(/MSIE [678]/.test(navigator.userAgent)){q=q.replace(/\r/g,"\n")}return q}function a(r){var p=r.className.split(/\s+/);p=p.concat(r.parentNode.className.split(/\s+/));for(var o=0;o<p.length;o++){var q=p[o].replace(/^language-/,"");if(d[q]||q=="no-highlight"){return q}}}function b(o){var p=[];(function(r,s){for(var q=0;q<r.childNodes.length;q++){if(r.childNodes[q].nodeType==3){s+=r.childNodes[q].nodeValue.length}else{if(r.childNodes[q].nodeName=="BR"){s+=1}else{p.push({event:"start",offset:s,node:r.childNodes[q]});s=arguments.callee(r.childNodes[q],s);p.push({event:"stop",offset:s,node:r.childNodes[q]})}}}return s})(o,0);return p}function k(x,y,w){var q=0;var v="";var s=[];function t(){if(x.length&&y.length){if(x[0].offset!=y[0].offset){return(x[0].offset<y[0].offset)?x:y}else{return y[0].event=="start"?x:y}}else{return x.length?x:y}}function r(B){var C="<"+B.nodeName.toLowerCase();for(var z=0;z<B.attributes.length;z++){var A=B.attributes[z];C+=" "+A.nodeName.toLowerCase();if(A.nodeValue!=undefined){C+='="'+l(A.nodeValue)+'"'}}return C+">"}while(x.length||y.length){var u=t().splice(0,1)[0];v+=l(w.substr(q,u.offset-q));q=u.offset;if(u.event=="start"){v+=r(u.node);s.push(u.node)}else{if(u.event=="stop"){var p=s.length;do{p--;var o=s[p];v+=("</"+o.nodeName.toLowerCase()+">")}while(o!=u.node);s.splice(p,1);while(p<s.length){v+=r(s[p]);p++}}}}v+=w.substr(q);return v}function f(I,C){function y(r,L){for(var K=0;K<L.c.length;K++){if(L.c[K].bR.test(r)){return L.c[K]}}}function v(K,r){if(B[K].e&&B[K].eR.test(r)){return 1}if(B[K].eW){var L=v(K-1,r);return L?L+1:0}return 0}function w(r,K){return K.iR&&K.iR.test(r)}function z(N,M){var L=[];for(var K=0;K<N.c.length;K++){L.push(N.c[K].b)}var r=B.length-1;do{if(B[r].e){L.push(B[r].e)}r--}while(B[r+1].eW);if(N.i){L.push(N.i)}return c(M,"("+L.join("|")+")",true)}function q(L,K){var M=B[B.length-1];if(!M.t){M.t=z(M,G)}M.t.lastIndex=K;var r=M.t.exec(L);if(r){return[L.substr(K,r.index-K),r[0],false]}else{return[L.substr(K),"",true]}}function o(N,r){var K=G.cI?r[0].toLowerCase():r[0];for(var M in N.kG){if(!N.kG.hasOwnProperty(M)){continue}var L=N.kG[M].hasOwnProperty(K);if(L){return[M,L]}}return false}function E(L,N){if(!N.k){return l(L)}var M="";var O=0;N.lR.lastIndex=0;var K=N.lR.exec(L);while(K){M+=l(L.substr(O,K.index-O));var r=o(N,K);if(r){s+=r[1];M+='<span class="'+r[0]+'">'+l(K[0])+"</span>"}else{M+=l(K[0])}O=N.lR.lastIndex;K=N.lR.exec(L)}M+=l(L.substr(O,L.length-O));return M}function J(r,L){if(L.sL&&d[L.sL]){var K=f(L.sL,r);s+=K.keyword_count;return K.value}else{return E(r,L)}}function H(L,r){var K=L.cN?'<span class="'+L.cN+'">':"";if(L.rB){p+=K;L.buffer=""}else{if(L.eB){p+=l(r)+K;L.buffer=""}else{p+=K;L.buffer=r}}B.push(L);A+=L.r}function D(N,K,P){var Q=B[B.length-1];if(P){p+=J(Q.buffer+N,Q);return false}var L=y(K,Q);if(L){p+=J(Q.buffer+N,Q);H(L,K);return L.rB}var r=v(B.length-1,K);if(r){var M=Q.cN?"</span>":"";if(Q.rE){p+=J(Q.buffer+N,Q)+M}else{if(Q.eE){p+=J(Q.buffer+N,Q)+M+l(K)}else{p+=J(Q.buffer+N+K,Q)+M}}while(r>1){M=B[B.length-2].cN?"</span>":"";p+=M;r--;B.length--}var O=B[B.length-1];B.length--;B[B.length-1].buffer="";if(O.starts){H(O.starts,"")}return Q.rE}if(w(K,Q)){throw"Illegal"}}var G=d[I];var B=[G.dM];var A=0;var s=0;var p="";try{var u=0;G.dM.buffer="";do{var x=q(C,u);var t=D(x[0],x[1],x[2]);u+=x[0].length;if(!t){u+=x[1].length}}while(!x[2]);if(B.length>1){throw"Illegal"}return{language:I,r:A,keyword_count:s,value:p}}catch(F){if(F=="Illegal"){return{language:null,r:0,keyword_count:0,value:l(C)}}else{throw F}}}function h(){function o(t,s,u){if(t.compiled){return}if(!u){t.bR=c(s,t.b?t.b:"\\B|\\b");if(!t.e&&!t.eW){t.e="\\B|\\b"}if(t.e){t.eR=c(s,t.e)}}if(t.i){t.iR=c(s,t.i)}if(t.r==undefined){t.r=1}if(t.k){t.lR=c(s,t.l||hljs.IR,true)}for(var r in t.k){if(!t.k.hasOwnProperty(r)){continue}if(t.k[r] instanceof Object){t.kG=t.k}else{t.kG={keyword:t.k}}break}if(!t.c){t.c=[]}t.compiled=true;for(var q=0;q<t.c.length;q++){o(t.c[q],s,false)}if(t.starts){o(t.starts,s,false)}}for(var p in d){if(!d.hasOwnProperty(p)){continue}o(d[p].dM,d[p],true)}}function e(){if(e.called){return}e.called=true;h()}function n(t,y,p){e();var A=g(t,p);var r=a(t);if(r=="no-highlight"){return}if(r){var w=f(r,A)}else{var w={language:"",keyword_count:0,r:0,value:l(A)};var x=w;for(var z in d){if(!d.hasOwnProperty(z)){continue}var u=f(z,A);if(u.keyword_count+u.r>x.keyword_count+x.r){x=u}if(u.keyword_count+u.r>w.keyword_count+w.r){x=w;w=u}}}var s=t.className;if(!s.match(w.language)){s=s?(s+" "+w.language):w.language}var o=b(t);if(o.length){var q=document.createElement("pre");q.innerHTML=w.value;w.value=k(o,b(q),A)}if(y){w.value=w.value.replace(/^((<[^>]+>|\t)+)/gm,function(B,E,D,C){return E.replace(/\t/g,y)})}if(p){w.value=w.value.replace(/\n/g,"<br>")}if(/MSIE [678]/.test(navigator.userAgent)&&t.tagName=="CODE"&&t.parentNode.tagName=="PRE"){var q=t.parentNode;var v=document.createElement("div");v.innerHTML="<pre><code>"+w.value+"</code></pre>";t=v.firstChild.firstChild;v.firstChild.cN=q.cN;q.parentNode.replaceChild(v.firstChild,q)}else{t.innerHTML=w.value}t.className=s;t.dataset={};t.dataset.result={language:w.language,kw:w.keyword_count,re:w.r};if(x&&x.language){t.dataset.second_best={language:x.language,kw:x.keyword_count,re:x.r}}}function j(){if(j.called){return}j.called=true;e();var q=document.getElementsByTagName("pre");for(var o=0;o<q.length;o++){var p=i(q[o]);if(p){n(p,hljs.tabReplace)}}}function m(){var o=arguments;var p=function(){j.apply(null,o)};if(window.addEventListener){window.addEventListener("DOMContentLoaded",p,false);window.addEventListener("load",p,false)}else{if(window.attachEvent){window.attachEvent("onload",p)}else{window.onload=p}}}var d={};this.LANGUAGES=d;this.initHighlightingOnLoad=m;this.highlightBlock=n;this.initHighlighting=j;this.IR="[a-zA-Z][a-zA-Z0-9_]*";this.UIR="[a-zA-Z_][a-zA-Z0-9_]*";this.NR="\\b\\d+(\\.\\d+)?";this.CNR="\\b(0x[A-Za-z0-9]+|\\d+(\\.\\d+)?)";this.RSR="!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|\\.|-|-=|/|/=|:|;|<|<<|<<=|<=|=|==|===|>|>=|>>|>>=|>>>|>>>=|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~";this.BE={b:"\\\\.",r:0};this.ASM={cN:"string",b:"'",e:"'",i:"\\n",c:[this.BE],r:0};this.QSM={cN:"string",b:'"',e:'"',i:"\\n",c:[this.BE],r:0};this.CLCM={cN:"comment",b:"//",e:"$"};this.CBLCLM={cN:"comment",b:"/\\*",e:"\\*/"};this.HCM={cN:"comment",b:"#",e:"$"};this.NM={cN:"number",b:this.NR,r:0};this.CNM={cN:"number",b:this.CNR,r:0};this.inherit=function(o,r){var q={};for(var p in o){q[p]=o[p]}if(r){for(var p in r){q[p]=r[p]}}return q}}();hljs.LANGUAGES.bash=function(){var d={"true":1,"false":1};var b={cN:"variable",b:"\\$([a-zA-Z0-9_]+)\\b"};var a={cN:"variable",b:"\\$\\{(([^}])|(\\\\}))+\\}",c:[hljs.CNM]};var c={cN:"string",b:'"',e:'"',i:"\\n",c:[hljs.BE,b,a],r:0};var e={cN:"test_condition",b:"",e:"",c:[c,b,a,hljs.CNM],k:{literal:d},r:0};return{dM:{k:{keyword:{"if":1,then:1,"else":1,fi:1,"for":1,"break":1,"continue":1,"while":1,"in":1,"do":1,done:1,echo:1,exit:1,"return":1,set:1,declare:1},literal:d},c:[{cN:"shebang",b:"(#!\\/bin\\/bash)|(#!\\/bin\\/sh)",r:10},hljs.HCM,{cN:"comment",b:"\\/\\/",e:"$",i:"."},hljs.CNM,c,b,a,hljs.inherit(e,{b:"\\[ ",e:" \\]",r:0}),hljs.inherit(e,{b:"\\[\\[ ",e:" \\]\\]"})]}}}();hljs.LANGUAGES.erlang=function(){var g="[a-z'][a-zA-Z0-9_']*";var l="("+g+":"+g+"|"+g+")";var d={keyword:{after:1,and:1,andalso:10,band:1,begin:1,bnot:1,bor:1,bsl:1,bzr:1,bxor:1,"case":1,"catch":1,cond:1,div:1,end:1,fun:1,let:1,not:1,of:1,orelse:10,query:1,receive:1,rem:1,"try":1,when:1,xor:1},literal:{"false":1,"true":1}};var j={cN:"comment",b:"%",e:"$",r:0};var c={b:"fun\\s+"+g+"/\\d+"};var m={b:l+"\\(",e:"\\)",rB:true,r:0,c:[{cN:"function_name",b:l,r:0},{b:"\\(",e:"\\)",eW:true,rE:true,r:0}]};var f={cN:"tuple",b:"{",e:"}",r:0};var a={cN:"variable",b:"\\b_([A-Z][A-Za-z0-9_]*)?",r:0};var k={cN:"variable",b:"[A-Z][a-zA-Z0-9_]*",r:0};var h={b:"#",e:"}",i:".",r:0,rB:true,c:[{cN:"record_name",b:"#"+hljs.UIR,r:0},{b:"{",eW:true,r:0}]};var i={k:d,b:"(fun|receive|if|try|case)",e:"end"};i.c=[j,c,hljs.inherit(hljs.ASM,{cN:""}),i,m,hljs.QSM,hljs.CNM,f,a,k,h];var b=[j,c,i,m,hljs.QSM,hljs.CNM,f,a,k,h];m.c[1].c=b;f.c=b;h.c[1].c=b;var e={cN:"params",b:"\\(",e:"\\)",eW:true,c:b};return{dM:{k:d,i:"(</|\\*=|\\+=|-=|/=|/\\*|\\*/|\\(\\*|\\*\\))",c:[{cN:"function",b:"^"+g+"\\(",e:";|\\.",rB:true,c:[e,{cN:"title",b:g},{k:d,b:"->",eW:true,c:b}]},j,{cN:"pp",b:"^-",e:"\\.",r:0,eE:true,rB:true,l:"-"+hljs.IR,k:{"-module":1,"-record":1,"-undef":1,"-export":1,"-ifdef":1,"-ifndef":1,"-author":1,"-copyright":1,"-doc":1,"-vsn":1,"-import":1,"-include":1,"-include_lib":1,"-compile":1,"-define":1,"-else":1,"-endif":1,"-file":1,"-behaviour":1,"-behavior":1},c:[e]},hljs.CNM,hljs.QSM,h,a,k,f]}}}();hljs.LANGUAGES.cs={dM:{k:{"abstract":1,as:1,base:1,bool:1,"break":1,"byte":1,"case":1,"catch":1,"char":1,checked:1,"class":1,"const":1,"continue":1,decimal:1,"default":1,delegate:1,"do":1,"do":1,"double":1,"else":1,"enum":1,event:1,explicit:1,extern:1,"false":1,"finally":1,fixed:1,"float":1,"for":1,foreach:1,"goto":1,"if":1,implicit:1,"in":1,"int":1,"interface":1,internal:1,is:1,lock:1,"long":1,namespace:1,"new":1,"null":1,object:1,operator:1,out:1,override:1,params:1,"private":1,"protected":1,"public":1,readonly:1,ref:1,"return":1,sbyte:1,sealed:1,"short":1,sizeof:1,stackalloc:1,"static":1,string:1,struct:1,"switch":1,"this":1,"throw":1,"true":1,"try":1,"typeof":1,uint:1,ulong:1,unchecked:1,unsafe:1,ushort:1,using:1,virtual:1,"volatile":1,"void":1,"while":1,ascending:1,descending:1,from:1,get:1,group:1,into:1,join:1,let:1,orderby:1,partial:1,select:1,set:1,value:1,"var":1,where:1,yield:1},c:[{cN:"comment",b:"///",e:"$",rB:true,c:[{cN:"xmlDocTag",b:"///|<!--|-->"},{cN:"xmlDocTag",b:"</?",e:">"}]},hljs.CLCM,hljs.CBLCLM,{cN:"string",b:'@"',e:'"',c:[{b:'""'}]},hljs.ASM,hljs.QSM,hljs.CNM]}};hljs.LANGUAGES.ruby=function(){var g="[a-zA-Z_][a-zA-Z0-9_]*(\\!|\\?)?";var a="[a-zA-Z_]\\w*[!?=]?|[-+~]\\@|<<|>>|=~|===?|<=>|[<>]=?|\\*\\*|[-/+%^&*~`|]|\\[\\]=?";var n={keyword:{and:1,"false":1,then:1,defined:1,module:1,"in":1,"return":1,redo:1,"if":1,BEGIN:1,retry:1,end:1,"for":1,"true":1,self:1,when:1,next:1,until:1,"do":1,begin:1,unless:1,END:1,rescue:1,nil:1,"else":1,"break":1,undef:1,not:1,"super":1,"class":1,"case":1,require:1,yield:1,alias:1,"while":1,ensure:1,elsif:1,or:1,def:1},keymethods:{__id__:1,__send__:1,abort:1,abs:1,"all?":1,allocate:1,ancestors:1,"any?":1,arity:1,assoc:1,at:1,at_exit:1,autoload:1,"autoload?":1,"between?":1,binding:1,binmode:1,"block_given?":1,call:1,callcc:1,caller:1,capitalize:1,"capitalize!":1,casecmp:1,"catch":1,ceil:1,center:1,chomp:1,"chomp!":1,chop:1,"chop!":1,chr:1,"class":1,class_eval:1,"class_variable_defined?":1,class_variables:1,clear:1,clone:1,close:1,close_read:1,close_write:1,"closed?":1,coerce:1,collect:1,"collect!":1,compact:1,"compact!":1,concat:1,"const_defined?":1,const_get:1,const_missing:1,const_set:1,constants:1,count:1,crypt:1,"default":1,default_proc:1,"delete":1,"delete!":1,delete_at:1,delete_if:1,detect:1,display:1,div:1,divmod:1,downcase:1,"downcase!":1,downto:1,dump:1,dup:1,each:1,each_byte:1,each_index:1,each_key:1,each_line:1,each_pair:1,each_value:1,each_with_index:1,"empty?":1,entries:1,eof:1,"eof?":1,"eql?":1,"equal?":1,"eval":1,exec:1,exit:1,"exit!":1,extend:1,fail:1,fcntl:1,fetch:1,fileno:1,fill:1,find:1,find_all:1,first:1,flatten:1,"flatten!":1,floor:1,flush:1,for_fd:1,foreach:1,fork:1,format:1,freeze:1,"frozen?":1,fsync:1,getc:1,gets:1,global_variables:1,grep:1,gsub:1,"gsub!":1,"has_key?":1,"has_value?":1,hash:1,hex:1,id:1,include:1,"include?":1,included_modules:1,index:1,indexes:1,indices:1,induced_from:1,inject:1,insert:1,inspect:1,instance_eval:1,instance_method:1,instance_methods:1,"instance_of?":1,"instance_variable_defined?":1,instance_variable_get:1,instance_variable_set:1,instance_variables:1,"integer?":1,intern:1,invert:1,ioctl:1,"is_a?":1,isatty:1,"iterator?":1,join:1,"key?":1,keys:1,"kind_of?":1,lambda:1,last:1,length:1,lineno:1,ljust:1,load:1,local_variables:1,loop:1,lstrip:1,"lstrip!":1,map:1,"map!":1,match:1,max:1,"member?":1,merge:1,"merge!":1,method:1,"method_defined?":1,method_missing:1,methods:1,min:1,module_eval:1,modulo:1,name:1,nesting:1,"new":1,next:1,"next!":1,"nil?":1,nitems:1,"nonzero?":1,object_id:1,oct:1,open:1,pack:1,partition:1,pid:1,pipe:1,pop:1,popen:1,pos:1,prec:1,prec_f:1,prec_i:1,print:1,printf:1,private_class_method:1,private_instance_methods:1,"private_method_defined?":1,private_methods:1,proc:1,protected_instance_methods:1,"protected_method_defined?":1,protected_methods:1,public_class_method:1,public_instance_methods:1,"public_method_defined?":1,public_methods:1,push:1,putc:1,puts:1,quo:1,raise:1,rand:1,rassoc:1,read:1,read_nonblock:1,readchar:1,readline:1,readlines:1,readpartial:1,rehash:1,reject:1,"reject!":1,remainder:1,reopen:1,replace:1,require:1,"respond_to?":1,reverse:1,"reverse!":1,reverse_each:1,rewind:1,rindex:1,rjust:1,round:1,rstrip:1,"rstrip!":1,scan:1,seek:1,select:1,send:1,set_trace_func:1,shift:1,singleton_method_added:1,singleton_methods:1,size:1,sleep:1,slice:1,"slice!":1,sort:1,"sort!":1,sort_by:1,split:1,sprintf:1,squeeze:1,"squeeze!":1,srand:1,stat:1,step:1,store:1,strip:1,"strip!":1,sub:1,"sub!":1,succ:1,"succ!":1,sum:1,superclass:1,swapcase:1,"swapcase!":1,sync:1,syscall:1,sysopen:1,sysread:1,sysseek:1,system:1,syswrite:1,taint:1,"tainted?":1,tell:1,test:1,"throw":1,times:1,to_a:1,to_ary:1,to_f:1,to_hash:1,to_i:1,to_int:1,to_io:1,to_proc:1,to_s:1,to_str:1,to_sym:1,tr:1,"tr!":1,tr_s:1,"tr_s!":1,trace_var:1,transpose:1,trap:1,truncate:1,"tty?":1,type:1,ungetc:1,uniq:1,"uniq!":1,unpack:1,unshift:1,untaint:1,untrace_var:1,upcase:1,"upcase!":1,update:1,upto:1,"value?":1,values:1,values_at:1,warn:1,write:1,write_nonblock:1,"zero?":1,zip:1}};var h={cN:"yardoctag",b:"@[A-Za-z]+"};var d={cN:"comment",b:"#",e:"$",c:[h]};var c={cN:"comment",b:"^\\=begin",e:"^\\=end",c:[h],r:10};var b={cN:"comment",b:"^__END__",e:"\\n$"};var u={cN:"subst",b:"#\\{",e:"}",l:g,k:n};var p=[hljs.BE,u];var s={cN:"string",b:"'",e:"'",c:p,r:0};var r={cN:"string",b:'"',e:'"',c:p,r:0};var q={cN:"string",b:"%[qw]?\\(",e:"\\)",c:p,r:10};var o={cN:"string",b:"%[qw]?\\[",e:"\\]",c:p,r:10};var m={cN:"string",b:"%[qw]?{",e:"}",c:p,r:10};var l={cN:"string",b:"%[qw]?<",e:">",c:p,r:10};var k={cN:"string",b:"%[qw]?/",e:"/",c:p,r:10};var j={cN:"string",b:"%[qw]?%",e:"%",c:p,r:10};var i={cN:"string",b:"%[qw]?-",e:"-",c:p,r:10};var t={cN:"string",b:"%[qw]?\\|",e:"\\|",c:p,r:10};var e={cN:"function",b:"\\bdef\\s+",e:" |$|;",l:g,k:n,c:[{cN:"title",b:a,l:g,k:n},{cN:"params",b:"\\(",e:"\\)",l:g,k:n},d,c,b]};var f={cN:"identifier",b:g,l:g,k:n,r:0};var v=[d,c,b,s,r,q,o,m,l,k,j,i,t,{cN:"class",b:"\\b(class|module)\\b",e:"$|;",k:{"class":1,module:1},c:[{cN:"title",b:"[A-Za-z_]\\w*(::\\w+)*(\\?|\\!)?",r:0},{cN:"inheritance",b:"<\\s*",c:[{cN:"parent",b:"("+hljs.IR+"::)?"+hljs.IR}]},d,c,b]},e,{cN:"constant",b:"(::)?([A-Z]\\w*(::)?)+",r:0},{cN:"symbol",b:":",c:[s,r,q,o,m,l,k,j,i,t,f],r:0},{cN:"number",b:"(\\b0[0-7_]+)|(\\b0x[0-9a-fA-F_]+)|(\\b[1-9][0-9_]*(\\.[0-9_]+)?)|[0_]\\b",r:0},{cN:"number",b:"\\?\\w"},{cN:"variable",b:"(\\$\\W)|((\\$|\\@\\@?)(\\w+))"},f,{b:"("+hljs.RSR+")\\s*",c:[d,c,b,{cN:"regexp",b:"/",e:"/[a-z]*",i:"\\n",c:[hljs.BE]}],r:0}];u.c=v;e.c[1].c=v;return{dM:{l:g,k:n,c:v}}}();hljs.LANGUAGES.diff={cI:true,dM:{c:[{cN:"chunk",b:"^\\@\\@ +\\-\\d+,\\d+ +\\+\\d+,\\d+ +\\@\\@$",r:10},{cN:"chunk",b:"^\\*\\*\\* +\\d+,\\d+ +\\*\\*\\*\\*$",r:10},{cN:"chunk",b:"^\\-\\-\\- +\\d+,\\d+ +\\-\\-\\-\\-$",r:10},{cN:"header",b:"Index: ",e:"$"},{cN:"header",b:"=====",e:"=====$"},{cN:"header",b:"^\\-\\-\\-",e:"$"},{cN:"header",b:"^\\*{3} ",e:"$"},{cN:"header",b:"^\\+\\+\\+",e:"$"},{cN:"header",b:"\\*{5}",e:"\\*{5}$"},{cN:"addition",b:"^\\+",e:"$"},{cN:"deletion",b:"^\\-",e:"$"},{cN:"change",b:"^\\!",e:"$"}]}};hljs.LANGUAGES.rib={dM:{k:{keyword:{ArchiveRecord:1,AreaLightSource:1,Atmosphere:1,Attribute:1,AttributeBegin:1,AttributeEnd:1,Basis:1,Begin:1,Blobby:1,Bound:1,Clipping:1,ClippingPlane:1,Color:1,ColorSamples:1,ConcatTransform:1,Cone:1,CoordinateSystem:1,CoordSysTransform:1,CropWindow:1,Curves:1,Cylinder:1,DepthOfField:1,Detail:1,DetailRange:1,Disk:1,Displacement:1,Display:1,End:1,ErrorHandler:1,Exposure:1,Exterior:1,Format:1,FrameAspectRatio:1,FrameBegin:1,FrameEnd:1,GeneralPolygon:1,GeometricApproximation:1,Geometry:1,Hider:1,Hyperboloid:1,Identity:1,Illuminate:1,Imager:1,Interior:1,LightSource:1,MakeCubeFaceEnvironment:1,MakeLatLongEnvironment:1,MakeShadow:1,MakeTexture:1,Matte:1,MotionBegin:1,MotionEnd:1,NuPatch:1,ObjectBegin:1,ObjectEnd:1,ObjectInstance:1,Opacity:1,Option:1,Orientation:1,Paraboloid:1,Patch:1,PatchMesh:1,Perspective:1,PixelFilter:1,PixelSamples:1,PixelVariance:1,Points:1,PointsGeneralPolygons:1,PointsPolygons:1,Polygon:1,Procedural:1,Projection:1,Quantize:1,ReadArchive:1,RelativeDetail:1,ReverseOrientation:1,Rotate:1,Scale:1,ScreenWindow:1,ShadingInterpolation:1,ShadingRate:1,Shutter:1,Sides:1,Skew:1,SolidBegin:1,SolidEnd:1,Sphere:1,SubdivisionMesh:1,Surface:1,TextureCoordinates:1,Torus:1,Transform:1,TransformBegin:1,TransformEnd:1,TransformPoints:1,Translate:1,TrimCurve:1,WorldBegin:1,WorldEnd:1}},i:"</",c:[hljs.HCM,hljs.CNM,hljs.ASM,hljs.QSM]}};hljs.LANGUAGES.rsl={dM:{k:{keyword:{"float":1,color:1,point:1,normal:1,vector:1,matrix:1,"while":1,"for":1,"if":1,"do":1,"return":1,"else":1,"break":1,extern:1,"continue":1},built_in:{abs:1,acos:1,ambient:1,area:1,asin:1,atan:1,atmosphere:1,attribute:1,calculatenormal:1,ceil:1,cellnoise:1,clamp:1,comp:1,concat:1,cos:1,degrees:1,depth:1,Deriv:1,diffuse:1,distance:1,Du:1,Dv:1,environment:1,exp:1,faceforward:1,filterstep:1,floor:1,format:1,fresnel:1,incident:1,length:1,lightsource:1,log:1,match:1,max:1,min:1,mod:1,noise:1,normalize:1,ntransform:1,opposite:1,option:1,phong:1,pnoise:1,pow:1,printf:1,ptlined:1,radians:1,random:1,reflect:1,refract:1,renderinfo:1,round:1,setcomp:1,setxcomp:1,setycomp:1,setzcomp:1,shadow:1,sign:1,sin:1,smoothstep:1,specular:1,specularbrdf:1,spline:1,sqrt:1,step:1,tan:1,texture:1,textureinfo:1,trace:1,transform:1,vtransform:1,xcomp:1,ycomp:1,zcomp:1}},i:"</",c:[hljs.CLCM,hljs.CBLCLM,hljs.QSM,hljs.ASM,hljs.CNM,{cN:"preprocessor",b:"#",e:"$"},{cN:"shader",b:"surface |displacement |light |volume |imager ",e:"\\(",k:{surface:1,displacement:1,light:1,volume:1,imager:1}},{cN:"shading",b:"illuminate|illuminance|gather",e:"\\(",k:{illuminate:1,illuminance:1,gather:1}}]}};hljs.LANGUAGES.javascript={dM:{k:{keyword:{"in":1,"if":1,"for":1,"while":1,"finally":1,"var":1,"new":1,"function":1,"do":1,"return":1,"void":1,"else":1,"break":1,"catch":1,"instanceof":1,"with":1,"throw":1,"case":1,"default":1,"try":1,"this":1,"switch":1,"continue":1,"typeof":1,"delete":1},literal:{"true":1,"false":1,"null":1}},c:[hljs.ASM,hljs.QSM,hljs.CLCM,hljs.CBLCLM,hljs.CNM,{b:"("+hljs.RSR+"|case|return|throw)\\s*",k:{"return":1,"throw":1,"case":1},c:[hljs.CLCM,hljs.CBLCLM,{cN:"regexp",b:"/.*?[^\\\\/]/[gim]*"}],r:0},{cN:"function",b:"\\bfunction\\b",e:"{",k:{"function":1},c:[{cN:"title",b:"[A-Za-z$_][0-9A-Za-z$_]*"},{cN:"params",b:"\\(",e:"\\)",c:[hljs.ASM,hljs.QSM,hljs.CLCM,hljs.CBLCLM]}]}]}};hljs.LANGUAGES.lua=function(){var b="\\[=*\\[";var e="\\]=*\\]";var a={b:b,e:e};a.c=[a];var d={cN:"comment",b:"--(?!"+b+")",e:"$"};var c={cN:"comment",b:"--"+b,e:e,c:[a],r:10};return{dM:{l:hljs.UIR,k:{keyword:{and:1,"break":1,"do":1,"else":1,elseif:1,end:1,"false":1,"for":1,"if":1,"in":1,local:1,nil:1,not:1,or:1,repeat:1,"return":1,then:1,"true":1,until:1,"while":1},built_in:{_G:1,_VERSION:1,assert:1,collectgarbage:1,dofile:1,error:1,getfenv:1,getmetatable:1,ipairs:1,load:1,loadfile:1,loadstring:1,module:1,next:1,pairs:1,pcall:1,print:1,rawequal:1,rawget:1,rawset:1,require:1,select:1,setfenv:1,setmetatable:1,tonumber:1,tostring:1,type:1,unpack:1,xpcall:1,coroutine:1,debug:1,io:1,math:1,os:1,"package":1,string:1,table:1}},c:[d,c,{cN:"function",b:"\\bfunction\\b",e:"\\)",k:{"function":1},c:[{cN:"title",b:"([_a-zA-Z]\\w*\\.)*([_a-zA-Z]\\w*:)?[_a-zA-Z]\\w*"},{cN:"params",b:"\\(",eW:true,c:[d,c]},d,c]},hljs.CNM,hljs.ASM,hljs.QSM,{cN:"string",b:b,e:e,c:[a],r:10}]}}}();hljs.LANGUAGES.css=function(){var a={cN:"function",b:hljs.IR+"\\(",e:"\\)",c:[{eW:true,eE:true,c:[hljs.NM,hljs.ASM,hljs.QSM]}]};return{cI:true,dM:{i:"[=/|']",c:[hljs.CBLCLM,{cN:"id",b:"\\#[A-Za-z0-9_-]+"},{cN:"class",b:"\\.[A-Za-z0-9_-]+",r:0},{cN:"attr_selector",b:"\\[",e:"\\]",i:"$"},{cN:"pseudo",b:":(:)?[a-zA-Z0-9\\_\\-\\+\\(\\)\\\"\\']+"},{cN:"at_rule",b:"@font-face",l:"[a-z-]+",k:{"font-face":1}},{cN:"at_rule",b:"@",e:"[{;]",eE:true,k:{"import":1,page:1,media:1,charset:1},c:[a,hljs.ASM,hljs.QSM,hljs.NM]},{cN:"tag",b:hljs.IR,r:0},{cN:"rules",b:"{",e:"}",i:"[^\\s]",r:0,c:[hljs.CBLCLM,{cN:"rule",b:"[^\\s]",rB:true,e:";",eW:true,c:[{cN:"attribute",b:"[A-Z\\_\\.\\-]+",e:":",eE:true,i:"[^\\s]",starts:{cN:"value",eW:true,eE:true,c:[a,hljs.NM,hljs.QSM,hljs.ASM,hljs.CBLCLM,{cN:"hexcolor",b:"\\#[0-9A-F]+"},{cN:"important",b:"!important"}]}}]}]}]}}}();hljs.LANGUAGES.xml=function(){var b="[A-Za-z0-9\\._:-]+";var a={eW:true,c:[{cN:"attribute",b:b,r:0},{b:'="',rB:true,e:'"',c:[{cN:"value",b:'"',eW:true}]},{b:"='",rB:true,e:"'",c:[{cN:"value",b:"'",eW:true}]},{b:"=",c:[{cN:"value",b:"[^\\s/>]+"}]}]};return{cI:true,dM:{c:[{cN:"pi",b:"<\\?",e:"\\?>",r:10},{cN:"doctype",b:"<!DOCTYPE",e:">",r:10},{cN:"comment",b:"<!--",e:"-->",r:10},{cN:"cdata",b:"<\\!\\[CDATA\\[",e:"\\]\\]>",r:10},{cN:"tag",b:"<style",e:">",k:{title:{style:1}},c:[a],starts:{cN:"css",e:"</style>",rE:true,sL:"css"}},{cN:"tag",b:"<script",e:">",k:{title:{script:1}},c:[a],starts:{cN:"javascript",e:"<\/script>",rE:true,sL:"javascript"}},{cN:"vbscript",b:"<%",e:"%>",sL:"vbscript"},{cN:"tag",b:"</?",e:"/?>",c:[{cN:"title",b:"[^ />]+"},a]}]}}}();hljs.LANGUAGES.lisp=function(){var m="[a-zA-Z_\\-\\+\\*\\/\\<\\=\\>\\&\\#][a-zA-Z0-9_\\-\\+\\*\\/\\<\\=\\>\\&\\#]*";var n="(\\-|\\+)?\\d+(\\.\\d+|\\/\\d+)?((d|e|f|l|s)(\\+|\\-)?\\d+)?";var c={cN:"literal",b:"\\b(t{1}|nil)\\b"};var o={cN:"number",b:n};var p={cN:"number",b:"#b[0-1]+(/[0-1]+)?"};var q={cN:"number",b:"#o[0-7]+(/[0-7]+)?"};var a={cN:"number",b:"#x[0-9a-f]+(/[0-9a-f]+)?"};var b={cN:"number",b:"#c\\("+n+" +"+n,e:"\\)"};var e={cN:"string",b:'"',e:'"',c:[hljs.BE],r:0};var l={cN:"comment",b:";",e:"$"};var d={cN:"variable",b:"\\*",e:"\\*"};var k={cN:"keyword",b:"[:&]"+m};var i={b:"\\(",e:"\\)"};i.c=[i,c,o,p,q,a,b,e];var g={cN:"quoted",b:"['`]\\(",e:"\\)",c:[o,p,q,a,b,e,d,k,i]};var f={cN:"quoted",b:"\\(quote ",e:"\\)",k:{title:{quote:1}},c:[o,p,q,a,b,e,d,k,i]};var j={cN:"list",b:"\\(",e:"\\)"};var h={cN:"body",eW:true,eE:true};j.c=[{cN:"title",b:m},h];h.c=[g,f,j,c,o,p,q,a,b,e,l,d,k];return{cI:true,dM:{i:"[^\\s]",c:[c,o,p,q,a,b,e,l,g,f,j]}}}();hljs.LANGUAGES.profile={dM:{c:[hljs.CNM,{cN:"builtin",b:"{",e:"}$",eB:true,eE:true,c:[hljs.ASM,hljs.QSM],r:0},{cN:"filename",b:"(/w|[a-zA-Z_][\da-zA-Z_]+\\.[\da-zA-Z_]{1,3})",e:":",eE:true},{cN:"header",b:"(ncalls|tottime|cumtime)",e:"$",k:{ncalls:1,tottime:10,cumtime:10,filename:1},r:10},{cN:"summary",b:"function calls",e:"$",c:[hljs.CNM],r:10},hljs.ASM,hljs.QSM,{cN:"function",b:"\\(",e:"\\)$",c:[{cN:"title",b:hljs.UIR,r:0}],r:0}]}};hljs.LANGUAGES.java={dM:{k:{"false":1,"synchronized":1,"int":1,"abstract":1,"float":1,"private":1,"char":1,"interface":1,"boolean":1,"static":1,"null":1,"if":1,"const":1,"for":1,"true":1,"while":1,"long":1,"throw":1,strictfp:1,"finally":1,"protected":1,"extends":1,"import":1,"native":1,"final":1,"implements":1,"return":1,"void":1,"enum":1,"else":1,"break":1,"transient":1,"new":1,"catch":1,"instanceof":1,"byte":1,"super":1,"class":1,"volatile":1,"case":1,assert:1,"short":1,"package":1,"default":1,"double":1,"public":1,"try":1,"this":1,"switch":1,"continue":1,"throws":1},c:[{cN:"javadoc",b:"/\\*\\*",e:"\\*/",c:[{cN:"javadoctag",b:"@[A-Za-z]+"}],r:10},hljs.CLCM,hljs.CBLCLM,hljs.ASM,hljs.QSM,{cN:"class",b:"(class |interface )",e:"{",k:{"class":1,"interface":1},i:":",c:[{b:"(implements|extends)",k:{"extends":1,"implements":1},r:10},{cN:"title",b:hljs.UIR}]},hljs.CNM,{cN:"annotation",b:"@[A-Za-z]+"}]}};hljs.LANGUAGES.php={cI:true,dM:{k:{and:1,include_once:1,list:1,"abstract":1,global:1,"private":1,echo:1,"interface":1,as:1,"static":1,endswitch:1,array:1,"null":1,"if":1,endwhile:1,or:1,"const":1,"for":1,endforeach:1,self:1,"var":1,"while":1,isset:1,"public":1,"protected":1,exit:1,foreach:1,"throw":1,elseif:1,"extends":1,include:1,__FILE__:1,empty:1,require_once:1,"function":1,"do":1,xor:1,"return":1,"implements":1,parent:1,clone:1,use:1,__CLASS__:1,__LINE__:1,"else":1,"break":1,print:1,"eval":1,"new":1,"catch":1,__METHOD__:1,"class":1,"case":1,exception:1,php_user_filter:1,"default":1,die:1,require:1,__FUNCTION__:1,enddeclare:1,"final":1,"try":1,"this":1,"switch":1,"continue":1,endfor:1,endif:1,declare:1,unset:1,"true":1,"false":1,namespace:1},c:[hljs.CLCM,hljs.HCM,{cN:"comment",b:"/\\*",e:"\\*/",c:[{cN:"phpdoc",b:"\\s@[A-Za-z]+",r:10}]},hljs.CNM,hljs.inherit(hljs.ASM,{i:null}),hljs.inherit(hljs.QSM,{i:null}),{cN:"variable",b:"\\$[a-zA-Z_\x7f-\xff][a-zA-Z0-9_\x7f-\xff]*"},{cN:"preprocessor",b:"<\\?php",r:10},{cN:"preprocessor",b:"\\?>"}]}};hljs.LANGUAGES.haskell=function(){var a={cN:"label",b:"\\b[A-Z][\\w\\']*",r:0};var b={cN:"container",b:"\\(",e:"\\)",c:[{cN:"label",b:"\\b[A-Z][\\w\\(\\)\\.\\']*"},{cN:"title",b:"[_a-z][\\w\\']*"}]};return{dM:{k:{keyword:{let:1,"in":1,"if":1,then:1,"else":1,"case":1,of:1,where:1,"do":1,module:1,"import":1,hiding:1,qualified:1,type:1,data:1,newtype:1,deriving:1,"class":1,instance:1,"null":1,not:1,as:1},built_in:{Bool:1,True:1,False:1,Int:1,Char:1,Maybe:1,Nothing:1,String:1}},c:[{cN:"comment",b:"--",e:"$"},{cN:"comment",b:"{-",e:"-}"},hljs.ASM,hljs.QSM,{cN:"import",b:"\\bimport",e:"$",k:{"import":1,qualified:1,as:1,hiding:1},c:[b]},{cN:"module",b:"\\bmodule",e:"where",k:{module:1,where:1},c:[b]},{cN:"class",b:"\\b(class|instance|data|(new)?type)",e:"(where|$)",k:{"class":1,where:1,instance:1,data:1,type:1,newtype:1,deriving:1},c:[a]},hljs.CNM,{cN:"shebang",b:"#!\\/usr\\/bin\\/env runhaskell",e:"$"},a,{cN:"title",b:"^[_a-z][\\w\\']*"}]}}}();hljs.LANGUAGES["1c"]=function(){var b="[a-zA-Zа-яА-Я][a-zA-Z0-9_а-яА-Я]*";var e={"возврат":1,"дата":1,"для":1,"если":1,"и":1,"или":1,"иначе":1,"иначеесли":1,"исключение":1,"конецесли":1,"конецпопытки":1,"конецпроцедуры":1,"конецфункции":1,"конеццикла":1,"константа":1,"не":1,"перейти":1,"перем":1,"перечисление":1,"по":1,"пока":1,"попытка":1,"прервать":1,"продолжить":1,"процедура":1,"строка":1,"тогда":1,"фс":1,"функция":1,"цикл":1,"число":1,"экспорт":1};var d={ansitooem:1,oemtoansi:1,"ввестивидсубконто":1,"ввестидату":1,"ввестизначение":1,"ввестиперечисление":1,"ввестипериод":1,"ввестиплансчетов":1,"ввестистроку":1,"ввестичисло":1,"вопрос":1,"восстановитьзначение":1,"врег":1,"выбранныйплансчетов":1,"вызватьисключение":1,"датагод":1,"датамесяц":1,"датачисло":1,"добавитьмесяц":1,"завершитьработусистемы":1,"заголовоксистемы":1,"записьжурналарегистрации":1,"запуститьприложение":1,"зафиксироватьтранзакцию":1,"значениевстроку":1,"значениевстрокувнутр":1,"значениевфайл":1,"значениеизстроки":1,"значениеизстрокивнутр":1,"значениеизфайла":1,"имякомпьютера":1,"имяпользователя":1,"каталогвременныхфайлов":1,"каталогиб":1,"каталогпользователя":1,"каталогпрограммы":1,"кодсимв":1,"командасистемы":1,"конгода":1,"конецпериодаби":1,"конецрассчитанногопериодаби":1,"конецстандартногоинтервала":1,"конквартала":1,"конмесяца":1,"коннедели":1,"лев":1,"лог":1,"лог10":1,"макс":1,"максимальноеколичествосубконто":1,"мин":1,"монопольныйрежим":1,"названиеинтерфейса":1,"названиенабораправ":1,"назначитьвид":1,"назначитьсчет":1,"найти":1,"найтипомеченныенаудаление":1,"найтиссылки":1,"началопериодаби":1,"началостандартногоинтервала":1,"начатьтранзакцию":1,"начгода":1,"начквартала":1,"начмесяца":1,"начнедели":1,"номерднягода":1,"номерднянедели":1,"номернеделигода":1,"нрег":1,"обработкаожидания":1,"окр":1,"описаниеошибки":1,"основнойжурналрасчетов":1,"основнойплансчетов":1,"основнойязык":1,"открытьформу":1,"открытьформумодально":1,"отменитьтранзакцию":1,"очиститьокносообщений":1,"периодстр":1,"полноеимяпользователя":1,"получитьвремята":1,"получитьдатута":1,"получитьдокументта":1,"получитьзначенияотбора":1,"получитьпозициюта":1,"получитьпустоезначение":1,"получитьта":1,"прав":1,"праводоступа":1,"предупреждение":1,"префиксавтонумерации":1,"пустаястрока":1,"пустоезначение":1,"рабочаядаттьпустоезначение":1,"получитьта":1,"прав":1,"праводоступа":1,"предупреждение":1,"префиксавтонумерации":1,"пустаястрока":1,"пустоезначение":1,"рабочаядата":1,"разделительстраниц":1,"разделительстрок":1,"разм":1,"разобратьпозициюдокумента":1,"рассчитатьрегистрына":1,"рассчитатьрегистрыпо":1,"сигнал":1,"симв":1,"символтабуляции":1,"создатьобъект":1,"сокрл":1,"сокрлп":1,"сокрп":1," сообщить":1,"состояние":1,"сохранитьзначение":1,"сред":1,"статусвозврата":1,"стрдлина":1,"стрзаменить":1,"стрколичествострок":1,"стрполучитьстроку":1," стрчисловхождений":1,"сформироватьпозициюдокумента":1,"счетпокоду":1,"текущаядата":1,"текущеевремя":1,"типзначения":1,"типзначениястр":1,"удалитьобъекты":1,"установитьтана":1,"установитьтапо":1,"фиксшаблон":1,"формат":1,"цел":1,"шаблон":1};var a={cN:"dquote",b:'""'};var c={cN:"string",b:'"',e:'"|$',c:[a],r:0};var f={cN:"string",b:"\\|",e:'"|$',c:[a]};return{cI:true,dM:{l:b,k:{keyword:e,built_in:d},c:[hljs.CLCM,hljs.NM,c,f,{cN:"function",b:"(процедура|функция)",e:"$",l:b,k:{"процедура":1,"экспорт":1,"функция":1},c:[{cN:"title",b:b},{cN:"tail",eW:true,c:[{cN:"params",b:"\\(",e:"\\)",l:b,k:{"знач":1},c:[c,f]},{cN:"export",b:"экспорт",eW:true,l:b,k:{"экспорт":1},c:[hljs.CLCM]}]},hljs.CLCM]},{cN:"preprocessor",b:"#",e:"$"},{cN:"date",b:"'\\d{2}\\.\\d{2}\\.(\\d{2}|\\d{4})'"}]}}}();hljs.LANGUAGES.python=function(){var c={cN:"string",b:"u?r?'''",e:"'''",r:10};var b={cN:"string",b:'u?r?"""',e:'"""',r:10};var a={cN:"string",b:"(u|r|ur)'",e:"'",c:[hljs.BE],r:10};var f={cN:"string",b:'(u|r|ur)"',e:'"',c:[hljs.BE],r:10};var d={cN:"title",b:hljs.UIR};var e={cN:"params",b:"\\(",e:"\\)",c:[c,b,a,f,hljs.ASM,hljs.QSM]};return{dM:{k:{keyword:{and:1,elif:1,is:1,global:1,as:1,"in":1,"if":1,from:1,raise:1,"for":1,except:1,"finally":1,print:1,"import":1,pass:1,"return":1,exec:1,"else":1,"break":1,not:1,"with":1,"class":1,assert:1,yield:1,"try":1,"while":1,"continue":1,del:1,or:1,def:1,lambda:1,nonlocal:10},built_in:{None:1,True:1,False:1,Ellipsis:1,NotImplemented:1}},i:"(</|->|\\?)",c:[hljs.HCM,c,b,a,f,hljs.ASM,hljs.QSM,{cN:"function",b:"\\bdef ",e:":",i:"$",k:{def:1},c:[d,e],r:10},{cN:"class",b:"\\bclass ",e:":",i:"[${]",k:{"class":1},c:[d,e],r:10},hljs.CNM,{cN:"decorator",b:"@",e:"$"}]}}}();hljs.LANGUAGES.smalltalk=function(){var b="[a-z][a-zA-Z0-9_]*";var c={cN:"char",b:"\\$.{1}"};var a={cN:"symbol",b:"#"+hljs.UIR};return{dM:{k:{self:1,"super":1,nil:1,"true":1,"false":1,thisContext:1},c:[{cN:"comment",b:'"',e:'"',r:0},hljs.ASM,{cN:"class",b:"\\b[A-Z][A-Za-z0-9_]*",r:0},{cN:"method",b:b+":"},hljs.CNM,a,c,{cN:"localvars",b:"\\|\\s*(("+b+")\\s*)+\\|"},{cN:"array",b:"\\#\\(",e:"\\)",c:[hljs.ASM,c,hljs.CNM,a]}]}}}();hljs.LANGUAGES.tex=function(){var c={cN:"command",b:"\\\\[a-zA-Zа-яА-я]+[\\*]?",r:10};var b={cN:"command",b:"\\\\[^a-zA-Zа-яА-я0-9]",r:0};var a={cN:"special",b:"[{}\\[\\]\\&#~]",r:0};return{dM:{c:[{b:"\\\\[a-zA-Zа-яА-я]+[\\*]? *= *-?\\d*\\.?\\d+(pt|pc|mm|cm|in|dd|cc|ex|em)?",rB:true,c:[c,b,{cN:"number",b:" *=",e:"-?\\d*\\.?\\d+(pt|pc|mm|cm|in|dd|cc|ex|em)?",eB:true}],r:10},c,b,a,{cN:"formula",b:"\\$\\$",e:"\\$\\$",c:[c,b,a],r:0},{cN:"formula",b:"\\$",e:"\\$",c:[c,b,a],r:0},{cN:"comment",b:"%",e:"$",r:0}]}}}();hljs.LANGUAGES.sql={cI:true,dM:{i:"[^\\s]",c:[{cN:"operator",b:"(begin|start|commit|rollback|savepoint|lock|alter|create|drop|rename|call|delete|do|handler|insert|load|replace|select|truncate|update|set|show|pragma)\\b",e:";|$",k:{keyword:{all:1,partial:1,global:1,month:1,current_timestamp:1,using:1,go:1,revoke:1,smallint:1,indicator:1,"end-exec":1,disconnect:1,zone:1,"with":1,character:1,assertion:1,to:1,add:1,current_user:1,usage:1,input:1,local:1,alter:1,match:1,collate:1,real:1,then:1,rollback:1,get:1,read:1,timestamp:1,session_user:1,not:1,integer:1,bit:1,unique:1,day:1,minute:1,desc:1,insert:1,execute:1,like:1,ilike:2,level:1,decimal:1,drop:1,"continue":1,isolation:1,found:1,where:1,constraints:1,domain:1,right:1,national:1,some:1,module:1,transaction:1,relative:1,second:1,connect:1,escape:1,close:1,system_user:1,"for":1,deferred:1,section:1,cast:1,current:1,sqlstate:1,allocate:1,intersect:1,deallocate:1,numeric:1,"public":1,preserve:1,full:1,"goto":1,initially:1,asc:1,no:1,key:1,output:1,collation:1,group:1,by:1,union:1,session:1,both:1,last:1,language:1,constraint:1,column:1,of:1,space:1,foreign:1,deferrable:1,prior:1,connection:1,unknown:1,action:1,commit:1,view:1,or:1,first:1,into:1,"float":1,year:1,primary:1,cascaded:1,except:1,restrict:1,set:1,references:1,names:1,table:1,outer:1,open:1,select:1,size:1,are:1,rows:1,from:1,prepare:1,distinct:1,leading:1,create:1,only:1,next:1,inner:1,authorization:1,schema:1,corresponding:1,option:1,declare:1,precision:1,immediate:1,"else":1,timezone_minute:1,external:1,varying:1,translation:1,"true":1,"case":1,exception:1,join:1,hour:1,"default":1,"double":1,scroll:1,value:1,cursor:1,descriptor:1,values:1,dec:1,fetch:1,procedure:1,"delete":1,and:1,"false":1,"int":1,is:1,describe:1,"char":1,as:1,at:1,"in":1,varchar:1,"null":1,trailing:1,any:1,absolute:1,current_time:1,end:1,grant:1,privileges:1,when:1,cross:1,check:1,write:1,current_date:1,pad:1,begin:1,temporary:1,exec:1,time:1,update:1,catalog:1,user:1,sql:1,date:1,on:1,identity:1,timezone_hour:1,natural:1,whenever:1,interval:1,work:1,order:1,cascade:1,diagnostics:1,nchar:1,having:1,left:1,call:1,"do":1,handler:1,load:1,replace:1,truncate:1,start:1,lock:1,show:1,pragma:1},aggregate:{count:1,sum:1,min:1,max:1,avg:1}},c:[{cN:"string",b:"'",e:"'",c:[hljs.BE,{b:"''"}],r:0},{cN:"string",b:'"',e:'"',c:[hljs.BE,{b:'""'}],r:0},{cN:"string",b:"`",e:"`",c:[hljs.BE]},hljs.CNM,{b:"\\n"}]},hljs.CBLCLM,{cN:"comment",b:"--",e:"$"}]}};hljs.LANGUAGES.vala={dM:{k:{keyword:{"char":1,uchar:1,unichar:1,"int":1,uint:1,"long":1,ulong:1,"short":1,ushort:1,int8:1,int16:1,int32:1,int64:1,uint8:1,uint16:1,uint32:1,uint64:1,"float":1,"double":1,bool:1,struct:1,"enum":1,string:1,"void":1,weak:5,unowned:5,owned:5,async:5,signal:5,"static":1,"abstract":1,"interface":1,override:1,"while":1,"do":1,"for":1,foreach:1,"else":1,"switch":1,"case":1,"break":1,"default":1,"return":1,"try":1,"catch":1,"public":1,"private":1,"protected":1,internal:1,using:1,"new":1,"this":1,get:1,set:1,"const":1,stdout:1,stdin:1,stderr:1,"var":1,DBus:2,GLib:2,CCode:10,Gee:10,Object:1},literal:{"false":1,"true":1,"null":1}},c:[{cN:"class",b:"(class |interface |delegate |namespace )",e:"{",k:{"class":1,"interface":1},c:[{b:"(implements|extends)",e:hljs.IMMEDIATE_RE,k:{"extends":1,"implements":1},r:1},{cN:"title",b:hljs.UIR,e:hljs.IMMEDIATE_RE}]},hljs.CLCM,hljs.CBLCLM,{cN:"string",b:'"""',e:'"""',r:5},hljs.ASM,hljs.QSM,hljs.CNM,{cN:"preprocessor",b:"^#",e:"$",r:2},{cN:"constant",b:" [A-Z_]+ ",e:hljs.IMMEDIATE_RE,r:0}]}};hljs.LANGUAGES.ini={cI:true,dM:{i:"[^\\s]",c:[{cN:"comment",b:";",e:"$"},{cN:"title",b:"^\\[",e:"\\]"},{cN:"setting",b:"^[a-z0-9_\\[\\]]+[ \\t]*=[ \\t]*",e:"$",c:[{cN:"value",eW:true,k:{on:1,off:1,"true":1,"false":1,yes:1,no:1},c:[hljs.QSM,hljs.NM]}]}]}};hljs.LANGUAGES.axapta={dM:{k:{"false":1,"int":1,"abstract":1,"private":1,"char":1,"interface":1,"boolean":1,"static":1,"null":1,"if":1,"for":1,"true":1,"while":1,"long":1,"throw":1,"finally":1,"protected":1,"extends":1,"final":1,"implements":1,"return":1,"void":1,"enum":1,"else":1,"break":1,"new":1,"catch":1,"byte":1,"super":1,"class":1,"case":1,"short":1,"default":1,"double":1,"public":1,"try":1,"this":1,"switch":1,"continue":1,reverse:1,firstfast:1,firstonly:1,forupdate:1,nofetch:1,sum:1,avg:1,minof:1,maxof:1,count:1,order:1,group:1,by:1,asc:1,desc:1,index:1,hint:1,like:1,dispaly:1,edit:1,client:1,server:1,ttsbegin:1,ttscommit:1,str:1,real:1,date:1,container:1,anytype:1,common:1,div:1,mod:1},c:[hljs.CLCM,hljs.CBLCLM,hljs.ASM,hljs.QSM,hljs.CNM,{cN:"preprocessor",b:"#",e:"$"},{cN:"class",b:"(class |interface )",e:"{",i:":",k:{"class":1,"interface":1},c:[{cN:"inheritance",b:"(implements|extends)",k:{"extends":1,"implements":1},r:10},{cN:"title",b:hljs.UIR}]}]}};hljs.LANGUAGES.perl=function(){var c={getpwent:1,getservent:1,quotemeta:1,msgrcv:1,scalar:1,kill:1,dbmclose:1,undef:1,lc:1,ma:1,syswrite:1,tr:1,send:1,umask:1,sysopen:1,shmwrite:1,vec:1,qx:1,utime:1,local:1,oct:1,semctl:1,localtime:1,readpipe:1,"do":1,"return":1,format:1,read:1,sprintf:1,dbmopen:1,pop:1,getpgrp:1,not:1,getpwnam:1,rewinddir:1,qq:1,fileno:1,qw:1,endprotoent:1,wait:1,sethostent:1,bless:1,s:1,opendir:1,"continue":1,each:1,sleep:1,endgrent:1,shutdown:1,dump:1,chomp:1,connect:1,getsockname:1,die:1,socketpair:1,close:1,flock:1,exists:1,index:1,shmget:1,sub:1,"for":1,endpwent:1,redo:1,lstat:1,msgctl:1,setpgrp:1,abs:1,exit:1,select:1,print:1,ref:1,gethostbyaddr:1,unshift:1,fcntl:1,syscall:1,"goto":1,getnetbyaddr:1,join:1,gmtime:1,symlink:1,semget:1,splice:1,x:1,getpeername:1,recv:1,log:1,setsockopt:1,cos:1,last:1,reverse:1,gethostbyname:1,getgrnam:1,study:1,formline:1,endhostent:1,times:1,chop:1,length:1,gethostent:1,getnetent:1,pack:1,getprotoent:1,getservbyname:1,rand:1,mkdir:1,pos:1,chmod:1,y:1,substr:1,endnetent:1,printf:1,next:1,open:1,msgsnd:1,readdir:1,use:1,unlink:1,getsockopt:1,getpriority:1,rindex:1,wantarray:1,hex:1,system:1,getservbyport:1,endservent:1,"int":1,chr:1,untie:1,rmdir:1,prototype:1,tell:1,listen:1,fork:1,shmread:1,ucfirst:1,setprotoent:1,"else":1,sysseek:1,link:1,getgrgid:1,shmctl:1,waitpid:1,unpack:1,getnetbyname:1,reset:1,chdir:1,grep:1,split:1,require:1,caller:1,lcfirst:1,until:1,warn:1,"while":1,values:1,shift:1,telldir:1,getpwuid:1,my:1,getprotobynumber:1,"delete":1,and:1,sort:1,uc:1,defined:1,srand:1,accept:1,"package":1,seekdir:1,getprotobyname:1,semop:1,our:1,rename:1,seek:1,"if":1,q:1,chroot:1,sysread:1,setpwent:1,no:1,crypt:1,getc:1,chown:1,sqrt:1,write:1,setnetent:1,setpriority:1,foreach:1,tie:1,sin:1,msgget:1,map:1,stat:1,getlogin:1,unless:1,elsif:1,truncate:1,exec:1,keys:1,glob:1,tied:1,closedir:1,ioctl:1,socket:1,readlink:1,"eval":1,xor:1,readline:1,binmode:1,setservent:1,eof:1,ord:1,bind:1,alarm:1,pipe:1,atan2:1,getgrent:1,exp:1,time:1,push:1,setgrent:1,gt:1,lt:1,or:1,ne:1,m:1};var d={cN:"subst",b:"[$@]\\{",e:"}",k:c,r:10};var b={cN:"variable",b:"\\$\\d"};var a={cN:"variable",b:"[\\$\\%\\@\\*](\\^\\w\\b|#\\w+(\\:\\:\\w+)*|[^\\s\\w{]|{\\w+}|\\w+(\\:\\:\\w*)*)"};var f=[hljs.BE,d,b,a];var e=[hljs.HCM,{cN:"comment",b:"^(__END__|__DATA__)",e:"\\n$",r:5},{cN:"string",b:"q[qwxr]?\\s*\\(",e:"\\)",c:f,r:5},{cN:"string",b:"q[qwxr]?\\s*\\[",e:"\\]",c:f,r:5},{cN:"string",b:"q[qwxr]?\\s*\\{",e:"\\}",c:f,r:5},{cN:"string",b:"q[qwxr]?\\s*\\|",e:"\\|",c:f,r:5},{cN:"string",b:"q[qwxr]?\\s*\\<",e:"\\>",c:f,r:5},{cN:"string",b:"qw\\s+q",e:"q",c:f,r:5},{cN:"string",b:"'",e:"'",c:[hljs.BE],r:0},{cN:"string",b:'"',e:'"',c:f,r:0},{cN:"string",b:"`",e:"`",c:[hljs.BE]},{cN:"string",b:"{\\w+}",r:0},{cN:"string",b:"-?\\w+\\s*\\=\\>",r:0},{cN:"number",b:"(\\b0[0-7_]+)|(\\b0x[0-9a-fA-F_]+)|(\\b[1-9][0-9_]*(\\.[0-9_]+)?)|[0_]\\b",r:0},{cN:"regexp",b:"(s|tr|y)/(\\\\.|[^/])*/(\\\\.|[^/])*/[a-z]*",r:10},{cN:"regexp",b:"(m|qr)?/",e:"/[a-z]*",c:[hljs.BE],r:0},{cN:"sub",b:"\\bsub\\b",e:"(\\s*\\(.*?\\))?[;{]",k:{sub:1},r:5},b,a,{cN:"operator",b:"-\\w\\b",r:0},{cN:"pod",b:"\\=\\w",e:"\\=cut"}];d.c=e;return{dM:{k:c,c:e}}}();hljs.LANGUAGES.scala=function(){var a={cN:"annotation",b:"@[A-Za-z]+"};var b={cN:"string",b:'u?r?"""',e:'"""',r:10};return{dM:{k:{type:1,yield:1,lazy:1,override:1,def:1,"with":1,val:1,"var":1,"false":1,"true":1,sealed:1,"abstract":1,"private":1,trait:1,object:1,"null":1,"if":1,"for":1,"while":1,"throw":1,"finally":1,"protected":1,"extends":1,"import":1,"final":1,"return":1,"else":1,"break":1,"new":1,"catch":1,"super":1,"class":1,"case":1,"package":1,"default":1,"try":1,"this":1,match:1,"continue":1,"throws":1},c:[{cN:"javadoc",b:"/\\*\\*",e:"\\*/",c:[{cN:"javadoctag",b:"@[A-Za-z]+"}],r:10},hljs.CLCM,hljs.CBLCLM,hljs.ASM,hljs.QSM,b,{cN:"class",b:"((case )?class |object |trait )",e:"({|$)",i:":",k:{"case":1,"class":1,trait:1,object:1},c:[{b:"(extends|with)",k:{"extends":1,"with":1},r:10},{cN:"title",b:hljs.UIR},{cN:"params",b:"\\(",e:"\\)",c:[hljs.ASM,hljs.QSM,b,a]}]},hljs.CNM,a]}}}();hljs.LANGUAGES.cmake={cI:true,dM:{k:{add_custom_command:2,add_custom_target:2,add_definitions:2,add_dependencies:2,add_executable:2,add_library:2,add_subdirectory:2,add_executable:2,add_library:2,add_subdirectory:2,add_test:2,aux_source_directory:2,"break":1,build_command:2,cmake_minimum_required:3,cmake_policy:3,configure_file:1,create_test_sourcelist:1,define_property:1,"else":1,elseif:1,enable_language:2,enable_testing:2,endforeach:1,endfunction:1,endif:1,endmacro:1,endwhile:1,execute_process:2,"export":1,find_file:1,find_library:2,find_package:2,find_path:1,find_program:1,fltk_wrap_ui:2,foreach:1,"function":1,get_cmake_property:3,get_directory_property:1,get_filename_component:1,get_property:1,get_source_file_property:1,get_target_property:1,get_test_property:1,"if":1,include:1,include_directories:2,include_external_msproject:1,include_regular_expression:2,install:1,link_directories:1,load_cache:1,load_command:1,macro:1,mark_as_advanced:1,message:1,option:1,output_required_files:1,project:1,qt_wrap_cpp:2,qt_wrap_ui:2,remove_definitions:2,"return":1,separate_arguments:1,set:1,set_directory_properties:1,set_property:1,set_source_files_properties:1,set_target_properties:1,set_tests_properties:1,site_name:1,source_group:1,string:1,target_link_libraries:2,try_compile:2,try_run:2,unset:1,variable_watch:2,"while":1,build_name:1,exec_program:1,export_library_dependencies:1,install_files:1,install_programs:1,install_targets:1,link_libraries:1,make_directory:1,remove:1,subdir_depends:1,subdirs:1,use_mangled_mesa:1,utility_source:1,variable_requires:1,write_file:1},c:[{cN:"envvar",b:"\\${",e:"}"},hljs.HCM,hljs.QSM,hljs.NM]}};hljs.LANGUAGES.objectivec=function(){var a={keyword:{"false":1,"int":1,"float":1,"while":1,"private":1,"char":1,"catch":1,"export":1,sizeof:2,typedef:2,"const":1,struct:1,"for":1,union:1,unsigned:1,"long":1,"volatile":2,"static":1,"protected":1,bool:1,mutable:1,"if":1,"public":1,"do":1,"return":1,"goto":1,"void":2,"enum":1,"else":1,"break":1,extern:1,"true":1,"class":1,asm:1,"case":1,"short":1,"default":1,"double":1,"throw":1,register:1,explicit:1,signed:1,typename:1,"try":1,"this":1,"switch":1,"continue":1,wchar_t:1,inline:1,readonly:1,assign:1,property:1,protocol:10,self:1,"synchronized":1,end:1,synthesize:50,id:1,optional:1,required:1,implementation:10,nonatomic:1,"interface":1,"super":1,unichar:1,"finally":2,dynamic:2,nil:1},built_in:{YES:5,NO:5,NULL:1,IBOutlet:50,IBAction:50,NSString:50,NSDictionary:50,CGRect:50,CGPoint:50,NSRange:50,release:1,retain:1,autorelease:50,UIButton:50,UILabel:50,UITextView:50,UIWebView:50,MKMapView:50,UISegmentedControl:50,NSObject:50,UITableViewDelegate:50,UITableViewDataSource:50,NSThread:50,UIActivityIndicator:50,UITabbar:50,UIToolBar:50,UIBarButtonItem:50,UIImageView:50,NSAutoreleasePool:50,UITableView:50,BOOL:1,NSInteger:20,CGFloat:20,NSException:50,NSLog:50,NSMutableString:50,NSMutableArray:50,NSMutableDictionary:50,NSURL:50}};return{dM:{k:a,i:"</",c:[hljs.CLCM,hljs.CBLCLM,hljs.CNM,hljs.QSM,{cN:"string",b:"'",e:"[^\\\\]'",i:"[^\\\\][^']"},{cN:"preprocessor",b:"#import",e:"$",c:[{cN:"title",b:'"',e:'"'},{cN:"title",b:"<",e:">"}]},{cN:"preprocessor",b:"#",e:"$"},{cN:"class",b:"interface|class|protocol|implementation",e:"({|$)",k:{"interface":1,"class":1,protocol:5,implementation:5},c:[{cN:"id",b:hljs.UIR}]}]}}}();hljs.LANGUAGES.avrasm={cI:true,dM:{k:{keyword:{adc:1,add:1,adiw:1,and:1,andi:1,asr:1,bclr:1,bld:1,brbc:1,brbs:1,brcc:1,brcs:1,"break":1,breq:1,brge:1,brhc:1,brhs:1,brid:1,brie:1,brlo:1,brlt:1,brmi:1,brne:1,brpl:1,brsh:1,brtc:1,brts:1,brvc:1,brvs:1,bset:1,bst:1,call:1,cbi:1,cbr:1,clc:1,clh:1,cli:1,cln:1,clr:1,cls:1,clt:1,clv:1,clz:1,com:1,cp:1,cpc:1,cpi:1,cpse:1,dec:1,eicall:1,eijmp:1,elpm:1,eor:1,fmul:1,fmuls:1,fmulsu:1,icall:1,ijmp:1,"in":1,inc:1,jmp:1,ld:1,ldd:1,ldi:1,lds:1,lpm:1,lsl:1,lsr:1,mov:1,movw:1,mul:1,muls:1,mulsu:1,neg:1,nop:1,or:1,ori:1,out:1,pop:1,push:1,rcall:1,ret:1,reti:1,rjmp:1,rol:1,ror:1,sbc:1,sbr:1,sbrc:1,sbrs:1,sec:1,seh:1,sbi:1,sbci:1,sbic:1,sbis:1,sbiw:1,sei:1,sen:1,ser:1,ses:1,set:1,sev:1,sez:1,sleep:1,spm:1,st:1,std:1,sts:1,sub:1,subi:1,swap:1,tst:1,wdr:1},built_in:{r0:1,r1:1,r2:1,r3:1,r4:1,r5:1,r6:1,r7:1,r8:1,r9:1,r10:1,r11:1,r12:1,r13:1,r14:1,r15:1,r16:1,r17:1,r18:1,r19:1,r20:1,r21:1,r22:1,r23:1,r24:1,r25:1,r26:1,r27:1,r28:1,r29:1,r30:1,r31:1,x:1,xh:1,xl:1,y:1,yh:1,yl:1,z:1,zh:1,zl:1,ucsr1c:1,udr1:1,ucsr1a:1,ucsr1b:1,ubrr1l:1,ubrr1h:1,ucsr0c:1,ubrr0h:1,tccr3c:1,tccr3a:1,tccr3b:1,tcnt3h:1,tcnt3l:1,ocr3ah:1,ocr3al:1,ocr3bh:1,ocr3bl:1,ocr3ch:1,ocr3cl:1,icr3h:1,icr3l:1,etimsk:1,etifr:1,tccr1c:1,ocr1ch:1,ocr1cl:1,twcr:1,twdr:1,twar:1,twsr:1,twbr:1,osccal:1,xmcra:1,xmcrb:1,eicra:1,spmcsr:1,spmcr:1,portg:1,ddrg:1,ping:1,portf:1,ddrf:1,sreg:1,sph:1,spl:1,xdiv:1,rampz:1,eicrb:1,eimsk:1,gimsk:1,gicr:1,eifr:1,gifr:1,timsk:1,tifr:1,mcucr:1,mcucsr:1,tccr0:1,tcnt0:1,ocr0:1,assr:1,tccr1a:1,tccr1b:1,tcnt1h:1,tcnt1l:1,ocr1ah:1,ocr1al:1,ocr1bh:1,ocr1bl:1,icr1h:1,icr1l:1,tccr2:1,tcnt2:1,ocr2:1,ocdr:1,wdtcr:1,sfior:1,eearh:1,eearl:1,eedr:1,eecr:1,porta:1,ddra:1,pina:1,portb:1,ddrb:1,pinb:1,portc:1,ddrc:1,pinc:1,portd:1,ddrd:1,pind:1,spdr:1,spsr:1,spcr:1,udr0:1,ucsr0a:1,ucsr0b:1,ubrr0l:1,acsr:1,admux:1,adcsr:1,adch:1,adcl:1,porte:1,ddre:1,pine:1,pinf:1}},c:[hljs.CBLCLM,{cN:"comment",b:";",e:"$"},hljs.CNM,hljs.QSM,{cN:"string",b:"'",e:"[^\\\\]'",i:"[^\\\\][^']"},{cN:"label",b:"^[A-Za-z0-9_.$]+:"},{cN:"preprocessor",b:"#",e:"$"},{cN:"preprocessor",b:"\\.[a-zA-Z]+"},{cN:"localvars",b:"@[0-9]+"}]}};hljs.LANGUAGES.vhdl={cI:true,dM:{k:{keyword:{abs:1,access:1,after:1,alias:1,all:1,and:1,architecture:2,array:1,assert:1,attribute:1,begin:1,block:1,body:1,buffer:1,bus:1,"case":1,component:2,configuration:1,constant:1,disconnect:2,downto:2,"else":1,elsif:1,end:1,entity:2,exit:1,file:1,"for":1,"function":1,generate:2,generic:2,group:1,guarded:2,"if":0,impure:2,"in":1,inertial:1,inout:1,is:1,label:1,library:1,linkage:1,literal:1,loop:1,map:1,mod:1,nand:1,"new":1,next:1,nor:1,not:1,"null":1,of:1,on:1,open:1,or:1,others:1,out:1,"package":1,port:2,postponed:1,procedure:1,process:1,pure:2,range:1,record:1,register:1,reject:1,"return":1,rol:1,ror:1,select:1,severity:1,signal:1,shared:1,sla:1,sli:1,sra:1,srl:1,subtype:2,then:1,to:1,transport:1,type:1,units:1,until:1,use:1,variable:1,wait:1,when:1,"while":1,"with":1,xnor:1,xor:1},type:{"boolean":1,bit:1,character:1,severity_level:2,integer:1,time:1,delay_length:2,natural:1,positive:1,string:1,bit_vector:2,file_open_kind:2,file_open_status:2,std_ulogic:2,std_ulogic_vector:2,std_logic:2,std_logic_vector:2}},c:[{cN:"comment",b:"--",e:"$"},hljs.QSM,hljs.CNM,{cN:"literal",b:"'(U|X|0|1|Z|W|L|H|-)",e:"'",c:[hljs.BE],r:5}]}};hljs.LANGUAGES.nginx=function(){var c={cN:"variable",b:"\\$\\d+"};var b={cN:"variable",b:"\\${",e:"}"};var a={cN:"variable",b:"[\\$\\@]"+hljs.UIR};return{dM:{c:[hljs.HCM,{b:hljs.UIR,e:";|{",rE:true,k:{accept_mutex:1,accept_mutex_delay:1,access_log:1,add_after_body:1,add_before_body:1,add_header:1,addition_types:1,alias:1,allow:1,ancient_browser:1,ancient_browser:1,ancient_browser_value:1,ancient_browser_value:1,auth_basic:1,auth_basic_user_file:1,autoindex:1,autoindex_exact_size:1,autoindex_localtime:1,"break":1,charset:1,charset:1,charset_map:1,charset_map:1,charset_types:1,charset_types:1,client_body_buffer_size:1,client_body_in_file_only:1,client_body_in_single_buffer:1,client_body_temp_path:1,client_body_timeout:1,client_header_buffer_size:1,client_header_timeout:1,client_max_body_size:1,connection_pool_size:1,connections:1,create_full_put_path:1,daemon:1,dav_access:1,dav_methods:1,debug_connection:1,debug_points:1,default_type:1,deny:1,directio:1,directio_alignment:1,echo:1,echo_after_body:1,echo_before_body:1,echo_blocking_sleep:1,echo_duplicate:1,echo_end:1,echo_exec:1,echo_flush:1,echo_foreach_split:1,echo_location:1,echo_location_async:1,echo_read_request_body:1,echo_request_body:1,echo_reset_timer:1,echo_sleep:1,echo_subrequest:1,echo_subrequest_async:1,empty_gif:1,empty_gif:1,env:1,error_log:1,error_log:1,error_page:1,events:1,expires:1,fastcgi_bind:1,fastcgi_buffer_size:1,fastcgi_buffers:1,fastcgi_busy_buffers_size:1,fastcgi_cache:1,fastcgi_cache_key:1,fastcgi_cache_methods:1,fastcgi_cache_min_uses:1,fastcgi_cache_path:1,fastcgi_cache_use_stale:1,fastcgi_cache_valid:1,fastcgi_catch_stderr:1,fastcgi_connect_timeout:1,fastcgi_hide_header:1,fastcgi_ignore_client_abort:1,fastcgi_ignore_headers:1,fastcgi_index:1,fastcgi_intercept_errors:1,fastcgi_max_temp_file_size:1,fastcgi_next_upstream:1,fastcgi_param:1,fastcgi_pass:1,fastcgi_pass_header:1,fastcgi_pass_request_body:1,fastcgi_pass_request_headers:1,fastcgi_read_timeout:1,fastcgi_send_lowat:1,fastcgi_send_timeout:1,fastcgi_split_path_info:1,fastcgi_store:1,fastcgi_store_access:1,fastcgi_temp_file_write_size:1,fastcgi_temp_path:1,fastcgi_upstream_fail_timeout:1,fastcgi_upstream_max_fails:1,flv:1,geo:1,geo:1,geoip_city:1,geoip_country:1,gzip:1,gzip_buffers:1,gzip_comp_level:1,gzip_disable:1,gzip_hash:1,gzip_http_version:1,gzip_min_length:1,gzip_no_buffer:1,gzip_proxied:1,gzip_static:1,gzip_types:1,gzip_vary:1,gzip_window:1,http:1,"if":1,if_modified_since:1,ignore_invalid_headers:1,image_filter:1,image_filter_buffer:1,image_filter_jpeg_quality:1,image_filter_transparency:1,include:1,index:1,internal:1,ip_hash:1,js:1,js_load:1,js_require:1,js_utf8:1,keepalive_requests:1,keepalive_timeout:1,kqueue_changes:1,kqueue_events:1,large_client_header_buffers:1,limit_conn:1,limit_conn_log_level:1,limit_except:1,limit_rate:1,limit_rate_after:1,limit_req:1,limit_req_log_level:1,limit_req_zone:1,limit_zone:1,lingering_time:1,lingering_timeout:1,listen:1,location:1,lock_file:1,log_format:1,log_not_found:1,log_subrequest:1,map:1,map_hash_bucket_size:1,map_hash_max_size:1,master_process:1,memcached_bind:1,memcached_buffer_size:1,memcached_connect_timeout:1,memcached_next_upstream:1,memcached_pass:1,memcached_read_timeout:1,memcached_send_timeout:1,memcached_upstream_fail_timeout:1,memcached_upstream_max_fails:1,merge_slashes:1,min_delete_depth:1,modern_browser:1,modern_browser:1,modern_browser_value:1,modern_browser_value:1,more_clear_headers:1,more_clear_input_headers:1,more_set_headers:1,more_set_input_headers:1,msie_padding:1,msie_refresh:1,multi_accept:1,open_file_cache:1,open_file_cache_errors:1,open_file_cache_events:1,open_file_cache_min_uses:1,open_file_cache_retest:1,open_file_cache_valid:1,open_log_file_cache:1,optimize_server_names:1,output_buffers:1,override_charset:1,override_charset:1,perl:1,perl_modules:1,perl_require:1,perl_set:1,pid:1,port_in_redirect:1,post_action:1,postpone_gzipping:1,postpone_output:1,proxy_bind:1,proxy_buffer_size:1,proxy_buffering:1,proxy_buffers:1,proxy_busy_buffers_size:1,proxy_cache:1,proxy_cache_key:1,proxy_cache_methods:1,proxy_cache_min_uses:1,proxy_cache_path:1,proxy_cache_use_stale:1,proxy_cache_valid:1,proxy_connect_timeout:1,proxy_headers_hash_bucket_size:1,proxy_headers_hash_max_size:1,proxy_hide_header:1,proxy_ignore_client_abort:1,proxy_ignore_headers:1,proxy_intercept_errors:1,proxy_max_temp_file_size:1,proxy_method:1,proxy_next_upstream:1,proxy_pass:1,proxy_pass_header:1,proxy_pass_request_body:1,proxy_pass_request_headers:1,proxy_read_timeout:1,proxy_redirect:1,proxy_send_lowat:1,proxy_send_timeout:1,proxy_set_body:1,proxy_set_header:1,proxy_store:1,proxy_store_access:1,proxy_temp_file_write_size:1,proxy_temp_path:1,proxy_upstream_fail_timeout:1,proxy_upstream_max_fails:1,push_authorized_channels_only:1,push_channel_group:1,push_max_channel_id_length:1,push_max_channel_subscribers:1,push_max_message_buffer_length:1,push_max_reserved_memory:1,push_message_buffer_length:1,push_message_timeout:1,push_min_message_buffer_length:1,push_min_message_recipients:1,push_publisher:1,push_store_messages:1,push_subscriber:1,push_subscriber_concurrency:1,random_index:1,read_ahead:1,real_ip_header:1,recursive_error_pages:1,request_pool_size:1,reset_timedout_connection:1,resolver:1,resolver_timeout:1,"return":1,rewrite:1,rewrite_log:1,root:1,satisfy:1,satisfy_any:1,send_lowat:1,send_timeout:1,sendfile:1,sendfile_max_chunk:1,server:1,server:1,server_name:1,server_name_in_redirect:1,server_names_hash_bucket_size:1,server_names_hash_max_size:1,server_tokens:1,set:1,set_real_ip_from:1,source_charset:1,source_charset:1,ssi:1,ssi_ignore_recycled_buffers:1,ssi_min_file_chunk:1,ssi_silent_errors:1,ssi_types:1,ssi_value_length:1,ssl:1,ssl_certificate:1,ssl_certificate_key:1,ssl_ciphers:1,ssl_client_certificate:1,ssl_crl:1,ssl_dhparam:1,ssl_prefer_server_ciphers:1,ssl_protocols:1,ssl_session_cache:1,ssl_session_timeout:1,ssl_verify_client:1,ssl_verify_depth:1,sub_filter:1,sub_filter_once:1,sub_filter_types:1,tcp_nodelay:1,tcp_nopush:1,timer_resolution:1,try_files:1,types:1,types_hash_bucket_size:1,types_hash_max_size:1,underscores_in_headers:1,uninitialized_variable_warn:1,upstream:1,use:1,user:1,userid:1,userid:1,userid_domain:1,userid_domain:1,userid_expires:1,userid_expires:1,userid_mark:1,userid_name:1,userid_name:1,userid_p3p:1,userid_p3p:1,userid_path:1,userid_path:1,userid_service:1,userid_service:1,valid_referers:1,variables_hash_bucket_size:1,variables_hash_max_size:1,worker_connections:1,worker_cpu_affinity:1,worker_priority:1,worker_processes:1,worker_rlimit_core:1,worker_rlimit_nofile:1,worker_rlimit_sigpending:1,working_directory:1,xml_entities:1,xslt_stylesheet:1,xslt_types:1},r:0,c:[hljs.HCM,{b:"\\s",e:"[;{]",rB:true,rE:true,l:"[a-z/]+",k:{built_in:{on:1,off:1,yes:1,no:1,"true":1,"false":1,none:1,blocked:1,debug:1,info:1,notice:1,warn:1,error:1,crit:1,select:1,permanent:1,redirect:1,kqueue:1,rtsig:1,epoll:1,poll:1,"/dev/poll":1}},r:0,c:[hljs.HCM,{cN:"string",b:'"',e:'"',c:[hljs.BE,c,b,a],r:0},{cN:"string",b:"'",e:"'",c:[hljs.BE,c,b,a],r:0},{cN:"string",b:"([a-z]+):/",e:"[;\\s]",rE:true},{cN:"regexp",b:"\\s\\^",e:"\\s|{|;",rE:true,c:[hljs.BE,c,b,a]},{cN:"regexp",b:"~\\*?\\s+",e:"\\s|{|;",rE:true,c:[hljs.BE,c,b,a]},{cN:"regexp",b:"\\*(\\.[a-z\\-]+)+",c:[hljs.BE,c,b,a]},{cN:"regexp",b:"([a-z\\-]+\\.)+\\*",c:[hljs.BE,c,b,a]},{cN:"number",b:"\\b\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}\\b"},{cN:"number",b:"\\s\\d+[kKmMgGdshdwy]*\\b",r:0},c,b,a]}]}]}}}();hljs.LANGUAGES.erlang_repl={dM:{k:{special_functions:{spawn:10,spawn_link:10,self:2},reserved:{after:1,and:1,andalso:5,band:1,begin:1,bnot:1,bor:1,bsl:1,bsr:1,bxor:1,"case":1,"catch":0,cond:1,div:1,end:1,fun:0,"if":0,let:1,not:0,of:1,or:1,orelse:5,query:1,receive:0,rem:1,"try":0,when:1,xor:1}},c:[{cN:"input_number",b:"^[0-9]+> ",r:10},{cN:"comment",b:"%",e:"$"},hljs.NM,hljs.ASM,hljs.QSM,{cN:"constant",b:"\\?(::)?([A-Z]\\w*(::)?)+"},{cN:"arrow",b:"->"},{cN:"ok",b:"ok"},{cN:"exclamation_mark",b:"!"},{cN:"function_or_atom",b:"(\\b[a-z'][a-zA-Z0-9_']*:[a-z'][a-zA-Z0-9_']*)|(\\b[a-z'][a-zA-Z0-9_']*)",r:0},{cN:"variable",b:"[A-Z][a-zA-Z0-9_']*",r:0}]}};hljs.LANGUAGES.django=function(){function c(f,e){return(e==undefined||(!f.cN&&e.cN=="tag")||f.cN=="value")}function d(j,e){var h={};for(var g in j){if(g!="contains"){h[g]=j[g]}var k=[];for(var f=0;j.c&&f<j.c.length;f++){k.push(d(j.c[f],j))}if(c(j,e)){k=b.concat(k)}if(k.length){h.c=k}}return h}var a={cN:"filter",b:"\\|[A-Za-z]+\\:?",eE:true,k:{truncatewords:1,removetags:1,linebreaksbr:1,yesno:1,get_digit:1,timesince:1,random:1,striptags:1,filesizeformat:1,escape:1,linebreaks:1,length_is:1,ljust:1,rjust:1,cut:1,urlize:1,fix_ampersands:1,title:1,floatformat:1,capfirst:1,pprint:1,divisibleby:1,add:1,make_list:1,unordered_list:1,urlencode:1,timeuntil:1,urlizetrunc:1,wordcount:1,stringformat:1,linenumbers:1,slice:1,date:1,dictsort:1,dictsortreversed:1,default_if_none:1,pluralize:1,lower:1,join:1,center:1,"default":1,truncatewords_html:1,upper:1,length:1,phone2numeric:1,wordwrap:1,time:1,addslashes:1,slugify:1,first:1},c:[{cN:"argument",b:'"',e:'"'}]};var b=[{cN:"template_comment",b:"{%\\s*comment\\s*%}",e:"{%\\s*endcomment\\s*%}"},{cN:"template_comment",b:"{#",e:"#}"},{cN:"template_tag",b:"{%",e:"%}",k:{comment:1,endcomment:1,load:1,templatetag:1,ifchanged:1,endifchanged:1,"if":1,endif:1,firstof:1,"for":1,endfor:1,"in":1,ifnotequal:1,endifnotequal:1,widthratio:1,"extends":1,include:1,spaceless:1,endspaceless:1,regroup:1,by:1,as:1,ifequal:1,endifequal:1,ssi:1,now:1,"with":1,cycle:1,url:1,filter:1,endfilter:1,debug:1,block:1,endblock:1,"else":1},c:[a]},{cN:"variable",b:"{{",e:"}}",c:[a]}];return{cI:true,dM:d(hljs.LANGUAGES.xml.dM)}}();hljs.LANGUAGES.delphi=function(){var a={and:1,safecall:1,cdecl:1,then:1,string:1,exports:1,library:1,not:1,pascal:1,set:1,virtual:1,file:1,"in":1,array:1,label:1,packed:1,"end.":1,index:1,"while":1,"const":1,raise:1,"for":1,to:1,implementation:1,"with":1,except:1,overload:1,destructor:1,downto:1,"finally":1,program:1,exit:1,unit:1,inherited:1,override:1,"if":1,type:1,until:1,"function":1,"do":1,begin:1,repeat:1,"goto":1,nil:1,far:1,initialization:1,object:1,"else":1,"var":1,uses:1,external:1,resourcestring:1,"interface":1,end:1,finalization:1,"class":1,asm:1,mod:1,"case":1,on:1,shr:1,shl:1,of:1,register:1,xorwrite:1,threadvar:1,"try":1,record:1,near:1,stored:1,constructor:1,stdcall:1,inline:1,div:1,out:1,or:1,procedure:1};var c={safecall:1,stdcall:1,pascal:1,stored:1,"const":1,implementation:1,finalization:1,except:1,to:1,"finally":1,program:1,inherited:1,override:1,then:1,exports:1,string:1,read:1,not:1,mod:1,shr:1,"try":1,div:1,shl:1,set:1,library:1,message:1,packed:1,index:1,"for":1,near:1,overload:1,label:1,downto:1,exit:1,"public":1,"goto":1,"interface":1,asm:1,on:1,of:1,constructor:1,or:1,"private":1,array:1,unit:1,raise:1,destructor:1,"var":1,type:1,until:1,"function":1,"else":1,external:1,"with":1,"case":1,"default":1,record:1,"while":1,"protected":1,property:1,procedure:1,published:1,and:1,cdecl:1,"do":1,threadvar:1,file:1,"in":1,"if":1,end:1,virtual:1,write:1,far:1,out:1,begin:1,repeat:1,nil:1,initialization:1,object:1,uses:1,resourcestring:1,"class":1,register:1,xorwrite:1,inline:1,"static":1};var f={cN:"comment",b:"{",e:"}",r:0};var e={cN:"comment",b:"\\(\\*",e:"\\*\\)",r:10};var d={cN:"string",b:"'",e:"'",c:[{b:"''"}],r:0};var b={cN:"string",b:"(#\\d+)+"};var g={cN:"function",b:"(procedure|constructor|destructor|function)\\b",e:"[:;]",k:{"function":1,constructor:10,destructor:10,procedure:10},c:[{cN:"title",b:hljs.IR},{cN:"params",b:"\\(",e:"\\)",k:a,c:[d,b]},f,e]};return{cI:true,dM:{k:a,i:'("|\\$[G-Zg-z]|\\/\\*|</)',c:[f,e,hljs.CLCM,d,b,hljs.NM,g,{cN:"class",b:"=\\bclass\\b",e:"end;",k:c,c:[d,b,f,e,g]}]},m:[]}}();hljs.LANGUAGES.vbscript={cI:true,dM:{k:{keyword:{call:1,"class":1,"const":1,dim:1,"do":1,loop:1,erase:1,execute:1,executeglobal:1,exit:1,"for":1,each:1,next:1,"function":1,"if":1,then:1,"else":1,on:1,error:1,option:1,explicit:1,"new":1,"private":1,property:1,let:1,get:1,"public":1,randomize:1,redim:1,rem:1,select:1,"case":1,set:1,stop:1,sub:1,"while":1,wend:1,"with":1,end:1,to:1,elseif:1,is:1,or:1,xor:1,and:1,not:1,class_initialize:1,class_terminate:1,"default":1,preserve:1,"in":1,me:1,byval:1,byref:1,step:1,resume:1,"goto":1},built_in:{lcase:1,month:1,vartype:1,instrrev:1,ubound:1,setlocale:1,getobject:1,rgb:1,getref:1,string:1,weekdayname:1,rnd:1,dateadd:1,monthname:1,now:1,day:1,minute:1,isarray:1,cbool:1,round:1,formatcurrency:1,conversions:1,csng:1,timevalue:1,second:1,year:1,space:1,abs:1,clng:1,timeserial:1,fixs:1,len:1,asc:1,isempty:1,maths:1,dateserial:1,atn:1,timer:1,isobject:1,filter:1,weekday:1,datevalue:1,ccur:1,isdate:1,instr:1,datediff:1,formatdatetime:1,replace:1,isnull:1,right:1,sgn:1,array:1,snumeric:1,log:1,cdbl:1,hex:1,chr:1,lbound:1,msgbox:1,ucase:1,getlocale:1,cos:1,cdate:1,cbyte:1,rtrim:1,join:1,hour:1,oct:1,typename:1,trim:1,strcomp:1,"int":1,createobject:1,loadpicture:1,tan:1,formatnumber:1,mid:1,scriptenginebuildversion:1,scriptengine:1,split:1,scriptengineminorversion:1,cint:1,sin:1,datepart:1,ltrim:1,sqr:1,scriptenginemajorversion:1,time:1,derived:1,"eval":1,date:1,formatpercent:1,exp:1,inputbox:1,left:1,ascw:1,chrw:1,regexp:1,server:1,response:1,request:1,cstr:1,err:1},literal:{"true":1,"false":1,"null":1,nothing:1,empty:1}},c:[{cN:"string",b:'"',e:'"',i:"\\n",c:[{b:'""'}],r:0},{cN:"comment",b:"'",e:"$"},hljs.CNM]}};hljs.LANGUAGES.mel={dM:{k:{"int":1,"float":1,string:1,"float":1,vector:1,matrix:1,"if":1,"else":1,"switch":1,"case":1,"default":1,"while":1,"do":1,"for":1,"in":1,"break":1,"continue":1,exists:1,objExists:1,attributeExists:1,global:1,proc:1,"return":1,error:1,warning:1,trace:1,"catch":1,about:1,abs:1,addAttr:1,addAttributeEditorNodeHelp:1,addDynamic:1,addNewShelfTab:1,addPP:1,addPanelCategory:1,addPrefixToName:1,advanceToNextDrivenKey:1,affectedNet:1,affects:1,aimConstraint:1,air:1,alias:1,aliasAttr:1,align:1,alignCtx:1,alignCurve:1,alignSurface:1,allViewFit:1,ambientLight:1,angle:1,angleBetween:1,animCone:1,animCurveEditor:1,animDisplay:1,animView:1,annotate:1,appendStringArray:1,applicationName:1,applyAttrPreset:1,applyTake:1,arcLenDimContext:1,arcLengthDimension:1,arclen:1,arrayMapper:1,art3dPaintCtx:1,artAttrCtx:1,artAttrPaintVertexCtx:1,artAttrSkinPaintCtx:1,artAttrTool:1,artBuildPaintMenu:1,artFluidAttrCtx:1,artPuttyCtx:1,artSelectCtx:1,artSetPaintCtx:1,artUserPaintCtx:1,assignCommand:1,assignInputDevice:1,assignViewportFactories:1,attachCurve:1,attachDeviceAttr:1,attachSurface:1,attrColorSliderGrp:1,attrCompatibility:1,attrControlGrp:1,attrEnumOptionMenu:1,attrEnumOptionMenuGrp:1,attrFieldGrp:1,attrFieldSliderGrp:1,attrNavigationControlGrp:1,attrPresetEditWin:1,attributeExists:1,attributeInfo:1,attributeMenu:1,attributeQuery:1,autoKeyframe:1,autoPlace:1,bakeClip:1,bakeFluidShading:1,bakePartialHistory:1,bakeResults:1,bakeSimulation:1,basename:1,basenameEx:1,batchRender:1,bessel:1,bevel:1,bevelPlus:1,binMembership:1,bindSkin:1,blend2:1,blendShape:1,blendShapeEditor:1,blendShapePanel:1,blendTwoAttr:1,blindDataType:1,boneLattice:1,boundary:1,boxDollyCtx:1,boxZoomCtx:1,bufferCurve:1,buildBookmarkMenu:1,buildKeyframeMenu:1,button:1,buttonManip:1,CBG:1,cacheFile:1,cacheFileCombine:1,cacheFileMerge:1,cacheFileTrack:1,camera:1,cameraView:1,canCreateManip:1,canvas:1,capitalizeString:1,"catch":1,catchQuiet:1,ceil:1,changeSubdivComponentDisplayLevel:1,changeSubdivRegion:1,channelBox:1,character:1,characterMap:1,characterOutlineEditor:1,characterize:1,chdir:1,checkBox:1,checkBoxGrp:1,checkDefaultRenderGlobals:1,choice:1,circle:1,circularFillet:1,clamp:1,clear:1,clearCache:1,clip:1,clipEditor:1,clipEditorCurrentTimeCtx:1,clipSchedule:1,clipSchedulerOutliner:1,clipTrimBefore:1,closeCurve:1,closeSurface:1,cluster:1,cmdFileOutput:1,cmdScrollFieldExecuter:1,cmdScrollFieldReporter:1,cmdShell:1,coarsenSubdivSelectionList:1,collision:1,color:1,colorAtPoint:1,colorEditor:1,colorIndex:1,colorIndexSliderGrp:1,colorSliderButtonGrp:1,colorSliderGrp:1,columnLayout:1,commandEcho:1,commandLine:1,commandPort:1,compactHairSystem:1,componentEditor:1,compositingInterop:1,computePolysetVolume:1,condition:1,cone:1,confirmDialog:1,connectAttr:1,connectControl:1,connectDynamic:1,connectJoint:1,connectionInfo:1,constrain:1,constrainValue:1,constructionHistory:1,container:1,containsMultibyte:1,contextInfo:1,control:1,convertFromOldLayers:1,convertIffToPsd:1,convertLightmap:1,convertSolidTx:1,convertTessellation:1,convertUnit:1,copyArray:1,copyFlexor:1,copyKey:1,copySkinWeights:1,cos:1,cpButton:1,cpCache:1,cpClothSet:1,cpCollision:1,cpConstraint:1,cpConvClothToMesh:1,cpForces:1,cpGetSolverAttr:1,cpPanel:1,cpProperty:1,cpRigidCollisionFilter:1,cpSeam:1,cpSetEdit:1,cpSetSolverAttr:1,cpSolver:1,cpSolverTypes:1,cpTool:1,cpUpdateClothUVs:1,createDisplayLayer:1,createDrawCtx:1,createEditor:1,createLayeredPsdFile:1,createMotionField:1,createNewShelf:1,createNode:1,createRenderLayer:1,createSubdivRegion:1,cross:1,crossProduct:1,ctxAbort:1,ctxCompletion:1,ctxEditMode:1,ctxTraverse:1,currentCtx:1,currentTime:1,currentTimeCtx:1,currentUnit:1,currentUnit:1,curve:1,curveAddPtCtx:1,curveCVCtx:1,curveEPCtx:1,curveEditorCtx:1,curveIntersect:1,curveMoveEPCtx:1,curveOnSurface:1,curveSketchCtx:1,cutKey:1,cycleCheck:1,cylinder:1,dagPose:1,date:1,defaultLightListCheckBox:1,defaultNavigation:1,defineDataServer:1,defineVirtualDevice:1,deformer:1,deg_to_rad:1,"delete":1,deleteAttr:1,deleteShadingGroupsAndMaterials:1,deleteShelfTab:1,deleteUI:1,deleteUnusedBrushes:1,delrandstr:1,detachCurve:1,detachDeviceAttr:1,detachSurface:1,deviceEditor:1,devicePanel:1,dgInfo:1,dgdirty:1,dgeval:1,dgtimer:1,dimWhen:1,directKeyCtx:1,directionalLight:1,dirmap:1,dirname:1,disable:1,disconnectAttr:1,disconnectJoint:1,diskCache:1,displacementToPoly:1,displayAffected:1,displayColor:1,displayCull:1,displayLevelOfDetail:1,displayPref:1,displayRGBColor:1,displaySmoothness:1,displayStats:1,displayString:1,displaySurface:1,distanceDimContext:1,distanceDimension:1,doBlur:1,dolly:1,dollyCtx:1,dopeSheetEditor:1,dot:1,dotProduct:1,doubleProfileBirailSurface:1,drag:1,dragAttrContext:1,draggerContext:1,dropoffLocator:1,duplicate:1,duplicateCurve:1,duplicateSurface:1,dynCache:1,dynControl:1,dynExport:1,dynExpression:1,dynGlobals:1,dynPaintEditor:1,dynParticleCtx:1,dynPref:1,dynRelEdPanel:1,dynRelEditor:1,dynamicLoad:1,editAttrLimits:1,editDisplayLayerGlobals:1,editDisplayLayerMembers:1,editRenderLayerAdjustment:1,editRenderLayerGlobals:1,editRenderLayerMembers:1,editor:1,editorTemplate:1,effector:1,emit:1,emitter:1,enableDevice:1,encodeString:1,endString:1,endsWith:1,env:1,equivalent:1,equivalentTol:1,erf:1,error:1,"eval":1,"eval":1,evalDeferred:1,evalEcho:1,event:1,exactWorldBoundingBox:1,exclusiveLightCheckBox:1,exec:1,executeForEachObject:1,exists:1,exp:1,expression:1,expressionEditorListen:1,extendCurve:1,extendSurface:1,extrude:1,fcheck:1,fclose:1,feof:1,fflush:1,fgetline:1,fgetword:1,file:1,fileBrowserDialog:1,fileDialog:1,fileExtension:1,fileInfo:1,filetest:1,filletCurve:1,filter:1,filterCurve:1,filterExpand:1,filterStudioImport:1,findAllIntersections:1,findAnimCurves:1,findKeyframe:1,findMenuItem:1,findRelatedSkinCluster:1,finder:1,firstParentOf:1,fitBspline:1,flexor:1,floatEq:1,floatField:1,floatFieldGrp:1,floatScrollBar:1,floatSlider:1,floatSlider2:1,floatSliderButtonGrp:1,floatSliderGrp:1,floor:1,flow:1,fluidCacheInfo:1,fluidEmitter:1,fluidVoxelInfo:1,flushUndo:1,fmod:1,fontDialog:1,fopen:1,formLayout:1,format:1,fprint:1,frameLayout:1,fread:1,freeFormFillet:1,frewind:1,fromNativePath:1,fwrite:1,gamma:1,gauss:1,geometryConstraint:1,getApplicationVersionAsFloat:1,getAttr:1,getClassification:1,getDefaultBrush:1,getFileList:1,getFluidAttr:1,getInputDeviceRange:1,getMayaPanelTypes:1,getModifiers:1,getPanel:1,getParticleAttr:1,getPluginResource:1,getenv:1,getpid:1,glRender:1,glRenderEditor:1,globalStitch:1,gmatch:1,goal:1,gotoBindPose:1,grabColor:1,gradientControl:1,gradientControlNoAttr:1,graphDollyCtx:1,graphSelectContext:1,graphTrackCtx:1,gravity:1,grid:1,gridLayout:1,group:1,groupObjectsByName:1,HfAddAttractorToAS:1,HfAssignAS:1,HfBuildEqualMap:1,HfBuildFurFiles:1,HfBuildFurImages:1,HfCancelAFR:1,HfConnectASToHF:1,HfCreateAttractor:1,HfDeleteAS:1,HfEditAS:1,HfPerformCreateAS:1,HfRemoveAttractorFromAS:1,HfSelectAttached:1,HfSelectAttractors:1,HfUnAssignAS:1,hardenPointCurve:1,hardware:1,hardwareRenderPanel:1,headsUpDisplay:1,headsUpMessage:1,help:1,helpLine:1,hermite:1,hide:1,hilite:1,hitTest:1,hotBox:1,hotkey:1,hotkeyCheck:1,hsv_to_rgb:1,hudButton:1,hudSlider:1,hudSliderButton:1,hwReflectionMap:1,hwRender:1,hwRenderLoad:1,hyperGraph:1,hyperPanel:1,hyperShade:1,hypot:1,iconTextButton:1,iconTextCheckBox:1,iconTextRadioButton:1,iconTextRadioCollection:1,iconTextScrollList:1,iconTextStaticLabel:1,ikHandle:1,ikHandleCtx:1,ikHandleDisplayScale:1,ikSolver:1,ikSplineHandleCtx:1,ikSystem:1,ikSystemInfo:1,ikfkDisplayMethod:1,illustratorCurves:1,image:1,imfPlugins:1,inheritTransform:1,insertJoint:1,insertJointCtx:1,insertKeyCtx:1,insertKnotCurve:1,insertKnotSurface:1,instance:1,instanceable:1,instancer:1,intField:1,intFieldGrp:1,intScrollBar:1,intSlider:1,intSliderGrp:1,interToUI:1,internalVar:1,intersect:1,iprEngine:1,isAnimCurve:1,isConnected:1,isDirty:1,isParentOf:1,isSameObject:1,isTrue:1,isValidObjectName:1,isValidString:1,isValidUiName:1,isolateSelect:1,itemFilter:1,itemFilterAttr:1,itemFilterRender:1,itemFilterType:1,joint:1,jointCluster:1,jointCtx:1,jointDisplayScale:1,jointLattice:1,keyTangent:1,keyframe:1,keyframeOutliner:1,keyframeRegionCurrentTimeCtx:1,keyframeRegionDirectKeyCtx:1,keyframeRegionDollyCtx:1,keyframeRegionInsertKeyCtx:1,keyframeRegionMoveKeyCtx:1,keyframeRegionScaleKeyCtx:1,keyframeRegionSelectKeyCtx:1,keyframeRegionSetKeyCtx:1,keyframeRegionTrackCtx:1,keyframeStats:1,lassoContext:1,lattice:1,latticeDeformKeyCtx:1,launch:1,launchImageEditor:1,layerButton:1,layeredShaderPort:1,layeredTexturePort:1,layout:1,layoutDialog:1,lightList:1,lightListEditor:1,lightListPanel:1,lightlink:1,lineIntersection:1,linearPrecision:1,linstep:1,listAnimatable:1,listAttr:1,listCameras:1,listConnections:1,listDeviceAttachments:1,listHistory:1,listInputDeviceAxes:1,listInputDeviceButtons:1,listInputDevices:1,listMenuAnnotation:1,listNodeTypes:1,listPanelCategories:1,listRelatives:1,listSets:1,listTransforms:1,listUnselected:1,listerEditor:1,loadFluid:1,loadNewShelf:1,loadPlugin:1,loadPluginLanguageResources:1,loadPrefObjects:1,localizedPanelLabel:1,lockNode:1,loft:1,log:1,longNameOf:1,lookThru:1,ls:1,lsThroughFilter:1,lsType:1,lsUI:1,Mayatomr:1,mag:1,makeIdentity:1,makeLive:1,makePaintable:1,makeRoll:1,makeSingleSurface:1,makeTubeOn:1,makebot:1,manipMoveContext:1,manipMoveLimitsCtx:1,manipOptions:1,manipRotateContext:1,manipRotateLimitsCtx:1,manipScaleContext:1,manipScaleLimitsCtx:1,marker:1,match:1,max:1,memory:1,menu:1,menuBarLayout:1,menuEditor:1,menuItem:1,menuItemToShelf:1,menuSet:1,menuSetPref:1,messageLine:1,min:1,minimizeApp:1,mirrorJoint:1,modelCurrentTimeCtx:1,modelEditor:1,modelPanel:1,mouse:1,movIn:1,movOut:1,move:1,moveIKtoFK:1,moveKeyCtx:1,moveVertexAlongDirection:1,multiProfileBirailSurface:1,mute:1,nParticle:1,nameCommand:1,nameField:1,namespace:1,namespaceInfo:1,newPanelItems:1,newton:1,nodeCast:1,nodeIconButton:1,nodeOutliner:1,nodePreset:1,nodeType:1,noise:1,nonLinear:1,normalConstraint:1,normalize:1,nurbsBoolean:1,nurbsCopyUVSet:1,nurbsCube:1,nurbsEditUV:1,nurbsPlane:1,nurbsSelect:1,nurbsSquare:1,nurbsToPoly:1,nurbsToPolygonsPref:1,nurbsToSubdiv:1,nurbsToSubdivPref:1,nurbsUVSet:1,nurbsViewDirectionVector:1,objExists:1,objectCenter:1,objectLayer:1,objectType:1,objectTypeUI:1,obsoleteProc:1,oceanNurbsPreviewPlane:1,offsetCurve:1,offsetCurveOnSurface:1,offsetSurface:1,openGLExtension:1,openMayaPref:1,optionMenu:1,optionMenuGrp:1,optionVar:1,orbit:1,orbitCtx:1,orientConstraint:1,outlinerEditor:1,outlinerPanel:1,overrideModifier:1,paintEffectsDisplay:1,pairBlend:1,palettePort:1,paneLayout:1,panel:1,panelConfiguration:1,panelHistory:1,paramDimContext:1,paramDimension:1,paramLocator:1,parent:1,parentConstraint:1,particle:1,particleExists:1,particleInstancer:1,particleRenderInfo:1,partition:1,pasteKey:1,pathAnimation:1,pause:1,pclose:1,percent:1,performanceOptions:1,pfxstrokes:1,pickWalk:1,picture:1,pixelMove:1,planarSrf:1,plane:1,play:1,playbackOptions:1,playblast:1,plugAttr:1,plugNode:1,pluginInfo:1,pluginResourceUtil:1,pointConstraint:1,pointCurveConstraint:1,pointLight:1,pointMatrixMult:1,pointOnCurve:1,pointOnSurface:1,pointPosition:1,poleVectorConstraint:1,polyAppend:1,polyAppendFacetCtx:1,polyAppendVertex:1,polyAutoProjection:1,polyAverageNormal:1,polyAverageVertex:1,polyBevel:1,polyBlendColor:1,polyBlindData:1,polyBoolOp:1,polyBridgeEdge:1,polyCacheMonitor:1,polyCheck:1,polyChipOff:1,polyClipboard:1,polyCloseBorder:1,polyCollapseEdge:1,polyCollapseFacet:1,polyColorBlindData:1,polyColorDel:1,polyColorPerVertex:1,polyColorSet:1,polyCompare:1,polyCone:1,polyCopyUV:1,polyCrease:1,polyCreaseCtx:1,polyCreateFacet:1,polyCreateFacetCtx:1,polyCube:1,polyCut:1,polyCutCtx:1,polyCylinder:1,polyCylindricalProjection:1,polyDelEdge:1,polyDelFacet:1,polyDelVertex:1,polyDuplicateAndConnect:1,polyDuplicateEdge:1,polyEditUV:1,polyEditUVShell:1,polyEvaluate:1,polyExtrudeEdge:1,polyExtrudeFacet:1,polyExtrudeVertex:1,polyFlipEdge:1,polyFlipUV:1,polyForceUV:1,polyGeoSampler:1,polyHelix:1,polyInfo:1,polyInstallAction:1,polyLayoutUV:1,polyListComponentConversion:1,polyMapCut:1,polyMapDel:1,polyMapSew:1,polyMapSewMove:1,polyMergeEdge:1,polyMergeEdgeCtx:1,polyMergeFacet:1,polyMergeFacetCtx:1,polyMergeUV:1,polyMergeVertex:1,polyMirrorFace:1,polyMoveEdge:1,polyMoveFacet:1,polyMoveFacetUV:1,polyMoveUV:1,polyMoveVertex:1,polyNormal:1,polyNormalPerVertex:1,polyNormalizeUV:1,polyOptUvs:1,polyOptions:1,polyOutput:1,polyPipe:1,polyPlanarProjection:1,polyPlane:1,polyPlatonicSolid:1,polyPoke:1,polyPrimitive:1,polyPrism:1,polyProjection:1,polyPyramid:1,polyQuad:1,polyQueryBlindData:1,polyReduce:1,polySelect:1,polySelectConstraint:1,polySelectConstraintMonitor:1,polySelectCtx:1,polySelectEditCtx:1,polySeparate:1,polySetToFaceNormal:1,polySewEdge:1,polyShortestPathCtx:1,polySmooth:1,polySoftEdge:1,polySphere:1,polySphericalProjection:1,polySplit:1,polySplitCtx:1,polySplitEdge:1,polySplitRing:1,polySplitVertex:1,polyStraightenUVBorder:1,polySubdivideEdge:1,polySubdivideFacet:1,polyToSubdiv:1,polyTorus:1,polyTransfer:1,polyTriangulate:1,polyUVSet:1,polyUnite:1,polyWedgeFace:1,popen:1,popupMenu:1,pose:1,pow:1,preloadRefEd:1,print:1,progressBar:1,progressWindow:1,projFileViewer:1,projectCurve:1,projectTangent:1,projectionContext:1,projectionManip:1,promptDialog:1,propModCtx:1,propMove:1,psdChannelOutliner:1,psdEditTextureFile:1,psdExport:1,psdTextureFile:1,putenv:1,pwd:1,python:1,querySubdiv:1,quit:1,rad_to_deg:1,radial:1,radioButton:1,radioButtonGrp:1,radioCollection:1,radioMenuItemCollection:1,rampColorPort:1,rand:1,randomizeFollicles:1,randstate:1,rangeControl:1,readTake:1,rebuildCurve:1,rebuildSurface:1,recordAttr:1,recordDevice:1,redo:1,reference:1,referenceEdit:1,referenceQuery:1,refineSubdivSelectionList:1,refresh:1,refreshAE:1,registerPluginResource:1,rehash:1,reloadImage:1,removeJoint:1,removeMultiInstance:1,removePanelCategory:1,rename:1,renameAttr:1,renameSelectionList:1,renameUI:1,render:1,renderGlobalsNode:1,renderInfo:1,renderLayerButton:1,renderLayerParent:1,renderLayerPostProcess:1,renderLayerUnparent:1,renderManip:1,renderPartition:1,renderQualityNode:1,renderSettings:1,renderThumbnailUpdate:1,renderWindowEditor:1,renderWindowSelectContext:1,renderer:1,reorder:1,reorderDeformers:1,requires:1,reroot:1,resampleFluid:1,resetAE:1,resetPfxToPolyCamera:1,resetTool:1,resolutionNode:1,retarget:1,reverseCurve:1,reverseSurface:1,revolve:1,rgb_to_hsv:1,rigidBody:1,rigidSolver:1,roll:1,rollCtx:1,rootOf:1,rot:1,rotate:1,rotationInterpolation:1,roundConstantRadius:1,rowColumnLayout:1,rowLayout:1,runTimeCommand:1,runup:1,sampleImage:1,saveAllShelves:1,saveAttrPreset:1,saveFluid:1,saveImage:1,saveInitialState:1,saveMenu:1,savePrefObjects:1,savePrefs:1,saveShelf:1,saveToolSettings:1,scale:1,scaleBrushBrightness:1,scaleComponents:1,scaleConstraint:1,scaleKey:1,scaleKeyCtx:1,sceneEditor:1,sceneUIReplacement:1,scmh:1,scriptCtx:1,scriptEditorInfo:1,scriptJob:1,scriptNode:1,scriptTable:1,scriptToShelf:1,scriptedPanel:1,scriptedPanelType:1,scrollField:1,scrollLayout:1,sculpt:1,searchPathArray:1,seed:1,selLoadSettings:1,select:1,selectContext:1,selectCurveCV:1,selectKey:1,selectKeyCtx:1,selectKeyframeRegionCtx:1,selectMode:1,selectPref:1,selectPriority:1,selectType:1,selectedNodes:1,selectionConnection:1,separator:1,setAttr:1,setAttrEnumResource:1,setAttrMapping:1,setAttrNiceNameResource:1,setConstraintRestPosition:1,setDefaultShadingGroup:1,setDrivenKeyframe:1,setDynamic:1,setEditCtx:1,setEditor:1,setFluidAttr:1,setFocus:1,setInfinity:1,setInputDeviceMapping:1,setKeyCtx:1,setKeyPath:1,setKeyframe:1,setKeyframeBlendshapeTargetWts:1,setMenuMode:1,setNodeNiceNameResource:1,setNodeTypeFlag:1,setParent:1,setParticleAttr:1,setPfxToPolyCamera:1,setPluginResource:1,setProject:1,setStampDensity:1,setStartupMessage:1,setState:1,setToolTo:1,setUITemplate:1,setXformManip:1,sets:1,shadingConnection:1,shadingGeometryRelCtx:1,shadingLightRelCtx:1,shadingNetworkCompare:1,shadingNode:1,shapeCompare:1,shelfButton:1,shelfLayout:1,shelfTabLayout:1,shellField:1,shortNameOf:1,showHelp:1,showHidden:1,showManipCtx:1,showSelectionInTitle:1,showShadingGroupAttrEditor:1,showWindow:1,sign:1,simplify:1,sin:1,singleProfileBirailSurface:1,size:1,sizeBytes:1,skinCluster:1,skinPercent:1,smoothCurve:1,smoothTangentSurface:1,smoothstep:1,snap2to2:1,snapKey:1,snapMode:1,snapTogetherCtx:1,snapshot:1,soft:1,softMod:1,softModCtx:1,sort:1,sound:1,soundControl:1,source:1,spaceLocator:1,sphere:1,sphrand:1,spotLight:1,spotLightPreviewPort:1,spreadSheetEditor:1,spring:1,sqrt:1,squareSurface:1,srtContext:1,stackTrace:1,startString:1,startsWith:1,stitchAndExplodeShell:1,stitchSurface:1,stitchSurfacePoints:1,strcmp:1,stringArrayCatenate:1,stringArrayContains:1,stringArrayCount:1,stringArrayInsertAtIndex:1,stringArrayIntersector:1,stringArrayRemove:1,stringArrayRemoveAtIndex:1,stringArrayRemoveDuplicates:1,stringArrayRemoveExact:1,stringArrayToString:1,stringToStringArray:1,strip:1,stripPrefixFromName:1,stroke:1,subdAutoProjection:1,subdCleanTopology:1,subdCollapse:1,subdDuplicateAndConnect:1,subdEditUV:1,subdListComponentConversion:1,subdMapCut:1,subdMapSewMove:1,subdMatchTopology:1,subdMirror:1,subdToBlind:1,subdToPoly:1,subdTransferUVsToCache:1,subdiv:1,subdivCrease:1,subdivDisplaySmoothness:1,substitute:1,substituteAllString:1,substituteGeometry:1,substring:1,surface:1,surfaceSampler:1,surfaceShaderList:1,swatchDisplayPort:1,switchTable:1,symbolButton:1,symbolCheckBox:1,sysFile:1,system:1,tabLayout:1,tan:1,tangentConstraint:1,texLatticeDeformContext:1,texManipContext:1,texMoveContext:1,texMoveUVShellContext:1,texRotateContext:1,texScaleContext:1,texSelectContext:1,texSelectShortestPathCtx:1,texSmudgeUVContext:1,texWinToolCtx:1,text:1,textCurves:1,textField:1,textFieldButtonGrp:1,textFieldGrp:1,textManip:1,textScrollList:1,textToShelf:1,textureDisplacePlane:1,textureHairColor:1,texturePlacementContext:1,textureWindow:1,threadCount:1,threePointArcCtx:1,timeControl:1,timePort:1,timerX:1,toNativePath:1,toggle:1,toggleAxis:1,toggleWindowVisibility:1,tokenize:1,tokenizeList:1,tolerance:1,tolower:1,toolButton:1,toolCollection:1,toolDropped:1,toolHasOptions:1,toolPropertyWindow:1,torus:1,toupper:1,trace:1,track:1,trackCtx:1,transferAttributes:1,transformCompare:1,transformLimits:1,translator:1,trim:1,trunc:1,truncateFluidCache:1,truncateHairCache:1,tumble:1,tumbleCtx:1,turbulence:1,twoPointArcCtx:1,uiRes:1,uiTemplate:1,unassignInputDevice:1,undo:1,undoInfo:1,ungroup:1,uniform:1,unit:1,unloadPlugin:1,untangleUV:1,untitledFileName:1,untrim:1,upAxis:1,updateAE:1,userCtx:1,uvLink:1,uvSnapshot:1,validateShelfName:1,vectorize:1,view2dToolCtx:1,viewCamera:1,viewClipPlane:1,viewFit:1,viewHeadOn:1,viewLookAt:1,viewManip:1,viewPlace:1,viewSet:1,visor:1,volumeAxis:1,vortex:1,waitCursor:1,warning:1,webBrowser:1,webBrowserPrefs:1,whatIs:1,window:1,windowPref:1,wire:1,wireContext:1,workspace:1,wrinkle:1,wrinkleContext:1,writeTake:1,xbmLangPathList:1,xform:1},i:"</",c:[hljs.CNM,hljs.ASM,hljs.QSM,{cN:"string",b:"`",e:"`",c:[hljs.BE]},{cN:"variable",b:"\\$\\d",r:5},{cN:"variable",b:"[\\$\\%\\@\\*](\\^\\w\\b|#\\w+|[^\\s\\w{]|{\\w+}|\\w+)"},hljs.CLCM,hljs.CBLCLM]}};hljs.LANGUAGES.dos={cI:true,dM:{k:{flow:{"if":1,"else":1,"goto":1,"for":1,"in":1,"do":1,call:1,exit:1,not:1,exist:1,errorlevel:1,defined:1,equ:1,neq:1,lss:1,leq:1,gtr:1,geq:1},keyword:{shift:1,cd:1,dir:1,echo:1,setlocal:1,endlocal:1,set:1,pause:1,copy:1},stream:{prn:1,nul:1,lpt3:1,lpt2:1,lpt1:1,con:1,com4:1,com3:1,com2:1,com1:1,aux:1},winutils:{ping:1,net:1,ipconfig:1,taskkill:1,xcopy:1,ren:1,del:1}},c:[{cN:"envvar",b:"%[^ ]+?%"},{cN:"number",b:"\\b\\d+",r:0},{cN:"comment",b:"@?rem",e:"$"}]}};hljs.LANGUAGES.apache=function(){var b={cN:"number",b:"[\\$%]\\d+"};var a={cN:"cbracket",b:"[\\$%]\\{",e:"\\}"};a.c=[a,b];return{cI:true,dM:{k:{keyword:{acceptfilter:1,acceptmutex:1,acceptpathinfo:1,accessfilename:1,action:1,addalt:1,addaltbyencoding:1,addaltbytype:1,addcharset:1,adddefaultcharset:1,adddescription:1,addencoding:1,addhandler:1,addicon:1,addiconbyencoding:1,addiconbytype:1,addinputfilter:1,addlanguage:1,addmoduleinfo:1,addoutputfilter:1,addoutputfilterbytype:1,addtype:1,alias:1,aliasmatch:1,allow:1,allowconnect:1,allowencodedslashes:1,allowoverride:1,anonymous:1,anonymous_logemail:1,anonymous_mustgiveemail:1,anonymous_nouserid:1,anonymous_verifyemail:1,authbasicauthoritative:1,authbasicprovider:1,authdbduserpwquery:1,authdbduserrealmquery:1,authdbmgroupfile:1,authdbmtype:1,authdbmuserfile:1,authdefaultauthoritative:1,authdigestalgorithm:1,authdigestdomain:1,authdigestnccheck:1,authdigestnonceformat:1,authdigestnoncelifetime:1,authdigestprovider:1,authdigestqop:1,authdigestshmemsize:1,authgroupfile:1,authldapbinddn:1,authldapbindpassword:1,authldapcharsetconfig:1,authldapcomparednonserver:1,authldapdereferencealiases:1,authldapgroupattribute:1,authldapgroupattributeisdn:1,authldapremoteuserattribute:1,authldapremoteuserisdn:1,authldapurl:1,authname:1,authnprovideralias:1,authtype:1,authuserfile:1,authzdbmauthoritative:1,authzdbmtype:1,authzdefaultauthoritative:1,authzgroupfileauthoritative:1,authzldapauthoritative:1,authzownerauthoritative:1,authzuserauthoritative:1,balancermember:1,browsermatch:1,browsermatchnocase:1,bufferedlogs:1,cachedefaultexpire:1,cachedirlength:1,cachedirlevels:1,cachedisable:1,cacheenable:1,cachefile:1,cacheignorecachecontrol:1,cacheignoreheaders:1,cacheignorenolastmod:1,cacheignorequerystring:1,cachelastmodifiedfactor:1,cachemaxexpire:1,cachemaxfilesize:1,cacheminfilesize:1,cachenegotiateddocs:1,cacheroot:1,cachestorenostore:1,cachestoreprivate:1,cgimapextension:1,charsetdefault:1,charsetoptions:1,charsetsourceenc:1,checkcaseonly:1,checkspelling:1,chrootdir:1,contentdigest:1,cookiedomain:1,cookieexpires:1,cookielog:1,cookiename:1,cookiestyle:1,cookietracking:1,coredumpdirectory:1,customlog:1,dav:1,davdepthinfinity:1,davgenericlockdb:1,davlockdb:1,davmintimeout:1,dbdexptime:1,dbdkeep:1,dbdmax:1,dbdmin:1,dbdparams:1,dbdpersist:1,dbdpreparesql:1,dbdriver:1,defaulticon:1,defaultlanguage:1,defaulttype:1,deflatebuffersize:1,deflatecompressionlevel:1,deflatefilternote:1,deflatememlevel:1,deflatewindowsize:1,deny:1,directoryindex:1,directorymatch:1,directoryslash:1,documentroot:1,dumpioinput:1,dumpiologlevel:1,dumpiooutput:1,enableexceptionhook:1,enablemmap:1,enablesendfile:1,errordocument:1,errorlog:1,example:1,expiresactive:1,expiresbytype:1,expiresdefault:1,extendedstatus:1,extfilterdefine:1,extfilteroptions:1,fileetag:1,filterchain:1,filterdeclare:1,filterprotocol:1,filterprovider:1,filtertrace:1,forcelanguagepriority:1,forcetype:1,forensiclog:1,gracefulshutdowntimeout:1,group:1,header:1,headername:1,hostnamelookups:1,identitycheck:1,identitychecktimeout:1,imapbase:1,imapdefault:1,imapmenu:1,include:1,indexheadinsert:1,indexignore:1,indexoptions:1,indexorderdefault:1,indexstylesheet:1,isapiappendlogtoerrors:1,isapiappendlogtoquery:1,isapicachefile:1,isapifakeasync:1,isapilognotsupported:1,isapireadaheadbuffer:1,keepalive:1,keepalivetimeout:1,languagepriority:1,ldapcacheentries:1,ldapcachettl:1,ldapconnectiontimeout:1,ldapopcacheentries:1,ldapopcachettl:1,ldapsharedcachefile:1,ldapsharedcachesize:1,ldaptrustedclientcert:1,ldaptrustedglobalcert:1,ldaptrustedmode:1,ldapverifyservercert:1,limitinternalrecursion:1,limitrequestbody:1,limitrequestfields:1,limitrequestfieldsize:1,limitrequestline:1,limitxmlrequestbody:1,listen:1,listenbacklog:1,loadfile:1,loadmodule:1,lockfile:1,logformat:1,loglevel:1,maxclients:1,maxkeepaliverequests:1,maxmemfree:1,maxrequestsperchild:1,maxrequestsperthread:1,maxspareservers:1,maxsparethreads:1,maxthreads:1,mcachemaxobjectcount:1,mcachemaxobjectsize:1,mcachemaxstreamingbuffer:1,mcacheminobjectsize:1,mcacheremovalalgorithm:1,mcachesize:1,metadir:1,metafiles:1,metasuffix:1,mimemagicfile:1,minspareservers:1,minsparethreads:1,mmapfile:1,mod_gzip_on:1,mod_gzip_add_header_count:1,mod_gzip_keep_workfiles:1,mod_gzip_dechunk:1,mod_gzip_min_http:1,mod_gzip_minimum_file_size:1,mod_gzip_maximum_file_size:1,mod_gzip_maximum_inmem_size:1,mod_gzip_temp_dir:1,mod_gzip_item_include:1,mod_gzip_item_exclude:1,mod_gzip_command_version:1,mod_gzip_can_negotiate:1,mod_gzip_handle_methods:1,mod_gzip_static_suffix:1,mod_gzip_send_vary:1,mod_gzip_update_static:1,modmimeusepathinfo:1,multiviewsmatch:1,namevirtualhost:1,noproxy:1,nwssltrustedcerts:1,nwsslupgradeable:1,options:1,order:1,passenv:1,pidfile:1,protocolecho:1,proxybadheader:1,proxyblock:1,proxydomain:1,proxyerroroverride:1,proxyftpdircharset:1,proxyiobuffersize:1,proxymaxforwards:1,proxypass:1,proxypassinterpolateenv:1,proxypassmatch:1,proxypassreverse:1,proxypassreversecookiedomain:1,proxypassreversecookiepath:1,proxypreservehost:1,proxyreceivebuffersize:1,proxyremote:1,proxyremotematch:1,proxyrequests:1,proxyset:1,proxystatus:1,proxytimeout:1,proxyvia:1,readmename:1,receivebuffersize:1,redirect:1,redirectmatch:1,redirectpermanent:1,redirecttemp:1,removecharset:1,removeencoding:1,removehandler:1,removeinputfilter:1,removelanguage:1,removeoutputfilter:1,removetype:1,requestheader:1,require:2,rewritebase:1,rewritecond:10,rewriteengine:1,rewritelock:1,rewritelog:1,rewriteloglevel:1,rewritemap:1,rewriteoptions:1,rewriterule:10,rlimitcpu:1,rlimitmem:1,rlimitnproc:1,satisfy:1,scoreboardfile:1,script:1,scriptalias:1,scriptaliasmatch:1,scriptinterpretersource:1,scriptlog:1,scriptlogbuffer:1,scriptloglength:1,scriptsock:1,securelisten:1,seerequesttail:1,sendbuffersize:1,serveradmin:1,serveralias:1,serverlimit:1,servername:1,serverpath:1,serverroot:1,serversignature:1,servertokens:1,setenv:1,setenvif:1,setenvifnocase:1,sethandler:1,setinputfilter:1,setoutputfilter:1,ssienableaccess:1,ssiendtag:1,ssierrormsg:1,ssistarttag:1,ssitimeformat:1,ssiundefinedecho:1,sslcacertificatefile:1,sslcacertificatepath:1,sslcadnrequestfile:1,sslcadnrequestpath:1,sslcarevocationfile:1,sslcarevocationpath:1,sslcertificatechainfile:1,sslcertificatefile:1,sslcertificatekeyfile:1,sslciphersuite:1,sslcryptodevice:1,sslengine:1,sslhonorciperorder:1,sslmutex:1,ssloptions:1,sslpassphrasedialog:1,sslprotocol:1,sslproxycacertificatefile:1,sslproxycacertificatepath:1,sslproxycarevocationfile:1,sslproxycarevocationpath:1,sslproxyciphersuite:1,sslproxyengine:1,sslproxymachinecertificatefile:1,sslproxymachinecertificatepath:1,sslproxyprotocol:1,sslproxyverify:1,sslproxyverifydepth:1,sslrandomseed:1,sslrequire:1,sslrequiressl:1,sslsessioncache:1,sslsessioncachetimeout:1,sslusername:1,sslverifyclient:1,sslverifydepth:1,startservers:1,startthreads:1,substitute:1,suexecusergroup:1,threadlimit:1,threadsperchild:1,threadstacksize:1,timeout:1,traceenable:1,transferlog:1,typesconfig:1,unsetenv:1,usecanonicalname:1,usecanonicalphysicalport:1,user:1,userdir:1,virtualdocumentroot:1,virtualdocumentrootip:1,virtualscriptalias:1,virtualscriptaliasip:1,win32disableacceptex:1,xbithack:1},literal:{on:1,off:1}},c:[hljs.HCM,{cN:"sqbracket",b:"\\s\\[",e:"\\]$"},a,b,{cN:"tag",b:"</?",e:">"},hljs.QSM]}}}();hljs.LANGUAGES.cpp=function(){var b={keyword:{"false":1,"int":1,"float":1,"while":1,"private":1,"char":1,"catch":1,"export":1,virtual:1,operator:2,sizeof:2,dynamic_cast:2,typedef:2,const_cast:2,"const":1,struct:1,"for":1,static_cast:2,union:1,namespace:1,unsigned:1,"long":1,"throw":1,"volatile":2,"static":1,"protected":1,bool:1,template:1,mutable:1,"if":1,"public":1,friend:2,"do":1,"return":1,"goto":1,auto:1,"void":2,"enum":1,"else":1,"break":1,"new":1,extern:1,using:1,"true":1,"class":1,asm:1,"case":1,typeid:1,"short":1,reinterpret_cast:2,"default":1,"double":1,register:1,explicit:1,signed:1,typename:1,"try":1,"this":1,"switch":1,"continue":1,wchar_t:1,inline:1,"delete":1,alignof:1,char16_t:1,char32_t:1,constexpr:1,decltype:1,noexcept:1,nullptr:1,static_assert:1,thread_local:1},built_in:{std:1,string:1,cin:1,cout:1,cerr:1,clog:1,stringstream:1,istringstream:1,ostringstream:1,auto_ptr:1,deque:1,list:1,queue:1,stack:1,vector:1,map:1,set:1,bitset:1,multiset:1,multimap:1,unordered_set:1,unordered_map:1,unordered_multiset:1,unordered_multimap:1,array:1,shared_ptr:1}};var a={cN:"stl_container",b:"\\b(deque|list|queue|stack|vector|map|set|bitset|multiset|multimap|unordered_map|unordered_set|unordered_multiset|unordered_multimap|array)\\s*<",e:">",k:b.built_in,r:10};a.c=[a];return{dM:{k:b,i:"</",c:[hljs.CLCM,hljs.CBLCLM,hljs.QSM,{cN:"string",b:"'",e:"[^\\\\]'",i:"[^\\\\][^']"},hljs.CNM,{cN:"preprocessor",b:"#",e:"$"},a]}}}();hljs.LANGUAGES.parser3=function(){var a={b:"{",e:"}"};a.c=[a];return{dM:{sL:"html",c:[{cN:"comment",b:"^#",e:"$"},{cN:"comment",c:[a],b:"\\^rem{",e:"}",r:10},{cN:"preprocessor",b:"^@(?:BASE|USE|CLASS|OPTIONS)$",r:10},{cN:"title",b:"@[\\w\\-]+\\[[\\w^;\\-]*\\](?:\\[[\\w^;\\-]*\\])?(?:.*)$"},{cN:"variable",b:"\\$\\{?[\\w\\-\\.\\:]+\\}?"},{cN:"keyword",b:"\\^[\\w\\-\\.\\:]+"},{cN:"number",b:"\\^#[0-9a-fA-F]+"},hljs.CNM]}}}();hljs.LANGUAGES.go=function(){var a={keyword:{"break":1,"default":1,func:1,"interface":1,select:1,"case":1,map:1,struct:1,chan:1,"else":1,"goto":1,"package":1,"switch":1,"const":1,fallthrough:1,"if":1,range:1,type:1,"continue":1,"for":1,"import":1,"return":1,"var":1,go:1,defer:1},constant:{"true":1,"false":1,iota:1,nil:1},typename:{bool:1,"byte":1,complex64:1,complex128:1,float32:1,float64:1,int8:1,int16:1,int32:1,int64:1,string:1,uint8:1,uint16:1,uint32:1,uint64:1,"int":1,uint:1,uintptr:1},built_in:{append:1,cap:1,close:1,complex:1,copy:1,imag:1,len:1,make:1,"new":1,panic:1,print:1,println:1,real:1,recover:1}};return{dM:{k:a,i:"</",c:[hljs.CLCM,hljs.CBLCLM,hljs.QSM,{cN:"string",b:"'",e:"[^\\\\]'"},{cN:"string",b:"`",e:"[^\\\\]`"},{cN:"number",b:"[^a-zA-Z_0-9](\\-|\\+)?\\d+(\\.\\d+|\\/\\d+)?((d|e|f|l|s)(\\+|\\-)?\\d+)?"},hljs.CNM]}}}();

	/*** EXPORTS FROM exports-loader ***/
	module.exports = hljs;

/***/ }
/******/ ]);