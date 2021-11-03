//@ts-nocheck
//NPM PAckages
import { useState, useEffect } from "react";

//Local imports
import { useAuth } from "state/AuthProvider";
import useFetch from "hooks/useFetch";
import Modal from "components/Modal";
import Thumbs from "./Thumbs";
import Thumbs10 from "./Thumbs10";
import play from "assets/icns/play.png";
import info from "assets/icns/info.png";
import { useTitles } from "state/TitlesProvider";
import Spinner from "components/shared/Spinner";
import BoxError from "components/shared/BoxError";
import { getCategory } from "scripts/methods";
import Player from "components/Player";

export default function Teacher() {
  // Global state
  const { user } = useAuth();
  const { dispatchTitles } = useTitles();
  const titles = useFetch("titles", dispatchTitles);
  const mockVideoURL = "https://www.youtube.com/watch?v=gO8N3L_aERg";

  const oss = titles.data[0];
  const valide = titles.data[1];
  //console.log(titles.data[1]);
  //console.log(titles.data);
  //Local states
  const [isModalOpen, setIsModalOpen] = useState(false);
  const series = getCategory(titles.data, "serie");
  const films = getCategory(titles.data, "film");
  const documentaries = getCategory(titles.data, "documentary");

  const bgURL =
    "https://assets.upflix.pl/media/n/1619/2021/1uoksv2f1ocizt8xewywz27nqsr__1200_1600_r.jpg";
  return (
    <>
      {titles.loading === true && <Spinner />}
      {titles.error !== null && <BoxError />}

      {(!titles.loading && titles.error) === null && (
        <>
          <div className="hero-bg">
            {/* <img src={bgURL} alt="bg" /> */}
            <Player initialVideo="gO8N3L_aERg" />

            <div className="gradient" />
          </div>
          <main className="page-home">
            <Modal
              element={valide}
              isOpen={isModalOpen}
              onClose={() => setIsModalOpen(false)}
            >
              New course
            </Modal>
            <section className="bloc-title">
              <h1>The Office </h1>
              <h2>
                A mockumentary on a group of typical office workers, where the
                workday consists of ego clashes, inappropriate behavior, and
                tedium.
              </h2>
              <div className="buttons">
                <button
                  className="btn-play"
                  onClick={() => setIsModalOpen(true)}
                >
                  <img src={play} alt="" /> Play
                </button>
                <button
                  className="btn-more-info"
                  onClick={() => setIsModalOpen(true)}
                >
                  <img src={info} alt="" />
                  More Info
                </button>
              </div>
            </section>
            <section className="hero"></section>

            <Thumbs data={series} category="serie">
              Series
            </Thumbs>
            <Thumbs data={films} category="film">
              Films
            </Thumbs>
            <Thumbs data={documentaries} category="serie">
              Documentaries
            </Thumbs>
            <Thumbs10 />
            {/* <div className="footer-background" /> */}
          </main>
        </>
      )}
    </>
  );
}
