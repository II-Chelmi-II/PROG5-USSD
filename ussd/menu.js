const readline = require("readline");
const accountService = require("./accountService");

function showMenu() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  function displayMenu() {
    console.log("\nMenu USSD");
    console.log("1. Consulter le solde");
    console.log("2. Dépôt");
    console.log("3. Retrait");
    console.log("4. Quitter");

    rl.question("Choix: ", choice => {
      switch (choice) {
        case "1":
          console.log(`Solde actuel: ${accountService.getBalance()} Ar`);
          displayMenu(); // Revenir au menu
          break;

        case "2":
          rl.question("Montant à déposer: ", amt => {
            const amount = parseInt(amt);
            accountService.deposit(amount);
            console.log(`Dépôt effectué. Nouveau solde: ${accountService.getBalance()} Ar`);
            displayMenu(); // Revenir au menu
          });
          break;

        case "3":
          rl.question("Montant à retirer: ", amt => {
            const amount = parseInt(amt);
            const result = accountService.withdraw(amount);
            console.log(result.message);
            displayMenu(); // Revenir au menu
          });
          break;

        case "4":
          console.log("Opération terminée.");
          rl.close(); // Quitter l'app
          break;

        default:
          console.log("Option invalide.");
          displayMenu(); // Revenir au menu
      }
    });
  }

  displayMenu(); 
}

module.exports = showMenu;