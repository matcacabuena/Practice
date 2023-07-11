import 'package:desafio_2/model/pessoa.dart';
import 'package:desafio_2/repositories/pessoa_repository.dart';
import 'package:desafio_2/service/textLabel.dart';
import 'package:flutter/material.dart';

class Lista extends StatelessWidget {
  const Lista({super.key});

  @override
  Widget build(BuildContext context) {
    return const Placeholder();
  }
}

class ListaPage extends StatefulWidget {
  const ListaPage({super.key, required this.title});

  final String title;

  @override
  State<ListaPage> createState() => _ListaPageState();
}

class _ListaPageState extends State<ListaPage> {
  List<Pessoa> pessoas = [];

  addPessoa(Pessoa pessoa) {
    setState(() {
      pessoas.add(pessoa);
    });
  }

  @override
  Widget build(BuildContext context) {
    var pessoaRepository = PessoaRepository();
    var _pessoas = const <Pessoa>[];

    void obterTarefas() async {
      _pessoas = await pessoaRepository.listar();
      setState(() {});
    }

    return Scaffold(
      appBar: AppBar(
        title: Center(
            child: Text(widget.title,
                style: const TextStyle(
                    fontSize: 20, fontWeight: FontWeight.bold))),
      ),
      body: Container(
          margin: const EdgeInsets.symmetric(horizontal: 16, vertical: 8),
          child: Column(
            children: [
              Container(
                margin: const EdgeInsets.symmetric(horizontal: 12, vertical: 8),
                child: Row(
                  mainAxisAlignment: MainAxisAlignment.spaceBetween,
                  children: [
                    const Text(
                      "Apenas não concluídos",
                      style: TextStyle(fontSize: 18),
                    ),
                    Switch(
                        value: apenasNaoConcluidos,
                        onChanged: (bool value) {
                          apenasNaoConcluidos = value;
                          obterTarefas();
                        })
                  ],
                ),
              ),
              Expanded(
                child: ListView.builder(
                    itemCount: _pessoas.length,
                    itemBuilder: (BuildContext bc, int index) {
                      var pessoa = _pessoas[index];
                      return Dismissible(
                        onDismissed: (DismissDirection dismissDirection) async {
                          await pessoaRepository.remove(pessoa.nome);
                          obterTarefas();
                        },
                        key: Key(pessoa.nome),
                        child: ListTile(
                          title: Text(pessoa.descricao),
                          trailing: Switch(
                            onChanged: (bool value) async {
                              await pessoaRepository.alterar(pessoa.id, value);
                              obterTarefas();
                            },
                            value: tarefa.concluido,
                          ),
                        ),
                      );
                    }),
              ),
    );
  }
}
