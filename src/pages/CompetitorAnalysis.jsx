import { Container, Text, VStack, Heading } from "@chakra-ui/react";

const CompetitorAnalysis = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Heading as="h1" size="2xl">Competitor Analysis</Heading>
        <Text fontSize="lg">Basic data representation for competitor analysis will be displayed here.</Text>
      </VStack>
    </Container>
  );
};

export default CompetitorAnalysis;