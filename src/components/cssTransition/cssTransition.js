export const AddTransformEffect = () => {
  const cards = document.querySelectorAll(".card");
  addOrRemoveCssClass(cards, "add");
  return { cards };
};

export function removeCssClassAndSetImageData(
  rearrangedCards,
  setImageData,
  cards
) {
  setTimeout(() => {
    addOrRemoveCssClass(cards, "remove");
    setImageData(rearrangedCards.flat());
  }, 200);
}

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
