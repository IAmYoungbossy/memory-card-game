export const AddTransformEffect = (newArr, setImageData) => {
  // Add remove-card class
  const cards = document.querySelectorAll(".card");
  cards.forEach((card) => {
    card.classList.add("remove-card");
  });

  // Change state 2-milli seconds after remove-card class is applied
  setTimeout(() => {
    cards.forEach((card) => {
      card.classList.remove("remove-card");
    });
    setImageData(newArr.flat());
  }, 200);
};
