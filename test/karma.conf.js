'use strict';

var istanbul = require('browserify-istanbul');
var isparta  = require('isparta');

module.exports = function(config) {

  config.set({

    basePath: process.cwd(),
    frameworks: ['jasmine', 'browserify'],
    preprocessors: {
      'app/js/**/*.js': ['browserify', 'babel', 'coverage']
    },

    // Start these browsers, currently available:
    // - Chrome
    // - ChromeCanary
    // - Firefox
    // - Opera (has to be installed with `npm install karma-opera-launcher`)
    // - Safari (only Mac; has to be installed with `npm install karma-safari-launcher`)
    // - PhantomJS
    // - IE (only Windows; has to be installed with `npm install karma-ie-launcher`)
    browsers: ['PhantomJS'],
    reporters: ['progress', 'coverage'],
    singleRun: true,
    coverageReporter: {
      'type' : 'text',
      'dir' : 'coverage/',
      //comment this out if you want to see the output in the console
      // 'file': 'coverageResult.txt',
      watermarks: {
        statements: [ 60, 90 ],
        functions: [ 60, 90 ],
        branches: [ 60, 80 ],
        lines: [ 60, 90 ]
      }
    },

    // the configure thresholds
    thresholdReporter: {
      statements: 80,
      branches: 60,
      functions: 80,
      lines: 80
    },

    autoWatch: false,

    proxies: {
      '/': 'http://localhost:9876/'
    },

    urlRoot: '/__karma__/',

    files: [
      // app-specific code
      'app/js/main.js',

      // 3rd-party resources
      'node_modules/angular-mocks/angular-mocks.js',

      // test files
      'test/unit/**/*.js'
    ]

  });

};
