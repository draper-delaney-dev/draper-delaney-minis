splitData = (result) => {
  let results = [];

  results.push(result.gameId);

  let options = [];
  options[0] = result.singlePlayer;
  options[1] = result.onlineCoop;
  options[2] = result.lanCoop;
  options[3] = result.steamCloud;
  console.log(options);
  results.push(options);

  results.push(result.languages);

  results.push(result.rating);

  let infoPanel = [];
  infoPanel[0] = result.gameTitle;
  infoPanel[1] = result.gameGenre;
  infoPanel[2] = result.developer;
  infoPanel[3] = result.publisher;
  infoPanel[4] = result.franchise;
  infoPanel[5] = result.releaseDate;
  results.push(infoPanel);

  return results;
};

module.exports.splitData = splitData;
