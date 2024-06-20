import { Container, Text, VStack, Heading } from "@chakra-ui/react";

const About = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Heading as="h1" size="2xl">About Us</Heading>
        <Text fontSize="lg">Learn more about our AI-Driven Product Research Tool and how it can help your business.</Text>
      </VStack>
    </Container>
  );
};

export default About;