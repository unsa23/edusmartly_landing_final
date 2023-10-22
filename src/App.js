import React from "react";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import About from "./components/about";
import Signup from "./components/signup";
import Cards from "./components/cards";
import Footer from "./components/footer";
function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Signup />
      <Cards />
      <Footer />
    </div>
  );
}

export default App;
