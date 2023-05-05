// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
// eslint-disable-next-line no-unused-vars
import { Button, ButtonGroup } from '@chakra-ui/react'

const Login = () => {

  const { login } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [senha, setPassword] = useState("");
  const [error, setError] = useState("");
  
  
   const handleLogin = async () => {
    
    if (!email | !senha) { return setError("Preencha todos os campos"); }
    
    const res = await login(email, senha);
    
    if (res) {
      
      navigate("/home");
      return;
    }
    
    setError("res error");
    console.log("handle login error: " + error)

  };

  return (
    <div className="container">
      <Button colorScheme='teal' onClick={getData} className="get" >Checar o GET</Button>
      <form /*onSubmit={sentData}*/ >
        <div className="inputContainer">
          <label htmlFor="email">E-mail</label>
          <input required type="email" name="email" id="email" placeholder="mateus.cacabuena@edu.pucrs.br" onChange={(e) => [setEmail(e.target.value), setError("")]} />
        </div>

        <div className="inputContainer">
          <label htmlFor="password">Password</label>
          <input required type="password" name="password" id="password" placeholder="************" onChange={(e) => [setPassword(e.target.value), setError("")]} />
        </div>

        <Button onClick={handleLogin} className="button">Login</Button>

        <div className="footer">
        {(error) && <p color="red" >Invalid e-mail or password</p>}
        </div>
      </form>
    </div>
  )
}

/**
 * O QUE DESCOBRI:
 * Com o login certo do Josney, ele me retorna a lista de clientes
 * Com o login errado (Ou seja, qualquer outro), da erro
 * O que quero fazer:
 * Caso o Login dê certo (Josney logou corretamente), leva ele para a tela de listagem
 * Caso o Login dê errado, mostra que usuário ou senha estão incorretos
 */

// async = deixa a função assíncrona, assim, ela espera cada execução acabar para realizar outra
async function sentData(e) {
  e.preventDefault()
  const fields = e.target.elements
  const email = fields.email.value
  const password = fields.password.value
  //await = ele espera o fetch executar e depois imprimir o console log
  const rs = await fetch('https://m2devadmin.softkuka.com.br/api/Login', {
    method: "POST",
    body: JSON.stringify({
      email,
      pwd: password
    }),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then(response => response.json())

  const token = rs.token
  localStorage.setItem("token", token)

  /*
  const { token, user:{
     ativo, email: userEmail, id, idCliente, idEmpresa, idLoginTipo, nome
  } } = rs
  
  console.log(token)
  console.log(ativo)
  console.log(userEmail)
  console.log(id)
  console.log(idCliente)
  console.log(idEmpresa)
  console.log(idLoginTipo)
  console.log(nome)*/
}

function getData() {
  const token = localStorage.getItem("token")
  fetch('https://m2devadmin.softkuka.com.br/api/Vendedor', {
    method: "GET",
    headers: { Authorization: `Bearer ${token}` }
  })
    .then(response => response.json())
    .then(console.log)
    .catch(mistake => console.log('Error: ', mistake))


}

export default Login