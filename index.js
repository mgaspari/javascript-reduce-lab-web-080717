const batteryBatches = [4, 5, 3, 4, 4, 6, 5];
var finObj = {};
const monologueLines = [
  'Who are you talking to right now?',
  'Who is it you think you see?',
  'Do you know how much I make a year?',
  'I mean, even if I told you, you wouldn\'t believe it.',
  'Do you know what would happen if I suddenly decided to stop going into work?',
  'A business big enough that it could be listed on the NASDAQ goes belly up.',
  'Disappears!',
  'It ceases to exist without me.',
  'No, you clearly don\'t know who you\'re talking to, so let me clue you in.',
  'I am not in danger, Skyler.',
  'I am the danger.',
  'A guy opens his door and gets shot and you think that of me?',
  'No.',
  'I am the one who knocks!'
];
var addBat = (total, number) => {return total + number}
var totalBatteries = batteryBatches.reduce(addBat, 0)

var getWordCount = (sentence) => {
  return sentence.split(' ').length
}

var createCountObj = (num, i, array) => {
  let count = 0
  for (let r=0; r < array.length; r++){
    if (array[r] === num){
     count += 1
   }
  }
  finObj[`${num}`] = count
}
 // return the function
var wordCountMap = getData()
function getData(){

  var countOfEachSentence = monologueLines.map(getWordCount);
  countOfEachSentence.forEach(createCountObj, this);
  return finObj
}

// In getData ask how ot pass a variable to createCountObj

// get the count for each sentence
//if that number doesn't exists, add it to the object count or create a new one
