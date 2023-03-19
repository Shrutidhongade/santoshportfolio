hamburger = document.querySelector(".hamburger");
hamburger.onclick = function () {
        navBar = document.querySelector(".nav-bar");
        navBar.classList.toggle("active");
}

document.querySelectorAll(".nav-bar").forEach(n => n.addEventListener("click", () => {
        navBar.classList.remove("active");
}))





