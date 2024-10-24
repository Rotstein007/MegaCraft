// server-status.js
const express = require('express');
const axios = require('axios'); // Verwende axios für HTTP-Anfragen
const app = express();
const port = 3000;

// Stelle sicher, dass der Endpunkt /status die Daten liefert
app.get('/status', async (req, res) => {
    try {
        const host = 'hypixel.net'; // Ersetze dies durch den Minecraft-Server, den du überwachen möchtest
        const response = await axios.get(`https://api.mcsrvstat.us/2/${host}`);
        const result = response.data;

        // Sende das Ergebnis als JSON
        res.json(result);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Fehler beim Abrufen des Serverstatus' });
    }
});

app.listen(port, () => {
    console.log(`Server läuft auf http://localhost:${port}`);
});
