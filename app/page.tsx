"use client";

import Header from "./components/Header/Header";
import Bottom from "./components/Bottom/Bottom";
import Content from "./components/Content/Content";
import styles from "./page.module.css";
import { useEffect, useState } from "react";


export default function Home() {
  const [article, setArticle] = useState<any[]>([]);
  const firstNews = article[0];
  const otherNews = article?.slice(1, 5);
  const bottomNews = article?.slice(6, 10);


  useEffect(() => {
    const fetchNews = async () => {
      const apikey = "5b0d4be5a4c2fbcc2fffbe32b7ff29bf";
      const url =
        "https://gnews.io/api/v4/search?q=example&lang=en&country=us&max=50&apikey=" +
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

  console.log(article);

  return (
    <main className={styles.main}>
      <Header />
      <Content firstNews={firstNews} otherNews={otherNews} />
      <Bottom news={bottomNews} />
    </main>
  );
}
