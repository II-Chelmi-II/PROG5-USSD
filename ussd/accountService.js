let balance = 0;

function getBalance() {
  return balance;
}

function deposit(amount) {
  if (amount > 0) {
    balance += amount;
  }
}

function withdraw(amount) {
  if (amount <= 0) {
    return { success: false, message: "Montant invalide." };
  }

  if (amount > balance) {
    return { success: false, message: "Fonds insuffisants. Retrait refusé." };
  }

  balance -= amount;
  return { success: true, message: `Retrait effectué. Nouveau solde: ${balance} Ar` };
}

module.exports = {
  getBalance,
  deposit,
  withdraw,
};