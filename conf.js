var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');

exports.config = {
  framework: 'jasmine2',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  allScriptsTimeout: 60000,
  specs: ['spec.js', 'edit-spec.js'],
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
