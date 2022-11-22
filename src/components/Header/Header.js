import "./Header.css";

export default function Header() {
  return (
    <header>
      <h1>PokeMemory!</h1>
      <GameScore />
    </header>
  );
}

function GameScore() {
  return (
    <p>
      <span className="current-score">Score: 0</span> |{" "}
      <span className="highest-score">Best: 0</span>
    </p>
  );
}
