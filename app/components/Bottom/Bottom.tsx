import Image from "next/image";
import styles from "./bottom.module.css";

const Bottom = ({ news }) => {

  console.log(news);

  return (
    <section className={styles.bottomArea}>
      {news.map((e) => (
        <div key={e.content}>
          <div className={styles.card}>
            <img src={e.urlToImage} alt="" width={100} height={105} />
            <div className={styles.cardContent}>
              <div className={styles.cardTitle}>{e.title}</div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Bottom;
