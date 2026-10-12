const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {
    topBtn.hidden = window.scrollY < 300;
});

topBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});