import Carousel from './components/Carousel'
import Destination from "./components/Destination";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Search from "./components/Search";
import Selects from "./components/Selects";
import Footer from './components/Footer'



function App() {
  return (
    <>
      <div >
      <Navbar/>
      <Hero/>
      <Destination/>
      <Search/>
      <Selects/>
      <Carousel/>
      <Footer/>
     </div>
    </>
  
  );
}

export default App;
