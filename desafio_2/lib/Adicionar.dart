import 'package:flutter/material.dart';

class Adicionar extends StatelessWidget {
  const Adicionar({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Desafio 2',
      theme: ThemeData(
        colorScheme: ColorScheme.fromSeed(seedColor: Colors.redAccent),
        useMaterial3: true,
      ),
      home: const AdicionarPage(title: 'Adicionar Pessoas'),
    );
  }
}

  class AdicionarPage extends StatefulWidget {
  const AdicionarPage({super.key, required this.title});

  final String title;

  @override
  State<AdicionarPage> createState() => _AdicionarPageState();
}

class _AdicionarPageState extends State<AdicionarPage> {

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Center(
                child: Text(widget.title,
                    style: const TextStyle(
                        fontSize: 20, fontWeight: FontWeight.bold))),
      ),
      body: const Center(
        child: Text(
          'Adicionar Pessoa na Lista',
        )
      )
    );
  }
  
}
