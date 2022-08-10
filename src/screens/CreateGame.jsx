import { Box, Flex, Text } from "@chakra-ui/react";
import CommonButton from "../common/CommonButton";
import TextInput from "../common/TextInput";
import { logo } from "../svg";

const CreateGame = ({ handleCreateGame }) => {
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

            <Box mt="50px">
                <Text color="brand.white">Fill in the form to create your game</Text>

                <Box w="30%" justifyContent="center" m="20px auto">
                    <form>
                    <TextInput label="Name" placeholder="Enter your first name" type="text" />
                    <TextInput label="Stake Price" placeholder="Enter your stake price" type="text" />
                    <CommonButton w="100%" color="brand.dark" bg="brand.primary" mt="20px" hoverColor="brand.white" onClick={handleCreateGame}>Create Game</CommonButton>
                    </form>
                </Box>
            </Box>
        </Box>
    );
};

export default CreateGame;