import { useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import Home from "./Components/Home";
import About from "./Components/About/About";
import Portfolio from "./Components/Portfolio";
import Contact from "./Components/Contact";
import { assets } from "./assets/assets";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <main className="w-[100%] min-h-screen" >
        <Header />
        <Home />
        <Portfolio />
        <About />
        <Contact />
      </main>
    </>
  );
}

export default App;
