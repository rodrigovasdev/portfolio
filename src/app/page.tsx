import Start from "./components/Start";
import Career from "./components/Career";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
export default function Home() {
  return (
    <>
    <div className="grid grid-cols-1">
      <Start/>
      <Career/>
      <About/>
      <Contact/>
      <Footer/>
    </div>
    </>
  );
}
