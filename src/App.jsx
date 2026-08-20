import { Hero } from "./assets/Hero/Hero";
import { Navbar } from "./assets/Layout/Navbar";
import { Footer } from "./assets/Layout/Footer";
import { About } from "./assets/About/About";
import { Experience } from "./assets/Experience/Experience";
import { Proyects } from "./assets/Proyects/proyects";
import { Technologies } from "./assets/Technologies/Technologies";
import { Contact } from "./assets/Contact/Contact";

function App() {
  return (
    <div className="flex flex-col">
      <div id="inicio">
        <Hero />
      </div>
      <Navbar />
      <About />
      <Experience />
      <Proyects />
      <Technologies />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
