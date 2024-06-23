import { Container, Text, VStack, Heading, Button, Box, Spinner } from "@chakra-ui/react";
import { useState } from 'react';
import { fetchTweets, analyzeSentiment } from '../api/twitter';

const ConsumerSentiment = () => {
  const [tweets, setTweets] = useState([]);
  const [sentimentResults, setSentimentResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleFetchAndAnalyzeTweets = async () => {
    setLoading(true);
    setError('');
    try {
      const fetchedTweets = await fetchTweets('your-query-here');
      const analyzedTweets = analyzeSentiment(fetchedTweets);
      setTweets(fetchedTweets);
      setSentimentResults(analyzedTweets);
    } catch (error) {
      console.error('Error fetching and analyzing tweets:', error);
      setError('Failed to fetch and analyze tweets. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Heading as="h1" size="2xl">Consumer Sentiment Analysis</Heading>
        <Text fontSize="lg">Basic data representation for consumer sentiment analysis will be displayed here.</Text>
        <Button onClick={handleFetchAndAnalyzeTweets} colorScheme="teal" size="lg" isLoading={loading}>Fetch and Analyze Tweets</Button>
        {error && <Text color="red.500">{error}</Text>}
        {sentimentResults.map((tweet, index) => (
          <Box key={index} p={4} shadow="md" borderWidth="1px">
            <Text>{tweet.text}</Text>
            <Text>Sentiment: {tweet.sentiment}</Text>
          </Box>
        ))}
      </VStack>
    </Container>
  );
};

export default ConsumerSentiment;