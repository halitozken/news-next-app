import styles from "./header.module.css";
import Image from "next/image";
import logo from "../../assets/images/logo.svg";

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
            <li>Ansayfa</li>
            <li>Son Haberler</li>
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
