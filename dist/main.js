/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("__webpack_require__(/*! ./js/smoothScrolling.js */ \"./js/smoothScrolling.js\");\n\n__webpack_require__(/*! ./js/contactForm.js */ \"./js/contactForm.js\");\n\n__webpack_require__(/*! ./js/carouselController.js */ \"./js/carouselController.js\");\n\n__webpack_require__(/*! ./js/modalController.js */ \"./js/modalController.js\");\n\n__webpack_require__(/*! ./js/sectionObserver.js */ \"./js/sectionObserver.js\");\n\n__webpack_require__(/*! ./js/sectionSkills.js */ \"./js/sectionSkills.js\");\n\n__webpack_require__(/*! ./js/navController.js */ \"./js/navController.js\");\n\n//# sourceURL=webpack://solo_portfolio/./index.js?");

/***/ }),

/***/ "./js/carouselController.js":
/*!**********************************!*\
  !*** ./js/carouselController.js ***!
  \**********************************/
/***/ (() => {

eval("var carouselSlide = document.querySelector('.carousel__slide');\nvar carouselImages = document.querySelectorAll('.carousel__slide img');\nvar prevBtn = document.querySelector('.prevBtn');\nvar nextBtn = document.querySelector('.nextBtn');\nvar counter = 1;\nvar size = 0;\n\nvar resizeImg = function resizeImg() {\n  if (window.innerWidth >= 700) size = 700;else size = window.innerWidth;\n};\n\nresizeImg();\ncarouselSlide.style.transform = \"translateX(\".concat(-size * counter, \"px)\"); //Button listeners\n\nwindow.addEventListener('resize', function () {\n  size = carouselImages[1].clientWidth;\n  carouselSlide.style.transform = \"translateX(\".concat(-size * counter, \"px)\");\n});\nnextBtn.addEventListener('click', function () {\n  if (counter === carouselImages.length - 1) return;\n  carouselSlide.style.transition = 'transform 0.4s ease-in-out';\n  counter++;\n  carouselSlide.style.transform = \"translateX(\".concat(-size * counter, \"px)\");\n});\nprevBtn.addEventListener('click', function () {\n  if (counter <= 0) return;\n  carouselSlide.style.transition = 'transform 0.4s ease-in-out';\n  counter--;\n  carouselSlide.style.transform = \"translateX(\".concat(-size * counter, \"px)\");\n});\ncarouselSlide.addEventListener('transitionend', function () {\n  if (carouselImages[counter].id === 'lastClone') {\n    carouselSlide.style.transition = 'none';\n    counter = carouselImages.length - 2;\n    carouselSlide.style.transform = \"translateX(\".concat(-size * counter, \"px)\");\n  }\n\n  if (carouselImages[counter].id === 'firstClone') {\n    carouselSlide.style.transition = 'none';\n    console.log(counter);\n    counter = carouselImages.length - counter;\n    carouselSlide.style.transform = \"translateX(\".concat(-size * counter, \"px)\");\n  }\n});\n\n//# sourceURL=webpack://solo_portfolio/./js/carouselController.js?");

/***/ }),

/***/ "./js/contactForm.js":
/*!***************************!*\
  !*** ./js/contactForm.js ***!
  \***************************/
/***/ (() => {

eval("var submitMessage = document.querySelector('.submit-message');\n\n(function () {\n  emailjs.init('user_WDObBAlbPYJe8ZiZ6VQ9w');\n})();\n\nwindow.onload = function () {\n  document.getElementById('contact-form').addEventListener('submit', function (e) {\n    e.preventDefault(); // generate 5 digit number for contact_number variable\n\n    this.contact_number.value = Math.random() * 100000 | 0; // IDs\n\n    emailjs.sendForm('portfolio_site', 'portfolio_site', this).then(function () {\n      submitMessage.textContent = 'Message sent successfully';\n      submitMessage.classList.add('success');\n      document.getElementById('contact-form').reset();\n      setTimeout(function () {\n        submitMessage.textContent = '';\n        submitMessage.classList.remove('success');\n      }, 4000);\n    }, function (error) {\n      submitMessage.textContent = 'Message failed to send';\n      submitMessage.classList.add('fail');\n      console.log('Message failed to send. Error: ' + error);\n      setTimeout(function () {\n        submitMessage.textContent = '';\n        submitMessage.classList.remove('fail');\n      }, 4000);\n    });\n  });\n};\n\n//# sourceURL=webpack://solo_portfolio/./js/contactForm.js?");

/***/ }),

