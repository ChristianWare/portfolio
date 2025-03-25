import LayoutWrapper from "../LayoutWrapper";
import styles from "./AboutIntro.module.css";

export default function AboutIntro() {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.content}>
          <div className={styles.left}>
            <h2 className={styles.heading}>
              Grown up stories <br /> for ambitious <br /> brands
            </h2>
          </div>
          <div className={styles.right}>
            <div className={styles.copyBox}>
              <div className={styles.copyLeft}>
                <p className={styles.copy}>
                  After almost 20 years as a copywriter, creative director,
                  brand strategist, product builder and chief storyteller, in
                  2017, I made a change. I decided to focus on what I do best -
                  words. Specifically, words that convey big ideas. Helping
                  clients define what makes them special, why their customers
                  should care -- and developing just the right words to create a
                  connection and develop trust.
                  <br />
                  <br />I made another change as well. Instead of working on
                  long term retainers, I decided to work in short, highly
                  focused sprints
                </p>
              </div>
              <div className={styles.copyRight}>
                <p className={styles.copy}>
                  where I bring the highest degree of value. This helped me stay
                  on my toes and always make sure I bring my absolute best. This
                  also helped build my reputation and create a long list of
                  satisfied clients.
                  <br />
                  <br />
                  My work has crossed almost every industry, from luxury to
                  tech, from mass market retail to boutique brands, from B2C to
                  B2B. I dont believe in formulas, copy-paste or cliches. My
                  work is always to the point, insightful and 100% fluff free.
                  More importantly, it is built for impact.
                </p>
              </div>
            </div>

            <div className={styles.copyBoxMobile}>
              <p className={styles.copy}>
                After almost 20 years as a copywriter, creative director, brand
                strategist, product builder and chief storyteller, in 2017, I
                made a change. I decided to focus on what I do best - words.
                Specifically, words that convey big ideas. Helping clients
                define what makes them special, why their customers should care
                -- and developing just the right words to create a connection
                and develop trust. I made another change as well. Instead of
                working on long term retainers, I decided to work in short,
                highly focused sprints where I bring the highest degree of
                value. This helped me stay on my toes and always make sure I
                bring my absolute best. This also helped build my reputation and
                create a long list of satisfied clients. My work has crossed
                almost every industry, from luxury to tech, from mass market
                retail to boutique brands, from B2C to B2B. I dont believe in
                formulas, copy-paste or cliches. My work is always to the point,
                insightful and 100% fluff free. More importantly, it is built
                for impact.
              </p>
            </div>
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
}
