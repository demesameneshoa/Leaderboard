import './style.css';
import displayScores from './Modules/displayscores.js';
import { createGame, submitScore, getScores } from './Modules/api-consume.js';

const main = async () => {
  const gameData = await createGame('KungfuPanda');
  const gameId = gameData.result.split(' ')[3];

  const scoreForm = document.getElementById('score-form');
  const submitButton = document.getElementById('submit');
  submitButton.addEventListener('click', async (event) => {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const score = document.getElementById('score').value;
    await submitScore(gameId, name, score);
    scoreForm.reset();
  });

  const refreshButton = document.getElementById('refresh');
  refreshButton.addEventListener('click', async () => {
    const scoresData = await getScores(gameId);
    displayScores(scoresData.result);
  });
};

main();