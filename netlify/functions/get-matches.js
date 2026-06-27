// netlify/functions/get-matches.js
exports.handler = async (event, context) => {
  const API_KEY = "7McWAbePh04FyCV2TqmiFuyDvvmcCWIJNNi1KhkU";
  const url = `https://api.sportradar.com/soccer/trial/v4/es/schedules/live/summaries.json?api_key=${API_KEY}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    return {
      statusCode: 200,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    };
  } catch (error) {
    return { statusCode: 500, body: JSON.stringify({ error: "Fallo en API" }) };
  }
};
