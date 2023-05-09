/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
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
  Link
} from "@chakra-ui/react";
import useAuth from "../../hooks/useAuth";
import { useEffect, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import "./styles.css";

const List = () => {
  const { sellerList, searchSeller, createSeller } = useAuth();
  const [sellers, setSellers] = useState([]);
  const [searchSellerInput, setSearchSellerInput] = useState("");
  const [page, setPage] = useState(1);

  const showSellers = async () => {
    const res = await sellerList({ page });
    // res.forEach((element) => {
    //   console.log(element.nome);
    // });
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

  return (
    <Flex
      flexDirection="column"
      width="100wv"
      maxW='1600ch'
      backgroundColor="gray.200"
      justifyContent="center"
      alignItems="center"
      textAlign='center'
    >
      <Box>
      <Stack spacing={6}>
        <Heading as="h1" color="teal" textAlign="center" marginTop='6' >
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
              m="0.5"
              onClick={handleSearchSellers}
            >
              Pesquisar
            </Button>
            <Link href="/addseller" >
            <Button backgroundColor="whiteAlpha.900"
              float="right"
              m="0.5"
              >+</Button>
              </Link>
          </FormLabel>
          <Link href="/home" fontSize='17' color='teal' >Logout</Link>
        </Heading>
      </Stack>
      </Box>
      <Box className="sellerList">
        {sellers.length > 0 ? (
          sellers.map(
            ({ id, nome, cnpj, idEmpresa, criadoEm, atualizadoEm }) => (
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
                  <ListItem>
                    <Text as="b">Atualizado em:</Text> {atualizadoEm}
                  </ListItem>
                </OrderedList>
              </Box>
            )
          )
        ) : (
          <Heading as="h2" color="teal" textAlign="center">
            No sellers found :('
          </Heading>
        )}
 
      </Box>
      <Flex  > 
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
      </Flex>
    </Flex>
  );
};

export default List;
