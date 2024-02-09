"use strict";

var API_KEY = '368eda75';
var btn = document.getElementById('search-btn');

btn.onclick = function () {
  var search = document.getElementById('search').value;

  if (search !== '') {
    searchMovies(search);
  }
};

function searchMovies(search) {
  var response, json, list;
  return regeneratorRuntime.async(function searchMovies$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(fetch("https://www.omdbapi.com/?apikey=".concat(API_KEY, "&s=").concat(search, "&type=movie")));

        case 2:
          response = _context.sent;
          _context.next = 5;
          return regeneratorRuntime.awrap(response.json());

        case 5:
          json = _context.sent;

          if (json.Response === 'True') {
            list = '';
            json.Search.forEach(function (item) {
              list += movieHTML(item);
            });
            document.getElementById('movies-list').innerHTML = list;
          } else {
            toast.error("".concat(json.Error));
          }

        case 7:
        case "end":
          return _context.stop();
      }
    }
  });
}

document.addEventListener('click', function (event) {
  if (event.target.classList.contains('btn-detail')) {
    getDetalMovie(event.target.dataset.id);
  }

  if (event.target.classList.contains('btn-fav')) {
    addToFav(event.target.dataset.info);
  }
});

function getDetalMovie(id) {
  var response, json;
  return regeneratorRuntime.async(function getDetalMovie$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return regeneratorRuntime.awrap(fetch("https://www.omdbapi.com/?apikey=".concat(API_KEY, "&i=").concat(id)));

        case 2:
          response = _context2.sent;
          _context2.next = 5;
          return regeneratorRuntime.awrap(response.json());

        case 5:
          json = _context2.sent;
          toast.info(json.Genre);

        case 7:
        case "end":
          return _context2.stop();
      }
    }
  });
}

function addToFav(info) {
  var filmData = JSON.parse(info); // const rez = localStorage.getItem('fav_list');
  // let favList = [];
  // if (rez) {
  //     favList = JSON.parse(rez);
  // }

  var favList = JSON.parse(localStorage.getItem('fav_list')) || [];
  var issetIndex = favList.findIndex(function (el) {
    return el.imdbID === filmData.imdbID;
  });

  if (issetIndex !== -1) {
    favList.splice(issetIndex, 1);
  } else {
    favList.push(filmData);
  }

  localStorage.setItem('fav_list', JSON.stringify(favList));
  showFavMovies();
  toast.success('added to favorite');
}

function movieHTML(item) {
  return "<div class=\"card\">\n            <img src=\"".concat(item.Poster, "\" class=\"card-img-top\" alt=\"").concat(item.Title, "\">\n            <div class=\"card-body\">\n                <h5 class=\"card-title\">").concat(item.Title, "</h5>\n                <p class=\"card-text\"><b>Year:</b> ").concat(item.Year, "</p>\n                <button class=\"btn btn-primary btn-detail\" data-id=\"").concat(item.imdbID, "\">Detail</button>\n                <button class=\"btn btn-warning btn-fav\" data-info='").concat(JSON.stringify(item), "'>Add to favorite</button>\n            </div>\n        </div>");
}

function showFavMovies() {
  var favList = JSON.parse(localStorage.getItem('fav_list')) || [];
  var list = "";
  favList.forEach(function (item) {
    list += movieHTML(item);
  });
  document.getElementById('fav-movies').innerHTML = list;
}

showFavMovies();