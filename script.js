var projects = document.querySelector("pBody");
var email = document.querySelector(".cPage");
var projectBtn = document.querySelector(".projectButton");
var contactBtn = document.querySelector(".contactButton");
var emailBtn = document.querySelector('.emailButton');


// PROJECT BUTTON
projectBtn.addEventListener('click', function () {
    projects.scrollIntoView({behavior: "smooth", block: "end"});
});

// EMAIL BUTTON
emailBtn.addEventListener('click', (e) => {
  window.open('mailto:christopherlocascio264@gmail.com', '_blank');
});


