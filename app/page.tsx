import Image from "next/image";
import Navbar from "./component/Navbar";
import Hero from "./component/Hero";
import Feature from "./component/Feature";
import About from "./component/About";
import Footer from "./component/Footer";

export default function Home() {
  return (
    <main className="">
      <Navbar />
      <Hero />
      <Feature />
      <About />
      <Footer />
    </main>
  );
}
