import { cardImage } from "../cardImage/cardImage";

export const AddTransformEffect = (
  newArr,
  setImageData,
  best,
  score,
  setBest,
  setScore,
  name
) => {
  const cards = document.querySelectorAll(".card");
  addOrRemoveCssClass(cards, "add");
  setTimeout(() => {
    addOrRemoveCssClass(cards, "remove");
    setImageData(newArr.flat());
    resetGame(setImageData, best, score, setBest, setScore, name);
  }, 200);
};

function addOrRemoveCssClass(cards, effectType) {
  if (effectType === "add")
    cards.forEach((card) => {
      card.classList.add("remove-card");
    });
  else if (effectType === "remove")
    cards.forEach((card) => {
      card.classList.remove("remove-card");
    });
}

function resetGame(setImageData, best, score, setBest, setScore, name) {
  setScore(score + 1);
  if (score === best) setBest(best + 1);
  if (name.status) {
    setScore(0);
    setBest(best);
    setImageData(cardImage);
  }
}
