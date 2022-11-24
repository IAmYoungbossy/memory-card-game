import { Pokedex } from "pokeapi-js-wrapper";

const P = new Pokedex();
const level = 10;

export default async function getAllCardsAttributes(
  setImg,
  setIsLoaded,
  setImageData
) {
  const newArr = [];
  const { cards } = fetchCardDetals();
  const fetchedCards = await Promise.all(cards);
  const pushCardDetails = (img) => {
    newArr.push({
      status: false,
      name: img.name,
      src: img.sprites.other.dream_world.front_default,
    });
  };
  fetchedCards.forEach(pushCardDetails);
  setImg(newArr);
  setIsLoaded(true);
  setImageData(newArr);
}

function fetchCardDetals() {
  const { idToDisplay } = getSelectedIds();
  const CardIDs = idToDisplay.flat();
  const cards = CardIDs.map((id) => P.getPokemonByName(id));
  return { cards };
}

function getSelectedIds() {
  const { idRangeToPick } = getIdRangeToPickFrom();
  const idToDisplay = [];
  for (let i = 0; i < level; i++) {
    const ranNum = Math.floor(Math.random() * idRangeToPick.length);
    idToDisplay.push(idRangeToPick.splice(ranNum, 1));
  }
  return { idToDisplay };
}

function getIdRangeToPickFrom() {
  const { rangeStart } = chooseRandNum();
  const idRangeToPick = [];
  const rangeEnd = 20
  for (let i = rangeStart; i < rangeStart + rangeEnd; i++) {
    idRangeToPick.push(i);
  }
  return { idRangeToPick };
}

function chooseRandNum() {
  const rangeStart = Math.floor(Math.random() * 629) + 1;
  return { rangeStart };
}
