import { Heading, ChakraProvider, Table, Thead, Tbody, Tr, Th, Td, Button, Flex } from "@chakra-ui/react";
import { useRef } from "react";
import { useReactToPrint } from "react-to-print";

function App() {
  const componentPDF = useRef(null);
  const alimentos = [
    {
      nome: "Batata Frita",
      passos: [
        "Corte a batata em palitos",
        "Coloque para fritar em óleo quente",
        "Retire após 15 minutos e escorra o excesso de óleo"
      ]
    },
    {
      nome: "Bolo de Chocolate",
      passos: [
        "Preaqueça o forno a 180°C",
        "Misture todos os ingredientes em uma tigela",
        "Despeje a massa em uma forma untada e leve ao forno por 30 minutos"
      ]
    },
    {
      nome: "Salada de Frutas",
      passos: [
        "Lave e corte as frutas em pedaços",
        "Misture todas as frutas em uma tigela",
        "Sirva gelada"
      ]
    },
    {
      nome: "Pizza Margherita",
      passos: [
        "Prepare a massa da pizza",
        "Espalhe o molho de tomate na massa",
        "Asse no forno por cerca de 15 minutos"
      ]
    },
    {
      nome: "Sushi",
      passos: [
        "Prepare o arroz para sushi",
        "Corte os ingredientes em fatias finas",
        "Adicione os ingredientes e enrole cuidadosamente"
      ]
    },
    {
      nome: "Omelete",
      passos: [
        "Bata os ovos em uma tigela",
        "Aqueça uma frigideira e adicione os ovos batidos",
        "Vire o omelete e cozinhe por mais alguns minutos"
      ]
    },
    {
      nome: "Pudim de Leite",
      passos: [
        "Misture o leite condensado, o leite e os ovos em uma tigela",
        "Despeje a mistura em uma forma caramelizada",
        "Leve à geladeira por algumas horas antes de servir"
      ]
    },
    {
      nome: "Panquecas",
      passos: [
        "Misture a farinha, o leite, os ovos e o sal em uma tigela",
        "Aqueça uma frigideira untada e despeje uma porção de massa",
        "Cozinhe por alguns minutos de cada lado"
      ]
    },
    {
      nome: "Macarrão",
      passos: [
        "Cozinhe o macarrão em uma tigela",
        "Aqueça uma frigideira untada e despeje uma porção de massa",
        "Cozinhe por alguns minutos de cada lado"
      ]
    },
    {
      nome: "Strogonoff",
      passos: [
        "Corte o frango",
        "Misture com o arroz",
        "Cozinhe em uma temperatura não muito alta para não queimar"
      ]
    }
  ];
  const generatePDF = useReactToPrint({
    content: () => componentPDF.current,
    documentTitle: "receitas",
    onAfterPrint: () => { alert("PDF gerado"); }
  });

  return (
    <ChakraProvider>
      <div ref={componentPDF} style={{ width: '100%' }}>
        <Flex bg="gray.200" minHeight="100vh" p={4} alignItems="center" flexDirection="column" justifyContent="center">
          <Heading color={"teal"} mb={4} >Receitas de Alimentos</Heading>
          <Flex maxWidth={800} bg="white">
            <Table variant="striped" colorScheme="teal" size="sm" margin="auto">
              <Thead>
                <Tr>
                  <Th>Alimento</Th>
                  <Th>Passo 1</Th>
                  <Th>Passo 2</Th>
                  <Th>Passo 3</Th>
                </Tr>
              </Thead>
              <Tbody>
                {alimentos.map((alimento, index) => (
                  <Tr key={index}>
                    <Td>{alimento.nome}</Td>
                    {alimento.passos.map((passo, passoIndex) => (
                      <Td key={passoIndex}>{passo}</Td>
                    ))}
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </Flex>
          <Button onClick={generatePDF} mt={10} colorScheme="teal">
            Exportar PDF
          </Button>

        </Flex>
      </div>
    </ChakraProvider>
  );
};

export default App;