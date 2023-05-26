public enum Caminhao {
    PEQUENO("pequeno porte", 4.87, 1000), MEDIO("medio porte", 11.92, 4000), GRANDE("grande porte", 27.44, 10000);

    private final String nome;

    private final double preco;

    private final int carga;
    
    Caminhao(String nome, double preco, int carga) { //enum de caminhões para carregar a carga nos transportes
        this.nome = nome;
        this.preco = preco;
        this.carga = carga;
    }

    public String getNome() {
        return nome;
    }

    public double getPreco() {
        return preco;
    }

    public int getCarga() {
        return carga;
    }
}