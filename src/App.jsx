import "./App.scss";
import Card from "./components/Card/Card";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";



function App() {
  return (
    <>
      <div className="container">
        <Header />
        <Hero />
        <div className="cardContainer">
          <Card
            img="../public/images/image1.png"
            rating={5.0}
            reviewCount={6}
            location={"Nairobi"}
            title={"Life Lessons with Katie Zaferes"}
            price={136}
            badge="SOLD OUT"
          />
        </div>
      </div>
    </>
  );
}

export default App;
