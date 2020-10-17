// Given a credit card number, this function should return a string with the
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy!
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

var detectNetwork = function(cardNumber) {
  // Note: `cardNumber` will always be a string
  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  // The American Express network always starts with a 34 or 37 and is 15 digits long
  // Visa always has a prefix of 4 and a length of 13, 16, or 19.
  // MasterCard always has a prefix of 51, 52, 53, 54, or 55 and a length of 16.
  // Discover always has a prefix of 6011, 644-649, or 65, and a length of 16 or 19.
  // Maestro always has a prefix of 5018, 5020, 5038, or 6304, and a length of 12-19.
  // Once you've read this, go ahead and try to implement this function, then return to the console.

  //I: string
  //O: string
  var getPrefix = function(start, end) {
    var prefixList = [];
    for (var i = end; i >= start; i--) {
      prefixList.unshift(i.toString());
    }
    return prefixList;
  };

  var cardInfo = [
    {
      name: 'Diner\'s Club',
      prefix: ['38', '39'],
      cardNumLength: [14]
    },
    {
      name: 'American Express',
      prefix: ['34', '37'],
      cardNumLength: [15]
    },
    {
      name: 'MasterCard',
      prefix: ['51', '52', '53', '54', '55'],
      cardNumLength: [16]
    },
    {
      name: 'Discover',
      prefix: ['6011', '644', '645', '646', '647', '648', '649', '65'],
      cardNumLength: [16, 19]
    },
    {
      name: 'Maestro',
      prefix: ['5018', '5020', '5038', '6304'],
      cardNumLength: [12, 13, 14, 15, 16, 17, 18, 19]
    },
    {
      name: 'China UnionPay',
      prefix: [getPrefix(622126, 622925), getPrefix(624, 626), getPrefix(6282, 6288)].flat(),
      cardNumLength: [16, 17, 18, 19]
    },
    {
      name: 'Switch',
      prefix: ['4903', '4905', '4911', '4936', '564182', '633110', '6333', '6759'],
      cardNumLength: [16, 18, 19]
    },
    {
      name: 'Visa',
      prefix: ['4'],
      cardNumLength: [13, 16, 19]
    },
  ];


  for (var i = 0; i < cardInfo.length; i++) {
    for (var m = 0; m < cardInfo[i].prefix.length; m++) {
      if (cardNumber.indexOf(cardInfo[i].prefix[m]) === 0) {
        for (var j = 0; j < cardInfo[i].cardNumLength.length; j++) {
          if (cardNumber.length === cardInfo[i].cardNumLength[j]) {
            return cardInfo[i].name;
          }
        }
      }
    }
  }

  return 'Unable to recognize';

};

detectNetwork('38345678901234'); // Diner's Club
detectNetwork('39345678901234'); // Diner's Club
detectNetwork('343456789012345'); // American Express
detectNetwork('373456789012345'); // American Express
detectNetwork('4123456789012'); // Visa
detectNetwork('4123456789012345'); // Visa
detectNetwork('4123456789012345678'); // Visa
detectNetwork('5112345678901234'); // MasterCard
detectNetwork('5212345678901234'); // MasterCard
detectNetwork('5312345678901234'); // MasterCard
detectNetwork('5412345678901234'); // MasterCard
detectNetwork('5512345678901234'); // MasterCard

console.log(detectNetwork('38345678901234')); // Diner's Club
console.log(detectNetwork('39345678901234')); // Diner's Club
console.log(detectNetwork('343456789012345')); // American Express
console.log(detectNetwork('373456789012345')); // American Express
console.log(detectNetwork('4123456789012')); // Visa)
console.log(detectNetwork('4123456789012345')); // Visa
console.log(detectNetwork('4123456789012345678')); // (Visa
console.log(detectNetwork('5112345678901234')); // MasterCard
console.log(detectNetwork('5212345678901234')); // MasterCard
console.log(detectNetwork('5312345678901234')); // MasterCard
console.log(detectNetwork('5412345678901234')); // MasterCard
console.log(detectNetwork('5512345678901234')); // MasterCard
console.log(detectNetwork('6229240000000000')); //China UnionPay
console.log(detectNetwork('4903240000000000')); // Switch
console.log(detectNetwork('6229250000000000')); //China UnionPay
