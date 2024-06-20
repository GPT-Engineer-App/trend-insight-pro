import { Container, Text, VStack, Heading } from "@chakra-ui/react";

const ConsumerSentiment = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Heading as="h1" size="2xl">Consumer Sentiment Analysis</Heading>
        <Text fontSize="lg">Basic data representation for consumer sentiment analysis will be displayed here.</Text>
      </VStack>
    </Container>
  );
};

export default ConsumerSentiment;