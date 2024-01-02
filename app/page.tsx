"use client";

import Header from "./components/Header/Header";
import Bottom from "./components/Bottom/Bottom";
import Featured from "./components/Content/Content";
import styles from "./page.module.css";
import { useEffect, useState } from "react";
import Footer from "./components/Footer/Footer";

export default function Home() {
  const [data, setData] = useState([]);
  const firstNews = data.slice(0, 1);
  const otherNews = data.slice(1, 6);
  const bottomNews = data.slice(5, 9);

  useEffect(() => {
    const news = async () => {
      await fetch(
        "https://newsapi.org/v2/top-headlines?country=us&apiKey=30d0fd65ad664fe18688a23a1553c980"
      )
        .then((response) => response.json())
        .then((data) => setData(data.articles));
    };

    news();
  }, []);

  console.log(data);

  return (
    <main className={styles.main}>
      <Header />
      <Featured firstNews={firstNews} otherNews={otherNews} />
      <Bottom news={bottomNews} />
      <Footer />
    </main>
  );
}
