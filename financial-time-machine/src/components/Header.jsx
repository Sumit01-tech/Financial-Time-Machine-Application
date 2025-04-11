import { Flex, Link, Image, Box } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';
import Logo from '../assets/financial-logo.png';

const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/scenarios', label: 'Scenarios' },
    { path: '/analytics', label: 'Analytics' },
    { path: '/advisor', label: 'AI Advisor' },
];

const Header = () => {
    const logoSize = { base: '45px', md: '55px' };

    return (
        <Flex
            as="nav"
            p="4"
            bg="teal.500"
            color="white"
            align="center"
            justify="space-between"
            px={{ base: 4, md: 12 }}
        >
            {/* Left: Logo */}
            <Link as={NavLink} to="/" _hover={{ textDecoration: 'none' }}>
                <Image
                    src={Logo}
                    alt="Financial Time Machine"
                    boxSize={logoSize}
                    objectFit="contain"
                />
            </Link>

            {/* Center: Nav Links */}
            <Flex flex="1" justify="center" gap={{ base: 3, md: 6 }}>
                {navLinks.map(({ path, label }) => (
                    <Link
                        key={path}
                        as={NavLink}
                        to={path}
                        px="3"
                        py="2"
                        fontWeight="bold"
                        _hover={{ textDecoration: 'none', color: 'teal.200' }}
                        _activeLink={{
                            color: 'yellow.300',
                            borderBottom: '2px solid white',
                        }}
                    >
                        {label}
                    </Link>
                ))}
            </Flex>

            {/* Right: Spacer box to balance logo */}
            <Box w={logoSize} />
        </Flex>
    );
};

export default Header;
