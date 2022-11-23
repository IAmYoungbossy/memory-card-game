export const rearrangeCards = (
  imageData,
  AddTransformEffect,
  setImageData
) => {
  const imageDataCopy = [...imageData];
  const newArr = [];
  for (let i = 0; i < 5; i++) {
    const ranNum = Math.floor(Math.random() * imageDataCopy.length);
    newArr.push(imageDataCopy.splice(ranNum, 1));
  }
  AddTransformEffect(newArr, setImageData);
};
