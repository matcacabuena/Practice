/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import cnpjMask from "./cnpjMask"
import {
  Flex,
  Box,
  Center,
  FormControl,
  Input,
  FormLabel,
  HStack,
  RadioGroup,
  Radio,
  Button,
  FormErrorMessage,
  FormHelperText,
} from "@chakra-ui/react";



const AddSeller = () => {

  const navigate = useNavigate();

  const date = new Date()

  let dateText = date.toISOString()

  const { addSeller } = useAuth();

  const [name, setName] = useState("");

  const [cnpj, setCnpj] = useState("");

  const [businessId, setBusinessId] = useState("");

  const [error, setError] = useState("");

  const isErrorName = name === ''

  const isErrorCnpj = cnpj === '' 

  const isErrorBusinessId = businessId === ''

  const handleAddSeller = async () => {
    if(name === '' || cnpj == '' || businessId === '') {
      console.log('Empty input error')
      return;
    }

    if (businessId != 1 || cnpj.length < 14 ) {
      console.log(businessId)
      console.log(cnpj.length)
      console.log('Input mismatch error')
      return;
    }

    const res = await addSeller(name, cnpj, businessId, dateText, dateText);
    console.log(res)
    if (res) {

      console.log('adicionado com sucesso')
      return;
    }

  };

  return (
    <Box h="100vh">
      <Center
        as="header"
        h={150}
        bg="teal"
        color="white"
        fontWeight="bold"
        fontSize="4xl"
        pb="8"
      >
        Add Seller
      </Center>
      <Flex
        align="center"
        justify="center"
        bg="gray.200"
        h="calc(100vh - 150px)"
      >
        <Center
          w="100%"
          maxW={840}
          bg="white"
          top={100}
          position="absolute"
          borderRadius={5}
          p="6"
          boxShadow="0 1px 2px #ccc"
        >
          <FormControl display="flex" flexDir="column" gap="4">
            <HStack spacing="4">
              <Box w="100%">
                <FormControl isInvalid={isErrorName} >
                  <FormLabel htmlFor="nome">Full Name</FormLabel>
                  <Input placeholder="Mateus Caçabuena" value={name} onChange={(e) => [setName(e.target.value), setError("")]} id="nome" required />
                  {!isErrorName ? (
                    <FormHelperText>
                      Enter the name you'd like to add
                    </FormHelperText>
                  ) : (
                    <FormErrorMessage>Name is required.</FormErrorMessage>
                  )}
                </FormControl>
              </Box>
            </HStack>
            <HStack spacing="4">
              <Box w="100%">
                <FormControl isInvalid={isErrorCnpj}>
                  <FormLabel htmlFor="cnpj">CNPJ</FormLabel>
                  <Input minLength={18} maxLength={18} placeholder="12.345.678/0001-00" value={cnpjMask(cnpj)} onChange={(e) => [setCnpj(e.target.value), setError("")]} id="cnpj" />
                {!isErrorName ? (
                  <FormHelperText>
                    Enter the cnpj you'd like to add
                  </FormHelperText>
                ) : (
                  <FormErrorMessage>CNPJ is required and must have 14 numbers</FormErrorMessage>
                )}
              </FormControl>
            </Box>
          </HStack>
          <HStack spacing="4">
            <Box w="100%">
              <FormControl isInvalid={isErrorBusinessId}>
              <FormLabel htmlFor="businessId">Business Id</FormLabel>
              <Input placeholder="1" value={businessId} onChange={(e) => [setBusinessId(e.target.value), setError("")]} id="businessId" type="number" />
              {!isErrorBusinessId ? (
                  <FormHelperText>
                    Enter the business ID you'd like to add
                  </FormHelperText>
                ) : (
                  <FormErrorMessage>Business ID is required</FormErrorMessage>
                )}
              </FormControl>
            </Box>
          </HStack>
          <HStack spacing="4">
            <Box w="100%">
              <FormLabel>Gender</FormLabel>
              <RadioGroup defaultValue="Male">
                <HStack spacing="24px">
                  <Radio value="Male">Male</Radio>
                  <Radio value="Female">Female</Radio>
                  <Radio value="Other">Other</Radio>
                </HStack>
              </RadioGroup>
            </Box>
          </HStack>
          <HStack justify="center">
            <Button
              onClick={handleAddSeller}
              w={240}
              p="6"
              bg="teal"
              color="white"
              fontWeight="bold"
              fontSize="xl"
              mt="2"
              _hover={{ bg: "teal.800" }}
            >
              Create
            </Button>
          </HStack>
        </FormControl>
      </Center>
    </Flex>
    </Box >
  );
}

export default AddSeller;