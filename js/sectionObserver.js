const skillItems = document.querySelectorAll('.skills__col');
const skillSliders = document.querySelectorAll('.skills__col__slider');
const projectCards = document.querySelectorAll('.project-card');
const strengthCards = document.querySelectorAll('.strengths-card-hidden');
const headerSection = document.querySelector('#header');
const projectsSection = document.querySelector('#projects-section');
const strengthsSection = document.querySelector('#strengths-section');
const skillsSection = document.querySelector('#skills-section');
const contactSection = document.querySelector('#contact-section');
const pageLinks = document.querySelectorAll('.page-link');

//Set the Home nav link as the default when the page is loaded
pageLinks[0].style.color = '#e31b6d';
//Observer for the nav link colors changing when reaching a section
const sectionObserver = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
        if(entry.target.id === 'header') {
            if(entry.isIntersecting) {
                Array.from(pageLinks, link => link.style.color = 'white')
                pageLinks[0].style.color = '#e31b6d';
                return;
            }
            pageLinks[0].style.color = 'white'
        }
        if(entry.target.id === 'projects-section') {
            if(entry.isIntersecting) {
                Array.from(pageLinks, link => link.style.color = 'white')
                pageLinks[1].style.color = '#e31b6d';
                return;
            }
            pageLinks[1].style.color = 'white'
        }
        if(entry.target.id === 'strengths-section') {
            if(entry.isIntersecting) {
                Array.from(pageLinks, link => link.style.color = 'white')
                pageLinks[2].style.color = '#e31b6d';
                return;
            }
            pageLinks[2].style.color = 'white'
        }
        if(entry.target.id === 'skills-section') {
            if(entry.isIntersecting) {
                Array.from(pageLinks, link => link.style.color = 'white')
                pageLinks[3].style.color = '#e31b6d';
                return;
            }
            pageLinks[3].style.color = 'white'
        }
        if(entry.target.id === 'contact-section') {
            if(entry.isIntersecting) {
                Array.from(pageLinks, link => link.style.color = 'white')
                pageLinks[4].style.color = '#e31b6d';
                return;
            }
            pageLinks[4].style.color = 'white'
        }
    })
}, {
    root: null,
    rootMargin: `${window.innerHeight < 850 ? '-325px 0px -325px 0px' : '-400px 0px -450px 0px'}`,
})

sectionObserver.observe(headerSection);
sectionObserver.observe(projectsSection);
sectionObserver.observe(strengthsSection);
sectionObserver.observe(skillsSection);
sectionObserver.observe(contactSection);

const options = {
    rootMargin: '-200px'
}

const handleAnimation = () => {
    let time = 0;
    if(!shown) {
        skillItems.forEach((card, index) => {
            setTimeout(() => {
                skillSliders[index].style.top = '0';
                setTimeout(() => {
                    skillSliders[index].style.top = '100%';
                }, 2000)
            }, time)
            time += 90;
        })
    }
    shown = true;
}

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
if(window.innerWidth < 716)
    observer.observe(skillItems[skillItems.length - 3]);
else
    observer.observe(skillItems[skillItems.length - 1]);

// Vanilla JavaScript Scroll to Anchor


//CONTACT FORM WITH EMAILJS



