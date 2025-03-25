"use client";

import styles from "./Problem.module.css";

const Problem = () => {
  const data = [
    {
      title: "(1) Slow Page Loading Times",
      description:
        "A slow website frustrates customers and leads to abandoned carts, costing you sales and damaging your brand's reputation.",
    },
    {
      title: "(2) Bad Mobile Phone Experience",
      description:
        "Many e-commerce sites struggle to deliver a seamless shopping experience on mobile devices, resulting in lost opportunities as customers shop on the go.",
    },
    {
      title: "(2) Bad Mobile Phone Experience",
      description:
        "Many e-commerce sites struggle to deliver a seamless shopping experience on mobile devices, resulting in lost opportunities as customers shop on the go.",
    },
    {
      title: "(2) Bad Mobile Phone Experience",
      description:
        "Many e-commerce sites struggle to deliver a seamless shopping experience on mobile devices, resulting in lost opportunities as customers shop on the go.",
    },
    {
      title: "(3) Complicated Checkout Process",
      description:
        "A confusing or lengthy checkout process causes potential buyers to abandon their carts, leaving revenue on the table.",
    },
    {
      title: "(2) Bad Mobile Phone Experience",
      description:
        "Many e-commerce sites struggle to deliver a seamless shopping experience on mobile devices, resulting in lost opportunities as customers shop on the go.",
    },
    {
      title: "(2) Bad Mobile Phone Experience",
      description:
        "Many e-commerce sites struggle to deliver a seamless shopping experience on mobile devices, resulting in lost opportunities as customers shop on the go.",
    },
    {
      title: "(4) Low Search Engine Visibility",
      description:
        "Without proper optimization, your website fails to rank on search engines, making it hard for potential customers to find you online.",
    },
    {
      title: "(5) Poor Inventory Management",
      description:
        "Managing products, stock levels, and updates can become overwhelming, leading to mistakes and unhappy customers.",
    },
  ];

  return (
    <section className={styles.container} id='problems'>
      <div className={styles.bottom}>
        {data.map((x, index) => (
          <div key={index} className={styles.card}>
            <h3 className={styles.title}>{x.title}</h3>
            <p className={styles.description}>{x.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Problem;
