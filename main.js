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

projects_imgs.forEach(project => {
    project.addEventListener('mouseover', function() {
        this.querySelector('.project-title').style.display = 'flex';
        this.querySelector('.project-actions').style.display = 'flex';
    })
});
projects_imgs.forEach(project => {
    project.addEventListener('mouseout', function() {
        this.querySelector('.project-title').style.display = 'none';
        this.querySelector('.project-actions').style.display = 'none';
    })
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
        up_arrow.style.display = 'inline';
    } else {
        up_arrow.style.display = 'none';
    };
}