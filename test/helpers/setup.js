require('babel-register')
require('babel-polyfill')

// create a browser like env - doesn't load really browser like phantom
global.document = require('jsdom').jsdom('<body><div id="app"></div></body>')
global.window = document.defaultView
global.navigator = window.navigator
