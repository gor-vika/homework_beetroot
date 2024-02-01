const textBlock = document.createElement('div');
textBlock.className = 'textBlock';
textBlock.innerText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';
document.querySelector('.page-wrapper').append(textBlock);

const textarea = document.createElement('textarea');
textarea.style.display = 'none';
textarea.className = 'textBlock';
textarea.innerText = '';
document.querySelector('.page-wrapper').append(textarea);

document.addEventListener('keyup', changeText);

function changeText(elem){
    if (elem.ctrlKey && elem.code === 'KeyE'){
        elem.preventDefault();
        textBlock.style.display = 'none';
        textarea.style.display = 'block';
        textarea.value = textBlock.innerText;
    } else return;
}
document.addEventListener('keyup', saveText);

function saveText(elem){
    if (elem.ctrlKey && elem.code === 'KeyS'){
        elem.preventDefault();
        textarea.style.display = 'none';
        textBlock.style.display = 'block';
        textBlock.innerText = textarea.value;
    } else return;
}
