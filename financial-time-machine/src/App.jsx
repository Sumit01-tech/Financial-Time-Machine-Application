import { ChakraProvider, Box } from '@chakra-ui/react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Scenarios from './pages/Scenarios';
import Analytics from './pages/Analytics';
import Advisor from './pages/Advisor';
import NotFound from './pages/NotFound';

function App() {
  return (
    <ChakraProvider>
      <Box minHeight="100vh" display="flex" flexDirection="column">
        <Header />
        <Box flex="1" p={4}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/scenarios" element={<Scenarios />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/advisor" element={<Advisor />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Box>
        <Footer />
      </Box>
    </ChakraProvider>
  );
}

export default App;
