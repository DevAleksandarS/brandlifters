// OPENNING AND CLOSING SIDE NAVBAR
document.getElementById("burger-btn").addEventListener("click", function () {
  document.getElementById("darker-bg").style.visibility = "visible";
  document.getElementById("darker-bg").style.opacity = "1";
  document.getElementById("side-nav").style.transform = "translateX(0)";
});

document
  .getElementById("burger-btn-fixed")
  .addEventListener("click", function () {
    document.getElementById("darker-bg").style.visibility = "visible";
    document.getElementById("darker-bg").style.opacity = "1";
    document.getElementById("side-nav").style.transform = "translateX(0)";
  });

document.getElementById("darker-bg").addEventListener("click", function () {
  document.getElementById("darker-bg").style.visibility = "hidden";
  document.getElementById("darker-bg").style.opacity = "0";
  document.getElementById("side-nav").style.transform = "translateX(100%)";
});

document.getElementById("close-btn").addEventListener("click", function () {
  document.getElementById("darker-bg").style.visibility = "hidden";
  document.getElementById("darker-bg").style.opacity = "0";
  document.getElementById("side-nav").style.transform = "translateX(100%)";
});

document.querySelectorAll(".side-nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    document.getElementById("darker-bg").style.visibility = "hidden";
    document.getElementById("darker-bg").style.opacity = "0";
    document.getElementById("side-nav").style.transform = "translateX(100%)";
  });
});

// MAKING TOP NAVBAR VISIBLE
const heroSection = document.getElementById("home");
let heroSectionHeight = heroSection.offsetHeight;

const checkNavbarPosition = () => {
  if (window.pageYOffset >= heroSectionHeight) {
    document.getElementById("fixed-nav").style.transform = "translateY(0)";
  } else {
    document.getElementById("fixed-nav").style.transform = "translateY(-100%)";
  }
};

window.onscroll = () => {
  checkNavbarPosition();
};

window.onresize = () => {
  heroSectionHeight = document.getElementById("home").offsetHeight;
};
