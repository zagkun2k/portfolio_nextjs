import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Link from "next/link";
const Portfolio = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Our Works</h1>
      <h3 className={styles.option}>Choose a gallery</h3>
      <div className={styles.items}>
        <div className={styles.content}>
          <Image
            src="/illustration.png"
            alt=""
            fill={true}
            className={styles.image}
          />
          <Link href="/portfolio/illustration" className={styles.link}>
            <h1 className={styles.linkTitleIllustration}>Illustration</h1>
          </Link>
        </div>
        <div className={styles.content}>
          <Image
            src="/illustration.png"
            alt=""
            fill={true}
            className={styles.image}
          />
          <Link href="/portfolio/websites" className={styles.link}>
            <h1 className={styles.linkTitleWebsites}>Websites</h1>
          </Link>
        </div>
        <div className={styles.content}>
          <Image
            src="/illustration.png"
            alt=""
            fill={true}
            className={styles.image}
          />
          <Link href="/portfolio/applications" className={styles.link}>
            <h1 className={styles.linkTitleApplications}>Applications</h1>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
