import "./Card.css";

export default function CardContainer({ children }) {
  return <div className="card-container">{children}</div>;
}

export function Card({ name, handleRearrangeCards, src }) {
  return (
    <div
      className="card append-card"
      onClick={handleRearrangeCards}
    >
      <div className="image-holder">
        <img src={src} alt={name} />
      </div>
      <div className="name-holder">
        <p>{name}</p>
      </div>
    </div>
  );
}
