const {main} = require('./main');

$(function () {

  // main.getAllInformation('en');
  
  render.renderHome();

  $('#social-network').on('show', function() {

    render.renderSocialNetwork();

  });

  $('#contact').on('show', function() {

    render.renderContact();

  });

  $('#biography').on('show', function() {

    render.renderWork();

    render.renderEducation();

    render.renderResearch();

    render.renderScholastic();

  });

  $('#portfolio').on('show', function() {

    render.renderPortfolio();

  });

  $('.custom-option').on("click", function(e) {
    main.getAllInformation($('#language').val(), function () {
      render.renderHome();
    });
  });

});

$(function () {
  $('#contact-modal').on('click', function (e) {
    e.preventDefault();
    return false;
  });
});