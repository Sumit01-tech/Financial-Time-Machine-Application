import { Box, Heading, Text, VStack, SimpleGrid } from '@chakra-ui/react';
import FinancialCard from '../components/FinancialCard';
import { useMemo } from 'react';

const Analytics = () => {
    // Simulated data processing using useMemo
    const spendingAnalysis = useMemo(() => {
        return {
            "Food": "₹5,000",
            "Transport": "₹2,000",
            "Entertainment": "₹1,500",
            "Rent": "₹10,000",
            "Savings": "₹8,000"
        };
    }, []);

    const impactHistory = useMemo(() => {
        return {
            "Invested in SIP (2022)": "+₹15,000 gain",
            "Bought new phone (2023)": "-₹30,000",
            "Switched job (2024)": "+₹1,20,000 yearly increment"
        };
    }, []);

    return (
        <Box p={6}>
            <Heading mb={4}>Behavior-Based Analytics & Past Decision Impact</Heading>
            <VStack spacing={6} align="stretch">
                <SimpleGrid columns={[1, 2]} spacing={6}>
                    <FinancialCard
                        title="Your Spending Pattern"
                        description="Here's a breakdown of where your money goes."
                        data={spendingAnalysis}
                    />
                    <FinancialCard
                        title="Impact of Past Decisions"
                        description="See how your key choices have impacted your finances."
                        data={impactHistory}
                    />
                </SimpleGrid>
                <Text color="gray.500" fontSize="sm">
                    * This is simulated data for demonstration. Add calculations or real input logic as needed.
                </Text>
            </VStack>
        </Box>
    );
};

export default Analytics;
