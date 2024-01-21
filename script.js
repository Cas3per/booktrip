let navbarDiv = document.querySelector('.navbar');
window.addEventListener('scroll', () =>{
    if(document.body.scrollTop > 40 || document.documentElement.scrollTop > 40){
        navbarDiv.classList.add('navbar-cng');
    } else {
        navbarDiv.classList.remove('navbar-cng');
    }


});


const navbarCollapseDiv = document.getElementById('.navbar-collapse');
const navbarShowBtn = document.getElementById('navbar-show-btn');
const navbarCloseBtn = document.getElementById('navbar-close-btn');

navbarShowBtn.addEventListener('click', () => {
    navbarCollapseDiv.classList.add('navbar-collapse-rmw');
});

navbarCloseBtn.addEventListener('click', () => {
    navbarCloseBtn.classList.remove('navbar-collapse-rmv');
});

// document.addEventListener('click', (e) =>{
//     if(e.target.id = "navbar-collapse" && e.target.id = "navbar-show-btn");
// });

