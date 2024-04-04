document.addEventListener("DOMContentLoaded", function() {
    const generateButton = document.getElementById("generate-button");
    const nameDisplay = document.getElementById("name");
  
    generateButton.addEventListener("click", () => {
      const r1 = Math.floor(Math.random() * 10);
      const r2 = Math.floor(Math.random() * 10);
      const r3 = Math.floor(Math.random() * 10);
  
      const adjectives = {
        0:"Unconventional",
        1: "Amazing",
        2: "Beautiful",
        3: "Innovative",
        4: "Creative",
        5: "Inspiring",
        6: "Inventive",  
        7: "Futuristic",
        8: "Maverick",
        9: "Elegant",
      };
  
      const nouns = {
        0: "Innovator",
        1: "Expert",
        2: "NexGen",
        3: "Voyage",
        4: "Ascend",
        5: "Pioneer",
        6: "Strive",
        7: "Apex",
        8: "Synergy",
        9: "Elevate",
      };
  
      const nameExtensions = {
        0: "Labs",
        1: "Innovations",
        2: "Tech",
        3: "Solutions",
        4: "Industries",
        5: "Hub",
        6: "Dynamics",
        7: "Forge",
        8: "Nexus",
        9: "Co",
      };
  
      const generatedName = adjectives[r1] + " " + nouns[r2] + " " + nameExtensions[r3];
      nameDisplay.innerHTML = generatedName;
    });
  });
  