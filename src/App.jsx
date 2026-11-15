import "./index.css";
import { DocumentTitle } from "@/components/DocumentTitle";
import { IdentityProvider } from "@/context/IdentityContext";
import { Footer } from "@/Layout/Footer";
import { Navbar } from "@/Layout/Navbar";
import { Contact } from "@/sections/Contact";
import { Hero } from "@/sections/Hero";

function App() {
  return (
    <IdentityProvider>
      <DocumentTitle />
      <div className="relative min-h-screen overflow-x-hidden">
        <Navbar />
        <main className="relative z-10">
          <Hero />
          <Contact />
        </main>
        <Footer />
      </div>
    </IdentityProvider>
  );
}

export default App;
