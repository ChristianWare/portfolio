import ContactForm from "../ContactForm/ContactForm";
import LayoutWrapper from "../LayoutWrapper";
import ServicesSectionIntro from "../ServicesSectionIntro/ServicesSectionIntro";
import styles from "./Contact2.module.css";

const cardsData = [
  { id: 1, title: "8:" },
  { id: 2, title: "Get" },
  { id: 3, title: "In Touch" },
];

export default function Contact2() {
  return (
    <section className={styles.container}>
      <ServicesSectionIntro data={cardsData} />
      <LayoutWrapper>
        <ContactForm />
      </LayoutWrapper>
    </section>
  );
}
