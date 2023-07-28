class Game{
    constructor() {
        this.startScreen = document.getElementById("start-screen")
       this.gameScreen = document.getElementById("game-screen")
       this.easyScreen = document.getElementById("easy-level")
       this.mediumScreen = document.getElementById("medium-level")
       this.hardScreen = document.getElementById("hard-level")
       this.extremeScreen = document.getElementById("extreme-level")
       this.startScreen.style.display = "block"
       this.gameScreen.style.display = "none"
       this.easyScreen.style.display = "none"
       this.mediumScreen.style.display = "none"
       this.hardScreen.style.display = "none"
       this.extremeScreen.style.display = "none"

    }

    easy(){
        this.easyScreen.style.display = "block"
        this.startScreen.style.display = "none"
        this.gameScreen.style.display = "block"

    }
    medium(){
      this.startScreen.style.display = "none"
      this.mediumScreen.style.display = "block"
      this.gameScreen.style.display = "block"

    }
    hard(){
      this.startScreen.style.display = "none"
      this.gameScreen.style.display = "block"
      this.hardScreen.style.display = "block"

    }
    extreme(){
      this.startScreen.style.display = "none"
      this.gameScreen.style.display = "block"
      this.extremeScreen.style.display ="block"        
    }
    generateRandomWord(words){
      let randomNumber=Math.floor(Math.random()*words.length)
      return words[randomNumber]
    }
    compareWords(word){
      let randomWord=generateRandomWord(words)
      let array=Array.from(randomWord)
      word.forEach((letter,index)=>{
        if(array.includes(letter)){
          if(index===array.indexOf(letter) ){
            moon++
          }
          else{
            star++
          }
        }
          else{
            sun++
          }
      })

  }

}


    