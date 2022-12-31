const preElement = document.getElementById("input-data-first");
function getRandomNumber() {
  let numb = null;
  do {
    numb = Math.floor(Math.random() * 200);
  } while (numb < 58 || numb > 126 || numb === 92);
  return numb;
}
function generateRandomNumLimits(upperLimit, lowerLimit = 0) {
  let numb = null;
  do {
    numb = Math.floor(Math.random() * upperLimit);
  } while (lowerLimit > numb || numb > upperLimit);
  return numb;
}
let coordinates = [
  "0101001",
  "0110110",
  "01011100",
  "011",
  "0110101",
  "01001",
  "010111",
  "01010111",
  "0110000",
  "01000111",
  "011110",
  "01010011",
  "0101000",
  "10000",
  "0111111",
  "0110111",
  "01111",
];
let coordinates2 = [
  "41",
  "54",
  "92",
  "03",
  "53",
  "09",
  "23",
  "87",
  "48",
  "71",
  "30",
  "83",
  "40",
  "16",
  "63",
  "55",
  "15",
];
let lenOfLine = 1987;
let inputArray = [];
let lineArray = [];
let inputString = "";
for (let j = 0; j < coordinates.length; j++) {
  for (let i = 0; i < lenOfLine; i++) {
    inputString += String.fromCharCode(getRandomNumber());
  }
  lineArray = inputString.split("");
  //split the coordinates
  let innerCoordinates = coordinates[j].split("");
  let step = Math.floor(lenOfLine / innerCoordinates.length);
  for (let i = 0; i < innerCoordinates.length; i++) {
    lineArray.splice(
      generateRandomNumLimits(i * step + step, i * step),
      0,
      innerCoordinates[i]
    );
  }
  inputString = lineArray.join("");
  inputArray.push(inputString + "\n");
  inputString = "";
}
preElement.innerText = inputArray.join("");
