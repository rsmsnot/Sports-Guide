const matches = require('livesoccertv-parser')

// async (console.log(await matches('spain', 'real-madrid'))) //=> [{...}, {...}, ...]

async function f1() {
    var x = await matches('england', 'arsenal');
    console.log(x); // 10
  }

  f1()