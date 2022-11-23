import "./App.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import CardContainer, { Card } from "../Card/Card";

function App() {
  return (
    <div className="App">
      <Header />
      <p>Select each card only once to test your memory</p>
      <CardContainer>
        <Card />
      </CardContainer>
      <Footer />
    </div>
  );
}

export default App;
