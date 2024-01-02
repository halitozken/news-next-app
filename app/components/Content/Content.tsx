"use client";
import Image from "next/image";
import styles from "./content.module.css";
import Link from "next/link";

const Content = ({ firstNews, otherNews }) => {
  return (
    <section className={styles.container}>
      {
        firstNews.map((e) => (
          <div key={e.key}>
            <section className={styles.featuredNews}>
              <div className={styles.featuredImage}>
                <Image
                  src={e.urlToImage}
                  className={styles.image}
                  width={100}
                  style={{ maxWidth: "100%" }}
                  height={100}
                  alt=""
                />
              </div>
              <div className={styles.featuredContent}>
                <h1>{e.title}</h1>
                <div className={styles.featuredText}>
                  <p>{e.description}</p>
                  <Link href={e.url} target="_blank">
                    <button>READ MORE</button>
                  </Link>
                </div>
              </div>
            </section>
          </div>
        ))[0]
      }

      <section className={styles.newsArea}>
        <h2>Latest</h2>
        {otherNews.map((e) => (
          <div key={e.content}>
            <Link
              href={e.url}
              target="_blank"
              style={{ textDecoration: "none" }}
            >
              <div className={styles.newsItem}>
                <h3>{e.title}</h3>
              </div>
            </Link>
          </div>
        ))}
      </section>
    </section>
  );
};

export default Content;
