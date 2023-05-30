import java.util.ArrayList;
import java.util.InputMismatchException;
import java.util.Scanner;

public class App { //Classe app, encarregada de executar os programas para o usuário

    private Scanner in; 

    private Frota frota;

    public App() { //Construtor
        in = new Scanner(System.in);
        frota = new Frota();
    }

    public void inicializa() { //Iniciando o código, o programa já grava todos os possíveis trechos e suas distâncias (de acordo com o arquivo .csv)
        frota.leArquivoDistancia();
    }

    public void executa() { //Principal executável, nele há o menu do programa
        int opcao = -1;
        do {
            menu();
            boolean ok;
            do {
                ok = true;
                try {
                    opcao = in.nextInt();
                } catch (InputMismatchException e1) {
                    in.nextLine();
                    ok = false;
                    System.out.println("Tipo incorreto. Redigite.\n");
                } catch (Exception e2) {
                    in.nextLine();
                    ok = false;
                    e2.printStackTrace();
                    System.out.println("Redigite.\n");
                }
            } while (!ok);
            in.nextLine();

            switch (opcao) { 
                case 1:
                    consultaTrechosModalidade();
                    break;
                case 2:
                    cadastraTransporte();
                    break;
                case 3:
                    dadosEstatisticos();
                    break;
                case 4:
                    break;
                default:
                    System.out.println("Opção inválida.");
            }
        } while (opcao != 4);
    }

    public void menu() { //Sistema
        System.out.println("\n============================================================");
        System.out.println("       Sistema de transporte interestadual de cargas");
        System.out.println("[1] Consultar trechos disponíveis e modalidades de transporte");
        System.out.println("[2] Cadastrar novo transporte");
        System.out.println("[3] Exibir dados estatísticos");
        System.out.println("[4] Terminar o programa");
        System.out.println("============================================================");
        System.out.println("\nOpção desejada: ");
    }

    public void consultaTrechosModalidade() { //primeira funcionalidade 
        String cidadeOrigem;
        String cidadeDestino;
        System.out.println("Estes são os trechos disponíveis e a distância entre eles: ");
        System.out.println("------------------------------------------------------------------------------");
        frota.consultaTrechos().stream().forEach(T -> System.out.println(T.toString()));
        System.out.println("------------------------------------------------------------------------------");

        do {
            System.out.println("Digite o nome da cidade origem que deseja realizar seu transporte: ");
            cidadeOrigem = in.nextLine();
            cidadeOrigem = cidadeOrigem.toUpperCase();
            if (!frota.consultaCidade(cidadeOrigem)) {
                System.out.println("Não existe nenhuma cidade com este nome, redigite.");
            }
        } while (!frota.consultaCidade(cidadeOrigem));

        do {
            System.out.println("Agora, digite o nome da cidade destino: ");
            cidadeDestino = in.nextLine();
            cidadeDestino = cidadeDestino.toUpperCase();
            if (!frota.consultaCidade(cidadeDestino)) {
                System.out.println("Não existe nenhuma cidade com este nome, redigite.");
            }
        } while (!frota.consultaCidade(cidadeDestino));

        int distancia = frota.consultaDistancia(cidadeOrigem, cidadeDestino);

        System.out.println(
                "Por fim, digite a sigla que corresponde o tamanho do caminhão em que deseja consultar o preço de transporte: ");
        System.out.printf(
                "\nCaminhao de pequeno porte [P]" + "\nCaminhao de medio porte [M]"
                        + "\nCaminhao de grande porte [G]\n");
        char sigla = in.next().charAt(0);
        sigla = Character.toUpperCase(sigla);

        Caminhao c;

        if (sigla == 'P') {
            c = Caminhao.PEQUENO;
        }

        else if (sigla == 'M') {
            c = Caminhao.MEDIO;
        }

        else if (sigla == 'G') {
            c = Caminhao.GRANDE;
        }

        else {
            System.out.println("Erro: certifique-se que escreveu a sigla corretamente.");
            return;
        }

        System.out.printf(
                "de %s para %s, utilizando um caminhao de porte [%c], a distância é de %dkm e o custo será de R$%.2f.",
                cidadeOrigem, cidadeDestino, sigla, distancia, frota.consultaTrechoModalidade(c, distancia));
    }

