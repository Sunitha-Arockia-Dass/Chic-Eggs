class Game{
    constructor() {
        this.startScreen = document.getElementById("start-screen")
       this.gameScreen = document.getElementById("game-screen")
       this.easyScreen = document.getElementById("easy-level")
       this.mediumScreen = document.getElementById("medium-level")
       this.hardScreen = document.getElementById("hard-level")
       this.extremeScreen = document.getElementById("extreme-level")
       
    }

    easy(){
        this.mediumScreen.style.display = "none"
        this.hardScreen.style.display = "none"
        this.extremeScreen.style.display = "none"
        this.easyScreen.style.display = "block"
      this.startScreen.style.display = "none"
      this.gameScreen.style.display = "block"

    }
    medium(){
        this.easyScreen.style.display = "none"
        this.hardScreen.style.display = "none"
        this.extremeScreen.style.display = "none"
        this.mediumScreen.style.display = "block"

      this.startScreen.style.display = "none"
      this.gameScreen.style.display = "block"

    }
    hard(){
        this.easyScreen.style.display = "none"
        this.mediumScreen.style.display = "none"
        this.extremeScreen.style.display = "none"
       this.hardScreen.style.display = "block"

      this.startScreen.style.display = "none"
      this.gameScreen.style.display = "block"

    }
    extreme(){
        this.easyScreen.style.display = "none"
        this.mediumScreen.style.display = "none"
        this.hardScreen.style.display = "none"
        this.extremeScreen.style.display = "block"
        
      this.startScreen.style.display = "none"
      this.gameScreen.style.display = "block"

    }

    

}


    