function atualizaStrings() {
  logoTxt0.innerHTML =
    strg.tituloSimulador[0] + "<br>" + strg.tituloSimulador[1];
  logoTxt1.innerHTML =
    strg.comentarioSimulador[0] + "<br>" + strg.comentarioSimulador[1];
  help.innerHTML = strg.btnSaibaMais;

  watt1.txt = strg.textoPotenciaHidraulica;
  watt2.txt = strg.textoRendimentoEstimado;

  bombar.text.innerHTML = strg.textoBomba[0];
  bombar.unit.innerHTML = strg.textoBomba[1];

  valvula1.text.innerHTML = strg.textoValvulaDescarga[0];
  valvula1.unit.innerHTML = strg.textoValvulaDescarga[1];

  sistemaConsumidor.text.innerHTML = strg.textovazaoDemandada[0];
  sistemaConsumidor.unit.innerHTML = strg.textovazaoDemandada[1];


  plot1.xlabel = strg.textovazaoBomba[1];

  cenarioLabel(strings[languageIndex].idioma);
  for (let i = 0; i < strg.labelCenario.length; i++) {
    selPar.querySelectorAll("option").forEach((option, index)=>{
      option.text =strg.labelCenario[index];
    })
    
  }

  light.textoPS.innerHTML = strg.textoLuzes[0];
  light.textoNORMAL.innerHTML = strg.textoLuzes[1];
  light.textoPC.innerHTML = strg.textoLuzes[2];
  
  txtH.text.innerHTML = strg.alturasRep[0][0];
  txtH.unit.innerHTML = strg.alturasRep[0][1];

  txtJ.text.innerHTML = strg.alturasRep[1][0];
  txtJ.unit.innerHTML = strg.alturasRep[1][1];

  txtZ.text.innerHTML = strg.alturasRep[2][0];
  txtZ.unit.innerHTML = strg.alturasRep[2][1];

  pumpFlow.text.innerHTML =  strg.textovazaoBomba[0];
  pumpFlow.unit.innerHTML =  strg.textovazaoBomba[1];
  cityFlow.text.innerHTML =  strg.textovazaoSaida[0];
  cityFlow.unit.innerHTML =  strg.textovazaoSaida[1];
}

// function getIndexes() {
//   indOf._cenario = strg.labelCenario.indexOf(selPar.value);
// }