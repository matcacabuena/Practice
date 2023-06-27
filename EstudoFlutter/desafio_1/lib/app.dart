  import 'dart:convert';
  import 'dart:io';

void menu() {
    print("Bem-vindo ao cálculo de Índice de Massa Corporal.");
    print("Digite uma das opções a seguir:");
    print("-------------------------------");
    print("[1] Cadastrar Pessoa");
    print("[2] Calcular Índice de Massa Corporal");
    print("-------------------------------");
  }

  void cadastrarPessoa() {
    print("Digite o nome do(a) aluno(a): ");
    String nome = lerString();
    print("Digite a altura do(a) aluno(a): ");
    double altura = lerDouble();
    print("Digite o peso do(a) aluno(a): ");
    double peso = lerDouble();
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
                    //in.nextLine();
                    ok = false;
                    print("Tipo incorreto. Redigite.\n");
                }
            } while (!ok);
            //in.nextLine();

            switch (opcao) {
                case 0:
                    break;
                case 1:
                    print("Op 1"); //cadastraPessoa(); 
                    break;
                case 2:
                    print("Op 2"); //calcularImc();
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