/***/ "./js/modalController.js":
/*!*******************************!*\
  !*** ./js/modalController.js ***!
  \*******************************/
/***/ (() => {

eval("var modal = document.querySelector('.modal');\nvar modalOpenBtn = document.querySelectorAll('.modal-btn');\nvar modalBg = document.querySelector('.modal-bg');\nvar modalCloseBtn = document.querySelector('.modal__close-btn'); // modalOpenBtn.addEventListener('click', () => {\n//     modalBg.classList.add('show-modal');\n// })\n\nmodalOpenBtn.forEach(function (btn) {\n  btn.addEventListener('click', function () {\n    modalBg.classList.add('show-modal');\n  });\n});\nmodalCloseBtn.addEventListener('click', function () {\n  modalBg.classList.remove('show-modal');\n});\n\n//# sourceURL=webpack://solo_portfolio/./js/modalController.js?");

/***/ }),

/***/ "./js/navController.js":
/*!*****************************!*\
  !*** ./js/navController.js ***!
  \*****************************/
/***/ (() => {

eval("var linkWrap = document.querySelector('.link-wrap');\nvar navIcon = document.querySelector('.nav__icon');\nvar navOpen = false;\nnavIcon.addEventListener('click', function () {\n  if (!navOpen) {\n    linkWrap.style.height = \"22rem\";\n    navOpen = !navOpen;\n  } else {\n    linkWrap.style.height = \"0\";\n    navOpen = !navOpen;\n  }\n});\n\n//# sourceURL=webpack://solo_portfolio/./js/navController.js?");

/***/ }),

/***/ "./js/sectionObserver.js":
/*!*******************************!*\
  !*** ./js/sectionObserver.js ***!
  \*******************************/
/***/ (() => {

eval("var skillItems = document.querySelectorAll('.skills__col');\nvar skillSliders = document.querySelectorAll('.skills__col__slider');\nvar projectCards = document.querySelectorAll('.project-card');\nvar strengthCards = document.querySelectorAll('.strengths-card-hidden');\nvar headerSection = document.querySelector('#header');\nvar projectsSection = document.querySelector('#projects-section');\nvar strengthsSection = document.querySelector('#strengths-section');\nvar skillsSection = document.querySelector('#skills-section');\nvar contactSection = document.querySelector('#contact-section');\nvar pageLinks = document.querySelectorAll('.page-link'); //Set the Home nav link as the default when the page is loaded\n\npageLinks[0].style.color = '#e31b6d'; //Observer for the nav link colors changing when reaching a section\n\nvar sectionObserver = new IntersectionObserver(function (entries, observer) {\n  entries.forEach(function (entry) {\n    if (entry.target.id === 'header') {\n      if (entry.isIntersecting) {\n        Array.from(pageLinks, function (link) {\n          return link.style.color = 'white';\n        });\n        pageLinks[0].style.color = '#e31b6d';\n        return;\n      }\n\n      pageLinks[0].style.color = 'white';\n    }\n\n    if (entry.target.id === 'projects-section') {\n      if (entry.isIntersecting) {\n        Array.from(pageLinks, function (link) {\n          return link.style.color = 'white';\n        });\n        pageLinks[1].style.color = '#e31b6d';\n        return;\n      }\n\n      pageLinks[1].style.color = 'white';\n    }\n\n    if (entry.target.id === 'strengths-section') {\n      if (entry.isIntersecting) {\n        Array.from(pageLinks, function (link) {\n          return link.style.color = 'white';\n        });\n        pageLinks[2].style.color = '#e31b6d';\n        return;\n      }\n\n      pageLinks[2].style.color = 'white';\n    }\n\n    if (entry.target.id === 'skills-section') {\n      if (entry.isIntersecting) {\n        Array.from(pageLinks, function (link) {\n          return link.style.color = 'white';\n        });\n        pageLinks[3].style.color = '#e31b6d';\n        return;\n      }\n\n      pageLinks[3].style.color = 'white';\n    }\n\n    if (entry.target.id === 'contact-section') {\n      if (entry.isIntersecting) {\n        Array.from(pageLinks, function (link) {\n          return link.style.color = 'white';\n        });\n        pageLinks[4].style.color = '#e31b6d';\n        return;\n      }\n\n      pageLinks[4].style.color = 'white';\n    }\n  });\n}, {\n  root: null,\n  rootMargin: \"\".concat(window.innerHeight < 850 ? '-325px 0px -325px 0px' : '-400px 0px -450px 0px')\n});\nsectionObserver.observe(headerSection);\nsectionObserver.observe(projectsSection);\nsectionObserver.observe(strengthsSection);\nsectionObserver.observe(skillsSection);\nsectionObserver.observe(contactSection);\nvar options = {\n  root: null,\n  rootMargin: '0px 300px 0px 300px'\n};\n\nvar handleAnimation = function handleAnimation() {\n  var time = 0;\n\n  if (!shown) {\n    skillItems.forEach(function (card, index) {\n      setTimeout(function () {\n        skillSliders[index].style.top = '0';\n        setTimeout(function () {\n          skillSliders[index].style.top = '100%';\n        }, 2000);\n      }, time);\n      time += 90;\n    });\n  }\n\n  shown = true;\n}; //Observer for animations in sections\n\n\nvar observer = new IntersectionObserver(function (entries, observer) {\n  entries.forEach(function (entry) {\n    //Section content animations\n    if (entry.isIntersecting === true) {\n      if (entry.target.classList.value === 'project-card project-card-hidden') {\n        entry.target.classList.remove('project-card-hidden');\n      }\n\n      if (entry.target.classList.value === 'card strengths-card-hidden') {\n        entry.target.classList.remove('strengths-card-hidden');\n      }\n\n      if (entry.target.classList.value === 'skills__col') {\n        handleAnimation();\n      }\n    }\n  });\n}, options);\nvar shown = false;\nprojectCards.forEach(function (card) {\n  return observer.observe(card);\n});\nstrengthCards.forEach(function (card) {\n  return observer.observe(card);\n});\nif (window.innerWidth < 716) observer.observe(skillItems[skillItems.length - 3]);else observer.observe(skillItems[skillItems.length - 1]);\n\n//# sourceURL=webpack://solo_portfolio/./js/sectionObserver.js?");

/***/ }),

