export default function resetGame(
  setImageData,
  best,
  score,
  setBest,
  setScore,
  name,
  imageData
) {
  setScore(score + 1);
  if (score === best) setBest(best + 1);
  if (name.status) {
    setScore(0);
    setBest(best);
    setImageData(imageData);
  }
}
