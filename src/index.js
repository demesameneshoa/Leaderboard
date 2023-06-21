import './style.css';
import { displayScores } from './Modules/displayscores';
import { createGame, submitScore, getScores } from './Modules/api-consume';

const main = async () => {
  const gameData = await createGame('My Game Name');
  const gameId = gameData.result.split(' ')[3];

  const scoreForm = document.getElementsByClassName('score-form');
  const submitButton = document.getElementById('submit');
  submitButton.addEventListener('click', async (event) => {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const score = document.getElementById('score').value;

    await submitScore(gameId, name, score);
  });

  const refreshButton = document.getElementById('refresh');
  refreshButton.addEventListener('click', async () => {
    const scoresData = await getScores(gameId);
    displayScores(scoresData.result);
  });
};

main();