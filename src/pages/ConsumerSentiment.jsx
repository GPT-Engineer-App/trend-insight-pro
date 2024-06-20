import { useState } from "react";
import { Container, Text, VStack, Heading, Button, Input } from "@chakra-ui/react";

const ConsumerSentiment = () => {
  const [tweets, setTweets] = useState([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchTweets = async () => {
    setLoading(true);
    try {
      const response = await fetch(`/api/twitter-search?query=${query}`);
      const data = await response.json();
      setTweets(data.statuses);
    } catch (error) {
      console.error("Error fetching tweets:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Heading as="h1" size="2xl">Consumer Sentiment Analysis</Heading>
        <Text fontSize="lg">Enter a keyword to analyze consumer sentiment from Twitter.</Text>
        <Input placeholder="Enter keyword" value={query} onChange={(e) => setQuery(e.target.value)} />
        <Button onClick={fetchTweets} colorScheme="teal" isLoading={loading}>Fetch Tweets</Button>
        {tweets.length > 0 && (
          <VStack spacing={2} mt={4}>
            {tweets.map((tweet, index) => (
              <Text key={index} fontSize="md">{tweet.text}</Text>
            ))}
          </VStack>
        )}
      </VStack>
    </Container>
  );
};

export default ConsumerSentiment;