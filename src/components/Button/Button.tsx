/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { ReactNode } from "react";
import Link from "next/link";
import styles from "./Button.module.css";


interface ButtonProps {
  href: string;
  text: ReactNode;
  btnType: string;
  target?: string;
  download?: boolean;
  arrow?: boolean;
  onClick?: any;
  disabled?: boolean;
}

export default function Button({
  href = "",
  text,
  btnType,
  target = "",
  download,
  // onClick,
  disabled = false,
}: ButtonProps) {

  return (
    <button
      className={styles.container}
      // onClick={() => {
      //   if (!disabled && onClick) onClick();
      // }}
      disabled={disabled}
      // onClick={() => handleSubmit()}
      // onClick={() => handleSubmit()}
    >
      <Link
        href={href}
        className={`${styles.btn} ${styles[btnType]}`}
        target={target}
        download={download}
      >
        {text}
      </Link>
    </button>
  );
}
