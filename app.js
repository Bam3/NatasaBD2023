const preElement = document.getElementById("input-data");
function getRandomNumber() {
  let numb = null;
  do {
    numb = Math.floor(Math.random() * 200);
  } while (numb < 58 || numb > 126 || numb === 92);
  return numb;
}
let coordinates = [
  "0100 0001",
  "0101 0100",
  "1001 0010",
  "0000 0011",
  "0101 0011",
  "0000 1001",
  "0010 0011",
  "1000 0111",
  "0100 1000",
  "0111 0001",
  "0011 0000",
  "1000 0011",
  "0100 0000",
  "0001 0110",
  "0110 0011",
  "0101 0101",
  "0001 0101",
];

let coordinates2 = [
  "4°1",
  "5°4",
  "9 2",
  "0 3",
  "5 3",
  "0 9",
  "2 3",
  "8 7",
  "4 8",
  "7 1",
  "3 0",
  "8 3",
  "4 0",
  "1 6",
  "6 3",
  "5 5",
  "1 5",
];
let lenOfLine = 1400;
let inputArray = [];
let middArray = [];
let inputString = "";
for (let j = 0; j < coordinates.length; j++) {
  for (let i = 0; i < lenOfLine; i++) {
    inputString += String.fromCharCode(getRandomNumber());
  }
  middArray = inputString.split("");
  middArray.splice(Math.floor(Math.random() * lenOfLine), 0, coordinates[j]);
  inputString = middArray.join("");
  inputArray.push(inputString + "\n");
  inputString = "";
}
console.log(inputArray);
console.log(inputArray.join(""));
preElement.innerText = inputArray.join("");
