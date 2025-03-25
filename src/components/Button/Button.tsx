"use client";

import styles from "./Button.module.css";
import { ReactNode } from "react";
import Link from "next/link";
import Arrow from '../../../public/icons/arrow.svg'

interface ButtonProps {
  href: string;
  text: ReactNode;
  btnType: string;
  target?: string;
  download?: boolean;
  arrow?: boolean;
  disabled?: boolean;
}

export default function Button({
  href = "",
  text,
  btnType,
  target = "",
  download,
  disabled = false,
  arrow,
}: ButtonProps) {
  return (
    <button className={styles.container} disabled={disabled}>
      <Link
        href={href}
        className={`${styles.btn} ${styles[btnType]}`}
        target={target}
        download={download}
      >
        <span className={styles.dot1}></span>
        <span className={styles.dot2}></span>
        <span className={styles.dot3}></span>
        <span className={styles.dot4}></span>
        {text}
        {arrow && (
          <Arrow className={styles.icon} />
        ) }
      </Link>
    </button>
  );
}
