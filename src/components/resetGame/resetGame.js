export default function resetGame(
  name,
  best,
  score,
  setImg,
  cardNum,
  setBest,
  setScore,
  imageData,
  setCardNum,
  setIsLoaded,
  setImageData,
  setGameLevel,
  getAllCardsAttributes
) {
  setScore(score + 1);
  if (score === best) setBest(best + 1);
  if (name.status) {
    setScore(0);
    setBest(best);
    setImageData(imageData);
    setIsLoaded(false);
    setGameLevel(1);
    setCardNum(4)
    getAllCardsAttributes(setImg, setIsLoaded, setImageData, cardNum);
  }
}
