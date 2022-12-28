import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');

const userName = readlineSync.question('May I have your name? ');
console.log(`Hello, ${userName}!`);

console.log('What number is missing in the progression?');

const brainProg = () => {
  for (let i = 0; i < 3; i += 1) {
    const randomNumber = Math.floor(Math.random() * 55 + 1);
    const randomStep = Math.floor(Math.random() * 5 + 1);
    const randomCryptedNumber = Math.floor(Math.random() * 10);

    let array = [];
    for (let i = randomNumber; i < 101; i += randomStep) {
      array.push(i);
    }

    array = array.slice(0, 10);
    const luckyNumber = array[randomCryptedNumber];
    array[randomCryptedNumber] = '..';
    array = array.join(' ');

    console.log(`Question: ${array}`);
    const userAnswer = Number(readlineSync.question('Your answer: '));
    if (userAnswer === luckyNumber) {
      console.log('Correct');
    } else {
      const gameOver = console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${luckyNumber}'.\n Let's try again, ${userName}!`);
      return gameOver;
    }
  }
  const gameWin = console.log(`Congratulations, ${userName}!`);
  return gameWin;
};

export default brainProg;
