var projects = document.querySelector(".footP");
var projectBtn = document.querySelector(".projectButton");

projectBtn.addEventListener('click', (e) => {
    projects.scrollIntoView({behavior: "smooth"});
});
