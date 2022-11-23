import "./Header.css";

export default function Header({ score, best }) {
  return (
    <header>
      <h1>PokeMemory!</h1>
      <GameScore
        score={score}
        best={best}
      />
    </header>
  );
}

function GameScore({ score, best }) {
  return (
    <p>
      <span className="current-score">Score: {score}</span> |{" "}
      <span className="highest-score">Best: {best}</span>
    </p>
  );
}
