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
    description: "Optimize your online presence and attract more visitors.",
    href: "/services/business-websites",
    src: Thunder,
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
        feature: "Full Product Catalog",
      },
    ],
  },
  {
    id: 27,
    title: "Honey Drip",
    description: "Comprehensive e-commerce platforms designed to drive sales.",
    href: "/services/ecommerce-stores",
    src: Honey,
    category: "(E-Commerce)",
    includes: [
      {
        id: 27.2,
        feature: "Stripe Payment Gateway",
      },
      {
        id: 27.3,
        feature: "Custom coded website",
      },
      {
        id: 27.4,
        feature: "SEO Services",
      },
      {
        id: 27.5,
        feature: "24 Blog Articles/year",
      },
      {
        id: 27.6,
        feature: "Chat bot",
      },
    ],
  },
  {
    id: 28,
    title: "Chuxly",
    description: "Optimize your online presence and attract more visitors.",
    href: "/services/booking-platforms",
    src: Chuxly,
    category: "(E-Commerce)",
    includes: [
      {
        id: 28.2,
        feature: "Stripe Payment Gateway",
      },
      {
        id: 28.3,
        feature: "Custom coded website",
      },
      {
        id: 28.4,
        feature: "SEO Services",
      },
      {
        id: 28.5,
        feature: "36 Blog Articles/year",
      },
      {
        id: 28.6,
        feature: "Chat bot",
      },
    ],
    btnType: "tertiary",
  },
  {
    id: 29,
    title: "Solitaire",
    description: "Optimize your online presence and attract more visitors.",
    href: "/services/booking-platforms",
    src: Solitaire,
    category: "(Card Game)",
    includes: [
      {
        id: 29.2,
        feature: "Stripe Payment Gateway",
      },
      {
        id: 29.3,
        feature: "Custom coded website",
      },
      {
        id: 29.4,
        feature: "SEO Services",
      },
      {
        id: 29.5,
        feature: "36 Blog Articles/year",
      },
      {
        id: 29.6,
        feature: "Chat bot",
      },
    ],
    btnType: "tertiary",
  },
];

export default function Pricing() {
  return (
    <>
      <ServicesSectionIntro data={cardsData} />
      <section className={styles.container}>
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
                      <span className={styles.price}>{x.category}</span>
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
                      />
                      <Button
                        btnType='secondary'
                        text='Gitgub'
                        href={x.href}
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
