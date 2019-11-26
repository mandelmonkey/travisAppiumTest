
var wd = require("wd"),
_ = require('underscore'),
Q = require('q'); 

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
elementByAccessibilityId('Create New Wallet.')
  .click().sleep(2000)

});

 



});
