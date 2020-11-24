document.querySelector('form').addEventListener('submit', (e) => {
  e.preventDefault();

  let tk = '';

  grecaptcha.ready(function () {
    grecaptcha.execute('6Lcmw-sZAAAAAJtZj1Q3abNdYCPvyYznCykMLdcT', {
      action: 'homepage'
    }).then(function (token) {
      tk = token;
      document.getElementById('token').value = token;

      fetch('../js/send.php', {
          method: 'post',
          body: {
            token: tk
          },
        })
        .then(response => response.json())
        .then(result => console.log(result));
    });
  });
});