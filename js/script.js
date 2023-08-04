//Input words
const threeWords = [
  "box",
  "buy",
  "dog",
  "van",
  "bye",
  "pat",
  "bug",
  "eat",
  "dry",
  "ego",
  "air",
  "aim",
  "car",
  "cap",
  "mad",
  "rat",
  "law",
  "pet",
  "win",
  "zip",
];
const fourWords = [
  "card",
  "road",
  "push",
  "load",
  "love",
  "ship",
  "kind",
  "acid",
  "ugly",
  "lose",
  "barn",
  "cash",
  "game",
  "mate",
  "name",
  "nail",
  "quit",
  "star",
  "vain",
  "yolk",
];
const fiveWords = [
  "faith",
  "lunch",
  "towel",
  "sharp",
  "stone",
  "earth",
  "brick",
  "abuse",
  "waste",
  "yacht",
  "voice",
  "light",
  "brave",
  "focus",
  "fight",
  "crazy",
  "clown",
  "brake",
  "bring",
  "legal",
];
const sixWords = [
  "spread",
  "silent",
  "object",
  "double",
  "injury",
  "pocket",
  "square",
  "abduct",
  "absent",
  "present",
  "basket",
  "breath",
  "browse",
  "carpet",
  "chorus",
  "comedy",
  "couple",
  "direct",
  "enough",
  "fusion",
];
//Creating game object using class
const game = new Game();
// Declaring Buttons
const easyBtn = document.querySelector(".button-green");
const mediumBtn = document.querySelector(".button-purple");
const hardBtn = document.querySelector(".button-gold");
const extremeBtn = document.querySelector(".button-red");
const goButton = document.querySelectorAll(".go-btn");
const homeReloadBtn = document.querySelectorAll(".reload-btn");
const backBtn = document.querySelectorAll(".back-btn");

//Variable declaraton for pop-up button
const displayOutput = document.getElementById("pop-up");
const WinCloseBtn = document.querySelector("#win-close-btn");
const loseCloseBtn = document.querySelector("#lose-close-btn");
// Variables for appending
let wrongInput;
let wrongAttemptTemplate;
let earlierAttempts;
let outputBox;
//Input word arrays
let word = [];
let array = [];
// Defines a function to disply hint
function hintButton() {
  let randomHint = Math.floor(Math.random() * array.length);
  let randomHint2 = Math.floor(Math.random() * array.length);

  const hintButton = document.querySelectorAll(
     `.hint-btn.btn.tooltip .${game.level}-tool`
  );
  switch (game.level) {
     case "easy":
     case "medium":
        hintButton.forEach((item) => {
           item.innerHTML = `"${array[randomHint]}" is in the hidden word`;
        });

        break;
     case "hard":
     case "extreme":
      if(randomHint!==randomHint2){
        hintButton.forEach((item) => {
           item.innerHTML = `"${array[randomHint]}" and "${array[randomHint2]}" are in the hidden word`;
        });
      }
  }

  return;
}
window.onload = function () {
  //Enter keypress
  document.querySelectorAll(".input-attempt").forEach((item) =>
     item.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
           document.querySelector(".go-btn").click();
           if (game.level === "easy") {
              document
                 .querySelectorAll(".attempt .left-input")[0]
                 .querySelector("input")
                 .focus();
           }
           if (game.level === "medium") {
              document
                 .querySelectorAll(".attempt .left-input")[1]
                 .querySelector("input")
                 .focus();
           }
           if (game.level === "hard") {
              document
                 .querySelectorAll(".attempt .left-input")[2]
                 .querySelector("input")
                 .focus();
           }
           if (game.level === "extreme") {
              document
                 .querySelectorAll(".attempt .left-input")[3]
                 .querySelector("input")
                 .focus();
           }
        }
     })
  );
  //Function to assign append variable to be called inside level selection
  function appendVariable() {
     inputElements = document.querySelectorAll(`.attempt .common.${game.level}`);
     wrongInput = document.getElementsByClassName("wrong-attempt-template")[0]
        .children[0].children[0].children;
     const wrongInputArray = [...wrongInput];
     wrongAttemptTemplate = document.getElementsByClassName(
        `wrong-attempt-template ${game.level}`
     )[0];
     earlierAttempts = document.getElementsByClassName(
        `earlier-attempts ${game.level}`
     )[0];
     outputBox = document.querySelectorAll(`.output-box.${game.level}`);

     return;
  }

  // Easy button click(level selection)
  easyBtn.addEventListener("click", function () {
     game.easy(threeWords, word);
     array = game.array;
     appendVariable();
     hintButton();
  });
  // Medium button click(level selection)
  mediumBtn.addEventListener("click", function () {
     game.medium(fourWords);
     array = game.array;
     appendVariable();
     hintButton();
  });
  // Hard button click(level selection)
  hardBtn.addEventListener("click", function () {
     game.hard(fiveWords);
     game.trialResult.innerText = game.trial;
     array = game.array;
     appendVariable();
     hintButton();
  });
  // Extreme button click(level selection)
  extremeBtn.addEventListener("click", function () {
     game.extreme(sixWords);
     game.trialResult.innerText = game.trial;
     array = game.array;
     appendVariable();
     hintButton();
  });
};

