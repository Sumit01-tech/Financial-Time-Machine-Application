import { Box, Text, Flex } from '@chakra-ui/react';

const Footer = () => {
    return (
        <Box bg="teal.500" color="white" py={4} mt="auto">
            <Flex direction="column" align="center">
                <Text fontSize="sm">© {new Date().getFullYear()} Financial Time Machine</Text>
                <Text fontSize="xs">Built with ❤️ using React + Chakra UI</Text>
            </Flex>
        </Box>
    );
};

export default Footer;
