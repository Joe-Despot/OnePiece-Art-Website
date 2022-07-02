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
          image="../images/doflamingo-lifelessons.jpg"
          name="Donquixote Doflamingo"
          price="From $136 / person"
        />
        <Card
          image="../images/doflamingo-lifelessons.jpg"
          name="Donquixote Doflamingo"
          price="From $136 / person"
        />
        <Card
          image="../images/doflamingo-lifelessons.jpg"
          name="Donquixote Doflamingo"
          price="From $136 / person"
        />
                <Card
          image="../images/doflamingo-lifelessons.jpg"
          name="Donquixote Doflamingo"
          price="From $136 / person"
        />
                <Card
          image="../images/doflamingo-lifelessons.jpg"
          name="Donquixote Doflamingo"
          price="From $136 / person"
        />
      </div>
    </div>
  );
}

export default App;
