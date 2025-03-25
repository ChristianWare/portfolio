import Impressions from "@/components/Impressions/Impressions";
import styles from "./page.module.css";
import Hero from "@/components/Hero/Hero";
import ServicesSection from "@/components/ServicesSection/ServicesSection";
import ServiceDetails from "@/components/ServiceDetails/ServiceDetails";
import Process from "@/components/Process/Process";
import Pricing from "@/components/Pricing/Pricing";
import ProjectSection from "@/components/ProjectSection/ProjectSection";
import Contact2 from "@/components/Contact2/Contact2";
import FinalCTA from "@/components/FinalCTA/FinalCTA";
import Explain from "@/components/Explain/Explain";

export default function Home() {
  return (
    <main>
      <div className={styles.scrollContainer}>
        <Hero />
        <Impressions />
        <Explain />
        <ServicesSection />
        <ServiceDetails />
        <Process />
        <Pricing />
        <ProjectSection />
        <Contact2 />
        <FinalCTA />
      </div>
    </main>
  );
}
