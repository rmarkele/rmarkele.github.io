function atualizaStrings() {
  logoTxt0.innerHTML =
    strg.tituloSimulador[0] + "<br>" + strg.tituloSimulador[1];
  logoTxt1.innerHTML =
    strg.comentarioSimulador[0] + "<br>" + strg.comentarioSimulador[1];
  help.innerHTML = strg.btnSaibaMais;

  watt1.txt = strg.textoPotenciaHidraulica;
  watt2.txt = strg.textoRendimentoEstimado;

  valvula1.out.elt.innerHTML = strg.textoValvulaDescarga;
  sistemaConsumidor.out.elt.innerHTML = strg.textovazaoDemandada;
  bombar.out.elt.innerHTML = strg.textoBomba;

  plot1.ylabel = strg.grafico;

  cenarioLabel(strings[languageIndex].idioma);
  for (let i = 0; i < strg.labelCenario.length; i++) {
    selPar.querySelectorAll("option").forEach((option, index)=>{
      option.text =strg.labelCenario[index];
    })
    
  }

  light.textoPS.innerHTML = strg.textoLuzes[0];
  light.textoNORMAL.innerHTML = strg.textoLuzes[1];
  light.textoPC.innerHTML = strg.textoLuzes[2];
  
  txtH.text.innerHTML = strg.alturasRep[0][0] + strg.alturasRep[0][1];
  txtJ.text.innerHTML = strg.alturasRep[1][0] + strg.alturasRep[1][1];
  txtZ.text.innerHTML = strg.alturasRep[2][0] + strg.alturasRep[2][1];

  pumpFlow.text.innerHTML =  strg.textovazaoBomba;
  cityFlow.text.innerHTML =  strg.textovazaoSaida;
}

function getIndexes() {
  indOf._cenario = strg.labelCenario.indexOf(selPar.value);
}