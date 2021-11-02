//@ts-nocheck
//NPM PAckages
import { useState } from "react";

//Local imports
import { useAuth } from "state/AuthProvider";
import Modal from "components/shared/Modal";
import Thumbs from "./Thumbs";
import Thumbs10 from "./Thumbs10";
import play from "assets/icns/play.png";
import info from "assets/icns/info.png";

export default function Teacher() {
  // Global state
  const { user } = useAuth();

  //Local states
  const [isOpen, setIsOpen] = useState(false);

  const bgURL =
    "https://assets.upflix.pl/media/n/1619/2021/1uoksv2f1ocizt8xewywz27nqsr__1200_1600_r.jpg";
  return (
    <>
      <div className="hero-bg">
        <img src={bgURL} alt="bg" />
        <div className="gradient" />
      </div>

      <main className="page-home">
        <Modal type="create" isOpen={isOpen} onClose={() => setIsOpen(false)}>
          New course
        </Modal>
        <section className="bloc-title">
          <h1>The Office</h1>
          <h2>
            A mockumentary on a group of typical office workers, where the
            workday consists of ego clashes, inappropriate behavior, and tedium.
          </h2>
          <div className="buttons">
            <button className="btn-play">
              <img src={play} alt="" /> Play
            </button>
            <button className="btn-more-info">
              <img src={info} alt="" />
              More Info
            </button>
          </div>
        </section>
        <section className="hero"></section>

        <Thumbs>Series</Thumbs>
        <Thumbs>Films</Thumbs>
        <Thumbs>Documentaries</Thumbs>
        <Thumbs10 />
        {/* <div className="footer-background" /> */}
      </main>
    </>
  );
}
