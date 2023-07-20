class Pessoa {
  String _nome = '';
  double _peso = 0;
  double _altura = 0;
  String _dataNascimento = '';

  Pessoa(this._nome, this._peso, this._altura, this._dataNascimento);

  String get nome => _nome;
  double get peso => _peso;
  double get altura => _altura;
  String get dataNascimento => _dataNascimento;

  set nome(String nome) {
    _nome = nome;
  }

  set peso(double peso) {
    _peso = peso;
  }

  set altura(double altura) {
    _altura = altura;
  }

  set dataNascimento(String dataNascimento) {
    _dataNascimento = dataNascimento;
  }

  double calculaImc() {
    double alturaMetros = _altura / 100; // Converter altura de cm para metros
    return _peso / (alturaMetros * alturaMetros);
  }

  String classificacaoImc() {
    if (calculaImc() < 18.5) {
      return 'Baixo Peso';
    }
    if (calculaImc() >= 18.5 && calculaImc() < 24.99) {
      return 'Normal';
    }
    if (calculaImc() >= 25 && calculaImc() <= 29.99) {
      return 'Sobrepeso';
    }
    if (calculaImc() > 30) {
      return 'Obesidade';
    }
    return 'Não computado';
  }
}
