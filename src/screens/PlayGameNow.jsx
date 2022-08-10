import { Box, Flex, FormLabel, Text, Textarea } from "@chakra-ui/react";
import CommonButton from "../common/CommonButton";
import { logo } from "../svg";

const PlayGameNow = ({ handleJoinGame }) => {
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
                <Text color="brand.white" fontSize="65px" fontWeight="400">Play Game Now!</Text>

                <Box mt="20px">
                    <FormLabel color="brand.white">Enter unique contract digit</FormLabel>
                    <Textarea bg="brand.white" h="150px" placeholder="Input the contract digit" />
                </Box>

                <Text color="brand.white" fontWeight="16px" mt="20px">Do you accept a wager of 10ETH</Text>
                <Flex justifyContent="center" mt="20px">
                    <CommonButton mr="20px" fontWeight="20px" bg="brand.primary" hoverColor="brand.white" w="70px">YES</CommonButton>
                    <CommonButton w="70px" fontWeight="20px" bg="none" color="brand.primary" hoverColor="brand.white" border="1px solid #F7941E">NO</CommonButton>
                </Flex>
                <CommonButton w="100%" mt="50px" bg="brand.primary" hoverColor="brand.white" onClick={handleJoinGame}>Join Game</CommonButton>
            </Box>
        </Box>
    );
};

export default PlayGameNow;