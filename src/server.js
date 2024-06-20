import express from 'express';
import fetch from 'node-fetch';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.get('/api/twitter-search', async (req, res) => {
  const query = req.query.query;
  const url = `https://api.twitter.com/1.1/search/tweets.json?q=${encodeURIComponent(query)}&count=10`;
  
  try {
    const response = await fetch(url, {
      headers: {
        "Authorization": `Bearer ${process.env.TWITTER_BEARER_TOKEN}`
      }
    });
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error("Error fetching tweets:", error);
    res.status(500).json({ error: "Error fetching tweets" });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});