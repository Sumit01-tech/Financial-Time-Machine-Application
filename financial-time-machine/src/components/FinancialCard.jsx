import { Box, Heading, Text, Stack } from '@chakra-ui/react';
import { memo } from 'react';

const FinancialCard = ({ title, description, data }) => {
    return (
        <Box
            borderWidth="1px"
            borderRadius="md"
            boxShadow="md"
            p={5}
            bg="white"
            _hover={{ boxShadow: 'xl' }}
        >
            <Stack spacing={3}>
                <Heading size="md">{title}</Heading>
                <Text fontSize="sm" color="gray.600">
                    {description}
                </Text>
                {data && (
                    <Box mt={2}>
                        {Object.entries(data).map(([key, value]) => (
                            <Text key={key}>
                                <strong>{key}:</strong> {value}
                            </Text>
                        ))}
                    </Box>
                )}
            </Stack>
        </Box>
    );
};

export default memo(FinancialCard);
