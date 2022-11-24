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
      setBest,
      setScore,
      imageData,
      setIsLoaded,
      setImageData,
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
    getAllCardsAttributes(setImg, setIsLoaded, setImageData);
  }, []);

  return (
    <div className="App">
      <Header
        score={score}
        best={best}
      />
      <p>Select each card only once to test your memory</p>
      {isLoaded && <CardContainer>{cards}</CardContainer>}
      <Footer />
    </div>
  );
}

export default App;
