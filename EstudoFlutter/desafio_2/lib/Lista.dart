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
  var _pessoas = const <Pessoa>[];
  var pessoaRepository = PessoaRepository();

  @override
  void initState() {
    super.initState();
    obterPessoas();
  }

  void obterPessoas() async {
      _pessoas = await pessoaRepository.listar();
      setState(() {});
      //print(pessoas);
    }

  
  @override
  Widget build(BuildContext context) {
    String n = _pessoas.length.toString();
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
              _pessoas.isEmpty ? TextLabel(texto: "$n _pessoas") : Expanded(
                child: ListView.builder(
                    itemCount: _pessoas.length,
                    itemBuilder: (BuildContext bc, int index) {
                      var pessoa = _pessoas[index];
                      return Dismissible(
                        onDismissed: (DismissDirection dismissDirection) async {
                          await pessoaRepository.remove(pessoa.nome);
                          obterPessoas();
                        },
                        key: Key(pessoa.nome),
                        child: ListTile(
                          leading: Image.asset('lib/assets/user.png'),
                          title: Text(pessoa.nome),
                          subtitle: const Text("Índice Massa Corporal: "),
                          trailing: Text(pessoa.peso.toStringAsFixed(2)),
                        ),
                      );
                    }),
              ),
            ],
          ),
        ));
  }
}
