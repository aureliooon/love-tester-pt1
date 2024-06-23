function resetName() {
    document.getElementById("name1").value = "";
    document.getElementById("name2").value = "";
    document.getElementById("start-button").disabled = true;
  }
  
  function getRandomPercentage() {
    return Math.floor(Math.random() * 100) + 1;
  }
  
  function start() {
    const name1 = document.getElementById("name1").value.toLowerCase();
    const name2 = document.getElementById("name2").value.toLowerCase();
    const heart = document.getElementById("heart");
    const percentageOverlay = document.getElementById("percentageOverlay");
  
    // Check for specific names to get 100%
    if ((name1 === "rafi" && name2 === "florean") || (name1 === "florean" && name2 === "rafi") ||
        (name1 === "florean" && name2 === "jay") || (name1 === "jay" && name2 === "florean")
        (name1 === "Florean" && name2 === "Jay") || (name1 === "Jay" && name2 === "Florean")) {
      percentageOverlay.textContent = "1000000%";
      heart.classList.add("special-animation");
      setTimeout(() => heart.classList.remove("special-animation"), 7000);
      heart.classList.add("animate-heart");
      setTimeout(() => heart.classList.remove("animate-heart"), 7000);
      return;
    }
  
    let startTime = Date.now();
  
    function updateHeartWidth() {
      const elapsedTime = Date.now() - startTime;
      if (elapsedTime >= 7000) {
        clearInterval(interval);
        heart.classList.remove("animate");
        return;
      }
  
      const randomPercentage = getRandomPercentage();
      percentageOverlay.textContent = `${randomPercentage}%`;
    }
  
    heart.classList.add("animate");
    const interval = setInterval(updateHeartWidth, 100); // Update every 100 milliseconds for faster changes
    updateHeartWidth();
  }
  
  document.getElementById("name1").addEventListener("input", () => {
    const name1 = document.getElementById("name1").value;
    const name2 = document.getElementById("name2").value;
    document.getElementById("start-button").disabled = !(name1 && name2);
  });
  
  document.getElementById("name2").addEventListener("input", () => {
    const name1 = document.getElementById("name1").value;
    const name2 = document.getElementById("name2").value;
    document.getElementById("start-button").disabled = !(name1 && name2);
  });
  
  document.getElementById("start-button").addEventListener("click", () => {
    start();
  });
