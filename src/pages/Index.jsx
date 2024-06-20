import { Container, Text, VStack, Heading, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Heading as="h1" size="2xl">AI-Driven Product Research Tool</Heading>
        <Text fontSize="lg">Empowering your e-commerce business with AI insights.</Text>
        <Button as={Link} to="/dashboard" colorScheme="teal" size="lg">Go to Dashboard</Button>
      </VStack>
    </Container>
  );
};

export default Index;