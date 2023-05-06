// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
// eslint-disable-next-line no-unused-vars
import { Box, Button, ButtonGroup, Text } from '@chakra-ui/react'

const Login = () => {

  const { login } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState("josney@softkuka.com.br");
  const [password, setPassword] = useState("123456");
  const [error, setError] = useState("");


  const handleLogin = async () => {

    if (!email | !password) { return setError("Preencha todos os campos"); }

    const res = await login(email, password);

    if (res) {

      navigate("/home");
      return;
    }

    setError("res error");
    console.log("handle login error: " + error)

  };

  return (
    <div className="container">
      <form /*onSubmit={sentData}*/ >
        <div className="inputContainer">
          <label htmlFor="email">E-mail</label>
          <input required type="email" name="email" id="email" placeholder="mateus.cacabuena@edu.pucrs.br" value={email} onChange={(e) => [setEmail(e.target.value), setError("")]} />
        </div>

        <div className="inputContainer">
          <label htmlFor="password">Password</label>
          <input required type="password" name="password" id="password" placeholder="************" value={password} onChange={(e) => [setPassword(e.target.value), setError("")]} />
        </div>

        <Button onClick={handleLogin} className="button">Login</Button>

        {/* <div className="footer">
        {(error) && <p  color="red" >Invalid e-mail or password</p>}
        </div> */}
        {(error) && <Text textAlign="center" color='red'>Invalid e-mail or password</Text>
        }
      </form>
    </div>
  )
}

export default Login