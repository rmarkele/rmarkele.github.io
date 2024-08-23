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
        Vop: round(10 * V) / 10,
        Hop: round(10 * H) / 10,
    };

    return PontoOperacao;
}