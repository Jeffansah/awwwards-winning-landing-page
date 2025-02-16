import React from "react";
import Hero from "./components/hero";
import About from "./components/about";
import Navbar from "./components/navbar";
import Features from "./components/features";

const App = () => {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      <Hero />
      <About />
      <Navbar />
      <Features />
    </main>
  );
};

export default App;
