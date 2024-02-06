import Navbar from "../Navbar/Navbar";
import Banner from "./Banner";
import Faq from "./Faq";
import Pricing from "./Pricing";
import About from "./about/About";
import Footer from "../Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Banner />
      <About />
      <div className="py-10 bg-base-300/50 shadow-2xl">
        <Pricing />
      </div>
      <Faq />
      <Footer />
    </>
  );
}
