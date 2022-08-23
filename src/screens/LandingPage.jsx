import { Box, Flex, Text } from "@chakra-ui/react";
import CommonButton from "../common/CommonButton";
import { logo } from "../svg";

const LandingPage = ({ handleConnect }) => {
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
                <CommonButton color="brand.white" bg="brand.primary">Play Now</CommonButton>
            </Flex>

            <Box mt="50px">
                <Flex alignItems="center" justifyContent="center" mb="-10px">
                    <Text mt="10px" mr="10px" color="brand.white" fontSize="60px">Play</Text>
                    <Text color="brand.primary" fontWeight="800" fontSize="90px">Morra Game</Text>
                </Flex>
                <Text color="brand.white" fontSize="65px" fontWeight="400">With us and Earn</Text>
            </Box>

            <Box mt="10px">
                <CommonButton bg="none" border="1px solid #F58220" color="brand.primary" onClick={handleConnect}>
                    Connect Wallet
                </CommonButton>
            </Box>
        </Box>
    );
};

export default LandingPage;