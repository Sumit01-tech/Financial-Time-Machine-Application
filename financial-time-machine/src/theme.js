import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
    fonts: {
        heading: `'Segoe UI', sans-serif`,
        body: `'Roboto', sans-serif`,
    },
    colors: {
        brand: {
            100: "#f7fafc",
            900: "#1a202c",
        },
    },
});

export default theme;
