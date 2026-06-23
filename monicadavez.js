/*---------- home swiper ----------*/
var homeSwiper = new Swiper(".home-swiper", {
    spaceBetween: 16,
    centeredSlides: true,
    slidesPerView: "auto",
    loop: true, 
    autoplay: {
        delay: 2000, 
        disableOnInteraction: false, 
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true, 
    },
});

/*---------- about buttons ----------*/
const tabs = document.querySelectorAll('[data-target]');
const tabContent = document.querySelectorAll('[data-content]');
    tabs.forEach(tab => {
    tab.addEventListener("click", () => {
const target = document.querySelector(tab.dataset.target);

    tabContent.forEach(content => {
    content.classList.remove('about__active');
    });
    target.classList.add('about__active');

    tabs.forEach(tabItem => {
    tabItem.classList.remove('about__active');
    });
    tab.classList.add('about__active');
    });
    });
/*--------------------*/

/*---------- navigation small width ----------*/
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');

function handleMenuToggle() {
    if (window.innerWidth <= 768) {
        navToggle.style.display = 'block'; 

        if (navToggle) {
            navToggle.addEventListener('click', () => {
                navMenu.classList.add('show-menu');  // Show menu
                navClose.style.display = 'block';  // Show close icon
            });
        }

        if (navClose) {
            navClose.addEventListener('click', () => {
                navMenu.classList.remove('show-menu');  // Hide menu
                navClose.style.display = 'none';  // Hide close icon
            });
        }

        const navLink = document.querySelectorAll('.nav__link');
        function linkAction() {
            navMenu.classList.remove('show-menu');  // Hide menu
            navClose.style.display = 'none';  // Hide close icon
        }
        navLink.forEach((n) => n.addEventListener('click', linkAction));
    } else {
        navToggle.style.display = 'none';
        
        navMenu.classList.remove('show-menu');
        navClose.style.display = 'none'; 
    }
}
handleMenuToggle();
window.addEventListener('resize', handleMenuToggle);
/*--------------------*/

/*---------- automatic navigation on scroll ----------*/
function setActiveSection() {
const sections = document.querySelectorAll('section[id]'); 
const scrollY = window.pageYOffset;
    sections.forEach(current => {
const sectionHeight = current.offsetHeight;
const sectionTop = current.offsetTop - 50; 
const sectionId = current.getAttribute('id');

if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
    document.querySelector(`.nav__menu a[href*=${sectionId}]`).classList.add('active-link');
    } 
else {
    document.querySelector(`.nav__menu a[href*=${sectionId}]`).classList.remove('active-link');
    }
    });
    }
    window.addEventListener('scroll', setActiveSection);
/*--------------------*/

/*---------- automatic navsize on scroll down ----------*/
function scrollHeader(){
const header = document.getElementById('header')

if(this.scrollY >= 50) header.classList.add('scroll-header'); else header.classList.
    remove('scroll-header')
    }
    window.addEventListener('scroll', scrollHeader)
/*--------------------*/

/*---------- contact buttons and popups ----------*/
const form = document.getElementById('contact__form');
const confirmationModal = document.getElementById('confirmationModal');
const popupMessage = document.getElementById('popupMessage');

const confirmYes = document.getElementById('confirmYes');
const confirmNo = document.getElementById('confirmNo');
const closePopup = document.getElementById('closePopup');
    form.addEventListener('submit', function (e) {
    e.preventDefault(); 
    confirmationModal.classList.remove('hidden'); 
    });
    confirmYes.addEventListener('click', function () {
    confirmationModal.classList.add('hidden'); 
    popupMessage.classList.remove('hidden'); 
    form.reset();
    });
    confirmNo.addEventListener('click', function () {
    confirmationModal.classList.add('hidden'); 
    });
    closePopup.addEventListener('click', function () {
    popupMessage.classList.add('hidden'); 
    });
/*--------------------*/

/*---------- gallery lightbox ----------*/
const portfolioItems = document.querySelectorAll(".gallery__content"),
    totalPortfolioItem = portfolioItems.length,
    lightbox = document.querySelector(".lightbox"),
    lightboxImg = document.querySelector(".lightbox__img"),
    lightboxCounter = document.querySelector(".caption__counter"),
    lightboxClose = document.querySelector(".lightbox__close");
let itemIndex = 0;
for (let i = 0; i < totalPortfolioItem; i++) {
    portfolioItems[i].addEventListener("click", function () {
    itemIndex = i;
    changeItem();
    toggleLightbox();
    });
    }

function nextItem() {
if (itemIndex === totalPortfolioItem - 1) {
    itemIndex = 0;
    } 
else {
    itemIndex++;
    }
    changeItem();
    }

function prevItem() {
if (itemIndex === 0) {
    itemIndex = totalPortfolioItem - 1; 
    } 
else {
    itemIndex--;
    }
    changeItem();
    }

function toggleLightbox() {
    lightbox.classList.toggle("open");
    }


function changeItem() {
const imgSrc = portfolioItems[itemIndex].querySelector("img").getAttribute("src");
const captionText = portfolioItems[itemIndex].querySelector(".caption").textContent;
    lightboxImg.src = imgSrc;
    lightboxCounter.innerHTML = (itemIndex + 1) + " of " + totalPortfolioItem;
    lightbox.querySelector(".caption__text").textContent = captionText;  
    }
    lightbox.addEventListener("click", function (event) {
if (event.target === lightboxClose || event.target === lightbox) {
    toggleLightbox();
    }
    });
/*--------------------*/

/*---------- jquery tooltip and autocomplete ----------*/
$(function () {
    $('[title]').tooltip(); 
    });

$(function () {
    const subjectSuggestions = [
    "General Inquiry",
    "Website Feedback",
    "Support Artist",
    "Partnership Proposal",
    "Others"
    ];
    $(".autocomplete").autocomplete({
    source: subjectSuggestions
    });
    });