    public void cadastraTransporte() { //segunda funcionalidade
        String origem = null;
        String destino = null;
        String itemAnterior = null;
        int qtdCidade = 0, qtdItem = 0;
        int opcao = -1;
        int id = 1;
        int distanciaTotal = 0;
        int qtdCaminhaoP = 0, qtdCaminhaoM = 0, qtdCaminhaoG = 0;
        double peso = 0, precoTotal = 0, custoMedio = 0, totalCustoMedio = 0;
        Transporte t;
        Item item;
        ArrayList<Item> itens = new ArrayList();

        boolean ok;
        do {
            System.out.println(
                    "Digite a quantia de cidades que você deseja transportar seus itens: ");
            ok = true;
            try {
                qtdCidade = in.nextInt();
            } catch (InputMismatchException e1) {
                in.nextLine();
                ok = false;
                System.out.println("Tipo incorreto. Redigite.\n");
            } catch (Exception e2) {
                in.nextLine();
                ok = false;
                e2.printStackTrace();
                System.out.println("Redigite.\n");
            }
            if (qtdCidade < 1) {
                ok = false;
                System.out.println("Não é possível transportar esta quantia de cidades.\n");
            }
        } while (!ok);
        in.nextLine();

        do {
            System.out.println("Qual a cidade de origem?");
            origem = in.nextLine();
            origem = origem.toUpperCase();
            if (!frota.consultaCidade(origem)) {
                System.out.println("Não existe nenhuma cidade com este nome, redigite.");
            }
        } while (!frota.consultaCidade(origem));

        for (int i = 0; i < qtdCidade; i++) {

            if (i == 0) {
                do {
                    System.out.println("\nDigite o destino do transporte que partirá da cidade " + origem + ":");
                    destino = in.nextLine();
                    destino = destino.toUpperCase();
                    if (!frota.consultaCidade(destino)) {
                        System.out.println("Não existe nenhuma cidade com este nome, redigite.");
                    }
                } while (!frota.consultaCidade(destino));
                do {
                    do {
                        System.out.println("\nSelecione o tipo de item que deseja transportar: ");
                        System.out.printf(
                                "[1] Celular\n[2] Geladeira\n[3] Freezer\n[4] Cadeira\n[5] Luminaria\n[6] Lavadora de roupa\n[7] Já selecionei todos os itens\n");
                        ok = true;
                        try {
                            opcao = in.nextInt();
                        } catch (InputMismatchException e1) {
                            in.nextLine();
                            ok = false;
                            System.out.println("Tipo incorreto. Redigite.\n");
                        } catch (Exception e2) {
                            in.nextLine();
                            ok = false;
                            e2.printStackTrace();
                            System.out.println("Redigite.\n");
                        }
                        if (opcao != 7) {
                            qtdItem = 0;
                            System.out.println("Quantas unidades deste item você deseja transportar?");
                            try {
                                qtdItem = in.nextInt();
                            } catch (InputMismatchException e1) {
                                in.nextLine();
                                System.out.println("Tipo incorreto. Redigite.\n");
                            } catch (Exception e2) {
                                in.nextLine();
                                e2.printStackTrace();
                                System.out.println("Redigite.\n");
                            }
                        }
                    } while (!ok);
                    in.nextLine();

                    switch (opcao) {
                        case 1:
                            item = Item.CELULAR;
                            item.setQuantidade(qtdItem);
                            itens.add(item);
                            peso += item.getPeso() * item.getQuantidade();
                            custoMedio += qtdItem;
                            break;
                        case 2:
                            item = Item.GELADEIRA;
                            item.setQuantidade(qtdItem);
                            itens.add(item);
                            peso += item.getPeso() * item.getQuantidade();
                            custoMedio += qtdItem;
                            break;
                        case 3:
                            item = Item.FREEZER;
                            item.setQuantidade(qtdItem);
                            itens.add(item);
                            peso += item.getPeso() * item.getQuantidade();
                            custoMedio += qtdItem;
                            break;
                        case 4:
                            item = Item.CADEIRA;
                            item.setQuantidade(qtdItem);
                            itens.add(item);
                            peso += item.getPeso() * item.getQuantidade();
                            custoMedio += qtdItem;
                            break;
                        case 5:
                            item = Item.LUMINARIA;
                            item.setQuantidade(qtdItem);
                            itens.add(item);
                            peso += item.getPeso() * item.getQuantidade();
                            custoMedio += qtdItem;
                            break;
                        case 6:
                            item = Item.LAVADORA;
                            item.setQuantidade(qtdItem);
                            itens.add(item);
                            peso += item.getPeso() * item.getQuantidade();
                            custoMedio += qtdItem;
                            break;
                        case 7:
                            break;
                        default:
                            System.out.println("Opção inválida");
                            break;
                    }
                } while (opcao != 7);

                for (Transporte transporte : frota.dadosEstatisticos()) {
                    if (id == transporte.getId()) {
                        id++;
                    }
                }

                t = new Transporte(id, origem, destino);
                frota.cadastraTransporte(t, itens, peso);
                custoMedio = frota.transportePreco(t) / custoMedio;
                totalCustoMedio += custoMedio;
                frota.itensTransportados(t);

                System.out.printf(
                        "\nde %s para %s, a distância a ser percorrida é de %dkm.\nPara o transporte dos produtos ",
                        origem, destino, frota.consultaDistancia(origem, destino));

                for (Item it : itens) {
                    if (it.getNome() != itemAnterior) {
                        System.out.printf("%s, ", it.getNome());
                    }
                    itemAnterior = it.getNome();
                }

                System.out.printf("será necessário utilizar ");

                for (Caminhao c : frota.qtdCaminhao(t)) {
                    if (c.getNome() == "pequeno porte") {
                        qtdCaminhaoP += 1;
                    }
                    if (c.getNome() == "medio porte") {
                        qtdCaminhaoM += 1;
                    }
                    if (c.getNome() == "grande porte") {
                        qtdCaminhaoG += 1;
                    }
                }
                System.out.printf(
                        "\n[%d] caminhões de pequeno porte \n[%d] caminhões de médio porte \n[%d] caminhões de grande porte",
                        qtdCaminhaoP, qtdCaminhaoM, qtdCaminhaoG);
                System.out.printf(
                        "\nde forma a resultar no menor custo de transporte por km rodado. O custo do transporte destes itens é R$ %.2f e o custo unitário médio é R$%.2f",
                        frota.transportePreco(t), custoMedio);
            } else {
                origem = destino;
                peso = 0;
                custoMedio = 0;
                do {
                    System.out.println("\nApós a chegada em " + origem + ", qual será o próximo destino?");
                    destino = in.nextLine();
                    destino = destino.toUpperCase();
                    if (!frota.consultaCidade(destino)) {
                        System.out.println("Não existe nenhuma cidade com este nome, redigite.");
                    }
                } while (!frota.consultaCidade(destino));
                do {
                    do {
                        System.out.println("\nSelecione a carga que você deseja descarregar na cidade " + origem
                                + ", antes de transportá-la até " + destino + ":");
                        System.out.printf(
                                "[1] Celular\n[2] Geladeira\n[3] Freezer\n[4] Cadeira\n[5] Luminaria\n[6] Lavadora de roupa\n[7] Já selecionei todos os itens\n");
                        ok = true;
                        try {
                            opcao = in.nextInt();
                        } catch (InputMismatchException e1) {
                            in.nextLine();
                            ok = false;
                            System.out.println("Tipo incorreto. Redigite.\n");
                        } catch (Exception e2) {
                            in.nextLine();
                            ok = false;
                            e2.printStackTrace();
                            System.out.println("Redigite.\n");
                        }
                        if (opcao != 7) {
                            qtdItem = 0;
                            System.out.println("Quantas unidades deste item você deseja descarregar?");
                            try {
                                qtdItem = in.nextInt();
                            } catch (InputMismatchException e1) {
                                in.nextLine();
                                System.out.println("Tipo incorreto. Redigite.\n");
                            } catch (Exception e2) {
                                in.nextLine();
                                e2.printStackTrace();
                                System.out.println("Redigite.\n");
                            }
                        }
                    } while (!ok);
                    in.nextLine();

                    switch (opcao) {
                        case 1:
                            item = Item.CELULAR;
                            item.removeQuantidade(qtdItem);
                            if (item.getQuantidade() < 1) {
                                itens.remove(item);
                            }
                            peso += item.getPeso() * item.getQuantidade();
                            custoMedio += qtdItem;
                            break;
                        case 2:
                            item = Item.GELADEIRA;
                            item.removeQuantidade(qtdItem);
                            if (item.getQuantidade() < 1) {
                                itens.remove(item);
                            }
                            peso += item.getPeso() * item.getQuantidade();
                            custoMedio += qtdItem;
                            break;
                        case 3:
                            item = Item.FREEZER;
                            item.removeQuantidade(qtdItem);
                            if (item.getQuantidade() < 1) {
                                itens.remove(item);
                            }
                            peso += item.getPeso() * item.getQuantidade();
                            custoMedio += qtdItem;
                            break;
                        case 4:
                            item = Item.CADEIRA;
                            item.removeQuantidade(qtdItem);
                            if (item.getQuantidade() < 1) {
                                itens.remove(item);
                            }
                            peso += item.getPeso() * item.getQuantidade();
                            custoMedio += qtdItem;
                            break;
                        case 5:
                            item = Item.LUMINARIA;
                            item.removeQuantidade(qtdItem);
                            if (item.getQuantidade() < 1) {
                                itens.remove(item);
                            }
                            peso += item.getPeso() * item.getQuantidade();
                            custoMedio += qtdItem;
                            break;
                        case 6:
                            item = Item.LAVADORA;
                            item.removeQuantidade(qtdItem);
                            if (item.getQuantidade() < 1) {
                                itens.remove(item);
                            }
                            peso += item.getPeso() * item.getQuantidade();
                            custoMedio += qtdItem;
                            break;
                        case 7:
                            break;
                        default:
                            System.out.println("Opção inválida");
                            break;
                    }
                } while (opcao != 7);

                t = new Transporte(id, origem, destino);
                frota.cadastraTransporte(t, itens, peso);
                custoMedio = frota.transportePreco(t) / custoMedio;
                totalCustoMedio += custoMedio;

                System.out.printf(
                        "\nde %s para %s, a distância a ser percorrida é de %dkm.\nPara o transporte dos produtos ",
                        origem, destino, frota.consultaDistancia(origem, destino));

                for (Item it : itens) {
                    if (it.getNome() != itemAnterior) {
                        System.out.printf("%s, ", it.getNome());
                    }
                    itemAnterior = it.getNome();
                }

                System.out.printf("será necessário utilizar ");

                qtdCaminhaoP = 0;
                qtdCaminhaoM = 0;
                qtdCaminhaoG = 0;
                for (Caminhao c : frota.qtdCaminhao(t)) {
                    if (c.getNome() == "pequeno porte") {
                        qtdCaminhaoP += 1;
                    }
                    if (c.getNome() == "medio porte") {
                        qtdCaminhaoM += 1;
                    }
                    if (c.getNome() == "grande porte") {
                        qtdCaminhaoG += 1;
                    }
                }
                System.out.printf(
                        "\n[%d] caminhões de pequeno porte \n[%d] caminhões de médio porte \n[%d] caminhões de grande porte",
                        qtdCaminhaoP, qtdCaminhaoM, qtdCaminhaoG);
                System.out.printf(
                        "\nde forma a resultar no menor custo de transporte por km rodado. O custo do transporte destes itens é R$ %.2f e o custo unitário médio é R$%.2f",
                        frota.transportePreco(t), custoMedio);
            }
        }

        for (Transporte sameID : frota.dadosEstatisticos()) {
            if (sameID.getId() == id) {
                precoTotal += frota.transportePreco(sameID);
                distanciaTotal += frota.consultaDistancia(sameID.getOrigem(), sameID.getDestino());
            }
        }
        System.out.printf("\n--------------------------------------------------------------");
        System.out.printf("\nO custo total para este transporte é R$%.2f", precoTotal);
        System.out.printf("\nA distância total que este transporte percorrerá é %dkm", distanciaTotal);
        System.out.printf("\nO custo unitário médio total é R$%.2f", totalCustoMedio / qtdCidade);
        System.out.printf("\n--------------------------------------------------------------");

    }

