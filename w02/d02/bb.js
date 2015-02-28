var blue = {
  "Heisenberg": "Hello, anyone home?",
  "Cap'n Cook": "Science, friend!",
  "James McGill": "Ring, ring!"
}

var ciudad = {
  "Vuente": "Salud!",
  "Gus": "One taste and you'll know.",
  "Tio": "Family is all."
}

function mergeHashes(a, b) {
  var newHash = {};

  for(var i in a) {
    newHash[i] = a[i];
  }

  for(var i in b) {
    newHash[i] = b[i];
  }

  return newHash;
}

var happyFamily = mergeHashes(blue, ciudad);
console.log(happyFamily)
