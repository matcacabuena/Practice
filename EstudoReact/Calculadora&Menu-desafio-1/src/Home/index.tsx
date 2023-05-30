import React from 'react';
import {
  Flex,
  Text,
  Link,
  Tab,
  Button,
  Tabs,
  TabList,
  TabPanels,
  TabPanel,
  TabIndicator,
  Heading,
} from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons'
import { FaBeer } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { 
  goToCalculadora,
  goToGitFind } from '../routes/coordinator';
function Home() {
    const navigate = useNavigate();
  return (

      <Flex bgColor="gray.200" w="100vw" h="100vh" justifyContent="center">
        <Flex direction="column" textAlign="center">
          <Heading m={4} color="teal.500">
            Welcome to the challenges list
          </Heading>
          <Flex justifyContent="center" alignItems="center" flex={1} h="20%">
            <Tabs
              bgColor="white"
              boxSize="lg"
              p={2}
              borderRadius="lg"
              position="relative"
              variant="unstyled"
            >
              <TabList display="flex">
                <Tab flexGrow={1}>Calculadora</Tab>
                <Tab flexGrow={1}>GitFind</Tab>
                <Tab flexGrow={1}>Desafio3</Tab>
              </TabList>
              <TabIndicator
                mt="-1.5px"
                height="2px"
                bg="teal.500"
                borderRadius="1px"
              />
              <TabPanels>
                <TabPanel>
                  <p>Este desafio consiste em pegar um calculadora que já está montada previamente e completá-la, implementando as funcionalidades de multiplicação e divisão dela.</p>
                  <Button onClick={() => goToCalculadora(navigate)} rightIcon={<ArrowForwardIcon />} colorScheme='teal' variant='solid'>
                    Leve-me até lá
                  </Button>
                </TabPanel>
                <TabPanel>
                  <p>two!</p>
                  <Button onClick={() => goToGitFind(navigate)} rightIcon={<ArrowForwardIcon />} colorScheme='teal' variant='solid'>
                    Leve-me até lá
                  </Button>
                </TabPanel>
                <TabPanel>
                  <p>three!</p>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </Flex>
        </Flex>
      </Flex>
  );
}

export default Home;