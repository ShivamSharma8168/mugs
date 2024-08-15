import Image from "next/image";
import Header from "../components/Header";
import Page1 from "../components/Page1";
import AboutPage from "../components/AboutPage";
import ServicePage from "../components/ServicesPage";
import ProjectsPage from "../components/ProjectsPage";
import TestimonialsPage from "../components/TestimonialsPage";
import ConnectionPage from "../components/ConnectionPage";
import FooterPage from "../components/FooterPage";


export default function Home() {
  return (
    <main> 
    <Header/>
    <Page1 />
    <br/>
    <AboutPage />
    <ServicePage />
    <ProjectsPage />
    <TestimonialsPage />
    <ConnectionPage />
    <FooterPage />

    
    
      </main>
  );
}
