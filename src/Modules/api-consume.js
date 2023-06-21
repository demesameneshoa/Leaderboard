export const createGame = async (gameName) => {
  const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/';
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name: gameName }),
  };

  try {
    const response = await fetch(url, requestOptions);
    const data = await response.json();
    return data;
  } catch (error) {
    return error;
  }
};
export const submitScore = async (gameId, userName, userScore) => {
  const url = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameId}/scores/`;
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ user: userName, score: userScore }),
  };

  try {
    const response = await fetch(url, requestOptions);
    const data = await response.json();
    return data;
  } catch (error) {
    return error;
  }
};

export const getScores = async (gameId) => {
  const url = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameId}/scores/`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    return error;
  }
};
