import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');

const userName = readlineSync.question('May I have your name? ');
console.log(`Hello, ${userName}!`);

console.log('Answer "yes" if the number is even, otherwise answer "no".');

const evenNumbers = () => {
  for (let i = 0; i < 3; i += 1) {
    const randomNum = Math.floor(Math.random() * 50) + 1;
    console.log(`Question: ${randomNum} `);
    const userAnswer = readlineSync.question('Your answer: ');
    if ((randomNum % 2 === 0 && userAnswer === 'yes') || (randomNum % 2 !== 0 && userAnswer === 'no')) {
      console.log('Correct!');
    } else {
      const oppositeAnswer = userAnswer === 'yes' ? 'no' : 'yes';
      const gameOver = console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${oppositeAnswer}'.\n Let's try again, ${userName}!`);
      return gameOver;
    }
  }
  const gameWin = console.log(`Congratulations, ${userName}!`);
  return gameWin;
};

export default evenNumbers;
