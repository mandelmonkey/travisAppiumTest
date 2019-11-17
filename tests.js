"use strict";

const opts = {
  port: 4723,
  capabilities: {
    	"platformName": "ios",
  		"platformVersion": "13.0",
  		"deviceName": "iPhone 11 Pro Max",
  		"app": "/Users/chris/Documents/Appcelerator_Studio_Workspace/nayuta/build/iphone/build/Products/Debug-iphonesimulator/Nayuta.app",
      "automationName": "XCUITest",
      "useNewWDA":true,
      "noReset": true,
      "showXcodeLog":true, 
  }
};

var wd = require("webdriverio");
    
describe("FIRST APP TEST", function () {
  this.timeout(300000);
  var driver;
  var allPassed = true;

  before(function () {
    console.log(opts);
    driver = wd.remote(opts);
    return driver.init(opts.capabilities);
  });

  after(function () {
    //return driver
      //.end()
  });

  afterEach(function () {
    allPassed = allPassed && this.currentTest.state === 'passed';
  });

   it("Should Press Create New Wallet", function () {
    	return driver.click("~Create New Wallet")
  }); 

  it("Should Accept Disclaimer", function () { 
    
     return driver.alertDismiss()

  });

  it("Should Press Testnet", function () { 

    setTimeout(function(){
     return driver.alertDismiss()
    },1000);

  });
 
  

});
