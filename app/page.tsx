import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Music from "../components/Music";

export default function Home() {
  return (
      <main className="min-h-screen bg-black text-white">
              <Navbar />
                <Hero />
                  <About />
                    <Music />
                    </main>
                              );
                              }