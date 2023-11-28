let readlinesych = require('readline-sync');

let userName = readlinesych.question('May I have your name, please? ');


console.log('Hello, ' + userName + ` welcome to the quiz "How well u know about Cricket"`);

let score = 0;
function quiz(qn, answer) {
    let useranser = readlinesych.question(qn)

    if (useranser === answer) {

        console.log("right");
        score = score + 1;


    }
    else {

        console.log("wrong");


    }
}
let questions = [{
    question: "Who won the first ever Cricket World Cup in 1975 ?",
    anser: "west indies"
}, {
    question: "Who has most centuries in cricket history ?",
    anser: "Scahin tendulkar"
}, {
    question: "which team have most ICC trophies? ",
    anser: "Austrilia"
}, {
    question: "which Team won wordcup 2023 ?  ",
    anser: "Austrilia"
}, {
    question: "Who is the only batsman to record 400 runs in an international Test match ? ",
    anser: "Brian Lara"
}, {
    question: " Who did England beat in the final of the 2019 Cricket World Cup? ",
    anser: "New Zealand"
}];

let yesno = readlinesych.keyInYN("you want to play quiz");
while (yesno) {

    for (let i = 0; i < questions.length; i++) {

        let currentqn = questions[i];

        quiz(currentqn.question, currentqn.anser)
        console.log(score)


    }

    let thyknme = [{
        name: "pankaj",
        score: 6
    }, {
        name: "ganesh",
        score: 6
    }]

    if (score < thyknme[0].score) {
        console.log("u know me but not like pankaj and ganesh ")
    }
    else if (score == thyknme[0].score) {


    }
    else if (score == 0) {

        console.log("really, u know me ? ")
    }

    console.log("your final score is ", score)


    console.log("check out the people who know about Cricket =>", thyknme[0], thyknme[1]);


    return !yesno;
}


