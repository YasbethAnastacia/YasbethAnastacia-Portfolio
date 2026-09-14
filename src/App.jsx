import { Hero } from "./assets/Hero/Hero";
import { Navbar } from "./assets/Components/Navbar";
import { Footer } from "./assets/Layout/Footer";
import { About } from "./assets/About/About";
import { Experience } from "./assets/Experience/Experience";
import { Proyects } from "./assets/Proyects/proyects";
import { Technologies } from "./assets/Technologies/Technologies";
import { Contact } from "./assets/Contact/Contact";
import { LanguageProvider } from "./Context/LanguageContext";

function App() {
    return (
        <LanguageProvider>
            <div className="flex flex-col">
                <Navbar />
                <div id="inicio">
                    <Hero />
                </div>
                <About />
                <Experience />
                <Proyects />
                <Technologies />
                <Contact />
                <Footer />
            </div>
        </LanguageProvider>
    );
}

export default App;