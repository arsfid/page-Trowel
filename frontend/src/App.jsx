import { useState } from "react";
import { useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Home from "./landing/Home";
import Navbar from "./landing/Navbar";
import Tentang from "./landing/Tentang";

function App() {
  return (
    <>
    < Home />
    < Navbar/>
    < Tentang/>
    </>
  );
}

export default App;