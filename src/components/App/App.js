import "./App.css";
import {
  AddTransformEffect,
  removeCssClassAndSetImageData,
} from "../cssTransition/cssTransition";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Fragment, useEffect, useState } from "react";
import resetGame from "../resetGame/resetGame";
import CardContainer, { Card } from "../Card/Card";
import getAllCardsAttributes from "../pokeApi/pokeApi";
import { rearrangeCards } from "../rearrangeCards/rearrangeCards";
import LoadingScreen from "../LoadingScreen/LoadingScreen";

function App() {
  const [img, setImg] = useState([]);
  const [best, setBest] = useState(0);
  const [score, setScore] = useState(0);
  const [cardNum, setCardNum] = useState(4);
  const [gameLevel, setGameLevel] = useState(1);
  const [imageData, setImageData] = useState(img);
  const [isLoaded, setIsLoaded] = useState(false);
  const [gameOver, setGameOver] = useState(true);
  const [update, setUpdate] = useState(true);

  const handlerMixCardRandomly = (name) => {
    const { rearrangedCards } = rearrangeCards(imageData, name);
    const { cards } = AddTransformEffect();
    removeCssClassAndSetImageData(rearrangedCards, setImageData, cards);
    resetGame(
      name,
      best,
      score,
      setBest,
      setScore,
      imageData,
      setCardNum,
      setGameOver,
      setIsLoaded,
      setImageData,
      setGameLevel,
      setUpdate,
      update
    );
  };

  const handlerGameOverBtn = () => {
    document.querySelector(".gameOver").classList.add("remove-card");
    setTimeout(() => setGameOver(true), 200);
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
      update ? setUpdate(false) : setUpdate(true);
      setCardNum((c) => c + 2);
      setGameLevel((c) => c + 1);
    }
  }, [imageData]);

  useEffect(() => {
    getAllCardsAttributes(setImg, setIsLoaded, setImageData, cardNum);
  }, [cardNum, update]);

  return (
    <Fragment>
      {!gameOver && (
        <div className="gameOver append-card">
          <h1>Game Over!</h1>
          <p>Oops! Please try again.</p>
          <button onClick={handlerGameOverBtn}>Play Again</button>
        </div>
      )}
      {gameOver && (
        <div className="App">
          <div className="header-container">
            <Header
              score={score}
              best={best}
            />
            <p>Level: {gameLevel}</p>
          </div>
          <p>Select each card only once to test your memory</p>
          {isLoaded === false && <LoadingScreen />}
          {isLoaded && <CardContainer>{cards}</CardContainer>}
          <Footer />
        </div>
      )}
    </Fragment>
  );
}

export default App;
