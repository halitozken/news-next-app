"use client";

import Image from "next/image";
import web from "../../assets/images/image-web-3-desktop.jpg";
import styles from "./content.module.css";
import axios from "axios";
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
                  src={e.image}
                  width={850}
                  style={{ maxWidth: "100%" }}
                  height={450}
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

      <section className={styles.newsArea}>
        <h2>Latest</h2>
        {otherNews.map((e) => (
          <div key={e.key}>
            <div className={styles.newsItem}>
              <h3>{e.name}</h3>
              <p>{e.description}</p>
            </div>
          </div>
        ))}
      </section>
    </section>
  );
};

export default Content;
