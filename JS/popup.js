// popup.js

document.addEventListener("DOMContentLoaded", function () {
    const codeInput = document.getElementById("codeInput");
    const optimizeButton = document.getElementById("optimizeButton");
    const resultDiv = document.getElementById("result");

    optimizeButton.addEventListener("click", function () {
        const code = codeInput.value;
        optimizeAndDisplayResult(code);
    });

    function optimizeAndDisplayResult(code) {
        // Bu kısımda API'ye kodu göndermek ve sonucu işlemek için gerekli kodları ekleyin.
        // API'ye HTTP isteği yapabilir veya uygun bir yöntem kullanabilirsiniz.

        // Bu örnek olarak sonucu ekrana yazdırma:
        resultDiv.textContent = "Optimized Code: " + code;
    }
    // popup.js


    // Sayfa yüklendiğinde container elemanını genişlet
    var container = document.querySelector('.container');
    container.style.width = '100%';
  
});
