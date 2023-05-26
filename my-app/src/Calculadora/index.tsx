import {
    ChakraProvider,
    Box,
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
    theme,
    Heading,
    Container,
    Input,
    Stack,
} from '@chakra-ui/react';
import { goToHome } from '../routes/coordinator';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
function Calculadora() {
    const [currentNumber, setCurrentNumber] = useState('0');
    const [firstNumber, setFirstNumber] = useState('0');
    const [operation, setOperation] = useState('');
    const navigate = useNavigate();
    const handleOnClear = () => {
        setCurrentNumber('0')
        setFirstNumber('0')
        setOperation('')
    };

    const handleAddNumber = (num: Number) => {
        setCurrentNumber(prev => `${prev === '0' ? '' : prev}${num}`)
    }

    const handleSumNumbers = () => {

        if (firstNumber === '0') {
            setFirstNumber(String(currentNumber));
            setCurrentNumber('0')
            setOperation('+')
        } else {
            const sum = Number(firstNumber) + Number(currentNumber);
            setCurrentNumber(String(sum))
            setOperation('')
        }

    }

    const handleMinusNumbers = () => {

        if (firstNumber === '0') {
            setFirstNumber(String(currentNumber));
            setCurrentNumber('0')
            setOperation('-')
        } else {
            const sum = Number(firstNumber) - Number(currentNumber);
            setCurrentNumber(String(sum))
            setOperation('')
        }

    }

    const handleEquals = () => {

        if (firstNumber !== '0' && operation !== '' && currentNumber !== '0') {
            switch (operation) {
                case '+':
                    handleSumNumbers();
                    break;
                case '-':
                    handleMinusNumbers();
                    break;
                default:
                    break;
            }
        }

    }

    return (
        <Flex
            w='100vw'
            h='100vh'
            bgColor="gray.200"
            alignItems={"center"}
            flexDirection={"column"}
            justifyContent={"center"}
        >
            <Heading>Calculadora</Heading>
            <Flex direction="column" textAlign="center">
                
                <Flex
                    flexDirection={"column"}
                    bgColor={"teal.500"}
                    alignItems={"center"}
                    borderRadius={"lg"}
                    p={4}
                >
                    <Input color={'teal'} bgColor={"white"} value={currentNumber} />
                    <Stack mt={3} spacing={4} direction='row' align='center' >
                        <Button w={'60px'} h={'48px'} bgColor='white' colorScheme='teal' variant='outline' onClick={() => handleAddNumber(1)}>1</Button>
                        <Button w={'60px'} h={'48px'} bgColor='white' colorScheme='teal' variant='outline' onClick={() => handleAddNumber(2)}>2</Button>
                        <Button w={'60px'} h={'48px'} bgColor='white' colorScheme='teal' variant='outline' onClick={() => handleAddNumber(3)}>3</Button>
                        <Button w={'60px'} h={'48px'} bgColor='white' colorScheme='teal' variant='outline' onClick={handleOnClear}>AC</Button>
                    </Stack>
                    <Stack mt={1} spacing={4} direction='row' align='center'>
                        <Button w={'60px'} h={'48px'} bgColor='white' colorScheme='teal' variant='outline' onClick={() => handleAddNumber(4)}>4</Button>
                        <Button w={'60px'} h={'48px'} bgColor='white' colorScheme='teal' variant='outline' onClick={() => handleAddNumber(5)}>5</Button>
                        <Button w={'60px'} h={'48px'} bgColor='white' colorScheme='teal' variant='outline' onClick={() => handleAddNumber(6)}>6</Button>
                        <Button w={'60px'} h={'48px'} bgColor='white' colorScheme='teal' variant='outline' onClick={handleSumNumbers}>+</Button>
                    </Stack>
                    <Stack mt={1} spacing={4} direction='row' align='center'>
                        <Button w={'60px'} h={'48px'} bgColor='white' colorScheme='teal' variant='outline' onClick={() => handleAddNumber(7)}>7</Button>
                        <Button w={'60px'} h={'48px'} bgColor='white' colorScheme='teal' variant='outline' onClick={() => handleAddNumber(8)}>8</Button>
                        <Button w={'60px'} h={'48px'} bgColor='white' colorScheme='teal' variant='outline' onClick={() => handleAddNumber(9)}>9</Button>
                        <Button w={'60px'} h={'48px'} bgColor='white' colorScheme='teal' variant='outline' onClick={handleMinusNumbers}>-</Button>
                    </Stack>
                    <Stack mt={1} spacing={4} direction='row' align='center'>
                        <Button w={'60px'} h={'48px'} bgColor={'white'} colorScheme='teal' variant='outline'>x</Button>
                        <Button w={'60px'} h={'48px'} bgColor='white' colorScheme='teal' variant='outline'>/</Button>
                        <Button w={'60px'} h={'48px'} bgColor='white' colorScheme='teal' variant='outline' onClick={handleEquals}>=</Button>
                        <Button w={'60px'} h={'48px'} bgColor='white' colorScheme='teal' variant='outline'>.</Button>
                    </Stack>
                </Flex>
                <Button mt={5} colorScheme='teal' variant='solid' onClick={() => goToHome(navigate)} >
                    Voltar
                </Button>
            </Flex>
        </Flex>

    );
}

export default Calculadora;

