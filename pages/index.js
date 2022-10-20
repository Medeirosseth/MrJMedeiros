import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { BiStoreAlt } from "react-icons/bi";
import {
  AiFillTwitterCircle,
  AiFillInstagram,
  youtube,
  AiFillYoutube,
} from "react-icons/ai";
import jWithBG from "../public/jWithBG.jpg";
import jNoBG from "../public/jNoBG.png";
import Alltta from "../public/Alltta.jpg";
import TBK from "../public/TBK.png";
import Procussions from "../public/Procussions.jpg";
import mainPhoto from "../public/mainPhoto.jpg";
import { useState } from "react";

const YOUTUBE_PLAYLIST_ITEMS_API =
  "https://www.googleapis.com/youtube/v3/playlistItems";

export async function getServerSideProps() {
  //Alltta
  const [allttaRes, procussionsRes] = await Promise.all([
    fetch(
      `${YOUTUBE_PLAYLIST_ITEMS_API}?part=snippet&playlistId=PLF3lu5b2iqGUIbDk3k-z3AWL2HUc2hsTP&maxResults=30&key=${process.env.YOUTUBE_API_KEY}`
    ),
    fetch(
      `${YOUTUBE_PLAYLIST_ITEMS_API}?part=snippet&playlistId=PLXDcgC-3o4rokijUgx_dF_zhxEkghssT5&maxResults=6&key=${process.env.YOUTUBE_API_KEY}`
    ),
  ]);
  const [alltta, procussions] = await Promise.all([
    allttaRes.json(),
    procussionsRes.json(),
  ]);
  return {
    props: {
      alltta,
      procussions,
    },
  };
}

export default function Home({ alltta, procussions }) {
  const [darkMode, setDarkMode] = useState(false);

  console.log(alltta);
  console.log("THE PROCUSSIONS : ", procussions);
  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Mr J</title>

        <meta name="description" content="Seth Medeiros" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-white px-10 dark:bg-gray-600">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-xl "> Mr J</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className="cursor-pointer 2-xl"
                />
              </li>
              <li>
                <a
                  className="bg-gradient-to-r from-yellow to-black text-black px-4 py-2 rounded-md ml-8"
                  href="https://genius.com/search?q=Mrj%20Medeiross"
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
            <a href="https://twitter.com/mrjmedeiros?lang=en">
              <AiFillTwitterCircle />
            </a>
            <a href="https://www.instagram.com/mrjmedeiros/">
              <AiFillInstagram />
            </a>
            <a href="https://www.youtube.com/c/mrjmedeiros">
              <AiFillYoutube />
            </a>
          </div>
          <div className="flex justify-center">
            <Image className="rounded-full w-200 h-200 " src={jWithBG} />
          </div>
        </section>
        <section>
          <div className="flex justify-center">
            <h3 className="text-3xl py-1">Works</h3>
          </div>
          <div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10">
              <Image src={Alltta} width={100} height={100} />
              <ui>
                {alltta.items.map((item) => {
                  const { id, snippet = {} } = item;
                  const { title, thumbnails = {} } = snippet;
                  const { medium = {} } = thumbnails;
                  return (
                    <li key={id} className="card flex flex-col justify-center">
                      <p>
                        <img
                          width={medium.width}
                          height={medium.height}
                          src={medium.url}
                        />
                      </p>
                      <h3>{title}</h3>
                    </li>
                  );
                })}
              </ui>
            </div>
          </div>
          <div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10">
              <Image src={Procussions} width={100} height={100} />

              <ui className="grid list-none grid-rows-2 text-center flex items-center">
                {procussions.items.map((item) => {
                  const { id, snippet = {} } = item;
                  const { title, thumbnails = {} } = snippet;
                  const { medium = {} } = thumbnails;
                  return (
                    <li key={id} className="card">
                      <p>
                        <img
                          width={medium.width}
                          height={medium.height}
                          src={medium.url}
                        />
                      </p>
                      <h3>{title}</h3>
                    </li>
                  );
                })}
              </ui>
            </div>
          </div>
          <div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10">
              <h3>ALLTTA</h3>
            </div>
          </div>
        </section>
        <section></section>
      </main>
    </div>
  );
}

// <div id="carouselExampleControls" class="carousel slide relative" data-bs-ride="carousel">
//   <div class="carousel-inner relative w-full overflow-hidden">
//     <div class="carousel-item active relative float-left w-full">
//       <img
//         src="https://mdbcdn.b-cdn.net/img/new/slides/041.webp"
//         class="block w-full"
//         alt="Wild Landscape"
//       />
//     </div>
//     <div class="carousel-item relative float-left w-full">
//       <img
//         src="https://mdbcdn.b-cdn.net/img/new/slides/042.webp"
//         class="block w-full"
//         alt="Camera"
//       />
//     </div>
//     <div class="carousel-item relative float-left w-full">
//       <img
//         src="https://mdbcdn.b-cdn.net/img/new/slides/043.webp"
//         class="block w-full"
//         alt="Exotic Fruits"
//       />
//     </div>
//   </div>
//   <button
//     class="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
//     type="button"
//     data-bs-target="#carouselExampleControls"
//     data-bs-slide="prev"
//   >
//     <span class="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
//     <span class="visually-hidden">Previous</span>
//   </button>
//   <button
//     class="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
//     type="button"
//     data-bs-target="#carouselExampleControls"
//     data-bs-slide="next"
//   >
//     <span class="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
//     <span class="visually-hidden">Next</span>
//   </button>
// </div>
