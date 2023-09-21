import "./App.scss";
import Card from "./components/Card/Card";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";

function App() {
  return (
    <>
      <div className="container">
        <Header/>
        <Hero/>
        <div className="cardContainer">
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
        </div>
      </div>
    </>
  );
}

export default App;
