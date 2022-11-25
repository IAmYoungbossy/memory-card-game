export default function resetGame(
  name,
  best,
  score,
  setBest,
  setScore,
  imageData,
  setCardNum,
  setGameOver,
  setIsLoaded,
  setImageData,
  setGameLevel,
  setUpdate,
  update
) {
  setScore(score + 1);
  if (score === best) setBest(best + 1);
  if (name.status) {
    update ? setUpdate(false) : setUpdate(true);
    setGameOver(false);
    setCardNum(4);
    setScore(0);
    setBest(best);
    setImageData(imageData);
    setIsLoaded(false);
    setGameLevel(1);
  }
}
