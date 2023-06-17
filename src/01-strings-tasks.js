// Возвращает результат конкатенации двух строк.

function concatenateStrings(value1, value2) {
  return value1 + value2;
}


// /**
//  * Returns the length of given string.
//  *
//  * @param {string} value
//  * @return {number}
//  *
//  * @example
//  *   'aaaaa' => 5
//  *   'b'     => 1
//  *   ''      => 0
//  */
function getStringLength(value) {
  return value.length;
}

// /**
//  * Returns the result of string template and given parameters firstName and lastName.
//  * Please do not use concatenation, use template string :
//  * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/template_strings
//  *
//  * @param {string} firstName
//  * @param {string} lastName
//  * @return {string}
//  *
//  * @example
//  *   'John','Doe'      => 'Hello, John Doe!'
//  *   'Chuck','Norris'  => 'Hello, Chuck Norris!'
//  */
function getStringFromTemplate(firstName, lastName) {
  return `Hello, ${firstName} ${lastName}!`;
}

// /**
//  * Extracts a name from template string 'Hello, First_Name Last_Name!'.
//  *
//  * @param {string} value
//  * @return {string}
//  *
//  * @example
//  *   'Hello, John Doe!' => 'John Doe'
//  *   'Hello, Chuck Norris!' => 'Chuck Norris'
//  */
function extractNameFromTemplate(value) {
  return value.slice(value.indexOf(',') + 1, value.length - 1).trim();
}

// /**
//  * Returns a first char of the given string.
//  *
//  * @param {string} value
//  * @return {string}
//  *
//  * @example
//  *   'John Doe'  => 'J'
//  *   'cat'       => 'c'
//  */
function getFirstChar(value) {
  return value[0];
}

// /**
//  * Removes a leading and trailing whitespace characters from string.
//  *
//  * @param {string} value
//  * @return {string}
//  *
//  * @example
//  *   '  Abracadabra'    => 'Abracadabra'
//  *   'cat'              => 'cat'
//  *   '\tHello, World! ' => 'Hello, World!'
//  */
function removeLeadingAndTrailingWhitespaces(value) {
  return value.trim();
}

// /**
//  * Returns a string that repeated the specified number of times.
//  *
//  * @param {string} value
//  * @param {string} count
//  * @return {string}
//  *
//  * @example
//  *   'A', 5  => 'AAAAA'
//  *   'cat', 3 => 'catcatcat'
//  */
function repeatString(value, count) {
  let newStr = '';
  for (let i = 0; i < count; i += 1) {
    newStr += value;
  }
  return newStr;
}


// /**
//  * Remove the first occurrence of string inside another string
//  *
//  * @param {string} str
//  * @param {string} value
//  * @return {string}
//  *
//  * @example
//  *   'To be or not to be', 'not'  => 'To be or  to be'
//  *   'I like legends', 'end' => 'I like legs',
//  *   'ABABAB','BA' => 'ABAB'
//  */
function removeFirstOccurrences(str, value) {
  return str.replace(value, '');
}

//
// /**
//  * Remove the first and last angle brackets from tag string
//  *
//  * @param {string} str
//  * @return {string}
//  *
//  * @example
//  *   '<div>' => 'div'
//  *   '<span>' => 'span'
//  *   '<a>' => 'a'
//  */
function unbracketTag(str) {
  return str.slice(1, str.length - 1);
}

// /**
//  * Converts all characters of the specified string into the upper case
//  *
//  * @param {string} str
//  * @return {string}
//  *
//  * @example
//  *   'Thunderstruck' => 'THUNDERSTRUCK'
//  *  'abcdefghijklmnopqrstuvwxyz' => 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
//  */
function convertToUpperCase(str) {
  return str.toUpperCase();
}

// /**
//  * Extracts e-mails from single string with e-mails list delimeted by semicolons
//  *
//  * @param {string} str
//  * @return {array}
//  *
//  * @example
//  *   'angus.young@gmail.com;brian.johnson@hotmail.com;bon.scott@yahoo.com'
//  *   => [
//  *      'angus.young@gmail.com',
//  *      'brian.johnson@hotmail.com',
//  *      'bon.scott@yahoo.com'
//  *   ],
//  *   'info@gmail.com' => ['info@gmail.com']
//  */
function extractEmails(str) {
  return str.split(';');
}

