//NPM Packages
import { useState } from "react";

import play from "assets/icns/play.png";
import info from "assets/icns/info.png";
import Modal from "components/Modal";

export default function Hero({ data }) {
  //Local states
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <Modal
        element={data}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      >
        New course
      </Modal>
      <section className="bloc-title">
        <h1>{data.title}</h1>
        <h2>{data.description}</h2>
        <div className="buttons">
          <button className="btn-play" onClick={() => setIsModalOpen(true)}>
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
    </>
  );
}
