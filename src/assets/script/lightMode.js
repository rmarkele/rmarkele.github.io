function lightMode() {
    let mode = 1;
    if (PontoOperacao.Vop < LIMIARVAZAOBAIXA * Vmax) {
      mode = 0;
    } else if (PontoOperacao.Vop > LIMIARVAZAOALTA * Vmax) {
      mode = 2;
    }
  
    if (mode !== light.MODE) {
      light.MODE = mode;
      light.PS.classList.remove("on");
      light.NORMAL.classList.remove("on");
      light.PC.classList.remove("on");
  
      light.PS.classList.add("off");
      light.NORMAL.classList.add("off");
      light.PC.classList.add("off");
  
      switch (mode) {
        case 0:
          light.PS.classList.add("on");
          light.PS.classList.remove("off");
          break;
        case 1:
          light.NORMAL.classList.add("on");
          light.NORMAL.classList.remove("off");
          break;
        case 2:
          light.PC.classList.add("on");
          light.PC.classList.remove("off");
          break;
        default:
          break;
      }
    }
  }