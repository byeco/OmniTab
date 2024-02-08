document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('optimizeButton').addEventListener('click', function () {
      var originalCode = document.getElementById('codeInput').value;
      var selectedLanguage = document.getElementById('languageSelect').value;

      try {
          var optimizedCode = optimizeAndFixErrors(originalCode, selectedLanguage);
          document.getElementById('codeInput').value = optimizedCode;
          document.getElementById('result').innerText = optimizedCode;
      } catch (error) {
          console.error("Hata Oluştu: " + error.message);
      }
  });

  function optimizeAndFixErrors(code, language) {
      switch (language) {
          case 'javascript':
              return optimizeAndFixJavaScript(code);
          case 'python':
              return optimizeAndFixPython(code);
          case 'cpp':
              return optimizeAndFixCpp(code);
          case 'java':
              return optimizeAndFixJava(code);
          case 'ruby':
              return optimizeAndFixRuby(code);
          case 'php':
              return optimizeAndFixPHP(code);
          case 'swift':
              return optimizeAndFixSwift(code);
          case 'go':
              return optimizeAndFixGo(code);
          case 'rust':
              return optimizeAndFixRust(code);
          case 'csharp':
              return optimizeAndFixCSharp(code);
          case 'typescript':
              return optimizeAndFixTypeScript(code);
          case 'assembly':
              return optimizeAndFixAssembly(code);
          default:
              throw new Error('Desteklenmeyen dil');
      }
  }

  function optimizeAndFixRust(code) {
      // Rust diline özgü optimize işlemleri
      code = code.replace(/\/\/.*$/gm, '');
      code = code.replace(/\/\*[\s\S]*?\*\//gm, '');
      code = code.replace(/^\s*[\r\n]/gm, '');
      code = code.replace(/\s+$/gm, '').replace(/^\s+/gm, '');
      code = code.trim();
      // Diğer optimize işlemleri buraya eklenir...
      return code;
  }

  function optimizeAndFixCSharp(code) {
      // C# diline özgü optimize işlemleri
      code = code.replace(/\/\/.*$/gm, '');
      code = code.replace(/\/\*[\s\S]*?\*\//gm, '');
      code = code.replace(/^\s*[\r\n]/gm, '');
      code = code.replace(/^\s+/gm, '').replace(/\s+$/gm, '');
      code = code.trim();
      // Diğer optimize işlemleri buraya eklenir...
      return code;
  }

  function optimizeAndFixTypeScript(code) {
      // TypeScript diline özgü optimize işlemleri
      code = code.replace(/\/\/.*$/gm, '');
      code = code.replace(/\/\*[\s\S]*?\*\//gm, '');
      code = code.replace(/^\s*[\r\n]/gm, '');
      code = code.replace(/^\s+/gm, '').replace(/\s+$/gm, '');
      code = code.trim();
      // Diğer optimize işlemleri buraya eklenir...
      return code;
  }

  function optimizeAndFixAssembly(code) {
      // Assembly diline özgü optimize işlemleri
      code = code.replace(/\/\/.*$/gm, '');
      code = code.replace(/\/\*[\s\S]*?\*\//gm, '');
      code = code.replace(/^\s*[\r\n]/gm, '');
      code = code.replace(/^\s+/gm, '').replace(/\s+$/gm, '');
      code = code.trim();
      // Diğer optimize işlemleri buraya eklenir...
      return code;
  }

  
  function optimizeAndFixJavaScript(code) {
    code = code.replace(/\/\/.*$/gm, '');
    code = code.replace(/\/\*[\s\S]*?\*\//gm, '');
    code = code.replace(/;\s*;/g, ';');
    code = code.replace(/\s+$/gm, '').replace(/^\s+/gm, '');
    code = code.trim();
    return code;
  }

  function optimizeAndFixPython(code) {
    code = code.replace(/'''[\s\S]*?'''|"""[\s\S]*?"""/g, '');
    code = code.replace(/#.*$/gm, '');
    code = code.replace(/\s+$/gm, '').replace(/^\s+/gm, '');
    code = code.trim();
    return code;
  }

  function optimizeAndFixCpp(code) {
    code = code.replace(/\/\/.*$/gm, '');
    code = code.replace(/\/\*[\s\S]*?\*\//gm, '');
    code = code.replace(/;\s*;/g, ';');
    code = code.replace(/\s+$/gm, '').replace(/^\s+/gm, '');
    code = code.trim();
    return code;
  }

  function optimizeAndFixJava(code) {
    code = code.replace(/\/\/.*$/gm, '');
    code = code.replace(/\/\*[\s\S]*?\*\//gm, '');
    code = code.replace(/;\s*;/g, ';');
    code = code.replace(/\s+$/gm, '').replace(/^\s+/gm, '');
    code = code.trim();
    return code;
  }

  function optimizeAndFixRuby(code) {
    code = code.replace(/#.*$/gm, '');
    code = code.replace(/\s+$/gm, '').replace(/^\s+/gm, '');
    code = code.trim();
    return code;
  }

  function optimizeAndFixPHP(code) {
    code = code.replace(/\/\/.*$|^\s*#.*$/gm, '');
    code = code.replace(/\/\*[\s\S]*?\*\//gm, '');
    code = code.replace(/\s+$/gm, '').replace(/^\s+/gm, '');
    code = code.trim();
    return code;
  }

  function optimizeAndFixSwift(code) {
    code = code.replace(/\/\/.*$/gm, '');
    code = code.replace(/\/\*[\s\S]*?\*\//gm, '');
    code = code.replace(/\s+$/gm, '').replace(/^\s+/gm, '');
    code = code.trim();
    return code;
  }

  function optimizeAndFixGo(code) {
    code = code.replace(/\/\/.*$/gm, '');
    code = code.replace(/\s+$/gm, '').replace(/^\s+/gm, '');
    code = code.trim();
    return code;
  }
});


//NEW SYSTEM
document.addEventListener("DOMContentLoaded", function () {
    // Sayfa yüklendiğinde optionsDiv elementini gizleyelim
    document.getElementById("optionsDiv").style.display = "none";
  
    // Seçenekleri saklamak için bir dizi oluşturalım
    var selectedOptions = loadOptions(); // Sayfa yüklendiğinde önceki seçenekleri yükle
  
    // toggleOptions fonksiyonunu tanımlayalım
    function toggleOptions() {
      var optionsDiv = document.getElementById("optionsDiv");
  
      // optionsDiv'in görünürlüğünü kontrol edelim
      if (optionsDiv.style.display === "none" || optionsDiv.style.display === "") {
        // Eğer gizli ise veya display özelliği boş ise göster
        optionsDiv.style.display = "block";
      } else {
        // Eğer görünür ise gizle
        optionsDiv.style.display = "none";
      }
    }
  
    // Filter butonuna tıklanma olayını dinleyelim
    document.getElementById("Filter").addEventListener("click", toggleOptions);
  
    // Checkbox'ların değişiklik olayını dinleyerek seçenekleri kaydedelim
    var checkboxes = document.querySelectorAll('#optionsDiv input[type="checkbox"]');
    checkboxes.forEach(function (checkbox) {
      checkbox.addEventListener("change", function () {
        if (this.checked) {
          // Eğer checkbox işaretli ise seçeneği ekleyelim
          selectedOptions.push(this.value);
        } else {
          // Eğer checkbox işaretli değilse seçeneği kaldıralım
          var index = selectedOptions.indexOf(this.value);
          if (index !== -1) {
            selectedOptions.splice(index, 1);
          }
        }
  
        // Seçenekleri konsola yazdıralım (isteğe bağlı)
        console.log("Seçilen Seçenekler: ", selectedOptions);
  
        // Seçenekleri otomatik olarak kaydet
        saveOptions(selectedOptions);
      });
    });
  
    // saveOptions fonksiyonunu tanımlayalım
    function saveOptions(options) {
      console.log("Seçenekler otomatik olarak kaydedildi: ", options);
      // Seçenekleri tarayıcı hafızasına (localStorage) kaydet
      localStorage.setItem("selectedOptions", JSON.stringify(options));
    }
  
    // loadOptions fonksiyonunu tanımlayalım
    function loadOptions() {
      // Kaydedilmiş seçenekleri tarayıcı hafızasından yükle
      var savedOptions = localStorage.getItem("selectedOptions");
      return savedOptions ? JSON.parse(savedOptions) : [];
    }
  });
  