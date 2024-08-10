

const logoTxt0 = document.querySelector("#logo-txt0");
const logoTxt1 = document.querySelector("#logo-txt1");
const help = document.querySelector("#help-button");
  

function idiomaAjuda() {
    switch (strings[languageIndex].idioma) {
        case "PT-BR":
        help.href = "src/help/html/PT-BR.html";
        break;
        case "EN-US":
        help.href = "src/help/html/EN-US.html";
        break;
        
    }
}


