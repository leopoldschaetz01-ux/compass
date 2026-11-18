/* =====================================================================
   COMPASS – EINSTELLUNGEN
   Hier ändert ihr Texte, Preise, Hotels, Bilder und Trigger.
   Den Rest der Seite (index.html) müsst ihr nicht anfassen.

   So bearbeitest du diese Datei:
   - Nur die Werte ändern: Text zwischen "…", Zahlen ohne Anführungszeichen.
   - Kommas am Zeilenende und Klammern { } [ ] stehen lassen.
   - Dezimalzahlen mit Punkt schreiben (8.6, nicht 8,6).
   - Bilder: Dateien in den Ordner "bilder" hochladen und beim Hotel eintragen, z. B.
       bilder: ["bilder/tropic-1.jpg", "bilder/tropic-2.jpg", "bilder/tropic-3.jpg", "bilder/tropic-4.jpg", "bilder/tropic-5.jpg"],
     Reihenfolge: 1 = Foto in der Liste und großes Galeriefoto, 2–5 = kleine Galeriefotos.
     Ohne Eintrag werden gezeichnete Platzhalter angezeigt.
   - Wenn nach dem Speichern ein roter Hinweis erscheint, steht dort die Zeile mit dem Fehler.

   Link-Parameter (an die Adresse anhängen):
     ?gruppe=mensch|zwilling   &persona=574   &variante=1|2
     &zuordnung=1..4 (welcher Trigger an welchem Hotel)   &reihenfolge=1|2 (2 = Test-Hotels gespiegelt)
   ===================================================================== */

window.CONFIG = {
  sheetUrl: "https://script.google.com/macros/s/AKfycbwENxEs5S2Hx_fnpyi8bOA9HlDWKkDFhDC270vHRPuhl-ROSlGxSWGEVzG4LU6ELhzK/exec",   // Web-App-Adresse aus dem Google Sheet hier zwischen die Anführungszeichen (siehe Anleitung)
  standard: { gruppe: "mensch", variante: 1, zuordnung: 1, reihenfolge: 1 },
  reise: {
    ziel: "Bali, Indonesien", gebiet: "Seminyak",
    anreise: "Do., 11. März 2027", abreise: "So., 14. März 2027",
    naechte: 3, erwachsene: 2, zimmer: 1
  },
  studie: {
    titel: "Wie buchst du ein Hotel?",
    intro: "Im Rahmen eines Projekts der Technischen Hochschule Augsburg untersuchen wir, wie Menschen auf einer Buchungsplattform ein Hotel auswählen. Die Teilnahme dauert etwa 10 Minuten. Es wird nichts gebucht und nichts bezahlt.",
    einwilligung: [
      "[Platzhalter – endgültigen Einwilligungstext vom Team einsetzen.]",
      "Die Teilnahme ist freiwillig und kann jederzeit ohne Angabe von Gründen abgebrochen werden.",
      "Gespeichert werden deine Klicks auf der Buchungsseite, die Verweildauer und deine Antworten. Wir erfassen keinen Namen und keine E-Mail-Adresse.",
      "Die Daten werden nur für das Studienprojekt verwendet und nach Projektende gelöscht."
    ],
    szenario: "Du planst mit einer Freundin oder einem Freund einen 4-Tage-Trip nach Bali. Ihr sucht ein Doppelzimmer in Seminyak, nicht zu teuer, aber gut. Schau dir die Angebote auf der Buchungsseite in Ruhe an und wähle das Hotel, das du in echt buchen würdest."
  },
  // Gleiche Grundausstattung für alle Test-Hotels; Preise und Bewertungen nur leicht verschieden
  testHotels: [
    { id: "tropic-sands", name: "Tropic Sands Villas", sterne: 4, entfernung: "1,2 km vom Zentrum", note: 8.6, bewertungen: 1084, preis: 171, seed: 11,
      sub: [8.7, 8.6, 8.5, 8.4], zitat: "Tolle Lage, das Personal war super freundlich und das Frühstück reichhaltig." },
    { id: "palm-haven", name: "Palm Haven Resort", sterne: 4, entfernung: "1,1 km vom Zentrum", note: 8.5, bewertungen: 1126, preis: 174, seed: 23,
      sub: [8.6, 8.5, 8.4, 8.5], zitat: "Ruhige Anlage mit schönem Pool, nur ein paar Minuten zu Fuß zum Strand." },
    { id: "coral-bay", name: "Coral Bay Retreat", sterne: 4, entfernung: "1,3 km vom Zentrum", note: 8.7, bewertungen: 1052, preis: 177, seed: 37,
      sub: [8.8, 8.7, 8.5, 8.6], zitat: "Saubere Zimmer, guter Kaffee und ein sehr hilfsbereites Team an der Rezeption." },
    { id: "bali-breeze", name: "Bali Breeze Hotel", sterne: 4, entfernung: "1,2 km vom Zentrum", note: 8.6, bewertungen: 1109, preis: 168, seed: 41,
      sub: [8.6, 8.7, 8.6, 8.4], zitat: "Gemütliches Zimmer, toller Garten und abends angenehm ruhig." }
  ],
  // Füll-Hotels: immer unten, keine Trigger, etwas teurer oder schlechter bewertet
  fuellHotels: [
    { id: "ocean-pearl", name: "Ocean Pearl Suites", sterne: 4, entfernung: "2,4 km vom Zentrum", note: 7.9, bewertungen: 917, preis: 226, seed: 53,
      sub: [8.0, 7.9, 7.7, 7.8], zitat: "Großes Zimmer, aber das Frühstück war eher einfach." , ausstattung: ["Kostenloses WLAN", "Pool", "Frühstück gegen Aufpreis"] },
    { id: "legian-garden", name: "Legian Garden Stay", sterne: 3, entfernung: "2,9 km vom Zentrum", note: 8.1, bewertungen: 803, preis: 214, seed: 61,
      sub: [8.2, 8.0, 8.1, 7.9], zitat: "Netter Garten, etwas weiter weg vom Trubel." , ausstattung: ["Kostenloses WLAN", "Garten", "Frühstück inklusive"] },
    { id: "sunset-lagoon", name: "Sunset Lagoon Inn", sterne: 3, entfernung: "3,8 km vom Zentrum", note: 7.6, bewertungen: 642, preis: 189, seed: 71,
      sub: [7.7, 7.5, 7.6, 7.4], zitat: "Okay für den Preis, die Klimaanlage war etwas laut.", ausstattung: ["Kostenloses WLAN", "Pool"] }
  ],
  zimmer: { typ: "Deluxe Doppelzimmer", bett: "1 großes Doppelbett", groesse: "28 m²" },
  ausstattungTest: ["Kostenloses WLAN", "Pool", "Frühstück inklusive"],
  // Trigger-Reihenfolge bei zuordnung=1 (entspricht euren Bildern)
  trigger: ["anker", "knappheit", "kontrolle", "socialproof"],
  triggerTexte: {
    anker: { v1: { faktor: 1.3, text: "Du sparst {spar} €" }, v2: { faktor: 1.25, text: "Gleiches Zimmer in der Region durchschnittlich {ref} €" } },
    knappheit: { v1: { text: "Nur noch 2 Zimmer zu diesem Preis verfügbar!" }, v2: { text: "Nur noch {timer} Std. zu diesem Preis erhältlich!", start: 2*3600 + 14*60 + 47 } },
    socialproof: { v1: { bewertungen: 3482 }, v2: { text: "9 Personen haben dieses Hotel in den letzten 2 Stunden gebucht" } }
  }
};
