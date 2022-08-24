import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { logo } from "../svg";
import CommonButton from "../common/CommonButton";

const WinnerEmerges = ({
  getBalance, accountBal, displayNewBal, goHome, winnerName
}) => {
  const imgLink = "https://pngimg.com/uploads/confetti/confetti_PNG86957.png"
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
        <Flex alignItems="center" color="brand.white" cursor="pointer" onClick={goHome}>
          <Text color="brand.primary">Go Home </Text>
        </Flex>
      </Flex>

      <Image src={imgLink} alt="congrats" w="200px" m="0 auto" />
      <Box mt="40px">
        <Text color="brand.white" fontSize="20px" fontWeight="400" mt="20px">Result:</Text>
        <Text color="brand.primary" fontWeight="700" mt="20px">{winnerName}</Text>
      </Box>
      <CommonButton
              w="20%"
              color="brand.dark"
              bg="brand.white"
              mt="30px"
              hoverColor="brand.primary"
              onClick={getBalance}
            >
              Get Balance
            </CommonButton>
      {displayNewBal &&
        <Text color="brand.white" mt="20px">Your new balance is {accountBal}</Text>
      }
    </Box>
  );
};

export default WinnerEmerges;
