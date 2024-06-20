import { Box, Flex, Link, Button } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Navbar = () => {
  return (
    <Box bg="teal.500" px={4}>
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <Box>
          <Link as={RouterLink} to="/" color="white" fontSize="xl" fontWeight="bold">AI Product Research</Link>
        </Box>
        <Flex alignItems="center">
          <Link as={RouterLink} to="/about" color="white" mx={2}>About</Link>
          <Link as={RouterLink} to="/contact" color="white" mx={2}>Contact</Link>
          <Link as={RouterLink} to="/trend-analysis" color="white" mx={2}>Trend Analysis</Link>
          <Link as={RouterLink} to="/competitor-analysis" color="white" mx={2}>Competitor Analysis</Link>
          <Link as={RouterLink} to="/consumer-sentiment" color="white" mx={2}>Consumer Sentiment</Link>
          <Button as={RouterLink} to="/dashboard" colorScheme="teal" variant="outline" mx={2}>Dashboard</Button>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;