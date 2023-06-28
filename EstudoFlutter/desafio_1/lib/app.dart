  import 'dart:convert';
  import 'dart:io';

import 'package:desafio_1/Pessoa.dart';

  List<Pessoa> cadastro = [];

void menu() {
    print("Bem-vindo ao cálculo de Índice de Massa Corporal.");
    print("Digite uma das opções a seguir:");
    print("-------------------------------");
    print("[0] Sair");
    print("[1] Cadastrar Pessoa");
    print("[2] Calcular Índice de Massa Corporal");
    print("[3] Mostrar pessoas cadastradas");
    print("-------------------------------");
  }

  void cadastraPessoa() {
    print("Digite o nome do(a) aluno(a): ");
    String nome = lerString();
    print("Digite a altura do(a) aluno(a): ");
    double altura = lerDouble();
    print("Digite o peso do(a) aluno(a): ");
    double peso = lerDouble();

    cadastro.add(Pessoa(nome, altura, peso));
    print("Pessoa cadastrada com sucesso!");
  }

  void calculaImc() {
    print("Digite o nome do(a) aluno(a): ");
    String nome = lerString();
    double imc = 0;
    cadastro.forEach((element) { 
      if(element.getNome() == nome) {
        imc = element.calculaIMC();
        print("O Índice de Massa Corporal de $nome é: $imc");
      }
  });
  }

  void mostraPessoas() {
    cadastro.forEach((element) {
      print(element.toString());
    });
  }

  String lerString() {
    return stdin.readLineSync(encoding: utf8) ?? "";
  }

  int lerInteger() {
    return int.parse(stdin.readLineSync(encoding: utf8) ?? "");
  }	

  double lerDouble() {
    return double.parse(stdin.readLineSync(encoding: utf8) ?? "");
  }

  void executa() {
    try {
      int opcao = -1;
        do {
            menu();
            bool ok;
            do {
                ok = true;
                try {
                opcao = lerInteger();
                } catch (e) {
                    ok = false;
                    print("Tipo incorreto. Redigite.\n");
                }
            } while (!ok);

            switch (opcao) {
                case 0:
                    break;
                case 1:
                    cadastraPessoa(); 
                    break;
                case 2:
                    calculaImc();
                    break;
                case 3:
                    mostraPessoas();
                    break;
                default:
                    print("Opção inválida");
            }
        } while (opcao != 0);
      }
      catch (e) {
        print(e);
      }
    }
