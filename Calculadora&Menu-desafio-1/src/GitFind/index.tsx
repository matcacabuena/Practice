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
} from '@chakra-ui/react';
import { goToHome } from '../routes/coordinator';
import { useNavigate } from 'react-router-dom';
function GitFind() {
    const navigate = useNavigate();
    return (
        <Flex>
            <Heading>Esta é a tela do GitFind</Heading>
            <Button colorScheme='teal' variant='solid' onClick={() => goToHome(navigate)} >
                Voltar
            </Button>
        </Flex>
    )
}

export default GitFind;