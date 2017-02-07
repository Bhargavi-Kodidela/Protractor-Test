var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');

exports.config = {
  framework: 'jasmine2',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  allScriptsTimeout: 60000,
  specs: ['ruleSet-add-spec.js', 'ruleSet-edit-spec.js', 'rule-add-spec.js', 'rule-edit-spec.js', 'primary_nav_spec.js', 'filters-addusers-spec.js'],
 /* specs: [
    '*.js'
  ],*/
  capabilities: {
   //'browserName': 'chrome',
    'browserName': 'phantomjs'
  },
  plugins: [{
        package: 'jasmine2-protractor-utils',
        disableHTMLReport: false,
        disableScreenshot: false,
        screenshotPath:'./reports/screenshots',
        screenshotOnExpectFailure:true,
        screenshotOnSpecFailure:true,
        clearFoldersBeforeTest: true,
        htmlReportDir: './reports/htmlReports',
        failTestOnErrorLog: {
                    failTestOnErrorLogLevel: 900,
                    excludeKeywords: ['keyword1', 'keyword2']
                }
      }],
    jasmineNodeOpts: {defaultTimeoutInterval: 80000}
    // onPrepare: function(){
    //   browser.manage().timeouts().setScriptTimeout(60000);
    // }
      //framework: 'jasmine2',  
 }
