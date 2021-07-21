var readlineSync = require('readline-sync');
/* Know more about the libary */

/* Take your first user Input */
var userName = readlineSync.question('What is your name ? ');
console.log(`Welcome ${userName} , Let's see How  well you Know Paul ?`);

/* take variable that will increment on each correct guess */
let count = 0;

/* Do a function to reduce the reduntancy of the code*/
function guessItMakeIt(question,answer){


  customQuestion = readlineSync.question(question.toUpperCase(), {
    trueValue: [answer.toUpperCase()],
  });
  if(customQuestion == true){
  console.log("right!");
  count = count+1
  }else{
    console.log("wrong!");
  }
  console.log(`current score ${count}`);
  console.log("---------------------------")
}

/* make array of question to make it more modular */
let questionArr = [
  {question:'Where Do I Live ? ',answer:"Kolkata"},
  {question:'My favourate Food ? ',answer:"Every Food"},
  {question:"What Sports I like the most ? ",answer:"FootBall"}
]

questionArr.map(ans => guessItMakeIt(ans.question,ans.answer))


console.log(`YAY! You SCORED: ${count}`);