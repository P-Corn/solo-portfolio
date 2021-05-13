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
    })

    skill.addEventListener('mouseout', () => {
        skillSliders[index].style.top = '100%';
    })
})

//ANIMATIONS
const projectCards = document.querySelectorAll('.project-card');
const strengthCards = document.querySelectorAll('.strengths-card-hidden');
const headerSection = document.querySelector('#header');
const projectsSection = document.querySelector('#projects-section');
const strengthsSection = document.querySelector('#strengths-section');
const skillsSection = document.querySelector('#skills-section');
const contactSection = document.querySelector('#contact-section');
const pageLinks = document.querySelectorAll('.page-link');

const options = {
    root: null,
    rootMargin: '-150px'
};

const handleAnimation = () => {
    let time = 0;
    if(!shown) {
        skillItems.forEach((card, index) => {
            setTimeout(() => {
                skillSliders[index].style.top = '0';
                setTimeout(() => {
                    skillSliders[index].style.top = '100%';
                }, 1300)
            }, time)
            time += 70;
        })
    }
    shown = true;
}

//Observer for the nav link colors changing when reaching a section
const sectionObserver = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
        if(entry.target.id === 'header') {
            if(entry.isIntersecting) {
                Array.from(pageLinks, link => link.style.color = 'white')
                pageLinks[0].style.color = '#e31b6d'; 
            }
        }
        if(entry.target.id === 'projects-section') {
            if(entry.isIntersecting) {
                Array.from(pageLinks, link => link.style.color = 'white')
                pageLinks[1].style.color = '#e31b6d';
            }
        }
        if(entry.target.id === 'strengths-section') {
            if(entry.isIntersecting) {
                Array.from(pageLinks, link => link.style.color = 'white')
                pageLinks[2].style.color = '#e31b6d';
            }
        }
        if(entry.target.id === 'skills-section') {
            if(entry.isIntersecting) {
                Array.from(pageLinks, link => link.style.color = 'white')
                pageLinks[3].style.color = '#e31b6d';
            }
        }
        if(entry.target.id === 'contact-section') {
            if(entry.isIntersecting) {
                Array.from(pageLinks, link => link.style.color = 'white')
                pageLinks[4].style.color = '#e31b6d';
            }
        }
    })
}, {
    root: null,
    rootMargin: '-400px 0px',
})

sectionObserver.observe(headerSection);
sectionObserver.observe(projectsSection);
sectionObserver.observe(strengthsSection);
sectionObserver.observe(skillsSection);
sectionObserver.observe(contactSection);

//Observer for animations in sections
const observer = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
        //Section content animations
        if(entry.isIntersecting === true) {
            if(entry.target.classList.value === 'project-card project-card-hidden') {
                entry.target.classList.remove('project-card-hidden');
            }
            if(entry.target.classList.value === 'card strengths-card-hidden') {
                entry.target.classList.remove('strengths-card-hidden');
            }
            if(entry.target.classList.value === 'skills__col') {
                handleAnimation();
            }
        }
    })
}, options)

let shown = false;
projectCards.forEach(card => observer.observe(card));
strengthCards.forEach(card => observer.observe(card));
observer.observe(skillItems[skillItems.length - 1]);