import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');

const userName = readlineSync.question('May I have your name? ');
console.log(`Hello, ${userName}!`);

console.log('Find the greatest common divisor of given numbers');

const commonDivider = (ranNum1, ranNum2) => {
  const minNumber = Math.min(ranNum1, ranNum2);
  for (let i = minNumber; i > 0; i -= 1) {
    if (ranNum1 % i === 0 && ranNum2 % i === 0) {
      return i;
    }
  }
};

const finalResult = () => {
  for (let i = 0; i < 3; i += 1) {
    const ranNum1 = Math.floor(Math.random() * 20 + 1);
    const ranNum2 = Math.floor(Math.random() * 20 + 1);
    console.log(`What's the common divider? ${ranNum1} ${ranNum2}`);

    const userAnswer = Number(readlineSync.question('Your answer: '));
    if (commonDivider(ranNum1, ranNum2) === userAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${commonDivider(ranNum1, ranNum2)}'.\n Let's try again, ${userName}!`);
      return false;
    }
  }
  const gameWin = console.log(`Congratulations, ${userName}!`);
  return gameWin;
};

export default finalResult;
