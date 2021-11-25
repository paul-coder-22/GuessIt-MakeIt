var readlineSync = require('readline-sync');
const chalk = require('chalk');
/* Know more about the libary */

/* Take your first user Input */
var userName = readlineSync.question('What is your name ? ');
console.log(`Welcome ${userName} , Let's see How  well you Know Paul ?`);



/* take variable that will increment on each correct guess */
let count = 0;

/* Do a function to reduce the reduntancy of the code*/
function guessItMakeIt(question,answer,option){

   console.log(chalk.cyanBright.bold(question));
   console.log()

   option.map((e,i) => console.log(i +1 + ") " +e));

  customQuestion = readlineSync.question(chalk.magentaBright("Write your answer : "), {
    trueValue: [answer.toUpperCase()],
  });
  if(customQuestion == true){
  console.log(chalk.green.bold("✅ Right!"));
  count = count+1
  }else{
    console.log(chalk.red.bold("❌ wrong!"));
    console.log("Correct Answer : "+ chalk.green.bold(answer))
  }
  console.log(`current score ${count}`);
  console.log("---------------------------")
}

/* make array of question to make it more modular */
let questionArr = [
  {
    question:'Where Do I Live ? ',
   answer:"kolkata" ,
   option:['Delhi','Mumbai','Bangalore','kolkata']
   },
  {
    question:'My favourite Food ? ',answer:"butter chicken",
    option:['Biriyani','Butter chcike','Chciken kabab','Chciken 65']},
  {
    question:"What Sports I like the most ? ",answer:"footBall",
    option:['Swiminig','Vollyball','Cricket','Football']},
  {
    question:"What is my favourite subject ? ",answer:"math",
    option:['Science','Math','Physics','chemistry']},
  {
    question:"Which travelling place I like the most ? ",answer:"mountain",
    option:['Mountain','Sea','Forest','Desert']},
  {
    question:"What is my favourite cousine? ",answer:"italian",
    option:['Japanese','Indian','French','Italian']},
  {
    question:"What is my favourite marvel character ? ",answer:"thor",
    option:['Thor','Iron Man','Captain America','Black Widow']
  },
  {
    question:"Which Sports I like The Most ? ",answer:"nike",
    option:['Rebook','Adidas','Puma','Nike']
  },
]


questionArr.map(ans => guessItMakeIt(ans.question,ans.answer,ans.option))


console.log(`YAY! ${userName}, You Score : ${count >= 4 ? chalk.bgGreenBright(count): chalk.bgGray(count)}`);