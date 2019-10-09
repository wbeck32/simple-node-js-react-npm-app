var webdriver = require('selenium-webdriver');

// Input capabilities
var capabilities = {
  browserName: 'IE',
  browser_version: '11.0',
  os: 'Windows',
  os_version: '10',
  resolution: '1024x768',
  'browserstack.user': 'wbeck1',
  'browserstack.key': 'JzpboYTqgeCepy1WdmEs',
  name: 'Bstack-[Node] Sample Test',
};

var driver = new webdriver.Builder()
  .usingServer('http://hub-cloud.browserstack.com/wd/hub')
  .withCapabilities(capabilities)
  .build();

driver.get('http://www.google.com/ncr');
driver.findElement(webdriver.By.name('q')).sendKeys('BrowserStack');
driver.findElement(webdriver.By.name('btnG')).click();

driver.getTitle().then(function(title) {
  console.log(title);
});

driver.quit();
