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
const inverseContent = document.querySelector('.content-sectio inverse-content');
const boatImg = document.querySelector('.img-fluid rounded');