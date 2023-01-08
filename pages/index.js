import Head2 from "../components/Head2";
import Header from "../components/Header";
import Landing from "../components/Landing";
import Docs from "../components/Docs";
import Topics from "../components/Topics";
import Contact from "../components/Contact";
import Author from "../components/Author";
import Footer from "../components/Footer";
import Download from "../components/Download";
import dynamic from "next/dynamic";

function Home() {
  return (
    <div className="bg-white mainDiv">
      <Head2 />
      <Header />
      <Landing />
      <Topics />
      <Docs />
      <Download />
      <Contact />
      <Footer />
      <Author />
    </div>
  );
}

export default dynamic(() => Promise.resolve(Home), { ssr: false });
