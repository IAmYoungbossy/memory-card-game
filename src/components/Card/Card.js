import "./Card.css";

export default function CardContainer({ children }) {
  return <div className="card-container">{children}</div>;
}

export function Card() {
  return (
    <div className="card">
      <div className="image-holder"></div>
      <div className="name-holder">
        <p>trevenant</p>
      </div>
    </div>
  );
}
