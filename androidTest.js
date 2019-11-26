
var wd = require("wd"),
_ = require('underscore'),
Q = require('q');
//serverConfigs = require('./helpers/appium-servers');

describe("Nayuta Test", function () {
this.timeout(100000000);
var driver;
var allPassed = true;

before(function () {
var serverConfig =  {
    host: 'localhost',
    port: 4723
  };
  
driver = wd.promiseChainRemote(serverConfig);
//require("./helpers/logging").configure(driver);
var desired =  { 
  browserName: '',
  platformName: 'Android', 
  avd:"test",
  deviceName: 'test', 
    app: process.cwd()+"/build/android/bin/Nayuta.apk",
        automationName:"UiAutomator2",
"appActivity": ".NayutaActivity",
"appPackage": "co.nayuta.wallet"
}; 

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


it("Should Sleep", function () {

return driver.sleep(5000)

});

it("Should Press Create New Wallet", function () {
  
   
return driver.
elementByAccessibilityId('Create New Wallet')
  .click().sleep(2000)

});

it("Should Accept Disclaimer", function () { 
 
  return driver.dismissAlert().sleep(2000)
 

});

it("Should Press Testnet", function () { 

  return driver.dismissAlert().sleep(2000)
 

});

it("Should Skip Auto Pilot", function () { 


return driver.
elementByAccessibilityId('Skip Auto Pilot')
  .click().sleep(6000)

});

it("Should Press Next 1", function () { 

return driver.
elementByAccessibilityId('Passphrase Next 1')
  .click().sleep(2000)

}); 
it("Should Press Next 2", function () { 


return driver.
elementByAccessibilityId('Passphrase Next 2')
  .click().sleep(2000)

});

it("Should Press Next 3", function () { 


return driver.
elementByAccessibilityId('Passphrase Next 3')
  .click().sleep(2000)

});


it("Should Press Next 4", function () { 


return driver.
elementByAccessibilityId('Passphrase Next 4')
  .click().sleep(3000)

});


it("Should Press Skip Dev", function () { 


return driver.
elementByAccessibilityId('Skip Dev')
  .click().sleep(4000)

});


it("Should Press Key Pad 1", function () { 


return driver.
elementByAccessibilityId('keypad1')
  .click().sleep(1000)

});


it("Should Press Key Pad 2", function () { 


return driver.
elementByAccessibilityId('keypad2')
  .click().sleep(1000)

});


it("Should Press Key Pad 3", function () { 


return driver.
elementByAccessibilityId('keypad3')
  .click().sleep(1000)

});


it("Should Press Key Pad 4", function () { 


return driver.
elementByAccessibilityId('keypad4')
  .click().sleep(1000)

});

it("Should Press Key Pad 5", function () { 


return driver.
elementByAccessibilityId('keypad5')
  .click().sleep(1000)

});


it("Should Press Key Pad 6", function () { 


return driver.
elementByAccessibilityId('keypad6')
  .click().sleep(1000)

});


it("Should Press Key Pad 1", function () { 


return driver.
elementByAccessibilityId('keypad1')
  .click().sleep(1000)

});


it("Should Press Key Pad 2", function () { 


return driver.
elementByAccessibilityId('keypad2')
  .click().sleep(1000)

});


it("Should Press Key Pad 3", function () { 


return driver.
elementByAccessibilityId('keypad3')
  .click().sleep(1000)

});


it("Should Press Key Pad 4", function () { 


return driver.
elementByAccessibilityId('keypad4')
  .click().sleep(1000)

});

it("Should Press Key Pad 5", function () { 


return driver.
elementByAccessibilityId('keypad5')
  .click().sleep(1000)

});


it("Should Press Key Pad 6", function () { 


return driver.
elementByAccessibilityId('keypad6')
  .click().sleep(3000)

});


it("Should Press Link Later", function () { 


return driver.
elementByAccessibilityId('link later')
  .click().sleep(10000)

});






});
