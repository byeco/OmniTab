document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('optimizeButton').addEventListener('click', function() {
      var originalCode = document.getElementById('codeInput').value;
      var selectedLanguage = document.getElementById('languageSelect').value;
  
      // Dil seçimine göre optimize edilen kodu al
      var optimizedCode = optimizeCode(originalCode, selectedLanguage);
      
      document.getElementById('result').innerText = optimizedCode;
    });
  
    // Dil spesifik olarak kodu optimize eden fonksiyon
    function optimizeCode(code, language) {
      if (language === 'javascript') {
        return optimizeJavaScript(code);
      } else if (language === 'python') {
        // Python için optimizasyon fonksiyonu ekle
        // return optimizePython(code);
      } else {
        // Desteklenmeyen dil durumu
        return 'Unsupported language';
      }
    }
  
    // JavaScript için basit bir optimizasyon örneği
    function optimizeJavaScript(code) {
      // Boşlukları temizleme
      code = cleanCode(code);
  
      // Değişken isimlerini kısaltma
      code = minifyVariableNames(code);
  
      // Konsola yazdırma ifadelerini kaldırma ve yorum satırlarını temizleme
      code = removeConsoleLogsAndComments(code);
  
      return code;
    }
  
    // Boşlukları temizleme örneği
    function cleanCode(code) {
      return code.replace(/\s+/g, ' ');
    }
  
    // Değişken isimlerini kısaltma örneği
    function minifyVariableNames(code) {
      // Bu sadece bir örnektir, gerçek bir minify algoritması kullanılmalıdır
      return code.replace(/var\s(\w+)\s=/g, 'var $1=');
    }
  
    // Konsola yazdırma ifadelerini kaldırma ve yorum satırlarını temizleme
    function removeConsoleLogsAndComments(code) {
      return code.replace(/\/\/.*?\n|\/\*.*?\*\//g, ''); // // ile başlayan satırları ve /* */ içindeki yorumları temizleme
    }
  });
  