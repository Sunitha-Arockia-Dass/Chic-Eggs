//Creating Game
class Game {
  constructor() {
    this.startScreen = document.getElementById("start-screen");
    this.gameScreen = document.getElementById("game-screen");
    this.easyScreen = document.getElementById("easy-level");
    this.mediumScreen = document.getElementById("medium-level");
    this.hardScreen = document.getElementById("hard-level");
    this.extremeScreen = document.getElementById("extreme-level");
    this.displayOutput = document.getElementById("pop-up");
    this.winChick = document.querySelector(".win-display");
    this.loseChick = document.querySelector(".lose-display");
    this.inputElements;
    this.level = "";
    this.trial;
    this.chick;
    this.egg;
    this.crow;
    this.gameOver = false;
  }
  initializeResults() {
    this.chickResult = document.querySelector(`.chick-value.${this.level}`);
    this.eggResult = document.querySelector(`.egg-value.${this.level}`);
    this.crowResult = document.querySelector(`.crow-value.${this.level}`);
    this.trialResult = document.querySelector(
      `.trials .trial-content.${this.level} p`
    );
    this.trialResult.innerHTML = this.trial;
  }
  easy(threeWords) {
    this.easyScreen.style.display = "block";
    this.startScreen.style.display = "none";
    this.gameScreen.style.display = "block";
    this.level = "easy";
    this.words = threeWords;
    const { word, array } = this.generateRandomWord(threeWords);
    this.randomWord = word;
    this.array = array;
    console.log(this.randomWord);
    this.trial = 4;
    this.initializeResults();
  }
  medium(fourWords) {
    this.startScreen.style.display = "none";
    this.mediumScreen.style.display = "block";
    this.gameScreen.style.display = "block";
    this.level = "medium";
    this.words = fourWords;
    const { word, array } = this.generateRandomWord(fourWords);
    this.randomWord = word;
    this.array = array;
    console.log(this.randomWord);
    this.trial = 5;
    this.initializeResults();
  }
  hard(fiveWords) {
    this.startScreen.style.display = "none";
    this.gameScreen.style.display = "block";
    this.hardScreen.style.display = "block";
    this.level = "hard";
    this.words = fiveWords;
    const { word, array } = this.generateRandomWord(fiveWords);
    this.randomWord = word;
    this.array = array;
    console.log(this.randomWord);
    this.trial = 6;
    this.initializeResults();
  }
  extreme(sixWords) {
    this.startScreen.style.display = "none";
    this.gameScreen.style.display = "block";
    this.extremeScreen.style.display = "block";
    this.level = "extreme";
    this.words = sixWords;
    const { word, array } = this.generateRandomWord(sixWords);
    this.randomWord = word;
    this.array = array;
    console.log(this.randomWord);
    this.trial = 7;
    this.initializeResults();
  }
  reload(level) {
    this.inputElements = document.getElementsByClassName(
      `earlier-attempts ${game.level}`
    )[0];
    this.inputElements.innerHTML = "";
    this.chick = 0;
    this.egg = 0;
    this.crow = 0;
  }

  //words= list of words array
  //This function generate random word
  generateRandomWord(words) {
    let randomNumber = Math.floor(Math.random() * words.length);
    let randomWord = words[randomNumber];
    let array = Array.from(randomWord);
    return { word: randomWord, array: array };
  }
  //word=User input
  //This function compare 2 words n update chic, egg n crow values
  compareWords(words, word, trial) {
    this.chick = 0;
    this.egg = 0;
    this.crow = 0;
    word.forEach((letter, index) => {
      if (array.includes(letter)) {
        if (index === array.indexOf(letter)) {
          this.chick++;
        } else {
          this.egg++;
        }
      } else {
        this.crow++;
      }
    });

    this.chickResult.innerText = this.chick;
    this.eggResult.innerText = this.egg;
    this.crowResult.innerText = this.crow;
    this.trial--;
    this.gameWinLose();
    console.log(
      `Chick: ${this.chick}, Egg: ${this.egg}, Crow: ${this.crow}  ${this.trial}`
    );
  }
  // To check if the game is over
  // Check if the player has won or lost
  gameWinLose() {
    if (this.chick === array.length) {
      this.gameOver = true;
      console.log("Congratulations! You win!");
      this.displayOutput.style.display = "flex";
      this.winChick.style.display = "flex";
      this.loseChick.style.display = "none";
      document.querySelector("#congrats").play();
    } else if (this.trial <= 0) {
      this.gameOver = true;
      console.log("Oops! You lost!");
      this.displayOutput.style.display = "flex";
      this.loseChick.style.display = "flex";
      this.winChick.style.display = "none";
      document.querySelector("#sorry").play();
    }
  }
}
