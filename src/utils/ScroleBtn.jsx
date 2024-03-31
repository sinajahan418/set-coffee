"use client";
import React, { useEffect, useState } from "react";
import { MdKeyboardDoubleArrowUp } from "react-icons/md";
import styles from "@/styles/scrole.module.css";

const ScroleBtn = () => {
  const [scroleTop, setScroleTop] = useState(false);

  useEffect(() => {
    const toggleIsVisibl = () => {
      window.scrollY > 120 ? setScroleTop(true) : setScroleTop(false);
    };

    window.addEventListener("scroll", toggleIsVisibl);

    return () => window.removeEventListener("scroll", toggleIsVisibl);
  }, []);

  const scrolToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <button
      className={scroleTop ? styles.btn : styles.hidden}
      onClick={scrolToTop}
    >
      <MdKeyboardDoubleArrowUp />
    </button>
  );
};

export default ScroleBtn;
