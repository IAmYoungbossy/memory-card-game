import "./App.css";
import {
  AddTransformEffect,
  removeCssClassAndSetImageData,
} from "../cssTransition/cssTransition";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { useEffect, useState } from "react";
import resetGame from "../resetGame/resetGame";
import CardContainer, { Card } from "../Card/Card";
import getAllCardsAttributes from "../pokeApi/pokeApi";
import { rearrangeCards } from "../rearrangeCards/rearrangeCards";

function App() {
  const [img, setImg] = useState([]);
  const [best, setBest] = useState(0);
  const [score, setScore] = useState(0);
  const [cardNum, setCardNum] = useState(4);
  const [gameLevel, setGameLevel] = useState(1);
  const [imageData, setImageData] = useState(img);
  const [isLoaded, setIsLoaded] = useState(false);

  const handlerMixCardRandomly = (name) => {
    const { rearrangedCards } = rearrangeCards(imageData, name);
    const { cards } = AddTransformEffect();
    removeCssClassAndSetImageData(rearrangedCards, setImageData, cards);
    resetGame(
      name,
      best,
      score,
      setImg,
      cardNum,
      setBest,
      setScore,
      imageData,
      setCardNum,
      setIsLoaded,
      setImageData,
      setGameLevel,
      getAllCardsAttributes
    );
  };

  const cards = imageData.map((img) => (
    <Card
      key={img.name}
      name={img.name}
      src={img.src}
      handleRearrangeCards={handlerMixCardRandomly.bind(null, img)}
    />
  ));

  useEffect(() => {
    const cards = imageData.flat();
    const allSelected = cards.every((card) => card.status === true);
    if (allSelected && cards.length > 0) {
      setIsLoaded(false);
      setCardNum((c) => c + 2);
      setGameLevel((c) => c + 1);
    }
  }, [imageData]);

  useEffect(() => {
    getAllCardsAttributes(setImg, setIsLoaded, setImageData, cardNum);
  }, [cardNum]);

  return (
    <div className="App">
      <Header
        score={score}
        best={best}
      />
      <p>Game level: {gameLevel}</p>
      <p>Select each card only once to test your memory</p>
      {isLoaded && <CardContainer>{cards}</CardContainer>}
      <Footer />
    </div>
  );
}

export default App;
