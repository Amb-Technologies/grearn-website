import { Inter } from "next/font/google";

import Navbar from "../Components/Navbar";
import Homesections from "../Sections/Homesections";
import Footer from "../Sections/Footer.js";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <div>
        <Navbar />
        <Homesections />
        <Footer/>
      </div>
    </>
  );
}
