function velgBar(barNo) {
  if (barNo.id == chosenBar) {
    chosenBar = undefined;
    inputValue = 0;
  } else {
    chosenBar = barNo.id;
    inputValue = numbers[chosenBar - 1];
    // endre.disabled = false;
  }
  console.log(inputValue);

  show();
}

function endreStolpe() {
  inputValue <= 10 && inputValue >= 1
    ? (numbers[chosenBar - 1] = inputValue)
    : alert('Ugyldig verdi. Velg en verdi fra 1 til 10');

  show();
}

function fjernStolpe() {
  numbers.splice(chosenBar - 1, 1);
  // chosenBar = undefined;
  show();
}

function leggTilStolpe() {
  inputValue <= 10 && inputValue >= 1
    ? numbers.push(inputValue)
    : 'Ugyldig verdi. Velg en verdi fra 1 til 10';

  show();
}
