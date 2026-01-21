import { useState } from "react";
import Navbar from "./landing/Navbar";
import Home from "./landing/Home";
import Tentang from "./landing/Tentang";
import Layanan from "./landing/Layanan";
import PageTransition from "./components/PageTransition";
import LoadingIntro from "./components/LoadingIntro";

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>

      {loading && <LoadingIntro onFinish={() => setLoading(false)} />}
        
      {!loading && (
        <>
          <Navbar />

          <PageTransition>
            <Home />
            <Tentang />
            <Layanan />
          </PageTransition>
        </>
      )}
    </>
  );
}

export default App;
