/* =====================================================================
   COMPASS – EINSTELLUNGEN
   Hier ändert ihr Texte, Preise, Hotels, Bilder und Hinweise.
   Den Rest der Seite (index.html) müsst ihr nicht anfassen.

   So bearbeitest du diese Datei:
   - Nur die Werte ändern: Text zwischen "…", Zahlen ohne Anführungszeichen.
   - Kommas am Zeilenende und Klammern { } [ ] stehen lassen.
   - Dezimalzahlen mit Punkt schreiben (8.6, nicht 8,6).
   - Bilder: Dateien in den Ordner "bilder" hochladen und beim Hotel eintragen, z. B.
       bilder: ["bilder/tropic-1.jpg", "bilder/tropic-2.jpg", "bilder/tropic-3.jpg", "bilder/tropic-4.jpg", "bilder/tropic-5.jpg"],
     Reihenfolge: 1 = Foto in der Liste und großes Galeriefoto, 2–5 = kleine Galeriefotos.
     Ohne Eintrag werden gezeichnete Platzhalter angezeigt.
   - Hinweise (Trigger) pro Hotel bei "hinweise" eintragen. Möglich sind:
       "anker"       = durchgestrichener Preis (Wert bei preisVorher)
       "knappheit"   = "Nur noch X Zimmer …" (Anzahl bei zimmerFrei)
       "socialproof" = "X Personen haben … gebucht" (Anzahl bei gebucht)
       "beliebt"     = Badge "Bei Reisenden besonders beliebt"
     Mehrere gehen auch: ["anker", "knappheit"]. Keine Hinweise: []
   - Wenn nach dem Speichern ein roter Hinweis erscheint, steht dort die Zeile mit dem Fehler.

   Link-Parameter (an die Adresse anhängen):
     ?gruppe=mensch|zwilling   &persona=574   &reihenfolge=1|2 (2 = Hotelliste umgekehrt)
   ===================================================================== */

