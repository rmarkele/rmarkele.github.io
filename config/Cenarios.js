/*Arquivo de cenários pré configarados

Para incluir um novo cenário siga os seguintes passos:
 1 - copie todo o conteúdo delimitado pelas chaves {} do cenário com "label": 'padrão' (incluindo as chaves) e cole logo após o último cenário, antes do colchete de fechamento ].
 2 - Identifique o novo cenário modificando o campo "label": 'padrão' para "label": 'novaIdentificaçãoDesejada' e modifique os demais campos com os novos parâmetros.

Observações importantes:
 1 - Cada cenário deve estar delimitado por chaves {} e separados entre si por vírgulas
 2 - Todos os campos devem ser estar no seguinte padrão "nomeCampo": valorCampo
 3 - Todos os cenários devem conter os campos "label":, "abertura_v1":, "demanda":,     "RPM":
   3.1 - O nome dos campos nunca deve ser alterado, somente seus valores.
 4 - Todos os campos devem estar separados por vírgulas
 5 - O campo "label" deve ser preenchido com um valor entre '' 
           Ex: maneira correta  "label": 'padrão'
               maneira INcorreta "label": padrão
*/

let cenarios = [
  {
    label_ptBR: 'Cenário Demonstração',
    label_enUS: 'Demo Scenario',
    abertura_v1: 55,
    demanda: 30,
    RPM: 1500,   
    Limiar_Vazao_Baixa: 25, //percentual da vazão
    Limiar_Vazao_Excessiva: 70, //percentual da vazão
    Elevacao_Tanque: 0,// elevação da base do tanque em [m]
    Elevacao_Saida_Agua: 1,// elevação da saída de água em [m] em relação à base do tanque
  },
  
   {
    label_ptBR: '1 - 1500 RPM: Operação em Vazio',
    label_enUS: '1 - 1500 RPM: Deadheaded Pump',
    abertura_v1: 0,
    demanda: 53,
    RPM: 1500,    
    Limiar_Vazao_Baixa: 25, //percentual da vazão
    Limiar_Vazao_Excessiva: 70, //percentual da vazão
    Elevacao_Tanque: 1,// elevação da base do tanque em [m]
    Elevacao_Saida_Agua: 3,// elevação da saída de água em [m] em relação à base do tanque
  },
  

  
  {
    label_ptBR: '2 - 1800 RPM: Baixa Demanda',
    label_enUS: '2 - 1800 RPM: Low Demand',
    abertura_v1: 40,
    demanda: 12,
    RPM: 1800,  
    Limiar_Vazao_Baixa: 25, //percentual da vazão
    Limiar_Vazao_Excessiva: 70, //percentual da vazão
  },
 
  {
    label_ptBR: '3 -  600 RPM: Baixa Demanda',
    label_enUS: '3 -  600 RPM: Low Demand',
    abertura_v1: 40,
    demanda: 12,
    RPM: 600,  
    Limiar_Vazao_Baixa: 25, //percentual da vazão
    Limiar_Vazao_Excessiva: 70, //percentual da vazão
  },
 


  {
    label_ptBR: '4 - 1200 RPM: Sobrecarga da Bomba',
    label_enUS: '4 - 1200 RPM: Pump Runout',
    abertura_v1: 72,
    demanda: 55,
    RPM: 1200,  
    Limiar_Vazao_Baixa: 25, //percentual da vazão
    Limiar_Vazao_Excessiva: 70, //percentual da vazão
  },

 
  {
    label_ptBR: '5 - 1800 RPM: Ponto de Máxima Eficiência',
    label_enUS: '5 - 1800 RPM: Best Efficiency Point',
    abertura_v1: 72,
    demanda: 55,
    RPM: 1800,
    Limiar_Vazao_Baixa: 25, //percentual da vazão
    Limiar_Vazao_Excessiva: 70, //percentual da vazão
  },
  

  {
    label_ptBR: '6 - Veloc. Máxima: Válvula Muito Fechada',
    label_enUS: '6 - Full Speed: Too Closed Valve',
    abertura_v1: 33,
    demanda: 65,
    RPM: 1880,
    Limiar_Vazao_Baixa: 25, //percentual da vazão
    Limiar_Vazao_Excessiva: 70, //percentual da vazão
  },
  

  {
    label_ptBR: '7 - Veloc. Máxima: Válvula Totalmente Aberta',
    label_enUS: '7 - Full Speed: Fully Open Valve',
    abertura_v1: 100,
    demanda: 65,
    RPM: 1880,
    Limiar_Vazao_Baixa: 25, //percentual da vazão
    Limiar_Vazao_Excessiva: 70, //percentual da vazão
  },



  {
    label_ptBR: '8 - Veloc. Máxima: Alto Desgaste Bomba',
    label_enUS: '8 - Full Speed: Pump High Wear',
    abertura_v1: 100,
    demanda: 95,
    RPM: 1880,
    Limiar_Vazao_Baixa: 25, //percentual da vazão
    Limiar_Vazao_Excessiva: 70, //percentual da vazão
  },




  {
    label_ptBR: '9 - Veloc. Máxima: Sist. Abastec. Insuficiente',
    label_enUS: '9 - Full Speed: Insufficient Supply System',
    abertura_v1: 100,
    demanda: 100,
    RPM: 1880,
    Limiar_Vazao_Baixa: 25, //percentual da vazão
    Limiar_Vazao_Excessiva: 70, //percentual da vazão
  },


]