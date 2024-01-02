import Image from "next/image";
import styles from "./bottom.module.css";

const Bottom = ({ news }) => {

  return (
    <section className={styles.bottomArea}>
      {news.map((e) => (
        <div key={e.key}>
          <div className={styles.card}>
            <Image
              src={e.image}
              alt=""
              className={styles.image}
              width={100}
              height={100}
            />
            <div className={styles.cardContent}>
              <div className={styles.cardTitle}>{e.name}</div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Bottom;
