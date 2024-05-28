let hamburger = document.querySelector(".mobile-nav");

let mobileNavBar = document.querySelector(".mobile-navbar");

let triangle = document.getElementById("triangle");

function openMobileNavBar() {
      if (mobileNavBar.style.display === "none" && triangle.style.display === "none") {
            mobileNavBar.style.display = "block";
            triangle.style.display = "block";
      } else {
            mobileNavBar.style.display = "none";
            triangle.style.display = "none";
      }
};

hamburger.onclick = openMobileNavBar;