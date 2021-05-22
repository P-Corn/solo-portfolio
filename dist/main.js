/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 777:
/***/ (() => {

var carouselSlide = document.querySelector('.carousel__slide');
var carouselImages = document.querySelectorAll('.carousel__slide img');
var prevBtn = document.querySelector('.prevBtn');
var nextBtn = document.querySelector('.nextBtn');
var counter = 1;
var size = 0;

var resizeImg = function resizeImg() {
  if (window.innerWidth >= 700) size = 700;else size = window.innerWidth;
};

resizeImg();
carouselSlide.style.transform = "translateX(".concat(-size * counter, "px)"); //Button listeners

window.addEventListener('resize', function () {
  size = carouselImages[1].clientWidth;
  carouselSlide.style.transform = "translateX(".concat(-size * counter, "px)");
});
nextBtn.addEventListener('click', function () {
  if (counter === carouselImages.length - 1) return;
  carouselSlide.style.transition = 'transform 0.4s ease-in-out';
  counter++;
  carouselSlide.style.transform = "translateX(".concat(-size * counter, "px)");
});
prevBtn.addEventListener('click', function () {
  if (counter <= 0) return;
  carouselSlide.style.transition = 'transform 0.4s ease-in-out';
  counter--;
  carouselSlide.style.transform = "translateX(".concat(-size * counter, "px)");
});
carouselSlide.addEventListener('transitionend', function () {
  if (carouselImages[counter].id === 'lastClone') {
    carouselSlide.style.transition = 'none';
    counter = carouselImages.length - 2;
    carouselSlide.style.transform = "translateX(".concat(-size * counter, "px)");
  }

  if (carouselImages[counter].id === 'firstClone') {
    carouselSlide.style.transition = 'none';
    console.log(counter);
    counter = carouselImages.length - counter;
    carouselSlide.style.transform = "translateX(".concat(-size * counter, "px)");
  }
});

/***/ }),

/***/ 641:
/***/ (() => {

var submitMessage = document.querySelector('.submit-message');

(function () {
  emailjs.init('user_WDObBAlbPYJe8ZiZ6VQ9w');
})();

window.onload = function () {
  document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault(); // generate 5 digit number for contact_number variable

    this.contact_number.value = Math.random() * 100000 | 0; // IDs

    emailjs.sendForm('portfolio_site', 'portfolio_site', this).then(function () {
      submitMessage.textContent = 'Message sent successfully';
      submitMessage.classList.add('success');
      document.getElementById('contact-form').reset();
      setTimeout(function () {
        submitMessage.textContent = '';
        submitMessage.classList.remove('success');
      }, 4000);
    }, function (error) {
      submitMessage.textContent = 'Message failed to send';
      submitMessage.classList.add('fail');
      console.log('Message failed to send. Error: ' + error);
      setTimeout(function () {
        submitMessage.textContent = '';
        submitMessage.classList.remove('fail');
      }, 4000);
    });
  });
};

/***/ }),

/***/ 833:
/***/ (() => {

var modal = document.querySelector('.modal');
var modalOpenBtn = document.querySelector('.modal-btn');
var modalBg = document.querySelector('.modal-bg');
var modalCloseBtn = document.querySelector('.modal__close-btn');
modalOpenBtn.addEventListener('click', function () {
  modalBg.classList.add('show-modal');
});
modalCloseBtn.addEventListener('click', function () {
  modalBg.classList.remove('show-modal');
});

/***/ }),

/***/ 384:
/***/ (() => {

var linkWrap = document.querySelector('.link-wrap');
var navIcon = document.querySelector('.nav__icon');
var navOpen = false;
navIcon.addEventListener('click', function () {
  if (!navOpen) {
    linkWrap.style.height = "22rem";
    navOpen = !navOpen;
  } else {
    linkWrap.style.height = "0";
    navOpen = !navOpen;
  }
});

/***/ }),

