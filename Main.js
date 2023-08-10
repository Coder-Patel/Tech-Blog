//Filter JS

document.addEventListener("DOMContentLoaded", function () {
  const filterItems = document.querySelectorAll(".filter-item");
  const postBoxes = document.querySelectorAll(".post-box");

  filterItems.forEach(function (item) {
    item.addEventListener("click", function () {
      const filterValue = item.getAttribute("data-filter");

      postBoxes.forEach(function (box) {
        if (
          filterValue === "all" ||
          box.querySelector(".category").textContent === filterValue
        ) {
          box.classList.remove("hidden");
        } else {
          box.classList.add("hidden");
        }
      });

      // Toggle active class for the filter items
      filterItems.forEach(function (filterItem) {
        filterItem.classList.remove("active-filter");
      });
      item.classList.add("active-filter");
    });
  });
});


//Activating Button....
$(document).ready(function(){
  $(this).addClass("active-filter");
});