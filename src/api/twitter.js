const CLIENT_ID = 'MV81SXc0WDVpZE52WDZoVnFvVlc6MTpjaQ';
const CLIENT_SECRET = import.meta.env.VITE_CLIENT_SECRET;

export const fetchTweets = async (query) => {
  try {
    const tokenResponse = await fetch('https://api.twitter.com/oauth2/token', {
      method: 'POST',
      headers: {
        'Authorization': `Basic ${btoa(`${CLIENT_ID}:${CLIENT_SECRET}`)}`,
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
      },
      body: 'grant_type=client_credentials'
    });

    if (!tokenResponse.ok) {
      console.error('Error response:', tokenResponse);
      throw new Error('Error fetching bearer token');
    }

    const tokenData = await tokenResponse.json();
    const bearerToken = tokenData.access_token;

    const response = await fetch(`https://api.twitter.com/2/tweets/search/recent?query=${query}&max_results=10`, {
      headers: {
        'Authorization': `Bearer ${bearerToken}`,
        'Content-Type': 'application/json'
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

// Temporary test function to log fetched tweets
const testFetchTweets = async () => {
  try {
    const tweets = await fetchTweets('test');
    console.log('Fetched tweets:', tweets);
  } catch (error) {
    console.error('Test fetch tweets error:', error);
  }
};

// Call the test function
testFetchTweets();