/* eslint-disable react/jsx-key */
import {
  Text,
  chakra,
  Avatar,
  Box,
  Button,
  Flex,
  Input,
  InputGroup,
  InputRightElement,
  Heading,
  Stack,
  FormLabel,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
  Grid,
  GridItem,
  Divider,
} from "@chakra-ui/react";
import useAuth from "../../hooks/useAuth";
import { useEffect, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import "./styles.css";

const searchButton = chakra(AiOutlineSearch);

const List = () => {
  const { sellerList, searchSeller, createSeller } = useAuth();
  const [sellers, setSellers] = useState([]);
  const [searchSellerInput, setSearchSellerInput] = useState("");
  const [page, setPage] = useState(1);

  const showSellers = async () => {
    const res = await sellerList({ page });
    res.forEach((element) => {
      console.log(element.nome);
    });
    setSellers(res);
    //res = array de vendedores
  };
  useEffect(() => {
    showSellers();
  }, [page]);

  async function handleSearchSellers() {
    const res = await searchSeller({ search: searchSellerInput });
    setSellers(res);
  }

  createSeller({
    name: "ABADABADU",
    cnpj: "aaaaaaaa123",
    bussinessId: 0,
    createdAt: "2023-03-08T14:02:06.757Z",
    updatedAt: "2023-03-08T14:02:06.757Z",
  });

  return (
    <Flex
      flexDirection="column"
      width="100wv"
      backgroundColor="gray.200"
      justifyContent="center"
      alignItems="center"
    >
      <Stack spacing={6}>
        <Heading as="h1" color="teal" textAlign="center">
          Sellers List
        </Heading>
        <Heading>
          <FormLabel p="5">
            <InputGroup>
              <Input
                backgroundColor="whiteAlpha.900"
                m="0.5"
                className="search"
                type="search"
                placeholder="Pesquise um vendedor"
                value={searchSellerInput}
                onChange={(e) => setSearchSellerInput(e.target.value)}
              />
              <InputRightElement
                pointerEvents="none"
                color="gray.300"
                children={<searchButton />}
              />
            </InputGroup>
            <Button
              backgroundColor="whiteAlpha.900"
              m="0.5"
              onClick={showSellers}
            >
              Limpar Pesquisa
            </Button>
            <Button
              backgroundColor="whiteAlpha.900"
              float="right"
              m="0.5"
              onClick={handleSearchSellers}
            >
              Pesquisar
            </Button>
          </FormLabel>
          <Button backgroundColor="whiteAlpha.900"
              float="right"
              m="0.5">+</Button>
        </Heading>
        {/* <a href="#">sair</a> */}
      </Stack>
      <Box className="sellerList">
        {sellers.length > 0 ? (
          sellers.map(
            ({ id, nome, cnpj, idEmpresa, criadoEm }) => (
              <Box className="seller">
                <OrderedList>
                  <Avatar bg="teal" size="2xs" />
                  <ListItem>
                    <Text as="b">ID:</Text> {id}
                  </ListItem>
                  <ListItem>
                    <Text as="b">Nome:</Text> {nome}
                  </ListItem>
                  <ListItem>
                    <Text as="b">CNPJ:</Text> {cnpj}
                  </ListItem>
                  <ListItem>
                    <Text as="b">ID da Empresa:</Text> {idEmpresa}
                  </ListItem>
                  <ListItem>
                    <Text as="b">Criado em:</Text> {criadoEm}
                  </ListItem>
                </OrderedList>
              </Box>
            )
            // <Grid templateColumns='repeat(5, 1fr)' gap={6}>
            //   <GridItem
            //     display='flex' flex-direction='column' m='1rem'
            //     p='1rem' borderRadius='1rem' backgroundColor='teal'
            //     color='whiteAlpha.900'>
            //     <OrderedList>
            //       <ListItem><Text as='b'>ID:</Text> {id}</ListItem>
            //       <ListItem><Text as='b'>Nome:</Text> {nome}</ListItem>
            //     </OrderedList>
            //     <Text as='b'>ID:</Text> {id}
            //     <p></p>
            //     <Text as='b'>CNPJ:</Text> {cnpj}

            //   </GridItem>

            // </Grid>
          )
        ) : (
          <Heading as="h2" color="teal" textAlign="center">
            No sellers found :('
          </Heading>
        )}
        {/* <Button colorScheme='teal' onClick={getData} className="get">Checar o GET</Button> */}
      </Box>
      <Box>
        <Button
          className={`${page === 1 && "selectedPage"}`}
          onClick={() => {
            setPage(1);
          }}
        >
          1
        </Button>
        <Button
          className={`${page === 2 && "selectedPage"}`}
          onClick={() => setPage(2)}
        >
          2
        </Button>
        <Button
          className={`${page === 3 && "selectedPage"}`}
          onClick={() => setPage(3)}
        >
          3
        </Button>
        <Button
          className={`${page === 4 && "selectedPage"}`}
          onClick={() => setPage(4)}
        >
          4
        </Button>
        <Button
          className={`${page === 5 && "selectedPage"}`}
          onClick={() => setPage(5)}
        >
          5
        </Button>
        <Button
          className={`${page === 6 && "selectedPage"}`}
          onClick={() => setPage(6)}
        >
          6
        </Button>
        <Button
          className={`${page === 7 && "selectedPage"}`}
          onClick={() => setPage(7)}
        >
          7
        </Button>
        <Button
          className={`${page === 8 && "selectedPage"}`}
          onClick={() => setPage(8)}
        >
          8
        </Button>
        <Button
          className={`${page === 9 && "selectedPage"}`}
          onClick={() => setPage(9)}
        >
          9
        </Button>
      </Box>
    </Flex>
  );
};

export default List;
