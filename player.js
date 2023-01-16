class Player {
    constructor() {
        this.wins = 0
        this.inputOptions = ['rock', 'paper', 'scissors', 'hammer', 'sword']
    }
    choiceRandomizer(numberOfChoices) {
        var cpuInputChoice = Math.floor(Math.random() * numberOfChoices)
        cpuInputChoice = this.inputOptions[cpuInputChoice]
        return cpuInputChoice
    }
    cpuClassicChoice() {
        return this.choiceRandomizer(3)
    }
    cpuKirboChoice() {
        return this.choiceRandomizer(5)
    }
}