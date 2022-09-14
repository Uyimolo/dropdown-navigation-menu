header = document.querySelector(".header-content");
blanket = document.querySelector(".blanket");

document.querySelectorAll(".menu").forEach((menu) => {
  menu.addEventListener("click", () => {
    header.classList.toggle("show-nav");
    blanket.classList.toggle("cover-me");
  });
});

document.querySelector(".blanket").addEventListener("click", (e) => {
  header.classList.toggle("show-nav");
  e.target.classList.remove("cover-me");
});

document.querySelectorAll(".drop-parent").forEach((navList) => {
  navList.addEventListener("click", (e) => {
    const arrow = e.target.querySelector(".arrow");
    const dropDown = e.target.querySelector(".drop");
    if (!dropDown.classList.contains("show-drop-down")) {
      dropDown.classList.add("show-drop-down");
      dropDown.style.maxHeight = dropDown.scrollHeight + 5 + "px";
      console.log(dropDown.getBoundingClientRect);
      arrow.style.transform = "rotateZ(180deg)";
    } else {
      dropDown.classList.remove("show-drop-down");
      dropDown.style.maxHeight = 0;
      arrow.style.transform = "rotateZ(0)";
    }
  });
});
