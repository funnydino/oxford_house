document.querySelector('form').addEventListener('submit', (e) => {
  e.preventDefault();

  let tk = '';

  grecaptcha.ready(function () {
    grecaptcha.execute('6Lcmw-sZAAAAAJtZj1Q3abNdYCPvyYznCykMLdcT', {
      action: 'homepage'
    }).then(function (token) {
      tk = token;
      document.getElementById('token').value = token;

      const data = new URLSearchParams();
      for (const pair of new FormData(document.querySelector('form'))) {
        data.append(pair[0], pair[1]);
      }

      fetch('send.php', {
          method: 'post',
          body: data,
        })
        .then(response => response.json())
        .then(result => console.log(result));
    });
  });
});