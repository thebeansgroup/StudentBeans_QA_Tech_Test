exports.config = {
  // ====================
  // Runner Configuration
  // ====================
  outputDir: 'test-results',
  runner: 'local',
  path: '/wd/hub',

  // ==================
  // Specify Test Files
  // ==================
  specs: ['test/features/**/*.feature'],
  exclude: [],
  //
  // ============
  // Capabilities
  // ============
  // If you have trouble getting all important capabilities together, check out the
  // Sauce Labs platform configurator - a great tool to configure your capabilities:
  // https://docs.saucelabs.com/reference/platforms-configurator

  capabilities: [
    {
      maxInstances: 1,
      browserName: 'chrome',
      'goog:chromeOptions': {
        // to run chrome headless the following flags are required
        // (see https://developers.google.com/web/updates/2017/04/headless-chrome)
        args: [
          '--no-sandbox',
          '--disable-dev-shm-usage',
          '--remote-debugging-port=9222'
        ]
      }
    }
  ],
  // ===================
  // Test Configurations
  // ===================

  // Level of logging verbosity: trace | debug | info | warn | error | silent
  logLevel: 'warn',

  // bail (default is 0 - don't bail, run all tests).
  bail: 0,

  // Set a base URL in order to shorten url command calls. If your `url` parameter starts
  // with `/`, the base url gets prepended, not including the path portion of your baseUrl.
  // If your `url` parameter starts without a scheme or `/` (like `some/path`), the base url
  // gets prepended directly.
  baseUrl: 'https://studentbeans.com/',

  // Default timeout for all waitFor* commands.
  waitforTimeout: 10000,

  // Default timeout in milliseconds for request
  connectionRetryTimeout: 120000,

  // Default request retries count
  connectionRetryCount: 3,

  services: [
    [
      'chromedriver',
      {
        logFileName: 'wdio-chromedriver.log', // default
        outputDir: 'test-results/driver-logs', // overwrites the config.outputDir
        args: ['--silent']
      }
    ]
  ],

  framework: 'cucumber',

  cucumberOpts: {
    require: ['test/stepDefs/*.js'],
    backtrace: false,
    requireModule: [],
    dryRun: false,
    failFast: false,
    format: ['pretty'],
    colors: true,
    snippets: true,
    source: true,
    profile: [],
    strict: false,
    tagExpression: 'not @ignore and not @manual',
    timeout: 60000,
    ignoreUndefinedDefinitions: false
  },

  reporters: [
    'spec'
  ],

  // =====
  // Hooks
  // =====
  /**
   * Gets executed before test execution begins. At this point you can access to all global
   * variables like `browser`. It is the perfect place to define custom commands.
   * @param {Array.<Object>} capabilities list of capabilities details
   * @param {Array.<String>} specs List of spec file paths that are to be run
   */
  before: function (capabilities, specs) {
    const chai = require('chai')
    global.expect = chai.expect
    browser.setWindowSize(1920, 1080)
  }
  /**
   * Gets executed after all workers got shut down and the process is about to exit. An error
   * thrown in the onComplete hook will result in the test run failing.
   * @param {Object} exitCode 0 - success, 1 - fail
   * @param {Object} config wdio configuration object
   * @param {Array.<Object>} capabilities list of capabilities details
   * @param {<Object>} results object containing test results
   */
  /* onComplete: function (exitCode, config, capabilities, results) {
  } */
}
