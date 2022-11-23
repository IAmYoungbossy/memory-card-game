import "./App.css";
import { useState } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { cardImage } from "../cardImage/cardImage";
import CardContainer, { Card } from "../Card/Card";
import { rearrangeCards } from "../rearrangeCards/rearrangeCards";
import { AddTransformEffect, setNewStates } from "../cssTransition/cssTransition";

function App() {
  const [imageData, setImageData] = useState(cardImage);
  const [score, setScore] = useState(0);
  const [best, setBest] = useState(0);

  const handlerMixCardRandomly = (name) => {
    const { rearrangedCards } = rearrangeCards(imageData, name);
    const { cards } = AddTransformEffect();
    setNewStates(
      rearrangedCards,
      setImageData,
      best,
      score,
      setBest,
      setScore,
      name,
      cards
    )
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
