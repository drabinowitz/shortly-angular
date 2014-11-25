var Link    = require('../server/links/linkModel.js'),
    Q       = require('q');
describe ('shortly', function(){
  browser.get('http://localhost:3000/');
  var url = 'http://www.github.com';
  afterEach(function(){
    Link.findOneAndRemove({url: url},function(){});
  });
  it('should load links', function(){
    var linkNav = element(by.css('.nav-link'));
    linkNav.click();
    var viewWrapper = element(by.css('.view-wrapper'));
    expect(viewWrapper.getText()).toContain('Google');
    expect(viewWrapper.getText()).toContain('Twitter');
    expect(viewWrapper.getText()).toContain('facebook');
  });
  it('should allow users to add links', function(){
    var shortenNav = element(by.css('.nav-shorten'));
    shortenNav.click();
    var shortenInput = element(by.css('.shorten-input'));
    shortenInput.sendKeys('http://www.github.com');
    var shortenSubmit = element(by.css('.shorten-submit'));
    shortenSubmit.click();
    var linkNav = element(by.css('.nav-link'));
    linkNav.click();
    var viewWrapper = element(by.css('.view-wrapper'));
    expect(viewWrapper.getText()).toContain('GitHub');
  });
});
