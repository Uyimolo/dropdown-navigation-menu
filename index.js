document.querySelectorAll(".menu").forEach(menu => {
    menu.addEventListener("click", () => {
        document.querySelector(".header-content").classList.toggle("show-nav");
    });
    
});

document.querySelectorAll(".nav-list").forEach(navList => {
    navList.addEventListener("click" ,(e) => {
        const arrow = e.target.querySelector(".arrow");
        const dropDown = e.target.querySelector(".drop")
        if(dropDown) {
       if(!dropDown.classList.contains("show-drop-down")) {
            dropDown.classList.add("show-drop-down")
            dropDown.style.maxHeight = dropDown.scrollHeight + "px";
            arrow.style.transform = "rotateZ(180deg)";
       }
       else{
        dropDown.classList.remove("show-drop-down")
        dropDown.style.maxHeight = 0;
        arrow.style.transform = "rotateZ(0)";
       }
    }
    })
})