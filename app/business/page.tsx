"use client";
import Image from "next/image";
import styles from "./business.module.css";
import Link from "next/link";
import { useEffect, useState } from "react";
import Header from "../components/Header/Header";

const Business = () => {
  const [article, setArticle] = useState<any[]>([]);
  const firstNews = article[0];
  const bottomNews = article?.slice(1, 5);
  const bottomOtherNews = article?.slice(6, 10);

  useEffect(() => {
    const fetchNews = async () => {
      const apikey = "5b0d4be5a4c2fbcc2fffbe32b7ff29bf";
      const category = "business";
      const url =
        "https://gnews.io/api/v4/top-headlines?category=" +
        category +
        "&lang=en&country=us&max=10&apikey=" +
        apikey;
      try {
        const response = await fetch(url);
        const data = await response.json();

        setArticle(data.articles);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchNews();
  }, []);

  return (
    <main className={styles.main}>
      <Header />
      {firstNews ? (
        <div key={firstNews.key}>
          <section className={styles.featuredNews}>
            <div className={styles.featuredImage}>
              <Image
                src={firstNews.image}
                className={styles.image}
                width={100}
                style={{ maxWidth: "100%" }}
                height={100}
                alt=""
              />
            </div>
            <div className={styles.featuredContent}>
              <h1>{firstNews.title}</h1>
              <div className={styles.featuredText}>
                <p>{firstNews.description}</p>
                <Link href={firstNews.url} target="_blank">
                  <button>READ MORE</button>
                </Link>
              </div>
            </div>
          </section>
        </div>
      ) : (
        <p>Loading...</p>
      )}

      <section className={styles.bottomArea}>
        {bottomNews.map((e) => (
          <div key={e.content} className={styles.card}>
            <Link
              href={e.url}
              target="_blank"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <img src={e.image} alt="" width={150} height={150} />
              <div className={styles.cardContent}>
                <div className={styles.cardTitle}>{e.title}</div>
              </div>
            </Link>
          </div>
        ))}
      </section>
      <section className={styles.bottomArea}>
        {bottomOtherNews.map((e) => (
          <div key={e.content} className={styles.card}>
            <Link
              href={e.url}
              target="_blank"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <img src={e.image} alt="" width={150} height={150} />
              <div className={styles.cardContent}>
                <div className={styles.cardTitle}>{e.title}</div>
              </div>
            </Link>
          </div>
        ))}
      </section>
    </main>
  );
};

export default Business;
