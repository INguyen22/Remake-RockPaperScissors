class Game {
    constructor(player1, player2, gameMode, input) {
        this.player1 = player1
        this.player2 = player2
        this.gameMode = gameMode
        this.input = input
        this.winner = ''
        this.winConditions = {
            rock: ["scissors", "sword"],
            paper: ["rock", "hammer"],
            scissors: ["paper", "hammer"],
            hammer: ["rock", "sword"],
            sword: ["paper", "scissor"]
        }
    }
    checkGameMode() {
        if(this.gameMode === 'classic') {
            this.player2Input = this.player2.cpuClassicChoice()
        } else {
            this.player2Input = this.player2.cpuKirboChoice()
        }
    }
    checkConditions() {
        if(this.input === this.player2Input) {
            return this.winner = "draw"
        } else if(this.winConditions[this.input].includes(this.player2Input)) {
            return this.winner = "Player 1 Wins"
        } else {
            return this.winner = "CPU Wins"
        }
    }
}