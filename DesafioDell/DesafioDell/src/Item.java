public enum Item {
    CELULAR("celular", 0.5), GELADEIRA("geladeira", 60), FREEZER("freezer", 100), 
    CADEIRA("cadeira", 5), LUMINARIA("luminaria", 0.8), LAVADORA("lavadora de roupa", 120);

    private final String nome;

    private final double peso;

    private int quantidade;
    
    Item(String nome, double peso ) { //enum de itens que o usuário escolherá o que deseja transportar
        this.nome = nome;
        this.peso = peso;
    }

    public String getNome() {
        return nome;
    }

    public int getQuantidade() {
        return quantidade;
    }

    public void setQuantidade(int itemQuantidade) {
        this.quantidade = itemQuantidade;
    }

    public int removeQuantidade(int itensRemovidos) {
        if(this.quantidade > 0) {
            this.quantidade = this.quantidade - itensRemovidos;
            return itensRemovidos;
        } else {
            return 0;
        }

    }

    public double getPeso() {
        return peso;
    }
    
}