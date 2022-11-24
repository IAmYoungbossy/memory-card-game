import "./App.css";
import { useEffect, useState } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import CardContainer, { Card } from "../Card/Card";
import { rearrangeCards } from "../rearrangeCards/rearrangeCards";
import {
  AddTransformEffect,
  removeCssClassAndSetImageData,
} from "../cssTransition/cssTransition";
import { Pokedex } from "pokeapi-js-wrapper";
import resetGame from "../resetGame/resetGame";

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
    resetGame(setImageData, best, score, setBest, setScore, name, imageData);
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
    const P = new Pokedex();
    const newArr = [];
    Promise.all([
      P.getPokemonByName(1),
      P.getPokemonByName(2),
      P.getPokemonByName(3),
      P.getPokemonByName(4),
    ]).then((resolve) => {
      resolve.forEach((img) => {
        newArr.push({
          status: false,
          name: img.name,
          src: img.sprites.other.dream_world.front_default,
        });
      });
      setImg(newArr);
      setIsLoaded(true);
      setImageData(newArr);
    });
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
