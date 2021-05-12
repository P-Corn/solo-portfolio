//NAV
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


//MODAL
const modalOpenBtn = document.querySelector('.modal-btn');
const modalBg = document.querySelector('.modal-bg');
const modalCloseBtn = document.querySelector('.modal__close-btn');

modalOpenBtn.addEventListener('click', () => {
    modalBg.classList.add('show-modal');
})

modalCloseBtn.addEventListener('click', () => {
    modalBg.classList.remove('show-modal');
})

// CAROUSEL
const carouselSlide = document.querySelector('.carousel__slide');
const carouselImages = document.querySelectorAll('.carousel__slide img');
const modal = document.querySelector('.modal');
const prevBtn = document.querySelector('.prevBtn');
const nextBtn = document.querySelector('.nextBtn');

let counter = 1;
let size = 0;

const resizeImg = () => {
    if(window.innerWidth >= 700)
        size = 700;
    else
        size = window.innerWidth;
}

resizeImg();

carouselSlide.style.transform = `translateX(${-size * counter}px)`;

//Button listeners
window.addEventListener('resize', () => {
    size = carouselImages[1].clientWidth;
    carouselSlide.style.transform = `translateX(${-size * counter}px)`;
});

nextBtn.addEventListener('click', () => {
    if(counter === carouselImages.length -1) return;
    carouselSlide.style.transition = 'transform 0.4s ease-in-out';
    counter++;
    carouselSlide.style.transform = `translateX(${-size * counter}px)`;
})

prevBtn.addEventListener('click', () => {
    if(counter <= 0) return;
    carouselSlide.style.transition = 'transform 0.4s ease-in-out';
    counter--;
    carouselSlide.style.transform = `translateX(${-size * counter}px)`;
})

carouselSlide.addEventListener('transitionend', () => {
    if(carouselImages[counter].id === 'lastClone'){
        carouselSlide.style.transition = 'none';
        counter = carouselImages.length-2;
        carouselSlide.style.transform = `translateX(${-size * counter}px)`;
    }
    if(carouselImages[counter].id === 'firstClone'){
        carouselSlide.style.transition = 'none';
        console.log(counter);
        counter = carouselImages.length - counter;
        carouselSlide.style.transform = `translateX(${-size * counter}px)`;
    }
})

//SKILLS SLIDER
const skillItems = document.querySelectorAll('.skills__col');
const skillSliders = document.querySelectorAll('.skills__col__slider');

skillItems.forEach((skill, index) => {
    skill.addEventListener('mouseover', () => {
        skillSliders[index].style.top = '0';
        console.log(skillSliders[index])
    })

    skill.addEventListener('mouseout', () => {
        skillSliders[index].style.top = '100%';
        console.log(skillSliders[index])
    })
})

//ANIMATIONS
const projectCards = document.querySelectorAll('.project-card');
const strengthsCards = document.querySelectorAll('.card');

const options = {
    root: null,
    rootMargin: '-200px'
};

const observer = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
        if(entry.isIntersecting === true) {
            console.log(entry.target.classList.value)
            if(entry.target.classList.value === 'project-card project-card-hidden') {
                entry.target.classList.remove('project-card-hidden');
            }
            if(entry.target.classList.value === 'card strengths-card-hidden') {
                entry.target.classList.remove('strengths-card-hidden');
            }
        }
    })
}, options)

projectCards.forEach(card => observer.observe(card));
strengthsCards.forEach(card => observer.observe(card));