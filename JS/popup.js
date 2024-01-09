document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('optimizeButton').addEventListener('click', function () {
      var originalCode = document.getElementById('codeInput').value;
      var selectedLanguage = document.getElementById('languageSelect').value;
  
      // Dil seçimine göre optimize edilen kodu al
      var optimizedCode = optimizeCode(originalCode, selectedLanguage);
  
      // Optimize edilmiş kodu textarea'ya ve div'e yerleştir
      document.getElementById('codeInput').value = optimizedCode;
      document.getElementById('result').innerText = optimizedCode;
  
      // Optimize edildi veya edilmediğine göre mesaj ve renk belirleme
      var optimizeStatus = document.getElementById('optimizeStatus');
      if (optimizedCode !== originalCode) {
        optimizeStatus.innerHTML = '<h3 style="color: #0f0;">Optimize Edilmiştir</h3>';
      } else {
        optimizeStatus.innerHTML = '<h3 style="color: #f00;">Optimize Edilememiştir</h3>';
      }
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
      // Boşlukları temizleme ve çoklu boşlukları tek bir boşlukla değiştirme
      code = cleanCode(code);
  
      // Değişken isimlerini kısaltma
      code = minifyVariableNames(code);
  
      // Konsola yazdırma ifadelerini kaldırma ve yorum satırlarını temizleme
      code = removeConsoleLogsAndComments(code);
  
      return code;
    }
  
    // Boşlukları temizleme ve çoklu boşlukları tek bir boşlukla değiştirme örneği
    function cleanCode(code) {
      return code.replace(/\s+/g, ' ').trim();
    }
  //Bunu tekrar denersin
    function minifyVariableNames(code) {
        var variableCounter = 0;
        var variableMap = {};
      
        // Değişken isimlerini bulma
        var variableNames = code.match(/[a-zA-Z_$][a-zA-Z_$0-9]*/g) || [];
      
        // Değişken isimlerini kısaltma
        variableNames.forEach(function (variableName) {
          if (!variableMap.hasOwnProperty(variableName)) {
            // Eğer değişken daha önce kısaltılmamışsa
            var minifiedName = 'v' + variableCounter++;
            variableMap[variableName] = minifiedName;
          }
      
          // Değişken isimlerini kısaltılmış halleriyle değiştirme
          code = code.replace(new RegExp('\\b' + variableName + '\\b', 'g'), variableMap[variableName]);
        });
      
        return code;
      }
      
      
  
    // Konsola yazdırma ifadelerini kaldırma ve yorum satırlarını temizleme örneği
    function removeConsoleLogsAndComments(code) {
      // Konsola yazdırma ifadelerini kaldır
      code = code.replace(/console\.log\([^)]*\);?/g, '');
  
      // Satır sonundaki yorum satırlarını kaldır
      code = code.replace(/\/\/.*$/gm, '');
  
      // Blok içindeki çoklu satırlı yorumları kaldır
      code = code.replace(/\/\*[\s\S]*?\*\//g, '');
  
      return code;
    }
  });
  