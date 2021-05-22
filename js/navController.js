const linkWrap = document.querySelector('.link-wrap');
const navIcon = document.querySelector('.nav__icon');

let navOpen = false;

navIcon.addEventListener('click', () => {
    if(!navOpen) {
        linkWrap.style.height = "22rem";
        navOpen = !navOpen;
    } else {
        linkWrap.style.height = "0";
        navOpen = !navOpen;
    }
})