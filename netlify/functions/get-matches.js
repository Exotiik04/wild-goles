// netlify/functions/get-matches.js

exports.handler = async (event, context) => {
  const API_KEY = "2bff4bf63c3f2648c65b3a653636195a";
  
  // Usamos league=1 (World Cup) y season=2026.
  // live=all traerá solo los partidos en juego. 
  // Si quieres todos los partidos de la fecha, quita "&live=all"
  const url = `https://v3.football.api-sports.io/fixtures?league=1&season=2026`;

  const headers = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "x-apisports-key": API_KEY,
    "x-rapidapi-host": "v3.football.api-sports.io"
  };

  try {
    const response = await fetch(url, {
      method: "GET",
      headers: headers
    });

    if (!response.ok) {
      throw new Error(`Error en API: ${response.status}`);
    }

    const data = await response.json();

    return {
      statusCode: 200,
      headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" },
      body: JSON.stringify(data),
    };
  } catch (error) {
    console.error("Error en la función:", error);
    return { 
      statusCode: 500, 
      body: JSON.stringify({ error: "Fallo al conectar con API-Football" }) 
    };
  }
};
