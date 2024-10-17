const container = document.getElementById("container");
const drawnNumbers = [];

// Creo 76 div con i numeri da 1 a 76
window.onload = () => {
  for (let i = 0; i < 90; i++) {
    const cell = document.createElement("div"); // Crea un nuovo div
    cell.innerText = i + 1; // Inserisco il numero all'interno del div
    cell.id = "cell " + (i + 1);
    cell.classList.add("cellDiv");
    container.appendChild(cell);
    // Aggiungo il div al contenitore
  }
};

//seleziono il button e lo span all'interno del quale voglio visualizzare il numero estratto
const btn = document.getElementById("newNumber");
const newRandomNumber = document.getElementById("newRandomNumber");

const createNumbers = function () {
  let isPresent = true; //inizializzo una variabile per controllare se il numero estratto fa parte della lista drawNumbers
  let num; //dichiaro num perchè se venisse dichiarata all'interno del ciclo while non sarebbe visibile al suo esterno
  while (isPresent) {
    //creo un ciclo che controlla se il numero estratto è gia stato estratto o meno
    num = Math.floor(Math.random() * 89) + 1;
    if (drawnNumbers.includes(num)) {
      isPresent = true;
    } else {
      isPresent = false;
    }
  }

  newRandomNumber.innerText = num; // inserisco il numero estratto allo span
  const selectedCell = document.getElementById("cell " + num);
  console.log("cell " + num);
  selectedCell.classList.add("backgroundCell");
  drawnNumbers.push(num);
  console.log(drawnNumbers);
};

btn.onclick = createNumbers;
