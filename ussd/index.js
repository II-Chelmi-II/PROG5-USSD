const showMenu = require('./menu');

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Tapez #111# pour accéder au service : ', (code) => {
  if (code.trim() === '#111#') {
    rl.close();
    showMenu(); 
  } else {
    console.log('Code USSD invalide.');
    rl.close();
  }
});