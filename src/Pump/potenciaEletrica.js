function potenciaEletrica(V, N) {
    const Phmax = 458.2;
    const Vmax = 5.75;
    const Nmax = 1880;
    const K = 10;
    const rendimento = 0.75;
    const P0 = Phmax / rendimento - K * Vmax;
    return (K * V + P0) * pow(N / Nmax, 3);
}