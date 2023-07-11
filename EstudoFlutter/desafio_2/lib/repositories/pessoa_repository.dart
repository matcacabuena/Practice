import 'package:desafio_2/model/pessoa.dart';

class PessoaRepository {
  final List<Pessoa> _pessoas = [];

  Future<void> adicionar(Pessoa pessoa) async {
    await Future.delayed(const Duration(milliseconds: 100));
    _pessoas.add(pessoa);
  }

  Future<void> remove(String nome) async {
    await Future.delayed(const Duration(milliseconds: 100));
    _pessoas.remove(_pessoas.where((pessoa) => pessoa.nome == nome).first);
  }

  Future<List<Pessoa>> listar() async {
    await Future.delayed(const Duration(milliseconds: 100));
    return _pessoas;
  }
}