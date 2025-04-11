import {
    Box,
    Heading,
    Text,
    Select,
    Input,
    Button,
    VStack,
    HStack,
} from "@chakra-ui/react";
import { useState, useMemo } from "react";
import FinancialProjectionChart from "../components/FinancialProjectionChart";

const Scenarios = () => {
    const [scenario, setScenario] = useState("");
    const [amount, setAmount] = useState("");
    const [result, setResult] = useState(null);

    const handleCalculate = () => {
        let projected = 0;

        switch (scenario) {
            case "careerChange":
                projected = Number(amount) + 20000;
                break;
            case "investment":
                projected = Number(amount) * 1.2;
                break;
            case "bigPurchase":
                projected = Number(amount) - 15000;
                break;
            default:
                projected = 0;
        }

        setResult(projected);
    };

    // Generate projection data from result
    const projectionData = useMemo(() => {
        if (!result) return [];

        const startYear = new Date().getFullYear();
        return new Array(4).fill(null).map((_, i) => ({
            year: startYear + i,
            savings: result * Math.pow(1.05, i), // assume 5% growth annually
        }));
    }, [result]);

    return (
        <Box p={8}>
            <Heading mb={4}>What-If Scenarios</Heading>
            <Text mb={6}>
                Explore how different financial decisions could impact your future.
            </Text>

            <VStack spacing={4} align="start">
                <Select
                    placeholder="Select Scenario"
                    value={scenario}
                    onChange={(e) => setScenario(e.target.value)}
                >
                    <option value="careerChange">Career Change</option>
                    <option value="investment">Investment</option>
                    <option value="bigPurchase">Big Purchase</option>
                </Select>

                <Input
                    placeholder="Enter Amount"
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                />

                <Button colorScheme="teal" onClick={handleCalculate}>
                    Project Outcome
                </Button>

                {result !== null && (
                    <HStack>
                        <Text fontWeight="bold">Projected Outcome:</Text>
                        <Text>${result.toFixed(2)}</Text>
                    </HStack>
                )}
            </VStack>

            {projectionData.length > 0 && (
                <FinancialProjectionChart data={projectionData} />
            )}
        </Box>
    );
};

export default Scenarios;
