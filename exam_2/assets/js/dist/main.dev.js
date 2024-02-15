"use strict";

var lazyLoadInstance = new LazyLoad({});
$(function () {
  $('#lightSlider').lightSlider({
    item: 1,
    vertical: true,
    verticalHeight: 800,
    slideMargin: 0,
    controls: false,
    auto: true,
    loop: true,
    responsive: [{
      breakpoint: 500,
      settings: {
        pager: false
      }
    }]
  });
});
document.getElementById('hamb-btn').addEventListener('click', function () {
  document.body.classList.toggle('open-mobile-menu');
  document.getElementById('hamb-btn').classList.toggle('is-active');
});
document.getElementById('hamb-btn-mobile').addEventListener('click', function () {
  document.body.classList.toggle('open-mobile-menu');
  document.getElementById('hamb-btn').classList.toggle('is-active');
});
document.querySelectorAll('.mobile-menu-item').forEach(function (item) {
  item.addEventListener('click', function () {
    document.body.classList.toggle('open-mobile-menu');
    document.getElementById('hamb-btn').classList.toggle('is-active');
  });
});
$(window).on("scroll", function () {
  if ($(this).scrollTop() >= 200) {
    if (!$("#header").hasClass("scrolled")) {
      $("#header").addClass("scrolled");
    }
  } else {
    if ($("#header").hasClass("scrolled")) {
      $("#header").removeClass("scrolled");
    }
  }
});
$("#scroll_arrow").on("click", function () {
  window.scrollTo({
    top: $("#projects").offset().top,
    behavior: 'smooth'
  });
});
$(function _callee() {
  var response, json, list;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(fetch('assets/js/news.json'));

        case 2:
          response = _context.sent;
          _context.next = 5;
          return regeneratorRuntime.awrap(response.json());

        case 5:
          json = _context.sent;

          if (json.length > 0) {
            list = "";
            json.forEach(function (item) {
              list += addNewsHTML(item);
            });
            document.getElementById('news-slider').innerHTML = list;
          } else {
            toast.error("No news found");
          }

          $('.owl-carousel').owlCarousel({
            loop: true,
            dots: true,
            dotsEach: 3,
            center: true,
            nav: true,
            margin: 30,
            navText: ["<button type=\"button\" class=\"owl-arrow owl-prev\"></button>", "<button type=\"button\" class=\" owl-arrow owl-next\">\n        </button>"],
            responsiveClass: true,
            responsive: {
              0: {
                items: 1,
                nav: false
              },
              600: {
                items: 1,
                nav: false
              },
              800: {
                items: 2
              },
              1120: {
                margin: 20,
                items: 3
              }
            }
          });

        case 8:
        case "end":
          return _context.stop();
      }
    }
  });
});

function addNewsHTML(item) {
  return "<div class=\"news-slider\">\n                <div class=\"news-card\">\n                    <div class=\"news-img\">\n                        <img src=\"".concat(item.image, "\" alt=\"news_image\" title=\"").concat(item.title, "\">\n                    </div>\n                    <h5 class=\"news-title\">").concat(item.title, "</h5>\n                    <p class=\"news-anons\">").concat(item.anons, "</p>\n                    <div class=\"news-author\">\n                        <div class=\"news-author-photo\">\n                            <img src=\"").concat(item.author.avatar, "\">\n                        </div>\n                        <div class=\"news-author-info\">\n                            <span class=\"author-name\">").concat(item.author.name, "</span>\n                            <span class=\"news-date\">").concat(item.date, "</span>\n                        </div>\n                    </div>\n                </div>\n            </div>");
}

$(function () {
  if ($(".news-slider").length > 0) {
    $(".news-slider").addClass("owl-carousel owl-theme");
  }

  if ($(".news-card").length > 0) {
    $(".news-card").addClass("item");
  }
});
lightGallery(document.getElementById('gallery_container'), {
  selector: '.gallery_item',
  mode: 'lg-slide',
  cssEasing: 'cubic-bezier(0.25, 0, 0.25, 1)',
  plugins: [lgThumbnail],
  thumbnail: true,
  subHtmlSelectorRelative: true
});

function initMap(link) {
  link.remove();
  var map = L.map('map').setView([40.66763414583054, -73.92223675289303], 13);
  var customMarker = L.icon({
    iconUrl: 'assets/img/pin.svg',
    shadowUrl: 'assets/img/pin-shadow.svg',
    iconSize: [16, 16],
    shadowSize: [70, 70],
    iconAnchor: [0, 0],
    shadowAnchor: [27, 27],
    popupAnchor: [0, 0]
  });
  L.tileLayer('https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
  }).addTo(map);
  L.marker([40.66763414583054, -73.92223675289303], {
    icon: customMarker
  }).addTo(map).bindPopup('MONTICELLO<br>INTERNATIONAL GROUP');
}

var form = document.getElementById('contacts-form');

function isValidEmail(email) {
  var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  return regex.test(email);
}

document.addEventListener('focus', function (e) {
  if (e.target.classList.contains('input')) {
    if (e.target.classList.contains('is-active')) {
      e.target.classList.remove('is-active');
    }
  }
});
form.addEventListener('submit', function (e) {
  e.preventDefault();
  var errors = [];
  var nameField = document.getElementById('name');
  var emailField = document.getElementById('email');
  var name = nameField.value.trim();
  var email = emailField.value.trim();

  if (name === '') {
    errors.push('Enter your name');
    nameField.classList.add('is-invalid');
  } else {
    if (name.length < 2) {
      errors.push('Your name is to short');
      nameField.classList.add('is-invalid');
    }
  }

  if (email === '') {
    errors.push('Enter your email');
    emailField.classList.add('is-invalid');
  } else {
    if (!isValidEmail(email)) {
      errors.push('Incorrect email adress');
      emailField.classList.add('is-invalid');
    }
  }

  if (errors.length) {
    toast.error(errors.join(', '));
    return;
  }

  var message = "<b>Name: </b>".concat(name, "\r\n<b>Email: </b>").concat(email);
  var CHAT_ID = '-4164940018';
  var BOT_TOKEN = '6599006475:AAFuqFX3zqhxYY3hWzMD0PP9PpHhSW6K5Q4';
  var url = "https://api.telegram.org/bot".concat(BOT_TOKEN, "/sendMessage?chat_id=").concat(CHAT_ID, "&text=").concat(encodeURI(message), "&parse_mode=HTML");
  fetch(url, {
    method: 'post'
  }).then(function (resp) {
    return resp.json();
  }).then(function (resp) {
    if (resp.ok) {
      nameField.value = '';
      emailField.value = '';
      toast.success('Your message succefulle sent');
    } else {
      toast.error('Some error occured');
    }
  });
  return false;
});