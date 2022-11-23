import "./App.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import CardContainer, { Card } from "../Card/Card";
import { useState } from "react";

const AddTransformEffect = (newArr, setImageData) => {
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

const handleRearrangeCards = (imageData, setImageData) => {
  const imageDataCopy = [...imageData];
  const newArr = [];
  for (let i = 0; i < 5; i++) {
    const ranNum = Math.floor(Math.random() * imageDataCopy.length);
    newArr.push(imageDataCopy.splice(ranNum, 1));
  }
  AddTransformEffect(newArr, setImageData);
};

const cardImage = [
  { name: "Letam", status: false },
  { name: "Bossman", status: false },
  { name: "Barinua", status: false },
  { name: "Clematins", status: false },
  { name: "Dum", status: false },
];

function App() {
  const [imageData, setImageData] = useState(cardImage);

  const cards = imageData.map((name) => [
    <Card
      key={name.name}
      name={name.name}
      handleRearrangeCards={handleRearrangeCards.bind(
        null,
        imageData,
        setImageData
      )}
    />,
  ]);

  return (
    <div className="App">
      <Header />
      <p>Select each card only once to test your memory</p>
      <CardContainer>{cards}</CardContainer>
      <Footer />
    </div>
  );
}

export default App;
