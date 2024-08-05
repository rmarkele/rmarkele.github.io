let strg = {};

function idiomaSelect() {
  //let item = selIdioma.value();
  // for (let i = 0; i < strings.length; i++) {
  //   if (strings[i].idioma === item) {
      let i = languageIndex;
      //Descriçao do Simulador
  
 
     
      strg.tituloSimulador = [
        checkForUndefinedString(strings[i]._titulo_simulador_linha1, " "),
        
        checkForUndefinedString(strings[i]._titulo_simulador_linha2, " "), 
        
      ];
    
      strg.comentarioSimulador = [
        checkForUndefinedString(strings[i]._comentario_simulador_linha1, " "),
        
        checkForUndefinedString(strings[i]._comentario_simulador_linha2, " ")      
      ];
     strg.btnSaibaMais =  checkForUndefinedString(strings[i]._btn_saiba_mais_simulador, "SAIBA MAIS");
      
      strg.alturasRep = [
         checkForUndefinedString(strings[i]._altura_carga_bomba, ["H", "[m]:"]),
         checkForUndefinedString(strings[i]._perda_carga, ["J", "[m]:"]), 
        checkForUndefinedString(strings[i]._altura_elevacao, ["Z", "[m]:"]) 
      ];
      
      //Gráfico
      strg.grafico = checkForUndefinedString(strings[i]._eixo_y_grafico, ["Altura Representativa", "[m]"]);
      
       
    //Componentes
      
      strg.textoBomba = checkForUndefinedString(strings[i]._texto_bomba, "Vel. Bomba [RPM]:");
      
      
      strg.textoValvulaDescarga = checkForUndefinedString(strings[i]._texto_valvula_descarga_bomba, "Abertura [%]:");
      
      strg.textovazaoDemandada = checkForUndefinedString(strings[i]._texto_valvula_vazao_demanda, "Vazão Demandada [m³/s]:");
      
      strg.textovazaoBomba =  checkForUndefinedString(strings[i]._eixo_x_grafico, "Vazão da Bomba [m³/s]:");
  
      
     strg.textovazaoSaida = checkForUndefinedString(strings[i]._texto_valvula_vazao_saida, "Vazão de saída [m³/s]:");
      
      strg.textoPotenciaHidraulica = checkForUndefinedString(strings[i]._texto_potencia_hidraulica, ["Pot. Hidráulica", "[x10 kW]"]);
      
      strg.textoRendimentoEstimado = checkForUndefinedString(strings[i]._texto_rendimento_estimado, ["Rendimento ", "Estimado [%]"]);
       
  
  //LUZES
  strg.textoLuzes = [
    checkForUndefinedString(strings[i]._texto_luz_PS, "PS"),
    checkForUndefinedString(strings[i]._texto_luz_NORMAL, "NORMAL"),
    checkForUndefinedString(strings[i]._texto_luz_PC, "PC"),
    
  ];

      // break;
  //   }
  // }
}

function checkForUndefinedString(x, x0) {
  if (typeof x !== "undefined") {
    return x;
  } else {
    return x0;
  }
}
