import "./App.css";
import { useEffect, useState } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import CardContainer, { Card } from "../Card/Card";
import { rearrangeCards } from "../rearrangeCards/rearrangeCards";
import {
  AddTransformEffect,
  setNewStates,
} from "../cssTransition/cssTransition";
import { Pokedex } from "pokeapi-js-wrapper";

function App() {
  const [img, setImg] = useState([]);
  const [imageData, setImageData] = useState(img);
  const [score, setScore] = useState(0);
  const [best, setBest] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

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
    );
  };

  const cards = imageData.map((img) => (
    <Card
      key={img.name}
      name={img.name}
      src={img.src}
      handleRearrangeCards={handlerMixCardRandomly.bind(null, img.name)}
    />
  ));

  useEffect(() => {
    const P = new Pokedex();
    const newArr = [];
    Promise.all([
      P.getPokemonByName(3),
      P.getPokemonByName(66),
      P.getPokemonByName(32),
      P.getPokemonByName(2),
      P.getPokemonByName(42),
      P.getPokemonByName(4),
      P.getPokemonByName(16),
      P.getPokemonByName(132),
      P.getPokemonByName(44),
      P.getPokemonByName(227),
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
      setImageData(newArr)
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
