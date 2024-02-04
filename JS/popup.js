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
      default:
        throw new Error('Desteklenmeyen dil');
    }
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
