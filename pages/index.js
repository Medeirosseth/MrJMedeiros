import Head from "next/head";
import Image from "next/image";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { SiBandcamp } from "react-icons/si";
import {
  AiFillTwitterCircle,
  AiFillInstagram,
  youtube,
  AiFillYoutube,
} from "react-icons/ai";
import jWithBG from "../public/jWithBG.jpg";
import Alltta from "../public/Alltta.jpg";
import TBK from "../public/TBK.png";
import Procussions from "../public/Procussions.jpg";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { mainPhoto } from "../public/mainPhoto.jpg";
import "swiper/css";

//// return back to iframe or images to remove _ERR_BLOCKED_BY_CLIENT ERRORS

const YOUTUBE_PLAYLIST_ITEMS_API =
  "https://www.googleapis.com/youtube/v3/playlistItems";

export async function getServerSideProps() {
  //Alltta, Procussions, MrJ
  const [allttaRes, procussionsRes, mrJRes] = await Promise.all([
    fetch(
      `${YOUTUBE_PLAYLIST_ITEMS_API}?part=snippet&playlistId=PLF3lu5b2iqGUIbDk3k-z3AWL2HUc2hsTP&maxResults=6&key=${process.env.YOUTUBE_API_KEY}`
    ),
    fetch(
      `${YOUTUBE_PLAYLIST_ITEMS_API}?part=snippet&playlistId=PLXDcgC-3o4rokijUgx_dF_zhxEkghssT5&maxResults=6&key=${process.env.YOUTUBE_API_KEY}`
    ),
    fetch(
      `${YOUTUBE_PLAYLIST_ITEMS_API}?part=snippet&playlistId=PLM8h5dDGeAwlBBsEwZYwhujjZA-jARGAE&maxResults=6&key=${process.env.YOUTUBE_API_KEY}`
    ),
  ]);
  const [alltta, procussions, mrJ] = await Promise.all([
    allttaRes.json(),
    procussionsRes.json(),
    mrJRes.json(),
  ]);
  return {
    props: {
      alltta,
      procussions,
      mrJ,
    },
  };
}

export default function Home({ alltta, procussions, mrJ }) {
  const [darkMode, setDarkMode] = useState(false);

  console.log(alltta);
  console.log("THE PROCUSSIONS : ", procussions);
  console.log("MR J : ", mrJ);
  console.log("HELLO");
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
                  Genius
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10">
            <h2 className="text-5xl py-2 font-medium">Mr. J Medeiros</h2>
            <h3 className="text-2xl py-2">Producer | Rapper</h3>
          </div>
          <div className="text-5xl flex justify-center gap-16 py-3 text-grey-600">
            <a href="https://twitter.com/mrjmedeiros?lang=en">
              <AiFillTwitterCircle className="text-4xl" />
            </a>
            <a href="https://www.instagram.com/mrjmedeiros/">
              <AiFillInstagram className="text-4xl" />
            </a>
            <a href="https://www.youtube.com/c/mrjmedeiros">
              <AiFillYoutube className="text-4xl" />
            </a>
            <a href="https://mrjmedeiros.com/">
              <SiBandcamp className="text-4xl" />
            </a>
          </div>
          <div className="flex justify-center pt-10">
            <Image className="rounded-full w-200 h-200 " src={jWithBG} />
          </div>
        </section>
        <section>
          <div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10">
              <Swiper slidesPerView={1}>
                <SwiperSlide>
                  <div id="container-div-alltta">
                    <Image src={Alltta} width={215} height={215} />
                    <img
                      id="hand"
                      className="fade-out"
                      src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/409445/kts_demo_hand.svg"
                    />
                  </div>
                </SwiperSlide>
                {alltta.items.map((item) => {
                  const { id, snippet = {} } = item;
                  const { title, thumbnails, resourceID = {} } = snippet;
                  const { videoId = {} } = resourceID;
                  const { medium = {} } = thumbnails;
                  // const youTube = "https://www.youtube.com/watch?v=";
                  const videoSrc = `https://www.youtube.com/embed/${videoId}`;
                  return (
                    <SwiperSlide
                      key={id}
                      className="card flex flex-col justify-center"
                    >
                      <p className="flex self-center">
                        <object data={videoSrc} width="300" height="200">
                          <iframe title="video player" src={videoSrc} />
                        </object>
                      </p>
                      <h3 className="flex self-center">{title}</h3>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>
          </div>
          <div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10">
              <Swiper slidesPerView={1}>
                <SwiperSlide>
                  <Image src={Procussions} width={215} height={215} />
                </SwiperSlide>
                {procussions.items.map((item) => {
                  const { id, snippet = {} } = item;
                  const { title, thumbnails, resourceID = {} } = snippet;
                  const { videoId = {} } = resourceID;
                  const { medium = {} } = thumbnails;
                  const videoSrc = `https://www.youtube.com/embed/${videoId}`;
                  return (
                    <SwiperSlide key={id} className="card">
                      <p className="flex justify-center">
                        <object data={videoSrc} width="300" height="200">
                          <embed src={videoSrc} />
                        </object>
                      </p>
                      <h3 className="flex justify-center">{title}</h3>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>
          </div>
          <div className="text-center shadow-lg p-10 rounded-xl my-10">
            <Swiper slidesPerView={1}>
              <SwiperSlide>
                <Image alt="" src={mainPhoto} width={215} height={215} />
              </SwiperSlide>
              {mrJ.items.map((item) => {
                const { id, snippet = {} } = item;
                const { title, thumbnails, resourceID = {} } = snippet;
                const { videoId = {} } = resourceID;
                const { medium = {} } = thumbnails;
                const videoSrc = `https://www.youtube.com/embed/${videoId}`;
                return (
                  <SwiperSlide key={id} className="card">
                    <p className="flex self-center justify-center">
                      <object data={videoSrc} width="300" height="200">
                        <embed src={videoSrc} />
                      </object>
                    </p>
                    <h3 className="flex justify-center">{title}</h3>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </section>
        <section></section>
      </main>
    </div>
  );
}
