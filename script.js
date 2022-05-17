var projects = document.querySelector("#pPage");
var projectBtn = document.querySelector(".projectButton");

projectBtn.addEventListener('click', (e) => {
    projects.scrollIntoView(false, {behavior: "smooth"});
});
