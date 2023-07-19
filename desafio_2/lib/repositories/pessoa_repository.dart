import 'package:desafio_2/model/pessoa.dart';

class PessoaRepository {
  static final PessoaRepository _instance = PessoaRepository._internal();
  
  factory PessoaRepository() {
    return _instance;
  }
  
  PessoaRepository._internal();

  List<Pessoa> pessoas = [];

  Future<void> adicionar(Pessoa pessoa) async {
    // Adicione sua lógica para adicionar uma pessoa
    pessoas.add(pessoa);
  }

  Future<List<Pessoa>> listar() async {
    // Adicione sua lógica para listar pessoas
    return pessoas;
  }

  Future<void> remove(String nome) async {
    // Adicione sua lógica para remover uma pessoa
    pessoas.removeWhere((pessoa) => pessoa.nome == nome);
  }
}
