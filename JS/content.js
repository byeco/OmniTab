// content.js

// Sayfa yüklendiğinde başlıkları değiştir
document.addEventListener("DOMContentLoaded", function () {
    const titles = document.querySelectorAll("h1, h2, h3, h4, h5, h6");

    titles.forEach(function (title) {
        title.textContent = "Optimized Title";
    });
});
