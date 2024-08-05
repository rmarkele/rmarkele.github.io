function geraCurvaSistema(Z, R, Vmax, Ymax, fs) {
    const Npoints = Vmax / fs;
    let Hs = [];
    if (R < Infinity) {
        for (let i = 0; i <= Npoints; i++) {
        let Hi = Z + R * (i * fs) * (i * fs);
        if (Hi <= Ymax) {
            Hs[i] = createVector(i * fs, Hi);
        } else {
            let Vlim = sqrt((Ymax - Z) / R);
            Hs[i] = createVector(Vlim, Ymax);
            break;
        }
        }
    } else {
        Hs[0] = createVector(0, 0);
        Hs[1] = createVector(0, Ymax);
    }
    return Hs;
}