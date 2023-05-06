import { Box, Button, Flex } from "@chakra-ui/react"
import useAuth from "../../hooks/useAuth";
import { useEffect, useState } from "react";
import "./styles.css"

const List = () => {
  const { sellerList } = useAuth();
  const [sellers, setSellers] = useState([]);
  const showSellers = async () => {
    const res = await sellerList()
    res.forEach(element => {
      console.log(element.nome)
    });
    setSellers(res)
    //res = array de vendedores
  }
  useEffect(() => {
    showSellers()
  }, [])

  return (
    <div className="content">
      <header className="header">
        <h1>Sellers List</h1>
        <input className="search" type="search" placeholder="Pesquise um vendedor" />
        <a href="#">sair</a>
      </header>
      <div className="sellerList">
        {sellers.map(({ id, nome, cnpj, idEmpresa, criadoEm }) =>
          <div className="seller">
            <ol hidden="">
              <li><strong>ID:</strong> {id}</li>
              <li><strong>Nome:</strong> {nome}</li>
              <li><strong>CNPJ:</strong> {cnpj}</li>
              <li><strong>ID da Empresa:</strong> {idEmpresa}</li>
              <li><strong>Criado em:</strong> {criadoEm}</li>
            </ol>
          </div>)}
        <Button colorScheme='teal' onClick={getData} className="get">Checar o GET</Button>
      </div>
    </div>
  )
}

async function getData() {
  const token = localStorage.getItem("token")
  const rs = await fetch('https://m2devadmin.softkuka.com.br/api/Vendedor', {
    method: "GET",
    headers: { Authorization: `Bearer ${token}` }
  })
    .then(response => response.json())
    .then(console.log)
    .catch(mistake => console.log('Error: ', mistake))

  return rs;

}

export default List