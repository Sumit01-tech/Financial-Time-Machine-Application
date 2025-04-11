import { Box, Heading, Text, VStack, Select, Button, useToast } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

const Advisor = () => {
    const [goal, setGoal] = useState('');
    const [suggestion, setSuggestion] = useState('');
    const toast = useToast();

    const advisorLogic = {
        "Save for a house": "Consider cutting down on non-essential spending and start a recurring deposit or SIP. Aim for a 20% down payment.",
        "Retire early": "Invest aggressively in mutual funds and stocks, maintain a diversified portfolio, and monitor your FIRE number.",
        "Pay off debt": "Target high-interest debts first. Use the snowball method and reduce unnecessary subscriptions.",
        "Travel more": "Set a travel fund budget and consider high-interest savings accounts for short-term goals.",
    };

    useEffect(() => {
        if (goal) {
            setSuggestion(advisorLogic[goal]);
        }
    }, [goal]);

    const handleAdvice = () => {
        if (goal) {
            toast({
                title: "Advice Generated",
                description: "Check the suggestion below for your financial goal.",
                status: "success",
                duration: 3000,
                isClosable: true,
            });
        }
    };

    return (
        <Box p={6}>
            <Heading mb={4}>AI Financial Advisor</Heading>
            <VStack spacing={6} align="stretch">
                <Select
                    placeholder="Select your goal"
                    value={goal}
                    onChange={(e) => setGoal(e.target.value)}
                >
                    <option value="Save for a house">Save for a house</option>
                    <option value="Retire early">Retire early</option>
                    <option value="Pay off debt">Pay off debt</option>
                    <option value="Travel more">Travel more</option>
                </Select>
                <Button colorScheme="teal" onClick={handleAdvice} isDisabled={!goal}>
                    Get Suggestion
                </Button>
                {suggestion && (
                    <Box p={4} bg="gray.50" borderRadius="md" shadow="md">
                        <Text fontWeight="bold">Suggestion:</Text>
                        <Text mt={2}>{suggestion}</Text>
                    </Box>
                )}
            </VStack>
        </Box>
    );
};

export default Advisor;
