document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('optimizeButton').addEventListener('click', function () {
        var originalCode = document.getElementById('codeInput').value;
        var selectedLanguage = document.getElementById('languageSelect').value;
        var selectedOptions = getSelectedOptions();

        try {
            var optimizedCode = optimizeAndFixErrors(originalCode, selectedLanguage, selectedOptions);
            document.getElementById('codeInput').value = optimizedCode;
            document.getElementById('result').innerText = optimizedCode;
        } catch (error) {
            console.error("Hata Oluştu: " + error.message);
        }
    });

    function getSelectedOptions() {
        // Seçilen seçenekleri al
        var checkboxes = document.querySelectorAll('#optionsDiv input[type="checkbox"]:checked');
        var selectedOptions = Array.from(checkboxes).map(function (checkbox) {
            return checkbox.value;
        });
        return selectedOptions;
    }

    function optimizeAndFixErrors(code, language, selectedOptions) {
        switch (language) {
            case 'javascript':
                return optimizeAndFixJavaScript(code, selectedOptions);
            case 'python':
                return optimizeAndFixPython(code, selectedOptions);
            case 'cpp':
                return optimizeAndFixCpp(code, selectedOptions);
            case 'java':
                return optimizeAndFixJava(code, selectedOptions);
            case 'ruby':
                return optimizeAndFixRuby(code, selectedOptions);
            case 'php':
                return optimizeAndFixPHP(code, selectedOptions);
            case 'swift':
                return optimizeAndFixSwift(code, selectedOptions);
            case 'go':
                return optimizeAndFixGo(code, selectedOptions);
            case 'rust':
                return optimizeAndFixRust(code, selectedOptions);
            case 'csharp':
                return optimizeAndFixCSharp(code, selectedOptions);
            case 'typescript':
                return optimizeAndFixTypeScript(code, selectedOptions);
            case 'assembly':
                return optimizeAndFixAssembly(code, selectedOptions);
            // Yeni dilleri buraya ekleyin...
            default:
                throw new Error('Desteklenmeyen dil');
        }
    }

    function optimizeAndFixJavaScript(code, selectedOptions) {
       //Yorumları siler code = code.replace(/\/\/.*$/gm, '');
        code = code.replace(/\/\*[\s\S]*?\*\//gm, '');
        code = code.replace(/;\s*;/g, ';');  
        // code = code.replace(/\s+$/gm, '').replace(/^\s+/gm, '');
        code = code.trim();

        // Seçilen ekstra optimize işlemlerini uygula
        code = applyExtraOptimizations(code, 'javascript', selectedOptions);

        return code;
    }

    function optimizeAndFixPython(code, selectedOptions) {
        code = code.replace(/'''[\s\S]*?'''|"""[\s\S]*?"""/g, '');
        code = code.replace(/#.*$/gm, '');
        code = code.replace(/\s+$/gm, '').replace(/^\s+/gm, '');
        code = code.trim();

        // Seçilen ekstra optimize işlemlerini uygula
        code = applyExtraOptimizations(code, 'python', selectedOptions);

        return code;
    }

    function optimizeAndFixCpp(code, selectedOptions) {
        code = code.replace(/\/\/.*$/gm, '');
        code = code.replace(/\/\*[\s\S]*?\*\//gm, '');
        code = code.replace(/;\s*;/g, ';');
        code = code.replace(/\s+$/gm, '').replace(/^\s+/gm, '');
        code = code.trim();

        // Seçilen ekstra optimize işlemlerini uygula
        code = applyExtraOptimizations(code, 'cpp', selectedOptions);

        return code;
    }

    function optimizeAndFixJava(code, selectedOptions) {
        code = code.replace(/\/\/.*$/gm, '');
        code = code.replace(/\/\*[\s\S]*?\*\//gm, '');
        code = code.replace(/;\s*;/g, ';');
        code = code.replace(/\s+$/gm, '').replace(/^\s+/gm, '');
        code = code.trim();

        // Seçilen ekstra optimize işlemlerini uygula
        code = applyExtraOptimizations(code, 'java', selectedOptions);

        return code;
    }

    function optimizeAndFixRuby(code, selectedOptions) {
        code = code.replace(/#.*$/gm, '');
        code = code.replace(/\s+$/gm, '').replace(/^\s+/gm, '');
        code = code.trim();

        // Seçilen ekstra optimize işlemlerini uygula
        code = applyExtraOptimizations(code, 'ruby', selectedOptions);

        return code;
    }

    function optimizeAndFixPHP(code, selectedOptions) {
        code = code.replace(/\/\/.*$|^\s*#.*$/gm, '');
        code = code.replace(/\/\*[\s\S]*?\*\//gm, '');
        code = code.replace(/\s+$/gm, '').replace(/^\s+/gm, '');
        code = code.trim();

        // Seçilen ekstra optimize işlemlerini uygula
        code = applyExtraOptimizations(code, 'php', selectedOptions);

        return code;
    }

    function optimizeAndFixSwift(code, selectedOptions) {
        code = code.replace(/\/\/.*$/gm, '');
        code = code.replace(/\/\*[\s\S]*?\*\//gm, '');
        code = code.replace(/\s+$/gm, '').replace(/^\s+/gm, '');
        code = code.trim();

        // Seçilen ekstra optimize işlemlerini uygula
        code = applyExtraOptimizations(code, 'swift', selectedOptions);

        return code;
    }

    function optimizeAndFixGo(code, selectedOptions) {
        code = code.replace(/\/\/.*$/gm, '');
        code = code.replace(/\s+$/gm, '').replace(/^\s+/gm, '');
        code = code.trim();

        // Seçilen ekstra optimize işlemlerini uygula
        code = applyExtraOptimizations(code, 'go', selectedOptions);

        return code;
    }

    function optimizeAndFixRust(code, selectedOptions) {
        code = code.replace(/\/\/.*$/gm, '');
        code = code.replace(/\/\*[\s\S]*?\*\//gm, '');
        code = code.replace(/^\s*[\r\n]/gm, '');
        code = code.replace(/\s+$/gm, '').replace(/^\s+/gm, '');
        code = code.trim();

        // Seçilen ekstra optimize işlemlerini uygula
        code = applyExtraOptimizations(code, 'rust', selectedOptions);

        return code;
    }

    function optimizeAndFixCSharp(code, selectedOptions) {
        code = code.replace(/\/\/.*$/gm, '');
        code = code.replace(/\/\*[\s\S]*?\*\//gm, '');
        code = code.replace(/^\s*[\r\n]/gm, '');
        code = code.replace(/^\s+/gm, '').replace(/\s+$/gm, '');
        code = code.trim();

        // Seçilen ekstra optimize işlemlerini uygula
        code = applyExtraOptimizations(code, 'csharp', selectedOptions);

        return code;
    }

    function optimizeAndFixTypeScript(code, selectedOptions) {
        code = code.replace(/\/\/.*$/gm, '');
        code = code.replace(/\/\*[\s\S]*?\*\//gm, '');
        code = code.replace(/^\s*[\r\n]/gm, '');
        code = code.replace(/^\s+/gm, '').replace(/\s+$/gm, '');
        code = code.trim();

        // Seçilen ekstra optimize işlemlerini uygula
        code = applyExtraOptimizations(code, 'typescript', selectedOptions);

        return code;
    }

    function optimizeAndFixAssembly(code, selectedOptions) {
        code = code.replace(/\/\/.*$/gm, '');
        code = code.replace(/\/\*[\s\S]*?\*\//gm, '');
        code = code.replace(/^\s*[\r\n]/gm, '');
        code = code.replace(/^\s+/gm, '').replace(/\s+$/gm, '');
        code = code.trim();

        // Seçilen ekstra optimize işlemlerini uygula
        code = applyExtraOptimizations(code, 'assembly', selectedOptions);

        return code;
    }

    const commentPatterns = {
        'javascript': /\/\/.*$|\/\*[\s\S]*?\*\//gm,
        'python': /#.*$|'''[\s\S]*?'''|"""[\s\S]*?"""/gm,
        'cpp': /\/\/.*$|\/\*[\s\S]*?\*\//gm,
        'java': /\/\/.*$|\/\*[\s\S]*?\*\//gm,
        'ruby': /#.*$/gm,
        'php': /\/\/.*$|#.*$|\/\*[\s\S]*?\*\//gm,
        'swift': /\/\/.*$|\/\*[\s\S]*?\*\//gm,
        'go': /\/\/.*$/gm,
        'rust': /\/\/.*$|\/\*[\s\S]*?\*\//gm,
        'csharp': /\/\/.*$|\/\*[\s\S]*?\*\//gm,
        'typescript': /\/\/.*$|\/\*[\s\S]*?\*\//gm,
        'assembly': /;.*$/gm,
        // Diğer diller için yorum desenleri ekleyebilirsiniz...
    };
    
    const spacePatterns = {
        'javascript': /\s+/g,
        'python': /\s+/g,
        'cpp': /\s+/g,
        'java': /\s+/g,
        'ruby': /\s+/g,
        'php': /\s+/g,
        'swift': /\s+/g,
        'go': /\s+/g,
        'rust': /\s+/g,
        'csharp': /\s+/g,
        'typescript': /\s+/g,
        'assembly': /\s+/g,
        // Diğer diller için boşluk desenleri ekleyebilirsiniz...
    };
    

function removeComments(code, language) {
    const pattern = commentPatterns[language] || commentPatterns['javascript']; // Varsayılan js yorum deseni
    return code.replace(pattern, '').trim();
}

function removeExtraSpaces(code, language) {
    const pattern = spacePatterns[language] || spacePatterns['javascript']; // Varsayılan js boşluk deseni
    return code.replace(pattern, ' ').trim();
}

function applyExtraOptimizations(code, language, selectedOptions) {
    selectedOptions.forEach(function (option) {
        // Desenler kullanılarak genel optimizasyon seçeneklerini uygula
        switch (option) {
            case 'option1':
                code = removeExtraSpaces(code, language); // Dil spesifik boşlukları sil
                console.log('Option 1: Extra spaces removed for ' + language);
                break;
            case 'option2':
                code = removeComments(code, language); // Dil spesifik yorumları sil
                console.log('Option 2: Comments removed for ' + language);
                break;
        }
    });
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
  
  //Seçeneklerden 1 tane seçmesini sağlamak

  document.addEventListener("DOMContentLoaded", function () {
  var options = document.querySelectorAll('input[type="checkbox"][name="options"]');

  options.forEach(function (option) {
    option.addEventListener("click", function () {
      options.forEach(function (otherOption) {
        if (otherOption !== option) {
          otherOption.checked = false;
        }
      });
    });
  });
});