/***/ "./js/sectionSkills.js":
/*!*****************************!*\
  !*** ./js/sectionSkills.js ***!
  \*****************************/
/***/ (() => {

eval("var skillItems = document.querySelectorAll('.skills__col');\nvar skillSliders = document.querySelectorAll('.skills__col__slider');\nskillItems.forEach(function (skill, index) {\n  skill.addEventListener('mouseover', function () {\n    skillSliders[index].style.top = '0';\n  });\n  skill.addEventListener('mouseout', function () {\n    skillSliders[index].style.top = '100%';\n  });\n});\n\n//# sourceURL=webpack://solo_portfolio/./js/sectionSkills.js?");

/***/ }),

/***/ "./js/smoothScrolling.js":
/*!*******************************!*\
  !*** ./js/smoothScrolling.js ***!
  \*******************************/
/***/ (() => {

eval("var headerSection = document.querySelector('#header');\n\n(function () {\n  scrollTo(headerSection);\n  scrollTo(headerSection);\n})();\n\nfunction scrollTo() {\n  var links = document.querySelectorAll('.scroll');\n  links.forEach(function (each) {\n    return each.onclick = scrollAnchors;\n  });\n}\n\nfunction scrollAnchors(e) {\n  var respond = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;\n\n  var distanceToTop = function distanceToTop(el) {\n    return Math.floor(el.getBoundingClientRect().top);\n  };\n\n  e.preventDefault();\n  var targetID = respond ? respond.getAttribute('href') : this.getAttribute('href');\n  var targetAnchor = document.querySelector(targetID);\n  if (!targetAnchor) return;\n  var originalTop = distanceToTop(targetAnchor);\n  window.scrollBy({\n    top: originalTop,\n    left: 0,\n    behavior: 'smooth'\n  });\n  var checkIfDone = setInterval(function () {\n    var atBottom = window.innerHeight + window.pageYOffset >= document.body.offsetHeight - 2;\n\n    if (distanceToTop(targetAnchor) === 0 || atBottom) {\n      targetAnchor.tabIndex = '-1';\n      targetAnchor.focus();\n      window.history.pushState('', '', targetID);\n      clearInterval(checkIfDone);\n    }\n  }, 100);\n}\n\n//# sourceURL=webpack://solo_portfolio/./js/smoothScrolling.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;