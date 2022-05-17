var projects = document.querySelector(".footP");
var btn = document.querySelector(".projectButton");

btn.addEventListener('click', function () {
    projects.scrollIntoView({behavior: "smooth", block: "start"});
});
