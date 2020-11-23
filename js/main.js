const body = document.body;
const header = document.querySelector('.header');
const hero = document.querySelector('.hero');
const menu = document.querySelector('#menu');
const navbar = document.querySelector('.navbar');
const navToggle = document.querySelector('.nav-toggle');
const scrollWidth = window.innerWidth - document.body.offsetWidth + 'px';

window.addEventListener('DOMContentLoaded', function () {
  navToggle.addEventListener('click', function () {
    menu.classList.toggle('active');
    navToggle.classList.toggle('active');
    if (header.classList.contains("fixed") && navbar.classList.contains("active") && window.innerWidth <= 576) {
      console.log('Body scroll disabled!');
      body.style.paddingRight = scrollWidth;
      header.style.paddingRight = scrollWidth;
      // document.getElementById('to-top__btn').style.right = "calc(30px + " + scrollWidth + "px)";
      body.classList.add("lock");
    } else if (navbar.classList.contains("active") && window.innerWidth <= 576) {
      console.log('Body scroll disabled!');
      body.style.paddingRight = scrollWidth;
      body.classList.add("lock");
    } else {
      console.log('Body scroll enabled!');
      body.style.paddingRight = '0px';
      header.style.paddingRight = '0px';
      body.classList.remove("lock");
    };
  })
});

// Fixed Header:

window.addEventListener('scroll', function () {
  myFunction()
});

const toTopBtn = document.getElementById('to-top__btn');
const headerH = document.querySelector('.header').offsetHeight + document.querySelector('.navbar').offsetHeight;
const title = document.querySelector('.main-title');
const sticky = header.offsetHeight + hero.offsetHeight;

function myFunction() {
  if (window.pageYOffset >= headerH && window.pageYOffset < sticky) {
    header.classList.add("hidden");
  } else if (window.pageYOffset >= sticky) {
    header.classList.remove("hidden");
    header.classList.add("fixed");
    title.classList.add('visually-hidden');
    toTopBtn.classList.add('active');
    header.style.marginTop = -header.offsetHeight + 'px';
    body.style.paddingTop = header.offsetHeight + 'px';
  } else {
    header.classList.remove("hidden");
    header.classList.remove("fixed");
    toTopBtn.classList.remove('active');
    title.classList.remove('visually-hidden');
  }
}

// Telephone mask (InputMask):

$("#tel").inputmask("+7 (999) 999-99-99");

// Плавный скролл страницы:

$("[data-scroll]").on("click", function (event) {
  event.preventDefault();

  var $this = $(this),
    blockId = $(this).data("scroll"),
    blockOffset = $(blockId).offset().top;
  $(".nav-item a").removeClass("active");
  $this.addClass("active");

  $("html, body").animate({
    scrollTop: blockOffset
  }, 700);
});

[...document.querySelectorAll('[data-scroll="#top"]')].forEach(function (top) {
  top.addEventListener('click', function () {
    document.querySelector(".navbar").classList.remove("active");
    document.querySelector(".nav-toggle").classList.remove("active");
  });
});

// Получаем все кнопки после загрузки слайдеров (для изменения Placeholder):

[...document.querySelectorAll('.btn-junior')].forEach(function (def) {
  def.addEventListener('click', function () {
    document.getElementById('course').value = "Младшие классы / Дошкольники";
  });
});

[...document.querySelectorAll('.btn-exam')].forEach(function (def) {
  def.addEventListener('click', function () {
    document.getElementById('course').value = "Международные экзамены";
  });
});

[...document.querySelectorAll('.btn-middle')].forEach(function (def) {
  def.addEventListener('click', function () {
    document.getElementById('course').value = "Средние классы";
  });
});

[...document.querySelectorAll('.btn-try')].forEach(function (def) {
  def.addEventListener('click', function () {
    document.getElementById('course').value = "Пробное занятие";
  });
});

[...document.querySelectorAll('.btn-default')].forEach(function (def) {
  def.addEventListener('click', function () {
    document.getElementById('course').value = "Пробный урок";
  });
});