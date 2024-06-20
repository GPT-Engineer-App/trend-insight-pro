import { Container, Text, VStack, Heading } from "@chakra-ui/react";

const Dashboard = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Heading as="h1" size="2xl">Dashboard</Heading>
        <Text fontSize="lg">Welcome to your AI-Driven Product Research Dashboard.</Text>
      </VStack>
    </Container>
  );
};

export default Dashboard;