const searchInput = document.getElementById("search");
const games = document.querySelectorAll(".game-card");

searchInput.addEventListener("keyup", () => {
  const value = searchInput.value.toLowerCase();

  games.forEach(game => {
    const title = game.querySelector("h3").innerText.toLowerCase();
    game.style.display = title.includes(value) ? "block" : "none";
  });
});
