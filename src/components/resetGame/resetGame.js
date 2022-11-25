export default function resetGame(
  name,
  best,
  score,
  setBest,
  setScore,
  imageData,
  setCardNum,
  setIsLoaded,
  setImageData,
  setGameLevel,
) {
  setScore(score + 1);
  if (score === best) setBest(best + 1);
  if (name.status) {
    setCardNum(4)
    setScore(0);
    setBest(best);
    setImageData(imageData);
    setIsLoaded(false);
    setGameLevel(1);
  }
}
