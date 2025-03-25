import styles from "./OtherThings.module.css";
import LayoutWrapper from "../LayoutWrapper";
import SectionHeading from "../SectionHeading/SectionHeading";
import Image from "next/image";
import Img1 from "../../../public/images/glass.png";
import Button from "../Button/Button";

export default function OtherThings() {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.content}>
          <div className={styles.top}>
            <SectionHeading number='2' title='Fonts & Footers' />
          </div>
          <div className={styles.bottom}>
            <div className={styles.left}>
              <h3 className={styles.heading}>
                In a world where decisions are made in a matter of seconds, you
                only get one shot.
              </h3>
              <div className={styles.imgContainer}>
                <Image src={Img1} fill alt='' title='' className={styles.img} />
              </div>
            </div>
            <div className={styles.right}>
              <div className={styles.rightTop}>
                <span className={styles.span}>Partners:</span>
                <p className={styles.copy}>
                  Whether you’re targeting investors, customers or users, you
                  not only have to get to the point quickly, you have to give
                  them a reason to believe you’re about to make their lives
                  better, or at least make life itself better.
                  <br />
                  <br />
                  Strong strategic core messaging is what lies behind that
                  strong first impression.
                </p>
              </div>
              <div className={styles.rightBottom}>
                <h4 className={styles.info}>
                  Laxer partners with select strategists, storytellers,
                  designers and content creators on complex projects on a
                  per-need basis
                </h4>
                <div className={styles.btnContainer}>
                  <Button btnType='secondary' text='Work With Us' href='/' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
}
