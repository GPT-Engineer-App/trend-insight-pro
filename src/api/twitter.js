const BEARER_TOKEN = 'AAAAAAAAAAAAAAAAAAAAACujuQEAAAAAJdMTWhzhq710tlJl%2F1AOCf8VYg0%3DMzG0IL6xuSftHUHraRhRRg9yf08YJPcWAQM30HPYWE5vQxjXAI';
const ACCESS_TOKEN = '1456359879568941059-y3Q52xDg0VRg6660wEcOSpPJW18vfH';
const ACCESS_TOKEN_SECRET = 'O1N5s39QS4kTaJJJ0IcJrR60nRevbRF2pnoK9oGUZsKYN';

export const fetchTweets = async (query) => {
  try {
    const response = await fetch(`https://api.twitter.com/2/tweets/search/recent?query=${query}&max_results=10`, {
      headers: {
        'Authorization': `Bearer ${BEARER_TOKEN}`,
        'Access-Token': ACCESS_TOKEN,
        'Access-Token-Secret': ACCESS_TOKEN_SECRET
      }
    });

    if (!response.ok) {
      console.error('Error response:', response);
      throw new Error('Error fetching tweets');
    }

    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error('Error fetching tweets:', error);
    throw error;
  }
};

export const analyzeSentiment = (tweets) => {
  // Placeholder for sentiment analysis logic
  return tweets.map(tweet => ({
    ...tweet,
    sentiment: 'neutral', // Replace with actual sentiment analysis
  }));
};