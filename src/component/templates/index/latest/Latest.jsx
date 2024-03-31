// import Product from '@/component/madules/product/Product';
import React from "react";
import Link from "next/link";
import styles from "@/component/templates/index/latest/latest.module.css";
import { FaChevronLeft } from "react-icons/fa";
import Product from "@/component/madules/product/Product";

const Latest = () => {
  return (
    <div className={styles.container}>
      <section className={styles.title}>
        <div>
          <p id={styles.p}>اخرین محصولات</p>
          <span id={styles.span}>latest products</span>
        </div>
        <Link href="/">
          مشاهده همه
          <FaChevronLeft />
        </Link>
      </section>
      <main  className={styles.main}>
        <Product />
        <Product/>
        <Product/>
        <Product/>
        <Product/>
        <Product/>
        <Product/>
      </main>
    </div>
  );
};

export default Latest;
