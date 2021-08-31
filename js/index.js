// Your code goes here
// SELECTORS
const title = document.querySelector('title');

//Nav
const logoHead = document.querySelector('.logo-heading');
const mainNav = document.querySelector('.main-navigation');
const nav = document.querySelector('.nav');
const navHome = document.querySelector('.nav-link:nth-of-type(1)');
const navAbout = navHome.nextElementSibling;
const navBlog = navAbout.nextElementSibling;
const navCon = navBlog.nextElementSibling;

// Intro
const containerHome = document.querySelector('.container home');
const intro = document.querySelector('.intro');
const bus = intro.querySelector('img');
const welcome = intro.querySelector('h2');
const introContent = intro.querySelector('p');

//Content
const contentSection = document.querySelector('.content-section');
const contentText = contentSection.querySelector('.text-content');
const contentHead = contentText.querySelector('h2');
const midContent1 = contentText.querySelector('p');
const midContent2 = contentText.querySelector('p:nth-of-type(2)');

//Mid Image
const contentImg = document.querySelector('img-content');
const  mapImg = contentImg.querySelector('img');

//Mid Content
const inverse = document.querySelector('.content-sectio inverse-content');
const boatImg = document.querySelector('.img-fluid rounded');
const inverseHead = inverse.querySelector('h2');
const inverseCon1 = inverse.querySelector('p:nth-of-type(1)');
const inverseCon2 = inverse.querySelector('p:nth-of-type(2)');

//Destination (bottom) Content
const destination = document.querySelector('.destination');
const destination2 = destination.nextElementSibling;
const destination3 = destination.nextElementSibling;
const d1Heading = destination.querySelector('h4');
const d1Content = destination.querySelector('p');
const d1btn = destination.querySelector('.btn');
const d2Heading = destination2.querySelector('h4');
const d2Content = destination2.querySelector('p');
const d2btn = destination2.querySelector('.btn');
const d3Heading = destination3.querySelector('h4');
const d3Content = destination3.querySelector('p');
const d3btn = destination3.querySelector('.btn');

//footer
const footer = document.querySelector('.footer');
const copywright = footer.querySelector('p');