const { setHeadlessWhen, setCommonPlugins } = require('@codeceptjs/configure');
// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

/** @type {CodeceptJS.MainConfig} */
exports.config = {
  tests: './*_test.js',
  output: './output',
  
  logLevel: 'debug',
  helpers: {
    Playwright: {
      browser: 'chromium',
      url: 'http://localhost',
      show: false
    },
    REST: {
      endpoint: 'https://late-months-watch.loca.lt', // Base API URL
    },
    JSONResponse: {
      // requestHelper: 'GraphQL',
      responseHeaders: {
        'Content-Type': 'application/json'
      }
    },



    GraphQL: {
      // endpoint: 'http://localhost:4000/graphql'
      endpoint: 'https://beige-turtles-end.loca.lt/graphql' // Base GraphQL URL
    },
    
  },
  include: {
    I: './steps_file.js'
  },
  name: 'CodeCeptJS-Demo'
}