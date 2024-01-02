"use client";
import Link from "next/link";
import styles from "./header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <div className={styles.logo}>
          {/* <Image src={logo} alt="" /> */}
          Bi News
        </div>
        <div className={styles.menu}>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/latest">Latest News</Link>
            </li>
            <li>Economy</li>
            <li>Sports</li>
            <li>Technology</li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
