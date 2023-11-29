'use strict';

// Selecting teams (drawing Champions League group stages)
// selecting POT1
const pot1T1 = document.querySelector('.pot1--team1');
const pot1T2 = document.querySelector('.pot1--team2');
const pot1T3 = document.querySelector('.pot1--team3');
const pot1T4 = document.querySelector('.pot1--team4');
const pot1T5 = document.querySelector('.pot1--team5');
const pot1T6 = document.querySelector('.pot1--team6');
const pot1T7 = document.querySelector('.pot1--team7');
const pot1T8 = document.querySelector('.pot1--team8');

// selecting POT2
const pot2T1 = document.querySelector('.pot2--team1');
const pot2T2 = document.querySelector('.pot2--team2');
const pot2T3 = document.querySelector('.pot2--team3');
const pot2T4 = document.querySelector('.pot2--team4');
const pot2T5 = document.querySelector('.pot2--team5');
const pot2T6 = document.querySelector('.pot2--team6');
const pot2T7 = document.querySelector('.pot2--team7');
const pot2T8 = document.querySelector('.pot2--team8');

// selecting POT3
const pot3T1 = document.querySelector('.pot3--team1');
const pot3T2 = document.querySelector('.pot3--team2');
const pot3T3 = document.querySelector('.pot3--team3');
const pot3T4 = document.querySelector('.pot3--team4');
const pot3T5 = document.querySelector('.pot3--team5');
const pot3T6 = document.querySelector('.pot3--team6');
const pot3T7 = document.querySelector('.pot3--team7');
const pot3T8 = document.querySelector('.pot3--team8');

// selecting POT4
const pot4T1 = document.querySelector('.pot4--team1');
const pot4T2 = document.querySelector('.pot4--team2');
const pot4T3 = document.querySelector('.pot4--team3');
const pot4T4 = document.querySelector('.pot4--team4');
const pot4T5 = document.querySelector('.pot4--team5');
const pot4T6 = document.querySelector('.pot4--team6');
const pot4T7 = document.querySelector('.pot4--team7');
const pot4T8 = document.querySelector('.pot4--team8');

// selecting group drawing buttons
const btnPot1 = document.querySelector('.btn-1');
const btnPot2 = document.querySelector('.btn-2');
const btnPot3 = document.querySelector('.btn-3');
const btnPot4 = document.querySelector('.btn-4');

// Grupy
const groups = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
let currentGroupIndex = 0;
let currentPositionInGroup = 1;

// POT 1...
let pot1Section = document.querySelector('.draw--pot1');
let pot1Images = pot1Section.querySelectorAll('img[class^="pot1--team"]');
let pot1ImagesArray = Array.from(pot1Images);

// POT 2...
let pot2Section = document.querySelector('.draw--pot2');
let pot2Images = pot2Section.querySelectorAll('img[class^="pot2--team"]');
let pot2ImagesArray = Array.from(pot2Images);

// POT 3...
let pot3Section = document.querySelector('.draw--pot3');
let pot3Images = pot3Section.querySelectorAll('img[class^="pot3--team"]');
let pot3ImagesArray = Array.from(pot3Images);

// POT 4...
let pot4Section = document.querySelector('.draw--pot4');
let pot4Images = pot4Section.querySelectorAll('img[class^="pot4--team"]');
let pot4ImagesArray = Array.from(pot4Images);

// Funkcja do przypisywania zespołu do konkretnej grupy i komórki
function updateGroupTable(group, position, selectedTeam) {
  const groupTeamImage = document.getElementById(
    'resultTeam' + group + position
  );
  groupTeamImage.src = selectedTeam.src;
}

// Ogólna funkcja do rysowania drużyn dla każdego koszyka
function drawTeamsToGroups(potImagesArray, basketNumber) {
  const drawButton = document.querySelector('.btn-' + basketNumber);

  drawButton.addEventListener('click', function () {
    if (potImagesArray.length === 0) {
      alert('Rozlosowałeś wszystkie drużyny z koszyka ' + basketNumber);
      return;
    }

    const randomIndex = Math.floor(Math.random() * potImagesArray.length);
    const selectedTeam = potImagesArray[randomIndex];

    const currentGroup = String.fromCharCode(
      'A'.charCodeAt(0) + currentGroupIndex
    );

    // Przypisz do odpowiedniej grupy i komórki
    updateGroupTable(currentGroup, currentPositionInGroup, selectedTeam);

    const removedTeamIndex = potImagesArray.indexOf(selectedTeam);
    if (removedTeamIndex !== -1) {
      potImagesArray.splice(removedTeamIndex, 1);
    }

    currentGroupIndex++;
    currentPositionInGroup++;

    if (currentPositionInGroup > 4) {
      currentPositionInGroup = 1;
    }

    if (currentGroupIndex === groups.length) {
      currentGroupIndex = 0;
    }
  });
}

// Przykład użycia dla przycisku "Draw Pot 1"
drawTeamsToGroups(pot1ImagesArray, 1);

// Przykład użycia dla przycisku "Draw Pot 2"
drawTeamsToGroups(pot2ImagesArray, 2);

// Przykład użycia dla przycisku "Draw Pot 3"
drawTeamsToGroups(pot3ImagesArray, 3);

// Przykład użycia dla przycisku "Draw Pot 4"
drawTeamsToGroups(pot4ImagesArray, 4);