    public void dadosEstatisticos() { //terceira funcionalidade
        double custoTotal = 0; 
        double custoTrecho = 0;
        double custoTotalTrecho = 0;
        int qtdCaminhao = 0;
        int distancia = 0;
        int distanciaTotal = 0;
        int itensTransportados = 0;
        int id = 1;
        int index = 1;

        for (Transporte t : frota.dadosEstatisticos()) {
            if (t.getId() != id) {
                custoTotalTrecho = 0;
                distanciaTotal = 0;
                index = 1;
                id++;
            }
            custoTrecho = frota.transportePreco(t);
            distancia = frota.consultaDistancia(t.getOrigem(), t.getDestino());
            custoTotalTrecho += custoTrecho;
            custoTotal += custoTrecho;
            distanciaTotal += distancia;

            System.out.printf("\nTransporte número: " + id);
            System.out.printf("\n-----------------------------------------");
            System.out.printf("\nCusto do trecho: R$%.2f", custoTrecho);
            System.out.printf("\nCusto médio por km do trecho %d: R$%.2f", index, custoTrecho / distancia);
            System.out.printf("\nCusto por trecho total: R$%.2f", custoTotalTrecho);
            System.out.printf("\nCusto médio por km total: %.2f", custoTotal / distanciaTotal);

            double pequeno = frota.totalCaminhao(t).get(0);
            double medio = frota.totalCaminhao(t).get(1);
            double grande = frota.totalCaminhao(t).get(2);
            System.out.printf("\n\nCusto por modalidade de caminhão: \n[P] %.2f\n[M] %.2f\n[G] %.2f\n", pequeno, medio, grande);

            itensTransportados += t.getTotalItemTransportado();
            System.out.printf("\nCusto médio por tipo de produto: ");
            for (String key : frota.mediaItensTransportados(t).keySet()) {

                Double value = frota.mediaItensTransportados(t).get(key);
                System.out.printf("\n[%s] %.2f", key, value);
            }
            System.out.printf("\n-----------------------------------------");

            qtdCaminhao += frota.qtdCaminhao(t).size();
            index++;

        }
        System.out.printf("\nCusto total: R$%.2f", custoTotal);
        System.out.printf("\nTotal de itens transportados: %d", itensTransportados);
        System.out.printf("\nNúmero total de veículos transportados: %d", qtdCaminhao);
    }
}
