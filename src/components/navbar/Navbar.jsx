"use client";

import Link from "next/link";
import React from "react";
import styles from "./navbar.module.css";
import Button from "@/components/button/Button";

const linkNavHeader = [
  {
    id: "1",
    name: "Home",
    request: "/",
  },
  {
    id: "2",
    name: "Portfolio",
    request: "/portfolio",
  },
  {
    id: "3",
    name: "Blog",
    request: "/blog",
  },
  {
    id: "4",
    name: "About",
    request: "/about",
  },
  {
    id: "5",
    name: "Contact",
    request: "/contact",
  },
  {
    id: "6",
    name: "Dashboard",
    request: "/dashboard",
  },
];

const Navbar = () => {
  return (
    <div className={styles.container}>
      <Link className={styles.logo} href="/">
        GiangTruongPortfolio
      </Link>
      <div className={styles.links}>
        {linkNavHeader.map((link) => (
          <Link className={styles.link} key={link.id} href={link.request}>
            {link.name}
          </Link>
        ))}
        <Button url="/dashboard/logout" text="Logout" />
      </div>
    </div>
  );
};

export default Navbar;
