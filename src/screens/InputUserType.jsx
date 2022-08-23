import { Box, Flex, Select, Text, Textarea } from "@chakra-ui/react";
import CommonButton from "../common/CommonButton";
import TextInput from "../common/TextInput";
import { logo } from "../svg";

const InputUserType = ({ playGame, accountBal, getUserType, getUserGuess, isLoading, getContractDetails }) => {
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
            {accountBal} ALGO
          </Text>
        </Flex>
      </Flex>

      <Box mt="50px" fontSize="14px">
        <Text color="brand.white">Kindly fill the form to play game</Text>

        <Box w="30%" justifyContent="center" m="20px auto">
          <form>
            <TextInput
              label="Name"
              placeholder="Enter your first name"
              type="text"
              onChange={(e) => getUserType(e.target.value)}
            />
            <TextInput
              label="Enter guess"
              placeholder="Enter your guess"
              type="text"
              onChange={(e) => getUserGuess(e.target.value)}
            />

            <Textarea
                _focus={{ border: "0.5px solid #F58220" }}
                h="200px"
                w="100%"
                mt="20px"
                onChange={(e) => getContractDetails(e.target.value)}
                placeholder="Paste contract details"
                color="brand.dark"
                bg="white"
                border="1px solid #F58220"
              />
            <CommonButton
              w="100%"
              color="brand.dark"
              bg="brand.primary"
              mt="20px"
              hoverColor="brand.white"
              onClick={playGame}
              isLoading={isLoading}
            >
              Proceed
            </CommonButton>
          </form>
        </Box>
      </Box>
    </Box>
  );
};

export default InputUserType;
