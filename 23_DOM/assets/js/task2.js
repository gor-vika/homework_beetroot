const btn = document.createElement('button');
btn.setAttribute('type', "button");
btn.className = "btn btn-primary btn-lg";
btn.innerText = `Відкрити модальне вікно`;
document.querySelector('.page-wrapper').prepend(btn);

btn.onclick = function(e){
    const modal = document.createElement('div');
    modal.className = "modal-view";
    const modalText = document.createElement('div');
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
    modalBtn.onclick = function (){
        modal.remove();
        document.querySelector('.page-wrapper').prepend(btn);
    }
}
