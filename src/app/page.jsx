import Image from "next/image";
import Header from "../components/Header";
import Page1 from "../components/Page1";
import AboutPage from "../components/AboutPage";
import ServicePage from "../components/ServicesPage";

export default function Home() {
  return (
    <main> 
    <Header/>
    <Page1 />
    <br/>
    <AboutPage />
    <ServicePage />

    
    
      </main>
  );
}
