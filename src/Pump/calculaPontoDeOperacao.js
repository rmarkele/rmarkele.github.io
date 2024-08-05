function calculaPontoDeOperacao(Z, R, Hmax, Vmax) {
    let V, H;
    if (R < Infinity) {
        const Num = max(Hmax - Z, 0);
        const Den = R + Hmax / (Vmax * Vmax);

        V = sqrt(Num / Den);
        H = min(Z + R * V * V, Hmax);
    } else {
        V = 0;
        H = Hmax;
    }
    let PontoOperacao = {
        Vop: V,
        Hop: H,
    };

    return PontoOperacao;
}