window.CONFIG = {
  sheetUrl: "https://script.google.com/macros/s/AKfycbwENxEs5S2Hx_fnpyi8bOA9HlDWKkDFhDC270vHRPuhl-ROSlGxSWGEVzG4LU6ELhzK/exec",   // Web-App-Adresse des Google Sheets
  standard: { gruppe: "mensch", reihenfolge: 1 },
  reise: {
    ziel: "Bali, Indonesien", gebiet: "Seminyak",
    anreise: "Do., 11. März 2027", abreise: "So., 14. März 2027",
    naechte: 3, erwachsene: 2, zimmer: 1
  },
  studie: {
    titel: "Studie zur Nutzung von Buchungsseiten",
    intro: [
      "Im Rahmen eines Projekts der Technischen Hochschule Augsburg untersuchen wir, wie Menschen Buchungsseiten im Internet nutzen. Die Teilnahme dauert etwa 10 Minuten.",
      "Die folgende Buchungsseite wurde für diese Studie nachgebaut und ist gängigen Buchungsplattformen nachempfunden. Es wird nichts gebucht und nichts bezahlt. Bitte verhalte dich trotzdem so, wie du es bei einer echten Hotelbuchung tun würdest."
    ],
    hinweise: [
      "Sobald du ein Hotel gefunden hast, das du buchen würdest, klick auf „Ich reserviere“.",
      "Einige Funktionen wie Filter, Karte oder Anmelden sind nicht verfügbar.",
      "Danach folgen ein paar kurze Fragen."
    ],
    einwilligung: [
      "Diese Studie wird im Rahmen eines Projekts im Studiengang Wirtschaftspsychologie an der Technischen Hochschule Augsburg durchgeführt. Du siehst eine nachgebaute Buchungsseite, wählst ein Hotel aus und beantwortest danach einige Fragen. Das dauert etwa 10 Minuten.",
      "Freiwilligkeit: Die Teilnahme ist freiwillig. Du kannst jederzeit ohne Angabe von Gründen abbrechen, ohne dass dir Nachteile entstehen.",
      "Welche Daten wir erfassen: deine Klicks auf der Seite, die Verweildauer sowie deine Antworten im Fragebogen, darunter Altersgruppe, Geschlecht, Tätigkeit und Wohnland. Wir erfassen keinen Namen, keine E-Mail-Adresse und keine IP-Adresse. Deine Daten werden nur über einen zufälligen Code zugeordnet.",
      "Speicherung: Die Daten werden in einer Google-Tabelle gespeichert. Die Server von Google können sich auch außerhalb der EU befinden. Zugriff hat nur das Projektteam. Die Daten werden ausschließlich für dieses Studienprojekt ausgewertet, nur zusammengefasst berichtet und nach Abschluss des Projekts gelöscht, spätestens am 31.01.2027.",
      "Deine Rechte: Du kannst bis zum Projektende verlangen, dass deine Daten gelöscht werden. Nenne uns dazu den Code, den du am Ende angezeigt bekommst.",
      "Kontakt: Leopold Schätz, leopold.schaetz@tha.de · Betreuung: Prof. Dr. Barbara Eschner, Prof. Dr. Peter Cocron, TH Augsburg"
    ],
    szenario: "Du planst mit einer Freundin oder einem Freund einen 4-Tage-Trip nach Bali. Such dir auf der folgenden Seite ein Hotel aus, das du buchen würdest."
  },
  // Alle 7 Hotels sind gleichwertig. Preise gelten für den gesamten Aufenthalt (3 Nächte).
  hotels: [
    { id: "tropic-sands", bilder: ["bilder/tropic-sands-1.jpg", "bilder/tropic-sands-2.jpg", "bilder/tropic-sands-3.jpg", "bilder/tropic-sands-4.jpg", "bilder/tropic-sands-5.jpg"],
       name: "Tropic Sands Villas", sterne: 4, entfernung: "1,2 km vom Zentrum", note: 8.6, bewertungen: 1084, preis: 189, seed: 11,
      hinweise: ["anker"], preisVorher: 249,
      sub: [8.7, 8.6, 8.5, 8.4], zitat: "Tolle Lage, das Personal war super freundlich und das Frühstück reichhaltig." },
    { id: "palm-haven", bilder: ["bilder/palm-haven-1.jpg", "bilder/palm-haven-2.jpg", "bilder/palm-haven-3.jpg", "bilder/palm-haven-4.jpg", "bilder/palm-haven-5.jpg"],
       name: "Palm Haven Resort", sterne: 4, entfernung: "1,1 km vom Zentrum", note: 8.4, bewertungen: 1126, preis: 174, seed: 23,
      hinweise: ["knappheit"], zimmerFrei: 2,
      sub: [8.5, 8.4, 8.3, 8.5], zitat: "Ruhige Anlage mit schönem Pool, nur ein paar Minuten zu Fuß zum Strand." },
    { id: "coral-bay", bilder: ["bilder/coral-bay-1.jpg", "bilder/coral-bay-2.jpg", "bilder/coral-bay-3.jpg", "bilder/coral-bay-4.jpg", "bilder/coral-bay-5.jpg"],
       name: "Coral Bay Retreat", sterne: 4, entfernung: "1,4 km vom Zentrum", note: 8.8, bewertungen: 962, preis: 212, seed: 37,
      hinweise: [],
      sub: [8.9, 8.8, 8.6, 8.5], zitat: "Saubere Zimmer, guter Kaffee und ein sehr hilfsbereites Team an der Rezeption." },
    { id: "bali-breeze", bilder: ["bilder/bali-breeze-1.jpg", "bilder/bali-breeze-2.jpg", "bilder/bali-breeze-3.jpg", "bilder/bali-breeze-4.jpg", "bilder/bali-breeze-5.jpg"],
       name: "Bali Breeze Hotel", sterne: 3, entfernung: "1,6 km vom Zentrum", note: 8.2, bewertungen: 1309, preis: 159, seed: 41,
      hinweise: ["socialproof"], gebucht: 9,
      sub: [8.3, 8.4, 8.0, 8.6], zitat: "Gemütliches Zimmer, toller Garten und abends angenehm ruhig." },
    { id: "ocean-pearl", bilder: ["bilder/ocean-pearl-1.jpg", "bilder/ocean-pearl-2.jpg", "bilder/ocean-pearl-3.jpg", "bilder/ocean-pearl-4.jpg", "bilder/ocean-pearl-5.jpg"],
       name: "Ocean Pearl Suites", sterne: 4, entfernung: "0,8 km vom Zentrum", note: 8.5, bewertungen: 874, preis: 198, seed: 53,
      hinweise: ["anker", "knappheit"], preisVorher: 259, zimmerFrei: 1,
      sub: [8.6, 8.5, 8.4, 8.3], zitat: "Großes Zimmer, sehr zentral, abends kann es etwas lauter sein." },
    { id: "legian-garden", bilder: ["bilder/legian-garden-1.jpg", "bilder/legian-garden-2.jpg", "bilder/legian-garden-3.jpg", "bilder/legian-garden-4.jpg", "bilder/legian-garden-5.jpg"],
       name: "Legian Garden Stay", sterne: 3, entfernung: "2,1 km vom Zentrum", note: 8.0, bewertungen: 803, preis: 165, seed: 61,
      hinweise: [],
      sub: [8.1, 8.2, 7.8, 8.3], zitat: "Netter Garten, etwas weiter weg vom Trubel, gutes Preis-Leistungs-Verhältnis." },
    { id: "sunset-lagoon", bilder: ["bilder/sunset-lagoon-1.jpg", "bilder/sunset-lagoon-2.jpg", "bilder/sunset-lagoon-3.jpg", "bilder/sunset-lagoon-4.jpg", "bilder/sunset-lagoon-5.jpg"],
       name: "Sunset Lagoon Villas", sterne: 4, entfernung: "1,0 km vom Zentrum", note: 8.9, bewertungen: 3482, preis: 229, seed: 71,
      hinweise: ["beliebt"],
      sub: [9.0, 8.9, 8.8, 8.6], zitat: "Wunderschöne Anlage, man fühlt sich sofort wohl. Jeden Cent wert." }
  ],
  zimmer: { typ: "Deluxe Doppelzimmer", bett: "1 großes Doppelbett", groesse: "28 m²" },
  ausstattung: ["Kostenloses WLAN", "Pool", "Frühstück inklusive"],
  hinweisTexte: {
    anker: "Du sparst {spar} €",
    knappheit: "Nur noch {n} Zimmer zu diesem Preis verfügbar!",
    socialproof: "{n} Personen haben dieses Hotel in den letzten 2 Stunden gebucht",
    beliebt: "Bei Reisenden besonders beliebt"
  }
};
