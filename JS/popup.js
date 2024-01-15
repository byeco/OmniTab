document.addEventListener('DOMContentLoaded', function () {

// popup.js

document.addEventListener('DOMContentLoaded', function() {
  var showNewPopupButton = document.getElementById('option2');

  showNewPopupButton.addEventListener('click', function() {
    // Yeni bir popup penceresi aç
    chrome.windows.create({
      url: 'lineargradient.html',
      type: 'popup',
      width: 400,
      height: 300,
      left: Math.round((screen.width - 400) / 2),
      top: Math.round((screen.height - 300) / 2),
    });
  });
});

  



  document.getElementById('optimizeButton').addEventListener('click', function () {
    var originalCode = document.getElementById('codeInput').value;
    var selectedLanguage = document.getElementById('languageSelect').value;

    // Dil seçimine göre optimize edilen kodu al
    var optimizedCode = optimizeCode(originalCode, selectedLanguage);

    // Optimize edilmiş kodu textarea'ya ve div'e yerleştir
    document.getElementById('codeInput').value = optimizedCode;
    document.getElementById('result').innerText = optimizedCode;


  });
// Dil spesifik olarak kodu optimize eden fonksiyon
function optimizeCode(code, language) {
  if (language === 'javascript') {
    return optimizeJavaScript(code);
  } else if (language === 'python') {
    return optimizePython(code);
  } else if (language === 'cpp') {
    return optimizeCpp(code);
  } else if (language === 'java') {
    return optimizeJava(code);
  } else if (language === 'ruby') {
    return optimizeRuby(code);
  } else if (language === 'php') {
    return optimizePHP(code);
  } else if (language === 'swift') {
    return optimizeSwift(code);
  } else if (language === 'go') {
    return optimizeGo(code);
  } else {
    // Desteklenmeyen dil durumu
    return 'Desteklenmeyen dil';
  }
}

// Diğer diller için optimize fonksiyonları burada tanımlanmalıdır.
// optimizeJavaScript, optimizePython, optimizeCpp, optimizeJava, optimizeRuby, optimizePHP, optimizeSwift, optimizeGo...

//Java Script Code Optimize
function optimizeJavaScript(code) {
  // Tek satırlık yorumları kaldırma
  code = code.replace(/\/\/.*$/gm, '');

  // Çok satırlı yorumları kaldırma
  code = code.replace(/\/\*[\s\S]*?\*\//gm, '');

  // Gereksiz semikolonları kaldırma (boş statement'lar)
  code = code.replace(/;\s*;/g, ';');

  // Fazladan boşlukları ve satır sonlarını kaldırma
  code = code.replace(/\s+$/gm, '').replace(/^\s+/gm, '');

  // Satır başındaki ve sonundaki boşlukları temizleme
  code = code.trim();

  return code;
}


//Python Code Optimize
function optimizePython(code) {
  // Çok satırlı yorum satırlarını kaldırma
  code = code.replace(/'''[\s\S]*?'''|"""[\s\S]*?"""/g, '');

  // Tek satırlık yorumları kaldırma
  code = code.replace(/#.*$/gm, '');

  // Fazladan boşlukları ve satır sonlarını kaldırma
  code = code.replace(/\s+$/gm, '').replace(/^\s+/gm, '');

  // Satır başındaki ve sonundaki boşlukları temizleme
  code = code.trim();

  return code;
}

//c++ Code Optimize
function optimizeCpp(code) {
  // Tek satırlık yorumları kaldırma
  code = code.replace(/\/\/.*$/gm, '');

  // Çok satırlı yorumları kaldırma
  code = code.replace(/\/\*[\s\S]*?\*\//gm, '');

  // Gereksiz semikolonları kaldırma (boş statement'lar)
  code = code.replace(/;\s*;/g, ';');

  // Fazladan boşlukları ve satır sonlarını kaldırma
  code = code.replace(/\s+$/gm, '').replace(/^\s+/gm, '');

  // Satır başındaki ve sonundaki boşlukları temizleme
  code = code.trim();

  return code;
}

//Java Code Optimize
function optimizeJava(code) {
  // Tek satırlık yorumları kaldırma
  code = code.replace(/\/\/.*$/gm, '');

  // Çok satırlı yorumları kaldırma
  code = code.replace(/\/\*[\s\S]*?\*\//gm, '');

  // Gereksiz semikolonları kaldırma (boş statement'lar)
  code = code.replace(/;\s*;/g, ';');

  // Fazladan boşlukları ve satır sonlarını kaldırma
  code = code.replace(/\s+$/gm, '').replace(/^\s+/gm, '');

  // Satır başındaki ve sonundaki boşlukları temizleme
  code = code.trim();

  return code;
}

//Ruby Code Optimize
function optimizeRuby(code) {
  // Tek satırlık yorumları kaldırma
  code = code.replace(/#.*$/gm, '');

  // Fazladan boşlukları ve satır sonlarını kaldırma
  code = code.replace(/\s+$/gm, '').replace(/^\s+/gm, '');

  // Satır başındaki ve sonundaki boşlukları temizleme
  code = code.trim();

  return code;
}

//Php Code Optimize
function optimizePHP(code) {
  // Tek satırlık yorumları kaldırma
  code = code.replace(/\/\/.*$|^\s*#.*$/gm, '');

  // Çok satırlı yorumları kaldırma
  code = code.replace(/\/\*[\s\S]*?\*\//gm, '');

  // Fazladan boşlukları ve satır sonlarını kaldırma
  code = code.replace(/\s+$/gm, '').replace(/^\s+/gm, '');

  // Satır başındaki ve sonundaki boşlukları temizleme
  code = code.trim();

  return code;
}

//Swift Code Optimize
function optimizeSwift(code) {
  // Tek satırlık yorumları kaldırma
  code = code.replace(/\/\/.*$/gm, '');

  // Çok satırlı yorumları kaldırma
  code = code.replace(/\/\*[\s\S]*?\*\//gm, '');

  // Fazladan boşlukları ve satır sonlarını kaldırma
  code = code.replace(/\s+$/gm, '').replace(/^\s+/gm, '');

  // Satır başındaki ve sonundaki boşlukları temizleme
  code = code.trim();

  return code;
}

//Go Code Optimize
function optimizeGo(code) {
  // Tek satırlık yorumları kaldırma
  code = code.replace(/\/\/.*$/gm, '');

  // Fazladan boşlukları ve satır sonlarını kaldırma
  code = code.replace(/\s+$/gm, '').replace(/^\s+/gm, '');

  // Satır başındaki ve sonundaki boşlukları temizleme
  code = code.trim();

  return code;
}



});