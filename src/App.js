import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Cards";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="cards-container">
        <Card
          image="doflamingo-lifelessons.jpg"
          name="Donquixote Doflamingo"
          rating ="5"
        />
        <Card
          image="doflamingo-lifelessons.jpg"
          name="Donquixote Doflamingo"
          rating ="5"
        />
        <Card
          image="doflamingo-lifelessons.jpg"
          name="Donquixote Doflamingo"
          rating ="5"
        />
      </div>
    </div>
  );
}

export default App;
