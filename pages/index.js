import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { BsFillMoonStarsFill } from "react-icons/bs";
import {
  AiFillTwitterCircle,
  AiFillInstagram,
  youtube,
  AiFillYoutube,
} from "react-icons/ai";
import jWithBG from "../public/jWithBG.jpg";

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
          <div className="text-center p-10">
            <h2 className="text-5xl py-2 font-medium">Mr. J Medeiros</h2>
            <h3 className="text-2xl py-2">Producer | Rapper</h3>
            <p className="text-md py-5 leading-8 text-grey-800">
              Blurb about jason
            </p>
          </div>
          <div className="text-5xl flex justify-center gap-16 py-3 text-grey-600">
            <AiFillTwitterCircle />
            <AiFillInstagram />
            <AiFillYoutube />
          </div>
          <div className="relative mx-auto bg-gradient-to-t from-white to-black rounded-full  mt-20">
            <Image className="rounded-full w-200 h-200 " src={jWithBG} />
          </div>
        </section>
      </main>
    </div>
  );
}
