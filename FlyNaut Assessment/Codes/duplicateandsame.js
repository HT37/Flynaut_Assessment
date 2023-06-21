// 1)find duplicate and same values in two array
// var fullWordList = ['1','2','3','4','5'];
// var wordsToRemove = ['1','2','3'];

var fullWordList = ['1', '2', '3', '4', '5'];
var wordsToRemove = ['1', '2', '3'];

var duplicates = [];
var sameValues = [];

// Iterate over the fullWordList array
for (var i = 0; i < fullWordList.length; i++) {
  var word = fullWordList[i];
  if (wordsToRemove.includes(word)) {
    duplicates.push(word);
  }
}

// Iterate over the wordsToRemove array
for (var i = 0; i < wordsToRemove.length; i++) {
  var word = wordsToRemove[i];
  if (fullWordList.includes(word)) {
    sameValues.push(word);
  }
}

console.log('Duplicates:', duplicates); 
console.log('Same Values:', sameValues); 


