import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');

const userName = readlineSync.question('May I have your name? ');
console.log(`Hello, ${userName}!`);

console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

const brainPrime = () => {
  for (let i = 0; i < 3; i += 1) {
    const randomNumber = Math.floor(Math.random() * 50 + 1);

    const isPrime = (number) => {
      if (randomNumber > 1 && randomNumber < 4) {
        return 'yes';
      } if (randomNumber === 1) {
        return 'no';
      }
      return number % 2 !== 0 && number % 3 !== 0 ? 'yes' : 'no';
    };

    console.log(`Question: ${randomNumber}`);

    const userAnswer = readlineSync.question('Your answer: ');

    if (isPrime(randomNumber) === userAnswer) {
      console.log('Correct');
    } else {
      const oppositeAnswer = userAnswer === 'yes' ? 'no' : 'yes';
      const gameOver = console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${oppositeAnswer}'.\n Let's try again, ${userName}!`);
      return gameOver;
    }
  }
  const gameWin = console.log(`Congratulations, ${userName}!`);
  return gameWin;
};

export default brainPrime;
