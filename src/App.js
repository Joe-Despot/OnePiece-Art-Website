import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CharacterSlides from "./components/CharacterSlides";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="card--container">
        <CharacterSlides />
      </div>
    </div>
  );
}

export default App;
