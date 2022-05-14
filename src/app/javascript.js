document.addEventListener("DOMContentLoaded", function () {
  let navBar = document.getElementById("nav-bar"),
    navIcon = document.getElementById("navicon"),
    mainSec = document.getElementById("epm-login");

  // let toggleSwitch = true;
  // if (toggleSwitch == true) {
    navIcon.addEventListener("click", function () {
      navBar.classList.add('offToggle');
      mainSec.classList.add('toggleMain');
      // toggleSwitch = false;
    });
  // } else {
    document
      .getElementById("nav-icon")
      .addEventListener("click", function () {
        navBar.classList.remove('offToggle');
        mainSec.classList.remove('toggleMain');
        // toggleSwitch = true;
        console.log("nav Loaded");
      });
  // }
  console.log("loaded");
});
