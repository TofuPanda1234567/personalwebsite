var projects = document.querySelector("#pPage");
var projectBtn = document.querySelector(".projectButton");

projectBtn.addEventListener('click', function() {
    projects.scrollIntoView({behavior: "smooth", block: "end"});
});
