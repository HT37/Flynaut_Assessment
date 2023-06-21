// 2)longest-chain-of-letters-in-word-javascript
// const word = '00000111110101001111100001001'

const word = '00000111110101001111100001001';

let currentChainLength = 0;
let maxChainLength = 0;

for (let i = 0; i < word.length; i++) {
  // Check if the current character is a letter 1
  if (word[i] === '1') {
    // Increment the current chain length
    currentChainLength++;
    if (currentChainLength > maxChainLength) {  
      maxChainLength = currentChainLength;
    }
  } else {
    // Reset the current chain length
    currentChainLength = 0;
  }
}

console.log('Longest chain of letters:', maxChainLength);
