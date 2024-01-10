document.addEventListener('DOMContentLoaded', function () {
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
  } else {
    // Desteklenmeyen dil durumu
    return 'Desteklenmeyen dil';
  }
}

// JavaScript için kodu optimize eden fonksiyon
function optimizeJavaScript(code) {
  // Satır sonundaki yorum satırlarını kaldırma
  code = code.replace(/\/\/.*$/gm, '');

  // Boşlukları temizleme ve çoklu boşlukları tek bir boşlukla değiştirme
  code = code.replace(/\s+/g, ' ');

  // Satır başındaki ve sonundaki boşlukları temizleme
  code = code.trim();

  return code;
}

// Python için kodu optimize eden fonksiyon
function optimizePython(code) {
  // Satır sonundaki yorum satırlarını kaldırma
  code = code.replace(/#.*/g, '');

  // Boşlukları temizleme ve çoklu boşlukları tek bir boşlukla değiştirme
  code = code.replace(/\s+/g, ' ');

  // Satır başındaki ve sonundaki boşlukları temizleme
  code = code.trim();

  return code;
}

// C++ için kodu optimize eden fonksiyon
function optimizeCpp(code) {
  // Satır sonundaki yorum satırlarını kaldırma
  code = code.replace(/\/\/.*$/gm, '');

  // Boşlukları temizleme ve çoklu boşlukları tek bir boşlukla değiştirme
  code = code.replace(/\s+/g, ' ');

  // Satır başındaki ve sonundaki boşlukları temizleme
  code = code.trim();

  return code;
}

// Java için kodu optimize eden fonksiyon
function optimizeJava(code) {
  // Satır sonundaki yorum satırlarını kaldırma
  code = code.replace(/\/\/.*$/gm, '');

  // Boşlukları temizleme ve çoklu boşlukları tek bir boşlukla değiştirme
  code = code.replace(/\s+/g, ' ');

  // Satır başındaki ve sonundaki boşlukları temizleme
  code = code.trim();

  return code;
}



});