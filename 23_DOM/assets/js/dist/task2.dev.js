"use strict";

var btn = document.createElement('button');
btn.setAttribute('type', "button");
btn.className = "btn btn-primary btn-lg";
btn.innerText = "\u0412\u0456\u0434\u043A\u0440\u0438\u0442\u0438 \u043C\u043E\u0434\u0430\u043B\u044C\u043D\u0435 \u0432\u0456\u043A\u043D\u043E";
document.querySelector('.page-wrapper').prepend(btn);

btn.onclick = function (e) {
  var modal = document.createElement('div');
  modal.className = "modal-view";
  var modalText = document.createElement('div');
  modalText.innerText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
  modalText.className = "modal-text";
  modalBtn = document.createElement('button');
  modalBtn.setAttribute('type', "button");
  modalBtn.innerText = 'Закрити модальне вікно';
  modalBtn.className = 'btn btn-primary btn-sm';
  document.querySelector('.page-wrapper').prepend(modal);
  modal.append(modalText);
  modal.append(modalBtn);
  e.target.remove();

  modalBtn.onclick = function () {
    modal.remove();
    document.querySelector('.page-wrapper').prepend(btn);
  };
};