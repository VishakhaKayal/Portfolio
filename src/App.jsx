import { useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import Home from "./Components/Home";
import About from "./Components/About/About";
import Portfolio from "./Components/Portfolio";
import Contact from "./Components/Contact";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <main className="w-[82%] m-auto min-h-screen">
        <Header />
        <Home />
        <About />
        <Portfolio />
        <Contact />
      </main>
    </>
  );
}

export default App;
