import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { BsFillMoonStarsFill } from "react-icons/bs";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Mr J</title>
        <meta name="description" content="Seth Medeiros" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-white px-10">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-xl"> Mr J</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill className="cursor-pointer 2-xl" />
              </li>
              <li>
                <a
                  className="bg-gradient-to-r from-black to-black text-white px-4 py-2 rounded-md ml-8"
                  href="#"
                >
                  Rap Genius
                </a>
              </li>
            </ul>
          </nav>
        </section>
      </main>
    </div>
  );
}
