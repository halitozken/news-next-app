import React from "react";
import styles from "./header.module.css";
import Image from "next/image";
import logo from "../../assets/images/logo.svg";

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <div className={styles.logo}>
          <Image src={logo} alt="" />
        </div>
        <div className={styles.menu}>
          <ul>
            <li>Home</li>
            <li>New</li>
            <li>Popular</li>
            <li>Trending</li>
            <li>Categories</li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
