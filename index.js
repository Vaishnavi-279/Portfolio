function scrollToSection(className) {
  const section = document.querySelector(className);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
}

window.addEventListener("scroll", function () {
  var box = document.querySelector(".skills");
  var scrollPosition = window.scrollY;

  // Check scroll position to change color
  if (scrollPosition > 100) {
    // Change 100 to your desired scroll position
    box.style.backgroundColor = "aliceblue"; // Change color when scrolled down
  } else {
    box.style.backgroundColor = "white"; // Change back to original color when scrolled up
  }
});
