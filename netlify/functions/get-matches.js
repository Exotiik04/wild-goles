// netlify/functions/get-matches.js

exports.handler = async (event, context) => {
  const API_KEY = "2bff4bf63c3f2648c65b3a653636195a";
  
  // Usamos league=1 (World Cup) y season=2026.
  // live=all traerá solo los partidos en juego. 
  // Prueba quitando el parámetro de liga o usando una fecha fija
// Probar con: /fixtures?season=2026&league=1
// netlify/functions/get-matches.js
// league=2 es el ID para la Champions League
const url = `https://v3.football.api-sports.io/fixtures?date=2026-06-27`;
  
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
