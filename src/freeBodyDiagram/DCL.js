function desenhaDCL() {
  if(!hideSystem){
    let forceMol = -K * x[1];
    let forceAmo;
    forceAmo = ((-C * (x[1] - x[0])) / Ts);
  
    const nConstrain = 1;
    let Fmax = PIDSat; 
    const saturationFactor = 1.5;
     
    Fpert.Lmax = Fmax; 
    Fpert.L = constrain(multF * Perturb[2], -nConstrain * Fmax * saturationFactor, nConstrain * Fmax * saturationFactor);
    Fpert.posX = xCar  + car.deltaX + Lcar;
    Fpert.show();
  
    Fmol.Lmax = Fmax; 
    Fmol.posX = xCar  + car.deltaX;
    Fmol.L = constrain(multF * forceMol, -nConstrain * Fmax * saturationFactor, nConstrain * Fmax * saturationFactor); 
    Fmol.show();
  
    Famo.Lmax = Fmax; 
    Famo.posX = xCar  + car.deltaX;
    Famo.L = constrain(multF * forceAmo, -nConstrain * Fmax * saturationFactor, nConstrain * Fmax * saturationFactor); 
    Famo.show();
    
    Fpid.Lmax = Fmax; 
    Fpid.L = constrain(
      multF * (forcaAtuador[2] / 100 * PIDSat),
      -nConstrain * Fmax * saturationFactor,
      nConstrain * Fmax * saturationFactor
    ); 
    Fpid.posX = xCar  + car.deltaX;
    Fpid.show();
  }
}

function geraPainelDCL(){

 

  let opts=document.querySelectorAll("input[name=DCL-mult]");
  for(let opt of opts){
    if(parseInt(opt.value)===multF){
      opt.checked=true
    }

    opt.addEventListener('click',(e)=>{
      multF=parseInt(e.target.value);
    })
  }

}
