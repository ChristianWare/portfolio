"use client";

import styles from "./Logo.module.css";
import Link from "next/link";

interface Props {
  size?: string;
  color?: string;
}

const Logo = ({ size = "", color = "" }: Props) => {
  return (
    <Link
      href='/'
      className={`${styles.logo} ${styles[size]} ${styles[color]}`}
    >
      Fonts & Footers
    </Link>
  );
};
export default Logo;