/***/ 252:
/***/ (() => {

var skillItems = document.querySelectorAll('.skills__col');
var skillSliders = document.querySelectorAll('.skills__col__slider');
var projectCards = document.querySelectorAll('.project-card');
var strengthCards = document.querySelectorAll('.strengths-card-hidden');
var headerSection = document.querySelector('#header');
var projectsSection = document.querySelector('#projects-section');
var strengthsSection = document.querySelector('#strengths-section');
var skillsSection = document.querySelector('#skills-section');
var contactSection = document.querySelector('#contact-section');
var pageLinks = document.querySelectorAll('.page-link'); //Set the Home nav link as the default when the page is loaded

pageLinks[0].style.color = '#e31b6d'; //Observer for the nav link colors changing when reaching a section

var sectionObserver = new IntersectionObserver(function (entries, observer) {
  entries.forEach(function (entry) {
    if (entry.target.id === 'header') {
      if (entry.isIntersecting) {
        Array.from(pageLinks, function (link) {
          return link.style.color = 'white';
        });
        pageLinks[0].style.color = '#e31b6d';
        return;
      }

      pageLinks[0].style.color = 'white';
    }

    if (entry.target.id === 'projects-section') {
      if (entry.isIntersecting) {
        Array.from(pageLinks, function (link) {
          return link.style.color = 'white';
        });
        pageLinks[1].style.color = '#e31b6d';
        return;
      }

      pageLinks[1].style.color = 'white';
    }

    if (entry.target.id === 'strengths-section') {
      if (entry.isIntersecting) {
        Array.from(pageLinks, function (link) {
          return link.style.color = 'white';
        });
        pageLinks[2].style.color = '#e31b6d';
        return;
      }

      pageLinks[2].style.color = 'white';
    }

    if (entry.target.id === 'skills-section') {
      if (entry.isIntersecting) {
        Array.from(pageLinks, function (link) {
          return link.style.color = 'white';
        });
        pageLinks[3].style.color = '#e31b6d';
        return;
      }

      pageLinks[3].style.color = 'white';
    }

    if (entry.target.id === 'contact-section') {
      if (entry.isIntersecting) {
        Array.from(pageLinks, function (link) {
          return link.style.color = 'white';
        });
        pageLinks[4].style.color = '#e31b6d';
        return;
      }

      pageLinks[4].style.color = 'white';
    }
  });
}, {
  root: null,
  rootMargin: "".concat(window.innerHeight < 850 ? '-325px 0px -325px 0px' : '-400px 0px -450px 0px')
});
sectionObserver.observe(headerSection);
sectionObserver.observe(projectsSection);
sectionObserver.observe(strengthsSection);
sectionObserver.observe(skillsSection);
sectionObserver.observe(contactSection);
var options = {
  rootMargin: '-200px'
};

var handleAnimation = function handleAnimation() {
  var time = 0;

  if (!shown) {
    skillItems.forEach(function (card, index) {
      setTimeout(function () {
        skillSliders[index].style.top = '0';
        setTimeout(function () {
          skillSliders[index].style.top = '100%';
        }, 2000);
      }, time);
      time += 90;
    });
  }

  shown = true;
}; //Observer for animations in sections


var observer = new IntersectionObserver(function (entries, observer) {
  entries.forEach(function (entry) {
    //Section content animations
    if (entry.isIntersecting === true) {
      if (entry.target.classList.value === 'project-card project-card-hidden') {
        entry.target.classList.remove('project-card-hidden');
      }

      if (entry.target.classList.value === 'card strengths-card-hidden') {
        entry.target.classList.remove('strengths-card-hidden');
      }

      if (entry.target.classList.value === 'skills__col') {
        handleAnimation();
      }
    }
  });
}, options);
var shown = false;
projectCards.forEach(function (card) {
  return observer.observe(card);
});
strengthCards.forEach(function (card) {
  return observer.observe(card);
});
if (window.innerWidth < 716) observer.observe(skillItems[skillItems.length - 3]);else observer.observe(skillItems[skillItems.length - 1]); // Vanilla JavaScript Scroll to Anchor
//CONTACT FORM WITH EMAILJS

/***/ }),

/***/ 883:
/***/ (() => {

var skillItems = document.querySelectorAll('.skills__col');
var skillSliders = document.querySelectorAll('.skills__col__slider');
skillItems.forEach(function (skill, index) {
  skill.addEventListener('mouseover', function () {
    skillSliders[index].style.top = '0';
  });
  skill.addEventListener('mouseout', function () {
    skillSliders[index].style.top = '100%';
  });
});

/***/ }),

/***/ 970:
/***/ (() => {

var headerSection = document.querySelector('#header');

(function () {
  scrollTo(headerSection);
  scrollTo(headerSection);
})();

function scrollTo() {
  var links = document.querySelectorAll('.scroll');
  links.forEach(function (each) {
    return each.onclick = scrollAnchors;
  });
}

function scrollAnchors(e) {
  var respond = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

  var distanceToTop = function distanceToTop(el) {
    return Math.floor(el.getBoundingClientRect().top);
  };

  e.preventDefault();
  var targetID = respond ? respond.getAttribute('href') : this.getAttribute('href');
  var targetAnchor = document.querySelector(targetID);
  if (!targetAnchor) return;
  var originalTop = distanceToTop(targetAnchor);
  window.scrollBy({
    top: originalTop,
    left: 0,
    behavior: 'smooth'
  });
  var checkIfDone = setInterval(function () {
    var atBottom = window.innerHeight + window.pageYOffset >= document.body.offsetHeight - 2;

    if (distanceToTop(targetAnchor) === 0 || atBottom) {
      targetAnchor.tabIndex = '-1';
      targetAnchor.focus();
      window.history.pushState('', '', targetID);
      clearInterval(checkIfDone);
    }
  }, 100);
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
__webpack_require__(970);

__webpack_require__(641);

__webpack_require__(777);

__webpack_require__(833);

__webpack_require__(252);

__webpack_require__(883);

__webpack_require__(384);
})();

/******/ })()
;