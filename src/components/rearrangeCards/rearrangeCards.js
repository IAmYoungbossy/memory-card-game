export const rearrangeCards = (
  imageData,
  AddTransformEffect,
  setImageData,
  name
) => {
  const { imageDataCopy } = changeCardStatus(imageData, name);
  const newArr = [];
  for (let i = 0; i < 5; i++) {
    const ranNum = Math.floor(Math.random() * imageDataCopy.length);
    newArr.push(imageDataCopy.splice(ranNum, 1));
  }
  AddTransformEffect(newArr, setImageData);
};

function changeCardStatus(imageData, name) {
  const index = imageData.indexOf(name);
  const clickedCard = { ...name };
  clickedCard.status = true;
  const imageDataCopy = [...imageData];
  imageDataCopy[index] = clickedCard;
  return { imageDataCopy };
}
