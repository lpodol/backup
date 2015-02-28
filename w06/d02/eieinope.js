// EIEInope
//
// For this exercise, consider "Y" to be a consonant.
//
// Write a command line application that takes one word as an argument.
// If the word has more than one vowel log "It checks out."

var string = process.argv[2]
var counter = 0
var array = []

while (counter<string.length){
  if ((string.charAt(counter)==="a") ||
    (string.charAt(counter)==="e") ||
    (string.charAt(counter)==="i") ||
    (string.charAt(counter)==="o") ||
    (string.charAt(counter)==="u")){
      array.push(string.charAt(counter))
    }
      counter ++;
  }
  if (array.length>=2){
    console.log("It checks out.")
  }else{
    console.log("Only one vowel, honey.")
  }







// Bonus:
//
// If the word has more than one vowel AND no vowels are adjacent log "It checks out", otherwise log "nope".
//
// For example, "Eat" returns "nope", "Ate" returns "It checks out"






// Bonus 2:
//
// instead of logging "It checks out", log the consonants in the word.

// var string = process.argv[2]
// var counter = 0
// var array = []
//
// while (counter<string.length){
//   if ((string.charAt(counter) !="a") &&
//     (string.charAt(counter) !="e") &&
//     (string.charAt(counter) !="i") &&
//     (string.charAt(counter) !="o") &&
//     (string.charAt(counter) !="u")){
//       array.push(string.charAt(counter))
//     }
//   counter ++;
// }
// console.log(array);
