import { useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import Home from "./Components/Home";
import About from "./Components/About";
import Portfolio from "./Components/Portfolio";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <main className="w-[82%] m-auto min-h-screen">
        <Header />
        <Home />
        <About />
        <Portfolio />
      </main>
    </>
  );
}

export default App;
