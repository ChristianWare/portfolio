import styles from "./Pricing.module.css";
import LayoutWrapper from "../LayoutWrapper";
import ServicesSectionIntro from "../ServicesSectionIntro/ServicesSectionIntro";
import Thunder from "../../../public/images/thunder.jpg";
import Honey from "../../../public/images/honey.jpg";
import Chuxly from "../../../public/images/chuxly.webp";
import Solitaire from "../../../public/images/solitaire.jpg";
// import  Arrow from '../../../public/icons/arrow.svg'
import ParallaxImage from "../ParallaxImage/ParallaxImage";
import Button from "../Button/Button";

const cardsData = [
  { id: 1, title: "4:" },
  { id: 3, title: "Projects" },
];

const pricingData = [
  {
    id: 2845654656,
    title: "Thunder Trails",
    description:
      "Comprehensive e-commerce platform designed to drive sales for a Fictionl bike shop.",
    href: "https://thunder-wix.vercel.app/",
    github: "https://github.com/ChristianWare/Thunder_Wix",
    src: Thunder,
    category: "(E-Commerce)",
    includes: [
      {
        id: 27.2,
        feature: "Next.js / React",
      },
      {
        id: 27.3,
        feature: "CSS Modules",
      },
      {
        id: 27.4,
        feature: "Wix Headless CMS API",
      },
      {
        id: 27.5,
        feature: "GSAP Animations",
      },
      {
        id: 27.88888,
        feature: "Stripe Payment Gateway",
      },
    ],
  },
  {
    id: 28,
    title: "Honey Drip",
    description:
      "Comprehensive e-commerce platform designed to drive sales for a Fictionl Honey Website.",
    href: "https://golden-tau-ten.vercel.app/",
    github: "https://github.com/ChristianWare/Golden",
    src: Honey,
    category: "(E-Commerce)",
    includes: [
      {
        id: 28.2,
        feature: "Next.js / React",
      },
      {
        id: 28.3,
        feature: "CSS Modules",
      },
      {
        id: 28.4,
        feature: "Wix Headless CMS API",
      },
      {
        id: 28.5,
        feature: "GSAP Animations",
      },
      {
        id: 28.88888,
        feature: "Stripe Payment Gateway",
      },
    ],
  },
  {
    id: 29,
    title: "Chuxly",
    description:
      "Comprehensive e-commerce platform designed to drive sales for a fictional audio website.",
    href: "https://www.chuxly.com/",
    github: "https://github.com/ChristianWare/claro15",
    src: Chuxly,
    category: "(E-Commerce)",
    includes: [
      {
        id: 29.2,
        feature: "Next.js / React",
      },
      {
        id: 29.3,
        feature: "CSS Modules",
      },
      {
        id: 29.4,
        feature: "Wix Headless CMS API",
      },
      {
        id: 29.5,
        feature: "GSAP Animations",
      },
      {
        id: 29.88888,
        feature: "Stripe Payment Gateway",
      },
    ],
  },
  {
    id: 30,
    title: "Solitaire",
    description: "Classic Card game built with Typescript/Next.js.",
    href: "https://solitaire-psi.vercel.app/",
    github: "https://github.com/ChristianWare/solitaire",
    src: Solitaire,
    category: "(Card Game)",
    includes: [
      {
        id: 30.2,
        feature: "Next.js",
      },
      {
        id: 30.3,
        feature: "CSS Modules",
      },
      {
        id: 30.4,
        feature: "Drag & Drop Functionality",
      },
      {
        id: 30.5,
        feature: "Game Timer",
      },
      {
        id: 30.6,
        feature: "Game Score",
      },
    ],
  },
];

export default function Pricing() {
  return (
    <>
      <ServicesSectionIntro data={cardsData} />
      <section className={styles.container} id='projects'>
        <LayoutWrapper>
          <div className={styles.content}>
            <div className={styles.top}>
              <h3 className={styles.heading}>
                Here are some of my most recent projects:
              </h3>
            </div>
            <div className={styles.bottom}>
              <div className={styles.dataMapContainer}>
                {pricingData.map((x) => (
                  <div key={x.id} className={styles.card}>
                    <div className={styles.cardTop}>
                      <h4 className={styles.title}>{x.title}</h4>
                      <span className={styles.category}>{x.category}</span>
                    </div>
                    <p className={styles.description}>{x.description}</p>
                    <div className={styles.imgContainer}>
                      <ParallaxImage src={x.src} alt='' />
                    </div>
                    <div className={styles.cardBottom}>
                      {x.includes.map((y) => (
                        <ul key={y.id} className={styles.itemContainer}>
                          <li className={styles.item}>
                            {y.feature}
                            <span className={styles.blackDot} />
                          </li>
                        </ul>
                      ))}
                    </div>
                    <div className={styles.btnContainer}>
                      <Button
                        btnType='primary'
                        text='Live Website'
                        href={x.href}
                        arrow
                        target='blank'
                      />
                      <Button
                        btnType='secondary'
                        text='Gitgub'
                        href={x.github}
                        target='blank'
                        arrow
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </LayoutWrapper>
      </section>
    </>
  );
}
