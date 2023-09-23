import "./App.scss";
import Card from "./components/Card/Card";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";

import cardData from "./data/cardData";

const cardElement = cardData.map((data)=>{
  return (
  <Card 
    id={data.id} 
    img={data.coverImg} 
    rating={data.stats.rating} 
    reviewCount={data.stats.reviewCount}
    location={data.location}
    title={data.title}
    price={data.price}
    badge={data.openSpots}
  />
  )
})


function App() {
  return (
    <>
      <div className="container">
        <Header />
        <Hero />
        <div className="cardContainer">
         {cardElement}
        </div>
      </div>
    </>
  );
}

export default App;
