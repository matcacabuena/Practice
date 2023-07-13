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
    var pessoas = const <Pessoa>[];

    void obterTarefas() async {
      pessoas = await pessoaRepository.listar();
      setState(() {});
      print(pessoas);
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
              pessoas.isEmpty ? const TextLabel(texto: "Sem pessoas") : Expanded(
                child: ListView.builder(
                    itemCount: pessoas.length,
                    itemBuilder: (BuildContext bc, int index) {
                      var pessoa = pessoas[index];
                      return Dismissible(
                        onDismissed: (DismissDirection dismissDirection) async {
                          await pessoaRepository.remove(pessoa.nome);
                          obterTarefas();
                        },
                        key: Key(pessoa.nome),
                        child: ListTile(
                          title: Text(pessoa.altura.toString() + " cm"),
                          trailing: Switch(
                            onChanged: (bool value) {
                              obterTarefas();
                            },
                            value: pessoas.isNotEmpty
                          ),
                        ),
                      );
                    }),
              ),
            ],
          ),
        ));
  }
}
