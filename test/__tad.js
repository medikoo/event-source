'use strict';

var document, window;

try {
	document = require('jsdom').jsdom();
} catch (ignore) {}

if (document) {
	window = document.parentWindow;
	exports.context = {
		document: document,
		navigator: window.navigator,
		XMLHttpRequest: window.XMLHttpRequest
	};
}
