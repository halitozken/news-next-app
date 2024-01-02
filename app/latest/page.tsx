"use client";
import Image from "next/image";
import styles from "./latest.module.css";
import Link from "next/link";
import { useEffect, useState } from "react";
import Header from "../components/Header/Header";

const Latest = () => {
  const [data, setData] = useState<any[]>([]);

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
      <section className={styles.container}>
        {
          data.map((e) => (
            <div key={e.key}>
              <section className={styles.featuredNews}>
                <div className={styles.featuredImage}>
                  <Image
                    src={e.image}
                    className={styles.image}
                    width={100}
                    style={{ maxWidth: "100%" }}
                    height={100}
                    alt=""
                  />
                </div>
                <div className={styles.featuredContent}>
                  <h1>{e.name}</h1>
                  <div className={styles.featuredText}>
                    <p>{e.description}</p>
                    <Link href={e.url} target="_blank">
                      <button>HABERE GİT</button>
                    </Link>
                  </div>
                </div>
              </section>
            </div>
          ))[0]
        }
      </section>
    </main>
  );
};

export default Latest;
