const modal = document.querySelector('.modal');
const modalOpenBtn = document.querySelectorAll('.modal-btn');
const modalBg = document.querySelector('.modal-bg');
const modalCloseBtn = document.querySelector('.modal__close-btn');

// modalOpenBtn.addEventListener('click', () => {
//     modalBg.classList.add('show-modal');
// })

modalOpenBtn.forEach((btn) => {
    btn.addEventListener('click', () => {
        modalBg.classList.add('show-modal');
    });
});

modalCloseBtn.addEventListener('click', () => {
    modalBg.classList.remove('show-modal');
});