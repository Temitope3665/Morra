import { Box, Flex, Select, Text } from "@chakra-ui/react";
import CommonButton from "../common/CommonButton";
import TextInput from "../common/TextInput";
import { logo } from "../svg";

const CreateGame = ({
  handleCreateGame,
  accountBal,
  getStakePrice,
  getGuessNumber,
  isLoading,
  getHand
}) => {
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

      <Box mt="50px">
        <Text color="brand.white">Fill in the form to create your game</Text>

        <Box w="30%" justifyContent="center" m="20px auto">
          <form>
            <TextInput
              label="Enter Guess"
              placeholder="Enter your guess here"
              type="number"
              onChange={(e) => getGuessNumber(e.target.value)}
            />
            <TextInput
              label="Stake Price"
              placeholder="Enter your stake price"
              type="number"
              onChange={(e) => getStakePrice(e.target.value)}
            />
                <Box mt="20px">
              <Text color="brand.white" fontSize="20px" fontWeight="400">
                Play a finger
              </Text>
              <Select
                placeholder="Play a finger"
                h="50px"
                bg="brand.white"
                w="60%"
                m="20px auto"
                onChange={(e) => getHand(e.target.value)}
              >
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
            <CommonButton
              w="100%"
              color="brand.dark"
              bg="brand.primary"
              mt="20px"
              hoverColor="brand.white"
              onClick={handleCreateGame}
              isLoading={isLoading}
            >
              Create Game
            </CommonButton>
          </form>
        </Box>
      </Box>
    </Box>
  );
};

export default CreateGame;
