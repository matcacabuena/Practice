class Pessoa {
  String _nome = "";
  double _altura = 0;
  double _peso = 0;

  Pessoa(String nome, double altura, double peso) {
    _nome = nome;
    _altura = altura;
    _peso = peso;
  }

  String getNome() {
    return _nome;
  }

  double getAltura() {
    return _altura;
  }

  double getPeso() {
    return _peso;
  }

  void setNome(String nome) {
    _nome = nome;
  }

  void setAltura(double altura) {
    _altura = altura;
  }

  void setPeso(double peso) {
    _peso = peso;
  }

  double calculaIMC() {
    return _peso / (_altura * _altura);
  }

  @override
  String toString() {
    return "Pessoa(nome: $_nome, altura: $_altura, peso: $_peso)";
  }
}