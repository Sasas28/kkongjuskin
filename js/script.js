const toggleBtn = document.querySelector("#toggle-btn");
const linkList = document.querySelector("#link-list");
const linkListItem = document.querySelectorAll(".link-list_item");

// for toggling the active class
toggleBtn.addEventListener("click", () => {
    linkList.classList.toggle("active");
});

// for automatically hide the menu once finish using it
linkListItem.forEach(e => {
    e.addEventListener("click", () => linkList.classList.remove("active"));
});