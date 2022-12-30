const mainNavigation = document.getElementById('navbar__list');
const sections = document.querySelectorAll('section');

// arry to create href and li items 
const sectionLinks = ['section1', 'section2', 'section3', 'section4'];

// loop for make li and a link 

function createNav() {
  let text = '';
  for (let i = 0; i < sectionLinks.length; i++) {

    text += `<li> <a class="menu__link alink" href="#${sectionLinks[i]}" >${sectionLinks[i]} </a></li>`;


  };
  mainNavigation.innerHTML = text;
};
createNav();

// function to add and remove class by click in any section 

document.addEventListener("DOMContentLoaded", function (e) {
  const sections = document.getElementsByTagName("section");

  Array.from(sections).forEach(function (section) {
    section.addEventListener('click', function (el) {
      console.log(sections, el)
      let diff = Array.from(sections).filter(element => element !== section)
      diff.forEach(function (otherEl) {
        otherEl.classList.remove("your-active-class")
      })
      section.classList.toggle("your-active-class")
    });
  });

});

// her to make the scroll smooth 
const navlink = document.querySelectorAll(".alink");
navlink.forEach(elem => elem.addEventListener("click", smoothscroll));
function smoothscroll(event) {
  event.preventDefault();
  const targetId = event.currentTarget.getAttribute("href");
  window.scrollTo({
    top: document.querySelector(targetId).offsetTop,
    behavior: "smooth"
  })
}

// active class to nav bar links  
const links = document.querySelectorAll('.alink');

if (links.length) {
  links.forEach((link) => {
    link.addEventListener('click', (e) => {
      links.forEach((link) => {
        link.classList.remove('active');
      });
      e.preventDefault();
      link.classList.add('active');
    });
  });
}









