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
  const bottomOtherNews = article?.slice(11, 15);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch(
          "https://newsapi.org/v2/top-headlines?country=us&category=general&apiKey=30d0fd65ad664fe18688a23a1553c980"
        );
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
      <Content firstNews={firstNews} otherNews={otherNews} />
      <Bottom news={bottomNews} />
      <Bottom news={bottomOtherNews} />
    </main>
  );
}
