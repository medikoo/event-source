'use strict';

module.exports = (typeof EventSource === 'undefined') ?
		require('./polyfill') : EventSource;
