import "./Card.css";

export default function CardContainer({ children }) {
  return <div className="card-container">{children}</div>;
}

export function Card({ name, handleRearrangeCards }) {
  return (
    <div
      className="card"
      onClick={handleRearrangeCards}
    >
      <div className="image-holder"></div>
      <div className="name-holder">
        <p>{name}</p>
      </div>
    </div>
  );
}
