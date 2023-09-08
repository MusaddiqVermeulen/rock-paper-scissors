game = () => {

    let wins = 0;
    let loses = 0;
    let draws = 0;
    let invalidEntries = 0;

    for (let i = 0; i < 5; i++) {
      

      // Computers Random Selection Process
      getComputerChoice = () => {
        const randomNum = Math.random();
        if (randomNum < 0.33) {
          return "rock";
        } else if (randomNum < 0.67) {
          return "paper";
        } else {
          return "scissors";
        }
      }
      
      // Computers Selection and Stores it
      let computerSelection = getComputerChoice();

      // Asks for the Players Selection and Stores it
      let playerChoice = prompt(`Please enter your choice:`);
      let playerSelection = playerChoice.toLocaleLowerCase();     // converts the prompt to lowercase (case-sensitive)


      let result;
      // plays a single round against the Comp
      round = (playerSelection, computerSelection) => {
        if (playerSelection === "rock" && computerSelection === "rock" ) {
          return "Draw !";
        } else if (playerSelection === "rock" && computerSelection === "paper" ) {
          return "You Lose! Paper beats Rock";
        } else if (playerSelection === "rock" && computerSelection === "scissors" ) {
          return "You Win! Rock beats Scissors";
        } else if (playerSelection === "paper" && computerSelection === "paper" ) {
          return "Draw !"
        } else if (playerSelection === "paper" && computerSelection === "rock" ) {
          return "You Win! Paper beats Rock";
        } else if (playerSelection === "paper" && computerSelection === "scissors" ) {
          return "You Lose! Scissors beats Paper";
        } else if (playerSelection === "scissors" && computerSelection === "scissors" ) {
          return "Draw !"
        } else if (playerSelection === "scissors" && computerSelection === "rock" ) {
          return "You Lose! Rock beats Scissors";
        } else if (playerSelection === "scissors" && computerSelection === "paper" ) {
          return "You Win! Scissors beats Paper";
        } else { return "Invalid Input"; }
      }
      // showing the selction on the computer
      console.log(`The computers selection was ` + computerSelection);
      console.log(`The players selection was ` + playerSelection);

      // stores and outputs the result to the console
      result = round(playerSelection, computerSelection);
      console.log("Result:", result);
      console.log("########################");
      console.log("");

      
      if (result === "You Lose! Paper beats Rock" || result === "You Lose! Scissors beats Paper" || result === "You Lose! Rock beats Scissors") {
        loses++;
        } else if (result === "You Win! Rock beats Scissors" || result === "You Win! Paper beats Rock" || result === "You Win! Scissors beats Paper") {
          wins++;
        } else if (result === "Draw !") {
          draws++;
        } else {
          invalidEntries++;
        }
      
    }
    console.log("#################");
    console.log("Wins:", wins);
    console.log("Loses:", loses);
    console.log("Draws:", draws);
    console.log("Invalid Entries:", invalidEntries);
    console.log("#################");
    console.log(" ");
    
    if (wins > loses) {
      console.log("You WON !!!!!");
    } else if (loses > wins) {
      console.log("You LOST! unfortunately :(");
      console.log("###################################");
    } else if (wins == loses){
      console.log ("It's a Tie!");
      console.log("###################################");
    }
}
game();
console.log("");
console.log(`=====================`);
console.log(`The game is finished`);
console.log(`=====================`);