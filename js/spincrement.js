// Spincrement (Плавно уведичивающееся число):

$(document).ready(function () {
  var show = true;
  var countbox = ".statistics-items";
  $(window).on("scroll load resize", function () {
    if (!show) return false; // Отменяем показ анимации, если она уже была выполнена
    var w_top = $(window).scrollTop(); // Количество пикселей на которое была прокручена страница
    var e_top = $(countbox).offset().top; // Расстояние от блока со счетчиками до верха всего документа
    var w_height = $(window).height(); // Высота окна браузера
    var d_height = $(document).height(); // Высота всего документа
    var e_height = $(countbox).outerHeight(); // Полная высота блока со счетчиками
    if (w_top + 500 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height) {
      $('.statistic-count').css('opacity', '1');
      $('.statistic-count').spincrement({
        thousandSeparator: "",
        duration: 5000
      });
      show = false;
    }
  });
});

$(document).ready(function () {
  var show_2 = true;
  var countbox_2 = ".counter-wrapper"
  $(window).on("scroll load resize", function () {
    if (!show_2) return false; // Отменяем показ анимации, если она уже была выполнена
    var w_top = $(window).scrollTop(); // Количество пикселей на которое была прокручена страница
    var e_top_2 = $(countbox_2).offset().top; // Расстояние от блока со счетчиками до верха всего документа
    var w_height = $(window).height(); // Высота окна браузера
    var d_height = $(document).height(); // Высота всего документа
    var e_height_2 = $(countbox_2).outerHeight(); // Полная высота блока со счетчиками
    if (w_top + 700 >= e_top_2 || w_height + w_top == d_height || e_height_2 + e_top_2 < w_height) {
      $('.counter-item').css('opacity', '1');
      $('.counter-item').spincrement({
        thousandSeparator: "",
        duration: 3000
      });
      show_2 = false;
    }
  });
});