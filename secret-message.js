/*
This project transforms an array of strings into a secret message.
*/

const secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the',
  'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,',
  'Learn', 'JavaScript']

// Remove the last string of the array
secretMessage.pop()

// Check work by logging the .length
// Uncomment code below to check
// console.log(secretMessage.length);

// Add words 'to' and 'Program' to the end
secretMessage.push('to', 'Program')

// Change word 'easily' to 'right'
secretMessage[7] = 'right'

// Remove the first string of the array
secretMessage.shift()

// Add the string 'Programming' to the beginning
secretMessage.unshift('Programming')

secretMessage.splice(6, 5, 'know,')

// Print the secret message as a sentence
console.log(secretMessage.join(' '))
