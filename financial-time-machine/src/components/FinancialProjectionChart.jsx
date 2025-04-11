import { Box } from "@chakra-ui/react";
import { Line } from "react-chartjs-2";
import {
    Chart as ChartJS,
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
    Tooltip,
    Legend,
} from "chart.js";

// Register chart.js components
ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend);

const FinancialProjectionChart = ({ data }) => {
    if (!data || data.length === 0) return null;

    const labels = data.map((item) => item.year);
    const savings = data.map((item) => item.savings);

    const chartData = {
        labels,
        datasets: [
            {
                label: "Projected Savings",
                data: savings,
                fill: false,
                borderColor: "teal",
                tension: 0.3,
                pointBackgroundColor: "teal",
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: "top",
                labels: {
                    color: "#2D3748",
                },
            },
        },
        scales: {
            x: {
                ticks: {
                    color: "#4A5568",
                },
            },
            y: {
                ticks: {
                    color: "#4A5568",
                },
            },
        },
    };

    return (
        <Box mt={6} p={4} bg="white" borderRadius="md" boxShadow="md">
            <Line data={chartData} options={options} />
        </Box>
    );
};

export default FinancialProjectionChart;
