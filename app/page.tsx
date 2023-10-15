"use client";

import Header from "./components/Header/Header";
import Bottom from "./components/Bottom/Bottom";
import Featured from "./components/Content/Content";
import styles from "./page.module.css";
import { useEffect, useState } from "react";

export default function Home() {
  const [data, setData] = useState<any[]>([]);
  const firstNews = data.slice(0, 1);
  const otherNews = data.slice(1, 4);
  const bottomNews = data.slice(5, 9);

  useEffect(() => {
    fetch("https://api.collectapi.com/news/getNews?country=tr&tag=general", {
      method: "GET",
      headers: {
        authorization: "apikey 6TtPSVctPhdHSsoWOTT2Gt:2Cmoz8kSltyT7nGjBC9Xll",
        "content-type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => setData(data.result))
      .catch((error) => console.log(error));
  }, []);

  return (
    <main className={styles.main}>
      <Header />
      <Featured firstNews={firstNews} otherNews={otherNews} />
      <Bottom news={bottomNews} />
    </main>
  );
}
