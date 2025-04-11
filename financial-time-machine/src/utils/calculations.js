export const calculateFutureSavings = (monthlySaving, years, rate) => {
    const months = years * 12;
    const futureValue = monthlySaving * (((1 + rate / 12) ** months - 1) / (rate / 12));
    return futureValue.toFixed(2);
};
