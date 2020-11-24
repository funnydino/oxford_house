grecaptcha.ready(function () {
  grecaptcha.execute('<?php echo SITE_KEY;?>', {
    action: 'homepage'
  }).then(function (token) {
    console.log(token);
    document.getElementById('g-recaptcha-response').value = token;
  });
});