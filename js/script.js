const game = new Game();
window.onload = function () {
  const easyBtn = document.querySelector(".button-green");
  const mediumBtn = document.querySelector(".button-blue");
  const hardBtn = document.querySelector(".button-gold");
  const extremeBtn = document.querySelector(".button-red");
// Easy button click

//this.gameScreen.style.display = "none"
  easyBtn.addEventListener("click", function () {
    game.easy();
  });
// Medium button click
  mediumBtn.addEventListener("click", function () {
    game.medium();
  });
// Hard button click
  hardBtn.addEventListener("click", function () {
    game.hard();
  });
// Extreme button click
  extremeBtn.addEventListener("click", function () {
    game.extreme();
  });
}