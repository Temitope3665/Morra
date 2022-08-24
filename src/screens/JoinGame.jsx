import { Box, Flex, Select, Text } from "@chakra-ui/react";
import CommonButton from "../common/CommonButton";
import { logo } from "../svg";

const JoinGame = ({ handleSubmit, getHand, accountBal }) => {
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
                    <Text color="brand.primary" fontWeight="500" ml="10px">{accountBal} ALGO</Text>
                </Flex>
            </Flex>
            <Box mt="80px" w="35%" m="20px auto">
                <Box mt="50px" >
                    <Text color="brand.white" fontSize="20px" fontWeight="400">Play a finger</Text>
                    <Select placeholder='Play a finger' h="50px" bg="brand.white" w="60%" m="20px auto" onChange={(e) => getHand(e.target.value)}>
                        <option value="1">
                            <Text>👆🏼 Finger One</Text>
                        </option>
                        <option value="2">
                            <Text>✌🏻 Finger Two</Text>
                        </option>
                        <option value="3">
                            <Text>✌🏻 Finger Three</Text>
                        </option>
                        <option value="4">
                            <Text>✌🏻 Finger Four</Text>
                        </option>
                        <option value="5">
                            <Text>✌🏻 Finger Five</Text>
                        </option>
                        <option value="6">
                            <Text>✌🏻 Finger Six</Text>
                        </option>
                    </Select>
                </Box>
                <Text color="brand.white" mt="10px" fontSize="16px" fontWeight="400">
                    Other players will play their game and result will be displayed if there emerges a winner
                </Text>
                <CommonButton w="100%" mt="50px" bg="brand.primary" hoverColor="brand.white" onClick={handleSubmit}>Show Hand</CommonButton>
            </Box>
        </Box>
    );
};

export default JoinGame;