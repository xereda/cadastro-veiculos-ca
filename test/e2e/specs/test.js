// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage

module.exports = {
  'default e2e tests': function (browser) {
    // automatically uses dev Server port from /config.index.js
    // default: http://localhost:8080
    // see nightwatch.conf.js
    const devServer = browser.globals.devServerURL

    browser
      .url(devServer)
      .waitForElementVisible('body', 5000)
      .assert.elementPresent('.hero')
      .assert.containsText('h2', 'Test developed by Xereda')
      .assert.elementCount('img', 3)
      .waitForElementVisible('a[id=btn-access-detail-10]', 3000)
      .click('a[id=btn-access-detail-10]')
      .pause(2000)
      .waitForElementVisible('#beer-detail', 3000)
      .assert.elementPresent('.custom-card-detail-body')
      .end()
  }
}
