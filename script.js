'use strict';

//Selecting teams (drawing Champions League group stages)
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

//selecting group drawing buttons
const btnPot1 = document.querySelector('.btn-1');
const btnPot2 = document.querySelector('.btn-2');
const btnPot3 = document.querySelector('.btn-3');
const btnPot4 = document.querySelector('.btn-4');

//DRAWING GROUPS FUNCIONALITY
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

// Grupy
let groups = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']; // Możesz dostosować ilość grup według własnych potrzeb
let currentGroupIndex = 0;

let currentPositionInGroup = 1;

// Funkcja do przypisywania zespołu do kolejnej grupy
function przypiszDoGrupy(selectedTeam) {
  // Pobierz aktualną grupę
  let currentGroup = groups[currentGroupIndex];
  // Pobieranie kontenera dla aktualnej grupy
  let groupContainer = document.querySelector(
    '.group' + currentGroup + '--table'
  );
  //Pobieranie indeksu wiersza (dla każdego koszyka inny indeks)
  let rowIndex = currentPositionInGroup;

  // Pobieranie elementów HTML dla aktualnej grupy
  let groupTeamImage = groupContainer.querySelector(
    'img[id^="resultTeam' + currentGroup + '"]'
  );
  groupTeamImage.src = selectedTeam.src;
  // Przechodzenie do następnej grupy
  currentGroupIndex++;
  currentPositionInGroup++;

  if (currentPositionInGroup > 4) {
    currentPositionInGroup = 1;
  }
  // Sprawdzenie, czy doszliśmy do ostatniej grupy
  if (currentGroupIndex === groups.length) {
    currentGroupIndex = 0; // Jeśli tak, wróć do pierwszej grupy
  }
}

// Dodanie obsługi zdarzenia dla kliknięcia przycisku
btnPot1.addEventListener('click', function () {
  // Losowanie indeksu zespołu z koszyka 1 (Pot 1)
  let randomIndex = Math.floor(Math.random() * pot1ImagesArray.length);
  // Pobierz wylosowany zespół
  let selectedTeam = pot1ImagesArray[randomIndex];
  // Wywołaj funkcję przypisującą do grupy
  przypiszDoGrupy(selectedTeam);
  // Usuń wylosowany zespół z tablicy pot1ImagesArray
  let removedTeamIndex = pot1ImagesArray.indexOf(selectedTeam);
  if (removedTeamIndex !== -1) {
    pot1ImagesArray.splice(removedTeamIndex, 1);
  }
  // Wyświetlenie alertu o tym, że wszystkie drużyny z pierwszego koszyka zostały rozlosowane (tablica jest pusta)
  if (pot1ImagesArray.length === 0) {
    alert('Rozlosowałeś wszystkie drużyny z pierwszego koszyka');
  }
});

btnPot2.addEventListener('click', function () {
  // Losowanie indeksu zespołu z koszyka 2 (Pot 2)
  let randomIndex = Math.floor(Math.random() * pot2ImagesArray.length);
  // Pobierz wylosowany zespół
  let selectedTeam = pot2ImagesArray[randomIndex];
  // Wywołaj funkcję przypisującą do grupy
  przypiszDoGrupy(selectedTeam);
  // Usuń wylosowany zespół z tablicy pot1ImagesArray
  let removedTeamIndex = pot2ImagesArray.indexOf(selectedTeam);
  if (removedTeamIndex !== -1) {
    pot2ImagesArray.splice(removedTeamIndex, 1);
  }

  // Wyświetlenie alertu o tym, że wszystkie drużyny z pierwszego koszyka zostały rozlosowane (tablica jest pusta)
  if (pot2ImagesArray.length === 0) {
    alert('Rozlosowałeś wszystkie drużyny z pierwszego koszyka');
  }
});

btnPot3.addEventListener('click', function () {
  // Losowanie indeksu zespołu z koszyka 3 (Pot 3)
  let randomIndex = Math.floor(Math.random() * pot3ImagesArray.length);
  // Pobierz wylosowany zespół
  let selectedTeam = pot3ImagesArray[randomIndex];
  // Wywołaj funkcję przypisującą do grupy
  przypiszDoGrupy(selectedTeam);
  // Usuń wylosowany zespół z tablicy pot1ImagesArray
  let removedTeamIndex = pot3ImagesArray.indexOf(selectedTeam);
  if (removedTeamIndex !== -1) {
    pot3ImagesArray.splice(removedTeamIndex, 1);
  }

  // Wyświetlenie alertu o tym, że wszystkie drużyny z pierwszego koszyka zostały rozlosowane (tablica jest pusta)
  if (pot3ImagesArray.length === 0) {
    alert('Rozlosowałeś wszystkie drużyny z pierwszego koszyka');
  }
});

btnPot4.addEventListener('click', function () {
  // Losowanie indeksu zespołu z koszyka 4 (Pot 4)
  let randomIndex = Math.floor(Math.random() * pot4ImagesArray.length);
  // Pobierz wylosowany zespół
  let selectedTeam = pot4ImagesArray[randomIndex];
  // Wywołaj funkcję przypisującą do grupy
  przypiszDoGrupy(selectedTeam);
  // Usuń wylosowany zespół z tablicy pot1ImagesArray
  let removedTeamIndex = pot4ImagesArray.indexOf(selectedTeam);
  if (removedTeamIndex !== -1) {
    pot4ImagesArray.splice(removedTeamIndex, 1);
  }

  // Wyświetlenie alertu o tym, że wszystkie drużyny z pierwszego koszyka zostały rozlosowane (tablica jest pusta)
  if (pot4ImagesArray.length === 0) {
    alert('Rozlosowałeś wszystkie drużyny z pierwszego koszyka');
  }
});
