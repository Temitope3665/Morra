import { Box, Flex, Select, Text } from "@chakra-ui/react";
import CommonButton from "../common/CommonButton";
import TextInput from "../common/TextInput";
import { logo } from "../svg";

const JoinGame = ({ handleSubmit }) => {
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
                <Text color="brand.white" fontSize="26px" fontWeight="400">Enter your guess</Text>
                <TextInput type="number" h="50px" w="60%" />
                <Box mt="50px" >
                    <Text color="brand.white" fontSize="26px" fontWeight="400">Play a finger</Text>
                    <Select placeholder='Play a finger' h="50px" bg="brand.white" w="60%" m="20px auto">
                        <option>
                            <Text>👆🏼 Finger One</Text>
                        </option>
                        <option>
                            <Text>✌🏻 Finger Two</Text>
                        </option>
                        <option>
                            <Text>✌🏻 Finger Three</Text>
                        </option>
                        <option>
                            <Text>✌🏻 Finger Four</Text>
                        </option>
                        <option>
                            <Text>✌🏻 Finger Five</Text>
                        </option>
                    </Select>
                </Box>
                <CommonButton w="100%" mt="50px" bg="brand.primary" hoverColor="brand.white" onClick={handleSubmit}>Show Hand</CommonButton>
            </Box>
        </Box>
    );
};

export default JoinGame;