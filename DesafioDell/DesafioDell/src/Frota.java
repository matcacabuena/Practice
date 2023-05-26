import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;
import java.io.BufferedReader;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.nio.charset.Charset;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

public class Frota {

    private ArrayList<Caminhao> caminhoes;

    private ArrayList<Transporte> dados;

    private ArrayList<Transporte> trechos;

    public Frota() {
        caminhoes = new ArrayList<>();
        dados = new ArrayList<>();
        trechos = new ArrayList<>();
    }

    public boolean adicionaCaminhao(Caminhao caminhao) {
        return caminhoes.add(caminhao);
    }

    public boolean consultaCidade(String cidade) {
        for (Transporte t : trechos) {
            if (t.getDestino().equals(cidade)) {
                return true;
            }
        }
        return false;
    }

    // ---------------métodos usados para a funcionalidade[1]--------------------------
    // método que consulta os trechos disponíveis para transporte.

    public double consultaTrechoModalidade(Caminhao caminhao, int distancia) {
        Transporte t = new Transporte(0, null, null);
        t.adicionaCaminhao(caminhao);
        return t.calculaCusto(distancia);
    }

    public ArrayList<Transporte> consultaTrechos() {
        return (ArrayList<Transporte>) trechos.clone();
    }

    // método para consultar a distância entre duas cidades.
    public int consultaDistancia(String cidadeOrigem, String cidadeDestino) {
        for (Transporte t : trechos) {
            if (t.getOrigem().equals(cidadeOrigem) && t.getDestino().equals(cidadeDestino)) {
                return t.getDistancia();
            }
        }
        return -1;
    }

    // método para ler o arquivo .csv e registrar a distância entre as cidades.
    public void leArquivoDistancia() {
        Path path = Paths.get("DNIT-Distancias.csv");
        String cidadeOrigem;
        String cidadeDestino;
        int distancia;
        int index = 0;
        try {
            BufferedReader br = Files.newBufferedReader(path, Charset.defaultCharset());
            String line = null;

            while ((line = br.readLine()) != null) {
                String[] lines = line.split(";");
                for (int i = 0; i < lines.length; i++) {
                    for (int j = 0; j < lines.length; j++) {
                        cidadeOrigem = lines[i];
                        cidadeDestino = lines[j];
                        trechos.add(new Transporte(0, cidadeOrigem, cidadeDestino));
                    }
                }
                break;
            }
            while ((line = br.readLine()) != null) {
                String[] lines = line.split(";");
                for (int i = 0; i < lines.length; i++, index++) {
                    distancia = Integer.parseInt(lines[i]);
                    trechos.get(index).setDistancia(distancia);
                }
            }
        } catch (FileNotFoundException e) {
            System.out.println(e);
        } catch (IOException e) {
            System.out.println(e);
        }
    }

    // ---------------métodos usados para a funcionalidade[2]--------------------------
    public boolean cadastraTransporte(Transporte transporte, ArrayList<Item> itens, double peso) {
        transporte.setDistancia(consultaDistancia(transporte.getOrigem(), transporte.getDestino()));
        transporte.calculaFrota(peso);
        transporte.setItens(itens);
        return dados.add(transporte);
    }

    public ArrayList<Caminhao> qtdCaminhao(Transporte transporte) {
        return transporte.getFrota();
    }

    public double transportePreco(Transporte transporte) {
        return transporte.calculaCusto(transporte.getDistancia());
    }

    // ---------------métodos usados para a funcionalidade[3]--------------------------
    public ArrayList<Transporte> dadosEstatisticos() {
        if (dados != null) {
            return (ArrayList<Transporte>) dados.clone();
        }
        return null;
    }

    public void itensTransportados(Transporte t) {
        int qtdItens = 0;
        for (Item i : t.getItens()) {
            qtdItens += i.getQuantidade();
        }
        t.setTotalItemTransportado(qtdItens);
    }

    public Map<String, Double> mediaItensTransportados(Transporte t) {
        
        Map<String, Double> mediaItem = new HashMap<String,Double>();

        for (Item item : t.getItens()) {
            mediaItem.put(item.getNome(), t.calculaCusto(t.getDistancia()) / item.getQuantidade());
        }

        return mediaItem;
    }

    public ArrayList<Double> totalCaminhao(Transporte transporte) {
        double custoPequeno = 0;
        double custoMedio = 0; 
        double custoGrande = 0; 
        ArrayList<Double> custoArray= new ArrayList(); 

        for (Caminhao caminhao : transporte.getFrota()) {
            if(caminhao.getNome().equals("pequeno porte")) {
                custoPequeno += caminhao.getPreco() * transporte.getDistancia();
            } 
            else if(caminhao.getNome().equals("medio porte")) {
                custoMedio += caminhao.getPreco() * transporte.getDistancia();
            } 
            else if(caminhao.getNome().equals("grande porte")) {
                custoGrande += caminhao.getPreco() * transporte.getDistancia();
            }
        }
        custoArray.add(custoPequeno);
        custoArray.add(custoMedio);
        custoArray.add(custoGrande);

        return custoArray;
    }
    
}