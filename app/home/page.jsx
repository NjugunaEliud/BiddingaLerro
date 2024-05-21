import Banner from "../components/Banner";
import BidProduct from "../components/BidProduct";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import NavBar from "../components/Navbar";


export default function Home() {
  return (
    <main className=" min-h-screen">
      <NavBar />
      {/* <ALLbidders />
      <Top5Unique />
      <Winner /> */}
      <BidProduct />
      {/* <Hero /> */}
      {/* <Banner /> */}
      <Contact />
      <Footer />
      {/* <ScrollToTopButton /> */}
    </main>
  );
}
