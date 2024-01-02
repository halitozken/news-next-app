import Link from "next/link";
import styles from "./header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <div className={styles.logo}>
          {/* <Image src={logo} alt="" /> */}
          Bi' News
        </div>
        <div className={styles.menu}>
          <ul>
            <li>
              <Link href="/">Anasayfa</Link>
            </li>
            <li>
              <Link href="/latest">Son Haberler</Link>
            </li>
            <li>Ekonomi</li>
            <li>Spor</li>
            <li>Teknoloji</li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
