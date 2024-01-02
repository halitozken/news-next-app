"use client";
import Link from "next/link";
import styles from "./header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <div className={styles.logo}>
          <Link style={{ textDecoration: "none", color: "inherit" }} href="/">
            Bi News
          </Link>
        </div>
        <div className={styles.menu}>
          <ul>
            <li>
              <Link
                style={{ textDecoration: "none", color: "inherit" }}
                href="/"
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                style={{ textDecoration: "none", color: "inherit" }}
                href="/business"
              >
                Business
              </Link>
            </li>
            <li>
              <Link
                style={{ textDecoration: "none", color: "inherit" }}
                href="/sports"
              >
                Sports
              </Link>
            </li>
            <li>
              <Link
                style={{ textDecoration: "none", color: "inherit" }}
                href="/technology"
              >
                Technology
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
