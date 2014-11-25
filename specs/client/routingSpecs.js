describe('Routing', function () {
  var $state;
  beforeEach(module('shortly'));

  beforeEach(inject(function($injector){
    $state = $injector.get('$state');
  }));

  it('Should have signup state, template, and controller', function () {
    expect($state.get('signup')).to.be.ok();
    expect($state.get('signup').controller).to.be('AuthController');
    expect($state.get('signup').templateUrl).to.be('app/auth/signup.html');
  });

  it('Should have signin state, template, and controller', function () {
    expect($state.get('signin')).to.be.ok();
    expect($state.get('signin').controller).to.be('AuthController');
    expect($state.get('signin').templateUrl).to.be('app/auth/signin.html');
  });

  it('Should have links state, template, and controller', function () {
    expect($state.get('links')).to.be.ok();
    expect($state.get('links').controller).to.be('LinksController');
    expect($state.get('links').templateUrl).to.be('app/links/links.html');
  });

  it('Should have shorten state, template, and controller', function () {
    expect($state.get('shorten')).to.be.ok();
    expect($state.get('shorten').controller).to.be('ShortenController');
    expect($state.get('shorten').templateUrl).to.be('app/shorten/shorten.html');
  });
});
