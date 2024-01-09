// background.js

chrome.runtime.onInstalled.addListener(function () {
    chrome.contextMenus.create({
        id: "optimizeCode",
        title: "Optimize Code",
        contexts: ["selection"],
    });
});

chrome.contextMenus.onClicked.addListener(function (info, tab) {
    if (info.menuItemId === "optimizeCode") {
        const selectedCode = info.selectionText;
        optimizeAndShortenCode(selectedCode);
    }
});

function optimizeAndShortenCode(code) {
    // Bu kısımda API'ye kodu göndermek ve sonucu işlemek için gerekli kodları ekleyin.
    // API'ye HTTP isteği yapabilir veya uygun bir yöntem kullanabilirsiniz.

    // Bu örnek olarak sonucu konsola yazdırma:
    console.log("Optimized Code:", code);
}
