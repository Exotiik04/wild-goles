// netlify/functions/get-matches.js
exports.handler = async (event, context) => {
  const API_KEY = "2bff4bf63c3f2648c65b3a653636195a";
  // Endpoint para partidos de hoy (puedes cambiarlo por 'live=all' para solo en vivo)
  const url = `https://v3.football.api-sports.io/fixtures?league=732&season=2026&live=all`;

  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "x-apisports-key": API_KEY,
        "x-rapidapi-host": "v3.football.api-sports.io"
      }
    });
    const data = await response.json();
    return { statusCode: 200, body: JSON.stringify(data) };
  } catch (error) {
    return { statusCode: 500, body: JSON.stringify({ error: "Fallo en API" }) };
  }
};
