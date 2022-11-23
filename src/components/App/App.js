import "./App.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import CardContainer, { Card } from "../Card/Card";
import { useState } from "react";

function App() {
  const [imageData, setImageData] = useState([
    { name: "Letam", status: false },
    { name: "Bossman", status: false },
    { name: "Barinua", status: false },
    { name: "Clematins", status: false },
    { name: "Dum", status: false },
  ]);

  const handleRearrangeCards = () => {
    const imageDataCopy = [...imageData], newArr = [];
    for (let i = 0; i < 5; i++) {
      const ranNum = Math.floor(Math.random() * imageDataCopy.length);
      newArr.push(imageDataCopy.splice(ranNum, 1));
    }
    setImageData(newArr.flat())
  };

  const cards = imageData.map((name) => [
    <Card
      key={name.name}
      name={name.name}
      handleRearrangeCards={handleRearrangeCards}
    />,
  ]);

  return (
    <div className="App">
      <Header />
      <p>Select each card only once to test your memory</p>
      <CardContainer>{cards}</CardContainer>
      <Footer />
    </div>
  );
}

export default App;
