export default function resetGame(
  name,
  best,
  score,
  setImg,
  setBest,
  setScore,
  imageData,
  setIsLoaded,
  setImageData,
  getAllCardsAttributes
) {
  setScore(score + 1);
  if (score === best) setBest(best + 1);
  if (name.status) {
    setScore(0);
    setBest(best);
    setImageData(imageData);
    setIsLoaded(false);
    getAllCardsAttributes(setImg, setIsLoaded, setImageData);
  }
}
