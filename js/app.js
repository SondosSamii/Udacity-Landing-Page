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

const navbarList = document.getElementById('navbar__list');
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
            removeClass()
            sections[i].scrollIntoView();
            sections[i].classList.add('your-active-class');
        }
    })
}


// Scroll to anchor ID using scrollTO event
function scrollTo() {
    //console.log(window.pageYOffset);

}

/**
 * End Main Functions
 * Begin Events
 *
*/


// Build menu
const t0 = performance.now();
setTimeout(buildNav, 0);
clearTimeout(buildNav, 0);
const t1 = performance.now();
console.log(`Time to execute for loop for make a navbar is ${(t1 - t0).toFixed(4)}`);

// Scroll to section on link click
const t2 = performance.now();
window.addEventListener('scroll', scrollTo, true);
// window.removeEventListener('scroll', scrollTo, false);
const t3 = performance.now();
console.log(`Time to execute scrolling to section on link click ${(t3 - t2).toFixed(4)}`);

// Set sections as active
const t4 = performance.now();
setTimeout(addActiveClass, 50);
clearTimeout(addActiveClass, 50);
const t5 = performance.now();
console.log(`Time to execute adding active class is ${(t5 - t4).toFixed(4)}`);