//Automatically Move Cursor to Next Field
function movetoNext(current, nextFieldID) {
  if (current.value.length >= current.maxLength) {
     document.getElementById(nextFieldID).focus();
  }
}

// Function to be called inside go button event listener
function goBtn() {
  if (game.gameOver || game.trial === 0) {
     // if game is over or trial count is zero, don't append new input boxes

     return;
  }
  //Changing the inputs letter to lowercase and displaying in word array
  word = [];
  inputElements.forEach((input) => {
     word.push(input.value.toLowerCase());
     input.value = "";
  });
  let inputError = false;
  //To check if all the inputs are entered
  if (word.filter((e) => e == "").length > 0) {
     alert("Please enter all the letters");
     inputError = true;
  }
  //To check if it has any repeated letters
  else if (word.filter((e, i, a) => a.indexOf(e) !== i).length > 0) {
     alert("Please do not repeat the letter");
     inputError = true;
  }
  //To check if the input has only alphabets
  const alphabetPattern = /^[A-Za-z]+$/;
   if (!alphabetPattern.test(word.join(""))) {
     alert("Please enter alphabets only");
     inputError = true;
  }
  // Comparing words
  if (!inputError) {
     game.compareWords(array, word, game.trial);
     game.trialResult.innerText = game.trial;

     // Append the new attempt
     const newWrongAttempt = wrongAttemptTemplate.cloneNode(true);
     const inputs = newWrongAttempt.querySelectorAll(".common");
     //Displaying the earlier attempts
     inputs.forEach((input, index) => {
        input.value = word[index];
     });
     earlierAttempts.appendChild(newWrongAttempt);
  }
  // Stop appending if the game is over and display the hidden word
  if (game.gameOver) {
     outputBox.forEach((letter, index) => {
        letter.innerHTML = array[index];
     });
     inputElements.forEach((input) => {
        input.style.display = "none";
     });
     goButton.forEach((input) => {
        input.style.display = "none";
     });
  }
}
//Go button event listener

goButton.forEach((item) => {
  item.addEventListener("click", goBtn);
});

//Click function for all icons
const infoBtn = document.querySelector(".button-saffon");
const infoPopup = document.getElementById("info-pop-up");
infoBtn.addEventListener("click", function () {
  infoPopup.style.display = "flex";
});
const infoCloseBtn = document.querySelector(".close-btn");
infoCloseBtn.addEventListener("click", function () {
  infoPopup.style.display = "none";
});
WinCloseBtn.addEventListener("click", function () {
  displayOutput.style.display = "none";
  const audio = document.querySelector("#congrats");
  audio.pause();
  audio.currentTime = 0;
});
loseCloseBtn.addEventListener("click", function () {
  displayOutput.style.display = "none";

  const audio = document.querySelector("#sorry");
  audio.pause();
  audio.currentTime = 0;
});
homeReloadBtn.forEach((item) => {
  item.addEventListener("click", function () {
     game.reload(game.level);
     game.gameOver = false;
     outputBox.forEach((letter, index) => {
        letter.innerHTML = "?";
     });

     switch (game.level) {
        case "easy":
           game.easy(threeWords);
           array = Array.from(game.randomWord);
           hintButton();
           break;
        case "medium":
           game.medium(fourWords);
           array = Array.from(game.randomWord);
           hintButton();
           break;
        case "hard":
           game.hard(fiveWords);
           array = Array.from(game.randomWord);
           hintButton();
           break;
        case "extreme":
           game.extreme(sixWords);
           array = Array.from(game.randomWord);
           hintButton();
           break;
     }
     inputElements.forEach((input) => {
        input.style.display = "block";
     });
     goButton.forEach((input) => {
        input.style.display = "block";
     });
  });
});

//Back button
backBtn.forEach((item) => {
  item.addEventListener("click", function () {
     window.location.reload();
  });
});