import { AboutMe } from "./Components/AboutMe";

import { Hero } from "./Components/Hero";
import { Navbar } from "./Components/Navbar";
import { Skills } from "./Components/Skills";
import "./Styles/App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <AboutMe />
      <Skills />
    </div>
  );
}

export default App;
