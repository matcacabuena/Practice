// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
// eslint-disable-next-line no-unused-vars
import { FaUserAlt, FaLock } from "react-icons/fa";
import { AiOutlineUser } from "react-icons/ai"
import {
  Flex,
  Heading,
  Input,
  Button,
  InputGroup,
  Stack,
  InputLeftElement,
  chakra,
  Box,
  Link,
  Avatar,
  AvatarBadge,
  AvatarGroup,
  FormControl,
  FormLabel,
  FormHelperText,
  InputRightElement
} from '@chakra-ui/react'

const CFaUserAlt = chakra(FaUserAlt);
const CFaLock = chakra(FaLock);
const CAiOutlineUser = chakra(AiOutlineUser)

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
    <Flex
      className="container"
      flexDirection="column"
      width="100wv"
      height="100vh"
      backgroundColor="gray.200"
      justifyContent="center"
      alignItems="center"
    >
      <Stack
        flexDir="column"
        mb="2"
        justifyContent="center"
        alignItems="center"
      >
        <Avatar bg="teal.500" icon={<AiOutlineUser fontSize='1.5rem' />}/>
        <Heading color="teal.400">Soft Kuka</Heading>
        <FormControl isRequired>
          <Stack
            spacing={5}
            p="2rem"
            backgroundColor="whiteAlpha.900"
            boxShadow="md"
          >
            <Box className="inputContainer" minW={{ base: "90%", md: "468px" }}>
              <FormLabel htmlFor="email">E-mail</FormLabel>
              <InputGroup>
                <InputLeftElement
                  pointerEvents="none"
                  children={<CFaUserAlt color="gray.300" />}
                />
                <Input required type="email" name="email" id="email" placeholder="mateus.cacabuena@edu.pucrs.br" value={email} onChange={(e) => [setEmail(e.target.value), setError("")]} />
              </InputGroup>
            </Box>

            <Box className="inputContainer">
              <FormLabel htmlFor="password">Password</FormLabel>
              <InputGroup>
                <InputLeftElement
                  pointerEvents="none"
                  color="gray.300"
                  children={<CFaLock color="gray.300" />}
                />
                <Input required type="password" name="password" id="password" placeholder="************" value={password} onChange={(e) => [setPassword(e.target.value), setError("")]} />
              </InputGroup>
            </Box>

            <Button onClick={handleLogin} className="button"
              borderRadius={0}
              type="submit"
              variant="solid"
              colorScheme="teal"
              width="full" >Login</Button>

            {(error) && <Text textAlign="center" color='red'>Invalid e-mail or password</Text>
            }
          </Stack>
        </FormControl>
      </Stack>
    </Flex>
  )
}

export default Login