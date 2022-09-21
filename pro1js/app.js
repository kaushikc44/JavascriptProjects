// select modal-btn,modal-overlay,close-btn
// listen for click events on modal-btn and close-btn
// when user clicks modal-btn add .open-modal to modal-overlay
// when user clicks close-btn remove .open-modal from modal-overlay

    //do work
const btn = document.querySelector('.modal-btn');
const closedbtn = document.querySelector('.close-btn');
const modaloverlay = document.querySelector('.modal-overlay');


btn.addEventListener('click',myfunction);

function myfunction(){
        modaloverlay.classList.toggle('open-modal');
}

closedbtn.addEventListener('click', myfunctionclose);

function myfunctionclose(){
    modaloverlay.classList.toggle('open-modal');
    
}