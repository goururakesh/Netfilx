const languageDropdown = document.getElementById("language-btn");
const faqListItems = document.querySelectorAll(".faq ul li");

languageDropdown.addEventListener("click", () => {
  document.getElementById("language-dropdown").classList.toggle("show");
});

faqListItems.forEach((item) => {
  item.addEventListener("click", () => {
    item.classList.toggle("show");
  });
});
