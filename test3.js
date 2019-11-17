"use strict";
 
var wd = require("wd"),
    _ = require('underscore'),
    Q = require('q');
    //serverConfigs = require('./helpers/appium-servers');

describe("ios simple", function () {
  this.timeout(100000000);
  var driver;
  var allPassed = true;

  before(function () {
    var serverConfig =  {
        host: 'localhost',
        port: 4723
      };
      
    driver = wd.promiseChainRemote(serverConfig);
    require("./helpers/logging").configure(driver);

    var desired =  {
  browserName: '',
  'appium-version': '1.6',
  platformName: 'iOS',
  platformVersion: '13.0',//13.0
  deviceName: 'iPhone X',//'iPhone 11 Pro Max',
  automationName: "XCUITest",
  iosInstallPause:8000, 
      showXcodeLog:true, 
      app: process.cwd()+"/Nayuta.app"
};
 
    if (process.env.npm_package_config_sauce) {
      desired.name = 'ios - simple';
      desired.tags = ['sample'];
    }
    return driver.init(desired);
  });

  after(function () {
    return driver
      .quit()
      .finally(function () {
        if (process.env.npm_package_config_sauce) {
          return driver.sauceJobStatus(allPassed);
        }
      });
  });

  afterEach(function () {
    allPassed = allPassed && this.currentTest.state === 'passed';
  });

  function populate() {
    var seq = _(['IntegerA', 'IntegerB']).map(function (id) {
      return function (sum) {
        return driver.waitForElementById(id, 3000).then(function (el) {
          var x = _.random(0,10);
          sum += x;
          return el.type('' + x).then(function () { return sum; })
            .elementById('Done').click().sleep(1000); // dismissing keyboard
        }).then(function () { return sum; });
      };
    });
    return seq.reduce(Q.when, new Q(0));
  }

  it("Should Press Create New Wallet", function () {
      console.log("started");
    setTimeout(function(){
    return driver.
    elementByAccessibilityId('Create New Wallet')
      .click().sleep(1000)  
    },5000); 
    });
   

});
