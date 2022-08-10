import { Box, Button, Flex, Text } from "@chakra-ui/react";
import { logo } from "../svg";

const DisplayGameID = ({ playGame }) => {
  return (
    <Box>
      <Flex justifyContent="space-between" alignItems="center" px="50px">
        <Flex alignItems="center" fontSize="18px">
          <Box mr="100px" cursor="pointer">
            {logo}
          </Box>
          <Flex cursor="pointer" color="brand.white">
            <Text>About</Text>
            <Text ml="40px">Support</Text>
          </Flex>
        </Flex>
        <Flex alignItems="center" color="brand.white">
          <Text>Current Bal: </Text>
          <Text color="brand.primary" fontWeight="500" ml="10px">
            100ETH
          </Text>
        </Flex>
      </Flex>

      <Box mt="50px" w="30%" m="20px auto">
        <Text color="brand.white">You’re the only one here</Text>
        <Text color="brand.primary">
          Share this unique ID with others that you want to play the game with
        </Text>
        <Box
          w="100%"
          bg="rgba(190, 135, 135, 0.58)"
          borderRadius="8px"
          mt="20px"
        >
          <Text fontSize="20px" color="brand.white" mt="10px" py="40px">
            367722IHYD89932
          </Text>
        </Box>
      </Box>

      <Button
        mt="20px"
        fontSize="20px"
        color="brand.dark"
        _hover={{ color: "brand.primary" }}
        cursor="pointer"
        fontWeight="400"
        onClick={playGame}
      >
        Start Game
      </Button>
    </Box>
  );
};

export default DisplayGameID;
