import "./App.css";
import { useState } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { cardImage } from "../cardImage/cardImage";
import CardContainer, { Card } from "../Card/Card";
import { rearrangeCards } from "../rearrangeCards/rearrangeCards";
import { AddTransformEffect } from "../cssTransition/cssTransition";

function App() {
  const [imageData, setImageData] = useState(cardImage);
  const [score, setScore] = useState(0);
  const [best, setBest] = useState(0);

  const handlerMixCardRandomly = (name) => {
    rearrangeCards(imageData, AddTransformEffect, setImageData, name);
    setScore(score + 1);
    setBest(best + 1);
    if (name.status) setScore(0);
  };

  const cards = imageData.map((name) => (
    <Card
      key={name.name}
      name={name.name}
      handleRearrangeCards={handlerMixCardRandomly.bind(null, name)}
    />
  ));

  return (
    <div className="App">
      <Header
        score={score}
        best={best}
      />
      <p>Select each card only once to test your memory</p>
      <CardContainer>{cards}</CardContainer>
      <Footer />
    </div>
  );
}

export default App;
