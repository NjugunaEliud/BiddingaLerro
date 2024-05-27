import ALLbidders from "./components/Allbidders";
import Banner from "./components/Banner";
import BidProduct from "./components/BidProduct";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header2 from "./components/Header2";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Top5Unique from "./components/Top5Unique";
import Winner from "./components/Winner";

export default function Home() {
  return (
    <main className=" min-h-screen">
      <Navbar />
      {/* <ALLbidders />
      <Top5Unique />
      <Winner /> */}
      <Hero />
      <BidProduct />
      {/* <Banner /> */}
      <Contact />
      <Footer />
      {/* <ScrollToTopButton /> */}
    </main>
  );
}
