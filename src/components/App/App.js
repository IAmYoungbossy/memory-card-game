import "./App.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import CardContainer, { Card } from "../Card/Card";
import { useState } from "react";
import { AddTransformEffect } from "../cssTransition/cssTransition";
import { cardImage } from "../cardImage/cardImage";
import { rearrangeCards } from "../rearrangeCards/rearrangeCards";

function App() {
  const [imageData, setImageData] = useState(cardImage);

  const handlerMixCardRandomly = () => {
    rearrangeCards(imageData, AddTransformEffect, setImageData);
  };

  const cards = imageData.map((name) => [
    <Card
      key={name.name}
      name={name.name}
      handleRearrangeCards={handlerMixCardRandomly}
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
