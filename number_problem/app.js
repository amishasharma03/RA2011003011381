const express = require('express');
const axios = require('axios');

const app = express();
const port = 8008;

app.get('/numbers', async (req, res) => {
  const urls = req.query.url;

  if (!urls || !Array.isArray(urls)) {
    return res.status(400).json({ error: 'Invalid query parameters' });
  }

  const promises = urls.map(async (url) => {
    try {
      const response = await axios.get(url);
      return response.data.numbers;
    } catch (error) {
      console.error(`Error fetching data from ${url}: ${error.message}`);
      return [];
    }
  });

  try {
    const results = await Promise.all(promises);
    const mergedNumbers = Array.from(new Set(results.flat())).sort((a, b) => a - b);

    return res.json({ numbers: mergedNumbers });
  } catch (error) {
    console.error('Error processing results:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
