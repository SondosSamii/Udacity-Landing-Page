/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
*/

/**
 * Define Global Variables
 *
*/

const sections = document.querySelectorAll('section');


/**
 * End Global Variables
 * Start Helper Functions
 *
*/


/**
 * End Helper Functions
 * Begin Main Functions
 *
*/

// build the nav
function buildNav() {
    const navbarList = document.getElementById('navbar__list');
    sections.forEach(function (section) {
        const newLi = document.createElement('li');
        const newA = document.createElement('a');
        const navItem = section.querySelector('h2').textContent;

        newA.classList.add('menu__link');
        newA.textContent = navItem;
        newLi.appendChild(newA);
        navbarList.appendChild(newLi);
    })
}

// Add class 'active' to section when near top of viewport
function addActiveClass() {
    const navLinks = document.querySelectorAll('#navbar__list a');
    navLinks.forEach(function (navLink, i) {
        const sectionId = sections[i].getAttribute('id');
        navLink.setAttribute('href', `#${sectionId}`);

        navLink.addEventListener('click', addClass, true);
        navLink.removeEventListener('click', addClass, false);

        function removeClass() {
            const activeClass = document.getElementsByClassName('your-active-class');
            activeClass[0].classList.remove('your-active-class');

        }

        function addClass() {
            removeClass();
            sections[i].scrollIntoView();
            sections[i].classList.add('your-active-class');
        }
    })
}


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 *
*/


// Build menu
setTimeout(buildNav, 0);
clearTimeout(buildNav, 0);

// Scroll to section on link click

// Set sections as active
setTimeout(addActiveClass, 50);
clearTimeout(addActiveClass, 50);

// window.addEventListener('scroll', scrollTo, true);
// window.removeEventListener('scroll', scrollTo, false);