// /**
//  * Returns the string representation of rectangle with specified width and height
//  * using pseudograhic chars
//  *
//  * @param {number} width
//  * @param {number} height
//  * @return {string}
//  *
//  * @example
//  *
//  *            '┌────┐\n'+
//  *  (6,4) =>  '│    │\n'+
//  *            '│    │\n'+
//  *            '└────┘\n'
//  *
//  *  (2,2) =>  '┌┐\n'+
//  *            '└┘\n'
//  *
//  *             '┌──────────┐\n'+
//  *  (12,3) =>  '│          │\n'+
//  *             '└──────────┘\n'
//  *
//  */
function getRectangleString(width, height) {
  let line = '';
  let space = '';
  let resultWidthLower = '';
  let resultWidthUpper = '';
  let resultWidthLine = '';
  let resulHeight = '';
  let result = '';

  for (let i = 0; i < width - 2; i += 1) {
    line += '─';
    space += ' ';
  }

  resultWidthLower = `└${line}┘\n`;
  resultWidthUpper = `┌${line}┐\n`;
  resultWidthLine = `│${space}│`;
  for (let i = 0; i < height - 2; i += 1) {
    resulHeight += `${resultWidthLine}\n`;
  }

  result = resultWidthUpper + resulHeight + resultWidthLower;
  return result;
}
// /**
//  * Encode specified string with ROT13 cipher
//  * See details:  https://en.wikipedia.org/wiki/ROT13
//  *
//  * @param {string} str
//  * @return {string}
//  *
//  * @example
//  *
//  *   'hello' => 'uryyb'
//  *   'Why did the chicken cross the road?' => 'Jul qvq gur puvpxra pebff gur ebnq?'
//  *   'Gb trg gb gur bgure fvqr!' => 'To get to the other side!'
//  *   'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
//  *    => 'NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm'
//  *
//  */
function encodeToRot13(str) {
  const str1 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  const str2 = 'NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm';
  let newStr = '';
  let index1 = null;
  let index2 = null;
  for (let i = 0; i < str.length; i += 1) {
    index1 = str1.indexOf(str[i]);
    index2 = str2.indexOf(str[i]);
    if (index1 !== -1) {
      newStr += str2[index1];
    } else if (index2 !== -1) {
      newStr += str1[index2];
    } else if (str[i] === ' ') {
      newStr += ' ';
    } else {
      newStr += str[i];
    }
  }
  return newStr;
}

// /**
//  * Returns true if the value is string; otherwise false.
//  * @param {string} value
//  * @return {boolean}
//  *
//  * @example
//  *   isString() => false
//  *   isString(null) => false
//  *   isString([]) => false
//  *   isString({}) => false
//  *   isString('test') => true
//  *   isString(new String('test')) => true
//  */
function isString(value) {
  const str = value instanceof String ? value.valueOf() : value;
  return typeof str === 'string';
}

//
// /**
//  * Returns playid card id.
//  *
//  * Playing cards inittial deck inclides the cards in the following order:
//  *
//  *  'A♣','2♣','3♣','4♣','5♣','6♣','7♣','8♣','9♣','10♣','J♣','Q♣','K♣',
//  *  'A♦','2♦','3♦','4♦','5♦','6♦','7♦','8♦','9♦','10♦','J♦','Q♦','K♦',
//  *  'A♥','2♥','3♥','4♥','5♥','6♥','7♥','8♥','9♥','10♥','J♥','Q♥','K♥',
//  *  'A♠','2♠','3♠','4♠','5♠','6♠','7♠','8♠','9♠','10♠','J♠','Q♠','K♠'
//  *
//  * (see https://en.wikipedia.org/wiki/Standard_52-card_deck)
//  * Function returns the zero-based index of specified card in the initial deck above.
//  *
//  * @param {string} value
//  * @return {number}
//  *
//  * @example
//  *   'A♣' => 0
//  *   '2♣' => 1
//  *   '3♣' => 2
//  *     ...
//  *   'Q♠' => 50
//  *   'K♠' => 51
//  */
function getCardId(value) {
  const cards = ['A♣', '2♣', '3♣', '4♣', '5♣', '6♣', '7♣', '8♣', '9♣', '10♣', 'J♣', 'Q♣', 'K♣', 'A♦', '2♦', '3♦', '4♦', '5♦', '6♦', '7♦', '8♦', '9♦', '10♦', 'J♦', 'Q♦', 'K♦', 'A♥', '2♥', '3♥', '4♥', '5♥', '6♥', '7♥', '8♥', '9♥', '10♥', 'J♥', 'Q♥', 'K♥', 'A♠', '2♠', '3♠', '4♠', '5♠', '6♠', '7♠', '8♠', '9♠', '10♠', 'J♠', 'Q♠', 'K♠'];
  let indexReturn = null;
  cards.forEach((el, index) => {
    if (el === value) {
      indexReturn = index;
    }
  });
  return indexReturn;
}


module.exports = {
  concatenateStrings,
  getStringLength,
  getStringFromTemplate,
  extractNameFromTemplate,
  getFirstChar,
  removeLeadingAndTrailingWhitespaces,
  repeatString,
  removeFirstOccurrences,
  unbracketTag,
  convertToUpperCase,
  extractEmails,
  getRectangleString,
  encodeToRot13,
  isString,
  getCardId,
};
