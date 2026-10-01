const form = document.getElementById('profileForm');
const nameInput = document.getElementById('nameInput');
const surnameInput = document.getElementById('surnameInput');
const ageInput = document.getElementById('ageInput');

const cardId = document.getElementById('cardId');
const cardName = document.getElementById('cardName');
const cardSurname = document.getElementById('cardSurname');
const cardAge = document.getElementById('cardAge');

function generateRandomId() {
  return '#' + Math.floor(100000 + Math.random() * 900000);
}

function updateCard(id, name, surname, age) {
  cardId.textContent = id || '#000000';
  cardName.textContent = name || '[Input Data]';
  cardSurname.textContent = surname || '[Input Data]';
  cardAge.textContent = age || '[Input Data]';
}

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const newId = generateRandomId();

  updateCard(newId, nameInput.value, surnameInput.value, ageInput.value);
  form.reset();
});