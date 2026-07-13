import { Hero } from "./assets/Hero/Hero";
import { Proyects } from "./assets/Proyects/proyects";
import { Experience } from "./assets/Experience/Experience";
function App() {
  return (
    <main className="flex  flex-col select-none">
      <Hero />
      <Proyects />
      <Experience />
      

    </main>
  );
}

export default App;