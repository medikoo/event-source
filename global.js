'use strict';

if (typeof EventSource === 'undefined') {
	Object.defineProperty(require('es5-ext/lib/global'), 'EventSource',
		{ value: require('./polyfill'), configurable: true, enumerable: false,
			writable: true });
}
