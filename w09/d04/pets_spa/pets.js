// populates the unordered list with pets from the pets API

var addAllPets = function() {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'http://localhost:3000/pets');
  xhr.addEventListener('load', function() {
    var pets = JSON.parse(xhr.responseText);
    pets.forEach(function(pet) {
      addPet(pet);
    });
  });

  xhr.send();
};

addAllPets();
// adds pets to the unordered list

var addPet = function(pet) {
  var li = document.createElement('li');
  setLiToPet(li, pet);
  var ul = document.getElementById('petsList');
  ul.appendChild(li);
};

// Adds id, name, and type to each li
var setLiToPet = function(li, pet) {
  li.setAttribute('id', 'pet' + pet.id);
  li.innerHTML = "";

  var petText = pet.name + " is a " + pet.type + " ";
  var petTextNode = document.createTextNode(petText);
  li.appendChild(petTextNode);
};

var addNewPetButton = document.getElementById('addNewPet');
addNewPetButton.addEventListener('click', function() {
  var newName = document.getElementById('newPetName');
  var newType = document.getElementById('newPetType');

  var xhr = new XMLHttpRequest();
  xhr.open('POST', 'http://localhost:3000/pet');
  xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
  xhr.addEventListener('load', function() {
    var returnedPet = JSON.parse(xhr.responseText);
    addPet(returnedPet);
    newName.value = '';
    newType.value = '';
  });

  var newPet = { name: newName.value, type: newType.value };
  xhr.send(JSON.stringify(newPet));
});
