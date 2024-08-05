function geraCurvaBomba(Hmax, Vmax, fs) {
    const Npoints = Vmax / fs;
    let Hb = [];
    for (let i = 0; i <= Npoints; i++) {
      let Hi = (-Hmax / (Vmax * Vmax)) * (i * fs - Vmax) * (i * fs + Vmax);
      Hb[i] = createVector(i * fs, Hi);
    }
    return Hb;
  }