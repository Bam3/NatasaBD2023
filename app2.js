let inputText = `Harry looked around as they entered. Snape had imposed his 
personality upon the room already; it was gloomier than usual, as 
curtains had been drawn over the windows, and was lit by candlelight. 
New pictures adorned the walls, many of them showing people 
who appeared to be in pain, sporting grisly injuries or strangely 
contorted body parts. Nobody spoke as they settled down, looking 
around at the shadowy, gruesome pictures.
"I have not asked you to take out your books," said Snape, closing 
the door and moving to face the class from behind his desk;
Hermione hastily dropped her copy of Confronting the Faceless back 
into her bag and stowed it under her chair. "I wish to speak to you, 
and I want your fullest attention."
His black eves roved over their upturned faces, lingering for a 
fraction of a second longer on Harry's than anyone else's.
"You have had five teachers in this subject so far, I believe."
You believe ... like you haven't watched them all come and go, 
Snape, hoping you'd be next, thought Harry scathingly.
"Naturally, these teachers will all have had their own methods 
and priorities. Given this confusion I am surprised so many of you 
scraped an O.W.L. in this subject. I shall be even more surprised if 
all of you manage to keep up with the N.E.W.T. work, which will 
be much more advanced."
Snape set off around the edge of the room, speaking now in a 
lower voice; the class craned their necks to keep him in view.
"The Dark Arts," said Snape, "are many, varied, ever-changing, 
and eternal. Fighting them is like fighting a many-headed monstet, 
which, each time a neck is severed, sprouts a head even fiercer and 
deverer than before. You are fighting that which is unfixed, mutating,
indestructible."

066`;

let alphabetUpperCase = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
let alphabetLowerCase = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
const preElementPartTwo = document.getElementById("input-data-second");
let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const key = 9;
let newIndex = 0;
let outputTextArray = [];
let inputTextArray = inputText.split("");

function getNewIndex(key, index) {
  let newIndex = key + index;
  if (newIndex > 25) {
    return newIndex - 26;
  }
  return newIndex;
}
for (let i = 0; i < inputTextArray.length; i++) {
  //search UpperCase
  let indexUpperCase = alphabetUpperCase.findIndex(
    (element) => element === inputTextArray[i]
  );
  if (indexUpperCase !== -1) {
    //replace index
    newIndex = getNewIndex(key, indexUpperCase);
    outputTextArray.push(alphabetUpperCase[newIndex]);
  } else {
    //search LowerCase
    let indexLowerCase = alphabetLowerCase.findIndex(
      (element) => element === inputTextArray[i]
    );
    if (indexLowerCase !== -1) {
      //replace index
      newIndex = getNewIndex(key, indexLowerCase);
      outputTextArray.push(alphabetLowerCase[newIndex]);
    } else {
      outputTextArray.push(inputTextArray[i]);
    }
  }
}
preElementPartTwo.innerText = outputTextArray.join("");
