var projects = document.querySelector("#pPage");
var btn = document.querySelector(".projectButton");

btn.addEventListener('click', function () {
    projects.scrollIntoView(false, {behavior: "smooth"});
});
