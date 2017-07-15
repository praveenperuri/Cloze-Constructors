var BasicCard = require('./BasicCard.js');
var ClozeCard = require('./ClozeCard.js');
var fs = require('fs');

function isEmpty(value) {
    return (value == null || value.length === 0);
}

function logFlashCard(logText) {
    fs.appendFile("log.txt", JSON.stringify(logText, null, 2), function (err) {
        if (err) {
            console.log(err);
        } else {
            console.log("Flash Card info logged !!");
        }
    });
}

function BasicFlashCard() {
    var flash = new BasicCard(process.argv[3].replace('"',''), process.argv[4].replace('"',''));
    logFlashCard(flash);
}

function ClozeFlashCard() {
    var flash = new ClozeCard(process.argv[3], process.argv[4]);
    logFlashCard(flash);
}

var FlashCard = function () {

    this.storeFlashCard = function () {
        console.log(process.argv);
        if (process.argv.length < 3) {
            console.log('\n Please provide flashcard type Basic/Cloze?'
                + '\n Followed by "Question" and "Answer" in quotes?'
                + '\n For Example:'
                + '\n At command line: node FlashCard.js Basic "Which year was US declared as an independent nation?" "1776"'
                + '\n or '
                + '\n At command line: node FlashCard.js Cloze "US was declared as an independent nation in the year 1776" "1776"');
        } else {
            if (!isEmpty(process.argv[2]) && !isEmpty(process.argv[3] && !isEmpty(process.argv[4]))) {
                switch (process.argv[2]) {
                    case "Basic":
                        BasicFlashCard();
                        break;
                    case "Cloze":
                        ClozeFlashCard();
                        break;
                    default:
                        console.log('Bad command line arguments !!');
                        break;
                }
            }
        }
    };
};

var fl = new FlashCard();
fl.storeFlashCard();

// var firstPresident = new BasicCard(
//     "Who was the first president of the United States?", "George Washington");

// // "Who was the first president of the United States?"
// console.log(firstPresident.front); 

// // "George Washington"
// console.log(firstPresident.back); 

// var firstPresidentCloze = new ClozeCard(
//     "George Washington was the first president of the United States.", "George Washington");

// // "George Washington"
// console.log(firstPresidentCloze.cloze); 

// // " ... was the first president of the United States.
// console.log(firstPresidentCloze.partial); 

// // "George Washington was the first president of the United States.
// console.log(firstPresidentCloze.fullText);

// // Should throw or log an error because "oops" doesn't appear in "This doesn't work"
// var brokenCloze = new ClozeCard("This doesn't work", "oops");