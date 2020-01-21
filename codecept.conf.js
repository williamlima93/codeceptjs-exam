exports.config = {
  tests: './*/*_test.js',
  output: './output',
  helpers: {
    Puppeteer: {
      url: 'http://localhost',
      show: true
    },
    REST: {
      endpoint: 'https://swapi.co/',
      defaultHeaders: {
        ContentType: 'application/json',
        Accept: 'application/json'
      }
    }
  },
  include: {
    I: './steps_file.js'
  },
  bootstrap: null,
  mocha: {},
  name: 'tests',
  plugins: {
    retryFailedStep: {
      enabled: true
    },
    screenshotOnFail: {
      enabled: true
    }
  }
}