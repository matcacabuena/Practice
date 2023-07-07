import 'package:flutter/material.dart';
import 'package:url_launcher/url_launcher.dart';

class Home extends StatelessWidget {
  const Home({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Desafio 2',
      theme: ThemeData(
        primaryColor: Colors.redAccent, // Defina a cor do cabeçalho do app aqui
        colorScheme:
            ColorScheme.fromSwatch().copyWith(secondary: Colors.redAccent),
        useMaterial3: true,
      ),
      home: const HomePage(title: 'Índice de Massa Corporal'),
    );
  }
}

class HomePage extends StatefulWidget {
  const HomePage({super.key, required this.title});

  final String title;

  @override
  State<HomePage> createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {
  Future<void> _launchURL(String url) async {
    final Uri uri = Uri(scheme: "https", host: url);
    if (!await launchUrl(
      uri,
      mode: LaunchMode.externalApplication,
    )) {
      throw "Can not launch url";
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        appBar: AppBar(
            title: Center(
                child: Text(widget.title,
                    style: const TextStyle(
                        fontSize: 20, fontWeight: FontWeight.bold)))),
        body: Container(
          padding: const EdgeInsets.symmetric(horizontal: 16),
          child: Column(children: [
            const Text(
                'Propósito: A partir do código de calculadora IMC feito no módulo anterior, criar um aplicativo que adicione, liste e calcule os Índices de Massa Corporal das pessoas.',
                textAlign: TextAlign.justify,
                style: TextStyle(fontSize: 16)),
            Container(
              margin: const EdgeInsets.only(top: 8, bottom: 8),
              child: Image.asset('lib/assets/tabela-IMC.png'),
              ),
            const Text(
                'Você pode acessar este e outros projetos criado por mim em meu GitHub @matcacabuena:',
                style: TextStyle(fontSize: 16)),
            Container(
              margin: const EdgeInsets.only(top: 8, bottom: 16),
              child: Image.asset('lib/assets/github.png')
            ),
            Container(
              decoration: BoxDecoration(
                color: Colors.red,
                borderRadius: BorderRadius.circular(
                    10), // Ajuste o valor conforme necessário
              ), // Defina a cor de fundo desejada
              child: InkWell(
                onTap: () {
                  // Código para abrir o link quando o botão for clicado
                  _launchURL('www.github.com');
                },
                child: const SizedBox(
                  width: 150, // Ajuste o tamanho conforme necessário
                  child: Row(
                    mainAxisAlignment: MainAxisAlignment.center,
                    children: [
                      Text(
                        'Acessar',
                        style: TextStyle(fontSize: 14, color: Colors.white),
                      ),
                      Icon(Icons.ads_click_rounded, color: Colors.white),
                    ],
                  ),
                ),
              ),
            ),
          ]),
        ));
  }
}
