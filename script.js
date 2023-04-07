let navigation = document.getElementById("navigation");
let sideBarMenueButton = document.getElementById("menu-btn");
let sideBarCloseButton = document.getElementById("close-btn");
let sideBar = document.getElementById("side-bar");

window.addEventListener("scroll", (e)=>{
    navigation.classList.toggle("sticky", window.scrollY > 0);
})

sideBarMenueButton.addEventListener("click", (e)=>{
    if(sideBar.classList != "active"){
        e.preventDefault();
        sideBar.classList.add("active");
    }
})

sideBarCloseButton.addEventListener("click", (e)=>{
    e.preventDefault();
    sideBar.classList.remove("active");
})
