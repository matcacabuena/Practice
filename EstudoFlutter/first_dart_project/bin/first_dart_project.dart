import 'dart:convert';
import 'dart:io';

import 'package:first_dart_project/first_dart_project.dart' as first_dart_project;

void main(List<String> arguments) {
  //print("Informe um número:");
  //var num = stdin.readLineSync(encoding: utf8); // reader
  //var num1 = int.parse(num ?? "0"); //se for nulo, retorna 0
  

  String texto = "DIO";
  int numero = 2;
  double numero1 = 5.12;
  bool varTrue = true;
  const String constante = "constante imutável";
  
  List<String> lista = ["ab", "cd", "ef"];
  lista.add("gh");

  print("\nForIn em lista");
  for(var alfabetos in lista) {
    print(alfabetos);
  }

  print("\nForEach em lista");
  lista.forEach((element) { 
    print(element);
  });

  var lista1 = [];
  lista1.add("AB");
  lista1.add(2.3);

  print("Retorna true se é par");
  print(numero.isEven);

  print("\nRetorna os elementos da lista1");
  print(lista1);

  print("\nConverte String para inteiro");
  print(int.parse("10"));

  print("\nTenta converter String para inteiro");
  print(int.tryParse("teste"));

  print("\nRemove ponto flutuante");
  print(numero1.truncate);

  print("\nQuebra uma String por um caracter específico");
  print("NOME;ENDERECO;CEP".split(";"));

  Map<String, dynamic> map1 = Map<String, dynamic>();
  var map = { 'zero' : 0, 'one': 1, 'two': 2 };
  
  print("\nObtém valor pela chave");
  print(map["one"]);

  map.addAll({'ten': 10, 'eleven': 11});
  map1.addAll({"Nome": "Mateus"});
  map1.addAll({"Idade": 19});
  print(map1);

  DateTime data1 = DateTime.now();
  print("\nData de Hoje");
  print(data1);

  print("\ndia da semana");
  print(data1.weekday);

  //adiciona 1 dia
  print("\nData de hoje após add 1 dia:");
  print(data1.add(Duration(days: 1)));

  var data2 = DateTime.parse("2023-06-02 00:00:00");
  print("\nse for menor, retorna -1, igual retorna 0 e maior retorna 1");
  print(data1.compareTo(data2));


}
