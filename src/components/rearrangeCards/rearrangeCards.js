export const rearrangeCards = (imageData, name) => {
  const { imageDataCopy } = changeCardStatus(imageData, name);
  const arrayLength = imageDataCopy.length;
  const rearrangedCards = [];
  for (let i = 0; i < arrayLength; i++) {
    const ranNum = Math.floor(Math.random() * imageDataCopy.length);
    rearrangedCards.push(imageDataCopy.splice(ranNum, 1));
  }
  return { rearrangedCards };
};

function changeCardStatus(imageData, name) {
  const index = imageData.indexOf(name);
  const clickedCard = { ...name };
  clickedCard.status = true;
  const imageDataCopy = [...imageData];
  imageDataCopy[index] = clickedCard;
  return { imageDataCopy };
}
