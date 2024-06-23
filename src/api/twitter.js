const BEARER_TOKEN = 'AAAAAAAAAAAAAAAAAAAAACujuQEAAAAAJdMTWhzhq710tlJl%2F1AOCf8VYg0%3DMzG0IL6xuSftHUHraRhRRg9yf08YJPcWAQM30HPYWE5vQxjXAI';


export const fetchTweets = async (query) => {
  try {
    const response = await fetch(`https://api.twitter.com/2/tweets/search/recent?query=${query}&max_results=10`, {
      headers: {
        'Authorization': `Bearer ${BEARER_TOKEN}`
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