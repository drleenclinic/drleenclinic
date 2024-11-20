document.addEventListener("DOMContentLoaded", function () {
  const toggleButton = document.querySelector(".nav-toggle");
  const navList = document.querySelector(".nav-list");

  // Ensure dropdown starts hidden
  navList.classList.remove("show");

  // Toggle the 'show' class on click
  toggleButton.addEventListener("click", function () {
    navList.classList.toggle("show");
  });
});

