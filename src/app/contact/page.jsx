import React from "react";
import styles from "./page.module.css";
import Button from "@/components/button/Button";
import Image from "next/image";
import Link from "next/link";

const Contact = () => {
  return (
    <div className={styles.container}>
      <div className={styles.items}>
        <h1 className={styles.title}>Let's Keep In Touch</h1>
      </div>
      <div className={styles.items}>
        <div className={styles.imageBlock}>
          <Image
            src="/contact.png"
            alt="Contact image"
            fill={true}
            className={styles.image}
          />
        </div>
        <div className={styles.form}>
          <input className={styles.textInput} type="text" placeholder="name" />
          <input className={styles.textInput} type="text" placeholder="email" />
          <textarea
            placeholder="message"
            className={styles.textarea}
            name=""
            id=""
            cols=""
            rows="5"
          ></textarea>
          <Link href="/">
            <button className={styles.button}>Send</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
