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
    for (let i = 0; i < sections.length; i++) {
        const newLi = document.createElement('li');
        const newA = document.createElement('a');
        const navItem = sections[i].querySelector('h2').textContent;

        newA.classList.add('menu__link');
        newA.textContent = navItem;
        newLi.appendChild(newA);
        navbarList.appendChild(newLi);

        console.log(sections[i]);
    }
}

// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event
function scrollTo() {
    for (let i = 0; i < sections.length; i++) {
        const sectionId = sections[i].getAttribute('id');
        const navLinks = document.querySelectorAll('#navbar__list a');

        navLinks[i].setAttribute('href', `#${sectionId}`);
    }
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
setTimeout(scrollTo, 100);
clearTimeout(scrollTo, 100);
const t3 = performance.now();
console.log(`Time to execute scrolling to section on link click ${(t3 - t2).toFixed(4)}`);

// Set sections as active
// const t4 = performance.now();

// const t5 = performance.now();
// console.log(`Time to execute adding active class is ${(t5 - t4).toFixed(4)}`);
