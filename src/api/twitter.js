import { TwitterApi } from 'twitter-api-v2';

// Initialize Twitter client with bearer token
const client = new TwitterApi('1803801138292015104CodePhish');

// Function to fetch tweets based on a query
export const fetchTweets = async (query) => {
  try {
    const tweets = await client.v2.search(query, { max_results: 10 });
    return tweets.data;
  } catch (error) {
    console.error('Error fetching tweets:', error);
    throw error;
  }
};

// Function to analyze sentiment of tweets
export const analyzeSentiment = (tweets) => {
  // Placeholder for sentiment analysis logic
  return tweets.map(tweet => ({
    ...tweet,
    sentiment: 'neutral', // Replace with actual sentiment analysis
  }));
};