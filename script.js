// ===============================
//  Bildspel för sektionen "Galleri"
// ===============================

// Array med bild-URL:er till fiskbilder
const bilder = [
    "bildspel1.jpg",
    "bildspel2.jpg",
    "bildspel3.jpg"
    
  ];
  
  let aktuellBild = 0; // Håller koll på vilken bild som visas
  
  // Hämta bild-elementet
  const slide = document.getElementById("slide");
  
  // Funktion för att byta till nästa bild med fade-effekt
  function bytBild() {
    slide.classList.add("fade-out"); // Starta fade-out
  
    setTimeout(() => {
      aktuellBild = (aktuellBild + 1) % bilder.length; // Gå till nästa bild, loopa runt
      slide.src = bilder[aktuellBild]; // Byt bildens källa
      slide.classList.remove("fade-out"); // Ta bort fade-out för att visa bilden igen
    }, 1000); // Vänta tills fade-out är klar (1 sekund)
  }
  
  // Starta bildspelet – byt bild var 4:e sekund
  setInterval(bytBild, 4000);
  