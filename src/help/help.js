
const logo =  document.getElementById("logo-container")
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

function createLogo(){
    
    if(canvasW<=respLim[0]){
        let posy =  cano1.posy + 10;
        logo.style.top = posy + "px";
    } else if(canvasW<=respLim[1]){
         logo.style.top = "20px";
        //  logo.style.left = "2px";
    } else{
        logo.style.top = "unset";
        logo.style.bottom = "32px";
        // logo.style.left = "45%";
    }
}


