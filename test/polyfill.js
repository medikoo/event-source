'use strict';

module.exports = function (t, a) {
	a(typeof t, 'function');
	a(typeof EventSource, 'undefined', "Not exposed");
};
