grecaptcha.ready(function () {
  grecaptcha.execute('6Lcmw-sZAAAAAJtZj1Q3abNdYCPvyYznCykMLdcT', {
    action: 'contact'
  }).then(function (token) {
    var recaptchaResponse = document.getElementById('recaptchaResponse');
    recaptchaResponse.value = token;
  });
});