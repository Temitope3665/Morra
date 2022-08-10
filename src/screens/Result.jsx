import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { logo } from "../svg";
import congratsIcon from '../images/congratsIcon.svg';

const Result = ({ goHome }) => {
    return (
        <Box>
            <Flex justifyContent="space-between" alignItems="center" px="50px">
                <Flex alignItems="center" fontSize="18px">
                    <Box mr="100px" cursor="pointer">{logo}</Box>
                    <Flex cursor="pointer" color="brand.white">
                        <Text>About</Text>
                        <Text ml="40px">Support</Text>
                    </Flex>
                </Flex>
                <Flex alignItems="center" color="brand.white">
                    <Text>Current Bal: </Text>
                    <Text color="brand.primary" fontWeight="500" ml="10px">100ETH</Text>
                </Flex>
            </Flex>
            <Box mt="80px" w="35%" m="20px auto">
                <Image src={congratsIcon} alt="congrats" m="0 auto" />
                <Text color="brand.white" fontSize="20px" fontWeight="400" mt="20px">Result:</Text>
                <Text color="brand.primary" fontWeight="700">Alice Won!</Text>
                <Box bg="brand.white" p="20px 5px" borderRadius="8px" fontSize="16px" mt="15px">
                    <Text>RESULT BOARD</Text>
                    <Flex color="brand.dark" justifyContent="space-around" mt="20px">
                        <Text>Player</Text>
                        <Text>Guess</Text>
                        <Text>Hand</Text>
                    </Flex>
                    <Flex color="brand.primary" justifyContent="space-around" mt="20px">
                        <Text>Bob</Text>
                        <Text>12</Text>
                        <Text>5</Text>
                    </Flex>
                    <Flex color="brand.primary" justifyContent="space-around" mt="20px">
                        <Text>Alice</Text>
                        <Text>10</Text>
                        <Text>2</Text>
                    </Flex>
                    <Flex color="brand.primary" justifyContent="space-around" mt="20px">
                        <Text>Jeff</Text>
                        <Text>3</Text>
                        <Text>1</Text>
                    </Flex>
                </Box>

                <Text cursor="pointer" color="brand.white" fontSize="16px" mt="20px" onClick={goHome}>Go Home</Text>
            </Box>
        </Box>
    );
};

export default Result;