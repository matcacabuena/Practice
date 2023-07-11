import 'package:desafio_2/adicionar.dart';
import 'package:desafio_2/home.dart';
import 'package:desafio_2/lista.dart';
import 'package:flutter/material.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Desafio 2',
      theme: ThemeData(
        colorScheme: ColorScheme.fromSeed(seedColor: Colors.redAccent),
        useMaterial3: true,
      ),
      debugShowCheckedModeBanner: false,
      home: const MyHomePage(title: 'Índice de Massa Corporal')
    );
  }
}

class MyHomePage extends StatefulWidget {
  const MyHomePage({super.key, required this.title});

  // This widget is the home page of your application. It is stateful, meaning
  // that it has a State object (defined below) that contains fields that affect
  // how it looks.

  // This class is the configuration for the state. It holds the values (in this
  // case the title) provided by the parent (in this case the App widget) and
  // used by the build method of the State. Fields in a Widget subclass are
  // always marked "final".

  final String title;

  @override
  State<MyHomePage> createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> {
  int posicaoPagina = 0;
  PageController controller = PageController(initialPage: 0);
  @override
  Widget build(BuildContext context) {
    // This method is rerun every time setState is called, for instance as done
    // by the _incrementCounter method above.
    //
    // The Flutter framework has been optimized to make rerunning build methods
    // fast, so that you can just rebuild anything that needs updating rather
    // than having to individually change instances of widgets.
    return Scaffold(
        appBar: AppBar(
          backgroundColor: Theme.of(context).colorScheme.inversePrimary,
          title: Text(widget.title),
        ),
        body: PageView(
            controller: controller,
            onPageChanged: (value) {
              setState(() {
                posicaoPagina = value;
              });
            },
            children: const [
              HomePage(title: "Desafio 2"),
              AdicionarPage(title: 'Adicionar Pessoa'),
              ListaPage(title: 'Lista de Pessoas')
            ]),
        bottomNavigationBar: BottomNavigationBar(
            onTap: (value) {
              controller.jumpToPage(value);
            },
            currentIndex: posicaoPagina,
            items: const [
              BottomNavigationBarItem(icon: Icon(Icons.home), label: 'Home'),
              BottomNavigationBarItem(
                  icon: Icon(Icons.add), label: 'Adicionar'),
              BottomNavigationBarItem(
                  icon: Icon(Icons.person), label: 'Pessoas'),
            ]) // This trailing comma makes auto-formatting nicer for build methods.
        );
  }
}
