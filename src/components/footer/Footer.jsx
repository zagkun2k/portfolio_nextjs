"use client";

import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";
import Link from "next/link";
const Footer = () => {
  console.log("hello");
  return (
    <div className={styles.container}>
      <div className={styles.footer}>
        @2023 GiangTruongPortfolio. All rights reserved.
      </div>
      <div className={styles.groupLink}>
        <div className={styles.imgContainer}>
          <Link href="https://www.facebook.com/kunxumita/">
            <Image
              className={styles.logo}
              src="/1.png"
              fill={true}
              alt="Facebook Link"
            />
          </Link>
        </div>
        <div className={styles.imgContainer}>
          <Link href="">
            <Image
              className={styles.logo}
              src="/2.png"
              fill={true}
              alt="Instagram Link"
            />
          </Link>
        </div>
        <div className={styles.imgContainer}>
          <Link href="">
            <Image
              className={styles.logo}
              src="/3.png"
              fill={true}
              alt="Twitter Link"
            />
          </Link>
        </div>
        <div className={styles.imgContainer}>
          <Link href="">
            <Image
              className={styles.logo}
              src="/4.png"
              fill={true}
              alt="Youtube Link"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
