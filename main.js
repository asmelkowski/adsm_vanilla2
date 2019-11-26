const parallax = document.querySelector('section#parallax');
const about = document.querySelector('section#about');
const projects = document.querySelector('section#projects');
const up_arrow = document.querySelector('.up_arrow');
const down_arrow = document.querySelector('.down_arrow');
const projects_arrow = document.querySelector('#projects_scroll');
const projects_imgs = document.querySelectorAll('.project-img');

var elem = document.querySelector('.imgs-container');
var msnry = new Masonry( elem, {
  // options
  itemSelector: '.project-img',
  columnWidth: '.project-img',
  ifFitWidth: true,
});


down_arrow.addEventListener('click', function () {
    about.scrollIntoView();
});
projects_arrow.addEventListener('click', function () {
    projects.scrollIntoView();
});
up_arrow.addEventListener('click', () => {
    document.documentElement.scrollTop = 0;
});

window.onscroll = function () {
    if (document.documentElement.scrollTop > 500) {
        up_arrow.style.visibility = 'visible';
        up_arrow.style.opacity = 1;
    } else {
        up_arrow.style.visibility = 'hidden';
        up_arrow.style.opacity = 0;
    };
}