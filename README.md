# event-source

## EventSource polyfill as clean NPM module

__Based on [EventSource polyfill maintained by Yaffle](https://github.com/Yaffle/EventSource). See it's repository for more information.__

## Installation
### NPM

In your project path:

	$ npm install event-source

#### Browser

You can easily bundle _EventSource_ for browser with [modules-webmake](https://github.com/medikoo/modules-webmake)

## Usage

### Expose in global scope

```javascript
require('event-source/global');
```

If native version is already available, above will do nothing (polyfill won't be loaded).

### Load locally

```javascript
var EventSource = require('event-source');
```

If native version is available it'll be returned instead of polyfill.


## Tests [![Build Status](https://travis-ci.org/medikoo/event-source.png)](https://travis-ci.org/medikoo/event-source)

	$ npm test
